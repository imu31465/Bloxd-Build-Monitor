# Changed — Bundle Modifications Report (Part 017 / 115)

- **Updated at**: `2026-11-21T00:51 JST`
- **Part**: `17 / 115` (**326** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 016](part-016.md) · [Part 018 →](part-018.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/197.js` (bcgkc.38229551 → bbb6l5.0244a119 · continued)

- **File**: `bundles/bloxd.io/chunks/js/197.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b)

#### 1. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L4-L335` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/197.js#L4) · [Before (L4-L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/197.js#L4-L335)

```diff
-   37597: (TT, kT, cT) => {
-     var lT = cT(37603);
- 
-     function MT(TT) {
-       for (var kT, cT, MT = 0, KT = TT.length, OT = 0; OT < TT.length;) {
-         for (kT = TT[OT], cT = 0; OT < KT && TT[OT] === kT;) ++OT, ++cT;
-         MT += lT.log2(cT) / 7 | 0, MT += lT.log2(kT >>> 0) / 7 | 0, MT += 2
-       }
-       return MT
-     }
-     kT.size = MT, kT.encode = function(TT, kT) {
-       kT || (kT = new Uint8Array(MT(TT)));
-       for (var cT, lT, KT = 0, OT = kT.length, yT = 0; yT < TT.length;) {
-         for (cT = TT[yT], lT = 0; yT < TT.length && TT[yT] === cT;) ++yT, ++lT;
-         for (; KT < OT && lT >= 128;) kT[KT++] = 128 + (127 & lT), lT >>>= 7;
-         if (KT >= OT) throw new Error("RLE buffer overflow");
- ... (316 more removed lines; see GitHub link above)
+   9464: (qq, Eq, gq) => {
```

#### 2. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L338` → after: `L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/197.js#L7) · [Before (L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/197.js#L338)

```diff
-       e: () => KT
+       d: () => Oq
```

#### 3. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L340` → after: `L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/197.js#L9) · [Before (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/197.js#L340)

```diff
-     var lT = cT(9495);
+     var Yq = gq(9433);
```

#### 4. `bundles/bloxd.io/chunks/js/197.js` (Changed code · before: `L342` → after: `L11-L1367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3bR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ddc51a5d30b08818b359b809ca95b903232f1ed065213a39cef649977fe89b3b) · [After (L11-L1367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/197.js#L11-L1367) · [Before (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/197.js#L342)

```diff
-       KT = Object.freeze(new lT.d(MT, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
+       Oq = Object.freeze(new Yq.e(lq, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
+   },
+   27551: qq => {
+     qq.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAD4klEQVR4nO3cP2vbQBjH8XtLImAInfJ69BYCnavhtu7JkrG0Htq0Y7cOHprF4GaonyaBppChUApdrsSxXdfoz8kn+bmzvsMPDInlR/d8bP07yWT20jTEJR7TQVwENfSSfay8dgBgAQAACwAAWAAAwAIAABYAALAAMAB4 … [truncated]
+   },
+   33537: qq => {
+     qq.exports = "data:model/gltf-binary;base64,Z2xURgIAAADsSwAAtDQAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImdsVEYtVHJhbnNmb3JtIHY0LjMuMCIsInZlcnNpb24iOiIyLjAifSwiYWNjZXNzb3JzIjpbeyJ0eXBlIjoiU0NBTEFSIiwiY29tcG9uZW50VHlwZSI6NTEyMywiY291bnQiOjM2fSx7InR5cGUiOiJWRUMzIiwiY29tcG9uZW50VHlw … [truncated]
+   },
+   33540: qq => {
+     qq.exports = "data:model/gltf-binary;base64,Z2xURgIAAABkWAAACBEAAEpTT057ImFzc2V0Ijp7ImdlbmVyYXRvciI6ImdsVEYtVHJhbnNmb3JtIHY0LjMuMCIsInZlcnNpb24iOiIyLjAifSwiZXh0cmFzIjp7ImJsb3hkQnVpbGRIYXNoIjoiZDk5YzM4OTQifSwiYWNjZXNzb3JzIjpbeyJ0eXBlIjoiU0NBTEFSIiwiY29tcG9uZW50VHlwZSI6NTEyNSwi … [truncated]
+   },
+   27554: qq => {
+     qq.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAD4klEQVR4nO3cP2vbQBjH8XtLImAInfJ69BYCnavhtu7JkrG0Htq0Y7cOHprF4GaonyaBppChUApdrsSxXdfoz8kn+bmzvsMPDInlR/d8bP07yWT20jTEJR7TQVwENfSSfay8dgBgAQAACwAAWAAAwAIAABYAALAAMAB4 … [truncated]
+   },
+   27560: qq => {
+     qq.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAHHUlEQVR4nO3dP2vkRhgGcDX7YVxsYzfTuDl3Smdz1ZKwgnQGE8xyMTHxBULOcezjmgSTS2PwQbKBI80Rc+Ai5AO4MiFNiu2uSLmFmzBBy84yO9Y7mpFmpJHmKZ7Ca2lW0vx2RtLoTzJ+up+IDDc2a0Uuy2V56ZNdJ2Fb … [truncated]
+ ... (1341 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/198.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/198.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31)

#### 1. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L4` → after: `L4-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L4-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/198.js#L4-L91) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/198.js#L4)

```diff
-   40123: (TT, kT, cT) => {
+   37725: (qq, Eq, gq) => {
+     var Yq = gq(37734);
+ 
+     function lq(qq) {
+       for (var Eq, gq, lq = 0, Oq = qq.length, mq = 0; mq < qq.length;) {
+         for (Eq = qq[mq], gq = 0; mq < Oq && qq[mq] === Eq;) ++mq, ++gq;
+         lq += Yq.log2(gq) / 7 | 0, lq += Yq.log2(Eq >>> 0) / 7 | 0, lq += 2
+       }
+       return lq
+     }
+     Eq.size = lq, Eq.encode = function(qq, Eq) {
+       Eq || (Eq = new Uint8Array(lq(qq)));
+       for (var gq, Yq, Oq = 0, mq = Eq.length, xq = 0; xq < qq.length;) {
+         for (gq = qq[xq], Yq = 0; xq < qq.length && qq[xq] === gq;) ++xq, ++Yq;
+         for (; Oq < mq && Yq >= 128;) Eq[Oq++] = 128 + (127 & Yq), Yq >>>= 7;
+         if (Oq >= mq) throw new Error("RLE buffer overflow");
+ ... (72 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L6-L8` → after: `L93-L95`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L93-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/198.js#L93-L95) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/198.js#L6-L8)

```diff
-       FORMER_BLOCK_IMAGE_NAMES: () => lT.e,
-       textureAnimationData: () => MT.v,
-       textureNameToIndex: () => MT.w
+       emptyColumnHeight: () => Pq,
+       loadHeatmapSchematic: () => Qq,
+       readSchematicBlocks: () => yq
```

#### 3. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L10-L11` → after: `L97-L333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L97-L333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/198.js#L97-L333) · [Before (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/198.js#L10-L11)

```diff
-     var lT = cT(38555),
-       MT = cT(9447)
+     var Yq = gq(3600),
+       lq = gq.n(Yq),
+       Oq = gq(3584),
+       mq = gq(37725),
+       xq = gq(190),
+       Aq = gq(9379);
+     const cq = [{
+         name: "x",
+         type: "int"
+       }, {
+         name: "y",
+         type: "int"
+       }, {
+         name: "z",
+         type: "int"
+       }],
+ ... (221 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L13` → after: `L335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/198.js#L335) · [Before (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/198.js#L13)

```diff
-   9542: (TT, kT, cT) => {
+   9464: (qq, Eq, gq) => {
```

#### 5. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L16` → after: `L338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/198.js#L338) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/198.js#L16)

```diff
-       e: () => KT
+       d: () => Oq
```

#### 6. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L18` → after: `L340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/198.js#L340) · [Before (L18)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/198.js#L18)

```diff
-     var lT = cT(9495);
+     var Yq = gq(9433);
```

#### 7. `bundles/bloxd.io/chunks/js/198.js` (Changed code · before: `L20-L32` → after: `L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31R342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-3ca29988f219e37e8160a06dde09f8a6b458a9d812752a71fcc51ce5597b5d31) · [After (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/198.js#L342) · [Before (L20-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/198.js#L20-L32)

```diff
-       KT = Object.freeze(new lT.d(MT, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
-   },
-   38555: (TT, kT, cT) => {
-     cT.d(kT, {
-       e: () => lT,
-       g: () => MT
-     });
-     const lT = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((TT => [TT, `${TT}_block`])));
- 
-     function MT(TT) {
-       var kT;
-       return null !== (kT = lT.get(TT)) && void 0 !== kT ? kT : TT
-     }
+       Oq = Object.freeze(new Yq.e(lq, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/199.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/199.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93)

#### 1. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L4` → after: `L4-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L4-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/199.js#L4-L13) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/199.js#L4)

```diff
-   40246: (TT, kT, cT) => {
+   40244: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       FORMER_BLOCK_IMAGE_NAMES: () => Yq.c,
+       textureAnimationData: () => lq.x,
+       textureNameToIndex: () => lq.y
+     });
+     var Yq = gq(38689),
+       lq = gq(9379)
+   },
+   9464: (qq, Eq, gq) => {
```

#### 2. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L7-L8` → after: `L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/199.js#L16) · [Before (L7-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/199.js#L7-L8)

```diff
-       e: () => yT,
-       g: () => OT
+       d: () => Oq
```

#### 3. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L10-L12` → after: `L18-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L18-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/199.js#L18-L27) · [Before (L10-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/199.js#L10-L12)

```diff
-     var lT = cT(40254),
-       MT = cT(4761),
-       KT = cT(40261);
+     var Yq = gq(9433);
+     const lq = "Air",
+       Oq = Object.freeze(new Yq.e(lq, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
+   },
+   38689: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       c: () => Yq,
+       e: () => lq
+     });
+     const Yq = new Map(["graphite", "football", "torch", "torch_blue", "torch_cyan", "torch_green", "torch_orange", "torch_purple", "torch_red"].map((qq => [qq, `${qq}_block`])));
```

#### 4. `bundles/bloxd.io/chunks/js/199.js` (Changed code · before: `L15-L1352` → after: `L30-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-a3741a2244857a8caf864e40fb0caad762c97431a5df71c8c32dab5885a5bd93) · [After (L30-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/199.js#L30-L31) · [Before (L15-L1352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/199.js#L15-L1352)

```diff
-       return TT.payloadKind === MT.ac.Msgpack ? (0, lT.c)(TT.payload) : void 0
-     }
- 
-     function yT(TT, kT) {
-       if (kT.payloadKind === MT.ac.Bytes || kT.payloadKind === MT.ac.MsgpackBin) return (0, KT.d)(TT, kT.payload)
-     }
- 
-     function fT(TT) {
-       return null !== TT && "object" === typeof TT
-     }
-   },
-   40264: (TT, kT, cT) => {
-     cT.d(kT, {
-       d: () => AT,
-       h: () => CT,
-       l: () => jT,
- ... (1322 more removed lines; see GitHub link above)
+       var Eq;
+       return null !== (Eq = Yq.get(qq)) && void 0 !== Eq ? Eq : qq
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/200.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/200.js` (118 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f)

#### 1. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L4)

```diff
-   38938: (TT, kT, cT) => {
+   40350: (qq, Eq, gq) => {
```

#### 2. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L6` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L6-L8) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L6)

```diff
-       b: () => lT
+       b: () => Aq,
+       d: () => xq,
+       e: () => mq
```

#### 3. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L8-L32` → after: `L10-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L10-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L10-L15) · [Before (L8-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L8-L32)

```diff
-     class lT {
-       constructor(TT, kT) {
-         this.read = TT, this.apply = kT, this.release = null
-       }
-       turn(TT, kT) {
-         const cT = null === this.release ? this.read() : this.release.transitionMs;
-         this.stop(!1), this.apply({
-           forcedCameraDirectionTransitionMs: kT,
-           forcedCameraDirection: [TT[0], TT[1], TT[2]]
-         }), this.release = {
-           timer: setTimeout((() => {
-             this.stop(!0)
-           }), kT + 100),
-           transitionMs: cT
-         }
-       }
- ... (9 more removed lines; see GitHub link above)
+     var Yq = gq(40353),
+       lq = gq(4622),
+       Oq = gq(40359);
+ 
+     function mq(qq) {
+       return qq.payloadKind === lq.hc.Msgpack ? (0, Yq.e)(qq.payload) : void 0
```

#### 4. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L43` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L19) · [Before (L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L43)

```diff
-       lT.set(TT, kT)
+       if (Eq.payloadKind === lq.hc.Bytes || Eq.payloadKind === lq.hc.MsgpackBin) return (0, Oq.e)(qq, Eq.payload)
```

#### 5. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L47` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L23) · [Before (L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L47)

```diff
-       return TT ? lT.get(TT) : void 0
+       return null !== qq && "object" === typeof qq
```

#### 6. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L50` → after: `L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L26) · [Before (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L50)

```diff
-   39371: (TT, kT, cT) => {
+   40366: (qq, Eq, gq) => {
```

#### 7. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L52` → after: `L28-L32`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L28-L32)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L28-L32) · [Before (L52)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L52)

```diff
-       e: () => MT
+       b: () => Bq,
+       d: () => Wq,
+       h: () => Nq,
+       l: () => uq,
+       o: () => dq
```

#### 8. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L54` → after: `L34-L40`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR34) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L34-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L34-L40) · [Before (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L54)

```diff
-     var lT = cT(38062);
+     var Yq = gq(4622),
+       lq = gq(40369);
+     const Oq = new Map,
+       mq = new Set,
+       xq = new Set;
+     let Aq = 0,
+       cq = 0;
```

#### 9. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L56-L68` → after: `L42-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L42-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L42-L45) · [Before (L56-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L56-L68)

```diff
-     function MT(TT, kT, cT) {
-       var MT, KT, OT, yT, fT, xT, IT;
-       const AT = (0, lT.c)(TT, kT, cT[0], cT[1], cT[2]),
-         CT = AT ? null !== (MT = AT.textCell) && void 0 !== MT ? MT : AT.rect.anchor : cT,
-         jT = kT(CT[0], CT[1], CT[2]);
-       return {
-         pos: [cT[0], cT[1], cT[2]],
-         noticeboardSpan: AT && {
-           width: AT.rect.width,
-           height: AT.rect.height
-         },
-         text: null !== (KT = null === jT || void 0 === jT || null === (OT = jT.persisted) || void 0 === OT || null === (yT = OT.shared) || void 0 === yT ? void 0 : yT.text) && void 0 !== KT ? KT : "",
-         textSize: null !== (fT = null === jT || void 0 === jT || null === (xT = jT.persisted) || void 0 === xT || null === (IT = xT.shared) || void 0 === IT ? void 0 : IT.textSize) && void 0 !== fT ? fT : null
+     function uq(qq, Eq) {
+       let gq = Oq.get(qq);
+       return gq || (gq = new Set, Oq.set(qq, gq)), gq.add(Eq), () => {
+         gq.delete(Eq)
```

#### 10. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L71-L72` → after: `L48-L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L48-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L48-L65) · [Before (L71-L72)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L71-L72)

```diff
-   },
-   38350: (TT, kT, cT) => {
+ 
+     function Bq() {
+       return 0 !== Aq
+     }
+ 
+     function Wq(qq) {
+       return mq.add(qq), () => {
+         mq.delete(qq)
+       }
+     }
+ 
+     function Nq(qq) {
+       return xq.add(qq), () => {
+         xq.delete(qq)
+       }
+     }
+ ... (2 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L74-L80` → after: `L67-L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR67) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L67-L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L67-L90) · [Before (L74-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L74-L80)

```diff
-       switch (TT.kind) {
-         case void 0:
-         case "flatEmissive":
-           return !1;
-         case "chevronPath":
-         case "furnaceFire":
-           return !0
+       let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mq;
+       for (const Yq of Eq) try {
+         Yq()
+       } catch (gq) {
+         qq ? (0, lq.r)(gq, aq) : console.error(aq, gq)
+       }
+     }
+     const dq = {
+       fire: function(qq) {
+         if ("connection" === qq.type) {
+           const Eq = qq.phase === Yq.u.Activated && qq.conn !== Aq && qq.conn > cq,
+             gq = (qq.phase === Yq.u.Left || qq.phase === Yq.u.Closed) && qq.conn === Aq;
+           return void(Eq || gq ? (Aq = Eq ? qq.conn : 0, Vq(!0)) : qq.phase === Yq.u.Resumed && 0 !== Aq && qq.conn > cq && (Aq = qq.conn, Vq(!0, xq)))
+         }
+         const Eq = Oq.get(qq.Hc);
+         if (Eq && qq.conn === Aq && 0 !== Aq)
+ ... (8 more added lines; see GitHub link above)
```

#### 12. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L85-L86` → after: `L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L98) · [Before (L85-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L85-L86)

```diff
-       f: () => KT,
-       i: () => lT
+       f: () => xq
```

#### 13. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L88-L89` → after: `L100-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L100-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L100-L127) · [Before (L88-L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L88-L89)

```diff
-     const MT = 4,
-       KT = 3
+     var Yq = gq(1261),
+       lq = gq(40318);
+     const Oq = new TextDecoder,
+       mq = new TextEncoder;
+ 
+     function xq(qq, Eq) {
+       const gq = qq.queries.entityName(Eq);
+       if (gq === lq.Nc) return;
+       const mq = qq.memoryData(qq.scratch(), 4 + gq, 4, "entity_name's answer");
+       if (!mq) return;
+       const xq = mq.getUint32(0, !0),
+         Aq = Oq.decode(new Uint8Array(mq.buffer, mq.byteOffset + 4, gq));
+       return (0, Yq.e)(Aq, !1, xq === lq._d ? null : xq)
+     }
+ 
+     function Aq(qq, Eq, gq) {
+ ... (12 more added lines; see GitHub link above)
```

#### 14. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L91` → after: `L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L129) · [Before (L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L91)

```diff
-   38960: (TT, kT, cT) => {
+   40353: (qq, Eq, gq) => {
```

#### 15. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L93-L94` → after: `L131-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L131-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L131-L132) · [Before (L93-L94)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L93-L94)

```diff
-       b: () => MT,
-       e: () => KT
+       e: () => lq,
+       h: () => uq
```

#### 16. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L96-L97` → after: `L134-L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L134-L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L134-L141) · [Before (L96-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L96-L97)

```diff
-     var lT = cT(339);
-     const MT = new Set(["bedwars", "bridgeBattle", "buildAFactory2", "classic", "clutch", "containmentBreach", "cooking", "defusal", "frontline", "goalRush", "luckyBedwars", "ninetyNineNights", "oneBlock", "plots", "pvpCiv", "skyIslands", "skyblock", "tsunami"]);
+     const Yq = new TextDecoder;
+ 
+     function lq(qq) {
+       const Eq = new Oq(qq),
+         gq = Eq.value();
+       if (Eq.at !== qq.length) throw new Error(`msgpack: ${qq.length-Eq.at} bytes after the value`);
+       return gq
+     }
```

#### 17. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L100-L119` → after: `L144-L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L144-L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L144-L295) · [Before (L100-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L100-L119)

```diff
-         this.importGame = TT, this.loads = new Map, this.loaded = new Map
-       }
-       load(TT) {
-         const kT = (0, lT.Lb)(TT);
-         if (!MT.has(kT)) return Promise.resolve(void 0);
-         let cT = this.loads.get(kT);
-         return cT || (cT = this.importGame(kT).then((TT => {
-           const cT = TT.default;
-           if ("function" !== typeof cT) throw new Error(`${kT}'s client code has no default-exported factory`);
-           return this.loaded.set(kT, cT), cT
-         })).catch((TT => {
-           throw this.loads.delete(kT), TT
-         })), this.loads.set(kT, cT)), cT
-       }
-       loadedFactory(TT) {
-         const kT = (0, lT.Lb)(TT);
- ... (4 more removed lines; see GitHub link above)
+         this.bytes = qq, this.at = 0, this.depth = 0, this.view = void 0, this.view = new DataView(qq.buffer, qq.byteOffset, qq.byteLength)
+       }
+       value() {
+         const qq = this.u8();
+         if (qq <= 127) return qq;
+         if (qq >= 224) return qq - 256;
+         if (qq >= 128 && qq <= 143) return this.map(15 & qq);
+         if (qq >= 144 && qq <= 159) return this.array(15 & qq);
+         if (qq >= 160 && qq <= 191) return this.str(31 & qq);
+         switch (qq) {
+           case 192:
+             return null;
+           case 194:
+             return !1;
+           case 195:
+             return !0;
+ ... (136 more added lines; see GitHub link above)
```

#### 18. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L122-L129` → after: `L298-L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L298-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L298-L301) · [Before (L122-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L122-L129)

```diff
-   },
-   39379: (TT, kT, cT) => {
-     cT.d(kT, {
-       d: () => OT
-     });
-     var lT = cT(9542),
-       MT = cT(9384),
-       KT = cT(3214);
+     const mq = new TextEncoder,
+       xq = -(2n ** 63n),
+       Aq = 2n ** 63n - 1n,
+       cq = 2n ** 64n - 1n;
```

#### 19. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L132-L137` → after: `L304-L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L304-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L304-L377) · [Before (L132-L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L132-L137)

```diff
-       if (TT === lT.b) return 0;
-       const kT = (0, KT.e)(TT);
-       if (void 0 !== kT && kT <= MT.MAX_BLOCK_ID) return kT;
-       const cT = (0, KT.e)(TT.split("|")[0]);
-       if (void 0 !== cT && cT <= MT.MAX_BLOCK_ID && (0, MT.rootMetaDescOf)(cT) === TT) return cT;
-       throw new Error(`Invalid block name. You sent ${TT}. The only valid block names are 'Air' and those contained within the blockMetadata.ts file`)
+       const Eq = new Bq;
+       return Eq.value(qq, 0), Eq.bytes()
+     }
+     class Bq {
+       constructor() {
+         this.buf = new Uint8Array(64), this.view = new DataView(this.buf.buffer), this.at = 0
+       }
+       bytes() {
+         return this.buf.subarray(0, this.at)
+       }
+       value(qq, Eq) {
+         if (Eq > 512) throw new Error("msgpack: nested too deep");
+         switch (typeof qq) {
+           case "undefined":
+             return this.u8(212), this.u8(0), void this.u8(0);
+           case "boolean":
+ ... (58 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L140` → after: `L380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L380) · [Before (L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L140)

```diff
-   38998: (TT, kT, cT) => {
+   40359: (qq, Eq, gq) => {
```

#### 21. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L144` → after: `L384-L387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L384-L387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L384-L387) · [Before (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L144)

```diff
-     var lT = cT(31);
+     var Yq = gq(40343);
+     const lq = new TextDecoder("utf-8", {
+       ignoreBOM: !0
+     });
```

#### 22. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L147` → after: `L390-L426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L390-L426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L390-L426) · [Before (L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L147)

```diff
-         this.screen = TT, this.hidesHud = !1
+         this.buf = qq, this.at = 0, this.view = null
+       }
+       bool() {
+         return 0 !== this.u8()
+       }
+       long() {
+         let qq = this.u8(),
+           Eq = 127 & qq,
+           gq = 128;
+         for (; 128 & qq;) {
+           if (gq > 2 ** 63) throw new RangeError("avro: varint too long");
+           qq = this.u8(), Eq += (127 & qq) * gq, gq *= 128
+         }
+         return Eq % 2 === 1 ? -(Eq + 1) / 2 : Eq / 2
+       }
+       float() {
+ ... (21 more added lines; see GitHub link above)
```

#### 23. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L149-L150` → after: `L428-L429`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L428-L429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L428-L429) · [Before (L149-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L149-L150)

```diff
-       show(TT, kT) {
-         this.screen.setFade(TT.colour, TT.alpha), this.screen.setLetterbox(!0 === kT.letterbox, TT.alpha < 1), this.setHudHidden(!0 === kT.hideHud)
+       bytes() {
+         return this.fixed(this.size())
```

#### 24. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L152-L153` → after: `L431-L433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L431-L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L431-L433) · [Before (L152-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L152-L153)

```diff
-       clear() {
-         this.screen.clear(), this.setHudHidden(!1)
+       fixed(qq) {
+         const Eq = this.take(qq);
+         return this.buf.slice(Eq, Eq + qq)
```

#### 25. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L155-L158` → after: `L435-L472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR435) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L435-L472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L435-L472) · [Before (L155-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L155-L158)

```diff
-       setHudHidden(TT) {
-         this.hidesHud !== TT && (this.hidesHud = TT, lT.e.set({
-           isUiHiddenByCamera: TT
-         }))
+       index(qq) {
+         const Eq = this.long();
+         if (!(Eq >= 0 && Eq < qq)) throw new RangeError(`avro: index ${Eq} of ${qq}`);
+         return Eq
+       }
+       DN(qq) {
+         const Eq = [];
+         for (let gq = this.long(); 0 !== gq; gq = this.long()) {
+           gq = this.block(gq);
+           for (let Yq = 0; Yq < gq; Yq++) Eq.push(qq(this))
+         }
+         return Eq
+       }
+       map(qq) {
+         const Eq = {};
+         for (let gq = this.long(); 0 !== gq; gq = this.long()) {
+ ... (22 more added lines; see GitHub link above)
```

#### 26. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L162` → after: `L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L492) · [Before (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L162)

```diff
-   38972: (TT, kT, cT) => {
+   40343: (qq, Eq, gq) => {
```

#### 27. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L173` → after: `L515-L519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L515-L519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L515-L519) · [Before (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L173)

```diff
-       x: () => IT
+       u: () => Wq,
+       v: () => cq,
+       w: () => mq,
+       x: () => nq,
+       z: () => lq
```

#### 28. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L175-L181` → after: `L521-L545`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L521-L545)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L521-L545) · [Before (L175-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L175-L181)

```diff
-     const lT = Math.PI / 2 - .001,
-       MT = 2 * Math.PI,
-       KT = 1e-9;
- 
-     function OT(TT, kT) {
-       kT.heading = TT.heading, kT.pitch = TT.pitch
-     }
+     const Yq = 2,
+       lq = 12,
+       Oq = 27,
+       mq = 40,
+       xq = 52,
+       Aq = 59,
+       cq = 63,
+       uq = 83,
+       Bq = 84,
+       Wq = 89,
+       Nq = 91,
+       aq = 93,
+       Vq = 94,
+       dq = 95,
+       jq = 97,
+       Hq = 101,
+ ... (9 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L184-L189` → after: `L548-L710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L548-L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L548-L710) · [Before (L184-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L184-L189)

```diff
-       const cT = kT - TT;
-       return cT - MT * Math.floor((cT + Math.PI) / MT)
-     }
- 
-     function fT(TT, kT, cT) {
-       return TT + yT(TT, kT) * cT
+       switch (qq) {
+         case Yq:
+           return function(qq) {
+             return {
+               tg: Kq(qq),
+               hg: qq.float(),
+               ng: qq.long()
+             }
+           }(Eq);
+         case lq:
+           return function(qq) {
+             return {
+               Oq: Tq(qq),
+               mq: Tq(qq)
+             }
+           }(Eq);
+ ... (147 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L193-L195` → after: `L714-L716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L714-L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L714-L716) · [Before (L193-L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L193-L195)

```diff
-       if (!Number.isFinite(TT)) return TT;
-       const kT = TT - MT * Math.floor(TT / MT);
-       return kT < MT ? kT : 0
+       return {
+         entityName: qq.str()
+       }
```

#### 31. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L198-L199` → after: `L719-L721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L719-L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L719-L721) · [Before (L198-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L198-L199)

```diff
-     function IT(TT, kT) {
-       return TT + yT(TT, kT)
+     function Zq(qq) {
+       const Eq = qq.index(4);
+       return 0 === Eq ? qq.str() : 1 === Eq ? qq.long() : 2 === Eq ? qq.bool() : iq(qq)
```

#### 32. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L203` → after: `L725-L727`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L725-L727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L725-L727) · [Before (L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L203)

```diff
-       return Math.max(-lT, Math.min(lT, TT))
+       return 0 === qq.index(2) ? null : function(qq) {
+         return qq.map(Zq)
+       }(qq)
```

#### 33. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L206-L208` → after: `L730-L734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L730-L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L730-L734) · [Before (L206-L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L206-L208)

```diff
-     function CT(TT, kT, cT) {
-       const lT = Math.cos(kT);
-       return cT[0] = lT * Math.sin(TT), cT[1] = -Math.sin(kT), cT[2] = lT * Math.cos(TT), cT
+     function Mq(qq) {
+       return {
+         translationKey: qq.str(),
+         params: fq(qq)
+       }
```

#### 34. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L211-L213` → after: `L737-L738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L737-L738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L737-L738) · [Before (L211-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L211-L213)

```diff
-     function jT(TT, kT, cT, lT) {
-       const MT = Math.sqrt(TT * TT + cT * cT);
-       return MT < KT && Math.abs(kT) < KT || (MT >= KT && (lT.heading = Math.atan2(TT, cT)), lT.pitch = AT(Math.atan2(-kT, MT) + 0)), lT
+     function Tq(qq) {
+       return 0 === qq.index(2) ? null : qq.str()
```

#### 35. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L216-L217` → after: `L741-L748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L741-L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L741-L748) · [Before (L216-L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L216-L217)

```diff
-     function vT(TT, kT) {
-       return jT(TT[0], TT[1], TT[2], kT)
+     function zq(qq) {
+       return 0 === qq.index(2) ? null : function(qq) {
+         return {
+           color: Tq(qq),
+           colour: Tq(qq),
+           fontSize: Tq(qq)
+         }
+       }(qq)
```

#### 36. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L220-L221` → after: `L751-L755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L751-L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L751-L755) · [Before (L220-L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L220-L221)

```diff
-     function tT(TT, kT, cT) {
-       return jT(kT[0] - TT[0], kT[1] - TT[1], kT[2] - TT[2], cT)
+     function Sq(qq) {
+       return {
+         icon: qq.str(),
+         style: zq(qq)
+       }
```

#### 37. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L232-L236` → after: `L759-L763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L759-L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L759-L763) · [Before (L232-L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L232-L236)

```diff
-       var kT;
-       const cT = "default" === TT.mode ? "movement" : null !== (kT = TT.playerFacing) && void 0 !== kT ? kT : "movement";
-       return "cursor" === cT ? {
-         facing: cT,
-         mouseTurns: null
+       const Eq = qq.index(3);
+       return 0 === Eq ? {
+         string: qq.str()
+       } : 1 === Eq ? {
+         styledEntityName: iq(qq)
```

#### 38. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L238-L239` → after: `L765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L765) · [Before (L238-L239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L238-L239)

```diff
-         facing: cT,
-         mouseTurns: "default" !== TT.mode && void 0 !== TT.playerLook ? "look" : "view"
+         styledTranslatedText: Mq(qq)
```

#### 39. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L243-L244` → after: `L769-L771`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L769-L771)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L769-L771) · [Before (L243-L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L243-L244)

```diff
-     function KT(TT, kT, cT, MT, KT, OT) {
-       return OT.Rm = 0, OT.Wm = 0, OT.pointedAt = void 0, void 0 !== MT ? KT ? (OT.pointedAt = MT, TT) : (0, lT.s)(MT.heading) : KT ? (OT.Rm = kT, OT.Wm = cT, TT) : (0, lT.s)(TT + kT)
+     function Gq(qq) {
+       const Eq = qq.index(3);
+       return 0 === Eq ? null : 1 === Eq ? qq.str() : qq.long()
```

#### 40. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L255-L258` → after: `L774-L775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L774-L775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L774-L775) · [Before (L255-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L255-L258)

```diff
-     function OT(TT, kT, cT, lT) {
-       if (!(lT > 0)) return kT;
-       const MT = kT > TT ? Math.min(kT, TT + cT / lT) : Math.max(kT, TT - cT / lT);
-       return Math.abs(kT - MT) < 1e-9 ? kT : MT
+     function Lq(qq) {
+       return 0 === qq.index(2) ? null : qq.float()
```

#### 41. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L260-L314` → after: `L777-L786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L777-L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L777-L786) · [Before (L260-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L260-L314)

```diff
-     class yT {
-       constructor() {
-         this.phase = null, this.outMs = 0, this.holdMs = 0, this.inMs = 0, this.heldMs = 0, this.sinceTurnMs = 1 / 0, this.clearMs = 1 / 0, this.waiting = null, this.screen = {
-           colour: lT.f,
-           alpha: 0
-         }
-       }
-       getScreen() {
-         return this.screen
-       }
-       fadeOut(TT) {
-         !this.isGoingOut() && this.sinceTurnMs < lT.l.minFadeTurnMs ? this.waiting = {
-           turn: "out",
-           transition: TT
-         } : (this.waiting = null, this.startOut(TT))
-       }
- ... (39 more removed lines; see GitHub link above)
+ 
+     function Jq(qq) {
+       return 0 === qq.index(2) ? null : function(qq) {
+         return {
+           color: Tq(qq),
+           colour: Tq(qq),
+           fontWeight: Gq(qq),
+           fontStyle: Tq(qq),
+           fontSize: Tq(qq),
+           opacity: Lq(qq)
```

#### 42. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L316` → after: `L788-L795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L788-L795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L788-L795) · [Before (L316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L316)

```diff
-         return "in" === this.phase && (kT.alpha = OT(kT.alpha, 0, KT, this.inMs), kT.alpha <= 0 && (this.phase = null, this.clearMs = 0)), cT
+       }(qq)
+     }
+ 
+     function kq(qq) {
+       return {
+         str: pq(qq),
+         style: Jq(qq),
+         clickableUrl: Tq(qq)
```

#### 43. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L324-L325` → after: `L799-L800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L799-L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L799-L800) · [Before (L324-L325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L324-L325)

```diff
-     function CT(TT, kT) {
-       for (let cT = 0; cT < kT.length; cT++) kT[cT] = TT[cT]
+     function Rq(qq) {
+       return qq.str()
```

#### 44. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L328-L330` → after: `L803-L804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L803-L804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L803-L804) · [Before (L328-L330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L328-L330)

```diff
-     function jT(TT, kT) {
-       var cT;
-       return null !== (cT = TT.fov) && void 0 !== cT ? cT : kT.getDefaultFov()
+     function Uq(qq) {
+       return qq.DN(Rq)
```

#### 45. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L333-L340` → after: `L807-L808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR807) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L807-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L807-L808) · [Before (L333-L340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L333-L340)

```diff
-     function vT(TT, kT, cT, lT, MT) {
-       const KT = 2 / lT,
-         OT = Math.exp(-KT * MT);
-       for (let yT = 0; yT < TT.length; yT++) {
-         const lT = TT[yT] - cT[yT],
-           fT = (kT[yT] + KT * lT) * MT;
-         TT[yT] = cT[yT] + (lT + fT) * OT, kT[yT] = (kT[yT] - KT * fT) * OT
-       }
+     function Fq(qq) {
+       return 0 === qq.index(2) ? null : Uq(qq)
```

#### 46. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L342-L407` → after: `L810-L818`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L810-L818)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L810-L818) · [Before (L342-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L342-L407)

```diff
-     class tT {
-       constructor(TT, kT, cT, lT) {
-         var KT, OT, yT, fT, xT;
-         this.settings = TT, this.pA = kT, this.targets = cT, this.base = void 0, this.closestDistance = void 0, this.furthestDistance = void 0, this.goal = void 0, this.framedTargets = !1, this.smoothed = [0, 0, 0, 0, 0, 0], this.Oh = [0, 0, 0, 0, 0, 0], this.started = !1, this.a … [truncated]
-           heading: 0,
-           pitch: 0
-         }, this.points = [], this.forward = [0, 0, 0], this.base = {
-           heading: (0, MT.s)((0, IT.k)(null !== (KT = TT.viewHeading) && void 0 !== KT ? KT : 0)),
-           pitch: (0, MT.h)((0, IT.k)(null !== (OT = TT.viewElevation) && void 0 !== OT ? OT : 45))
-         }, this.closestDistance = null !== (yT = TT.closestDistance) && void 0 !== yT ? yT : Math.min(6, null !== (fT = TT.furthestDistance) && void 0 !== fT ? fT : 1 / 0), this.furthestDistance = null !== (xT = TT.furthestDistance) && void 0 !== xT ? xT : Math.max(64, this.close … [truncated]
-         const AT = (0, MT.f)(this.base.heading, this.base.pitch, this.forward),
-           CT = lT.position,
-           jT = this.closestDistance;
-         this.goal = [CT[0] + AT[0] * jT, CT[1] + AT[1] * jT, CT[2] + AT[2] * jT, jT, this.base.heading, this.base.pitch]
-       }
-       update(TT, kT, cT) {
- ... (50 more removed lines; see GitHub link above)
+ 
+     function sq(qq) {
+       return {
+         type: qq.str(),
+         progress: qq.float(),
+         width: Tq(qq),
+         height: Tq(qq),
+         colours: Fq(qq),
+         backgroundColour: Tq(qq)
```

#### 47. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L410-L448` → after: `L821-L826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L821-L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L821-L826) · [Before (L410-L448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L410-L448)

```diff
-     class hT {
-       constructor(TT) {
-         this.limits = TT, this.yawOffset = 0, this.pitchOffset = 0, this.idleMs = 0, this.pointedAt = null
-       }
-       continueFrom(TT) {
-         this.limits && (this.yawOffset = TT.yawOffset, this.pitchOffset = TT.pitchOffset, this.idleMs = TT.idleMs)
-       }
-       update(TT, kT) {
-         const cT = this.limits;
-         if (!cT) return;
-         const lT = Number.isFinite(kT.Rm) ? kT.Rm : 0,
-           MT = Number.isFinite(kT.Wm) ? kT.Wm : 0;
-         if (kT.pointedAt) this.idleMs = 0, this.pointedAt = {
-           heading: kT.pointedAt.heading,
-           pitch: kT.pointedAt.pitch
-         };
- ... (23 more removed lines; see GitHub link above)
+ 
+     function Xq(qq) {
+       return {
+         type: qq.str(),
+         action: qq.str(),
+         style: Jq(qq)
```

#### 48. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L450-L451` → after: `L828-L845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR828) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L828-L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L828-L845) · [Before (L450-L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L450-L451)

```diff
-       unapply(TT, kT) {
-         kT.heading = (0, MT.s)(TT.heading - this.yawOffset), kT.pitch = (0, MT.h)(TT.pitch - this.pitchOffset)
+     }
+ 
+     function wq(qq) {
+       const Eq = qq.index(7);
+       return 0 === Eq ? {
+         string: qq.str()
+       } : 1 === Eq ? {
+         entityName: iq(qq)
+       } : 2 === Eq ? {
+         translatedText: Mq(qq)
+       } : 3 === Eq ? {
+         styledIcon: Sq(qq)
+       } : 4 === Eq ? {
+         rg: kq(qq)
+       } : 5 === Eq ? {
+         styledProgressBar: sq(qq)
+ ... (2 more added lines; see GitHub link above)
```

#### 49. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L457` → after: `L850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L850) · [Before (L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L457)

```diff
-       return Math.sqrt(TT[0] * TT[0] + TT[1] * TT[1] + TT[2] * TT[2])
+       return qq.DN(wq)
```

#### 50. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L460-L463` → after: `L854-L855`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L854-L855)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L854-L855) · [Before (L460-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L460-L463)

```diff
-     function ST(TT, kT, cT, lT, MT) {
-       const KT = MT * MT,
-         OT = KT * MT;
-       return (2 * OT - 3 * KT + 1) * TT + (OT - 2 * KT + MT) * kT + (-2 * OT + 3 * KT) * cT + (OT - KT) * lT
+     function Iq(qq) {
+       return Cq[qq.index(5)]
```

#### 51. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L466-L468` → after: `L858-L859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L858-L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L858-L859) · [Before (L466-L468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L466-L468)

```diff
-     function DT(TT, kT, cT, lT, MT) {
-       const KT = MT * MT;
-       return (6 * KT - 6 * MT) * TT + (3 * KT - 4 * MT + 1) * kT + (-6 * KT + 6 * MT) * cT + (3 * KT - 2 * MT) * lT
+     function eq(qq) {
+       return 0 === qq.index(2) ? null : qq.double()
```

#### 52. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L471-L484` → after: `L862-L872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L862-L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L862-L872) · [Before (L471-L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L471-L484)

```diff
-     function aT(TT, kT) {
-       const cT = kT[0] - TT[0],
-         lT = kT[1] - TT[1],
-         MT = kT[2] - TT[2];
-       return Math.sqrt(cT * cT + lT * lT + MT * MT)
-     }
- 
-     function FT(TT, kT, cT, lT, MT, KT) {
-       for (let OT = 0; OT < 3; OT++) KT[OT] = MT ? TT[OT] * lT : cT[OT] - kT[OT];
-       return MT && function(TT, kT) {
-         const cT = QT(TT);
-         if (cT > kT) {
-           const lT = kT / cT;
-           TT[0] *= lT, TT[1] *= lT, TT[2] *= lT
+     function Dq(qq) {
+       return 0 === qq.index(2) ? null : function(qq) {
+         return {
+           ZY: eq(qq),
+           fY: qq.double(),
+           MY: qq.double(),
+           TY: qq.bool(),
+           description: Kq(qq),
+           zY: qq.str(),
+           scale: eq(qq),
+           rotation: eq(qq)
```

#### 53. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L486` → after: `L874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR874) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L874) · [Before (L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L486)

```diff
-       }(KT, 3 * aT(kT, cT)), KT
+       }(qq)
```

#### 54. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L489-L493` → after: `L877-L878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR877) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L877-L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L877-L878) · [Before (L489-L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L489-L493)

```diff
-     function rT(TT, kT, cT, lT) {
-       for (let MT = 0; MT < 3; MT++) lT[MT] = 6 * (kT[MT] - TT[MT]) - 2 * cT[MT];
-       if (QT(lT) < NT)
-         for (let MT = 0; MT < 3; MT++) lT[MT] = kT[MT] - TT[MT];
-       return lT
+     function qE(qq) {
+       return 0 === qq.index(2) ? null : qq.bool()
```

#### 55. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L496-L497` → after: `L881-L892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L881-L892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L881-L892) · [Before (L496-L497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L496-L497)

```diff
-     function PT(TT, kT) {
-       return [2 * kT[0] - TT[0], 2 * kT[1] - TT[1], 2 * kT[2] - TT[2]]
+     function EE(qq) {
+       return 0 === qq.index(2) ? null : function(qq) {
+         return {
+           pY: qq.double(),
+           icon: qq.str(),
+           label: Kq(qq),
+           GY: qq.bool(),
+           scale: eq(qq),
+           rotation: eq(qq),
+           LY: qE(qq)
+         }
+       }(qq)
```

#### 56. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L500-L511` → after: `L895-L910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L895-L910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L895-L910) · [Before (L500-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L500-L511)

```diff
-     function wT(TT, kT, cT, lT, MT, KT, OT) {
-       if (!KT && !OT) return 0;
-       const yT = KT ? TT : 2 * kT - cT,
-         fT = OT ? cT : 2 * kT - TT,
-         xT = KT ? lT : MT,
-         IT = OT ? MT : lT,
-         AT = (kT - yT) / xT,
-         CT = (fT - kT) / IT;
-       if (AT * CT <= 0) return 0;
-       const jT = (fT - yT) / (xT + IT),
-         vT = 3 * Math.min(Math.abs(AT), Math.abs(CT));
-       return Math.max(-vT, Math.min(vT, jT))
+     function gE(qq) {
+       return 0 === qq.index(2) ? null : function(qq) {
+         return {
+           ZY: eq(qq),
+           kY: qq.double(),
+           RY: qq.double(),
+           UY: qq.double(),
+           gravity: qq.double(),
+           FY: qq.double(),
+           sY: qq.double(),
+           XY: qq.double(),
+           TY: qq.bool(),
+           description: Kq(qq),
+           icon: Tq(qq)
+         }
+       }(qq)
```

#### 57. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L514-L520` → after: `L913-L923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L913-L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L913-L923) · [Before (L514-L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L514-L520)

```diff
-     function mT(TT, kT, cT, lT, MT, KT, OT) {
-       const {
-         u: yT,
-         segmentMs: fT
-       } = TT;
-       if (!TT.curved) return cT + (lT - cT) * yT;
-       return ST(cT, wT(kT, cT, lT, TT.beforeMs, fT, KT, !0) * fT, lT, wT(cT, lT, MT, fT, TT.afterMs, !0, OT) * fT, yT)
+     function YE(qq) {
+       return 0 === qq.index(2) ? null : function(qq) {
+         return {
+           speed: qq.double(),
+           KY: qq.double(),
+           label: Kq(qq),
+           icon: Tq(qq),
+           scale: eq(qq),
+           rotation: eq(qq)
+         }
+       }(qq)
```

#### 58. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L524` → after: `L927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L927) · [Before (L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L524)

```diff
-       return Math.abs(TT.pitch) >= MT.e
+       return 0 === qq.index(2) ? null : qq.long()
```

#### 59. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L526-L574` → after: `L929-L938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L929-L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L929-L938) · [Before (L526-L574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L526-L574)

```diff
-     class zT {
-       constructor(TT, kT, cT, lT, MT) {
-         this.nodes = TT, this.prevNodes = cT, this.nextNodes = lT, this.tangents = void 0, this.derivative = [0, 0, 0], this.beforeAngles = {
-           heading: 0,
-           pitch: 0
-         }, this.fromAngles = {
-           heading: 0,
-           pitch: 0
-         }, this.toAngles = {
-           heading: 0,
-           pitch: 0
-         }, this.afterAngles = {
-           heading: 0,
-           pitch: 0
-         }, this.borrowedAngles = {
-           heading: 0,
- ... (33 more removed lines; see GitHub link above)
+ 
+     function OE(qq) {
+       return 0 === qq.index(2) ? null : function(qq) {
+         return {
+           IY: qq.long(),
+           eY: qq.double(),
+           DY: qq.double(),
+           ql: lE(qq),
+           label: Kq(qq),
+           icon: Tq(qq)
```

#### 60. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L576-L605` → after: `L940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L940) · [Before (L576-L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L576-L605)

```diff
-         const OT = this.tangents[TT];
-         return OT ? ((0, MT.i)(OT, lT), "tangent") : "none"
-       }
-       liveTangent(TT, kT) {
-         const cT = this.nodes[TT.index].position,
-           lT = this.nodes[TT.toIndex].position,
-           KT = this.derivative;
-         for (let MT = 0; MT < 3; MT++) KT[MT] = DT(cT[MT], TT.fromTangent[MT], lT[MT], TT.toTangent[MT], TT.u);
-         return QT(KT) > 1e-9 ? ((0, MT.l)(KT, kT), !0) : !(aT(cT, lT) < NT) && ((0, MT.l)(rT(cT, lT, TT.u < .5 ? TT.toTangent : TT.fromTangent, KT), kT), !0)
-       }
-       nodeTangent(TT, kT, cT) {
-         var lT;
-         const KT = TT[cT];
-         if (QT(KT) > 1e-9) return (0, MT.l)(KT, {
-           heading: 0,
-           pitch: 0
- ... (14 more removed lines; see GitHub link above)
+       }(qq)
```

#### 61. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L608-L723` → after: `L943-L950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L943-L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L943-L950) · [Before (L608-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L608-L723)

```diff
-     function JT(TT, kT) {
-       const cT = TT.lookDirection || kT.lookDirection ? function(TT, kT) {
-         if (!TT || !kT) return TT === kT;
-         const cT = QT(TT),
-           lT = QT(kT);
-         return Math.hypot(TT[0] / cT - kT[0] / lT, TT[1] / cT - kT[1] / lT, TT[2] / cT - kT[2] / lT) < NT
-       }(TT.lookDirection, kT.lookDirection) : (lT = TT.lookAt, MT = kT.lookAt, "object" !== typeof lT || "object" !== typeof MT ? lT === MT : aT(lT, MT) < NT);
-       var lT, MT;
-       return aT(TT.position, kT.position) < NT && TT.fov === kT.fov && cT
-     }
-     class oT {
-       constructor(TT, kT, cT) {
-         if (this.smooth = kT, this.nodes = void 0, this.velocities = void 0, this.prevNodes = void 0, this.nextNodes = void 0, this.prevGaps = void 0, this.nextGaps = void 0, this.loopMs = void 0, this.aim = void 0, this.segment = {
-             index: 0,
-             toIndex: 0,
-             u: 0,
- ... (100 more removed lines; see GitHub link above)
+     function mE(qq) {
+       return {
+         type: Iq(qq),
+         progressBar: Dq(qq),
+         timedClick: EE(qq),
+         gravityBar: gE(qq),
+         precisionBar: YE(qq),
+         rhythmClick: OE(qq)
```

#### 62. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L726-L750` → after: `L953-L955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L953-L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L953-L955) · [Before (L726-L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L726-L750)

```diff
-     class HT {
-       constructor(TT) {
-         this.pA = TT, this.lastFeet = new Map, this.lastAimPoints = new Map, this.lastHeadings = new Map, this.readFeet = void 0, this.readAimPoint = void 0, this.readFeet = kT => TT.getEntityPosition(kT), this.readAimPoint = kT => TT.getEntityAimPoint(kT)
-       }
-       aimPoint(TT) {
-         return "string" !== typeof TT ? (0, fT.n)(TT, 3) ? TT : null : this.resolve(TT, this.readAimPoint, this.lastAimPoints)
-       }
-       currentAimPoint(TT) {
-         const kT = "string" === typeof TT ? this.pA.getEntityAimPoint(TT) : TT;
-         return kT && (0, fT.n)(kT, 3) ? kT : null
-       }
-       feetPosition(TT) {
-         return this.resolve(TT, this.readFeet, this.lastFeet)
-       }
-       heading(TT) {
-         const kT = this.pA.getEntityHeading(TT);
- ... (9 more removed lines; see GitHub link above)
+ 
+     function xE(qq) {
+       return qq.float()
```

#### 63. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L754-L757` → after: `L959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L959) · [Before (L754-L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L754-L757)

```diff
-       return {
-         heading: TT.heading,
-         pitch: TT.pitch
-       }
+       return qq.DN(xE)
```

#### 64. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L760-L761` → after: `L962-L963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L962-L963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L962-L963) · [Before (L760-L761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L760-L761)

```diff
-     function GT(TT, kT) {
-       Number.isFinite(TT.heading) && Number.isFinite(TT.pitch) || (0, MT.i)(kT, TT)
+     function cE(qq) {
+       return 0 === qq.index(2) ? null : AE(qq)
```

#### 65. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L764-L767` → after: `L966-L967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L966-L967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L966-L967) · [Before (L764-L767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L764-L767)

```diff
-     function VT(TT, kT, cT, lT, KT) {
-       if (kT) return void(0, MT.l)(kT, KT);
-       const OT = lT.aimPoint(cT);
-       OT && (0, MT.p)(TT, OT, KT)
+     function uE(qq) {
+       return 0 === qq.index(2) ? null : Kq(qq)
```

#### 66. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L769-L783` → after: `L969-L971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L969-L971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L969-L971) · [Before (L769-L783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L769-L783)

```diff
-     class ET {
-       constructor(TT, kT, cT, lT) {
-         this.settings = TT, this.pA = kT, this.targets = cT, this.base = void 0, this.base = eT(lT)
-       }
-       update(TT, kT, cT) {
-         var lT;
-         const MT = this.settings;
-         (0, fT.f)(MT.position, cT.position), VT(MT.position, MT.lookDirection, null !== (lT = MT.lookAt) && void 0 !== lT ? lT : this.pA.localPlayerId, this.targets, this.base), kT.apply(this.base, cT), cT.fov = jT(MT, this.pA)
-       }
-       continueFrom(TT) {
-         TT instanceof ET && (0, MT.i)(TT.base, this.base)
-       }
-       reset(TT) {
-         GT(this.base, TT)
-       }
+ 
+     function BE(qq) {
+       return qq.long()
```

#### 67. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L785-L840` → after: `L973-L984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L973-L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L973-L984) · [Before (L785-L840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L785-L840)

```diff
-     class ZT {
-       constructor(TT, kT, cT, lT) {
-         this.settings = TT, this.pA = kT, this.targets = cT, this.base = void 0, this.goal = void 0, this.lastFeet = [0, 0, 0], this.foundFeet = !1, this.smoothed = [0, 0, 0], this.Oh = [0, 0, 0], this.started = !1, this.distance = -1, this.toCamera = [0, 0, 0], this.aimOrigin =  … [truncated]
-       }
-       update(TT, kT, cT) {
-         var lT, MT, KT;
-         const OT = this.settings,
-           yT = null !== (lT = OT.target) && void 0 !== lT ? lT : this.pA.localPlayerId,
-           xT = this.targets.feetPosition(yT);
-         let IT = !1;
-         xT && (IT = this.foundFeet && aT(this.lastFeet, xT) > 32 + .1 * TT, (0, fT.f)(xT, this.lastFeet), this.foundFeet = !0, this.placeGoal(xT, yT));
-         const AT = null !== (MT = OT.smoothMs) && void 0 !== MT ? MT : 0;
-         !this.started || AT < 1 || IT ? ((0, fT.f)(this.goal, this.smoothed), this.Oh.fill(0), this.started = !0) : vT(this.smoothed, this.Oh, this.goal, AT, TT), IT && (this.distance = -1), (0, fT.f)(this.smoothed, cT.position);
-         const CT = !0 === OT.avoidTerrain ? this.pullIn(yT, TT, cT) : 1;
-         let tT = this.goal;
-         if ("target" === OT.offsetSpace) tT = cT.position;
- ... (40 more removed lines; see GitHub link above)
+ 
+     function WE(qq) {
+       return 0 === qq.index(2) ? null : function(qq) {
+         return qq.DN(BE)
+       }(qq)
+     }
+ 
+     function NE(qq) {
+       return 0 === qq.index(2) ? null : function(qq) {
+         return {
+           Iq: qq.str(),
+           eq: qq.long()
```

#### 68. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L842-L843` → after: `L986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L986) · [Before (L842-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L842-L843)

```diff
-         this.goal[0] = TT[0] + lT, this.goal[1] = TT[1] + cT[1], this.goal[2] = TT[2] + MT
-       }
+       }(qq)
```

#### 69. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L845-L856` → after: `L988-L998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L988-L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L988-L998) · [Before (L845-L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L845-L856)

```diff
-     class uT {
-       constructor(TT, kT, cT, lT) {
-         var MT, KT;
-         this.settings = TT, this.pA = kT, this.sampler = void 0, this.base = void 0, this.resolveTarget = void 0, this.elapsedMs = 0, this.sampler = TT.keyframes.length > 0 ? new oT(TT.keyframes, null === (MT = TT.smooth) || void 0 === MT || MT, null !== (KT = TT.loop) && void 0  … [truncated]
-       }
-       update(TT, kT, cT) {
-         this.elapsedMs += TT;
-         const lT = jT(this.settings, this.pA);
-         this.sampler ? this.sampler.sample(this.elapsedMs, this.resolveTarget, lT, this.base) : this.base.fov = lT, (0, fT.f)(this.base.position, cT.position), cT.fov = this.base.fov, kT.apply(this.base, cT)
-       }
-       continueFrom(TT) {
-         TT instanceof uT && (0, lT.u)(TT.settings.keyframes, this.settings.keyframes) && (this.elapsedMs = TT.elapsedMs, (0, fT.e)(TT.base, this.base))
+ 
+     function aE(qq) {
+       const Eq = qq.index(3);
+       return 0 === Eq ? null : 1 === Eq ? qq.str() : Mq(qq)
+     }
+ 
+     function VE(qq) {
+       return {
+         yY: qq.str(),
+         tY: qq.str(),
+         rY: qq.str()
```

#### 70. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L858-L859` → after: `L1000-L1007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR1000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L1000-L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L1000-L1007) · [Before (L858-L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L858-L859)

```diff
-       reset(TT) {
-         GT(this.base, TT), Number.isFinite(this.elapsedMs) || (this.elapsedMs = 0)
+     }
+ 
+     function dE(qq) {
+       return {
+         Ag: qq.str(),
+         cg: Tq(qq),
+         ug: Tq(qq),
+         Bg: Uq(qq)
```

#### 71. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L863-L864` → after: `L1011-L1012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR1011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L1011-L1012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L1011-L1012) · [Before (L863-L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L863-L864)

```diff
-     function XT(TT, kT) {
-       return (0, lT.w)(TT, kT)
+     function jE(qq) {
+       return qq.DN(dE)
```

#### 72. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L866-L888` → after: `L1014-L1020`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR1014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L1014-L1020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L1014-L1020) · [Before (L866-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L866-L888)

```diff
-     class dT {
-       constructor(TT, kT, cT) {
-         var lT;
-         this.settings = TT, this.pA = kT, this.pose = void 0, this.lastGoodPose = void 0, this.look = void 0, this.targets = void 0, this.mode = void 0, this.warnedNonFinite = !1;
-         const MT = null !== cT && cT.settings.mode === TT.mode,
-           KT = MT ? cT.pose : kT.getDefaultPose();
-         this.pose = (0, fT.e)(KT, (0, fT.j)()), this.lastGoodPose = (0, fT.e)(MT ? cT.lastGoodPose : KT, (0, fT.j)()), this.look = new hT(TT.playerLook), this.targets = null !== (lT = null === cT || void 0 === cT ? void 0 : cT.targets) && void 0 !== lT ? lT : new HT(kT);
-         const OT = (0, fT.e)(KT, (0, fT.j)());
-         MT && cT.look.unapply(OT, OT), this.mode = function(TT, kT, cT, lT) {
-           switch (TT.mode) {
-             case "fixed":
-               return new ET(TT, kT, cT, lT);
-             case "follow":
-               return new ZT(TT, kT, cT, lT);
-             case "path":
-               return new uT(TT, kT, cT, lT);
- ... (7 more removed lines; see GitHub link above)
+ 
+     function HE(qq) {
+       return {
+         sl: qq.str(),
+         x: qq.long(),
+         y: qq.long(),
+         z: qq.long()
```

#### 73. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L893` → after: `L1025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR1025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L1025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L1025) · [Before (L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L893)

```diff
-       return [0, 0, TT[2], TT[3]]
+       return qq.DN(HE)
```

#### 74. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L895-L975` → after: `L1027-L1033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR1027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L1027-L1033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L1027-L1033) · [Before (L895-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L895-L975)

```diff
-     class RT {
-       constructor(TT) {
-         this.pA = TT, this.settings = {
-           mode: "default"
-         }, this.pending = null, this.fade = new yT, this.shot = null, this.blend = null, this.mixed = (0, fT.j)(), this.output = (0, fT.j)(), this.hasOutput = !1, this.loadingPositions = [], this.loadingSlots = Array.from({
-           length: 3
-         }, (() => [0, 0, 0]))
-       }
-       setSettings(TT) {
-         const kT = (0, xT.e)(TT);
-         if ((0, lT.u)(kT, this.pending ? this.pending.settings : this.settings)) return;
-         const cT = XT(this.settings, kT);
-         if (void 0 !== kT.transition && !cT) return this.pending = {
-           settings: kT,
-           shot: "default" === kT.mode ? null : new dT(kT, this.pA, null)
-         }, void this.fade.fadeOut(kT.transition);
- ... (65 more removed lines; see GitHub link above)
+ 
+     function PE(qq) {
+       return 0 === qq.index(2) ? null : function(qq) {
+         return {
+           aO: qq.float(),
+           VO: qq.long(),
+           dO: qq.long()
```

#### 75. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L978-L985` → after: `L1049-L1060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR1049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L1049-L1060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L1049-L1060) · [Before (L978-L985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L978-L985)

```diff
-       writeOutput(TT) {
-         const kT = this.output;
-         (0, fT.k)(TT) ? (0, fT.e)(TT, kT) : this.hasOutput || (0, fT.e)(this.pA.getDefaultPose(), kT), kT.pitch = (0, MT.h)(kT.pitch);
-         const cT = this.pA.getDefaultFov(),
-           KT = Number.isFinite(cT) && cT > 0 && cT < 180,
-           OT = KT ? Math.min(lT.l.minFov, cT) : lT.l.minFov,
-           yT = KT ? Math.max(lT.l.maxFov, cT) : lT.l.maxFov;
-         return kT.fov = Number.isFinite(kT.fov) ? Math.min(yT, Math.max(OT, kT.fov)) : yT, this.hasOutput = !0, kT
+     }
+ 
+     function yE(qq) {
+       return 0 === qq.index(2) ? null : function(qq) {
+         return qq.DN(QE)
+       }(qq)
+     }
+ 
+     function tE(qq) {
+       return {
+         gO: qq.str(),
+         YO: yE(qq)
```

#### 76. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1005` → after: `L1064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR1064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L1064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L1064) · [Before (L1005)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L1005)

```diff
-     function KT() {
+     function rE(qq) {
```

#### 77. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1007-L1010` → after: `L1066-L1067`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR1066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L1066-L1067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L1066-L1067) · [Before (L1007-L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L1007-L1010)

```diff
-         position: [0, 0, 0],
-         heading: 0,
-         pitch: 0,
-         fov: 0
+         blockName: qq.str(),
+         frequency: qq.float()
```

#### 78. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1014-L1015` → after: `L1071-L1072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR1071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L1071-L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L1071-L1072) · [Before (L1014-L1015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L1014-L1015)

```diff
-     function OT(TT, kT) {
-       return kT[0] = TT[0], kT[1] = TT[1], kT[2] = TT[2], kT
+     function vE(qq) {
+       return qq.DN(rE)
```

#### 79. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1018-L1019` → after: `L1075-L1081`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR1075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L1075-L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L1075-L1081) · [Before (L1018-L1019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L1018-L1019)

```diff
-     function yT(TT, kT) {
-       return OT(TT.position, kT.position), kT.heading = TT.heading, kT.pitch = TT.pitch, kT.fov = TT.fov, kT
+     function hE(qq) {
+       return {
+         oO: qq.str(),
+         PO: qq.str(),
+         frequency: qq.float(),
+         QO: vE(qq)
+       }
```

#### 80. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1022-L1023` → after: `L1084-L1085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR1084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L1084-L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L1084-L1085) · [Before (L1022-L1023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L1022-L1023)

```diff
-     function fT(TT, kT) {
-       return Array.isArray(TT) && TT.length === kT && TT.every(Number.isFinite)
+     function nE(qq) {
+       return qq.DN(hE)
```

#### 81. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1027` → after: `L1089-L1096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR1089) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L1089-L1096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L1089-L1096) · [Before (L1027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L1027)

```diff
-       return fT(TT.position, 3) && Number.isFinite(TT.heading) && Number.isFinite(TT.pitch) && Number.isFinite(TT.fov)
+       return {
+         blockName: qq.str(),
+         radius: qq.long(),
+         vO: qq.long(),
+         Cl: qq.long(),
+         Il: qq.long(),
+         hO: qq.float()
+       }
```

#### 82. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1030-L1032` → after: `L1099-L1100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR1099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L1099-L1100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L1099-L1100) · [Before (L1030-L1032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L1030-L1032)

```diff
-     function IT(TT, kT, cT, MT, KT) {
-       for (let lT = 0; lT < 3; lT++) KT.position[lT] = TT.position[lT] + (kT.position[lT] - TT.position[lT]) * MT;
-       return KT.heading = (0, lT.s)(TT.heading + cT * MT), KT.pitch = TT.pitch + (kT.pitch - TT.pitch) * MT, KT.fov = TT.fov + (kT.fov - TT.fov) * MT, KT
+     function iE(qq) {
+       return qq.DN(bE)
```

#### 83. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1045-L1046` → after: `L1103-L1112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR1103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L1103-L1112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L1103-L1112) · [Before (L1045-L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L1045-L1046)

```diff
-     function yT(TT, kT, cT, lT) {
-       return Number.isFinite(TT) ? Math.min(cT, Math.max(kT, TT)) : lT
+     function ZE(qq) {
+       return {
+         Cl: qq.long(),
+         Il: qq.long(),
+         el: qq.long(),
+         Dl: qq.bool(),
+         qO: tE(qq),
+         jO: nE(qq),
+         tO: iE(qq)
+       }
```

#### 84. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1049-L1050` → after: `L1115-L1116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR1115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L1115-L1116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L1115-L1116) · [Before (L1049-L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L1049-L1050)

```diff
-     function fT(TT, kT, cT) {
-       return void 0 !== TT && Number.isFinite(TT) ? Math.min(cT, Math.max(kT, TT)) : void 0
+     function fE(qq) {
+       return qq.DN(ZE)
```

#### 85. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1054-L1055` → after: `L1120-L1125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR1120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L1120-L1125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L1120-L1125) · [Before (L1054-L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L1054-L1055)

```diff
-       const kT = lT.l.maxCoordinate;
-       return [Math.min(kT, Math.max(-kT, TT[0])), Math.min(kT, Math.max(-kT, TT[1])), Math.min(kT, Math.max(-kT, TT[2]))]
+       return 0 === qq.index(2) ? null : function(qq) {
+         return {
+           name: qq.str(),
+           ZO: Tq(qq)
+         }
+       }(qq)
```

#### 86. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1059` → after: `L1129-L1134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR1129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L1129-L1134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L1129-L1134) · [Before (L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L1059)

```diff
-       return "string" === typeof TT ? TT : (0, MT.n)(TT, 3) ? xT(TT) : void 0
+       return 0 === qq.index(2) ? null : function(qq) {
+         return {
+           terrain: ME(qq),
+           fO: iE(qq)
+         }
+       }(qq)
```

#### 87. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1064` → after: `L1138-L1202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR1138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L1138-L1202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L1138-L1202) · [Before (L1064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L1064)

```diff
-       return "string" === typeof TT && AT.test(TT)
+       return 0 === qq.index(2) ? null : function(qq) {
+         return {
+           layers: fE(qq),
+           nO: TE(qq)
+         }
+       }(qq)
+     }
+   },
+   40329: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       C: () => iq,
+       G: () => Pq,
+       H: () => Qq,
+       I: () => dq,
+       M: () => hq,
+       O: () => fq,
+ ... (49 more added lines; see GitHub link above)
```

#### 88. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1068-L1072` → after: `L1206-L1209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR1206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L1206-L1209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L1206-L1209) · [Before (L1068-L1072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L1068-L1072)

```diff
-       const kT = [];
-       if (!Array.isArray(TT)) return kT;
-       for (const cT of TT.slice(0, lT.l.maxFrameTargets)) {
-         const TT = IT(cT);
-         void 0 === TT || "string" === typeof TT && !CT(TT) || kT.push(TT)
+       if ("string" !== typeof qq) return qq;
+       for (let Eq = 0; Eq < qq.length; Eq++) {
+         const gq = qq.charCodeAt(Eq);
+         if (gq >= 55296 && gq <= 57343) return Aq.decode(xq.encode(qq))
```

#### 89. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1078-L1081` → after: `L1217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR1217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L1217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L1217) · [Before (L1078-L1081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L1078-L1081)

```diff
-       if (!(0, MT.n)(TT, 3)) return;
-       const kT = Math.max(Math.abs(TT[0]), Math.abs(TT[1]), Math.abs(TT[2])),
-         cT = Math.hypot(TT[0] / kT, TT[1] / kT, TT[2] / kT);
-       return 0 === kT || kT * cT < lT.l.minDirectionLength ? void 0 : [TT[0] / kT / cT, TT[1] / kT / cT, TT[2] / kT / cT]
+       return qq
```

#### 90. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1085` → after: `L1222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR1222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L1222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L1222) · [Before (L1085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L1085)

```diff
-       if (void 0 !== TT) return "string" === typeof TT ? KT.includes(TT) ? TT : void 0 : (0, MT.n)(TT, 4) ? [yT(TT[0], 0, 1, 0), yT(TT[1], lT.l.minEasingY, lT.l.maxEasingY, 0), yT(TT[2], 0, 1, 1), yT(TT[3], lT.l.minEasingY, lT.l.maxEasingY, 1)] : "linear"
+       return null === qq || "object" !== typeof qq ? qq : [mq(qq.Oc), mq(qq.mc)]
```

#### 91. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1089-L1093` → after: `L1226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR1226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L1226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L1226) · [Before (L1089-L1093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L1089-L1093)

```diff
-       if (TT) return {
-         maxYaw: yT(TT.maxYaw, 0, lT.l.maxPlayerLook, 0),
-         maxPitch: yT(TT.maxPitch, 0, lT.l.maxPlayerLook, 0),
-         returnMs: fT(TT.returnMs, 0, lT.l.maxReturnMs)
-       }
+       return null === qq || "object" !== typeof qq ? qq : [Oq(qq.Uq, cq), Oq(qq.Nu, cq)]
```

#### 92. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1098-L1107` → after: `L1230-L1231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR1230) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L1230-L1231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L1230-L1231) · [Before (L1098-L1107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L1098-L1107)

```diff
-       var kT;
-       if ("object" !== typeof TT || null === TT) return;
-       const cT = lT.l.maxTransitionMs,
-         MT = lT.l.minTransitionFadeMs;
-       return {
-         colour: "string" === typeof TT.colour && NT.test(TT.colour) ? TT.colour : lT.f,
-         outMs: yT(TT.outMs, MT, cT, MT),
-         holdMs: yT(null !== (kT = TT.holdMs) && void 0 !== kT ? kT : 0, 0, cT, 0),
-         inMs: yT(TT.inMs, MT, cT, MT)
-       }
+       return null === (Eq = qq) || "object" !== typeof Eq ? Eq : [mq(Eq.Hc), mq(Eq.oc)];
+       var Eq
```

#### 93. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1111` → after: `L1235-L1236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR1235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L1235-L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L1235-L1236) · [Before (L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L1111)

```diff
-       return !0 === TT || void 0
+       return null === (Eq = qq) || "object" !== typeof Eq ? Eq : [Eq.id, Eq.xu];
+       var Eq
```

#### 94. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1115-L1117` → after: `L1240-L1241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR1240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L1240-L1241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L1240-L1241) · [Before (L1115-L1117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L1115-L1117)

```diff
-       if ("object" !== typeof TT || null === TT) return !1;
-       const kT = TT.lookAt;
-       return Number.isFinite(TT.timeMs) && (0, MT.n)(TT.position, 3) && (void 0 === kT || "string" === typeof kT || (0, MT.n)(kT, 3))
+       return null === (Eq = qq) || "object" !== typeof Eq ? Eq : [Eq.nE, mq(Eq.bE), Eq.iE, mq(Eq.ME), Eq.pE, Eq.GE, Eq.Wm, mq(Eq.Nm), mq(Eq.am)];
+       var Eq
```

#### 95. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1121-L1129` → after: `L1245-L1246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR1245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L1245-L1246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L1245-L1246) · [Before (L1121-L1129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L1121-L1129)

```diff
-       return {
-         ...TT,
-         timeMs: yT(TT.timeMs, 0, lT.l.maxPathMs, 0),
-         position: xT(TT.position),
-         lookAt: IT(TT.lookAt),
-         lookDirection: vT(TT.lookDirection),
-         fov: fT(TT.fov, lT.l.minFov, lT.l.maxFov),
-         easing: tT(TT.easing)
-       }
+       return null === (Eq = qq) || "object" !== typeof Eq ? Eq : [Oq(Eq.Yc, cq), Eq.lc];
+       var Eq
```

#### 96. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1133-L1140` → after: `L1250-L1251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR1250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L1250-L1251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L1250-L1251) · [Before (L1133-L1140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L1133-L1140)

```diff
-       const kT = [];
-       if (!Array.isArray(TT)) return kT;
-       for (const cT of TT.slice(0, lT.l.maxKeyframes)) {
-         if (!DT(cT)) continue;
-         const TT = aT(cT);
-         (0 === kT.length || TT.timeMs > kT[kT.length - 1].timeMs) && kT.push(TT)
-       }
-       return kT
+       return null === (Eq = qq) || "object" !== typeof Eq ? Eq : [Oq(Eq.tc, (qq => mq(qq))), mq(Eq.vc), Eq.hc];
+       var Eq
```

#### 97. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1144-L1185` → after: `L1255-L1256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR1255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L1255-L1256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L1255-L1256) · [Before (L1144-L1185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L1144-L1185)

```diff
-       if ("object" !== typeof TT || null === TT) return {
-         mode: "default"
-       };
-       const kT = {
-           blendInMs: fT(TT.blendInMs, 0, lT.l.maxBlendInMs),
-           blendEasing: tT(TT.blendEasing),
-           transition: QT(TT.transition),
-           letterbox: ST(TT.letterbox),
-           hideHud: ST(TT.hideHud)
-         },
-         cT = {
-           mode: "default",
-           ...kT
-         };
-       if ("default" === TT.mode || "fixed" === TT.mode && !(0, MT.n)(TT.position, 3)) return cT;
-       const KT = {
- ... (26 more removed lines; see GitHub link above)
+       return null === (Eq = qq) || "object" !== typeof Eq ? Eq : [Oq(Eq.Au, cq), mq(Eq.cu), Eq.uu];
+       var Eq
```

#### 98. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1195-L1196` → after: `L1260-L1261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR1260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L1260-L1261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L1260-L1261) · [Before (L1195-L1196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L1195-L1196)

```diff
-       const kT = /(\d*\.?\d+)px/.exec(TT);
-       return kT ? Number(kT[1]) : null
+       return null === (Eq = qq) || "object" !== typeof Eq ? Eq : [mq(Eq.tY), mq(Eq.rY)];
+       var Eq
```

#### 99. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1200` → after: `L1265-L1266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR1265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L1265-L1266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L1265-L1266) · [Before (L1200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L1200)

```diff
-       return TT.split(/[\s,]+/).pop()
+       return null === (Eq = qq) || "object" !== typeof Eq ? Eq : [mq(Eq.Dc)];
+       var Eq
```

#### 100. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1202-L1328` → after: `L1268-L1270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR1268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L1268-L1270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L1268-L1270) · [Before (L1202-L1328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L1202-L1328)

```diff
-     let OT = !1;
-     const yT = {
-       debug: !1,
-       align: "center",
-       vAlign: "middle",
-       fontSize: 14,
-       fontWeight: "",
-       fontStyle: "",
-       fontVariant: "",
-       font: "Arial",
-       lineHeight: null,
-       justify: !1,
-       drawText: function(TT, kT, lT, yT, fT, xT) {
-         if (fT <= 0 || xT <= 0 || this.fontSize <= 0) return {
-           height: 0
-         };
- ... (111 more removed lines; see GitHub link above)
+ 
+     function Qq(qq) {
+       return mq(qq)
```

#### 101. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1330-L1333` → after: `L1272-L1275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR1272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L1272-L1275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L1272-L1275) · [Before (L1330-L1333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L1330-L1333)

```diff
-   },
-   38935: (TT, kT, cT) => {
-     function lT(TT, kT) {
-       return kT.set(TT), kT
+ 
+     function yq(qq) {
+       return null === (Eq = qq) || "object" !== typeof Eq ? Eq : [mq(Eq.Sc), mq(Eq.Gc), mq(Eq.Oc), mq(Eq.mc)];
+       var Eq
```

#### 102. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1357-L1364` → after: `L1278-L1279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR1278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L1278-L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L1278-L1279) · [Before (L1357-L1364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L1357-L1364)

```diff
-     function IT(TT, kT, cT) {
-       if ("string" !== typeof TT) return kT;
-       try {
-         const cT = JSON.parse(TT);
-         return cT && "object" === typeof cT ? cT : kT
-       } catch (lT) {
-         return void 0 !== cT && console.error(`Couldn't parse ${cT}`, lT), kT
-       }
+     function tq(qq) {
+       return Bq(qq)
```

#### 103. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1368` → after: `L1283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR1283) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L1283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L1283) · [Before (L1368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L1368)

```diff
-       return IT(TT, null, "a leaderboard's rows")
+       return Bq(qq)
```

#### 104. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1371-L1376` → after: `L1286-L1288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR1286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L1286-L1288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L1286-L1288) · [Before (L1371-L1376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L1371-L1376)

```diff
-     function CT(TT, kT) {
-       var cT, lT;
-       return null !== kT && void 0 !== kT ? kT : {
-         status: null !== (cT = TT.status) && void 0 !== cT ? cT : "loading",
-         entries: null !== (lT = TT.entries) && void 0 !== lT ? lT : []
-       }
+     function vq(qq) {
+       return null === (Eq = qq) || "object" !== typeof Eq ? Eq : [mq(Eq.um)];
+       var Eq
```

#### 105. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1379-L1380` → after: `L1291-L1292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR1291) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L1291-L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L1291-L1292) · [Before (L1379-L1380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L1379-L1380)

```diff
-     function jT(TT, kT) {
-       return "number" === typeof TT && Number.isFinite(TT) && TT > 0 ? TT : kT
+     function hq(qq) {
+       return qq
```

#### 106. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1383-L1495` → after: `L1295-L1297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR1295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L1295-L1297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L1295-L1297) · [Before (L1383-L1495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L1383-L1495)

```diff
-     function vT(TT, kT) {
-       const cT = jT(TT.size, 1);
-       let lT = jT(TT.width, jT(2.5 * cT, 2.5)),
-         MT = jT(TT.height, jT(3.75 * cT, 3.75));
-       Number.isFinite(KT * MT / lT) && Number.isFinite(OT * lT / MT) || (lT = 2.5, MT = 3.75);
-       const yT = MT / lT,
-         fT = Math.max(1, Math.min(KT, kT / yT));
-       return {
-         width: lT,
-         height: MT,
-         layoutWidth: Math.max(KT, OT / yT),
-         layoutHeight: Math.max(OT, KT * yT),
-         pixelWidth: Math.round(fT),
-         pixelHeight: Math.round(Math.max(1, Math.min(kT, fT * yT)))
-       }
-     }
- ... (97 more removed lines; see GitHub link above)
+     function nq(qq) {
+       return null === (Eq = qq) || "object" !== typeof Eq ? Eq : [mq(Eq.KA), mq(Eq.CA)];
+       var Eq
```

#### 107. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1498-L1499` → after: `L1300-L1301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR1300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L1300-L1301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L1300-L1301) · [Before (L1498-L1499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L1498-L1499)

```diff
-     function hT(TT, kT) {
-       return Array.isArray(TT) ? TT.slice(0, kT).filter((TT => TT && Number.isFinite(TT.rank) && Number.isFinite(TT.value))) : []
+     function bq(qq) {
+       return mq(qq)
```

#### 108. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1502-L1509` → after: `L1304-L1305`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR1304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L1304-L1305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L1304-L1305) · [Before (L1502-L1509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L1502-L1509)

```diff
-     function NT(TT, kT) {
-       const cT = [];
-       let lT = !1;
-       return TT.forEach(((MT, KT) => {
-         if (null !== kT && MT.value === kT.value) return void cT.push(kT.rank);
-         const OT = KT > 0 && MT.value === TT[KT - 1].value;
-         OT || (lT = 0 === KT && 1 !== MT.rank), cT.push(OT && !lT ? cT[KT - 1] : MT.rank)
-       })), cT
+     function iq(qq) {
+       return Wq(qq)
```

#### 109. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1520` → after: `L1309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR1309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L1309) · [Before (L1520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L1520)

```diff
-       return Array.from(TT).length
+       return Wq(qq)
```

#### 110. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1524-L1538` → after: `L1313-L1314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR1313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L1313-L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L1313-L1314) · [Before (L1524-L1538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L1524-L1538)

```diff
-       const kT = [""];
-       let cT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
-         MT = "";
-       const KT = () => {
-         kT.push(""), cT = 0, MT = ""
-       };
-       for (const OT of TT.replace(/\\n/g, "\n").split(/(\r?\n|[^\S\r\n]+)/))
-         if (/^\r?\n$/.test(OT)) KT();
-         else if (/^\s+$/.test(OT)) MT += OT;
-       else if (OT.length > 0) {
-         const TT = Array.from(OT);
-         cT > 0 && cT + MT.length + TT.length > lT && KT(), kT[kT.length - 1] += MT, cT += MT.length, MT = "";
-         for (const MT of TT) cT >= lT && KT(), kT[kT.length - 1] += MT, cT++
-       }
-       return kT[kT.length - 1] += MT, kT
+       return null === (Eq = qq) || "object" !== typeof Eq ? Eq : [mq(Eq.Bm)];
+       var Eq
```

#### 111. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1550-L1556` → after: `L1318-L1326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR1318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L1318-L1326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L1318-L1326) · [Before (L1550-L1556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L1550-L1556)

```diff
-       if (!TT) return [...KT];
-       try {
-         const [kT, cT, lT] = MT()(TT).rgb().array();
-         return [kT / 255, cT / 255, lT / 255]
-       } catch (kT) {
-         return console.warn(`Invalid groundArrowPath colour "${TT}":`, kT), [...KT]
-       }
+       return (uq ??= (0, Yq.e)().map((qq => qq.name)), uq).map((Eq => {
+         return "string" === typeof(gq = qq[Eq]) ? mq(gq) : Oq(gq, cq);
+         var gq
+       }))
+     }
+ 
+     function Tq(qq) {
+       return null === (Eq = qq) || "object" !== typeof Eq ? Eq : [Eq.ou, Eq.Pu, Eq.Qu];
+       var Eq
```

#### 112. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1559` → after: `L1329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR1329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L1329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L1329) · [Before (L1559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L1559)

```diff
-   34024: (TT, kT, cT) => {
+   9464: (qq, Eq, gq) => {
```

#### 113. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1562-L1565` → after: `L1332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR1332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L1332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L1332) · [Before (L1562-L1565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L1562-L1565)

```diff
-       c: () => yT,
-       g: () => OT,
-       k: () => MT,
-       l: () => lT
+       d: () => Oq
```

#### 114. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1567-L1657` → after: `L1334-L1336`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR1334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L1334-L1336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L1334-L1336) · [Before (L1567-L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L1567-L1657)

```diff
-     const lT = {
-         default: {
-           type: "earth",
-           vertexTint: [137, 207, 240]
-         },
-         gloomy: {
-           type: "custom",
-           nx: "/textures/skyBoxes/gloomy/_nx.jpg",
-           ny: "/textures/skyBoxes/gloomy/_ny.jpg",
-           nz: "/textures/skyBoxes/gloomy/_nz.jpg",
-           px: "/textures/skyBoxes/gloomy/_px.jpg",
-           py: "/textures/skyBoxes/gloomy/_py.jpg",
-           pz: "/textures/skyBoxes/gloomy/_pz.jpg"
-         },
-         interstellar: {
-           type: "custom",
- ... (75 more removed lines; see GitHub link above)
+     var Yq = gq(9433);
+     const lq = "Air",
+       Oq = Object.freeze(new Yq.e(lq, 0, "", null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null))
```

#### 115. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1659` → after: `L1338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR1338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L1338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L1338) · [Before (L1659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L1659)

```diff
-   38984: (TT, kT, cT) => {
+   39174: (qq, Eq, gq) => {
```

#### 116. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1661-L1668` → after: `L1340-L1341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR1340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L1340-L1341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L1340-L1341) · [Before (L1661-L1668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L1661-L1668)

```diff
-       c: () => IT,
-       f: () => AT,
-       j: () => lT,
-       l: () => fT,
-       p: () => MT,
-       s: () => xT,
-       u: () => yT,
-       w: () => OT
+       b: () => Oq,
+       c: () => xq
```

#### 117. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1670-L1672` → after: `L1343-L1346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR1343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L1343-L1346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L1343-L1346) · [Before (L1670-L1672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L1670-L1672)

```diff
-     const lT = ["linear", "easeIn", "easeOut", "easeInOut"],
-       MT = ["movement", "camera", "cursor"],
-       KT = ["targets", "playerFacing", "blendInMs", "blendEasing", "transition", "letterbox", "hideHud"];
+     var Yq = gq(307),
+       lq = gq(4283);
+     const Oq = new Set(lq.o),
+       mq = new Map;
```

#### 118. `bundles/bloxd.io/chunks/js/200.js` (Changed code · before: `L1675` → after: `L1349-L1352`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429fR1349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-ac023c0207695d87bb89867f1dfb73b82915a828cf68b3e35b7031704ccc429f) · [After (L1349-L1352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/200.js#L1349-L1352) · [Before (L1675)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/200.js#L1675)

```diff
-       return yT(TT, kT, KT)
+       let gq = mq.get(Eq);
+       void 0 === gq && (gq = new Map, mq.set(Eq, gq));
+       let lq = gq.get(qq);
+       return void 0 === lq && (lq = `${qq}${(0,Yq.E)(Eq)}`, gq.set(qq, lq)), lq
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/201.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/201.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9)

#### 1. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L4-L15` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/201.js#L4-L6) · [Before (L4-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/201.js#L4-L15)

```diff
-   34029: (TT, kT, cT) => {
-     cT.r(kT), cT.d(kT, {
-       animatedBlockTextures: () => fT,
-       armourAtlasUrl: () => OT,
-       averageColors: () => xT,
-       blockAtlasUrls: () => KT,
-       blockAtlasWidth: () => lT,
-       buildHash: () => AT,
-       builtTextureIndexFingerprint: () => IT,
-       imagesPerAtlas: () => MT,
-       outputHash: () => CT,
-       rotatedBlockTextures: () => yT
+   39082: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => Yq
```

#### 2. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L17-L305` → after: `L8-L1259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L8-L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/201.js#L8-L1259) · [Before (L17-L305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/201.js#L17-L305)

```diff
-     const lT = 8,
-       MT = [256, 256, 256, 256, 256, 256, 114],
-       KT = [cT(34038), cT(34046), cT(34051), cT(34060), cT(34066), cT(34069), cT(34074)],
-       OT = cT(34082),
-       yT = {
-         "alloy_kiln_top[rot[1": cT(34088),
-         "alloy_kiln_top[rot[2": cT(34096),
-         "alloy_kiln_top[rot[3": cT(34104),
-         "alloy_kiln_top[rot[4": cT(34111),
-         "auto_bench_top[rot[1": cT(34118),
-         "auto_bench_top[rot[2": cT(34121),
-         "auto_bench_top[rot[3": cT(34123),
-         "auto_bench_top[rot[4": cT(34131),
-         "belt_tunnel_exit_top[rot[1": cT(34140),
-         "belt_tunnel_exit_top[rot[2": cT(34149),
-         "belt_tunnel_exit_top[rot[3": cT(34151),
- ... (273 more removed lines; see GitHub link above)
+     class Yq {
+       constructor(qq, Eq) {
+         this.read = qq, this.apply = Eq, this.release = null
+       }
+       turn(qq, Eq) {
+         const gq = null === this.release ? this.read() : this.release.transitionMs;
+         this.stop(!1), this.apply({
+           forcedCameraDirectionTransitionMs: Eq,
+           forcedCameraDirection: [qq[0], qq[1], qq[2]]
+         }), this.release = {
+           timer: setTimeout((() => {
+             this.stop(!0)
+           }), Eq + 100),
+           transitionMs: gq
+         }
+       }
+ ... (1236 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L307-L521` → after: `L1261-L1303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R1261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L1261-L1303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/201.js#L1261-L1303) · [Before (L307-L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/201.js#L307-L521)

```diff
-       fT = {
-         "Active Radar2": cT(35672),
-         "Active Radar3": cT(35676),
-         "Active Radar4": cT(35682),
-         "Active Radar5": cT(35690),
-         "Active Radar|meta|rot22": cT(35672),
-         "Active Radar|meta|rot23": cT(35676),
-         "Active Radar|meta|rot24": cT(35682),
-         "Active Radar|meta|rot25": cT(35690),
-         "Active Radar|meta|rot32": cT(35672),
-         "Active Radar|meta|rot33": cT(35676),
-         "Active Radar|meta|rot34": cT(35682),
-         "Active Radar|meta|rot35": cT(35690),
-         "Active Radar|meta|rot42": cT(35672),
-         "Active Radar|meta|rot43": cT(35676),
-         "Active Radar|meta|rot44": cT(35682),
- ... (199 more removed lines; see GitHub link above)
+       drawLines: function(qq, Eq, gq, lq, Oq, mq, xq) {
+         const Aq = gq + Oq,
+           cq = lq + mq;
+         let uq, Bq = lq + mq / 2 + xq / 2;
+         "right" === this.align ? (uq = Aq, qq.textAlign = "right") : "left" === this.align ? (uq = gq, qq.textAlign = "left") : (uq = gq + Oq / 2, qq.textAlign = "center");
+         for (const Yq of Eq) {
+           qq.measureText(Yq).width >= Oq && (Eq = Eq.replace(Yq, ""))
+         }
+         Eq = (0, Yq.W)(Eq);
+         const Wq = [],
+           Nq = Eq.split("\n"),
+           aq = this.justify ? qq.measureText("\u200a").width : 0;
+         Nq.forEach((Eq => {
+           let gq = qq.measureText(Eq).width;
+           if (gq <= Oq) Wq.push(Eq);
+           else {
+ ... (27 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L523-L9828` → after: `L1305-L1311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R1305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L1305-L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/201.js#L1305-L1311) · [Before (L523-L9828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/201.js#L523-L9828)

```diff
-       xT = {
-         Unloaded: [
-           [244, 0, 255],
-           [0, 0, 0]
-         ],
-         Dirt: [
-           [133, 98, 77],
-           [139, 102, 80],
-           [127, 92, 74]
-         ],
-         "Messy Dirt": [
-           [123, 87, 59],
-           [129, 90, 62],
-           [118, 81, 57]
-         ],
-         "Grass Block": [
- ... (9290 more removed lines; see GitHub link above)
+       getTextHeight: function(qq, Eq) {
+         const gq = qq.textBaseline;
+         qq.textBaseline = "bottom";
+         const {
+           actualBoundingBoxAscent: Yq
+         } = qq.measureText(Eq);
+         return qq.textBaseline = gq, Yq
```

#### 5. `bundles/bloxd.io/chunks/js/201.js` (Changed code · before: `L9830-L10900` → after: `L1313-L1712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9R1313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-827f254174f3ab73c430e62d734e25544544413bcdcd6a883478f90a414cf4d9) · [After (L1313-L1712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/201.js#L1313-L1712) · [Before (L9830-L10900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/201.js#L9830-L10900)

```diff
-       IT = "32451195",
-       AT = "84e1e38bd20a637b8ffd875c089f7c145b9c82379a201b95c154d18ffae87e5f",
-       CT = "67231c1c2e54042429a99af9811187cf2ead2b95e3f6763f2cff2df08688c359"
-   },
-   35672: TT => {
-     TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAABACAYAAAAnBDaKAAAACXBIWXMAAAsTAAALEwEAmpwYAAABFElEQVR42tWVsQrCQAyG+ziCqBR9J8FNF0FxFJ0ddHEsjoKbm+DsO1W+QsIlUlu5Q3RISf/+10v+JHfZbLEuscl0aUzwjMfpMSo3l3453ncqwwerCLABVkXPGBjfKgKrPAEsEYFAwsDCgDWLxjQbCfxyXnRVB3ww1QHA … [truncated]
-   },
-   35676: TT => {
-     TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAABACAYAAAAnBDaKAAAACXBIWXMAAAsTAAALEwEAmpwYAAABDElEQVR42q1VvQrCMBDu4wiiUvSdBDddBMVRdHbQxbE4Cm5ugrPvFPkqF+7Say7EDNeQy0e/n6NptdrsHWqx3IqifoXH/DwQdXiM3e0z+wGARmPXjEShh7MWAHQIwJvSAVEKU2SSTROwbobta4mC9j4HNI73iTs9ay8S … [truncated]
-   },
-   35682: TT => {
-     TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAABACAYAAAAnBDaKAAAACXBIWXMAAAsTAAALEwEAmpwYAAABFElEQVR42tVVMQrCQBDMcwRRCfonwU4bQbEUrS20sQyWgp2dYO2fInMwy+4aL4YcosUcd5shmZ1MNtlssS6ByXRpwHqGZbzvlJtLvzw9RgHYoxYIYOOwKnoGqOFaIgKe6QmoBQKEaGFasHRR22YtYV50A3BrgGfxAcXt … [truncated]
-   },
-   35690: TT => {
-     TT.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAABACAYAAAAnBDaKAAAACXBIWXMAAAsTAAALEwEAmpwYAAABDUlEQVR42q1VuwrCQBDM5wiiEvSfBDttBMVStLbQxjJYCnZ2grX/dDIHc9x7w+WKTcjusDszS+6aze6oEKv13gnmGzwev4U6vaZqeR05oQFAo3joJk4gh5oGAO0D0LU/IDtCJNlLpghA+203Nq35bXzAB8ld3q06P2c6 … [truncated]
-   },
- ... (1055 more removed lines; see GitHub link above)
+       justifyLine: function(qq, Eq, gq, Yq, lq) {
+         const Oq = Eq.trim(),
+           mq = qq.measureText(Oq).width,
+           xq = Oq.split(/\s+/).length - 1,
+           Aq = Math.floor((lq - mq) / gq);
+         if (xq <= 0 || Aq <= 0) return Oq;
+         const cq = Math.floor(Aq / xq);
+         let uq = Aq - xq * cq,
+           Bq = [];
+         for (let Wq = 0; Wq < cq; Wq++) Bq.push(Yq);
+         Bq = Bq.join("");
+         return Oq.replace(/\s+/g, (qq => {
+           const Eq = uq > 0 ? Bq + Yq : Bq;
+           return uq--, qq + Eq
+         }))
+       }
+ ... (384 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/202.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/202.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6df7ca8be0f2be12b3c8cc0fb6d591167eed22d92cd8e4fea35383d6cd66d1f9)

#### 1. `bundles/bloxd.io/chunks/js/202.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6df7ca8be0f2be12b3c8cc0fb6d591167eed22d92cd8e4fea35383d6cd66d1f9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6df7ca8be0f2be12b3c8cc0fb6d591167eed22d92cd8e4fea35383d6cd66d1f9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/202.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/202.js#L4)

```diff
-   36054: (TT, kT, cT) => {
+   34302: (qq, Eq, gq) => {
```

#### 2. `bundles/bloxd.io/chunks/js/202.js` (Changed code · before: `L6` → after: `L6-L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6df7ca8be0f2be12b3c8cc0fb6d591167eed22d92cd8e4fea35383d6cd66d1f9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6df7ca8be0f2be12b3c8cc0fb6d591167eed22d92cd8e4fea35383d6cd66d1f9) · [After (L6-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/202.js#L6-L15) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/202.js#L6)

```diff
-       WasmTextureWorker: () => QT
+       animatedBlockTextures: () => Aq,
+       armourAtlasUrl: () => mq,
+       averageColors: () => cq,
+       blockAtlasUrls: () => Oq,
+       blockAtlasWidth: () => Yq,
+       buildHash: () => Bq,
+       builtTextureIndexFingerprint: () => uq,
+       imagesPerAtlas: () => lq,
+       outputHash: () => Wq,
+       rotatedBlockTextures: () => xq
```

#### 3. `bundles/bloxd.io/chunks/js/202.js` (Changed code · before: `L8-L326` → after: `L17-L10900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6df7ca8be0f2be12b3c8cc0fb6d591167eed22d92cd8e4fea35383d6cd66d1f9R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-6df7ca8be0f2be12b3c8cc0fb6d591167eed22d92cd8e4fea35383d6cd66d1f9) · [After (L17-L10900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/202.js#L17-L10900) · [Before (L8-L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/202.js#L8-L326)

```diff
-     var lT = cT(606),
-       MT = cT(3121),
-       KT = cT(36063),
-       OT = cT.n(KT);
- 
-     function yT() {
-       return OT()('(()=>{var TT={d:(kT,cT)=>{for(var lT in cT)TT.o(cT,lT)&&!TT.o(kT,lT)&&Object.defineProperty(kT,lT,{enumerable:!0,get:cT[lT]})},o:(TT,kT)=>Object.prototype.hasOwnProperty.call(TT,kT),r:TT=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(T … [truncated]
-     }
-     var fT = cT(36065),
-       xT = cT(3170),
-       IT = cT(3189),
-       AT = cT(3187),
-       CT = cT(3138);
- 
-     function jT(TT) {
-       return "" === TT ? [] : TT.split("\0")
- ... (303 more removed lines; see GitHub link above)
+     const Yq = 8,
+       lq = [256, 256, 256, 256, 256, 256, 114],
+       Oq = [gq(34305), gq(34314), gq(34317), gq(34324), gq(34330), gq(34333), gq(34336)],
+       mq = gq(34343),
+       xq = {
+         "alloy_kiln_top[rot[1": gq(34345),
+         "alloy_kiln_top[rot[2": gq(34351),
+         "alloy_kiln_top[rot[3": gq(34355),
+         "alloy_kiln_top[rot[4": gq(34364),
+         "auto_bench_top[rot[1": gq(34373),
+         "auto_bench_top[rot[2": gq(34381),
+         "auto_bench_top[rot[3": gq(34387),
+         "auto_bench_top[rot[4": gq(34390),
+         "belt_tunnel_exit_top[rot[1": gq(34394),
+         "belt_tunnel_exit_top[rot[2": gq(34401),
+         "belt_tunnel_exit_top[rot[3": gq(34407),
+ ... (10868 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/203.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/203.js` (35 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd)

#### 1. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/203.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/203.js#L4)

```diff
-   41093: (TT, kT, cT) => {
+   36325: (qq, Eq, gq) => {
```

#### 2. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L6-L7` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/203.js#L6) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/203.js#L6-L7)

```diff
-       loadGlbAsset: () => Sk,
-       loadGlbTree: () => Qk
+       WasmTextureWorker: () => Hq
```

#### 3. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L9-L11` → after: `L8-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/203.js#L8-L10) · [Before (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/203.js#L9-L11)

```diff
-     var lT = cT(37760),
-       MT = cT(41101),
-       KT = cT(36063),
+     var Yq = gq(583),
+       lq = gq(3086),
+       Oq = gq(36328),
```

#### 4. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L15-L355` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/203.js#L14) · [Before (L15-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/203.js#L15-L355)

```diff
-       return OT()('(()=>{class TT extends Error{}function kT(kT,cT){const lT=kT._malloc(cT);if(0===lT)throw new TT(`Draco: the decoder\'s heap refused ${cT} bytes`);return lT}function cT(TT){return{[TT.DT_FLOAT32]:[Float32Array,5126],[TT.DT_INT8]:[Int8Array,5120],[TT.DT_INT16]:[I … [truncated]
-     }
-     var fT = cT(118);
-     const xT = 1e3;
-     let IT = null,
-       AT = null;
-     const CT = [],
-       jT = [];
-     let vT = 0;
-     const tT = {
-         decodes: 0,
-         workersStarted: 0,
-         mostWorkers: 0
-       },
-       hT = function(TT, kT) {
-         const cT = TT ? Math.max(1, Math.min(Math.floor(.5 * TT), 4)) : 1;
- ... (325 more removed lines; see GitHub link above)
+       return mq()('(()=>{var qq={d:(Eq,gq)=>{for(var Yq in gq)qq.o(gq,Yq)&&!qq.o(Eq,Yq)&&Object.defineProperty(Eq,Yq,{enumerable:!0,get:gq[Yq]})},o:(qq,Eq)=>Object.prototype.hasOwnProperty.call(qq,Eq),r:qq=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(q … [truncated]
```

#### 5. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L359-L375` → after: `L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/203.js#L23) · [Before (L359-L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/203.js#L359-L375)

```diff
-       const kT = TT.bufferView,
-         cT = 5125 === TT.componentType ? Uint32Array : Uint16Array,
-         lT = kT.bytes.buffer,
-         MT = kT.bytes.byteOffset + (TT.byteOffset || 0);
-       return MT % cT.BYTES_PER_ELEMENT !== 0 ? new cT(lT.slice(MT, MT + TT.count * cT.BYTES_PER_ELEMENT), 0) : new cT(lT, MT, TT.count)
-     }
- 
-     function eT(TT, kT) {
-       if (TT.min && TT.max) return [new Float64Array(TT.min), new Float64Array(TT.max)];
-       const cT = kT.find((TT => {
-           let {
-             kind: kT
-           } = TT;
-           return "position" === kT
-         })),
-         lT = cT ? (0, rT.g)(cT, TT.count) : new Float32Array(0);
- ... (1 more removed lines; see GitHub link above)
+       return "" === qq ? [] : qq.split("\0")
```

#### 6. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L379-L414` → after: `L27-L28`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L27-L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/203.js#L27-L28) · [Before (L379-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/203.js#L379-L414)

```diff
-       const kT = TT.attributes.map((TT => {
-           var kT, cT;
-           let {
-             kind: lT,
-             accessor: MT
-           } = TT;
-           const {
-             bufferView: KT,
-             numComponents: OT
-           } = MT;
-           if (!KT) {
-             return {
-               kind: lT,
-               data: oT(MT, (() => new Float32Array(OT * MT.count))),
-               offset: 0,
-               stride: 4 * OT,
- ... (20 more removed lines; see GitHub link above)
+       if ("" !== qq)
+         for (const Eq of qq.split("\n")) console.error(Eq)
```

#### 7. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L419-L544` → after: `L32-L37`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L32-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/203.js#L32-L37) · [Before (L419-L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/203.js#L419-L544)

```diff
-       const cT = kT.attributes.map((TT => {
-         let {
-           kind: kT,
-           data: cT,
-           size: lT,
-           byteOffset: MT,
-           byteStride: KT,
-           normalized: OT
-         } = TT;
-         return {
-           kind: kT,
-           data: cT,
-           offset: MT,
-           stride: KT,
-           components: lT,
-           glType: 5120 + VT.indexOf(cT.constructor),
- ... (110 more removed lines; see GitHub link above)
+       return async function(qq, Eq) {
+         const gq = Object.keys(qq),
+           Yq = [],
+           lq = new Map,
+           Oq = new Uint32Array(gq.length);
+         for (const [mq, xq] of gq.entries()) {
```

#### 8. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L546-L561` → after: `L39-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L39-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/203.js#L39-L41) · [Before (L546-L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/203.js#L546-L561)

```diff
-             primitive: cT
-           } = kT, lT = cT.draco;
-           let MT = lT ? TT.get(lT.bufferView.index) : Promise.resolve(GT(cT));
-           MT || (MT = zT(cT, this.decode).then((TT => ET(cT, TT))), TT.set(lT.bufferView.index, MT)), kT.geometry = await MT
-         })))
-       }
-       parentOf(TT) {
-         var kT;
-         return null !== (kT = this.parents.get(TT)) && void 0 !== kT ? kT : null
-       }
-       meshesUnder(TT) {
-         const kT = this.model.nodes.filter((TT => this.uses.has(TT)));
-         for (const lT of kT) {
-           const kT = this.uses.get(lT),
-             cT = kT.find((kT => kT.name === TT));
-           if (cT) return 1 === kT.length ? this.subtree(lT) : this.own.get(lT).includes(cT) ? [cT] : []
+             url: Eq
+           } = qq[xq];
+           lq.has(Eq) || (lq.set(Eq, Yq.length), Yq.push(Eq)), Oq[mq] = lq.get(Eq)
```

#### 9. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L621-L637` → after: `L44-L46`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L44-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/203.js#L44-L46) · [Before (L621-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/203.js#L621-L637)

```diff
-           url: this.imageUrl(OT),
-           noMipmap: BT(KT),
-           invertY: !1,
-           samplingMode: gT(KT),
-           data: {
-             bytes: yT.bytes,
-             mimeType: fT,
-             label: xT,
-             context: `/textures/${lT}`
-           },
-           sets: {
-             wrapU: YT(KT.wrapS),
-             wrapV: YT(KT.wrapT),
-             ...IT,
-             coordinatesIndex: null !== (cT = null === MT || void 0 === MT ? void 0 : MT.texCoord) && void 0 !== cT ? cT : 0,
-             hasAlpha: kT
- ... (1 more removed lines; see GitHub link above)
+           sources: await Eq(Yq),
+           names: gq.join("\0"),
+           sourceOfName: Oq
```

#### 10. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L639-L663` → after: `L48-L69`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L48-L69)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/203.js#L48-L69) · [Before (L639-L663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/203.js#L639-L663)

```diff
-       }
-     }
-     async function iT(TT, kT, cT, lT, MT, KT) {
-       let OT = !(arguments.length > 6 && void 0 !== arguments[6]) || arguments[6];
-       const yT = function(TT, kT, cT) {
-           return "string" !== typeof kT ? {
-             url: "",
-             rootUrl: TT,
-             name: cT()
-           } : kT ? kT.startsWith("data:") ? {
-             url: kT,
-             rootUrl: TT,
-             name: ""
-           } : TT ? {
-             url: TT + kT,
-             rootUrl: TT,
- ... (9 more removed lines; see GitHub link above)
+       }(qq, (async qq => {
+         const gq = await async function(qq, Eq) {
+           const gq = new AbortController,
+             Yq = () => {
+               gq.abort()
+             };
+           Eq.addEventListener("abort", Yq);
+           try {
+             const Eq = await Promise.all(qq.map((async qq => {
+               try {
+                 const Eq = await fetch(qq, {
+                   signal: gq.signal
+                 });
+                 if (!Eq.ok) throw new Error(`HTTP ${Eq.status}`);
+                 return [qq, await Eq.blob()]
+               } catch (Eq) {
+ ... (6 more added lines; see GitHub link above)
```

#### 11. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L665-L682` → after: `L71-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L71-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/203.js#L71-L76) · [Before (L665-L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/203.js#L665-L682)

```diff
-         }(cT, TT, MT),
-         fT = {};
-       kT.addPendingData(fT);
-       try {
-         const cT = bT(await async function(TT, kT) {
-             return "string" !== typeof kT ? kT : TT.url.startsWith("data:") ? (0, PT.t)(TT.url) : await (0, PT.x)(TT.url)
-           }(yT, TT)),
-           fT = new pT(cT, lT, yT, function(TT, kT) {
-             let {
-               rootUrl: cT,
-               name: lT
-             } = TT;
-             return !cT.startsWith("file:") && lT ? cT : `${cT}${kT()}/`
-           }(yT, MT));
-         return await KT(fT), kT.importedMeshesFiles && (kT.loadingPluginName = "KJ", OT && kT.importedMeshesFiles.push(yT.url)), fT
-       } finally {
- ... (2 more removed lines; see GitHub link above)
+         }(qq.filter((qq => !qq.startsWith("data:"))), Eq);
+         return Promise.all(qq.map((qq => {
+           var Eq;
+           return (0, Wq.c)(null !== (Eq = gq.get(qq)) && void 0 !== Eq ? Eq : qq)
+         })))
+       }))
```

#### 12. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L688-L694` → after: `L79-L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L79-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/203.js#L79-L81) · [Before (L688-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/203.js#L688-L694)

```diff
-     function kk(TT) {
-       if (null === TT || void 0 === TT || !TT.min || !TT.max) return null;
-       const [kT, cT, lT] = TT.min, [MT, KT, OT] = TT.max, {
-         BoundingInfo: yT,
-         Fv: fT
-       } = (0, qT.e)();
-       return new yT(new fT(kT, cT, lT), new fT(MT, KT, OT))
+     function dq(qq, Eq) {
+       let gq;
+       return qq instanceof uq.m ? gq = qq : (gq = new uq.m(Eq ? uq.k.Optional : uq.k.Error, (0, Bq.c)(qq)), qq instanceof Error && (gq.stack = `${gq.name}: ${gq.message}\n${qq.stack}`)), gq.code !== uq.k.Fetch && gq.code !== uq.k.Error && (0, cq.d)(gq.message), gq
```

#### 13. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L698` → after: `L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/203.js#L85) · [Before (L698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/203.js#L698)

```diff
-       (0, sT.f)(TT) || (TT.geometry && TT.geometry.useBoundingInfoFromGeometry ? TT._updateBoundingInfo() : TT.refreshBoundingInfo(!0, !0))
+       return qq.message ? new Error(`the texture worker failed: ${qq.message}`) : new uq.m(uq.k.Load, "the texture worker failed to start")
```

#### 14. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L701-L734` → after: `L88-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L88-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/203.js#L88-L91) · [Before (L701-L734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/203.js#L701-L734)

```diff
-       constructor(TT, kT) {
-         this.et = TT, this.decode = kT, this.bufferData = Promise.resolve(), this.viewData = new Map, this.viewBuffers = new Map, this.vertexBuffers = new Map, this.dracoGeometry = new Map
-       }
-       viewBytes(TT) {
-         let kT = this.viewData.get(TT.index);
-         return kT || (kT = this.bufferData.then((() => TT.bytes)), this.viewData.set(TT.index, kT)), kT
-       }
-       viewBuffer(TT) {
-         let kT = this.viewBuffers.get(TT.index);
-         return kT || (kT = this.viewBytes(TT).then((TT => new((0, qT.e)().Ov)(this.et.Dv(), TT, !1))), this.viewBuffers.set(TT.index, kT)), kT
-       }
-       vertexBuffer(TT, kT) {
-         const {
-           kind: cT,
-           data: lT
-         } = kT, MT = `${TT.index}:${cT}`;
- ... (18 more removed lines; see GitHub link above)
+       constructor(qq) {
+         this.worker = qq, this.failure = void 0, this.abandonStep = null, qq.addEventListener("error", (qq => {
+           qq.preventDefault(), this.failure ??= jq(qq)
+         }))
```

#### 15. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L736-L746` → after: `L93-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L93-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/203.js#L93-L101) · [Before (L736-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/203.js#L736-L746)

```diff
-       load(TT, kT, cT) {
-         const lT = (0, sT.f)(cT),
-           MT = TT => {
-             lT || (cT._delayInfo = cT._delayInfo || [], -1 === cT._delayInfo.indexOf(TT) && cT._delayInfo.push(TT))
-           },
-           KT = kT.draco;
-         if (KT) {
-           for (const TT in KT.attributeIds) MT(TT);
-           let OT = this.dracoGeometry.get(KT.bufferView.index);
-           return OT || (OT = this.viewBytes(KT.bufferView).then((async () => {
-             let MT;
+       static async generateRequired(qq, Eq, gq, Oq) {
+         let mq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : uq.d,
+           cq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
+         const Wq = (0, Aq.i)();
+         if (null !== Wq) throw dq(new uq.m(uq.k.Load, Wq), !1);
+         let Nq;
+         const jq = new AbortController;
+         try {
+           Nq = new Hq(function() {
```

#### 16. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L748` → after: `L103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/203.js#L103) · [Before (L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/203.js#L748)

```diff
-               MT = await zT(kT, this.decode)
+               return new xq
```

#### 17. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L750` → after: `L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/203.js#L105) · [Before (L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/203.js#L750)

```diff
-               throw new PT.k(`${TT}: ${fT instanceof Error?fT.message:String(fT)}`)
+               throw new uq.m(uq.k.Load, `the texture worker failed to start: ${(0,Bq.c)(qq)}`)
```

#### 18. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L752-L814` → after: `L107-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L107-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/203.js#L107-L111) · [Before (L752-L814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/203.js#L752-L814)

```diff
-             const KT = ET(kT, MT);
-             if (lT) return KT;
-             const OT = kk(kT.position),
-               yT = new((0, qT.e)().MirroredGeometry)(cT.name, this.et);
-             OT && (yT._boundingInfo = OT, yT.useBoundingInfoFromGeometry = !0), KT.indexData && yT.setIndices(KT.indexData);
-             for (const TT of KT.vertexAttributes) yT.setVerticesBuffer(this.layoutVertexBuffer(TT.data, TT), KT.vertexCount);
-             return yT.link(KT), yT
-           })), this.dracoGeometry.set(KT.bufferView.index, OT)), OT
-         }
-         const OT = [],
-           yT = GT(kT);
-         if (lT) return cT.isUnIndexed = !yT.indexData, cT.hasVertexAlpha = (0, Tk.e)(kT), Promise.resolve(yT);
-         const fT = new((0, qT.e)().MirroredGeometry)(cT.name, this.et),
-           {
-             indexData: xT
-           } = yT;
- ... (47 more removed lines; see GitHub link above)
+           }());
+           const Wq = (0, Aq.b)().catch((qq => {
+               throw new uq.m(uq.k.Load, function(qq) {
+                 return `the texture module didn't load (${(0,Bq.c)(qq)})`
+               }(qq))
```

#### 19. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L816-L817` → after: `L113-L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L113-L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/203.js#L113-L185) · [Before (L816-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/203.js#L816-L817)

```diff
-             lT = kT.onContextRestoredObservable.add((() => {
-               for (const TT of [...this.geometries, ...this.meshes, ...this.textures]) TT._rebuild()
+             dq = (async () => {
+               const Oq = function(qq, Eq, gq) {
+                 const Yq = [],
+                   lq = new Map,
+                   Oq = qq => {
+                     let Eq = lq.get(qq);
+                     return void 0 === Eq && (Eq = Yq.length, Yq.push(qq), lq.set(qq, Eq)), Eq
+                   },
+                   mq = [],
+                   xq = [],
+                   Aq = new Map,
+                   cq = (qq, Eq) => {
+                     const gq = "object" === typeof qq && null !== qq && "animTextures" in qq ? qq.animTextures : void 0;
+                     if (!Array.isArray(gq) || !gq.every((qq => "string" === typeof qq))) throw new Error(`Block ${Eq} has textureInfo the encoding doesn't cover`);
+                     mq.push(gq.length, ...gq.map(Oq))
+                   };
+ ... (57 more added lines; see GitHub link above)
```

#### 20. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L819-L820` → after: `L187-L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L187-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/203.js#L187-L198) · [Before (L819-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/203.js#L819-L820)

```diff
-           this.release = () => {
-             TT.QJ.remove(cT), kT.onContextRestoredObservable.remove(lT)
+           return cq > 0 && (rq.blockAtlasPixels = function(qq, Eq) {
+             const gq = [];
+             for (let Yq = 0; Yq < Eq; Yq++) {
+               const lq = qq[Yq];
+               if (void 0 === lq) throw new Error(`the texture worker's sheet ${Yq} of ${Eq} didn't arrive`);
+               gq.push(lq)
+             }
+             return gq
+           }(tq, rq.imagesPerAtlas.length)), aq(hq), {
+             assets: rq,
+             layerCap: vq,
+             worker: Nq
```

#### 21. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L824-L853` → after: `L205-L206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L205-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/203.js#L205-L206) · [Before (L824-L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/203.js#L824-L853)

```diff
-       getNodes() {
-         return [...this.meshes, ...this.transformNodes]
-       }
-       addAllToScene() {
-         if (this.release) {
-           this.release(), this.release = null;
-           for (const TT of this.meshes) this.et.rcT(TT);
-           for (const TT of this.materials) this.et.addMaterial(TT);
-           for (const TT of this.geometries) this.et.addGeometry(TT);
-           for (const TT of this.transformNodes) this.et.addTransformNode(TT);
-           for (const TT of this.textures) this.et.addTexture(TT)
-         }
-       }
-       dispose() {
-         var TT;
-         for (const kT of [this.meshes, this.materials, this.geometries, this.transformNodes, this.textures]) {
- ... (14 more removed lines; see GitHub link above)
+       async generateOptional() {
+         let qq;
```

#### 22. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L855-L856` → after: `L208-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L208-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/203.js#L208-L212) · [Before (L855-L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/203.js#L855-L856)

```diff
-           const kT = TT();
-           return this.container && (kT._parentContainer = this.container), kT
+           qq = await this.request({
+             type: "optional"
+           }, [])
+         } catch (Eq) {
+           throw dq(Eq, !0)
```

#### 23. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L858` → after: `L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/203.js#L214) · [Before (L858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/203.js#L858)

```diff
-           kT._blockEntityCollection = !1
+           this.terminate()
```

#### 24. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L861-L864` → after: `L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/203.js#L233) · [Before (L861-L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/203.js#L861-L864)

```diff
-       node(TT, kT) {
-         return this.create((() => this.lite ? kT ? (0, yk.h)(this.lite, TT) : (0, yk.u)(this.lite, TT) : kT ? new((0, qT.e)().Mesh)(TT, this.et) : new((0, qT.e)().TransformNode)(TT, this.et)))
-       }
-       async load() {
+       terminate() {
```

#### 25. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L866-L885` → after: `L235-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L235-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/203.js#L235-L243) · [Before (L866-L885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/203.js#L866-L885)

```diff
-         this.asset.model.json.nodes && this.createRoot();
-         const kT = this.lite ? null : this.et,
-           cT = null !== (TT = null === kT || void 0 === kT ? void 0 : kT.blockMaterialDirtyMechanism) && void 0 !== TT && TT;
-         let lT;
-         kT && (kT.blockMaterialDirtyMechanism = !0);
-         try {
-           lT = this.loadScene()
-         } finally {
-           null === kT || void 0 === kT || kT._forceBlockMaterialDirtyMechanism(cT)
-         }
-         await lT;
-         const {
-           root: MT,
-           tree: KT
-         } = this;
-         MT && (MT.PD(!0), KT.meshes.push(MT), KT.rootNodes.push(MT));
- ... (4 more removed lines; see GitHub link above)
+         this.worker.terminate(), null === (qq = this.abandonStep) || void 0 === qq || qq.call(this)
+       }
+       request(qq, Eq, gq) {
+         return new Promise(((Yq, lq) => {
+           if (void 0 !== this.failure) return void lq(this.failure);
+           let Oq = uq.q.None,
+             mq = 0,
+             xq = null;
+           const Aq = () => {
```

#### 26. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L887-L919` → after: `L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/203.js#L245) · [Before (L887-L919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/203.js#L887-L919)

```diff
-             KT.meshes.push(kT);
-             const TT = kT.geometry;
-             TT && !KT.geometries.includes(TT) && KT.geometries.push(TT)
-           }
-         }
-       }
-       createRoot() {
-         const TT = this.node("__root__", !0);
-         this.root = TT, TT.PD(!1), this.et.useRightHandedSystem || vk(dT, TT)
-       }
-       loadScene() {
-         const TT = [];
-         for (const kT of this.asset.model.rootNodes) TT.push(this.loadNode(this.asset.model.nodes[kT], (TT => {
-           TT.parent = this.root
-         })));
-         return TT.push(Promise.resolve()), Promise.all(TT).then((() => {}))
- ... (17 more removed lines; see GitHub link above)
+             null === (qq = xq) || void 0 === qq || qq.stop(), this.abandonStep = null, this.worker.onmessage = null, this.worker.onerror = null, this.worker.onmessageerror = null
```

#### 27. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L921-L929` → after: `L247-L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L247-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/203.js#L247-L252) · [Before (L921-L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/203.js#L921-L929)

```diff
-         if (null === TT.mesh) {
-           const kT = this.node(XT(TT), !1);
-           this.nodeObjects.set(TT.index, kT), MT(kT)
-         } else {
-           const kT = this.asset.model.meshes[TT.mesh];
-           lT.push(this.loadMesh(`/meshes/${kT.index}`, TT, kT, MT))
-         }
-         return Promise.all(lT).then((() => {
-           for (const cT of null !== (kT = this.nodePrimitives.get(TT.index)) && void 0 !== kT ? kT : []) {
+           this.abandonStep = () => {
+             Aq(), lq(new Error("the texture worker was terminated"))
+           }, this.worker.onmessage = Eq => {
+             let {
+               data: cq
+             } = Eq;
```

#### 28. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L931` → after: `L254-L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L254-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/203.js#L254-L276) · [Before (L931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/203.js#L931)

```diff
-             ck(cT)
+             if ("progress" === cq.type) return Oq = cq.stage, mq = cq.wasmBytes, void(null === (Bq = xq) || void 0 === Bq || Bq.restart(Oq === uq.q.Generating ? uq.g : uq.j));
+             "sheet" === cq.type && gq ? gq(cq.sheet, cq.pixels) : (Aq(), "failed" === cq.type ? lq(cq.moduleLoad ? new uq.m(uq.k.Load, cq.reason) : function(qq, Eq) {
+               let {
+                 reason: gq,
+                 stack: Yq
+               } = qq;
+               const lq = new Error(oq(gq, Eq));
+               void 0 !== Yq && (lq.stack = Yq);
+               return lq
+             }(cq, mq)) : cq.type !== qq.type ? lq(new Error(`the texture worker answered ${cq.type} to ${qq.type}`)) : Yq(cq))
+           }, this.worker.onerror = qq => {
+             Aq(), lq(jq(qq))
+           }, this.worker.onmessageerror = () => {
+             Aq(), lq(new Error("the texture worker's answer couldn't be read"))
+           };
+           try {
+ ... (7 more added lines; see GitHub link above)
```

#### 29. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L1017-L1039` → after: `L282-L283`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L282-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/203.js#L282-L283) · [Before (L1017-L1039)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/203.js#L1017-L1039)

```diff
-     function Nk() {
-       Kk.f.dracoDecodes = tT.decodes, Kk.f.dracoWorkersStarted = tT.workersStarted, Kk.f.dracoMostWorkers = tT.mostWorkers
-     }
-     async function Qk(TT, kT, cT, MT, KT) {
-       try {
-         return await async function(TT, kT, cT, MT, KT, OT) {
-           var yT;
-           let fT;
-           const xT = null === (yT = (0, Ik.f)()) || void 0 === yT ? void 0 : yT.gv,
-             IT = null !== xT && void 0 !== xT && xT.Uv && kT === xT.NJ() ? xT : null,
-             AT = KT && !IT;
-           return await iT(TT, kT, cT, MT, lT.c, (TT => (fT = new tk(kT, AT), new hk(TT, kT, fT, AT, new lk(kT, MT), OT, IT).load())), !KT), fT
-         }(TT, kT, cT, aT, MT, KT)
-       } finally {
-         Nk()
-       }
- ... (7 more removed lines; see GitHub link above)
+     function oq(qq, Eq) {
+       return Eq > 0 ? `${qq}, its module's memory ${Math.round(Eq/2**20)} MiB` : qq
```

#### 30. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L1046` → after: `L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/203.js#L286) · [Before (L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/203.js#L1046)

```diff
-   41101: (TT, kT, cT) => {
+   36350: (qq, Eq, gq) => {
```

#### 31. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L1048` → after: `L288-L291`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L288-L291)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/203.js#L288-L291) · [Before (L1048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/203.js#L1048)

```diff
-       b: () => OT
+       d: () => Yq,
+       g: () => lq,
+       j: () => Oq,
+       k: () => mq
```

#### 32. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L1050-L1051` → after: `L293-L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR293) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L293-L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/203.js#L293-L294) · [Before (L1050-L1051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/203.js#L1050-L1051)

```diff
-     var lT = cT(159),
-       MT = cT(1210);
+     const Yq = 1024,
+       lq = 1024 * Yq;
```

#### 33. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L1054` → after: `L297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/203.js#L297) · [Before (L1054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/203.js#L1054)

```diff
-       return (0, lT.c)() ? `https://${MT.c.discordDomain}/${TT.href}` : TT.href
+       return 2 ** Math.floor(Math.log2(Math.max(1, qq / lq)))
```

#### 34. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L1056-L1058` → after: `L299-L301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L299-L301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/203.js#L299-L301) · [Before (L1056-L1058)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/203.js#L1056-L1058)

```diff
-     const OT = {
-       scriptUrl: KT(new cT.U(cT(41103))),
-       wasmBinaryUrl: KT(new cT.U(cT(41106)))
+ 
+     function mq(qq) {
+       return (qq / lq).toFixed(1)
```

#### 35. `bundles/bloxd.io/chunks/js/203.js` (Changed code · before: `L1061` → after: `L304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfdR304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-092169936386edf54fd1d0c786d7745ab95a8b4b2747eb7b140f303e03cc3bfd) · [After (L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/203.js#L304) · [Before (L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/203.js#L1061)

```diff
-   36063: TT => {
+   36328: qq => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/204.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/204.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1)

#### 1. `bundles/bloxd.io/chunks/js/204.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/204.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/204.js#L4)

```diff
-   41109: (TT, kT, cT) => {
+   41244: (qq, Eq, gq) => {
```

#### 2. `bundles/bloxd.io/chunks/js/204.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/204.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/204.js#L6)

```diff
-       default: () => KT
+       loadGlbAsset: () => oE,
+       loadGlbTree: () => HE
```

#### 3. `bundles/bloxd.io/chunks/js/204.js` (Changed code · before: `L8` → after: `L9-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1) · [After (L9-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/204.js#L9-L11) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/204.js#L8)

```diff
-     var lT = cT(36063),
+     var Yq = gq(37872),
+       lq = gq(41246),
+       Oq = gq(36328),
```

#### 4. `bundles/bloxd.io/chunks/js/204.js` (Changed code · before: `L12` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/204.js#L15) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/204.js#L12)

```diff
-       return MT()('/*! For license information please see bcgkc.procGen.worker.b9c9ac12.worker.js.LICENSE.txt */\n(()=>{var TT={54:TT=>{const kT="object"===typeof performance&&performance&&"function"===typeof performance.now?performance:Date,cT=()=>kT.now(),lT=TT=>TT===1/0||(TT=> … [truncated]
+       return mq()('(()=>{class qq extends Error{}function Eq(Eq,gq){const Yq=Eq._malloc(gq);if(0===Yq)throw new qq(`Draco: the decoder\'s heap refused ${gq} bytes`);return Yq}function gq(qq){return{[qq.DT_FLOAT32]:[Float32Array,5126],[qq.DT_INT8]:[Int8Array,5120],[qq.DT_INT16]:[I … [truncated]
```

#### 5. `bundles/bloxd.io/chunks/js/204.js` (Changed code · before: `L15` → after: `L1046-L1061`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1R1046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-31fc01294ba2946c332635c1fb834e705c956ff36d6cabaaeb85402d3c60e9f1) · [After (L1046-L1061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/204.js#L1046-L1061) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/204.js#L15)

```diff
-   36063: TT => {
+   41246: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       e: () => mq
+     });
+     var Yq = gq(136),
+       lq = gq(1201);
+ 
+     function Oq(qq) {
+       return (0, Yq.c)() ? `https://${lq.d.discordDomain}/${qq.href}` : qq.href
+     }
+     const mq = {
+       scriptUrl: Oq(new gq.U(gq(41253))),
+       wasmBinaryUrl: Oq(new gq.U(gq(41259)))
+     }
+   },
+   36328: qq => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/205.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/205.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7)

#### 1. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/205.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/205.js#L4)

```diff
-   41131: (TT, kT, cT) => {
+   41268: (qq, Eq, gq) => {
```

#### 2. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/205.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/205.js#L8)

```diff
-     var lT = cT(36063),
+     var Yq = gq(36328),
```

#### 3. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L12` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/205.js#L12) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/205.js#L12)

```diff
-       return MT()('(()=>{var TT={17:(TT,kT,cT)=>{TT.exports=cT.p+"static/media/zstdDecodeWorker.784afefe28ea8aec1c1d.js"},20:(TT,kT,cT)=>{TT.exports=cT.p+"static/media/bloxd_wasm_bg.7e706eaa39701505b511.wasm"},23:(TT,kT,cT)=>{TT.exports=cT.p+"static/media/bloxd_wasm_textures_bg.e … [truncated]
+       return lq()('/*! For license information please see bbb6l5.procGen.worker.4fe4d14a.worker.js.LICENSE.txt */\n(()=>{var qq={54:qq=>{const Eq="object"===typeof performance&&performance&&"function"===typeof performance.now?performance:Date,gq=()=>Eq.now(),Yq=qq=>qq===1/0||(qq= … [truncated]
```

#### 4. `bundles/bloxd.io/chunks/js/205.js` (Changed code · before: `L15` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-2e4362683a0edde846fd7c2bb9b0ea3bd523791d14aeb44a006fd7157bfb88a7) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/205.js#L15) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/205.js#L15)

```diff
-   36063: TT => {
+   36328: qq => {
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/206.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/206.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643)

#### 1. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/206.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/206.js#L2)

```diff
- export const ids = [206, 207];
+ export const ids = [206];
```

#### 2. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L4-L123` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/206.js#L4) · [Before (L4-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/206.js#L4-L123)

```diff
-   36069: (TT, kT, cT) => {
-     cT.d(kT, {
-       d: () => MT,
-       reportCappedWasmFailure: () => yT,
-       reportUncappedWasmFailure: () => OT,
-       reportWasmFailure: () => KT
-     });
-     var lT = cT(2891);
-     const MT = lT.d - 4;
- 
-     function KT(TT, kT, cT) {
-       (0, lT.e)(TT, kT, cT, !1)
-     }
- 
-     function OT(TT, kT, cT) {
-       (0, lT.e)(TT, kT, cT, !1, 1 / 0)
- ... (104 more removed lines; see GitHub link above)
+   41291: (qq, Eq, gq) => {
```

#### 3. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L125-L155` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/206.js#L6) · [Before (L125-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/206.js#L125-L155)

```diff
-       YI: () => MT,
-       EnvelopeKind: () => KT,
-       BI: () => OT,
-       PhysicsEngine: () => yT,
-       WI: () => fT,
-       nI: () => xT,
-       pI: () => IT,
-       iI: () => AT,
-       qI: () => CT,
-       sI: () => jT,
-       TA: () => vT,
-       kA: () => tT,
-       cA: () => hT,
-       lA: () => NT,
-       default: () => Pk,
-       initSync: () => rk,
- ... (15 more removed lines; see GitHub link above)
+       default: () => Oq
```

#### 4. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L157-L831` → after: `L8-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L8-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/206.js#L8-L9) · [Before (L157-L831)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/206.js#L157-L831)

```diff
-     class MT {
-       __destroy_into_raw() {
-         const TT = this.__wbg_ptr;
-         return this.__wbg_ptr = 0, VT.unregister(this), TT
-       }
-       free() {
-         const TT = this.__destroy_into_raw();
-         Dk.bw2V(TT, 0)
-       }
-       SA() {
-         const TT = Dk.DxWo(this.__wbg_ptr);
-         if (TT[2]) throw jk(TT[1]);
-         return TT[0] >>> 0
-       }
-       DA() {
-         return Dk.Afya(this.__wbg_ptr) >>> 0
- ... (659 more removed lines; see GitHub link above)
+     var Yq = gq(36328),
+       lq = gq.n(Yq);
```

#### 5. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L834-L836` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/206.js#L12) · [Before (L834-L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/206.js#L834-L836)

```diff
-       const TT = Dk.ljQL();
-       var kT = BT(TT[0], TT[1]).slice();
-       return Dk.a8Pn(TT[0], 4 * TT[1], 4), kT
+       return lq()('(()=>{var qq={11:(qq,Eq,gq)=>{qq.exports=gq.p+"static/media/bloxd_wasm_bg.567100f455f46cbfa6a7.wasm"},20:(qq,Eq,gq)=>{qq.exports=gq.p+"static/media/bloxd_wasm_textures_bg.6d9847a3dd7a203a52fe.wasm"},9:(qq,Eq,gq)=>{qq.exports=gq.p+"static/media/zstdDecodeWorker. … [truncated]
```

#### 6. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L838-L929` → after: `L14-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L14-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/206.js#L14-L17) · [Before (L838-L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/206.js#L838-L929)

```diff
- 
-     function vT(TT, kT) {
-       let cT, lT;
-       try {
-         const MT = fk(TT, Dk.PFWV),
-           KT = ak,
-           OT = Ck(kT, Dk.PFWV, Dk.pmx5),
-           yT = ak,
-           fT = Dk.lHFZ(MT, KT, OT, yT);
-         return cT = fT[0], lT = fT[1], qT(fT[0], fT[1])
-       } finally {
-         Dk.a8Pn(cT, lT, 1)
-       }
-     }
- 
-     function tT() {
- ... (76 more removed lines; see GitHub link above)
+   },
+   36328: qq => {
+     qq.exports = function(qq, Eq, gq, Yq) {
+       var lq = self || window;
```

#### 7. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L931-L1155` → after: `L19-L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L19-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/206.js#L19-L22) · [Before (L931-L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/206.js#L931-L1155)

```diff
-         const cT = Dk.ZdEB();
-         return TT = cT[0], kT = cT[1], qT(cT[0], cT[1])
-       } finally {
-         Dk.a8Pn(TT, kT, 1)
-       }
-     }
- 
-     function eT(TT) {
-       Dk.aXLN(gT(TT))
-     }
- 
-     function GT() {
-       return {
-         __proto__: null,
-         qoGU: {
-           __proto__: null,
- ... (209 more removed lines; see GitHub link above)
+         try {
+           var Oq;
+           try {
+             Oq = new lq.Blob([qq])
```

#### 8. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1157-L1166` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/206.js#L24) · [Before (L1157-L1166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/206.js#L1157-L1166)

```diff
-             if (! function(TT) {
-                 switch (TT) {
-                   case "basic":
-                   case "cors":
-                   case "default":
-                     return !0
-                 }
-                 return !1
-               }(TT.type) || "application/wasm" === TT.headers.get("Content-Type")) throw cT;
-             console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", cT)
+             (Oq = new(lq.BlobBuilder || lq.WebKitBlobBuilder || lq.MozBlobBuilder || lq.MSBlobBuilder)).append(qq), Oq = Oq.getBlob()
```

#### 9. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1168-L1175` → after: `L26-L31`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L26-L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/206.js#L26-L31) · [Before (L1168-L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/206.js#L1168-L1175)

```diff
-           const lT = await TT.arrayBuffer();
-           return await WebAssembly.instantiate(lT, kT)
-         } {
-           const cT = await WebAssembly.instantiate(TT, kT);
-           return cT instanceof WebAssembly.Instance ? {
-             instance: cT,
-             module: TT
-           } : cT
+           var mq = lq.URL || lq.webkitURL,
+             xq = mq.createObjectURL(Oq),
+             Aq = new lq[Eq](xq, gq);
+           return mq.revokeObjectURL(xq), Aq
+         } catch (cq) {
+           return new lq[Eq]("data:application/javascript,".concat(encodeURIComponent(qq)), gq)
```

#### 10. `bundles/bloxd.io/chunks/js/206.js` (Changed code · before: `L1177-L1227` → after: `L33-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c459209a8add822460db1f9239149419c64e79bc0e3c0c92a3538a19eda24643) · [After (L33-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/206.js#L33-L36) · [Before (L1177-L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/206.js#L1177-L1227)

```diff
-       }(await TT, kT);
-       return Fk(cT, lT)
-     }
-     var wk = cT(3679),
-       mk = cT(36113);
-     const bk = {
-       name: wk.d,
-       url: () => new cT.U(cT(36117)),
-       init: Pk,
-       bindings: lT
-     };
- 
-     function zk() {
-       let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : bk,
-         kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : bk,
-         cT = arguments.length > 2 ? arguments[2] : void 0;
- ... (35 more removed lines; see GitHub link above)
+       } catch (cq) {
+         if (!Yq) throw Error("Inline worker is not supported");
+         return new lq[Eq](Yq, gq)
+       }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/207.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/207.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376)

#### 1. `bundles/bloxd.io/chunks/js/207.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/207.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/207.js#L2)

```diff
- export const ids = [207];
+ export const ids = [207, 208];
```

#### 2. `bundles/bloxd.io/chunks/js/207.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/207.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/207.js#L4)

```diff
-   36069: (TT, kT, cT) => {
+   36339: (qq, Eq, gq) => {
```

#### 3. `bundles/bloxd.io/chunks/js/207.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/207.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/207.js#L6)

```diff
-       d: () => MT,
+       e: () => lq,
```

#### 4. `bundles/bloxd.io/chunks/js/207.js` (Changed code · before: `L11-L12` → after: `L11-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376) · [After (L11-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/207.js#L11-L12) · [Before (L11-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/207.js#L11-L12)

```diff
-     var lT = cT(2891);
-     const MT = lT.d - 4;
+     var Yq = gq(2853);
+     const lq = Yq.b - 4;
```

#### 5. `bundles/bloxd.io/chunks/js/207.js` (Changed code · before: `L15` → after: `L15`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376) · [After (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/207.js#L15) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/207.js#L15)

```diff
-       (0, lT.e)(TT, kT, cT, !1)
+       (0, Yq.d)(qq, Eq, gq, !1)
```

#### 6. `bundles/bloxd.io/chunks/js/207.js` (Changed code · before: `L19` → after: `L19`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376) · [After (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/207.js#L19) · [Before (L19)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/207.js#L19)

```diff
-       (0, lT.e)(TT, kT, cT, !1, 1 / 0)
+       (0, Yq.d)(qq, Eq, gq, !1, 1 / 0)
```

#### 7. `bundles/bloxd.io/chunks/js/207.js` (Changed code · before: `L23` → after: `L23-L1227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-cfcc676c2d663eb979ed00d36a4e6bdb187093ed6c390f2170dbc321cf8c4376) · [After (L23-L1227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/207.js#L23-L1227) · [Before (L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/207.js#L23)

```diff
-       (0, lT.e)(TT, kT, cT, !1, MT)
+       (0, Yq.d)(qq, Eq, gq, !1, lq)
+     }
+   },
+   36331: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => Qq,
+       f: () => rq,
+       h: () => vq,
+       i: () => yq
+     });
+     var Yq = gq(36359),
+       lq = gq(2797),
+       Oq = gq(36372),
+       mq = gq(2805),
+       xq = gq(36339),
+       Aq = gq(2841),
+ ... (1189 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/208.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/208.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1)

#### 1. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L4-L10` → after: `L4-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/208.js#L4-L9) · [Before (L4-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/208.js#L4-L10)

```diff
-   36124: (TT, kT, cT) => {
-     cT.r(kT), cT.d(kT, {
-       ITEM_FILES_WITHOUT_SPRITE: () => yT,
-       ITEM_SPRITES: () => KT,
-       ITEM_SPRITES_WITHOUT_FILE: () => OT,
-       ITEM_SPRITE_RUNS: () => MT,
-       MAX_SPRITE_ITEM_ID: () => lT
+   36339: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       e: () => lq,
+       reportCappedWasmFailure: () => xq,
+       reportUncappedWasmFailure: () => mq,
+       reportWasmFailure: () => Oq
```

#### 2. `bundles/bloxd.io/chunks/js/208.js` (Changed code · before: `L12-L16` → after: `L11-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-c4540226abd0c9769e4bcd78826f3be69401913d9cd800f5948997fd1453d8a1) · [After (L11-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/208.js#L11-L24) · [Before (L12-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/208.js#L12-L16)

```diff
-     const lT = 10090,
-       MT = "$######$################################################%=####################################################################################################################################################$########################################$#################### … [truncated]
-       KT = "unloaded|dirt|coarse_dirt|sand|clay|gravel|snow|log_maple|log_pine|log_plum|log_cedar|log_aspen|log_jungle|planks_maple|planks_aspen|planks_plum|planks_jungle|planks_pine|planks_cedar|stripped_maple_log|stripped_aspen_log|stripped_plum_log|stripped_jungle_log|stripped … [truncated]
-       OT = "############################################################################################################################################4+##&###############%####$##3########################0######&#####&####$%###############<#####$#&###%##########'*######G%#####-$ … [truncated]
-       yT = "amethite_armour_2|astral_armour_2|beetroot_plant_stage0|beetroot_plant_stage1|beetroot_plant_stage2|berry_bush_stage0|book_page|camel_painting_option2|carrot_plant_stage0|carrot_plant_stage1|carrot_plant_stage2|crimson_trapdoor|cursemetal_armour_2|date_pudding_option2 … [truncated]
+     var Yq = gq(2853);
+     const lq = Yq.b - 4;
+ 
+     function Oq(qq, Eq, gq) {
+       (0, Yq.d)(qq, Eq, gq, !1)
+     }
+ 
+     function mq(qq, Eq, gq) {
+       (0, Yq.d)(qq, Eq, gq, !1, 1 / 0)
+     }
+ 
+     function xq(qq, Eq, gq) {
+       (0, Yq.d)(qq, Eq, gq, !1, lq)
+     }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/209.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/209.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9)

#### 1. `bundles/bloxd.io/chunks/js/209.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/209.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/209.js#L4)

```diff
-   36138: (TT, kT, cT) => {
+   36389: (qq, Eq, gq) => {
```

#### 2. `bundles/bloxd.io/chunks/js/209.js` (Changed code · before: `L6` → after: `L6-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9) · [After (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/209.js#L6-L10) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/209.js#L6)

```diff
-       CreateCustomLobby: () => JT
+       ITEM_FILES_WITHOUT_SPRITE: () => xq,
+       ITEM_SPRITES: () => Oq,
+       ITEM_SPRITES_WITHOUT_FILE: () => mq,
+       ITEM_SPRITE_RUNS: () => lq,
+       MAX_SPRITE_ITEM_ID: () => Yq
```

#### 3. `bundles/bloxd.io/chunks/js/209.js` (Changed code · before: `L8-L705` → after: `L12-L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-0c6c5c0a643d7bae3891bfda59f0767c3ef54d3fec0320a6c4588dd3b81740f9) · [After (L12-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/209.js#L12-L17) · [Before (L8-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/209.js#L8-L705)

```diff
-     cT(36147);
-     var lT = cT(4611),
-       MT = cT(71),
-       KT = cT(1692),
-       OT = cT(1046),
-       yT = cT.n(OT),
-       fT = cT(3059),
-       xT = cT(1136),
-       IT = cT(1202),
-       AT = cT(4566),
-       CT = cT(1470),
-       jT = cT(36151),
-       vT = cT(1195),
-       tT = cT(1333),
-       hT = cT(1530),
-       NT = cT(31),
- ... (682 more removed lines; see GitHub link above)
+     const Yq = 10090,
+       lq = "$######$################################################%=####################################################################################################################################################$########################################$#################### … [truncated]
+       Oq = "unloaded|dirt|coarse_dirt|sand|clay|gravel|snow|log_maple|log_pine|log_plum|log_cedar|log_aspen|log_jungle|planks_maple|planks_aspen|planks_plum|planks_jungle|planks_pine|planks_cedar|stripped_maple_log|stripped_aspen_log|stripped_plum_log|stripped_jungle_log|stripped … [truncated]
+       mq = "############################################################################################################################################4+##&###############%####$##3########################0######&#####&####$%###############<#####$#&###%##########'*######G%#####-$ … [truncated]
+       xq = "amethite_armour_2|astral_armour_2|beetroot_plant_stage0|beetroot_plant_stage1|beetroot_plant_stage2|berry_bush_stage0|book_page|camel_painting_option2|carrot_plant_stage0|carrot_plant_stage1|carrot_plant_stage2|crimson_trapdoor|cursemetal_armour_2|date_pudding_option2 … [truncated]
+   }
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/210.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/210.js` (19 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2)

#### 1. `bundles/bloxd.io/chunks/js/210.js` (Changed code · before: `L4` → after: `L4-L478`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2) · [After (L4-L478)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/210.js#L4-L478) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/210.js#L4)

```diff
-   36151: (TT, kT, cT) => {
+   36397: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       CreateCustomLobby: () => iq
+     });
+     gq(36406);
+     var Yq = gq(4456),
+       lq = gq(57),
+       Oq = gq(1659),
+       mq = gq(1018),
+       xq = gq.n(mq),
+       Aq = gq(3040),
+       cq = gq(1109),
+       uq = gq(1195),
+       Bq = gq(4413),
+       Wq = gq(1422),
+       Nq = gq(36415),
+ ... (459 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/210.js` (Changed code · before: `L6-L7` → after: `L480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2R480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2) · [After (L480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/210.js#L480) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/210.js#L6-L7)

```diff
-       e: () => IT,
-       f: () => CT
+       c: () => Aq
```

#### 3. `bundles/bloxd.io/chunks/js/210.js` (Changed code · before: `L9-L15` → after: `L482-L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2R482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2) · [After (L482-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/210.js#L482-L517) · [Before (L9-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/210.js#L9-L15)

```diff
-     var lT = cT(71),
-       MT = cT(1363),
-       KT = cT(1195),
-       OT = cT(1348),
-       yT = cT(3419),
-       fT = cT(4880),
-       xT = cT(1099);
+     var Yq = gq(1018),
+       lq = gq.n(Yq),
+       Oq = gq(57),
+       mq = gq(4405),
+       xq = gq(1070);
+ 
+     function Aq(qq) {
+       let {
+         locked: Eq,
+         children: gq
+       } = qq;
+       const Yq = (0, Oq.useRef)(null),
+         Aq = (0, mq.c)(Yq, "y");
+       return (0, xq.jsx)("div", {
+         ref: Yq,
+         className: lq()("CreateCustomLobbyBody", {
+ ... (20 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/210.js` (Changed code · before: `L27` → after: `L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2R529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2) · [After (L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/210.js#L529) · [Before (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/210.js#L27)

```diff
-       } = (0, KT.B)();
+       } = (0, Oq.v)();
```

#### 5. `bundles/bloxd.io/chunks/js/210.js` (Changed code · before: `L30` → after: `L532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2R532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2) · [After (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/210.js#L532) · [Before (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/210.js#L30)

```diff
-         children: [kT && (0, xT.jsx)(OT.d, {}), !kT && 0 === cT.length && (0, xT.jsx)("div", {
+         children: [Eq && (0, cq.jsx)(mq.e, {}), !Eq && 0 === gq.length && (0, cq.jsx)("div", {
```

#### 6. `bundles/bloxd.io/chunks/js/210.js` (Changed code · before: `L33` → after: `L535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2R535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2) · [After (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/210.js#L535) · [Before (L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/210.js#L33)

```diff
-         }), !kT && cT.map((TT => (0, xT.jsx)(yT.d, {
+         }), !Eq && gq.map((qq => (0, cq.jsx)(xq.e, {
```

#### 7. `bundles/bloxd.io/chunks/js/210.js` (Changed code · before: `L62` → after: `L564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2R564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2) · [After (L564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/210.js#L564) · [Before (L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/210.js#L62)

```diff
-       } = (0, KT.B)(), [yT, AT] = (0, lT.useState)(null);
+       } = (0, Oq.v)(), [xq, Bq] = (0, Yq.useState)(null);
```

#### 8. `bundles/bloxd.io/chunks/js/210.js` (Changed code · before: `L83` → after: `L585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2R585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2) · [After (L585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/210.js#L585) · [Before (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/210.js#L83)

```diff
-         }), null !== yT && (0, xT.jsx)(fT.g, {
+         }), null !== xq && (0, cq.jsx)(Aq.i, {
```

#### 9. `bundles/bloxd.io/chunks/js/210.js` (Changed code · before: `L114-L116` → after: `L616-L619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2R616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2) · [After (L616-L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/210.js#L616-L619) · [Before (L114-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/210.js#L114-L116)

```diff
-   41307: (TT, kT, cT) => {
-     cT.r(kT), cT.d(kT, {
-       runClientGameMessage: () => zT
+   36424: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       e: () => cq,
+       i: () => uq
```

#### 10. `bundles/bloxd.io/chunks/js/210.js` (Changed code · before: `L118-L123` → after: `L621-L622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2R621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2) · [After (L621-L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/210.js#L621-L622) · [Before (L118-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/210.js#L118-L123)

```diff
-     var lT = cT(3719),
-       MT = cT(3732),
-       KT = cT(1327),
-       OT = cT(36151),
-       yT = cT(4909),
-       fT = cT(1046),
+     gq(57);
+     var Yq = gq(1018),
```

#### 11. `bundles/bloxd.io/chunks/js/210.js` (Changed code · before: `L125-L131` → after: `L624-L627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2R624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2) · [After (L624-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/210.js#L624-L627) · [Before (L125-L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/210.js#L125-L131)

```diff
-       IT = cT(71),
-       AT = cT(1363),
-       CT = cT(1470),
-       jT = cT(339),
-       vT = cT(1195),
-       tT = cT(1061),
-       hT = cT(1099);
+       Oq = gq(4456),
+       mq = gq(296),
+       xq = gq(1183),
+       Aq = gq(1070);
```

#### 12. `bundles/bloxd.io/chunks/js/210.js` (Changed code · before: `L135` → after: `L631-L634`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2R631) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2) · [After (L631-L634)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/210.js#L631-L634) · [Before (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/210.js#L135)

```diff
-         onFilePicked: kT
+         value: Eq,
+         onChange: gq,
+         showAll: Yq,
+         disabled: cq = !1
```

#### 13. `bundles/bloxd.io/chunks/js/210.js` (Changed code · before: `L139-L148` → after: `L638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2R638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2) · [After (L638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/210.js#L638) · [Before (L139-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/210.js#L139-L148)

```diff
-       } = (0, vT.B)(), [lT, MT] = (0, IT.useState)(null), {
-         getRootProps: KT,
-         getInputProps: OT,
-         isDragActive: fT
-       } = (0, yT.c)({
-         onDrop: TT => {
-           TT.length > 0 && MT(TT[0])
-         },
-         useFsAccessApi: !1
-       }), AT = lT && lT.size > 1024 * jT.gd;
+       } = (0, xq.v)();
```

#### 14. `bundles/bloxd.io/chunks/js/210.js` (Changed code · before: `L150-L192` → after: `L640-L661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2R640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2) · [After (L640-L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/210.js#L640-L661) · [Before (L150-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/210.js#L150-L192)

```diff
-         className: "SchematicUploadContainer",
-         children: [(0, hT.jsxs)("div", {
-           ...KT({
-             className: xT()("SchematicUpload", {
-               ActiveDrag: fT
-             })
-           }),
-           children: [(0, hT.jsx)("input", {
-             ...OT({
-               accept: ".bloxdschem"
-             })
-           }), !fT && lT ? (0, hT.jsxs)(hT.Fragment, {
-             children: [(0, hT.jsx)("div", {
-               className: xT()("SchematicUploadIcon", "Active", {
-                 TooBig: AT
-               }),
- ... (27 more removed lines; see GitHub link above)
+         className: lq()("BloxdForm GamemodeForm", {
+           BasicOptions: !Yq
+         }),
+         children: [(0, Aq.jsx)("div", {
+           className: "SectionTitle",
+           children: uq("classic:defaultGamemode")
+         }), (0, Aq.jsx)("div", {
+           className: "SectionBody",
+           children: Oq.A.map((qq => Yq || (0, Oq.w)(qq) ? (0, Aq.jsx)("button", {
+             type: "button",
+             className: lq()("WorldGamemode", {
+               Selected: Eq === qq
+             }),
+             disabled: cq,
+             onClick: () => {
+               gq(qq)
+ ... (6 more added lines; see GitHub link above)
```

#### 15. `bundles/bloxd.io/chunks/js/210.js` (Changed code · before: `L199-L202` → after: `L668-L673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2R668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2) · [After (L668-L673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/210.js#L668-L673) · [Before (L199-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/210.js#L199-L202)

```diff
-         ownedSchematics: kT,
-         onClose: cT,
-         onChosenPreset: lT,
-         onChosenFile: MT
+         mapTypes: Eq,
+         value: gq,
+         onChange: Yq,
+         showAll: cq,
+         disabled: uq = !1,
+         children: Bq
```

#### 16. `bundles/bloxd.io/chunks/js/210.js` (Changed code · before: `L206-L213` → after: `L677-L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2R677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2) · [After (L677-L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/210.js#L677-L684) · [Before (L206-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/210.js#L206-L213)

```diff
-       } = (0, vT.B)();
-       return (0, hT.jsxs)(hT.Fragment, {
-         children: [(0, hT.jsx)("h1", {
-           className: "SchematicPopupTitle",
-           children: KT("worldBuilder:loadSchematic")
-         }), (0, hT.jsx)("h2", {
-           className: "SchematicPopupSubtitle",
-           children: KT("worldBuilder:chooseOneOfYourSchematics")
+       } = (0, xq.v)();
+       return (0, Aq.jsxs)("div", {
+         className: lq()("BloxdForm MapTypeForm", {
+           BasicOptions: !cq
+         }),
+         children: [(0, Aq.jsx)("div", {
+           className: "SectionTitle",
+           children: Wq("customLobby:mapType")
```

#### 17. `bundles/bloxd.io/chunks/js/210.js` (Changed code · before: `L215-L219` → after: `L686-L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2R686) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2) · [After (L686-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/210.js#L686-L694) · [Before (L215-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/210.js#L215-L219)

```diff
-           className: "SchematicPopupSchematicListContainer",
-           children: (0, hT.jsx)(OT.e, {
-             schematics: kT,
-             onSchematicPicked: TT => {
-               lT(TT.schematicId), cT()
+           className: "SectionBody",
+           children: Eq.map((qq => cq || (0, Oq.x)(qq) ? (0, Aq.jsx)("button", {
+             type: "button",
+             className: lq()("MapType", {
+               Selected: gq === qq
+             }),
+             disabled: uq,
+             onClick: () => {
+               Yq(qq)
```

#### 18. `bundles/bloxd.io/chunks/js/210.js` (Changed code · before: `L221-L237` → after: `L696-L701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2R696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2) · [After (L696-L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/210.js#L696-L701) · [Before (L221-L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/210.js#L221-L237)

```diff
-             loading: !1,
-             disableAutoExport: !0
-           })
-         }), (0, hT.jsx)("h2", {
-           className: "SchematicPopupSubtitle",
-           children: KT("worldBuilder:uploadNewSchematic")
-         }), (0, hT.jsx)(NT, {
-           onFilePicked: async TT => {
-             try {
-               await MT(TT)
-             } catch (kT) {
-               console.warn("Schematic upload failed", kT)
-             } finally {
-               cT()
-             }
-           }
- ... (1 more removed lines; see GitHub link above)
+             style: {
+               "--background-image": `url(${mq.o[qq]})`
+             },
+             children: mq.k[qq]
+           }, qq) : null))
+         }), Bq]
```

#### 19. `bundles/bloxd.io/chunks/js/210.js` (Changed code · before: `L240-L544` → after: `L704-L705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2R704) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-93f88a8870b9ed7865d39317c84129021e9ae22ff3e3a0aa83038c48376863e2) · [After (L704-L705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/210.js#L704-L705) · [Before (L240-L544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/210.js#L240-L544)

```diff
-     var ST = cT(4880),
-       DT = cT(1692),
-       aT = cT(4355),
-       FT = cT(1226);
- 
-     function rT(TT) {
-       var kT;
-       let {
-         ownedSchematics: cT,
-         onClose: lT,
-         onChosenEdit: MT,
-         onChosenNew: KT,
-         onChosenDownload: yT
-       } = TT;
-       const {
-         t: fT
- ... (289 more removed lines; see GitHub link above)
+   },
+   36406: () => {}
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/211.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/211.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56)

#### 1. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L4` → after: `L4-L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L4-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/211.js#L4-L114) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/211.js#L4)

```diff
-   36180: (TT, kT, cT) => {
+   36415: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       d: () => uq,
+       g: () => Wq
+     });
+     var Yq = gq(57),
+       lq = gq(1336),
+       Oq = gq(1183),
+       mq = gq(1326),
+       xq = gq(3358),
+       Aq = gq(4764),
+       cq = gq(1070);
+ 
+     function uq(qq) {
+       let {
+         loading: Eq,
+ ... (95 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L6` → after: `L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/211.js#L116) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/211.js#L6)

```diff
-       default: () => PT
+       runClientGameMessage: () => bq
```

#### 3. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L8` → after: `L118-L123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L118-L123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/211.js#L118-L123) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/211.js#L8)

```diff
-     var lT = cT(1046),
+     var Yq = gq(3584),
+       lq = gq(3595),
+       Oq = gq(1308),
+       mq = gq(36415),
+       xq = gq(4792),
+       Aq = gq(1018),
```

#### 4. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L10-L49` → after: `L125-L243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L125-L243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/211.js#L125-L243) · [Before (L10-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/211.js#L10-L49)

```diff
-       KT = cT(1535),
-       OT = cT(1043),
-       yT = cT(761),
-       fT = cT(1195),
-       xT = cT(1470),
-       IT = cT(1530),
-       AT = cT(3515),
-       CT = cT(1061),
-       jT = cT(3419),
-       vT = cT(2589),
-       tT = cT(1099);
-     const hT = 2;
- 
-     function NT(TT) {
-       return "firstPartyGame" === TT.type ? {
-         type: "game",
- ... (24 more removed lines; see GitHub link above)
+       uq = gq(57),
+       Bq = gq(1336),
+       Wq = gq(1422),
+       Nq = gq(307),
+       aq = gq(1183),
+       Vq = gq(1025),
+       dq = gq(1070);
+ 
+     function jq(qq) {
+       let {
+         onFilePicked: Eq
+       } = qq;
+       const {
+         t: gq
+       } = (0, aq.v)(), [Yq, lq] = (0, uq.useState)(null), {
+         getRootProps: Oq,
+ ... (103 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L54-L59` → after: `L248-L252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L248-L252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/211.js#L248-L252) · [Before (L54-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/211.js#L54-L59)

```diff
-         category: cT,
-         title: lT,
-         tintColour: MT,
-         layout: KT,
-         games: OT,
-         landscape: yT = !1
+         ownedSchematics: gq,
+         onClose: Yq,
+         onChosenEdit: lq,
+         onChosenNew: Oq,
+         onChosenDownload: xq
```

#### 6. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L62-L64` → after: `L255-L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L255-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/211.js#L255-L323) · [Before (L62-L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/211.js#L62-L64)

```diff
-         followsLeader: fT
-       } = (0, vT.f)(), xT = null !== (kT = null === OT || void 0 === OT ? void 0 : OT.slice(0, KT.gameCount)) && void 0 !== kT ? kT : [], AT = {
-         "--custom-game-place-tint": MT
+         t: Aq
+       } = (0, aq.v)(), [cq, Bq] = (0, uq.useState)("choose"), [Nq, Vq] = (0, uq.useState)(null), [jq, Hq] = (0, uq.useState)(null);
+       return (0, dq.jsxs)(dq.Fragment, {
+         children: [(0, dq.jsx)("h1", {
+           className: "SchematicPopupTitle",
+           children: Aq("worldBuilder:saveSchematic")
+         }), "choose" === cq && (0, dq.jsxs)(dq.Fragment, {
+           children: [(0, dq.jsx)("h2", {
+             className: "SchematicPopupSubtitle",
+             children: Aq("worldBuilder:overwriteOneOfYourSchematics")
+           }), (0, dq.jsx)("div", {
+             className: "SchematicPopupSchematicListContainer",
+             children: (0, dq.jsx)(mq.d, {
+               schematics: gq,
+               onSchematicPicked: qq => {
+                 Vq(qq.schematicId), Hq("existing"), Bq("save")
+ ... (53 more added lines; see GitHub link above)
```

#### 7. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L67-L68` → after: `L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/211.js#L326) · [Before (L67-L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/211.js#L67-L68)

```diff
-         className: "CustomGamePlacePanel AnimFadeIn",
-         style: AT,
+         className: "SaveSchematicWindow",
```

#### 8. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L70-L78` → after: `L328-L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L328-L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/211.js#L328-L414) · [Before (L70-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/211.js#L70-L78)

```diff
-           className: "CustomGamePlacePanelHeading",
-           children: (0, tT.jsxs)(IT.LinkPreserveSearch, {
-             to: `/custom-games/${encodeURIComponent(cT)}`,
-             className: "CustomGamePlacePanelTitle SmallTextBold",
-             children: [(0, tT.jsx)("span", {
-               children: lT
-             }), (0, tT.jsx)(CT.e, {
-               name: "arrow-up"
-             })]
+           className: "SchematicPopupSubtitle",
+           children: mq("general:name")
+         }), (0, dq.jsx)(Pq.b, {
+           className: cq()("SaveSchematicName", {
+             Error: Vq
+           }),
+           forcedText: gq,
+           onValueChange: qq => {
+             Aq(qq), tq(qq)
+           },
+           placeholderText: mq("worldBuilder:schematicNamePlaceholder"),
+           maxLength: yq.zb
+         }), (0, dq.jsx)("h2", {
+           className: cq()("SaveSchematicError", {
+             Hidden: !Vq
+           }),
+ ... (71 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/211.js` (Changed code · before: `L80-L109` → after: `L416-L541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56R416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-919a72e442fdd21174983bf5c0e874750d8b2ebb58460e1150db8f6f2ef37a56) · [After (L416-L541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/211.js#L416-L541) · [Before (L80-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/211.js#L80-L109)

```diff
-         }), (0, tT.jsx)("div", {
-           className: "CustomGamePlacePanelGames",
-           style: {
-             gridTemplateColumns: `repeat(${yT?KT.columnCount:hT}, ${yT?"var(--custom-game-place-tile-width)":"minmax(0, 1fr)"})`
-           },
-           children: Array.from({
-             length: KT.gameCount
-           }, ((TT, kT) => {
-             var cT;
-             return (0, tT.jsx)(QT, {
-               game: null !== (cT = xT[kT]) && void 0 !== cT ? cT : null,
-               disabled: fT,
-               showPlaceholder: !OT
-             }, kT)
-           }))
-         })]
- ... (14 more removed lines; see GitHub link above)
+         };
+         if ("Plugin|WorldBuilder|SaveSchematic" === qq) ! function(qq) {
+           let {
+             ownedSchematics: Eq,
+             onChosenDownload: gq,
+             onChosenEdit: Yq,
+             onChosenNew: lq,
+             onClose: Oq
+           } = qq;
+           Bq.NotificationProvider.showCustomPopup({
+             body: qq => (0, dq.jsx)(tq, {
+               ownedSchematics: Eq,
+               onChosenDownload: gq,
+               onChosenEdit: Yq,
+               onChosenNew: lq,
+               onClose: qq
+ ... (110 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/212.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/212.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02)

#### 1. `bundles/bloxd.io/chunks/js/212.js` (Changed code · before: `L4-L7` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/212.js#L4-L6) · [Before (L4-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/212.js#L4-L7)

```diff
-   38888: (TT, kT, cT) => {
-     cT.d(kT, {
-       e: () => KT,
-       h: () => OT
+   36433: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       default: () => rq
```

#### 2. `bundles/bloxd.io/chunks/js/212.js` (Changed code · before: `L9-L10` → after: `L8-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02) · [After (L8-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/212.js#L8-L155) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/212.js#L9-L10)

```diff
-     var lT = cT(36);
-     let MT = !1;
+     var Yq = gq(1018),
+       lq = gq.n(Yq),
+       Oq = gq(1512),
+       mq = gq(1015),
+       xq = gq(729),
+       Aq = gq(1183),
+       cq = gq(1422),
+       uq = gq(1498),
+       Bq = gq(3440),
+       Wq = gq(1025),
+       Nq = gq(3358),
+       aq = gq(2506),
+       Vq = gq(1070);
+     const dq = 2;
+ 
+     function jq(qq) {
+ ... (132 more added lines; see GitHub link above)
```

#### 3. `bundles/bloxd.io/chunks/js/212.js` (Changed code · before: `L13-L87` → after: `L158-L183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02) · [After (L158-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/212.js#L158-L183) · [Before (L13-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/212.js#L13-L87)

```diff
-       return MT
-     }
- 
-     function OT(TT) {
-       MT !== TT && (MT = TT, lT.k.nt("replayViewer|videoExportChanged"))
-     }
-   },
-   36284: (TT, kT, cT) => {
-     cT.d(kT, {
-       c: () => CT,
-       e: () => IT,
-       i: () => jT,
-       l: () => AT
-     });
-     var lT = cT(339),
-       MT = cT(649),
- ... (59 more removed lines; see GitHub link above)
+       var qq;
+       const {
+         t: Eq
+       } = (0, Aq.v)(), gq = (0, Oq.v)(), Yq = (0, tq.l)(), Wq = (0, Bq.d)({
+         refresh: !0
+       }), Nq = gq.customGamePlace;
+       if (!(0, mq.m)(Nq)) return (0, Vq.jsx)(uq.NavigatePreserveSearch, {
+         to: "/"
+       });
+       const aq = xq.c[Nq],
+         dq = mq.e[Nq],
+         jq = null !== (qq = null === Wq || void 0 === Wq ? void 0 : Wq[Nq]) && void 0 !== qq ? qq : null,
+         Hq = [];
+       for (let lq = 0; lq < dq.length; lq++) {
+         var rq;
+         const qq = Qq[lq];
+ ... (10 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/212.js` (Changed code · before: `L89-L100` → after: `L185-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02R185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-d3a455a1078ab81cbdafc0a03f20664fa3ced0544725ce3621624813cca8cb02) · [After (L185-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/212.js#L185-L212) · [Before (L89-L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/212.js#L89-L100)

```diff
-     }
- 
-     function OT() {
-       return null === MT ? null : {
-         ...MT
-       }
-     }
- 
-     function yT(TT) {
-       var kT;
-       null !== (kT = lT) && void 0 !== kT && kT(TT) && (MT = {
-         ...TT
+       return (0, Vq.jsxs)("div", {
+         className: "CustomGamePlaceContainer AnimFadeIn",
+         children: [(0, Vq.jsx)("div", {
+           className: "BackgroundImage",
+           style: {
+             backgroundImage: `url(/textures/games/${Nq}/${aq.largePicture}.png)`
+           }
+         }), (0, Vq.jsx)("h1", {
+           className: "VisuallyHidden",
+           children: Eq(aq.title)
+         }), (0, Vq.jsx)("div", {
+           className: "CustomGamePlaceHeaderContainer",
+           children: (0, Vq.jsx)(cq.d, {
+             onClick: () => (0, uq.navigatePreserveSearch)("/"),
+             children: Eq("homePage:backToGames")
+           })
+ ... (12 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/213.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/213.js` (22 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723)

#### 1. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L5-L74` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/213.js#L4) · [Before (L5-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/213.js#L5-L74)

```diff
-   39339: (TT, kT, cT) => {
-     TT.exports = MT;
-     var lT = cT(350);
- 
-     function MT(TT, kT) {
-       if (!(this instanceof MT)) return new MT(TT, kT);
-       var cT = lT.create();
-       lT.add(cT, TT, kT), this.base = lT.min(lT.create(), TT, cT), this.vec = lT.clone(kT), this.max = lT.max(lT.create(), TT, cT), this.mag = lT.length(this.vec)
-     }
-     var KT = MT.prototype;
-     KT.width = function() {
-       return this.vec[0]
-     }, KT.height = function() {
-       return this.vec[1]
-     }, KT.depth = function() {
-       return this.vec[2]
- ... (54 more removed lines; see GitHub link above)
+   39024: (qq, Eq, gq) => {
```

#### 2. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L76-L77` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/213.js#L6-L7) · [Before (L76-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/213.js#L76-L77)

```diff
-       d: () => yT,
-       f: () => KT
+       b: () => Oq,
+       c: () => mq
```

#### 3. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L79-L84` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/213.js#L9-L10) · [Before (L79-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/213.js#L79-L84)

```diff
-     var lT = cT(4089);
-     let MT = null;
- 
-     function KT(TT) {
-       return null !== MT && TT === MT
-     }
+     var Yq = gq(31);
+     let lq = !1;
```

#### 4. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L87-L155` → after: `L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/213.js#L13) · [Before (L87-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/213.js#L87-L155)

```diff
-       this.HZ = !1, this.stopPropagation = !1, this.eZ = !1, this.disabled = !1
-     }
-     class yT {
-       constructor(TT, kT) {
-         this.version = "0.7.0";
-         var cT = Object.assign({}, new OT, kT || {});
-         this.element = TT || document, this.HZ = !!cT.HZ, this.stopPropagation = !!cT.stopPropagation, this.eZ = !!cT.eZ, this.disabled = !!cT.disabled, this.filterEvents = (TT, kT) => !0, this.ignoreEvent = TT => !1, this.down = new lT.EventEmitter, this.up = new lT.EventEmitter … [truncated]
-           dx: 0,
-           dy: 0,
-           vTT: 0,
-           tTT: 0,
-           hTT: 0
-         }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
-           lastX: 0,
-           lastY: 0,
-           currID: null
- ... (53 more removed lines; see GitHub link above)
+       return lq
```

#### 5. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L159-L167` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/213.js#L17) · [Before (L159-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/213.js#L159-L167)

```diff
-       let kT = !1;
-       for (let cT = 0; cT < TT.touches.length; ++cT)
-         if (TT.touches[cT].identifier === CT) {
-           kT = !0;
-           break
-         } if (!kT) {
-         const kT = TT.changedTouches[0];
-         IT = kT.clientX, AT = kT.clientY, CT = kT.identifier
-       }
+       lq !== qq && (lq = qq, Yq.i.TV("replayViewer|videoExportChanged"))
```

#### 6. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L170-L171` → after: `L39-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L39-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/213.js#L39-L41) · [Before (L170-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/213.js#L170-L171)

```diff
-     function tT(TT, kT) {
-       for (var cT = kT.changedTouches, lT = 0; lT < cT.length; ++lT) cT[lT].identifier === CT && (CT = null)
+     function uq() {
+       let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mq.k;
+       (0, Oq.f)(qq, xq)
```

#### 7. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L174-L179` → after: `L44-L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R44) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L44-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/213.js#L44-L45) · [Before (L174-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/213.js#L174-L179)

```diff
-     function hT(TT, kT, cT) {
-       if (!TT.ignoreEvent(cT)) try {
-         PT(TT, cT), kT && cT.isTrusted && !cT.repeat && TT._keyStates[cT.code] && wT(TT, cT.code)
-       } finally {
-         mT(cT.code, kT, TT, cT)
-       }
+     function Bq() {
+       (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mq.k).setItem(cq, !0)
```

#### 8. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L182-L197` → after: `L48-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R48) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L48-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/213.js#L48-L50) · [Before (L182-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/213.js#L182-L197)

```diff
-     function NT(TT, kT, cT) {
-       if (!TT.ignoreEvent(cT)) try {
-         PT(TT, cT)
-       } finally {
-         ! function(TT, kT, cT) {
-           if ("pointerId" in cT)
-             if (kT) {
-               if (null !== TT._touches.currID) return;
-               TT._touches.currID = cT.pointerId
-             } else {
-               if (TT._touches.currID !== cT.pointerId) return;
-               TT._touches.currID = null
-             } var lT = "button" in cT ? cT.button + 1 : 1;
-           mT("Mouse" + lT, kT, TT, cT)
-         }(TT, kT, cT)
-       }
+     function Wq() {
+       let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mq.k;
+       return (0, Oq.c)(qq, xq)
```

#### 9. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L200-L211` → after: `L53-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L53-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/213.js#L53-L61) · [Before (L200-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/213.js#L200-L211)

```diff
-     function QT(TT, kT) {
-       var cT = kT.movementX || kT.mozMovementX || 0,
-         lT = kT.movementY || kT.mozMovementY || 0;
-       if (kT.touches && 0 === (cT | lT)) {
-         var MT = function(TT) {
-           vT(TT);
-           for (let kT = 0; kT < TT.changedTouches.length; ++kT)
-             if (TT.changedTouches[kT].identifier == CT) {
-               const cT = TT.changedTouches[kT],
-                 lT = [cT.clientX - IT, cT.clientY - AT];
-               return IT = cT.clientX, AT = cT.clientY, lT
-             } return console.error(`Did not find touch id ${CT}`), [0, 0]
+     function Nq(qq) {
+       let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : mq.k;
+       const gq = (0, Oq.c)(Eq, xq),
+         uq = function(qq) {
+           const Eq = qq.getItem(Aq);
+           return "string" !== typeof Eq ? null : Eq
+         }(Eq),
+         Bq = function() {
+           return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mq.k).getItem(cq)
```

#### 10. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L213-L215` → after: `L63-L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L63-L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/213.js#L63-L73) · [Before (L213-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/213.js#L213-L215)

```diff
-         cT = MT[0], lT = MT[1]
-       }
-       TT.uZ.dx += cT, TT.uZ.dy += lT
+       let Wq;
+       return Wq = null !== gq && null !== uq && (0, Oq.d)(Eq, xq) && function(qq, Eq, gq) {
+           const lq = (0, Yq.Yb)(qq),
+             Oq = (0, Yq.Yb)(Eq),
+             mq = (0, Yq.Tb)(qq),
+             xq = (0, Yq.Tb)(Eq);
+           return !(lq !== Oq || !gq) || lq === Oq && mq === xq
+         }(uq, qq, Bq) ? gq : (0, lq.d)(), (0, Oq.h)(Eq, xq, Wq), Eq.setItem(Aq, qq),
+         function() {
+           (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : mq.k).removeItem(cq)
+         }(Eq), Wq
```

#### 11. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L219-L229` → after: `L86-L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L86-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/213.js#L86-L87) · [Before (L219-L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/213.js#L219-L229)

```diff
-       PT(TT, kT);
-       var cT = 1;
-       switch (kT.deltaMode) {
-         case 0:
-           cT = 1;
-           break;
-         case 1:
-           cT = 12;
-           break;
-         case 2:
-           cT = TT.element.clientHeight || window.innerHeight
+       return Yq = qq, lq = null, xq(Eq), () => {
+         Yq === qq && (Yq = null, lq = null)
```

#### 12. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L252-L283` → after: `L91-L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R91) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L91-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/213.js#L91-L93) · [Before (L252-L283)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/213.js#L252-L283)

```diff
-     function rT(TT, kT) {
-       for (var cT in TT._modifiersHeldThroughBlur = {}, aT) TT._keyStates[cT] && (TT._modifiersHeldThroughBlur[cT] = !0);
-       kT && kT.isTrusted && function() {
-         try {
-           return window.self !== window.top
-         } catch (TT) {
-           return !0
-         }
-       }() && (clearTimeout(TT._blurRelease), TT._blurRelease = setTimeout((function() {
-         if (!document.hasFocus())
-           for (var kT in TT._modifiersHeldThroughBlur = {}, TT._keyStates) TT._keyStates[kT] && !/^Mouse\d/.test(kT) && wT(TT, kT)
-       }), 0))
-     }
- 
-     function PT(TT, kT) {
-       var cT = TT._modifiersHeldThroughBlur;
- ... (16 more removed lines; see GitHub link above)
+     function mq() {
+       return null === lq ? null : {
+         ...lq
```

#### 13. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L312-L318` → after: `L98-L101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L98-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/213.js#L98-L101) · [Before (L312-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/213.js#L312-L318)

```diff
-       if (TT && "object" === typeof TT) {
-         var kT = TT.which || TT.keyCode || TT.charCode;
-         kT && (TT = kT)
-       }
-       if ("number" === typeof TT) return OT[TT];
-       var cT, KT = String(TT);
-       return (cT = lT[KT.toLowerCase()]) ? cT : (cT = MT[KT.toLowerCase()]) || (1 === KT.length ? KT.charCodeAt(0) : void 0)
+       var Eq;
+       null !== (Eq = Yq) && void 0 !== Eq && Eq(qq) && (lq = {
+         ...qq
+       })
```

#### 14. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L407` → after: `L104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/213.js#L104) · [Before (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/213.js#L407)

```diff
-   39320: (TT, kT, cT) => {
+   40440: (qq, Eq, gq) => {
```

#### 15. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L409` → after: `L106-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L106-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/213.js#L106-L107) · [Before (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/213.js#L409)

```diff
-       b: () => lT
+       c: () => lq,
+       g: () => Oq
```

#### 16. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L411-L482` → after: `L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/213.js#L109) · [Before (L411-L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/213.js#L411-L482)

```diff
-     class lT {
-       constructor() {
-         let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
-           kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
-         this.yG = !1, this.xG = !1, this.xJ = 30, this.nH = 0, this.vG = 100, this.Zh = !1, this.fullscreen = !1, this.pN = function(TT) {}, this.hG = function(TT, kT, cT) {}, this.rG = function() {}, this.zN = function() {}, this.QG = function() {}, this.onFullscreenChanged = fu … [truncated]
-           function(TT) {
-             if ("loading" === document.readyState) {
-               var kT = () => {
-                 document.removeEventListener("readystatechange", kT), TT()
-               };
-               document.addEventListener("readystatechange", kT)
-             } else setTimeout(TT, 0)
-           }((() => {
-             ! function(TT) {
-               var kT = TT._data,
-                 cT = kT.nowObject.now();
- ... (56 more removed lines; see GitHub link above)
+     let Yq = null;
```

#### 17. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L484-L486` → after: `L111-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L111-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/213.js#L111-L115) · [Before (L484-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/213.js#L484-L486)

```diff
-     function MT() {
-       let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
-       this.nowObject = performance || Date, this.pollTime = TT, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
+     function lq(qq, Eq) {
+       Yq = {
+         conn: qq,
+         reason: Eq
+       }
```

#### 18. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L492-L522` → after: `L119-L121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L119-L121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/213.js#L119-L121) · [Before (L492-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/213.js#L492-L522)

```diff
-       for (var kT = TT._data, cT = 1e3 / TT.xJ, lT = kT.nowObject.now() + OT, MT = 0; kT.nowObject.now() >= kT.lastTickStarted + cT && kT.nowObject.now() < lT && ++MT <= KT;) TT.pN(cT), kT.lastTickStarted += cT;
-       var yT = 5 * (cT + 5),
-         fT = kT.nowObject.now();
-       if (fT - kT.lastTickStarted > yT)
-         for (; fT >= kT.lastTickStarted + cT;) kT.lastTickStarted += cT
-     }
-   },
-   36517: (TT, kT, cT) => {
-     cT.d(kT, {
-       e: () => OT
-     });
-     var lT = cT(71);
-     const MT = lT.useLayoutEffect;
-     const KT = function(TT) {
-       var kT = (0, lT.useRef)(TT);
-       return MT((function() {
- ... (15 more removed lines; see GitHub link above)
+       var Eq;
+       const gq = (null === (Eq = Yq) || void 0 === Eq ? void 0 : Eq.conn) === qq ? Yq.reason : null;
+       return Yq = null, gq
```

#### 19. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L525-L709` → after: `L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/213.js#L124) · [Before (L525-L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/213.js#L525-L709)

```diff
-   36409: TT => {
-     var kT, cT = "undefined" !== typeof window ? window.navigator.userAgent : "",
-       lT = /OS X/.test(cT),
-       MT = /Opera/.test(cT),
-       KT = !/like Gecko/.test(cT) && !MT,
-       OT = TT.exports = {
-         0: lT ? "<menu>" : "<UNK>",
-         1: "<mouse 1>",
-         2: "<mouse 2>",
-         3: "<break>",
-         4: "<mouse 3>",
-         5: "<mouse 4>",
-         6: "<mouse 5>",
-         8: "<backspace>",
-         9: "<tab>",
-         12: "<clear>",
- ... (169 more removed lines; see GitHub link above)
+   40415: (qq, Eq, gq) => {
```

#### 20. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L712-L877` → after: `L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/213.js#L127) · [Before (L712-L877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/213.js#L712-L877)

```diff
-       i: () => KT,
-       l: () => OT,
-       p: () => yT
-     });
-     var lT = cT(37093);
-     class MT {
-       constructor(TT, kT, cT) {
-         this.gradient = TT, this.color1 = kT, this.color2 = cT
-       }
-       getColorToRef(TT) {
-         this.color2 ? lT.g.LerpToRef(this.color1, this.color2, Math.random(), TT) : TT.UkT(this.color1)
-       }
-     }
-     class KT {
-       constructor(TT, kT) {
-         this.gradient = TT, this.color = kT
- ... (150 more removed lines; see GitHub link above)
+       h: () => lq
```

#### 21. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L879-L966` → after: `L129-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L129-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/213.js#L129-L135) · [Before (L879-L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/213.js#L879-L966)

```diff
-     var lT = cT(36892),
-       MT = cT(36937),
-       KT = cT(38507);
-     class OT {
-       constructor() {
-         let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
-           kT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
-           cT = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
-           MT = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
-         this.radius = TT, this.height = kT, this.radiusRange = cT, this.directionRandomizer = MT, this._tempVector = lT.m.Zero()
-       }
-       startDirectionFunction(TT, kT, cT, KT, OT) {
-         cT.position.subtractToRef(TT.getTranslation(), this._tempVector), this._tempVector.normalize(), lT.m.TransformNormalToRef(this._tempVector, OT, this._tempVector);
-         const yT = (0, MT.RandomRange)(-this.directionRandomizer / 2, this.directionRandomizer / 2);
-         let fT = Math.atan2(this._tempVector.x, this._tempVector.z);
-         fT += (0, MT.RandomRange)(-Math.PI / 2, Math.PI / 2) * this.directionRandomizer, this._tempVector.y = yT, this._tempVector.x = Math.sin(fT), this._tempVector.z = Math.cos(fT), this._tempVector.normalize(), KT ? kT.UkT(this._tempVector) : lT.m.TransformNormalFromFloatsToRe … [truncated]
- ... (72 more removed lines; see GitHub link above)
+     let Yq = {
+       fire: () => {},
+       close: () => {}
+     };
+ 
+     function lq(qq) {
+       Yq = qq
```

#### 22. `bundles/bloxd.io/chunks/js/213.js` (Changed code · before: `L968-L1191` → after: `L137-L139`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723R137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-1f2e84e04e6a3d505132fccf031a653fb778daaee989c9340db1ffc3f1e91723) · [After (L137-L139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/213.js#L137-L139) · [Before (L968-L1191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/213.js#L968-L1191)

```diff
-   },
-   38616: (TT, kT, cT) => {
-     cT.d(kT, {
-       d: () => AT
-     });
-     const lT = .5 * (Math.sqrt(3) - 1),
-       MT = (3 - Math.sqrt(3)) / 6,
-       KT = 1 / 3,
-       OT = 1 / 6,
-       yT = (Math.sqrt(5) - 1) / 4,
-       fT = (5 - Math.sqrt(5)) / 20,
-       xT = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
-       IT = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0,  … [truncated]
-     const AT = class {
-       constructor() {
-         let TT = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
- ... (208 more removed lines; see GitHub link above)
+ 
+     function Oq() {
+       return Yq
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/214.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/214.js` (63 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352)

#### 1. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L4-L45` → after: `L5-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L5-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L5-L7) · [Before (L4-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L4-L45)

```diff
-   40697: (TT, kT, cT) => {
-     cT.r(kT), cT.d(kT, {
-       LobbyManageView: () => Dk
-     });
-     var lT = cT(71),
-       MT = cT(1497),
-       KT = cT(2462),
-       OT = cT(2485),
-       yT = cT(2487),
-       fT = cT(36383);
- 
-     function xT() {
-       const [TT, kT] = (0, lT.useState)(new Map);
-       return {
-         get: kT => TT.get(kT),
-         hold: (0, lT.useCallback)(((TT, cT, lT) => {
- ... (26 more removed lines; see GitHub link above)
+   39476: (qq, Eq, gq) => {
+     qq.exports = lq;
+     var Yq = gq(317);
```

#### 2. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L48-L54` → after: `L10-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L10-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L10-L12) · [Before (L48-L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L48-L54)

```diff
-       const cT = TT.banned.map((TT => TT.name)),
-         lT = new Set(cT);
-       return {
-         here: DT(TT.here, kT, TT.roles.map((TT => TT.role))),
-         away: TT.away.filter((TT => !lT.has(TT.name))).map((TT => TT.name)),
-         banned: cT
-       }
+       if (!(this instanceof lq)) return new lq(qq, Eq);
+       var gq = Yq.create();
+       Yq.add(gq, qq, Eq), this.base = Yq.min(Yq.create(), qq, gq), this.vec = Yq.clone(Eq), this.max = Yq.max(Yq.create(), qq, gq), this.mag = Yq.length(this.vec)
```

#### 3. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L56-L95` → after: `L14-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L14-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L14-L51) · [Before (L56-L95)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L56-L95)

```diff
- 
-     function FT(TT, kT) {
-       const cT = TT.here.find((TT => TT.name === kT));
-       if (cT) return {
-         section: "here",
-         player: cT
-       };
-       const lT = TT.banned.find((TT => TT.name === kT));
-       if (lT) return {
-         section: "banned",
-         bannedAt: lT.at
-       };
-       const MT = TT.away.find((TT => TT.name === kT));
-       return MT ? {
-         section: "away",
-         player: MT
- ... (24 more removed lines; see GitHub link above)
+     var Oq = lq.prototype;
+     Oq.width = function() {
+       return this.vec[0]
+     }, Oq.height = function() {
+       return this.vec[1]
+     }, Oq.depth = function() {
+       return this.vec[2]
+     }, Oq.x0 = function() {
+       return this.base[0]
+     }, Oq.y0 = function() {
+       return this.base[1]
+     }, Oq.z0 = function() {
+       return this.base[2]
+     }, Oq.x1 = function() {
+       return this.max[0]
+     }, Oq.y1 = function() {
+ ... (22 more added lines; see GitHub link above)
```

#### 4. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L97-L101` → after: `L53-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L53-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L53-L71) · [Before (L97-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L97-L101)

```diff
- 
-     function oT(TT, kT, cT, lT, MT) {
-       return MT - lT < 6e4 ? TT(`${cT}JustNow`) : TT(cT, {
-         time: (0, zT._)((0, CT.k)(kT, cT), lT, MT)
-       })
+   },
+   39468: qq => {
+     qq.exports = function(qq, Eq, gq, Yq, lq, Oq) {
+       var mq = +Eq[0],
+         xq = +Eq[1],
+         Aq = +Eq[2],
+         cq = +gq[0],
+         uq = +gq[1],
+         Bq = +gq[2],
+         Wq = Math.sqrt(cq * cq + uq * uq + Bq * Bq);
+       if (0 === Wq) throw new Error("Can't raycast along a zero vector");
+       return function(qq, Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq) {
+         for (var uq = 0, Bq = Math.floor, Wq = 0 | Bq(Eq), Nq = 0 | Bq(gq), aq = 0 | Bq(Yq), Vq = lq > 0 ? 1 : -1, dq = Oq > 0 ? 1 : -1, jq = mq > 0 ? 1 : -1, Hq = Math.abs(1 / lq), oq = Math.abs(1 / Oq), Pq = Math.abs(1 / mq), Qq = Hq < 1 / 0 ? Hq * (Vq > 0 ? Wq + 1 - Eq : Eq -  … [truncated]
+           var vq = qq(Wq, Nq, aq);
+           if (vq) return Aq && (Aq[0] = Eq + uq * lq, Aq[1] = gq + uq * Oq, Aq[2] = Yq + uq * mq), cq && (cq[0] = cq[1] = cq[2] = 0, 0 === rq && (cq[0] = -Vq), 1 === rq && (cq[1] = -dq), 2 === rq && (cq[2] = -jq)), vq;
+           Qq < yq ? Qq < tq ? (Wq += Vq, uq = Qq, Qq += Hq, rq = 0) : (aq += jq, uq = tq, tq += Pq, rq = 2) : yq < tq ? (Nq += dq, uq = yq, yq += oq, rq = 1) : (aq += jq, uq = tq, tq += Pq, rq = 2)
+ ... (3 more added lines; see GitHub link above)
```

#### 5. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L103-L105` → after: `L73-L80`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L73-L80)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L73-L80) · [Before (L103-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L103-L105)

```diff
-     var HT = cT(1921),
-       eT = cT(1692),
-       GT = cT(1099);
+   },
+   39064: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       c: () => xq,
+       g: () => Oq
+     });
+     var Yq = gq(3933);
+     let lq = null;
```

#### 6. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L108-L118` → after: `L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L83) · [Before (L108-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L108-L118)

```diff
-       let {
-         status: kT
-       } = TT;
-       return (0, GT.jsx)("span", {
-         className: AT()("LobbyManageStatus", {
-           LobbyManageStatusRefused: !kT.ok
-         }),
-         children: (0, GT.jsx)(HT.b, {
-           text: kT.text
-         })
-       })
+       return null !== lq && qq === lq
```

#### 7. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L121-L158` → after: `L86-L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L86-L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L86-L87) · [Before (L121-L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L121-L158)

```diff
-     function ET(TT) {
-       let {
-         names: kT,
-         cap: cT,
-         filterFrom: MT,
-         moreLabel: KT,
-         reveal: OT = null,
-         renderRow: yT
-       } = TT;
-       const {
-         t: fT
-       } = (0, CT.B)(), [xT, IT] = (0, lT.useState)(!1), [AT, vT] = (0, lT.useState)(""), hT = xT || null !== OT && kT.indexOf(OT) >= cT, NT = (hT || kT.length <= cT) && null !== MT && kT.length > MT, QT = AT.trim().toLowerCase();
-       let ST = hT ? kT : kT.slice(0, cT);
-       return NT && "" !== QT && (ST = ST.filter((TT => TT.toLowerCase().includes(QT)))), (0, GT.jsxs)(GT.Fragment, {
-         children: [NT && (0, GT.jsx)(eT.b, {
-           className: "LobbyManageFilter",
- ... (22 more removed lines; see GitHub link above)
+     function mq() {
+       this.IK = !1, this.stopPropagation = !1, this.gC = !1, this.disabled = !1
```

#### 8. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L160-L206` → after: `L89-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L89-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L89-L106) · [Before (L160-L206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L160-L206)

```diff
- 
-     function ZT(TT) {
-       let {
-         value: kT,
-         placeholder: cT,
-         ariaLabel: MT,
-         maxLength: KT,
-         wide: OT = !1,
-         onSave: yT
-       } = TT;
-       const fT = (0, lT.useRef)(null),
-         [xT, IT] = (0, lT.useState)(0),
-         CT = (0, lT.useRef)(!0),
-         jT = (0, lT.useRef)(null),
-         vT = (0, lT.useRef)({
-           value: kT,
- ... (31 more removed lines; see GitHub link above)
+     class xq {
+       constructor(qq, Eq) {
+         this.version = "0.7.0";
+         var gq = Object.assign({}, new mq, Eq || {});
+         this.element = qq || document, this.IK = !!gq.IK, this.stopPropagation = !!gq.stopPropagation, this.gC = !!gq.gC, this.disabled = !!gq.disabled, this.filterEvents = (qq, Eq) => !0, this.ignoreEvent = qq => !1, this.down = new Yq.EventEmitter, this.up = new Yq.EventEmitter … [truncated]
+           dx: 0,
+           dy: 0,
+           hEq: 0,
+           nEq: 0,
+           bEq: 0
+         }, this.pressCount = {}, this.releaseCount = {}, this._keyBindmap = {}, this._keyStates = {}, this._bindPressCount = {}, this._touches = {
+           lastX: 0,
+           lastY: 0,
+           currID: null
+         }, "loading" !== document.readyState ? cq(this) : document.addEventListener("DOMContentLoaded", (qq => {
+           cq(this)
+ ... (2 more added lines; see GitHub link above)
```

#### 9. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L208-L249` → after: `L108-L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L108-L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L108-L120) · [Before (L208-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L208-L249)

```diff
-       })
-     }
-     const uT = ["mod", "coOwner"],
-       XT = {
-         coOwner: "lobbyManage:roleCanCoOwner",
-         mod: "lobbyManage:roleCanMod",
-         coder: "lobbyManage:roleCanCoder",
-         builder: "lobbyManage:roleCanBuilder"
-       };
- 
-     function dT(TT) {
-       var kT, cT, KT;
-       let {
-         name: OT,
-         place: yT,
-         openedIn: fT,
- ... (26 more removed lines; see GitHub link above)
+       }
+       bind(qq) {
+         for (var Eq = arguments.length, gq = new Array(Eq > 1 ? Eq - 1 : 0), Yq = 1; Yq < Eq; Yq++) gq[Yq - 1] = arguments[Yq];
+         gq.forEach((Eq => {
+           var gq = this._keyBindmap[Eq] || [];
+           gq.includes(qq) || (gq.push(qq), this._keyBindmap[Eq] = gq)
+         })), this.state[qq] = !!this.state[qq], this.pressCount[qq] = this.pressCount[qq] || 0, this.releaseCount[qq] = this.releaseCount[qq] || 0
+       }
+       unbind(qq) {
+         for (var Eq in this._keyBindmap) {
+           var gq = this._keyBindmap[Eq],
+             Yq = gq.indexOf(qq);
+           Yq > -1 && gq.splice(Yq, 1)
```

#### 10. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L251-L287` → after: `L122-L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R122) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L122-L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L122-L128) · [Before (L251-L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L251-L287)

```diff
-       }(yT, null !== aT.gamemodes), HT = AT.statusOf(FT), eT = AT.isPending(FT), ET = xT(), ZT = Date.now(), dT = TT => {
-         var kT, cT;
-         return null !== (kT = null === (cT = (TT => aT.roles.find((kT => kT.role === TT)))(TT)) || void 0 === cT ? void 0 : cT.label) && void 0 !== kT ? kT : TT
-       }, LT = TT => {
-         const kT = XT[TT];
-         return void 0 === kT ? void 0 : hT(kT)
-       }, RT = "here" === yT.section || "away" === yT.section ? yT.player : null, gT = "here" === yT.section ? yT.player.id : null, {
-         playerSocialPreview: UT,
-         isFriend: YT
-       } = null === gT ? {
-         playerSocialPreview: (0, mT.g)(OT, null),
-         isFriend: !1
-       } : (0, wT.c)(gT, OT), BT = function() {
-         AT.send(...arguments)
-       }, WT = (TT, kT) => {
-         ET.hold("role", TT, AT.send({
- ... (21 more removed lines; see GitHub link above)
+       }
+       getBindings() {
+         var qq = {};
+         for (var Eq in this._keyBindmap) {
+           this._keyBindmap[Eq].forEach((gq => {
+             qq[gq] = qq[gq] || [], qq[gq].push(Eq)
+           }))
```

#### 11. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L289-L440` → after: `L130-L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L130-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L130-L134) · [Before (L289-L440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L289-L440)

```diff
-       } else "banned" === yT.section ? null !== yT.bannedAt && (nT = oT(hT, NT.code, "lobbyManage:bannedAgo", yT.bannedAt, ZT)) : "banned" === fT && (nT = hT("lobbyManageEntry:unbanned"));
-       return (0, GT.jsx)("div", {
-         className: "LobbyManagePlayerRow",
-         "data-lobby-manage-row": OT,
-         children: (0, GT.jsxs)(PT.h, {
-           playerSocialPreview: UT,
-           isFriend: YT,
-           status: nT,
-           opensProfileCard: !IT && (0, wT.g)(!0, OT, vT),
-           zIndex: tT,
-           children: [null !== QT && (0, GT.jsxs)("div", {
-             className: "LobbyManageButtons",
-             children: ["ban" === QT.kind && (0, GT.jsxs)(ST.I, {
-               className: "LobbyManageIconButton SmallTextLight",
-               analyticsClick: {
-                 id: "lobby_manage.ban",
- ... (136 more removed lines; see GitHub link above)
+         return qq
+       }
+       SB() {
+         Aq(this.lC), Aq(this.pressCount), Aq(this.releaseCount)
+       }
```

#### 12. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L444-L581` → after: `L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L138) · [Before (L444-L581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L444-L581)

```diff
-       var kT, cT, MT, KT;
-       let {
-         manage: OT,
-         focusRequest: yT,
-         onFocused: fT
-       } = TT;
-       const {
-         t: xT
-       } = (0, CT.B)(), IT = (0, QT.h)("players"), AT = (0, QT.h)("hiddenPlayerNames"), vT = (0, lT.useRef)(null), {
-         state: hT
-       } = OT, NT = null === IT.localId ? null : null !== (kT = null === (cT = IT.byId[IT.localId]) || void 0 === cT ? void 0 : cT.name) && void 0 !== kT ? kT : null, [DT] = (0, lT.useState)((() => aT(hT, NT))), rT = function(TT, kT, cT) {
-         const lT = new Set([...TT.here, ...TT.away, ...TT.banned]),
-           MT = aT(kT, cT),
-           KT = kT => {
-             const cT = MT[kT].filter((TT => !lT.has(TT)));
-             for (const TT of cT) lT.add(TT);
- ... (122 more removed lines; see GitHub link above)
+       for (var Eq in qq) qq[Eq] = 0
```

#### 13. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L594-L596` → after: `L142-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L142-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L142-L148) · [Before (L594-L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L594-L596)

```diff
-       const kT = new Set;
-       for (const cT of TT) kT.add(cT.toLowerCase());
-       return kT
+       window.addEventListener("keydown", dq.bind(null, qq, !0), !1), window.addEventListener("keyup", dq.bind(null, qq, !1), !1);
+       var Eq = {
+         passive: !0
+       };
+       qq.element.addEventListener("touchstart", Nq.bind(void 0, qq), {
+         passive: !1
+       }), qq.element.addEventListener("touchend", Vq.bind(void 0, qq), Eq), qq.element.addEventListener("mousedown", jq.bind(null, qq, !0), Eq), window.document.addEventListener("mouseup", jq.bind(null, qq, !1), Eq), qq.element.addEventListener("touchmove", Hq.bind(null, qq), Eq) … [truncated]
```

#### 14. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L599-L710` → after: `L154-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L154-L155) · [Before (L599-L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L599-L710)

```diff
-     function sT(TT) {
-       var kT, cT;
-       let {
-         state: MT,
-         lobbyName: KT,
-         listed: OT,
-         isListed: yT,
-         pN: fT,
-         uF: xT,
-         statusOf: IT
-       } = TT;
-       const {
-         t: AT,
-         selectedLanguage: jT
-       } = (0, CT.B)(), vT = (0, gT.n)(), hT = (0, QT.h)("players"), NT = null === hT.localId ? null : null !== (kT = null === (cT = hT.byId[hT.localId]) || void 0 === cT ? void 0 : cT.name) && void 0 !== kT ? kT : null, ST = (0, lT.useMemo)((() => (0, WT.i)(vT.friends, KT, MT.her … [truncated]
-         let {
- ... (96 more removed lines; see GitHub link above)
+     function Nq(qq, Eq) {
+       Eq.preventDefault(), aq(Eq)
```

#### 15. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L714-L774` → after: `L159-L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L159-L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L159-L167) · [Before (L714-L774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L714-L774)

```diff
-       let {
-         manage: kT,
-         listing: cT
-       } = TT;
-       const {
-         t: lT
-       } = (0, CT.B)(), KT = (TT, cT) => ((0, MT.reportAnalyticsClick)({
-         id: "lobby_manage.set_listing",
-         value: TT
-       }), kT.send({
-         type: "setListing",
-         field: TT,
-         value: cT
-       }, `listing:${TT}`)), OT = TT => {
-         const cT = kT.statusOf(`listing:${TT}`);
-         return cT && !cT.ok && (0, GT.jsx)("div", {
- ... (45 more removed lines; see GitHub link above)
+       let Eq = !1;
+       for (let gq = 0; gq < qq.touches.length; ++gq)
+         if (qq.touches[gq].identifier === Wq) {
+           Eq = !0;
+           break
+         } if (!Eq) {
+         const Eq = qq.changedTouches[0];
+         uq = Eq.clientX, Bq = Eq.clientY, Wq = Eq.identifier
+       }
```

#### 16. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L777-L819` → after: `L170-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R170) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L170-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L170-L171) · [Before (L777-L819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L777-L819)

```diff
-     function kk(TT) {
-       let {
-         value: kT,
-         ariaLabel: cT,
-         onSave: MT
-       } = TT;
-       const KT = (0, lT.useRef)(null),
-         OT = (0, lT.useRef)({
-           value: kT,
-           onSave: MT
-         });
-       OT.current = {
-         value: kT,
-         onSave: MT
-       };
-       const yT = (0, lT.useRef)(null),
- ... (27 more removed lines; see GitHub link above)
+     function Vq(qq, Eq) {
+       for (var gq = Eq.changedTouches, Yq = 0; Yq < gq.length; ++Yq) gq[Yq].identifier === Wq && (Wq = null)
```

#### 17. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L822-L837` → after: `L174-L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L174-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L174-L179) · [Before (L822-L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L822-L837)

```diff
-     function ck(TT) {
-       let {
-         manage: kT
-       } = TT;
-       const {
-         lobbyName: cT,
-         shownLobbyName: lT
-       } = (0, QT.h)("connectedGame");
-       return kT.state.you.canSetVisibility && null !== cT ? (0, GT.jsx)(Mk, {
-         manage: kT,
-         lobbyName: cT,
-         worldCode: null !== lT && void 0 !== lT ? lT : cT
-       }, cT) : (0, GT.jsx)(Kk, {
-         manage: kT,
-         lobbyName: null !== cT && void 0 !== cT ? cT : ""
-       })
+     function dq(qq, Eq, gq) {
+       if (!qq.ignoreEvent(gq)) try {
+         rq(qq, gq), Eq && gq.isTrusted && !gq.repeat && qq._keyStates[gq.code] && vq(qq, gq.code)
+       } finally {
+         hq(gq.code, Eq, qq, gq)
+       }
```

#### 18. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L840-L841` → after: `L182-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L182-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L182-L197) · [Before (L840-L841)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L840-L841)

```diff
-     function lk(TT) {
-       return TT.map((TT => TT.toLowerCase())).sort().join(",")
+     function jq(qq, Eq, gq) {
+       if (!qq.ignoreEvent(gq)) try {
+         rq(qq, gq)
+       } finally {
+         ! function(qq, Eq, gq) {
+           if ("pointerId" in gq)
+             if (Eq) {
+               if (null !== qq._touches.currID) return;
+               qq._touches.currID = gq.pointerId
+             } else {
+               if (qq._touches.currID !== gq.pointerId) return;
+               qq._touches.currID = null
+             } var Yq = "button" in gq ? gq.button + 1 : 1;
+           hq("Mouse" + Yq, Eq, qq, gq)
+         }(qq, Eq, gq)
+       }
```

#### 19. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L844-L982` → after: `L200-L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L200-L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L200-L215) · [Before (L844-L982)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L844-L982)

```diff
-     function Mk(TT) {
-       var kT;
-       let {
-         manage: cT,
-         lobbyName: KT,
-         worldCode: OT
-       } = TT;
-       const {
-         t: yT
-       } = (0, CT.B)(), {
-         settings: fT,
-         loading: xT,
-         change: IT,
-         retry: AT,
-         refresh: jT
-       } = (0, UT.i)(KT), hT = (0, gT.n)(), {
- ... (123 more removed lines; see GitHub link above)
+     function Hq(qq, Eq) {
+       var gq = Eq.movementX || Eq.mozMovementX || 0,
+         Yq = Eq.movementY || Eq.mozMovementY || 0;
+       if (Eq.touches && 0 === (gq | Yq)) {
+         var lq = function(qq) {
+           aq(qq);
+           for (let Eq = 0; Eq < qq.changedTouches.length; ++Eq)
+             if (qq.changedTouches[Eq].identifier == Wq) {
+               const gq = qq.changedTouches[Eq],
+                 Yq = [gq.clientX - uq, gq.clientY - Bq];
+               return uq = gq.clientX, Bq = gq.clientY, Yq
+             } return console.error(`Did not find touch id ${Wq}`), [0, 0]
+         }(Eq);
+         gq = lq[0], Yq = lq[1]
+       }
+       qq.lC.dx += gq, qq.lC.dy += Yq
```

#### 20. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L985-L1053` → after: `L218-L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L218-L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L218-L231) · [Before (L985-L1053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L985-L1053)

```diff
-     function Kk(TT) {
-       var kT;
-       let {
-         manage: cT,
-         lobbyName: lT
-       } = TT;
-       const {
-         t: KT
-       } = (0, CT.B)(), {
-         state: OT
-       } = cT, yT = xT(), fT = null !== (kT = OT.whitelist) && void 0 !== kT ? kT : [];
-       return (0, GT.jsxs)("div", {
-         className: "LobbyManagePage",
-         children: [(0, GT.jsxs)("div", {
-           className: "LobbyManageBox",
-           children: [(0, GT.jsx)(tT.c, {
- ... (53 more removed lines; see GitHub link above)
+     function oq(qq, Eq) {
+       rq(qq, Eq);
+       var gq = 1;
+       switch (Eq.deltaMode) {
+         case 0:
+           gq = 1;
+           break;
+         case 1:
+           gq = 12;
+           break;
+         case 2:
+           gq = qq.element.clientHeight || window.innerHeight
+       }
+       qq.lC.hEq += (Eq.deltaX || 0) * gq, qq.lC.nEq += (Eq.deltaY || 0) * gq, qq.lC.bEq += (Eq.deltaZ || 0) * gq
```

#### 21. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L1167-L1217` → after: `L234-L235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L234-L235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L234-L235) · [Before (L1167-L1217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L1167-L1217)

```diff
-     function Ik(TT) {
-       let {
-         names: kT,
-         pending: cT,
-         onAction: MT
-       } = TT;
-       const {
-         t: KT
-       } = (0, CT.B)(), OT = (0, lT.useRef)(null), [yT, fT] = (0, lT.useState)(""), xT = () => {
-         const TT = yT.trim();
-         "" !== TT && (MT(TT, "add"), OT.current && (OT.current.value = ""), fT(""))
-       };
-       return (0, GT.jsxs)("div", {
-         className: "LobbyManageNames",
-         children: [kT.map((TT => (0, GT.jsxs)("div", {
-           className: "LobbyManageName",
- ... (35 more removed lines; see GitHub link above)
+     function Pq(qq, Eq) {
+       if (!qq.gC) return Eq.preventDefault(), !1
```

#### 22. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L1219-L1225` → after: `L237-L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L237-L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L237-L246) · [Before (L1219-L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L1219-L1225)

```diff
-     const Ak = [{
-       group: "gameplay",
-       title: "lobbyManage:gameplay"
-     }, {
-       group: "world",
-       title: "lobbyManage:world"
-     }];
+     var Qq = {
+       AltLeft: "altKey",
+       AltRight: "altKey",
+       ControlLeft: "ctrlKey",
+       ControlRight: "ctrlKey",
+       ShiftLeft: "shiftKey",
+       ShiftRight: "shiftKey",
+       MetaLeft: "metaKey",
+       MetaRight: "metaKey"
+     };
```

#### 23. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L1227-L1233` → after: `L248-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L248-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L248-L249) · [Before (L1227-L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L1227-L1233)

```diff
-     function Ck(TT) {
-       return Ak.flatMap((kT => {
-         let {
-           group: cT
-         } = kT;
-         return TT.filter((TT => TT.group === cT && void 0 === TT.parent))
-       }))
+     function yq(qq, Eq) {
+       return !!qq[Qq[Eq]] || ("AltRight" === Eq || "ControlLeft" === Eq) && "function" === typeof qq.getModifierState && !0 === qq.getModifierState("AltGraph")
```

#### 24. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L1236-L1324` → after: `L252-L258`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L252-L258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L252-L258) · [Before (L1236-L1324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L1236-L1324)

```diff
-     function jk(TT) {
-       let {
-         manage: kT,
-         rowsShown: cT
-       } = TT;
-       const {
-         t: KT
-       } = (0, CT.B)(), OT = (0, QT.h)("hiddenPlayerNames"), {
-         rules: yT
-       } = kT.state, fT = xT(), IT = new Set(Ck(yT).slice(0, cT)), AT = TT => {
-         const kT = fT.get(TT.key);
-         return void 0 === kT ? TT.value : kT
-       }, {
-         hold: jT
-       } = fT, vT = (0, lT.useCallback)(((TT, cT) => {
-         (0, MT.reportAnalyticsClick)({
- ... (73 more removed lines; see GitHub link above)
+     function tq(qq, Eq) {
+       for (var gq in qq._modifiersHeldThroughBlur = {}, Qq) qq._keyStates[gq] && (qq._modifiersHeldThroughBlur[gq] = !0);
+       Eq && Eq.isTrusted && function() {
+         try {
+           return window.self !== window.top
+         } catch (qq) {
+           return !0
```

#### 25. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L1326-L1353` → after: `L260-L264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L260-L264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L260-L264) · [Before (L1326-L1353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L1326-L1353)

```diff
-       },
-       tk = 5,
-       hk = (0, lT.memo)((function(TT) {
-         let {
-           page: kT,
-           manage: cT,
-           leaderboard: MT,
-           focusRequest: KT,
-           onFocused: OT,
-           ruleRowsShown: yT
-         } = TT;
-         return "leaderboard" === kT ? (0, GT.jsx)(lT.Suspense, {
-           fallback: (0, GT.jsx)("div", {
-             className: "LobbyManageLoading",
-             children: (0, GT.jsx)(vT.d, {})
-           }),
- ... (12 more removed lines; see GitHub link above)
+       }() && (clearTimeout(qq._blurRelease), qq._blurRelease = setTimeout((function() {
+         if (!document.hasFocus())
+           for (var Eq in qq._modifiersHeldThroughBlur = {}, qq._keyStates) qq._keyStates[Eq] && !/^Mouse\d/.test(Eq) && vq(qq, Eq)
+       }), 0))
+     }
```

#### 26. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L1355-L1369` → after: `L266-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L266-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L266-L269) · [Before (L1355-L1369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L1355-L1369)

```diff
-     function Nk(TT) {
-       let {
-         page: kT
-       } = TT;
-       const {
-         t: cT
-       } = (0, CT.B)(), lT = vk[kT];
-       return (0, GT.jsxs)(GT.Fragment, {
-         children: [(0, GT.jsx)(jT.e, {
-           name: lT.icon
-         }), " ", (0, GT.jsx)("span", {
-           className: "LobbyManagePageTitle",
-           children: cT(lT.title)
-         })]
-       })
+     function rq(qq, Eq) {
+       var gq = qq._modifiersHeldThroughBlur;
+       if (gq && Eq.isTrusted && document.hasFocus())
+         for (var Yq in gq) delete gq[Yq], qq._keyStates[Yq] && Yq !== Eq.code && (yq(Eq, Yq) || vq(qq, Yq))
```

#### 27. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L1372-L1470` → after: `L272-L276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R272) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L272-L276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L272-L276) · [Before (L1372-L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L1372-L1470)

```diff
-     function Qk(TT) {
-       var kT;
-       const {
-         t: cT
-       } = (0, CT.B)(), {
-         pages: KT,
-         landing: OT
-       } = TT, fT = (0, lT.useRef)(null), xT = (0, lT.useRef)(null), IT = (0, lT.useRef)(null), jT = (0, lT.useRef)(new Map), [vT, QT] = (0, lT.useState)(null), ST = (0, lT.useRef)(vT), DT = (0, lT.useRef)(0), [aT, FT] = (0, lT.useState)(KT[0]), rT = null !== vT && void 0 !== vT ? … [truncated]
-         const [cT, MT] = (0, lT.useState)(TT), KT = cT >= kT;
-         return KT && cT !== 1 / 0 && MT(1 / 0), (0, lT.useLayoutEffect)((() => {
-           if (KT) return;
-           let TT = !0;
-           return (0, NT.e)().then((() => {
-             TT && MT((TT => TT + 1))
-           })), () => {
-             TT = !1
- ... (83 more removed lines; see GitHub link above)
+     function vq(qq, Eq) {
+       const gq = {
+           code: Eq,
+           preventDefault: () => {},
+           stopPropagation: () => {}
```

#### 28. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L1472-L1522` → after: `L278-L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L278-L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L278-L284) · [Before (L1472-L1522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L1472-L1522)

```diff
-         children: [KT.length > 1 && (0, GT.jsx)("div", {
-           ref: IT,
-           className: "LobbyManageChips",
-           children: (0, GT.jsx)(hT.d, {
-             options: KT.map((TT => ({
-               value: TT,
-               label: (0, GT.jsx)(Nk, {
-                 page: TT
-               }),
-               ariaLabel: cT(vk[TT].title)
-             }))),
-             value: rT,
-             padTabs: "2",
-             ariaLabel: cT("lobbyManageEntry:manageLobby"),
-             reselectable: !0,
-             onChange: XT
- ... (35 more removed lines; see GitHub link above)
+         Yq = lq;
+       lq = gq;
+       try {
+         hq(Eq, !1, qq, gq)
+       } finally {
+         lq = Yq
+       }
```

#### 29. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L1525-L1529` → after: `L287-L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L287-L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L287-L303) · [Before (L1525-L1529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L1525-L1529)

```diff
-     function Sk(TT) {
-       return void 0 === (null === TT || void 0 === TT ? void 0 : TT.page) ? null : {
-         page: TT.page,
-         seq: TT.seq
-       }
+     function hq(qq, Eq, gq, Yq) {
+       var lq = gq._keyBindmap[qq];
+       lq && (nq(gq._keyStates[qq], Eq) && (gq._keyStates[qq] = Eq, lq.forEach((qq => {
+         (!gq.filterEvents || gq.filterEvents(Yq, qq)) && function(qq, Eq, gq, Yq) {
+           var lq = Eq ? gq.pressCount : gq.releaseCount;
+           lq[qq] = (lq[qq] || 0) + 1;
+           var Oq = gq._bindPressCount[qq] || 0;
+           (Oq += Eq ? 1 : -1) < 0 && (Oq = 0);
+           gq._bindPressCount[qq] = Oq;
+           var mq = gq.state[qq];
+           if (nq(mq, Oq)) {
+             gq.state[qq] = Oq > 0;
+             var xq = Eq ? gq.down : gq.up;
+             gq.disabled || xq.emit(qq, Yq)
+           }
+         }(qq, Eq, gq, Yq)
+ ... (1 more added lines; see GitHub link above)
```

#### 30. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L1532-L1586` → after: `L306-L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L306-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L306-L307) · [Before (L1532-L1586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L1532-L1586)

```diff
-     function Dk(TT) {
-       let {
-         leaderboard: kT
-       } = TT;
-       const cT = function() {
-           const TT = (0, KT.f)("lobbyManage"),
-             [kT, cT] = (0, lT.useReducer)((TT => TT + 1), 0),
-             [MT] = (0, lT.useState)((() => new fT.b(cT)));
-           return (0, lT.useEffect)((() => {
-             const TT = MT.nextDeadline();
-             if (null === TT) return;
-             const kT = setTimeout((() => {
-               MT.expire(Date.now()), cT()
-             }), Math.max(0, TT - Date.now()));
-             return () => {
-               clearTimeout(kT)
- ... (39 more removed lines; see GitHub link above)
+     function nq(qq, Eq) {
+       return qq ? !Eq : Eq
```

#### 31. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L1589-L1599` → after: `L310`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R310) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L310)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L310) · [Before (L1589-L1599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L1589-L1599)

```diff
-   36383: (TT, kT, cT) => {
-     cT.d(kT, {
-       b: () => IT,
-       e: () => fT
-     });
-     var lT = cT(1497),
-       MT = cT(1974),
-       KT = cT(1953);
-     const OT = 1e4;
-     let yT = 0;
- 
+   36586: (qq, Eq) => {
```

#### 32. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L1601-L1650` → after: `L312-L314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R312) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L312-L314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L312-L314) · [Before (L1601-L1650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L1601-L1650)

```diff
-       const kT = ++yT;
-       return new Promise((cT => {
-         const yT = kT => {
-             fT(), clearTimeout(xT), !1 === (null === kT || void 0 === kT ? void 0 : kT.ok) && (0, lT.reportAnalyticsClick)({
-               id: "lobby_manage.refused",
-               value: TT.type
-             }), cT(kT)
-           },
-           fT = MT.b.subscribe("lobbyManage", (TT => {
-             const cT = function(TT, kT) {
-               var cT;
-               return null !== (cT = null === TT || void 0 === TT ? void 0 : TT.results.find((TT => TT.requestId === kT))) && void 0 !== cT ? cT : null
-             }(TT, kT);
-             null !== cT && yT(cT)
-           })),
-           xT = setTimeout((() => {
- ... (34 more removed lines; see GitHub link above)
+       if (qq && "object" === typeof qq) {
+         var Eq = qq.which || qq.keyCode || qq.charCode;
+         Eq && (qq = Eq)
```

#### 33. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L1652-L1663` → after: `L316-L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L316-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L316-L324) · [Before (L1652-L1663)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L1652-L1663)

```diff
-       show(TT, kT) {
-         this.statuses.set(TT, {
-           ...kT,
-           until: Date.now() + 4e3
-         }), this.onChange()
-       }
-       expire(TT) {
-         for (const [kT, cT] of this.statuses) cT.until <= TT && this.statuses.delete(kT)
-       }
-       nextDeadline() {
-         let TT = null;
-         for (const cT of this.statuses.values()) {
+       if ("number" === typeof qq) return mq[qq];
+       var gq, Oq = String(qq);
+       return (gq = Yq[Oq.toLowerCase()]) ? gq : (gq = lq[Oq.toLowerCase()]) || (1 === Oq.length ? Oq.charCodeAt(0) : void 0)
+     }
+     gq.isEventKey = function(qq, Eq) {
+       if (qq && "object" === typeof qq) {
+         var gq = qq.which || qq.keyCode || qq.charCode;
+         if (null === gq || void 0 === gq) return !1;
+         if ("string" === typeof Eq) {
```

#### 34. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L1665-L1677` → after: `L326-L329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L326-L329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L326-L329) · [Before (L1665-L1677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L1665-L1677)

```diff
-           TT = Math.min(null !== (kT = TT) && void 0 !== kT ? kT : 1 / 0, cT.until)
-         }
-         return TT
-       }
-       statusOf(TT, kT) {
-         const cT = this.statuses.get(TT);
-         return !cT || cT.until <= kT ? null : {
-           ok: cT.ok,
-           text: cT.text
-         }
-       }
-       isPending(TT) {
-         return this.pending.has(TT)
+           if (Oq = Yq[Eq.toLowerCase()]) return Oq === gq;
+           if (Oq = lq[Eq.toLowerCase()]) return Oq === gq
+         } else if ("number" === typeof Eq) return Eq === gq;
+         return !1
```

#### 35. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L1679` → after: `L331-L405`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L331-L405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L331-L405) · [Before (L1679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L1679)

```diff
-     }
+     };
+     var Yq = (Eq = qq.exports = gq).code = Eq.codes = {
+         backspace: 8,
+         tab: 9,
+         enter: 13,
+         shift: 16,
+         ctrl: 17,
+         alt: 18,
+         "pause/break": 19,
+         "caps lock": 20,
+         esc: 27,
+         space: 32,
+         "page up": 33,
+         "page down": 34,
+         end: 35,
+         home: 36,
+ ... (59 more added lines; see GitHub link above)
```

#### 36. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L1681` → after: `L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L407) · [Before (L1681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L1681)

```diff
-   36369: (TT, kT, cT) => {
+   39461: (qq, Eq, gq) => {
```

#### 37. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L1683-L1684` → after: `L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L409) · [Before (L1683-L1684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L1683-L1684)

```diff
-       c: () => xT,
-       g: () => fT
+       d: () => Yq
```

#### 38. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L1686-L1693` → after: `L411-L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L411-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L411-L481) · [Before (L1686-L1693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L1686-L1693)

```diff
-     var lT = cT(602),
-       MT = cT(1953),
-       KT = cT(1663),
-       OT = cT(118),
-       yT = cT(1274);
- 
-     function fT(TT, kT, cT) {
-       return OT.featureFlags.useSocialFeatures && TT && null === (0, yT.e)(kT, cT)
+     class Yq {
+       constructor() {
+         let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
+           Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 10;
+         this.vU = !1, this.hU = !1, this.bJ = 30, this.aU = 0, this.pU = 100, this.rd = !1, this.fullscreen = !1, this.Wy = function(qq) {}, this.kU = function(qq, Eq, gq) {}, this.YF = function() {}, this.EQ = function() {}, this.KU = function() {}, this.onFullscreenChanged = fu … [truncated]
+           function(qq) {
+             if ("loading" === document.readyState) {
+               var Eq = () => {
+                 document.removeEventListener("readystatechange", Eq), qq()
+               };
+               document.addEventListener("readystatechange", Eq)
+             } else setTimeout(qq, 0)
+           }((() => {
+             ! function(qq) {
+               var Eq = qq._data,
+                 gq = Eq.nowObject.now();
+ ... (55 more added lines; see GitHub link above)
```

#### 39. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L1696-L1718` → after: `L484-L486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L484-L486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L484-L486) · [Before (L1696-L1718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L1696-L1718)

```diff
-     function xT(TT, kT) {
-       var cT, OT;
-       const yT = KT.b.getSocialState().friends.find((TT => TT.name.toLowerCase() === kT.toLowerCase())),
-         fT = MT.gameBridge.latest("players").byId[TT],
-         xT = void 0 !== fT && fT.name === kT,
-         IT = xT && null !== (cT = fT.cosmetics) && void 0 !== cT ? cT : void 0,
-         AT = yT && IT ? {
-           ...yT,
-           cosmetics: IT
-         } : yT;
-       return {
-         playerSocialPreview: null !== AT && void 0 !== AT ? AT : {
-           isError: !1,
-           name: kT,
-           ranks: xT ? [...fT.ranks] : [],
-           cosmetics: null !== IT && void 0 !== IT ? IT : {},
- ... (7 more removed lines; see GitHub link above)
+     function lq() {
+       let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 10;
+       this.nowObject = performance || Date, this.pollTime = qq, this.renderAccum = 0, this.lastTickStarted = 0, this.lastFrameStarted = 0, this.lastRenderStarted = 0, this.avgTickTime = 2, this.frameCB = null, this.intervalCB = null, this.intervalID = -1
```

#### 40. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L1720-L1732` → after: `L488-L489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L488-L489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L488-L489) · [Before (L1720-L1732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L1720-L1732)

```diff
-   },
-   36559: (TT, kT, cT) => {
-     cT.d(kT, {
-       d: () => AT
-     });
-     var lT = cT(71),
-       MT = cT(1046),
-       KT = cT.n(MT),
-       OT = cT(1692),
-       yT = cT(1470),
-       fT = cT(1348),
-       xT = cT(1061),
-       IT = cT(1099);
+     var Oq = 3,
+       mq = 20;
```

#### 41. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L1735-L1792` → after: `L492-L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L492-L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L492-L496) · [Before (L1735-L1792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L1735-L1792)

```diff
-       let {
-         label: kT,
-         icon: cT,
-         placeholder: MT,
-         onSubmit: AT
-       } = TT;
-       const CT = (0, lT.useRef)(null),
-         [jT, vT] = (0, lT.useState)(""),
-         [tT, hT] = (0, lT.useState)("Enter"),
-         [NT, QT] = (0, lT.useState)(null);
-       (0, lT.useEffect)((() => {
-         if ("Success" !== tT && "Error" !== tT) return;
-         const TT = setTimeout((() => {
-           "Success" === tT && CT.current && (CT.current.value = "", vT("")), hT("Enter")
-         }), "Success" === tT ? 1e3 : 4e3);
-         return () => {
- ... (42 more removed lines; see GitHub link above)
+       for (var Eq = qq._data, gq = 1e3 / qq.bJ, Yq = Eq.nowObject.now() + mq, lq = 0; Eq.nowObject.now() >= Eq.lastTickStarted + gq && Eq.nowObject.now() < Yq && ++lq <= Oq;) qq.Wy(gq), Eq.lastTickStarted += gq;
+       var xq = 5 * (gq + 5),
+         Aq = Eq.nowObject.now();
+       if (Aq - Eq.lastTickStarted > xq)
+         for (; Aq >= Eq.lastTickStarted + gq;) Eq.lastTickStarted += gq
```

#### 42. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L1795` → after: `L499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L499) · [Before (L1795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L1795)

```diff
-   36533: (TT, kT, cT) => {
+   36744: (qq, Eq, gq) => {
```

#### 43. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L1799-L1864` → after: `L503-L522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L503-L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L503-L522) · [Before (L1799-L1864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L1799-L1864)

```diff
-     var lT = cT(71),
-       MT = cT(1046),
-       KT = cT.n(MT),
-       OT = cT(1195),
-       yT = cT(1061),
-       fT = cT(1099);
-     const xT = {
-         unlisted: "link",
-         public: "globe",
-         whitelist: "user-check",
-         private: "lock"
-       },
-       IT = ["unlisted", "public", "whitelist", "private"];
- 
-     function AT(TT) {
-       let {
- ... (50 more removed lines; see GitHub link above)
+     var Yq = gq(57);
+     const lq = Yq.useLayoutEffect;
+     const Oq = function(qq) {
+       var Eq = (0, Yq.useRef)(qq);
+       return lq((function() {
+         Eq.current = qq
+       })), Eq
+     };
+     var mq = function(qq) {
+       var Eq = Oq(qq);
+       (0, Yq.useEffect)((function() {
+         var qq = function(qq) {
+           var gq;
+           if (null != Eq.current && (gq = Eq.current(qq)), qq.defaultPrevented && (qq.returnValue = ""), "string" === typeof gq) return qq.returnValue = gq, gq
+         };
+         return window.addEventListener("beforeunload", qq),
+ ... (4 more added lines; see GitHub link above)
```

#### 44. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L1867` → after: `L525-L648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L525-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L525-L648) · [Before (L1867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L1867)

```diff
-   36550: (TT, kT, cT) => {
+   36640: qq => {
+     var Eq, gq = "undefined" !== typeof window ? window.navigator.userAgent : "",
+       Yq = /OS X/.test(gq),
+       lq = /Opera/.test(gq),
+       Oq = !/like Gecko/.test(gq) && !lq,
+       mq = qq.exports = {
+         0: Yq ? "<menu>" : "<UNK>",
+         1: "<mouse 1>",
+         2: "<mouse 2>",
+         3: "<break>",
+         4: "<mouse 3>",
+         5: "<mouse 4>",
+         6: "<mouse 5>",
+         8: "<backspace>",
+         9: "<tab>",
+         12: "<clear>",
+ ... (108 more added lines; see GitHub link above)
```

#### 45. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L1870-L1912` → after: `L651-L659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L651-L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L651-L659) · [Before (L1870-L1912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L1870-L1912)

```diff
-     });
-     var lT = cT(1195),
-       MT = cT(2660),
-       KT = cT(4355),
-       OT = cT(1099);
- 
-     function yT(TT) {
-       let {
-         UA: kT,
-         children: cT,
-         ...yT
-       } = TT;
-       const {
-         t: fT
-       } = (0, lT.B)();
-       return (0, OT.jsx)("div", {
- ... (27 more removed lines; see GitHub link above)
+     })
+   },
+   38968: (qq, Eq, gq) => {
+     function Yq(qq, Eq, gq, Yq) {
+       gq && Object.defineProperty(qq, Eq, {
+         enumerable: gq.enumerable,
+         configurable: gq.configurable,
+         writable: gq.writable,
+         value: gq.initializer ? gq.initializer.call(Yq) : void 0
```

#### 46. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L1919-L1991` → after: `L664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L664) · [Before (L1919-L1991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L1919-L1991)

```diff
-     });
-     var lT = cT(71),
-       MT = cT(1195),
-       KT = cT(1875),
-       OT = cT(118),
-       yT = cT(31),
-       fT = cT(1497),
-       xT = cT(2678),
-       IT = cT(9250),
-       AT = cT(1470),
-       CT = cT(1061),
-       jT = cT(1099);
- 
-     function vT(TT) {
-       let {
-         worldCode: kT,
- ... (57 more removed lines; see GitHub link above)
+     })
```

#### 47. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L1993` → after: `L666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L666) · [Before (L1993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L1993)

```diff
-   36541: (TT, kT, cT) => {
+   38649: (qq, Eq, gq) => {
```

#### 48. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L1995-L1997` → after: `L668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L668) · [Before (L1995-L1997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L1995-L1997)

```diff
-       b: () => jT,
-       c: () => CT,
-       g: () => AT
+       b: () => Oq
```

#### 49. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L1999-L2017` → after: `L670-L704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L670-L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L670-L704) · [Before (L1999-L2017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L1999-L2017)

```diff
-     var lT = cT(602),
-       MT = cT(1195),
-       KT = cT(1663),
-       OT = cT(2660),
-       yT = cT(2600),
-       fT = cT(1470),
-       xT = cT(36550),
-       IT = cT(1099);
- 
-     function AT(TT, kT) {
-       var cT;
-       return {
-         isError: !1,
-         name: TT,
-         ranks: [...arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : []],
-         cosmetics: null !== kT && void 0 !== kT ? kT : {},
- ... (3 more removed lines; see GitHub link above)
+     var Yq = gq(38653);
+     const lq = (qq, Eq, gq) => qq ? qq.getClassName && "Mesh" === qq.getClassName() ? null : !qq.getClassName || "SubMesh" !== qq.getClassName() && "PhysicsBody" !== qq.getClassName() ? qq.clone ? qq.clone() : Array.isArray(qq) ? qq.slice() : gq && "object" === typeof qq ? {
+       ...qq
+     } : null : qq.clone(Eq) : null;
+     class Oq {
+       static DeepCopy(qq, Eq, gq, Oq) {
+         let mq = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
+         const xq = function(qq) {
+           const Eq = [];
+           do {
+             const gq = Object.getOwnPropertyNames(qq);
+             for (const qq of gq) - 1 === Eq.indexOf(qq) && Eq.push(qq)
+           } while (qq = Object.getPrototypeOf(qq));
+           return Eq
+         }(qq);
+         for (const cq of xq) {
+ ... (19 more added lines; see GitHub link above)
```

#### 50. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L2097` → after: `L709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R709) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L709) · [Before (L2097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L2097)

```diff
-   36523: (TT, kT, cT) => {
+   38677: (qq, Eq, gq) => {
```

#### 51. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L2099` → after: `L711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L711) · [Before (L2099)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L2099)

```diff
-       d: () => fT,
+       e: () => lq,
```

#### 52. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L2101` → after: `L713-L714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L713-L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L713-L714) · [Before (L2101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L2101)

```diff
-       i: () => xT
+       i: () => mq,
+       k: () => xq
```

#### 53. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L2103-L2115` → after: `L716-L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L716-L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L716-L723) · [Before (L2103-L2115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L2103-L2115)

```diff
-     var lT = cT(71),
-       MT = cT(4566),
-       KT = cT(1875);
- 
-     function OT(TT) {
-       const kT = {
-         lobbyName: TT,
-         answer: null,
-         response: MT.c.getSocialSettings(TT)
-       };
-       return kT.response.then((TT => {
-         kT.answer = TT
-       })), kT
+     var Yq = gq(37289);
+     class lq {
+       constructor(qq, Eq, gq) {
+         this.gradient = qq, this.color1 = Eq, this.color2 = gq
+       }
+       getColorToRef(qq) {
+         this.color2 ? Yq.g.LerpToRef(this.color1, this.color2, Math.random(), qq) : qq.WG(this.color1)
+       }
```

#### 54. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L2117-L2120` → after: `L725-L728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R725) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L725-L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L725-L728) · [Before (L2117-L2120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L2117-L2120)

```diff
-     const yT = new Map;
- 
-     function fT(TT) {
-       yT.set(TT.lobbyName, TT)
+     class Oq {
+       constructor(qq, Eq) {
+         this.gradient = qq, this.color = Eq
+       }
```

#### 55. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L2122-L2182` → after: `L730-L746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R730) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L730-L746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L730-L746) · [Before (L2122-L2182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L2122-L2182)

```diff
- 
-     function xT(TT) {
-       const [kT] = (0, lT.useState)((() => function(TT) {
-         var kT;
-         const cT = null !== (kT = yT.get(TT)) && void 0 !== kT ? kT : null;
-         return null !== cT && void 0 !== cT && cT.answer && "error" in cT.answer ? null : cT
-       }(TT))), [cT, OT] = (0, lT.useState)((() => null !== kT && void 0 !== kT && kT.answer && "settings" in kT.answer ? kT.answer.settings : null)), [fT, xT] = (0, lT.useState)(!0), [IT, AT] = (0, lT.useState)(null !== cT), CT = (0, lT.useRef)(cT);
-       CT.current = cT;
-       const jT = (0, lT.useRef)(0),
-         vT = (0, lT.useRef)(0),
-         tT = (0, lT.useRef)(!1),
-         hT = (0, lT.useRef)(!0),
-         NT = (0, lT.useCallback)((async kT => {
-           const cT = ++jT.current,
-             lT = await (null !== kT && void 0 !== kT ? kT : MT.c.getSocialSettings(TT));
-           hT.current && cT === jT.current && (AT(!0), xT(!1), "error" in lT || OT(lT.settings))
- ... (45 more removed lines; see GitHub link above)
+     class mq {
+       constructor(qq, Eq, gq) {
+         this.gradient = qq, this.factor1 = Eq, this.factor2 = gq
+       }
+       getFactor() {
+         return void 0 === this.factor2 || this.factor2 === this.factor1 ? this.factor1 : this.factor1 + (this.factor2 - this.factor1) * Math.random()
+       }
+     }
+     class xq {
+       static GetCurrentGradient(qq, Eq, gq) {
+         if (Eq[0].gradient > qq) return void gq(Eq[0], Eq[0], 1);
+         for (let lq = 0; lq < Eq.length - 1; lq++) {
+           const Yq = Eq[lq],
+             Oq = Eq[lq + 1];
+           if (qq >= Yq.gradient && qq <= Oq.gradient) {
+             return void gq(Yq, Oq, (qq - Yq.gradient) / (Oq.gradient - Yq.gradient))
+ ... (1 more added lines; see GitHub link above)
```

#### 56. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L2187` → after: `L753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L753) · [Before (L2187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L2187)

```diff
-   36567: (TT, kT, cT) => {
+   38653: (qq, Eq, gq) => {
```

#### 57. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L2189-L2190` → after: `L755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L755) · [Before (L2189-L2190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L2189-L2190)

```diff
-       d: () => OT,
-       f: () => KT
+       b: () => Yq
```

#### 58. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L2192-L2206` → after: `L757-L808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L757-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L757-L808) · [Before (L2192-L2206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L2192-L2206)

```diff
-     var lT = cT(184);
-     const MT = new Map;
- 
-     function KT(TT, kT) {
-       var cT;
-       const lT = null !== (cT = MT.get(TT)) && void 0 !== cT ? cT : new Map;
-       lT.set(kT, Date.now()), MT.set(TT, lT)
-     }
- 
-     function OT(TT) {
-       const kT = MT.get(TT);
-       if (!kT) return [];
-       const cT = Date.now();
-       for (const [MT, KT] of kT) cT - KT >= lT.i && kT.delete(MT);
-       return [...kT.keys()]
+     class Yq {
+       static _CheckLimit(qq, Eq) {
+         let gq = Yq._LogLimitOutputs[qq];
+         return gq ? gq.current++ : (gq = {
+           limit: Eq,
+           current: 1
+         }, Yq._LogLimitOutputs[qq] = gq), gq.current <= gq.limit
+       }
+       static _GenerateLimitMessage(qq) {
+         let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1;
+         const gq = Yq._LogLimitOutputs[qq];
+         if (!gq || !Yq.MessageLimitReached) return;
+         const lq = this._Levels[Eq];
+         gq.current === gq.limit && Yq[lq.name](Yq.MessageLimitReached.replace(/%LIMIT%/g, "" + gq.limit).replace(/%TYPE%/g, lq.name ?? ""))
+       }
+       static _AddLogEntry(qq) {
+ ... (36 more added lines; see GitHub link above)
```

#### 59. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L2209-L2238` → after: `L824-L871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L824-L871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L824-L871) · [Before (L2209-L2238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L2209-L2238)

```diff
-   36528: (TT, kT, cT) => {
-     function lT(TT, kT) {
-       const cT = kT.toLowerCase();
-       for (const lT of TT)
-         if (lT.toLowerCase() === cT) return !0;
-       return !1
-     }
- 
-     function MT(TT, kT, cT) {
-       const MT = [],
-         KT = [],
-         OT = [];
-       for (const yT of TT) !yT.isError && yT.name && ("inGame" === yT.location.status && yT.location.inLobbyName === kT || lT(cT, yT.name) ? KT.push({
-         friend: yT,
-         place: "here"
-       }) : "offline" === yT.location.status ? OT.push({
- ... (14 more removed lines; see GitHub link above)
+   38679: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => mq
+     });
+     var Yq = gq(37139),
+       lq = gq(37158),
+       Oq = gq(38649);
+     class mq {
+       constructor() {
+         this.direction1 = new Yq.q(0, 1, 0), this.direction2 = new Yq.q(0, 1, 0), this.minEmitBox = new Yq.q(-.5, -.5, -.5), this.maxEmitBox = new Yq.q(.5, .5, .5)
+       }
+       startDirectionFunction(qq, Eq, gq, Oq) {
+         const mq = (0, lq.RandomRange)(this.direction1.x, this.direction2.x),
+           xq = (0, lq.RandomRange)(this.direction1.y, this.direction2.y),
+           Aq = (0, lq.RandomRange)(this.direction1.z, this.direction2.z);
+         if (Oq) return Eq.x = mq, Eq.y = xq, void(Eq.z = Aq);
+ ... (32 more added lines; see GitHub link above)
```

#### 60. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L2240-L2242` → after: `L873-L927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L873-L927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L873-L927) · [Before (L2240-L2242)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L2240-L2242)

```diff
- 
-     function OT(TT, kT) {
-       return null === TT || void 0 === TT || !TT.canManage || lT(TT.whitelist, kT) ? "none" : "whitelist" === TT.visibility ? "required" : "quiet"
+   },
+   38646: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       d: () => xq,
+       e: () => mq
+     });
+     var Yq = gq(37139),
+       lq = gq(37158),
+       Oq = gq(38649);
+     class mq {
+       constructor() {
+         let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
+           Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
+           gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
+           lq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0;
+         this.radius = qq, this.height = Eq, this.radiusRange = gq, this.directionRandomizer = lq, this._tempVector = Yq.q.Zero()
+ ... (39 more added lines; see GitHub link above)
```

#### 61. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L2244-L2250` → after: `L929-L966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L929-L966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L929-L966) · [Before (L2244-L2250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L2244-L2250)

```diff
- 
-     function yT(TT) {
-       if (null === TT) return !0;
-       const {
-         visibility: kT
-       } = TT;
-       return "public" === kT || "unlisted" === kT || "whitelist" === kT && TT.canManage
+     class xq extends mq {
+       constructor() {
+         let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
+           Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
+           gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1,
+           lq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : new Yq.q(0, 1, 0),
+           Oq = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : new Yq.q(0, 1, 0);
+         super(qq, Eq, gq), this.direction1 = lq, this.direction2 = Oq
+       }
+       startDirectionFunction(qq, Eq, gq, Oq) {
+         const mq = (0, lq.RandomRange)(this.direction1.x, this.direction2.x),
+           xq = (0, lq.RandomRange)(this.direction1.y, this.direction2.y),
+           Aq = (0, lq.RandomRange)(this.direction1.z, this.direction2.z);
+         Oq ? Eq.Vqq(mq, xq, Aq) : Yq.q.TransformNormalFromFloatsToRef(mq, xq, Aq, qq, Eq)
+       }
+       clone() {
+ ... (22 more added lines; see GitHub link above)
```

#### 62. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L2252-L2258` → after: `L968-L1054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R968) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L968-L1054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L968-L1054) · [Before (L2252-L2258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L2252-L2258)

```diff
- 
-     function fT(TT, kT, cT) {
-       if (cT) {
-         const cT = kT.filter((kT => !lT(TT.whitelist, kT)));
-         return {
-           ...TT,
-           whitelist: [...TT.whitelist, ...cT]
+   },
+   38746: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       c: () => Bq
+     });
+     const Yq = .5 * (Math.sqrt(3) - 1),
+       lq = (3 - Math.sqrt(3)) / 6,
+       Oq = 1 / 3,
+       mq = 1 / 6,
+       xq = (Math.sqrt(5) - 1) / 4,
+       Aq = (5 - Math.sqrt(5)) / 20,
+       cq = new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
+       uq = new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0,  … [truncated]
+     const Bq = class {
+       constructor() {
+         let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Math.random;
+ ... (71 more added lines; see GitHub link above)
```

#### 63. `bundles/bloxd.io/chunks/js/214.js` (Changed code · before: `L2261-L2263` → after: `L1058-L1190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352R1058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-fda3a6aae79d575330d1b9f251700d132a7b7da995a75b7c6f628d2832f83352) · [After (L1058-L1190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/214.js#L1058-L1190) · [Before (L2261-L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/214.js#L2261-L2263)

```diff
-       return {
-         ...TT,
-         whitelist: TT.whitelist.filter((TT => !lT(kT, TT)))
+       noise3D(qq, Eq, gq) {
+         const Yq = this.permMod12,
+           lq = this.perm;
+         let xq, Aq, uq, Bq;
+         const Wq = (qq + Eq + gq) * Oq,
+           Nq = Math.floor(qq + Wq),
+           aq = Math.floor(Eq + Wq),
+           Vq = Math.floor(gq + Wq),
+           dq = (Nq + aq + Vq) * mq,
+           jq = qq - (Nq - dq),
+           Hq = Eq - (aq - dq),
+           oq = gq - (Vq - dq);
+         let Pq, Qq, yq, tq, rq, vq;
+         jq >= Hq ? Hq >= oq ? (Pq = 1, Qq = 0, yq = 0, tq = 1, rq = 1, vq = 0) : jq >= oq ? (Pq = 1, Qq = 0, yq = 0, tq = 1, rq = 0, vq = 1) : (Pq = 0, Qq = 0, yq = 1, tq = 1, rq = 0, vq = 1) : Hq < oq ? (Pq = 0, Qq = 0, yq = 1, tq = 0, rq = 1, vq = 1) : jq < oq ? (Pq = 0, Qq = 1 … [truncated]
+         const hq = jq - Pq + mq,
+           nq = Hq - Qq + mq,
+ ... (117 more added lines; see GitHub link above)
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/215.js` (bcgkc.38229551 → bbb6l5.0244a119)

- **File**: `bundles/bloxd.io/chunks/js/215.js` (36 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17)

#### 1. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L4-L153` → after: `L4-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L4-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/215.js#L4-L27) · [Before (L4-L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/215.js#L4-L153)

```diff
-   36460: TT => {
-     TT.exports = {
-       aliceblue: [240, 248, 255],
-       antiquewhite: [250, 235, 215],
-       aqua: [0, 255, 255],
-       aquamarine: [127, 255, 212],
-       azure: [240, 255, 255],
-       beige: [245, 245, 220],
-       bisque: [255, 228, 196],
-       black: [0, 0, 0],
-       blanchedalmond: [255, 235, 205],
-       blue: [0, 0, 255],
-       blueviolet: [138, 43, 226],
-       brown: [165, 42, 42],
-       burlywood: [222, 184, 135],
-       cadetblue: [95, 158, 160],
- ... (134 more removed lines; see GitHub link above)
+   40821: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       LobbyManageView: () => PE
+     });
+     var Yq = gq(57),
+       lq = gq(1448),
+       Oq = gq(2383),
+       mq = gq(2402),
+       xq = gq(2411),
+       Aq = gq(36612);
+ 
+     function cq() {
+       const [qq, Eq] = (0, Yq.useState)(new Map);
+       return {
+         get: Eq => qq.get(Eq),
+         hold: (0, Yq.useCallback)(((qq, gq, Yq) => {
+ ... (8 more added lines; see GitHub link above)
```

#### 2. `bundles/bloxd.io/chunks/js/215.js` (Changed code · before: `L155-L165` → after: `L29-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17R29) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/a19f2915cae29489490586ed683a890547f7e0e9...build/bloxd.io/bbb6l5.0244a119#diff-b756e5d194d08555a116998e2474da14903009d83d987eb2beb73cfc86e77f17) · [After (L29-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/bbb6l5.0244a119/bundles/bloxd.io/chunks/js/215.js#L29-L38) · [Before (L155-L165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/a19f2915cae29489490586ed683a890547f7e0e9/bundles/bloxd.io/chunks/js/215.js#L155-L165)

```diff
-   },
-   36454: (TT, kT, cT) => {
-     var lT = cT(36460),
-       MT = cT(36462),
-       KT = Object.hasOwnProperty,
-       OT = Object.create(null);
-     for (var yT in lT) KT.call(lT, yT) && (OT[lT[yT]] = yT);
-     var fT = TT.exports = {
-       to: {},
-       get: {}
-     };
+     var uq = gq(1018),
+       Bq = gq.n(uq),
+       Wq = gq(1183),
+       Nq = gq(1025),
+       aq = gq(1326),
+       Vq = gq(2569),
+       dq = gq(4858),
+       jq = gq(3455);
+     var Hq = gq(1942),
+       oq = gq(1422);
```
