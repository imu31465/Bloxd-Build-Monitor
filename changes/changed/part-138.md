# Changed — Bundle Modifications Report (Part 138 / 140)

- **Updated at**: `2026-11-24T17:23 JST`
- **Part**: `138 / 140` (**427** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 137](part-137.md) · [Part 139 →](part-139.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/worldgenWorker.js` (mpd96o.85ad4551 → tz47m9.2cb7e113 · continued)

- **File**: `bundles/bloxd.io/chunks/js/worldgenWorker.js` (1178 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032)

#### 1128. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12168` → after: `L12172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12172) · [Before (L12168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12168)

```diff
-         if (!mm.ok) throw new Error(`failed to fetch Wasm: ${mm.status} ${mm.statusText} fetching '${mm.url}'`);
+         if (!DD.ok) throw new Error(`failed to fetch Wasm: ${DD.status} ${DD.statusText} fetching '${DD.url}'`);
```

#### 1129. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12198-L12199` → after: `L12202-L12203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12202-L12203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12202-L12203) · [Before (L12198-L12199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12198-L12199)

```diff
-       if (!zm()) throw new Error(`Bloxd wasm is not ready (${Zm()}): check isBloxdWasmReady() first`);
-       if (Km !== mm) throw new Error(`Bloxd wasm was loaded as another module, which lacks ${Tm}`)
+       if (!VD()) throw new Error(`Bloxd wasm is not ready (${PD()}): check isBloxdWasmReady() first`);
+       if (OD !== DD) throw new Error(`Bloxd wasm was loaded as another module, which lacks ${zD}`)
```

#### 1130. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12202` → after: `L12206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12206) · [Before (L12202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12202)

```diff
-   var cT = fm(653);
+   var Qz = wD(619);
```

#### 1131. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12209` → after: `L12213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12213) · [Before (L12209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12209)

```diff
-       } = fm(39898), om = function(mm, Tm, fm) {
+       } = wD(39724), fD = function(DD, zD, wD) {
```

#### 1132. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12211` → after: `L12215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12215) · [Before (L12211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12211)

```diff
-         for (const wm of mm.Lm) NT(wm, fm);
+         for (const LD of DD.eD) bz(LD, wD);
```

#### 1133. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12214` → after: `L12218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12218) · [Before (L12214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12214)

```diff
-           Lm: mm.Lm,
+           eD: DD.eD,
```

#### 1134. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12220` → after: `L12224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12224) · [Before (L12220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12220)

```diff
-           throw new Error(`Custom world-gen terrain "${hm.name}" is not in this generator's catalogue (${mm.length>0?mm.join(", "):"empty"})`)
+           throw new Error(`Custom world-gen terrain "${pD.name}" is not in this generator's catalogue (${DD.length>0?DD.join(", "):"empty"})`)
```

#### 1135. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12225` → after: `L12229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12229) · [Before (L12225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12225)

```diff
-               if (null !== mm.Bm) throw new Error(`Custom world-gen terrain "${mm.name}" takes no options`);
+               if (null !== DD.mD) throw new Error(`Custom world-gen terrain "${DD.name}" takes no options`);
```

#### 1136. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12229-L12230` → after: `L12233-L12234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12233-L12234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12233-L12234) · [Before (L12229-L12230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12229-L12230)

```diff
-             if (null !== mm.Bm) try {
-               fm = JSON.parse(mm.Bm)
+             if (null !== DD.mD) try {
+               wD = JSON.parse(DD.mD)
```

#### 1137. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12232` → after: `L12236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12236) · [Before (L12232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12232)

```diff
-               throw new Error(`Custom world-gen terrain "${mm.name}" has invalid optionsJson: ${String(hm)}`, {
+               throw new Error(`Custom world-gen terrain "${DD.name}" has invalid optionsJson: ${String(pD)}`, {
```

#### 1138. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12239` → after: `L12243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12243) · [Before (L12239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12239)

```diff
-           Lm: mm.Lm,
+           eD: DD.eD,
```

#### 1139. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12242` → after: `L12246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12246) · [Before (L12242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12242)

```diff
-       }(null !== (Rm = null === wm || void 0 === wm ? void 0 : wm.lm) && void 0 !== Rm ? Rm : null, Dm, Tm);
+       }(null !== (RD = null === LD || void 0 === LD ? void 0 : LD.ZD) && void 0 !== RD ? RD : null, cD, zD);
```

#### 1140. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12244` → after: `L12248`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12248) · [Before (L12244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12244)

```diff
-       const Om = null !== (pm = null === wm || void 0 === wm ? void 0 : wm.layers) && void 0 !== pm ? pm : [];
+       const ID = null !== (AD = null === LD || void 0 === LD ? void 0 : LD.layers) && void 0 !== AD ? AD : [];
```

#### 1141. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12247` → after: `L12251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12251) · [Before (L12247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12247)

```diff
-         const fm = [...mm].sort(((mm, Tm) => mm.Dm - Tm.Dm));
+         const wD = [...DD].sort(((DD, zD) => DD.LD - zD.LD));
```

#### 1142. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12249` → after: `L12253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12253) · [Before (L12249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12249)

```diff
-           if (fm[hm].Dm < fm[hm - 1].im) throw new Error(`Custom world-gen layers overlap: [${fm[hm-1].Dm}, ${fm[hm-1].im}) and [${fm[hm].Dm}, ${fm[hm].im})`)
+           if (wD[pD].LD < wD[pD - 1].cD) throw new Error(`Custom world-gen layers overlap: [${wD[pD-1].LD}, ${wD[pD-1].cD}) and [${wD[pD].LD}, ${wD[pD].cD})`)
```

#### 1143. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12261` → after: `L12265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12265) · [Before (L12261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12261)

```diff
-         if (fm >= Am.Dm && fm < Am.im) return am.getChunk(mm, Tm, fm - Am.Rm, hm);
+         if (wD >= sD.LD && wD < sD.cD) return KD.getChunk(DD, zD, wD - sD.gD, pD);
```

#### 1144. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12279-L12280` → after: `L12283-L12284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12283-L12284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12283-L12284) · [Before (L12279-L12280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12279-L12280)

```diff
-     if (mm.Dm >= mm.im) throw new Error(`Custom world-gen layer has minY (${mm.Dm}) >= maxY (${mm.im})`);
-     if (mm.Dm % cT.x !== 0 || mm.im % cT.x !== 0 || mm.Rm % cT.x !== 0) throw new Error(`Custom world-gen layer bounds must be multiples of chunkSize (${cT.x}); got minY=${mm.Dm}, maxY=${mm.im}, groundY=${mm.Rm}`);
+     if (DD.LD >= DD.cD) throw new Error(`Custom world-gen layer has minY (${DD.LD}) >= maxY (${DD.cD})`);
+     if (DD.LD % Qz.r !== 0 || DD.cD % Qz.r !== 0 || DD.gD % Qz.r !== 0) throw new Error(`Custom world-gen layer bounds must be multiples of chunkSize (${Qz.r}); got minY=${DD.LD}, maxY=${DD.cD}, groundY=${DD.gD}`);
```

#### 1145. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12282-L12285` → after: `L12286-L12289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12286-L12289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12286-L12289) · [Before (L12282-L12285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12282-L12285)

```diff
-         if (void 0 === (0, cT.B)(mm.Om, Tm)) throw new Error(`Custom world-gen caves lavaPitBlock "${mm.Om}" not found in blockMetadata`);
-         if (mm.Ym)
-           for (const fm of mm.Ym) kT(fm, Tm)
-       }(mm.Em, Tm), 0 === mm.Sm.length) throw new Error("Custom world-gen layer must have at least one biome");
+         if (void 0 === (0, Qz.w)(DD.fD, zD)) throw new Error(`Custom world-gen caves lavaPitBlock "${DD.fD}" not found in blockMetadata`);
+         if (DD.BD)
+           for (const wD of DD.BD) Pz(wD, zD)
+       }(DD.AD, zD), 0 === DD.xD.length) throw new Error("Custom world-gen layer must have at least one biome");
```

#### 1146. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12287` → after: `L12291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12291) · [Before (L12287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12287)

```diff
-     for (const hm of mm.Sm) eT(hm, Tm), fm += hm.frequency;
+     for (const pD of DD.xD) Tz(pD, zD), wD += pD.frequency;
```

#### 1147. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12289` → after: `L12293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12293) · [Before (L12289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12289)

```diff
-     for (const hm of mm.ym) NT(hm, Tm)
+     for (const pD of DD.iD) bz(pD, zD)
```

#### 1148. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12295-L12297` → after: `L12299-L12301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12299-L12301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12299-L12301) · [Before (L12295-L12297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12295-L12297)

```diff
-       jm: hm,
-       Vm: Am,
-       Im: am
+       hD: pD,
+       nD: sD,
+       MD: KD
```

#### 1149. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12299-L12300` → after: `L12303-L12304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12303-L12304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12303-L12304) · [Before (L12299-L12300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12299-L12300)

```diff
-     if (void 0 === (0, cT.B)(fm, Tm)) throw new Error(`Custom world-gen cave decoration blockName "${fm}" not found in blockMetadata`);
-     if (!hm && !Am && !am) throw new Error(`Custom world-gen cave decoration "${fm}" must allow at least one of floor/walls/ceiling anchoring`);
+     if (void 0 === (0, Qz.w)(wD, zD)) throw new Error(`Custom world-gen cave decoration blockName "${wD}" not found in blockMetadata`);
+     if (!pD && !sD && !KD) throw new Error(`Custom world-gen cave decoration "${wD}" must allow at least one of floor/walls/ceiling anchoring`);
```

#### 1150. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12303-L12304` → after: `L12307-L12308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12307-L12308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12307-L12308) · [Before (L12303-L12304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12303-L12304)

```diff
-     if (am && bT(fm, "meta|rot1|top", Tm), ST(mm.Km, fm, "Km"), ST(mm.Qm, fm, "Qm"), !Number.isInteger(mm.nm) || mm.nm < 0) throw new Error(`Custom world-gen cave decoration "${fm}" minPlacements must be a non-negative integer, got ${mm.nm}`);
-     if (!(0, cT.H)(mm.Jm) && (ST(mm.Jm.Zm, fm, "depthRamp.deepClusterChance"), mm.Jm.km <= mm.Jm.bm)) throw new Error(`Custom world-gen cave decoration "${fm}" deepY must be strictly smaller than shallowY, but ${mm.Jm.km} <= ${mm.Jm.bm} `)
+     if (KD && Cz(wD, "meta|rot1|top", zD), xz(DD.OD, wD, "OD"), xz(DD.JD, wD, "JD"), !Number.isInteger(DD.ED) || DD.ED < 0) throw new Error(`Custom world-gen cave decoration "${wD}" minPlacements must be a non-negative integer, got ${DD.ED}`);
+     if (!(0, Qz.B)(DD.QD) && (xz(DD.QD.VD, wD, "depthRamp.deepClusterChance"), DD.QD.PD <= DD.QD.CD)) throw new Error(`Custom world-gen cave decoration "${wD}" deepY must be strictly smaller than shallowY, but ${DD.QD.PD} <= ${DD.QD.CD} `)
```

#### 1151. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12308-L12309` → after: `L12312-L12313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12312-L12313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12312-L12313) · [Before (L12308-L12309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12308-L12309)

```diff
-     const hm = `${mm}|${Tm}`;
-     if (void 0 === (0, cT.B)(hm, fm)) throw new Error(`Custom world-gen cave decoration "${mm}" is missing directional variant "${hm}" required for wall/ceiling anchoring`)
+     const pD = `${DD}|${zD}`;
+     if (void 0 === (0, Qz.w)(pD, wD)) throw new Error(`Custom world-gen cave decoration "${DD}" is missing directional variant "${pD}" required for wall/ceiling anchoring`)
```

#### 1152. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12313` → after: `L12317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12317) · [Before (L12313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12313)

```diff
-     if (mm < 0 || mm > 1) throw new Error(`Custom world-gen cave decoration "${Tm}" ${fm} must be in [0, 1], got ${mm}`)
+     if (DD < 0 || DD > 1) throw new Error(`Custom world-gen cave decoration "${zD}" ${wD} must be in [0, 1], got ${DD}`)
```

#### 1153. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12317-L12323` → after: `L12321-L12327`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12321-L12327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12321-L12327) · [Before (L12317-L12323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12317-L12323)

```diff
-     if (mm.frequency <= 0) throw new Error(`Custom world-gen biome frequency must be positive, got ${mm.frequency}`);
-     if (void 0 === (0, cT.B)(mm.Gm, Tm)) throw new Error(`Custom world-gen biome topsoilBlock "${mm.Gm}" not found in blockMetadata`);
-     if (void 0 === (0, cT.B)(mm.Xm, Tm)) throw new Error(`Custom world-gen biome lowsoilBlock "${mm.Xm}" not found in blockMetadata`);
-     if (0 === mm.Pm.length) throw new Error("Custom world-gen biome must have at least one stoneType");
-     for (const fm of mm.Pm) {
-       if (fm.frequency <= 0) throw new Error(`Custom world-gen biome stoneType frequency must be positive, got ${fm.frequency}`);
-       if (void 0 === (0, cT.B)(fm.blockName, Tm)) throw new Error(`Custom world-gen biome stoneType blockName "${fm.blockName}" not found in blockMetadata`)
+     if (DD.frequency <= 0) throw new Error(`Custom world-gen biome frequency must be positive, got ${DD.frequency}`);
+     if (void 0 === (0, Qz.w)(DD.bD, zD)) throw new Error(`Custom world-gen biome topsoilBlock "${DD.bD}" not found in blockMetadata`);
+     if (void 0 === (0, Qz.w)(DD.jD, zD)) throw new Error(`Custom world-gen biome lowsoilBlock "${DD.jD}" not found in blockMetadata`);
+     if (0 === DD.dD.length) throw new Error("Custom world-gen biome must have at least one stoneType");
+     for (const wD of DD.dD) {
+       if (wD.frequency <= 0) throw new Error(`Custom world-gen biome stoneType frequency must be positive, got ${wD.frequency}`);
+       if (void 0 === (0, Qz.w)(wD.blockName, zD)) throw new Error(`Custom world-gen biome stoneType blockName "${wD.blockName}" not found in blockMetadata`)
```

#### 1154. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12328-L12332` → after: `L12332-L12336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12332-L12336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12332-L12336) · [Before (L12328-L12332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12328-L12332)

```diff
-     if (void 0 === (0, cT.B)(mm.blockName, Tm)) throw new Error(`Custom world-gen ore blockName "${mm.blockName}" not found in blockMetadata`);
-     if (mm.radius < 0) throw new Error(`Custom world-gen ore "${mm.blockName}" radius must be >= 0, got ${mm.radius}`);
-     if (mm.rm <= 0) throw new Error(`Custom world-gen ore "${mm.blockName}" minDistBetweenDeposits must be > 0, got ${mm.rm}`);
-     if (mm.Dm > mm.im) throw new Error(`Custom world-gen ore "${mm.blockName}" minY (${mm.Dm}) must be <= maxY (${mm.im})`);
-     if (mm.sm < 0 || mm.sm > 1) throw new Error(`Custom world-gen ore "${mm.blockName}" spawnChance must be in [0, 1], got ${mm.sm}`)
+     if (void 0 === (0, Qz.w)(DD.blockName, zD)) throw new Error(`Custom world-gen ore blockName "${DD.blockName}" not found in blockMetadata`);
+     if (DD.radius < 0) throw new Error(`Custom world-gen ore "${DD.blockName}" radius must be >= 0, got ${DD.radius}`);
+     if (DD.WD <= 0) throw new Error(`Custom world-gen ore "${DD.blockName}" minDistBetweenDeposits must be > 0, got ${DD.WD}`);
+     if (DD.LD > DD.cD) throw new Error(`Custom world-gen ore "${DD.blockName}" minY (${DD.LD}) must be <= maxY (${DD.cD})`);
+     if (DD.ND < 0 || DD.ND > 1) throw new Error(`Custom world-gen ore "${DD.blockName}" spawnChance must be in [0, 1], got ${DD.ND}`)
```

#### 1155. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12338-L12341` → after: `L12342-L12345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12342-L12345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12342-L12345) · [Before (L12338-L12341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12338-L12341)

```diff
-       rm: 10,
-       Dm: -98,
-       im: -78,
-       sm: .4
+       WD: 10,
+       LD: -98,
+       cD: -78,
+       ND: .4
```

#### 1156. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12346-L12349` → after: `L12350-L12353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12350-L12353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12350-L12353) · [Before (L12346-L12349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12346-L12349)

```diff
-       rm: 6,
-       Dm: -40,
-       im: 20,
-       sm: .6
+       WD: 6,
+       LD: -40,
+       cD: 20,
+       ND: .6
```

#### 1157. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12353-L12356` → after: `L12357-L12360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12357-L12360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12357-L12360) · [Before (L12353-L12356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12353-L12356)

```diff
-       rm: 10,
-       Dm: -75,
-       im: -55,
-       sm: .4
+       WD: 10,
+       LD: -75,
+       cD: -55,
+       ND: .4
```

#### 1158. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12360` → after: `L12364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12364) · [Before (L12360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12360)

```diff
-       Bm: null
+       mD: null
```

#### 1159. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12363` → after: `L12367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12367) · [Before (L12363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12363)

```diff
-     [GT]: () => fm(39789).c
+     [jz]: () => wD(39613).b
```

#### 1160. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12388` → after: `L12392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12392) · [Before (L12388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12388)

```diff
-       if (!tT.includes(Tm)) throw new Error(`Invalid port offset "${mm}". Must be one of: ${tT.join(", ")}. Leave the port offset environment variable unset to use the default ports, or run tools/DevPorts.ts to claim a slot.`);
+       if (!uz.includes(zD)) throw new Error(`Invalid port offset "${DD}". Must be one of: ${uz.join(", ")}. Leave the port offset environment variable unset to use the default ports, or run tools/DevPorts.ts to claim a slot.`);
```

#### 1161. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12466` → after: `L12470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12470) · [Before (L12466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12466)

```diff
-     const Tm = BT() ? WT : FT;
+     const zD = ez() ? Yz : Hz;
```

#### 1162. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12866` → after: `L12870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12870) · [Before (L12866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12866)

```diff
-     if (af.has(mm)) throw new Error(`Duplicate leave code: ${mm}`);
+     if (sw.has(DD)) throw new Error(`Duplicate leave code: ${DD}`);
```

#### 1163. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12889` → after: `L12893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12893) · [Before (L12889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12889)

```diff
-     return mm === Tm ? am + hm * hm <= mm * mm : mm > Tm ? Math.abs(hm) <= Tm && am + hm * hm <= mm * mm : am <= mm * mm && am + hm * hm <= Tm * Tm
+     return DD === zD ? KD + pD * pD <= DD * DD : DD > zD ? Math.abs(pD) <= zD && KD + pD * pD <= DD * DD : KD <= DD * DD && KD + pD * pD <= zD * zD
```

#### 1164. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12904-L12906` → after: `L12908-L12910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12908-L12910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12908-L12910) · [Before (L12904-L12906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12904-L12906)

```diff
-   const of = globalThis.WorkerGlobalScope;
-   if (void 0 !== of && globalThis instanceof of ) {
-     const mm = Promise.all([fm.e(72), fm.e(75), fm.e(74), fm.e(73), fm.e(69)]).then((() => fm(39883))).then((mm => {
+   const Uw = globalThis.WorkerGlobalScope;
+   if (void 0 !== Uw && globalThis instanceof Uw) {
+     const DD = Promise.all([wD.e(72), wD.e(75), wD.e(74), wD.e(73), wD.e(69)]).then((() => wD(39708))).then((DD => {
```

#### 1165. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12949` → after: `L12953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12953) · [Before (L12949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12949)

```diff
-               reason: `its memory stats trapped (${String(Tm)})`
+               reason: `its memory stats trapped (${String(zD)})`
```

#### 1166. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12955` → after: `L12959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12959) · [Before (L12955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12955)

```diff
-               const fm = Dm.Pq();
+               const wD = cD.CG();
```

#### 1167. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12958` → after: `L12962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12962) · [Before (L12958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12958)

```diff
-                 return String.fromCharCode(...new Uint8Array(Sm().buffer, mm.Hq(), 32))
+                 return String.fromCharCode(...new Uint8Array(TD().buffer, DD.xG(), 32))
```

#### 1168. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12971` → after: `L12975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12975) · [Before (L12971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12971)

```diff
-               xm = qm.MO, pm = new Uint16Array(xm * xm * xm),
+               rD = GD.CI, AD = new Uint16Array(rD * rD * rD),
```

#### 1169. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12980` → after: `L12984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12984) · [Before (L12980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12980)

```diff
-                           reason: `the memory ceiling was not set (${String(hm)})`
+                           reason: `the memory ceiling was not set (${String(pD)})`
```

#### 1170. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12984` → after: `L12988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12988) · [Before (L12984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12984)

```diff
-                         Dm = new(JT().Gq)
+                         cD = new(Ez().VG)
```

#### 1171. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12988` → after: `L12992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R12992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L12992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12992) · [Before (L12988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12988)

```diff
-                           reason: `GeneratedChunkEncoder did not start (${String(hm)})`
+                           reason: `GeneratedChunkEncoder did not start (${String(pD)})`
```

#### 1172. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L12998` → after: `L13002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13002) · [Before (L12998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L12998)

```diff
-                           reason: `the block and item tables did not load (${String(Tm)})`
+                           reason: `the block and item tables did not load (${String(zD)})`
```

#### 1173. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13003` → after: `L13007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13007) · [Before (L13003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13003)

```diff
-                       reason: `wasm did not start (${km()})`
+                       reason: `wasm did not start (${CD()})`
```

#### 1174. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13007` → after: `L13011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13011) · [Before (L13007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13007)

```diff
-                     reason: `chunk size ${xm} is not the encoder's 32`
+                     reason: `chunk size ${rD} is not the encoder's 32`
```

#### 1175. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13018` → after: `L13022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13022) · [Before (L13018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13018)

```diff
-                 im = new zT(xm, wm.blockMetadata, wm.itemMetadata, mm.fm, !1, mm.hm, mm.am, hm, Ym)
+                 gD = new Xz(rD, LD.blockMetadata, LD.itemMetadata, DD.zD, !1, DD.wD, DD.sD, pD, BD)
```

#### 1176. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13043` → after: `L13047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13047) · [Before (L13043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13043)

```diff
-                     const fm = mm.yq(),
+                     const wD = DD.TG(),
```

#### 1177. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13045` → after: `L13049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13049) · [Before (L13045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13045)

```diff
-                       Am = Tm.byteLength >= hm ? Tm : new ArrayBuffer(hm),
+                       sD = zD.byteLength >= pD ? zD : new ArrayBuffer(pD),
```

#### 1178. `bundles/bloxd.io/chunks/js/worldgenWorker.js` (Changed code · before: `L13048` → after: `L13052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032R13052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-bf8995eed69eb486a16b6cec63236bd5a5a313b282242a70cc88febfc4340032) · [After (L13052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13052) · [Before (L13048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorker.js#L13048)

```diff
-                     return xm.set(new Uint8Array(am, mm.Hq(), lT)), xm.set(new Uint8Array(am, mm.Cq(), fm), lT), {
+                     return rD.set(new Uint8Array(KD, DD.xG(), yz)), rD.set(new Uint8Array(KD, DD.bG(), wD), yz), {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (mpd96o.85ad4551 → tz47m9.2cb7e113)

- **File**: `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79)

#### 1. `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L4)

```diff
-   36487: (mm, Tm, fm) => {
+   36404: (DD, zD, wD) => {
```

#### 2. `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L6)

```diff
-       d: () => Am
+       e: () => sD
```

#### 3. `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L41` → after: `L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79) · [After (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L41) · [Before (L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L41)

```diff
-           if (Tm > 0 && fm.searchParams.set("cache-bust", `${Date.now()}-${Tm}`), await this.fetchWhole(fm, mm)) return this.scriptUrl = fm, !0;
+           if (zD > 0 && wD.searchParams.set("cache-bust", `${Date.now()}-${zD}`), await this.fetchWhole(wD, DD)) return this.scriptUrl = wD, !0;
```

#### 4. `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L83` → after: `L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79) · [After (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L83) · [Before (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L83)

```diff
-   51020: (mm, Tm, fm) => {
+   50822: (DD, zD, wD) => {
```

#### 5. `bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js` (Changed code · before: `L90` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79R90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-8bbc96d1c753debc289e6e0df5da78b1cd2414f151730abec734e1a3779e7e79) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L90) · [Before (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/chunks/js/worldgenWorkerLoader.js#L90)

```diff
-     const hm = new(fm(36487).d)(new URL(fm.p + fm.u(70), fm.b), {
+     const pD = new(wD(36404).e)(new URL(wD.p + wD.u(70), wD.b), {
```

## `bloxd.io` · `bundles/bloxd.io/main.js` (mpd96o.85ad4551 → tz47m9.2cb7e113)

- **File**: `bundles/bloxd.io/main.js` (1147 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6)

#### 1. `bundles/bloxd.io/main.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L1)

```diff
- /*! For license information please see mpd96o.main.85ad4551.js.LICENSE.txt */
+ /*! For license information please see tz47m9.main.2cb7e113.js.LICENSE.txt */
```

#### 2. `bundles/bloxd.io/main.js` (Changed code · before: `L3` → after: `L3`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L3) · [Before (L3)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L3)

```diff
-     var mm = [, , , , , , , , , , , , , , , , (mm, Tm, fm) => {
+     var DD = [, , , , , , , , , (DD, zD, wD) => {
```

#### 3. `bundles/bloxd.io/main.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L6)

```diff
-             B: () => pm,
+             C: () => fD,
```

#### 4. `bundles/bloxd.io/main.js` (Changed code · before: `L11` → after: `L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L10) · [Before (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L11)

```diff
-             M: () => Em,
+             L: () => kD,
```

#### 5. `bundles/bloxd.io/main.js` (Changed code · before: `L15-L19` → after: `L13-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L13-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L13-L17) · [Before (L15-L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L15-L19)

```diff
-             U: () => Hm,
-             X: () => Im,
-             ab: () => im,
-             bb: () => Sm,
-             c: () => Om,
+             V: () => JD,
+             W: () => dD,
+             Y: () => RD,
+             cb: () => MD,
+             d: () => ID,
```

#### 6. `bundles/bloxd.io/main.js` (Changed code · before: `L24` → after: `L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R25) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L25) · [Before (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L24)

```diff
-             n: () => wm,
+             m: () => LD,
```

#### 7. `bundles/bloxd.io/main.js` (Changed code · before: `L26` → after: `L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L27) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L26)

```diff
-             s: () => Vm,
+             q: () => nD,
```

#### 8. `bundles/bloxd.io/main.js` (Changed code · before: `L143` → after: `L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L143) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L143)

```diff
-             d: () => xm
+             e: () => rD
```

#### 9. `bundles/bloxd.io/main.js` (Changed code · before: `L145` → after: `L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L145) · [Before (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L145)

```diff
-           var hm = fm(23);
+           var pD = wD(20);
```

#### 10. `bundles/bloxd.io/main.js` (Changed code · before: `L167` → after: `L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L167) · [Before (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L167)

```diff
-             (hm.c.set({
+             (pD.e.set({
```

#### 11. `bundles/bloxd.io/main.js` (Changed code · before: `L174` → after: `L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L174) · [Before (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L174)

```diff
-         }, , (mm, Tm, fm) => {
+         }, , , , , , (DD, zD, wD) => {
```

#### 12. `bundles/bloxd.io/main.js` (Changed code · before: `L176-L177` → after: `L176-L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L176-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L176-L177) · [Before (L176-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L176-L177)

```diff
-             c: () => IT,
-             f: () => nT,
+             e: () => nz,
+             h: () => Jz,
```

#### 13. `bundles/bloxd.io/main.js` (Changed code · before: `L179-L180` → after: `L179-L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L179-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L179-L180) · [Before (L179-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L179-L180)

```diff
-             l: () => KT,
-             m: () => JT
+             k: () => Mz,
+             n: () => Ez
```

#### 14. `bundles/bloxd.io/main.js` (Changed code · before: `L182-L187` → after: `L182-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L182-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L182-L187) · [Before (L182-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L182-L187)

```diff
-           var hm = fm(31),
-             Am = fm(339),
-             am = fm(354),
-             xm = fm(37),
-             wm = fm(55),
-             Dm = fm(33),
+           var pD = wD(25),
+             sD = wD(338),
+             KD = wD(351),
+             rD = wD(35),
+             LD = wD(51),
+             cD = wD(28),
```

#### 15. `bundles/bloxd.io/main.js` (Changed code · before: `L189-L202` → after: `L189-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L189-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L189-L202) · [Before (L189-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L189-L202)

```diff
-             Rm = fm(59),
-             pm = fm(77),
-             Em = fm(105),
-             om = fm(273),
-             Om = fm(321),
-             Ym = fm(330),
-             qm = fm(118),
-             jm = fm(667),
-             Vm = fm(675),
-             Im = fm(307),
-             Km = fm(752),
-             Qm = fm(761),
-             nm = fm(763),
-             Jm = fm(294);
+             RD = wD(58),
+             AD = wD(79),
+             UD = wD(103),
+             fD = wD(271),
+             ID = wD(319),
+             BD = wD(323),
+             GD = wD(119),
+             hD = wD(629),
+             nD = wD(638),
+             MD = wD(300),
+             OD = wD(713),
+             JD = wD(718),
+             ED = wD(726),
+             QD = wD(287);
```

#### 16. `bundles/bloxd.io/main.js` (Changed code · before: `L212` → after: `L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L212) · [Before (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L212)

```diff
-               cameraFOV: "mobile" === (0, Em.getPlatformType)() ? cm[Jm.e.mobile_fov_v2] : nm.c,
+               cameraFOV: "mobile" === (0, UD.getPlatformType)() ? XD[QD.b.mobile_fov_v2] : ED.d,
```

#### 17. `bundles/bloxd.io/main.js` (Changed code · before: `L214-L215` → after: `L214-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L214-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L214-L215) · [Before (L214-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L214-L215)

```diff
-               touchSpeedCurve: "curve" === Jm.e.mobile_move_assist_v1,
-               touchActionButtons: "on" === Jm.e.mobile_action_buttons_v1,
+               touchSpeedCurve: "curve" === QD.b.mobile_move_assist_v1,
+               touchActionButtons: "on" === QD.b.mobile_action_buttons_v1,
```

#### 18. `bundles/bloxd.io/main.js` (Changed code · before: `L217` → after: `L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L217) · [Before (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L217)

```diff
-               jumpLock: "on" === Jm.e.mobile_jump_lock_v1
+               jumpLock: "on" === QD.b.mobile_jump_lock_v1
```

#### 19. `bundles/bloxd.io/main.js` (Changed code · before: `L224` → after: `L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L224) · [Before (L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L224)

```diff
-             return jm.e ? "webgl_holdback" : !0 === xm.g.getItem(qm.J) ? "old_intel_driver" : jm.f && !0 === xm.g.getItem(qm.F) ? "intel_gen9" : Vm.A && (0, jm.d)(xm.g.getItem(qm.D)) ? "gpu_class_webgl" : Vm.A && !0 === xm.g.getItem(qm.M) ? "gpu_wasm_arm" : !Vm.A && (0, jm.h)(nav … [truncated]
+             return hD.g ? "webgl_holdback" : !0 === rD.h.getItem(GD.G) ? "old_intel_driver" : hD.i && !0 === rD.h.getItem(GD.D) ? "intel_gen9" : nD.v && (0, hD.d)(rD.h.getItem(GD.C)) ? "gpu_class_webgl" : nD.v && !0 === rD.h.getItem(GD.L) ? "gpu_wasm_arm" : !nD.v && (0, hD.l)(nav … [truncated]
```

#### 20. `bundles/bloxd.io/main.js` (Changed code · before: `L227-L228` → after: `L227-L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L227-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L227-L228) · [Before (L227-L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L227-L228)

```diff
-           const oT = jm.n && null === ET;
-           let OT = null === xm.g.getItem(Am.dc);
+           const Uz = hD.q && null === Az;
+           let fz = null === rD.h.getItem(sD.Zb);
```

#### 21. `bundles/bloxd.io/main.js` (Changed code · before: `L240-L241` → after: `L240-L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L240-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L240-L241) · [Before (L240-L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L240-L241)

```diff
-             soundVolume: (0, wm.c)(),
-             musicVolume: null !== (km = xm.g.getItem("musicVol")) && void 0 !== km ? km : .5,
+             soundVolume: (0, LD.b)(),
+             musicVolume: null !== (CD = rD.h.getItem("musicVol")) && void 0 !== CD ? CD : .5,
```

#### 22. `bundles/bloxd.io/main.js` (Changed code · before: `L256-L257` → after: `L256-L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L256-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L256-L257) · [Before (L256-L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L256-L257)

```diff
-               const mm = xm.g.getItem("showDistantNametags");
-               return "boolean" === typeof mm ? mm : null
+               const DD = rD.h.getItem("showDistantNametags");
+               return "boolean" === typeof DD ? DD : null
```

#### 23. `bundles/bloxd.io/main.js` (Changed code · before: `L270-L271` → after: `L270-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L270-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L270-L271) · [Before (L270-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L270-L271)

```diff
-             showDebugOverlay: null !== (bm = xm.g.getItem("showDebugOverlay")) && void 0 !== bm && bm,
-             enabledDebugFeatures: null !== (Sm = xm.g.getItem("enabledDebugFeatures")) && void 0 !== Sm ? Sm : {},
+             showDebugOverlay: null !== (xD = rD.h.getItem("showDebugOverlay")) && void 0 !== xD && xD,
+             enabledDebugFeatures: null !== (TD = rD.h.getItem("enabledDebugFeatures")) && void 0 !== TD ? TD : {},
```

#### 24. `bundles/bloxd.io/main.js` (Changed code · before: `L279-L282` → after: `L279-L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L279-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L279-L282) · [Before (L279-L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L279-L282)

```diff
-               useProfanityFilter: null === (em = xm.g.getItem("UseProfanityFilter")) || void 0 === em || em,
-               showChat: null === (Nm = xm.g.getItem("showChat")) || void 0 === Nm || Nm,
-               showNewItemIndicator: null === (Gm = xm.g.getItem("showNewItemIndicator")) || void 0 === Gm || Gm,
-               showFriendOnlineToasts: null === (Xm = xm.g.getItem("showFriendOnlineToasts")) || void 0 === Xm || Xm,
+               useProfanityFilter: null === (bD = rD.h.getItem("UseProfanityFilter")) || void 0 === bD || bD,
+               showChat: null === (jD = rD.h.getItem("showChat")) || void 0 === jD || jD,
+               showNewItemIndicator: null === (dD = rD.h.getItem("showNewItemIndicator")) || void 0 === dD || dD,
+               showFriendOnlineToasts: null === (SD = rD.h.getItem("showFriendOnlineToasts")) || void 0 === SD || SD,
```

#### 25. `bundles/bloxd.io/main.js` (Changed code · before: `L285-L286` → after: `L285-L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L285-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L285-L286) · [Before (L285-L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L285-L286)

```diff
-                 const Tm = xm.g.getItem("friendRequestNotifications");
-                 return null !== (mm = Km.c.find((mm => mm === Tm))) && void 0 !== mm ? mm : "toastAndTray"
+                 const zD = rD.h.getItem("friendRequestNotifications");
+                 return null !== (DD = OD.e.find((DD => DD === zD))) && void 0 !== DD ? DD : "toastAndTray"
```

#### 26. `bundles/bloxd.io/main.js` (Changed code · before: `L288-L306` → after: `L288-L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L288-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L288-L306) · [Before (L288-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L288-L306)

```diff
-               touchscreenSensitivity: null !== (Pm = xm.g.getItem("touchscreenSensitivity")) && void 0 !== Pm ? Pm : 150,
-               mouseSensitivity: null !== (Hm = xm.g.getItem("mouseSensitivity")) && void 0 !== Hm ? Hm : 15,
-               showCoordinates: null !== (ym = xm.g.getItem("showCoordinates")) && void 0 !== ym && ym,
-               showChunkCoordinates: null !== (Cm = xm.g.getItem("showChunkCoordinates")) && void 0 !== Cm && Cm,
-               showFPS: null !== (rm = xm.g.getItem("showFPS")) && void 0 !== rm && rm,
-               disableBunnyHopping: null !== (sm = xm.g.getItem("disableBunnyHopping")) && void 0 !== sm && sm,
-               disableTexAtlas: null !== (lm = xm.g.getItem("disableTexAtlas")) && void 0 !== lm && lm,
-               disableFullscreen: null !== (Mm = xm.g.getItem("disableFullscreen")) && void 0 !== Mm && Mm,
-               ezBridging: null === (um = xm.g.getItem("ezBridging")) || void 0 === um || um,
-               ezTowering: null === (Bm = xm.g.getItem("ezTowering")) || void 0 === Bm || Bm,
-               crouchIsToggle: null !== (Lm = xm.g.getItem("crouchIsToggle")) && void 0 !== Lm && Lm,
-               vibration: null === (tm = xm.g.getItem("vibration")) || void 0 === tm || tm,
-               hideUiIsToggle: null !== (Um = xm.g.getItem("hideUiIsToggle")) && void 0 !== Um && Um,
-               enableLighting: null !== (dm = xm.g.getItem("enableLighting")) && void 0 !== dm && dm,
-               showFog: null !== (gm = xm.g.getItem("showFog")) && void 0 !== gm && gm,
-               fogChunkDistance: null !== (Wm = xm.g.getItem("fogChunkDistance")) && void 0 !== Wm ? Wm : 2,
- ... (3 more removed lines; see GitHub link above)
+               touchscreenSensitivity: null !== (iD = rD.h.getItem("touchscreenSensitivity")) && void 0 !== iD ? iD : 150,
+               mouseSensitivity: null !== (lD = rD.h.getItem("mouseSensitivity")) && void 0 !== lD ? lD : 15,
+               showCoordinates: null !== (WD = rD.h.getItem("showCoordinates")) && void 0 !== WD && WD,
+               showChunkCoordinates: null !== (ND = rD.h.getItem("showChunkCoordinates")) && void 0 !== ND && ND,
+               showFPS: null !== (ZD = rD.h.getItem("showFPS")) && void 0 !== ZD && ZD,
+               disableBunnyHopping: null !== (yD = rD.h.getItem("disableBunnyHopping")) && void 0 !== yD && yD,
+               disableTexAtlas: null !== (kD = rD.h.getItem("disableTexAtlas")) && void 0 !== kD && kD,
+               disableFullscreen: null !== (mD = rD.h.getItem("disableFullscreen")) && void 0 !== mD && mD,
+               ezBridging: null === (eD = rD.h.getItem("ezBridging")) || void 0 === eD || eD,
+               ezTowering: null === (oD = rD.h.getItem("ezTowering")) || void 0 === oD || oD,
+               crouchIsToggle: null !== (aD = rD.h.getItem("crouchIsToggle")) && void 0 !== aD && aD,
+               vibration: null === (uD = rD.h.getItem("vibration")) || void 0 === uD || uD,
+               hideUiIsToggle: null !== (vD = rD.h.getItem("hideUiIsToggle")) && void 0 !== vD && vD,
+               enableLighting: null !== (tD = rD.h.getItem("enableLighting")) && void 0 !== tD && tD,
+               showFog: null !== (FD = rD.h.getItem("showFog")) && void 0 !== FD && FD,
+               fogChunkDistance: null !== (YD = rD.h.getItem("fogChunkDistance")) && void 0 !== YD ? YD : 2,
+ ... (3 more added lines; see GitHub link above)
```

#### 27. `bundles/bloxd.io/main.js` (Changed code · before: `L310-L317` → after: `L310-L317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L310-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L310-L317) · [Before (L310-L317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L310-L317)

```diff
-               useWebGpu: null !== (fT = xm.g.getItem(Am.dc)) && void 0 !== fT ? fT : oT,
-               pixelScale: null !== (hT = xm.g.getItem("pixelScale")) && void 0 !== hT ? hT : (0, Em.getDeviceDefaultPixelScale)(),
-               pixelSmoothing: null === (AT = xm.g.getItem("pixelSmoothing")) || void 0 === AT || AT,
-               showChunkBorders: null !== (aT = xm.g.getItem("showChunkBorders")) && void 0 !== aT && aT,
-               showWeaponRaycasts: null !== (xT = xm.g.getItem("showWeaponRaycasts")) && void 0 !== xT && xT,
-               chunkFadeIn: null === (wT = xm.g.getItem("chunkFadeIn")) || void 0 === wT || wT,
-               enableClipping: null !== (DT = xm.g.getItem("enableClipping")) && void 0 !== DT && DT,
-               clipDurationSeconds: null !== (iT = xm.g.getItem("clipDurationSeconds")) && void 0 !== iT ? iT : Qm.g,
+               useWebGpu: null !== (zz = rD.h.getItem(sD.Zb)) && void 0 !== zz ? zz : Uz,
+               pixelScale: null !== (wz = rD.h.getItem("pixelScale")) && void 0 !== wz ? wz : (0, UD.getDeviceDefaultPixelScale)(),
+               pixelSmoothing: null === (pz = rD.h.getItem("pixelSmoothing")) || void 0 === pz || pz,
+               showChunkBorders: null !== (sz = rD.h.getItem("showChunkBorders")) && void 0 !== sz && sz,
+               showWeaponRaycasts: null !== (Kz = rD.h.getItem("showWeaponRaycasts")) && void 0 !== Kz && Kz,
+               chunkFadeIn: null === (rz = rD.h.getItem("chunkFadeIn")) || void 0 === rz || rz,
+               enableClipping: null !== (Lz = rD.h.getItem("enableClipping")) && void 0 !== Lz && Lz,
+               clipDurationSeconds: null !== (cz = rD.h.getItem("clipDurationSeconds")) && void 0 !== cz ? cz : JD.i,
```

#### 28. `bundles/bloxd.io/main.js` (Changed code · before: `L319` → after: `L319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L319) · [Before (L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L319)

```diff
-                 null === xm.g.getItem(zm) && (120 === xm.g.getItem("cameraFOV") && xm.g.removeItem("cameraFOV"), xm.g.setItem(zm, !0));
+                 null === rD.h.getItem(VD) && (120 === rD.h.getItem("cameraFOV") && rD.h.removeItem("cameraFOV"), rD.h.setItem(VD, !0));
```

#### 29. `bundles/bloxd.io/main.js` (Changed code · before: `L324` → after: `L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L324) · [Before (L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L324)

```diff
-                     return [fm, null !== (Tm = xm.g.getItem(fm)) && void 0 !== Tm ? Tm : hm]
+                     return [wD, null !== (zD = rD.h.getItem(wD)) && void 0 !== zD ? zD : pD]
```

#### 30. `bundles/bloxd.io/main.js` (Changed code · before: `L326` → after: `L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L326) · [Before (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L326)

```diff
-                 return Am.wb.includes(Tm.joystickMode) || (console.warn("Dropping stored joystick mode", Tm.joystickMode), xm.g.removeItem("joystickMode"), Tm.joystickMode = mm.joystickMode), Tm
+                 return sD.nb.includes(zD.joystickMode) || (console.warn("Dropping stored joystick mode", zD.joystickMode), rD.h.removeItem("joystickMode"), zD.joystickMode = DD.joystickMode), zD
```

#### 31. `bundles/bloxd.io/main.js` (Changed code · before: `L334` → after: `L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L334) · [Before (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L334)

```diff
-             const fm = null !== (Tm = xm.g.getItem(Om.e)) && void 0 !== Tm ? Tm : (0, om.e)();
+             const wD = null !== (zD = rD.h.getItem(ID.e)) && void 0 !== zD ? zD : (0, fD.l)();
```

#### 32. `bundles/bloxd.io/main.js` (Changed code · before: `L344` → after: `L344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R344) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L344) · [Before (L344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L344)

```diff
-             return null !== xm.g.getItem(Om.e)
+             return null !== rD.h.getItem(ID.e)
```

#### 33. `bundles/bloxd.io/main.js` (Changed code · before: `L350` → after: `L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L350) · [Before (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L350)

```diff
-               for (const Tm in mm) hm.j.gp(`appManagerUpdated|${Tm}`, mm[Tm])
+               for (const zD in DD) pD.l.KG(`appManagerUpdated|${zD}`, DD[zD])
```

#### 34. `bundles/bloxd.io/main.js` (Changed code · before: `L358` → after: `L358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L358) · [Before (L358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L358)

```diff
-               for (const Am in mm)(0, am.Zd)(YT[Am], mm[Am]) || (Tm[Am] = mm[Am], fm = !0);
+               for (const sD in DD)(0, KD._d)(Iz[sD], DD[sD]) || (zD[sD] = DD[sD], wD = !0);
```

#### 35. `bundles/bloxd.io/main.js` (Changed code · before: `L365` → after: `L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L365) · [Before (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L365)

```diff
-                 xm.g.setItem("UseProfanityFilter", mm.useProfanityFilter), xm.g.setItem("showChat", mm.showChat), xm.g.setItem("showNewItemIndicator", mm.showNewItemIndicator), xm.g.setItem("showFriendOnlineToasts", mm.showFriendOnlineToasts), xm.g.setItem("friendRequestNotificat … [truncated]
+                 rD.h.setItem("UseProfanityFilter", DD.useProfanityFilter), rD.h.setItem("showChat", DD.showChat), rD.h.setItem("showNewItemIndicator", DD.showNewItemIndicator), rD.h.setItem("showFriendOnlineToasts", DD.showFriendOnlineToasts), rD.h.setItem("friendRequestNotificat … [truncated]
```

#### 36. `bundles/bloxd.io/main.js` (Changed code · before: `L368` → after: `L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L368) · [Before (L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L368)

```diff
-                     for (const hm of Object.keys(fm)) mm[hm] !== Tm[hm] && (mm[hm] === fm[hm] ? xm.g.removeItem(hm) : xm.g.setItem(hm, mm[hm]))
+                     for (const pD of Object.keys(wD)) DD[pD] !== zD[pD] && (DD[pD] === wD[pD] ? rD.h.removeItem(pD) : rD.h.setItem(pD, DD[pD]))
```

#### 37. `bundles/bloxd.io/main.js` (Changed code · before: `L371` → after: `L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L371) · [Before (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L371)

```diff
-               void 0 !== Tm.soundVolume && xm.g.setItem("soundVol", Tm.soundVolume), void 0 !== Tm.musicVolume && xm.g.setItem("musicVol", Tm.musicVolume), void 0 !== Tm.showDistantNametags && xm.g.setItem("showDistantNametags", Tm.showDistantNametags), void 0 !== Tm.showDebugOve … [truncated]
+               void 0 !== zD.soundVolume && rD.h.setItem("soundVol", zD.soundVolume), void 0 !== zD.musicVolume && rD.h.setItem("musicVol", zD.musicVolume), void 0 !== zD.showDistantNametags && rD.h.setItem("showDistantNametags", zD.showDistantNametags), void 0 !== zD.showDebugOve … [truncated]
```

#### 38. `bundles/bloxd.io/main.js` (Changed code · before: `L382-L383` → after: `L382-L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L382-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L382-L383) · [Before (L382-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L382-L383)

```diff
-               const Tm = jT() ? null : (0, om.c)(mm);
-               return null !== Tm && void 0 !== Tm ? Tm : YT.clientEscMenuOptions.antiAliasing
+               const zD = Gz() ? null : (0, fD.d)(DD);
+               return null !== zD && void 0 !== zD ? zD : Iz.clientEscMenuOptions.antiAliasing
```

#### 39. `bundles/bloxd.io/main.js` (Changed code · before: `L386-L387` → after: `L386-L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L386-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L386-L387) · [Before (L386-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L386-L387)

```diff
-               (0, om.d)(mm);
-               const Tm = jT() ? YT.clientEscMenuOptions.antiAliasing : (0, om.e)();
+               (0, fD.h)(DD);
+               const zD = Gz() ? Iz.clientEscMenuOptions.antiAliasing : (0, fD.l)();
```

#### 40. `bundles/bloxd.io/main.js` (Changed code · before: `L404` → after: `L404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L404) · [Before (L404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L404)

```diff
-               let mm = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, Ym.i)(),
+               let DD = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : (0, BD.l)(),
```

#### 41. `bundles/bloxd.io/main.js` (Changed code · before: `L406-L407` → after: `L406-L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L406-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L406-L407) · [Before (L406-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L406-L407)

```diff
-               const fm = (0, Ym.o)(mm, Tm);
-               return (0, Ym.y)() && !0 === xm.g.getItem(Am.dc) && xm.g.removeItem(Am.dc), fm
+               const wD = (0, BD.q)(DD, zD);
+               return (0, BD.A)() && !0 === rD.h.getItem(sD.Zb) && rD.h.removeItem(sD.Zb), wD
```

#### 42. `bundles/bloxd.io/main.js` (Changed code · before: `L410` → after: `L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L410) · [Before (L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L410)

```diff
-               (0, Ym.d)(mm) && (0, Ym.y)() && OT && YT.clientEscMenuOptions.useWebGpu && (ET = pT(), this.setEscMenuOptionsUnstored({
+               (0, BD.e)(DD) && (0, BD.A)() && fz && Iz.clientEscMenuOptions.useWebGpu && (Az = Rz(), this.setEscMenuOptionsUnstored({
```

#### 43. `bundles/bloxd.io/main.js` (Changed code · before: `L415` → after: `L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L415) · [Before (L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L415)

```diff
-               return (0, Ym.F)() || !0 === xm.g.getItem(qm.J)
+               return (0, BD.G)() || !0 === rD.h.getItem(GD.G)
```

#### 44. `bundles/bloxd.io/main.js` (Changed code · before: `L418` → after: `L418`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R418) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L418) · [Before (L418)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L418)

```diff
-               return (0, Ym.y)()
+               return (0, BD.A)()
```

#### 45. `bundles/bloxd.io/main.js` (Changed code · before: `L421` → after: `L421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L421) · [Before (L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L421)

```diff
-               return OT ? ET : null
+               return fz ? Az : null
```

#### 46. `bundles/bloxd.io/main.js` (Changed code · before: `L424` → after: `L424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L424) · [Before (L424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L424)

```diff
-               !0 === xm.g.getItem(qm.J) && (0, Em.hasUsableWebGpuAdapter)()
+               !0 === rD.h.getItem(GD.G) && (0, UD.hasUsableWebGpuAdapter)()
```

#### 47. `bundles/bloxd.io/main.js` (Changed code · before: `L468` → after: `L468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L468) · [Before (L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L468)

```diff
-         }, , , , , , , , (mm, Tm, fm) => {
+         }, , , , , (DD, zD, wD) => {
```

#### 48. `bundles/bloxd.io/main.js` (Changed code · before: `L472-L474` → after: `L472-L474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L472-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L472-L474) · [Before (L472-L474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L472-L474)

```diff
-             i: () => Rm,
-             j: () => im,
-             m: () => pm
+             h: () => RD,
+             l: () => gD,
+             o: () => AD
```

#### 49. `bundles/bloxd.io/main.js` (Changed code · before: `L476` → after: `L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L476) · [Before (L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L476)

```diff
-           var hm = fm(33),
+           var pD = wD(28),
```

#### 50. `bundles/bloxd.io/main.js` (Changed code · before: `L486` → after: `L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L486) · [Before (L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L486)

```diff
-               super(...arguments), this.mV = !1, this.fV = [], this.hV = {}
+               super(...arguments), this.YG = !1, this.fn = [], this.pM = {}
```

#### 51. `bundles/bloxd.io/main.js` (Changed code · before: `L490` → after: `L490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L490) · [Before (L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L490)

```diff
-               this.mV || !fm ? this.emit(mm, Tm) : this.fV.push({
+               this.YG || !wD ? this.emit(DD, zD) : this.fn.push({
```

#### 52. `bundles/bloxd.io/main.js` (Changed code · before: `L497-L498` → after: `L497-L498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L497-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L497-L498) · [Before (L497-L498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L497-L498)

```diff
-               const hm = this.xV(mm, Tm);
-               return this.on(mm, hm), this.hV[mm] = (null !== (fm = this.hV[mm]) && void 0 !== fm ? fm : 0) + 1, {
+               const pD = this.rM(DD, zD);
+               return this.on(DD, pD), this.pM[DD] = (null !== (wD = this.pM[DD]) && void 0 !== wD ? wD : 0) + 1, {
```

#### 53. `bundles/bloxd.io/main.js` (Changed code · before: `L507` → after: `L507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L507) · [Before (L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L507)

```diff
-               const fm = this.xV(mm, Tm);
+               const wD = this.rM(DD, zD);
```

#### 54. `bundles/bloxd.io/main.js` (Changed code · before: `L516-L517` → after: `L516-L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L516-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L516-L517) · [Before (L516-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L516-L517)

```diff
-                 fm = this.hV[Tm];
-               fm > 1 ? this.hV[Tm] = fm - 1 : 1 === fm && delete this.hV[Tm]
+                 wD = this.pM[zD];
+               wD > 1 ? this.pM[zD] = wD - 1 : 1 === wD && delete this.pM[zD]
```

#### 55. `bundles/bloxd.io/main.js` (Changed code · before: `L524` → after: `L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L524) · [Before (L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L524)

```diff
-                   console.error(`Error in PubSub listener for event ${mm}:`, hm)
+                   console.error(`Error in PubSub listener for event ${DD}:`, pD)
```

#### 56. `bundles/bloxd.io/main.js` (Changed code · before: `L529` → after: `L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L529) · [Before (L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L529)

```diff
-               this.mV = mm, mm && (this.fV.forEach((mm => {
+               this.YG = DD, DD && (this.fn.forEach((DD => {
```

#### 57. `bundles/bloxd.io/main.js` (Changed code · before: `L534-L535` → after: `L534-L535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L534-L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L534-L535) · [Before (L534-L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L534-L535)

```diff
-                 this.gp(Tm, fm)
-               })), this.fV = [])
+                 this.KG(zD, wD)
+               })), this.fn = [])
```

#### 58. `bundles/bloxd.io/main.js` (Changed code · before: `L538` → after: `L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L538) · [Before (L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L538)

```diff
-               this.fV = []
+               this.fn = []
```

#### 59. `bundles/bloxd.io/main.js` (Changed code · before: `L544` → after: `L544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L544) · [Before (L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L544)

```diff
-             im.RV(!0)
+             gD.XM(!0)
```

#### 60. `bundles/bloxd.io/main.js` (Changed code · before: `L553` → after: `L553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L553) · [Before (L553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L553)

```diff
-         }, , mm => {
+         }, , , DD => {
```

#### 61. `bundles/bloxd.io/main.js` (Changed code · before: `L560` → after: `L560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L560) · [Before (L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L560)

```diff
-             this.nO = mm, this.context = Tm, this.once = fm || !1
+             this.LI = DD, this.context = zD, this.once = wD || !1
```

#### 62. `bundles/bloxd.io/main.js` (Changed code · before: `L566-L567` → after: `L566-L567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L566-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L566-L567) · [Before (L566-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L566-L567)

```diff
-               Dm = fm ? fm + Tm : Tm;
-             return mm._events[Dm] ? mm._events[Dm].nO ? mm._events[Dm] = [mm._events[Dm], wm] : mm._events[Dm].push(wm) : (mm._events[Dm] = wm, mm._eventsCount++), mm
+               cD = wD ? wD + zD : zD;
+             return DD._events[cD] ? DD._events[cD].LI ? DD._events[cD] = [DD._events[cD], LD] : DD._events[cD].push(LD) : (DD._events[cD] = LD, DD._eventsCount++), DD
```

#### 63. `bundles/bloxd.io/main.js` (Changed code · before: `L571` → after: `L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L571) · [Before (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L571)

```diff
-             0 === --mm._eventsCount ? mm._events = new hm : delete mm._events[Tm]
+             0 === --DD._eventsCount ? DD._events = new pD : delete DD._events[zD]
```

#### 64. `bundles/bloxd.io/main.js` (Changed code · before: `L583` → after: `L583`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R583) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L583) · [Before (L583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L583)

```diff
-             var Tm = fm ? fm + mm : mm,
+             var zD = wD ? wD + DD : DD,
```

#### 65. `bundles/bloxd.io/main.js` (Changed code · before: `L586-L587` → after: `L586-L587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L586-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L586-L587) · [Before (L586-L587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L586-L587)

```diff
-             if (hm.nO) return [hm.nO];
-             for (var Am = 0, am = hm.length, xm = new Array(am); Am < am; Am++) xm[Am] = hm[Am].nO;
+             if (pD.LI) return [pD.LI];
+             for (var sD = 0, KD = pD.length, rD = new Array(KD); sD < KD; sD++) rD[sD] = pD[sD].LI;
```

#### 66. `bundles/bloxd.io/main.js` (Changed code · before: `L590` → after: `L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L590) · [Before (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L590)

```diff
-             var Tm = fm ? fm + mm : mm,
+             var zD = wD ? wD + DD : DD,
```

#### 67. `bundles/bloxd.io/main.js` (Changed code · before: `L592` → after: `L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L592) · [Before (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L592)

```diff
-             return hm ? hm.nO ? 1 : hm.length : 0
+             return pD ? pD.LI ? 1 : pD.length : 0
```

#### 68. `bundles/bloxd.io/main.js` (Changed code · before: `L594` → after: `L594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L594) · [Before (L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L594)

```diff
-             var wm = fm ? fm + mm : mm;
+             var LD = wD ? wD + DD : DD;
```

#### 69. `bundles/bloxd.io/main.js` (Changed code · before: `L598-L599` → after: `L598-L599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L598-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L598-L599) · [Before (L598-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L598-L599)

```diff
-             if (Rm.nO) {
-               switch (Rm.once && this.removeListener(mm, Rm.nO, void 0, !0), pm) {
+             if (RD.LI) {
+               switch (RD.once && this.removeListener(DD, RD.LI, void 0, !0), AD) {
```

#### 70. `bundles/bloxd.io/main.js` (Changed code · before: `L601` → after: `L601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L601) · [Before (L601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L601)

```diff
-                   return Rm.nO.call(Rm.context), !0;
+                   return RD.LI.call(RD.context), !0;
```

#### 71. `bundles/bloxd.io/main.js` (Changed code · before: `L603` → after: `L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L603) · [Before (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L603)

```diff
-                   return Rm.nO.call(Rm.context, Tm), !0;
+                   return RD.LI.call(RD.context, zD), !0;
```

#### 72. `bundles/bloxd.io/main.js` (Changed code · before: `L605` → after: `L605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L605) · [Before (L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L605)

```diff
-                   return Rm.nO.call(Rm.context, Tm, hm), !0;
+                   return RD.LI.call(RD.context, zD, pD), !0;
```

#### 73. `bundles/bloxd.io/main.js` (Changed code · before: `L607` → after: `L607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L607) · [Before (L607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L607)

```diff
-                   return Rm.nO.call(Rm.context, Tm, hm, Am), !0;
+                   return RD.LI.call(RD.context, zD, pD, sD), !0;
```

#### 74. `bundles/bloxd.io/main.js` (Changed code · before: `L609` → after: `L609`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R609) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L609) · [Before (L609)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L609)

```diff
-                   return Rm.nO.call(Rm.context, Tm, hm, Am, am), !0;
+                   return RD.LI.call(RD.context, zD, pD, sD, KD), !0;
```

#### 75. `bundles/bloxd.io/main.js` (Changed code · before: `L611` → after: `L611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L611) · [Before (L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L611)

```diff
-                   return Rm.nO.call(Rm.context, Tm, hm, Am, am, xm), !0
+                   return RD.LI.call(RD.context, zD, pD, sD, KD, rD), !0
```

#### 76. `bundles/bloxd.io/main.js` (Changed code · before: `L614` → after: `L614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L614) · [Before (L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L614)

```diff
-               Rm.nO.apply(Rm.context, Dm)
+               RD.LI.apply(RD.context, cD)
```

#### 77. `bundles/bloxd.io/main.js` (Changed code · before: `L617` → after: `L617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L617) · [Before (L617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L617)

```diff
-               for (im = 0; im < om; im++) switch (Rm[im].once && this.removeListener(mm, Rm[im].nO, void 0, !0), pm) {
+               for (gD = 0; gD < fD; gD++) switch (RD[gD].once && this.removeListener(DD, RD[gD].LI, void 0, !0), AD) {
```

#### 78. `bundles/bloxd.io/main.js` (Changed code · before: `L619` → after: `L619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L619) · [Before (L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L619)

```diff
-                   Rm[im].nO.call(Rm[im].context);
+                   RD[gD].LI.call(RD[gD].context);
```

#### 79. `bundles/bloxd.io/main.js` (Changed code · before: `L622` → after: `L622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L622) · [Before (L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L622)

```diff
-                   Rm[im].nO.call(Rm[im].context, Tm);
+                   RD[gD].LI.call(RD[gD].context, zD);
```

#### 80. `bundles/bloxd.io/main.js` (Changed code · before: `L625` → after: `L625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L625) · [Before (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L625)

```diff
-                   Rm[im].nO.call(Rm[im].context, Tm, hm);
+                   RD[gD].LI.call(RD[gD].context, zD, pD);
```

#### 81. `bundles/bloxd.io/main.js` (Changed code · before: `L628` → after: `L628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L628) · [Before (L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L628)

```diff
-                   Rm[im].nO.call(Rm[im].context, Tm, hm, Am);
+                   RD[gD].LI.call(RD[gD].context, zD, pD, sD);
```

#### 82. `bundles/bloxd.io/main.js` (Changed code · before: `L633` → after: `L633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L633) · [Before (L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L633)

```diff
-                   Rm[im].nO.apply(Rm[im].context, Dm)
+                   RD[gD].LI.apply(RD[gD].context, cD)
```

#### 83. `bundles/bloxd.io/main.js` (Changed code · before: `L642` → after: `L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L642) · [Before (L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L642)

```diff
-             var am = fm ? fm + mm : mm;
+             var KD = wD ? wD + DD : DD;
```

#### 84. `bundles/bloxd.io/main.js` (Changed code · before: `L646` → after: `L646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L646) · [Before (L646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L646)

```diff
-             if (wm.nO) wm.nO !== Tm || Am && !wm.once || hm && wm.context !== hm || xm(this, am);
+             if (LD.LI) LD.LI !== zD || sD && !LD.once || pD && LD.context !== pD || rD(this, KD);
```

#### 85. `bundles/bloxd.io/main.js` (Changed code · before: `L648-L649` → after: `L648-L649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R648) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L648-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L648-L649) · [Before (L648-L649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L648-L649)

```diff
-               for (var Dm = 0, im = [], Rm = wm.length; Dm < Rm; Dm++)(wm[Dm].nO !== Tm || Am && !wm[Dm].once || hm && wm[Dm].context !== hm) && im.push(wm[Dm]);
-               im.length ? this._events[am] = 1 === im.length ? im[0] : im : xm(this, am)
+               for (var cD = 0, gD = [], RD = LD.length; cD < RD; cD++)(LD[cD].LI !== zD || sD && !LD[cD].once || pD && LD[cD].context !== pD) && gD.push(LD[cD]);
+               gD.length ? this._events[KD] = 1 === gD.length ? gD[0] : gD : rD(this, KD)
```

#### 86. `bundles/bloxd.io/main.js` (Changed code · before: `L652` → after: `L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L652) · [Before (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L652)

```diff
-           }, wm.prototype.YV = function(mm) {
+           }, LD.prototype.YM = function(DD) {
```

#### 87. `bundles/bloxd.io/main.js` (Changed code · before: `L654` → after: `L654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L654) · [Before (L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L654)

```diff
-             return mm ? (Tm = fm ? fm + mm : mm, this._events[Tm] && xm(this, Tm)) : (this._events = new hm, this._eventsCount = 0), this
+             return DD ? (zD = wD ? wD + DD : DD, this._events[zD] && rD(this, zD)) : (this._events = new pD, this._eventsCount = 0), this
```

#### 88. `bundles/bloxd.io/main.js` (Changed code · before: `L656` → after: `L656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L656) · [Before (L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L656)

```diff
-         }, , , , (mm, Tm, fm) => {
+         }, , , , , , , (DD, zD, wD) => {
```

#### 89. `bundles/bloxd.io/main.js` (Changed code · before: `L658-L659` → after: `L658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L658) · [Before (L658-L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L658-L659)

```diff
-             d: () => Rm,
-             e: () => om,
+             c: () => RD,
```

#### 90. `bundles/bloxd.io/main.js` (Changed code · before: `L665` → after: `L665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L665) · [Before (L665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L665)

```diff
-           var hm = fm(45),
+           var pD = wD(40),
```

#### 91. `bundles/bloxd.io/main.js` (Changed code · before: `L671` → after: `L671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L671) · [Before (L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L671)

```diff
-               return `bloxd-${mm}`
+               return `bloxd-${DD}`
```

#### 92. `bundles/bloxd.io/main.js` (Changed code · before: `L702` → after: `L702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L702) · [Before (L702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L702)

```diff
-                 return console.error("Caught error", fm, "when attempting to read from cookies. Some parts of bloxd may not work as intended. Please enable cookies in your browser settings."), null !== (Tm = this._cachedVals[mm]) && void 0 !== Tm ? Tm : null
+                 return console.error("Caught error", wD, "when attempting to read from cookies. Some parts of bloxd may not work as intended. Please enable cookies in your browser settings."), null !== (zD = this._cachedVals[DD]) && void 0 !== zD ? zD : null
```

#### 93. `bundles/bloxd.io/main.js` (Changed code · before: `L736` → after: `L736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L736) · [Before (L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L736)

```diff
-                 return console.error("Caught error", fm, "when attempting to read from localStorage. Some parts of bloxd may not work as intended. Please use a browser that supports localStorage (some browsers such as Brave do not). Also try playing bloxd in a normal tab instead  … [truncated]
+                 return console.error("Caught error", wD, "when attempting to read from localStorage. Some parts of bloxd may not work as intended. Please use a browser that supports localStorage (some browsers such as Brave do not). Also try playing bloxd in a normal tab instead  … [truncated]
```

#### 94. `bundles/bloxd.io/main.js` (Changed code · before: `L767` → after: `L767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L767) · [Before (L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L767)

```diff
-                 return console.error("Caught error", fm, "when attempting to read from sessionStorage."), null !== (Tm = this._cachedVals[mm]) && void 0 !== Tm ? Tm : null
+                 return console.error("Caught error", wD, "when attempting to read from sessionStorage."), null !== (zD = this._cachedVals[DD]) && void 0 !== zD ? zD : null
```

#### 95. `bundles/bloxd.io/main.js` (Changed code · before: `L794` → after: `L794`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L794) · [Before (L794)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L794)

```diff
-                 return null !== (hm = this._cachedVals[mm]) && void 0 !== hm ? hm : null
+                 return null !== (pD = this._cachedVals[DD]) && void 0 !== pD ? pD : null
```

#### 96. `bundles/bloxd.io/main.js` (Changed code · before: `L816` → after: `L816`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L816) · [Before (L816)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L816)

```diff
-                   for (let hm, Am, am = 0, xm = 0; Am = mm.charAt(xm++); ~Am && (hm = am % 4 ? 64 * hm + Am : Am, am++ % 4) ? Tm += String.fromCharCode(255 & hm >> (-2 * am & 6)) : 0) Am = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(Am);
+                   for (let pD, sD, KD = 0, rD = 0; sD = DD.charAt(rD++); ~sD && (pD = KD % 4 ? 64 * pD + sD : sD, KD++ % 4) ? zD += String.fromCharCode(255 & pD >> (-2 * KD & 6)) : 0) sD = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(sD);
```

#### 97. `bundles/bloxd.io/main.js` (Changed code · before: `L823` → after: `L823`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R823) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L823) · [Before (L823)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L823)

```diff
-               return xm ? Am = xm : (Am = Ym.FZAkcO(Am), mm[am] = Am), Am
+               return rD ? sD = rD : (sD = BD.FZAkcO(sD), DD[KD] = sD), sD
```

#### 98. `bundles/bloxd.io/main.js` (Changed code · before: `L865` → after: `L865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L865) · [Before (L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L865)

```diff
-         }, , , , , , , , (mm, Tm, fm) => {
+         }, , , , , (DD, zD, wD) => {
```

#### 99. `bundles/bloxd.io/main.js` (Changed code · before: `L997` → after: `L997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L997) · [Before (L997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L997)

```diff
-                 return mm instanceof this ? mm : am.resolve(new this(Am), mm)
+                 return DD instanceof this ? DD : KD.resolve(new this(sD), DD)
```

#### 100. `bundles/bloxd.io/main.js` (Changed code · before: `L1046` → after: `L1046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L1046) · [Before (L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L1046)

```diff
-                 return this.state !== Dm ? pm(fm, this.state === wm ? mm : Tm, this.outcome) : this.queue.push(new Rm(fm, mm, Tm)), fm
+                 return this.state !== cD ? AD(wD, this.state === LD ? DD : zD, this.outcome) : this.queue.push(new RD(wD, DD, zD)), wD
```

#### 101. `bundles/bloxd.io/main.js` (Changed code · before: `L1419` → after: `L1419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L1419) · [Before (L1419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L1419)

```diff
-                       return mm ? Tm : em(Tm)
+                       return DD ? zD : bD(zD)
```

#### 102. `bundles/bloxd.io/main.js` (Changed code · before: `L1695` → after: `L1695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L1695) · [Before (L1695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L1695)

```diff
-                   mm instanceof ArrayBuffer ? (hm = mm, Am += hT) : (hm = mm.buffer, "[object Int8Array]" === fm ? Am += aT : "[object Uint8Array]" === fm ? Am += xT : "[object Uint8ClampedArray]" === fm ? Am += wT : "[object Int16Array]" === fm ? Am += DT : "[object Uint16Array] … [truncated]
+                   DD instanceof ArrayBuffer ? (pD = DD, sD += wz) : (pD = DD.buffer, "[object Int8Array]" === wD ? sD += sz : "[object Uint8Array]" === wD ? sD += Kz : "[object Uint8ClampedArray]" === wD ? sD += rz : "[object Int16Array]" === wD ? sD += Lz : "[object Uint16Array] … [truncated]
```

#### 103. `bundles/bloxd.io/main.js` (Changed code · before: `L1719` → after: `L1719`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L1719) · [Before (L1719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L1719)

```diff
-                   case hT:
+                   case wz:
```

#### 104. `bundles/bloxd.io/main.js` (Changed code · before: `L1721` → after: `L1721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L1721) · [Before (L1721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L1721)

```diff
-                   case AT:
+                   case pz:
```

#### 105. `bundles/bloxd.io/main.js` (Changed code · before: `L1725` → after: `L1725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L1725) · [Before (L1725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L1725)

```diff
-                   case aT:
+                   case sz:
```

#### 106. `bundles/bloxd.io/main.js` (Changed code · before: `L1727` → after: `L1727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L1727) · [Before (L1727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L1727)

```diff
-                   case xT:
+                   case Kz:
```

#### 107. `bundles/bloxd.io/main.js` (Changed code · before: `L1729` → after: `L1729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L1729) · [Before (L1729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L1729)

```diff
-                   case wT:
+                   case rz:
```

#### 108. `bundles/bloxd.io/main.js` (Changed code · before: `L1731` → after: `L1731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L1731) · [Before (L1731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L1731)

```diff
-                   case DT:
+                   case Lz:
```

#### 109. `bundles/bloxd.io/main.js` (Changed code · before: `L1733` → after: `L1733`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1733) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L1733) · [Before (L1733)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L1733)

```diff
-                   case RT:
+                   case gz:
```

#### 110. `bundles/bloxd.io/main.js` (Changed code · before: `L1735` → after: `L1735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L1735) · [Before (L1735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L1735)

```diff
-                   case iT:
+                   case cz:
```

#### 111. `bundles/bloxd.io/main.js` (Changed code · before: `L1737` → after: `L1737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L1737) · [Before (L1737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L1737)

```diff
-                   case pT:
+                   case Rz:
```

#### 112. `bundles/bloxd.io/main.js` (Changed code · before: `L1739` → after: `L1739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L1739) · [Before (L1739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L1739)

```diff
-                   case ET:
+                   case Az:
```

#### 113. `bundles/bloxd.io/main.js` (Changed code · before: `L1741` → after: `L1741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L1741) · [Before (L1741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L1741)

```diff
-                   case oT:
+                   case Uz:
```

#### 114. `bundles/bloxd.io/main.js` (Changed code · before: `L1779` → after: `L1779`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1779) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L1779) · [Before (L1779)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L1779)

```diff
-                 return fm.qV = KT, Am
+                 return wD.LO = Mz, sD
```

#### 115. `bundles/bloxd.io/main.js` (Changed code · before: `L1801` → after: `L1801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L1801) · [Before (L1801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L1801)

```diff
-                         hm && (hm = Am.qV.deserialize(hm)), Tm(hm)
+                         pD && (pD = sD.LO.deserialize(pD)), zD(pD)
```

#### 116. `bundles/bloxd.io/main.js` (Changed code · before: `L1821` → after: `L1821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L1821) · [Before (L1821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L1821)

```diff
-                             if (im && (im = Am.qV.deserialize(im)), void 0 !== (im = mm(im, Dm.key, wm + 1))) return void Tm(im)
+                             if (gD && (gD = sD.LO.deserialize(gD)), void 0 !== (gD = DD(gD, cD.key, LD + 1))) return void zD(gD)
```

#### 117. `bundles/bloxd.io/main.js` (Changed code · before: `L1841` → after: `L1841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R1841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L1841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L1841) · [Before (L1841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L1841)

```diff
-                     Dm.qV.serialize(Tm, (function(Tm, im) {
+                     cD.LO.serialize(zD, (function(zD, gD) {
```

#### 118. `bundles/bloxd.io/main.js` (Changed code · before: `L2052` → after: `L2052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L2052) · [Before (L2052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L2052)

```diff
-                 return fm.keyPrefix = CT(mm, Tm._defaultConfig), sT() ? (Tm._dbInfo = fm, fm.qV = KT, im.resolve()) : im.reject()
+                 return wD.keyPrefix = Wz(DD, zD._defaultConfig), Zz() ? (zD._dbInfo = wD, wD.LO = Mz, gD.resolve()) : gD.reject()
```

#### 119. `bundles/bloxd.io/main.js` (Changed code · before: `L2072` → after: `L2072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L2072) · [Before (L2072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L2072)

```diff
-                   return hm && (hm = Tm.qV.deserialize(hm)), hm
+                   return pD && (pD = zD.LO.deserialize(pD)), pD
```

#### 120. `bundles/bloxd.io/main.js` (Changed code · before: `L2084` → after: `L2084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L2084) · [Before (L2084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L2084)

```diff
-                         if (im && (im = Tm.qV.deserialize(im)), void 0 !== (im = mm(im, Dm.substring(Am), xm++))) return im
+                         if (gD && (gD = zD.LO.deserialize(gD)), void 0 !== (gD = DD(gD, cD.substring(sD), rD++))) return gD
```

#### 121. `bundles/bloxd.io/main.js` (Changed code · before: `L2142` → after: `L2142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L2142) · [Before (L2142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L2142)

```diff
-                     xm.qV.serialize(Tm, (function(Tm, hm) {
+                     rD.LO.serialize(zD, (function(zD, pD) {
```

#### 122. `bundles/bloxd.io/main.js` (Changed code · before: `L2356-L2357` → after: `L2356-L2357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2356-L2357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L2356-L2357) · [Before (L2356-L2357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L2356-L2357)

```diff
-                 of = new Ef;
-               Tm.exports = of
+                 Uw = new Aw;
+               zD.exports = Uw
```

#### 123. `bundles/bloxd.io/main.js` (Changed code · before: `L2362` → after: `L2362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L2362) · [Before (L2362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L2362)

```diff
-         }, , , , (mm, Tm, fm) => {
+         }, , , , , , , , , (DD, zD, wD) => {
```

#### 124. `bundles/bloxd.io/main.js` (Changed code · before: `L2431` → after: `L2431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L2431) · [Before (L2431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L2431)

```diff
-         }, , , , , , (mm, Tm, fm) => {
+         }, , (DD, zD, wD) => {
```

#### 125. `bundles/bloxd.io/main.js` (Changed code · before: `L2433` → after: `L2433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L2433) · [Before (L2433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L2433)

```diff
-             c: () => Am
+             b: () => sD
```

#### 126. `bundles/bloxd.io/main.js` (Changed code · before: `L2435` → after: `L2435`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L2435) · [Before (L2435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L2435)

```diff
-           var hm = fm(37);
+           var pD = wD(35);
```

#### 127. `bundles/bloxd.io/main.js` (Changed code · before: `L2439` → after: `L2439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L2439) · [Before (L2439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L2439)

```diff
-             return null !== (mm = hm.g.getItem("soundVol")) && void 0 !== mm ? mm : .5
+             return null !== (DD = pD.h.getItem("soundVol")) && void 0 !== DD ? DD : .5
```

#### 128. `bundles/bloxd.io/main.js` (Changed code · before: `L2441-L2444` → after: `L2441-L2444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2441-L2444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L2441-L2444) · [Before (L2441-L2444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L2441-L2444)

```diff
-         }, , , , (mm, Tm, fm) => {
-           mm.exports = fm(61)
-         }, , (mm, Tm, fm) => {
-           var hm = fm(69),
+         }, , , , , , , (DD, zD, wD) => {
+           DD.exports = wD(66)
+         }, , , , , , , , (DD, zD, wD) => {
+           var pD = wD(72),
```

#### 129. `bundles/bloxd.io/main.js` (Changed code · before: `L2555-L2556` → after: `L2555-L2556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2555-L2556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L2555-L2556) · [Before (L2555-L2556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L2555-L2556)

```diff
-                   case Am:
-                   case am:
+                   case sD:
+                   case KD:
```

#### 130. `bundles/bloxd.io/main.js` (Changed code · before: `L2577` → after: `L2577`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L2577) · [Before (L2577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L2577)

```diff
-                   return null === mm || "object" !== typeof mm ? null : "function" === typeof(mm = Em && mm[Em] || mm["@@iterator"]) ? mm : null
+                   return null === DD || "object" !== typeof DD ? null : "function" === typeof(DD = UD && DD[UD] || DD["@@iterator"]) ? DD : null
```

#### 131. `bundles/bloxd.io/main.js` (Changed code · before: `L2731` → after: `L2731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L2731) · [Before (L2731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L2731)

```diff
-         }, , , , , , , , mm => {
+         }, , , , , , DD => {
```

#### 132. `bundles/bloxd.io/main.js` (Changed code · before: `L2764` → after: `L2764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L2764) · [Before (L2764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L2764)

```diff
-         }, , , , , , , , (mm, Tm, fm) => {
+         }, , , , , , , (DD, zD, wD) => {
```

#### 133. `bundles/bloxd.io/main.js` (Changed code · before: `L2771-L2774` → after: `L2771-L2774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2771-L2774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L2771-L2774) · [Before (L2771-L2774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L2771-L2774)

```diff
-           }(), mm.exports = fm(84)
-         }, , , , , , , (mm, Tm, fm) => {
-           var hm = fm(59),
-             Am = fm(69),
+           }(), DD.exports = wD(85)
+         }, , , , , , (DD, zD, wD) => {
+           var pD = wD(58),
+             sD = wD(72),
```

#### 134. `bundles/bloxd.io/main.js` (Changed code · before: `L2862` → after: `L2862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L2862) · [Before (L2862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L2862)

```diff
-             }(Tm) && (null === fm ? mm.removeAttribute(Tm) : mm.setAttribute(Tm, "" + fm)) : Am.mustUseProperty ? mm[Am.propertyName] = null === fm ? 3 !== Am.type && "" : fm : (Tm = Am.attributeName, hm = Am.attributeNamespace, null === fm ? mm.removeAttribute(Tm) : (fm = 3 ===  … [truncated]
+             }(zD) && (null === wD ? DD.removeAttribute(zD) : DD.setAttribute(zD, "" + wD)) : sD.mustUseProperty ? DD[sD.propertyName] = null === wD ? 3 !== sD.type && "" : wD : (zD = sD.attributeName, pD = sD.attributeNamespace, null === wD ? DD.removeAttribute(zD) : (wD = 3 ===  … [truncated]
```

#### 135. `bundles/bloxd.io/main.js` (Changed code · before: `L2903` → after: `L2903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R2903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L2903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L2903) · [Before (L2903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L2903)

```diff
-             return null === mm || "object" !== typeof mm ? null : "function" === typeof(mm = Mm && mm[Mm] || mm["@@iterator"]) ? mm : null
+             return null === DD || "object" !== typeof DD ? null : "function" === typeof(DD = mD && DD[mD] || DD["@@iterator"]) ? DD : null
```

#### 136. `bundles/bloxd.io/main.js` (Changed code · before: `L3001` → after: `L3001`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3001) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L3001) · [Before (L3001)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L3001)

```diff
-               case cm:
+               case XD:
```

#### 137. `bundles/bloxd.io/main.js` (Changed code · before: `L3003` → after: `L3003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L3003) · [Before (L3003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L3003)

```diff
-               case Jm:
+               case QD:
```

#### 138. `bundles/bloxd.io/main.js` (Changed code · before: `L3005` → after: `L3005`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L3005) · [Before (L3005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L3005)

```diff
-               case Zm:
+               case PD:
```

#### 139. `bundles/bloxd.io/main.js` (Changed code · before: `L3007` → after: `L3007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L3007) · [Before (L3007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L3007)

```diff
-               case zm:
+               case VD:
```

#### 140. `bundles/bloxd.io/main.js` (Changed code · before: `L3009` → after: `L3009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L3009) · [Before (L3009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L3009)

```diff
-               case em:
+               case bD:
```

#### 141. `bundles/bloxd.io/main.js` (Changed code · before: `L3011` → after: `L3011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L3011) · [Before (L3011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L3011)

```diff
-               case Nm:
+               case jD:
```

#### 142. `bundles/bloxd.io/main.js` (Changed code · before: `L3015` → after: `L3015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L3015) · [Before (L3015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L3015)

```diff
-               case bm:
+               case xD:
```

#### 143. `bundles/bloxd.io/main.js` (Changed code · before: `L3017` → after: `L3017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L3017) · [Before (L3017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L3017)

```diff
-               case km:
+               case CD:
```

#### 144. `bundles/bloxd.io/main.js` (Changed code · before: `L3019` → after: `L3019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L3019) · [Before (L3019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L3019)

```diff
-               case Sm:
+               case TD:
```

#### 145. `bundles/bloxd.io/main.js` (Changed code · before: `L3022` → after: `L3022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L3022) · [Before (L3022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L3022)

```diff
-               case Gm:
+               case dD:
```

#### 146. `bundles/bloxd.io/main.js` (Changed code · before: `L3024` → after: `L3024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L3024) · [Before (L3024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L3024)

```diff
-               case Pm:
+               case iD:
```

#### 147. `bundles/bloxd.io/main.js` (Changed code · before: `L3026` → after: `L3026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L3026) · [Before (L3026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L3026)

```diff
-               case Xm:
+               case SD:
```

#### 148. `bundles/bloxd.io/main.js` (Changed code · before: `L3110` → after: `L3110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L3110) · [Before (L3110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L3110)

```diff
-               checked: null != fm ? fm : mm._wrapperState.initialChecked
+               checked: null != wD ? wD : DD._wrapperState.initialChecked
```

#### 149. `bundles/bloxd.io/main.js` (Changed code · before: `L3410` → after: `L3410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3410) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L3410) · [Before (L3410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L3410)

```diff
-             mm: switch (Tm) {
+             DD: switch (zD) {
```

#### 150. `bundles/bloxd.io/main.js` (Changed code · before: `L3476` → after: `L3476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L3476) · [Before (L3476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L3476)

```diff
-             return 3 === Tm.tag ? fm : null
+             return 3 === zD.tag ? wD : null
```

#### 151. `bundles/bloxd.io/main.js` (Changed code · before: `L3548` → after: `L3548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L3548) · [Before (L3548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L3548)

```diff
-                 return fm.stateNode.current === fm ? mm : Tm
+                 return wD.stateNode.current === wD ? DD : zD
```

#### 152. `bundles/bloxd.io/main.js` (Changed code · before: `L3574` → after: `L3574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L3574) · [Before (L3574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L3574)

```diff
-             of = null,
+             Uw = null,
```

#### 153. `bundles/bloxd.io/main.js` (Changed code · before: `L3596` → after: `L3596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L3596) · [Before (L3596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L3596)

```diff
-                 of = null;
+                 Uw = null;
```

#### 154. `bundles/bloxd.io/main.js` (Changed code · before: `L3667` → after: `L3667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L3667) · [Before (L3667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L3667)

```diff
-             null !== of && zf(of) && (of = null), null !== Of && zf(Of) && (Of = null), null !== Yf && zf(Yf) && (Yf = null), qf.forEach(Zf), jf.forEach(Zf)
+             null !== Uw && Qw(Uw) && (Uw = null), null !== fw && Qw(fw) && (fw = null), null !== Iw && Qw(Iw) && (Iw = null), Bw.forEach(Xw), Gw.forEach(Xw)
```

#### 155. `bundles/bloxd.io/main.js` (Changed code · before: `L3685` → after: `L3685`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3685) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L3685) · [Before (L3685)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L3685)

```diff
-             for (null !== of && bf(of, mm), null !== Of && bf(Of, mm), null !== Yf && bf(Yf, mm), qf.forEach(Tm), jf.forEach(Tm), fm = 0; fm < Vf.length; fm++)(hm = Vf[fm]).blockedOn === mm && (hm.blockedOn = null);
+             for (null !== Uw && Pw(Uw, DD), null !== fw && Pw(fw, DD), null !== Iw && Pw(Iw, DD), Bw.forEach(zD), Gw.forEach(zD), wD = 0; wD < hw.length; wD++)(pD = hw[wD]).blockedOn === DD && (pD.blockedOn = null);
```

#### 156. `bundles/bloxd.io/main.js` (Changed code · before: `L3760` → after: `L3760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L3760) · [Before (L3760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L3760)

```diff
-             return 0 !== (mm = -1073741825 & mm.pendingLanes) ? mm : 1073741824 & mm ? 1073741824 : 0
+             return 0 !== (DD = -1073741825 & DD.pendingLanes) ? DD : 1073741824 & DD ? 1073741824 : 0
```

#### 157. `bundles/bloxd.io/main.js` (Changed code · before: `L3833` → after: `L3833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L3833) · [Before (L3833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L3833)

```diff
-                             return of = nf(of, mm, Tm, fm, hm, Am), !0;
+                             return Uw = Jw(Uw, DD, zD, wD, pD, sD), !0;
```

#### 158. `bundles/bloxd.io/main.js` (Changed code · before: `L3884` → after: `L3884`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3884) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L3884) · [Before (L3884)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L3884)

```diff
-             return ph = Am.slice(mm, 1 < Tm ? 1 - Tm : void 0)
+             return gp = sD.slice(DD, 1 < zD ? 1 - zD : void 0)
```

#### 159. `bundles/bloxd.io/main.js` (Changed code · before: `L3889` → after: `L3889`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L3889) · [Before (L3889)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L3889)

```diff
-             return "charCode" in mm ? 0 === (mm = mm.charCode) && 13 === Tm && (mm = 13) : mm = Tm, 10 === mm && (mm = 13), 32 <= mm || 13 === mm ? mm : 0
+             return "charCode" in DD ? 0 === (DD = DD.charCode) && 13 === zD && (DD = 13) : DD = zD, 10 === DD && (DD = 13), 32 <= DD || 13 === DD ? DD : 0
```

#### 160. `bundles/bloxd.io/main.js` (Changed code · before: `L3903` → after: `L3903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R3903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L3903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L3903) · [Before (L3903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L3903)

```diff
-               return this.isDefaultPrevented = (null != Am.defaultPrevented ? Am.defaultPrevented : !1 === Am.returnValue) ? Oh : Yh, this.isPropagationStopped = Yh, this
+               return this.isDefaultPrevented = (null != sD.defaultPrevented ? sD.defaultPrevented : !1 === sD.returnValue) ? Up : fp, this.isPropagationStopped = fp, this
```

#### 161. `bundles/bloxd.io/main.js` (Changed code · before: `L4263` → after: `L4263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L4263) · [Before (L4263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L4263)

```diff
-               mm: {
+               DD: {
```

#### 162. `bundles/bloxd.io/main.js` (Changed code · before: `L4305` → after: `L4305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L4305) · [Before (L4305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L4305)

```diff
-             var hm = fm.window === fm ? fm.document : 9 === fm.nodeType ? fm : fm.ownerDocument;
+             var pD = wD.window === wD ? wD.document : 9 === wD.nodeType ? wD : wD.ownerDocument;
```

#### 163. `bundles/bloxd.io/main.js` (Changed code · before: `L4343` → after: `L4343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L4343) · [Before (L4343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L4343)

```diff
-               mm: {
+               DD: {
```

#### 164. `bundles/bloxd.io/main.js` (Changed code · before: `L4371` → after: `L4371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L4371) · [Before (L4371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L4371)

```diff
-               CA.has(Tm) || BA(Tm, !1, mm, null), BA(Tm, !0, mm, null)
+               Zs.has(zD) || as(zD, !1, DD, null), as(zD, !0, DD, null)
```

#### 165. `bundles/bloxd.io/main.js` (Changed code · before: `L4375` → after: `L4375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L4375) · [Before (L4375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L4375)

```diff
-           function BA(mm, Tm, fm, hm) {
+           function as(DD, zD, wD, pD) {
```

#### 166. `bundles/bloxd.io/main.js` (Changed code · before: `L4409` → after: `L4409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L4409) · [Before (L4409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L4409)

```diff
-             if (0 === (1 & Tm) && 0 === (2 & Tm) && null !== hm) mm: for (;;) {
+             if (0 === (1 & zD) && 0 === (2 & zD) && null !== pD) DD: for (;;) {
```

#### 167. `bundles/bloxd.io/main.js` (Changed code · before: `L4443` → after: `L4443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L4443) · [Before (L4443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L4443)

```diff
-               mm: {
+               DD: {
```

#### 168. `bundles/bloxd.io/main.js` (Changed code · before: `L4493-L4495` → after: `L4493-L4495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4493-L4495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L4493-L4495) · [Before (L4493-L4495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L4493-L4495)

```diff
-                     case Hf:
-                     case yf:
-                     case Cf:
+                     case Sw:
+                     case iw:
+                     case lw:
```

#### 169. `bundles/bloxd.io/main.js` (Changed code · before: `L4498` → after: `L4498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L4498) · [Before (L4498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L4498)

```diff
-                     case rf:
+                     case Ww:
```

#### 170. `bundles/bloxd.io/main.js` (Changed code · before: `L4538-L4539` → after: `L4538-L4539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4538-L4539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L4538-L4539) · [Before (L4538-L4539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L4538-L4539)

```diff
-                 if (Dm = "mouseout" === mm || "pointerout" === mm, (!(wm = "mouseover" === mm || "pointerover" === mm) || 0 !== (16 & Tm) || !(im = fm.relatedTarget || fm.fromElement) || !Oa(im) && !im[Ea]) && (Dm || wm) && (wm = Am.window === Am ? Am : (wm = Am.ownerDocument) ?  … [truncated]
-                   if (Rm = zh, Ym = "onMouseLeave", Em = "onMouseEnter", Om = "mouse", "pointerout" !== mm && "pointerover" !== mm || (Rm = sh, Ym = "onPointerLeave", Em = "onPointerEnter", Om = "pointer"), pm = null == Dm ? wm : qa(Dm), om = null == im ? wm : qa(im), (wm = new R … [truncated]
+                 if (cD = "mouseout" === DD || "pointerout" === DD, (!(LD = "mouseover" === DD || "pointerover" === DD) || 0 !== (16 & zD) || !(gD = wD.relatedTarget || wD.fromElement) || !BK(gD) && !gD[fK]) && (cD || LD) && (LD = sD.window === sD ? sD : (LD = sD.ownerDocument) ?  … [truncated]
+                   if (RD = Qp, BD = "onMouseLeave", UD = "onMouseEnter", ID = "mouse", "pointerout" !== DD && "pointerover" !== DD || (RD = Np, BD = "onPointerLeave", UD = "onPointerEnter", ID = "pointer"), AD = null == cD ? LD : hK(cD), fD = null == gD ? LD : hK(gD), (LD = new R … [truncated]
```

#### 171. `bundles/bloxd.io/main.js` (Changed code · before: `L4585` → after: `L4585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L4585) · [Before (L4585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L4585)

```diff
-                 if (vh) mm: {
+                 if (op) DD: {
```

#### 172. `bundles/bloxd.io/main.js` (Changed code · before: `L4603` → after: `L4603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L4603) · [Before (L4603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L4603)

```diff
-                 }), Vm ? Im.data = Vm : null !== (Vm = mA(fm)) && (Im.data = Vm))), (Vm = Uh ? function(mm, Tm) {
+                 }), nD ? MD.data = nD : null !== (nD = qp(wD)) && (MD.data = nD))), (nD = vp ? function(DD, zD) {
```

#### 173. `bundles/bloxd.io/main.js` (Changed code · before: `L4841` → after: `L4841`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L4841) · [Before (L4841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L4841)

```diff
-             Wa = void 0 !== Ma ? Ma : function() {},
+             qK = void 0 !== eK ? eK : function() {},
```

#### 174. `bundles/bloxd.io/main.js` (Changed code · before: `L4846` → after: `L4846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L4846) · [Before (L4846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L4846)

```diff
-             hx = 1e4 > fx ? ua : function() {
+             sr = 1e4 > pr ? oK : function() {
```

#### 175. `bundles/bloxd.io/main.js` (Changed code · before: `L4852` → after: `L4852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L4852) · [Before (L4852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L4852)

```diff
-               case La:
+               case uK:
```

#### 176. `bundles/bloxd.io/main.js` (Changed code · before: `L4854` → after: `L4854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L4854) · [Before (L4854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L4854)

```diff
-               case va:
+               case vK:
```

#### 177. `bundles/bloxd.io/main.js` (Changed code · before: `L4856` → after: `L4856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L4856) · [Before (L4856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L4856)

```diff
-               case ta:
+               case tK:
```

#### 178. `bundles/bloxd.io/main.js` (Changed code · before: `L4858` → after: `L4858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L4858) · [Before (L4858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L4858)

```diff
-               case Ua:
+               case FK:
```

#### 179. `bundles/bloxd.io/main.js` (Changed code · before: `L4860` → after: `L4860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R4860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L4860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L4860) · [Before (L4860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L4860)

```diff
-               case da:
+               case YK:
```

#### 180. `bundles/bloxd.io/main.js` (Changed code · before: `L5013` → after: `L5013`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L5013) · [Before (L5013)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L5013)

```diff
-               null === fm ? Tm.next = Tm : (Tm.next = fm.next, fm.next = Tm), mm.pending = Tm
+               null === wD ? zD.next = zD : (zD.next = wD.next, wD.next = zD), DD.pending = zD
```

#### 181. `bundles/bloxd.io/main.js` (Changed code · before: `L5033` → after: `L5033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L5033) · [Before (L5033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L5033)

```diff
-                   null === am ? Am = am = xm : am = am.next = xm, fm = fm.next
+                   null === KD ? sD = KD = rD : KD = KD.next = rD, wD = wD.next
```

#### 182. `bundles/bloxd.io/main.js` (Changed code · before: `L5035` → after: `L5035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L5035) · [Before (L5035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L5035)

```diff
-                 null === am ? Am = am = Tm : am = am.next = Tm
+                 null === KD ? sD = KD = zD : KD = KD.next = zD
```

#### 183. `bundles/bloxd.io/main.js` (Changed code · before: `L5045` → after: `L5045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L5045) · [Before (L5045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L5045)

```diff
-             null === (mm = fm.lastBaseUpdate) ? fm.firstBaseUpdate = Tm : mm.next = Tm, fm.lastBaseUpdate = Tm
+             null === (DD = wD.lastBaseUpdate) ? wD.firstBaseUpdate = zD : DD.next = zD, wD.lastBaseUpdate = zD
```

#### 184. `bundles/bloxd.io/main.js` (Changed code · before: `L5058` → after: `L5058`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L5058) · [Before (L5058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L5058)

```diff
-               im.next = null, null === wm ? xm = Rm : wm.next = Rm, wm = im;
+               gD.next = null, null === LD ? rD = RD : LD.next = RD, LD = gD;
```

#### 185. `bundles/bloxd.io/main.js` (Changed code · before: `L5062` → after: `L5062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L5062) · [Before (L5062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L5062)

```diff
-                 Em !== wm && (null === Em ? pm.firstBaseUpdate = Rm : Em.next = Rm, pm.lastBaseUpdate = im)
+                 UD !== LD && (null === UD ? AD.firstBaseUpdate = RD : UD.next = RD, AD.lastBaseUpdate = gD)
```

#### 186. `bundles/bloxd.io/main.js` (Changed code · before: `L5078` → after: `L5078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L5078) · [Before (L5078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L5078)

```diff
-                   mm: {
+                   DD: {
```

#### 187. `bundles/bloxd.io/main.js` (Changed code · before: `L5131` → after: `L5131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L5131) · [Before (L5131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L5131)

```diff
-             fm = null === (fm = fm(hm, Tm = mm.memoizedState)) || void 0 === fm ? Tm : Am({}, Tm, fm), mm.memoizedState = fm, 0 === mm.lanes && (mm.updateQueue.baseState = fm)
+             wD = null === (wD = wD(pD, zD = DD.memoizedState)) || void 0 === wD ? zD : sD({}, zD, wD), DD.memoizedState = wD, 0 === DD.lanes && (DD.updateQueue.baseState = wD)
```

#### 188. `bundles/bloxd.io/main.js` (Changed code · before: `L5168` → after: `L5168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L5168) · [Before (L5168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L5168)

```diff
-             return "object" === typeof am && null !== am ? am = Kx(am) : (Am = Sa(Tm) ? ka : za.current, am = (hm = null !== (hm = Tm.contextTypes) && void 0 !== hm) ? ba(mm, Am) : ca), Tm = new Tm(fm, am), mm.memoizedState = null !== Tm.state && void 0 !== Tm.state ? Tm.state :  … [truncated]
+             return "object" === typeof KD && null !== KD ? KD = Jr(KD) : (sD = bK(zD) ? xK : PK.current, KD = (pD = null !== (pD = zD.contextTypes) && void 0 !== pD) ? TK(DD, sD) : VK), zD = new zD(wD, KD), DD.memoizedState = null !== zD.state && void 0 !== zD.state ? zD.state :  … [truncated]
```

#### 189. `bundles/bloxd.io/main.js` (Changed code · before: `L5179` → after: `L5179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L5179) · [Before (L5179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L5179)

```diff
-             "object" === typeof am && null !== am ? Am.context = Kx(am) : (am = Sa(Tm) ? ka : za.current, Am.context = ba(mm, am)), kx(mm, fm, Am, hm), Am.state = mm.memoizedState, "function" === typeof(am = Tm.getDerivedStateFromProps) && (ex(mm, Tm, am, fm), Am.state = mm.memoi … [truncated]
+             "object" === typeof KD && null !== KD ? sD.context = Jr(KD) : (KD = bK(zD) ? xK : PK.current, sD.context = TK(DD, KD)), xr(DD, wD, sD, pD), sD.state = DD.memoizedState, "function" === typeof(KD = zD.getDerivedStateFromProps) && (jr(DD, zD, KD, wD), sD.state = DD.memoi … [truncated]
```

#### 190. `bundles/bloxd.io/main.js` (Changed code · before: `L5231` → after: `L5231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L5231) · [Before (L5231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L5231)

```diff
-               return Tm.index = hm, mm ? null !== (hm = Tm.alternate) ? (hm = hm.index) < fm ? (Tm.flags = 2, fm) : hm : (Tm.flags = 2, fm) : fm
+               return zD.index = pD, DD ? null !== (pD = zD.alternate) ? (pD = pD.index) < wD ? (zD.flags = 2, wD) : pD : (zD.flags = 2, wD) : wD
```

#### 191. `bundles/bloxd.io/main.js` (Changed code · before: `L5258` → after: `L5258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L5258) · [Before (L5258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L5258)

```diff
-                   case nm:
+                   case ED:
```

#### 192. `bundles/bloxd.io/main.js` (Changed code · before: `L5260` → after: `L5260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L5260) · [Before (L5260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L5260)

```diff
-                   case Jm:
+                   case QD:
```

#### 193. `bundles/bloxd.io/main.js` (Changed code · before: `L5274` → after: `L5274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L5274) · [Before (L5274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L5274)

```diff
-                   case nm:
+                   case ED:
```

#### 194. `bundles/bloxd.io/main.js` (Changed code · before: `L5276` → after: `L5276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L5276) · [Before (L5276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L5276)

```diff
-                   case Jm:
+                   case QD:
```

#### 195. `bundles/bloxd.io/main.js` (Changed code · before: `L5289-L5292` → after: `L5289-L5292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5289-L5292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L5289-L5292) · [Before (L5289-L5292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L5289-L5292)

```diff
-                   case nm:
-                     return mm = mm.get(null === hm.key ? fm : hm.key) || null, hm.type === cm ? pm(Tm, mm, hm.props.children, Am, hm.key) : im(Tm, mm, hm, Am);
-                   case Jm:
-                     return Rm(Tm, mm = mm.get(null === hm.key ? fm : hm.key) || null, hm, Am)
+                   case ED:
+                     return DD = DD.get(null === pD.key ? wD : pD.key) || null, pD.type === XD ? AD(zD, DD, pD.props.children, sD, pD.key) : gD(zD, DD, pD, sD);
+                   case QD:
+                     return RD(zD, DD = DD.get(null === pD.key ? wD : pD.key) || null, pD, sD)
```

#### 196. `bundles/bloxd.io/main.js` (Changed code · before: `L5308` → after: `L5308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L5308) · [Before (L5308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L5308)

```diff
-                 mm && pm && null === jm.alternate && Tm(Am, pm), xm = am(jm, xm, Ym), null === Rm ? im = jm : Rm.sibling = jm, Rm = jm, pm = qm
+                 DD && AD && null === hD.alternate && zD(sD, AD), rD = KD(hD, rD, BD), null === RD ? gD = hD : RD.sibling = hD, RD = hD, AD = GD
```

#### 197. `bundles/bloxd.io/main.js` (Changed code · before: `L5312` → after: `L5312`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L5312) · [Before (L5312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L5312)

```diff
-                 for (; Ym < wm.length; Ym++) null !== (pm = Em(Am, wm[Ym], Dm)) && (xm = am(pm, xm, Ym), null === Rm ? im = pm : Rm.sibling = pm, Rm = pm);
+                 for (; BD < LD.length; BD++) null !== (AD = UD(sD, LD[BD], cD)) && (rD = KD(AD, rD, BD), null === RD ? gD = AD : RD.sibling = AD, RD = AD);
```

#### 198. `bundles/bloxd.io/main.js` (Changed code · before: `L5315` → after: `L5315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L5315) · [Before (L5315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L5315)

```diff
-               for (pm = hm(Am, pm); Ym < wm.length; Ym++) null !== (qm = Om(pm, Am, Ym, wm[Ym], Dm)) && (mm && null !== qm.alternate && pm.delete(null === qm.key ? Ym : qm.key), xm = am(qm, xm, Ym), null === Rm ? im = qm : Rm.sibling = qm, Rm = qm);
+               for (AD = pD(sD, AD); BD < LD.length; BD++) null !== (GD = ID(AD, sD, BD, LD[BD], cD)) && (DD && null !== GD.alternate && AD.delete(null === GD.key ? BD : GD.key), rD = KD(GD, rD, BD), null === RD ? gD = GD : RD.sibling = GD, RD = GD);
```

#### 199. `bundles/bloxd.io/main.js` (Changed code · before: `L5332` → after: `L5332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L5332) · [Before (L5332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L5332)

```diff
-                 mm && Ym && null === Im.alternate && Tm(Am, Ym), wm = am(Im, wm, qm), null === pm ? Rm = Im : pm.sibling = Im, pm = Im, Ym = jm
+                 DD && BD && null === MD.alternate && zD(sD, BD), LD = KD(MD, LD, GD), null === AD ? RD = MD : AD.sibling = MD, AD = MD, BD = hD
```

#### 200. `bundles/bloxd.io/main.js` (Changed code · before: `L5336` → after: `L5336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5336) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L5336) · [Before (L5336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L5336)

```diff
-                 for (; !Vm.done; qm++, Vm = Dm.next()) null !== (Vm = Em(Am, Vm.value, im)) && (wm = am(Vm, wm, qm), null === pm ? Rm = Vm : pm.sibling = Vm, pm = Vm);
+                 for (; !nD.done; GD++, nD = cD.next()) null !== (nD = UD(sD, nD.value, gD)) && (LD = KD(nD, LD, GD), null === AD ? RD = nD : AD.sibling = nD, AD = nD);
```

#### 201. `bundles/bloxd.io/main.js` (Changed code · before: `L5339` → after: `L5339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L5339) · [Before (L5339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L5339)

```diff
-               for (Ym = hm(Am, Ym); !Vm.done; qm++, Vm = Dm.next()) null !== (Vm = Om(Ym, Am, qm, Vm.value, im)) && (mm && null !== Vm.alternate && Ym.delete(null === Vm.key ? qm : Vm.key), wm = am(Vm, wm, qm), null === pm ? Rm = Vm : pm.sibling = Vm, pm = Vm);
+               for (BD = pD(sD, BD); !nD.done; GD++, nD = cD.next()) null !== (nD = ID(BD, sD, GD, nD.value, gD)) && (DD && null !== nD.alternate && BD.delete(null === nD.key ? GD : nD.key), LD = KD(nD, LD, GD), null === AD ? RD = nD : AD.sibling = nD, AD = nD);
```

#### 202. `bundles/bloxd.io/main.js` (Changed code · before: `L5349-L5350` → after: `L5349-L5350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5349-L5350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L5349-L5350) · [Before (L5349-L5350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L5349-L5350)

```diff
-                 case nm:
-                   mm: {
+                 case ED:
+                   DD: {
```

#### 203. `bundles/bloxd.io/main.js` (Changed code · before: `L5370-L5371` → after: `L5370-L5371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5370-L5371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L5370-L5371) · [Before (L5370-L5371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L5370-L5371)

```diff
-                 case Jm:
-                   mm: {
+                 case QD:
+                   DD: {
```

#### 204. `bundles/bloxd.io/main.js` (Changed code · before: `L5509` → after: `L5509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L5509) · [Before (L5509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L5509)

```diff
-               mm: {
+               DD: {
```

#### 205. `bundles/bloxd.io/main.js` (Changed code · before: `L5559` → after: `L5559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L5559) · [Before (L5559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L5559)

```diff
-             if (Ow = am, Yw = Tm, Tm.memoizedState = null, Tm.updateQueue = null, Tm.lanes = 0, Ew.current = null === mm || null === mm.memoizedState ? gw : Ww, mm = fm(hm, Am), Iw) {
+             if (BL = KD, GL = zD, zD.memoizedState = null, zD.updateQueue = null, zD.lanes = 0, fL.current = null === DD || null === DD.memoizedState ? YL : HL, DD = wD(pD, sD), OL) {
```

#### 206. `bundles/bloxd.io/main.js` (Changed code · before: `L5578` → after: `L5578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L5578) · [Before (L5578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L5578)

```diff
-             return null === jw ? Yw.memoizedState = jw = mm : jw = jw.next = mm, jw
+             return null === nL ? GL.memoizedState = nL = DD : nL = nL.next = DD, nL
```

#### 207. `bundles/bloxd.io/main.js` (Changed code · before: `L5596` → after: `L5596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L5596) · [Before (L5596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L5596)

```diff
-               }, null === jw ? Yw.memoizedState = jw = mm : jw = jw.next = mm
+               }, null === nL ? GL.memoizedState = nL = DD : nL = nL.next = DD
```

#### 208. `bundles/bloxd.io/main.js` (Changed code · before: `L5645` → after: `L5645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L5645) · [Before (L5645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L5645)

```diff
-               null === Dm ? am = hm : Dm.next = wm, KA(hm, Tm.memoizedState) || (TD = !0), Tm.memoizedState = hm, Tm.baseState = am, Tm.baseQueue = Dm, fm.lastRenderedState = hm
+               null === cD ? KD = pD : cD.next = LD, Ms(pD, zD.memoizedState) || (zc = !0), zD.memoizedState = pD, zD.baseState = KD, zD.baseQueue = cD, wD.lastRenderedState = pD
```

#### 209. `bundles/bloxd.io/main.js` (Changed code · before: `L5673` → after: `L5673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L5673) · [Before (L5673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L5673)

```diff
-             if (null !== Am ? mm = Am === hm : (mm = mm.mutableReadLanes, (mm = (Ow & mm) === mm) && (Tm._workInProgressVersionPrimary = hm, Rw.push(Tm))), mm) return fm(Tm._source);
+             if (null !== sD ? DD = sD === pD : (DD = DD.mutableReadLanes, (DD = (BL & DD) === DD) && (zD._workInProgressVersionPrimary = pD, AL.push(zD))), DD) return wD(zD._source);
```

#### 210. `bundles/bloxd.io/main.js` (Changed code · before: `L5755` → after: `L5755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L5755) · [Before (L5755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L5755)

```diff
-             }, Yw.updateQueue = Tm, Tm.lastEffect = mm.next = mm) : null === (fm = Tm.lastEffect) ? Tm.lastEffect = mm.next = mm : (hm = fm.next, fm.next = mm, mm.next = hm, Tm.lastEffect = mm), mm
+             }, GL.updateQueue = zD, zD.lastEffect = DD.next = DD) : null === (wD = zD.lastEffect) ? zD.lastEffect = DD.next = DD : (pD = wD.next, wD.next = DD, DD.next = pD, zD.lastEffect = DD), DD
```

#### 211. `bundles/bloxd.io/main.js` (Changed code · before: `L5850` → after: `L5850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R5850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L5850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L5850) · [Before (L5850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L5850)

```diff
-             if (null === xm ? am.next = am : (am.next = xm.next, xm.next = am), Tm.pending = am, xm = mm.alternate, mm === Yw || null !== xm && xm === Yw) Iw = Vw = !0;
+             if (null === rD ? KD.next = KD : (KD.next = rD.next, rD.next = KD), zD.pending = KD, rD = DD.alternate, DD === GL || null !== rD && rD === GL) OL = ML = !0;
```

#### 212. `bundles/bloxd.io/main.js` (Changed code · before: `L6052` → after: `L6052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L6052) · [Before (L6052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L6052)

```diff
-             return xm = mm.child, 0 === (Am & am) && (Am = xm.memoizedProps, (fm = null !== (fm = fm.compare) ? fm : nA)(Am, hm) && mm.ref === Tm.ref) ? cD(mm, Tm, am) : (Tm.flags |= 1, (mm = jR(xm, hm)).ref = Tm.ref, mm.return = Tm, Tm.child = mm)
+             return rD = DD.child, 0 === (sD & KD) && (sD = rD.memoizedProps, (wD = null !== (wD = wD.compare) ? wD : Es)(sD, pD) && DD.ref === zD.ref) ? Xc(DD, zD, KD) : (zD.flags |= 1, (DD = BR(rD, pD)).ref = zD.ref, DD.return = zD, zD.child = DD)
```

#### 213. `bundles/bloxd.io/main.js` (Changed code · before: `L6072` → after: `L6072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6072) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L6072) · [Before (L6072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L6072)

```diff
-                 if (0 === (1073741824 & fm)) return mm = null !== am ? am.baseLanes | fm : fm, Tm.lanes = Tm.childLanes = 1073741824, Tm.memoizedState = {
+                 if (0 === (1073741824 & wD)) return DD = null !== KD ? KD.baseLanes | wD : wD, zD.lanes = zD.childLanes = 1073741824, zD.memoizedState = {
```

#### 214. `bundles/bloxd.io/main.js` (Changed code · before: `L6089` → after: `L6089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L6089) · [Before (L6089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L6089)

```diff
-             var am = Sa(fm) ? ka : za.current;
+             var KD = bK(wD) ? xK : PK.current;
```

#### 215. `bundles/bloxd.io/main.js` (Changed code · before: `L6105` → after: `L6105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L6105) · [Before (L6105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L6105)

```diff
-               "object" === typeof im && null !== im ? im = Kx(im) : im = ba(Tm, im = Sa(fm) ? ka : za.current);
+               "object" === typeof gD && null !== gD ? gD = Jr(gD) : gD = TK(zD, gD = bK(wD) ? xK : PK.current);
```

#### 216. `bundles/bloxd.io/main.js` (Changed code · before: `L6112` → after: `L6112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L6112) · [Before (L6112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L6112)

```diff
-               xm = Tm.stateNode, Jx(mm, Tm), wm = Tm.memoizedProps, im = Tm.type === Tm.elementType ? wm : px(Tm.type, wm), xm.props = im, pm = Tm.pendingProps, Em = xm.context, "object" === typeof(Dm = fm.contextType) && null !== Dm ? Dm = Kx(Dm) : Dm = ba(Tm, Dm = Sa(fm) ? ka : … [truncated]
+               rD = zD.stateNode, Xr(DD, zD), LD = zD.memoizedProps, gD = zD.type === zD.elementType ? LD : Ur(zD.type, LD), rD.props = gD, AD = zD.pendingProps, UD = rD.context, "object" === typeof(cD = wD.contextType) && null !== cD ? cD = Jr(cD) : cD = TK(zD, cD = bK(wD) ? xK : … [truncated]
```

#### 217. `bundles/bloxd.io/main.js` (Changed code · before: `L6195` → after: `L6195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L6195) · [Before (L6195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L6195)

```diff
-               qY: null,
+               wB: null,
```

#### 218. `bundles/bloxd.io/main.js` (Changed code · before: `L6201` → after: `L6201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L6201) · [Before (L6201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L6201)

```diff
-             } : (xm.isBackwards = Tm, xm.qY = null, xm.renderingStartTime = 0, xm.last = hm, xm.tail = fm, xm.tailMode = Am, xm.lastEffect = am)
+             } : (rD.isBackwards = zD, rD.wB = null, rD.renderingStartTime = 0, rD.last = pD, rD.tail = wD, rD.tailMode = sD, rD.lastEffect = KD)
```

#### 219. `bundles/bloxd.io/main.js` (Changed code · before: `L6210` → after: `L6210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L6210) · [Before (L6210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L6210)

```diff
-               if (null !== mm && 0 !== (64 & mm.flags)) mm: for (mm = Tm.child; null !== mm;) {
+               if (null !== DD && 0 !== (64 & DD.flags)) DD: for (DD = zD.child; null !== DD;) {
```

#### 220. `bundles/bloxd.io/main.js` (Changed code · before: `L6359` → after: `L6359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L6359) · [Before (L6359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L6359)

```diff
-                     switch (im = 9 === am.nodeType ? am : am.ownerDocument, mm === OT && (mm = qT(fm)), mm === OT ? "script" === fm ? ((mm = im.createElement("div")).innerHTML = "<script><\/script>", mm = mm.removeChild(mm.firstChild)) : "string" === typeof hm.is ? mm = im.create … [truncated]
+                     switch (gD = 9 === KD.nodeType ? KD : KD.ownerDocument, DD === fz && (DD = Bz(wD)), DD === fz ? "script" === wD ? ((DD = gD.createElement("div")).innerHTML = "<script><\/script>", DD = DD.removeChild(DD.firstChild)) : "string" === typeof pD.is ? DD = gD.create … [truncated]
```

#### 221. `bundles/bloxd.io/main.js` (Changed code · before: `L6436` → after: `L6436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L6436) · [Before (L6436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L6436)

```diff
-                   fm = tx(vx.current), tx(Bx.current), Dw(Tm) ? (hm = Tm.stateNode, fm = Tm.memoizedProps, hm[Ra] = Tm, hm.nodeValue !== fm && (Tm.flags |= 4)) : ((hm = (9 === fm.nodeType ? fm : fm.ownerDocument).createTextNode(hm))[Ra] = Tm, Tm.stateNode = hm)
+                   wD = tr(vr.current), tr(ar.current), gL(zD) ? (pD = zD.stateNode, wD = zD.memoizedProps, pD[AK] = zD, pD.nodeValue !== wD && (zD.flags |= 4)) : ((pD = (9 === wD.nodeType ? wD : wD.ownerDocument).createTextNode(pD))[AK] = zD, zD.stateNode = pD)
```

#### 222. `bundles/bloxd.io/main.js` (Changed code · before: `L6447` → after: `L6447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L6447) · [Before (L6447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L6447)

```diff
-                 if (wm = 0 !== (64 & Tm.flags), null === (im = hm.qY))
+                 if (LD = 0 !== (64 & zD.flags), null === (gD = pD.wB))
```

#### 223. `bundles/bloxd.io/main.js` (Changed code · before: `L6468` → after: `L6468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L6468) · [Before (L6468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L6468)

```diff
-                   hm.isBackwards ? (im.sibling = Tm.child, Tm.child = im) : (null !== (fm = hm.last) ? fm.sibling = im : Tm.child = im, hm.last = im)
+                   pD.isBackwards ? (gD.sibling = zD.child, zD.child = gD) : (null !== (wD = pD.last) ? wD.sibling = gD : zD.child = gD, pD.last = gD)
```

#### 224. `bundles/bloxd.io/main.js` (Changed code · before: `L6470` → after: `L6470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L6470) · [Before (L6470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L6470)

```diff
-                 return null !== hm.tail ? (fm = hm.tail, hm.qY = fm, hm.tail = fm.sibling, hm.lastEffect = Tm.lastEffect, hm.renderingStartTime = hx(), fm.sibling = null, Tm = Fx.current, Ja(Fx, wm ? 1 & Tm | 2 : 1 & Tm), fm) : null;
+                 return null !== pD.tail ? (wD = pD.tail, pD.wB = wD, pD.tail = wD.sibling, pD.lastEffect = zD.lastEffect, pD.renderingStartTime = sr(), wD.sibling = null, zD = DL.current, XK(DL, LD ? 1 & zD | 2 : 1 & zD), wD) : null;
```

#### 225. `bundles/bloxd.io/main.js` (Changed code · before: `L6620` → after: `L6620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L6620) · [Before (L6620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L6620)

```diff
-                 componentStack: null !== mm ? mm : ""
+                 componentStack: null !== DD ? DD : ""
```

#### 226. `bundles/bloxd.io/main.js` (Changed code · before: `L6651` → after: `L6651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L6651) · [Before (L6651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L6651)

```diff
-                   Tm = (mm = Tm.stateNode).getSnapshotBeforeUpdate(Tm.elementType === Tm.type ? fm : px(Tm.type, fm), hm), mm.__reactInternalSnapshotBeforeUpdate = Tm
+                   zD = (DD = zD.stateNode).getSnapshotBeforeUpdate(zD.elementType === zD.type ? wD : Ur(zD.type, wD), pD), DD.__reactInternalSnapshotBeforeUpdate = zD
```

#### 227. `bundles/bloxd.io/main.js` (Changed code · before: `L6790` → after: `L6790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L6790) · [Before (L6790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L6790)

```diff
-             mm: {
+             DD: {
```

#### 228. `bundles/bloxd.io/main.js` (Changed code · before: `L6809` → after: `L6809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L6809) · [Before (L6809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L6809)

```diff
-             16 & fm.flags && (QT(Tm, ""), fm.flags &= -17);mm: Tm: for (fm = mm;;) {
+             16 & wD.flags && (Oz(zD, ""), wD.flags &= -17);DD: zD: for (wD = DD;;) {
```

#### 229. `bundles/bloxd.io/main.js` (Changed code · before: `L6850` → after: `L6850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L6850) · [Before (L6850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L6850)

```diff
-                 mm: for (;;) {
+                 DD: for (;;) {
```

#### 230. `bundles/bloxd.io/main.js` (Changed code · before: `L6866` → after: `L6866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R6866) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L6866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L6866) · [Before (L6866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L6866)

```diff
-                 mm: for (var wm = mm, Dm = Am, im = Dm;;)
+                 DD: for (var LD = DD, cD = sD, gD = cD;;)
```

#### 231. `bundles/bloxd.io/main.js` (Changed code · before: `L7011` → after: `L7011`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L7011) · [Before (L7011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L7011)

```diff
-             return 0 !== (48 & FD) ? hx() : -1 !== ei ? ei : ei = hx()
+             return 0 !== (48 & qc) ? sr() : -1 !== xg ? xg : xg = sr()
```

#### 232. `bundles/bloxd.io/main.js` (Changed code · before: `L7068` → after: `L7068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L7068) · [Before (L7068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L7068)

```diff
-             if (hm = vf(mm, mm === mi ? fi : 0), Tm = Bf, 0 === hm) null !== fm && (fm !== ga && sa(fm), mm.callbackNode = null, mm.callbackPriority = 0);
+             if (pD = ow(DD, DD === Dg ? wg : 0), zD = mw, 0 === pD) null !== wD && (wD !== HK && kK(wD), DD.callbackNode = null, DD.callbackPriority = 0);
```

#### 233. `bundles/bloxd.io/main.js` (Changed code · before: `L7108` → after: `L7108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L7108) · [Before (L7108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L7108)

```diff
-             var fm = vf(mm, mm === mi ? fi : 0);
+             var wD = ow(DD, DD === Dg ? wg : 0);
```

#### 234. `bundles/bloxd.io/main.js` (Changed code · before: `L7259` → after: `L7259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L7259) · [Before (L7259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L7259)

```diff
-                 mm: {
+                 DD: {
```

#### 235. `bundles/bloxd.io/main.js` (Changed code · before: `L7341` → after: `L7341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L7341) · [Before (L7341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L7341)

```diff
-             return gD.current = dw, null === mm ? dw : mm
+             return Yc.current = FL, null === DD ? FL : DD
```

#### 236. `bundles/bloxd.io/main.js` (Changed code · before: `L7381` → after: `L7381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L7381) · [Before (L7381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L7381)

```diff
-                 null !== mm && 0 === (2048 & mm.flags) && (null === mm.firstEffect && (mm.firstEffect = Tm.firstEffect), null !== Tm.lastEffect && (null !== mm.lastEffect && (mm.lastEffect.nextEffect = Tm.firstEffect), mm.lastEffect = Tm.lastEffect), 1 < Tm.flags && (null !== mm. … [truncated]
+                 null !== DD && 0 === (2048 & DD.flags) && (null === DD.firstEffect && (DD.firstEffect = zD.firstEffect), null !== zD.lastEffect && (null !== DD.lastEffect && (DD.lastEffect.nextEffect = zD.firstEffect), DD.lastEffect = zD.lastEffect), 1 < zD.flags && (null !== DD. … [truncated]
```

#### 237. `bundles/bloxd.io/main.js` (Changed code · before: `L7415` → after: `L7415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L7415) · [Before (L7415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L7415)

```diff
-             if (null !== ki && 0 === (24 & hm) && ki.has(mm) && ki.delete(mm), mm === mi && (Ti = mi = null, fi = 0), 1 < fm.flags ? null !== fm.lastEffect ? (fm.lastEffect.nextEffect = fm, hm = fm.firstEffect) : hm = fm : hm = fm.firstEffect, null !== hm) {
+             if (null !== Vg && 0 === (24 & pD) && Vg.has(DD) && Vg.delete(DD), DD === Dg && (zg = Dg = null, wg = 0), 1 < wD.flags ? null !== wD.lastEffect ? (wD.lastEffect.nextEffect = wD, pD = wD.firstEffect) : pD = wD : pD = wD.firstEffect, null !== pD) {
```

#### 238. `bundles/bloxd.io/main.js` (Changed code · before: `L7421` → after: `L7421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L7421) · [Before (L7421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L7421)

```diff
-                 else mm: if (Dm = (Dm = wm.ownerDocument) && Dm.defaultView || window, (Rm = Dm.getSelection && Dm.getSelection()) && 0 !== Rm.rangeCount) {
+                 else DD: if (cD = (cD = LD.ownerDocument) && cD.defaultView || window, (RD = cD.getSelection && cD.getSelection()) && 0 !== RD.rangeCount) {
```

#### 239. `bundles/bloxd.io/main.js` (Changed code · before: `L7436` → after: `L7436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L7436) · [Before (L7436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L7436)

```diff
-                   Tm: for (;;) {
+                   zD: for (;;) {
```

#### 240. `bundles/bloxd.io/main.js` (Changed code · before: `L7508` → after: `L7508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L7508) · [Before (L7508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L7508)

```diff
-                 null !== wm && kA(Im) && (Km = wm.start, void 0 === (Qm = wm.end) && (Qm = Km), "selectionStart" in Im ? (Im.selectionStart = Km, Im.selectionEnd = Math.min(Qm, Im.value.length)) : (Qm = (Km = Im.ownerDocument || document) && Km.defaultView || window).getSelection … [truncated]
+                 null !== LD && Cs(MD) && (OD = LD.start, void 0 === (JD = LD.end) && (JD = OD), "selectionStart" in MD ? (MD.selectionStart = OD, MD.selectionEnd = Math.min(JD, MD.value.length)) : (JD = (OD = MD.ownerDocument || document) && OD.defaultView || window).getSelection … [truncated]
```

#### 241. `bundles/bloxd.io/main.js` (Changed code · before: `L7673-L7674` → after: `L7673-L7674`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7673-L7674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L7673-L7674) · [Before (L7673-L7674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L7673-L7674)

```diff
-             else mm: switch (mm) {
-               case cm:
+             else DD: switch (DD) {
+               case XD:
```

#### 242. `bundles/bloxd.io/main.js` (Changed code · before: `L7676` → after: `L7676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L7676) · [Before (L7676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L7676)

```diff
-               case ym:
+               case WD:
```

#### 243. `bundles/bloxd.io/main.js` (Changed code · before: `L7679` → after: `L7679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L7679) · [Before (L7679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L7679)

```diff
-               case zm:
+               case VD:
```

#### 244. `bundles/bloxd.io/main.js` (Changed code · before: `L7682` → after: `L7682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L7682) · [Before (L7682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L7682)

```diff
-               case Zm:
+               case PD:
```

#### 245. `bundles/bloxd.io/main.js` (Changed code · before: `L7684` → after: `L7684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L7684) · [Before (L7684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L7684)

```diff
-               case em:
+               case bD:
```

#### 246. `bundles/bloxd.io/main.js` (Changed code · before: `L7686` → after: `L7686`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L7686) · [Before (L7686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L7686)

```diff
-               case Nm:
+               case jD:
```

#### 247. `bundles/bloxd.io/main.js` (Changed code · before: `L7688` → after: `L7688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L7688) · [Before (L7688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L7688)

```diff
-               case Cm:
+               case ND:
```

#### 248. `bundles/bloxd.io/main.js` (Changed code · before: `L7690` → after: `L7690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L7690) · [Before (L7690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L7690)

```diff
-               case rm:
+               case ZD:
```

#### 249. `bundles/bloxd.io/main.js` (Changed code · before: `L7694` → after: `L7694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7694) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L7694) · [Before (L7694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L7694)

```diff
-                   case km:
+                   case CD:
```

#### 250. `bundles/bloxd.io/main.js` (Changed code · before: `L7697` → after: `L7697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L7697) · [Before (L7697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L7697)

```diff
-                   case bm:
+                   case xD:
```

#### 251. `bundles/bloxd.io/main.js` (Changed code · before: `L7700` → after: `L7700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L7700) · [Before (L7700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L7700)

```diff
-                   case Sm:
+                   case TD:
```

#### 252. `bundles/bloxd.io/main.js` (Changed code · before: `L7703` → after: `L7703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L7703) · [Before (L7703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L7703)

```diff
-                   case Gm:
+                   case dD:
```

#### 253. `bundles/bloxd.io/main.js` (Changed code · before: `L7706` → after: `L7706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L7706) · [Before (L7706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L7706)

```diff
-                   case Xm:
+                   case SD:
```

#### 254. `bundles/bloxd.io/main.js` (Changed code · before: `L7709` → after: `L7709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L7709) · [Before (L7709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L7709)

```diff
-                   case Pm:
+                   case iD:
```

#### 255. `bundles/bloxd.io/main.js` (Changed code · before: `L7713` → after: `L7713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L7713) · [Before (L7713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L7713)

```diff
-                 throw Error(xm(130, null == mm ? mm : typeof mm, ""))
+                 throw Error(rD(130, null == DD ? DD : typeof DD, ""))
```

#### 256. `bundles/bloxd.io/main.js` (Changed code · before: `L7746-L7747` → after: `L7746-L7747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7746-L7747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L7746-L7747) · [Before (L7746-L7747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L7746-L7747)

```diff
-             mm: if (fm) {
-               Tm: {
+             DD: if (wD) {
+               zD: {
```

#### 257. `bundles/bloxd.io/main.js` (Changed code · before: `L7774` → after: `L7774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L7774) · [Before (L7774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L7774)

```diff
-             return null === Tm.context ? Tm.context = fm : Tm.pendingContext = fm, (Tm = cx(am, wm)).payload = {
+             return null === zD.context ? zD.context = wD : zD.pendingContext = wD, (zD = Vr(KD, LD)).payload = {
```

#### 258. `bundles/bloxd.io/main.js` (Changed code · before: `L7786` → after: `L7786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L7786) · [Before (L7786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L7786)

```diff
-               mm.retryLane = 0 !== fm && fm < Tm ? fm : Tm
+               DD.retryLane = 0 !== wD && wD < zD ? wD : zD
```

#### 259. `bundles/bloxd.io/main.js` (Changed code · before: `L7888` → after: `L7888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7888) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L7888) · [Before (L7888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L7888)

```diff
-                       if (null !== (Am = Tm.memoizedState) && (Am.qY = null, Am.tail = null, Am.lastEffect = null), Ja(Fx, Fx.current), hm) break;
+                       if (null !== (sD = zD.memoizedState) && (sD.wB = null, sD.tail = null, sD.lastEffect = null), XK(DL, DL.current), pD) break;
```

#### 260. `bundles/bloxd.io/main.js` (Changed code · before: `L7913` → after: `L7913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L7913) · [Before (L7913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L7913)

```diff
-                 mm: {
+                 DD: {
```

#### 261. `bundles/bloxd.io/main.js` (Changed code · before: `L7939` → after: `L7939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L7939) · [Before (L7939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L7939)

```diff
-                 return hm = Tm.type, Am = Tm.pendingProps, DD(mm, Tm, hm, Am = Tm.elementType === hm ? Am : px(hm, Am), fm);
+                 return pD = zD.type, sD = zD.pendingProps, cc(DD, zD, pD, sD = zD.elementType === pD ? sD : Ur(pD, sD), wD);
```

#### 262. `bundles/bloxd.io/main.js` (Changed code · before: `L7941` → after: `L7941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L7941) · [Before (L7941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L7941)

```diff
-                 return hm = Tm.type, Am = Tm.pendingProps, iD(mm, Tm, hm, Am = Tm.elementType === hm ? Am : px(hm, Am), fm);
+                 return pD = zD.type, sD = zD.pendingProps, gc(DD, zD, pD, sD = zD.elementType === pD ? sD : Ur(pD, sD), wD);
```

#### 263. `bundles/bloxd.io/main.js` (Changed code · before: `L7963` → after: `L7963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L7963) · [Before (L7963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L7963)

```diff
-                 return hm = Tm.type, Am = Tm.pendingProps, hD(mm, Tm, hm, Am = Tm.elementType === hm ? Am : px(hm, Am), fm);
+                 return pD = zD.type, sD = zD.pendingProps, pc(DD, zD, pD, sD = zD.elementType === pD ? sD : Ur(pD, sD), wD);
```

#### 264. `bundles/bloxd.io/main.js` (Changed code · before: `L7970` → after: `L7970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R7970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L7970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L7970) · [Before (L7970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L7970)

```diff
-                 mm: {
+                 DD: {
```

#### 265. `bundles/bloxd.io/main.js` (Changed code · before: `L8021` → after: `L8021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8021) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L8021) · [Before (L8021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L8021)

```diff
-                 return hm = Tm.type, Am = Tm.pendingProps, Am = Tm.elementType === hm ? Am : px(hm, Am), null !== mm && (mm.alternate = null, Tm.alternate = null, Tm.flags |= 2), Tm.tag = 1, Sa(hm) ? (mm = !0, Xa(Tm)) : mm = !1, Ix(Tm, fm), Xx(Tm, hm, Am), Hx(Tm, hm, Am, fm), RD( … [truncated]
+                 return pD = zD.type, sD = zD.pendingProps, sD = zD.elementType === pD ? sD : Ur(pD, sD), null !== DD && (DD.alternate = null, zD.alternate = null, zD.flags |= 2), zD.tag = 1, bK(pD) ? (DD = !0, iK(zD)) : DD = !1, Or(zD, wD), ir(zD, pD, sD), Wr(zD, pD, sD, wD), Rc( … [truncated]
```

#### 266. `bundles/bloxd.io/main.js` (Changed code · before: `L8178-L8180` → after: `L8178-L8180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8178-L8180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L8178-L8180) · [Before (L8178-L8180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L8178-L8180)

```diff
-         }, , , , , , , (mm, Tm, fm) => {
-           mm.exports = fm(98)
-         }, , , , , , , (mm, Tm) => {
+         }, , , , , , (DD, zD, wD) => {
+           DD.exports = wD(94)
+         }, , , (DD, zD) => {
```

#### 267. `bundles/bloxd.io/main.js` (Changed code · before: `L8257` → after: `L8257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L8257) · [Before (L8257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L8257)

```diff
-             mm: for (;;) {
+             DD: for (;;) {
```

#### 268. `bundles/bloxd.io/main.js` (Changed code · before: `L8275` → after: `L8275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L8275) · [Before (L8275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L8275)

```diff
-                 mm: for (var hm = 0, Am = mm.length; hm < Am;) {
+                 DD: for (var pD = 0, sD = DD.length; pD < sD;) {
```

#### 269. `bundles/bloxd.io/main.js` (Changed code · before: `L8294` → after: `L8294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L8294) · [Before (L8294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L8294)

```diff
-             return 0 !== fm ? fm : mm.id - Tm.id
+             return 0 !== wD ? wD : DD.id - zD.id
```

#### 270. `bundles/bloxd.io/main.js` (Changed code · before: `L8334` → after: `L8334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L8334) · [Before (L8334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L8334)

```diff
-                   fm = Tm.unstable_now(), "function" === typeof wm ? Sm.callback = wm : Sm === Jm(Zm) && cm(Zm), Pm(fm)
+                   wD = zD.unstable_now(), "function" === typeof LD ? TD.callback = LD : TD === QD(PD) && XD(PD), iD(wD)
```

#### 271. `bundles/bloxd.io/main.js` (Changed code · before: `L8394` → after: `L8394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L8394) · [Before (L8394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L8394)

```diff
-             switch ("object" === typeof xm && null !== xm ? xm = "number" === typeof(xm = xm.delay) && 0 < xm ? wm + xm : wm : xm = wm, mm) {
+             switch ("object" === typeof rD && null !== rD ? rD = "number" === typeof(rD = rD.delay) && 0 < rD ? LD + rD : LD : rD = LD, DD) {
```

#### 272. `bundles/bloxd.io/main.js` (Changed code · before: `L8430` → after: `L8430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L8430) · [Before (L8430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L8430)

```diff
-         }, , , , , , , (mm, Tm, fm) => {
+         }, , , , , , , , , (DD, zD, wD) => {
```

#### 273. `bundles/bloxd.io/main.js` (Changed code · before: `L8470-L8473` → after: `L8470-L8473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8470-L8473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L8470-L8473) · [Before (L8470-L8473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L8470-L8473)

```diff
-           var hm = fm(190),
-             Am = fm(193),
-             am = fm(198),
-             xm = fm(108),
+           var pD = wD(182),
+             sD = wD(186),
+             KD = wD(197),
+             rD = wD(106),
```

#### 274. `bundles/bloxd.io/main.js` (Changed code · before: `L8475-L8483` → after: `L8475-L8483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8475-L8483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L8475-L8483) · [Before (L8475-L8483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L8475-L8483)

```diff
-             Dm = fm(112),
-             im = fm(115),
-             Rm = fm(118),
-             pm = fm(37),
-             Em = fm(135),
-             om = fm(173),
-             Om = fm(182),
-             Ym = fm(130);
-           Em.w && !Em.s[Em.w].enabled && console.error(`Selected subsiteUsed ${Em.w} but it is not enabled`);
+             cD = wD(113),
+             gD = wD(116),
+             RD = wD(119),
+             AD = wD(35),
+             UD = wD(128),
+             fD = wD(161),
+             ID = wD(165),
+             BD = wD(125);
+           UD.D && !UD.z[UD.D].enabled && console.error(`Selected subsiteUsed ${UD.D} but it is not enabled`);
```

#### 275. `bundles/bloxd.io/main.js` (Changed code · before: `L8491` → after: `L8491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L8491) · [Before (L8491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L8491)

```diff
-             return [`Browser: ${Im()}`, `Version: ${Km()}`, `Platform: ${navigator.platform}`, `Platform Type: ${km()}`, `Input Type: ${(0,im.d)()}`].join(mm)
+             return [`Browser: ${MD()}`, `Version: ${OD()}`, `Platform: ${navigator.platform}`, `Platform Type: ${CD()}`, `Input Type: ${(0,gD.e)()}`].join(DD)
```

#### 276. `bundles/bloxd.io/main.js` (Changed code · before: `L8519` → after: `L8519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L8519) · [Before (L8519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L8519)

```diff
-             return jm().getPlatformType() || ("touchOnly" === (0, im.d)() ? "tablet" : "desktop")
+             return hD().getPlatformType() || ("touchOnly" === (0, gD.e)() ? "tablet" : "desktop")
```

#### 277. `bundles/bloxd.io/main.js` (Changed code · before: `L8538` → after: `L8538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L8538) · [Before (L8538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L8538)

```diff
-             return "macos" === mm && navigator.maxTouchPoints > 1 ? "ios" : "linux" !== mm || "Linux armv81" !== navigator.platform && "touchOnly" !== (0, im.d)() ? hm.s.includes(mm) ? mm : "other" : "android"
+             return "macos" === DD && navigator.maxTouchPoints > 1 ? "ios" : "linux" !== DD || "Linux armv81" !== navigator.platform && "touchOnly" !== (0, gD.e)() ? pD.z.includes(DD) ? DD : "other" : "android"
```

#### 278. `bundles/bloxd.io/main.js` (Changed code · before: `L8543` → after: `L8543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L8543) · [Before (L8543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L8543)

```diff
-             return hm.B.includes(mm) ? mm : "other"
+             return pD.H.includes(DD) ? DD : "other"
```

#### 279. `bundles/bloxd.io/main.js` (Changed code · before: `L8548` → after: `L8548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L8548) · [Before (L8548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L8548)

```diff
-             return !ym() && ("mobile" === mm || "tablet" === mm || "touchOnly" === (0, im.d)() || Dm.currentUrl.hasSearchParam("mobile"))
+             return !WD() && ("mobile" === DD || "tablet" === DD || "touchOnly" === (0, gD.e)() || cD.currentUrl.hasSearchParam("mobile"))
```

#### 280. `bundles/bloxd.io/main.js` (Changed code · before: `L8560` → after: `L8560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L8560) · [Before (L8560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L8560)

```diff
-             return Am.E.some((Tm => Tm === mm))
+             return sD.F.some((zD => zD === DD))
```

#### 281. `bundles/bloxd.io/main.js` (Changed code · before: `L8564` → after: `L8564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L8564) · [Before (L8564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L8564)

```diff
-             return Xm(Em.q)
+             return SD(UD.v)
```

#### 282. `bundles/bloxd.io/main.js` (Changed code · before: `L8568` → after: `L8568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L8568) · [Before (L8568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L8568)

```diff
-             return em() || "mouseOnly" !== (0, im.d)() || navigator.maxTouchPoints > 0
+             return bD() || "mouseOnly" !== (0, gD.e)() || navigator.maxTouchPoints > 0
```

#### 283. `bundles/bloxd.io/main.js` (Changed code · before: `L8574` → after: `L8574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L8574) · [Before (L8574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L8574)

```diff
-           const Cm = "bloxd" === Em.q && "bloxd" === Em.w && !Dm.currentUrl.hasSearchParam("portal"),
+           const ND = "bloxd" === UD.v && "bloxd" === UD.D && !cD.currentUrl.hasSearchParam("portal"),
```

#### 284. `bundles/bloxd.io/main.js` (Changed code · before: `L8577-L8578` → after: `L8577-L8578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8577) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8577-L8578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L8577-L8578) · [Before (L8577-L8578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L8577-L8578)

```diff
-               useSocialFeatures: "coolmathgames" !== Em.q,
-               useDiscord: "coolmathgames" !== Em.q,
+               useSocialFeatures: "coolmathgames" !== UD.v,
+               useDiscord: "coolmathgames" !== UD.v,
```

#### 285. `bundles/bloxd.io/main.js` (Changed code · before: `L8580-L8594` → after: `L8580-L8594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8580-L8594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L8580-L8594) · [Before (L8580-L8594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L8580-L8594)

```diff
-               useForceRotateForceFullscreenOverlay: "crazygames" !== Em.q && "minijuegos" !== Em.w && "coolmathgames" !== Em.q && "msnPlay" !== Em.q && "desktopMicrosoftStore" !== Em.q && !(0, Em.c)(),
-               useLogin: "coolmathgames" !== Em.q && (0, Em.d)(),
-               useRecaptcha: !am.f.recaptchaDisabled && !(0, Em.c)(),
-               useTurnstile: !am.f.turnstileDisabled && !(0, Em.c)() && "mobileIos" !== Em.q && !om.c,
-               canChangeName: "coolmathgames" !== Em.q,
-               canUseInviteLinks: ("bloxd" === Em.q || "crazygames" === Em.q) && !(0, Em.c)(),
-               canUseFriendLinks: "bloxd" === Em.q && "bloxd" === Em.w && !(0, Em.c)(),
-               canSeePlayerWrittenText: "coolmathgames" !== Em.q,
-               canSeeRealPlayerNames: "coolmathgames" !== Em.q,
-               canUseCustomLobbies: "coolmathgames" !== Em.q,
-               canUseCustomGames: "coolmathgames" !== Em.q && !(0, Em.g)(),
-               canUseYoutubeHomepage: "bloxd" === Em.q,
-               canShowBrowserTips: "coolmathgames" !== Em.q && !Pm() && "desktopMicrosoftStore" !== Em.q && !(0, Em.c)(),
-               isOwnTopLevelSite: Cm && !Em.f,
-               sanitizeShopInput: "coolmathgames" === Em.q,
+               useForceRotateForceFullscreenOverlay: "crazygames" !== UD.v && "minijuegos" !== UD.D && "coolmathgames" !== UD.v && "msnPlay" !== UD.v && "desktopMicrosoftStore" !== UD.v && !(0, UD.d)(),
+               useLogin: "coolmathgames" !== UD.v && (0, UD.e)(),
+               useRecaptcha: !KD.f.recaptchaDisabled && !(0, UD.d)(),
+               useTurnstile: !KD.f.turnstileDisabled && !(0, UD.d)() && "mobileIos" !== UD.v && !fD.e,
+               canChangeName: "coolmathgames" !== UD.v,
+               canUseInviteLinks: ("bloxd" === UD.v || "crazygames" === UD.v) && !(0, UD.d)(),
+               canUseFriendLinks: "bloxd" === UD.v && "bloxd" === UD.D && !(0, UD.d)(),
+               canSeePlayerWrittenText: "coolmathgames" !== UD.v,
+               canSeeRealPlayerNames: "coolmathgames" !== UD.v,
+               canUseCustomLobbies: "coolmathgames" !== UD.v,
+               canUseCustomGames: "coolmathgames" !== UD.v && !(0, UD.m)(),
+               canUseYoutubeHomepage: "bloxd" === UD.v,
+               canShowBrowserTips: "coolmathgames" !== UD.v && !iD() && "desktopMicrosoftStore" !== UD.v && !(0, UD.d)(),
+               isOwnTopLevelSite: ND && !UD.i,
+               sanitizeShopInput: "coolmathgames" === UD.v,
```

#### 286. `bundles/bloxd.io/main.js` (Changed code · before: `L8596-L8597` → after: `L8596-L8597`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8596-L8597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L8596-L8597) · [Before (L8596-L8597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L8596-L8597)

```diff
-                 canChangeTexturePack: "coolmathgames" !== Em.q,
-                 canUseShaderPacks: "coolmathgames" !== Em.q
+                 canChangeTexturePack: "coolmathgames" !== UD.v,
+                 canUseShaderPacks: "coolmathgames" !== UD.v
```

#### 287. `bundles/bloxd.io/main.js` (Changed code · before: `L8637` → after: `L8637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L8637) · [Before (L8637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L8637)

```diff
-             return Fm ??= (0, Om.d)((0, Ym.q)()), Fm
+             return HD ??= (0, ID.d)((0, BD.t)()), HD
```

#### 288. `bundles/bloxd.io/main.js` (Changed code · before: `L8666` → after: `L8666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L8666) · [Before (L8666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L8666)

```diff
-             const hm = null !== (mm = null !== (Tm = Mm) && void 0 !== Tm ? Tm : null === (fm = (0, Ym.q)()) || void 0 === fm ? void 0 : fm.vendor) && void 0 !== mm ? mm : null;
+             const pD = null !== (DD = null !== (zD = mD) && void 0 !== zD ? zD : null === (wD = (0, BD.t)()) || void 0 === wD ? void 0 : wD.vendor) && void 0 !== DD ? DD : null;
```

#### 289. `bundles/bloxd.io/main.js` (Changed code · before: `L8673` → after: `L8673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L8673) · [Before (L8673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L8673)

```diff
-               const hm = null !== (mm = null !== (Tm = Mm) && void 0 !== Tm ? Tm : null === (fm = (0, Ym.l)()) || void 0 === fm ? void 0 : fm.vendor) && void 0 !== mm ? mm : null;
+               const pD = null !== (DD = null !== (zD = mD) && void 0 !== zD ? zD : null === (wD = (0, BD.l)()) || void 0 === wD ? void 0 : wD.vendor) && void 0 !== DD ? DD : null;
```

#### 290. `bundles/bloxd.io/main.js` (Changed code · before: `L8704` → after: `L8704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L8704) · [Before (L8704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L8704)

```diff
-               const Tm = await (0, Rm.z)(mm);
+               const zD = await (0, RD.y)(DD);
```

#### 291. `bundles/bloxd.io/main.js` (Changed code · before: `L8706` → after: `L8706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L8706) · [Before (L8706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L8706)

```diff
-               return pm.g.setItem(Rm.J, (0, Rm.f)(Tm)), pm.g.setItem(Rm.F, (0, Rm.p)(Tm)), "usable"
+               return AD.h.setItem(RD.G, (0, RD.e)(zD)), AD.h.setItem(RD.D, (0, RD.l)(zD)), "usable"
```

#### 292. `bundles/bloxd.io/main.js` (Changed code · before: `L8720` → after: `L8720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L8720) · [Before (L8720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L8720)

```diff
-                     for (let hm, Am, am = 0, xm = 0; Am = mm.charAt(xm++); ~Am && (hm = am % 4 ? 64 * hm + Am : Am, am++ % 4) ? Tm += String.fromCharCode(255 & hm >> (-2 * am & 6)) : 0) Am = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(Am);
+                     for (let pD, sD, KD = 0, rD = 0; sD = DD.charAt(rD++); ~sD && (pD = KD % 4 ? 64 * pD + sD : sD, KD++ % 4) ? zD += String.fromCharCode(255 & pD >> (-2 * KD & 6)) : 0) sD = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(sD);
```

#### 293. `bundles/bloxd.io/main.js` (Changed code · before: `L8727` → after: `L8727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8727) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L8727) · [Before (L8727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L8727)

```diff
-                 return xm ? Am = xm : (Am = oT.kGdYVv(Am), mm[am] = Am), Am
+                 return rD ? sD = rD : (sD = Uz.kGdYVv(sD), DD[KD] = sD), sD
```

#### 294. `bundles/bloxd.io/main.js` (Changed code · before: `L8748` → after: `L8748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L8748) · [Before (L8748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L8748)

```diff
-                 mm = null !== (Tm = mm) && void 0 !== Tm ? Tm : "";
+                 DD = null !== (zD = DD) && void 0 !== zD ? zD : "";
```

#### 295. `bundles/bloxd.io/main.js` (Changed code · before: `L8752` → after: `L8752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L8752) · [Before (L8752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L8752)

```diff
-                   fm += (null !== (hm = mm[Am]) && void 0 !== hm ? hm : Am.toString()).charCodeAt(0).toString(32)
+                   wD += (null !== (pD = DD[sD]) && void 0 !== pD ? pD : sD.toString()).charCodeAt(0).toString(32)
```

#### 296. `bundles/bloxd.io/main.js` (Changed code · before: `L8756-L8757` → after: `L8756-L8757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R8756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L8756-L8757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L8756-L8757) · [Before (L8756-L8757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L8756-L8757)

```diff
-               qT = fm(242).shouldUseUkPrivacyPolicy;
-             sm = YT(Em.q) + "_" + YT(Em.w) + "_" + (qT() ? "eu-gdpr" : "non-eu") + "_secure=" + window.isSecureContext
+               Bz = wD(236).shouldUseUkPrivacyPolicy;
+             yD = Iz(UD.v) + "_" + Iz(UD.D) + "_" + (Bz() ? "eu-gdpr" : "non-eu") + "_secure=" + window.isSecureContext
```

#### 297. `bundles/bloxd.io/main.js` (Changed code · before: `L9041` → after: `L9041`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9041) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L9041) · [Before (L9041)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L9041)

```diff
-               var hm, Am = (hm = fm(91)) && hm.__esModule ? hm : {
+               var pD, sD = (pD = wD(91)) && pD.__esModule ? pD : {
```

#### 298. `bundles/bloxd.io/main.js` (Changed code · before: `L9093` → after: `L9093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L9093) · [Before (L9093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L9093)

```diff
-                 return mm && mm.__esModule ? mm : {
+                 return DD && DD.__esModule ? DD : {
```

#### 299. `bundles/bloxd.io/main.js` (Changed code · before: `L9159` → after: `L9159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L9159) · [Before (L9159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L9159)

```diff
-                 }, Tm.dO = function() {
+                 }, zD.iI = function() {
```

#### 300. `bundles/bloxd.io/main.js` (Changed code · before: `L9162` → after: `L9162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L9162) · [Before (L9162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L9162)

```diff
-                   return mm ? String(this.dO().name).toLowerCase() || "" : this.dO().name || ""
+                   return DD ? String(this.iI().name).toLowerCase() || "" : this.iI().name || ""
```

#### 301. `bundles/bloxd.io/main.js` (Changed code · before: `L9242` → after: `L9242`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L9242) · [Before (L9242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L9242)

```diff
-               var hm, Am = (hm = fm(17)) && hm.__esModule ? hm : {
+               var pD, sD = (pD = wD(17)) && pD.__esModule ? pD : {
```

#### 302. `bundles/bloxd.io/main.js` (Changed code · before: `L9642` → after: `L9642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L9642) · [Before (L9642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L9642)

```diff
-               var hm, Am = (hm = fm(17)) && hm.__esModule ? hm : {
+               var pD, sD = (pD = wD(17)) && pD.__esModule ? pD : {
```

#### 303. `bundles/bloxd.io/main.js` (Changed code · before: `L9783` → after: `L9783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L9783) · [Before (L9783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L9783)

```diff
-               var hm, Am = (hm = fm(17)) && hm.__esModule ? hm : {
+               var pD, sD = (pD = wD(17)) && pD.__esModule ? pD : {
```

#### 304. `bundles/bloxd.io/main.js` (Changed code · before: `L9983` → after: `L9983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R9983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L9983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L9983) · [Before (L9983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L9983)

```diff
-               var hm, Am = (hm = fm(17)) && hm.__esModule ? hm : {
+               var pD, sD = (pD = wD(17)) && pD.__esModule ? pD : {
```

#### 305. `bundles/bloxd.io/main.js` (Changed code · before: `L10054` → after: `L10054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L10054) · [Before (L10054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L10054)

```diff
-         }, , , , (mm, Tm, fm) => {
+         }, , , , , , , (DD, zD, wD) => {
```

#### 306. `bundles/bloxd.io/main.js` (Changed code · before: `L10093` → after: `L10093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L10093) · [Before (L10093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L10093)

```diff
-                 wm = Am.pathname + (xm ? `?${xm}` : "") + Am.hash;
+                 LD = sD.pathname + (rD ? `?${rD}` : "") + sD.hash;
```

#### 307. `bundles/bloxd.io/main.js` (Changed code · before: `L10110` → after: `L10110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L10110) · [Before (L10110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L10110)

```diff
-                     for (let hm, Am, am = 0, xm = 0; Am = mm.charAt(xm++); ~Am && (hm = am % 4 ? 64 * hm + Am : Am, am++ % 4) ? Tm += String.fromCharCode(255 & hm >> (-2 * am & 6)) : 0) Am = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(Am);
+                     for (let pD, sD, KD = 0, rD = 0; sD = DD.charAt(rD++); ~sD && (pD = KD % 4 ? 64 * pD + sD : sD, KD++ % 4) ? zD += String.fromCharCode(255 & pD >> (-2 * KD & 6)) : 0) sD = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(sD);
```

#### 308. `bundles/bloxd.io/main.js` (Changed code · before: `L10117` → after: `L10117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L10117) · [Before (L10117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L10117)

```diff
-                 return wm ? Am = wm : (Am = am.TgIWQA(Am), mm[xm] = Am), Am
+                 return LD ? sD = LD : (sD = KD.TgIWQA(sD), DD[rD] = sD), sD
```

#### 309. `bundles/bloxd.io/main.js` (Changed code · before: `L10129` → after: `L10129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L10129) · [Before (L10129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L10129)

```diff
-                 "string" === typeof(null === (Tm = mm.data) || void 0 === Tm ? void 0 : Tm.type) && "updateSearchParam" === (null === (fm = mm.data) || void 0 === fm ? void 0 : fm.type) && (console.log(`Adding search param ${mm.data.name} with value ${mm.data.value}`), Am.setSear … [truncated]
+                 "string" === typeof(null === (zD = DD.data) || void 0 === zD ? void 0 : zD.type) && "updateSearchParam" === (null === (wD = DD.data) || void 0 === wD ? void 0 : wD.type) && (console.log(`Adding search param ${DD.data.name} with value ${DD.data.value}`), sD.setSear … [truncated]
```

#### 310. `bundles/bloxd.io/main.js` (Changed code · before: `L10158` → after: `L10158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L10158) · [Before (L10158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L10158)

```diff
-             d: () => Ym
+             e: () => BD
```

#### 311. `bundles/bloxd.io/main.js` (Changed code · before: `L10190` → after: `L10190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L10190) · [Before (L10190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L10190)

```diff
-             B: () => qm,
+             C: () => ID,
```

#### 312. `bundles/bloxd.io/main.js` (Changed code · before: `L10192-L10193` → after: `L10192-L10193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10192-L10193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L10192-L10193) · [Before (L10192-L10193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L10192-L10193)

```diff
-             F: () => om,
-             J: () => pm,
+             G: () => AD,
+             K: () => hD,
```

#### 313. `bundles/bloxd.io/main.js` (Changed code · before: `L10195-L10197` → after: `L10195-L10197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10195-L10197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L10195-L10197) · [Before (L10195-L10197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L10195-L10197)

```diff
-             M: () => Ym,
-             c: () => Vm,
-             f: () => xm,
+             d: () => nD,
+             e: () => rD,
+             g: () => gD,
```

#### 314. `bundles/bloxd.io/main.js` (Changed code · before: `L10199` → after: `L10199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L10199) · [Before (L10199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L10199)

```diff
-             n: () => Rm,
+             l: () => LD,
```

#### 315. `bundles/bloxd.io/main.js` (Changed code · before: `L10201-L10204` → after: `L10201-L10204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10201-L10204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L10201-L10204) · [Before (L10201-L10204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L10201-L10204)

```diff
-             q: () => Dm,
-             s: () => Em,
-             v: () => am.i,
-             z: () => am.m
+             t: () => UD,
+             x: () => KD.n,
+             y: () => KD.o,
+             z: () => GD
```

#### 316. `bundles/bloxd.io/main.js` (Changed code · before: `L10206` → after: `L10206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L10206) · [Before (L10206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L10206)

```diff
-           var hm = fm(108),
+           var pD = wD(106),
```

#### 317. `bundles/bloxd.io/main.js` (Changed code · before: `L10208` → after: `L10208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L10208) · [Before (L10208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L10208)

```diff
-             am = fm(123);
+             KD = wD(121);
```

#### 318. `bundles/bloxd.io/main.js` (Changed code · before: `L10224` → after: `L10224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L10224) · [Before (L10224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L10224)

```diff
-             let hm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (Tm = null === (fm = globalThis.navigator) || void 0 === fm ? void 0 : fm.userAgent) && void 0 !== Tm ? Tm : "";
+             let pD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (zD = null === (wD = globalThis.navigator) || void 0 === wD ? void 0 : wD.userAgent) && void 0 !== zD ? zD : "";
```

#### 319. `bundles/bloxd.io/main.js` (Changed code · before: `L10230` → after: `L10230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L10230) · [Before (L10230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L10230)

```diff
-             let hm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (Tm = null === (fm = globalThis.navigator) || void 0 === fm ? void 0 : fm.userAgent) && void 0 !== Tm ? Tm : "";
+             let pD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (zD = null === (wD = globalThis.navigator) || void 0 === wD ? void 0 : wD.userAgent) && void 0 !== zD ? zD : "";
```

#### 320. `bundles/bloxd.io/main.js` (Changed code · before: `L10236` → after: `L10236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L10236) · [Before (L10236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L10236)

```diff
-             let hm = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (Tm = null === (fm = globalThis.navigator) || void 0 === fm ? void 0 : fm.userAgent) && void 0 !== Tm ? Tm : "";
+             let pD = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (zD = null === (wD = globalThis.navigator) || void 0 === wD ? void 0 : wD.userAgent) && void 0 !== zD ? zD : "";
```

#### 321. `bundles/bloxd.io/main.js` (Changed code · before: `L10247` → after: `L10247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L10247) · [Before (L10247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L10247)

```diff
-         }, , , , , (mm, Tm, fm) => {
+         }, , (DD, zD, wD) => {
```

#### 322. `bundles/bloxd.io/main.js` (Changed code · before: `L10249-L10253` → after: `L10249-L10253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10249-L10253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L10249-L10253) · [Before (L10249-L10253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L10249-L10253)

```diff
-             c: () => xm,
-             e: () => am,
-             h: () => wm,
-             i: () => Dm,
-             m: () => Am
+             d: () => rD,
+             g: () => KD,
+             j: () => LD,
+             n: () => cD,
+             o: () => sD
```

#### 323. `bundles/bloxd.io/main.js` (Changed code · before: `L10255` → after: `L10255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L10255) · [Before (L10255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L10255)

```diff
-           var hm = fm(130);
+           var pD = wD(125);
```

#### 324. `bundles/bloxd.io/main.js` (Changed code · before: `L10263` → after: `L10263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L10263) · [Before (L10263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L10263)

```diff
-                 powerPreference: hm.e
+                 powerPreference: pD.b
```

#### 325. `bundles/bloxd.io/main.js` (Changed code · before: `L10265-L10266` → after: `L10265-L10266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10265-L10266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L10265-L10266) · [Before (L10265-L10266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L10265-L10266)

```diff
-               Rm = null !== im && void 0 !== im ? im : Dm ? await mm.requestAdapter({
-                 powerPreference: hm.e,
+               RD = null !== gD && void 0 !== gD ? gD : cD ? await DD.requestAdapter({
+                 powerPreference: pD.b,
```

#### 326. `bundles/bloxd.io/main.js` (Changed code · before: `L10270` → after: `L10270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L10270) · [Before (L10270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L10270)

```diff
-             if (await am(Rm), null !== (Tm = null !== (fm = null === (Am = Rm.info) || void 0 === Am ? void 0 : Am.isFallbackAdapter) && void 0 !== fm ? fm : Rm.isFallbackAdapter) && void 0 !== Tm && Tm) return "software_adapter";
+             if (await KD(RD), null !== (zD = null !== (wD = null === (sD = RD.info) || void 0 === sD ? void 0 : sD.isFallbackAdapter) && void 0 !== wD ? wD : RD.isFallbackAdapter) && void 0 !== zD && zD) return "software_adapter";
```

#### 327. `bundles/bloxd.io/main.js` (Changed code · before: `L10276` → after: `L10276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L10276) · [Before (L10276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L10276)

```diff
-               (0, hm.u)(mm, Tm)
+               (0, pD.z)(DD, zD)
```

#### 328. `bundles/bloxd.io/main.js` (Changed code · before: `L10287-L10288` → after: `L10287-L10288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10287-L10288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L10287-L10288) · [Before (L10287-L10288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L10287-L10288)

```diff
-               vendor: null !== (Tm = null === (fm = mm.info) || void 0 === fm ? void 0 : fm.vendor) && void 0 !== Tm ? Tm : "",
-               architecture: null !== (hm = null === (Am = mm.info) || void 0 === Am ? void 0 : Am.architecture) && void 0 !== hm ? hm : ""
+               vendor: null !== (zD = null === (wD = DD.info) || void 0 === wD ? void 0 : wD.vendor) && void 0 !== zD ? zD : "",
+               architecture: null !== (pD = null === (sD = DD.info) || void 0 === sD ? void 0 : sD.architecture) && void 0 !== pD ? pD : ""
```

#### 329. `bundles/bloxd.io/main.js` (Changed code · before: `L10294` → after: `L10294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L10294) · [Before (L10294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L10294)

```diff
-             return /swiftshader/i.test(`${null!==(Tm=null===(fm=mm.info)||void 0===fm?void 0:fm.vendor)&&void 0!==Tm?Tm:""} ${null!==(hm=null===(Am=mm.info)||void 0===Am?void 0:Am.architecture)&&void 0!==hm?hm:""}`)
+             return /swiftshader/i.test(`${null!==(zD=null===(wD=DD.info)||void 0===wD?void 0:wD.vendor)&&void 0!==zD?zD:""} ${null!==(pD=null===(sD=DD.info)||void 0===sD?void 0:sD.architecture)&&void 0!==pD?pD:""}`)
```

#### 330. `bundles/bloxd.io/main.js` (Changed code · before: `L10300` → after: `L10300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L10300) · [Before (L10300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L10300)

```diff
-         }, , , , , , , (mm, Tm, fm) => {
+         }, , , , (DD, zD, wD) => {
```

#### 331. `bundles/bloxd.io/main.js` (Changed code · before: `L10302-L10303` → after: `L10302-L10305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10302-L10305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L10302-L10305) · [Before (L10302-L10303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L10302-L10303)

```diff
-             e: () => jm,
-             f: () => qm,
+             B: () => RD,
+             b: () => hD,
+             d: () => GD,
+             g: () => ID,
```

#### 332. `bundles/bloxd.io/main.js` (Changed code · before: `L10308-L10311` → after: `L10309-L10311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10309-L10311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L10309-L10311) · [Before (L10308-L10311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L10308-L10311)

```diff
-             q: () => am,
-             r: () => Ym,
-             u: () => pm,
-             y: () => Rm
+             t: () => KD,
+             w: () => BD,
+             z: () => AD
```

#### 333. `bundles/bloxd.io/main.js` (Changed code · before: `L10329` → after: `L10329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L10329) · [Before (L10329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L10329)

```diff
-                     vendor: null !== (fm = mm.getParameter(null !== (hm = null === am || void 0 === am ? void 0 : am.UNMASKED_VENDOR_WEBGL) && void 0 !== hm ? hm : mm.VENDOR)) && void 0 !== fm ? fm : "",
+                     vendor: null !== (wD = DD.getParameter(null !== (pD = null === KD || void 0 === KD ? void 0 : KD.UNMASKED_VENDOR_WEBGL) && void 0 !== pD ? pD : DD.VENDOR)) && void 0 !== wD ? wD : "",
```

#### 334. `bundles/bloxd.io/main.js` (Changed code · before: `L10352` → after: `L10352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L10352) · [Before (L10352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L10352)

```diff
-             return Am ? hm : void 0
+             return sD ? pD : void 0
```

#### 335. `bundles/bloxd.io/main.js` (Changed code · before: `L10374` → after: `L10374`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10374) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L10374) · [Before (L10374)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L10374)

```diff
-             return Am && null !== (mm = hm) && void 0 !== mm && mm.renderer ? hm : wm
+             return sD && null !== (DD = pD) && void 0 !== DD && DD.renderer ? pD : LD
```

#### 336. `bundles/bloxd.io/main.js` (Changed code · before: `L10387` → after: `L10387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L10387) · [Before (L10387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L10387)

```diff
-             im ??= null !== (Tm = null === (fm = mm.getSupportedExtensions()) || void 0 === fm ? void 0 : fm.includes("KHR_parallel_shader_compile")) && void 0 !== Tm ? Tm : null
+             gD ??= null !== (zD = null === (wD = DD.getSupportedExtensions()) || void 0 === wD ? void 0 : wD.includes("KHR_parallel_shader_compile")) && void 0 !== zD ? zD : null
```

#### 337. `bundles/bloxd.io/main.js` (Changed code · before: `L10406` → after: `L10406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L10406) · [Before (L10406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L10406)

```diff
-         }, , , , , (mm, Tm, fm) => {
+         }, , , (DD, zD, wD) => {
```

#### 338. `bundles/bloxd.io/main.js` (Changed code · before: `L10408` → after: `L10408-L10409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10408-L10409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L10408-L10409) · [Before (L10408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L10408)

```diff
-             c: () => Vm,
+             A: () => AD,
+             D: () => GD,
```

#### 339. `bundles/bloxd.io/main.js` (Changed code · before: `L10410-L10412` → after: `L10411-L10412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10411-L10412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L10411-L10412) · [Before (L10410-L10412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L10410-L10412)

```diff
-             f: () => jm,
-             g: () => Im,
-             k: () => Dm,
+             e: () => OD,
+             i: () => hD,
```

#### 340. `bundles/bloxd.io/main.js` (Changed code · before: `L10414-L10417` → after: `L10414-L10417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10414-L10417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L10414-L10417) · [Before (L10414-L10417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L10414-L10417)

```diff
-             q: () => Ym,
-             s: () => im,
-             u: () => pm,
-             w: () => qm
+             n: () => cD,
+             r: () => RD,
+             v: () => BD,
+             z: () => gD
```

#### 341. `bundles/bloxd.io/main.js` (Changed code · before: `L10419-L10422` → after: `L10419-L10422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10419-L10422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L10419-L10422) · [Before (L10419-L10422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L10419-L10422)

```diff
-           var hm = fm(168),
-             Am = fm(37),
-             am = fm(112),
-             xm = fm(144);
+           var pD = wD(157),
+             sD = wD(35),
+             KD = wD(113),
+             rD = wD(137);
```

#### 342. `bundles/bloxd.io/main.js` (Changed code · before: `L10590` → after: `L10590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L10590) · [Before (L10590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L10590)

```diff
-             Rm = (hm.G.filter((mm => Dm[mm].enabled)), hm.K.filter((mm => im[mm].enabled)), "siteUsed"),
+             RD = (pD.R.filter((DD => cD[DD].enabled)), pD.T.filter((DD => gD[DD].enabled)), "siteUsed"),
```

#### 343. `bundles/bloxd.io/main.js` (Changed code · before: `L10600` → after: `L10600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L10600) · [Before (L10600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L10600)

```diff
-               const Tm = (0, xm.b)();
+               const zD = (0, rD.c)();
```

#### 344. `bundles/bloxd.io/main.js` (Changed code · before: `L10614` → after: `L10614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L10614) · [Before (L10614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L10614)

```diff
-               if (Om(im)) return console.info(`Site used is ${im}, kept from this tab's entry URL`), im;
+               if (ID(gD)) return console.info(`Site used is ${gD}, kept from this tab's entry URL`), gD;
```

#### 345. `bundles/bloxd.io/main.js` (Changed code · before: `L10620` → after: `L10620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L10620) · [Before (L10620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L10620)

```diff
-               return wm().includes("discord") && !wm().includes("/auth-callback/discord") && (mm = "discord"), (wm().includes("coolmathgames") || am.currentUrl.hasSearchParam("coolmath")) && (mm = "coolmathgames"), wm().includes("gx.games") && (mm = "gxGames"), console.info(`Site … [truncated]
+               return LD().includes("discord") && !LD().includes("/auth-callback/discord") && (DD = "discord"), (LD().includes("coolmathgames") || KD.currentUrl.hasSearchParam("coolmath")) && (DD = "coolmathgames"), LD().includes("gx.games") && (DD = "gxGames"), console.info(`Site … [truncated]
```

#### 346. `bundles/bloxd.io/main.js` (Changed code · before: `L10655` → after: `L10655`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L10655) · [Before (L10655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L10655)

```diff
-             b: () => xm,
+             c: () => rD,
```

#### 347. `bundles/bloxd.io/main.js` (Changed code · before: `L10658-L10659` → after: `L10658-L10659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10658-L10659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L10658-L10659) · [Before (L10658-L10659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L10658-L10659)

```diff
-           var hm = fm(149),
-             Am = fm(152);
+           var pD = wD(145),
+             sD = wD(149);
```

#### 348. `bundles/bloxd.io/main.js` (Changed code · before: `L10673-L10675` → after: `L10673-L10675`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10673) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10673-L10675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L10673-L10675) · [Before (L10673-L10675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L10673-L10675)

```diff
-                 if ("object" !== typeof Tm || null === Tm || !Object.prototype.hasOwnProperty.call(Tm, Am.e)) return null;
-                 const fm = Am.l.safeParse(Tm[Am.e]);
-                 return fm.success ? fm.data : (console.warn(`App bridge: the app's injected hello is invalid: ${hm.D(fm.error)}`), null)
+                 if ("object" !== typeof zD || null === zD || !Object.prototype.hasOwnProperty.call(zD, sD.d)) return null;
+                 const wD = sD.j.safeParse(zD[sD.d]);
+                 return wD.success ? wD.data : (console.warn(`App bridge: the app's injected hello is invalid: ${pD.C(wD.error)}`), null)
```

#### 349. `bundles/bloxd.io/main.js` (Changed code · before: `L10688` → after: `L10688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L10688) · [Before (L10688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L10688)

```diff
-         }, , , , , (mm, Tm, fm) => {
+         }, , , , , , , , (DD, zD, wD) => {
```

#### 350. `bundles/bloxd.io/main.js` (Changed code · before: `L10690-L10691` → after: `L10690-L10691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10690-L10691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L10690-L10691) · [Before (L10690-L10691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L10690-L10691)

```diff
-             c: () => xf,
-             g: () => yT,
+             d: () => Kw,
+             h: () => lz,
```

#### 351. `bundles/bloxd.io/main.js` (Changed code · before: `L10694` → after: `L10696-L10697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10696-L10697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L10696-L10697) · [Before (L10694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L10694)

```diff
-             p: () => dT,
+             n: () => Yz,
+             o: () => pw,
```

#### 352. `bundles/bloxd.io/main.js` (Changed code · before: `L10696-L10697` → after: `L10699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L10699) · [Before (L10696-L10697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L10696-L10697)

```diff
-             s: () => WT,
-             t: () => Af,
+             u: () => Nz,
```

#### 353. `bundles/bloxd.io/main.js` (Changed code · before: `L10699-L10700` → after: `L10701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L10701) · [Before (L10699-L10700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L10699-L10700)

```diff
-             w: () => rT,
-             x: () => ff,
+             y: () => Lw,
```

#### 354. `bundles/bloxd.io/main.js` (Changed code · before: `L10702-L10703` → after: `L10703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L10703) · [Before (L10702-L10703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L10702-L10703)

```diff
-             D: () => Nm,
-             G: () => tT,
+             F: () => uz,
```

#### 355. `bundles/bloxd.io/main.js` (Changed code · before: `L10705-L10709` → after: `L10705-L10709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10705-L10709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L10705-L10709) · [Before (L10705-L10709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L10705-L10709)

```diff
-             L: () => sT,
-             M: () => ZT,
-             O: () => mf,
-             R: () => uT,
-             U: () => GT
+             N: () => Zz,
+             Q: () => Vz,
+             S: () => qz,
+             U: () => mz,
+             W: () => jz
```

#### 356. `bundles/bloxd.io/main.js` (Changed code · before: `L10738` → after: `L10738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10738) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L10738) · [Before (L10738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L10738)

```diff
-               const Am = fm?.Parent ? new am : this;
+               const sD = wD?.Parent ? new KD : this;
```

#### 357. `bundles/bloxd.io/main.js` (Changed code · before: `L10761` → after: `L10761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L10761) · [Before (L10761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L10761)

```diff
-               super(`Encountered unidirectional transform during encode: ${mm}`), this.name = "ZodEncodeError"
+               super(`Encountered unidirectional transform during encode: ${DD}`), this.name = "ZodEncodeError"
```

#### 358. `bundles/bloxd.io/main.js` (Changed code · before: `L10905` → after: `L10905`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10905) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L10905) · [Before (L10905)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L10905)

```diff
-             return "string" === typeof mm ? mm : mm?.message
+             return "string" === typeof DD ? DD : DD?.message
```

#### 359. `bundles/bloxd.io/main.js` (Changed code · before: `L10939` → after: `L10939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L10939) · [Before (L10939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L10939)

```diff
-             for (const hm of fm) "number" === typeof hm ? Tm.push(`[${hm}]`) : "symbol" === typeof hm ? Tm.push(`[${JSON.stringify(String(hm))}]`) : /[^\w$]/.test(hm) ? Tm.push(`[${JSON.stringify(hm)}]`) : (Tm.length && Tm.push("."), Tm.push(hm));
+             for (const pD of wD) "number" === typeof pD ? zD.push(`[${pD}]`) : "symbol" === typeof pD ? zD.push(`[${JSON.stringify(String(pD))}]`) : /[^\w$]/.test(pD) ? zD.push(`[${JSON.stringify(pD)}]`) : (zD.length && zD.push("."), zD.push(pD));
```

#### 360. `bundles/bloxd.io/main.js` (Changed code · before: `L10946` → after: `L10946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R10946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L10946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L10946) · [Before (L10946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L10946)

```diff
-             for (const hm of fm) Tm.push(`\u2716 ${hm.message}`), hm.path?.length && Tm.push(`  \u2192 at ${em(hm.path)}`);
+             for (const pD of wD) zD.push(`\u2716 ${pD.message}`), pD.path?.length && zD.push(`  \u2192 at ${bD(pD.path)}`);
```

#### 361. `bundles/bloxd.io/main.js` (Changed code · before: `L11145` → after: `L11145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L11145) · [Before (L11145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L11145)

```diff
-               Um.init(mm, Tm), mm._zod.pattern = [...mm?._zod.bag?.patterns ?? []].pop() ?? (fm = mm._zod.bag, new RegExp(`^${fm?`[\\s\\S]{${fm?.minimum??0},${fm?.maximum??""}}`:"[\\s\\S]*"}$`)), mm._zod.parse = (fm, hm) => {
+               vD.init(DD, zD), DD._zod.pattern = [...DD?._zod.bag?.patterns ?? []].pop() ?? (wD = DD._zod.bag, new RegExp(`^${wD?`[\\s\\S]{${wD?.minimum??0},${wD?.maximum??""}}`:"[\\s\\S]*"}$`)), DD._zod.parse = (wD, pD) => {
```

#### 362. `bundles/bloxd.io/main.js` (Changed code · before: `L11239` → after: `L11239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L11239) · [Before (L11239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L11239)

```diff
-               if (!mm.shape?.[Am]?._zod?.traits?.has("$ZodType")) throw new Error(`Invalid element at key "${Am}": expected a Zod schema`);
+               if (!DD.shape?.[sD]?._zod?.traits?.has("$ZodType")) throw new Error(`Invalid element at key "${sD}": expected a Zod schema`);
```

#### 363. `bundles/bloxd.io/main.js` (Changed code · before: `L11350` → after: `L11350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L11350) · [Before (L11350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L11350)

```diff
-                 return new RegExp(`^(${mm.map((mm=>pm(mm.source))).join("|")})$`)
+                 return new RegExp(`^(${DD.map((DD=>AD(DD.source))).join("|")})$`)
```

#### 364. `bundles/bloxd.io/main.js` (Changed code · before: `L11380` → after: `L11380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L11380) · [Before (L11380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L11380)

```diff
-                 if (!hm || 0 === Object.keys(hm).length) throw new Error(`Invalid discriminated union option at index "${Tm.options.indexOf(fm)}"`);
+                 if (!pD || 0 === Object.keys(pD).length) throw new Error(`Invalid discriminated union option at index "${zD.options.indexOf(wD)}"`);
```

#### 365. `bundles/bloxd.io/main.js` (Changed code · before: `L11393` → after: `L11393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L11393) · [Before (L11393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L11393)

```diff
-                 if (!mm || 0 === mm.size) throw new Error(`Invalid discriminated union option at index "${Tm.options.indexOf(hm)}"`);
+                 if (!DD || 0 === DD.size) throw new Error(`Invalid discriminated union option at index "${zD.options.indexOf(pD)}"`);
```

#### 366. `bundles/bloxd.io/main.js` (Changed code · before: `L11395` → after: `L11395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L11395) · [Before (L11395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L11395)

```diff
-                   if (fm.has(Tm)) throw new Error(`Duplicate discriminator value "${String(Tm)}"`);
+                   if (wD.has(zD)) throw new Error(`Duplicate discriminator value "${String(zD)}"`);
```

#### 367. `bundles/bloxd.io/main.js` (Changed code · before: `L11497` → after: `L11497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L11497) · [Before (L11497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L11497)

```diff
-               mm._zod.values = hm, mm._zod.pattern = new RegExp(`^(${fm.filter((mm=>Im.has(typeof mm))).map((mm=>"string"===typeof mm?Km(mm):mm.toString())).join("|")})$`), mm._zod.parse = (Tm, Am) => {
+               DD._zod.values = pD, DD._zod.pattern = new RegExp(`^(${wD.filter((DD=>MD.has(typeof DD))).map((DD=>"string"===typeof DD?OD(DD):DD.toString())).join("|")})$`), DD._zod.parse = (zD, sD) => {
```

#### 368. `bundles/bloxd.io/main.js` (Changed code · before: `L11510` → after: `L11510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L11510) · [Before (L11510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L11510)

```diff
-               mm._zod.values = fm, mm._zod.pattern = new RegExp(`^(${Tm.values.map((mm=>"string"===typeof mm?Km(mm):mm?Km(mm.toString()):String(mm))).join("|")})$`), mm._zod.parse = (hm, Am) => {
+               DD._zod.values = wD, DD._zod.pattern = new RegExp(`^(${zD.values.map((DD=>"string"===typeof DD?OD(DD):DD?OD(DD.toString()):String(DD))).join("|")})$`), DD._zod.parse = (pD, sD) => {
```

#### 369. `bundles/bloxd.io/main.js` (Changed code · before: `L11525` → after: `L11525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L11525) · [Before (L11525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L11525)

```diff
-                   return (xm instanceof Promise ? xm : Promise.resolve(xm)).then((mm => (fm.value = mm, fm)))
+                   return (rD instanceof Promise ? rD : Promise.resolve(rD)).then((DD => (wD.value = DD, wD)))
```

#### 370. `bundles/bloxd.io/main.js` (Changed code · before: `L11541` → after: `L11541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L11541) · [Before (L11541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L11541)

```diff
-                 return mm ? new RegExp(`^(${pm(mm.source)})?$`) : void 0
+                 return DD ? new RegExp(`^(${AD(DD.source)})?$`) : void 0
```

#### 371. `bundles/bloxd.io/main.js` (Changed code · before: `L11547` → after: `L11547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6R11547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/13cb6358992b8485cf7be9da882c6c4a3cbda467...build/bloxd.io/tz47m9.2cb7e113#diff-908d774684107e3e3b46c61186a463a52705074b813e21c582e1d5ad693bf5c6) · [After (L11547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/tz47m9.2cb7e113/bundles/bloxd.io/main.js#L11547) · [Before (L11547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/13cb6358992b8485cf7be9da882c6c4a3cbda467/bundles/bloxd.io/main.js#L11547)

```diff
-                 return void 0 === mm.value ? mm : Tm.innerType._zod.run(mm, fm)
+                 return void 0 === DD.value ? DD : zD.innerType._zod.run(DD, wD)
```
