# Changed — Bundle Modifications Report (Part 035 / 141)

- **Updated at**: `2026-11-25T09:40 JST`
- **Part**: `35 / 141` (**449** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 034](part-034.md) · [Part 036 →](part-036.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/214.js` (c6gaap.4d6587ec → igzsf.a0b73a5f · continued)

- **File**: `bundles/bloxd.io/chunks/js/214.js` (143 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352)

#### 117. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L750` → after: `L750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/214.js#L750) · [Before (L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/214.js#L750)

```diff
-         IB instanceof JB.c ? this.crash(XB, IB.message) : this.crash(BB, IB)
+         et instanceof qt.d ? this.crash(zt, et.message) : this.crash(tt, et)
```

#### 118. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L767` → after: `L767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/214.js#L767) · [Before (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/214.js#L767)

```diff
-         return null !== IB && (BB.chunksReceived = IB[TB.Hb.ChunksReceived], BB.chunksCancelled = this.headerView()[TB.mb.ChunksCancelled], BB.chunksStored = IB[TB.Hb.ChunksStored], BB.jobsSent = IB[TB.Hb.JobsSent], BB.jobsDone = IB[TB.Hb.JobsDone], BB.jobsInFlight = IB[TB.Hb.Job … [truncated]
+         return null !== et && (tt.chunksReceived = et[Ot.Vb.ChunksReceived], tt.chunksCancelled = this.headerView()[Ot.sb.ChunksCancelled], tt.chunksStored = et[Ot.Vb.ChunksStored], tt.jobsSent = et[Ot.Vb.JobsSent], tt.jobsDone = et[Ot.Vb.JobsDone], tt.jobsInFlight = et[Ot.Vb.Job … [truncated]
```

#### 119. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L771` → after: `L771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/214.js#L771) · [Before (L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/214.js#L771)

```diff
-         const ZB = null !== (BB = null === (IB = this.loadCountWords()) || void 0 === IB ? void 0 : IB[TB.Hb.ViewQueuedPrograms]) && void 0 !== BB ? BB : 0;
+         const Vt = null !== (tt = null === (et = this.loadCountWords()) || void 0 === et ? void 0 : et[Ot.Vb.ViewQueuedPrograms]) && void 0 !== tt ? tt : 0;
```

#### 120. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L776` → after: `L776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/214.js#L776) · [Before (L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/214.js#L776)

```diff
-         return null === ZB ? null : [ZB[TB.Hb.FirstViewLinkMs], ZB[TB.Hb.FirstViewTerrainMs], ZB[TB.Hb.FirstViewHeldMs], ZB[TB.Hb.FirstViewOtherMs], ZB[TB.Hb.FirstViewGaps], ZB[TB.Hb.FirstViewGapMs], BB, IB]
+         return null === Vt ? null : [Vt[Ot.Vb.FirstViewLinkMs], Vt[Ot.Vb.FirstViewTerrainMs], Vt[Ot.Vb.FirstViewHeldMs], Vt[Ot.Vb.FirstViewOtherMs], Vt[Ot.Vb.FirstViewGaps], Vt[Ot.Vb.FirstViewGapMs], tt, et]
```

#### 121. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L780` → after: `L780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/214.js#L780) · [Before (L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/214.js#L780)

```diff
-         const BB = this.core.Mq();
+         const tt = this.core.Zy();
```

#### 122. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L783` → after: `L783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/214.js#L783) · [Before (L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/214.js#L783)

```diff
-         return IB !== this.loadCountsBuffer && (this.loadCountsBuffer = IB, this.loadCounts = new Uint32Array(IB, BB, TB.Db)), this.loadCounts
+         return et !== this.loadCountsBuffer && (this.loadCountsBuffer = et, this.loadCounts = new Uint32Array(et, tt, Ot.Ob)), this.loadCounts
```

#### 123. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L787` → after: `L787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/214.js#L787) · [Before (L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/214.js#L787)

```diff
-         return BB !== this.headerBuffer && (this.headerBuffer = BB, this.header = new Uint32Array(BB, this.core.sF(), TB.kb)), this.header
+         return tt !== this.headerBuffer && (this.headerBuffer = tt, this.header = new Uint32Array(tt, this.core.QE(), Ot.qb)), this.header
```

#### 124. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L791` → after: `L791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/214.js#L791) · [Before (L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/214.js#L791)

```diff
-   40816: (BB, IB, ZB) => {
+   40971: (tt, et, Vt) => {
```

#### 125. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L793-L794` → after: `L793-L794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L793-L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/214.js#L793-L794) · [Before (L793-L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/214.js#L793-L794)

```diff
-       e: () => GB,
-       h: () => oB
+       d: () => mt,
+       e: () => Dt
```

#### 126. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L796` → after: `L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/214.js#L796) · [Before (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/214.js#L796)

```diff
-     var TB = ZB(4874);
+     var Ot = Vt(4851);
```

#### 127. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L817` → after: `L817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/214.js#L817) · [Before (L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/214.js#L817)

```diff
-   40860: (BB, IB, ZB) => {
+   41022: (tt, et, Vt) => {
```

#### 128. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L819` → after: `L819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/214.js#L819) · [Before (L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/214.js#L819)

```diff
-       b: () => TB
+       c: () => Ot
```

#### 129. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L827` → after: `L827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/214.js#L827) · [Before (L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/214.js#L827)

```diff
-   40876: (BB, IB, ZB) => {
+   41037: (tt, et, Vt) => {
```

#### 130. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L829` → after: `L829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/214.js#L829) · [Before (L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/214.js#L829)

```diff
-       return ZB(40878)
+       return Vt(41044)
```

#### 131. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L833` → after: `L833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/214.js#L833) · [Before (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/214.js#L833)

```diff
-       return ZB(40882)
+       return Vt(41053)
```

#### 132. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L841-L842` → after: `L841-L842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L841-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/214.js#L841-L842) · [Before (L841-L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/214.js#L841-L842)

```diff
-       e: () => TB,
-       h: () => JB
+       d: () => Ot,
+       g: () => qt
```

#### 133. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L845` → after: `L845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/214.js#L845) · [Before (L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/214.js#L845)

```diff
-   36297: (BB, IB, ZB) => {
+   36507: (tt, et, Vt) => {
```

#### 134. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L847-L850` → after: `L847-L850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L847-L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/214.js#L847-L850) · [Before (L847-L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/214.js#L847-L850)

```diff
-       c: () => vB,
-       g: () => cB,
-       h: () => GB,
-       k: () => hB
+       d: () => dt,
+       e: () => Ht,
+       i: () => mt,
+       j: () => Qt
```

#### 135. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L852-L853` → after: `L852-L853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L852-L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/214.js#L852-L853) · [Before (L852-L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/214.js#L852-L853)

```diff
-     var TB = ZB(36292),
-       JB = ZB(11);
+     var Ot = Vt(36489),
+       qt = Vt(17);
```

#### 136. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L865-L869` → after: `L865-L869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L865-L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/214.js#L865-L869) · [Before (L865-L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/214.js#L865-L869)

```diff
-         vB = (BB instanceof Error && null !== (JB = BB.stack) && void 0 !== JB ? JB : "").split("\n").filter((BB => oB.test(BB))).slice(0, 8).map((BB => BB.trim())),
-         kB = null === IB ? "wasm memory unknown" : `wasm memory ${Math.round(IB/2**20)} MB`,
-         cB = null === ZB.panic ? "" : `, panic: ${(0,TB.j)(ZB.panic)}`,
-         nB = `${GB}: ${BB instanceof Error?BB.message:String(BB)}`;
-       return `${(0,TB.m)(ZB.kind,ZB.refusedBytes)} ${nB} (${kB})${cB}${vB.length>0?` | ${vB.join(" < ")}`:""}`
+         dt = (tt instanceof Error && null !== (qt = tt.stack) && void 0 !== qt ? qt : "").split("\n").filter((tt => Dt.test(tt))).slice(0, 8).map((tt => tt.trim())),
+         jt = null === et ? "wasm memory unknown" : `wasm memory ${Math.round(et/2**20)} MB`,
+         Ht = null === Vt.panic ? "" : `, panic: ${(0,Ot.e)(Vt.panic)}`,
+         Xt = `${mt}: ${tt instanceof Error?tt.message:String(tt)}`;
+       return `${(0,Ot.j)(Vt.kind,Vt.refusedBytes)} ${Xt} (${jt})${Ht}${dt.length>0?` | ${dt.join(" < ")}`:""}`
```

#### 137. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L881` → after: `L881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/214.js#L881) · [Before (L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/214.js#L881)

```diff
-         arrayBufferDetached: (0, JB.V)(null === (IB = (0, JB.M)(ZB, "detached")) || void 0 === IB ? void 0 : IB.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
+         arrayBufferDetached: (0, qt.$)(null === (et = (0, qt.Q)(Vt, "detached")) || void 0 === et ? void 0 : et.get, /^function (get )?detached\(\) \{\s*\[native code\]\s*\}$/) ? "native" : "script"
```

#### 138. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L894` → after: `L894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/214.js#L894) · [Before (L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/214.js#L894)

```diff
-         return null !== (ZB = null === (TB = JSON.stringify(BB)) || void 0 === TB ? void 0 : TB.slice(0, nB)) && void 0 !== ZB ? ZB : IB
+         return null !== (Vt = null === (Ot = JSON.stringify(tt)) || void 0 === Ot ? void 0 : Ot.slice(0, Xt)) && void 0 !== Vt ? Vt : et
```

#### 139. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L900` → after: `L900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/214.js#L900) · [Before (L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/214.js#L900)

```diff
-   40878: (BB, IB, ZB) => {
+   41044: (tt, et, Vt) => {
```

#### 140. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L903` → after: `L903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/214.js#L903) · [Before (L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/214.js#L903)

```diff
-   40882: (BB, IB, ZB) => {
+   41053: (tt, et, Vt) => {
```

#### 141. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L906` → after: `L906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/214.js#L906) · [Before (L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/214.js#L906)

```diff
-   36292: (BB, IB, ZB) => {
+   36489: (tt, et, Vt) => {
```

#### 142. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L910-L912` → after: `L912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/214.js#L912) · [Before (L910-L912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/214.js#L910-L912)

```diff
-       j: () => kB,
-       l: () => GB,
-       m: () => JB
+       j: () => qt
```

#### 143. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L917` → after: `L917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/214.js#L917) · [Before (L917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/214.js#L917)

```diff
-       return oB(BB, IB) ? `trap=alloc_failed ${IB} bytes` : `trap=${BB}`
+       return Dt(tt, et) ? `trap=alloc_failed ${et} bytes` : `trap=${tt}`
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/215.js` (c6gaap.4d6587ec → igzsf.a0b73a5f)

- **File**: `bundles/bloxd.io/chunks/js/215.js` (49 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17)

#### 1. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/215.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/215.js#L4)

```diff
-   36516: (BB, IB, ZB) => {
+   36738: (tt, et, Vt) => {
```

#### 2. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L7-L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/215.js#L8) · [Before (L7-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/215.js#L7-L8)

```diff
-       f: () => JB,
-       h: () => oB
+       g: () => Dt
```

#### 3. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L10` → after: `L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/215.js#L10) · [Before (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/215.js#L10)

```diff
-     var TB = ZB(1860);
+     var Ot = Vt(1883);
```

#### 4. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L46` → after: `L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/215.js#L46) · [Before (L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/215.js#L46)

```diff
-         this.timeout = void 0, this.slow = void 0, this.countedSlow = !1, this.timeout = new TB.b(45e3, BB), this.slow = new TB.b(8e3, (() => {
+         this.timeout = void 0, this.slow = void 0, this.countedSlow = !1, this.timeout = new Ot.c(45e3, tt), this.slow = new Ot.c(8e3, (() => {
```

#### 5. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L67` → after: `L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/215.js#L67) · [Before (L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/215.js#L67)

```diff
-   36294: (BB, IB, ZB) => {
+   36498: (tt, et, Vt) => {
```

#### 6. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L72` → after: `L70-L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L70-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/215.js#L70-L72) · [Before (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/215.js#L72)

```diff
-       i: () => GB
+       g: () => qt,
+       j: () => Dt,
+       n: () => mt
```

#### 7. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L85` → after: `L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/215.js#L85) · [Before (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/215.js#L85)

```diff
-   36506: (BB, IB, ZB) => {
+   36720: (tt, et, Vt) => {
```

#### 8. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L88-L93` → after: `L89-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L89-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/215.js#L89-L93) · [Before (L88-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/215.js#L88-L93)

```diff
-       e: () => kB,
-       g: () => vB,
-       k: () => GB,
-       n: () => cB,
-       r: () => nB,
-       u: () => zB
+       d: () => dt,
+       f: () => mt,
+       j: () => Ht,
+       l: () => Xt,
+       o: () => lt
```

#### 9. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L95-L96` → after: `L95-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L95-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/215.js#L95-L96) · [Before (L95-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/215.js#L95-L96)

```diff
-     var TB = ZB(201);
-     const JB = 32 * ZB(36294).d,
+     var Ot = Vt(229);
+     const qt = 32 * Vt(36498).g,
```

#### 10. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L101` → after: `L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R101) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/215.js#L101) · [Before (L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/215.js#L101)

```diff
-         const BB = zB(TB.f.maxChunkHorizAddDistance + 1, TB.f.maxChunkVertAddDistance + 1);
+         const tt = lt(Ot.e.maxChunkHorizAddDistance + 1, Ot.e.maxChunkVertAddDistance + 1);
```

#### 11. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L113-L114` → after: `L113-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L113-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/215.js#L113-L114) · [Before (L113-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/215.js#L113-L114)

```diff
-       let ZB = TB.f.maxChunkHorizAddDistance,
-         JB = TB.f.maxChunkVertAddDistance;
+       let Vt = Ot.e.maxChunkHorizAddDistance,
+         qt = Ot.e.maxChunkVertAddDistance;
```

#### 12. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L138` → after: `L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/215.js#L138) · [Before (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/215.js#L138)

```diff
-       return BB === IB ? oB + TB * TB <= BB * BB : BB > IB ? Math.abs(TB) <= IB && oB + TB * TB <= BB * BB : oB <= BB * BB && oB + TB * TB <= IB * IB
+       return tt === et ? Dt + Ot * Ot <= tt * tt : tt > et ? Math.abs(Ot) <= et && Dt + Ot * Ot <= tt * tt : Dt <= tt * tt && Dt + Ot * Ot <= et * et
```

#### 13. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L141` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/215.js#L141) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/215.js#L141)

```diff
-   36501: (BB, IB, ZB) => {
+   36715: (tt, et, Vt) => {
```

#### 14. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L143` → after: `L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/215.js#L143) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/215.js#L143)

```diff
-       d: () => dB,
+       b: () => Jt,
```

#### 15. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L145-L147` → after: `L145-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L145-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/215.js#L145-L147) · [Before (L145-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/215.js#L145-L147)

```diff
-       h: () => aB,
-       l: () => pB,
-       o: () => iB
+       g: () => Rt,
+       i: () => ct,
+       l: () => St
```

#### 16. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L149-L156` → after: `L149-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L149-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/215.js#L149-L156) · [Before (L149-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/215.js#L149-L156)

```diff
-     var TB = ZB(201),
-       JB = ZB(105),
-       oB = ZB(140),
-       GB = ZB(302),
-       vB = ZB(4575),
-       kB = ZB(688),
-       cB = ZB(36506),
-       nB = ZB(36509);
+     var Ot = Vt(229),
+       qt = Vt(106),
+       Dt = Vt(153),
+       mt = Vt(332),
+       dt = Vt(4511),
+       jt = Vt(730),
+       Ht = Vt(36720),
+       Xt = Vt(36729);
```

#### 17. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L170` → after: `L170`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/215.js#L170) · [Before (L170)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/215.js#L170)

```diff
-       if ("ios" === IB) switch ((0, GB.d)(BB)) {
+       if ("ios" === et) switch ((0, mt.e)(tt)) {
```

#### 18. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L173` → after: `L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/215.js#L173) · [Before (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/215.js#L173)

```diff
-             footprintBytes: WB(cB.c), basis: "ipad-m", namesLimit: !1
+             footprintBytes: bt(Ht.b), basis: "ipad-m", namesLimit: !1
```

#### 19. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L190` → after: `L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/215.js#L190) · [Before (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/215.js#L190)

```diff
-         basis: `memory-${ZB}`,
+         basis: `memory-${Vt}`,
```

#### 20. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L197` → after: `L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/215.js#L197) · [Before (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/215.js#L197)

```diff
-         footprintBytes: WB(cB.k),
+         footprintBytes: bt(Ht.f),
```

#### 21. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L226` → after: `L226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/215.js#L226) · [Before (L226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/215.js#L226)

```diff
-         const BB = Math.min(GB, WB(cB.c));
+         const tt = Math.min(mt, bt(Ht.b));
```

#### 22. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L232` → after: `L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/215.js#L232) · [Before (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/215.js#L232)

```diff
-           return Math.min(cB.c, Math.max(cB.g, IB))
+           return Math.min(Ht.b, Math.max(Ht.d, et))
```

#### 23. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L234-L235` → after: `L234-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L234-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/215.js#L234-L235) · [Before (L234-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/215.js#L234-L235)

```diff
-         hB = kB && nB < cB.c ? Math.min(nB, cB.e) : nB,
-         zB = (0, cB.r)(hB);
+         Qt = jt && Xt < Ht.b ? Math.min(Xt, Ht.c) : Xt,
+         lt = (0, Ht.l)(Qt);
```

#### 24. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L240-L241` → after: `L240-L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L240-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/215.js#L240-L241) · [Before (L240-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/215.js#L240-L241)

```diff
-         maxHorizDistance: null !== (JB = null === zB || void 0 === zB ? void 0 : zB.horizontal) && void 0 !== JB ? JB : TB.f.maxChunkHorizAddDistance,
-         maxVertDistance: null !== (oB = null === zB || void 0 === zB ? void 0 : zB.vertical) && void 0 !== oB ? oB : TB.f.maxChunkVertAddDistance,
+         maxHorizDistance: null !== (qt = null === lt || void 0 === lt ? void 0 : lt.horizontal) && void 0 !== qt ? qt : Ot.e.maxChunkHorizAddDistance,
+         maxVertDistance: null !== (Dt = null === lt || void 0 === lt ? void 0 : lt.vertical) && void 0 !== Dt ? Dt : Ot.e.maxChunkVertAddDistance,
```

#### 25. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L258` → after: `L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/215.js#L258) · [Before (L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/215.js#L258)

```diff
-       return CB(OB(), (0, vB.e)(), (0, kB.C)("wasm").length > 0)
+       return Ct(vt(), (0, dt.f)(), (0, jt.C)("wasm").length > 0)
```

#### 26. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L262` → after: `L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/215.js#L262) · [Before (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/215.js#L262)

```diff
-       return wB ??= (0, nB.n)(CB(OB(), null, !1).chunkCap), wB
+       return ht ??= (0, Xt.q)(Ct(vt(), null, !1).chunkCap), ht
```

#### 27. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L271` → after: `L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/215.js#L271) · [Before (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/215.js#L271)

```diff
-       return (null !== (BB = sB) && void 0 !== BB ? BB : YB()).basis
+       return (null !== (tt = Kt) && void 0 !== tt ? tt : Wt()).basis
```

#### 28. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L278` → after: `L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/215.js#L278) · [Before (L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/215.js#L278)

```diff
-   36509: (BB, IB, ZB) => {
+   36729: (tt, et, Vt) => {
```

#### 29. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L281-L282` → after: `L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/215.js#L281) · [Before (L281-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/215.js#L281-L282)

```diff
-       i: () => dB,
-       l: () => hB,
+       j: () => Jt,
```

#### 30. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L285` → after: `L284-L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L284-L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/215.js#L284-L285) · [Before (L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/215.js#L285)

```diff
-       o: () => sB,
+       q: () => Nt,
+       r: () => Kt,
```

#### 31. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L288-L295` → after: `L288-L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L288-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/215.js#L288-L295) · [Before (L288-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/215.js#L288-L295)

```diff
-     var TB = ZB(36294),
-       JB = ZB(36506);
-     const oB = 64 * TB.b,
-       GB = 40 * TB.d,
-       vB = 36 * TB.d,
-       kB = 20 * TB.d,
-       cB = 2 * TB.d,
-       nB = 5 * TB.d;
+     var Ot = Vt(36498),
+       qt = Vt(36720);
+     const Dt = 64 * Ot.e,
+       mt = 40 * Ot.g,
+       dt = 36 * Ot.g,
+       jt = 20 * Ot.g,
+       Ht = 2 * Ot.g,
+       Xt = 5 * Ot.g;
```

#### 32. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L300-L307` → after: `L300-L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L300-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/215.js#L300-L307) · [Before (L300-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/215.js#L300-L307)

```diff
-     const zB = 2 * TB.d,
-       FB = 4 * TB.d,
-       NB = 35 * TB.d + zB + FB,
-       gB = 6.5 * TB.d,
-       qB = 132.5 * TB.b;
- 
-     function yB(BB) {
-       const IB = gB + (0, JB.n)(BB) + BB * qB;
+     const lt = 2 * Ot.g,
+       Et = 4 * Ot.g,
+       ft = 35 * Ot.g + lt + Et,
+       wt = 6.5 * Ot.g,
+       yt = 132.5 * Ot.e;
+ 
+     function Nt(tt) {
+       const et = wt + (0, qt.j)(tt) + tt * yt;
```

#### 33. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L310` → after: `L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/215.js#L310) · [Before (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/215.js#L310)

```diff
-     yB(JB.c), TB.d, TB.d, TB.d;
+     Nt(qt.b), Ot.g, Ot.g, Ot.g;
```

#### 34. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L328` → after: `L328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/215.js#L328) · [Before (L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/215.js#L328)

```diff
-       return BB >= JB.c ? UB : WB
+       return tt >= qt.b ? Mt : bt
```

#### 35. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L352` → after: `L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/215.js#L352) · [Before (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/215.js#L352)

```diff
-           JN: IB,
+           iE: et,
```

#### 36. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L369` → after: `L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/215.js#L369) · [Before (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/215.js#L369)

```diff
-         return sB(this.memory.memoryBytes(), BB, null !== (ZB = this.ceilingBytes) && void 0 !== ZB ? ZB : IB)
+         return Kt(this.memory.memoryBytes(), tt, null !== (Vt = this.ceilingBytes) && void 0 !== Vt ? Vt : et)
```

#### 37. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L378` → after: `L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/215.js#L378) · [Before (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/215.js#L378)

```diff
-           oB = Math.max(IB + (this.ballastOn() ? nB : 0), JB),
+           Dt = Math.max(et + (this.ballastOn() ? Xt : 0), qt),
```

#### 38. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L382-L383` → after: `L382-L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L382-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/215.js#L382-L383) · [Before (L382-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/215.js#L382-L383)

```diff
-           const BB = "least" === GB ? `took ${JB} bytes instead` : "frames grow it in steps";
-           console.warn(`[bloxd-wasm-client] wasm memory: the join's reserve to ${oB} bytes was refused at ${TB} bytes; ${BB}`)
+           const tt = "least" === mt ? `took ${qt} bytes instead` : "frames grow it in steps";
+           console.warn(`[bloxd-wasm-client] wasm memory: the join's reserve to ${Dt} bytes was refused at ${Ot} bytes; ${tt}`)
```

#### 39. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L405` → after: `L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/215.js#L405) · [Before (L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/215.js#L405)

```diff
-           (this.main = this.memory.stats(), this.peakStoredChunks = this.readPeakStoredChunks(), this.sheds > 0 && null !== this.shedding) && (this.distanceInUse = null !== (IB = this.shedding.readDistanceInUse()) && void 0 !== IB ? IB : this.distanceInUse);
+           (this.main = this.memory.stats(), this.peakStoredChunks = this.readPeakStoredChunks(), this.sheds > 0 && null !== this.shedding) && (this.distanceInUse = null !== (et = this.shedding.readDistanceInUse()) && void 0 !== et ? et : this.distanceInUse);
```

#### 40. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L413` → after: `L413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/215.js#L413) · [Before (L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/215.js#L413)

```diff
-         this.noteWorker(`Mesh${BB}`, IB)
+         this.noteWorker(`Mesh${tt}`, et)
```

#### 41. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L416` → after: `L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/215.js#L416) · [Before (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/215.js#L416)

```diff
-         this.workerGone(`Mesh${BB}`)
+         this.workerGone(`Mesh${tt}`)
```

#### 42. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L438` → after: `L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/215.js#L438) · [Before (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/215.js#L438)

```diff
-           wasmMemoryNow: `${(0,TB.i)(this.memory.memoryBytes())} MiB`
+           wasmMemoryNow: `${(0,Ot.n)(this.memory.memoryBytes())} MiB`
```

#### 43. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L445-L446` → after: `L445-L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L445-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/215.js#L445-L446) · [Before (L445-L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/215.js#L445-L446)

```diff
-             IB = 0 === this.peakStoredChunks ? "-" : (BB / this.peakStoredChunks / TB.b).toFixed(1);
-           ZB.wasmMemoryChunks = `peak stored ${this.peakStoredChunks}, peak live per stored chunk ${IB} KiB`
+             et = 0 === this.peakStoredChunks ? "-" : (tt / this.peakStoredChunks / Ot.e).toFixed(1);
+           Vt.wasmMemoryChunks = `peak stored ${this.peakStoredChunks}, peak live per stored chunk ${et} KiB`
```

#### 44. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L451-L452` → after: `L451-L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L451-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/215.js#L451-L452) · [Before (L451-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/215.js#L451-L452)

```diff
-           }] of this.workers) ZB[`wasmMemory${TB}`] = YB(GB) + (vB ? " (gone)" : "");
-         const oB = null !== (BB = null === (IB = this.footprint) || void 0 === IB ? void 0 : IB.describe()) && void 0 !== BB ? BB : null;
+           }] of this.workers) Vt[`wasmMemory${Ot}`] = Wt(mt) + (dt ? " (gone)" : "");
+         const Dt = null !== (tt = null === (et = this.footprint) || void 0 === et ? void 0 : et.describe()) && void 0 !== tt ? tt : null;
```

#### 45. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L457-L458` → after: `L457-L458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L457-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/215.js#L457-L458) · [Before (L457-L458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/215.js#L457-L458)

```diff
-         let GB = (null !== (BB = null === (IB = this.main) || void 0 === IB ? void 0 : IB.reservesRefused) && void 0 !== BB ? BB : 0) + this.replacedRefusals.reserves,
-           vB = (null !== (ZB = null === (JB = this.main) || void 0 === JB ? void 0 : JB.allocationsRefused) && void 0 !== ZB ? ZB : 0) + this.replacedRefusals.allocations;
+         let mt = (null !== (tt = null === (et = this.main) || void 0 === et ? void 0 : et.reservesRefused) && void 0 !== tt ? tt : 0) + this.replacedRefusals.reserves,
+           dt = (null !== (Vt = null === (qt = this.main) || void 0 === qt ? void 0 : qt.allocationsRefused) && void 0 !== Vt ? Vt : 0) + this.replacedRefusals.allocations;
```

#### 46. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L464-L465` → after: `L464-L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L464-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/215.js#L464-L465) · [Before (L464-L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/215.js#L464-L465)

```diff
-           wasmMainMiB: Number((0, TB.i)(this.memory.memoryBytes())),
-           wasmWorkersMiB: Number((0, TB.i)(this.workersMemoryBytes())),
+           wasmMainMiB: Number((0, Ot.n)(this.memory.memoryBytes())),
+           wasmWorkersMiB: Number((0, Ot.n)(this.workersMemoryBytes())),
```

#### 47. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L501` → after: `L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/215.js#L501) · [Before (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/215.js#L501)

```diff
-         this.stepsRefused = !0, console.warn(`[bloxd-wasm-client] wasm memory: ${BB}: frames grow on demand from here`)
+         this.stepsRefused = !0, console.warn(`[bloxd-wasm-client] wasm memory: ${tt}: frames grow on demand from here`)
```

#### 48. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L510` → after: `L510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/215.js#L510) · [Before (L510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/215.js#L510)

```diff
-         this.stopped || (null !== ZB ? (this.sheds++, this.shedCap = ZB, this.stepsHeldUntil = this.clock.now() + 5e3, this.refreshStats(), IB.JN(BB, this.sheds, this.details())) : hB(BB) && this.stopSteps("nothing is left to shed"))
+         this.stopped || (null !== Vt ? (this.sheds++, this.shedCap = Vt, this.stepsHeldUntil = this.clock.now() + 5e3, this.refreshStats(), et.iE(tt, this.sheds, this.details())) : Qt(tt) && this.stopSteps("nothing is left to shed"))
```

#### 49. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L523-L524` → after: `L523-L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L523-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/215.js#L523-L524) · [Before (L523-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/215.js#L523-L524)

```diff
-       const IB = (BB, IB) => `${BB}/${(0,TB.i)(IB)}`;
-       return `memory ${(0,TB.i)(BB.memoryBytes)} live ${(0,TB.i)(BB.liveBytes)} peak ${(0,TB.i)(BB.peakLiveBytes)} unused ${(0,TB.i)(BB.unusedBytes)} ceiling ${(0,TB.i)(BB.ceilingBytes)} MiB; grows upFront ${IB(BB.grows.upFront,BB.grownBytes.upFront)} ahead ${IB(BB.grows.ahead,BB … [truncated]
+       const et = (tt, et) => `${tt}/${(0,Ot.n)(et)}`;
+       return `memory ${(0,Ot.n)(tt.memoryBytes)} live ${(0,Ot.n)(tt.liveBytes)} peak ${(0,Ot.n)(tt.peakLiveBytes)} unused ${(0,Ot.n)(tt.unusedBytes)} ceiling ${(0,Ot.n)(tt.ceilingBytes)} MiB; grows upFront ${et(tt.grows.upFront,tt.grownBytes.upFront)} ahead ${et(tt.grows.ahead,tt … [truncated]
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/216.js` (c6gaap.4d6587ec → igzsf.a0b73a5f)

- **File**: `bundles/bloxd.io/chunks/js/216.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc)

#### 1. `bundles/bloxd.io/chunks/js/216.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f03494e5b42cc1b4308525318fec1817ca1175a95f2a4c3aae36ed3af35a5adc) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/216.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/216.js#L4)

```diff
-   36340: (BB, IB, ZB) => {
+   36551: (tt, et, Vt) => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/217.js` (c6gaap.4d6587ec → igzsf.a0b73a5f)

- **File**: `bundles/bloxd.io/chunks/js/217.js` (80 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0)

#### 1. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L4)

```diff
-   36356: (BB, IB, ZB) => {
+   36558: (tt, et, Vt) => {
```

#### 2. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L8-L9` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L8-L9) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L8-L9)

```diff
-     ZB(36363);
-     var TB = ZB(4802),
+     Vt(36562);
+     var Ot = Vt(4771),
```

#### 3. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L11-L12` → after: `L11-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L11-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L11-L12) · [Before (L11-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L11-L12)

```diff
-       oB = ZB(1746),
-       GB = ZB(1091),
+       Dt = Vt(1770),
+       mt = Vt(1140),
```

#### 4. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L14-L34` → after: `L14-L34`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L14-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L14-L34) · [Before (L14-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L14-L34)

```diff
-       kB = ZB(3294),
-       cB = ZB(1186),
-       nB = ZB(1258),
-       hB = ZB(4768),
-       zB = ZB(1516),
-       FB = ZB(36372),
-       NB = ZB(1248),
-       gB = ZB(1385),
-       qB = ZB(1579),
-       yB = ZB(20),
-       UB = ZB(1519),
-       WB = ZB(665),
-       dB = ZB(5090),
-       CB = ZB(810),
-       QB = ZB(1300),
-       sB = ZB(1281),
- ... (5 more removed lines; see GitHub link above)
+       jt = Vt(3192),
+       Ht = Vt(1223),
+       Xt = Vt(1293),
+       Qt = Vt(4725),
+       lt = Vt(1556),
+       Et = Vt(36569),
+       ft = Vt(1286),
+       wt = Vt(1429),
+       yt = Vt(1613),
+       Nt = Vt(26),
+       Mt = Vt(1564),
+       bt = Vt(710),
+       Jt = Vt(5104),
+       Ct = Vt(839),
+       ut = Vt(1325),
+       Kt = Vt(1308),
+ ... (5 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L45)

```diff
-       } = (0, NB.G)(), RB = (0, qB.useNavigatePreserveSearch)(), [rB, mB] = (0, JB.useState)("Enter"), [XB, LB] = (0, JB.useState)(""), eB = JB.useRef(null), uB = null === (IB = CB.c[HB]) || void 0 === IB ? void 0 : IB.showWorldsInsteadOfCustomLobbies, fB = uB ? 1 : null === (ZB  … [truncated]
+       } = (0, ft.H)(), Ft = (0, yt.useNavigatePreserveSearch)(), [kt, Gt] = (0, qt.useState)("Enter"), [zt, ot] = (0, qt.useState)(""), rt = qt.useRef(null), Ut = null === (et = Ct.c[It]) || void 0 === et ? void 0 : et.showWorldsInsteadOfCustomLobbies, At = Ut ? 1 : null === (Vt  … [truncated]
```

#### 6. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L122-L123` → after: `L122-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L122-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L122-L123) · [Before (L122-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L122-L123)

```diff
-         hB.d.getNewStarterName().then((BB => {
-           xB((IB => "" !== IB.baseOptions.name ? IB : {
+         Qt.e.getNewStarterName().then((tt => {
+           xt((et => "" !== et.baseOptions.name ? et : {
```

#### 7. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L134` → after: `L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L134) · [Before (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L134)

```diff
-         "customSchematic" === bB.mapOptions.mapType && null === EB && (0, cB.postJsonWithMetricsCookiesAndJsonResponse)(`${nB.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
+         "customSchematic" === pt.mapOptions.mapType && null === Tt && (0, Ht.postJsonWithMetricsCookiesAndJsonResponse)(`${Xt.clientSideServerUrls.indexUrl}/index/schematic/get-owned-schematics`, {}, {
```

#### 8. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L144` → after: `L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L144) · [Before (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L144)

```diff
-             qY: BB => {
+             Av: tt => {
```

#### 9. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L150` → after: `L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L150) · [Before (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L150)

```diff
-             qY: BB => {
+             Av: tt => {
```

#### 10. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L156` → after: `L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L156) · [Before (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L156)

```diff
-             qY: BB => {
+             Av: tt => {
```

#### 11. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L162` → after: `L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L162) · [Before (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L162)

```diff
-             qY: BB => {
+             Av: tt => {
```

#### 12. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L168` → after: `L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L168) · [Before (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L168)

```diff
-             qY: BB => {
+             Av: tt => {
```

#### 13. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L174` → after: `L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L174) · [Before (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L174)

```diff
-             qY: BB => {
+             Av: tt => {
```

#### 14. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L180` → after: `L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L180) · [Before (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L180)

```diff
-             qY: BB => {
+             Av: tt => {
```

#### 15. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L186` → after: `L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L186) · [Before (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L186)

```diff
-         TI = (0, pB.jsx)(dB.c, {
+         qe = (0, ct.jsx)(Jt.i, {
```

#### 16. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L190` → after: `L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L190) · [Before (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L190)

```diff
-           children: (0, pB.jsx)(oB.c, {
+           children: (0, ct.jsx)(Dt.d, {
```

#### 17. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L193` → after: `L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L193) · [Before (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L193)

```diff
-               const ZB = (0, sB.ib)(BB);
+               const Vt = (0, Kt.vb)(tt);
```

#### 18. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L196` → after: `L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L196) · [Before (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L196)

```diff
-             maxLength: sB.H,
+             maxLength: Kt.R,
```

#### 19. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L209` → after: `L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L209) · [Before (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L209)

```diff
-             children: [(0, pB.jsx)(OB.d, {
+             children: [(0, ct.jsx)(vt.b, {
```

#### 20. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L211` → after: `L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L211) · [Before (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L211)

```diff
-             }), (0, pB.jsx)(UB.d, {})]
+             }), (0, ct.jsx)(Mt.e, {})]
```

#### 21. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L214` → after: `L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L214) · [Before (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L214)

```diff
-             children: (0, pB.jsx)(zB.p, {
+             children: (0, ct.jsx)(lt.m, {
```

#### 22. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L217` → after: `L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L217) · [Before (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L217)

```diff
-                 (0, yB.m)("worldCreation"), RB((0, gB.b)(HB, bB.baseOptions.name))
+                 (0, Nt.i)("worldCreation"), Ft((0, wt.c)(It, pt.baseOptions.name))
```

#### 23. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L230` → after: `L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L230) · [Before (L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L230)

```diff
-         }), (0, pB.jsx)(iB.b, {
+         }), (0, ct.jsx)(St.e, {
```

#### 24. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L241` → after: `L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L241) · [Before (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L241)

```diff
-                 children: [TI, (0, pB.jsx)(dB.c, {
+                 children: [qe, (0, ct.jsx)(Jt.i, {
```

#### 25. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L245-L246` → after: `L245-L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L245-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L245-L246) · [Before (L245-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L245-L246)

```diff
-                   children: (0, pB.jsx)(kB.c, {
-                     options: TB.m.map((BB => ({
+                   children: (0, ct.jsx)(jt.e, {
+                     options: Ot.s.map((tt => ({
```

#### 26. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L248` → after: `L248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L248) · [Before (L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L248)

```diff
-                       label: TB.d[BB]
+                       label: Ot.g[tt]
```

#### 27. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L257` → after: `L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L257) · [Before (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L257)

```diff
-             }), uB && (0, pB.jsx)(YB.d, {
+             }), Ut && (0, ct.jsx)(Wt.e, {
```

#### 28. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L264-L265` → after: `L264-L265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L264-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L264-L265) · [Before (L264-L265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L264-L265)

```diff
-             }), (uB || !(0, WB.L)(fB) && fB > 0) && (0, pB.jsx)(YB.e, {
-               mapTypes: uB ? TB.H : TB.l,
+             }), (Ut || !(0, bt.B)(At) && At > 0) && (0, ct.jsx)(Wt.h, {
+               mapTypes: Ut ? Ot.J : Ot.p,
```

#### 29. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L285` → after: `L285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L285) · [Before (L285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L285)

```diff
-                   children: (0, pB.jsx)(FB.c, {
+                   children: (0, ct.jsx)(Et.e, {
```

#### 30. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L287` → after: `L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L287) · [Before (L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L287)

```diff
-                     schematics: null !== EB && void 0 !== EB ? EB : [],
+                     schematics: null !== Tt && void 0 !== Tt ? Tt : [],
```

#### 31. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L312` → after: `L312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L312) · [Before (L312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L312)

```diff
-                 children: [(0, pB.jsx)(dB.c, {
+                 children: [(0, ct.jsx)(Jt.i, {
```

#### 32. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L316` → after: `L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L316) · [Before (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L316)

```diff
-                   children: (0, pB.jsx)(oB.c, {
+                   children: (0, ct.jsx)(Dt.d, {
```

#### 33. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L323` → after: `L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L323) · [Before (L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L323)

```diff
-                 }), (0, pB.jsx)(dB.c, {
+                 }), (0, ct.jsx)(Jt.i, {
```

#### 34. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L337` → after: `L337`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L337) · [Before (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L337)

```diff
-                 }), (0, pB.jsx)(dB.c, {
+                 }), (0, ct.jsx)(Jt.i, {
```

#### 35. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L341` → after: `L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L341) · [Before (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L341)

```diff
-                   children: (0, pB.jsx)(oB.c, {
+                   children: (0, ct.jsx)(Dt.d, {
```

#### 36. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L357` → after: `L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L357) · [Before (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L357)

```diff
-                 children: [(0, pB.jsx)(dB.c, {
+                 children: [(0, ct.jsx)(Jt.i, {
```

#### 37. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L360` → after: `L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L360) · [Before (L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L360)

```diff
-                   children: (0, pB.jsx)(oB.c, {
+                   children: (0, ct.jsx)(Dt.d, {
```

#### 38. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L364-L366` → after: `L364-L366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L364-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L364-L366) · [Before (L364-L366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L364-L366)

```diff
-                     maxLength: sB.H
-                   })
-                 }), (0, pB.jsx)(dB.c, {
+                     maxLength: Kt.R
+                   })
+                 }), (0, ct.jsx)(Jt.i, {
```

#### 39. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L369` → after: `L369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L369) · [Before (L369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L369)

```diff
-                   children: (0, pB.jsx)(dB.b, {
+                   children: (0, ct.jsx)(Jt.e, {
```

#### 40. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L375` → after: `L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L375) · [Before (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L375)

```diff
-                 }), (0, pB.jsx)(dB.c, {
+                 }), (0, ct.jsx)(Jt.i, {
```

#### 41. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L378` → after: `L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L378) · [Before (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L378)

```diff
-                   children: (0, pB.jsx)(dB.b, {
+                   children: (0, ct.jsx)(Jt.e, {
```

#### 42. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L384` → after: `L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L384) · [Before (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L384)

```diff
-                 }), (0, pB.jsx)(dB.c, {
+                 }), (0, ct.jsx)(Jt.i, {
```

#### 43. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L390-L391` → after: `L390-L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L390-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L390-L391) · [Before (L390-L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L390-L391)

```diff
-                     max: QB.J,
-                     value: null !== (GB = bB.worldOptions.voidDeathHeight) && void 0 !== GB ? GB : "",
+                     max: ut.H,
+                     value: null !== (mt = pt.worldOptions.voidDeathHeight) && void 0 !== mt ? mt : "",
```

#### 44. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L397` → after: `L397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L397) · [Before (L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L397)

```diff
-                 }), (0, pB.jsx)(dB.c, {
+                 }), (0, ct.jsx)(Jt.i, {
```

#### 45. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L400` → after: `L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L400) · [Before (L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L400)

```diff
-                   children: (0, pB.jsx)(dB.b, {
+                   children: (0, ct.jsx)(Jt.e, {
```

#### 46. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L406` → after: `L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L406) · [Before (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L406)

```diff
-                 }), (0, pB.jsx)(dB.c, {
+                 }), (0, ct.jsx)(Jt.i, {
```

#### 47. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L412-L414` → after: `L412-L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L412-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L412-L414) · [Before (L412-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L412-L414)

```diff
-                     min: QB.T,
-                     max: QB.N,
-                     value: null !== (aB = bB.worldOptions.worldBorder) && void 0 !== aB ? aB : "",
+                     min: ut.M,
+                     max: ut.J,
+                     value: null !== (Rt = pt.worldOptions.worldBorder) && void 0 !== Rt ? Rt : "",
```

#### 48. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L420` → after: `L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L420) · [Before (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L420)

```diff
-                 }), (0, pB.jsx)(dB.c, {
+                 }), (0, ct.jsx)(Jt.i, {
```

#### 49. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L423` → after: `L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L423) · [Before (L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L423)

```diff
-                   children: (0, pB.jsx)(dB.b, {
+                   children: (0, ct.jsx)(Jt.e, {
```

#### 50. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L431` → after: `L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L431) · [Before (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L431)

```diff
-             }), uB && (0, pB.jsx)(wB.e, {
+             }), Ut && (0, ct.jsx)(ht.c, {
```

#### 51. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L439` → after: `L439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L439) · [Before (L439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L439)

```diff
-           children: [(0, pB.jsx)(zB.p, {
+           children: [(0, ct.jsx)(lt.m, {
```

#### 52. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L448` → after: `L448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L448) · [Before (L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L448)

```diff
-                     await hB.d.createCustomLobby(bB), mB("Success")
+                     await Qt.e.createCustomLobby(pt), Gt("Success")
```

#### 53. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L459` → after: `L459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L459) · [Before (L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L459)

```diff
-             children: (0, pB.jsx)(dB.c, {
+             children: (0, ct.jsx)(Jt.i, {
```

#### 54. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L465` → after: `L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L465) · [Before (L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L465)

```diff
-               children: (0, pB.jsx)(dB.b, {
+               children: (0, ct.jsx)(Jt.e, {
```

#### 55. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L478` → after: `L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L478) · [Before (L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L478)

```diff
-   36382: (BB, IB, ZB) => {
+   36585: (tt, et, Vt) => {
```

#### 56. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L480` → after: `L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L480) · [Before (L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L480)

```diff
-       b: () => kB
+       e: () => jt
```

#### 57. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L482` → after: `L482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L482) · [Before (L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L482)

```diff
-     var TB = ZB(1091),
+     var Ot = Vt(1140),
```

#### 58. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L485-L486` → after: `L485-L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L485-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L485-L486) · [Before (L485-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L485-L486)

```diff
-       GB = ZB(4764),
-       vB = ZB(1153);
+       mt = Vt(4715),
+       dt = Vt(1188);
```

#### 59. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L494` → after: `L494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L494) · [Before (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L494)

```diff
-         kB = (0, GB.c)(TB, "y");
+         jt = (0, mt.e)(Ot, "y");
```

#### 60. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L506` → after: `L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L506) · [Before (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L506)

```diff
-   36372: (BB, IB, ZB) => {
+   36569: (tt, et, Vt) => {
```

#### 61. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L508-L509` → after: `L508-L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L508-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L508-L509) · [Before (L508-L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L508-L509)

```diff
-       c: () => nB,
-       d: () => zB
+       e: () => Xt,
+       g: () => lt
```

#### 62. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L512-L517` → after: `L512-L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L512-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L512-L517) · [Before (L512-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L512-L517)

```diff
-       JB = ZB(1403),
-       oB = ZB(1248),
-       GB = ZB(1397),
-       vB = ZB(3663),
-       kB = ZB(5084),
-       cB = ZB(1153);
+       qt = Vt(1450),
+       Dt = Vt(1286),
+       mt = Vt(1436),
+       dt = Vt(3544),
+       jt = Vt(5101),
+       Ht = Vt(1188);
```

#### 63. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L529` → after: `L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L529) · [Before (L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L529)

```diff
-       } = (0, oB.G)();
+       } = (0, Dt.H)();
```

#### 64. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L532` → after: `L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L532) · [Before (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L532)

```diff
-         children: [IB && (0, cB.jsx)(GB.d, {}), !IB && 0 === ZB.length && (0, cB.jsx)("div", {
+         children: [et && (0, Ht.jsx)(mt.b, {}), !et && 0 === Vt.length && (0, Ht.jsx)("div", {
```

#### 65. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L535` → after: `L535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L535) · [Before (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L535)

```diff
-         }), !IB && ZB.map((BB => (0, cB.jsx)(vB.f, {
+         }), !et && Vt.map((tt => (0, Ht.jsx)(dt.h, {
```

#### 66. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L564` → after: `L564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L564) · [Before (L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L564)

```diff
-       } = (0, oB.G)(), [vB, hB] = (0, TB.useState)(null);
+       } = (0, Dt.H)(), [dt, Qt] = (0, Ot.useState)(null);
```

#### 67. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L585` → after: `L585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L585) · [Before (L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L585)

```diff
-         }), null !== vB && (0, cB.jsx)(kB.i, {
+         }), null !== dt && (0, Ht.jsx)(jt.k, {
```

#### 68. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L616` → after: `L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L616) · [Before (L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L616)

```diff
-   36378: (BB, IB, ZB) => {
+   36578: (tt, et, Vt) => {
```

#### 69. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L618-L619` → after: `L618-L619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L618-L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L618-L619) · [Before (L618-L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L618-L619)

```diff
-       d: () => cB,
-       e: () => nB
+       e: () => Ht,
+       h: () => Xt
```

#### 70. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L622` → after: `L622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L622) · [Before (L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L622)

```diff
-     var TB = ZB(1091),
+     var Ot = Vt(1140),
```

#### 71. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L624-L627` → after: `L624-L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L624-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L624-L627) · [Before (L624-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L624-L627)

```diff
-       oB = ZB(4802),
-       GB = ZB(342),
-       vB = ZB(1248),
-       kB = ZB(1153);
+       Dt = Vt(4771),
+       mt = Vt(377),
+       dt = Vt(1286),
+       jt = Vt(1188);
```

#### 72. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L638` → after: `L638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L638) · [Before (L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L638)

```diff
-       } = (0, vB.G)();
+       } = (0, dt.H)();
```

#### 73. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L648` → after: `L648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L648) · [Before (L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L648)

```diff
-           children: oB.E.map((BB => TB || (0, oB.t)(BB) ? (0, kB.jsx)("button", {
+           children: Dt.I.map((tt => Ot || (0, Dt.z)(tt) ? (0, jt.jsx)("button", {
```

#### 74. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L658` → after: `L658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L658) · [Before (L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L658)

```diff
-               "--background-image": `url(${GB.y[BB]})`
+               "--background-image": `url(${mt.s[tt]})`
```

#### 75. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L660` → after: `L660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L660) · [Before (L660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L660)

```diff
-             children: GB.u[BB]
+             children: mt.p[tt]
```

#### 76. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L677` → after: `L677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L677) · [Before (L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L677)

```diff
-       } = (0, vB.G)();
+       } = (0, dt.H)();
```

#### 77. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L687` → after: `L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L687) · [Before (L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L687)

```diff
-           children: IB.map((BB => cB || (0, oB.w)(BB) ? (0, kB.jsx)("button", {
+           children: et.map((tt => Ht || (0, Dt.D)(tt) ? (0, jt.jsx)("button", {
```

#### 78. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L697` → after: `L697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L697) · [Before (L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L697)

```diff
-               "--background-image": `url(${GB.p[BB]})`
+               "--background-image": `url(${mt.l[tt]})`
```

#### 79. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L699` → after: `L699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L699) · [Before (L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L699)

```diff
-             children: GB.o[BB]
+             children: mt.h[tt]
```

#### 80. `bundles/bloxd.io/chunks/js/217.js` (Changed code · before: `L705` → after: `L705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0R705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-0b14b51a65ce56d9b0a35a2276eaeac794274dafedc561765de56544bd2e75f0) · [After (L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/217.js#L705) · [Before (L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/217.js#L705)

```diff
-   36363: () => {}
+   36562: () => {}
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/218.js` (c6gaap.4d6587ec → igzsf.a0b73a5f)

- **File**: `bundles/bloxd.io/chunks/js/218.js` (43 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b)

#### 1. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/218.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/218.js#L4)

```diff
-   36372: (BB, IB, ZB) => {
+   36569: (tt, et, Vt) => {
```

#### 2. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/218.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/218.js#L6-L7)

```diff
-       c: () => nB,
-       d: () => zB
+       e: () => Xt,
+       g: () => lt
```

#### 3. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L10-L15` → after: `L10-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L10-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/218.js#L10-L15) · [Before (L10-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/218.js#L10-L15)

```diff
-       JB = ZB(1403),
-       oB = ZB(1248),
-       GB = ZB(1397),
-       vB = ZB(3663),
-       kB = ZB(5084),
-       cB = ZB(1153);
+       qt = Vt(1450),
+       Dt = Vt(1286),
+       mt = Vt(1436),
+       dt = Vt(3544),
+       jt = Vt(5101),
+       Ht = Vt(1188);
```

#### 4. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L27` → after: `L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/218.js#L27) · [Before (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/218.js#L27)

```diff
-       } = (0, oB.G)();
+       } = (0, Dt.H)();
```

#### 5. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/218.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/218.js#L30)

```diff
-         children: [IB && (0, cB.jsx)(GB.d, {}), !IB && 0 === ZB.length && (0, cB.jsx)("div", {
+         children: [et && (0, Ht.jsx)(mt.b, {}), !et && 0 === Vt.length && (0, Ht.jsx)("div", {
```

#### 6. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L33` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/218.js#L33) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/218.js#L33)

```diff
-         }), !IB && ZB.map((BB => (0, cB.jsx)(vB.f, {
+         }), !et && Vt.map((tt => (0, Ht.jsx)(dt.h, {
```

#### 7. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L62` → after: `L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/218.js#L62) · [Before (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/218.js#L62)

```diff
-       } = (0, oB.G)(), [vB, hB] = (0, TB.useState)(null);
+       } = (0, Dt.H)(), [dt, Qt] = (0, Ot.useState)(null);
```

#### 8. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L83` → after: `L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/218.js#L83) · [Before (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/218.js#L83)

```diff
-         }), null !== vB && (0, cB.jsx)(kB.i, {
+         }), null !== dt && (0, Ht.jsx)(jt.k, {
```

#### 9. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L114` → after: `L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/218.js#L114) · [Before (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/218.js#L114)

```diff
-   41761: (BB, IB, ZB) => {
+   41997: (tt, et, Vt) => {
```

#### 10. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L118-L123` → after: `L118-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L118-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/218.js#L118-L123) · [Before (L118-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/218.js#L118-L123)

```diff
-     var TB = ZB(3896),
-       JB = ZB(3911),
-       oB = ZB(1382),
-       GB = ZB(36372),
-       vB = ZB(5112),
-       kB = ZB(1091),
+     var Ot = Vt(3800),
+       qt = Vt(3820),
+       Dt = Vt(1423),
+       mt = Vt(36569),
+       dt = Vt(5124),
+       jt = Vt(1140),
```

#### 11. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L126-L131` → after: `L126-L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L126-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/218.js#L126-L131) · [Before (L126-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/218.js#L126-L131)

```diff
-       hB = ZB(1403),
-       zB = ZB(1516),
-       FB = ZB(360),
-       NB = ZB(1248),
-       gB = ZB(1102),
-       qB = ZB(1153);
+       Qt = Vt(1450),
+       lt = Vt(1556),
+       Et = Vt(391),
+       ft = Vt(1286),
+       wt = Vt(1152),
+       yt = Vt(1188);
```

#### 12. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L139` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/218.js#L139) · [Before (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/218.js#L139)

```diff
-       } = (0, NB.G)(), [TB, JB] = (0, nB.useState)(null), {
+       } = (0, ft.H)(), [Ot, qt] = (0, Xt.useState)(null), {
```

#### 13. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L143` → after: `L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/218.js#L143) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/218.js#L143)

```diff
-       } = (0, vB.d)({
+       } = (0, dt.e)({
```

#### 14. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L148` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/218.js#L148) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/218.js#L148)

```diff
-       }), hB = TB && TB.size > 1024 * FB.fd;
+       }), Qt = Ot && Ot.size > 1024 * Et.jd;
```

#### 15. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L166` → after: `L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/218.js#L166) · [Before (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/218.js#L166)

```diff
-               children: (0, qB.jsx)(gB.d, {
+               children: (0, yt.jsx)(wt.b, {
```

#### 16. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L176` → after: `L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/218.js#L176) · [Before (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/218.js#L176)

```diff
-               children: (0, qB.jsx)(gB.d, {
+               children: (0, yt.jsx)(wt.b, {
```

#### 17. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L184` → after: `L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/218.js#L184) · [Before (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/218.js#L184)

```diff
-         }), (0, qB.jsx)(zB.p, {
+         }), (0, yt.jsx)(lt.m, {
```

#### 18. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L191` → after: `L191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/218.js#L191) · [Before (L191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/218.js#L191)

```diff
-             maxSizeKb: FB.fd
+             maxSizeKb: Et.jd
```

#### 19. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L206` → after: `L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/218.js#L206) · [Before (L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/218.js#L206)

```diff
-       } = (0, NB.G)();
+       } = (0, ft.H)();
```

#### 20. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L216` → after: `L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/218.js#L216) · [Before (L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/218.js#L216)

```diff
-           children: (0, qB.jsx)(GB.c, {
+           children: (0, yt.jsx)(mt.e, {
```

#### 21. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L240-L243` → after: `L240-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L240-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/218.js#L240-L243) · [Before (L240-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/218.js#L240-L243)

```diff
-     var WB = ZB(5084),
-       dB = ZB(1746),
-       CB = ZB(4545),
-       QB = ZB(1281);
+     var bt = Vt(5101),
+       Jt = Vt(1770),
+       Ct = Vt(4475),
+       ut = Vt(1308);
```

#### 22. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L256` → after: `L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/218.js#L256) · [Before (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/218.js#L256)

```diff
-       } = (0, NB.G)(), [cB, hB] = (0, nB.useState)("choose"), [FB, gB] = (0, nB.useState)(null), [yB, UB] = (0, nB.useState)(null);
+       } = (0, ft.H)(), [Ht, Qt] = (0, Xt.useState)("choose"), [Et, wt] = (0, Xt.useState)(null), [Nt, Mt] = (0, Xt.useState)(null);
```

#### 23. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L267` → after: `L267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/218.js#L267) · [Before (L267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/218.js#L267)

```diff
-             children: (0, qB.jsx)(GB.c, {
+             children: (0, yt.jsx)(mt.e, {
```

#### 24. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L280` → after: `L280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/218.js#L280) · [Before (L280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/218.js#L280)

```diff
-             children: [(0, qB.jsx)(zB.p, {
+             children: [(0, yt.jsx)(lt.m, {
```

#### 25. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L286` → after: `L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/218.js#L286) · [Before (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/218.js#L286)

```diff
-             }), (0, qB.jsx)(zB.g, {
+             }), (0, yt.jsx)(lt.f, {
```

#### 26. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L318` → after: `L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/218.js#L318) · [Before (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/218.js#L318)

```diff
-       } = (0, NB.G)(), [vB, kB] = (0, nB.useState)(""), [hB, FB] = (0, nB.useState)(""), [gB, yB] = (0, nB.useState)(null), [UB, WB] = (0, nB.useState)(!0), sB = BB => {
+       } = (0, ft.H)(), [dt, jt] = (0, Xt.useState)(""), [Qt, Et] = (0, Xt.useState)(""), [wt, Nt] = (0, Xt.useState)(null), [Mt, bt] = (0, Xt.useState)(!0), Kt = tt => {
```

#### 27. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L320-L322` → after: `L320-L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L320-L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/218.js#L320-L322) · [Before (L320-L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/218.js#L320-L322)

```diff
-         BB = null !== (ZB = BB) && void 0 !== ZB ? ZB : vB;
-         const JB = "new" === IB ? (0, QB.s)(BB) : null,
-           oB = [...(0, QB.rb)(BB), ...JB ? [JB] : []];
+         tt = null !== (Vt = tt) && void 0 !== Vt ? Vt : dt;
+         const qt = "new" === et ? (0, ut.B)(tt) : null,
+           Dt = [...(0, ut.Eb)(tt), ...qt ? [qt] : []];
```

#### 28. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L330` → after: `L330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/218.js#L330) · [Before (L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/218.js#L330)

```diff
-         }), (0, qB.jsx)(dB.c, {
+         }), (0, yt.jsx)(Jt.d, {
```

#### 29. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L339` → after: `L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/218.js#L339) · [Before (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/218.js#L339)

```diff
-           maxLength: QB.fb
+           maxLength: ut.ub
```

#### 30. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L350` → after: `L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/218.js#L350) · [Before (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/218.js#L350)

```diff
-         }), (0, qB.jsx)(dB.c, {
+         }), (0, yt.jsx)(Jt.d, {
```

#### 31. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L356` → after: `L356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/218.js#L356) · [Before (L356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/218.js#L356)

```diff
-           maxLength: QB.eb,
+           maxLength: ut.qb,
```

#### 32. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L362` → after: `L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/218.js#L362) · [Before (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/218.js#L362)

```diff
-           children: [(0, qB.jsx)(CB.d, {
+           children: [(0, yt.jsx)(Ct.b, {
```

#### 33. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L378` → after: `L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/218.js#L378) · [Before (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/218.js#L378)

```diff
-           children: [(0, qB.jsx)(zB.p, {
+           children: [(0, yt.jsx)(lt.m, {
```

#### 34. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L384` → after: `L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/218.js#L384) · [Before (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/218.js#L384)

```diff
-           }), (0, qB.jsx)(zB.M, {
+           }), (0, yt.jsx)(lt.G, {
```

#### 35. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L392-L394` → after: `L392-L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L392-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/218.js#L392-L394) · [Before (L392-L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/218.js#L392-L394)

```diff
-     var OB = ZB(1258),
-       YB = ZB(1805),
-       iB = ZB(1186);
+     var vt = Vt(1293),
+       Wt = Vt(1826),
+       St = Vt(1223);
```

#### 36. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L410` → after: `L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/218.js#L410) · [Before (L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/218.js#L410)

```diff
-           return await (0, iB.postJsonWithMetricsCookiesAndJsonResponse)(`${ZB}/schematic/${BB}`, JB.H[BB].toBuffer({
+           return await (0, St.postJsonWithMetricsCookiesAndJsonResponse)(`${Vt}/schematic/${tt}`, qt.G[tt].toBuffer({
```

#### 37. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L449` → after: `L449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR449) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/218.js#L449) · [Before (L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/218.js#L449)

```diff
-               const JB = TB.UN.from(ZB);
+               const qt = Ot.mf.from(Vt);
```

#### 38. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L452` → after: `L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/218.js#L452) · [Before (L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/218.js#L452)

```diff
-               }), `${BB}.bloxdschem`)
+               }), `${tt}.bloxdschem`)
```

#### 39. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L496` → after: `L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/218.js#L496) · [Before (L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/218.js#L496)

```diff
-             const IB = TB.UN.from(await BB.arrayBuffer()),
+             const et = Ot.mf.from(await tt.arrayBuffer()),
```

#### 40. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L501` → after: `L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/218.js#L501) · [Before (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/218.js#L501)

```diff
-             await (0, iB.postBinaryWithMetricsCookiesAndCustomResponse)(`${ZB}/schematic/upload-schematic`, JB.H["upload-schematic"].toBuffer({
+             await (0, St.postBinaryWithMetricsCookiesAndCustomResponse)(`${Vt}/schematic/upload-schematic`, qt.G["upload-schematic"].toBuffer({
```

#### 41. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L518-L519` → after: `L518-L519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L518-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/218.js#L518-L519) · [Before (L518-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/218.js#L518-L519)

```diff
-         else if ("Plugin|WorldBuilder|ListSchematics" === BB)(0, GB.d)({
-           ownedSchematics: Array.isArray(IB) ? IB : IB.schematics,
+         else if ("Plugin|WorldBuilder|ListSchematics" === tt)(0, mt.g)({
+           ownedSchematics: Array.isArray(et) ? et : et.schematics,
```

#### 42. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L527-L528` → after: `L527-L528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L527-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/218.js#L527-L528) · [Before (L527-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/218.js#L527-L528)

```diff
-           const BB = null !== (cB = IB.schematic) && void 0 !== cB ? cB : IB;
-           (0, WB.m)({
+           const tt = null !== (Ht = et.schematic) && void 0 !== Ht ? Ht : et;
+           (0, bt.o)({
```

#### 43. `bundles/bloxd.io/chunks/js/218.js` (Changed code · before: `L535` → after: `L535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17bR535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-7754c8ef792e4380ca084db77cd0ba11db099ad977f03ee7bcde0d4cb7edb17b) · [After (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/218.js#L535) · [Before (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/218.js#L535)

```diff
-         } else console.error(`Unknown plugin message type ${BB}`)
+         } else console.error(`Unknown plugin message type ${tt}`)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/219.js` (c6gaap.4d6587ec → igzsf.a0b73a5f)

- **File**: `bundles/bloxd.io/chunks/js/219.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217)

#### 1. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/219.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/219.js#L4)

```diff
-   36393: (BB, IB, ZB) => {
+   36601: (tt, et, Vt) => {
```

#### 2. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/219.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/219.js#L8)

```diff
-     var TB = ZB(1091),
+     var Ot = Vt(1140),
```

#### 3. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L10-L20` → after: `L10-L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L10-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/219.js#L10-L20) · [Before (L10-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/219.js#L10-L20)

```diff
-       oB = ZB(1591),
-       GB = ZB(1084),
-       vB = ZB(810),
-       kB = ZB(1248),
-       cB = ZB(1516),
-       nB = ZB(1579),
-       hB = ZB(3724),
-       zB = ZB(1102),
-       FB = ZB(3663),
-       NB = ZB(2722),
-       gB = ZB(1153);
+       Dt = Vt(1623),
+       mt = Vt(1137),
+       dt = Vt(839),
+       jt = Vt(1286),
+       Ht = Vt(1556),
+       Xt = Vt(1613),
+       Qt = Vt(3623),
+       lt = Vt(1152),
+       Et = Vt(3544),
+       ft = Vt(2684),
+       wt = Vt(1188);
```

#### 4. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L39` → after: `L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/219.js#L39) · [Before (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/219.js#L39)

```diff
-       return null !== IB ? (0, gB.jsx)(FB.f, {
+       return null !== et ? (0, wt.jsx)(Et.h, {
```

#### 5. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/219.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/219.js#L45)

```diff
-       }) : TB ? (0, gB.jsx)(FB.b, {
+       }) : Ot ? (0, wt.jsx)(Et.e, {
```

#### 6. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/219.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/219.js#L63)

```diff
-       } = (0, NB.f)(), cB = null !== (IB = null === GB || void 0 === GB ? void 0 : GB.slice(0, oB.gameCount)) && void 0 !== IB ? IB : [], hB = {
+       } = (0, ft.f)(), Ht = null !== (et = null === mt || void 0 === mt ? void 0 : mt.slice(0, Dt.gameCount)) && void 0 !== et ? et : [], Qt = {
```

#### 7. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L72` → after: `L72`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R72) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/219.js#L72) · [Before (L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/219.js#L72)

```diff
-             to: `/custom-games/${encodeURIComponent(ZB)}`,
+             to: `/custom-games/${encodeURIComponent(Vt)}`,
```

#### 8. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L76` → after: `L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/219.js#L76) · [Before (L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/219.js#L76)

```diff
-             }), (0, gB.jsx)(zB.d, {
+             }), (0, wt.jsx)(lt.b, {
```

#### 9. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L83` → after: `L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/219.js#L83) · [Before (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/219.js#L83)

```diff
-             gridTemplateColumns: `repeat(${vB?oB.columnCount:qB}, ${vB?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
+             gridTemplateColumns: `repeat(${dt?Dt.columnCount:yt}, ${dt?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
```

#### 10. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L90` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/219.js#L90) · [Before (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/219.js#L90)

```diff
-               game: null !== (ZB = cB[IB]) && void 0 !== ZB ? ZB : null,
+               game: null !== (Vt = Ht[et]) && void 0 !== Vt ? Vt : null,
```

#### 11. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L155` → after: `L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R155) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/219.js#L155) · [Before (L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/219.js#L155)

```diff
-     var sB = ZB(1165);
+     var Kt = Vt(1204);
```

#### 12. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L161` → after: `L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/219.js#L161) · [Before (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/219.js#L161)

```diff
-       } = (0, kB.G)(), ZB = (0, oB.B)(), TB = (0, sB.j)(), zB = (0, hB.c)({
+       } = (0, jt.H)(), Vt = (0, Dt.B)(), Ot = (0, Kt.h)(), lt = (0, Qt.d)({
```

#### 13. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L164` → after: `L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/219.js#L164) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/219.js#L164)

```diff
-       if (!(0, GB.m)(FB)) return (0, gB.jsx)(nB.NavigatePreserveSearch, {
+       if (!(0, mt.j)(Et)) return (0, wt.jsx)(Xt.NavigatePreserveSearch, {
```

#### 14. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L169` → after: `L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/219.js#L169) · [Before (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/219.js#L169)

```diff
-         yB = null !== (BB = null === zB || void 0 === zB ? void 0 : zB[FB]) && void 0 !== BB ? BB : null,
+         Nt = null !== (tt = null === lt || void 0 === lt ? void 0 : lt[Et]) && void 0 !== tt ? tt : null,
```

#### 15. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L182` → after: `L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/219.js#L182) · [Before (L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/219.js#L182)

```diff
-           games: null !== (wB = null === yB || void 0 === yB ? void 0 : yB[ZB.id]) && void 0 !== wB ? wB : null
+           games: null !== (ht = null === Nt || void 0 === Nt ? void 0 : Nt[Vt.id]) && void 0 !== ht ? ht : null
```

#### 16. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L190` → after: `L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/219.js#L190) · [Before (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/219.js#L190)

```diff
-             backgroundImage: `url(/textures/games/${FB}/${NB.largePicture}.png)`
+             backgroundImage: `url(/textures/games/${Et}/${ft.largePicture}.png)`
```

#### 17. `bundles/bloxd.io/chunks/js/219.js` (Changed code · before: `L197` → after: `L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217R197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-6032c21b94fcedcd93d6bfcf902a7da20de3ab6d5310f794f102ea418bfcf217) · [After (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/219.js#L197) · [Before (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/219.js#L197)

```diff
-           children: (0, gB.jsx)(cB.c, {
+           children: (0, wt.jsx)(Ht.d, {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/220.js` (c6gaap.4d6587ec → igzsf.a0b73a5f)

- **File**: `bundles/bloxd.io/chunks/js/220.js` (102 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc)

#### 1. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L4)

```diff
-   41316: (BB, IB, ZB) => {
+   41508: (tt, et, Vt) => {
```

#### 2. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L9-L11` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L9-L11) · [Before (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L9-L11)

```diff
-       JB = ZB(3171),
-       oB = ZB(1179),
-       GB = ZB(1091),
+       qt = Vt(3081),
+       Dt = Vt(1218),
+       mt = Vt(1140),
```

#### 3. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L13-L19` → after: `L13-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L13-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L13-L19) · [Before (L13-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L13-L19)

```diff
-       kB = ZB(1300),
-       cB = ZB(650),
-       nB = ZB(1248),
-       hB = ZB(2326),
-       zB = ZB(1630),
-       FB = ZB(2696);
-     const NB = kB.y.filter((BB => !zB.h.includes(BB)));
+       jt = Vt(1325),
+       Ht = Vt(697),
+       Xt = Vt(1286),
+       Qt = Vt(2290),
+       lt = Vt(1657),
+       Et = Vt(2652);
+     const ft = jt.A.filter((tt => !lt.h.includes(tt)));
```

#### 4. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L22` → after: `L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L22) · [Before (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L22)

```diff
-       return NB.includes(BB) && "string" === typeof IB && (0, FB.d)(BB, IB)
+       return ft.includes(tt) && "string" === typeof et && (0, Et.g)(tt, et)
```

#### 5. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L44-L53` → after: `L44-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L44-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L44-L53) · [Before (L44-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L44-L53)

```diff
-     var WB = ZB(2333),
-       dB = ZB(3260),
-       CB = ZB(2054),
-       QB = ZB(1516),
-       sB = ZB(2369),
-       wB = ZB(20),
-       OB = ZB(2838),
-       YB = ZB(1561),
-       iB = ZB(1186),
-       pB = ZB(1919);
+     var bt = Vt(2295),
+       Jt = Vt(3161),
+       Ct = Vt(2063),
+       ut = Vt(1556),
+       Kt = Vt(2313),
+       ht = Vt(26),
+       vt = Vt(2772),
+       Wt = Vt(1600),
+       St = Vt(1223),
+       ct = Vt(1950);
```

#### 6. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L68` → after: `L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L68) · [Before (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L68)

```diff
-           return null !== (TB = null !== (JB = this.slots.get(ZB)) && void 0 !== JB ? JB : IB.get(ZB)) && void 0 !== TB ? TB : BB
+           return null !== (Ot = null !== (qt = this.slots.get(Vt)) && void 0 !== qt ? qt : et.get(Vt)) && void 0 !== Ot ? Ot : tt
```

#### 7. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L78` → after: `L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L78) · [Before (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L78)

```diff
-             JB = await YB.c.getSavedOutfits(IB);
+             qt = await Wt.e.getSavedOutfits(et);
```

#### 8. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L90-L91` → after: `L90-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L90-L91) · [Before (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L90-L91)

```diff
-         (this.unsaved.moveTo(this.getState().accountId), this.unsaved.before.has(BB)) || this.unsaved.before.set(BB, null !== (ZB = null === (TB = this.getState().data) || void 0 === TB ? void 0 : TB[BB]) && void 0 !== ZB ? ZB : {});
-         this.unsaved.slots.set(BB, IB), this.update((ZB => ZB.map(((ZB, TB) => TB === BB ? IB : ZB)))), this.sending || this.sendUnsaved()
+         (this.unsaved.moveTo(this.getState().accountId), this.unsaved.before.has(tt)) || this.unsaved.before.set(tt, null !== (Vt = null === (Ot = this.getState().data) || void 0 === Ot ? void 0 : Ot[tt]) && void 0 !== Vt ? Vt : {});
+         this.unsaved.slots.set(tt, et), this.update((Vt => Vt.map(((Vt, Ot) => Ot === tt ? et : Vt)))), this.sending || this.sendUnsaved()
```

#### 9. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L113` → after: `L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L113) · [Before (L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L113)

```diff
-             IB === BB.whamm && null !== oB || (oB = this.unsaved.overlay(await YB.c.getSavedOutfits(BB)), this.refresh()), await YB.c.setSavedOutfits(BB, oB), this.unsaved.isFor(BB.whamm) && oB.forEach(((BB, IB) => {
+             et === tt.whamm && null !== Dt || (Dt = this.unsaved.overlay(await Wt.e.getSavedOutfits(tt)), this.refresh()), await Wt.e.setSavedOutfits(tt, Dt), this.unsaved.isFor(tt.whamm) && Dt.forEach(((tt, et) => {
```

#### 10. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L129` → after: `L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L129) · [Before (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L129)

```diff
-                 return null !== (ZB = TB.get(IB)) && void 0 !== ZB ? ZB : BB
+                 return null !== (Vt = Ot.get(et)) && void 0 !== Vt ? Vt : tt
```

#### 11. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L139-L147` → after: `L139-L147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L139-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L139-L147) · [Before (L139-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L139-L147)

```diff
-     var jB = ZB(360),
-       PB = ZB(41319),
-       RB = ZB(1627),
-       rB = ZB(2430),
-       mB = ZB(3166),
-       XB = ZB(2259),
-       LB = ZB(2739),
-       eB = ZB(1102);
-     ZB(34230), ZB(3267);
+     var Zt = Vt(391),
+       Lt = Vt(41510),
+       Ft = Vt(1652),
+       kt = Vt(2379),
+       Gt = Vt(3072),
+       zt = Vt(2232),
+       ot = Vt(2693),
+       rt = Vt(1152);
+     Vt(34412), Vt(3166);
```

#### 12. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L149-L153` → after: `L149-L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L149-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L149-L153) · [Before (L149-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L149-L153)

```diff
-     var uB = ZB(2374),
-       fB = ZB(1421),
-       lB = ZB(2460),
-       AB = ZB(1403),
-       tB = ZB(1153);
+     var Ut = Vt(2317),
+       At = Vt(1464),
+       it = Vt(2435),
+       Yt = Vt(1450),
+       Bt = Vt(1188);
```

#### 13. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L164` → after: `L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L164) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L164)

```diff
-       } = (0, nB.G)(), {
+       } = (0, Xt.H)(), {
```

#### 14. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L167` → after: `L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L167) · [Before (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L167)

```diff
-       } = (0, OB.e)(MB, !1), {
+       } = (0, vt.h)(Pt, !1), {
```

#### 15. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L203` → after: `L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L203) · [Before (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L203)

```diff
-                 ...(0, QB.ab)(),
+                 ...(0, ut.X)(),
```

#### 16. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L214` → after: `L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L214) · [Before (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L214)

```diff
-                   children: [(0, tB.jsx)(eB.d, {
+                   children: [(0, Bt.jsx)(rt.b, {
```

#### 17. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L220` → after: `L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L220) · [Before (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L220)

```diff
-                     children: (0, tB.jsx)(lB.b, {
+                     children: (0, Bt.jsx)(it.c, {
```

#### 18. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L223` → after: `L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L223) · [Before (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L223)

```diff
-                   }), (0, tB.jsx)(QB.V, {
+                   }), (0, Bt.jsx)(ut.Q, {
```

#### 19. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L232` → after: `L232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L232) · [Before (L232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L232)

```diff
-               }), !oB && (0, tB.jsx)(QB.M, {
+               }), !Dt && (0, Bt.jsx)(ut.G, {
```

#### 20. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L238` → after: `L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L238) · [Before (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L238)

```diff
-                 children: (0, tB.jsx)(eB.d, {
+                 children: (0, Bt.jsx)(rt.b, {
```

#### 21. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L247-L249` → after: `L247-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L247-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L247-L249) · [Before (L247-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L247-L249)

```diff
-     var xB = ZB(36406),
-       EB = ZB(2687),
-       DB = ZB(2692);
+     var xt = Vt(36623),
+       Tt = Vt(2637),
+       gt = Vt(2645);
```

#### 22. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L252` → after: `L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L252) · [Before (L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L252)

```diff
-       return null !== BB && !(0, EB.j)(DB.e, IB, ZB, BB.collected, BB.ownedPacks)
+       return null !== tt && !(0, Tt.j)(gt.c, et, Vt, tt.collected, tt.ownedPacks)
```

#### 23. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L272` → after: `L272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L272) · [Before (L272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L272)

```diff
-       } = (0, nB.G)(), {
+       } = (0, Xt.H)(), {
```

#### 24. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L275` → after: `L275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L275) · [Before (L275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L275)

```diff
-       return (0, tB.jsx)(fB.e, {
+       return (0, Bt.jsx)(At.g, {
```

#### 25. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L284` → after: `L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L284) · [Before (L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L284)

```diff
-       return (0, hB.j)(BB, IB).purchasable && !(0, rB.q)(BB, IB, ZB)
+       return (0, Qt.r)(tt, et).purchasable && !(0, kt.w)(tt, et, Vt)
```

#### 26. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L304` → after: `L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L304) · [Before (L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L304)

```diff
-       } = (0, nB.G)(), kB = RB.d[ZB], cB = kB.purchasable && !TB.includes(ZB) && RB.o.includes(ZB), hB = mB.n[ZB];
+       } = (0, Xt.H)(), jt = Ft.d[Vt], Ht = jt.purchasable && !Ot.includes(Vt) && Ft.p.includes(Vt), Qt = Gt.k[Vt];
```

#### 27. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L313-L314` → after: `L313-L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L313-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L313-L314) · [Before (L313-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L313-L314)

```diff
-             children: null !== (IB = kB.displayName) && void 0 !== IB ? IB : ZB
-           }), (cB || JB) && (0, tB.jsxs)(QB.I, {
+             children: null !== (et = jt.displayName) && void 0 !== et ? et : Vt
+           }), (Ht || qt) && (0, Bt.jsxs)(ut.A, {
```

#### 28. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L316` → after: `L316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L316) · [Before (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L316)

```diff
-               cB ? (0, mB.j)(ZB) : (0, sB.n)({
+               Ht ? (0, Gt.h)(Vt) : (0, Kt.l)({
```

#### 29. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L321` → after: `L321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L321) · [Before (L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L321)

```diff
-             children: [(0, tB.jsx)(eB.d, {
+             children: [(0, Bt.jsx)(rt.b, {
```

#### 30. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L340` → after: `L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L340) · [Before (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L340)

```diff
-       } = (0, nB.G)(), zB = new Set(IB), FB = new Map, NB = Object.keys(hB.f.emote).sort(((BB, IB) => {
+       } = (0, Xt.H)(), lt = new Set(et), Et = new Map, ft = Object.keys(Qt.f.emote).sort(((tt, et) => {
```

#### 31. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L342` → after: `L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L342) · [Before (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L342)

```diff
-         return (null !== (ZB = null === (TB = (0, hB.h)("emote", BB)) || void 0 === TB ? void 0 : TB.clientIdx) && void 0 !== ZB ? ZB : 0) - (null !== (JB = null === (oB = (0, hB.h)("emote", IB)) || void 0 === oB ? void 0 : oB.clientIdx) && void 0 !== JB ? JB : 0)
+         return (null !== (Vt = null === (Ot = (0, Qt.n)("emote", tt)) || void 0 === Ot ? void 0 : Ot.clientIdx) && void 0 !== Vt ? Vt : 0) - (null !== (qt = null === (Dt = (0, Qt.n)("emote", et)) || void 0 === Dt ? void 0 : Dt.clientIdx) && void 0 !== qt ? qt : 0)
```

#### 32. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L344-L345` → after: `L344-L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L344-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L344-L345) · [Before (L344-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L344-L345)

```diff
-         const IB = (0, hB.j)("emote", BB),
-           JB = (0, rB.q)("emote", BB, ZB);
+         const et = (0, Qt.r)("emote", tt),
+           qt = (0, kt.w)("emote", tt, Vt);
```

#### 33. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L349` → after: `L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L349) · [Before (L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L349)

```diff
-         const BB = (0, hB.h)("emote", vB).cosmeticPack;
+         const tt = (0, Qt.n)("emote", dt).cosmeticPack;
```

#### 34. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L361` → after: `L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L361) · [Before (L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L361)

```diff
-               max: kB.o
+               max: jt.r
```

#### 35. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L378` → after: `L378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L378) · [Before (L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L378)

```diff
-                   hB = IB.length >= kB.o,
+                   Qt = et.length >= jt.r,
```

#### 36. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L394` → after: `L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L394) · [Before (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L394)

```diff
-                         backgroundImage: `url(/textures/charSkins/previews/emote_${BB}_preview.png)`
+                         backgroundImage: `url(/textures/charSkins/previews/emote_${tt}_preview.png)`
```

#### 37. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L399` → after: `L399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L399) · [Before (L399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L399)

```diff
-                       children: null !== (TB = null === gB || void 0 === gB ? void 0 : gB.displayName) && void 0 !== TB ? TB : BB
+                       children: null !== (Ot = null === wt || void 0 === wt ? void 0 : wt.displayName) && void 0 !== Ot ? Ot : tt
```

#### 38. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L406` → after: `L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L406) · [Before (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L406)

```diff
-                     }), FB && (0, tB.jsx)(eB.d, {
+                     }), Et && (0, Bt.jsx)(rt.b, {
```

#### 39. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L409` → after: `L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L409) · [Before (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L409)

```diff
-                     }), (0, tB.jsx)(fB.e, {
+                     }), (0, Bt.jsx)(At.g, {
```

#### 40. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L422` → after: `L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L422) · [Before (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L422)

```diff
-                             zB.has(BB) ? JB(IB.filter((IB => IB !== BB))) : IB.length >= kB.o || JB([...IB, BB])
+                             lt.has(tt) ? qt(et.filter((et => et !== tt))) : et.length >= jt.r || qt([...et, tt])
```

#### 41. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L425` → after: `L425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L425) · [Before (L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L425)

```diff
-                         children: (0, tB.jsx)(eB.d, {
+                         children: (0, Bt.jsx)(rt.b, {
```

#### 42. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L446` → after: `L446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L446) · [Before (L446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L446)

```diff
-         } = (0, nB.G)(),
+         } = (0, Xt.H)(),
```

#### 43. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L451` → after: `L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L451) · [Before (L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L451)

```diff
-         yB = (0, JB.d)(),
+         Nt = (0, qt.c)(),
```

#### 44. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L454` → after: `L454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L454) · [Before (L454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L454)

```diff
-         } = (0, wB.o)(["gameState"]),
+         } = (0, ht.k)(["gameState"]),
```

#### 45. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L462` → after: `L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L462) · [Before (L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L462)

```diff
-         lB = (0, TB.useRef)(kB.y.reduce(((BB, IB) => (BB[IB] = (0, FB.b)(IB), BB)), {})),
+         it = (0, Ot.useRef)(jt.A.reduce(((tt, et) => (tt[et] = (0, Et.d)(et), tt)), {})),
```

#### 46. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L471` → after: `L471`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L471) · [Before (L471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L471)

```diff
-         null !== BB && (SB.current = null, (0, xB.d)(NB, [
+         null !== tt && (te.current = null, (0, xt.b)(ft, [
```

#### 47. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L481` → after: `L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L481) · [Before (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L481)

```diff
-         }, yB(), ZB && ((0, xB.d)(NB, [
+         }, Nt(), Vt && ((0, xt.b)(ft, [
```

#### 48. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L484` → after: `L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L484) · [Before (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L484)

```diff
-         const GB = (0, hB.h)(BB, IB);
+         const mt = (0, Qt.n)(tt, et);
```

#### 49. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L486` → after: `L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L486) · [Before (L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L486)

```diff
-           const ZB = (0, hB.g)(IB);
+           const Vt = (0, Qt.j)(et);
```

#### 50. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L489` → after: `L489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L489) · [Before (L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L489)

```diff
-             [`${GB.cosmeticPack}_${BB}_${GB.colourGroup}`]: parseInt(ZB[1])
+             [`${mt.cosmeticPack}_${tt}_${mt.colourGroup}`]: parseInt(Vt[1])
```

#### 51. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L518-L519` → after: `L518-L519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR518) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L518-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L518-L519) · [Before (L518-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L518-L519)

```diff
-         TB.length > 0 && (0, xB.d)(NB, TB)
-       }(0, CB.c)("cosmeticsUpdated", (BB => {
+         Ot.length > 0 && (0, xt.b)(ft, Ot)
+       }(0, Ct.e)("cosmeticsUpdated", (tt => {
```

#### 52. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L523-L524` → after: `L523-L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L523-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L523-L524) · [Before (L523-L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L523-L524)

```diff
-             Ho: TB,
-             Mo: JB
+             kD: Ot,
+             GD: qt
```

#### 53. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L548-L549` → after: `L548-L549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L548-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L548-L549) · [Before (L548-L549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L548-L549)

```diff
-           const IB = (0, hB.j)(ZB, BB),
-             TB = (0, rB.q)(ZB, BB, kI);
+           const et = (0, Qt.r)(Vt, tt),
+             Ot = (0, kt.w)(Vt, tt, He);
```

#### 54. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L553` → after: `L553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L553) · [Before (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L553)

```diff
-           return (null !== (TB = null === (JB = (0, hB.h)(ZB, BB)) || void 0 === JB ? void 0 : JB.clientIdx) && void 0 !== TB ? TB : 0) - (null !== (oB = null === (GB = (0, hB.h)(ZB, IB)) || void 0 === GB ? void 0 : GB.clientIdx) && void 0 !== oB ? oB : 0)
+           return (null !== (Ot = null === (qt = (0, Qt.n)(Vt, tt)) || void 0 === qt ? void 0 : qt.clientIdx) && void 0 !== Ot ? Ot : 0) - (null !== (Dt = null === (mt = (0, Qt.n)(Vt, et)) || void 0 === mt ? void 0 : mt.clientIdx) && void 0 !== Dt ? Dt : 0)
```

#### 55. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L558` → after: `L558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR558) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L558) · [Before (L558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L558)

```diff
-         const BB = null === (FI = (0, hB.h)(ZB, TB)) || void 0 === FI ? void 0 : FI.cosmeticPack;
+         const tt = null === (fe = (0, Qt.n)(Vt, Ot)) || void 0 === fe ? void 0 : fe.cosmeticPack;
```

#### 56. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L566-L567` → after: `L566-L567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L566-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L566-L567) · [Before (L566-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L566-L567)

```diff
-             const GB = `${oB.cosmeticPack}_${oB.colourGroup}`;
-             (BI(BB, JB, IB) ? TB : ZB).add(GB)
+             const mt = `${Dt.cosmeticPack}_${Dt.colourGroup}`;
+             (ee(tt, qt, et) ? Ot : Vt).add(mt)
```

#### 57. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L577` → after: `L577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L577) · [Before (L577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L577)

```diff
-           const JB = null !== (qI = null === (yI = (0, hB.h)(ZB, TB)) || void 0 === yI ? void 0 : yI.colourGroup) && void 0 !== qI ? qI : null;
+           const qt = null !== (Ne = null === (ae = (0, Qt.n)(Vt, Ot)) || void 0 === ae ? void 0 : ae.colourGroup) && void 0 !== Ne ? Ne : null;
```

#### 58. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L584` → after: `L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L584) · [Before (L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L584)

```diff
-             vB = !0 === (null === GB || void 0 === GB ? void 0 : GB.showSwatchSelector) && !NI.has(`${TB}_${BB}`);
+             dt = !0 === (null === mt || void 0 === mt ? void 0 : mt.showSwatchSelector) && !we.has(`${Ot}_${tt}`);
```

#### 59. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L587` → after: `L587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L587) · [Before (L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L587)

```diff
-             const IB = null !== (kB = iB[`${TB}_${ZB}_${BB}`]) && void 0 !== kB ? kB : (0, RB.g)(GB.colours);
+             const et = null !== (jt = St[`${Ot}_${Vt}_${tt}`]) && void 0 !== jt ? jt : (0, Ft.h)(mt.colours);
```

#### 60. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L592` → after: `L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L592) · [Before (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L592)

```diff
-                 const ZB = (0, hB.g)(BB);
+                 const Vt = (0, Qt.j)(tt);
```

#### 61. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L618` → after: `L618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L618) · [Before (L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L618)

```diff
-           children: [(0, tB.jsx)(eB.d, {
+           children: [(0, Bt.jsx)(rt.b, {
```

#### 62. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L620` → after: `L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L620) · [Before (L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L620)

```diff
-           }), GB("homePage:unlockWithSuperRank"), nI && (0, tB.jsx)(QB.p, {
+           }), mt("homePage:unlockWithSuperRank"), Qe && (0, Bt.jsx)(ut.m, {
```

#### 63. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L622` → after: `L622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L622) · [Before (L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L622)

```diff
-               (0, sB.n)({
+               (0, Kt.l)({
```

#### 64. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L656` → after: `L656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L656) · [Before (L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L656)

```diff
-                 showStoreLink: !RB.n.includes(BB) && IB.some((BB => {
+                 showStoreLink: !Ft.m.includes(tt) && et.some((tt => {
```

#### 65. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L698` → after: `L698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L698) · [Before (L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L698)

```diff
-                             backgroundImage: `url(/textures/charSkins/previews/character_${IB}_preview.png)`
+                             backgroundImage: `url(/textures/charSkins/previews/character_${et}_preview.png)`
```

#### 66. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L700` → after: `L700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L700) · [Before (L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L700)

```diff
-                         }), oB && (0, tB.jsx)(eB.d, {
+                         }), Dt && (0, Bt.jsx)(rt.b, {
```

#### 67. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L715` → after: `L715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L715) · [Before (L715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L715)

```diff
-               const IB = (0, FB.j)(BB);
+               const et = (0, Et.l)(tt);
```

#### 68. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L725` → after: `L725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L725) · [Before (L725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L725)

```diff
-                 for (const ZB of kB.y) "cape" !== ZB && "nameColour" !== ZB && "emote" !== ZB && BB(ZB, "skin" === ZB ? "skin_preview" : `${ZB}_none`, !1);
+                 for (const Vt of jt.A) "cape" !== Vt && "nameColour" !== Vt && "emote" !== Vt && tt(Vt, "skin" === Vt ? "skin_preview" : `${Vt}_none`, !1);
```

#### 69. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L744` → after: `L744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L744) · [Before (L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L744)

```diff
-                     nB = `${BB}_${ZB}_${JB}`;
+                     Xt = `${tt}_${Vt}_${qt}`;
```

#### 70. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L760` → after: `L760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L760) · [Before (L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L760)

```diff
-                             CosmeticColorOptionSelected: (null !== (TB = iB[nB]) && void 0 !== TB ? TB : (0, RB.g)(kB.colours)) === GB
+                             CosmeticColorOptionSelected: (null !== (Ot = St[Xt]) && void 0 !== Ot ? Ot : (0, Ft.h)(jt.colours)) === mt
```

#### 71. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L763` → after: `L763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L763) · [Before (L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L763)

```diff
-                             backgroundColor: `rgb(${oB.rbg.join(",")})`
+                             backgroundColor: `rgb(${Dt.rbg.join(",")})`
```

#### 72. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L772` → after: `L772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L772) · [Before (L772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L772)

```diff
-                               oB = TB ? (0, hB.h)(ZB, TB) : null,
+                               Dt = Ot ? (0, Qt.n)(Vt, Ot) : null,
```

#### 73. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L774-L775` → after: `L774-L775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L774-L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L774-L775) · [Before (L774-L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L774-L775)

```diff
-                               kB = vB ? TB : lB.current[ZB],
-                               cB = vB ? oB : (0, hB.h)(ZB, kB);
+                               jt = dt ? Ot : it.current[Vt],
+                               Ht = dt ? Dt : (0, Qt.n)(Vt, jt);
```

#### 74. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L777-L778` → after: `L777-L778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L777-L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L777-L778) · [Before (L777-L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L777-L778)

```diff
-                             if ((null !== (IB = null === cB || void 0 === cB ? void 0 : cB.colourGroup) && void 0 !== IB ? IB : null) !== JB) return;
-                             const zB = (0, hB.g)(kB);
+                             if ((null !== (et = null === Ht || void 0 === Ht ? void 0 : Ht.colourGroup) && void 0 !== et ? et : null) !== qt) return;
+                             const lt = (0, Qt.j)(jt);
```

#### 75. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L780` → after: `L780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L780) · [Before (L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L780)

```diff
-                               const BB = `${ZB}_${zB[0]}_${GB}`;
+                               const tt = `${Vt}_${lt[0]}_${mt}`;
```

#### 76. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L796` → after: `L796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L796) · [Before (L796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L796)

```diff
-                       return GB || IB || ("cape" !== ZB || (0, jB.Qd)(NB.getPlayerRanks(), BB)) && ("nameColour" !== ZB || NB.playerHasRank("super")) || (kB = !1), (0, tB.jsx)(VB, {
+                       return mt || et || ("cape" !== Vt || (0, Zt.ae)(ft.getPlayerRanks(), tt)) && ("nameColour" !== Vt || ft.playerHasRank("super")) || (jt = !1), (0, Bt.jsx)(nt, {
```

#### 77. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L828` → after: `L828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L828) · [Before (L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L828)

```diff
-                               playerSocialPreview: (0, XB.d)(BB, {
+                               playerSocialPreview: (0, zt.b)(tt, {
```

#### 78. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L839-L840` → after: `L839-L840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L839-L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L839-L840) · [Before (L839-L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L839-L840)

```diff
-                             style: (0, hB.h)(ZB, BB).previewTex ? {
-                               backgroundImage: `url(/textures/charSkins/previews/${(0,hB.h)(ZB,BB).previewTex}.png)`
+                             style: (0, Qt.n)(Vt, tt).previewTex ? {
+                               backgroundImage: `url(/textures/charSkins/previews/${(0,Qt.n)(Vt,tt).previewTex}.png)`
```

#### 79. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L842` → after: `L842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L842) · [Before (L842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L842)

```diff
-                               backgroundColor: cB.t[BB]
+                               backgroundColor: Ht.o[tt]
```

#### 80. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L844` → after: `L844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L844) · [Before (L844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L844)

```diff
-                           }), GB && (0, tB.jsx)(eB.d, {
+                           }), mt && (0, Bt.jsx)(rt.b, {
```

#### 81. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L851` → after: `L851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L851) · [Before (L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L851)

```diff
-                   }, null !== JB && void 0 !== JB ? JB : "ungrouped")
+                   }, null !== qt && void 0 !== qt ? qt : "ungrouped")
```

#### 82. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L855` → after: `L855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR855) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L855) · [Before (L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L855)

```diff
-           }), aB && (0, tB.jsxs)(QB.g, {
+           }), Rt && (0, Bt.jsxs)(ut.f, {
```

#### 83. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L862` → after: `L862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L862) · [Before (L862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L862)

```diff
-             children: [(0, tB.jsx)(eB.d, {
+             children: [(0, Bt.jsx)(rt.b, {
```

#### 84. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L868` → after: `L868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L868) · [Before (L868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L868)

```diff
-             Mv: mB.id,
+             rd: Gt.id,
```

#### 85. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L871` → after: `L871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L871) · [Before (L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L871)

```diff
-               for (const BB of kB.y) oI(BB, lB.current[BB], !1)
+               for (const tt of jt.A) me(tt, it.current[tt], !1)
```

#### 86. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L878` → after: `L878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L878) · [Before (L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L878)

```diff
-   41319: (BB, IB, ZB) => {
+   41510: (tt, et, Vt) => {
```

#### 87. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L883-L888` → after: `L883-L888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L883-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L883-L888) · [Before (L883-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L883-L888)

```diff
-       JB = ZB(2896),
-       oB = ZB(1300),
-       GB = ZB(2696),
-       vB = ZB(34230),
-       kB = ZB(3811),
-       cB = ZB(1153);
+       qt = Vt(2821),
+       Dt = Vt(1325),
+       mt = Vt(2652),
+       dt = Vt(34412),
+       jt = Vt(3702),
+       Ht = Vt(1188);
```

#### 88. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L897` → after: `L897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L897) · [Before (L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L897)

```diff
-           Mv: gB,
+           rd: wt,
```

#### 89. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L905` → after: `L905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L905) · [Before (L905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L905)

```diff
-           } = (0, JB.e)(UB),
+           } = (0, qt.d)(Mt),
```

#### 90. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L923` → after: `L923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L923) · [Before (L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L923)

```diff
-               const ZB = Promise.all(oB.y.map((IB => BB.untilDrawn(IB)))).catch((BB => {
+               const Vt = Promise.all(Dt.A.map((et => tt.untilDrawn(et)))).catch((tt => {
```

#### 91. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L943` → after: `L943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L943) · [Before (L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L943)

```diff
-               for (const TB of oB.y) {
+               for (const Ot of Dt.A) {
```

#### 92. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L945` → after: `L945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L945) · [Before (L945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L945)

```diff
-                 BB(TB, null !== (ZB = IB[TB]) && void 0 !== ZB ? ZB : (0, GB.b)(TB))
+                 tt(Ot, null !== (Vt = et[Ot]) && void 0 !== Vt ? Vt : (0, mt.d)(Ot))
```

#### 93. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L970-L971` → after: `L970-L971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L970-L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L970-L971) · [Before (L970-L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L970-L971)

```diff
-           const BB = kB.e.register(zB),
-             IB = vB.i.openCharacter(UB.current, FB);
+           const tt = jt.c.register(lt),
+             et = dt.l.openCharacter(Mt.current, Et);
```

#### 94. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L986` → after: `L986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L986) · [Before (L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L986)

```diff
-           for (const IB of oB.y) {
+           for (const et of Dt.A) {
```

#### 95. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L995` → after: `L995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L995) · [Before (L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L995)

```diff
-           wB && CB.current.playEmote(null !== gB && void 0 !== gB ? gB : null)
+           ht && Ct.current.playEmote(null !== wt && void 0 !== wt ? wt : null)
```

#### 96. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1002` → after: `L1002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR1002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L1002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L1002) · [Before (L1002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L1002)

```diff
-             } = vB.b[FB];
+             } = dt.e[Et];
```

#### 97. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1028` → after: `L1028`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR1028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L1028) · [Before (L1028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L1028)

```diff
-   36406: (BB, IB, ZB) => {
+   36623: (tt, et, Vt) => {
```

#### 98. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1030` → after: `L1030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR1030) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L1030) · [Before (L1030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L1030)

```diff
-       d: () => GB
+       b: () => mt
```

#### 99. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1032-L1033` → after: `L1032-L1033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR1032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L1032-L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L1032-L1033) · [Before (L1032-L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L1032-L1033)

```diff
-     var TB = ZB(1995),
-       JB = ZB(1561);
+     var Ot = Vt(2024),
+       qt = Vt(1600);
```

#### 100. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1056-L1057` → after: `L1056-L1057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR1056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L1056-L1057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L1056-L1057) · [Before (L1056-L1057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L1056-L1057)

```diff
-             Ho: IB,
-             Mo: ZB
+             kD: et,
+             GD: Vt
```

#### 101. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1060` → after: `L1060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR1060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L1060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L1060) · [Before (L1060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L1060)

```diff
-         this.pending.clear(), this.lastSentAt = Date.now(), JB.c.updateCosmetics(BB, IB).catch((BB => {
+         this.pending.clear(), this.lastSentAt = Date.now(), qt.e.updateCosmetics(tt, et).catch((tt => {
```

#### 102. `bundles/bloxd.io/chunks/js/220.js` (Changed code · before: `L1071-L1072` → after: `L1071-L1072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fcR1071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-8d02f98dc877a38ad9f7274635c177c5d8e0a587cba68b6f8221499c1254e0fc) · [After (L1071-L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/220.js#L1071-L1072) · [Before (L1071-L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/220.js#L1071-L1072)

```diff
-           Ho: ZB,
-           Mo: JB
+           kD: Vt,
+           GD: qt
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/221.js` (c6gaap.4d6587ec → igzsf.a0b73a5f)

- **File**: `bundles/bloxd.io/chunks/js/221.js` (19 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928)

#### 1. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/221.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/221.js#L4)

```diff
-   36422: (BB, IB, ZB) => {
+   36635: (tt, et, Vt) => {
```

#### 2. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L7-L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/221.js#L8) · [Before (L7-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/221.js#L7-L8)

```diff
-       g: () => iB,
-       h: () => WB
+       g: () => bt
```

#### 3. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L10-L12` → after: `L10-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L10-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/221.js#L10-L12) · [Before (L10-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/221.js#L10-L12)

```diff
-     var TB = ZB(282),
-       JB = ZB(105);
-     const oB = new(ZB(36430).d)(new URL(ZB.p + ZB.u(3), ZB.b), {
+     var Ot = Vt(318),
+       qt = Vt(106);
+     const Dt = new(Vt(36637).b)(new URL(Vt.p + Vt.u(3), Vt.b), {
```

#### 4. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L16-L17` → after: `L16-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L16-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/221.js#L16-L17) · [Before (L16-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/221.js#L16-L17)

```diff
-     var GB = ZB(1860),
-       vB = ZB(2227);
+     var mt = Vt(1883),
+       dt = Vt(2214);
```

#### 5. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L36` → after: `L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/221.js#L36) · [Before (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/221.js#L36)

```diff
-           ZB(new Error(`A block icon's texture did not load: ${BB.slice(0,100)}`))
+           Vt(new Error(`A block icon's texture did not load: ${tt.slice(0,100)}`))
```

#### 6. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L39` → after: `L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/221.js#L39) · [Before (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/221.js#L39)

```diff
-       return (0, vB.h)(IB)
+       return (0, dt.f)(et)
```

#### 7. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L44` → after: `L44`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/221.js#L44) · [Before (L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/221.js#L44)

```diff
-       FB || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${BB}`), FB = !0, null === (IB = nB) || void 0 === IB || IB.terminate(), nB = null, hB = null, yB.clear(), UB.clear();
+       Et || console.warn(`[blockIconWorker] block icons draw on the page, as the worker ${tt}`), Et = !0, null === (et = Xt) || void 0 === et || et.terminate(), Xt = null, Qt = null, Nt.clear(), Mt.clear();
```

#### 8. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L52` → after: `L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/221.js#L52) · [Before (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/221.js#L52)

```diff
-         if ("page" === TB.d.ios_icon_worker_v1 && (0, JB.isWebKit)()) return;
+         if ("page" === Ot.c.ios_icon_worker_v1 && (0, qt.isWebKit)()) return;
```

#### 9. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L58` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/221.js#L58) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/221.js#L58)

```diff
-           return void dB(`did not start (${String(vB)})`)
+           return void Jt(`did not start (${String(dt)})`)
```

#### 10. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/221.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/221.js#L69)

```diff
-           else if ("failed" === ZB.type) dB(`failed a draw (${ZB.message})`);
+           else if ("failed" === Vt.type) Jt(`failed a draw (${Vt.message})`);
```

#### 11. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L75` → after: `L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/221.js#L75) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/221.js#L75)

```diff
-           IB.preventDefault(), dB(`stopped (${IB.message||"its script did not load or run"})`), BB()
+           et.preventDefault(), Jt(`stopped (${et.message||"its script did not load or run"})`), tt()
```

#### 12. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L77-L78` → after: `L77-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L77-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/221.js#L77-L78) · [Before (L77-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/221.js#L77-L78)

```diff
-         const ZB = `did not start in ${cB/1e3} s`;
-         await (0, GB.j)(IB, cB, ZB).catch((() => {
+         const Vt = `did not start in ${Ht/1e3} s`;
+         await (0, mt.h)(et, Ht, Vt).catch((() => {
```

#### 13. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L89-L90` → after: `L89-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L89-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/221.js#L89-L90) · [Before (L89-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/221.js#L89-L90)

```diff
-         IB = `did not answer in ${kB/1e3} s`;
-       (0, GB.j)(BB, kB, IB).then((() => {
+         et = `did not answer in ${jt/1e3} s`;
+       (0, mt.h)(tt, jt, et).then((() => {
```

#### 14. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L113` → after: `L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/221.js#L113) · [Before (L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/221.js#L113)

```diff
-           dB(`could not take an image (${String(JB)})`)
+           Jt(`could not take an image (${String(qt)})`)
```

#### 15. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L175` → after: `L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/221.js#L175) · [Before (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/221.js#L175)

```diff
-   36416: (BB, IB, ZB) => {
+   36632: (tt, et, Vt) => {
```

#### 16. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L179-L181` → after: `L179-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L179-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/221.js#L179-L181) · [Before (L179-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/221.js#L179-L181)

```diff
-       j: () => GB,
-       n: () => zB,
-       o: () => cB
+       l: () => mt,
+       o: () => lt,
+       s: () => Ht
```

#### 17. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L287` → after: `L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/221.js#L287) · [Before (L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/221.js#L287)

```diff
-   36430: (BB, IB, ZB) => {
+   36637: (tt, et, Vt) => {
```

#### 18. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L289` → after: `L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/221.js#L289) · [Before (L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/221.js#L289)

```diff
-       d: () => JB
+       b: () => qt
```

#### 19. `bundles/bloxd.io/chunks/js/221.js` (Changed code · before: `L324` → after: `L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928R324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-f9cb0cdadd6ebe34ceae285ecc911f3056158fcfb2d31e5298a1b49b0c653928) · [After (L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/221.js#L324) · [Before (L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/221.js#L324)

```diff
-           if (IB > 0 && ZB.searchParams.set("cache-bust", `${Date.now()}-${IB}`), await this.fetchWhole(ZB, BB)) return this.scriptUrl = ZB, !0;
+           if (et > 0 && Vt.searchParams.set("cache-bust", `${Date.now()}-${et}`), await this.fetchWhole(Vt, tt)) return this.scriptUrl = Vt, !0;
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/222.js` (c6gaap.4d6587ec → igzsf.a0b73a5f)

- **File**: `bundles/bloxd.io/chunks/js/222.js` (73 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783)

#### 1. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L1)

```diff
- /*! For license information please see c6gaap.222.db12de31.chunk.js.LICENSE.txt */
+ /*! For license information please see igzsf.222.e227d559.chunk.js.LICENSE.txt */
```

#### 2. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L5` → after: `L5`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L5) · [Before (L5)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L5)

```diff
-   39636: (BB, IB, ZB) => {
+   39787: (tt, et, Vt) => {
```

#### 3. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L7` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L7) · [Before (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L7)

```diff
-     var TB = ZB(364);
+     var Ot = Vt(404);
```

#### 4. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L54` → after: `L54`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L54) · [Before (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L54)

```diff
-   39629: BB => {
+   39780: tt => {
```

#### 5. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L65` → after: `L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L65) · [Before (L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L65)

```diff
-         for (var nB = 0, hB = Math.floor, zB = 0 | hB(IB), FB = 0 | hB(ZB), NB = 0 | hB(TB), gB = JB > 0 ? 1 : -1, qB = oB > 0 ? 1 : -1, yB = GB > 0 ? 1 : -1, UB = Math.abs(1 / JB), WB = Math.abs(1 / oB), dB = Math.abs(1 / GB), CB = UB < 1 / 0 ? UB * (gB > 0 ? zB + 1 - IB : IB -  … [truncated]
+         for (var Xt = 0, Qt = Math.floor, lt = 0 | Qt(et), Et = 0 | Qt(Vt), ft = 0 | Qt(Ot), wt = qt > 0 ? 1 : -1, yt = Dt > 0 ? 1 : -1, Nt = mt > 0 ? 1 : -1, Mt = Math.abs(1 / qt), bt = Math.abs(1 / Dt), Jt = Math.abs(1 / mt), Ct = Mt < 1 / 0 ? Mt * (wt > 0 ? lt + 1 - et : et -  … [truncated]
```

#### 6. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L74` → after: `L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L74) · [Before (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L74)

```diff
-   39182: (BB, IB, ZB) => {
+   39322: (tt, et, Vt) => {
```

#### 7. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L76-L77` → after: `L76-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L76-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L76-L77) · [Before (L76-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L76-L77)

```diff
-       d: () => vB,
-       f: () => oB
+       c: () => dt,
+       g: () => Dt
```

#### 8. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L79` → after: `L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L79) · [Before (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L79)

```diff
-     var TB = ZB(4267);
+     var Ot = Vt(4204);
```

#### 9. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L87` → after: `L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L87) · [Before (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L87)

```diff
-       this.ZD = !1, this.stopPropagation = !1, this.nD = !1, this.disabled = !1
+       this.PU = !1, this.stopPropagation = !1, this.kU = !1, this.disabled = !1
```

#### 10. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L93` → after: `L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L93) · [Before (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L93)

```diff
-         this.element = BB || document, this.ZD = !!ZB.ZD, this.stopPropagation = !!ZB.stopPropagation, this.nD = !!ZB.nD, this.disabled = !!ZB.disabled, this.filterEvents = (BB, IB) => !0, this.ignoreEvent = BB => !1, this.down = new TB.EventEmitter, this.up = new TB.EventEmitter … [truncated]
+         this.element = tt || document, this.PU = !!Vt.PU, this.stopPropagation = !!Vt.stopPropagation, this.kU = !!Vt.kU, this.disabled = !!Vt.disabled, this.filterEvents = (tt, et) => !0, this.ignoreEvent = tt => !1, this.down = new Ot.EventEmitter, this.up = new Ot.EventEmitter … [truncated]
```

#### 11. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L96-L98` → after: `L96-L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R96) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L96-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L96-L98) · [Before (L96-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L96-L98)

```diff
-           wIB: 0,
-           OIB: 0,
-           YIB: 0
+           Ket: 0,
+           het: 0,
+           Wet: 0
```

#### 12. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L133` → after: `L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L133) · [Before (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L133)

```diff
-         kB(this.zD), kB(this.pressCount), kB(this.releaseCount)
+         jt(this.rU), jt(this.pressCount), jt(this.releaseCount)
```

#### 13. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L211` → after: `L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L211) · [Before (L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L211)

```diff
-             } return console.error(`Did not find touch id ${zB}`), [0, 0]
+             } return console.error(`Did not find touch id ${lt}`), [0, 0]
```

#### 14. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L215` → after: `L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L215) · [Before (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L215)

```diff
-       BB.zD.dx += ZB, BB.zD.dy += TB
+       tt.rU.dx += Vt, tt.rU.dy += Ot
```

#### 15. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L231` → after: `L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L231) · [Before (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L231)

```diff
-       BB.zD.wIB += (IB.deltaX || 0) * ZB, BB.zD.OIB += (IB.deltaY || 0) * ZB, BB.zD.YIB += (IB.deltaZ || 0) * ZB
+       tt.rU.Ket += (et.deltaX || 0) * Vt, tt.rU.het += (et.deltaY || 0) * Vt, tt.rU.Wet += (et.deltaZ || 0) * Vt
```

#### 16. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L235` → after: `L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L235) · [Before (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L235)

```diff
-       if (!BB.nD) return IB.preventDefault(), !1
+       if (!tt.kU) return et.preventDefault(), !1
```

#### 17. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L303` → after: `L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L303) · [Before (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L303)

```diff
-       }))), "button" in TB || (ZB.ZD && !TB.defaultPrevented && TB.preventDefault(), ZB.stopPropagation && TB.stopPropagation()))
+       }))), "button" in Ot || (Vt.PU && !Ot.defaultPrevented && Ot.preventDefault(), Vt.stopPropagation && Ot.stopPropagation()))
```

#### 18. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L307` → after: `L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L307) · [Before (L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L307)

```diff
-       return BB ? !IB : IB
+       return tt ? !et : et
```

#### 19. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L310` → after: `L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L310) · [Before (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L310)

```diff
-   36565: (BB, IB) => {
+   36785: (tt, et) => {
```

#### 20. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L318` → after: `L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L318) · [Before (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L318)

```diff
-       return (ZB = TB[oB.toLowerCase()]) ? ZB : (ZB = JB[oB.toLowerCase()]) || (1 === oB.length ? oB.charCodeAt(0) : void 0)
+       return (Vt = Ot[Dt.toLowerCase()]) ? Vt : (Vt = qt[Dt.toLowerCase()]) || (1 === Dt.length ? Dt.charCodeAt(0) : void 0)
```

#### 21. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L407` → after: `L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L407) · [Before (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L407)

```diff
-   39618: (BB, IB, ZB) => {
+   39768: (tt, et, Vt) => {
```

#### 22. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L409` → after: `L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L409) · [Before (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L409)

```diff
-       c: () => TB
+       e: () => Ot
```

#### 23. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L415` → after: `L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L415) · [Before (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L415)

```diff
-         this.qL = !1, this.dL = !1, this.bM = 30, this.yX = 0, this.wL = 100, this.mq = !1, this.fullscreen = !1, this.dU = function(BB) {}, this.YL = function(BB, IB, ZB) {}, this.fL = function() {}, this.kU = function() {}, this.RL = function() {}, this.onFullscreenChanged = fu … [truncated]
+         this.uF = !1, this.KF = !1, this.bI = 30, this.jF = 0, this.vF = 100, this.zy = !1, this.fullscreen = !1, this.bM = function(tt) {}, this.SF = function(tt, et, Vt) {}, this.YF = function() {}, this.iN = function() {}, this.ZF = function() {}, this.onFullscreenChanged = fu … [truncated]
```

#### 24. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L432` → after: `L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L432) · [Before (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L432)

```diff
-                 if (IB.lastFrameStarted = ZB, BB.yX > 0) {
+                 if (et.lastFrameStarted = Vt, tt.jF > 0) {
```

#### 25. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L434` → after: `L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L434) · [Before (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L434)

```diff
-                   var JB = 1e3 / BB.yX;
+                   var qt = 1e3 / tt.jF;
```

#### 26. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L440` → after: `L440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L440) · [Before (L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L440)

```diff
-                 var GB = 1e3 / BB.bM,
+                 var mt = 1e3 / tt.bI,
```

#### 27. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L443-L444` → after: `L443-L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L443-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L443-L444) · [Before (L443-L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L443-L444)

```diff
-                 BB.YL(oB, kB, GB), setTimeout(vB, 0, BB, !0)
-               }(BB), IB.intervalCB = () => vB(BB), requestAnimationFrame(IB.frameCB), IB.pollTime > 0 && (IB.intervalID = setInterval(IB.intervalCB, Math.max(IB.pollTime, 1e3 / BB.bM / 2)))
+                 tt.SF(Dt, jt, mt), setTimeout(dt, 0, tt, !0)
+               }(tt), et.intervalCB = () => dt(tt), requestAnimationFrame(et.frameCB), et.pollTime > 0 && (et.intervalID = setInterval(et.intervalCB, Math.max(et.pollTime, 1e3 / tt.bI / 2)))
```

#### 28. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L461` → after: `L461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L461) · [Before (L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L461)

```diff
-                 ZB = IB === document.pointerLockElement, BB.RL(ZB)
+                 Vt = et === document.pointerLockElement, tt.ZF(Vt)
```

#### 29. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L466` → after: `L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L466) · [Before (L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L466)

```diff
-               })), Object.defineProperty(BB, "mq", {
+               })), Object.defineProperty(tt, "zy", {
```

#### 30. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L473` → after: `L473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L473) · [Before (L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L473)

```diff
-                 BB.qL && JB(!0), BB.dL && oB(!0)
+                 tt.uF && qt(!0), tt.KF && Dt(!0)
```

#### 31. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L475` → after: `L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L475) · [Before (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L475)

```diff
-               var GB = () => BB.kU();
+               var mt = () => tt.iN();
```

#### 32. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L479` → after: `L479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L479) · [Before (L479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L479)

```diff
-             }(this, BB), this.fL()
+             }(this, tt), this.YF()
```

#### 33. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L492` → after: `L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L492) · [Before (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L492)

```diff
-       for (var IB = BB._data, ZB = 1e3 / BB.bM, TB = IB.nowObject.now() + GB, JB = 0; IB.nowObject.now() >= IB.lastTickStarted + ZB && IB.nowObject.now() < TB && ++JB <= oB;) BB.dU(ZB), IB.lastTickStarted += ZB;
+       for (var et = tt._data, Vt = 1e3 / tt.bI, Ot = et.nowObject.now() + mt, qt = 0; et.nowObject.now() >= et.lastTickStarted + Vt && et.nowObject.now() < Ot && ++qt <= Dt;) tt.bM(Vt), et.lastTickStarted += Vt;
```

#### 34. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L499` → after: `L499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L499) · [Before (L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L499)

```diff
-   36717: (BB, IB, ZB) => {
+   36950: (tt, et, Vt) => {
```

#### 35. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L525` → after: `L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L525) · [Before (L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L525)

```diff
-   36600: BB => {
+   36830: tt => {
```

#### 36. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L640` → after: `L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L640) · [Before (L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L640)

```diff
-   39039: (BB, IB, ZB) => {
+   39177: (tt, et, Vt) => {
```

#### 37. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L650` → after: `L650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L650) · [Before (L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L650)

```diff
-       b: () => TB
+       e: () => Ot
```

#### 38. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L653` → after: `L653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L653) · [Before (L653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L653)

```diff
-   39032: (BB, IB, ZB) => {
+   39169: (tt, et, Vt) => {
```

#### 39. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L663` → after: `L663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L663) · [Before (L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L663)

```diff
-       d: () => TB
+       b: () => Ot
```

#### 40. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L666` → after: `L666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L666) · [Before (L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L666)

```diff
-   38714: (BB, IB, ZB) => {
+   38897: (tt, et, Vt) => {
```

#### 41. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L668` → after: `L668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L668) · [Before (L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L668)

```diff
-       b: () => oB
+       d: () => Dt
```

#### 42. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L670` → after: `L670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L670) · [Before (L670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L670)

```diff
-     var TB = ZB(38718);
+     var Ot = Vt(38899);
```

#### 43. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L709` → after: `L709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L709) · [Before (L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L709)

```diff
-   38754: (BB, IB, ZB) => {
+   38927: (tt, et, Vt) => {
```

#### 44. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L711-L714` → after: `L711-L714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L711-L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L711-L714) · [Before (L711-L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L711-L714)

```diff
-       e: () => JB,
-       i: () => oB,
-       j: () => GB,
-       n: () => vB
+       b: () => qt,
+       f: () => Dt,
+       h: () => mt,
+       i: () => dt
```

#### 45. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L716` → after: `L716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L716) · [Before (L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L716)

```diff
-     var TB = ZB(37311);
+     var Ot = Vt(37513);
```

#### 46. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L722` → after: `L722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L722) · [Before (L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L722)

```diff
-         this.color2 ? TB.g.LerpToRef(this.color1, this.color2, Math.random(), BB) : BB.TY(this.color1)
+         this.color2 ? Ot.c.LerpToRef(this.color1, this.color2, Math.random(), tt) : tt.rK(this.color1)
```

#### 47. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L753` → after: `L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L753) · [Before (L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L753)

```diff
-   38718: (BB, IB, ZB) => {
+   38899: (tt, et, Vt) => {
```

#### 48. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L776` → after: `L776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L776) · [Before (L776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L776)

```diff
-         const IB = BB => BB < 10 ? "0" + BB : "" + BB,
+         const et = tt => tt < 10 ? "0" + tt : "" + tt,
```

#### 49. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L791` → after: `L791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L791) · [Before (L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L791)

```diff
-         const kB = `<div style='color:${GB.color}'>${oB}</div><br>`;
+         const jt = `<div style='color:${mt.color}'>${Dt}</div><br>`;
```

#### 50. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L824` → after: `L824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L824) · [Before (L824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L824)

```diff
-   38756: (BB, IB, ZB) => {
+   38935: (tt, et, Vt) => {
```

#### 51. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L826` → after: `L826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L826) · [Before (L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L826)

```diff
-       c: () => GB
+       d: () => mt
```

#### 52. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L828-L830` → after: `L828-L830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L828-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L828-L830) · [Before (L828-L830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L828-L830)

```diff
-     var TB = ZB(37120),
-       JB = ZB(37158),
-       oB = ZB(38714);
+     var Ot = Vt(37336),
+       qt = Vt(37372),
+       Dt = Vt(38897);
```

#### 53. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L833` → after: `L833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L833) · [Before (L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L833)

```diff
-         this.direction1 = new TB.s(0, 1, 0), this.direction2 = new TB.s(0, 1, 0), this.minEmitBox = new TB.s(-.5, -.5, -.5), this.maxEmitBox = new TB.s(.5, .5, .5)
+         this.direction1 = new Ot.n(0, 1, 0), this.direction2 = new Ot.n(0, 1, 0), this.minEmitBox = new Ot.n(-.5, -.5, -.5), this.maxEmitBox = new Ot.n(.5, .5, .5)
```

#### 54. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L840` → after: `L840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L840) · [Before (L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L840)

```diff
-         TB.s.TransformNormalFromFloatsToRef(GB, vB, kB, BB, IB)
+         Ot.n.TransformNormalFromFloatsToRef(mt, dt, jt, tt, et)
```

#### 55. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L847` → after: `L847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L847) · [Before (L847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L847)

```diff
-         TB.s.TransformCoordinatesFromFloatsToRef(GB, vB, kB, BB, IB)
+         Ot.n.TransformCoordinatesFromFloatsToRef(mt, dt, jt, tt, et)
```

#### 56. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L851` → after: `L851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L851) · [Before (L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L851)

```diff
-         return oB.b.DeepCopy(this, BB), BB
+         return Dt.d.DeepCopy(this, tt), tt
```

#### 57. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L867` → after: `L867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L867) · [Before (L867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L867)

```diff
-         return BB.type = this.getClassName(), BB.direction1 = this.direction1.HTB(), BB.direction2 = this.direction2.HTB(), BB.minEmitBox = this.minEmitBox.HTB(), BB.maxEmitBox = this.maxEmitBox.HTB(), BB
+         return tt.type = this.getClassName(), tt.direction1 = this.direction1.GOt(), tt.direction2 = this.direction2.GOt(), tt.minEmitBox = this.minEmitBox.GOt(), tt.maxEmitBox = this.maxEmitBox.GOt(), tt
```

#### 58. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L870` → after: `L870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L870) · [Before (L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L870)

```diff
-         TB.s.FromArrayToRef(BB.direction1, 0, this.direction1), TB.s.FromArrayToRef(BB.direction2, 0, this.direction2), TB.s.FromArrayToRef(BB.minEmitBox, 0, this.minEmitBox), TB.s.FromArrayToRef(BB.maxEmitBox, 0, this.maxEmitBox)
+         Ot.n.FromArrayToRef(tt.direction1, 0, this.direction1), Ot.n.FromArrayToRef(tt.direction2, 0, this.direction2), Ot.n.FromArrayToRef(tt.minEmitBox, 0, this.minEmitBox), Ot.n.FromArrayToRef(tt.maxEmitBox, 0, this.maxEmitBox)
```

#### 59. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L874` → after: `L874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L874) · [Before (L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L874)

```diff
-   38712: (BB, IB, ZB) => {
+   38888: (tt, et, Vt) => {
```

#### 60. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L876-L877` → after: `L876-L877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L876-L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L876-L877) · [Before (L876-L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L876-L877)

```diff
-       b: () => vB,
-       d: () => GB
+       c: () => dt,
+       f: () => mt
```

#### 61. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L879-L881` → after: `L879-L881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L879-L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L879-L881) · [Before (L879-L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L879-L881)

```diff
-     var TB = ZB(37120),
-       JB = ZB(37158),
-       oB = ZB(38714);
+     var Ot = Vt(37336),
+       qt = Vt(37372),
+       Dt = Vt(38897);
```

#### 62. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L888` → after: `L888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L888) · [Before (L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L888)

```diff
-         this.radius = BB, this.height = IB, this.radiusRange = ZB, this.directionRandomizer = JB, this._tempVector = TB.s.Zero()
+         this.radius = tt, this.height = et, this.radiusRange = Vt, this.directionRandomizer = qt, this._tempVector = Ot.n.Zero()
```

#### 63. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L891` → after: `L891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L891) · [Before (L891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L891)

```diff
-         ZB.position.subtractToRef(BB.getTranslation(), this._tempVector), this._tempVector.normalize(), TB.s.TransformNormalToRef(this._tempVector, GB, this._tempVector);
+         Vt.position.subtractToRef(tt.getTranslation(), this._tempVector), this._tempVector.normalize(), Ot.n.TransformNormalToRef(this._tempVector, mt, this._tempVector);
```

#### 64. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L894` → after: `L894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L894) · [Before (L894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L894)

```diff
-         kB += (0, JB.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = vB, this._tempVector.x = Math.sin(kB), this._tempVector.z = Math.cos(kB), this._tempVector.normalize(), oB ? IB.TY(this._tempVector) : TB.s.TransformNormalFromFloatsToRef … [truncated]
+         jt += (0, qt.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = dt, this._tempVector.x = Math.sin(jt), this._tempVector.z = Math.cos(jt), this._tempVector.normalize(), Dt ? et.rK(this._tempVector) : Ot.n.TransformNormalFromFloatsToRef … [truncated]
```

#### 65. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L903` → after: `L903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L903) · [Before (L903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L903)

```diff
-         oB ? IB.cBB(nB, GB, hB) : TB.s.TransformCoordinatesFromFloatsToRef(nB, GB, hB, BB, IB)
+         Dt ? et.W9(Xt, mt, Qt) : Ot.n.TransformCoordinatesFromFloatsToRef(Xt, mt, Qt, tt, et)
```

#### 66. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L907` → after: `L907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L907) · [Before (L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L907)

```diff
-         return oB.b.DeepCopy(this, BB), BB
+         return Dt.d.DeepCopy(this, tt), tt
```

#### 67. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L934-L935` → after: `L934-L935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L934-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L934-L935) · [Before (L934-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L934-L935)

```diff
-           JB = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new TB.s(0, 1, 0),
-           oB = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new TB.s(0, 1, 0);
+           qt = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Ot.n(0, 1, 0),
+           Dt = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Ot.n(0, 1, 0);
```

#### 68. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L942` → after: `L942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L942) · [Before (L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L942)

```diff
-         oB ? IB.cBB(GB, vB, kB) : TB.s.TransformNormalFromFloatsToRef(GB, vB, kB, BB, IB)
+         Dt ? et.W9(mt, dt, jt) : Ot.n.TransformNormalFromFloatsToRef(mt, dt, jt, tt, et)
```

#### 69. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L946` → after: `L946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L946) · [Before (L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L946)

```diff
-         return oB.b.DeepCopy(this, BB), BB
+         return Dt.d.DeepCopy(this, tt), tt
```

#### 70. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L962` → after: `L962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L962) · [Before (L962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L962)

```diff
-         return BB.direction1 = this.direction1.HTB(), BB.direction2 = this.direction2.HTB(), BB
+         return tt.direction1 = this.direction1.GOt(), tt.direction2 = this.direction2.GOt(), tt
```

#### 71. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L965` → after: `L965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L965) · [Before (L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L965)

```diff
-         super.parse(BB), TB.s.FromArrayToRef(BB.direction1, 0, this.direction1), TB.s.FromArrayToRef(BB.direction2, 0, this.direction2)
+         super.parse(tt), Ot.n.FromArrayToRef(tt.direction1, 0, this.direction1), Ot.n.FromArrayToRef(tt.direction2, 0, this.direction2)
```

#### 72. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L969` → after: `L969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L969) · [Before (L969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L969)

```diff
-   38844: (BB, IB, ZB) => {
+   39010: (tt, et, Vt) => {
```

#### 73. `bundles/bloxd.io/chunks/js/222.js` (Changed code · before: `L984` → after: `L984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783R984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-3bcbac8c7ba6a74f67b74726197715de04c40b5b32a446edd2b88a3cc659c783) · [After (L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/222.js#L984) · [Before (L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/222.js#L984)

```diff
-         const IB = "function" == typeof BB ? BB : function(BB) {
+         const et = "function" == typeof tt ? tt : function(tt) {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/223.js` (c6gaap.4d6587ec → igzsf.a0b73a5f)

- **File**: `bundles/bloxd.io/chunks/js/223.js` (214 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e)

#### 1. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/223.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/223.js#L4)

```diff
-   41101: (BB, IB, ZB) => {
+   41276: (tt, et, Vt) => {
```

#### 2. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L9-L14` → after: `L9-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L9-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/223.js#L9-L14) · [Before (L9-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/223.js#L9-L14)

```diff
-       JB = ZB(1542),
-       oB = ZB(37033),
-       GB = ZB(2540),
-       vB = ZB(2549),
-       kB = ZB(2526),
-       cB = ZB(36587);
+       qt = Vt(1583),
+       Dt = Vt(37252),
+       mt = Vt(2516),
+       dt = Vt(2523),
+       jt = Vt(2498),
+       Ht = Vt(36804);
```

#### 3. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L30` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/223.js#L30) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/223.js#L30)

```diff
-     var hB = ZB(1091),
+     var Qt = Vt(1140),
```

#### 4. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L32-L39` → after: `L32-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L32-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/223.js#L32-L39) · [Before (L32-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/223.js#L32-L39)

```diff
-       FB = ZB(1248),
-       NB = ZB(1102),
-       gB = ZB(1397),
-       qB = ZB(2797),
-       yB = ZB(5177),
-       UB = ZB(3625);
-     var WB = ZB(2054),
-       dB = ZB(1516);
+       Et = Vt(1286),
+       ft = Vt(1152),
+       wt = Vt(1436),
+       yt = Vt(2745),
+       Nt = Vt(5186),
+       Mt = Vt(3510);
+     var bt = Vt(2063),
+       Jt = Vt(1556);
```

#### 5. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L85-L89` → after: `L85-L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L85-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/223.js#L85-L89) · [Before (L85-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/223.js#L85-L89)

```diff
-     var OB = ZB(2792),
-       YB = ZB(36580),
-       iB = ZB(36747),
-       pB = ZB(3294),
-       aB = ZB(360);
+     var vt = Vt(2742),
+       Wt = Vt(36799),
+       St = Vt(36978),
+       ct = Vt(3192),
+       Rt = Vt(391);
```

#### 6. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L95` → after: `L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/223.js#L95) · [Before (L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/223.js#L95)

```diff
-         return "string" === typeof TB ? TB : "entityName" in TB ? TB.entityName : "translationKey" in TB ? BB(TB.translationKey, (0, FB.s)(TB.params, ZB)) : ""
+         return "string" === typeof Ot ? Ot : "entityName" in Ot ? Ot.entityName : "translationKey" in Ot ? tt(Ot.translationKey, (0, Et.p)(Ot.params, Vt)) : ""
```

#### 7. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L100-L101` → after: `L100-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L100-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/223.js#L100-L101) · [Before (L100-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/223.js#L100-L101)

```diff
-       return JB - TB < 6e4 ? BB(`${ZB}JustNow`) : BB(ZB, {
-         time: (0, aB.hb)((0, FB.o)(IB, ZB), TB, JB)
+       return qt - Ot < 6e4 ? tt(`${Vt}JustNow`) : tt(Vt, {
+         time: (0, Rt.mb)((0, Et.o)(et, Vt), Ot, qt)
```

#### 8. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L104-L106` → after: `L104-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L104-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/223.js#L104-L106) · [Before (L104-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/223.js#L104-L106)

```diff
-     var jB = ZB(1960),
-       PB = ZB(1746),
-       RB = ZB(1153);
+     var Zt = Vt(2001),
+       Lt = Vt(1770),
+       Ft = Vt(1188);
```

#### 9. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L133-L134` → after: `L133-L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L133-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/223.js#L133-L134) · [Before (L133-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/223.js#L133-L134)

```diff
-       } = (0, FB.G)(), [cB, nB] = (0, TB.useState)(!1), [hB, zB] = (0, TB.useState)(""), gB = cB || null !== GB && IB.indexOf(GB) >= ZB, yB = (gB || IB.length <= ZB) && null !== JB && IB.length > JB, UB = hB.trim().toLowerCase();
-       let WB = gB ? IB : IB.slice(0, ZB);
+       } = (0, Et.H)(), [Ht, Xt] = (0, Ot.useState)(!1), [Qt, lt] = (0, Ot.useState)(""), wt = Ht || null !== mt && et.indexOf(mt) >= Vt, Nt = (wt || et.length <= Vt) && null !== qt && et.length > qt, Mt = Qt.trim().toLowerCase();
+       let bt = wt ? et : et.slice(0, Vt);
```

#### 10. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L136` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/223.js#L136) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/223.js#L136)

```diff
-         children: [yB && (0, RB.jsx)(PB.c, {
+         children: [Nt && (0, Ft.jsx)(Lt.d, {
```

#### 11. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L150` → after: `L150`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/223.js#L150) · [Before (L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/223.js#L150)

```diff
-               children: [oB, " ", (0, RB.jsx)(NB.d, {
+               children: [Dt, " ", (0, Ft.jsx)(ft.b, {
```

#### 12. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L198` → after: `L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/223.js#L198) · [Before (L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/223.js#L198)

```diff
-         children: (0, RB.jsx)(PB.c, {
+         children: (0, Ft.jsx)(Lt.d, {
```

#### 13. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L233` → after: `L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/223.js#L233) · [Before (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/223.js#L233)

```diff
-       } = (0, FB.G)(), [UB, WB] = (0, TB.useState)(null), {
+       } = (0, Et.H)(), [Mt, bt] = (0, Ot.useState)(null), {
```

#### 14. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L235` → after: `L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/223.js#L235) · [Before (L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/223.js#L235)

```diff
-       } = hB, QB = `player:${GB}`, sB = function(BB, IB) {
+       } = Qt, ut = `player:${mt}`, Kt = function(tt, et) {
```

#### 15. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L254` → after: `L254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/223.js#L254) · [Before (L254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/223.js#L254)

```diff
-         return null !== (IB = null === (ZB = (BB => CB.roles.find((IB => IB.role === BB)))(BB)) || void 0 === ZB ? void 0 : ZB.label) && void 0 !== IB ? IB : BB
+         return null !== (et = null === (Vt = (tt => Ct.roles.find((et => et.role === tt)))(tt)) || void 0 === Vt ? void 0 : Vt.label) && void 0 !== et ? et : tt
```

#### 16. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L279` → after: `L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/223.js#L279) · [Before (L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/223.js#L279)

```diff
-         EB = `${qB("lobbyManage:roleConfirm",{playerName:GB,role:XB(UB.role)})} ${null!==(DB=uB(UB.role))&&void 0!==DB?DB:""}`
+         Tt = `${yt("lobbyManage:roleConfirm",{playerName:mt,role:zt(Mt.role)})} ${null!==(gt=Ut(Mt.role))&&void 0!==gt?gt:""}`
```

#### 17. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L294` → after: `L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/223.js#L294) · [Before (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/223.js#L294)

```diff
-         children: (0, RB.jsxs)(OB.e, {
+         children: (0, Ft.jsxs)(vt.f, {
```

#### 18. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L298` → after: `L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/223.js#L298) · [Before (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/223.js#L298)

```diff
-           opensProfileCard: !cB && (0, YB.d)(!0, GB, zB),
+           opensProfileCard: !Ht && (0, Wt.e)(!0, mt, lt),
```

#### 19. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L302` → after: `L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/223.js#L302) · [Before (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/223.js#L302)

```diff
-             children: ["ban" === UB.kind && (0, RB.jsxs)(dB.M, {
+             children: ["ban" === Mt.kind && (0, Ft.jsxs)(Jt.G, {
```

#### 20. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L314` → after: `L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/223.js#L314) · [Before (L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/223.js#L314)

```diff
-               children: [(0, RB.jsx)(NB.d, {
+               children: [(0, Ft.jsx)(ft.b, {
```

#### 21. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L320` → after: `L320`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/223.js#L320) · [Before (L320)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/223.js#L320)

```diff
-             }), "role" === UB.kind && (0, RB.jsx)(dB.g, {
+             }), "role" === Mt.kind && (0, Ft.jsx)(Jt.f, {
```

#### 22. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L332` → after: `L332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/223.js#L332) · [Before (L332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/223.js#L332)

```diff
-             }), (0, RB.jsx)(dB.k, {
+             }), (0, Ft.jsx)(Jt.g, {
```

#### 23. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L342-L343` → after: `L342-L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L342-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/223.js#L342-L343) · [Before (L342-L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/223.js#L342-L343)

```diff
-               children: [sB.gamemode && null !== fB && (0, RB.jsx)(pB.c, {
-                 options: (null !== (IB = CB.gamemodes) && void 0 !== IB ? IB : []).map((BB => ({
+               children: [Kt.gamemode && null !== At && (0, Ft.jsx)(ct.e, {
+                 options: (null !== (et = Ct.gamemodes) && void 0 !== et ? et : []).map((tt => ({
```

#### 24. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L347` → after: `L347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/223.js#L347) · [Before (L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/223.js#L347)

```diff
-                 value: null !== (ZB = PB.get("gamemode")) && void 0 !== ZB ? ZB : fB.gamemode,
+                 value: null !== (Vt = Lt.get("gamemode")) && void 0 !== Vt ? Vt : At.gamemode,
```

#### 25. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L359` → after: `L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/223.js#L359) · [Before (L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/223.js#L359)

```diff
-               }), sB.roles.length > 0 && null !== fB && (0, RB.jsx)(pB.c, {
+               }), Kt.roles.length > 0 && null !== At && (0, Ft.jsx)(ct.e, {
```

#### 26. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L364` → after: `L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/223.js#L364) · [Before (L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/223.js#L364)

```diff
-                 value: null !== (oB = PB.get("role")) && void 0 !== oB ? oB : fB.role,
+                 value: null !== (Dt = Lt.get("role")) && void 0 !== Dt ? Dt : At.role,
```

#### 27. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L382` → after: `L382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/223.js#L382) · [Before (L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/223.js#L382)

```diff
-               children: [sB.kick && (0, RB.jsxs)(dB.k, {
+               children: [Kt.kick && (0, Ft.jsxs)(Jt.g, {
```

#### 28. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L384` → after: `L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/223.js#L384) · [Before (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/223.js#L384)

```diff
-                 ariaLabel: `${qB("lobbyManageEntry:kick")} ${GB}`,
+                 ariaLabel: `${yt("lobbyManageEntry:kick")} ${mt}`,
```

#### 29. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L396` → after: `L396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/223.js#L396) · [Before (L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/223.js#L396)

```diff
-                 children: [(0, RB.jsx)(NB.d, {
+                 children: [(0, Ft.jsx)(ft.b, {
```

#### 30. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L402` → after: `L402`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/223.js#L402) · [Before (L402)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/223.js#L402)

```diff
-               }), sB.ban && (0, RB.jsxs)(dB.N, {
+               }), Kt.ban && (0, Ft.jsxs)(Jt.K, {
```

#### 31. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L404` → after: `L404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/223.js#L404) · [Before (L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/223.js#L404)

```diff
-                 ariaLabel: `${qB("lobbyManageEntry:ban")} ${GB}`,
+                 ariaLabel: `${yt("lobbyManageEntry:ban")} ${mt}`,
```

#### 32. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L412` → after: `L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/223.js#L412) · [Before (L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/223.js#L412)

```diff
-                 children: [(0, RB.jsx)(NB.d, {
+                 children: [(0, Ft.jsx)(ft.b, {
```

#### 33. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L418` → after: `L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/223.js#L418) · [Before (L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/223.js#L418)

```diff
-               }), sB.unban && (0, RB.jsxs)(dB.k, {
+               }), Kt.unban && (0, Ft.jsxs)(Jt.g, {
```

#### 34. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L420` → after: `L420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/223.js#L420) · [Before (L420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/223.js#L420)

```diff
-                 ariaLabel: `${qB("lobbyManageEntry:unban")} ${GB}`,
+                 ariaLabel: `${yt("lobbyManageEntry:unban")} ${mt}`,
```

#### 35. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L431` → after: `L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/223.js#L431) · [Before (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/223.js#L431)

```diff
-                 children: [(0, RB.jsx)(NB.d, {
+                 children: [(0, Ft.jsx)(ft.b, {
```

#### 36. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L453` → after: `L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/223.js#L453) · [Before (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/223.js#L453)

```diff
-       } = (0, FB.G)(), nB = (0, WB.j)("players"), hB = (0, WB.j)("hiddenPlayerNames"), zB = (0, TB.useRef)(null), {
+       } = (0, Et.H)(), Xt = (0, bt.h)("players"), Qt = (0, bt.h)("hiddenPlayerNames"), lt = (0, Ot.useRef)(null), {
```

#### 37. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L455` → after: `L455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/223.js#L455) · [Before (L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/223.js#L455)

```diff
-       } = GB, yB = null === nB.localId ? null : null !== (IB = null === (ZB = nB.byId[nB.localId]) || void 0 === ZB ? void 0 : ZB.name) && void 0 !== IB ? IB : null, [UB] = (0, TB.useState)((() => QB(gB, yB))), CB = function(BB, IB, ZB) {
+       } = mt, Nt = null === Xt.localId ? null : null !== (et = null === (Vt = Xt.byId[Xt.localId]) || void 0 === Vt ? void 0 : Vt.name) && void 0 !== et ? et : null, [Mt] = (0, Ot.useState)((() => ut(wt, Nt))), Ct = function(tt, et, Vt) {
```

#### 38. `bundles/bloxd.io/chunks/js/223.js` (Changed code · before: `L474` → after: `L474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26eR474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/05ef2440c80b3f0964bf92a7fc780a72dced3a22...build/bloxd.io/igzsf.a0b73a5f#diff-59fba3e5612d1f3d852c0f1d2bc99d6d8bc9a289a4e5caf2be883716e536f26e) · [After (L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/223.js#L474) · [Before (L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/05ef2440c80b3f0964bf92a7fc780a72dced3a22/bundles/bloxd.io/chunks/js/223.js#L474)

```diff
-         const ZB = null === (BB = zB.current) || void 0 === BB ? void 0 : BB.querySelector(`[data-lobby-manage-row="${CSS.escape(vB.name)}"]`);
+         const Vt = null === (tt = lt.current) || void 0 === tt ? void 0 : tt.querySelector(`[data-lobby-manage-row="${CSS.escape(dt.name)}"]`);
```
