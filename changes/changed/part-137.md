# Changed — Bundle Modifications Report (Part 137 / 140)

- **Updated at**: `2026-11-24T17:23 JST`
- **Part**: `137 / 140` (**409** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 136](part-136.md) · [Part 138 →](part-138.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/worldgenWorker.js` (mpd96o.85ad4551 → tz47m9.2cb7e113 · continued)

- **File**: `bundles/bloxd.io/chunks/js/worldgenWorker.js` (1178 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032)

#### 719. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6764-L6767` → after: `L6764-L6767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6764-L6767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6764-L6767) · [Before (L6764-L6767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6764-L6767)

```diff
-             const fm = mm * this.MO,
-               hm = Tm * this.MO,
-               Am = new wm.k(`${mm}|${Tm}|${this.seed}`);
-             return [fm + Math.floor(Am.next() * this.MO), hm + Math.floor(Am.next() * this.MO)]
+             const wD = DD * this.CI,
+               pD = zD * this.CI,
+               sD = new LD.g(`${DD}|${zD}|${this.seed}`);
+             return [wD + Math.floor(sD.next() * this.CI), pD + Math.floor(sD.next() * this.CI)]
```

#### 720. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6770-L6771` → after: `L6770-L6771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6770-L6771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6770-L6771) · [Before (L6770-L6771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6770-L6771)

```diff
-         var im = fm(39830),
-           Rm = fm(39875);
+         var gD = wD(39657),
+           RD = wD(39698);
```

#### 721. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6774` → after: `L6774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6774) · [Before (L6774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6774)

```diff
-             this.numCaveTypes = mm, this.caveTypeToBlockIds = Tm, this.caveTypePrioritization = fm, this.MO = hm
+             this.numCaveTypes = DD, this.caveTypeToBlockIds = zD, this.caveTypePrioritization = wD, this.CI = pD
```

#### 722. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6785` → after: `L6785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6785) · [Before (L6785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6785)

```diff
-             return new om(this.numCaveTypes, this.caveTypeToBlockIds, this.caveTypePrioritization, this.MO, this.data.viewJustInnerChunk())
+             return new fD(this.numCaveTypes, this.caveTypeToBlockIds, this.caveTypePrioritization, this.CI, this.data.viewJustInnerChunk())
```

#### 723. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6809` → after: `L6809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6809) · [Before (L6809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6809)

```diff
-             this.MO = Tm, this.caveMetadataForChunkCache = void 0, this.caveMetadataForChunkCache = new Im(mm, Tm, fm, hm)
+             this.CI = zD, this.caveMetadataForChunkCache = void 0, this.caveMetadataForChunkCache = new MD(DD, zD, wD, pD)
```

#### 724. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6820-L6823` → after: `L6820-L6823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6820-L6823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6820-L6823) · [Before (L6820-L6823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6820-L6823)

```diff
-             const im = new wm.k(`caveBlocks${Tm}|${fm}|${hm}`);
-             for (let wm = Tm; wm < Tm + Dm.MO; wm++)
-               for (let Rm = hm; Rm < hm + Dm.MO; Rm++) {
-                 const pm = Am.get(wm, Rm, am.g.GroundHeight);
+             const gD = new LD.g(`caveBlocks${zD}|${wD}|${pD}`);
+             for (let LD = zD; LD < zD + cD.CI; LD++)
+               for (let RD = pD; RD < pD + cD.CI; RD++) {
+                 const AD = sD.get(LD, RD, KD.h.GroundHeight);
```

#### 725. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6826` → after: `L6826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6826) · [Before (L6826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6826)

```diff
-                   if (Em === xm.o) continue;
+                   if (UD === rD.m) continue;
```

#### 726. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6828` → after: `L6828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6828) · [Before (L6828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6828)

```diff
-                     Om = Math.min(om + 1, fm + Dm.MO, pm + 1),
+                     ID = Math.min(fD + 1, wD + cD.CI, AD + 1),
```

#### 727. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6831` → after: `L6831`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6831) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6831) · [Before (L6831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6831)

```diff
-                     const am = "number" === typeof Ym ? Ym : Ym.sample(im);
+                     const KD = "number" === typeof BD ? BD : BD.sample(gD);
```

#### 728. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6839` → after: `L6839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6839) · [Before (L6839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6839)

```diff
-               xm = new qm(this.caveMetadataForChunkCache, fm, this.MO),
+               rD = new GD(this.caveMetadataForChunkCache, wD, this.CI),
```

#### 729. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6843-L6844` → after: `L6843-L6844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6843-L6844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6843-L6844) · [Before (L6843-L6844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6843-L6844)

```diff
-               Rm = hm.b.create(this.MO, Am, wm, am.d.NumFields, xm);
-             return new Em(wm, Dm, im, this.MO, Rm)
+               RD = pD.e.create(this.CI, sD, LD, KD.d.NumFields, rD);
+             return new UD(LD, cD, gD, this.CI, RD)
```

#### 730. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6849` → after: `L6849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6849) · [Before (L6849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6849)

```diff
-             if (this.caveMetadataForChunkCache = mm, this.heightmapVals = Tm, this.caveGeneratorsPerChunk = [], fm !== Am.x) throw new Error(`Cave generation is not supported for chunk sizes other than ${Am.x}`)
+             if (this.caveMetadataForChunkCache = DD, this.heightmapVals = zD, this.caveGeneratorsPerChunk = [], wD !== sD.r) throw new Error(`Cave generation is not supported for chunk sizes other than ${sD.r}`)
```

#### 731. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6852-L6853` → after: `L6852-L6853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6852-L6853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6852-L6853) · [Before (L6852-L6853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6852-L6853)

```diff
-             const hm = (0, Am.M)(mm),
-               am = (0, Am.M)(Tm);
+             const pD = (0, sD.L)(DD),
+               KD = (0, sD.L)(zD);
```

#### 732. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6868` → after: `L6868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6868) · [Before (L6868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6868)

```diff
-             for (let hm = 0; hm < this.numCaveTypes; hm++) fm.set(mm, Tm, hm, am.d.FloorY, xm.o), fm.set(mm, Tm, hm, am.d.CeilingY, xm.o)
+             for (let pD = 0; pD < this.numCaveTypes; pD++) wD.set(DD, zD, pD, KD.d.FloorY, rD.m), wD.set(DD, zD, pD, KD.d.CeilingY, rD.m)
```

#### 733. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6888` → after: `L6888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6888) · [Before (L6888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6888)

```diff
-               om + 1 === this.heightmapVals.getOrGenerate(mm, Tm, am.g.GroundHeight) && om++, fm.set(mm, Tm, hm.caveType, am.d.FloorY, Em), fm.set(mm, Tm, hm.caveType, am.d.CeilingY, om)
+               fD + 1 === this.heightmapVals.getOrGenerate(DD, zD, KD.h.GroundHeight) && fD++, wD.set(DD, zD, pD.caveType, KD.d.FloorY, UD), wD.set(DD, zD, pD.caveType, KD.d.CeilingY, fD)
```

#### 734. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6914` → after: `L6914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6914) · [Before (L6914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6914)

```diff
-               Om = Math.floor(Om), Ym = Math.floor(Ym), (pm || Ym + 1 === this.heightmapVals.getOrGenerate(mm, Tm, am.g.GroundHeight)) && Ym++;
+               ID = Math.floor(ID), BD = Math.floor(BD), (AD || BD + 1 === this.heightmapVals.getOrGenerate(DD, zD, KD.h.GroundHeight)) && BD++;
```

#### 735. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6930` → after: `L6930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6930) · [Before (L6930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6930)

```diff
-                 om = (0, hm.I)(xm, pm, Em);
+                 fD = (0, pD.J)(rD, AD, UD);
```

#### 736. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6935` → after: `L6935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6935) · [Before (L6935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6935)

```diff
-                 jm = (0, hm.t)(Om, Ym, qm),
+                 hD = (0, pD.w)(ID, BD, GD),
```

#### 737. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6947` → after: `L6947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6947) · [Before (L6947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6947)

```diff
-               Km = Math.floor(Km), Qm = Math.floor(Qm), Qm + 1 === this.heightmapVals.getOrGenerate(mm, Tm, am.g.GroundHeight) && Qm++, fm.set(mm, Tm, Am.caveType, am.d.FloorY, Km), fm.set(mm, Tm, Am.caveType, am.d.CeilingY, Qm)
+               OD = Math.floor(OD), JD = Math.floor(JD), JD + 1 === this.heightmapVals.getOrGenerate(DD, zD, KD.h.GroundHeight) && JD++, wD.set(DD, zD, sD.caveType, KD.d.FloorY, OD), wD.set(DD, zD, sD.caveType, KD.d.CeilingY, JD)
```

#### 738. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6964` → after: `L6964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6964) · [Before (L6964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6964)

```diff
-               Om + 1 === this.heightmapVals.getOrGenerate(mm, Tm, am.g.GroundHeight) && Om++, fm.set(mm, Tm, hm.caveType, am.d.FloorY, om), fm.set(mm, Tm, hm.caveType, am.d.CeilingY, Om)
+               ID + 1 === this.heightmapVals.getOrGenerate(DD, zD, KD.h.GroundHeight) && ID++, wD.set(DD, zD, pD.caveType, KD.d.FloorY, fD), wD.set(DD, zD, pD.caveType, KD.d.CeilingY, ID)
```

#### 739. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6968` → after: `L6968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6968) · [Before (L6968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6968)

```diff
-             const hm = this.heightmapVals.getOrGenerate(mm, Tm, am.g.CavesAllowedBelowY);
+             const pD = this.heightmapVals.getOrGenerate(DD, zD, KD.h.CavesAllowedBelowY);
```

#### 740. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6972` → after: `L6972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6972) · [Before (L6972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6972)

```diff
-                 fm.get(mm, Tm, Am, am.d.FloorY) <= hm ? fm.set(mm, Tm, Am, am.d.CeilingY, hm) : (fm.set(mm, Tm, Am, am.d.FloorY, xm.o), fm.set(mm, Tm, Am, am.d.CeilingY, xm.o))
+                 wD.get(DD, zD, sD, KD.d.FloorY) <= pD ? wD.set(DD, zD, sD, KD.d.CeilingY, pD) : (wD.set(DD, zD, sD, KD.d.FloorY, rD.m), wD.set(DD, zD, sD, KD.d.CeilingY, rD.m))
```

#### 741. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L6977` → after: `L6977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R6977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L6977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6977) · [Before (L6977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L6977)

```diff
-         const Vm = new Rm.b("cave chunk metadata", 100, 6e4);
+         const nD = new RD.e("cave chunk metadata", 100, 6e4);
```

#### 742. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7125-L7126` → after: `L7125-L7126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7125-L7126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7125-L7126) · [Before (L7125-L7126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7125-L7126)

```diff
-                     caveEdgeNoiseGenerator: new hm.j(fm.caveEdgeNoiseParams, `${mm}CaveCutoff${xm}${Am}`),
-                     caveHeightNoiseGenerator: new hm.k(fm.caveHeightNoiseParams, fm.caveHeightNoiseThresholdParams, `${mm}Cave${xm}${Am}`),
+                     caveEdgeNoiseGenerator: new pD.j(wD.caveEdgeNoiseParams, `${DD}CaveCutoff${rD}${sD}`),
+                     caveHeightNoiseGenerator: new pD.m(wD.caveHeightNoiseParams, wD.caveHeightNoiseThresholdParams, `${DD}Cave${rD}${sD}`),
```

#### 743. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7130-L7131` → after: `L7130-L7131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7130-L7131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7130-L7131) · [Before (L7130-L7131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7130-L7131)

```diff
-                     caveXZPerturbNoiseGenerator: new hm.j(fm.caveXZPerturbNoiseParams, `${mm}CaveHeightPerturb${xm}${Am}`),
-                     caveYPerturbNoiseGenerator: new hm.j(fm.caveYPerturbNoiseParams, `${mm}CaveHeightNoise${xm}${Am}`),
+                     caveXZPerturbNoiseGenerator: new pD.j(wD.caveXZPerturbNoiseParams, `${DD}CaveHeightPerturb${rD}${sD}`),
+                     caveYPerturbNoiseGenerator: new pD.j(wD.caveYPerturbNoiseParams, `${DD}CaveHeightNoise${rD}${sD}`),
```

#### 744. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7226-L7227` → after: `L7226-L7227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7226-L7227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7226-L7227) · [Before (L7226-L7227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7226-L7227)

```diff
-                     fillBlockId: (0, Am.B)(am, fm),
-                     wallBlockIds: new wm.i([{
+                     fillBlockId: (0, sD.w)(KD, wD),
+                     wallBlockIds: new LD.e([{
```

#### 745. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7250-L7252` → after: `L7250-L7252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7250-L7252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7250-L7252) · [Before (L7250-L7252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7250-L7252)

```diff
-                       Em = new hm.j(Am.pitXZPerturbNoiseParams, `${mm}DistPitPerturb${am}`),
-                       Om = `${mm}PitGen${am}`,
-                       Ym = new im.d("cavePit", Am.numChunksBetweenPits, !0, !1, Om, 100, Tm),
+                       UD = new pD.j(sD.pitXZPerturbNoiseParams, `${DD}DistPitPerturb${KD}`),
+                       ID = `${DD}PitGen${KD}`,
+                       BD = new gD.c("cavePit", sD.numChunksBetweenPits, !0, !1, ID, 100, zD),
```

#### 746. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7254-L7258` → after: `L7254-L7258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7254-L7258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7254-L7258) · [Before (L7254-L7258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7254-L7258)

```diff
-                     console.assert(qm.chunkSearchRadius <= Am.numChunksBetweenPits / 2, `Cannot have overlapping cave features (pits), ${qm.chunkSearchRadius} ${Am.numChunksBetweenPits/2}`);
-                     const jm = new wm.m(Am.pitMinWidth, Am.pitMaxWidth),
-                       Vm = new wm.m(Am.pitMinFloorY, Am.pitMaxFloorY),
-                       Im = new wm.m(Am.pitMinHeight, Am.pitMaxHeight),
-                       Km = new hm.j(Am.pitFloorYPerturbNoiseParams, `${mm}yPitPerturb${am}`);
+                     console.assert(GD.chunkSearchRadius <= sD.numChunksBetweenPits / 2, `Cannot have overlapping cave features (pits), ${GD.chunkSearchRadius} ${sD.numChunksBetweenPits/2}`);
+                     const hD = new LD.k(sD.pitMinWidth, sD.pitMaxWidth),
+                       nD = new LD.k(sD.pitMinFloorY, sD.pitMaxFloorY),
+                       MD = new LD.k(sD.pitMinHeight, sD.pitMaxHeight),
+                       OD = new pD.j(sD.pitFloorYPerturbNoiseParams, `${DD}yPitPerturb${KD}`);
```

#### 747. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7260-L7261` → after: `L7260-L7261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7260-L7261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7260-L7261) · [Before (L7260-L7261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7260-L7261)

```diff
-                     null !== Am.pitHeightPerturbNoiseParams && (Qm = new hm.j(Am.pitHeightPerturbNoiseParams, `${mm}heightPitPerturb${am}`));
-                     const nm = new hm.j(Am.pitMidpointNoiseParams, `${mm}edgesPitPerturb${am}`),
+                     null !== sD.pitHeightPerturbNoiseParams && (JD = new pD.j(sD.pitHeightPerturbNoiseParams, `${DD}heightPitPerturb${KD}`));
+                     const ED = new pD.j(sD.pitMidpointNoiseParams, `${DD}edgesPitPerturb${KD}`),
```

#### 748. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7268` → after: `L7268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7268) · [Before (L7268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7268)

```diff
-                     null !== Am.ceilingParams && (zm = xm++, Zm = new wm.m(Am.ceilingParams.minThickness, Am.ceilingParams.maxThickness), Rm[zm] = Am.ceilingParams.blockIds), void 0 !== Am.priority && (pm[Jm] = Am.priority, null !== cm && (pm[cm] = Am.priority), null !== zm && (p … [truncated]
+                     null !== sD.ceilingParams && (VD = rD++, PD = new LD.k(sD.ceilingParams.minThickness, sD.ceilingParams.maxThickness), RD[VD] = sD.ceilingParams.blockIds), void 0 !== sD.priority && (AD[QD] = sD.priority, null !== XD && (AD[XD] = sD.priority), null !== VD && (A … [truncated]
```

#### 749. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7331` → after: `L7331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7331) · [Before (L7331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7331)

```diff
-                     pm = new hm.j(Rm.ravineXZPerturbNoiseParams, `${mm}DistRavPerturb${xm}`);
+                     AD = new pD.j(RD.ravineXZPerturbNoiseParams, `${DD}DistRavPerturb${rD}`);
```

#### 750. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7334-L7336` → after: `L7334-L7336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7334-L7336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7334-L7336) · [Before (L7334-L7336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7334-L7336)

```diff
-                   const om = new hm.j(Rm.ravineYPerturbNoiseParams, `${mm}yRavinePerturb${xm}`),
-                     Om = `${mm}RavineGen${xm}`,
-                     Ym = new im.d("caveRav", Rm.numChunksBetweenRavines, !0, !1, Om, 100, Tm),
+                   const fD = new pD.j(RD.ravineYPerturbNoiseParams, `${DD}yRavinePerturb${rD}`),
+                     ID = `${DD}RavineGen${rD}`,
+                     BD = new gD.c("caveRav", RD.numChunksBetweenRavines, !0, !1, ID, 100, zD),
```

#### 751. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7338-L7343` → after: `L7338-L7343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7338-L7343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7338-L7343) · [Before (L7338-L7343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7338-L7343)

```diff
-                   console.assert(qm.chunkSearchRadius <= Rm.numChunksBetweenRavines / 2, `Cannot have overlapping cave features (ravines), ${qm.chunkSearchRadius} ${Rm.numChunksBetweenRavines/2}`);
-                   const jm = new wm.m(Rm.ravineMinWidth, Rm.ravineMaxWidth),
-                     Vm = new wm.m(Rm.ravineMinLength, Rm.ravineMaxLength),
-                     Im = new wm.m(Rm.ravineMinFloorY, Rm.ravineMaxFloorY, !0),
-                     Km = new wm.m(Rm.ravineMinHeight, Rm.ravineMaxHeight),
-                     Qm = new wm.n(-1, 1);
+                   console.assert(GD.chunkSearchRadius <= RD.numChunksBetweenRavines / 2, `Cannot have overlapping cave features (ravines), ${GD.chunkSearchRadius} ${RD.numChunksBetweenRavines/2}`);
+                   const hD = new LD.k(RD.ravineMinWidth, RD.ravineMaxWidth),
+                     nD = new LD.k(RD.ravineMinLength, RD.ravineMaxLength),
+                     MD = new LD.k(RD.ravineMinFloorY, RD.ravineMaxFloorY, !0),
+                     OD = new LD.k(RD.ravineMinHeight, RD.ravineMaxHeight),
+                     JD = new LD.l(-1, 1);
```

#### 752. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7385` → after: `L7385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7385) · [Before (L7385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7385)

```diff
-                     pm = new hm.j(Rm.sphereXZPerturbNoiseParams, `${mm}DistSpherePerturb${xm}`);
+                     AD = new pD.j(RD.sphereXZPerturbNoiseParams, `${DD}DistSpherePerturb${rD}`);
```

#### 753. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7388-L7389` → after: `L7388-L7389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7388-L7389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7388-L7389) · [Before (L7388-L7389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7388-L7389)

```diff
-                   const om = `${mm}SphereGen${xm}`,
-                     Om = new im.d("caveSph", Rm.numChunksBetweenSpheres, !0, !1, om, 100, Tm),
+                   const fD = `${DD}SphereGen${rD}`,
+                     ID = new gD.c("caveSph", RD.numChunksBetweenSpheres, !0, !1, fD, 100, zD),
```

#### 754. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7391-L7393` → after: `L7391-L7393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7391-L7393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7391-L7393) · [Before (L7391-L7393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7391-L7393)

```diff
-                   console.assert(Ym.chunkSearchRadius <= Rm.numChunksBetweenSpheres / 2, `Cannot have overlapping cave features (spheres), ${Ym.chunkSearchRadius} ${Rm.numChunksBetweenSpheres/2}`);
-                   const qm = new wm.m(Rm.sphereMinRadius, Rm.sphereMaxRadius, !0),
-                     jm = new wm.m(Rm.sphereMinCentreY, Rm.sphereMaxCentreY);
+                   console.assert(BD.chunkSearchRadius <= RD.numChunksBetweenSpheres / 2, `Cannot have overlapping cave features (spheres), ${BD.chunkSearchRadius} ${RD.numChunksBetweenSpheres/2}`);
+                   const GD = new LD.k(RD.sphereMinRadius, RD.sphereMaxRadius, !0),
+                     hD = new LD.k(RD.sphereMinCentreY, RD.sphereMaxCentreY);
```

#### 755. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7427-L7428` → after: `L7427-L7428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7427-L7428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7427-L7428) · [Before (L7427-L7428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7427-L7428)

```diff
-             if (!(0, Am.H)(fm)) return fm;
-             const hm = [(0, Am.v)(mm), (0, Am.v)(Tm)],
+             if (!(0, sD.B)(wD)) return wD;
+             const pD = [(0, sD.q)(DD), (0, sD.q)(zD)],
```

#### 756. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7446` → after: `L7446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7446) · [Before (L7446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7446)

```diff
-                   im = new wm.k(`pit${xm}|${Dm}|${Am}${this.seed}`),
+                   gD = new LD.g(`pit${rD}|${cD}|${sD}${this.seed}`),
```

#### 757. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7456` → after: `L7456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7456) · [Before (L7456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7456)

```diff
-                   Im = null !== (fm = null === (hm = am.pitCeilingThicknessDistribution) || void 0 === hm ? void 0 : hm.sample(im)) && void 0 !== fm ? fm : 0;
+                   MD = null !== (wD = null === (pD = KD.pitCeilingThicknessDistribution) || void 0 === pD ? void 0 : pD.sample(gD)) && void 0 !== wD ? wD : 0;
```

#### 758. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7489` → after: `L7489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7489) · [Before (L7489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7489)

```diff
-                   Dm = new wm.k(`rav${am}|${xm}|${fm}${this.seed}`),
+                   cD = new LD.g(`rav${KD}|${rD}|${wD}${this.seed}`),
```

#### 759. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7495` → after: `L7495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7495) · [Before (L7495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7495)

```diff
-                 (0, hm.H)(om);
+                 (0, pD.G)(fD);
```

#### 760. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7526` → after: `L7526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7526) · [Before (L7526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7526)

```diff
-                   xm = new wm.k(`sph${Am}|${am}|${fm}${this.seed}`),
+                   rD = new LD.g(`sph${sD}|${KD}|${wD}${this.seed}`),
```

#### 761. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7546` → after: `L7546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7546) · [Before (L7546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7546)

```diff
-       39817: (mm, Tm, fm) => {
+       39641: (DD, zD, wD) => {
```

#### 762. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7548` → after: `L7548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7548) · [Before (L7548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7548)

```diff
-           e: () => qm
+           b: () => GD
```

#### 763. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7550-L7552` → after: `L7550-L7552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7550-L7552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7550-L7552) · [Before (L7550-L7552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7550-L7552)

```diff
-         var hm = fm(39812),
-           Am = fm(39802),
-           am = fm(1649),
+         var pD = wD(39635),
+           sD = wD(39625),
+           KD = wD(1661),
```

#### 764. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7554` → after: `L7554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7554) · [Before (L7554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7554)

```diff
-           wm = fm(653),
+           LD = wD(619),
```

#### 765. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7557-L7560` → after: `L7557-L7560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7557-L7560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7557-L7560) · [Before (L7557-L7560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7557-L7560)

```diff
-           Rm = fm(37783),
-           pm = fm(39821),
-           Em = fm(39269),
-           om = fm(39823);
+           RD = wD(37713),
+           AD = wD(39647),
+           UD = wD(39104),
+           fD = wD(39650);
```

#### 766. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7563` → after: `L7563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7563) · [Before (L7563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7563)

```diff
-           const hm = new Em.c;
+           const pD = new UD.d;
```

#### 767. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7566` → after: `L7566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7566) · [Before (L7566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7566)

```diff
-             if (!(0, wm.H)(mm)) throw new Error(`Duplicate chunk at ${Am.chunkX}, ${Am.chunkY}, ${Am.chunkZ}`);
+             if (!(0, LD.B)(DD)) throw new Error(`Duplicate chunk at ${sD.chunkX}, ${sD.chunkY}, ${sD.chunkZ}`);
```

#### 768. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7569` → after: `L7569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7569) · [Before (L7569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7569)

```diff
-           return new pm.b(mm, {
+           return new AD.e(DD, {
```

#### 769. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7584` → after: `L7584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7584) · [Before (L7584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7584)

```diff
-             rle: (0, om.c)("EAABgQEHHAGBARcAAR8HAAEf1wcAAYEBBxwBgQEXAAGBAQIcASIDHAEiAYEBFwABHwcAAR+1BwADgQEHHAOBARMAA4EBBxwDgQETAAGIAQKBAQEcAiICHAIiA4EBEwABiAECgQEHAAOBARMAA4EBBwADgQETAAMfBwADHxMAAxwHAAMcEwADHAcAAxwTAAMdBwABHAIdFQABHQcAAh3KBQANgQEHHAiBAQQAAYgBAR0BiAEKgQEHHAiBAQQA … [truncated]
+             rle: (0, fD.b)("EAABgQEHHAGBARcAAR8HAAEf1wcAAYEBBxwBgQEXAAGBAQIcASIDHAEiAYEBFwABHwcAAR+1BwADgQEHHAOBARMAA4EBBxwDgQETAAGIAQKBAQEcAiICHAIiA4EBEwABiAECgQEHAAOBARMAA4EBBwADgQETAAMfBwADHxMAAxwHAAMcEwADHAcAAxwTAAMdBwABHAIdFQABHQcAAh3KBQANgQEHHAiBAQQAAYgBAR0BiAEKgQEHHAiBAQQA … [truncated]
```

#### 770. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7589` → after: `L7589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7589) · [Before (L7589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7589)

```diff
-             rle: (0, om.c)("gBgABIEBAYgBGwAEgQEBHRsABIEBAYgBGwABiAEEgQEcAAEdAx/7BgAEAgKBARoABAIBgQEBiAEaAAQCAoEBGgAEBAKBARwAApYBAh/6BgAFAgGBARoABQIBgQEaAAUCAYEBGgAFBAGBAR0AAZYBAQABH/oGAAUCAYEBGgAFAgGBARoABQIBgQEaAAUEAYEBHwABH/oGAAUCAYEBGgAFAgGBARoABQIBgQEaAAUEAYEBHAAB1QgCAAEfHAAB … [truncated]
+             rle: (0, fD.b)("gBgABIEBAYgBGwAEgQEBHRsABIEBAYgBGwABiAEEgQEcAAEdAx/7BgAEAgKBARoABAIBgQEBiAEaAAQCAoEBGgAEBAKBARwAApYBAh/6BgAFAgGBARoABQIBgQEaAAUCAYEBGgAFBAGBAR0AAZYBAQABH/oGAAUCAYEBGgAFAgGBARoABQIBgQEaAAUEAYEBHwABH/oGAAUCAYEBGgAFAgGBARoABQIBgQEaAAUEAYEBHAAB1QgCAAEfHAAB … [truncated]
```

#### 771. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7594` → after: `L7594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7594) · [Before (L7594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7594)

```diff
-             rle: (0, om.c)("AwABgQEMAgkcBwIDAAGBAQwCCRwHAgMAAYEBDAIJHAcCAwABgQELBAEfBhwCIgEcAR8GBAMAAR8BlgEHAAGWAQ4AAZYB5wYAAYEBDAIJHAcCAwABgQEMAgkcBwIDAAGBAQwCCRwHAgMAAYEBCwQBHwYcAiIBHAEfBgQDAAEfAdUIAZYBBQABlgECAAGWAQ0AAZYBBwAB1gjeBgABgQEMAgkcBwIDAAGBAQwCCRwHAgMAAYEBDAIJHAcCAwAB … [truncated]
+             rle: (0, fD.b)("AwABgQEMAgkcBwIDAAGBAQwCCRwHAgMAAYEBDAIJHAcCAwABgQELBAEfBhwCIgEcAR8GBAMAAR8BlgEHAAGWAQ4AAZYB5wYAAYEBDAIJHAcCAwABgQEMAgkcBwIDAAGBAQwCCRwHAgMAAYEBCwQBHwYcAiIBHAEfBgQDAAEfAdUIAZYBBQABlgECAAGWAQ0AAZYBBwAB1gjeBgABgQEMAgkcBwIDAAGBAQwCCRwHAgMAAYEBDAIJHAcCAwAB … [truncated]
```

#### 772. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7599` → after: `L7599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7599) · [Before (L7599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7599)

```diff
-             rle: (0, om.c)("BQIBgQEaAAUCAYEBGgAFAgGBARoABQQBgQEaAAGWAQQAAR/6BgAFAgGBARoABQIBgQEaAAUCAYEBGgAFBAGBAR8AAR/6BgAFAgGBARoABQIBgQEaAAUCAYEBGgAFBAGBAR8AAR/6BgAFAgGBARoABQIBgQEaAAUCAYgBGgAFBAGBARwAA5YBAR/6BgAEAgKBARoABAIBgQEBiAEaAAQCAYEBAR0aAAQEAoEBGwABlgEB1QgBlgECHxwAAdYI … [truncated]
+             rle: (0, fD.b)("BQIBgQEaAAUCAYEBGgAFAgGBARoABQQBgQEaAAGWAQQAAR/6BgAFAgGBARoABQIBgQEaAAUCAYEBGgAFBAGBAR8AAR/6BgAFAgGBARoABQIBgQEaAAUCAYEBGgAFBAGBAR8AAR/6BgAFAgGBARoABQIBgQEaAAUCAYgBGgAFBAGBARwAA5YBAR/6BgAEAgKBARoABAIBgQEBiAEaAAQCAYEBAR0aAAQEAoEBGwABlgEB1QgBlgECHxwAAdYI … [truncated]
```

#### 773. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7609` → after: `L7609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7609) · [Before (L7609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7609)

```diff
-             rle: (0, om.c)("IATgBwAHBAwCBwQGAgcADAQHAAYECwABlgG0BwADBBICAwQIAgMAEgQDAAKBAQYCDAABlgELAASBAQGIAQMcGAABiAECgQEBiAEBHRsABR+bAwAFHxsAAYEBAQABgQEBAAGBARsAAYgBAQABgQEBAAGBAQGIAQEdAYgBGAABHQQAAYEBGgABHQGIAQKBAQEAA4EBGwABgQEfAAWBAYACAAIEHgICABYECAIXAAGWAQWBAQMcGAAFgQEDHBgA … [truncated]
+             rle: (0, fD.b)("IATgBwAHBAwCBwQGAgcADAQHAAYECwABlgG0BwADBBICAwQIAgMAEgQDAAKBAQYCDAABlgELAASBAQGIAQMcGAABiAECgQEBiAEBHRsABR+bAwAFHxsAAYEBAQABgQEBAAGBARsAAYgBAQABgQEBAAGBAQGIAQEdAYgBGAABHQQAAYEBGgABHQGIAQKBAQEAA4EBGwABgQEfAAWBAYACAAIEHgICABYECAIXAAGWAQWBAQMcGAAFgQEDHBgA … [truncated]
```

#### 774. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7614` → after: `L7614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7614) · [Before (L7614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7614)

```diff
-             rle: (0, om.c)("IATgBwAJAgkECAIPBAkACAQEAAGeAQYAAZYBugcADAIEBA0CAwQIAgQEBAANBAMAAxwBHQGIAQOBARsAAYgBA4EBAYgBGwAFH5sDAAUfGwABgQEBAAGBAQEAAR0YAASBAQEAAYEBAQABgQEaAAGBAQQAAYEBGAABiAEBHQGIAQEABIEBHAABiAEbAAOBAQGIAQEdmwIAHgICBAgCFgQCAAMcBYEBDQABlgEKAAMcBYEBGwABHwOBAQEfHAAD … [truncated]
+             rle: (0, fD.b)("IATgBwAJAgkECAIPBAkACAQEAAGeAQYAAZYBugcADAIEBA0CAwQIAgQEBAANBAMAAxwBHQGIAQOBARsAAYgBA4EBAYgBGwAFH5sDAAUfGwABgQEBAAGBAQEAAR0YAASBAQEAAYEBAQABgQEaAAGBAQQAAYEBGAABiAEBHQGIAQEABIEBHAABiAEbAAOBAQGIAQEdmwIAHgICBAgCFgQCAAMcBYEBDQABlgEKAAMcBYEBGwABHwOBAQEfHAAD … [truncated]
```

#### 775. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7619` → after: `L7619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7619) · [Before (L7619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7619)

```diff
-             rle: (0, om.c)("AQQfAgEAAQQeAgIAAR0EHBUABBwDAAMcFwADHAQAAe8PHwAB7w8fAAHvDx8AAe8PHwAB7w8fAAHvDx8AAe8PHwAB7w8fAAHvDx8AAe8PHwAB7w8fAAHvDx8AAe8PHwAB7w8fAAHvDx0AAYgBBIEBHAABzRcBgQEBzRccAASBAQGIARwAAc0XAYEBAc0XHAAFgQGZAgABBB8CAQABBB4CAgABHQQcFQAEHAMAAxwXAAMcBAAB7w8fAAHvDx8A … [truncated]
+             rle: (0, fD.b)("AQQfAgEAAQQeAgIAAR0EHBUABBwDAAMcFwADHAQAAe8PHwAB7w8fAAHvDx8AAe8PHwAB7w8fAAHvDx8AAe8PHwAB7w8fAAHvDx8AAe8PHwAB7w8fAAHvDx8AAe8PHwAB7w8fAAHvDx0AAYgBBIEBHAABzRcBgQEBzRccAASBAQGIARwAAc0XAYEBAc0XHAAFgQGZAgABBB8CAQABBB4CAgABHQQcFQAEHAMAAxwXAAMcBAAB7w8fAAHvDx8A … [truncated]
```

#### 776. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7624` → after: `L7624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7624) · [Before (L7624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7624)

```diff
-             rle: (0, om.c)("HwIBBB4CAQQBAAQcFQAFHAIAAxwXAAEdAhz8AwAFgQEcAAEcAYEBARwcAAEdA4EBAYgBHAABHAGBAQEcHAAFgQGCAgAfAgEEHgIBBAEABBwVAAUcAgADHBcAAxz8AwAFgQEcAAEcAYEBARwcAAGIAQOBAQEdHAABHAGBAQEcHAAFgQGCAgAfAgEEHgIBBAEABBwVAAQcAR0CAAEdAhwXAAIcAR38AwAFgQEbAAWBARsABIEBAYgBHAABHAGB … [truncated]
+             rle: (0, fD.b)("HwIBBB4CAQQBAAQcFQAFHAIAAxwXAAEdAhz8AwAFgQEcAAEcAYEBARwcAAEdA4EBAYgBHAABHAGBAQEcHAAFgQGCAgAfAgEEHgIBBAEABBwVAAUcAgADHBcAAxz8AwAFgQEcAAEcAYEBARwcAAGIAQOBAQEdHAABHAGBAQEcHAAFgQGCAgAfAgEEHgIBBAEABBwVAAQcAR0CAAEdAhwXAAIcAR38AwAFgQEbAAWBARsABIEBAYgBHAABHAGB … [truncated]
```

#### 777. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7629` → after: `L7629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7629) · [Before (L7629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7629)

```diff
-             this.MO = Tm, this.chunkToFixedPointPrefabs = void 0;
+             this.CI = zD, this.chunkToFixedPointPrefabs = void 0;
```

#### 778. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7633` → after: `L7633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7633) · [Before (L7633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7633)

```diff
-                 Am: Am,
+                 pD: sD,
```

#### 779. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7640` → after: `L7640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7640) · [Before (L7640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7640)

```diff
-               if (void 0 === mm) throw new Error(`Fixed-point prefab "${Am}" has not been inlined into the build using the BloxdSchematicInliner tool.`);
+               if (void 0 === DD) throw new Error(`Fixed-point prefab "${sD}" has not been inlined into the build using the BloxdSchematicInliner tool.`);
```

#### 780. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7691` → after: `L7691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7691) · [Before (L7691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7691)

```diff
-               nearestFixedPrefabInfoForChunk: Am.p.create(this.MO, [mm, Tm], hm.j.NumFields, wm)
+               nearestFixedPrefabInfoForChunk: sD.r.create(this.CI, [DD, zD], pD.k.NumFields, LD)
```

#### 781. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7696` → after: `L7696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7696) · [Before (L7696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7696)

```diff
-             const am = Am.getOrGenerate(mm, Tm, hm.j.DistanceToNearestFixedPrefab);
+             const KD = sD.getOrGenerate(DD, zD, pD.k.DistanceToNearestFixedPrefab);
```

#### 782. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7700` → after: `L7700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7700) · [Before (L7700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7700)

```diff
-             const wm = Am.getOrGenerate(mm, Tm, hm.j.HeightOfNearestFixedPrefab);
+             const LD = sD.getOrGenerate(DD, zD, pD.k.HeightOfNearestFixedPrefab);
```

#### 783. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7705` → after: `L7705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7705) · [Before (L7705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7705)

```diff
-             return fm.getOrGenerate(mm, Tm, hm.j.DistanceToNearestFixedPrefab) <= Vm
+             return wD.getOrGenerate(DD, zD, pD.k.DistanceToNearestFixedPrefab) <= nD
```

#### 784. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7709` → after: `L7709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7709) · [Before (L7709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7709)

```diff
-             return 0 === fm.getOrGenerate(mm, Tm, hm.j.DistanceToNearestFixedPrefab)
+             return 0 === wD.getOrGenerate(DD, zD, pD.k.DistanceToNearestFixedPrefab)
```

#### 785. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7727` → after: `L7727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7727) · [Before (L7727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7727)

```diff
-             return `${mm}|${Tm}`
+             return `${DD}|${zD}`
```

#### 786. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7732` → after: `L7732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7732) · [Before (L7732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7732)

```diff
-             if (!(0, wm.H)(fm)) return fm;
+             if (!(0, LD.B)(wD)) return wD;
```

#### 787. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7736-L7740` → after: `L7736-L7740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7736-L7740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7736-L7740) · [Before (L7736-L7740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7736-L7740)

```diff
-             for (let am = 0; am < hm.x; am += wm.x)
-               for (let Tm = 0; Tm < hm.y; Tm += wm.x)
-                 for (let fm = 0; fm < hm.z; fm += wm.x) {
-                   const xm = im()(new Uint16Array(wm.x * wm.x * wm.x), [wm.x, wm.x, wm.x]),
-                     Dm = mm.getRLEChunk((0, wm.M)(am), (0, wm.M)(Tm), (0, wm.M)(fm));
+             for (let KD = 0; KD < pD.x; KD += LD.r)
+               for (let zD = 0; zD < pD.y; zD += LD.r)
+                 for (let wD = 0; wD < pD.z; wD += LD.r) {
+                   const rD = gD()(new Uint16Array(LD.r * LD.r * LD.r), [LD.r, LD.r, LD.r]),
+                     cD = DD.getRLEChunk((0, LD.L)(KD), (0, LD.L)(zD), (0, LD.L)(wD));
```

#### 788. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7742-L7744` → after: `L7742-L7744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7742) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7742-L7744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7742-L7744) · [Before (L7742-L7744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7742-L7744)

```diff
-                   const pm = Math.min(wm.x, hm.x - am),
-                     Em = Math.min(wm.x, hm.y - Tm),
-                     om = Math.min(wm.x, hm.z - fm);
+                   const AD = Math.min(LD.r, pD.x - KD),
+                     UD = Math.min(LD.r, pD.y - zD),
+                     fD = Math.min(LD.r, pD.z - wD);
```

#### 789. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7779` → after: `L7779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7779) · [Before (L7779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7779)

```diff
-             fm.set(mm, Tm, hm.j.DistanceToNearestFixedPrefab, Am), fm.set(mm, Tm, hm.j.HeightOfNearestFixedPrefab, am)
+             wD.set(DD, zD, pD.k.DistanceToNearestFixedPrefab, sD), wD.set(DD, zD, pD.k.HeightOfNearestFixedPrefab, KD)
```

#### 790. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7784` → after: `L7784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7784) · [Before (L7784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7784)

```diff
-       39797: (mm, Tm, fm) => {
+       39616: (DD, zD, wD) => {
```

#### 791. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7786` → after: `L7786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7786) · [Before (L7786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7786)

```diff
-           d: () => im,
+           b: () => gD,
```

#### 792. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7788` → after: `L7788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7788) · [Before (L7788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7788)

```diff
-           g: () => wm
+           i: () => LD
```

#### 793. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7790-L7793` → after: `L7790-L7793`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7790-L7793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7790-L7793) · [Before (L7790-L7793)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7790-L7793)

```diff
-         var hm = fm(39802),
-           Am = fm(39812),
-           am = fm(39805),
-           xm = fm(39817);
+         var pD = wD(39625),
+           sD = wD(39635),
+           KD = wD(39633),
+           rD = wD(39641);
```

#### 794. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7802` → after: `L7802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7802) · [Before (L7802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7802)

```diff
-           }], `${mm}GlobalHeightmapOffset`)
+           }], `${DD}GlobalHeightmapOffset`)
```

#### 795. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7838` → after: `L7838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7838) · [Before (L7838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7838)

```diff
-             null !== om && (im = om, Rm = am.p, pm = om - am.f, Em = 0), this.setHeightmapValuesWithFixedPrefabSmoothing(mm, Tm, Am, xm, fm, im, Rm, pm, Em)
+             null !== fD && (gD = fD, RD = KD.n, AD = fD - KD.f, UD = 0), this.setHeightmapValuesWithFixedPrefabSmoothing(DD, zD, sD, rD, wD, gD, RD, AD, UD)
```

#### 796. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7851` → after: `L7851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7851) · [Before (L7851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7851)

```diff
-               om = am.p,
+               fD = KD.n,
```

#### 797. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7862` → after: `L7862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7862) · [Before (L7862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7862)

```diff
-                 Tm < 1 && (om = im + Math.floor((Dm - im) * Tm), Em >= om && (om = am.p, Ym = am.h))
+                 zD < 1 && (fD = gD + Math.floor((cD - gD) * zD), UD >= fD && (fD = KD.n, BD = KD.h))
```

#### 798. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7880-L7881` → after: `L7880-L7881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7880-L7881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7880-L7881) · [Before (L7880-L7881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7880-L7881)

```diff
-             const Em = xm.e.smoothHeightmapForFixedPointPrefab(Math.round(mm + fm / 4), Math.round(Tm + hm / 4), Dm, this.nearestFixedPrefabInfoForChunk);
-             null !== Em && im > (Dm = Em) && (im = am.p, pm = 0), wm.set(mm, Tm, Am.g.GroundHeight, Dm), wm.set(mm, Tm, Am.g.WaterHeight, im), wm.set(mm, Tm, Am.g.CavesAllowedBelowY, Rm), wm.set(mm, Tm, Am.g.IsLake, pm), this.shouldCurtailCave(mm, Tm, null !== Em) && wm.set(mm, T … [truncated]
+             const UD = rD.b.smoothHeightmapForFixedPointPrefab(Math.round(DD + wD / 4), Math.round(zD + pD / 4), cD, this.nearestFixedPrefabInfoForChunk);
+             null !== UD && gD > (cD = UD) && (gD = KD.n, AD = 0), LD.set(DD, zD, sD.h.GroundHeight, cD), LD.set(DD, zD, sD.h.WaterHeight, gD), LD.set(DD, zD, sD.h.CavesAllowedBelowY, RD), LD.set(DD, zD, sD.h.IsLake, AD), this.shouldCurtailCave(DD, zD, null !== UD) && LD.set(DD, z … [truncated]
```

#### 799. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7893` → after: `L7893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7893) · [Before (L7893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7893)

```diff
-       39830: (mm, Tm, fm) => {
+       39657: (DD, zD, wD) => {
```

#### 800. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7895` → after: `L7895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7895) · [Before (L7895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7895)

```diff
-           d: () => im
+           c: () => gD
```

#### 801. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7897-L7898` → after: `L7897-L7898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7897-L7898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7897-L7898) · [Before (L7897-L7898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7897-L7898)

```diff
-         var hm = fm(39802),
-           Am = fm(39838),
+         var pD = wD(39625),
+           sD = wD(39659),
```

#### 802. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7900-L7902` → after: `L7900-L7902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7900-L7902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7900-L7902) · [Before (L7900-L7902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7900-L7902)

```diff
-           xm = fm(4184),
-           wm = fm(39875);
-         const Dm = new wm.b("point cells", 500, 6e4);
+           rD = wD(4263),
+           LD = wD(39698);
+         const cD = new LD.e("point cells", 500, 6e4);
```

#### 803. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7919` → after: `L7919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7919) · [Before (L7919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7919)

```diff
-             if (this.gridSize < fm) throw new Error(`PointsGenerator "${this.name}" has gridSize=${this.gridSize} but needs >= ${fm} (chunkSize=${mm}, halfBox=${Tm}). Points near chunk edges would be missed.`)
+             if (this.gridSize < wD) throw new Error(`PointsGenerator "${this.name}" has gridSize=${this.gridSize} but needs >= ${wD} (chunkSize=${DD}, halfBox=${zD}). Points near chunk edges would be missed.`)
```

#### 804. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7926` → after: `L7926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7926) · [Before (L7926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7926)

```diff
-             return !!hm.has((0, wm.e)(mm, Tm))
+             return !!pD.has((0, LD.f)(DD, zD))
```

#### 805. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7935` → after: `L7935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7935) · [Before (L7935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7935)

```diff
-               const fm = (0, hm.I)(Dm, mm, Tm);
+               const wD = (0, pD.J)(cD, DD, zD);
```

#### 806. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7964` → after: `L7964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7964) · [Before (L7964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7964)

```diff
-               const mm = (0, hm.I)(im, Tm, fm);
+               const DD = (0, pD.J)(gD, zD, wD);
```

#### 807. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L7976` → after: `L7976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R7976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L7976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7976) · [Before (L7976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L7976)

```diff
-               const pm = (0, hm.I)(Rm, Tm, fm) - xm;
+               const AD = (0, pD.J)(RD, zD, wD) - rD;
```

#### 808. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8009` → after: `L8009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8009) · [Before (L8009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8009)

```diff
-               const am = new xm.k(`${mm}${Tm}${this.seed}jitter`);
+               const KD = new rD.g(`${DD}${zD}${this.seed}jitter`);
```

#### 809. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8020` → after: `L8020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8020) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8020) · [Before (L8020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8020)

```diff
-               const wm = new xm.k(`${mm}${Tm}${this.seed}pts`),
+               const LD = new rD.g(`${DD}${zD}${this.seed}pts`),
```

#### 810. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8048` → after: `L8048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8048) · [Before (L8048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8048)

```diff
-               for (const mm of Am) Dm.add((0, wm.e)(mm[0], mm[1]))
+               for (const DD of sD) cD.add((0, LD.f)(DD[0], DD[1]))
```

#### 811. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8052` → after: `L8052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8052) · [Before (L8052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8052)

```diff
-               points: this.useKthClosestPoint ? Am : null
+               points: this.useKthClosestPoint ? sD : null
```

#### 812. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8057` → after: `L8057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8057) · [Before (L8057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8057)

```diff
-       39898: (mm, Tm, fm) => {
+       39724: (DD, zD, wD) => {
```

#### 813. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8061-L8070` → after: `L8061-L8070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8061) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8061-L8070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8061-L8070) · [Before (L8061-L8070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8061-L8070)

```diff
-         var hm = fm(39802),
-           Am = fm(39830),
-           am = fm(39812),
-           xm = fm(39805),
-           wm = fm(37783),
-           Dm = fm(39892),
-           im = fm(637),
-           Rm = fm(653),
-           pm = fm(39269),
-           Em = fm(4184);
+         var pD = wD(39625),
+           sD = wD(39657),
+           KD = wD(39635),
+           rD = wD(39633),
+           LD = wD(37713),
+           cD = wD(39715),
+           gD = wD(596),
+           RD = wD(619),
+           AD = wD(39104),
+           UD = wD(4263);
```

#### 814. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8085` → after: `L8085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8085) · [Before (L8085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8085)

```diff
-             return null !== (Tm = Ym[this.suffixMapping[mm]]) && void 0 !== Tm ? Tm : []
+             return null !== (zD = BD[this.suffixMapping[DD]]) && void 0 !== zD ? zD : []
```

#### 815. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8104` → after: `L8104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8104) · [Before (L8104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8104)

```diff
-               Tm[fm] = (null !== (xm = Tm[fm]) && void 0 !== xm ? xm : 0) + 1, Tm[fm] >= jm && hm.splice(hm.indexOf(fm), 1)
+               zD[wD] = (null !== (rD = zD[wD]) && void 0 !== rD ? rD : 0) + 1, zD[wD] >= hD && pD.splice(pD.indexOf(wD), 1)
```

#### 816. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8171` → after: `L8171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8171) · [Before (L8171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8171)

```diff
-             return `r${mm}|m${Number(Tm)}`
+             return `r${DD}|m${Number(zD)}`
```

#### 817. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8205` → after: `L8205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8205) · [Before (L8205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8205)

```diff
-             const [, om, Om] = null !== (Am = Qm.exec(pm)) && void 0 !== Am ? Am : [];
+             const [, fD, ID] = null !== (sD = JD.exec(AD)) && void 0 !== sD ? sD : [];
```

#### 818. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8208` → after: `L8208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8208) · [Before (L8208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8208)

```diff
-               Em = null !== (Ym = null === (qm = am[`${Rm}|meta|${[Km.split("").filter(((mm,Tm)=>om.split("").some((mm=>{const fm=Km.indexOf(mm);return((hm?3-fm:fm)+xm)%4===Tm})))).join(""),Om].filter(Boolean).join("|")}`]) || void 0 === qm ? void 0 : qm.id) && void 0 !== Ym ? Ym … [truncated]
+               UD = null !== (BD = null === (GD = KD[`${RD}|meta|${[OD.split("").filter(((DD,zD)=>fD.split("").some((DD=>{const wD=OD.indexOf(DD);return((pD?3-wD:wD)+rD)%4===zD})))).join(""),ID].filter(Boolean).join("|")}`]) || void 0 === GD ? void 0 : GD.id) && void 0 !== BD ? BD … [truncated]
```

#### 819. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8213` → after: `L8213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8213) · [Before (L8213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8213)

```diff
-               let Tm = pm.replace(`rot${im}`, `rot${mm}`);
+               let zD = AD.replace(`rot${gD}`, `rot${DD}`);
```

#### 820. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8218` → after: `L8218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8218) · [Before (L8218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8218)

```diff
-                 Tm = `${Am[1]}|${mm.join("")}`
+                 zD = `${sD[1]}|${DD.join("")}`
```

#### 821. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8220-L8221` → after: `L8220-L8221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8220-L8221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8220-L8221) · [Before (L8220-L8221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8220-L8221)

```diff
-               const xm = `${Rm}|${Tm}`;
-               if (Em = null !== (jm = null === (Vm = am[xm]) || void 0 === Vm ? void 0 : Vm.id) && void 0 !== jm ? jm : null, null === Em) {
+               const rD = `${RD}|${zD}`;
+               if (UD = null !== (hD = null === (nD = KD[rD]) || void 0 === nD ? void 0 : nD.id) && void 0 !== hD ? hD : null, null === UD) {
```

#### 822. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8231` → after: `L8231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8231) · [Before (L8231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8231)

```diff
-           Zm = fm(39817);
+           PD = wD(39641);
```

#### 823. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8237` → after: `L8237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8237) · [Before (L8237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8237)

```diff
-             if (Dm === xm.o) continue;
+             if (cD === rD.m) continue;
```

#### 824. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8259` → after: `L8259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8259) · [Before (L8259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8259)

```diff
-         const em = new Em.i([{
+         const bD = new UD.e([{
```

#### 825. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8272` → after: `L8272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8272) · [Before (L8272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8272)

```diff
-           Nm = new Em.i([{
+           jD = new UD.e([{
```

#### 826. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8282` → after: `L8282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8282) · [Before (L8282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8282)

```diff
-         const Pm = new Em.i(["Powerful", "Legendary", "Majestic", "Fearless", "Celestial", "Mythic", "Epic", "Ethereal", "Omniscient", "Omnipotent", "Arcane", "Enigmatic", "Formidable", "Indomitable", "Luminous", "Ferocious", "Astral", "Unyielding", "Celestine", "Ascendant", "Oth … [truncated]
+         const iD = new UD.e(["Powerful", "Legendary", "Majestic", "Fearless", "Celestial", "Mythic", "Epic", "Ethereal", "Omniscient", "Omnipotent", "Arcane", "Enigmatic", "Formidable", "Indomitable", "Luminous", "Ferocious", "Astral", "Unyielding", "Celestine", "Ascendant", "Oth … [truncated]
```

#### 827. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8291` → after: `L8291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8291) · [Before (L8291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8291)

```diff
-             const Tm = `${Pm.sample(mm)} ${this.mobType}`;
+             const zD = `${iD.sample(DD)} ${this.mobType}`;
```

#### 828. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8307` → after: `L8307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8307) · [Before (L8307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8307)

```diff
-               const mm = new Em.m(hm.minItems, hm.maxItems + 1),
+               const DD = new UD.k(pD.minItems, pD.maxItems + 1),
```

#### 829. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8311-L8312` → after: `L8311-L8312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8311-L8312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8311-L8312) · [Before (L8311-L8312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8311-L8312)

```diff
-                 const mm = Tm.amount ? new Em.m(Tm.amount.min, Tm.amount.max + 1) : null,
-                   hm = null !== (fm = Tm.itemAttributesDistribution) && void 0 !== fm ? fm : null;
+                 const DD = zD.amount ? new UD.k(zD.amount.min, zD.amount.max + 1) : null,
+                   pD = null !== (wD = zD.itemAttributesDistribution) && void 0 !== wD ? wD : null;
```

#### 830. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8322` → after: `L8322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8322) · [Before (L8322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8322)

```diff
-               const am = new Em.i(Am);
+               const KD = new UD.e(sD);
```

#### 831. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8328` → after: `L8328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8328) · [Before (L8328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8328)

```diff
-             this.itemCategoryDistributions = Tm, this.shouldEnchantDistribution = new Em.e(mm.enchantmentProbability), this.enchantmentTier = mm.enchantmentTier
+             this.itemCategoryDistributions = zD, this.shouldEnchantDistribution = new UD.c(DD.enchantmentProbability), this.enchantmentTier = DD.enchantmentTier
```

#### 832. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8331` → after: `L8331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8331) · [Before (L8331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8331)

```diff
-             const Tm = Array(Rm.k).fill(null);
+             const zD = Array(RD.g).fill(null);
```

#### 833. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8339-L8341` → after: `L8339-L8341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8339-L8341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8339-L8341) · [Before (L8339-L8341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8339-L8341)

```diff
-                   Em = null !== (hm = null === (Am = Rm.amountDistribution) || void 0 === Am ? void 0 : Am.sample(mm)) && void 0 !== hm ? hm : null,
-                   om = null !== (am = null === (xm = Rm.attributesDistribution) || void 0 === xm ? void 0 : xm.sample(mm)) && void 0 !== am ? am : {},
-                   Om = null !== (wm = this.getEnchantmentAttributesForItem(mm, pm)) && void 0 !== wm ? wm : {};
+                   UD = null !== (pD = null === (sD = RD.amountDistribution) || void 0 === sD ? void 0 : sD.sample(DD)) && void 0 !== pD ? pD : null,
+                   fD = null !== (KD = null === (rD = RD.attributesDistribution) || void 0 === rD ? void 0 : rD.sample(DD)) && void 0 !== KD ? KD : {},
+                   ID = null !== (LD = this.getEnchantmentAttributesForItem(DD, AD)) && void 0 !== LD ? LD : {};
```

#### 834. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8348` → after: `L8348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8348) · [Before (L8348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8348)

```diff
-                       ...null !== (Dm = om.customAttributes) && void 0 !== Dm ? Dm : {},
+                       ...null !== (cD = fD.customAttributes) && void 0 !== cD ? cD : {},
```

#### 835. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8355` → after: `L8355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8355) · [Before (L8355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8355)

```diff
-             return (0, Em.o)(Tm, mm), Tm
+             return (0, UD.n)(zD, DD), zD
```

#### 836. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8642` → after: `L8642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8642) · [Before (L8642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8642)

```diff
-             name: `${mm} Pickaxe`,
+             name: `${DD} Pickaxe`,
```

#### 837. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8646` → after: `L8646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8646) · [Before (L8646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8646)

```diff
-             name: `${mm} Axe`,
+             name: `${DD} Axe`,
```

#### 838. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8650` → after: `L8650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8650) · [Before (L8650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8650)

```diff
-             name: `${mm} Spade`,
+             name: `${DD} Spade`,
```

#### 839. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8654` → after: `L8654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8654) · [Before (L8654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8654)

```diff
-             name: `${mm} Hoe`,
+             name: `${DD} Hoe`,
```

#### 840. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8661` → after: `L8661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8661) · [Before (L8661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8661)

```diff
-           if (Tm < 0 || Tm > 1) throw new Error(`Special arrow chance must be between 0 and 1, but is ${Tm}`);
+           if (zD < 0 || zD > 1) throw new Error(`Special arrow chance must be between 0 and 1, but is ${zD}`);
```

#### 841. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8685` → after: `L8685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8685) · [Before (L8685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8685)

```diff
-             name: `${mm} Sword`,
+             name: `${DD} Sword`,
```

#### 842. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8689` → after: `L8689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8689) · [Before (L8689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8689)

```diff
-             name: `${mm} Bow`,
+             name: `${DD} Bow`,
```

#### 843. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8693` → after: `L8693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8693) · [Before (L8693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8693)

```diff
-             name: `${mm} Crossbow`,
+             name: `${DD} Crossbow`,
```

#### 844. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8706` → after: `L8706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8706) · [Before (L8706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8706)

```diff
-           if (mm === rm.STONE) throw new Error(`${mm} armour is not supported`);
+           if (DD === ZD.STONE) throw new Error(`${DD} armour is not supported`);
```

#### 845. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8708` → after: `L8708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8708) · [Before (L8708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8708)

```diff
-               name: `${mm} Helmet`,
+               name: `${DD} Helmet`,
```

#### 846. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8712` → after: `L8712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8712) · [Before (L8712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8712)

```diff
-               name: `${mm} Chestplate`,
+               name: `${DD} Chestplate`,
```

#### 847. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8716` → after: `L8716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8716) · [Before (L8716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8716)

```diff
-               name: `${mm} Gauntlets`,
+               name: `${DD} Gauntlets`,
```

#### 848. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8720` → after: `L8720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8720) · [Before (L8720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8720)

```diff
-               name: `${mm} Leggings`,
+               name: `${DD} Leggings`,
```

#### 849. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8724` → after: `L8724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8724) · [Before (L8724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8724)

```diff
-               name: `${mm} Boots`,
+               name: `${DD} Boots`,
```

#### 850. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8732` → after: `L8732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8732) · [Before (L8732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8732)

```diff
-           [Rm.h.COMMON]: new ym({
+           [RD.f.COMMON]: new WD({
```

#### 851. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8761` → after: `L8761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8761) · [Before (L8761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8761)

```diff
-           [Rm.h.UNCOMMON]: new ym({
+           [RD.f.UNCOMMON]: new WD({
```

#### 852. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8790` → after: `L8790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8790) · [Before (L8790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8790)

```diff
-           [Rm.h.RARE]: new ym({
+           [RD.f.RARE]: new WD({
```

#### 853. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8819` → after: `L8819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8819) · [Before (L8819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8819)

```diff
-           [Rm.h.EPIC]: new ym({
+           [RD.f.EPIC]: new WD({
```

#### 854. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8856` → after: `L8856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8856) · [Before (L8856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8856)

```diff
-           [Rm.h.LEGENDARY]: new ym({
+           [RD.f.LEGENDARY]: new WD({
```

#### 855. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8981` → after: `L8981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8981) · [Before (L8981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8981)

```diff
-             const mm = new Em.k(`${this.seed}|${this.x}|${this.y}|${this.z}|lootChest`),
+             const DD = new UD.g(`${this.seed}|${this.x}|${this.y}|${this.z}|lootChest`),
```

#### 856. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8986` → after: `L8986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8986) · [Before (L8986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8986)

```diff
-                   chestStr: (0, Rm.A)(Tm),
+                   chestStr: (0, RD.v)(zD),
```

#### 857. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8996` → after: `L8996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8996) · [Before (L8996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8996)

```diff
-             this.seed = void 0, this.MO = void 0, this.invisibleSolidBlockId = void 0, this.emptySpawnerBlockId = void 0, this.chestToLootChestBlockId = void 0, this.defaultSpawnerBlockId = void 0, this.mobTypeToSpawnerBlockId = void 0, this.prefabRadius = void 0, this.prefabCent … [truncated]
+             this.seed = void 0, this.CI = void 0, this.invisibleSolidBlockId = void 0, this.emptySpawnerBlockId = void 0, this.chestToLootChestBlockId = void 0, this.defaultSpawnerBlockId = void 0, this.mobTypeToSpawnerBlockId = void 0, this.prefabRadius = void 0, this.prefabCent … [truncated]
```

#### 858. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L8999` → after: `L8999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R8999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L8999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8999) · [Before (L8999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L8999)

```diff
-               MO: fm,
+               CI: wD,
```

#### 859. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9005` → after: `L9005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9005) · [Before (L9005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9005)

```diff
-             aT.BLOCK_ID_MAPPINGS || (aT.BLOCK_ID_MAPPINGS = new Jm(hm)), Gm || (Gm = new Om(xm)), this.seed = Tm, this.MO = fm, this.invisibleSolidBlockId = hm["Invisible Solid"].id, this.emptySpawnerBlockId = hm["Empty Spawner Block"].id, this.chestToLootChestBlockId = new im.c( … [truncated]
+             sz.BLOCK_ID_MAPPINGS || (sz.BLOCK_ID_MAPPINGS = new QD(pD)), dD || (dD = new ID(rD)), this.seed = zD, this.CI = wD, this.invisibleSolidBlockId = pD["Invisible Solid"].id, this.emptySpawnerBlockId = pD["Empty Spawner Block"].id, this.chestToLootChestBlockId = new gD.e( … [truncated]
```

#### 860. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9012` → after: `L9012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9012) · [Before (L9012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9012)

```diff
-             for (const Am of am.r) Rm[Am] = hm[`${Am} Spawner Block`].id;
+             for (const sD of KD.r) RD[sD] = pD[`${sD} Spawner Block`].id;
```

#### 861. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9027` → after: `L9027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9027) · [Before (L9027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9027)

```diff
-                   Dm = new Am.d(`prefab|${mm}|${xm}`, wm.minDistanceBetweenPrefabs, !1, !0, Tm, hm, fm, null, !0)
+                   cD = new sD.c(`prefab|${DD}|${rD}`, LD.minDistanceBetweenPrefabs, !1, !0, zD, pD, wD, null, !0)
```

#### 862. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9041` → after: `L9041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9041) · [Before (L9041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9041)

```diff
-             return new Em.k(`${mm}|${Tm}|${this.seed}|prefabGenerator`)
+             return new UD.g(`${DD}|${zD}|${this.seed}|prefabGenerator`)
```

#### 863. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9070` → after: `L9070`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9070) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9070) · [Before (L9070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9070)

```diff
-               im = this.MO >> 1,
+               gD = this.CI >> 1,
```

#### 864. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9072` → after: `L9072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9072) · [Before (L9072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9072)

```diff
-               Em = mm + this.MO + this.prefabRadius,
+               UD = DD + this.CI + this.prefabRadius,
```

#### 865. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9074` → after: `L9074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9074) · [Before (L9074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9074)

```diff
-               Om = Tm + this.MO + this.prefabRadius;
+               ID = zD + this.CI + this.prefabRadius;
```

#### 866. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9082` → after: `L9082`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9082) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9082) · [Before (L9082)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9082)

```diff
-                 if (qm === am.n.SURFACE && Vm === am.m.VERY_HIGH && !wm.regionMayHaveVeryHighSurfacePrefabs(Rm, om, Em, Om)) continue;
+                 if (GD === KD.o.SURFACE && nD === KD.l.VERY_HIGH && !LD.regionMayHaveVeryHighSurfacePrefabs(RD, fD, UD, ID)) continue;
```

#### 867. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9092` → after: `L9092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9092) · [Before (L9092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9092)

```diff
-                   if (qm === am.n.SURFACE && !im.canPlaceSurfacePrefab(Tm, wm)) continue;
+                   if (GD === KD.o.SURFACE && !gD.canPlaceSurfacePrefab(zD, LD)) continue;
```

#### 868. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9111` → after: `L9111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9111) · [Before (L9111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9111)

```diff
-                       console.error(`Invalid prefab rotation: ${Im}`)
+                       console.error(`Invalid prefab rotation: ${MD}`)
```

#### 869. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9128` → after: `L9128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9128) · [Before (L9128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9128)

```diff
-                   if (qm === am.n.SURFACE && null !== im.maxSurfacePrefabRelief) {
+                   if (GD === KD.o.SURFACE && null !== gD.maxSurfacePrefabRelief) {
```

#### 870. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9135` → after: `L9135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9135) · [Before (L9135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9135)

```diff
-                   const bm = new pm.c;
+                   const xD = new AD.d;
```

#### 871. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9143` → after: `L9143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9143) · [Before (L9143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9143)

```diff
-                   const Sm = new pm.c;
+                   const TD = new AD.d;
```

#### 872. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9173` → after: `L9173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9173) · [Before (L9173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9173)

```diff
-                 const hm = Am.getOrGenerate(mm + Rm, Tm + fm, am.g.GroundHeight);
+                 const pD = sD.getOrGenerate(DD + RD, zD + wD, KD.h.GroundHeight);
```

#### 873. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9194-L9195` → after: `L9194-L9195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9194) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9194-L9195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9194-L9195) · [Before (L9194-L9195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9194-L9195)

```diff
-                 Dm: mm,
-                 im: fm
+                 LD: DD,
+                 cD: wD
```

#### 874. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9208` → after: `L9208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9208) · [Before (L9208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9208)

```diff
-                   if (fm.getOrGenerate(im, mm, am.g.WaterHeight) !== xm.p) return {
+                   if (wD.getOrGenerate(gD, DD, KD.h.WaterHeight) !== rD.n) return {
```

#### 875. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9212-L9213` → after: `L9212-L9213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9212-L9213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9212-L9213) · [Before (L9212-L9213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9212-L9213)

```diff
-                   const Tm = fm.getOrGenerate(im, mm, am.g.GroundHeight);
-                   if (Dm.d.isInCave(im, Tm, mm, hm)) return {
+                   const zD = wD.getOrGenerate(gD, DD, KD.h.GroundHeight);
+                   if (cD.e.isInCave(gD, zD, DD, pD)) return {
```

#### 876. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9217` → after: `L9217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9217) · [Before (L9217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9217)

```diff
-                   if (Zm.e.isNearFixedPointPrefab(im, mm, Am)) return {
+                   if (PD.b.isNearFixedPointPrefab(gD, DD, sD)) return {
```

#### 877. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9264-L9265` → after: `L9264-L9265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9264-L9265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9264-L9265) · [Before (L9264-L9265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9264-L9265)

```diff
-             if (wm === this.emptySpawnerBlockId && (wm = null !== (Dm = hm.spawnerBlockLocationToBlockId.get(mm, Tm, fm)) && void 0 !== Dm ? Dm : this.defaultSpawnerBlockId), wm < 0) return wm;
-             if (wm = null !== (am = null === (xm = hm.blockIdMapping) || void 0 === xm ? void 0 : xm[wm]) && void 0 !== am ? am : wm, void 0 !== this.chestToLootChestBlockId.reverseGet(wm)) {
+             if (LD === this.emptySpawnerBlockId && (LD = null !== (cD = pD.spawnerBlockLocationToBlockId.get(DD, zD, wD)) && void 0 !== cD ? cD : this.defaultSpawnerBlockId), LD < 0) return LD;
+             if (LD = null !== (KD = null === (rD = pD.blockIdMapping) || void 0 === rD ? void 0 : rD[LD]) && void 0 !== KD ? KD : LD, void 0 !== this.chestToLootChestBlockId.reverseGet(LD)) {
```

#### 878. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9267` → after: `L9267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9267) · [Before (L9267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9267)

```diff
-               const am = null !== (im = hm.chestLocationToQuality.get(mm, Tm, fm)) && void 0 !== im ? im : aT.DEFAULT_CHEST_QUALITY,
+               const KD = null !== (gD = pD.chestLocationToQuality.get(DD, zD, wD)) && void 0 !== gD ? gD : sz.DEFAULT_CHEST_QUALITY,
```

#### 879. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9294` → after: `L9294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9294) · [Before (L9294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9294)

```diff
-             } = mm, am = zm()(new Int32Array(fm * hm * Am), [fm, hm, Am]), xm = new pm.c;
+             } = DD, KD = VD()(new Int32Array(wD * pD * sD), [wD, pD, sD]), rD = new AD.d;
```

#### 880. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9296` → after: `L9296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9296) · [Before (L9296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9296)

```diff
-             const Dm = new pm.c;
+             const cD = new AD.d;
```

#### 881. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9298-L9302` → after: `L9298-L9302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9298-L9302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9298-L9302) · [Before (L9298-L9302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9298-L9302)

```diff
-             for (let im = 0; im < fm; im += Rm.x)
-               for (let Tm = 0; Tm < hm; Tm += Rm.x)
-                 for (let pm = 0; pm < Am; pm += Rm.x) {
-                   const Em = zm()(new Uint16Array(Rm.x * Rm.x * Rm.x), [Rm.x, Rm.x, Rm.x]),
-                     om = mm.schematic.getRLEChunk((0, Rm.M)(im), (0, Rm.M)(Tm), (0, Rm.M)(pm));
+             for (let gD = 0; gD < wD; gD += RD.r)
+               for (let zD = 0; zD < pD; zD += RD.r)
+                 for (let AD = 0; AD < sD; AD += RD.r) {
+                   const UD = VD()(new Uint16Array(RD.r * RD.r * RD.r), [RD.r, RD.r, RD.r]),
+                     fD = DD.schematic.getRLEChunk((0, RD.L)(gD), (0, RD.L)(zD), (0, RD.L)(AD));
```

#### 882. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9304-L9306` → after: `L9304-L9306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9304-L9306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9304-L9306) · [Before (L9304-L9306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9304-L9306)

```diff
-                   const Om = Math.min(Rm.x, fm - im),
-                     Ym = Math.min(Rm.x, hm - Tm),
-                     qm = Math.min(Rm.x, Am - pm);
+                   const ID = Math.min(RD.r, wD - gD),
+                     BD = Math.min(RD.r, pD - zD),
+                     GD = Math.min(RD.r, sD - AD);
```

#### 883. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9315` → after: `L9315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9315) · [Before (L9315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9315)

```diff
-                         else if (this.emptySpawnerBlockId === wm) Dm.get(Rm, om, Om) || console.error(`Empty spawner block found in prefab ${mm.schematic.name} at (${Rm}, ${om}, ${Om}) with no mob type specified. Defaulting to "${aT.DEFAULT_MOB_TYPE}" mob type.`);
+                         else if (this.emptySpawnerBlockId === LD) cD.get(RD, fD, ID) || console.error(`Empty spawner block found in prefab ${DD.schematic.name} at (${RD}, ${fD}, ${ID}) with no mob type specified. Defaulting to "${sz.DEFAULT_MOB_TYPE}" mob type.`);
```

#### 884. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9318` → after: `L9318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9318) · [Before (L9318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9318)

```diff
-                           void 0 !== Tm && (xm.get(Rm, om, Om) || console.error(`Chest found in prefab ${mm.schematic.name} at (${Rm}, ${om}, ${Om}) with no quality specified. Defaulting to "${aT.DEFAULT_CHEST_QUALITY}" quality.`), wm = Tm)
+                           void 0 !== zD && (rD.get(RD, fD, ID) || console.error(`Chest found in prefab ${DD.schematic.name} at (${RD}, ${fD}, ${ID}) with no quality specified. Defaulting to "${sz.DEFAULT_CHEST_QUALITY}" quality.`), LD = zD)
```

#### 885. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9341` → after: `L9341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9341) · [Before (L9341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9341)

```diff
-           }(mm, mm.shouldSwapXZ ? fm : Tm)
+           }(DD, DD.shouldSwapXZ ? wD : zD)
```

#### 886. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9348` → after: `L9348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9348) · [Before (L9348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9348)

```diff
-           }(mm, mm.shouldSwapXZ ? Tm : fm)
+           }(DD, DD.shouldSwapXZ ? zD : wD)
```

#### 887. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9350` → after: `L9350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9350) · [Before (L9350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9350)

```diff
-         aT.DECODED_PREFAB_SCHEMATIC_CACHE = new WeakMap, aT.BLOCK_ID_MAPPINGS = void 0, aT.DEFAULT_MOB_TYPE = "Draugr Zombie", aT.DEFAULT_CHEST_QUALITY = Rm.h.COMMON;
+         sz.DECODED_PREFAB_SCHEMATIC_CACHE = new WeakMap, sz.BLOCK_ID_MAPPINGS = void 0, sz.DEFAULT_MOB_TYPE = "Draugr Zombie", sz.DEFAULT_CHEST_QUALITY = RD.f.COMMON;
```

#### 888. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9371` → after: `L9371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9371) · [Before (L9371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9371)

```diff
-             const fm = new hm.f(2 * mm + 1, [-mm, -mm]);
+             const wD = new pD.i(2 * DD + 1, [-DD, -DD]);
```

#### 889. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9380` → after: `L9380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9380) · [Before (L9380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9380)

```diff
-             this.MO = fm, this.seed = hm, this.blockMetadata = am, this.maxTreeRadius = void 0, this.treePointGen = void 0, this.minTreeHeight = 4, this.maxTreeHeight = 7, this.treeInfos = void 0, this.canopyInfos = void 0, this.deadWoodIds = void 0;
+             this.CI = wD, this.seed = pD, this.blockMetadata = KD, this.maxTreeRadius = void 0, this.treePointGen = void 0, this.minTreeHeight = 4, this.maxTreeHeight = 7, this.treeInfos = void 0, this.canopyInfos = void 0, this.deadWoodIds = void 0;
```

#### 890. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9383` → after: `L9383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9383) · [Before (L9383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9383)

```diff
-                 [Rm.u.Maple]: {
+                 [RD.p.Maple]: {
```

#### 891. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9391` → after: `L9391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9391) · [Before (L9391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9391)

```diff
-                 [Rm.u.Pine]: {
+                 [RD.p.Pine]: {
```

#### 892. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9401` → after: `L9401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9401) · [Before (L9401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9401)

```diff
-                 [Rm.u.Plum]: {
+                 [RD.p.Plum]: {
```

#### 893. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9409` → after: `L9409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9409) · [Before (L9409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9409)

```diff
-                 [Rm.u.Cedar]: {
+                 [RD.p.Cedar]: {
```

#### 894. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9417` → after: `L9417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9417) · [Before (L9417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9417)

```diff
-                 [Rm.u.Aspen]: {
+                 [RD.p.Aspen]: {
```

#### 895. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9427` → after: `L9427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9427) · [Before (L9427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9427)

```diff
-                 [Rm.u.Jungle]: {
+                 [RD.p.Jungle]: {
```

#### 896. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9437` → after: `L9437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9437) · [Before (L9437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9437)

```diff
-                 [Rm.u.Palm]: {
+                 [RD.p.Palm]: {
```

#### 897. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9447` → after: `L9447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9447) · [Before (L9447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9447)

```diff
-                 [Rm.u.AutumnMaple]: {
+                 [RD.p.AutumnMaple]: {
```

#### 898. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9455` → after: `L9455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9455) · [Before (L9455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9455)

```diff
-                 [Rm.u.Pear]: {
+                 [RD.p.Pear]: {
```

#### 899. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9465` → after: `L9465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9465) · [Before (L9465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9465)

```diff
-                 [Rm.u.Cherry]: {
+                 [RD.p.Cherry]: {
```

#### 900. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9475` → after: `L9475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9475) · [Before (L9475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9475)

```diff
-                 [Rm.u.Spectral]: {
+                 [RD.p.Spectral]: {
```

#### 901. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9483` → after: `L9483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9483) · [Before (L9483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9483)

```diff
-                 [Rm.u.Mango]: {
+                 [RD.p.Mango]: {
```

#### 902. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9493` → after: `L9493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9493) · [Before (L9493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9493)

```diff
-                 [Rm.u.AutumnAspen]: {
+                 [RD.p.AutumnAspen]: {
```

#### 903. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9503` → after: `L9503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9503) · [Before (L9503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9503)

```diff
-                 [Rm.u.Dead]: {
+                 [RD.p.Dead]: {
```

#### 904. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9513` → after: `L9513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9513) · [Before (L9513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9513)

```diff
-                 [Rm.u.FallenLog]: {
+                 [RD.p.FallenLog]: {
```

#### 905. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9523-L9524` → after: `L9523-L9524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9523-L9524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9523-L9524) · [Before (L9523-L9524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9523-L9524)

```diff
-               }, this.deadWoodIds = ["Barkless Maple Log", "Barkless Maple Log", "Barkless Pine Log", "Barkless Cedar Log"].map((mm => am[mm].id)), this.maxTreeRadius = mm.maxTreeRadius, this.MO <= 2 * this.maxTreeRadius + 1) throw new Error("Tree radius is too large for chunk si … [truncated]
-             if (this.MO <= this.maxTreeHeight) throw new Error("Max tree height is too large for chunk size");
+               }, this.deadWoodIds = ["Barkless Maple Log", "Barkless Maple Log", "Barkless Pine Log", "Barkless Cedar Log"].map((DD => KD[DD].id)), this.maxTreeRadius = DD.maxTreeRadius, this.CI <= 2 * this.maxTreeRadius + 1) throw new Error("Tree radius is too large for chunk si … [truncated]
+             if (this.CI <= this.maxTreeHeight) throw new Error("Max tree height is too large for chunk size");
```

#### 906. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9598` → after: `L9598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9598) · [Before (L9598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9598)

```diff
-               if (mm.radius > this.maxTreeRadius) throw new Error(`Canopy radius ${mm.radius} for canopy type "${Am}" is larger than tree radius ${this.maxTreeRadius}`)
+               if (DD.radius > this.maxTreeRadius) throw new Error(`Canopy radius ${DD.radius} for canopy type "${sD}" is larger than tree radius ${this.maxTreeRadius}`)
```

#### 907. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9602-L9603` → after: `L9602-L9603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9602-L9603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9602-L9603) · [Before (L9602-L9603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9602-L9603)

```diff
-             for (const Am of mm.biomeSelector.Sm) Am.biome.treeMinDist && (wm = Math.min(wm, Am.biome.treeMinDist), Dm = Math.max(Dm, Am.biome.treeMinDist));
-             this.treePointGen = new Am.d("tree", 6, !0, !1, hm, 300, fm, {
+             for (const sD of DD.biomeSelector.xD) sD.biome.treeMinDist && (LD = Math.min(LD, sD.biome.treeMinDist), cD = Math.max(cD, sD.biome.treeMinDist));
+             this.treePointGen = new sD.c("tree", 6, !0, !1, pD, 300, wD, {
```

#### 908. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9611-L9612` → after: `L9611-L9612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9611-L9612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9611-L9612) · [Before (L9611-L9612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9611-L9612)

```diff
-             for (let om = mm - this.maxTreeRadius; om < mm + this.MO + this.maxTreeRadius; om++)
-               for (let mm = Tm - this.maxTreeRadius; mm < Tm + this.MO + this.maxTreeRadius; mm++) {
+             for (let fD = DD - this.maxTreeRadius; fD < DD + this.CI + this.maxTreeRadius; fD++)
+               for (let DD = zD - this.maxTreeRadius; DD < zD + this.CI + this.maxTreeRadius; DD++) {
```

#### 909. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9616-L9618` → after: `L9616-L9618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9616-L9618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9616-L9618) · [Before (L9616-L9618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9616-L9618)

```diff
-                   if (fm.getOrGenerate(om, mm, am.g.WaterHeight) !== xm.p) continue;
-                   const hm = fm.getOrGenerate(om, mm, am.g.GroundHeight);
-                   if (Dm.d.isInCave(om, hm, mm, Am)) continue;
+                   if (wD.getOrGenerate(fD, DD, KD.h.WaterHeight) !== rD.n) continue;
+                   const pD = wD.getOrGenerate(fD, DD, KD.h.GroundHeight);
+                   if (cD.e.isInCave(fD, pD, DD, sD)) continue;
```

#### 910. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9620-L9621` → after: `L9620-L9621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9620-L9621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9620-L9621) · [Before (L9620-L9621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9620-L9621)

```diff
-                   if (Zm.e.isNearFixedPointPrefab(om, mm, im)) continue;
-                   const Om = new Em.k(`${om}${mm}${this.seed}treeHeight`),
+                   if (PD.b.isNearFixedPointPrefab(fD, DD, gD)) continue;
+                   const ID = new UD.g(`${fD}${DD}${this.seed}treeHeight`),
```

#### 911. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9627` → after: `L9627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9627) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9627) · [Before (L9627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9627)

```diff
-                   if (Ym === Rm.u.FallenLog) {
+                   if (BD === RD.p.FallenLog) {
```

#### 912. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9630` → after: `L9630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9630) · [Before (L9630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9630)

```diff
-                       if (fm.getOrGenerate(0 === jm ? om + Tm : om, 0 === jm ? mm : mm + Tm, am.g.GroundHeight) !== hm) {
+                       if (wD.getOrGenerate(0 === hD ? fD + zD : fD, 0 === hD ? DD : DD + zD, KD.h.GroundHeight) !== pD) {
```

#### 913. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9651-L9652` → after: `L9651-L9652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9651-L9652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9651-L9652) · [Before (L9651-L9652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9651-L9652)

```diff
-               am = null !== (fm = Am.minHeight) && void 0 !== fm ? fm : this.minTreeHeight,
-               xm = null !== (hm = Am.maxHeight) && void 0 !== hm ? hm : this.maxTreeHeight;
+               KD = null !== (wD = sD.minHeight) && void 0 !== wD ? wD : this.minTreeHeight,
+               rD = null !== (pD = sD.maxHeight) && void 0 !== pD ? pD : this.maxTreeHeight;
```

#### 914. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9667-L9668` → after: `L9667-L9668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9667-L9668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9667-L9668) · [Before (L9667-L9668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9667-L9668)

```diff
-               const Am = new Em.k(`${am.treeX}|${am.treeZ}|${am.trunkBase}|tree`);
-               if (am.treeType === Rm.u.Dead || am.treeType === Rm.u.FallenLog) {
+               const sD = new UD.g(`${KD.treeX}|${KD.treeZ}|${KD.trunkBase}|tree`);
+               if (KD.treeType === RD.p.Dead || KD.treeType === RD.p.FallenLog) {
```

#### 915. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9685` → after: `L9685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9685) · [Before (L9685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9685)

```diff
-                 Am >= Tm && Am < Tm + this.MO && am >= fm && am < fm + this.MO && wm >= hm && wm < hm + this.MO && mm.set(Am - Tm, am - fm, wm - hm, xm)
+                 sD >= zD && sD < zD + this.CI && KD >= wD && KD < wD + this.CI && LD >= pD && LD < pD + this.CI && DD.set(sD - zD, KD - wD, LD - pD, rD)
```

#### 916. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9687` → after: `L9687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9687) · [Before (L9687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9687)

```diff
-             if (Am.treeType === Rm.u.FallenLog) {
+             if (sD.treeType === RD.p.FallenLog) {
```

#### 917. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9689` → after: `L9689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9689) · [Before (L9689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9689)

```diff
-               for (let mm = -1; mm < pm - 1; mm++) Em(0 === Am.vineDir ? wm + mm : wm, im, 0 === Am.vineDir ? Dm : Dm + mm);
+               for (let DD = -1; DD < AD - 1; DD++) UD(0 === sD.vineDir ? LD + DD : LD, gD, 0 === sD.vineDir ? cD : cD + DD);
```

#### 918. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9714` → after: `L9714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9714) · [Before (L9714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9714)

```diff
-               Ym = Math.min(om, fm + this.MO - 1);
+               BD = Math.min(fD, wD + this.CI - 1);
```

#### 919. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9717` → after: `L9717`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9717) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9717) · [Before (L9717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9717)

```diff
-               jm = Math.min(xm + pm.radius, Tm + this.MO - 1);
+               hD = Math.min(rD + AD.radius, zD + this.CI - 1);
```

#### 920. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9720` → after: `L9720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9720) · [Before (L9720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9720)

```diff
-               Im = Math.min(wm + pm.radius, hm + this.MO - 1);
+               MD = Math.min(LD + AD.radius, pD + this.CI - 1);
```

#### 921. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9795` → after: `L9795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9795) · [Before (L9795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9795)

```diff
-               if (Ym !== oT.SOMETIMES) return void console.error(`Invalid canopy-generation type: ${Ym}`);
+               if (BD !== Uz.SOMETIMES) return void console.error(`Invalid canopy-generation type: ${BD}`);
```

#### 922. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9802-L9804` → after: `L9802-L9804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9802-L9804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9802-L9804) · [Before (L9802-L9804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9802-L9804)

```diff
-             const xm = Tm + this.MO,
-               wm = fm + this.MO,
-               Dm = hm + this.MO,
+             const rD = zD + this.CI,
+               LD = wD + this.CI,
+               cD = pD + this.CI,
```

#### 923. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9830` → after: `L9830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9830) · [Before (L9830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9830)

```diff
-             const Tm = this.MO >> 1,
+             const zD = this.CI >> 1,
```

#### 924. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9852` → after: `L9852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9852) · [Before (L9852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9852)

```diff
-         var qT = fm(39875);
+         var Bz = wD(39698);
```

#### 925. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9856` → after: `L9856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9856) · [Before (L9856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9856)

```diff
-             this.biomeSelector = mm, this.noWaterHeightmapGenerator = Tm, this.hydrology = fm, this.lakeRadiusNoiseModifier = am, this.seed = xm, this.needOutsideWaterDist = Dm, this.distApart = 64, this.minRadius = 14, this.maxRadius = 30, this.minGapFromHydrologyWater = 12, thi … [truncated]
+             this.biomeSelector = DD, this.noWaterHeightmapGenerator = zD, this.hydrology = wD, this.lakeRadiusNoiseModifier = KD, this.seed = rD, this.needOutsideWaterDist = cD, this.distApart = 64, this.minRadius = 14, this.maxRadius = 30, this.minGapFromHydrologyWater = 12, thi … [truncated]
```

#### 926. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9866` → after: `L9866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9866) · [Before (L9866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9866)

```diff
-               if ((0, hm.J)(pm, mm, Tm) > am) continue;
+               if ((0, pD.M)(AD, DD, zD) > KD) continue;
```

#### 927. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9870` → after: `L9870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9870) · [Before (L9870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9870)

```diff
-               const Am = (0, hm.I)(fm.origin, mm, Tm),
+               const sD = (0, pD.J)(wD.origin, DD, zD),
```

#### 928. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9887` → after: `L9887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9887) · [Before (L9887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9887)

```diff
-             if (!(0, Rm.H)(Tm)) return Tm.lake;
+             if (!(0, RD.B)(zD)) return zD.lake;
```

#### 929. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9900` → after: `L9900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9900) · [Before (L9900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9900)

```diff
-             } = this, am = new Em.k(`${mm[0]}|${mm[1]}${this.seed}oasisLake`), xm = this.hydrology.getHydrologyWaterGenInfo(mm[0], mm[1]), wm = Math.floor(xm.distFromWater - xm.waterRadius - Am);
+             } = this, KD = new UD.g(`${DD[0]}|${DD[1]}${this.seed}oasisLake`), rD = this.hydrology.getHydrologyWaterGenInfo(DD[0], DD[1]), LD = Math.floor(rD.distFromWater - rD.waterRadius - sD);
```

#### 930. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9920` → after: `L9920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9920) · [Before (L9920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9920)

```diff
-             this.biomeSelector = mm, this.noWaterHeightmapGenerator = Tm, this.needOutsideWaterBodyDist = xm, this.pm = Dm, this.gridSize = 224, this.cellCenterMaxOffset = void 0, this.maxRiverSettings = {
+             this.biomeSelector = DD, this.noWaterHeightmapGenerator = zD, this.needOutsideWaterBodyDist = rD, this.RD = cD, this.gridSize = 224, this.cellCenterMaxOffset = void 0, this.maxRiverSettings = {
```

#### 931. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9932` → after: `L9932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9932) · [Before (L9932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9932)

```diff
-             }, this.waterBodyInfos = void 0, this.scatteredLakes = void 0, KT || (KT = new qT.b("water cells", wm ? 800 : 60, 6e4)), this.waterBodyInfos = KT.partition();
+             }, this.waterBodyInfos = void 0, this.scatteredLakes = void 0, Mz || (Mz = new Bz.e("water cells", LD ? 800 : 60, 6e4)), this.waterBodyInfos = Mz.partition();
```

#### 932. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9940` → after: `L9940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9940) · [Before (L9940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9940)

```diff
-             }], `${fm}GlobalHeightmapOffset`), this.lakeRadiusNoiseAmplitude = (0, hm.A)(this.lakeRadiusNoiseModifier), this.scatteredLakes = new VT(mm, Tm, this, this.lakeRadiusNoiseModifier, fm, Am, xm, wm)
+             }], `${wD}GlobalHeightmapOffset`), this.lakeRadiusNoiseAmplitude = (0, pD.D)(this.lakeRadiusNoiseModifier), this.scatteredLakes = new hz(DD, zD, this, this.lakeRadiusNoiseModifier, wD, sD, rD, LD)
```

#### 933. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9944` → after: `L9944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9944) · [Before (L9944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9944)

```diff
-             if (!this.pm) return JT(this.needOutsideWaterBodyDist);
+             if (!this.RD) return Ez(this.needOutsideWaterBodyDist);
```

#### 934. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9948` → after: `L9948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9948) · [Before (L9948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9948)

```diff
-             return null === Am || nT(hm) <= nT(Am) ? hm : Am
+             return null === sD || Jz(pD) <= Jz(sD) ? pD : sD
```

#### 935. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9974` → after: `L9974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9974) · [Before (L9974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9974)

```diff
-                 Tp: mm,
+                 HR: DD,
```

#### 936. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9977` → after: `L9977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9977) · [Before (L9977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9977)

```diff
-               } = (0, hm.w)(fm, Am.origin, Am.downhill.origin);
+               } = (0, pD.A)(wD, sD.origin, sD.downhill.origin);
```

#### 937. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9989` → after: `L9989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9989) · [Before (L9989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9989)

```diff
-                 Tp: mm,
+                 HR: DD,
```

#### 938. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L9992` → after: `L9992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R9992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L9992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9992) · [Before (L9992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L9992)

```diff
-               } = (0, hm.w)(fm, Em.origin, Am.origin), Om = Math.floor(mm);
+               } = (0, pD.A)(wD, UD.origin, sD.origin), ID = Math.floor(DD);
```

#### 939. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10013` → after: `L10013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10013) · [Before (L10013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10013)

```diff
-                 xm *= am.lakeRadius / this.lakeSettings.maxRadius, Em = am.lakeRadius - xm, fm = (0, hm.I)(Am.origin, mm, Tm) - Em
+                 rD *= KD.lakeRadius / this.lakeSettings.maxRadius, UD = KD.lakeRadius - rD, wD = (0, pD.J)(sD.origin, DD, zD) - UD
```

#### 940. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10027` → after: `L10027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10027) · [Before (L10027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10027)

```diff
-                 const fm = (0, hm.I)(Am.origin, mm, Tm),
+                 const wD = (0, pD.J)(sD.origin, DD, zD),
```

#### 941. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10054` → after: `L10054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10054) · [Before (L10054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10054)

```diff
-             if (!(0, Rm.H)(fm)) return this.lastReadInfo.cellX = mm, this.lastReadInfo.cellZ = Tm, this.lastReadInfo.info = fm, fm;
+             if (!(0, RD.B)(wD)) return this.lastReadInfo.cellX = DD, this.lastReadInfo.cellZ = zD, this.lastReadInfo.info = wD, wD;
```

#### 942. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10118` → after: `L10118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10118) · [Before (L10118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10118)

```diff
-             return -1 !== Am ? hm : null
+             return -1 !== sD ? pD : null
```

#### 943. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10123` → after: `L10123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10123) · [Before (L10123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10123)

```diff
-               Am = new Em.k(`${mm}${Tm}${this.seed}riverCell`);
+               sD = new UD.g(`${DD}${zD}${this.seed}riverCell`);
```

#### 944. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10163-L10166` → after: `L10163-L10166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10163-L10166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10163-L10166) · [Before (L10163-L10166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10163-L10166)

```diff
-           rm: 40,
-           Dm: -85,
-           im: -85,
-           sm: .5
+           WD: 40,
+           LD: -85,
+           cD: -85,
+           ND: .5
```

#### 945. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10170-L10173` → after: `L10170-L10173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10170-L10173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10170-L10173) · [Before (L10170-L10173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10170-L10173)

```diff
-           rm: 13,
-           Dm: -100,
-           im: -85,
-           sm: .28
+           WD: 13,
+           LD: -100,
+           cD: -85,
+           ND: .28
```

#### 946. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10177-L10180` → after: `L10177-L10180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10177-L10180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10177-L10180) · [Before (L10177-L10180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10177-L10180)

```diff
-           rm: 10,
-           Dm: -100,
-           im: -75,
-           sm: .4
+           WD: 10,
+           LD: -100,
+           cD: -75,
+           ND: .4
```

#### 947. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10184-L10187` → after: `L10184-L10187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10184-L10187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10184-L10187) · [Before (L10184-L10187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10184-L10187)

```diff
-           rm: 5,
-           Dm: -80,
-           im: 15,
-           sm: .5
+           WD: 5,
+           LD: -80,
+           cD: 15,
+           ND: .5
```

#### 948. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10191-L10194` → after: `L10191-L10194`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10191-L10194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10191-L10194) · [Before (L10191-L10194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10191-L10194)

```diff
-           rm: 4,
-           Dm: -60,
-           im: 40,
-           sm: .5
+           WD: 4,
+           LD: -60,
+           cD: 40,
+           ND: .5
```

#### 949. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10198-L10199` → after: `L10198-L10199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10198-L10199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10198-L10199) · [Before (L10198-L10199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10198-L10199)

```diff
-             this.seed = Tm, this.MO = fm, this.ym = void 0, this.ym = hm.map((hm => {
-               const am = new Am.d("ore", hm.rm, !1, !0, `${Tm}${hm.blockName}`, 20, fm, null, !0);
+             this.seed = zD, this.CI = wD, this.iD = void 0, this.iD = pD.map((pD => {
+               const KD = new sD.c("ore", pD.WD, !1, !0, `${zD}${pD.blockName}`, 20, wD, null, !0);
```

#### 950. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10201` → after: `L10201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10201) · [Before (L10201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10201)

```diff
-                 jR: (0, Rm.B)(hm.blockName, mm),
+                 fR: (0, RD.w)(pD.blockName, DD),
```

#### 951. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10203-L10206` → after: `L10203-L10206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10203) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10203-L10206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10203-L10206) · [Before (L10203-L10206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10203-L10206)

```diff
-                 rm: hm.rm,
-                 Dm: hm.Dm,
-                 im: hm.im,
-                 sm: hm.sm,
+                 WD: pD.WD,
+                 LD: pD.LD,
+                 cD: pD.cD,
+                 ND: pD.ND,
```

#### 952. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10213-L10216` → after: `L10213-L10216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10213-L10216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10213-L10216) · [Before (L10213-L10216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10213-L10216)

```diff
-               Am = new Em.k(`${mm}${Tm}${this.seed}oreExists`);
-             for (const am of this.ym) {
-               const xm = am.pointGenerator.getPointsAroundPoint(mm + this.MO / 2, Tm + this.MO / 2),
-                 wm = mm + this.MO + am.radius,
+               sD = new UD.g(`${DD}${zD}${this.seed}oreExists`);
+             for (const KD of this.iD) {
+               const rD = KD.pointGenerator.getPointsAroundPoint(DD + this.CI / 2, zD + this.CI / 2),
+                 LD = DD + this.CI + KD.radius,
```

#### 953. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10218` → after: `L10218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10218) · [Before (L10218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10218)

```diff
-                 im = Tm + this.MO + am.radius,
+                 gD = zD + this.CI + KD.radius,
```

#### 954. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10222-L10223` → after: `L10222-L10223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10222-L10223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10222-L10223) · [Before (L10222-L10223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10222-L10223)

```diff
-                 const xm = new Em.k(`${pm[0]}${pm[1]}${this.seed}ore`),
-                   om = Math.floor(xm.next() * (am.im + 1 - am.Dm)) + am.Dm,
+                 const rD = new UD.g(`${AD[0]}${AD[1]}${this.seed}ore`),
+                   fD = Math.floor(rD.next() * (KD.cD + 1 - KD.LD)) + KD.LD,
```

#### 955. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10225` → after: `L10225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10225) · [Before (L10225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10225)

```diff
-                   Ym = Math.min(mm + this.MO - 1, pm[0] + am.radius),
+                   BD = Math.min(DD + this.CI - 1, AD[0] + KD.radius),
```

#### 956. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10227` → after: `L10227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10227) · [Before (L10227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10227)

```diff
-                   jm = Math.min(Tm + this.MO - 1, pm[1] + am.radius);
+                   hD = Math.min(zD + this.CI - 1, AD[1] + KD.radius);
```

#### 957. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10230` → after: `L10230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10230) · [Before (L10230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10230)

```diff
-                     (0, hm.D)(pm, mm, Tm) > am.radius || (Am.next() >= am.sm || fm.push(mm, om, Tm, am.jR))
+                     (0, pD.F)(AD, DD, zD) > KD.radius || (sD.next() >= KD.ND || wD.push(DD, fD, zD, KD.fR))
```

#### 958. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10237` → after: `L10237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10237) · [Before (L10237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10237)

```diff
-             const Dm = fm + this.MO,
+             const cD = wD + this.CI,
```

#### 959. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10244` → after: `L10244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10244) · [Before (L10244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10244)

```diff
-               if (im < xm.get(pm, Em, am.g.GroundHeight) - Am) {
+               if (gD < rD.get(AD, UD, KD.h.GroundHeight) - sD) {
```

#### 960. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10251` → after: `L10251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10251) · [Before (L10251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10251)

```diff
-         var ZT = fm(39880);
+         var Vz = wD(39701);
```

#### 961. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10261-L10262` → after: `L10261-L10262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10261-L10262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10261-L10262) · [Before (L10261-L10262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10261-L10262)

```diff
-             Km: fm,
-             Zm: hm,
+             OD: wD,
+             VD: pD,
```

#### 962. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10272` → after: `L10272`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10272) · [Before (L10272)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10272)

```diff
-           return fm.jm && hm.push({
+           return wD.hD && pD.push({
```

#### 963. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10274-L10275` → after: `L10274-L10275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10274-L10275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10274-L10275) · [Before (L10274-L10275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10274-L10275)

```diff
-             jR: mm[Tm].id
-           }), fm.Vm && hm.push({
+             fR: DD[zD].id
+           }), wD.nD && pD.push({
```

#### 964. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10277` → after: `L10277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10277) · [Before (L10277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10277)

```diff
-             jR: mm[`${Tm}|meta|rot2|side`].id
+             fR: DD[`${zD}|meta|rot2|side`].id
```

#### 965. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10280` → after: `L10280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10280) · [Before (L10280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10280)

```diff
-             jR: mm[`${Tm}|meta|rot4|side`].id
+             fR: DD[`${zD}|meta|rot4|side`].id
```

#### 966. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10283` → after: `L10283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10283) · [Before (L10283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10283)

```diff
-             jR: mm[`${Tm}|meta|rot1|side`].id
+             fR: DD[`${zD}|meta|rot1|side`].id
```

#### 967. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10286-L10287` → after: `L10286-L10287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10286-L10287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10286-L10287) · [Before (L10286-L10287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10286-L10287)

```diff
-             jR: mm[`${Tm}|meta|rot3|side`].id
-           }), fm.Im && hm.push({
+             fR: DD[`${zD}|meta|rot3|side`].id
+           }), wD.MD && pD.push({
```

#### 968. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10289` → after: `L10289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10289) · [Before (L10289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10289)

```diff
-             jR: mm[`${Tm}|meta|rot1|top`].id
+             fR: DD[`${zD}|meta|rot1|top`].id
```

#### 969. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10298-L10300` → after: `L10298-L10300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10298-L10300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10298-L10300) · [Before (L10298-L10300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10298-L10300)

```diff
-                 jm: !0,
-                 Vm: !0,
-                 Im: !0
+                 hD: !0,
+                 nD: !0,
+                 MD: !0
```

#### 970. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10303-L10306` → after: `L10303-L10306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10303-L10306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10303-L10306) · [Before (L10303-L10306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10303-L10306)

```diff
-               Qm: .8,
-               nm: 0,
-               Km: .12,
-               Zm: .25,
+               JD: .8,
+               ED: 0,
+               OD: .12,
+               VD: .25,
```

#### 971. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10312-L10314` → after: `L10312-L10314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10312-L10314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10312-L10314) · [Before (L10312-L10314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10312-L10314)

```diff
-                 jm: !0,
-                 Vm: !0,
-                 Im: !1
+                 hD: !0,
+                 nD: !0,
+                 MD: !1
```

#### 972. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10317-L10319` → after: `L10317-L10319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10317-L10319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10317-L10319) · [Before (L10317-L10319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10317-L10319)

```diff
-               Qm: .7,
-               nm: 2,
-               Km: .58
+               JD: .7,
+               ED: 2,
+               OD: .58
```

#### 973. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10322` → after: `L10322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10322) · [Before (L10322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10322)

```diff
-             const fm = Tm.Jm;
+             const wD = zD.QD;
```

#### 974. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10326-L10328` → after: `L10326-L10328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10326-L10328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10326-L10328) · [Before (L10326-L10328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10326-L10328)

```diff
-                 jm: Tm.jm,
-                 Vm: Tm.Vm,
-                 Im: Tm.Im
+                 hD: zD.hD,
+                 nD: zD.nD,
+                 MD: zD.MD
```

#### 975. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10331-L10336` → after: `L10331-L10336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10331-L10336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10331-L10336) · [Before (L10331-L10336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10331-L10336)

```diff
-               Qm: Tm.Qm,
-               nm: Tm.nm,
-               Km: Tm.Km,
-               Zm: null === fm || void 0 === fm ? void 0 : fm.Zm,
-               shallowClusterY: null === fm || void 0 === fm ? void 0 : fm.km,
-               deepClusterY: null === fm || void 0 === fm ? void 0 : fm.bm
+               JD: zD.JD,
+               ED: zD.ED,
+               OD: zD.OD,
+               VD: null === wD || void 0 === wD ? void 0 : wD.VD,
+               shallowClusterY: null === wD || void 0 === wD ? void 0 : wD.PD,
+               deepClusterY: null === wD || void 0 === wD ? void 0 : wD.CD
```

#### 976. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10355` → after: `L10355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10355) · [Before (L10355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10355)

```diff
-             const hm = this.heightmapVals.getOrGenerate(mm, Tm, am.g.GroundHeight) - this.surfaceMargin,
+             const pD = this.heightmapVals.getOrGenerate(DD, zD, KD.h.GroundHeight) - this.surfaceMargin,
```

#### 977. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10362` → after: `L10362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10362) · [Before (L10362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10362)

```diff
-               mm - am.floorY + 1 < Am || xm.push(mm === am.ceilingY ? am : {
+               DD - KD.floorY + 1 < sD || rD.push(DD === KD.ceilingY ? KD : {
```

#### 978. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10372` → after: `L10372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10372) · [Before (L10372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10372)

```diff
-             this.heightmapVals = mm, this.allCavesCache = void 0, this.decoratableCavesCache = void 0, this.allCavesCache = new hm.o(new yT(Tm)), this.decoratableCavesCache = new hm.o(new CT(Tm, mm, fm, Am))
+             this.heightmapVals = DD, this.allCavesCache = void 0, this.decoratableCavesCache = void 0, this.allCavesCache = new pD.p(new lz(zD)), this.decoratableCavesCache = new pD.p(new Wz(zD, DD, wD, sD))
```

#### 979. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10378` → after: `L10378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10378) · [Before (L10378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10378)

```diff
-             return this.heightmapVals.getOrGenerate(mm, Tm, am.g.GroundHeight)
+             return this.heightmapVals.getOrGenerate(DD, zD, KD.h.GroundHeight)
```

#### 980. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10397` → after: `L10397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10397) · [Before (L10397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10397)

```diff
-             sT(mm + Dm.offset[0], Tm + Dm.offset[1], fm + Dm.offset[2], am) && (Dm.offset === kT ? xm = Dm : wm.push(Dm))
+             Zz(DD + cD.offset[0], zD + cD.offset[1], wD + cD.offset[2], KD) && (cD.offset === Pz ? rD = cD : LD.push(cD))
```

#### 981. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10399` → after: `L10399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10399) · [Before (L10399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10399)

```diff
-           return null !== xm ? xm : 0 === wm.length ? null : wm[Math.floor(Am * wm.length)]
+           return null !== rD ? rD : 0 === LD.length ? null : LD[Math.floor(sD * LD.length)]
```

#### 982. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10404` → after: `L10404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10404) · [Before (L10404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10404)

```diff
-             this.MO = Tm, this.seed = fm, this.pointsGen = void 0, this.configs = void 0, this.maxHalfBox = void 0;
+             this.CI = zD, this.seed = wD, this.pointsGen = void 0, this.configs = void 0, this.maxHalfBox = void 0;
```

#### 983. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10410` → after: `L10410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10410) · [Before (L10410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10410)

```diff
-               if (!Number.isInteger(Am.clusterBoxSize) || Am.clusterBoxSize < 2 || Am.clusterBoxSize % 2 !== 0) throw new Error(`Decoration kind "${Am.seedPrefix}" has invalid clusterBoxSize (${Am.clusterBoxSize}); must be an even integer >= 2 (the 2x2x2-cell scatter scheme needs … [truncated]
+               if (!Number.isInteger(sD.clusterBoxSize) || sD.clusterBoxSize < 2 || sD.clusterBoxSize % 2 !== 0) throw new Error(`Decoration kind "${sD.seedPrefix}" has invalid clusterBoxSize (${sD.clusterBoxSize}); must be an even integer >= 2 (the 2x2x2-cell scatter scheme needs … [truncated]
```

#### 984. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10412` → after: `L10412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10412) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10412) · [Before (L10412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10412)

```diff
-               mm > xm && (xm = mm), wm += Math.max(Am.Km, null !== (Dm = Am.Zm) && void 0 !== Dm ? Dm : Am.Km)
+               DD > rD && (rD = DD), LD += Math.max(sD.OD, null !== (cD = sD.VD) && void 0 !== cD ? cD : sD.OD)
```

#### 985. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10414-L10415` → after: `L10414-L10415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10414-L10415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10414-L10415) · [Before (L10414-L10415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10414-L10415)

```diff
-             if (wm > 1) throw new Error(`Cave decoration cluster chances sum to ${wm} at peak depth; must not exceed 1 (later configs would be silently squeezed).`);
-             this.pointsGen = new Am.d("caveDeco", 10, !1, !0, fm, 4, Tm, null, !0), this.pointsGen.assertReachableFromChunkCentre(Tm, xm), this.configs = am, this.maxHalfBox = xm
+             if (LD > 1) throw new Error(`Cave decoration cluster chances sum to ${LD} at peak depth; must not exceed 1 (later configs would be silently squeezed).`);
+             this.pointsGen = new sD.c("caveDeco", 10, !1, !0, wD, 4, zD, null, !0), this.pointsGen.assertReachableFromChunkCentre(zD, rD), this.configs = KD, this.maxHalfBox = rD
```

#### 986. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10419` → after: `L10419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10419) · [Before (L10419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10419)

```diff
-               am = this.MO,
+               KD = this.CI,
```

#### 987. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10436` → after: `L10436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10436) · [Before (L10436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10436)

```diff
-             for (const wm of am) wm.y >= fm && wm.y < xm && mm.set(wm.x - Tm, wm.y - fm, wm.z - hm, wm.jR)
+             for (const LD of KD) LD.y >= wD && LD.y < rD && DD.set(LD.x - zD, LD.y - wD, LD.z - pD, LD.fR)
```

#### 988. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10441` → after: `L10441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10441) · [Before (L10441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10441)

```diff
-             const im = new Em.k(`${this.seed}|${mm}|${Tm}|cluster`),
+             const gD = new UD.g(`${this.seed}|${DD}|${zD}|cluster`),
```

#### 989. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10455` → after: `L10455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10455) · [Before (L10455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10455)

```diff
-             if (this.scatterClusterCells(mm, Ym, Tm, jm, xm, im, Vm), !(Vm.length < jm.nm))
+             if (this.scatterClusterCells(DD, BD, zD, hD, rD, gD, nD), !(nD.length < hD.ED))
```

#### 990. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10461` → after: `L10461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10461) · [Before (L10461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10461)

```diff
-               Qm: Dm,
+               JD: cD,
```

#### 991. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10481` → after: `L10481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10481) · [Before (L10481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10481)

```diff
-                     jR: Vm.jR
+                     fR: nD.fR
```

#### 992. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10495` → after: `L10495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10495) · [Before (L10495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10495)

```diff
-             this.prefabGenerator = hm, this.seed = void 0, this.MO = void 0, this.biomeSelector = void 0, this.treeGenerator = void 0, this.blockMetadata = void 0, this.oreGenerator = void 0, this.riverbedFeatureGenerator = void 0, this.bedrockId = void 0, this.waterId = void 0,  … [truncated]
+             this.prefabGenerator = pD, this.seed = void 0, this.CI = void 0, this.biomeSelector = void 0, this.treeGenerator = void 0, this.blockMetadata = void 0, this.oreGenerator = void 0, this.riverbedFeatureGenerator = void 0, this.bedrockId = void 0, this.waterId = void 0,  … [truncated]
```

#### 993. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10498` → after: `L10498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10498) · [Before (L10498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10498)

```diff
-             if (fm + this.MO <= xm.r.bedrockLevel) return {
+             if (wD + this.CI <= rD.q.bedrockLevel) return {
```

#### 994. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10501` → after: `L10501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10501) · [Before (L10501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10501)

```diff
-             const Im = new pm.c,
+             const MD = new AD.d,
```

#### 995. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10505-L10507` → after: `L10505-L10507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10505-L10507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10505-L10507) · [Before (L10505-L10507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10505-L10507)

```diff
-             if (Qm >= fm && Km < fm + this.MO)
-               for (let hm = Tm; hm < Tm + this.MO; hm++)
-                 for (let Dm = Am; Dm < Am + this.MO; Dm++) {
+             if (JD >= wD && OD < wD + this.CI)
+               for (let pD = zD; pD < zD + this.CI; pD++)
+                 for (let cD = sD; cD < sD + this.CI; cD++) {
```

#### 996. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10510-L10512` → after: `L10510-L10512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10510-L10512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10510-L10512) · [Before (L10510-L10512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10510-L10512)

```diff
-                     pm = wm.get(hm, Dm, am.g.GroundHeight);
-                   if (pm >= fm && pm < fm + this.MO) {
-                     const im = wm.get(hm, Dm, am.g.IsLake) === xm.h ? Rm.getDryBedBlock(hm, pm, Dm) : Rm.getTopsoilBlock(hm, pm, Dm);
+                     AD = LD.get(pD, cD, KD.h.GroundHeight);
+                   if (AD >= wD && AD < wD + this.CI) {
+                     const gD = LD.get(pD, cD, KD.h.IsLake) === rD.h ? RD.getDryBedBlock(pD, AD, cD) : RD.getTopsoilBlock(pD, AD, cD);
```

#### 997. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10516-L10518` → after: `L10516-L10518`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10516-L10518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10516-L10518) · [Before (L10516-L10518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10516-L10518)

```diff
-             if (Qm + 1 >= fm && Km - 4 < fm + this.MO)
-               for (let hm = Tm; hm < Tm + this.MO; hm++)
-                 for (let xm = Am; xm < Am + this.MO; xm++) {
+             if (JD + 1 >= wD && OD - 4 < wD + this.CI)
+               for (let pD = zD; pD < zD + this.CI; pD++)
+                 for (let rD = sD; rD < sD + this.CI; rD++) {
```

#### 998. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10521-L10522` → after: `L10521-L10522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10521-L10522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10521-L10522) · [Before (L10521-L10522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10521-L10522)

```diff
-                     Rm = wm.get(hm, xm, am.g.GroundHeight),
-                     pm = Math.min(Rm, fm + this.MO);
+                     RD = LD.get(pD, rD, KD.h.GroundHeight),
+                     AD = Math.min(RD, wD + this.CI);
```

#### 999. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10530-L10531` → after: `L10530-L10531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10530-L10531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10530-L10531) · [Before (L10530-L10531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10530-L10531)

```diff
-               for (let fm = Math.max(Am - 4, 0); fm < Math.min(Am, this.MO); fm++) mm.set(Tm, fm, am, this.dirtId);
-               Am >= 0 && Am < this.MO && mm.set(Tm, Am, am, this.grassBlockId)
+               for (let wD = Math.max(sD - 4, 0); wD < Math.min(sD, this.CI); wD++) DD.set(zD, wD, KD, this.dirtId);
+               sD >= 0 && sD < this.CI && DD.set(zD, sD, KD, this.grassBlockId)
```

#### 1000. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10535-L10536` → after: `L10535-L10536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10535-L10536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10535-L10536) · [Before (L10535-L10536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10535-L10536)

```diff
-               for (let xm = Tm; xm < Tm + this.MO; xm++)
-                 for (let Dm = Am; Dm < Am + this.MO; Dm++) {
+               for (let rD = zD; rD < zD + this.CI; rD++)
+                 for (let cD = sD; cD < sD + this.CI; cD++) {
```

#### 1001. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10538-L10539` → after: `L10538-L10539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10538-L10539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10538-L10539) · [Before (L10538-L10539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10538-L10539)

```diff
-                     Rm = wm.get(xm, Dm, am.g.GroundHeight),
-                     pm = Math.min(Rm - 4, fm + this.MO),
+                     RD = LD.get(rD, cD, KD.h.GroundHeight),
+                     AD = Math.min(RD - 4, wD + this.CI),
```

#### 1002. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10544` → after: `L10544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10544) · [Before (L10544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10544)

```diff
-                     mm.set(xm - Tm, hm - fm, Dm - Am, 0 !== am ? am : im)
+                     DD.set(rD - zD, pD - wD, cD - sD, 0 !== KD ? KD : gD)
```

#### 1003. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10548-L10550` → after: `L10548-L10550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10548-L10550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10548-L10550) · [Before (L10548-L10550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10548-L10550)

```diff
-             if (Qm - 4 >= fm && this.oreGenerator.addOresToChunk(mm, Tm, fm, Am, 4, wm, Om), Qm >= fm && (Dm.d.addCavesToChunk(mm, Tm, fm, Am, wm, om), MT.addCaveDecorationsToChunk(mm, Tm, fm, Am, this.MO, jm)), xm.r.bedrockLevel >= fm && xm.r.bedrockLevel < fm + this.MO)
-               for (let hm = Tm; hm < Tm + this.MO; hm++)
-                 for (let am = Am; am < Am + this.MO; am++) mm.set(hm - Tm, xm.r.bedrockLevel - fm, am - Am, this.bedrockId);
+             if (JD - 4 >= wD && this.oreGenerator.addOresToChunk(DD, zD, wD, sD, 4, LD, ID), JD >= wD && (cD.e.addCavesToChunk(DD, zD, wD, sD, LD, fD), kz.addCaveDecorationsToChunk(DD, zD, wD, sD, this.CI, hD)), rD.q.bedrockLevel >= wD && rD.q.bedrockLevel < wD + this.CI)
+               for (let pD = zD; pD < zD + this.CI; pD++)
+                 for (let KD = sD; KD < sD + this.CI; KD++) DD.set(pD - zD, rD.q.bedrockLevel - wD, KD - sD, this.bedrockId);
```

#### 1004. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10553-L10555` → after: `L10553-L10555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10553-L10555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10553-L10555) · [Before (L10553-L10555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10553-L10555)

```diff
-               for (let am = Tm; am < Tm + this.MO; am++)
-                 for (let xm = fm; xm < fm + this.MO; xm++)
-                   for (let wm = Am; wm < Am + this.MO; wm++) {
+               for (let KD = zD; KD < zD + this.CI; KD++)
+                 for (let rD = wD; rD < wD + this.CI; rD++)
+                   for (let LD = sD; LD < sD + this.CI; LD++) {
```

#### 1005. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10566-L10567` → after: `L10566-L10567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10566-L10567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10566-L10567) · [Before (L10566-L10567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10566-L10567)

```diff
-               for (let fm = Math.max(am, 0); fm < Math.min(xm, this.MO); fm++) mm.set(Tm, fm, Am, this.waterId);
-               xm >= 0 && xm < this.MO && mm.set(Tm, xm, Am, cm[hm + 4])
+               for (let wD = Math.max(KD, 0); wD < Math.min(rD, this.CI); wD++) DD.set(zD, wD, sD, this.waterId);
+               rD >= 0 && rD < this.CI && DD.set(zD, rD, sD, XD[pD + 4])
```

#### 1006. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10570-L10575` → after: `L10570-L10575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10570-L10575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10570-L10575) · [Before (L10570-L10575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10570-L10575)

```diff
-             if (this.addSurfaceBlocks(mm, fm, Vm.lilyPads), nm && Qm >= fm && Km < fm + this.MO)
-               for (let Dm = Tm; Dm < Tm + this.MO; Dm++)
-                 for (let im = Am; im < Am + this.MO; im++) {
-                   const Rm = wm.get(Dm, im, am.g.WaterHeight),
-                     pm = wm.get(Dm, im, am.g.GroundHeight);
-                   if (Rm !== xm.p && pm >= fm && pm < fm + this.MO)
+             if (this.addSurfaceBlocks(DD, wD, nD.lilyPads), ED && JD >= wD && OD < wD + this.CI)
+               for (let cD = zD; cD < zD + this.CI; cD++)
+                 for (let gD = sD; gD < sD + this.CI; gD++) {
+                   const RD = LD.get(cD, gD, KD.h.WaterHeight),
+                     AD = LD.get(cD, gD, KD.h.GroundHeight);
+                   if (RD !== rD.n && AD >= wD && AD < wD + this.CI)
```

#### 1007. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10579` → after: `L10579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10579) · [Before (L10579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10579)

```diff
-                       if ((0, hm.J)(am, Dm, im) < 100) zm === am[0] && km === am[1] || (zm = am[0], km = am[1], bm = new Em.k(`${this.seed}${zm}${km}`).next() < .3 ? this.chalkId : this.clayId), mm.set(Dm - Tm, pm - fm, im - Am, bm), pm - 1 >= fm && mm.set(Dm - Tm, pm - 1 - fm, i … [truncated]
+                       if ((0, pD.M)(KD, cD, gD) < 100) VD === KD[0] && CD === KD[1] || (VD = KD[0], CD = KD[1], xD = new UD.g(`${this.seed}${VD}${CD}`).next() < .3 ? this.chalkId : this.clayId), DD.set(cD - zD, AD - wD, gD - sD, xD), AD - 1 >= wD && DD.set(cD - zD, AD - 1 - wD, g … [truncated]
```

#### 1008. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10588-L10591` → after: `L10588-L10591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10588) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10588-L10591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10588-L10591) · [Before (L10588-L10591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10588-L10591)

```diff
-               for (let am = Tm; am < Tm + this.MO; am++)
-                 for (let xm = fm; xm < fm + this.MO; xm++)
-                   for (let wm = Am; wm < Am + this.MO; wm++) {
-                     const Dm = Zm.e.getBlockFromFixedPointPrefab(am, xm, wm, hm);
+               for (let KD = zD; KD < zD + this.CI; KD++)
+                 for (let rD = wD; rD < wD + this.CI; rD++)
+                   for (let LD = sD; LD < sD + this.CI; LD++) {
+                     const cD = PD.b.getBlockFromFixedPointPrefab(KD, rD, LD, pD);
```

#### 1009. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10612` → after: `L10612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10612) · [Before (L10612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10612)

```diff
-               Am >= 0 && Am < this.MO && mm.set(fm[hm], Am, fm[hm + 2], fm[hm + 3])
+               sD >= 0 && sD < this.CI && DD.set(wD[pD], sD, wD[pD + 2], wD[pD + 3])
```

#### 1010. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10626` → after: `L10626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10626) · [Before (L10626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10626)

```diff
-             this.MO = mm, this.biomeSelector = Tm, this.seed = fm, this.random = new Em.k(""), this.lilyPadId = void 0, this.lilyPadId = hm["Lily Pad"].id
+             this.CI = DD, this.biomeSelector = zD, this.seed = wD, this.random = new UD.g(""), this.lilyPadId = void 0, this.lilyPadId = pD["Lily Pad"].id
```

#### 1011. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10636-L10637` → after: `L10636-L10637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10636-L10637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10636-L10637) · [Before (L10636-L10637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10636-L10637)

```diff
-             for (let qm = mm; qm < mm + this.MO; qm++)
-               for (let jm = Tm; jm < Tm + this.MO; jm++) {
+             for (let GD = DD; GD < DD + this.CI; GD++)
+               for (let hD = zD; hD < zD + this.CI; hD++) {
```

#### 1012. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10639-L10640` → after: `L10639-L10640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10639-L10640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10639-L10640) · [Before (L10639-L10640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10639-L10640)

```diff
-                   Im = fm.getOrGenerate(qm, jm, am.g.GroundHeight),
-                   Km = fm.getOrGenerate(qm, jm, am.g.WaterHeight);
+                   MD = wD.getOrGenerate(GD, hD, KD.h.GroundHeight),
+                   OD = wD.getOrGenerate(GD, hD, KD.h.WaterHeight);
```

#### 1013. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10644-L10645` → after: `L10644-L10645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10644-L10645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10644-L10645) · [Before (L10644-L10645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10644-L10645)

```diff
-                 if (Km !== xm.p) {
-                   Ym = !0, Im < Km && im.push(Qm, nm, Im + 1, Km, Vm.topwaterBlockType), Vm.hasScatteredLakes && 1 === fm.getOrGenerate(qm, jm, am.g.IsLake) && (this.random.reseed(`${qm}|${jm}|${this.seed}lilyPad`), this.random.next() < .08 && this.isInsideWater(qm, jm, fm) && pm … [truncated]
+                 if (OD !== rD.n) {
+                   BD = !0, MD < OD && gD.push(JD, ED, MD + 1, OD, nD.topwaterBlockType), nD.hasScatteredLakes && 1 === wD.getOrGenerate(GD, hD, KD.h.IsLake) && (this.random.reseed(`${GD}|${hD}|${this.seed}lilyPad`), this.random.next() < .08 && this.isInsideWater(GD, hD, wD) && AD … [truncated]
```

#### 1014. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10649-L10650` → after: `L10649-L10650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10649-L10650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10649-L10650) · [Before (L10649-L10650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10649-L10650)

```diff
-                 if (Vm.hasScatteredLakes && this.isBesideLake(qm, jm, fm) && (this.random.reseed(`${qm}|${jm}|${this.seed}oasisShore`), this.random.next() < .85 && (Rm.push(Qm, Im, nm), Jm = this.biomeSelector.baseBiome.floraGenerator)), !Dm.d.isInCave(qm, Im, jm, hm) && !Zm.e.is … [truncated]
-                   for (let fm = Im + 1; fm <= Im + Vm.maxFloraHeight; fm += this.MO) Em.startY = fm, Jm.addBiomeFloraToColumn(Em, mm, Tm, qm, fm, jm, Im)
+                 if (nD.hasScatteredLakes && this.isBesideLake(GD, hD, wD) && (this.random.reseed(`${GD}|${hD}|${this.seed}oasisShore`), this.random.next() < .85 && (RD.push(JD, MD, ED), QD = this.biomeSelector.baseBiome.floraGenerator)), !cD.e.isInCave(GD, MD, hD, pD) && !PD.b.is … [truncated]
+                   for (let wD = MD + 1; wD <= MD + nD.maxFloraHeight; wD += this.CI) UD.startY = wD, QD.addBiomeFloraToColumn(UD, DD, zD, GD, wD, hD, MD)
```

#### 1015. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10663` → after: `L10663`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10663) · [Before (L10663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10663)

```diff
-             return fm.getOrGenerate(mm + 1, Tm, am.g.WaterHeight) !== xm.p && fm.getOrGenerate(mm - 1, Tm, am.g.WaterHeight) !== xm.p && fm.getOrGenerate(mm, Tm + 1, am.g.WaterHeight) !== xm.p && fm.getOrGenerate(mm, Tm - 1, am.g.WaterHeight) !== xm.p
+             return wD.getOrGenerate(DD + 1, zD, KD.h.WaterHeight) !== rD.n && wD.getOrGenerate(DD - 1, zD, KD.h.WaterHeight) !== rD.n && wD.getOrGenerate(DD, zD + 1, KD.h.WaterHeight) !== rD.n && wD.getOrGenerate(DD, zD - 1, KD.h.WaterHeight) !== rD.n
```

#### 1016. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10669` → after: `L10669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10669) · [Before (L10669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10669)

```diff
-             return fm.getOrGenerate(mm, Tm, am.g.WaterHeight) !== xm.p && 1 === fm.getOrGenerate(mm, Tm, am.g.IsLake)
+             return wD.getOrGenerate(DD, zD, KD.h.WaterHeight) !== rD.n && 1 === wD.getOrGenerate(DD, zD, KD.h.IsLake)
```

#### 1017. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10672` → after: `L10672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10672) · [Before (L10672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10672)

```diff
-         var tT = fm(39797);
+         var uz = wD(39616);
```

#### 1018. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10677` → after: `L10677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10677) · [Before (L10677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10677)

```diff
-             if (this.MO = mm, this.hashChunkContents = pm, this.maxTreeRadius = 3, this.prefabSize = 40, this.maxPrefabGroundingRadius = 4, this.treeGenerator = void 0, this.prefabGenerator = void 0, this.caveGenerator = void 0, this.caveDecorationGenerator = void 0, this.biomeSe … [truncated]
+             if (this.CI = DD, this.hashChunkContents = AD, this.maxTreeRadius = 3, this.prefabSize = 40, this.maxPrefabGroundingRadius = 4, this.treeGenerator = void 0, this.prefabGenerator = void 0, this.caveGenerator = void 0, this.caveDecorationGenerator = void 0, this.biomeSe … [truncated]
```

#### 1019. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10679` → after: `L10679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10679) · [Before (L10679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10679)

```diff
-               UT = new qT.b("chunk columns", mm, 4e4)
+               vz = new Bz.e("chunk columns", DD, 4e4)
```

#### 1020. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10681-L10682` → after: `L10681-L10682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10681-L10682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10681-L10682) · [Before (L10681-L10682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10681-L10682)

```diff
-             this.chunkColumnInfos = UT.partition(), this.caveGenerator = new Dm.d(Am, mm, Tm, null !== (Em = null === im || void 0 === im ? void 0 : im.Em.Om) && void 0 !== Em ? Em : "Lava");
-             const Im = new zT(Tm, Am, mm, null !== (om = null === im || void 0 === im ? void 0 : im.ym) && void 0 !== om ? om : [...cT, ...null !== (Om = null === Rm || void 0 === Rm ? void 0 : Rm.Lm) && void 0 !== Om ? Om : []]),
+             this.chunkColumnInfos = vz.partition(), this.caveGenerator = new cD.e(sD, DD, zD, null !== (UD = null === gD || void 0 === gD ? void 0 : gD.AD.fD) && void 0 !== UD ? UD : "Lava");
+             const MD = new Xz(zD, sD, DD, null !== (fD = null === gD || void 0 === gD ? void 0 : gD.iD) && void 0 !== fD ? fD : [...Qz, ...null !== (ID = null === RD || void 0 === RD ? void 0 : RD.eD) && void 0 !== ID ? ID : []]),
```

#### 1021. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10684` → after: `L10684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10684) · [Before (L10684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10684)

```diff
-                 MO: mm,
+                 CI: DD,
```

#### 1022. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10692-L10695` → after: `L10692-L10695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10692) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10692-L10695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10692-L10695) · [Before (L10692-L10695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10692-L10695)

```diff
-               Qm = null !== (Ym = null === im || void 0 === im ? void 0 : im.Sm) && void 0 !== Ym ? Ym : null,
-               nm = null !== (qm = null === Rm || void 0 === Rm ? void 0 : Rm.buildBiomes) && void 0 !== qm ? qm : null,
-               Jm = null !== Qm ? (0, ZT.d)(Qm, Km) : null !== nm ? this.buildTerrainBiomes(nm, Km) : (0, ZT.e)(Km);
-             this.biomeSelector = new ZT.c(this, Im, Am, mm, Tm, Jm), this.treeGenerator = new OT(this, this.biomeSelector, mm, Am, Tm), this.fixedPointPrefabTracker = new Zm.e(wm, mm), this.prefabGenerator = new aT({
+               JD = null !== (BD = null === gD || void 0 === gD ? void 0 : gD.xD) && void 0 !== BD ? BD : null,
+               ED = null !== (GD = null === RD || void 0 === RD ? void 0 : RD.buildBiomes) && void 0 !== GD ? GD : null,
+               QD = null !== JD ? (0, Vz.e)(JD, OD) : null !== ED ? this.buildTerrainBiomes(ED, OD) : (0, Vz.i)(OD);
+             this.biomeSelector = new Vz.d(this, MD, sD, DD, zD, QD), this.treeGenerator = new fz(this, this.biomeSelector, DD, sD, zD), this.fixedPointPrefabTracker = new PD.b(LD, DD), this.prefabGenerator = new sz({
```

#### 1023. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10697` → after: `L10697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10697) · [Before (L10697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10697)

```diff
-               MO: mm,
+               CI: DD,
```

#### 1024. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10701` → after: `L10701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10701) · [Before (L10701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10701)

```diff
-                 [am.n.SURFACE]: {
+                 [KD.o.SURFACE]: {
```

#### 1025. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10703` → after: `L10703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10703) · [Before (L10703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10703)

```diff
-                     [am.m.MEDIUM]: {
+                     [KD.l.MEDIUM]: {
```

#### 1026. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10706` → after: `L10706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10706) · [Before (L10706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10706)

```diff
-                     [am.m.HIGH]: {
+                     [KD.l.HIGH]: {
```

#### 1027. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10709` → after: `L10709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10709) · [Before (L10709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10709)

```diff
-                     [am.m.VERY_HIGH]: {
+                     [KD.l.VERY_HIGH]: {
```

#### 1028. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10714` → after: `L10714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10714) · [Before (L10714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10714)

```diff
-                 [am.n.UNDERGROUND]: {
+                 [KD.o.UNDERGROUND]: {
```

#### 1029. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10716` → after: `L10716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10716) · [Before (L10716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10716)

```diff
-                     [am.m.MEDIUM]: {
+                     [KD.l.MEDIUM]: {
```

#### 1030. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10719-L10720` → after: `L10719-L10720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10719-L10720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10719-L10720) · [Before (L10719-L10720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10719-L10720)

```diff
-                     [am.m.HIGH]: null,
-                     [am.m.VERY_HIGH]: null
+                     [KD.l.HIGH]: null,
+                     [KD.l.VERY_HIGH]: null
```

#### 1031. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10725` → after: `L10725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10725) · [Before (L10725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10725)

```diff
-             }), this.noWaterHeightmapGenerator = new tT.e((0, tT.g)(Am)), this.heightmapPerturb = new hm.j([{
+             }), this.noWaterHeightmapGenerator = new uz.e((0, uz.i)(sD)), this.heightmapPerturb = new pD.j([{
```

#### 1032. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10734` → after: `L10734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10734) · [Before (L10734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10734)

```diff
-             }], `${Am}HeightmapPerturb`);
+             }], `${sD}HeightmapPerturb`);
```

#### 1033. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10740` → after: `L10740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10740) · [Before (L10740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10740)

```diff
-             this.waterBodyGenerator = new QT(this.biomeSelector, this.noWaterHeightmapGenerator, Am, mm, cm, this.needOutsideWaterDist, xm, null === (jm = null === im || void 0 === im ? void 0 : im.pm) || void 0 === jm || jm), this.caveDecorationGenerator = new MT(Tm, mm, Am, nul … [truncated]
+             this.waterBodyGenerator = new Oz(this.biomeSelector, this.noWaterHeightmapGenerator, sD, DD, XD, this.needOutsideWaterDist, rD, null === (hD = null === gD || void 0 === gD ? void 0 : gD.RD) || void 0 === hD || hD), this.caveDecorationGenerator = new kz(zD, DD, sD, nul … [truncated]
```

#### 1034. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10759` → after: `L10759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10759) · [Before (L10759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10759)

```diff
-             const fm = this.MO,
+             const wD = this.CI,
```

#### 1035. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10777` → after: `L10777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10777) · [Before (L10777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10777)

```diff
-               if ((null !== (Am = hm.get(am.key)) && void 0 !== Am ? Am : am) !== am) throw new Error(`A world-gen terrain built two biomes keyed "${am.key}"`);
+               if ((null !== (sD = pD.get(KD.key)) && void 0 !== sD ? sD : KD) !== KD) throw new Error(`A world-gen terrain built two biomes keyed "${KD.key}"`);
```

#### 1036. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10787-L10788` → after: `L10787-L10788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10787-L10788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10787-L10788) · [Before (L10787-L10788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10787-L10788)

```diff
-               const mm = `${Math.floor(Dm.x/this.MO)}|${Math.floor(Dm.z/this.MO)}`,
-                 Tm = null !== (xm = am.get(mm)) && void 0 !== xm ? xm : [];
+               const DD = `${Math.floor(cD.x/this.CI)}|${Math.floor(cD.z/this.CI)}`,
+                 zD = null !== (rD = KD.get(DD)) && void 0 !== rD ? rD : [];
```

#### 1037. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10793-L10794` → after: `L10793-L10794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10793) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10793-L10794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10793-L10794) · [Before (L10793-L10794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10793-L10794)

```diff
-               const mm = Math.floor(Dm[0].x / this.MO) * this.MO,
-                 Tm = Math.floor(Dm[0].z / this.MO) * this.MO,
+               const DD = Math.floor(cD[0].x / this.CI) * this.CI,
+                 zD = Math.floor(cD[0].z / this.CI) * this.CI,
```

#### 1038. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10815` → after: `L10815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10815) · [Before (L10815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10815)

```diff
-                   Am: im.prefab.name
+                   pD: gD.prefab.name
```

#### 1039. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10848` → after: `L10848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10848) · [Before (L10848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10848)

```diff
-               Rm = hm.getOrGenerate(mm + Math.floor(this.MO / 2), Tm + Math.floor(this.MO / 2))[0].biome.oreGenerator.getOreBlocksForChunk(mm, Tm),
+               RD = pD.getOrGenerate(DD + Math.floor(this.CI / 2), zD + Math.floor(this.CI / 2))[0].biome.oreGenerator.getOreBlocksForChunk(DD, zD),
```

#### 1040. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10866` → after: `L10866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10866) · [Before (L10866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10866)

```diff
-             return hm.q.create(this.MO, [mm, Tm], this.biomeSelector)
+             return pD.t.create(this.CI, [DD, zD], this.biomeSelector)
```

#### 1041. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10869-L10870` → after: `L10869-L10870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10869-L10870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10869-L10870) · [Before (L10869-L10870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10869-L10870)

```diff
-             const xm = new tT.d(fm, Am, this.noWaterHeightmapGenerator, this.heightmapPerturb, this.waterBodyGenerator);
-             return hm.p.create(this.MO, [mm, Tm], am.g.NumFields, xm)
+             const rD = new uz.b(wD, sD, this.noWaterHeightmapGenerator, this.heightmapPerturb, this.waterBodyGenerator);
+             return pD.r.create(this.CI, [DD, zD], KD.h.NumFields, rD)
```

#### 1042. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10874` → after: `L10874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10874) · [Before (L10874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10874)

```diff
-       39802: (mm, Tm, fm) => {
+       39625: (DD, zD, wD) => {
```

#### 1043. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10876-L10877` → after: `L10876-L10877`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10876-L10877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10876-L10877) · [Before (L10876-L10877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10876-L10877)

```diff
-           b: () => rm,
-           f: () => zm,
+           e: () => ZD,
+           i: () => VD,
```

#### 1044. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10879-L10880` → after: `L10879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10879) · [Before (L10879-L10880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10879-L10880)

```diff
-           k: () => cm,
-           o: () => em,
+           m: () => XD,
```

#### 1045. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10882` → after: `L10881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10881) · [Before (L10882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10882)

```diff
-           q: () => Sm,
+           r: () => iD,
```

#### 1046. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10887-L10889` → after: `L10886-L10889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10886-L10889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10886-L10889) · [Before (L10887-L10889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10887-L10889)

```diff
-           H: () => Qm,
-           I: () => Vm,
-           J: () => jm
+           F: () => BD,
+           G: () => JD,
+           J: () => nD,
+           M: () => hD
```

#### 1047. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L10904` → after: `L10904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R10904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L10904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10904) · [Before (L10904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L10904)

```diff
-             const Tm = "function" == typeof mm ? mm : function(mm) {
+             const zD = "function" == typeof DD ? DD : function(DD) {
```

#### 1048. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11113` → after: `L11113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11113) · [Before (L11113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11113)

```diff
-         var Om = fm(39805);
+         var ID = wD(39633);
```

#### 1049. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11142` → after: `L11142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11142) · [Before (L11142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11142)

```diff
-             Tp: Vm(mm, am, xm),
+             HR: nD(DD, KD, rD),
```

#### 1050. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11173` → after: `L11173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11173) · [Before (L11173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11173)

```diff
-             for (let fm = 0; fm < mm.length; fm++) this._simplexes.push(new om(`${Tm}${fm}`))
+             for (let wD = 0; wD < DD.length; wD++) this._simplexes.push(new fD(`${zD}${wD}`))
```

#### 1051. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11198` → after: `L11198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11198) · [Before (L11198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11198)

```diff
-             for (let Am = 0; Am < mm.length; Am++) this._simplexes.push(new om(`${fm}${Am}`));
+             for (let sD = 0; sD < DD.length; sD++) this._simplexes.push(new fD(`${wD}${sD}`));
```

#### 1052. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11334` → after: `L11334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11334) · [Before (L11334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11334)

```diff
-             if (void 0 === hm) throw new Error(`Number not found for x=${mm}, z=${Tm}, thirdIndex=${fm}`);
+             if (void 0 === pD) throw new Error(`Number not found for x=${DD}, z=${zD}, thirdIndex=${wD}`);
```

#### 1053. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11383` → after: `L11383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11383) · [Before (L11383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11383)

```diff
-             if (void 0 === Am) throw new Error(`Number not found for x=${mm}, z=${Tm}, thirdIndex=${fm}, fourthIndex=${hm}`);
+             if (void 0 === sD) throw new Error(`Number not found for x=${DD}, z=${zD}, thirdIndex=${wD}, fourthIndex=${pD}`);
```

#### 1054. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11413` → after: `L11413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11413) · [Before (L11413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11413)

```diff
-       39805: (mm, Tm, fm) => {
+       39633: (DD, zD, wD) => {
```

#### 1055. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11419-L11421` → after: `L11419-L11421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11419-L11421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11419-L11421) · [Before (L11419-L11421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11419-L11421)

```diff
-           o: () => wm,
-           p: () => Am,
-           r: () => hm
+           m: () => LD,
+           n: () => sD,
+           q: () => pD
```

#### 1056. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11434` → after: `L11434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11434) · [Before (L11434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11434)

```diff
-       39812: (mm, Tm, fm) => {
+       39635: (DD, zD, wD) => {
```

#### 1057. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11437-L11440` → after: `L11437-L11440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11437-L11440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11437-L11440) · [Before (L11437-L11440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11437-L11440)

```diff
-           g: () => hm,
-           j: () => Dm,
-           m: () => wm,
-           n: () => xm,
+           h: () => pD,
+           k: () => cD,
+           l: () => LD,
+           o: () => rD,
```

#### 1058. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11460` → after: `L11460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11460) · [Before (L11460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11460)

```diff
-       4184: (mm, Tm, fm) => {
+       4263: (DD, zD, wD) => {
```

#### 1059. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11463` → after: `L11464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11464) · [Before (L11463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11463)

```diff
-           i: () => am,
+           g: () => pD,
```

#### 1060. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11465-L11467` → after: `L11466-L11467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11466-L11467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11466-L11467) · [Before (L11465-L11467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11465-L11467)

```diff
-           m: () => wm,
-           n: () => xm,
-           o: () => Am
+           l: () => rD,
+           n: () => sD
```

#### 1061. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11493` → after: `L11493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11493) · [Before (L11493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11493)

```diff
-             if (this.distribution = void 0, mm.length <= 0) throw new Error(`Distribution must have at least one item: ${JSON.stringify(mm)}`);
+             if (this.distribution = void 0, DD.length <= 0) throw new Error(`Distribution must have at least one item: ${JSON.stringify(DD)}`);
```

#### 1062. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11498` → after: `L11498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11498) · [Before (L11498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11498)

```diff
-               if (Tm.has(hm)) throw new Error(`Values must be unique: ${JSON.stringify(mm)}`);
+               if (zD.has(pD)) throw new Error(`Values must be unique: ${JSON.stringify(DD)}`);
```

#### 1063. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11501` → after: `L11501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11501) · [Before (L11501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11501)

```diff
-               if (am <= 0) throw new Error(`Weights must be positive: ${JSON.stringify(mm)}`);
+               if (KD <= 0) throw new Error(`Weights must be positive: ${JSON.stringify(DD)}`);
```

#### 1064. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11526` → after: `L11526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11526) · [Before (L11526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11526)

```diff
-             if (this.offset = void 0, this.multiplier = void 0, mm > Tm) throw new Error(`Min must be less than or equal to Max, but Min=${mm} and Max=${Tm}`);
+             if (this.offset = void 0, this.multiplier = void 0, DD > zD) throw new Error(`Min must be less than or equal to Max, but Min=${DD} and Max=${zD}`);
```

#### 1065. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11536` → after: `L11536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11536) · [Before (L11536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11536)

```diff
-             if (this.uniformRealDistribution = void 0, this.uniformRealDistribution = new xm(mm, Tm, fm), !Number.isInteger(mm) || !Number.isInteger(Tm)) throw new Error(`Min and Max must be integers, but Min=${mm} and Max=${Tm}`)
+             if (this.uniformRealDistribution = void 0, this.uniformRealDistribution = new rD(DD, zD, wD), !Number.isInteger(DD) || !Number.isInteger(zD)) throw new Error(`Min and Max must be integers, but Min=${DD} and Max=${zD}`)
```

#### 1066. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11552` → after: `L11552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11552) · [Before (L11552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11552)

```diff
-       653: (mm, Tm, fm) => {
+       619: (DD, zD, wD) => {
```

#### 1067. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11556-L11561` → after: `L11555-L11561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11555-L11561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11555-L11561) · [Before (L11556-L11561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11556-L11561)

```diff
-           H: () => Dm,
-           M: () => pm,
-           b: () => wm,
-           h: () => xm,
-           k: () => Am,
-           u: () => am,
+           L: () => AD,
+           c: () => LD,
+           f: () => rD,
+           g: () => sD,
+           p: () => KD,
+           q: () => UD,
+           r: () => gD,
```

#### 1068. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11563` → after: `L11563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11563) · [Before (L11563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11563)

```diff
-           x: () => im
+           w: () => ID
```

#### 1069. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11565` → after: `L11565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11565) · [Before (L11565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11565)

```diff
-         var hm = fm(658);
+         var pD = wD(625);
```

#### 1070. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11595` → after: `L11595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11595) · [Before (L11595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11595)

```diff
-         hm.d, Number(atob("NQ==")), Number(atob("MTM="));
+         pD.e, Number(atob("NQ==")), Number(atob("MTM="));
```

#### 1071. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11603` → after: `L11603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11603) · [Before (L11603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11603)

```diff
-       658: (mm, Tm, fm) => {
+       625: (DD, zD, wD) => {
```

#### 1072. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11605` → after: `L11605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11605) · [Before (L11605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11605)

```diff
-           d: () => hm
+           e: () => pD
```

#### 1073. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11609` → after: `L11609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11609) · [Before (L11609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11609)

```diff
-       225: (mm, Tm, fm) => {
+       227: (DD, zD, wD) => {
```

#### 1074. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11611` → after: `L11611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11611) · [Before (L11611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11611)

```diff
-           "./localConfigValues.ts.clientRelease": 233
+           "./localConfigValues.ts.clientRelease": 234
```

#### 1075. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11628` → after: `L11628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11628) · [Before (L11628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11628)

```diff
-         }, Am.resolve = am, mm.exports = Am, Am.id = 225
+         }, sD.resolve = KD, DD.exports = sD, sD.id = 227
```

#### 1076. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11630` → after: `L11630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11630) · [Before (L11630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11630)

```diff
-       233: (mm, Tm, fm) => {
+       234: (DD, zD, wD) => {
```

#### 1077. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11654-L11659` → after: `L11654-L11659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11654-L11659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11654-L11659) · [Before (L11654-L11659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11654-L11659)

```diff
-   }, fm.f = {}, fm.e = mm => Promise.all(Object.keys(fm.f).reduce(((Tm, hm) => (fm.f[hm](mm, Tm), Tm)), [])), fm.u = mm => "static/js/mpd96o." + (69 === mm ? "worldgenTables" : mm) + "." + {
-     69: "3d0e50bb",
-     72: "3ba7e611",
-     73: "140a7a1d",
-     74: "5b7d911a",
-     75: "aaa372b8"
+   }, wD.f = {}, wD.e = DD => Promise.all(Object.keys(wD.f).reduce(((zD, pD) => (wD.f[pD](DD, zD), zD)), [])), wD.u = DD => "static/js/tz47m9." + (69 === DD ? "worldgenTables" : DD) + "." + {
+     69: "0211c1fa",
+     72: "1e626967",
+     73: "a76e93bb",
+     74: "865b0d48",
+     75: "c22f39ed"
```

#### 1078. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11678-L11680` → after: `L11678-L11684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11678-L11684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11678-L11684) · [Before (L11678-L11680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11678-L11680)

```diff
-           throw Tm.message = "Loading chunk " + am + " failed after 4 retries.\n(" + wm + ")", Tm.request = wm, hm[am] = "cache-bust=" + Date.now(), setTimeout((function() {
-             delete Am[am]
-           }), 0), Tm
+           if (zD.message = "Loading chunk " + KD + " failed after 4 retries.\n(" + LD + ")", zD.request = LD, pD[KD] = "cache-bust=" + Date.now(), setTimeout((function() {
+               delete sD[KD]
+             }), 0), "CSS_CHUNK_LOAD_FAILED" === zD.code) {
+             var cD = wD.miniCssF(KD);
+             zD.message = zD.message.replace("Loading chunk", "Loading CSS chunk").replace(LD, cD), zD.request = cD
+           }
+           throw zD
```

#### 1079. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11730` → after: `L11734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11734) · [Before (L11730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11730)

```diff
-       fm = Tm < 0 ? this.length + Tm : Tm;
+       wD = zD < 0 ? this.length + zD : zD;
```

#### 1080. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11745-L11747` → after: `L11749-L11751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11749-L11751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11749-L11751) · [Before (L11745-L11747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11745-L11747)

```diff
-     Gq: () => Cm,
-     Xq: () => rm,
-     Vp: () => sm,
+     VG: () => ND,
+     PG: () => ZD,
+     UA: () => yD,
```

#### 1081. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11750-L11760` → after: `L11754-L11764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11754-L11764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11754-L11764) · [Before (L11750-L11760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11750-L11760)

```diff
-     Ip: () => lm,
-     Kp: () => Mm,
-     Qp: () => um,
-     np: () => Bm,
-     Jp: () => Lm,
-     cp: () => tm,
-     zp: () => Um,
-     Zp: () => dm,
-     Np: () => gm,
-     Xp: () => Wm,
-     Pp: () => Fm
+     fA: () => kD,
+     IA: () => mD,
+     BA: () => eD,
+     hA: () => oD,
+     nA: () => aD,
+     MA: () => uD,
+     OA: () => vD,
+     JA: () => tD,
+     VA: () => FD,
+     CA: () => YD,
+     xA: () => HD
```

#### 1082. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11800` → after: `L11804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11804) · [Before (L11800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11800)

```diff
-     return null === Ym ? "not failed" : `${Ym}: ${(mm=qm)instanceof Error?`${mm.name}: ${mm.message}`:String(mm)}`;
+     return null === BD ? "not failed" : `${BD}: ${(DD=GD)instanceof Error?`${DD.name}: ${DD.message}`:String(DD)}`;
```

#### 1083. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11805` → after: `L11809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11809) · [Before (L11805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11805)

```diff
-     if (!zm()) throw new Error(`Bloxd wasm is not ready (${Zm()}): check isBloxdWasmReady() first`);
+     if (!VD()) throw new Error(`Bloxd wasm is not ready (${PD()}): check isBloxdWasmReady() first`);
```

#### 1084. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11843` → after: `L11847`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11847) · [Before (L11843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11843)

```diff
-       Np: Am
+       VA: sD
```

#### 1085. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11864` → after: `L11868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11868) · [Before (L11864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11864)

```diff
-     Om = "failed", Ym = Tm, qm = mm, console.error(`Bloxd wasm failed (${Tm}):`, mm);
+     ID = "failed", BD = zD, GD = DD, console.error(`Bloxd wasm failed (${zD}):`, DD);
```

#### 1086. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11883-L11884` → after: `L11887-L11888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11887-L11888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11887-L11888) · [Before (L11883-L11884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11883-L11884)

```diff
-       reserveUpFront: Tm => mm().np(Tm),
-       reserveAhead: Tm => mm().Qp(Tm),
+       reserveUpFront: zD => DD().hA(zD),
+       reserveAhead: zD => DD().BA(zD),
```

#### 1087. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11886` → after: `L11890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11890) · [Before (L11886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11886)

```diff
-         mm().Jp(Tm)
+         DD().nA(zD)
```

#### 1088. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11888` → after: `L11892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11892) · [Before (L11888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11888)

```diff
-       lowWater: () => Hm[mm().Kp()] ?? "none",
+       lowWater: () => lD[DD().IA()] ?? "none",
```

#### 1089. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11911-L11913` → after: `L11915-L11917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11915-L11917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11915-L11917) · [Before (L11911-L11913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11911-L11913)

```diff
-       }(mm().cp()),
-       takeBallast: () => mm().zp(),
-       takePressure: () => mm().Zp()
+       }(DD().MA()),
+       takeBallast: () => DD().OA(),
+       takePressure: () => DD().JA()
```

#### 1090. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11923` → after: `L11927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11927) · [Before (L11923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11923)

```diff
-       VT.OKp0(mm, 0)
+       hz.w7ja(DD, 0)
```

#### 1091. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11926` → after: `L11930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11930) · [Before (L11926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11926)

```diff
-       const Tm = RT(mm, VT.sXun, VT.dbzZ),
+       const zD = gz(DD, hz.a6rW, hz.soPk),
```

#### 1092. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11928` → after: `L11932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11932) · [Before (L11928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11928)

```diff
-       VT.vXOU(this.__wbg_ptr, Tm, fm)
+       hz.vHFB(this.__wbg_ptr, zD, wD)
```

#### 1093. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11931` → after: `L11935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11935) · [Before (L11931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11931)

```diff
-       return VT.ynKp(this.__wbg_ptr) >>> 0
+       return hz.gOAO(this.__wbg_ptr) >>> 0
```

#### 1094. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11934` → after: `L11938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11938) · [Before (L11934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11934)

```diff
-       const mm = VT.vZEd();
+       const DD = hz.keJk();
```

#### 1095. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11938` → after: `L11942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11942) · [Before (L11938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11938)

```diff
-       return VT.LhHA(this.__wbg_ptr) >>> 0
+       return hz.okRs(this.__wbg_ptr) >>> 0
```

#### 1096. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11941` → after: `L11945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11945) · [Before (L11941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11941)

```diff
-       return VT.TxIz(this.__wbg_ptr) >>> 0
+       return hz.OgxQ(this.__wbg_ptr) >>> 0
```

#### 1097. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11944` → after: `L11948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11948) · [Before (L11944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11944)

```diff
-       return VT.EcJJ(this.__wbg_ptr) >>> 0
+       return hz.U057(this.__wbg_ptr) >>> 0
```

#### 1098. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11955` → after: `L11959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11959) · [Before (L11955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11955)

```diff
-       VT.dFZf(mm, 0)
+       hz.jIJl(DD, 0)
```

#### 1099. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11958` → after: `L11962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11962) · [Before (L11958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11958)

```diff
-       return VT.vbhE(this.__wbg_ptr, mm) >>> 0
+       return hz.fKME(this.__wbg_ptr, DD) >>> 0
```

#### 1100. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11961` → after: `L11965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11965) · [Before (L11961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11961)

```diff
-       return VT.p3tD(this.__wbg_ptr, mm) >>> 0
+       return hz.mkqj(this.__wbg_ptr, DD) >>> 0
```

#### 1101. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11964` → after: `L11968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11968) · [Before (L11964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11964)

```diff
-       const Tm = VT.VZV0(void 0 === (fm = mm) || null === fm ? Number.MAX_SAFE_INTEGER : mm >>> 0);
+       const zD = hz.IR2Z(void 0 === (wD = DD) || null === wD ? Number.MAX_SAFE_INTEGER : DD >>> 0);
```

#### 1102. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11969` → after: `L11973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11973) · [Before (L11969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11969)

```diff
-       return VT.CZ1e(this.__wbg_ptr) >>> 0
+       return hz.FnZq(this.__wbg_ptr) >>> 0
```

#### 1103. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11972` → after: `L11976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11976) · [Before (L11972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11972)

```diff
-       return VT.TKNu(this.__wbg_ptr) >>> 0
+       return hz.vk9h(this.__wbg_ptr) >>> 0
```

#### 1104. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11975` → after: `L11979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11979) · [Before (L11975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11975)

```diff
-       return VT.jLuF(this.__wbg_ptr, mm) >>> 0
+       return hz.MM8F(this.__wbg_ptr, DD) >>> 0
```

#### 1105. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11980` → after: `L11984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11984) · [Before (L11980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11980)

```diff
-     const fm = RT(mm, VT.sXun, VT.dbzZ),
+     const wD = gz(DD, hz.a6rW, hz.soPk),
```

#### 1106. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11982` → after: `L11986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11986) · [Before (L11982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11982)

```diff
-       Am = VT.BaS9(fm, hm, Tm);
+       sD = hz.UFIx(wD, pD, zD);
```

#### 1107. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11987` → after: `L11991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11991) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11991) · [Before (L11987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11987)

```diff
-     VT.jMhD()
+     hz.wTEx()
```

#### 1108. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11991` → after: `L11995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11995) · [Before (L11991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11991)

```diff
-     return VT.ZZvs() >>> 0
+     return hz.EAcR() >>> 0
```

#### 1109. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11995` → after: `L11999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R11999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L11999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11999) · [Before (L11995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11995)

```diff
-     return 0 !== VT.bRfJ(mm)
+     return 0 !== hz.hPq5(DD)
```

#### 1110. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L11999` → after: `L12003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12003) · [Before (L11999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L11999)

```diff
-     return 0 !== VT.zIZi(mm)
+     return 0 !== hz.ekAo(DD)
```

#### 1111. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12003` → after: `L12007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12007) · [Before (L12003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12003)

```diff
-     VT.h9hB(mm)
+     hz.sXfA(DD)
```

#### 1112. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12007` → after: `L12011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12011) · [Before (L12007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12007)

```diff
-     return VT.QltQ() >>> 0
+     return hz.B4Ld() >>> 0
```

#### 1113. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12011` → after: `L12015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12015) · [Before (L12011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12011)

```diff
-     return VT.TqNc() >>> 0
+     return hz.RrSu() >>> 0
```

#### 1114. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12015` → after: `L12019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12019) · [Before (L12015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12015)

```diff
-     return 0 !== VT.hk84()
+     return 0 !== hz.hF9N()
```

#### 1115. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12019` → after: `L12023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12023) · [Before (L12019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12019)

```diff
-     return VT.likM() >>> 0
+     return hz.onUH() >>> 0
```

#### 1116. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12025` → after: `L12029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12029) · [Before (L12025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12025)

```diff
-       const fm = VT.pxgK();
+       const wD = hz.bWOe();
```

#### 1117. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12028` → after: `L12032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12032) · [Before (L12028)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12028)

```diff
-       VT.AnxH(mm, Tm, 1)
+       hz.n4s5(DD, zD, 1)
```

#### 1118. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12033` → after: `L12037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12037) · [Before (L12033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12033)

```diff
-     VT.zpFD(hT(mm))
+     hz.i2Z3(wz(DD))
```

#### 1119. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12039` → after: `L12043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12043) · [Before (L12039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12039)

```diff
-       hWOW: {
+       iyqV: {
```

#### 1120. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12041` → after: `L12045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12045) · [Before (L12041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12041)

```diff
-         zr3x: function(mm, Tm) {
+         eiqh: function(DD, zD) {
```

#### 1121. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12044` → after: `L12048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12048) · [Before (L12044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12044)

```diff
-         aKHn: function(mm, Tm) {
+         E2O5: function(DD, zD) {
```

#### 1122. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12047` → after: `L12051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12051) · [Before (L12047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12047)

```diff
-         a5CX: function(mm) {
+         OWxh: function(DD) {
```

#### 1123. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12050` → after: `L12054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12054) · [Before (L12050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12050)

```diff
-         ZM0L: function(mm, Tm) {
+         cTYN: function(DD, zD) {
```

#### 1124. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12053` → after: `L12057`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12057) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12057) · [Before (L12053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12053)

```diff
-         XA5L: function(mm) {
+         QE98: function(DD) {
```

#### 1125. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12063` → after: `L12067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12067) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12067) · [Before (L12063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12063)

```diff
-     } : new FinalizationRegistry((mm => VT.OKp0(mm, 1))),
+     } : new FinalizationRegistry((DD => hz.w7ja(DD, 1))),
```

#### 1126. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12067` → after: `L12071`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12071) · [Before (L12067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12067)

```diff
-     } : new FinalizationRegistry((mm => VT.dFZf(mm, 1)));
+     } : new FinalizationRegistry((DD => hz.jIJl(DD, 1)));
```

#### 1127. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12144` → after: `L12148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12148) · [Before (L12144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12144)

```diff
-     return jT = mm, VT = mm.exports, qT = Tm, aT = null, VT.Bvr4(), VT
+     return Gz = DD, hz = DD.exports, Bz = zD, sz = null, hz.pV3p(), hz
```
