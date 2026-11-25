# Changed — Bundle Modifications Report (Part 056 / 142)

- **Updated at**: `2026-11-25T16:44 JST`
- **Part**: `56 / 142` (**421** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 055](part-055.md) · [Part 057 →](part-057.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/274.js` (dz8ef.98c5e741 → wp3j0a.a13381cf · continued)

- **File**: `bundles/bloxd.io/chunks/js/274.js` (669 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3)

#### 377. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4568` → after: `L4568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L4568) · [Before (L4568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L4568)

```diff
-         this.gpu = this.createGpu(su.byteLength), this.bytes = su, this.words = new Uint32Array(su.buffer), this.HY.grow(ju), Uu && (this.replaced.push(Uu), this.onReplaced(Uu)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, Eu * TX)
+         this.gpu = this.createGpu(wG.byteLength), this.bytes = wG, this.words = new Uint32Array(wG.buffer), this.Bh.grow(ZG), SG && (this.replaced.push(SG), this.onReplaced(SG)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, bG * Ty)
```

#### 378. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4658` → after: `L4658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L4658) · [Before (L4658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L4658)

```diff
-         this.engine = uu, this.device = Eu, this.buffers = new WeakMap, this.E_ = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.atlasSources = new WeakMap, this.atlasRebuilds = new WeakSet, t … [truncated]
+         this.engine = GG, this.device = bG, this.buffers = new WeakMap, this.j_ = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.atlasSources = new WeakMap, this.atlasRebuilds = new WeakSet, t … [truncated]
```

#### 379. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4677` → after: `L4677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L4677) · [Before (L4677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L4677)

```diff
-         null === (uu = this.arena) || void 0 === uu || uu.JG()
+         null === (GG = this.arena) || void 0 === GG || GG.kE()
```

#### 380. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4683` → after: `L4683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L4683) · [Before (L4683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L4683)

```diff
-         uu.Mb = Uu.byteLength, this.buffers.set(uu, {
+         GG.rp = SG.byteLength, this.buffers.set(GG, {
```

#### 381. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4720` → after: `L4720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L4720) · [Before (L4720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L4720)

```diff
-         uu.is32Bits = 4 === su.BYTES_PER_ELEMENT, uu.Mb = su.byteLength, this.buffers.set(uu, {
+         GG.is32Bits = 4 === wG.BYTES_PER_ELEMENT, GG.rp = wG.byteLength, this.buffers.set(GG, {
```

#### 382. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4756` → after: `L4756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L4756) · [Before (L4756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L4756)

```diff
-             const Eu = new Uint8Array(Math.max(null !== (Uu = null === Xu || void 0 === Xu ? void 0 : Xu.byteLength) && void 0 !== Uu ? Uu : 0, ju + su));
+             const bG = new Uint8Array(Math.max(null !== (SG = null === yG || void 0 === yG ? void 0 : yG.byteLength) && void 0 !== SG ? SG : 0, ZG + wG));
```

#### 383. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4820` → after: `L4820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L4820) · [Before (L4820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L4820)

```diff
-         const su = null !== (Eu = null === (ju = this.buffers.get(uu)) || void 0 === ju ? void 0 : ju.slot) && void 0 !== Eu ? Eu : -1;
+         const wG = null !== (bG = null === (ZG = this.buffers.get(GG)) || void 0 === ZG ? void 0 : ZG.slot) && void 0 !== bG ? bG : -1;
```

#### 384. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4826` → after: `L4826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L4826) · [Before (L4826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L4826)

```diff
-         return su ? su.slot >= 0 ? su.slot + su.size : null !== (Eu = null === (ju = su.gpu) || void 0 === ju ? void 0 : ju.size) && void 0 !== Eu ? Eu : 0 : 0
+         return wG ? wG.slot >= 0 ? wG.slot + wG.size : null !== (bG = null === (ZG = wG.gpu) || void 0 === ZG ? void 0 : ZG.size) && void 0 !== bG ? bG : 0 : 0
```

#### 385. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4830` → after: `L4830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L4830) · [Before (L4830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L4830)

```diff
-         return null !== (su = null !== (Uu = ju && this.modelInput(ju, Eu)) && void 0 !== Uu ? Uu : null === (Zu = null !== (Xu = this.E_.get(uu)) && void 0 !== Xu ? Xu : this.batchUploads.get(uu)) || void 0 === Zu ? void 0 : Zu.inputs[Eu]) && void 0 !== su ? su : null
+         return null !== (wG = null !== (SG = ZG && this.modelInput(ZG, bG)) && void 0 !== SG ? SG : null === (LG = null !== (yG = this.j_.get(GG)) && void 0 !== yG ? yG : this.batchUploads.get(GG)) || void 0 === LG ? void 0 : LG.inputs[bG]) && void 0 !== wG ? wG : null
```

#### 386. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4846` → after: `L4846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L4846) · [Before (L4846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L4846)

```diff
-         let ju = uu.gpu[Pu.f.lite];
+         let ZG = GG.gpu[mG.e.lite];
```

#### 387. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4862` → after: `L4862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L4862) · [Before (L4862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L4862)

```diff
-           }, uu.gpu[Pu.f.lite] = ju
+           }, GG.gpu[mG.e.lite] = ZG
```

#### 388. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4871` → after: `L4871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L4871) · [Before (L4871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L4871)

```diff
-               Mb: 0,
+               rp: 0,
```

#### 389. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4876` → after: `L4876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L4876) · [Before (L4876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L4876)

```diff
-             Mb: 0
+             rp: 0
```

#### 390. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4896` → after: `L4896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L4896) · [Before (L4896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L4896)

```diff
-             if (6 !== uu.length) throw new Error(`${uu.length} files where six faces were expected`);
+             if (6 !== GG.length) throw new Error(`${GG.length} files where six faces were expected`);
```

#### 391. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4983` → after: `L4983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L4983) · [Before (L4983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L4983)

```diff
-         return lu && lu.view === Zu.view && lu.sampler === Xu ? lu : (Uu.bound = {
+         return kG && kG.view === LG.view && kG.sampler === yG ? kG : (SG.bound = {
```

#### 392. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5000` → after: `L5000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5000) · [Before (L5000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5000)

```diff
-           Eu[0].layers === Uu && Eu[su] ? Zu === this.epoch && this.atlasBindings.set(uu, this.atlasBindings.get(Eu[su])) : console.error(`Lite: the new device splits the atlas ${zu(ju.urls[0])} into other arrays than its materials read`)
+           bG[0].layers === SG && bG[wG] ? LG === this.epoch && this.atlasBindings.set(GG, this.atlasBindings.get(bG[wG])) : console.error(`Lite: the new device splits the atlas ${xG(ZG.urls[0])} into other arrays than its materials read`)
```

#### 393. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5002` → after: `L5002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5002) · [Before (L5002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5002)

```diff
-           console.error(`Lite: could not build the atlas ${zu(ju.urls[0])} again on a new device`, uu)
+           console.error(`Lite: could not build the atlas ${xG(ZG.urls[0])} again on a new device`, GG)
```

#### 394. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5007` → after: `L5007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5007) · [Before (L5007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5007)

```diff
-         return null !== (Eu = null === (ju = this.heldSlot(uu)) || void 0 === ju ? void 0 : ju.state.decoded) && void 0 !== Eu ? Eu : null
+         return null !== (bG = null === (ZG = this.heldSlot(GG)) || void 0 === ZG ? void 0 : ZG.state.decoded) && void 0 !== bG ? bG : null
```

#### 395. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5014-L5015` → after: `L5014-L5015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5014-L5015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5014-L5015) · [Before (L5014-L5015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5014-L5015)

```diff
-         const Eu = uu.gpu[Pu.f.lite];
-         return (null === Eu || void 0 === Eu ? void 0 : Eu.epoch) === this.epoch ? Eu : void 0
+         const bG = GG.gpu[mG.e.lite];
+         return (null === bG || void 0 === bG ? void 0 : bG.epoch) === this.epoch ? bG : void 0
```

#### 396. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5026` → after: `L5026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5026) · [Before (L5026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5026)

```diff
-           } = Pu.i;
+           } = mG.g;
```

#### 397. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5047` → after: `L5047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5047) · [Before (L5047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5047)

```diff
-         const ju = uu.gpu[Pu.f.lite];
+         const ZG = GG.gpu[mG.e.lite];
```

#### 398. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5054` → after: `L5054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5054) · [Before (L5054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5054)

```diff
-           return "canvas" === Eu.kind ? null : `${Eu.kind}|${ul(Eu)}|${ju.noMipmap}|${ju.samplingMode}|${ju.invertY}`
+           return "canvas" === bG.kind ? null : `${bG.kind}|${By(bG)}|${ZG.noMipmap}|${ZG.samplingMode}|${ZG.invertY}`
```

#### 399. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5069` → after: `L5069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5069) · [Before (L5069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5069)

```diff
-           dynamicSource: null !== (Zu = null === ju || void 0 === ju ? void 0 : ju.state.dynamicSource) && void 0 !== Zu ? Zu : null
+           dynamicSource: null !== (LG = null === ZG || void 0 === ZG ? void 0 : ZG.state.dynamicSource) && void 0 !== LG ? LG : null
```

#### 400. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5085` → after: `L5085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5085) · [Before (L5085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5085)

```diff
-         return uu.gpu[Pu.f.lite] = qu, qu
+         return GG.gpu[mG.e.lite] = UG, UG
```

#### 401. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5088` → after: `L5088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5088) · [Before (L5088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5088)

```diff
-         const Zu = `${uu}|${Eu}|${ju}|${su}|${Uu}`;
+         const LG = `${GG}|${bG}|${ZG}|${wG}|${SG}`;
```

#### 402. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5126` → after: `L5126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5126) · [Before (L5126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5126)

```diff
-           Uu === this.epoch && (uu.failed = !0, console.warn(`Lite: could not load texture ${zu(Eu)}`, ju))
+           SG === this.epoch && (GG.failed = !0, console.warn(`Lite: could not load texture ${xG(bG)}`, ZG))
```

#### 403. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5134` → after: `L5134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5134) · [Before (L5134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5134)

```diff
-         const su = BX(this.engine, this.device, ju, (0, Pu.x)(Eu), uu.hasMips);
+         const wG = ny(this.engine, this.device, ZG, (0, mG.v)(bG), GG.hasMips);
```

#### 404. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5144` → after: `L5144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5144) · [Before (L5144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5144)

```diff
-         } = uu, su = (0, SX.d)(this.engine, Math.max(1, ju.width), Math.max(1, ju.height), {
+         } = GG, wG = (0, Ay.c)(this.engine, Math.max(1, ZG.width), Math.max(1, ZG.height), {
```

#### 405. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5169` → after: `L5169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5169) · [Before (L5169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5169)

```diff
-     var jl = ju(39093);
+     var bk = ZG(39152);
```

#### 406. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5173` → after: `L5173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5173) · [Before (L5173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5173)

```diff
-       uu._colorAttachment.storeOp = uu._targetSignature._sampleCount > 1 ? Eu : "store";
+       GG._colorAttachment.storeOp = GG._targetSignature._sampleCount > 1 ? bG : "store";
```

#### 407. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5177-L5180` → after: `L5177-L5180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5177-L5180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5177-L5180) · [Before (L5177-L5180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5177-L5180)

```diff
-     var Ul = ju(38154),
-       Zl = ju(38211),
-       Xl = ju(37854),
-       ll = ju(39887);
+     var wk = ZG(38175),
+       Sk = ZG(38225),
+       Lk = ZG(37835),
+       yk = ZG(39970);
```

#### 408. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5189-L5190` → after: `L5189-L5190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5189-L5190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5189-L5190) · [Before (L5189-L5190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5189-L5190)

```diff
-       uu.fov = Eu.fov, uu.near = Eu.near, uu.far = Eu.far, uu.renderWidth = ju.renderWidth, uu.renderHeight = ju.renderHeight, (0, Xl.p)(Eu.holderRotation, 0, Cl, 0), (0, Xl.d)(ql, 0, Cl, 0, Eu.holderPosition, 0, bl);
-       const su = Eu.jR;
+       GG.fov = bG.fov, GG.near = bG.near, GG.far = bG.far, GG.renderWidth = ZG.renderWidth, GG.renderHeight = ZG.renderHeight, (0, Lk.s)(bG.holderRotation, 0, Yk, 0), (0, Lk.d)(kk, 0, Yk, 0, bG.holderPosition, 0, Vk);
+       const wG = bG.I3;
```

#### 409. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5193` → after: `L5193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5193) · [Before (L5193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5193)

```diff
-       (0, Xl.i)(su, cl, fl, Uu), (0, Xl.f)(Uu, 0, Uu), (0, Xl.j)(Uu, bl, 0, Uu), (0, Xl.f)(Uu, 0, Uu);
+       (0, Lk.j)(wG, pk, Uk, SG), (0, Lk.g)(SG, 0, SG), (0, Lk.n)(SG, Vk, 0, SG), (0, Lk.g)(SG, 0, SG);
```

#### 410. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5195` → after: `L5195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5195) · [Before (L5195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5195)

```diff
-       (0, Xl.f)(Uu, 0, Zu), uu.eye[0] = Zu[12], uu.eye[1] = Zu[13], uu.eye[2] = Zu[14], Nl[0] = uu.fov, Nl[1] = uu.renderWidth / uu.renderHeight, Nl[2] = uu.near, Nl[3] = uu.far, (0, Xl.l)(Nl, uu.projectionMatrix), (0, Xl.j)(Uu, uu.projectionMatrix, 0, uu.viewProjectionMatrix), ( … [truncated]
+       (0, Lk.g)(SG, 0, LG), GG.eye[0] = LG[12], GG.eye[1] = LG[13], GG.eye[2] = LG[14], fk[0] = GG.fov, fk[1] = GG.renderWidth / GG.renderHeight, fk[2] = GG.near, fk[3] = GG.far, (0, Lk.q)(fk, GG.projectionMatrix), (0, Lk.n)(SG, GG.projectionMatrix, 0, GG.viewProjectionMatrix), ( … [truncated]
```

#### 411. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5202` → after: `L5202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5202) · [Before (L5202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5202)

```diff
-       }, (() => new Ul.d(0, 0, 0, 0))));
+       }, (() => new wk.b(0, 0, 0, 0))));
```

#### 412. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5218` → after: `L5218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5218) · [Before (L5218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5218)

```diff
-       return Eu.animTick = (0, Zl.e)(), Eu.timeMs = performance.now(), hl(Eu, uu.vY), uu.model.update(Eu.frameId), Eu
+       return bG.animTick = (0, Sk.e)(), bG.timeMs = performance.now(), hk(bG, GG.Ah), GG.model.update(bG.frameId), bG
```

#### 413. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5222` → after: `L5222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5222) · [Before (L5222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5222)

```diff
-       const Eu = uu.vY,
+       const bG = GG.Ah,
```

#### 414. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5225` → after: `L5225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5225) · [Before (L5225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5225)

```diff
-           uR: su
+           o3: wG
```

#### 415. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5227` → after: `L5227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5227) · [Before (L5227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5227)

```diff
-       return Ol(ju, su, Eu.wO()), Eu.onBeforeRenderObservable.notifyObservers(Eu), Yl(Eu, ju.frustum), Eu.onBeforeCameraRenderObservable.notifyObservers(Eu.activeCamera), Dl(uu)
+       return Qk(ZG, wG, bG.CK()), bG.onBeforeRenderObservable.notifyObservers(bG), Kk(bG, ZG.frustum), bG.onBeforeCameraRenderObservable.notifyObservers(bG.activeCamera), dk(GG)
```

#### 416. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5229-L5231` → after: `L5229-L5231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5229-L5231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5229-L5231) · [Before (L5229-L5231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5229-L5231)

```diff
-     var Ml = ju(37821),
-       el = ju(37922),
-       Gl = ju(38206);
+     var rk = ZG(37793),
+       zk = ZG(37910),
+       Ek = ZG(38214);
```

#### 417. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5235-L5237` → after: `L5235-L5237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5235-L5237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5235-L5237) · [Before (L5235-L5237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5235-L5237)

```diff
-       const su = (0, du.$)(uu);
-       if (!su || su.diffuseTexture && (0, Gl.h)(uu)) return null;
-       const Uu = null === (Eu = (0, du.z)(su, wu.h.name)) || void 0 === Eu ? void 0 : Eu.state,
+       const wG = (0, CG.eb)(GG);
+       if (!wG || wG.diffuseTexture && (0, Ek.g)(GG)) return null;
+       const SG = null === (bG = (0, CG.z)(wG, uG.i.name)) || void 0 === bG ? void 0 : bG.state,
```

#### 418. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5243` → after: `L5243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5243) · [Before (L5243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5243)

```diff
-         su.set(uu.diffuseColor, Xu.diffuse), su[Xu.diffuse + 3] = uu.alpha, su.set(uu.ambientColor, Xu.ambientAndCutoff), su[Xu.ambientAndCutoff + 3] = uu.alphaCutOff, su.set(uu.emissiveColor, Xu.emissiveAndLevel), su[Xu.emissiveAndLevel + 3] = null !== (Uu = null === (Zu = uu.di … [truncated]
+         wG.set(GG.diffuseColor, yG.diffuse), wG[yG.diffuse + 3] = GG.alpha, wG.set(GG.ambientColor, yG.ambientAndCutoff), wG[yG.ambientAndCutoff + 3] = GG.alphaCutOff, wG.set(GG.emissiveColor, yG.emissiveAndLevel), wG[yG.emissiveAndLevel + 3] = null !== (SG = null === (LG = GG.di … [truncated]
```

#### 419. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5249-L5250` → after: `L5249-L5250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5249-L5250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5249-L5250) · [Before (L5249-L5250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5249-L5250)

```diff
-         liquid: (0, Gl.j)(uu),
-         customRenderMat: (0, Gl.h)(uu),
+         liquid: (0, Ek.k)(GG),
+         customRenderMat: (0, Ek.g)(GG),
```

#### 420. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5254` → after: `L5254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5254) · [Before (L5254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5254)

```diff
-     var wl = ju(3012);
+     var uk = ZG(2865);
```

#### 421. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5269` → after: `L5269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5269) · [Before (L5269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5269)

```diff
-         this.arena = uu, this.HY = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.HY = new xX(Eu);
+         this.arena = GG, this.Bh = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.Bh = new Ry(bG);
```

#### 422. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5274` → after: `L5274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5274) · [Before (L5274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5274)

```diff
-         return this.HY.Mb
+         return this.Bh.rp
```

#### 423. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5294` → after: `L5294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5294) · [Before (L5294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5294)

```diff
-         return this.dropped || uu.start + uu.length > this.Mb
+         return this.dropped || GG.start + GG.length > this.rp
```

#### 424. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5328` → after: `L5328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5328) · [Before (L5328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5328)

```diff
-           label: `${su}-grow`
+           label: `${wG}-grow`
```

#### 425. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5330` → after: `L5330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5330) · [Before (L5330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5330)

```diff
-         Zu.buffer = this.createBuffer(Zu, !1), Xu.copyBufferToBuffer(Uu.buffer, 0, Zu.buffer, 0, Uu.units * ju), Uu.twin && (Zu.twin = this.createBuffer(Zu, !0), Xu.copyBufferToBuffer(Uu.twin, 0, Zu.twin, 0, Uu.units * this.arena.twinUnitBytes)), Eu.queue.submit([Xu.finish()]), t … [truncated]
+         LG.buffer = this.createBuffer(LG, !1), yG.copyBufferToBuffer(SG.buffer, 0, LG.buffer, 0, SG.units * ZG), SG.twin && (LG.twin = this.createBuffer(LG, !0), yG.copyBufferToBuffer(SG.twin, 0, LG.twin, 0, SG.units * this.arena.twinUnitBytes)), bG.queue.submit([yG.finish()]), t … [truncated]
```

#### 426. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5352-L5353` → after: `L5352-L5353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5352-L5353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5352-L5353) · [Before (L5352-L5353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5352-L5353)

```diff
-           label: Eu ? `${Xu}-light` : Xu,
-           size: uu.units * (Eu ? Uu : su),
+           label: bG ? `${yG}-light` : yG,
+           size: GG.units * (bG ? SG : wG),
```

#### 427. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5359` → after: `L5359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5359) · [Before (L5359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5359)

```diff
-           this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${Xu} buffer, taken as failed: ${String(ju)}`), this.settle(uu, Eu, !1, !1)
+           this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${yG} buffer, taken as failed: ${String(ZG)}`), this.settle(GG, bG, !1, !1)
```

#### 428. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5368` → after: `L5368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5368) · [Before (L5368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5368)

```diff
-             return this.HY.truncate(this.backings[Uu - 1].units), this.growable = !1, void this.promote()
+             return this.Bh.truncate(this.backings[SG - 1].units), this.growable = !1, void this.promote()
```

#### 429. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5393` → after: `L5393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5393) · [Before (L5393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5393)

```diff
-         if (this.device = uu, this.unitBytes = Eu, this.usage = ju, this.label = su, this.pages = [], this.drawing = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, t … [truncated]
+         if (this.device = GG, this.unitBytes = bG, this.usage = ZG, this.label = wG, this.pages = [], this.drawing = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, t … [truncated]
```

#### 430. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5416` → after: `L5416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5416) · [Before (L5416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5416)

```diff
-           const Eu = Uu.HY.allocate(uu);
+           const bG = SG.Bh.allocate(GG);
```

#### 431. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5425-L5426` → after: `L5425-L5426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5425-L5426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5425-L5426) · [Before (L5425-L5426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5425-L5426)

```diff
-           const ju = Math.min(this.ceiling, Math.max(2 * Eu.Mb, Eu.Mb + uu));
-           if (ju - Eu.Mb >= uu) return Eu.grow(ju), {
+           const ZG = Math.min(this.ceiling, Math.max(2 * bG.rp, bG.rp + GG));
+           if (ZG - bG.rp >= GG) return bG.grow(ZG), {
```

#### 432. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5428` → after: `L5428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5428) · [Before (L5428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5428)

```diff
-             start: Eu.HY.allocate(uu),
+             start: bG.Bh.allocate(GG),
```

#### 433. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5432` → after: `L5432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5432) · [Before (L5432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5432)

```diff
-         Eu && Eu !== this.pages[0] && 0 === Eu.HY.used && Eu.drop();
+         bG && bG !== this.pages[0] && 0 === bG.Bh.used && bG.drop();
```

#### 434. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5437` → after: `L5437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5437) · [Before (L5437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5437)

```diff
-           start: su.HY.allocate(uu),
+           start: wG.Bh.allocate(GG),
```

#### 435. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5446` → after: `L5446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5446) · [Before (L5446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5446)

```diff
-         Eu.HY.free(uu.start, uu.length), 0 === Eu.HY.used && Eu !== this.pages[0] && Eu !== this.pages[this.pages.length - 1] && Eu.drop()
+         bG.Bh.free(GG.start, GG.length), 0 === bG.Bh.used && bG !== this.pages[0] && bG !== this.pages[this.pages.length - 1] && bG.drop()
```

#### 436. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5456` → after: `L5456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5456) · [Before (L5456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5456)

```diff
-         this.warnOnce("outOfMemory", `out of GPU memory for a ${Eu}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, uu), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, uu) / 2));
+         this.warnOnce("outOfMemory", `out of GPU memory for a ${bG}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, GG), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, GG) / 2));
```

#### 437. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5470` → after: `L5470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5470) · [Before (L5470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5470)

```diff
-         for (const Uu of this.pages) uu += Uu.Mb, Eu += Uu.HY.used, ju += Uu.hasTwin ? Uu.Mb * this.twinUnitBytes : 0, su += Uu.allocatedBytes;
+         for (const SG of this.pages) GG += SG.rp, bG += SG.Bh.used, ZG += SG.hasTwin ? SG.rp * this.twinUnitBytes : 0, wG += SG.allocatedBytes;
```

#### 438. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5499-L5500` → after: `L5499-L5500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5499-L5500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5499-L5500) · [Before (L5499-L5500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5499-L5500)

```diff
-         const ju = HE.g.strideWithoutAtlas;
-         this.vertexArena = new al(uu, ju, GPUBufferUsage.VERTEX, `terrain-vertices-${ju}`), this.quadArena = new al(uu, el.e, GPUBufferUsage.STORAGE, "terrain-quads", {
+         const ZG = tb.f.strideWithoutAtlas;
+         this.vertexArena = new Wk(GG, ZG, GPUBufferUsage.VERTEX, `terrain-vertices-${ZG}`), this.quadArena = new Wk(GG, zk.b, GPUBufferUsage.STORAGE, "terrain-quads", {
```

#### 439. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5526` → after: `L5526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5526) · [Before (L5526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5526)

```diff
-         ju && 0 !== Eu.length && ju.page.live && (Eu.length < uu.vertexCount ? ju.page.arena.warnOnce("shortLight", `a part's ${Eu.length} light values are fewer than its ${uu.vertexCount} vertices, so its light is left as it was`) : (ju.page.writeLight(ju, Eu), uu.lit = !0))
+         ZG && 0 !== bG.length && ZG.page.live && (bG.length < GG.vertexCount ? ZG.page.arena.warnOnce("shortLight", `a part's ${bG.length} light values are fewer than its ${GG.vertexCount} vertices, so its light is left as it was`) : (ZG.page.writeLight(ZG, bG), GG.lit = !0))
```

#### 440. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5529` → after: `L5529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5529) · [Before (L5529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5529)

```diff
-         this.fullSky.length < Eu && (this.fullSky = new Uint16Array(Math.max(Eu, 4096)).fill(wl.g));
+         this.fullSky.length < bG && (this.fullSky = new Uint16Array(Math.max(bG, 4096)).fill(uk.k));
```

#### 441. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5591` → after: `L5591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5591) · [Before (L5591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5591)

```diff
-           code: (Zu = ju._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${Zu?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(pos … [truncated]
+           code: (LG = ZG._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${LG?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(pos … [truncated]
```

#### 442. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5625` → after: `L5625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5625) · [Before (L5625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5625)

```diff
-         return null !== (uu = null === (Eu = this.copy) || void 0 === Eu ? void 0 : Eu.view) && void 0 !== uu ? uu : null
+         return null !== (GG = null === (bG = this.copy) || void 0 === bG ? void 0 : bG.view) && void 0 !== GG ? GG : null
```

#### 443. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5639` → after: `L5639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5639) · [Before (L5639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5639)

```diff
-         if (fu += this.drawList(qu, Eu, uu._directBindings, 0, uu._directBindings.length), fu += this.drawList(qu, Eu, Uu, 0, Zu >= 0 ? Zu : Uu.length), qu.end(), Zu < 0) return fu;
+         if (YG += this.drawList(UG, bG, GG._directBindings, 0, GG._directBindings.length), YG += this.drawList(UG, bG, SG, 0, LG >= 0 ? LG : SG.length), UG.end(), LG < 0) return YG;
```

#### 444. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5672` → after: `L5672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5672) · [Before (L5672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5672)

```diff
-         const Uu = (null !== (ju = Eu._config.depth) && void 0 !== ju ? ju : Eu._config.rt)._depthTexture,
+         const SG = (null !== (ZG = bG._config.depth) && void 0 !== ZG ? ZG : bG._config.rt)._depthTexture,
```

#### 445. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5679` → after: `L5679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5679) · [Before (L5679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5679)

```diff
-         this.retired = null !== (Eu = null === (ju = this.copy) || void 0 === ju ? void 0 : ju.texture) && void 0 !== Eu ? Eu : null;
+         this.retired = null !== (bG = null === (ZG = this.copy) || void 0 === ZG ? void 0 : ZG.texture) && void 0 !== bG ? bG : null;
```

#### 446. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5764` → after: `L5764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5764) · [Before (L5764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5764)

```diff
-           code: (Xu = this.edge, `${(0,nE.z)()}${qs({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_2d<f32>;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\t … [truncated]
+           code: (yG = this.edge, `${(0,Nb.x)()}${kw({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_2d<f32>;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\t … [truncated]
```

#### 447. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5804` → after: `L5804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5804) · [Before (L5804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5804)

```diff
-         return null !== (uu = null === (Eu = this.targets) || void 0 === Eu ? void 0 : Eu.maskView) && void 0 !== uu ? uu : null
+         return null !== (GG = null === (bG = this.targets) || void 0 === bG ? void 0 : bG.maskView) && void 0 !== GG ? GG : null
```

#### 448. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5851` → after: `L5851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5851) · [Before (L5851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5851)

```diff
-         const su = (null !== (Eu = uu._config.depth) && void 0 !== Eu ? Eu : uu._config.rt)._depthTexture;
+         const wG = (null !== (bG = GG._config.depth) && void 0 !== bG ? bG : GG._config.rt)._depthTexture;
```

#### 449. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5870` → after: `L5870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5870) · [Before (L5870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5870)

```diff
-           Xu = null !== (ju = uu._targetSignature._depthStencilFormat) && void 0 !== ju ? ju : Eu.format,
+           yG = null !== (ZG = GG._targetSignature._depthStencilFormat) && void 0 !== ZG ? ZG : bG.format,
```

#### 450. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5904` → after: `L5904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5904) · [Before (L5904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5904)

```diff
-               resource: (null !== lu && void 0 !== lu ? lu : Eu).createView({
+               resource: (null !== kG && void 0 !== kG ? kG : bG).createView({
```

#### 451. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5960` → after: `L5960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5960) · [Before (L5960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5960)

```diff
-         status: "Lj"
+         status: "RZ"
```

#### 452. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5974` → after: `L5974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5974) · [Before (L5974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5974)

```diff
-               AN: uu.runtime
+               OQ: GG.runtime
```

#### 453. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5978` → after: `L5978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5978) · [Before (L5978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5978)

```diff
-               return Zu && Vs(Eu.programKey(Zu, !1, Uu)) ? (await Zu.ready, uu.isCancelled() ? il : Zu.bindGroupLayout ? await async function(uu, Eu, ju, su) {
+               return LG && aw(bG.programKey(LG, !1, SG)) ? (await LG.ready, GG.isCancelled() ? Mk : LG.bindGroupLayout ? await async function(GG, bG, ZG, wG) {
```

#### 454. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5989` → after: `L5989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5989) · [Before (L5989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5989)

```diff
-                 const [lu, qu] = await Promise.all([Xu, Zu.built.then((() => null), (uu => null !== uu && void 0 !== uu ? uu : new Error("pipeline failed")))]);
+                 const [kG, UG] = await Promise.all([yG, LG.built.then((() => null), (GG => null !== GG && void 0 !== GG ? GG : new Error("pipeline failed")))]);
```

#### 455. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5992` → after: `L5992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5992) · [Before (L5992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5992)

```diff
-                   Cu = fu.length > 0 ? fu.map((uu => `${Zu.name} ${uu.lineNum}:${uu.linePos}: ${uu.message}`)).join("\n") : `${Zu.name}: ${Fl(null!==qu&&void 0!==qu?qu:lu)}`;
+                   VG = YG.length > 0 ? YG.map((GG => `${LG.name} ${GG.lineNum}:${GG.linePos}: ${GG.message}`)).join("\n") : `${LG.name}: ${nk(null!==UG&&void 0!==UG?UG:kG)}`;
```

#### 456. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5998` → after: `L5998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L5998) · [Before (L5998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L5998)

```diff
-               }(Eu, Zu, Eu.programKey(Zu, "none" !== Zu.texture, Uu), ju): (console.warn(`Shader pack: skipped the compile check for "${su.name}", whose textures failed to load`), Wl)) : il
+               }(bG, LG, bG.programKey(LG, "none" !== LG.texture, SG), ZG): (console.warn(`Shader pack: skipped the compile check for "${wG.name}", whose textures failed to load`), Ak)) : Mk
```

#### 457. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6014-L6015` → after: `L6014-L6015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6014-L6015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6014-L6015) · [Before (L6014-L6015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6014-L6015)

```diff
-             }), null !== (Xu = Eu.timeoutMs) && void 0 !== Xu ? Xu : Ql), su = setInterval((() => {
-               Eu.isCancelled() && Zu("Lj")
+             }), null !== (yG = bG.timeoutMs) && void 0 !== yG ? yG : Pk), wG = setInterval((() => {
+               bG.isCancelled() && LG("RZ")
```

#### 458. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6034-L6035` → after: `L6034-L6035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6034-L6035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6034-L6035) · [Before (L6034-L6035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6034-L6035)

```diff
-       if ("Lj" === lu || ju()) return {
-         status: "Lj"
+       if ("RZ" === kG || ZG()) return {
+         status: "RZ"
```

#### 459. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6048` → after: `L6048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6048) · [Before (L6048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6048)

```diff
-       } : "timeout" === lu ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(fu=uu.timeoutMs)&&void 0!==fu?fu:Ql)/1e3} s`), {
+       } : "timeout" === kG ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(YG=GG.timeoutMs)&&void 0!==YG?YG:Pk)/1e3} s`), {
```

#### 460. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6068` → after: `L6068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6068) · [Before (L6068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6068)

```diff
-       return null !== (Eu = null === uu || void 0 === uu ? void 0 : uu.message) && void 0 !== Eu ? Eu : String(uu)
+       return null !== (bG = null === GG || void 0 === GG ? void 0 : GG.message) && void 0 !== bG ? bG : String(GG)
```

#### 461. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6074` → after: `L6074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6074) · [Before (L6074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6074)

```diff
-         CE(uu, "terrain", ju, Uu, su ? `${su.lineNum}:${su.linePos} error: ${su.message}` : null)
+         Vb(GG, "terrain", ZG, SG, wG ? `${wG.lineNum}:${wG.linePos} error: ${wG.message}` : null)
```

#### 462. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6077` → after: `L6077-L6078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6077-L6078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6077-L6078) · [Before (L6077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6077)

```diff
-     var Ll = ju(37931),
+     var ek = ZG(37918),
+       Rk = ZG(37928),
```

#### 463. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6079-L6080` → after: `L6080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6080) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6080) · [Before (L6079-L6080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6079-L6080)

```diff
-       xl = ju(37954),
-       Tl = ju(2999);
+       Hk = ZG(2854);
```

#### 464. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6092` → after: `L6092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6092) · [Before (L6092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6092)

```diff
-         hO: bu
+         rK: pG
```

#### 465. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6094` → after: `L6094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6094) · [Before (L6094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6094)

```diff
-       let cu = uu.dL(lu[0], lu[1], lu[2]);
+       let fG = GG.KD(kG[0], kG[1], kG[2]);
```

#### 466. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6100` → after: `L6100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6100) · [Before (L6100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6100)

```diff
-         const Zu = uu.dL(lu[0], lu[1], lu[2]),
+         const LG = GG.KD(kG[0], kG[1], kG[2]),
```

#### 467. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6108` → after: `L6108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6108) · [Before (L6108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6108)

```diff
-           !uu.isDrawn(Zu, Xu, qu) && uu.hasParts(Zu, Xu, qu) && Uu.add(`${Zu},${Xu},${qu}`)
+           !GG.isDrawn(LG, yG, UG) && GG.hasParts(LG, yG, UG) && SG.add(`${LG},${yG},${UG}`)
```

#### 468. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6120` → after: `L6120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6120) · [Before (L6120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6120)

```diff
-         this.device = uu, this.rD = Eu, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
+         this.device = GG, this.PJ = bG, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
```

#### 469. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6131` → after: `L6131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6131) · [Before (L6131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6131)

```diff
-         const Eu = null !== (uu = this.free.pop()) && void 0 !== uu ? uu : this.next++;
+         const bG = null !== (GG = this.free.pop()) && void 0 !== GG ? GG : this.next++;
```

#### 470. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6134` → after: `L6134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6134) · [Before (L6134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6134)

```diff
-           uu.set(this.data), this.data = uu, this.words = new Uint32Array(uu.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.rD()
+           GG.set(this.data), this.data = GG, this.words = new Uint32Array(GG.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.PJ()
```

#### 471. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6178` → after: `L6178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6178) · [Before (L6178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6178)

```diff
-         this.device = uu, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout  … [truncated]
+         this.device = GG, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout  … [truncated]
```

#### 472. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6255` → after: `L6255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6255) · [Before (L6255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6255)

```diff
-               buffer: null !== uu && void 0 !== uu ? uu : this.slots.buffer
+               buffer: null !== GG && void 0 !== GG ? GG : this.slots.buffer
```

#### 473. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6260` → after: `L6260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6260) · [Before (L6260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6260)

```diff
-               buffer: null !== Eu && void 0 !== Eu ? Eu : this.slots.buffer
+               buffer: null !== bG && void 0 !== bG ? bG : this.slots.buffer
```

#### 474. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6266` → after: `L6266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6266) · [Before (L6266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6266)

```diff
-         const ju = null !== Eu && void 0 !== Eu ? Eu : uu;
+         const ZG = null !== bG && void 0 !== bG ? bG : GG;
```

#### 475. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6305-L6306` → after: `L6305-L6306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6305-L6306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6305-L6306) · [Before (L6305-L6306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6305-L6306)

```diff
-         }, this.chunks.set(uu, Uu), this.writeSlot(Uu)), Uu.material = uu.material ? this.materialFor(uu.material) : null, Uu.packed = !!Eu.packedVertices, Uu.vertexCount = (0, el.g)(Eu), Uu.faceCount = Uu.vertexCount / 4;
-         const Zu = null !== (su = Eu.faceGroups) && void 0 !== su ? su : null;
+         }, this.chunks.set(GG, SG), this.writeSlot(SG)), SG.material = GG.material ? this.materialFor(GG.material) : null, SG.packed = !!bG.packedVertices, SG.vertexCount = (0, zk.d)(bG), SG.faceCount = SG.vertexCount / 4;
+         const LG = null !== (wG = bG.faceGroups) && void 0 !== wG ? wG : null;
```

#### 476. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6308` → after: `L6308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6308) · [Before (L6308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6308)

```diff
-           const uu = Ll.k;
+           const GG = ek.i;
```

#### 477. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6311` → after: `L6311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6311) · [Before (L6311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6311)

```diff
-         this.drawWhole(Uu), 0 !== Uu.faceCount && (this.geometry.set(Uu, Eu) ? (Uu.packed && this.slots.setFaces(Uu.slot, Uu.vertices.start + Uu.faceCount, Uu.faceCount), Eu.sO && this.setChunkMeshLight(uu, Eu.sO)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${Uu.vertexCo … [truncated]
+         this.drawWhole(SG), 0 !== SG.faceCount && (this.geometry.set(SG, bG) ? (SG.packed && this.slots.setFaces(SG.slot, SG.vertices.start + SG.faceCount, SG.faceCount), bG.LK && this.setChunkMeshLight(GG, bG.LK)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${SG.vertexCo … [truncated]
```

#### 478. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6343-L6346` → after: `L6343-L6346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6343-L6346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6343-L6346) · [Before (L6343-L6346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6343-L6346)

```diff
-         const ju = uu.zb,
-           [su, Uu, Zu] = ju.Esu(Eu.origin[0], Eu.origin[1], Eu.origin[2]),
-           Xu = ju.CY.bY(su, Uu, Zu);
-         Xu && (Xu.qY = !0, Xu.NY = !0, ju.fY(Xu, !1))
+         const ZG = GG.Op,
+           [wG, SG, LG] = ZG.hwG(bG.origin[0], bG.origin[1], bG.origin[2]),
+           yG = ZG.Qh.Kh(wG, SG, LG);
+         yG && (yG.ph = !0, yG.dh = !0, ZG.fh(yG, !1))
```

#### 479. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6350` → after: `L6350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6350) · [Before (L6350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6350)

```diff
-         uu.faceMask = ju, uu.rangeCount = (0, tl.j)(Eu, ju, su), uu.first0 = su[0], uu.count0 = su[1], uu.first1 = su[2], uu.count1 = su[3]
+         GG.faceMask = ZG, GG.rangeCount = (0, Rk.q)(bG, ZG, wG), GG.first0 = wG[0], GG.count0 = wG[1], GG.first1 = wG[2], GG.count1 = wG[3]
```

#### 480. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6363` → after: `L6363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6363) · [Before (L6363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6363)

```diff
-         if (!ju) return this.warnOnce(`material:${uu.name}`, `Lite terrain cannot draw material "${uu.name}"; its chunks are skipped.`), null;
+         if (!ZG) return this.warnOnce(`material:${GG.name}`, `Lite terrain cannot draw material "${GG.name}"; its chunks are skipped.`), null;
```

#### 481. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6377` → after: `L6377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6377) · [Before (L6377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6377)

```diff
-             label: `terrain-material-${uu.name}`,
+             label: `terrain-material-${GG.name}`,
```

#### 482. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6384` → after: `L6384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6384) · [Before (L6384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6384)

```diff
-           I5: 0,
+           N9: 0,
```

#### 483. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6392` → after: `L6392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6392) · [Before (L6392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6392)

```diff
-           console.error(`Lite terrain failed to load the textures of material "${uu.name}"`, Eu)
+           console.error(`Lite terrain failed to load the textures of material "${GG.name}"`, bG)
```

#### 484. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6409` → after: `L6409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6409) · [Before (L6409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6409)

```diff
-             label: `terrain-material-${ju}`,
+             label: `terrain-material-${ZG}`,
```

#### 485. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6456` → after: `L6456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6456) · [Before (L6456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6456)

```diff
-           uu.atlasCount = su.length, uu.I5 = su[0].layerWidth, uu.atlasLayers = su[0].layers, Eu.animDataPerTex && ju.push({
+           GG.atlasCount = wG.length, GG.N9 = wG[0].layerWidth, GG.atlasLayers = wG[0].layers, bG.animDataPerTex && ZG.push({
```

#### 486. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6470` → after: `L6470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6470) · [Before (L6470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6470)

```diff
-           ju.push(this.sampler), ju.push(nu(this.device, su, Uu, Zu, 1, `terrain-${Eu}`).createView({
+           ZG.push(this.sampler), ZG.push(NG(this.device, wG, SG, LG, 1, `terrain-${bG}`).createView({
```

#### 487. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6476` → after: `L6476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6476) · [Before (L6476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6476)

```diff
-           label: `terrain-material-${uu.model.name}`,
+           label: `terrain-material-${GG.model.name}`,
```

#### 488. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6487` → after: `L6487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6487) · [Before (L6487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6487)

```diff
-           Uu = ju ? ju.AN : this.AN,
+           SG = ZG ? ZG.OQ : this.OQ,
```

#### 489. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6491` → after: `L6491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6491) · [Before (L6491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6491)

```diff
-             I5: uu.I5,
+             N9: GG.N9,
```

#### 490. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6510` → after: `L6510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6510) · [Before (L6510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6510)

```diff
-         return void 0 === ju ? Ps : {
+         return void 0 === ZG ? Cw : {
```

#### 491. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6547` → after: `L6547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6547) · [Before (L6547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6547)

```diff
-         return void 0 !== Uu ? Uu : (this.startPipeline(su, uu, this.programKey(uu, Eu), ju), null)
+         return void 0 !== SG ? SG : (this.startPipeline(wG, GG, this.programKey(GG, bG), ZG), null)
```

#### 492. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6556-L6557` → after: `L6556-L6557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6556-L6557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6556-L6557) · [Before (L6556-L6557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6556-L6557)

```diff
-         } = uu.model, qu = this.packVariant(uu, this.AN), fu = (Eu ? 2 : 0) + (ju ? 1 : 0), Cu = uu.pipelineIds[fu];
-         if (null !== Cu && Cu.lighting === Uu && Cu.dirLightCount === Zu && Cu.packVariant === qu && Cu.transparencyMode === Xu && Cu.cull === lu && Cu.atlasCount === uu.atlasCount && Cu.I5 === uu.I5 && Cu.atlasLayers === uu.atlasLayers && Cu.colorFormat === su._colorFormat && Cu … [truncated]
+         } = GG.model, UG = this.packVariant(GG, this.OQ), YG = (bG ? 2 : 0) + (ZG ? 1 : 0), VG = GG.pipelineIds[YG];
+         if (null !== VG && VG.lighting === SG && VG.dirLightCount === LG && VG.packVariant === UG && VG.transparencyMode === yG && VG.cull === kG && VG.atlasCount === GG.atlasCount && VG.N9 === GG.N9 && VG.atlasLayers === GG.atlasLayers && VG.colorFormat === wG._colorFormat && VG … [truncated]
```

#### 493. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6571` → after: `L6571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6571) · [Before (L6571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6571)

```diff
-           I5: uu.I5,
+           N9: GG.N9,
```

#### 494. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6584` → after: `L6584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6584) · [Before (L6584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6584)

```diff
-         return null !== (su = this.builds.get(Uu)) && void 0 !== su ? su : this.startPipeline(Uu, uu, Eu, ju)
+         return null !== (wG = this.builds.get(SG)) && void 0 !== wG ? wG : this.startPipeline(SG, GG, bG, ZG)
```

#### 495. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6593` → after: `L6593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6593) · [Before (L6593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6593)

```diff
-             const Uu = (0, yE.i)(uu.packVariant);
+             const SG = (0, Ob.e)(GG.packVariant);
```

#### 496. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6608` → after: `L6608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6608) · [Before (L6608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6608)

```diff
-             offset: HE.g.mj,
+             offset: tb.f.vZ,
```

#### 497. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6612` → after: `L6612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6612) · [Before (L6612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6612)

```diff
-             offset: HE.g.normalOffset,
+             offset: tb.f.normalOffset,
```

#### 498. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6616` → after: `L6616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6616) · [Before (L6616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6616)

```diff
-             offset: HE.g.colorOffset,
+             offset: tb.f.colorOffset,
```

#### 499. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6621` → after: `L6621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6621) · [Before (L6621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6621)

```diff
-             offset: HE.g.uvOffset,
+             offset: tb.f.uvOffset,
```

#### 500. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6625` → after: `L6625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6625) · [Before (L6625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6625)

```diff
-             offset: HE.g.normalOffset,
+             offset: tb.f.normalOffset,
```

#### 501. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6628` → after: `L6628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6628) · [Before (L6628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6628)

```diff
-             arrayStride: HE.g.strideWithoutAtlas,
+             arrayStride: tb.f.strideWithoutAtlas,
```

#### 502. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6647` → after: `L6647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6647) · [Before (L6647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6647)

```diff
-             }, su, Xu ? uq : null),
+             }, wG, yG ? GU : null),
```

#### 503. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6650` → after: `L6650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6650) · [Before (L6650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6650)

```diff
-               depthCompare: null !== (Uu = su._depthCompare) && void 0 !== Uu ? Uu : JE,
+               depthCompare: null !== (SG = wG._depthCompare) && void 0 !== SG ? SG : ib,
```

#### 504. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6668` → after: `L6668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6668) · [Before (L6668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6668)

```diff
-           this.compiling -= Nu, console.error(`Lite terrain pipeline ${Zu} failed`, uu), Bl(this.device, ju, Zu, fu, uu)
+           this.compiling -= QG, console.error(`Lite terrain pipeline ${LG} failed`, GG), gk(this.device, ZG, LG, YG, GG)
```

#### 505. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6679` → after: `L6679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6679) · [Before (L6679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6679)

```diff
-           Uu = this.device.createRenderPipelineAsync(ju ? Eu : {
+           SG = this.device.createRenderPipelineAsync(ZG ? bG : {
```

#### 506. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6689` → after: `L6689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6689) · [Before (L6689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6689)

```diff
-             label: `${Eu.label}-prepass`,
+             label: `${bG.label}-prepass`,
```

#### 507. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6707` → after: `L6707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6707) · [Before (L6707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6707)

```diff
-         console.error(`Lite terrain pipeline ${ju} failed`, su), Bl(this.device, Eu, ju, null, su);
+         console.error(`Lite terrain pipeline ${ZG} failed`, wG), gk(this.device, bG, ZG, null, wG);
```

#### 508. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6743` → after: `L6743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6743) · [Before (L6743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6743)

```diff
-           Uc: Xu
+           wf: yG
```

#### 509. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6745` → after: `L6745`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6745) · [Before (L6745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6745)

```diff
-         this.lighting = uu.aY;
+         this.lighting = GG.Fh;
```

#### 510. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6747-L6748` → after: `L6747-L6748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6747-L6748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6747-L6748) · [Before (L6747-L6748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6747-L6748)

```diff
-         this.dirLightCount = Math.min(lu, 4), this.AN = null !== (ju = Xu.AN) && void 0 !== ju ? ju : null, lu > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(uu, Eu), this.animateMaterials(Eu.animTick);
-         const qu = Xu.ec,
+         this.dirLightCount = Math.min(kG, 4), this.OQ = null !== (ZG = yG.OQ) && void 0 !== ZG ? ZG : null, kG > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(GG, bG), this.animateMaterials(bG.animTick);
+         const UG = yG.zf,
```

#### 511. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6761` → after: `L6761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6761) · [Before (L6761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6761)

```diff
-         const Yu = Xu.zb.duu,
+         const hG = yG.Op.sGG,
```

#### 512. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6764` → after: `L6764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6764) · [Before (L6764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6764)

```diff
-         const gu = !!this.AN && os(this.AN.defineFor("liquid"));
+         const rG = !!this.OQ && Ww(this.OQ.defineFor("liquid"));
```

#### 513. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6766-L6767` → after: `L6766-L6767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6766-L6767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6766-L6767) · [Before (L6766-L6767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6766-L6767)

```diff
-         const eu = null !== (su = null === (Uu = Xu.mG) || void 0 === Uu ? void 0 : Uu.visibility) && void 0 !== su ? su : null,
-           Gu = this.visCull && cu && 0 === this.compiling && null !== eu && Xu.zb.Jsu[0] >= this.visCullMinDistance ? this.target : null,
+         const EG = null !== (wG = null === (SG = yG.QE) || void 0 === SG ? void 0 : SG.visibility) && void 0 !== wG ? wG : null,
+           oG = this.visCull && fG && 0 === this.compiling && null !== EG && yG.Op.PwG[0] >= this.visCullMinDistance ? this.target : null,
```

#### 514. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6778` → after: `L6778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6778) · [Before (L6778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6778)

```diff
-             if (0 === Nu && (Nu = (0, tl.b)(bu, Eu.renderWidth, Eu.renderHeight), Nu !== this.faceFocalPx && (this.faceFocalPx = Nu, Ou = ++this.faceEpoch)), uu.faceEpoch !== Ou) {
+             if (0 === QG && (QG = (0, Rk.d)(pG, bG.renderWidth, bG.renderHeight), QG !== this.faceFocalPx && (this.faceFocalPx = QG, KG = ++this.faceEpoch)), GG.faceEpoch !== KG) {
```

#### 515. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6781` → after: `L6781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6781) · [Before (L6781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6781)

```diff
-                 ju = (0, tl.g)(uu.planePX, uu.planeNX, uu.planePY, uu.planeNY, uu.planePZ, uu.planeNZ, this.eye[0] - (uu.origin[0] - this.originOffset[0]), this.eye[1] - (uu.origin[1] - this.originOffset[1]), this.eye[2] - (uu.origin[2] - this.originOffset[2]), (0, tl.d)(Eu, Nu)) … [truncated]
+                 ZG = (0, Rk.k)(GG.planePX, GG.planeNX, GG.planePY, GG.planeNY, GG.planePZ, GG.planeNZ, this.eye[0] - (GG.origin[0] - this.originOffset[0]), this.eye[1] - (GG.origin[1] - this.originOffset[1]), this.eye[2] - (GG.origin[2] - this.originOffset[2]), (0, Rk.h)(bG, QG)) … [truncated]
```

#### 516. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6798` → after: `L6798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6798) · [Before (L6798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6798)

```diff
-           if (Gu && (Number.isNaN(ku.key) && (ku.ci = Math.floor(ku.origin[0] / Yu), ku.cj = Math.floor(ku.origin[1] / Yu), ku.ck = Math.floor(ku.origin[2] / Yu), ku.key = (0, Tl.k)(ku.ci, ku.cj, ku.ck)), (!su || uu < 1 || Uu || !this.batchDraws(ju, ku.packed, Gu)) && this.visSee … [truncated]
+           if (oG && (Number.isNaN(FG.key) && (FG.ci = Math.floor(FG.origin[0] / hG), FG.cj = Math.floor(FG.origin[1] / hG), FG.ck = Math.floor(FG.origin[2] / hG), FG.key = (0, Hk.g)(FG.ci, FG.cj, FG.ck)), (!wG || GG < 1 || SG || !this.batchDraws(ZG, FG.packed, oG)) && this.visSee … [truncated]
```

#### 517. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6812` → after: `L6812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6812) · [Before (L6812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6812)

```diff
-         null === (Zu = (0, iZ.u)(Xu)) || void 0 === Zu || Zu.update(Eu.frustum, this.originOffset, Yu, ou);
+         null === (LG = (0, PL.B)(yG)) || void 0 === LG || LG.update(bG.frustum, this.originOffset, hG, IG);
```

#### 518. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6824-L6825` → after: `L6824-L6825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6824-L6825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6824-L6825) · [Before (L6824-L6825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6824-L6825)

```diff
-           zb: su
-         } = uu.Uc, Uu = su.duu, Zu = this.visPassable, Xu = this.eye[0] + this.originOffset[0], lu = this.eye[1] + this.originOffset[1], qu = this.eye[2] + this.originOffset[2];
+           Op: wG
+         } = GG.wf, SG = wG.sGG, LG = this.visPassable, yG = this.eye[0] + this.originOffset[0], kG = this.eye[1] + this.originOffset[1], UG = this.eye[2] + this.originOffset[2];
```

#### 519. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6827-L6828` → after: `L6827-L6828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6827-L6828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6827-L6828) · [Before (L6827-L6828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6827-L6828)

```diff
-         const [fu, Cu] = su.Jsu, bu = ju.update(Xu, lu, qu, Uu, fu, Cu, Zu);
-         return this.visSweeps = ju.sweeps, bu ? ju : null
+         const [YG, VG] = wG.PwG, pG = ZG.update(yG, kG, UG, SG, YG, VG, LG);
+         return this.visSweeps = ZG.sweeps, pG ? ZG : null
```

#### 520. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6842` → after: `L6842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6842) · [Before (L6842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6842)

```diff
-         let Zu = null !== (su = this.visBatchDraws.get(uu)) && void 0 !== su ? su : 0;
+         let LG = null !== (wG = this.visBatchDraws.get(GG)) && void 0 !== wG ? wG : 0;
```

#### 521. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6844` → after: `L6844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6844) · [Before (L6844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6844)

```diff
-           Zu |= 1 << Uu | (!!uu.bindGroupLayout && this.canDraw(uu, Eu) && !!this.pipelines.get(this.pipelineIdNow(uu, Eu, !1, ju)) ? 2 << Uu : 0), this.visBatchDraws.set(uu, Zu)
+           LG |= 1 << SG | (!!GG.bindGroupLayout && this.canDraw(GG, bG) && !!this.pipelines.get(this.pipelineIdNow(GG, bG, !1, ZG)) ? 2 << SG : 0), this.visBatchDraws.set(GG, LG)
```

#### 522. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6850` → after: `L6850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6850) · [Before (L6850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6850)

```diff
-           Uc: su
+           wf: wG
```

#### 523. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6852-L6853` → after: `L6852-L6853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6852-L6853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6852-L6853) · [Before (L6852-L6853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6852-L6853)

```diff
-           zb: Uu
-         } = su, Zu = Uu.duu, Xu = new Set;
+           Op: SG
+         } = wG, LG = SG.sGG, yG = new Set;
```

#### 524. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6857` → after: `L6857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6857) · [Before (L6857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6857)

```diff
-           bu = new tU.dO,
+           pG = new eS.mK,
```

#### 525. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6867` → after: `L6867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6867) · [Before (L6867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6867)

```diff
-             dL: (uu, Eu, ju) => Uu.dL(uu, Eu, ju),
+             KD: (GG, bG, ZG) => SG.KD(GG, bG, ZG),
```

#### 526. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6870` → after: `L6870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6870) · [Before (L6870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6870)

```diff
-             hO: Zu,
+             rK: LG,
```

#### 527. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6872-L6873` → after: `L6872-L6873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6872-L6873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6872-L6873) · [Before (L6872-L6873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6872-L6873)

```diff
-             hasParts: (uu, Eu, ju) => Xu.has((0, Tl.k)(uu, Eu, ju))
-           }, [this.eye[0] + qu, this.eye[1] + fu, this.eye[2] + Cu], ((uu, Eu) => (tU.dO.TransformCoordinatesFromFloatsToRef(uu, Eu, .5, lu, bu), [bu.x + qu, bu.y + fu, bu.z + Cu])), (Uu.Jsu[0] + 1) * Zu);
+             hasParts: (GG, bG, ZG) => yG.has((0, Hk.g)(GG, bG, ZG))
+           }, [this.eye[0] + UG, this.eye[1] + YG, this.eye[2] + VG], ((GG, bG) => (eS.mK.TransformCoordinatesFromFloatsToRef(GG, bG, .5, kG, pG), [pG.x + UG, pG.y + YG, pG.z + VG])), (SG.PwG[0] + 1) * LG);
```

#### 528. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6875` → after: `L6875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6875) · [Before (L6875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6875)

```diff
-         for (const Nu of cu) this.warnOnce(`vis:${Nu}`, `Lite terrain cave culling skipped chunk ${Nu}, which a ray from the eye reaches.`)
+         for (const QG of fG) this.warnOnce(`vis:${QG}`, `Lite terrain cave culling skipped chunk ${QG}, which a ray from the eye reaches.`)
```

#### 529. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6879` → after: `L6879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6879) · [Before (L6879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6879)

```diff
-         null !== (uu = this.AN) && void 0 !== uu && uu.isRunning() && (this.shaderPackInputs ??= new nZ(this.device, this.AN.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.AN, this.eye, this.lighting))
+         null !== (GG = this.OQ) && void 0 !== GG && GG.isRunning() && (this.shaderPackInputs ??= new DL(this.device, this.OQ.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.OQ, this.eye, this.lighting))
```

#### 530. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6887-L6888` → after: `L6887-L6888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6887-L6888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6887-L6888) · [Before (L6887-L6888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6887-L6888)

```diff
-         const fu = os(qu) ? null !== (su = null === (Uu = this.sceneDepth) || void 0 === Uu ? void 0 : Uu.view) && void 0 !== su ? su : this.standIn() : null,
-           Cu = lu ? null !== (Zu = null === (Xu = this.shadowMask) || void 0 === Xu ? void 0 : Xu.view) && void 0 !== Zu ? Zu : this.standIn() : null;
+         const YG = Ww(UG) ? null !== (wG = null === (SG = this.sceneDepth) || void 0 === SG ? void 0 : SG.view) && void 0 !== wG ? wG : this.standIn() : null,
+           VG = kG ? null !== (LG = null === (yG = this.shadowMask) || void 0 === yG ? void 0 : yG.view) && void 0 !== LG ? LG : this.standIn() : null;
```

#### 531. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6901` → after: `L6901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6901) · [Before (L6901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6901)

```diff
-         return null !== (uu = null === (Eu = this.shaderPackInputs) || void 0 === Eu ? void 0 : Eu.bindGroupFor(null, !0)) && void 0 !== uu ? uu : null
+         return null !== (GG = null === (bG = this.shaderPackInputs) || void 0 === bG ? void 0 : bG.bindGroupFor(null, !0)) && void 0 !== GG ? GG : null
```

#### 532. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6941` → after: `L6941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6941) · [Before (L6941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6941)

```diff
-         return !(!Eu || !(0, Ll.o)(uu.model)) && (!this.AN || ! function(uu) {
+         return !(!bG || !(0, ek.n)(GG.model)) && (!this.OQ || ! function(GG) {
```

#### 533. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6943-L6944` → after: `L6943-L6944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6943-L6944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6943-L6944) · [Before (L6943-L6944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6943-L6944)

```diff
-           return !(null === (Eu = (0, yE.i)(uu)) || void 0 === Eu || !Eu.movesVertices)
-         }(this.packVariant(uu, this.AN)))
+           return !(null === (bG = (0, Ob.e)(GG)) || void 0 === bG || !bG.movesVertices)
+         }(this.packVariant(GG, this.OQ)))
```

#### 534. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6949-L6950` → after: `L6949-L6950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6949-L6950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6949-L6950) · [Before (L6949-L6950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6949-L6950)

```diff
-         if ((0, Ml.y)(uu, ju), ju[su.fogInfos] = Eu.fogEnabled ? Eu.fogMode : 0, ju[su.fogInfos + 1] = Eu.fogStart, ju[su.fogInfos + 2] = Eu.fogEnd, ju[su.fogInfos + 3] = Eu.fogDensity, ju.set(Eu.fogColour, su.fogColour), ju[su.outputHeight] = Eu.renderHeight, ju.set(Eu.ambientCo … [truncated]
-           const Eu = (0, el.j)(uu.TO, uu.MO, uu.eO);
+         if ((0, rk.B)(GG, ZG), ZG[wG.fogInfos] = bG.fogEnabled ? bG.fogMode : 0, ZG[wG.fogInfos + 1] = bG.fogStart, ZG[wG.fogInfos + 2] = bG.fogEnd, ZG[wG.fogInfos + 3] = bG.fogDensity, ZG.set(bG.fogColour, wG.fogColour), ZG[wG.outputHeight] = bG.renderHeight, ZG.set(bG.ambientCo … [truncated]
+           const bG = (0, zk.g)(GG.DK, GG.oK, GG.XK);
```

#### 535. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6961` → after: `L6961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6961) · [Before (L6961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6961)

```diff
-         return !("atlas" === uu.texture && !Eu) || (this.warnOnce(`stride:${uu.id}`, `Lite terrain: material "${uu.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
+         return !("atlas" === GG.texture && !bG) || (this.warnOnce(`stride:${GG.id}`, `Lite terrain: material "${GG.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
```

#### 536. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6969` → after: `L6969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6969) · [Before (L6969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6969)

```diff
-           Uu && (uu.setPipeline(Uu), uu.setBindGroup(2, su.material.bindGroup), this.AN && this.bindShaderPackInputs(uu, su.material, this.AN, this.prepassOf.has(Uu)), ju += this.drawBatch(uu, su))
+           SG && (GG.setPipeline(SG), GG.setBindGroup(2, wG.material.bindGroup), this.OQ && this.bindShaderPackInputs(GG, wG.material, this.OQ, this.prepassOf.has(SG)), ZG += this.drawBatch(GG, wG))
```

#### 537. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6978` → after: `L6978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L6978) · [Before (L6978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L6978)

```diff
-           Uu = this.AN;
+           SG = this.OQ;
```

#### 538. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7015` → after: `L7015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7015) · [Before (L7015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7015)

```diff
-           lu && (lu !== su && (uu.setPipeline(lu), su = lu, this.AN && this.bindShaderPackInputs(uu, Xu, this.AN)), Xu !== Uu && (uu.setBindGroup(2, Xu.bindGroup), Uu = Xu), ju += this.geometry.draw(uu, Zu, this.lighting))
+           kG && (kG !== wG && (GG.setPipeline(kG), wG = kG, this.OQ && this.bindShaderPackInputs(GG, yG, this.OQ)), yG !== SG && (GG.setBindGroup(2, yG.bindGroup), SG = yG), ZG += this.geometry.draw(GG, LG, this.lighting))
```

#### 539. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7022` → after: `L7022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7022) · [Before (L7022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7022)

```diff
-       return `${uU(uu)}|${uu.atlasLayers}|${uu.I5}|${Eu}|${ju}|${su._colorFormat}|${su._depthStencilFormat}|${su._sampleCount}`
+       return `${Bw(GG)}|${GG.atlasLayers}|${GG.N9}|${bG}|${ZG}|${wG._colorFormat}|${wG._depthStencilFormat}|${wG._sampleCount}`
```

#### 540. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7100` → after: `L7100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7100) · [Before (L7100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7100)

```diff
-         return (uu.YF !== this.builtVersion || this.blockCaster.length !== Eu) && (this.build(uu, Eu), !0)
+         return (GG.pT !== this.builtVersion || this.blockCaster.length !== bG) && (this.build(GG, bG), !0)
```

#### 541. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7103` → after: `L7103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7103) · [Before (L7103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7103)

```diff
-         this.builtVersion = uu.YF;
+         this.builtVersion = GG.pT;
```

#### 542. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7118` → after: `L7118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7118) · [Before (L7118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7118)

```diff
-         const ju = uu.N9[Eu];
+         const ZG = GG.E_[bG];
```

#### 543. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7123` → after: `L7123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7123) · [Before (L7123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7123)

```diff
-           return this.warnOnce(`Sun shadows: no caster option for block ${Eu}: ${su instanceof Error?su.message:String(su)}`), null
+           return this.warnOnce(`Sun shadows: no caster option for block ${bG}: ${wG instanceof Error?wG.message:String(wG)}`), null
```

#### 544. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7133` → after: `L7133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7133) · [Before (L7133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7133)

```diff
-             key: `planes:${JSON.stringify(uu)}`,
+             key: `planes:${JSON.stringify(GG)}`,
```

#### 545. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7137-L7138` → after: `L7137-L7138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7137-L7138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7137-L7138) · [Before (L7137-L7138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7137-L7138)

```diff
-         if (uu.ZN[Eu]) return null;
-         const Uu = uu.lN[Eu] ? uu.kF(Eu) : null;
+         if (GG.kQ[bG]) return null;
+         const SG = GG.YQ[bG] ? GG.XT(bG) : null;
```

#### 546. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7156` → after: `L7156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7156) · [Before (L7156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7156)

```diff
-           }(uu) ? Dj : uu.every((uu => 0 === uu)) ? null : {
+           }(GG) ? JZ : GG.every((GG => 0 === GG)) ? null : {
```

#### 547. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7158` → after: `L7158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7158) · [Before (L7158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7158)

```diff
-             key: `shape:${uu.join(",")}`,
+             key: `shape:${GG.join(",")}`,
```

#### 548. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7162` → after: `L7162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7162) · [Before (L7162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7162)

```diff
-         if (uu.NJ[Eu] || !uu.HO[Eu]) return null;
+         if (GG.zC[bG] || !GG.NK[bG]) return null;
```

#### 549. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7164` → after: `L7164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7164) · [Before (L7164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7164)

```diff
-           const Uu = uu.nO[6 * Eu + su];
+           const SG = GG.xK[6 * bG + wG];
```

#### 550. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7167` → after: `L7167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7167) · [Before (L7167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7167)

```diff
-             if (!uu || uu.XY) return null;
+             if (!GG || GG.Yh) return null;
```

#### 551. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7169-L7171` → after: `L7169-L7171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7169-L7171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7169-L7171) · [Before (L7169-L7171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7169-L7171)

```diff
-               i5: Eu,
-               I5: ju,
-               o5: su
+               I9: bG,
+               N9: ZG,
+               W9: wG
```

#### 552. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7190` → after: `L7190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7190) · [Before (L7190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7190)

```diff
-           }(uu.ZY(Uu)), ju.set(Uu, Zu)), Zu
+           }(GG.Uh(SG)), ZG.set(SG, LG)), LG
```

#### 553. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7195` → after: `L7195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7195) · [Before (L7195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7195)

```diff
-             return null !== (Eu = null === uu || void 0 === uu ? void 0 : uu.width) && void 0 !== Eu ? Eu : 1
+             return null !== (bG = null === GG || void 0 === GG ? void 0 : GG.width) && void 0 !== bG ? bG : 1
```

#### 554. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7198` → after: `L7198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7198) · [Before (L7198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7198)

```diff
-           qu = Zu.map((uu => null === uu ? lu : lq(uu.alpha, uu.width, uu.width, Xu)));
+           UG = LG.map((GG => null === GG ? kG : kU(GG.alpha, GG.width, GG.width, yG)));
```

#### 555. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7201` → after: `L7201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7201) · [Before (L7201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7201)

```diff
-           key: `cutout:${Xu}:${qu.map((uu=>uu.join(","))).join("|")}`,
+           key: `cutout:${yG}:${UG.map((GG=>GG.join(","))).join("|")}`,
```

#### 556. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7246` → after: `L7246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7246) · [Before (L7246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7246)

```diff
-         return Eu || (Eu = this.loadTexture(uu).catch((Eu => (this.warn(`Sun shadows: no mask for ${uu}: ${Eu instanceof Error?Eu.message:String(Eu)}`), null))), this.textures.set(uu, Eu)), Eu
+         return bG || (bG = this.loadTexture(GG).catch((bG => (this.warn(`Sun shadows: no mask for ${GG}: ${bG instanceof Error?bG.message:String(bG)}`), null))), this.textures.set(GG, bG)), bG
```

#### 557. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7260` → after: `L7260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7260) · [Before (L7260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7260)

```diff
-     var Cq = ju(2969);
+     var VU = ZG(2829);
```

#### 558. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7263` → after: `L7263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7263) · [Before (L7263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7263)

```diff
-       return !uu.qY && !uu.pw && !uu.iO
+       return !GG.ph && !GG.bC && !GG.sK
```

#### 559. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7302` → after: `L7302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7302) · [Before (L7302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7302)

```diff
-           uu && (uu.Gw || uu.IO !== this.slotVersion[lu]) && this.enqueue(lu)
+           GG && (GG.Tu || GG.gK !== this.slotVersion[kG]) && this.enqueue(kG)
```

#### 560. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7332-L7333` → after: `L7332-L7333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7332-L7333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7332-L7333) · [Before (L7332-L7333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7332-L7333)

```diff
-               if (Cu && !Cu.Gw && Cu.i === ju && Cu.j === lu && Cu.k === qu) continue;
-               const bu = null !== (Zu = uu(ju, lu, qu)) && void 0 !== Zu ? Zu : null;
+               if (VG && !VG.Tu && VG.i === ZG && VG.j === kG && VG.k === UG) continue;
+               const pG = null !== (LG = GG(ZG, kG, UG)) && void 0 !== LG ? LG : null;
```

#### 561. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7356` → after: `L7356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7356) · [Before (L7356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7356)

```diff
-           !Eu || Eu.Gw || bq(Eu) ? (this.queued[uu] = 0, this.encodeSlot(uu), ju++) : su.push(uu)
+           !bG || bG.Tu || pU(bG) ? (this.queued[GG] = 0, this.encodeSlot(GG), ZG++) : wG.push(GG)
```

#### 562. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7381` → after: `L7381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7381) · [Before (L7381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7381)

```diff
-         const qu = null !== (Eu = null === (ju = this.slotPool[uu]) || void 0 === ju ? void 0 : ju.length) && void 0 !== Eu ? Eu : 0;
+         const UG = null !== (bG = null === (ZG = this.slotPool[GG]) || void 0 === ZG ? void 0 : ZG.length) && void 0 !== bG ? bG : 0;
```

#### 563. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7385-L7386` → after: `L7385-L7386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7385-L7386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7385-L7386) · [Before (L7385-L7386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7385-L7386)

```diff
-         if (!fu || fu.Gw || !fu.ac) return this.slotChunk[uu] = null, this.slotVersion[uu] = -1, Cu.fill(0), this.writeRecord(uu, Cu), void(qu > 0 && this.requeueStarved());
-         this.slotVersion[uu] = fu.IO;
+         if (!YG || YG.Tu || !YG.Wf) return this.slotChunk[GG] = null, this.slotVersion[GG] = -1, VG.fill(0), this.writeRecord(GG, VG), void(UG > 0 && this.requeueStarved());
+         this.slotVersion[GG] = YG.gK;
```

#### 564. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7388` → after: `L7388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7388) · [Before (L7388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7388)

```diff
-         Cu[0] = fu.i, Cu[1] = fu.j, Cu[2] = fu.k, Cu[3] = bu, this.writeRecord(uu, Cu), null === (su = this.encoded) || void 0 === su || su.call(this, fu), lu && (null !== (Uu = null === (Zu = this.slotPool[uu]) || void 0 === Zu ? void 0 : Zu.length) && void 0 !== Uu ? Uu : 0) <  … [truncated]
+         VG[0] = YG.i, VG[1] = YG.j, VG[2] = YG.k, VG[3] = pG, this.writeRecord(GG, VG), null === (wG = this.encoded) || void 0 === wG || wG.call(this, YG), kG && (null !== (SG = null === (LG = this.slotPool[GG]) || void 0 === LG ? void 0 : LG.length) && void 0 !== SG ? SG : 0) <  … [truncated]
```

#### 565. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7391` → after: `L7391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7391) · [Before (L7391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7391)

```diff
-         if (uu.ZO) return sj;
+         if (GG.kK) return wZ;
```

#### 566. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7397` → after: `L7397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7397) · [Before (L7397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7397)

```diff
-           } = uu.ac,
+           } = GG.Wf,
```

#### 567. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7412-L7413` → after: `L7412-L7413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7412-L7413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7412-L7413) · [Before (L7412-L7413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7412-L7413)

```diff
-             su = uu.JN[gu],
-             Xu = su === Cq.f ? -1 : su < Uu.length ? Uu[su] : 0;
+             wG = GG.WQ[rG],
+             yG = wG === VU.c ? -1 : wG < SG.length ? SG[wG] : 0;
```

#### 568. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7431` → after: `L7431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7431) · [Before (L7431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7431)

```diff
-         return 0 === Yu ? sj : 32768 === hu ? Uj | Du << 8 : (this.writePoolEntries(Eu, ju, su), this.writeVoxels(qj + Eu * fj, cu), Zj | Du << 8)
+         return 0 === hG ? wZ : 32768 === dG ? SZ | JG << 8 : (this.writePoolEntries(bG, ZG, wG), this.writeVoxels(UZ + bG * YZ, fG), LZ | JG << 8)
```

#### 569. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7470` → after: `L7470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7470) · [Before (L7470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7470)

```diff
-           uu && !uu.Gw && uu.ac && (uu.IO === this.slotVersion[Uu] || bq(uu)) && this.encodeSlot(Uu, this.victimScratch, !1)
+           GG && !GG.Tu && GG.Wf && (GG.gK === this.slotVersion[SG] || pU(GG)) && this.encodeSlot(SG, this.victimScratch, !1)
```

#### 570. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7479` → after: `L7479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7479) · [Before (L7479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7479)

```diff
-     var Oq = ju(37867);
+     var KU = ZG(37845);
```

#### 571. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7482` → after: `L7482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7482) · [Before (L7482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7482)

```diff
-         this.device = uu, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new Wj, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.zb = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = uu.createBuffer( … [truncated]
+         this.device = GG, this.frameBuffer = void 0, this.gridBuffer = void 0, this.frame = new AZ, this.grids = new WeakMap, this.gridTop = 0, this.gridsFull = !1, this.uploadedEmpty = !1, this.Op = new Float64Array(16), this.bakeDeadline = 0, this.frameBuffer = GG.createBuffer( … [truncated]
```

#### 572. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7497` → after: `L7497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7497) · [Before (L7497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7497)

```diff
-         su.NN(uu, Eu), ju.forEachSunShadowCaster((uu => {
+         wG.hQ(GG, bG), ZG.forEachSunShadowCaster((GG => {
```

#### 573. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7516` → after: `L7516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7516) · [Before (L7516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7516)

```diff
-           zb: su,
+           Op: wG,
```

#### 574. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7523` → after: `L7523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7523) · [Before (L7523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7523)

```diff
-           for (let qu = 0; qu < Xu; qu++) lu ? (Ij(Zu, 16 * qu, su, Uu, this.zb), ju.add(Eu, this.zb)) : ju.add(Eu, Zu, 16 * qu);
+           for (let UG = 0; UG < yG; UG++) kG ? (qZ(LG, 16 * UG, wG, SG, this.Op), ZG.add(bG, this.Op)) : ZG.add(bG, LG, 16 * UG);
```

#### 575. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7535` → after: `L7535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7535) · [Before (L7535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7535)

```diff
-         const lu = `${ju?su:-1-su}:${Uu}:${null!==Zu&&void 0!==Zu?Zu:""}`;
+         const kG = `${ZG?wG:-1-wG}:${SG}:${null!==LG&&void 0!==LG?LG:""}`;
```

#### 576. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7630` → after: `L7630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7630) · [Before (L7630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7630)

```diff
-         this.device = uu, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(Lj.m), this.entities = void 0, this.entityStandIn =  … [truncated]
+         this.device = GG, this.uniform = void 0, this.voxelBuffer = void 0, this.special = void 0, this.volume = void 0, this.volumeView = void 0, this.volumeSampler = void 0, this.work = void 0, this.workData = new ArrayBuffer(eZ.q), this.entities = void 0, this.entityStandIn =  … [truncated]
```

#### 577. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7643` → after: `L7643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7643) · [Before (L7643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7643)

```diff
-         const [ju, su, Uu] = Lj.o;
+         const [ZG, wG, SG] = eZ.t;
```

#### 578. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7665` → after: `L7665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7665) · [Before (L7665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7665)

```diff
-           size: Lj.m,
+           size: eZ.q,
```

#### 579. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7684-L7685` → after: `L7684-L7685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7684-L7685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7684-L7685) · [Before (L7684-L7685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7684-L7685)

```diff
-         const su = null !== (uu = null === (Eu = this.casters) || void 0 === Eu ? void 0 : Eu.planesLoading) && void 0 !== uu ? uu : 0;
-         return su > 0 && ju.push(`${su} Lite sun shadow plane casters loading their textures`), ju
+         const wG = null !== (GG = null === (bG = this.casters) || void 0 === bG ? void 0 : bG.planesLoading) && void 0 !== GG ? GG : 0;
+         return wG > 0 && ZG.push(`${wG} Lite sun shadow plane casters loading their textures`), ZG
```

#### 580. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7689` → after: `L7689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7689) · [Before (L7689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7689)

```diff
-         const Uu = nE.o;
+         const SG = Nb.m;
```

#### 581. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7696` → after: `L7696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7696) · [Before (L7696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7696)

```diff
-           binding: Uu.ac,
+           binding: SG.Wf,
```

#### 582. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7714` → after: `L7714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7714) · [Before (L7714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7714)

```diff
-             buffer: null !== (uu = null === (Eu = this.entities) || void 0 === Eu ? void 0 : Eu.frameBuffer) && void 0 !== uu ? uu : this.entityStandIn
+             buffer: null !== (GG = null === (bG = this.entities) || void 0 === bG ? void 0 : bG.frameBuffer) && void 0 !== GG ? GG : this.entityStandIn
```

#### 583. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7719` → after: `L7719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7719) · [Before (L7719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7719)

```diff
-             buffer: null !== (ju = null === (su = this.entities) || void 0 === su ? void 0 : su.gridBuffer) && void 0 !== ju ? ju : this.entityStandIn
+             buffer: null !== (ZG = null === (wG = this.entities) || void 0 === wG ? void 0 : wG.gridBuffer) && void 0 !== ZG ? ZG : this.entityStandIn
```

#### 584. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7726` → after: `L7726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7726) · [Before (L7726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7726)

```diff
-         const Uu = null !== (su = null === ju || void 0 === ju ? void 0 : ju.sunShadowReach()) && void 0 !== su ? su : {
+         const SG = null !== (wG = null === ZG || void 0 === ZG ? void 0 : ZG.sunShadowReach()) && void 0 !== wG ? wG : {
```

#### 585. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7731` → after: `L7731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7731) · [Before (L7731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7731)

```diff
-         if (uu.zb.duu !== zE) return void(this.warned || (this.warned = !0, console.warn(`Lite: sun shadows need chunks of 32 blocks, not ${uu.zb.duu}; everything is lit.`)));
+         if (GG.Op.sGG !== xb) return void(this.warned || (this.warned = !0, console.warn(`Lite: sun shadows need chunks of 32 blocks, not ${GG.Op.sGG}; everything is lit.`)));
```

#### 586. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7733-L7734` → after: `L7733-L7734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7733-L7734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7733-L7734) · [Before (L7733-L7734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7733-L7734)

```diff
-         this.casters.update(uu.sN, uu.sN.lN.length);
-         const Xu = uu.ec;
+         this.casters.update(GG.LQ, GG.LQ.YQ.length);
+         const yG = GG.zf;
```

#### 587. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7736` → after: `L7736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7736) · [Before (L7736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7736)

```diff
-         const lu = (0, Lj.v)(this.eye);
+         const kG = (0, eZ.A)(this.eye);
```

#### 588. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7738-L7740` → after: `L7738-L7740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7738-L7740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7738-L7740) · [Before (L7738-L7740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7738-L7740)

```diff
-         const qu = uu.zb.CY;
-         Zu.update(this.eye, ((uu, Eu, ju) => qu.bY(uu, Eu, ju)), 1);
-         const fu = (0, Lj.q)(ju.fuu()),
+         const UG = GG.Op.Qh;
+         LG.update(this.eye, ((GG, bG, ZG) => UG.Kh(GG, bG, ZG)), 1);
+         const YG = (0, eZ.v)(ZG.XGG()),
```

#### 589. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7751` → after: `L7751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7751) · [Before (L7751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7751)

```diff
-           if (su[Zu] + ju <= Eu[Zu] - ju || su[Zu] >= Eu[Zu] + Lj.o[Zu] + ju) return;
+           if (wG[LG] + ZG <= bG[LG] - ZG || wG[LG] >= bG[LG] + eZ.t[LG] + ZG) return;
```

#### 590. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7762` → after: `L7762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7762) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7762) · [Before (L7762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7762)

```diff
-         this.staleAll && uu - this.staleAllSwept >= Lj.h && (this.staleAll = !1, Eu.length = 0);
+         this.staleAll && GG - this.staleAllSwept >= eZ.k && (this.staleAll = !1, bG.length = 0);
```

#### 591. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7765` → after: `L7765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7765) · [Before (L7765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7765)

```diff
-           if (uu - Eu[Uu + 3] < Lj.h) {
+           if (GG - bG[SG + 3] < eZ.k) {
```

#### 592. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7772` → after: `L7772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7772) · [Before (L7772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7772)

```diff
-           for (let uu = 0; uu < 3; uu++) su[16 + 4 * Uu + uu] = 4 * Uu < ju ? Eu[4 * Uu + uu] * zE : 0
+           for (let GG = 0; GG < 3; GG++) wG[16 + 4 * SG + GG] = 4 * SG < ZG ? bG[4 * SG + GG] * xb : 0
```

#### 593. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7790` → after: `L7790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7790) · [Before (L7790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7790)

```diff
-         const Uu = (0, Lj.r)(this.volumeHolds, uu);
+         const SG = (0, eZ.x)(this.volumeHolds, GG);
```

#### 594. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7792` → after: `L7792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7792) · [Before (L7792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7792)

```diff
-         const Zu = 1 === Uu.length && Uu[0].size.every(((uu, Eu) => uu === Lj.o[Eu])),
+         const LG = 1 === SG.length && SG[0].size.every(((GG, bG) => GG === eZ.t[bG])),
```

#### 595. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7798` → after: `L7798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7798) · [Before (L7798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7798)

```diff
-         if ((Zu || this.written || fu || Cu) && (this.fastLeft = Lj.h), Zu || this.written || qu || fu) {
+         if ((LG || this.written || YG || VG) && (this.fastLeft = eZ.k), LG || this.written || UG || YG) {
```

#### 596. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7801` → after: `L7801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7801) · [Before (L7801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7801)

```diff
-           this.sweepLeft = Zu ? 0 : Lj.h
+           this.sweepLeft = LG ? 0 : eZ.k
```

#### 597. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7803-L7804` → after: `L7803-L7804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7803-L7804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7803-L7804) · [Before (L7803-L7804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7803-L7804)

```diff
-         if (Zu ? this.swept += Lj.h : this.sweepLeft > 0 && (this.fastLeft > 0 || ++this.paced % 2 === 0) && (this.fastLeft = Math.max(this.fastLeft - 1, 0), this.sweepLeft--, Uu.push(...(0, Lj.x)(uu, this.slice)), this.slice = (this.slice + 1) % Lj.h, this.swept++), 0 === Uu.len … [truncated]
-         const bu = (0, Lj.B)(this.workData, Eu, Uu);
+         if (LG ? this.swept += eZ.k : this.sweepLeft > 0 && (this.fastLeft > 0 || ++this.paced % 2 === 0) && (this.fastLeft = Math.max(this.fastLeft - 1, 0), this.sweepLeft--, SG.push(...(0, eZ.E)(GG, this.slice)), this.slice = (this.slice + 1) % eZ.k, this.swept++), 0 === SG.len … [truncated]
+         const pG = (0, eZ.F)(this.workData, bG, SG);
```

#### 598. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7812` → after: `L7812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7812) · [Before (L7812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7812)

```diff
-         Nu.setPipeline(su.pipeline), Nu.setBindGroup(Tj.group, su.bindGroup), Nu.dispatchWorkgroups(Math.ceil(bu / Lj.j)), Nu.end(), this.device.queue.submit([cu.finish()])
+         QG.setPipeline(wG.pipeline), QG.setBindGroup(HZ.group, wG.bindGroup), QG.dispatchWorkgroups(Math.ceil(pG / eZ.o)), QG.end(), this.device.queue.submit([fG.finish()])
```

#### 599. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7828` → after: `L7828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7828) · [Before (L7828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7828)

```diff
-               binding: uu.ac,
+               binding: GG.Wf,
```

#### 600. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7864` → after: `L7864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7864) · [Before (L7864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7864)

```diff
-               binding: uu.ac,
+               binding: GG.Wf,
```

#### 601. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7902` → after: `L7902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7902) · [Before (L7902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7902)

```diff
-           this.volumePassFailed = !0, console.warn(`Lite: sun shadows' visibility volume didn't build, so air shadows and far traces are lit: ${String(uu)}`)
+           this.volumePassFailed = !0, console.warn(`Lite: sun shadows' visibility volume didn't build, so air shadows and far traces are lit: ${String(GG)}`)
```

#### 602. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7922-L7923` → after: `L7922-L7923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7922-L7923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7922-L7923) · [Before (L7922-L7923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7922-L7923)

```diff
-         return uu.zb.on("chunkAdded", su), this.stopWindow = () => {
-           uu.zb.removeListener("chunkAdded", su)
+         return GG.Op.on("chunkAdded", wG), this.stopWindow = () => {
+           GG.Op.removeListener("chunkAdded", wG)
```

#### 603. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7927-L7928` → after: `L7927-L7928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7927-L7928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7927-L7928) · [Before (L7927-L7928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7927-L7928)

```diff
-     var eq = ju(39046),
-       Gq = ju(39052);
+     var EU = ZG(39106),
+       oU = ZG(39111);
```

#### 604. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7937-L7938` → after: `L7937-L7938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7937-L7938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7937-L7938) · [Before (L7937-L7938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7937-L7938)

```diff
-     const Pq = `\n${Is}\n\nconst MAX_STOPS = ${Gq.b}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${Gq.b/4}>,\n\tcolor1: array<vec4f, ${Gq.b}>,\n\t … [truncated]
-     var oq = ju(41870);
+     const mU = `\n${sw}\n\nconst MAX_STOPS = ${oU.b}u;\n\nstruct SystemUniforms {\n\tgravity: vec3f,\n\tcolorCount: u32,\n\tcolorDead: vec4f,\n\tvelocityCount: u32,\n\tremapCount: u32,\n\tramp: u32,\n\tcolorPositions: array<vec4f, ${oU.b/4}>,\n\tcolor1: array<vec4f, ${oU.b}>,\n\t … [truncated]
+     var IU = ZG(42043);
```

#### 605. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7941-L7942` → after: `L7941-L7942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7941-L7942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7941-L7942) · [Before (L7941-L7942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7941-L7942)

```diff
-         this.device = uu, this.system = Eu, this.frameIndex = ju, this.bindings = su, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, oq.h)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.bou … [truncated]
-           this.device.queue.writeBuffer(this.ring, uu * Gq.e * 4, this.system.ring.records, uu * Gq.e, (Eu - uu) * Gq.e)
+         this.device = GG, this.system = bG, this.frameIndex = ZG, this.bindings = wG, this.ring = void 0, this.uniforms = void 0, this.uniformBits = null, this.rampTexels = (0, IU.f)(), this.ramp = null, this.rampView = null, this.bindGroup = null, this.boundView = null, this.bou … [truncated]
+           this.device.queue.writeBuffer(this.ring, GG * oU.c * 4, this.system.ring.records, GG * oU.c, (bG - GG) * oU.c)
```

#### 606. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7948` → after: `L7948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7948) · [Before (L7948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7948)

```diff
-           label: `particles-${Uu}`,
+           label: `particles-${SG}`,
```

#### 607. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7952-L7953` → after: `L7952-L7953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7952-L7953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7952-L7953) · [Before (L7952-L7953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7952-L7953)

```diff
-           label: `particles-uniforms-${Uu}`,
-           size: 4 * Gq.p,
+           label: `particles-uniforms-${SG}`,
+           size: 4 * oU.m,
```

#### 608. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7958` → after: `L7958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7958) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7958) · [Before (L7958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7958)

```diff
-         const Eu = (0, oq.e)(this.system, this.uniformBits, uu);
+         const bG = (0, IU.c)(this.system, this.uniformBits, GG);
```

#### 609. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7965-L7967` → after: `L7965-L7967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7965-L7967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7965-L7967) · [Before (L7965-L7967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7965-L7967)

```diff
-         (0, oq.l)(uu, this.rampTexels) && this.rampTexels.key.length > 0 && (this.ramp || (this.ramp = this.device.createTexture({
-           label: `particles-ramp-${uu.name}`,
-           size: [Gq.j, 1],
+         (0, IU.m)(GG, this.rampTexels) && this.rampTexels.key.length > 0 && (this.ramp || (this.ramp = this.device.createTexture({
+           label: `particles-ramp-${GG.name}`,
+           size: [oU.f, 1],
```

#### 610. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7973-L7974` → after: `L7973-L7974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7973-L7974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7973-L7974) · [Before (L7973-L7974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7973-L7974)

```diff
-           bytesPerRow: 4 * Gq.j
-         }, [Gq.j, 1]));
+           bytesPerRow: 4 * oU.f
+         }, [oU.f, 1]));
```

#### 611. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7977` → after: `L7977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L7977) · [Before (L7977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L7977)

```diff
-           label: `particles-${uu.name}`,
+           label: `particles-${GG.name}`,
```

#### 612. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8011` → after: `L8011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L8011) · [Before (L8011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L8011)

```diff
-         this.device = uu, this.resources = Eu, this.renderable = void 0, this.systems = new Map, this.draws = [], this.bindings = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(409 … [truncated]
+         this.device = GG, this.resources = bG, this.renderable = void 0, this.systems = new Map, this.draws = [], this.bindings = void 0, this.frameLayout = void 0, this.pipelineLayout = void 0, this.module = void 0, this.pipelines = new Map, this.frameData = new Float32Array(409 … [truncated]
```

#### 613. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8111` → after: `L8111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L8111) · [Before (L8111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L8111)

```diff
-       get cUu() {
+       get XSG() {
```

#### 614. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8118` → after: `L8118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L8118) · [Before (L8118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L8118)

```diff
-         return (0, eq.g)(this.systems.keys(), "Lite")
+         return (0, EU.c)(this.systems.keys(), "Lite")
```

#### 615. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8121` → after: `L8121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L8121) · [Before (L8121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L8121)

```diff
-         const ju = new eq.c(uu, Eu, this);
+         const ZG = new EU.b(GG, bG, this);
```

#### 616. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8124-L8125` → after: `L8124-L8125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8124-L8125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L8124-L8125) · [Before (L8124-L8125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L8124-L8125)

```diff
-       I6(uu, Eu) {
-         for (const ju of this.systems.keys()) ju.I6(uu, Eu)
+       pGG(GG, bG) {
+         for (const ZG of this.systems.keys()) ZG.pGG(GG, bG)
```

#### 617. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8131-L8132` → after: `L8131-L8132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8131-L8132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L8131-L8132) · [Before (L8131-L8132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L8131-L8132)

```diff
-         if (Eu.texture = ju, Eu.pipelines.length = 0, !UE(uu.blendMode)) return this.warnOnce(`blend:${uu.blendMode}`, `particle blend mode ${uu.blendMode} is not drawn (${uu.name})`), !0;
-         const su = (0, xu.k)(uu.blendMode);
+         if (bG.texture = ZG, bG.pipelines.length = 0, !Sb(GG.blendMode)) return this.warnOnce(`blend:${GG.blendMode}`, `particle blend mode ${GG.blendMode} is not drawn (${GG.name})`), !0;
+         const wG = (0, TG.o)(GG.blendMode);
```

#### 618. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8172` → after: `L8172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L8172) · [Before (L8172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L8172)

```diff
-         const Eu = `${uu._colorFormat}|${uu._depthStencilFormat}|${uu._depthCompare}|${uu._sampleCount}`;
+         const bG = `${GG._colorFormat}|${GG._depthStencilFormat}|${GG._depthCompare}|${GG._sampleCount}`;
```

#### 619. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8184` → after: `L8184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L8184) · [Before (L8184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L8184)

```diff
-           Xu = null !== (Eu = Uu._depthCompare) && void 0 !== Eu ? Eu : JE,
+           yG = null !== (bG = SG._depthCompare) && void 0 !== bG ? bG : ib,
```

#### 620. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8189` → after: `L8189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L8189) · [Before (L8189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L8189)

```diff
-           label: `particles-${uu}`,
+           label: `particles-${GG}`,
```

#### 621. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8201` → after: `L8201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L8201) · [Before (L8201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L8201)

```diff
-           }, Uu, ZE((0, xu.j)(uu))),
+           }, SG, Lb((0, TG.k)(GG))),
```

#### 622. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8217` → after: `L8217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L8217) · [Before (L8217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L8217)

```diff
-           ju.set(uu, !1), console.error("Lite particle pipeline failed", Eu), CE(lu, "particles", `blend-${uu}`, Eu)
+           ZG.set(GG, !1), console.error("Lite particle pipeline failed", bG), Vb(kG, "particles", `blend-${GG}`, bG)
```

#### 623. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8253` → after: `L8253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L8253) · [Before (L8253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L8253)

```diff
-         this.lite = uu, this.canvas = Eu, this.info = ju, this.resources = Uu, this.bsu = !1, this.needPOTTextures = !1, this.W9 = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
+         this.lite = GG, this.canvas = bG, this.info = ZG, this.resources = SG, this.iwG = !1, this.needPOTTextures = !1, this.F_ = !0, this.renderWidth = void 0, this.renderHeight = void 0, this.performanceMonitor = {
```

#### 624. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8269` → after: `L8269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L8269) · [Before (L8269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L8269)

```diff
-         this.lite = uu, (0, Iu.q)(uu, this.renderWidth, this.renderHeight)
+         this.lite = GG, (0, qG.r)(GG, this.renderWidth, this.renderHeight)
```

#### 625. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8288` → after: `L8288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L8288) · [Before (L8288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L8288)

```diff
-           (0, Iu.q)(Uu, uu, Eu)
+           (0, qG.r)(SG, GG, bG)
```

#### 626. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8293` → after: `L8293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L8293) · [Before (L8293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L8293)

```diff
-               (0, Iu.q)(Uu, ju, su)
+               (0, qG.r)(SG, ZG, wG)
```

#### 627. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8323` → after: `L8323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L8323) · [Before (L8323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L8323)

```diff
-         return null !== (ju = this.resources.E_.get(uu)) && void 0 !== ju ? ju : new cE(this.resources, uu, Eu)
+         return null !== (ZG = this.resources.j_.get(GG)) && void 0 !== ZG ? ZG : new fb(this.resources, GG, bG)
```

#### 628. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8342` → after: `L8342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L8342) · [Before (L8342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L8342)

```diff
-         this.canvas = Eu, this.options = ju, this.TEu = void 0, this.backendName = "WebGPU (Lite)", this.m_ = void 0, this.modelMeshes = void 0, this.particles = void 0, this.resources = void 0, this.camera = new Kq, this.lastFrameTime = 0, this.engine = void 0, this.vY = void 0, … [truncated]
+         this.canvas = bG, this.options = ZG, this.LZG = void 0, this.backendName = "WebGPU (Lite)", this.Z5 = void 0, this.modelMeshes = void 0, this.particles = void 0, this.resources = void 0, this.camera = new cU, this.lastFrameTime = 0, this.engine = void 0, this.Ah = void 0, … [truncated]
```

#### 629. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8347-L8348` → after: `L8347-L8348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8347-L8348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L8347-L8348) · [Before (L8347-L8348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L8347-L8348)

```diff
-         this.resources = Uu, this.particles = uu.particles, this.TEu = new vq(uu.engine, Eu, su, uu.device.limits, Uu), (0, Pu.E)({
-           dl: uu => {
+         this.resources = SG, this.particles = GG.particles, this.LZG = new aU(GG.engine, bG, wG, GG.device.limits, SG), (0, mG.B)({
+           Ik: GG => {
```

#### 630. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8355` → after: `L8355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L8355) · [Before (L8355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L8355)

```diff
-         }), this.m_ = Zu.m_, this.modelMeshes = Zu.modelMeshes
+         }), this.Z5 = LG.Z5, this.modelMeshes = LG.modelMeshes
```

#### 631. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8367` → after: `L8367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L8367) · [Before (L8367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L8367)

```diff
-         this.engine = uu.engine, this.vY = uu.vY, this.sceneTask = uu.sceneTask, this.device = uu.device, this.liteTerrain = uu.terrain, this.meshes = uu.meshes, this.sunShadow = uu.sunShadow;
+         this.engine = GG.engine, this.Ah = GG.Ah, this.sceneTask = GG.sceneTask, this.device = GG.device, this.liteTerrain = GG.terrain, this.meshes = GG.meshes, this.sunShadow = GG.sunShadow;
```

#### 632. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8372` → after: `L8372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L8372) · [Before (L8372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L8372)

```diff
-         })), uu.vY.camera = this.camera
+         })), GG.Ah.camera = this.camera
```

#### 633. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8377` → after: `L8377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L8377) · [Before (L8377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L8377)

```diff
-         this.halted = !0, this.liteTerrain.retire(), null === (uu = this.sunShadow) || void 0 === uu || uu.dispose(), this.TEu.detach();
+         this.halted = !0, this.liteTerrain.retire(), null === (GG = this.sunShadow) || void 0 === GG || GG.dispose(), this.LZG.detach();
```

#### 634. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8384-L8385` → after: `L8384-L8385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8384-L8385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L8384-L8385) · [Before (L8384-L8385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L8384-L8385)

```diff
-             width: this.TEu.renderWidth,
-             height: this.TEu.renderHeight
+             width: this.LZG.renderWidth,
+             height: this.LZG.renderHeight
```

#### 635. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8391` → after: `L8391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L8391) · [Before (L8391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L8391)

```diff
-           this.resources.rebind(lu, qu), this.particles.rebind(qu), this.m_.dropSteady();
+           this.resources.rebind(kG, UG), this.particles.rebind(UG), this.Z5.dropSteady();
```

#### 636. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8395` → after: `L8395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L8395) · [Before (L8395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L8395)

```diff
-               m_: this.m_,
+               Z5: this.Z5,
```

#### 637. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8400` → after: `L8400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L8400) · [Before (L8400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L8400)

```diff
-           if (null !== ju) throw new Error(`WebGPU device lost while Lite was rebuilding (${ju.reason}): ${ju.message}`);
+           if (null !== ZG) throw new Error(`WebGPU device lost while Lite was rebuilding (${ZG.reason}): ${ZG.message}`);
```

#### 638. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8405-L8406` → after: `L8405-L8406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8405) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8405-L8406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L8405-L8406) · [Before (L8405-L8406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L8405-L8406)

```diff
-           } = this.vY.clearColor;
-           this.install(Eu), this.setClearColour(su, Uu, Zu), this.TEu.rebind(lu)
+           } = this.Ah.clearColor;
+           this.install(bG), this.setClearColour(wG, SG, LG), this.LZG.rebind(kG)
```

#### 639. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8410` → after: `L8410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L8410) · [Before (L8410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L8410)

```diff
-         return this.lastFrameTime = 0, this.halted = !1, this.trialFrames = 30, null === (Eu = this.tO) || void 0 === Eu || Eu.resize(), null === (ju = this.tO) || void 0 === ju || null === (su = ju.Uc) || void 0 === su || null === (Uu = su.mG) || void 0 === Uu || Uu.remeshForRen … [truncated]
+         return this.lastFrameTime = 0, this.halted = !1, this.trialFrames = 30, null === (bG = this.HK) || void 0 === bG || bG.resize(), null === (ZG = this.HK) || void 0 === ZG || null === (wG = ZG.wf) || void 0 === wG || null === (SG = wG.QE) || void 0 === SG || SG.remeshForRen … [truncated]
```

#### 640. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8430-L8431` → after: `L8430-L8431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8430-L8431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L8430-L8431) · [Before (L8430-L8431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L8430-L8431)

```diff
-         this.tO = uu, this.modelMeshes.attach(uu.model, uu.sceneMirror);
-         const Eu = uu.vY;
+         this.HK = GG, this.modelMeshes.attach(GG.model, GG.sceneMirror);
+         const bG = GG.Ah;
```

#### 641. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8439` → after: `L8439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L8439) · [Before (L8439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L8439)

```diff
-             this.TEu.wG(), uu.vY.render()
+             this.LZG.yE(), GG.Ah.render()
```

#### 642. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8451` → after: `L8451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L8451) · [Before (L8451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L8451)

```diff
-         const Uu = [...this.particles.describePendingWork(), ...null !== (uu = null === (Eu = this.sunShadow) || void 0 === Eu ? void 0 : Eu.describePendingWork()) && void 0 !== uu ? uu : []],
+         const SG = [...this.particles.describePendingWork(), ...null !== (GG = null === (bG = this.sunShadow) || void 0 === bG ? void 0 : bG.describePendingWork()) && void 0 !== GG ? GG : []],
```

#### 643. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8453` → after: `L8453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L8453) · [Before (L8453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L8453)

```diff
-         Zu > 0 && Uu.push(`${Zu} Lite pipelines compiling`);
+         LG > 0 && SG.push(`${LG} Lite pipelines compiling`);
```

#### 644. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8455` → after: `L8455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L8455) · [Before (L8455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L8455)

```diff
-         Xu > 0 && Uu.push(`${Xu} Lite terrain buffers awaiting their out-of-memory verdict`);
+         yG > 0 && SG.push(`${yG} Lite terrain buffers awaiting their out-of-memory verdict`);
```

#### 645. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8457` → after: `L8457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8457) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L8457) · [Before (L8457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L8457)

```diff
-         return lu > 0 && Uu.push(`${lu} Lite textures loading`), Uu
+         return kG > 0 && SG.push(`${kG} Lite textures loading`), SG
```

#### 646. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8465` → after: `L8465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L8465) · [Before (L8465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L8465)

```diff
-         this.camera.copyFromView(qu), this.setClearColour(qu.clearColour[0], qu.clearColour[1], qu.clearColour[2]), null === (ju = this.sunShadow) || void 0 === ju || ju.prepare(uu.Uc, qu.eye, null !== (su = uu.Uc.AN) && void 0 !== su ? su : null), this.terrain.prepare(uu, qu), n … [truncated]
+         this.camera.copyFromView(UG), this.setClearColour(UG.clearColour[0], UG.clearColour[1], UG.clearColour[2]), null === (ZG = this.sunShadow) || void 0 === ZG || ZG.prepare(GG.wf, UG.eye, null !== (wG = GG.wf.OQ) && void 0 !== wG ? wG : null), this.terrain.prepare(GG, UG), n … [truncated]
```

#### 647. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8469` → after: `L8469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L8469) · [Before (L8469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L8469)

```diff
-           (0, Iu.m)(this.engine, this.lastFrameTime > 0 ? fu - this.lastFrameTime : 0)
+           (0, qG.o)(this.engine, this.lastFrameTime > 0 ? YG - this.lastFrameTime : 0)
```

#### 648. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8476` → after: `L8476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L8476) · [Before (L8476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L8476)

```diff
-         const su = this.vY.clearColor;
+         const wG = this.Ah.clearColor;
```

#### 649. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8510` → after: `L8510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L8510) · [Before (L8510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L8510)

```diff
-           throw Object.assign(new Error(`${Qq} (${uu}): ${Eu}`), {
+           throw Object.assign(new Error(`${PU} (${GG}): ${bG}`), {
```

#### 650. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8516` → after: `L8516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L8516) · [Before (L8516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L8516)

```diff
-         throw Xu.destroy(), null === lu() ? qu : (0, jl.h)(qu, "device")
+         throw yG.destroy(), null === kG() ? UG : (0, bk.f)(UG, "device")
```

#### 651. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8523` → after: `L8523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L8523) · [Before (L8523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L8523)

```diff
-       if (!uu) throw (0, jl.h)(new Error("No WebGPU adapter"), "no_adapter");
+       if (!GG) throw (0, bk.f)(new Error("No WebGPU adapter"), "no_adapter");
```

#### 652. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8529-L8530` → after: `L8529-L8530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8529-L8530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L8529-L8530) · [Before (L8529-L8530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L8529-L8530)

```diff
-         Uu = await (0, Iu.g)(uu, {
-           msaaSamples: Eu.Jju ? 4 : 1,
+         SG = await (0, qG.e)(GG, {
+           msaaSamples: bG.MZG ? 4 : 1,
```

#### 653. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8535` → after: `L8535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L8535) · [Before (L8535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L8535)

```diff
-         throw (0, jl.h)(Xu, "#47" === (null === (Zu = Xu) || void 0 === Zu ? void 0 : Zu.message) ? "no_adapter" : "device")
+         throw (0, bk.f)(yG, "#47" === (null === (LG = yG) || void 0 === LG ? void 0 : LG.message) ? "no_adapter" : "device")
```

#### 654. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8538` → after: `L8538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L8538) · [Before (L8538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L8538)

```diff
-       return null !== ju && (0, Iu.q)(Uu, ju.width, ju.height), Uu
+       return null !== ZG && (0, qG.r)(SG, ZG.width, ZG.height), SG
```

#### 655. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8544` → after: `L8544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L8544) · [Before (L8544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L8544)

```diff
-         Eu = uu, console.error(`WebGPU device lost (${uu.reason}): ${uu.message}`)
+         bG = GG, console.error(`WebGPU device lost (${GG.reason}): ${GG.message}`)
```

#### 656. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8553-L8554` → after: `L8553-L8554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8553-L8554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L8553-L8554) · [Before (L8553-L8554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L8553-L8554)

```diff
-       const qu = (0, Bu.d)(uu),
-         fu = null !== (Uu = null === su || void 0 === su ? void 0 : su.resources) && void 0 !== Uu ? Uu : new RX(uu, Eu),
+       const UG = (0, gG.e)(GG),
+         YG = null !== (SG = null === wG || void 0 === wG ? void 0 : wG.resources) && void 0 !== SG ? SG : new xy(GG, bG),
```

#### 657. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8559` → after: `L8559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L8559) · [Before (L8559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L8559)

```diff
-             if (su._targetSignature === Eu) return null !== (ju = su._sceneBG) && void 0 !== ju ? ju : null
+             if (wG._targetSignature === bG) return null !== (ZG = wG._sceneBG) && void 0 !== ZG ? ZG : null
```

#### 658. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8562-L8563` → after: `L8562-L8563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8562) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8562-L8563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L8562-L8563) · [Before (L8562-L8563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L8562-L8563)

```diff
-         }(qu, uu)), null === su || void 0 === su ? void 0 : su.m_, null === su || void 0 === su ? void 0 : su.modelMeshes),
-         cu = null !== (Zu = null === su || void 0 === su ? void 0 : su.particles) && void 0 !== Zu ? Zu : new mq(Eu, fu);
+         }(UG, GG)), null === wG || void 0 === wG ? void 0 : wG.Z5, null === wG || void 0 === wG ? void 0 : wG.modelMeshes),
+         fG = null !== (LG = null === wG || void 0 === wG ? void 0 : wG.particles) && void 0 !== LG ? LG : new vU(bG, YG);
```

#### 659. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8569` → after: `L8569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L8569) · [Before (L8569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L8569)

```diff
-           if ("vY" === Eu.name) return Eu;
+           if ("Ah" === bG.name) return bG;
```

#### 660. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8576` → after: `L8576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L8576) · [Before (L8576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L8576)

```diff
-         vY: qu,
+         Ah: UG,
```

#### 661. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8587` → after: `L8587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L8587) · [Before (L8587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L8587)

```diff
-   40952: (uu, Eu, ju) => {
+   41084: (GG, bG, ZG) => {
```

#### 662. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8589` → after: `L8589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L8589) · [Before (L8589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L8589)

```diff
-       D: () => Ou,
+       A: () => KG,
```

#### 663. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8592` → after: `L8592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L8592) · [Before (L8592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L8592)

```diff
-       g: () => cu,
+       h: () => fG,
```

#### 664. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8594-L8596` → after: `L8594-L8596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8594-L8596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L8594-L8596) · [Before (L8594-L8596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L8594-L8596)

```diff
-       k: () => hu,
-       n: () => Zu,
-       o: () => lu,
+       j: () => dG,
+       l: () => LG,
+       m: () => kG,
```

#### 665. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8598-L8600` → after: `L8598-L8600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8598-L8600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L8598-L8600) · [Before (L8598-L8600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L8598-L8600)

```diff
-       t: () => Xu,
-       w: () => Yu,
-       z: () => Nu
+       u: () => yG,
+       v: () => hG,
+       x: () => QG
```

#### 666. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8608` → after: `L8608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L8608) · [Before (L8608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L8608)

```diff
-         ac: 4,
+         Wf: 4,
```

#### 667. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8651` → after: `L8651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L8651) · [Before (L8651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L8651)

```diff
-         return `    ${Eu}: ${ju},\n`
+         return `    ${bG}: ${ZG},\n`
```

#### 668. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8653` → after: `L8653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L8653) · [Before (L8653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L8653)

```diff
-       return `struct ${fu} {\n${uu}}\n@group(${su}) @binding(${Uu}) var<uniform> ${Cu}: ${fu};\n`
+       return `struct ${YG} {\n${GG}}\n@group(${wG}) @binding(${SG}) var<uniform> ${VG}: ${YG};\n`
```

#### 669. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L8660` → after: `L8660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R8660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L8660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/274.js#L8660) · [Before (L8660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/274.js#L8660)

```diff
-       for (let fu = 0; fu < 3; fu++) ju.setInt32(Zu.offset + 4 * fu, Eu.renderOffset[fu], !0), ju.setFloat32(Xu.offset + 4 * fu, Eu.fuu[fu], !0), ju.setFloat32(lu.offset + 4 * fu, Eu.eyePosition[fu], !0), ju.setFloat32(qu.offset + 4 * fu, Eu.shadowDirection[fu], !0)
+       for (let YG = 0; YG < 3; YG++) ZG.setInt32(LG.offset + 4 * YG, bG.renderOffset[YG], !0), ZG.setFloat32(yG.offset + 4 * YG, bG.XGG[YG], !0), ZG.setFloat32(kG.offset + 4 * YG, bG.eyePosition[YG], !0), ZG.setFloat32(UG.offset + 4 * YG, bG.shadowDirection[YG], !0)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/275.js` (dz8ef.98c5e741 → wp3j0a.a13381cf)

- **File**: `bundles/bloxd.io/chunks/js/275.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a)

#### 1. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/275.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/275.js#L4)

```diff
-   41138: (uu, Eu, ju) => {
+   41305: (GG, bG, ZG) => {
```

#### 2. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L7-L8` → after: `L7-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L7-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/275.js#L7-L8) · [Before (L7-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/275.js#L7-L8)

```diff
-       e: () => Zu,
-       h: () => lu
+       g: () => LG,
+       k: () => kG
```

#### 3. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L32` → after: `L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/275.js#L32) · [Before (L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/275.js#L32)

```diff
-   41149: (uu, Eu, ju) => {
+   41319: (GG, bG, ZG) => {
```

#### 4. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L35` → after: `L35`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR35) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/275.js#L35) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/275.js#L35)

```diff
-       f: () => Zu
+       e: () => LG
```

#### 5. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L52` → after: `L52`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR52) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/275.js#L52) · [Before (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/275.js#L52)

```diff
-   41206: (uu, Eu, ju) => {
+   41383: (GG, bG, ZG) => {
```

#### 6. `bundles/bloxd.io/chunks/js/275.js` (Changed code · before: `L54-L55` → after: `L54-L55`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758aR54) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-3d5ad1b459855a55e84a626ab2a73103b2e62959e6670c592e93835e2598758a) · [After (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/275.js#L54-L55) · [Before (L54-L55)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/275.js#L54-L55)

```diff
-       b: () => Zu,
-       d: () => Uu
+       e: () => LG,
+       h: () => SG
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/276.js` (dz8ef.98c5e741 → wp3j0a.a13381cf)

- **File**: `bundles/bloxd.io/chunks/js/276.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6)

#### 1. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/276.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/276.js#L4)

```diff
-   41276: (uu, Eu, ju) => {
+   41447: (GG, bG, ZG) => {
```

#### 2. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L8-L9` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/276.js#L8-L9) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/276.js#L8-L9)

```diff
-     var su = ju(5146),
-       Uu = ju(1559);
+     var wG = ZG(5008),
+       SG = ZG(1431);
```

#### 3. `bundles/bloxd.io/chunks/js/276.js` (Changed code · before: `L13-L14` → after: `L13-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-5d460e1bdb8ab5539fe91ab6489b5cebef06c588574614f9da5cb8423d27e6b6) · [After (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/276.js#L13-L14) · [Before (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/276.js#L13-L14)

```diff
-         packKey: async Eu => (await Uu.b.getGame(uu, Eu, !0)).customTexturePackKey,
-         fetchPack: su.c
+         packKey: async bG => (await SG.d.getGame(GG, bG, !0)).customTexturePackKey,
+         fetchPack: wG.e
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/277.js` (dz8ef.98c5e741 → wp3j0a.a13381cf)

- **File**: `bundles/bloxd.io/chunks/js/277.js` (13 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410)

#### 1. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/277.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/277.js#L4)

```diff
-   41276: (uu, Eu, ju) => {
+   41447: (GG, bG, ZG) => {
```

#### 2. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L8-L9` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/277.js#L8-L9) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/277.js#L8-L9)

```diff
-     var su = ju(5146),
-       Uu = ju(1559);
+     var wG = ZG(5008),
+       SG = ZG(1431);
```

#### 3. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L13-L14` → after: `L13-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/277.js#L13-L14) · [Before (L13-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/277.js#L13-L14)

```diff
-         packKey: async Eu => (await Uu.b.getGame(uu, Eu, !0)).customTexturePackKey,
-         fetchPack: su.c
+         packKey: async bG => (await SG.d.getGame(GG, bG, !0)).customTexturePackKey,
+         fetchPack: wG.e
```

#### 4. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L18` → after: `L18`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/277.js#L18) · [Before (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/277.js#L18)

```diff
-   51254: (uu, Eu, ju) => {
+   51425: (GG, bG, ZG) => {
```

#### 5. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L26-L33` → after: `L26-L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L26-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/277.js#L26-L33) · [Before (L26-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/277.js#L26-L33)

```diff
-     var su = ju(1255),
-       Uu = ju(1559),
-       Zu = ju(91),
-       Xu = ju(36850),
-       lu = ju(1183),
-       qu = ju(40988),
-       fu = ju(41276),
-       Cu = ju(40955);
+     var wG = ZG(1163),
+       SG = ZG(1431),
+       LG = ZG(80),
+       yG = ZG(36801),
+       kG = ZG(1096),
+       UG = ZG(41122),
+       YG = ZG(41447),
+       VG = ZG(41088);
```

#### 6. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/277.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/277.js#L45)

```diff
-         if (null === Uu) return void console.warn(`the texture pack step for ${uu} has no guest context: the pack in play stays`);
+         if (null === SG) return void console.warn(`the texture pack step for ${GG} has no guest context: the pack in play stays`);
```

#### 7. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L48` → after: `L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/277.js#L48) · [Before (L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/277.js#L48)

```diff
-         console.warn(`the texture pack step for ${uu} failed: the pack in play stays`, Uu)
+         console.warn(`the texture pack step for ${GG} failed: the pack in play stays`, SG)
```

#### 8. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L73` → after: `L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/277.js#L73) · [Before (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/277.js#L73)

```diff
-       const qu = null !== Zu && void 0 !== Zu ? Zu : await (0, lu.fetchAnonymousUserContext)();
+       const UG = null !== LG && void 0 !== LG ? LG : await (0, kG.fetchAnonymousUserContext)();
```

#### 9. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L75` → after: `L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/277.js#L75) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/277.js#L75)

```diff
-       const fu = await Uu.b.matchmakePlayer(qu, Eu, uu, (0, Xu.c)()),
+       const YG = await SG.d.matchmakePlayer(UG, bG, GG, (0, yG.e)()),
```

#### 10. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L77` → after: `L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R77) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/277.js#L77) · [Before (L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/277.js#L77)

```diff
-       if (!("gameServerHost" in fu)) throw new Error(`matchmaking refused: ${fu.failReason}`);
+       if (!("gameServerHost" in YG)) throw new Error(`matchmaking refused: ${YG.failReason}`);
```

#### 11. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L79` → after: `L79`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/277.js#L79) · [Before (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/277.js#L79)

```diff
-       if (Nu.isError()) throw new Error(`no socket URL for ${fu.gameServerHost}: ${Nu.asError().message}`);
+       if (QG.isError()) throw new Error(`no socket URL for ${YG.gameServerHost}: ${QG.asError().message}`);
```

#### 12. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L87` → after: `L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/277.js#L87) · [Before (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/277.js#L87)

```diff
-           ...await (0, Cu.h)(qu, Ou, ju, !1),
+           ...await (0, VG.e)(UG, KG, ZG, !1),
```

#### 13. `bundles/bloxd.io/chunks/js/277.js` (Changed code · before: `L91` → after: `L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410R91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-763250d94890c4ff339e1aa56070fc71e035e098cdcf0b5fbb8b04c80a295410) · [After (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/277.js#L91) · [Before (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/277.js#L91)

```diff
-         freshMs: Cu.d
+         freshMs: VG.c
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/278.js` (dz8ef.98c5e741 → wp3j0a.a13381cf)

- **File**: `bundles/bloxd.io/chunks/js/278.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0)

#### 1. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/278.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/278.js#L4)

```diff
-   41283: (uu, Eu, ju) => {
+   41449: (GG, bG, ZG) => {
```

#### 2. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L8-L16` → after: `L8-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/278.js#L8-L16) · [Before (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/278.js#L8-L16)

```diff
-     var su = ju(1244),
-       Uu = ju(58),
-       Zu = ju(91),
-       Xu = ju(1506),
-       lu = ju(131),
-       qu = ju(1116),
-       fu = ju(1154);
-     const Cu = (0, Uu.lazy)((() => Promise.all([ju.e(124), ju.e(398)]).then((() => ju(6724))))),
-       bu = (0, Uu.lazy)((() => ju.e(126).then((() => ju(6739)))));
+     var wG = ZG(1151),
+       SG = ZG(51),
+       LG = ZG(80),
+       yG = ZG(1393),
+       kG = ZG(116),
+       UG = ZG(1016),
+       YG = ZG(1067);
+     const VG = (0, SG.lazy)((() => Promise.all([ZG.e(124), ZG.e(398)]).then((() => ZG(6520))))),
+       pG = (0, SG.lazy)((() => ZG.e(126).then((() => ZG(6535)))));
```

#### 3. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L86` → after: `L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/278.js#L86) · [Before (L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/278.js#L86)

```diff
-       } = (0, su.A)(), [Eu, ju] = (0, Uu.useState)("partnersAndCredits"), Nu = {
+       } = (0, wG.w)(), [bG, ZG] = (0, SG.useState)("partnersAndCredits"), QG = {
```

#### 4. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L128` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/278.js#L128) · [Before (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/278.js#L128)

```diff
-           children: [Object.keys(Nu).map((su => (0, fu.jsx)(Xu.$, {
+           children: [Object.keys(QG).map((wG => (0, YG.jsx)(yG.K, {
```

#### 5. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L135` → after: `L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/278.js#L135) · [Before (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/278.js#L135)

```diff
-             children: (0, fu.jsxs)(Xu.$, {
+             children: (0, YG.jsxs)(yG.K, {
```

#### 6. `bundles/bloxd.io/chunks/js/278.js` (Changed code · before: `L139` → after: `L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0R139) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-1b7cf5d8a52c003b84e328e8f53f302d59c4d14ab9cb96036b2551928e955db0) · [After (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/278.js#L139) · [Before (L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/278.js#L139)

```diff
-               children: [(0, fu.jsx)(qu.e, {
+               children: [(0, YG.jsx)(UG.c, {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/279.js` (dz8ef.98c5e741 → wp3j0a.a13381cf)

- **File**: `bundles/bloxd.io/chunks/js/279.js` (67 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae)

#### 1. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L4)

```diff
-   41319: (uu, Eu, ju) => {
+   41487: (GG, bG, ZG) => {
```

#### 2. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L6)

```diff
-       e: () => Mu,
+       d: () => zG,
```

#### 3. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L8-L9` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L8-L9) · [Before (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L8-L9)

```diff
-       g: () => hu,
-       k: () => Du,
+       j: () => dG,
+       l: () => JG,
```

#### 4. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L12` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L12) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L12)

```diff
-       t: () => Ou,
+       s: () => KG,
```

#### 5. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L15-L25` → after: `L15-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L15-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L15-L24) · [Before (L15-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L15-L25)

```diff
-     var su = ju(37494),
-       Uu = ju(37680),
-       Zu = ju(37519),
-       Xu = ju(41321),
-       lu = ju(40467),
-       qu = ju(40268),
-       fu = ju(40302),
-       Cu = ju(40272),
-       bu = ju(37532);
-     const cu = Object.freeze(new su.i(0, 0, 0, 0)),
-       Nu = Object.freeze(su.t.Zero()),
+     var wG = ZG(37439),
+       SG = ZG(37621),
+       LG = ZG(37471),
+       yG = ZG(41493),
+       kG = ZG(40599),
+       UG = ZG(40407),
+       YG = ZG(40432),
+       VG = ZG(40416),
+       pG = ZG(37484);
+     const fG = Object.freeze(new wG.g(0, 0, 0, 0)),
```

#### 6. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L27` → after: `L26-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L26-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L26-L27) · [Before (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L27)

```diff
-       Yu = Object.freeze(qu.e.Zero()),
+       KG = Object.freeze(wG.m.Zero()),
+       hG = Object.freeze(UG.c.Zero()),
```

#### 7. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L29` → after: `L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L29) · [Before (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L29)

```diff
-       Du = Object.freeze(new Uu.g(0, 0, 0, 0)),
+       JG = Object.freeze(new SG.d(0, 0, 0, 0)),
```

#### 8. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L33` → after: `L33`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L33) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L33)

```diff
-         ZU: 2
+         Dw: 2
```

#### 9. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L38` → after: `L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L38) · [Before (L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L38)

```diff
-         if (!isNaN(parseFloat(Xu)) && isFinite(Xu) ? bu = Mu.ANIMATIONTYPE_FLOAT : Xu instanceof su.i ? bu = Mu.ANIMATIONTYPE_QUATERNION : Xu instanceof su.t ? bu = Mu.ANIMATIONTYPE_VECTOR3 : Xu instanceof su.p ? bu = Mu.ANIMATIONTYPE_VECTOR2 : Xu instanceof Uu.c ? bu = Mu.ANIMAT … [truncated]
+         if (!isNaN(parseFloat(yG)) && isFinite(yG) ? pG = zG.ANIMATIONTYPE_FLOAT : yG instanceof wG.g ? pG = zG.ANIMATIONTYPE_QUATERNION : yG instanceof wG.p ? pG = zG.ANIMATIONTYPE_VECTOR3 : yG instanceof wG.m ? pG = zG.ANIMATIONTYPE_VECTOR2 : yG instanceof SG.c ? pG = zG.ANIMAT … [truncated]
```

#### 10. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L58` → after: `L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L58) · [Before (L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L58)

```diff
-         this.name = uu, this.targetProperty = Eu, this.framePerSecond = ju, this.dataType = su, this.ZU = Uu, this.enableBlending = Zu, this._easingFunction = null, this._runtimeAnimations = new Array, this._events = new Array, this.blendingSpeed = .01, this._ranges = {}, this._c … [truncated]
+         this.name = GG, this.targetProperty = bG, this.framePerSecond = ZG, this.dataType = wG, this.Dw = SG, this.enableBlending = LG, this._easingFunction = null, this._runtimeAnimations = new Array, this._events = new Array, this.blendingSpeed = .01, this._ranges = {}, this._c … [truncated]
```

#### 11. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L62` → after: `L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR62) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L62) · [Before (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L62)

```diff
-         if (Eu += ", datatype: " + ["Float", "dO", "Quaternion", "Matrix", "Color3", "Vector2"][this.dataType], Eu += ", nKeys: " + (this._keys ? this._keys.length : "none"), Eu += ", nRanges: " + (this._ranges ? Object.keys(this._ranges).length : "none"), uu) {
+         if (bG += ", datatype: " + ["Float", "mK", "Quaternion", "Matrix", "Color3", "Vector2"][this.dataType], bG += ", nKeys: " + (this._keys ? this._keys.length : "none"), bG += ", nRanges: " + (this._ranges ? Object.keys(this._ranges).length : "none"), GG) {
```

#### 12. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L80` → after: `L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L80) · [Before (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L80)

```diff
-         this._ranges[uu] || (this._ranges[uu] = new Xu.b(uu, Eu, ju))
+         this._ranges[GG] || (this._ranges[GG] = new yG.c(GG, bG, ZG))
```

#### 13. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L118` → after: `L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L118) · [Before (L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L118)

```diff
-         return su.i.Slerp(uu, Eu, ju)
+         return wG.g.Slerp(GG, bG, ZG)
```

#### 14. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L121` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L121) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L121)

```diff
-         return su.i.Hermite(uu, Eu, ju, Uu, Zu).normalize()
+         return wG.g.Hermite(GG, bG, ZG, SG, LG).normalize()
```

#### 15. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L124` → after: `L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L124) · [Before (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L124)

```diff
-         return su.t.Lerp(uu, Eu, ju)
+         return wG.p.Lerp(GG, bG, ZG)
```

#### 16. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L127` → after: `L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L127) · [Before (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L127)

```diff
-         return su.t.Hermite(uu, Eu, ju, Uu, Zu)
+         return wG.p.Hermite(GG, bG, ZG, SG, LG)
```

#### 17. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L130` → after: `L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L130) · [Before (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L130)

```diff
-         return su.p.Lerp(uu, Eu, ju)
+         return wG.m.Lerp(GG, bG, ZG)
```

#### 18. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L133` → after: `L133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L133) · [Before (L133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L133)

```diff
-         return su.p.Hermite(uu, Eu, ju, Uu, Zu)
+         return wG.m.Hermite(GG, bG, ZG, SG, LG)
```

#### 19. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L136` → after: `L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L136) · [Before (L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L136)

```diff
-         return qu.e.Lerp(uu, Eu, ju)
+         return UG.c.Lerp(GG, bG, ZG)
```

#### 20. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L145` → after: `L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L145) · [Before (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L145)

```diff
-         return Uu.g.Lerp(uu, Eu, ju)
+         return SG.d.Lerp(GG, bG, ZG)
```

#### 21. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L148` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L148) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L148)

```diff
-         return Uu.g.Hermite(uu, Eu, ju, su, Zu)
+         return SG.d.Hermite(GG, bG, ZG, wG, LG)
```

#### 22. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L158` → after: `L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L158) · [Before (L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L158)

```diff
-         if (Eu.ZU === Mu.ANIMATIONLOOPMODE_CONSTANT && Eu.repeatCount > 0) return Eu.highLimitValue.clone ? Eu.highLimitValue.clone() : Eu.highLimitValue;
+         if (bG.Dw === zG.ANIMATIONLOOPMODE_CONSTANT && bG.repeatCount > 0) return bG.highLimitValue.clone ? bG.highLimitValue.clone() : bG.highLimitValue;
```

#### 23. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L175` → after: `L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR175) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L175) · [Before (L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L175)

```diff
-         if (1 === Zu.interpolation) return Xu.frame > uu ? lu : qu;
+         if (1 === LG.interpolation) return yG.frame > GG ? kG : UG;
```

#### 24. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L183` → after: `L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L183) · [Before (L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L183)

```diff
-             switch (Eu.ZU) {
+             switch (bG.Dw) {
```

#### 25. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L196` → after: `L196`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L196) · [Before (L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L196)

```diff
-             switch (Eu.ZU) {
+             switch (bG.Dw) {
```

#### 26. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L209` → after: `L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR209) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L209) · [Before (L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L209)

```diff
-             switch (Eu.ZU) {
+             switch (bG.Dw) {
```

#### 27. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L222` → after: `L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L222) · [Before (L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L222)

```diff
-             switch (Eu.ZU) {
+             switch (bG.Dw) {
```

#### 28. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L234` → after: `L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L234) · [Before (L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L234)

```diff
-             switch (Eu.ZU) {
+             switch (bG.Dw) {
```

#### 29. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L246` → after: `L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L246) · [Before (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L246)

```diff
-             switch (Eu.ZU) {
+             switch (bG.Dw) {
```

#### 30. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L259` → after: `L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L259) · [Before (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L259)

```diff
-             switch (Eu.ZU) {
+             switch (bG.Dw) {
```

#### 31. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L271` → after: `L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L271) · [Before (L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L271)

```diff
-             switch (Eu.ZU) {
+             switch (bG.Dw) {
```

#### 32. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L288` → after: `L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L288) · [Before (L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L288)

```diff
-         const Eu = new Mu(this.name, this.targetPropertyPath.join("."), this.framePerSecond, this.dataType, this.ZU);
+         const bG = new zG(this.name, this.targetPropertyPath.join("."), this.framePerSecond, this.dataType, this.Dw);
```

#### 33. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L327` → after: `L327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L327) · [Before (L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L327)

```diff
-         uu.name = this.name, uu.property = this.targetProperty, uu.framePerSecond = this.framePerSecond, uu.dataType = this.dataType, uu.loopBehavior = this.ZU, uu.enableBlending = this.enableBlending, uu.blendingSpeed = this.blendingSpeed;
+         GG.name = this.name, GG.property = this.targetProperty, GG.framePerSecond = this.framePerSecond, GG.dataType = this.dataType, GG.loopBehavior = this.Dw, GG.enableBlending = this.enableBlending, GG.blendingSpeed = this.blendingSpeed;
```

#### 34. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L343` → after: `L343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L343) · [Before (L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L343)

```diff
-               Zu.values = Uu.value.Osu(), void 0 != Uu.inTangent && Zu.values.push(Uu.inTangent.Osu()), void 0 != Uu.outTangent && (void 0 === Uu.inTangent && Zu.values.push(void 0), Zu.values.push(Uu.outTangent.Osu())), void 0 !== Uu.interpolation && (void 0 === Uu.inTangent &&  … [truncated]
+               LG.values = SG.value.mwG(), void 0 != SG.inTangent && LG.values.push(SG.inTangent.mwG()), void 0 != SG.outTangent && (void 0 === SG.inTangent && LG.values.push(void 0), LG.values.push(SG.outTangent.mwG())), void 0 !== SG.interpolation && (void 0 === SG.inTangent &&  … [truncated]
```

#### 35. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L347` → after: `L347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L347) · [Before (L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L347)

```diff
-         uu.HY = [];
+         GG.Bh = [];
```

#### 36. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L352` → after: `L352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L352) · [Before (L352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L352)

```diff
-           ju.name = su, ju.from = Eu.from, ju.to = Eu.to, uu.HY.push(ju)
+           ZG.name = wG, ZG.from = bG.from, ZG.to = bG.to, GG.Bh.push(ZG)
```

#### 37. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L358` → after: `L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L358) · [Before (L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L358)

```diff
-         return su.Lerp ? su.Lerp(uu, Eu, ju) : su.Slerp ? su.Slerp(uu, Eu, ju) : uu.toFixed ? uu * (1 - ju) + ju * Eu : Eu
+         return wG.Lerp ? wG.Lerp(GG, bG, ZG) : wG.Slerp ? wG.Slerp(GG, bG, ZG) : GG.toFixed ? GG * (1 - ZG) + ZG * bG : bG
```

#### 38. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L364` → after: `L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L364) · [Before (L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L364)

```diff
-       Uu = "object" === typeof Eu ? Eu : {
+       SG = "object" === typeof bG ? bG : {
```

#### 39. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L381-L386` → after: `L381-L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L381-L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L381-L386) · [Before (L381-L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L381-L386)

```diff
-           referencePosition: su.m.dO[0],
-           referenceQuaternion: su.m.Quaternion[0],
-           referenceScaling: su.m.dO[1],
-           keyPosition: su.m.dO[2],
-           keyQuaternion: su.m.Quaternion[1],
-           keyScaling: su.m.dO[3]
+           referencePosition: wG.j.mK[0],
+           referenceQuaternion: wG.j.Quaternion[0],
+           referenceScaling: wG.j.mK[1],
+           keyPosition: wG.j.mK[2],
+           keyQuaternion: wG.j.Quaternion[1],
+           keyScaling: wG.j.mK[3]
```

#### 40. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L425` → after: `L425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L425) · [Before (L425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L425)

```diff
-             uu.value.decompose(cu.keyScaling, cu.keyQuaternion, cu.keyPosition), cu.keyPosition.Qsu(cu.referencePosition), cu.keyScaling.divideInPlace(cu.referenceScaling), cu.referenceQuaternion.multiplyToRef(cu.keyQuaternion, cu.keyQuaternion), su.e.ComposeToRef(cu.keyScaling,  … [truncated]
+             GG.value.decompose(fG.keyScaling, fG.keyQuaternion, fG.keyPosition), fG.keyPosition.twG(fG.referencePosition), fG.keyScaling.divideInPlace(fG.referenceScaling), fG.referenceQuaternion.multiplyToRef(fG.keyQuaternion, fG.keyQuaternion), wG.e.ComposeToRef(fG.keyScaling,  … [truncated]
```

#### 41. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L453` → after: `L453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L453) · [Before (L453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L453)

```diff
-       return bu ? (Eu.hV && (Cu = Eu.hV()), Cu ? Cu.beginDirectAnimation(Eu, [bu], 0, Uu, bu.ZU !== Mu.ANIMATIONLOOPMODE_CONSTANT, 1, fu) : null) : null
+       return pG ? (bG.Dv && (VG = bG.Dv()), VG ? VG.beginDirectAnimation(bG, [pG], 0, SG, pG.Dw !== zG.ANIMATIONLOOPMODE_CONSTANT, 1, YG) : null) : null
```

#### 42. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L459` → after: `L459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L459) · [Before (L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L459)

```diff
-       return Eu.hV().beginDirectHierarchyAnimation(Eu, ju, [bu], 0, Zu, 1 === bu.ZU, 1, Cu)
+       return bG.Dv().beginDirectHierarchyAnimation(bG, ZG, [pG], 0, LG, 1 === pG.Dw, 1, VG)
```

#### 43. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L464` → after: `L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L464) · [Before (L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L464)

```diff
-       return Cu ? (Eu.animations.push(Cu), Eu.hV().beginAnimation(Eu, 0, Uu, 1 === Cu.ZU, 1, fu)) : null
+       return VG ? (bG.animations.push(VG), bG.Dv().beginAnimation(bG, 0, SG, 1 === VG.Dw, 1, YG)) : null
```

#### 44. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L484` → after: `L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L484) · [Before (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L484)

```diff
-       Cu.e.AppendSerializedAnimations(uu, Eu)
+       VG.b.AppendSerializedAnimations(GG, bG)
```

#### 45. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L500-L502` → after: `L500-L502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L500-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L500-L502) · [Before (L500-L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L500-L502)

```diff
-             if (Xu = su.i.FromArray(Eu.values), Eu.values.length >= 8) {
-               const uu = su.i.FromArray(Eu.values.slice(4, 8));
-               uu.equals(su.i.Zero()) || (qu = uu)
+             if (yG = wG.g.FromArray(bG.values), bG.values.length >= 8) {
+               const GG = wG.g.FromArray(bG.values.slice(4, 8));
+               GG.equals(wG.g.Zero()) || (UG = GG)
```

#### 46. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L505-L506` → after: `L505-L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L505-L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L505-L506) · [Before (L505-L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L505-L506)

```diff
-               const uu = su.i.FromArray(Eu.values.slice(8, 12));
-               uu.equals(su.i.Zero()) || (fu = uu)
+               const GG = wG.g.FromArray(bG.values.slice(8, 12));
+               GG.equals(wG.g.Zero()) || (YG = GG)
```

#### 47. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L517` → after: `L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L517) · [Before (L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L517)

```diff
-             Xu = Uu.g.FromArray(Eu.values), Eu.values[4] && (qu = Uu.g.FromArray(Eu.values[4])), Eu.values[5] && (fu = Uu.g.FromArray(Eu.values[5])), Eu.values[6] && (Cu = Eu.values[6]);
+             yG = SG.d.FromArray(bG.values), bG.values[4] && (UG = SG.d.FromArray(bG.values[4])), bG.values[5] && (YG = SG.d.FromArray(bG.values[5])), bG.values[6] && (VG = bG.values[6]);
```

#### 48. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L521` → after: `L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L521) · [Before (L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L521)

```diff
-             Xu = su.t.FromArray(Eu.values), Eu.values[3] && (qu = su.t.FromArray(Eu.values[3])), Eu.values[4] && (fu = su.t.FromArray(Eu.values[4])), Eu.values[5] && (Cu = Eu.values[5])
+             yG = wG.p.FromArray(bG.values), bG.values[3] && (UG = wG.p.FromArray(bG.values[3])), bG.values[4] && (YG = wG.p.FromArray(bG.values[4])), bG.values[5] && (VG = bG.values[5])
```

#### 49. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L526-L527` → after: `L526-L527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L526-L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L526-L527) · [Before (L526-L527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L526-L527)

```diff
-       if (Eu.setKeys(Zu), uu.HY)
-         for (lu = 0; lu < uu.HY.length; lu++) Xu = uu.HY[lu], Eu.createRange(Xu.name, Xu.from, Xu.to);
+       if (bG.setKeys(LG), GG.Bh)
+         for (kG = 0; kG < GG.Bh.length; kG++) yG = GG.Bh[kG], bG.createRange(yG.name, yG.from, yG.to);
```

#### 50. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L578` → after: `L578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L578) · [Before (L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L578)

```diff
-       vu || (vu = !0, Mu.Parse = Pu, Mu.ParseFromFileAsync = ou, Mu.ParseFromSnippetAsync = ku, Mu.CreateFromSnippetAsync = mu, Mu.CreateAnimation = Gu, Mu.CreateAndStartAnimation = pu, Mu.CreateAndStartHierarchyAnimation = wu, Mu.CreateMergeAndStartAnimation = Ju, Mu.MakeAnimati … [truncated]
+       aG || (aG = !0, zG.Parse = mG, zG.ParseFromFileAsync = IG, zG.ParseFromSnippetAsync = FG, zG.CreateFromSnippetAsync = vG, zG.CreateAnimation = oG, zG.CreateAndStartAnimation = XG, zG.CreateAndStartHierarchyAnimation = uG, zG.CreateMergeAndStartAnimation = iG, zG.MakeAnimati … [truncated]
```

#### 51. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L581` → after: `L581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L581) · [Before (L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L581)

```diff
-   41321: (uu, Eu, ju) => {
+   41493: (GG, bG, ZG) => {
```

#### 52. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L583` → after: `L583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L583) · [Before (L583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L583)

```diff
-       b: () => su
+       c: () => wG
```

#### 53. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L594` → after: `L594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L594) · [Before (L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L594)

```diff
-   41378: (uu, Eu, ju) => {
+   41552: (GG, bG, ZG) => {
```

#### 54. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L596-L597` → after: `L596-L597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L596-L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L596-L597) · [Before (L596-L597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L596-L597)

```diff
-       d: () => su.b,
-       e: () => su.j
+       b: () => wG.c,
+       c: () => wG.l
```

#### 55. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L599-L600` → after: `L599-L600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L599-L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L599-L600) · [Before (L599-L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L599-L600)

```diff
-     var su = ju(40399);
-     (0, su.d)()
+     var wG = ZG(40524);
+     (0, wG.g)()
```

#### 56. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L602` → after: `L602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L602) · [Before (L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L602)

```diff
-   41360: (uu, Eu, ju) => {
+   41527: (GG, bG, ZG) => {
```

#### 57. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L604` → after: `L604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L604) · [Before (L604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L604)

```diff
-       c: () => su.g
+       d: () => wG.d
```

#### 58. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L606-L607` → after: `L606-L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L606-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L606-L607) · [Before (L606-L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L606-L607)

```diff
-     var su = ju(40739);
-     (0, su.e)()
+     var wG = ZG(40857);
+     (0, wG.b)()
```

#### 59. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L609` → after: `L609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L609) · [Before (L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L609)

```diff
-   41335: (uu, Eu, ju) => {
+   41502: (GG, bG, ZG) => {
```

#### 60. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L611` → after: `L611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L611) · [Before (L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L611)

```diff
-       c: () => su.b
+       e: () => wG.e
```

#### 61. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L613-L614` → after: `L613-L614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L613-L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L613-L614) · [Before (L613-L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L613-L614)

```diff
-     var su = ju(40731);
-     (0, su.c)()
+     var wG = ZG(40844);
+     (0, wG.h)()
```

#### 62. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L616` → after: `L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L616) · [Before (L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L616)

```diff
-   41387: (uu, Eu, ju) => {
+   41560: (GG, bG, ZG) => {
```

#### 63. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L618` → after: `L618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L618) · [Before (L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L618)

```diff
-       d: () => su.e
+       d: () => wG.c
```

#### 64. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L620-L621` → after: `L620-L621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L620-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L620-L621) · [Before (L620-L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L620-L621)

```diff
-     var su = ju(40661);
-     (0, su.f)()
+     var wG = ZG(40784);
+     (0, wG.g)()
```

#### 65. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L623` → after: `L623`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L623) · [Before (L623)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L623)

```diff
-   41329: (uu, Eu, ju) => {
+   41498: (GG, bG, ZG) => {
```

#### 66. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L625` → after: `L625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L625) · [Before (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L625)

```diff
-       e: () => su.e
+       d: () => wG.d
```

#### 67. `bundles/bloxd.io/chunks/js/279.js` (Changed code · before: `L627-L628` → after: `L627-L628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37aeR627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-9fbab5469a37502661095c8805de74acd66d98f447a610ed10b228442a6a37ae) · [After (L627-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/279.js#L627-L628) · [Before (L627-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/279.js#L627-L628)

```diff
-     var su = ju(40706);
-     (0, su.d)()
+     var wG = ZG(40820);
+     (0, wG.b)()
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/280.js` (dz8ef.98c5e741 → wp3j0a.a13381cf)

- **File**: `bundles/bloxd.io/chunks/js/280.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db)

#### 1. `bundles/bloxd.io/chunks/js/280.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468dbR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-a2091ff5e6c9126971aede2ff76ac2a68362be0703890b8fe1b6995ebac468db) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/280.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/280.js#L4)

```diff
-   41410: uu => {
+   41581: GG => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/281.js` (dz8ef.98c5e741 → wp3j0a.a13381cf)

- **File**: `bundles/bloxd.io/chunks/js/281.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696)

#### 1. `bundles/bloxd.io/chunks/js/281.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-62204b015a51f5e04c224c9c9b3b8c32db87dd5860661840bebb94f5451c9696) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/281.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/281.js#L4)

```diff
-   41412: uu => {
+   41589: GG => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/282.js` (dz8ef.98c5e741 → wp3j0a.a13381cf)

- **File**: `bundles/bloxd.io/chunks/js/282.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8)

#### 1. `bundles/bloxd.io/chunks/js/282.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-faa42103e6c06b64997bde85cfadd3ea48a7c6c32637e9b4cf43867a115937b8) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/282.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/282.js#L4)

```diff
-   41415: uu => {
+   41597: GG => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/283.js` (dz8ef.98c5e741 → wp3j0a.a13381cf)

- **File**: `bundles/bloxd.io/chunks/js/283.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e)

#### 1. `bundles/bloxd.io/chunks/js/283.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-d63b0a2b6bd4681257f79b4ae2c30323858009b486a1055baddfd5abbb25f72e) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/283.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/283.js#L4)

```diff
-   41418: uu => {
+   41602: GG => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/284.js` (dz8ef.98c5e741 → wp3j0a.a13381cf)

- **File**: `bundles/bloxd.io/chunks/js/284.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887)

#### 1. `bundles/bloxd.io/chunks/js/284.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-a802d6e20fc97587e269315f22b980cea3bad8b52c3418914eae804bf2c94887) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/284.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/284.js#L4)

```diff
-   41421: uu => {
+   41611: GG => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/285.js` (dz8ef.98c5e741 → wp3j0a.a13381cf)

- **File**: `bundles/bloxd.io/chunks/js/285.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2)

#### 1. `bundles/bloxd.io/chunks/js/285.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-00643f429063cf1a93e9056dc7466fd8219d361ab3c13bb0760352f3bdff2ac2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/285.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/285.js#L4)

```diff
-   41424: uu => {
+   41614: GG => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/286.js` (dz8ef.98c5e741 → wp3j0a.a13381cf)

- **File**: `bundles/bloxd.io/chunks/js/286.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469)

#### 1. `bundles/bloxd.io/chunks/js/286.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-ffd7a3818e01c89a550c6fc217357115db6824091eb76d79e8c4f69ea16d0469) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/286.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/286.js#L4)

```diff
-   41433: uu => {
+   41621: GG => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/287.js` (dz8ef.98c5e741 → wp3j0a.a13381cf)

- **File**: `bundles/bloxd.io/chunks/js/287.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1)

#### 1. `bundles/bloxd.io/chunks/js/287.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-caf6d8e7496ebdd3014379e3ced412d884eb2993db6db7aec1a62e618e9c2fb1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/287.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/287.js#L4)

```diff
-   41438: uu => {
+   41625: GG => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/288.js` (dz8ef.98c5e741 → wp3j0a.a13381cf)

- **File**: `bundles/bloxd.io/chunks/js/288.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1)

#### 1. `bundles/bloxd.io/chunks/js/288.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-e881535e8a25a8376fa6e15f3b283d93c07016cf7c2ddf69a6868053e16d0ef1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/288.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/288.js#L4)

```diff
-   41443: uu => {
+   41627: GG => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/289.js` (dz8ef.98c5e741 → wp3j0a.a13381cf)

- **File**: `bundles/bloxd.io/chunks/js/289.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848)

#### 1. `bundles/bloxd.io/chunks/js/289.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-c8b5dd7bed3156c3e2f3738ccac0ab08204f76064d1916bae09213927275e848) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/289.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/289.js#L4)

```diff
-   41449: uu => {
+   41635: GG => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/290.js` (dz8ef.98c5e741 → wp3j0a.a13381cf)

- **File**: `bundles/bloxd.io/chunks/js/290.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b)

#### 1. `bundles/bloxd.io/chunks/js/290.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-5a8e3b5da95cabcf0b95f8659c221dea1f8e28b1db4d7f97b0d235f3f133ae3b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/290.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/290.js#L4)

```diff
-   41458: uu => {
+   41643: GG => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/291.js` (dz8ef.98c5e741 → wp3j0a.a13381cf)

- **File**: `bundles/bloxd.io/chunks/js/291.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4)

#### 1. `bundles/bloxd.io/chunks/js/291.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-b80f857b7e6d0fb1de595109c0d0b0637f908c8a3a19e15c6d4d6372c11dc9c4) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/291.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/291.js#L4)

```diff
-   41466: uu => {
+   41650: GG => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/292.js` (dz8ef.98c5e741 → wp3j0a.a13381cf)

- **File**: `bundles/bloxd.io/chunks/js/292.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76)

#### 1. `bundles/bloxd.io/chunks/js/292.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-271c977fae0bd0740d213dc2f7c683b68622f2bb6a8420f51d620bc67662ae76) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/292.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/292.js#L4)

```diff
-   41471: uu => {
+   41655: GG => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/293.js` (dz8ef.98c5e741 → wp3j0a.a13381cf)

- **File**: `bundles/bloxd.io/chunks/js/293.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663)

#### 1. `bundles/bloxd.io/chunks/js/293.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-b6d9993382b0be87aec4eeae2340495b2250028ee5b88a0a5e89d893719e2663) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/293.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/293.js#L4)

```diff
-   41477: uu => {
+   41662: GG => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/294.js` (dz8ef.98c5e741 → wp3j0a.a13381cf)

- **File**: `bundles/bloxd.io/chunks/js/294.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b)

#### 1. `bundles/bloxd.io/chunks/js/294.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-79e094299a1128ead5ddf0a9cced07c05cc045d69301c1307fc44cfc3d9c090b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/294.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/294.js#L4)

```diff
-   41485: uu => {
+   41669: GG => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/295.js` (dz8ef.98c5e741 → wp3j0a.a13381cf)

- **File**: `bundles/bloxd.io/chunks/js/295.js` (1 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617)

#### 1. `bundles/bloxd.io/chunks/js/295.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-50b1537f921d88f9387ff3ebef55c551c3f6e0805eb07efd3ba65a0bc6593617) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/295.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/295.js#L4)

```diff
-   41491: uu => {
+   41678: GG => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/296.js` (dz8ef.98c5e741 → wp3j0a.a13381cf)

- **File**: `bundles/bloxd.io/chunks/js/296.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486)

#### 1. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/296.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/296.js#L4)

```diff
-   41520: (uu, Eu, ju) => {
+   41710: (GG, bG, ZG) => {
```

#### 2. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L8-L14` → after: `L8-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/296.js#L8-L14) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/296.js#L8-L14)

```diff
-     var su = ju(58),
-       Uu = ju(2876),
-       Zu = ju(1298),
-       Xu = ju(2690),
-       lu = ju(34583),
-       qu = ju(3834),
-       fu = ju(1154);
+     var wG = ZG(51),
+       SG = ZG(2732),
+       LG = ZG(1198),
+       yG = ZG(2537),
+       kG = ZG(34515),
+       UG = ZG(3625),
+       YG = ZG(1067);
```

#### 3. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L23` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/296.js#L23) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/296.js#L23)

```diff
-           Vl: Yu,
+           Ak: hG,
```

#### 4. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L49` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/296.js#L49) · [Before (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/296.js#L49)

```diff
-               const ju = Promise.all(Zu.u.map((Eu => uu.untilDrawn(Eu)))).catch((uu => {
+               const ZG = Promise.all(LG.x.map((bG => GG.untilDrawn(bG)))).catch((GG => {
```

#### 5. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L69` → after: `L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R69) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/296.js#L69) · [Before (L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/296.js#L69)

```diff
-               for (const su of Zu.u) {
+               for (const wG of LG.x) {
```

#### 6. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/296.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/296.js#L71)

```diff
-                 uu(su, null !== (ju = Eu[su]) && void 0 !== ju ? ju : (0, Xu.b)(su))
+                 GG(wG, null !== (ZG = bG[wG]) && void 0 !== ZG ? ZG : (0, yG.d)(wG))
```

#### 7. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L97` → after: `L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/296.js#L97) · [Before (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/296.js#L97)

```diff
-             Eu = lu.k.openCharacter(gu.current, Nu);
+             bG = kG.d.openCharacter(rG.current, QG);
```

#### 8. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L112` → after: `L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/296.js#L112) · [Before (L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/296.js#L112)

```diff
-           for (const Eu of Zu.u) {
+           for (const bG of LG.x) {
```

#### 9. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L121` → after: `L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/296.js#L121) · [Before (L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/296.js#L121)

```diff
-           Ju && Gu.current.playEmote(null !== Yu && void 0 !== Yu ? Yu : null)
+           iG && oG.current.playEmote(null !== hG && void 0 !== hG ? hG : null)
```

#### 10. `bundles/bloxd.io/chunks/js/296.js` (Changed code · before: `L128` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486R128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-45ae3962ac3016c8103592b8e498f4abdf21b9b08fe7c32a00e2bcb372865486) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/296.js#L128) · [Before (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/296.js#L128)

```diff
-             } = lu.e[Nu];
+             } = kG.b[QG];
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/297.js` (dz8ef.98c5e741 → wp3j0a.a13381cf)

- **File**: `bundles/bloxd.io/chunks/js/297.js` (107 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3)

#### 1. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/297.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/297.js#L4)

```diff
-   41533: (uu, Eu, ju) => {
+   41715: (GG, bG, ZG) => {
```

#### 2. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L8-L19` → after: `L8-L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L8-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/297.js#L8-L19) · [Before (L8-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/297.js#L8-L19)

```diff
-     var su = ju(41541),
-       Uu = ju(41592),
-       Zu = ju(41596),
-       Xu = ju(58),
-       lu = ju(65),
-       qu = ju(41609),
-       fu = ju(41617),
-       Cu = ju(4942),
-       bu = ju(41619),
-       cu = ju(1964),
-       Nu = ju(41627),
-       Ou = ju(41649),
+     var wG = ZG(41721),
+       SG = ZG(41775),
+       LG = ZG(41777),
+       yG = ZG(51),
+       kG = ZG(59),
+       UG = ZG(41793),
+       YG = ZG(41795),
+       VG = ZG(4779),
+       pG = ZG(41801),
+       fG = ZG(1876),
+       QG = ZG(41805),
+       KG = ZG(41820),
```

#### 3. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L21-L37` → after: `L21-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L21-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/297.js#L21-L37) · [Before (L21-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/297.js#L21-L37)

```diff
-       hu = ju(41598),
-       Du = ju(41606),
-       gu = ju(1393),
-       Mu = ju(37248),
-       eu = ju(1298),
-       Gu = ju(2541),
-       pu = ju(37139),
-       wu = ju(1499),
-       Ju = ju(649),
-       du = ju(1301),
-       au = ju(41720),
-       Pu = ju(41550),
-       ou = ju(41553),
-       ku = ju(1986),
-       mu = ju(3946),
-       vu = ju(24),
- ... (1 more removed lines; see GitHub link above)
+       dG = ZG(41784),
+       JG = ZG(41787),
+       rG = ZG(1302),
+       zG = ZG(37197),
+       EG = ZG(1198),
+       oG = ZG(2404),
+       XG = ZG(37097),
+       uG = ZG(1389),
+       iG = ZG(604),
+       CG = ZG(1202),
+       WG = ZG(41869),
+       mG = ZG(41727),
+       IG = ZG(41735),
+       FG = ZG(1895),
+       vG = ZG(3766),
+       aG = ZG(19),
+ ... (1 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L41` → after: `L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/297.js#L41) · [Before (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/297.js#L41)

```diff
-     var iu = ju(41571);
+     var MG = ZG(41754);
```

#### 5. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L45-L48` → after: `L45-L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L45-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/297.js#L45-L48) · [Before (L45-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/297.js#L45-L48)

```diff
-       Fu = Pu.L.define(),
-       Bu = Pu.L.define(),
-       Lu = Pu.L.define();
-     class tu extends ou.r {
+       nG = mG.C.define(),
+       gG = mG.C.define(),
+       eG = mG.C.define();
+     class RG extends IG.n {
```

#### 6. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L80` → after: `L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/297.js#L80) · [Before (L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/297.js#L80)

```diff
-             decoration: ou.e.widget({
+             decoration: IG.c.widget({
```

#### 7. `bundles/bloxd.io/chunks/js/297.js` (Changed code · before: `L90` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/2e8053c91f85a464a2eede25b50a08de4533ffbc...build/bloxd.io/wp3j0a.a13381cf#diff-d08d5796a41d67a200b71ba909a28b419d1cff443465172c429eb85ca3dc6ee3) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/wp3j0a.a13381cf/bundles/bloxd.io/chunks/js/297.js#L90) · [Before (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/2e8053c91f85a464a2eede25b50a08de4533ffbc/bundles/bloxd.io/chunks/js/297.js#L90)

```diff
-             decoration: ou.e.mark({
+             decoration: IG.c.mark({
```
