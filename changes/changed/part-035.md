# Changed — Bundle Modifications Report (Part 035 / 058)

- **Updated at**: `2026-11-21T00:46 JST`
- **Part**: `35 / 58` (**398** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 034](part-034.md) · [Part 036 →](part-036.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (ad2avs.90d9e4dd → bbb6l5.0244a119 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (112 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904)

#### 67. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L651` → after: `L651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L651) · [Before (L651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L651)

```diff
-         iz - this.lastAnyAt < 40 && Ez.priority < this.playingPriority || iz - (null !== (bz = this.lastAt.get(zz)) && void 0 !== bz ? bz : -1 / 0) < Ez.minGapMs || iz < this.playingUntil && Ez.priority < this.playingPriority || (this.lastAt.set(zz, iz), this.lastAnyAt = iz, this … [truncated]
+         Oq - this.lastAnyAt < 40 && Yq.priority < this.playingPriority || Oq - (null !== (gq = this.lastAt.get(qq)) && void 0 !== gq ? gq : -1 / 0) < Yq.minGapMs || Oq < this.playingUntil && Yq.priority < this.playingPriority || (this.lastAt.set(qq, Oq), this.lastAnyAt = Oq, this … [truncated]
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L658` → after: `L658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L658) · [Before (L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L658)

```diff
-       enabled: () => Mz() && Ez.e.get("isTouchScreen") && Ez.e.get("clientEscMenuOptions").vibration && !(0, nz.d)()
+       enabled: () => xq() && Yq.b.get("isTouchScreen") && Yq.b.get("clientEscMenuOptions").vibration && !(0, lq.i)()
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L661` → after: `L661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L661) · [Before (L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L661)

```diff
-   36588: (zz, uz, bz) => {
+   37195: (qq, Eq, gq) => {
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L663-L664` → after: `L663-L664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R663) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L663-L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L663-L664) · [Before (L663-L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L663-L664)

```diff
-       b: () => Mz,
-       f: () => lz
+       d: () => xq,
+       g: () => mq
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L666-L668` → after: `L666-L668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L666-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L666-L668) · [Before (L666-L668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L666-L668)

```diff
-     var Ez = bz(36577),
-       nz = bz(328),
-       iz = bz(1840);
+     var Yq = gq(37183),
+       lq = gq(307),
+       Oq = gq(1870);
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L671` → after: `L671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L671) · [Before (L671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L671)

```diff
-       if ("Ui" in zz) return oz.createAnimationScript(zz);
+       if ("aq" in qq) return yq.createAnimationScript(qq);
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L676-L677` → after: `L676-L677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L676-L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L676-L677) · [Before (L676-L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L676-L677)

```diff
-       const iz = zz.Ui <= 0 ? 1 : uz + bz * Math.max(0, nz) / zz.Ui;
-       return zz.gi === Ez.m.LoopOnLastFrame ? iz % 1 : zz.gi === Ez.m.NoLoop && iz >= 1 ? null : Math.min(1, iz)
+       const Oq = qq.aq <= 0 ? 1 : Eq + gq * Math.max(0, lq) / qq.aq;
+       return qq.Vq === Yq.l.LoopOnLastFrame ? Oq % 1 : qq.Vq === Yq.l.NoLoop && Oq >= 1 ? null : Math.min(1, Oq)
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L682` → after: `L682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L682) · [Before (L682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L682)

```diff
-           Ui: uz,
+           aq: Eq,
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L684` → after: `L684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L684) · [Before (L684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L684)

```diff
-           Si: Ez
+           dq: Yq
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L687-L689` → after: `L687-L689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L687-L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L687-L689) · [Before (L687-L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L687-L689)

```diff
-           Ui: Math.round(uz),
-           gi: this.createLoopMode(null !== bz && void 0 !== bz && bz),
-           Si: this.createNodeSkeletonAnimationScript(null !== Ez && void 0 !== Ez ? Ez : null)
+           aq: Math.round(Eq),
+           Vq: this.createLoopMode(null !== gq && void 0 !== gq && gq),
+           dq: this.createNodeSkeletonAnimationScript(null !== Yq && void 0 !== Yq ? Yq : null)
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L695` → after: `L695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L695) · [Before (L695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L695)

```diff
-             return Ez.m.NoLoop;
+             return Yq.l.NoLoop;
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L697` → after: `L697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L697) · [Before (L697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L697)

```diff
-             return Ez.m.LoopOnLastFrame;
+             return Yq.l.LoopOnLastFrame;
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L699` → after: `L699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L699) · [Before (L699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L699)

```diff
-             return Ez.m.HoldOnLastFrame
+             return Yq.l.HoldOnLastFrame
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L701` → after: `L701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L701) · [Before (L701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L701)

```diff
-         throw new Error(`Invalid loop mode schema: ${zz}`)
+         throw new Error(`Invalid loop mode schema: ${qq}`)
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L734-L736` → after: `L734-L736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L734-L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L734-L736) · [Before (L734-L736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L734-L736)

```diff
-             uz = null !== (iz = Ez[tz - 1]) && void 0 !== iz ? iz : zz,
-             Hz = null !== (lz = Ez[tz + 1]) && void 0 !== lz ? lz : zz,
-             Oz = null !== (Mz = Ez[tz + 2]) && void 0 !== Mz ? Mz : Hz;
+             Eq = null !== (Oq = Yq[Aq - 1]) && void 0 !== Oq ? Oq : qq,
+             cq = null !== (mq = Yq[Aq + 1]) && void 0 !== mq ? mq : qq,
+             uq = null !== (xq = Yq[Aq + 2]) && void 0 !== xq ? xq : cq;
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L747` → after: `L747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L747) · [Before (L747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L747)

```diff
-         if ("object" === typeof uz && "point" in uz) nz = null !== (iz = uz.Qi) && void 0 !== iz ? iz : null, bz = uz.point, Ez = uz.point;
+         if ("object" === typeof Eq && "point" in Eq) lq = null !== (Oq = Eq.oq) && void 0 !== Oq ? Oq : null, gq = Eq.point, Yq = Eq.point;
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L750` → after: `L750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L750) · [Before (L750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L750)

```diff
-           nz = null !== (lz = uz.Qi) && void 0 !== lz ? lz : null, bz = uz.pre, Ez = uz.post
+           lq = null !== (mq = Eq.oq) && void 0 !== mq ? mq : null, gq = Eq.pre, Yq = Eq.post
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L754` → after: `L754`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L754) · [Before (L754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L754)

```diff
-           Qi: this.createLerpMode(nz),
+           oq: this.createLerpMode(lq),
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L760` → after: `L760`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R760) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L760) · [Before (L760)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L760)

```diff
-         return null === zz ? Ez.j.Linear : tz.LERP_MODE_SCHEMA_MAPPING[zz]
+         return null === qq ? Yq.k.Linear : Aq.LERP_MODE_SCHEMA_MAPPING[qq]
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L764-L765` → after: `L764-L765`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L764-L765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L764-L765) · [Before (L764-L765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L764-L765)

```diff
-       linear: Ez.j.Linear,
-       "catmull-rom-spline": Ez.j.CatmullRomSpline
+       linear: Yq.k.Linear,
+       "catmull-rom-spline": Yq.k.CatmullRomSpline
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L778-L780` → after: `L778-L780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L778-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L778-L780) · [Before (L778-L780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L778-L780)

```diff
-           Ui: Math.round(1e3 * zz),
-           gi: this.createLoopMode(null !== uz && void 0 !== uz && uz),
-           Si: this.createNodeSkeletonAnimationScript(null !== bz && void 0 !== bz ? bz : null)
+           aq: Math.round(1e3 * qq),
+           Vq: this.createLoopMode(null !== Eq && void 0 !== Eq && Eq),
+           dq: this.createNodeSkeletonAnimationScript(null !== gq && void 0 !== gq ? gq : null)
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L786` → after: `L786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L786) · [Before (L786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L786)

```diff
-             return Ez.m.NoLoop;
+             return Yq.l.NoLoop;
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L788` → after: `L788`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L788) · [Before (L788)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L788)

```diff
-             return Ez.m.LoopOnLastFrame;
+             return Yq.l.LoopOnLastFrame;
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L790` → after: `L790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R790) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L790) · [Before (L790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L790)

```diff
-             return Ez.m.HoldOnLastFrame
+             return Yq.l.HoldOnLastFrame
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L792` → after: `L792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R792) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L792) · [Before (L792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L792)

```diff
-         throw new Error(`Invalid Blockbench loop mode schema: ${zz}`)
+         throw new Error(`Invalid Blockbench loop mode schema: ${qq}`)
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L809-L810` → after: `L809-L810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L809-L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L809-L810) · [Before (L809-L810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L809-L810)

```diff
-           rotation: this.createAnimationTimeline(null !== uz && void 0 !== uz ? uz : null, Kz, dz, !0),
-           position: this.createAnimationTimeline(null !== bz && void 0 !== bz ? bz : null, Xz, Zz, !1)
+           rotation: this.createAnimationTimeline(null !== Eq && void 0 !== Eq ? Eq : null, dq, Wq, !0),
+           position: this.createAnimationTimeline(null !== gq && void 0 !== gq ? gq : null, Hq, aq, !1)
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L843-L845` → after: `L843-L845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L843-L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L843-L845) · [Before (L843-L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L843-L845)

```diff
-             uz = null !== (lz = nz[Hz - 1]) && void 0 !== lz ? lz : zz,
-             Ez = null !== (Mz = nz[Hz + 1]) && void 0 !== Mz ? Mz : zz,
-             Oz = null !== (tz = nz[Hz + 2]) && void 0 !== tz ? tz : Ez;
+             Eq = null !== (mq = lq[cq - 1]) && void 0 !== mq ? mq : qq,
+             Yq = null !== (xq = lq[cq + 1]) && void 0 !== xq ? xq : qq,
+             uq = null !== (Aq = lq[cq + 2]) && void 0 !== Aq ? Aq : Yq;
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L857` → after: `L857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L857) · [Before (L857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L857)

```diff
-           iz = null !== (lz = uz.lerp_mode) && void 0 !== lz ? lz : null, nz = Rz(uz.post, bz), Ez = uz.pre ? Rz(uz.pre, bz) : nz
+           Oq = null !== (mq = Eq.lerp_mode) && void 0 !== mq ? mq : null, lq = Vq(Eq.post, gq), Yq = Eq.pre ? Vq(Eq.pre, gq) : lq
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L864` → after: `L864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L864) · [Before (L864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L864)

```diff
-           Qi: this.createLerpMode(iz),
+           oq: this.createLerpMode(Oq),
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L870` → after: `L870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L870) · [Before (L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L870)

```diff
-         return null === zz ? Ez.j.Linear : Hz.LERP_MODE_SCHEMA_MAPPING[zz]
+         return null === qq ? Yq.k.Linear : cq.LERP_MODE_SCHEMA_MAPPING[qq]
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L889-L890` → after: `L889-L890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L889-L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L889-L890) · [Before (L889-L890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L889-L890)

```diff
-         Wi: Hz,
-         ji: pz
+         Pq: cq,
+         Qq: Bq
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L896-L898` → after: `L896-L898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L896-L898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L896-L898) · [Before (L896-L898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L896-L898)

```diff
-         Bi: nz.d.computeShortestRotation(zz, bz) / iz,
-         Ci: nz.d.computeShortestRotation(uz, Ez) / lz,
-         delta: nz.d.computeShortestRotation(uz, bz)
+         tq: lq.c.computeShortestRotation(qq, gq) / Oq,
+         rq: lq.c.computeShortestRotation(Eq, Yq) / mq,
+         delta: lq.c.computeShortestRotation(Eq, gq)
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L908-L909` → after: `L908-L909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R908) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L908-L909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L908-L909) · [Before (L908-L909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L908-L909)

```diff
-         Bi: (nz[dz] - zz[dz]) / tz,
-         Ci: (lz[dz] - bz[dz]) / Oz,
+         tq: (lq[Wq] - qq[Wq]) / Aq,
+         rq: (mq[Wq] - gq[Wq]) / uq,
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L913-L914` → after: `L913-L914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L913-L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L913-L914) · [Before (L913-L914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L913-L914)

```diff
-         Wi: Hz,
-         ji: pz
+         Pq: cq,
+         Qq: Bq
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L919` → after: `L919`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L919) · [Before (L919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L919)

```diff
-       return null === uz ? zz : uz(zz)
+       return null === Eq ? qq : Eq(qq)
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L923-L924` → after: `L923-L924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R923) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L923-L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L923-L924) · [Before (L923-L924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L923-L924)

```diff
-       const [uz, bz, Ez] = zz, lz = -(0, iz.j)(uz), Mz = -(0, iz.j)(bz), tz = (0, iz.j)(Ez), Hz = nz.d.quaternionFromEulerZYX(lz, Mz, tz);
-       return nz.d.eulerYXZFromQuaternion(Hz)
+       const [Eq, gq, Yq] = qq, mq = -(0, Oq.j)(Eq), xq = -(0, Oq.j)(gq), Aq = (0, Oq.j)(Yq), cq = lq.c.quaternionFromEulerZYX(mq, xq, Aq);
+       return lq.c.eulerYXZFromQuaternion(cq)
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L927-L928` → after: `L927-L928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L927-L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L927-L928) · [Before (L927-L928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L927-L928)

```diff
-       linear: Ez.j.Linear,
-       catmullrom: Ez.j.CatmullRomSpline
+       linear: Yq.k.Linear,
+       catmullrom: Yq.k.CatmullRomSpline
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L938` → after: `L938`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L938) · [Before (L938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L938)

```diff
-       return [uz >= 0 ? Math.PI - uz : -Math.PI - uz, sz(bz + Math.PI), sz(Ez + Math.PI)]
+       return [Eq >= 0 ? Math.PI - Eq : -Math.PI - Eq, Pq(gq + Math.PI), Pq(Yq + Math.PI)]
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L942` → after: `L942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L942) · [Before (L942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L942)

```diff
-       return nz.d.mod(zz + Math.PI, 2 * Math.PI) - Math.PI
+       return lq.c.mod(qq + Math.PI, 2 * Math.PI) - Math.PI
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L946` → after: `L946`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R946) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L946) · [Before (L946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L946)

```diff
-       return Math.abs(nz.d.computeShortestRotation(zz[0], uz[0])) + Math.abs(nz.d.computeShortestRotation(zz[1], uz[1])) + Math.abs(nz.d.computeShortestRotation(zz[2], uz[2]))
+       return Math.abs(lq.c.computeShortestRotation(qq[0], Eq[0])) + Math.abs(lq.c.computeShortestRotation(qq[1], Eq[1])) + Math.abs(lq.c.computeShortestRotation(qq[2], Eq[2]))
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L950` → after: `L950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L950) · [Before (L950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L950)

```diff
-   36577: (zz, uz, bz) => {
+   37183: (qq, Eq, gq) => {
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L954-L955` → after: `L954-L955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L954-L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L954-L955) · [Before (L954-L955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L954-L955)

```diff
-       j: () => Ez,
-       m: () => nz
+       k: () => Yq,
+       l: () => lq
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L970` → after: `L970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L970) · [Before (L970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L970)

```diff
-   4605: (zz, uz, bz) => {
+   4671: (qq, Eq, gq) => {
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L972-L973` → after: `L972-L974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L972-L974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L972-L974) · [Before (L972-L973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L972-L973)

```diff
-       e: () => nz,
-       h: () => Ez,
+       b: () => lq,
+       d: () => Yq,
+       f: () => Oq,
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L975-L976` → after: `L976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R976) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L976) · [Before (L975-L976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L975-L976)

```diff
-       k: () => tz,
-       n: () => lz
+       m: () => mq
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js` (Changed code · before: `L1120` → after: `L1120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904R1120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cd761143affb2119000d3951fefdd590d166736641f2a763fb5cf065ff277904) · [After (L1120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L1120) · [Before (L1120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-skyblock-skyblockClient.js#L1120)

```diff
-       return "string" !== typeof zz ? zz : Object.hasOwn(iz, zz) ? iz[zz] : null
+       return "string" !== typeof qq ? qq : Object.hasOwn(Oq, qq) ? Oq[qq] : null
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js` (17 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5366e05f4ea14776226cc80aec2d384c8cb3f4d6a60567ab9711d4156866a484)

#### 1. `bundles/preprod.bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5366e05f4ea14776226cc80aec2d384c8cb3f4d6a60567ab9711d4156866a484R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5366e05f4ea14776226cc80aec2d384c8cb3f4d6a60567ab9711d4156866a484) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L4)

```diff
-   38898: (zz, uz, bz) => {
+   39455: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5366e05f4ea14776226cc80aec2d384c8cb3f4d6a60567ab9711d4156866a484R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5366e05f4ea14776226cc80aec2d384c8cb3f4d6a60567ab9711d4156866a484) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L8)

```diff
-     var Ez = bz(9013);
+     var Yq = gq(9304);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js` (Changed code · before: `L12-L14` → after: `L12-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5366e05f4ea14776226cc80aec2d384c8cb3f4d6a60567ab9711d4156866a484R12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5366e05f4ea14776226cc80aec2d384c8cb3f4d6a60567ab9711d4156866a484) · [After (L12-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L12-L14) · [Before (L12-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L12-L14)

```diff
-       if ("parenthetical-seconds" === uz) return ` (${zz}s)`;
-       const Ez = `${Math.floor(zz/60)}:${(zz%60).toString().padStart(2,"0")}`;
-       return bz ? `${bz}${Ez}` : Ez
+       if ("parenthetical-seconds" === Eq) return ` (${qq}s)`;
+       const Yq = `${Math.floor(qq/60)}:${(qq%60).toString().padStart(2,"0")}`;
+       return gq ? `${gq}${Yq}` : Yq
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js` (Changed code · before: `L22` → after: `L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5366e05f4ea14776226cc80aec2d384c8cb3f4d6a60567ab9711d4156866a484R22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5366e05f4ea14776226cc80aec2d384c8cb3f4d6a60567ab9711d4156866a484) · [After (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L22) · [Before (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L22)

```diff
-       Mz.content = [...null !== (lz = nz.baseNametag.content) && void 0 !== lz ? lz : [], {
+       xq.content = [...null !== (mq = lq.baseNametag.content) && void 0 !== mq ? mq : [], {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js` (Changed code · before: `L27` → after: `L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5366e05f4ea14776226cc80aec2d384c8cb3f4d6a60567ab9711d4156866a484R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5366e05f4ea14776226cc80aec2d384c8cb3f4d6a60567ab9711d4156866a484) · [After (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L27) · [Before (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L27)

```diff
-         str: `: ${(0,Ez.b)(iz)}`
+         str: `: ${(0,Yq.c)(Oq)}`
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js` (Changed code · before: `L42` → after: `L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5366e05f4ea14776226cc80aec2d384c8cb3f4d6a60567ab9711d4156866a484R42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5366e05f4ea14776226cc80aec2d384c8cb3f4d6a60567ab9711d4156866a484) · [After (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L42) · [Before (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L42)

```diff
-         sd: zz => {
+         SB: qq => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js` (Changed code · before: `L57` → after: `L57`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5366e05f4ea14776226cc80aec2d384c8cb3f4d6a60567ab9711d4156866a484R57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5366e05f4ea14776226cc80aec2d384c8cb3f4d6a60567ab9711d4156866a484) · [After (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L57) · [Before (L57)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L57)

```diff
-             if ("content" === nz.location) pz.content = [...null !== (bz = nz.baseNametag.content) && void 0 !== bz ? bz : [], Oz];
+             if ("content" === lq.location) Bq.content = [...null !== (gq = lq.baseNametag.content) && void 0 !== gq ? gq : [], uq];
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js` (Changed code · before: `L108` → after: `L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5366e05f4ea14776226cc80aec2d384c8cb3f4d6a60567ab9711d4156866a484R108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5366e05f4ea14776226cc80aec2d384c8cb3f4d6a60567ab9711d4156866a484) · [After (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L108) · [Before (L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L108)

```diff
-   9013: (zz, uz, bz) => {
+   9304: (qq, Eq, gq) => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js` (Changed code · before: `L110` → after: `L110`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5366e05f4ea14776226cc80aec2d384c8cb3f4d6a60567ab9711d4156866a484R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5366e05f4ea14776226cc80aec2d384c8cb3f4d6a60567ab9711d4156866a484) · [After (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L110) · [Before (L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L110)

```diff
-       b: () => nz,
+       c: () => lq,
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js` (Changed code · before: `L302` → after: `L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5366e05f4ea14776226cc80aec2d384c8cb3f4d6a60567ab9711d4156866a484R302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5366e05f4ea14776226cc80aec2d384c8cb3f4d6a60567ab9711d4156866a484) · [After (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L302) · [Before (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L302)

```diff
-           return bz >= 10 ? `${uz}${bz.toFixed(1).replace(/\.0$/,"")}` : `${uz}${bz.toFixed(2).replace(/\.?0+$/,"")}`
+           return gq >= 10 ? `${Eq}${gq.toFixed(1).replace(/\.0$/,"")}` : `${Eq}${gq.toFixed(2).replace(/\.?0+$/,"")}`
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js` (Changed code · before: `L306` → after: `L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5366e05f4ea14776226cc80aec2d384c8cb3f4d6a60567ab9711d4156866a484R306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5366e05f4ea14776226cc80aec2d384c8cb3f4d6a60567ab9711d4156866a484) · [After (L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L306) · [Before (L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L306)

```diff
-       const nz = uz < 0n ? -uz : uz,
+       const lq = Eq < 0n ? -Eq : Eq,
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js` (Changed code · before: `L309` → after: `L309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5366e05f4ea14776226cc80aec2d384c8cb3f4d6a60567ab9711d4156866a484R309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5366e05f4ea14776226cc80aec2d384c8cb3f4d6a60567ab9711d4156866a484) · [After (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L309) · [Before (L309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L309)

```diff
-       if (lz.length <= bz) return `${iz}${lz}`;
+       if (mq.length <= gq) return `${Oq}${mq}`;
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js` (Changed code · before: `L311` → after: `L311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5366e05f4ea14776226cc80aec2d384c8cb3f4d6a60567ab9711d4156866a484R311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5366e05f4ea14776226cc80aec2d384c8cb3f4d6a60567ab9711d4156866a484) · [After (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L311) · [Before (L311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L311)

```diff
-       if (Mz < 3) return `${iz}${lz}`;
+       if (xq < 3) return `${Oq}${mq}`;
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js` (Changed code · before: `L315` → after: `L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5366e05f4ea14776226cc80aec2d384c8cb3f4d6a60567ab9711d4156866a484R315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5366e05f4ea14776226cc80aec2d384c8cb3f4d6a60567ab9711d4156866a484) · [After (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L315) · [Before (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L315)

```diff
-         return `${iz}${uz?`${zz}.${uz}`:zz}e${lz.length-1}`
+         return `${Oq}${Eq?`${qq}.${Eq}`:qq}e${mq.length-1}`
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js` (Changed code · before: `L322` → after: `L322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5366e05f4ea14776226cc80aec2d384c8cb3f4d6a60567ab9711d4156866a484R322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5366e05f4ea14776226cc80aec2d384c8cb3f4d6a60567ab9711d4156866a484) · [After (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L322) · [Before (L322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L322)

```diff
-       return Fz = dz >= 100 ? Math.floor(dz).toString() : dz >= 10 ? dz.toFixed(1).replace(/\.0$/, "") : dz.toFixed(2).replace(/\.?0+$/, ""), `${iz}${Fz}${Hz}`
+       return Nq = Wq >= 100 ? Math.floor(Wq).toString() : Wq >= 10 ? Wq.toFixed(1).replace(/\.0$/, "") : Wq.toFixed(2).replace(/\.?0+$/, ""), `${Oq}${Nq}${cq}`
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js` (Changed code · before: `L350` → after: `L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5366e05f4ea14776226cc80aec2d384c8cb3f4d6a60567ab9711d4156866a484R350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5366e05f4ea14776226cc80aec2d384c8cb3f4d6a60567ab9711d4156866a484) · [After (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L350) · [Before (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L350)

```diff
-           if (zz >= 1e3) return `${bz}${uz.toExponential(2).replace("e+","e")}`;
+           if (qq >= 1e3) return `${gq}${Eq.toExponential(2).replace("e+","e")}`;
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js` (Changed code · before: `L352-L353` → after: `L352-L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5366e05f4ea14776226cc80aec2d384c8cb3f4d6a60567ab9711d4156866a484R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5366e05f4ea14776226cc80aec2d384c8cb3f4d6a60567ab9711d4156866a484) · [After (L352-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L352-L353) · [Before (L352-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGame-tsunami-tsunamiClient.js#L352-L353)

```diff
-           return iz = zz >= 100 ? Math.floor(zz).toString() : zz >= 10 ? zz.toFixed(1).replace(/\.0$/, "") : zz.toFixed(2).replace(/\.?0+$/, ""), `${bz}${iz}${nz}`
-         } return `${bz}${uz}`
+           return Oq = qq >= 100 ? Math.floor(qq).toString() : qq >= 10 ? qq.toFixed(1).replace(/\.0$/, "") : qq.toFixed(2).replace(/\.?0+$/, ""), `${gq}${Oq}${lq}`
+         } return `${gq}${Eq}`
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js` (54 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dce)

#### 1. `bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dceR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dce) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L4)

```diff
-   4601: (zz, uz, bz) => {
+   4662: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L6-L7` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dceR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dce) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L6-L7) · [Before (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L6-L7)

```diff
-       e: () => Vz,
-       g: () => az
+       b: () => Tq,
+       f: () => Mq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L9-L10` → after: `L9-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dceR9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dce) · [After (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L9-L10) · [Before (L9-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L9-L10)

```diff
-     var Ez = bz(4605),
-       nz = bz(316);
+     var Yq = gq(4671),
+       lq = gq(296);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L21-L23` → after: `L21-L23`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dceR21) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dce) · [After (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L21-L23) · [Before (L21-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L21-L23)

```diff
-       Rz = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${Zz}$`),
-       Kz = new RegExp(`[?\uff1f]${Zz}$`),
-       wz = new RegExp(`[!\uff01]${Zz}$`),
+       Vq = new RegExp(`[.!?\u2026\u3002\uff01\uff1f]${aq}$`),
+       dq = new RegExp(`[?\uff1f]${aq}$`),
+       jq = new RegExp(`[!\uff01]${aq}$`),
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L26-L27` → after: `L26-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dceR26) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dce) · [After (L26-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L26-L27) · [Before (L26-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L26-L27)

```diff
-       sz = new RegExp(`[${fz}]`),
-       rz = new RegExp(`[${fz}]|[^${fz}]+`, "g"),
+       Pq = new RegExp(`[${oq}]`),
+       Qq = new RegExp(`[${oq}]|[^${oq}]+`, "g"),
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L42` → after: `L42`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dceR42) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dce) · [After (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L42) · [Before (L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L42)

```diff
-       const nz = null !== (uz = bz.match(oz)) && void 0 !== uz ? uz : [];
+       const lq = null !== (Eq = gq.match(yq)) && void 0 !== Eq ? Eq : [];
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dceR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dce) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L45)

```diff
-         const zz = null !== (iz = null === (lz = bz.match(/\p{L}/gu)) || void 0 === lz ? void 0 : lz.length) && void 0 !== iz ? iz : 0;
+         const qq = null !== (Oq = null === (mq = gq.match(/\p{L}/gu)) || void 0 === mq ? void 0 : mq.length) && void 0 !== Oq ? Oq : 0;
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L64-L65` → after: `L64-L65`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dceR64) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dce) · [After (L64-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L64-L65) · [Before (L64-L65)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L64-L65)

```diff
-       const Fz = uz && (0, Ez.k)(uz),
-         Zz = null !== (bz = null === Fz || void 0 === Fz ? void 0 : Fz.syllableMs) && void 0 !== bz ? bz : Ez.e,
+       const Nq = Eq && (0, Yq.i)(Eq),
+         aq = null !== (gq = null === Nq || void 0 === Nq ? void 0 : Nq.syllableMs) && void 0 !== gq ? gq : Yq.b,
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L68` → after: `L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dceR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dce) · [After (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L68) · [Before (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L68)

```diff
-           for (const Ez of (0, nz.uc)(zz))
+           for (const Yq of (0, lq.Zb)(qq))
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L88` → after: `L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dceR88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dce) · [After (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L88) · [Before (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L88)

```diff
-                 for (const nz of null !== (bz = zz.match(rz)) && void 0 !== bz ? bz : []) {
+                 for (const lq of null !== (gq = qq.match(Qq)) && void 0 !== gq ? gq : []) {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L115` → after: `L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dceR115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dce) · [After (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L115) · [Before (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L115)

```diff
-         const zz = null !== (Pz = null === (Gz = Ez.at(-1)) || void 0 === Gz ? void 0 : Gz.text) && void 0 !== Pz ? Pz : "",
+         const qq = null !== (Zq = null === (fq = Yq.at(-1)) || void 0 === fq ? void 0 : fq.text) && void 0 !== Zq ? Zq : "",
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L129` → after: `L129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dceR129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dce) · [After (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L129) · [Before (L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L129)

```diff
-             lz += Nz(`${xz(wz.text)}|${nz}`) * iz.variationSemitones;
+             mq += tq(`${vq(jq.text)}|${lq}`) * Oq.variationSemitones;
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L141` → after: `L141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dceR141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dce) · [After (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L141) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L141)

```diff
-           Lz += Ez * Zz + (Rz.test(wz.text) ? lz : Xz.test(wz.text) ? iz : 0)
+           iq += Yq * aq + (Vq.test(jq.text) ? mq : Hq.test(jq.text) ? Oq : 0)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L145` → after: `L145`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dceR145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dce) · [After (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L145) · [Before (L145)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L145)

```diff
-         pieces: fz.map((zz => "space" === zz.kind ? zz : "icon" === zz.kind ? {
+         pieces: oq.map((qq => "space" === qq.kind ? qq : "icon" === qq.kind ? {
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L157` → after: `L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dceR157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dce) · [After (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L157) · [Before (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L157)

```diff
-     var Tz = bz(1181),
+     var bq = gq(1183),
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L159` → after: `L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dceR159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dce) · [After (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L159) · [Before (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L159)

```diff
-       Pz = bz(1873);
+       Zq = gq(1906);
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L164` → after: `L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dceR164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dce) · [After (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L164) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L164)

```diff
-       return (0, Tz.s)(uz, zz.translationKey, (0, Tz.q)(zz.params, Pz.b.shown))
+       return (0, bq.n)(Eq, qq.translationKey, (0, bq.j)(qq.params, Zq.d.shown))
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L168-L169` → after: `L168-L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dceR168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dce) · [After (L168-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L168-L169) · [Before (L168-L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L168-L169)

```diff
-       const uz = void 0 === zz.voice ? null : (0, Ez.n)(zz.voice),
-         bz = uz && (0, Ez.k)(uz);
+       const Eq = void 0 === qq.voice ? null : (0, Yq.m)(qq.voice),
+         gq = Eq && (0, Yq.i)(Eq);
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L186` → after: `L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dceR186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dce) · [After (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L186) · [Before (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L186)

```diff
-   4609: (zz, uz, bz) => {
+   4679: (qq, Eq, gq) => {
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L188-L189` → after: `L188-L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dceR188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dce) · [After (L188-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L188-L189) · [Before (L188-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L188-L189)

```diff
-       c: () => Oz,
-       d: () => pz
+       e: () => uq,
+       g: () => Bq
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L191-L192` → after: `L191-L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dceR191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dce) · [After (L191-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L191-L192) · [Before (L191-L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L191-L192)

```diff
-     var Ez = bz(4616),
-       nz = bz(20);
+     var Yq = gq(4684),
+       lq = gq(24);
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L249` → after: `L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dceR249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dce) · [After (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L249) · [Before (L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L249)

```diff
-       if (!iz || !lz || !nz.e.get("soundOnFromAd")) return () => {};
+       if (!Oq || !mq || !lq.b.get("soundOnFromAd")) return () => {};
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L251` → after: `L251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dceR251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dce) · [After (L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L251) · [Before (L251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L251)

```diff
-       return null === (bz = Mz._autoResume) || void 0 === bz || bz.call(Mz), Oz(iz, lz, zz, uz, nz.e.get("soundVolume"), (() => {
+       return null === (gq = xq._autoResume) || void 0 === gq || gq.call(xq), uq(Oq, mq, qq, Eq, lq.b.get("soundVolume"), (() => {
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L257` → after: `L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dceR257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dce) · [After (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L257) · [Before (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L257)

```diff
-   38489: (zz, uz, bz) => {
+   39093: (qq, Eq, gq) => {
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L262` → after: `L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dceR262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dce) · [After (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L262) · [Before (L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L262)

```diff
-     var Ez = bz(328);
+     var Yq = gq(307);
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L281` → after: `L281`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dceR281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dce) · [After (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L281) · [Before (L281)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L281)

```diff
-               color: Ez.N.redUiText
+               color: Yq.M.redUiText
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L287` → after: `L287`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dceR287) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dce) · [After (L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L287) · [Before (L287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L287)

```diff
-     var iz = bz(4035),
+     var Oq = gq(4096),
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L298` → after: `L298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dceR298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dce) · [After (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L298) · [Before (L298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L298)

```diff
-         Bp: 1,
+         WB: 1,
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L313` → after: `L313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dceR313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dce) · [After (L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L313) · [Before (L313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L313)

```diff
-         blendMode: iz.d.Standard
+         blendMode: Oq.h.Standard
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L318` → after: `L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dceR318) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dce) · [After (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L318) · [Before (L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L318)

```diff
-         Bp: 96,
+         WB: 96,
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L339` → after: `L339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dceR339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dce) · [After (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L339) · [Before (L339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L339)

```diff
-         blendMode: iz.d.Standard
+         blendMode: Oq.h.Standard
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L400` → after: `L400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dceR400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dce) · [After (L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L400) · [Before (L400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L400)

```diff
-           if (zz !== lz.y) return;
+           if (qq !== mq.D) return;
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L422-L423` → after: `L422-L423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dceR422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dce) · [After (L422-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L422-L423) · [Before (L422-L423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L422-L423)

```diff
-     var Xz = bz(4609),
-       fz = bz(4601);
+     var Hq = gq(4679),
+       oq = gq(4662);
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L444-L445` → after: `L444-L445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dceR444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dce) · [After (L444-L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L444-L445) · [Before (L444-L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L444-L445)

```diff
-           } = (0, fz.g)(iz);
-           Mz && (Ez = (0, Xz.d)(Mz, lz.blips))
+           } = (0, oq.f)(Oq);
+           xq && (Yq = (0, Hq.g)(xq, mq.blips))
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L450` → after: `L450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dceR450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dce) · [After (L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L450) · [Before (L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L450)

```diff
-     var rz = bz(38496);
+     var Qq = gq(39098);
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L464` → after: `L464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dceR464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dce) · [After (L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L464) · [Before (L464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L464)

```diff
-       const Mz = ((null !== (Ez = zz.getMetaInfo(bz).rot) && void 0 !== Ez ? Ez : 1) - 1) * Math.PI / 2,
+       const xq = ((null !== (Yq = qq.getMetaInfo(gq).rot) && void 0 !== Yq ? Yq : 1) - 1) * Math.PI / 2,
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L504` → after: `L504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dceR504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dce) · [After (L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L504) · [Before (L504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L504)

```diff
-           blendMode: iz.d.Standard,
+           blendMode: Oq.h.Standard,
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L521` → after: `L521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dceR521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dce) · [After (L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L521) · [Before (L521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L521)

```diff
-           blendMode: iz.d.Add,
+           blendMode: Oq.h.Add,
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L534` → after: `L534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dceR534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dce) · [After (L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L534) · [Before (L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L534)

```diff
-         let nz = this.smokes.find((zz => zz.pos[0] === uz[0] && zz.pos[1] === uz[1] && zz.pos[2] === uz[2] && zz.hO === bz));
+         let lq = this.smokes.find((qq => qq.pos[0] === Eq[0] && qq.pos[1] === Eq[1] && qq.pos[2] === Eq[2] && qq.lc === gq));
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L537` → after: `L537`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dceR537) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dce) · [After (L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L537) · [Before (L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L537)

```diff
-             hO: bz,
+             lc: gq,
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L543` → after: `L543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dceR543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dce) · [After (L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L543) · [Before (L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L543)

```diff
-           const uz = this.smokes.reduce(((zz, uz) => uz.endMs < zz.endMs ? uz : zz));
+           const Eq = this.smokes.reduce(((qq, Eq) => Eq.endMs < qq.endMs ? Eq : qq));
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L555` → after: `L555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dceR555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dce) · [After (L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L555) · [Before (L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L555)

```diff
-           const [Ez, nz, iz] = uz.pos, lz = bz < uz.endMs && zz.getBlockId(Ez, nz, iz) === uz.hO;
+           const [Yq, lq, Oq] = Eq.pos, mq = gq < Eq.endMs && qq.getBlockId(Yq, lq, Oq) === Eq.lc;
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L586` → after: `L586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dceR586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dce) · [After (L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L586) · [Before (L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L586)

```diff
-         for (const bz of null !== (uz = this.puffers) && void 0 !== uz ? uz : []) {
+         for (const gq of null !== (Eq = this.puffers) && void 0 !== Eq ? Eq : []) {
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L616` → after: `L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dceR616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dce) · [After (L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L616) · [Before (L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L616)

```diff
-           bz === lz.A && uz.start(zz, Ez)
+           gq === mq.F && Eq.start(qq, Yq)
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L637` → after: `L637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dceR637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dce) · [After (L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L637) · [Before (L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L637)

```diff
-       for (const nz of [zz, ...null !== uz && void 0 !== uz ? uz : []]) try {
+       for (const lq of [qq, ...null !== Eq && void 0 !== Eq ? Eq : []]) try {
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L645` → after: `L645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dceR645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dce) · [After (L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L645) · [Before (L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L645)

```diff
-   38496: (zz, uz, bz) => {
+   39098: (qq, Eq, gq) => {
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L647` → after: `L647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dceR647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dce) · [After (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L647) · [Before (L647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L647)

```diff
-       c: () => Ez,
+       b: () => Yq,
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L656` → after: `L656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dceR656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dce) · [After (L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L656) · [Before (L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L656)

```diff
-         this.style = zz, this.Bp = uz, this.half = bz, this.particles = null, this.lastFrame = -1
+         this.style = qq, this.WB = Eq, this.half = gq, this.particles = null, this.lastFrame = -1
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L666-L667` → after: `L666-L667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dceR666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dce) · [After (L666-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L666-L667) · [Before (L666-L667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L666-L667)

```diff
-             texture: zz.soft ? nz : "square_particle",
-             Bp: uz,
+             texture: qq.soft ? lq : "square_particle",
+             WB: Eq,
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L689` → after: `L689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dceR689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dce) · [After (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L689) · [Before (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L689)

```diff
-         }(this.style, this.Bp), {
+         }(this.style, this.WB), {
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L700` → after: `L700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dceR700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dce) · [After (L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L700) · [Before (L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L700)

```diff
-   4605: (zz, uz, bz) => {
+   4671: (qq, Eq, gq) => {
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L702-L703` → after: `L702-L704`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dceR702) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dce) · [After (L702-L704)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L702-L704) · [Before (L702-L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L702-L703)

```diff
-       e: () => nz,
-       h: () => Ez,
+       b: () => lq,
+       d: () => Yq,
+       f: () => Oq,
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L705-L706` → after: `L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dceR706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dce) · [After (L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L706) · [Before (L705-L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L705-L706)

```diff
-       k: () => tz,
-       n: () => lz
+       m: () => mq
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js` (Changed code · before: `L850` → after: `L850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dceR850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9a33b90cd1d60f89b330301756e111b2bfcc6a2071ac83c8a9164b6891634dce) · [After (L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L850) · [Before (L850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/clientGamePlugins.js#L850)

```diff
-       return "string" !== typeof zz ? zz : Object.hasOwn(iz, zz) ? iz[zz] : null
+       return "string" !== typeof qq ? qq : Object.hasOwn(Oq, qq) ? Oq[qq] : null
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/controller.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/controller.js` (851 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a)

#### 1. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L4)

```diff
-   7911: (zz, uz, bz) => {
+   8133: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L6-L81` → after: `L6-L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L6-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L6-L81) · [Before (L6-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L6-L81)

```diff
-       "./nintendo/A.svg": 7915,
-       "./nintendo/B.svg": 7918,
-       "./nintendo/Down.svg": 7927,
-       "./nintendo/Home.svg": 7929,
-       "./nintendo/LB.svg": 7938,
-       "./nintendo/LS.svg": 7940,
-       "./nintendo/LT.svg": 7946,
-       "./nintendo/Left.svg": 7949,
-       "./nintendo/LeftStick.svg": 7953,
-       "./nintendo/Menu.svg": 7956,
-       "./nintendo/RB.svg": 7960,
-       "./nintendo/RS.svg": 7967,
-       "./nintendo/RT.svg": 7974,
-       "./nintendo/Right.svg": 7980,
-       "./nintendo/RightStick.svg": 7988,
-       "./nintendo/Up.svg": 7994,
- ... (60 more removed lines; see GitHub link above)
+       "./nintendo/A.svg": 8138,
+       "./nintendo/B.svg": 8146,
+       "./nintendo/Down.svg": 8152,
+       "./nintendo/Home.svg": 8154,
+       "./nintendo/LB.svg": 8156,
+       "./nintendo/LS.svg": 8161,
+       "./nintendo/LT.svg": 8163,
+       "./nintendo/Left.svg": 8169,
+       "./nintendo/LeftStick.svg": 8174,
+       "./nintendo/Menu.svg": 8179,
+       "./nintendo/RB.svg": 8183,
+       "./nintendo/RS.svg": 8189,
+       "./nintendo/RT.svg": 8198,
+       "./nintendo/Right.svg": 8202,
+       "./nintendo/RightStick.svg": 8206,
+       "./nintendo/Up.svg": 8212,
+ ... (60 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L98` → after: `L98`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR98) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L98) · [Before (L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L98)

```diff
-     }, nz.resolve = iz, zz.exports = nz, nz.id = 7911
+     }, lq.resolve = Oq, qq.exports = lq, lq.id = 8133
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L100` → after: `L100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L100) · [Before (L100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L100)

```diff
-   4746: (zz, uz, bz) => {
+   4828: (qq, Eq, gq) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L102-L103` → after: `L102`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR102) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L102) · [Before (L102-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L102-L103)

```diff
-       b: () => Zz,
-       e: () => fz,
+       d: () => aq,
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L105` → after: `L104-L105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR104) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L104-L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L104-L105) · [Before (L105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L105)

```diff
-       j: () => Xz
+       h: () => Vq,
+       l: () => Hq
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L107-L112` → after: `L107-L112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L107-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L107-L112) · [Before (L107-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L107-L112)

```diff
-     var Ez = bz(56),
-       nz = bz(4753),
-       iz = bz(4144),
-       lz = bz(1332),
-       Mz = bz(4770),
-       tz = bz(1038),
+     var Yq = gq(57),
+       lq = gq(4837),
+       Oq = gq(4195),
+       mq = gq(1341),
+       xq = gq(4858),
+       Aq = gq(1018),
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L114-L117` → after: `L114-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L114-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L114-L117) · [Before (L114-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L114-L117)

```diff
-       Oz = bz(1322),
-       pz = bz(1673),
-       dz = bz(4776),
-       Fz = bz(1089);
+       uq = gq(1336),
+       Bq = gq(1710),
+       Wq = gq(4866),
+       Nq = gq(1070);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L153` → after: `L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L153) · [Before (L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L153)

```diff
-               children: (0, Fz.jsx)(lz.b, {
+               children: (0, Nq.jsx)(mq.c, {
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L200` → after: `L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L200) · [Before (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L200)

```diff
-           children: [`${uz}: ${pz?pz(sz):sz}`, Oz && (0, Fz.jsx)(lz.b, {
+           children: [`${Eq}: ${Bq?Bq(Pq):Pq}`, uq && (0, Nq.jsx)(mq.c, {
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L255` → after: `L255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L255) · [Before (L255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L255)

```diff
-         const Ez = null !== (zz = null === (uz = Nz.current) || void 0 === uz ? void 0 : uz.querySelector(".rangeslider")) && void 0 !== zz ? zz : null;
+         const Yq = null !== (qq = null === (Eq = tq.current) || void 0 === Eq ? void 0 : Eq.querySelector(".rangeslider")) && void 0 !== qq ? qq : null;
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L261` → after: `L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L261) · [Before (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L261)

```diff
-       const xz = (null !== (uz = String(Mz).split(".")[1]) && void 0 !== uz ? uz : "").length,
+       const vq = (null !== (Eq = String(xq).split(".")[1]) && void 0 !== Eq ? Eq : "").length,
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L279` → after: `L279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L279) · [Before (L279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L279)

```diff
-       return (0, dz.f)(vz, {
+       return (0, Wq.i)(rq, {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L282` → after: `L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L282) · [Before (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L282)

```diff
-           const uz = null !== rz && void 0 !== rz ? rz : Math.max(Mz, Math.round((lz - iz) / 20 / Mz) * Mz),
+           const Eq = null !== Qq && void 0 !== Qq ? Qq : Math.max(xq, Math.round((mq - Oq) / 20 / xq) * xq),
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L288` → after: `L288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L288) · [Before (L288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L288)

```diff
-           const uz = Jz(iz + (Oz ? 1 - zz : zz) * (lz - iz));
+           const Eq = hq(Oq + (uq ? 1 - qq : qq) * (mq - Oq));
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L299` → after: `L299`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR299) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L299) · [Before (L299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L299)

```diff
-         children: (0, Fz.jsx)(nz.c, {
+         children: (0, Nq.jsx)(lq.d, {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L346` → after: `L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L346) · [Before (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L346)

```diff
-           children: [uz, iz && (0, Fz.jsx)(lz.b, {
+           children: [Eq, Oq && (0, Nq.jsx)(mq.c, {
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L350` → after: `L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L350) · [Before (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L350)

```diff
-         }), (0, Fz.jsx)(Mz.d, {
+         }), (0, Nq.jsx)(xq.c, {
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L359` → after: `L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L359) · [Before (L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L359)

```diff
-   4770: (zz, uz, bz) => {
+   4858: (qq, Eq, gq) => {
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L361` → after: `L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L361) · [Before (L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L361)

```diff
-       d: () => lz
+       c: () => mq
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L363` → after: `L363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L363) · [Before (L363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L363)

```diff
-     var Ez = bz(1038),
+     var Yq = gq(1018),
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L365` → after: `L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L365) · [Before (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L365)

```diff
-       iz = bz(1089);
+       Oq = gq(1070);
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L375` → after: `L375-L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L375-L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L375-L376) · [Before (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L375)

```diff
-         keepsFocus: Hz = !1
+         keepsFocus: cq = !1,
+         padTabs: uq
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L403` → after: `L409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L409) · [Before (L403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L403)

```diff
-   7859: (zz, uz, bz) => {
+   8081: (qq, Eq, gq) => {
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L405-L406` → after: `L411-L412`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L411-L412)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L411-L412) · [Before (L405-L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L405-L406)

```diff
-       d: () => nz,
-       e: () => iz,
+       b: () => lq,
+       f: () => Oq,
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L408-L409` → after: `L414-L415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L414-L415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L414-L415) · [Before (L408-L409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L408-L409)

```diff
-       h: () => pz,
-       l: () => Hz,
+       i: () => Bq,
+       m: () => cq,
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L411-L413` → after: `L417-L419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L417-L419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L417-L419) · [Before (L411-L413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L411-L413)

```diff
-       r: () => Ez,
-       s: () => Fz,
-       w: () => Zz
+       p: () => Yq,
+       t: () => Nq,
+       u: () => aq
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L475` → after: `L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L481) · [Before (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L475)

```diff
-       Mz = zz => lz.includes(zz) ? lz : [zz],
+       xq = qq => mq.includes(qq) ? mq : [qq],
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L493` → after: `L499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L499) · [Before (L493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L493)

```diff
-         return [Hz(zz), ...null !== (uz = Oz[zz]) && void 0 !== uz ? uz : []]
+         return [cq(qq), ...null !== (Eq = uq[qq]) && void 0 !== Eq ? Eq : []]
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L516` → after: `L522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L522) · [Before (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L516)

```diff
-   7851: (zz, uz, bz) => {
+   8073: (qq, Eq, gq) => {
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L518` → after: `L524-L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L524-L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L524-L525) · [Before (L518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L518)

```diff
-       B: () => vz,
+       C: () => hq,
+       D: () => uq,
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L520-L523` → after: `L527-L528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L527-L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L527-L528) · [Before (L520-L523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L520-L523)

```diff
-       H: () => Jz,
-       K: () => Oz,
-       L: () => xz,
-       P: () => Lz,
+       G: () => iq,
+       d: () => Hq,
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L527-L529` → after: `L531-L534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L531-L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L531-L534) · [Before (L527-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L527-L529)

```diff
-       l: () => Fz,
-       o: () => Gz,
-       q: () => Tz,
+       j: () => Nq,
+       m: () => fq,
+       p: () => bq,
+       t: () => nq,
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L532` → after: `L538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L538) · [Before (L532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L532)

```diff
-       y: () => Pz
+       z: () => oq
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L534-L537` → after: `L540-L543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L540-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L540-L543) · [Before (L534-L537)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L534-L537)

```diff
-     var Ez = bz(7859),
-       nz = bz(7863),
-       iz = bz(7837),
-       lz = bz(7877);
+     var Yq = gq(8081),
+       lq = gq(8090),
+       Oq = gq(8061),
+       mq = gq(8110);
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L542` → after: `L548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L548) · [Before (L542)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L542)

```diff
-         return null !== (bz = zz[nz]) && void 0 !== bz ? bz : Ez.e[nz]
+         return null !== (gq = qq[lq]) && void 0 !== gq ? gq : Yq.f[lq]
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L555-L560` → after: `L561-L566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR561) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L561-L566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L561-L566) · [Before (L555-L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L555-L560)

```diff
-       Oz = (zz, uz) => null !== zz && void 0 !== zz ? zz : "nintendo" === uz,
-       pz = zz => Oz((0, nz.g)().swapConfirmBack, (0, nz.k)()) && Hz.get(zz) || zz,
-       dz = zz => tz((0, nz.g)().bindings, pz(zz)),
-       Fz = zz => Ez.e[pz(zz)],
-       Zz = Object.keys(Ez.e),
-       Rz = zz => "gameplay" === (0, Ez.l)(zz) ? ["gameplay"] : (0, Ez.h)(zz),
+       uq = (qq, Eq) => null !== qq && void 0 !== qq ? qq : "nintendo" === Eq,
+       Bq = qq => uq((0, lq.i)().swapConfirmBack, (0, lq.k)()) && cq.get(qq) || qq,
+       Wq = qq => Aq((0, lq.i)().bindings, Bq(qq)),
+       Nq = qq => Yq.f[Bq(qq)],
+       aq = Object.keys(Yq.f),
+       Vq = qq => "gameplay" === (0, Yq.m)(qq) ? ["gameplay"] : (0, Yq.i)(qq),
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L578-L580` → after: `L584-L586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L584-L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L584-L586) · [Before (L578-L580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L578-L580)

```diff
-           const uz = tz(zz, pz) === nz ? bz : nz,
-             lz = (0, Ez.h)(pz).some((zz => Ez.g.has(zz)));
-           if ((0, iz.O)(uz) && lz) return null;
+           const Eq = Aq(qq, Bq) === lq ? gq : lq,
+             mq = (0, Yq.i)(Bq).some((qq => Yq.g.has(qq)));
+           if ((0, Oq.H)(Eq) && mq) return null;
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L583` → after: `L589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L589) · [Before (L583)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L583)

```diff
-         for (const iz of Object.keys(Oz)) Oz[iz] === Ez.e[iz] && delete Oz[iz];
+         for (const Oq of Object.keys(uq)) uq[Oq] === Yq.f[Oq] && delete uq[Oq];
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L586` → after: `L592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L592) · [Before (L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L586)

```diff
-       Xz = (zz, uz) => null !== wz((0, nz.g)().bindings, pz(zz), uz),
+       Hq = (qq, Eq) => null !== jq((0, lq.i)().bindings, Bq(qq), Eq),
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L589-L590` → after: `L595-L596`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L595-L596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L595-L596) · [Before (L589-L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L589-L590)

```diff
-         const bz = wz((0, nz.g)().bindings, pz(zz), uz);
-         return !!bz && ((0, nz.o)({
+         const gq = jq((0, lq.i)().bindings, Bq(qq), Eq);
+         return !!gq && ((0, lq.n)({
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L612` → after: `L618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L618) · [Before (L612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L612)

```diff
-         const bz = (0, nz.g)();
+         const gq = (0, lq.i)();
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L615` → after: `L621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L621) · [Before (L615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L615)

```diff
-           const bz = uz ? oz[zz][nz] : Ez.e[nz];
+           const gq = Eq ? yq[qq][lq] : Yq.f[lq];
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L618-L619` → after: `L624-L625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L624-L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L624-L625) · [Before (L618-L619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L618-L619)

```diff
-         return (0, nz.o)({
-           swapSticks: "southpaw" === zz ? uz : bz.swapSticks,
+         return (0, lq.n)({
+           swapSticks: "southpaw" === qq ? Eq : gq.swapSticks,
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L624` → after: `L630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L630) · [Before (L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L624)

```diff
-         (0, nz.o)({
+         (0, lq.n)({
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L629-L631` → after: `L635-L637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L635-L637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L635-L637) · [Before (L629-L631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L629-L631)

```diff
-       Az = () => (0, nz.g)().swapSticks ? "RightStick" : "LeftStick",
-       Tz = () => (0, nz.g)().swapSticks ? "LeftStick" : "RightStick",
-       Lz = zz => (0, nz.g)().swapSticks && (0, iz.O)(zz),
+       nq = () => (0, lq.i)().swapSticks ? "RightStick" : "LeftStick",
+       bq = () => (0, lq.i)().swapSticks ? "LeftStick" : "RightStick",
+       iq = qq => (0, lq.i)().swapSticks && (0, Oq.H)(qq),
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L634-L636` → after: `L640-L642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR640) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L640-L642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L640-L642) · [Before (L634-L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L634-L636)

```diff
-         if (Ez.w.has(zz)) return Az();
-         const uz = Ez.s[zz];
-         return uz && ("leaderboard" !== uz || (0, lz.g)(zz, (0, lz.e)())) ? dz(uz) : null
+         if (Yq.u.has(qq)) return nq();
+         const Eq = Yq.t[qq];
+         return Eq && ("leaderboard" !== Eq || (0, mq.d)(qq, (0, mq.c)())) ? Wq(Eq) : null
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L639` → after: `L645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L645) · [Before (L639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L639)

```diff
-   7833: (zz, uz, bz) => {
+   8052: (qq, Eq, gq) => {
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L649-L650` → after: `L655-L656`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR655) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L655-L656)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L655-L656) · [Before (L649-L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L649-L650)

```diff
-       getControllerSettings: () => dz.g,
-       getGlyphForNoaAction: () => Oz.o,
+       getControllerSettings: () => Wq.i,
+       getGlyphForNoaAction: () => uq.m,
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L655` → after: `L661`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR661) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L661) · [Before (L655)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L655)

```diff
-       getPadRepeatTiming: () => Rz.h,
+       getPadRepeatTiming: () => Vq.e,
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L661-L674` → after: `L667-L680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L667-L680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L667-L680) · [Before (L661-L674)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L661-L674)

```diff
-     var nz = bz(1181),
-       iz = bz(1377),
-       lz = bz(7835),
-       Mz = bz(79),
-       tz = bz(20),
-       Hz = bz(22),
-       Oz = bz(7851),
-       pz = bz(7879),
-       dz = bz(7863),
-       Fz = bz(7888),
-       Zz = bz(7837),
-       Rz = bz(8326),
-       Kz = bz(8328),
-       wz = bz(1613);
+     var lq = gq(1183),
+       Oq = gq(1380),
+       mq = gq(8057),
+       xq = gq(71),
+       Aq = gq(24),
+       cq = gq(31),
+       uq = gq(8073),
+       Bq = gq(8118),
+       Wq = gq(8090),
+       Nq = gq(8120),
+       aq = gq(8061),
+       Vq = gq(8594),
+       dq = gq(8599),
+       jq = gq(1646);
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L694` → after: `L700`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR700) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L700) · [Before (L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L694)

```diff
-           iz = (0, Zz.m)(uz.stick, sz(uz.moveDeadzone)),
+           Oq = (0, aq.j)(Eq.stick, Pq(Eq.moveDeadzone)),
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L753` → after: `L759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L759) · [Before (L753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L753)

```diff
-         const uz = (0, Zz.m)(zz, .2);
+         const Eq = (0, aq.j)(qq, .2);
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L757` → after: `L763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L763) · [Before (L757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L757)

```diff
-         const bz = (0, Zz.m)(zz, .2),
+         const gq = (0, aq.j)(qq, .2),
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L778` → after: `L784`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L784)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L784) · [Before (L778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L778)

```diff
-         for (let iz = zz instanceof HTMLElement ? zz : null !== (Ez = null === zz || void 0 === zz ? void 0 : zz.parentElement) && void 0 !== Ez ? Ez : null; iz; iz = iz.parentElement) {
+         for (let Oq = qq instanceof HTMLElement ? qq : null !== (Yq = null === qq || void 0 === qq ? void 0 : qq.parentElement) && void 0 !== Yq ? Yq : null; Oq; Oq = Oq.parentElement) {
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L785` → after: `L791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L791) · [Before (L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L785)

```diff
-         return nz instanceof HTMLElement && xz(nz, uz) ? nz : null
+         return lq instanceof HTMLElement && vq(lq, Eq) ? lq : null
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L800` → after: `L806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L806) · [Before (L800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L800)

```diff
-         let bz = Jz(zz, uz) ? zz : null,
+         let gq = hq(qq, Eq) ? qq : null,
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L826-L827` → after: `L832-L833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR832) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L832-L833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L832-L833) · [Before (L826-L827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L826-L827)

```diff
-     var qz = bz(56),
-       hz = bz(1038),
+     var Sq = gq(57),
+       pq = gq(1018),
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L829` → after: `L835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L835) · [Before (L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L829)

```diff
-       cz = bz(1089);
+       Lq = gq(1070);
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L843` → after: `L849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR849) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L849) · [Before (L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L843)

```diff
-           Ez = bz ? `${bz.left},${bz.top},${bz.width},${bz.height}` : "";
+           Yq = gq ? `${gq.left},${gq.top},${gq.width},${gq.height}` : "";
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L846` → after: `L852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L852) · [Before (L846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L846)

```diff
-         this.shownKey = Ez, uz.classList.toggle("Visible", null !== bz), bz && (uz.classList.toggle("Snap", nz), uz.style.width = `${bz.width}px`, uz.style.height = `${bz.height}px`, uz.style.transform = `translate(${bz.left}px, ${bz.top}px)`, nz && (uz.offsetWidth, uz.classList. … [truncated]
+         this.shownKey = Yq, Eq.classList.toggle("Visible", null !== gq), gq && (Eq.classList.toggle("Snap", lq), Eq.style.width = `${gq.width}px`, Eq.style.height = `${gq.height}px`, Eq.style.transform = `translate(${gq.left}px, ${gq.top}px)`, lq && (Eq.offsetWidth, Eq.classList. … [truncated]
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L853` → after: `L859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L859) · [Before (L853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L853)

```diff
-         const Ez = `${window.innerWidth}x${window.innerHeight}@${(()=>{if("undefined"===typeof ResizeObserver)return getComputedStyle(document.documentElement).fontSize;if(!Sz){Sz=!0;const zz=document.createElement("div");zz.setAttribute("aria-hidden","true"),zz.style.cssText="po … [truncated]
+         const Yq = `${window.innerWidth}x${window.innerHeight}@${(()=>{if("undefined"===typeof ResizeObserver)return getComputedStyle(document.documentElement).fontSize;if(!kq){kq=!0;const qq=document.createElement("div");qq.setAttribute("aria-hidden","true"),qq.style.cssText="po … [truncated]
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L863` → after: `L869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR869) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L869) · [Before (L863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L863)

```diff
-         return Mz <= iz || tz <= lz ? uz : {
+         return xq <= Oq || Aq <= mq ? Eq : {
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L885-L1133` → after: `L891-L897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L891-L897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L891-L897) · [Before (L885-L1133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L885-L1133)

```diff
-     var Qz = bz(8337),
-       Wz = bz(1681);
-     const ez = zz => zz >= 56320 && zz <= 57343,
-       jz = zz => zz >= 55296 && zz <= 56319,
-       Iz = (zz, uz) => uz >= 2 && ez(zz.charCodeAt(uz - 1)) && jz(zz.charCodeAt(uz - 2)) ? uz - 2 : Math.max(0, uz - 1),
-       Bz = (zz, uz) => {
-         let bz;
-         var Ez, nz;
-         return bz = zz.start !== zz.end ? uz < 0 ? zz.start : zz.end : uz < 0 ? Iz(zz.value, zz.start) : (Ez = zz.value, (nz = zz.start) + 1 < Ez.length && jz(Ez.charCodeAt(nz)) && ez(Ez.charCodeAt(nz + 1)) ? nz + 2 : Math.min(Ez.length, nz + 1)), {
-           value: zz.value,
-           start: bz,
-           end: bz
-         }
-       },
-       Cz = ["text", "search", "url", "email", "tel", "password", "number"],
-       Yz = zz => !(!(0, Wz.b)(zz) || zz.isContentEditable || zz.hasAttribute("data-pad-no-osk")) && (zz instanceof HTMLTextAreaElement || zz instanceof HTMLInputElement && Cz.includes(zz.type)),
- ... (233 more removed lines; see GitHub link above)
+     var Fq = gq(8601);
+     const sq = {
+       x: 0,
+       y: 0,
+       visible: !1,
+       pressed: !1
+     };
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L1135-L1149` → after: `L899-L909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L899-L909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L899-L909) · [Before (L1135-L1149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L1135-L1149)

```diff
-         constructor() {
-           this.state = cu, this.listeners = new Set
-         }
-         get() {
-           return this.state
-         }
-         set(zz) {
-           if (uz = this.state, bz = zz, (uz.visible || bz.visible) && (uz.visible !== bz.visible || uz.x !== bz.x || uz.y !== bz.y || uz.pressed !== bz.pressed)) {
-             var uz, bz;
-             this.state = zz;
-             for (const uz of this.listeners) uz(zz)
-           }
-         }
-         hide() {
-           this.set(cu)
+       constructor() {
+         this.state = sq, this.listeners = new Set
+       }
+       get() {
+         return this.state
+       }
+       set(qq) {
+         if (Eq = this.state, gq = qq, (Eq.visible || gq.visible) && (Eq.visible !== gq.visible || Eq.x !== gq.x || Eq.y !== gq.y || Eq.pressed !== gq.pressed)) {
+           var Eq, gq;
+           this.state = qq;
+           for (const Eq of this.listeners) Eq(qq)
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L1151-L1154` → after: `L911-L917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L911-L917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L911-L917) · [Before (L1151-L1154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L1151-L1154)

```diff
-         subscribe(zz) {
-           return this.listeners.add(zz), () => {
-             this.listeners.delete(zz)
-           }
+       }
+       hide() {
+         this.set(sq)
+       }
+       subscribe(qq) {
+         return this.listeners.add(qq), () => {
+           this.listeners.delete(qq)
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L1156-L1157` → after: `L919-L922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR919) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L919-L922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L919-L922) · [Before (L1156-L1157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L1156-L1157)

```diff
-       },
-       Su = (zz, uz) => {
+       }
+     };
+     var wq = gq(8609);
+     const Kq = (qq, Eq) => {
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L1260` → after: `L1025-L1026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1025-L1026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1025-L1026) · [Before (L1260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L1260)

```diff
-     var Du = bz(8342);
+     var Iq = gq(8624),
+       eq = gq(8618);
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L1357` → after: `L1123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1123) · [Before (L1357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L1357)

```diff
-         return null !== nz && void 0 !== nz ? nz : Ez
+         return null !== lq && void 0 !== lq ? lq : Yq
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L1432` → after: `L1198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1198) · [Before (L1432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L1432)

```diff
-       Xb = zz => zz.hasAttribute("data-inven-idx") ? "slot" : zz.hasAttribute("data-recipe-key") ? "recipe" : zz.hasAttribute("data-craft-ingredient") || Ou(zz) ? "info" : fu(zz) ? "textField" : "button",
+       hE = qq => qq.hasAttribute("data-inven-idx") ? "slot" : qq.hasAttribute("data-recipe-key") ? "recipe" : qq.hasAttribute("data-craft-ingredient") || (0, eq.w)(qq) ? "info" : (0, Fq.P)(qq) ? "textField" : "button",
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L1439` → after: `L1205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1205) · [Before (L1439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L1439)

```diff
-           recipe: null !== (uz = zz && (null === (bz = sb(zz)) || void 0 === bz ? void 0 : bz.getAttribute("data-recipe-key"))) && void 0 !== uz ? uz : null
+           recipe: null !== (Eq = qq && (null === (gq = bE(qq)) || void 0 === gq ? void 0 : gq.getAttribute("data-recipe-key"))) && void 0 !== Eq ? Eq : null
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L1495` → after: `L1261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1261) · [Before (L1495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L1495)

```diff
-           wz = null !== (Xz = Mz.get(zz)) && void 0 !== Xz ? Xz : null, wz || (wz = {
+           jq = null !== (Hq = xq.get(qq)) && void 0 !== Hq ? Hq : null, jq || (jq = {
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L1516` → after: `L1282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1282) · [Before (L1516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L1516)

```diff
-             scrollGroup: null !== (sz = null === Kz || void 0 === Kz ? void 0 : Kz.group) && void 0 !== sz ? sz : null,
+             scrollGroup: null !== (Pq = null === dq || void 0 === dq ? void 0 : dq.group) && void 0 !== Pq ? Pq : null,
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L1518` → after: `L1284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1284) · [Before (L1518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L1518)

```diff
-             clip: null !== (rz = null === Kz || void 0 === Kz ? void 0 : Kz.box) && void 0 !== rz ? rz : null,
+             clip: null !== (Qq = null === dq || void 0 === dq ? void 0 : dq.box) && void 0 !== Qq ? Qq : null,
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L1522` → after: `L1288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1288) · [Before (L1522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L1522)

```diff
-             scrollContainer: null !== (oz = null === Kz || void 0 === Kz ? void 0 : Kz.container) && void 0 !== oz ? oz : null
+             scrollContainer: null !== (yq = null === dq || void 0 === dq ? void 0 : dq.container) && void 0 !== yq ? yq : null
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L1550` → after: `L1316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1316) · [Before (L1550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L1550)

```diff
-         return null !== (zz = null === (uz = this.latched) || void 0 === uz ? void 0 : uz.hold) && void 0 !== zz ? zz : null
+         return null !== (qq = null === (Eq = this.latched) || void 0 === Eq ? void 0 : Eq.hold) && void 0 !== qq ? qq : null
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L1556` → after: `L1322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1322) · [Before (L1556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L1556)

```diff
-     var Lb = bz(8349);
+     var GE = gq(8629);
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L1580` → after: `L1346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1346) · [Before (L1580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L1580)

```diff
-           lz = `${nz}|${Math.round(Ez.clientX)},${Math.round(Ez.clientY)}`,
+           mq = `${lq}|${Math.round(Yq.clientX)},${Math.round(Yq.clientY)}`,
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L1588` → after: `L1354`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1354)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1354) · [Before (L1588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L1588)

```diff
-         if (Mz) return void("element" === iz.kind ? Ju(iz.element, iz.element, Gb(Ez)) : zz.hover(null, Ez));
+         if (xq) return void("element" === Oq.kind ? (0, Fq.s)(Oq.element, Oq.element, JE(Yq)) : qq.hover(null, Yq));
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L1591` → after: `L1357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1357) · [Before (L1591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L1591)

```diff
-         "element" === pz.kind ? Ju(pz.element, dz, Gb(Ez)) : dz && Ju(null, dz, Gb(Ez))
+         "element" === Bq.kind ? (0, Fq.s)(Bq.element, Wq, JE(Yq)) : Wq && (0, Fq.s)(null, Wq, JE(Yq))
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L1601` → after: `L1367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1367) · [Before (L1601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L1601)

```diff
-         "element" === zz.kind && Ju(zz.element, uz, Gb(bz))
+         "element" === qq.kind && (0, Fq.s)(qq.element, Eq, JE(gq))
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L1620` → after: `L1386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1386) · [Before (L1620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L1620)

```diff
-         return 0 !== (0, Zz.m)(zz, .2).y
+         return 0 !== (0, aq.j)(qq, .2).y
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L1640` → after: `L1406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1406) · [Before (L1640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L1640)

```diff
-     var hb = bz(8356);
+     var sE = gq(8638);
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L1673` → after: `L1439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1439) · [Before (L1673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L1673)

```diff
-         return zz = (0, Oz.i)("inventory"), !Qb.map(Oz.i).includes(zz) && !(0, Zz.O)(zz);
+         return qq = (0, uq.i)("inventory"), !DE.map(uq.i).includes(qq) && !(0, aq.H)(qq);
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L1720` → after: `L1486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1486) · [Before (L1720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L1720)

```diff
-               for (const bz of pz.querySelectorAll(`${Zb}:first-child`)) {
+               for (const gq of Bq.querySelectorAll(`${yE}:first-child`)) {
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L1738` → after: `L1504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1504) · [Before (L1738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L1738)

```diff
-                   wz = Kz && !nz.has(Kz.container) ? Kz : null;
+                   jq = dq && !lq.has(dq.container) ? dq : null;
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L1743` → after: `L1509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1509) · [Before (L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L1743)

```diff
-                   scrollGroup: null !== (Mz = null === wz || void 0 === wz ? void 0 : wz.group) && void 0 !== Mz ? Mz : null,
+                   scrollGroup: null !== (xq = null === jq || void 0 === jq ? void 0 : jq.group) && void 0 !== xq ? xq : null,
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L1745` → after: `L1511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1511) · [Before (L1745)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L1745)

```diff
-                   clip: null !== (tz = null === wz || void 0 === wz ? void 0 : wz.box) && void 0 !== tz ? tz : null,
+                   clip: null !== (Aq = null === jq || void 0 === jq ? void 0 : jq.box) && void 0 !== Aq ? Aq : null,
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L1749` → after: `L1515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1515) · [Before (L1749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L1749)

```diff
-                   scrollContainer: null !== (Hz = null === wz || void 0 === wz ? void 0 : wz.container) && void 0 !== Hz ? Hz : null
+                   scrollContainer: null !== (cq = null === jq || void 0 === jq ? void 0 : jq.container) && void 0 !== cq ? cq : null
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L1797-L1798` → after: `L1563-L1564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1563-L1564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1563-L1564) · [Before (L1797-L1798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L1797-L1798)

```diff
-           this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(Zz.H.map((zz => [zz, (0, Rz.e)(Zz.K)]))), this.stickRepeat = new Zz.c((0, Rz.e)(Zz.jb)), this.pageUpTimer = (0, Rz.e)(Zz. … [truncated]
-             this.endInteraction((0, Du.d)()), (0, Du.g)() || this.forgetSurface()
+           this.focused = null, this.focusTarget = null, this.lastRect = null, this.panelMemory = new Map, this.reopenSlotIdx = null, this.dpadTimers = new Map(aq.C.map((qq => [qq, (0, Vq.b)(aq.F)]))), this.stickRepeat = new aq.c((0, Vq.b)(aq.ib)), this.pageUpTimer = (0, Vq.b)(aq. … [truncated]
+             this.endInteraction((0, Iq.d)()), (0, Iq.e)() || this.forgetSurface()
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L1801` → after: `L1567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1567) · [Before (L1801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L1801)

```diff
-             this.reopenSlotIdx = null !== (zz = this.focused ? ob(this.focused).idx : null) && void 0 !== zz ? zz : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, Du.r)(), this.panelMemory.clear(), this. … [truncated]
+             this.reopenSlotIdx = null !== (qq = this.focused ? ZE(this.focused).idx : null) && void 0 !== qq ? qq : this.reopenSlotIdx, this.focused = null, this.focusTarget = null, this.lastRect = null, this.placeAfterCategory = null, (0, Iq.l)(), this.panelMemory.clear(), this. … [truncated]
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L1806-L1807` → after: `L1572-L1573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1572-L1573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1572-L1573) · [Before (L1806-L1807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L1806-L1807)

```diff
-           }, this.shouldBlockRealPointer = zz => zz.isTrusted && !(0, wz.r)(zz) && this.isShowing(), this.noteRealPointer = zz => {
-             zz instanceof MouseEvent && zz.isTrusted && !(0, wz.r)(zz) && (this.lastRealPointer ??= {
+           }, this.shouldBlockRealPointer = qq => qq.isTrusted && !(0, jq.s)(qq) && this.isShowing(), this.noteRealPointer = qq => {
+             qq instanceof MouseEvent && qq.isTrusted && !(0, jq.s)(qq) && (this.lastRealPointer ??= {
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L1813` → after: `L1579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1579) · [Before (L1813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L1813)

```diff
-             return zz === (0, Oz.i)("inventoryClose") ? !(null !== (uz = (0, Du.d)()) && void 0 !== uz && uz.isHolding()) : !(zz !== (0, Oz.i)("inventory") || !Wb()) || ((0, Zz.O)(zz) ? this.isNavButton(zz) : Db.some((uz => (0, Oz.i)(uz) === zz)))
+             return qq === (0, uq.i)("inventoryClose") ? !(null !== (Eq = (0, Iq.d)()) && void 0 !== Eq && Eq.isHolding()) : !(qq !== (0, uq.i)("inventory") || !qg()) || ((0, aq.H)(qq) ? this.isNavButton(qq) : eE.some((Eq => (0, uq.i)(Eq) === qq)))
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L1819-L1820` → after: `L1585-L1586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1585-L1586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1585-L1586) · [Before (L1819-L1820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L1819-L1820)

```diff
-           if (!(0, Fz.h)()) return void(this.wasShowing && (this.endInteraction(lz), this.rehoverRealPointer()));
-           this.wasShowing = !0, this.applyFocusRequest(), zz.wokeDevice && this.focusWakePointer(!(null === lz || void 0 === lz || !lz.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, dz.g)().inventoryNavigation || this.pointer || this.engagePointer( … [truncated]
+           if (!(0, Nq.k)()) return void(this.wasShowing && (this.endInteraction(mq), this.rehoverRealPointer()));
+           this.wasShowing = !0, this.applyFocusRequest(), qq.wokeDevice && this.focusWakePointer(!(null === mq || void 0 === mq || !mq.isHolding())), this.applyCategoryPlace(), this.ensureFocus(), "cursor" !== (0, Wq.i)().inventoryNavigation || this.pointer || this.engagePointer( … [truncated]
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L1827` → after: `L1593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1593) · [Before (L1827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L1827)

```diff
-             Zz = null !== (uz = null === (bz = Hz.actionElement) || void 0 === bz ? void 0 : bz.querySelector(".DoCraftItem")) && void 0 !== uz ? uz : Hz.actionElement;
+             aq = null !== (Eq = null === (gq = cq.actionElement) || void 0 === gq ? void 0 : gq.querySelector(".DoCraftItem")) && void 0 !== Eq ? Eq : cq.actionElement;
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L1854` → after: `L1620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1620) · [Before (L1854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L1854)

```diff
-             pressHints: null !== (Ez = null === (nz = Hz.press) || void 0 === nz ? void 0 : nz.hints) && void 0 !== Ez ? Ez : null,
+             pressHints: null !== (Yq = null === (lq = cq.press) || void 0 === lq ? void 0 : lq.hints) && void 0 !== Yq ? Yq : null,
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L1866` → after: `L1632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1632) · [Before (L1866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L1866)

```diff
-           const bz = (0, Fz.d)();
+           const gq = (0, Nq.e)();
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L1870` → after: `L1636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1636) · [Before (L1870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L1870)

```diff
-           this.setFocus(null !== (uz = Ob(bz, Ez)) && void 0 !== uz ? uz : zz ? Mb(bz, Ez, (zz => {
+           this.setFocus(null !== (Eq = HE(gq, Yq)) && void 0 !== Eq ? Eq : qq ? VE(gq, Yq, (qq => {
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L1877` → after: `L1643`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1643) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1643)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1643) · [Before (L1877)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L1877)

```diff
-           })) : null, !1), "cursor" === (0, dz.g)().inventoryNavigation && (this.pointer = {
+           })) : null, !1), "cursor" === (0, Wq.i)().inventoryNavigation && (this.pointer = {
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L1885` → after: `L1651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1651) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1651) · [Before (L1885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L1885)

```diff
-           if (!zz || "keyboardMouse" !== tz.e.get("activeInputDevice")) return;
+           if (!qq || "keyboardMouse" !== Aq.b.get("activeInputDevice")) return;
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L1887` → after: `L1653`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1653) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1653)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1653) · [Before (L1887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L1887)

```diff
-           uz && Ju(null, uz, zz)
+           Eq && (0, Fq.s)(null, Eq, qq)
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L1892` → after: `L1658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1658) · [Before (L1892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L1892)

```diff
-           this.stickRepeat.reset(), this.pageUpTimer.reset(), this.pageDownTimer.reset(), this.hover.clear(zz), this.ring.hide(), this.releasePointer(), this.publishState(Lb.d)
+           this.stickRepeat.reset(), this.pageUpTimer.reset(), this.pageDownTimer.reset(), this.hover.clear(qq), this.ring.hide(), this.releasePointer(), this.publishState(GE.c)
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L1900` → after: `L1666`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1666) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1666) · [Before (L1900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L1900)

```diff
-           return this.focused && null !== (zz = this.getTargets().byElement.get(this.focused)) && void 0 !== zz ? zz : null
+           return this.focused && null !== (qq = this.getTargets().byElement.get(this.focused)) && void 0 !== qq ? qq : null
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L1931` → after: `L1697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1697) · [Before (L1931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L1931)

```diff
-             nz = null !== zz || void 0 !== Mz, Ez = null !== (iz = null !== (lz = null !== zz && void 0 !== zz ? zz : Mz) && void 0 !== lz ? lz : tz && bz.get(tz)) && void 0 !== iz ? iz : pb(uz)
+             lq = null !== qq || void 0 !== xq, Yq = null !== (Oq = null !== (mq = null !== qq && void 0 !== qq ? qq : xq) && void 0 !== mq ? mq : Aq && gq.get(Aq)) && void 0 !== Oq ? Oq : oE(Eq)
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L1946` → after: `L1712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1712) · [Before (L1946)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L1946)

```diff
-             if ("cursor" === (0, dz.g)().inventoryNavigation) {
+             if ("cursor" === (0, Wq.i)().inventoryNavigation) {
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L1974` → after: `L1740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1740) · [Before (L1974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L1974)

```diff
-           this.focusTarget = uz, (null === uz || void 0 === uz ? void 0 : uz.element) !== this.focused && (this.focused = null !== (zz = null === uz || void 0 === uz ? void 0 : uz.element) && void 0 !== zz ? zz : null, uz && (this.panelMemory.set(uz.panel, uz.element), this.lastR … [truncated]
+           this.focusTarget = Eq, (null === Eq || void 0 === Eq ? void 0 : Eq.element) !== this.focused && (this.focused = null !== (qq = null === Eq || void 0 === Eq ? void 0 : Eq.element) && void 0 !== qq ? qq : null, Eq && (this.panelMemory.set(Eq.panel, Eq.element), this.lastR … [truncated]
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L1978` → after: `L1744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1744) · [Before (L1978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L1978)

```diff
-             Ez = bz && (0, dz.g)().cursorMagnetism ? ku(tb(bz)) : null;
+             Yq = gq && (0, Wq.i)().cursorMagnetism ? xE(dE(gq)) : null;
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L1981` → after: `L1747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1747) · [Before (L1981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L1981)

```diff
-             moveDeadzone: (0, dz.g)().moveDeadzone,
+             moveDeadzone: (0, Wq.i)().moveDeadzone,
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L1984` → after: `L1750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1750) · [Before (L1984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L1984)

```diff
-             cursorSpeedPercent: (0, dz.g)().cursorSpeed,
+             cursorSpeedPercent: (0, Wq.i)().cursorSpeed,
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2017` → after: `L1783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1783) · [Before (L2017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2017)

```diff
-             return null !== (Ez = lb(nz, uz, bz)) && void 0 !== Ez ? Ez : Mb(zz, uz)
+             return null !== (Yq = aE(lq, Eq, gq)) && void 0 !== Yq ? Yq : VE(qq, Eq)
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2025` → after: `L1791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1791) · [Before (L2025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2025)

```diff
-           const bz = (0, dz.g)().inventoryNavigation,
+           const gq = (0, Wq.i)().inventoryNavigation,
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2031` → after: `L1797`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1797) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1797)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1797) · [Before (L2031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2031)

```diff
-           for (const tz of Zz.H) {
+           for (const Aq of aq.C) {
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2035` → after: `L1801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1801) · [Before (L2035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2035)

```diff
-           const iz = this.stickGate.update(zz.leftStick, (0, dz.g)().moveDeadzone);
+           const Oq = this.stickGate.update(qq.leftStick, (0, Wq.i)().moveDeadzone);
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2037-L2038` → after: `L1803-L1804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1803-L1804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1803-L1804) · [Before (L2037-L2038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2037-L2038)

```diff
-             const uz = ((zz, uz, bz, Ez) => "hybrid" !== zz ? "cursor" === zz : !Ez && (uz || bz))(bz, null !== this.pointer, iz, null !== nz);
-             return uz && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(zz, "cursor" === bz ? Ez : {
+             const Eq = ((qq, Eq, gq, Yq) => "hybrid" !== qq ? "cursor" === qq : !Yq && (Eq || gq))(gq, null !== this.pointer, Oq, null !== lq);
+             return Eq && !this.pointer && this.engagePointer(), void(this.pointer && this.moveCursor(qq, "cursor" === gq ? Yq : {
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2043` → after: `L1809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1809) · [Before (L2043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2043)

```diff
-           const lz = (0, Zz.m)(zz.leftStick, (0, dz.g)().moveDeadzone),
+           const mq = (0, aq.j)(qq.leftStick, (0, Wq.i)().moveDeadzone),
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2055` → after: `L1821`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1821) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1821) · [Before (L2055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2055)

```diff
-           const zz = (0, Du.r)();
+           const qq = (0, Iq.l)();
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2073` → after: `L1839`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1839) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1839)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1839) · [Before (L2073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2073)

```diff
-           })(lz, wb), Hz = null !== (uz = null === (bz = this.focusTarget) || void 0 === bz ? void 0 : bz.panel) && void 0 !== uz ? uz : null, pz = iz ? 1 : -1, 0 === tz.length ? null : tz[zb(null === Hz ? -1 : tz.indexOf(Hz), tz.length, pz)]);
+           })(mq, vE), cq = null !== (Eq = null === (gq = this.focusTarget) || void 0 === gq ? void 0 : gq.panel) && void 0 !== Eq ? Eq : null, Bq = Oq ? 1 : -1, 0 === Aq.length ? null : Aq[AE(null === cq ? -1 : Aq.indexOf(cq), Aq.length, Bq)]);
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2078` → after: `L1844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1844) · [Before (L2078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2078)

```diff
-             Zz = null !== (Ez = Fz.find((zz => zz.element === dz && zz.visible))) && void 0 !== Ez ? Ez : jb(Fz, (0, Du.d)());
+             aq = null !== (Yq = Nq.find((qq => qq.element === Wq && qq.visible))) && void 0 !== Yq ? Yq : gg(Nq, (0, Iq.d)());
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2088` → after: `L1854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1854) · [Before (L2088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2088)

```diff
-           if (!zz.wasPressed(iz ? Ez : bz) && this.hasCategories) return;
+           if (!qq.wasPressed(Oq ? Yq : gq) && this.hasCategories) return;
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2094` → after: `L1860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1860) · [Before (L2094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2094)

```diff
-               return xu(Ez, su(Ez)), !0
+               return (0, Fq.p)(Yq, (0, Fq.D)(Yq)), !0
```

#### 121. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2098` → after: `L1864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1864) · [Before (L2098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2098)

```diff
-             const zz = null !== (Mz = null === (tz = this.focusTarget) || void 0 === tz ? void 0 : tz.scrollGroup) && void 0 !== Mz ? Mz : null,
+             const qq = null !== (xq = null === (Aq = this.focusTarget) || void 0 === Aq ? void 0 : Aq.scrollGroup) && void 0 !== xq ? xq : null,
```

#### 122. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2107` → after: `L1873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1873) · [Before (L2107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2107)

```diff
-           } = this.getTargets(), pz = this.currentTarget(), dz = pz && Ab(pz) ? pz : Hz.find((zz => Ab(zz) && zz.visible));
+           } = this.getTargets(), Bq = this.currentTarget(), Wq = Bq && SE(Bq) ? Bq : cq.find((qq => SE(qq) && qq.visible));
```

#### 123. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2113` → after: `L1879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1879) · [Before (L2113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2113)

```diff
-               lz = nz.y + ("Down" === bz ? Ez : -Ez);
+               mq = lq.y + ("Down" === gq ? Yq : -Yq);
```

#### 124. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2125` → after: `L1891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1891) · [Before (L2125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2125)

```diff
-           this.setFocus(null !== Fz && void 0 !== Fz ? Fz : dz)
+           this.setFocus(null !== Nq && void 0 !== Nq ? Nq : Wq)
```

#### 125. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2132` → after: `L1898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1898) · [Before (L2132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2132)

```diff
-           } = this.getTargets(), tz = this.pointer, Hz = !tz && this.focusTarget && Ab(this.focusTarget) ? this.focusTarget.scrollContainer : null, Oz = tz && (null === (uz = Mz.find((zz => zz.clip && Hb(zz.clip, tz)))) || void 0 === uz ? void 0 : uz.scrollContainer), pz = null ! … [truncated]
+           } = this.getTargets(), Aq = this.pointer, cq = !Aq && this.focusTarget && SE(this.focusTarget) ? this.focusTarget.scrollContainer : null, uq = Aq && (null === (Eq = xq.find((qq => qq.clip && jE(qq.clip, Aq)))) || void 0 === Eq ? void 0 : Eq.scrollContainer), Bq = null ! … [truncated]
```

#### 126. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2152` → after: `L1918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1918) · [Before (L2152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2152)

```diff
-           }, Ez = this.focused ? sb(this.focused) : null, nz = Ez ? (0, hb.e)(Ez) : null;
+           }, Yq = this.focused ? bE(this.focused) : null, lq = Yq ? (0, sE.d)(Yq) : null;
```

#### 127. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2193` → after: `L1959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1959) · [Before (L2193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2193)

```diff
-           } = this.getTargets(), nz = document.querySelector(cb), iz = null !== (uz = nz && Ez.get(nz)) && void 0 !== uz ? uz : bz.find((zz => "hotbar" === zz.panel));
+           } = this.getTargets(), lq = document.querySelector(wE), Oq = null !== (Eq = lq && Yq.get(lq)) && void 0 !== Eq ? Eq : gq.find((qq => "hotbar" === qq.panel));
```

#### 128. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2206` → after: `L1972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1972) · [Before (L2206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2206)

```diff
-               kind: "yM"
+               kind: "Fc"
```

#### 129. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2211` → after: `L1977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1977) · [Before (L2211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2211)

```diff
-             return void(zz && (this.dropFrom(zz, !1, bz), this.dropLatch.press(zz, this.focusKey(), uz, Kz.b[(0, dz.g)().tapHoldTime].dropStackMs), this.afterAction()))
+             return void(qq && (this.dropFrom(qq, !1, gq), this.dropLatch.press(qq, this.focusKey(), Eq, dq.d[(0, Wq.i)().tapHoldTime].dropStackMs), this.afterAction()))
```

#### 130. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2215` → after: `L1981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1981) · [Before (L2215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2215)

```diff
-           iz && ((zz, uz, bz) => "yM" === zz.kind ? uz : !uz && bz(zz.idx))(iz, bz.isHolding(), bz.hasItemAt) && (this.dropFrom(iz, !0, bz), this.afterAction())
+           Oq && ((qq, Eq, gq) => "Fc" === qq.kind ? Eq : !Eq && gq(qq.idx))(Oq, gq.isHolding(), gq.hasItemAt) && (this.dropFrom(Oq, !0, gq), this.afterAction())
```

#### 131. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2218` → after: `L1984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR1984) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L1984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L1984) · [Before (L2218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2218)

```diff
-           "yM" === zz.kind ? bz.dropHeld(uz, this.slotPoint()) : bz.dropSlot(zz.idx, uz)
+           "Fc" === qq.kind ? gq.dropHeld(Eq, this.slotPoint()) : gq.dropSlot(qq.idx, Eq)
```

#### 132. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2238` → after: `L2004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2004) · [Before (L2238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2238)

```diff
-           switch (iz && eb.has(zz) && (0, wz.s)(iz), zz) {
+           switch (Oq && Eg.has(qq) && (0, jq.w)(Oq), qq) {
```

#### 133. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2256` → after: `L2022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2022) · [Before (L2256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2256)

```diff
-               xu(iz, su(iz));
+               (0, Fq.p)(Oq, (0, Fq.D)(Oq));
```

#### 134. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2259` → after: `L2025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2025) · [Before (L2259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2259)

```diff
-               fu(iz) && Au(iz);
+               (0, Fq.P)(Oq) && (0, Fq.L)(Oq);
```

#### 135. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2290` → after: `L2056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2056) · [Before (L2290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2290)

```diff
-           })(zz, this.state) || (this.state = zz, Hz.k.sK(Lb.e, zz))
+           })(qq, this.state) || (this.state = qq, cq.i.TV(GE.e, qq))
```

#### 136. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2294-L2297` → after: `L2060-L2063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2060-L2063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2060-L2063) · [Before (L2294-L2297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2294-L2297)

```diff
-     var Yb = bz(8358),
-       kb = bz(316),
-       zE = bz(1595),
-       uE = bz(7859);
+     var mg = gq(8646),
+       xg = gq(296),
+       Ag = gq(1622),
+       cg = gq(8081);
```

#### 137. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2299` → after: `L2065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2065) · [Before (L2299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2299)

```diff
-       EE = zz => zz instanceof HTMLElement && Hu(zz) && !Ou(zz),
+       Bg = qq => qq instanceof HTMLElement && (0, eq.p)(qq) && !(0, eq.w)(qq),
```

#### 138. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2303` → after: `L2069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2069) · [Before (L2303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2303)

```diff
-         for (const nz of null !== (bz = null === (Ez = zz.parentElement) || void 0 === Ez ? void 0 : Ez.children) && void 0 !== bz ? bz : []) {
+         for (const lq of null !== (gq = null === (Yq = qq.parentElement) || void 0 === Yq ? void 0 : Yq.children) && void 0 !== gq ? gq : []) {
```

#### 139. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2362` → after: `L2128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2128) · [Before (L2362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2362)

```diff
-           Ez[bz] && !(nz ? iz : lz) || Mz.add(bz)
+           Yq[gq] && !(lq ? Oq : mq) || xq.add(gq)
```

#### 140. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2431-L2433` → after: `L2197-L2199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2197-L2199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2197-L2199) · [Before (L2431-L2433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2431-L2433)

```diff
-     var fE = bz(1633),
-       sE = bz(8364),
-       rE = bz(8371);
+     var ng = gq(1668),
+       bg = gq(8655),
+       ig = gq(8662);
```

#### 141. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2435` → after: `L2201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2201) · [Before (L2435)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2435)

```diff
-         if ("death" !== zz || "inGame" !== tz.e.get("gameState") || "off" === (0, dz.g)().quickChat || null === (0, fE.e)()) return !1;
+         if ("death" !== qq || "inGame" !== Aq.b.get("gameState") || "off" === (0, Wq.i)().quickChat || null === (0, ng.b)()) return !1;
```

#### 142. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2440-L2441` → after: `L2206-L2207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2206-L2207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2206-L2207) · [Before (L2440-L2441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2440-L2441)

```diff
-     var vE = bz(4090),
-       xE = bz(8378);
+     var Mg = gq(4144),
+       Tg = gq(8669);
```

#### 143. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2444` → after: `L2210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2210) · [Before (L2444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2444)

```diff
-         for (const bz of zz.querySelectorAll("[data-pad-tabs]")) Hu(bz) && (!uz || Number(bz.dataset.padTabs) < Number(uz.dataset.padTabs)) && (uz = bz);
+         for (const gq of qq.querySelectorAll("[data-pad-tabs]"))(0, eq.p)(gq) && (!Eq || Number(gq.dataset.padTabs) < Number(Eq.dataset.padTabs)) && (Eq = gq);
```

#### 144. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2453` → after: `L2219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2219) · [Before (L2453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2453)

```diff
-               for (const Ez of Xu(uz)) {
+               for (const Yq of (0, eq.h)(Eq)) {
```

#### 145. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2469` → after: `L2235`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2235) · [Before (L2469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2469)

```diff
-         })([...bz.querySelectorAll("[data-pad-tab]")].filter((zz => Hu(zz) && !Ou(zz))), Ez);
+         })([...gq.querySelectorAll("[data-pad-tab]")].filter((qq => (0, eq.p)(qq) && !(0, eq.w)(qq))), Yq);
```

#### 146. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2471` → after: `L2237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2237) · [Before (L2471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2471)

```diff
-         const lz = null !== (nz = null === zz || void 0 === zz ? void 0 : zz.getFocused()) && void 0 !== nz ? nz : null,
+         const mq = null !== (lq = null === qq || void 0 === qq ? void 0 : qq.getFocused()) && void 0 !== lq ? lq : null,
```

#### 147. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2474` → after: `L2240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2240) · [Before (L2474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2474)

```diff
-         Tu(iz), zz && (tz ? AE(zz, uz, tz, bz) : zz.setFocus(iz, {
+         (0, Fq.b)(Oq), qq && (Aq ? Sg(qq, Eq, Aq, gq) : qq.setFocus(Oq, {
```

#### 148. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2480-L2481` → after: `L2246-L2247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2246-L2247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2246-L2247) · [Before (L2480-L2481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2480-L2481)

```diff
-         const bz = Vz(null !== (uz = Az(zz, "x")) && void 0 !== uz ? uz : zz),
-           Ez = Fu(zz).filter((zz => !Ou(zz))),
+         const gq = Tq(null !== (Eq = nq(qq, "x")) && void 0 !== Eq ? Eq : qq),
+           Yq = (0, eq.f)(qq).filter((qq => !(0, eq.w)(qq))),
```

#### 149. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2483` → after: `L2249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2249) · [Before (L2483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2483)

```diff
-         return (nz.length > 0 ? nz : Ez).sort(((zz, uz) => wE(zz.getBoundingClientRect(), uz.getBoundingClientRect())))
+         return (lq.length > 0 ? lq : Yq).sort(((qq, Eq) => vg(qq.getBoundingClientRect(), Eq.getBoundingClientRect())))
```

#### 150. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2486` → after: `L2252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2252) · [Before (L2486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2486)

```diff
-         const Ez = [...uz.querySelectorAll("[data-pad-row]")].filter(Hu),
+         const Yq = [...Eq.querySelectorAll("[data-pad-row]")].filter(eq.p),
```

#### 151. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2509` → after: `L2275`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2275) · [Before (L2509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2509)

```diff
-         const iz = null !== (Ez = null === zz || void 0 === zz ? void 0 : zz.getFocused()) && void 0 !== Ez ? Ez : null,
+         const Oq = null !== (Yq = null === qq || void 0 === qq ? void 0 : qq.getFocused()) && void 0 !== Yq ? Yq : null,
```

#### 152. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2511` → after: `L2277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2277) · [Before (L2511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2511)

```diff
-           Mz = null !== (nz = iz ? Az(iz, lz, uz) : null) && void 0 !== nz ? nz : Lz(uz, lz);
+           xq = null !== (lq = Oq ? nq(Oq, mq, Eq) : null) && void 0 !== lq ? lq : iq(Eq, mq);
```

#### 153. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2513` → after: `L2279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2279) · [Before (L2513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2513)

```diff
-         const tz = iz ? su(iz) : null;
+         const Aq = Oq ? (0, Fq.D)(Oq) : null;
```

#### 154. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2530` → after: `L2296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2296) · [Before (L2530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2530)

```diff
-           Mz = KE(su(iz), lz.map((zz => zz.getBoundingClientRect()))),
+           xq = rg((0, Fq.D)(Oq), mq.map((qq => qq.getBoundingClientRect()))),
```

#### 155. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2532` → after: `L2298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2298) · [Before (L2532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2532)

```diff
-         return zz.setFocus(null !== tz && void 0 !== tz && tz.isConnected ? tz : null !== (Ez = lz[Mz]) && void 0 !== Ez ? Ez : null, {
+         return qq.setFocus(null !== Aq && void 0 !== Aq && Aq.isConnected ? Aq : null !== (Yq = mq[xq]) && void 0 !== Yq ? Yq : null, {
```

#### 156. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2538` → after: `L2304`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2304) · [Before (L2538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2538)

```diff
-         return (0, Zz.O)(uz) || uE.r.some((zz => (0, Oz.i)(zz) === uz)) ? null : uz
+         return (0, aq.H)(Eq) || cg.p.some((qq => (0, uq.i)(qq) === Eq)) ? null : Eq
```

#### 157. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2548` → after: `L2314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2314) · [Before (L2548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2548)

```diff
-             return null !== (uz = null === (bz = JE(zz)) || void 0 === bz ? void 0 : bz.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== uz ? uz : null
+             return null !== (Eq = null === (gq = zg(qq)) || void 0 === gq ? void 0 : gq.querySelector("[data-pad-tab][data-pad-selected='true']")) && void 0 !== Eq ? Eq : null
```

#### 158. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2551` → after: `L2317`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2317) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2317) · [Before (L2551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2551)

```diff
-         (0, Yb.e)(), bz === kb.r.SETTINGS && (0, zE.f)(tz.e.get("openEverythingMenuName")) ? tz.e.set({
+         (0, mg.c)(), gq === xg.p.SETTINGS && (0, Ag.l)(Aq.b.get("openEverythingMenuName")) ? Aq.b.set({
```

#### 159. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2553` → after: `L2319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2319) · [Before (L2553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2553)

```diff
-         }) : (0, zE.t)(new Event("padMenuShortcut"), bz, Ez), zz && iz && nz && AE(zz, uz, iz, nz.closest("[data-pad-tabs]"))
+         }) : (0, Ag.u)(new Event("padMenuShortcut"), gq, Yq), qq && Oq && lq && Sg(qq, Eq, Oq, lq.closest("[data-pad-tabs]"))
```

#### 160. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2556-L2558` → after: `L2322-L2324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2322) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2322-L2324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2322-L2324) · [Before (L2556-L2558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2556-L2558)

```diff
-       cE = zz => null !== (0, xE.b)() && "popup" !== zz.layer.kind && !JE(zz.root) && !UE(zz.root),
-       gE = (0, Rz.e)(Zz.hb),
-       SE = (0, Rz.e)(Zz.hb),
+       wg = qq => null !== (0, Tg.e)() && "popup" !== qq.layer.kind && !zg(qq.root) && !Xg(qq.root),
+       Kg = (0, Vq.b)(aq.ab),
+       Cg = (0, Vq.b)(aq.ab),
```

#### 161. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2562` → after: `L2328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2328) · [Before (L2562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2562)

```diff
-             return oE(uz) && zz.isHeld(bz) ? "hold" === NE.update(zz.wasPressed(bz), zz.isHeld(bz), performance.now(), Kz.b[(0, dz.g)().tapHoldTime].wheelMs) && (pz.b.consumeButton(bz), Hz.k.sK(rE.p), !0) : (NE.release(), !1)
+             return Zg(Eq) && qq.isHeld(gq) ? "hold" === fg.update(qq.wasPressed(gq), qq.isHeld(gq), performance.now(), dq.d[(0, Wq.i)().tapHoldTime].wheelMs) && (Bq.c.consumeButton(gq), cq.i.TV(ig.k), !0) : (fg.release(), !1)
```

#### 162. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2575` → after: `L2341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2341) · [Before (L2575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2575)

```diff
-               null !== (nz = (0, xE.b)()) && void 0 !== nz && nz(Mz) && zz && uz && AE(zz, Ez, uz, null)
+               null !== (lq = (0, Tg.e)()) && void 0 !== lq && lq(xq) && qq && Eq && Sg(qq, Yq, Eq, null)
```

#### 163. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2586-L2589` → after: `L2352-L2355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2352-L2355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2352-L2355) · [Before (L2586-L2589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2586-L2589)

```diff
-         return qE(uz, "pause") ? (iz || (0, zE.p)() && "menu" !== bz.layer.kind || hE(zz, Ez, (0, zE.p)() ? kb.r.SETTINGS : (0, vE.e)()), !0) : !!qE(uz, "leaderboard") && ("home" === bz.layer.kind ? (zz => {
-           const uz = [...zz.querySelectorAll("[data-pad-notifications]")].find(Hu);
-           uz && Tu(uz)
-         })(Ez) : iz || hE(zz, Ez, kb.r.LOBBY_LEADERBOARD, "inGame" === tz.e.get("gameState")), !0)
+         return Fg(Eq, "pause") ? (Oq || (0, Ag.r)() && "menu" !== gq.layer.kind || sg(qq, Yq, (0, Ag.r)() ? xg.p.SETTINGS : (0, Mg.b)()), !0) : !!Fg(Eq, "leaderboard") && ("home" === gq.layer.kind ? (qq => {
+           const Eq = [...qq.querySelectorAll("[data-pad-notifications]")].find(eq.p);
+           Eq && (0, Fq.b)(Eq)
+         })(Yq) : Oq || sg(qq, Yq, xg.p.LOBBY_LEADERBOARD, "inGame" === Aq.b.get("gameState")), !0)
```

#### 164. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2597` → after: `L2363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2363) · [Before (L2597)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2597)

```diff
-           if (nz) return Tu(nz), !0;
+           if (lq) return (0, Fq.b)(lq), !0;
```

#### 165. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2600` → after: `L2366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2366) · [Before (L2600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2600)

```diff
-             return uz && wu(uz, bz.root) ? (zz.setFocus(uz, {
+             return Eq && (0, eq.t)(Eq, gq.root) ? (qq.setFocus(Eq, {
```

#### 166. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2602` → after: `L2368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2368) · [Before (L2602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2602)

```diff
-             }), Tu(uz)) : tz.e.set({
+             }), (0, Fq.b)(Eq)) : Aq.b.set({
```

#### 167. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2610` → after: `L2376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2376) · [Before (L2610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2610)

```diff
-           if (!nz || !Hu(nz)) return void(0, zE.t)(new Event("padMenuShortcut"), kb.r.SOCIAL);
+           if (!lq || !(0, eq.p)(lq)) return void(0, Ag.u)(new Event("padMenuShortcut"), xg.p.SOCIAL);
```

#### 168. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2612` → after: `L2378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2378) · [Before (L2612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2612)

```diff
-           const iz = null !== (bz = null === (Ez = nz.querySelector("[data-pad-friends-start]")) || void 0 === Ez ? void 0 : Ez.getBoundingClientRect().top) && void 0 !== bz ? bz : -1 / 0,
+           const Oq = null !== (gq = null === (Yq = lq.querySelector("[data-pad-friends-start]")) || void 0 === Yq ? void 0 : Yq.getBoundingClientRect().top) && void 0 !== gq ? gq : -1 / 0,
```

#### 169. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2615` → after: `L2381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2381) · [Before (L2615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2615)

```diff
-             tz = Mz.length > 0 ? Mz : lz,
+             Aq = xq.length > 0 ? xq : mq,
```

#### 170. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2624` → after: `L2390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2390) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2390) · [Before (L2624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2624)

```diff
-         const nz = Uu(zz);
+         const lq = (0, Fq.F)(qq);
```

#### 171. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2626-L2627` → after: `L2392-L2393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2392-L2393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2392-L2393) · [Before (L2626-L2627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2626-L2627)

```diff
-         const iz = (null !== (uz = null !== (bz = null !== (Ez = zz.getAttribute("aria-label")) && void 0 !== Ez ? Ez : zz.getAttribute("title")) && void 0 !== bz ? bz : zz.textContent) && void 0 !== uz ? uz : "").replace(/\s+/g, " ").trim();
-         return iz ? `${zz.tagName}:${iz.slice(0,100)}` : null
+         const Oq = (null !== (Eq = null !== (gq = null !== (Yq = qq.getAttribute("aria-label")) && void 0 !== Yq ? Yq : qq.getAttribute("title")) && void 0 !== gq ? gq : qq.textContent) && void 0 !== Eq ? Eq : "").replace(/\s+/g, " ").trim();
+         return Oq ? `${qq.tagName}:${Oq.slice(0,100)}` : null
```

#### 172. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2648` → after: `L2414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2414) · [Before (L2648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2648)

```diff
-           iz = Uu(uz),
+           Oq = (0, Fq.F)(Eq),
```

#### 173. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2672` → after: `L2438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2438) · [Before (L2672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2672)

```diff
-         return null !== (bz = null !== (Ez = lz[nz.ordinal]) && void 0 !== Ez ? Ez : lz[0]) && void 0 !== bz ? bz : null
+         return null !== (gq = null !== (Yq = mq[lq.ordinal]) && void 0 !== Yq ? Yq : mq[0]) && void 0 !== gq ? gq : null
```

#### 174. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2678` → after: `L2444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2444) · [Before (L2678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2678)

```diff
-     var eE = bz(1266);
+     var EY = gq(1267);
```

#### 175. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2693` → after: `L2459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2459) · [Before (L2693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2693)

```diff
-             const bz = (null !== (Ez = zz[iz]) && void 0 !== Ez ? Ez : 0) - (null !== (nz = uz[iz]) && void 0 !== nz ? nz : 0);
+             const gq = (null !== (Yq = qq[Oq]) && void 0 !== Yq ? Yq : 0) - (null !== (lq = Eq[Oq]) && void 0 !== lq ? lq : 0);
```

#### 176. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2706` → after: `L2472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2472) · [Before (L2706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2706)

```diff
-         return null !== (bz = IE(zz.root, uz.root)) && void 0 !== bz ? bz : zz.order > uz.order
+         return null !== (gq = YY(qq.root, Eq.root)) && void 0 !== gq ? gq : qq.order > Eq.order
```

#### 177. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2715` → after: `L2481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2481) · [Before (L2715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2715)

```diff
-           bz = "number" === typeof uz ? uz : null;
+           gq = "number" === typeof Eq ? Eq : null;
```

#### 178. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2719-L2720` → after: `L2485-L2486`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2485-L2486)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2485-L2486) · [Before (L2719-L2720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2719-L2720)

```diff
-           iz = [...document.querySelectorAll("[data-pad-covers]")].filter(Hu);
-         for (const lz of (0, eE.h)()) {
+           Oq = [...document.querySelectorAll("[data-pad-covers]")].filter(eq.p);
+         for (const mq of (0, EY.g)()) {
```

#### 179. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2722` → after: `L2488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2488) · [Before (L2722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2722)

```diff
-             uz = !!zz && Hu(zz) && !CE(zz, iz);
+             Eq = !!qq && (0, eq.p)(qq) && !OY(qq, Oq);
```

#### 180. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2741` → after: `L2507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2507) · [Before (L2741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2741)

```diff
-         return null !== (zz = null === (uz = un()) || void 0 === uz ? void 0 : uz.root) && void 0 !== zz ? zz : null
+         return null !== (qq = null === (Eq = cY()) || void 0 === Eq ? void 0 : Eq.root) && void 0 !== qq ? qq : null
```

#### 181. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2749` → after: `L2515`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2515) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2515)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2515) · [Before (L2749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2749)

```diff
-       Hn = (0, dz.g)().menuNavigation,
+       VY = (0, Wq.i)().menuNavigation,
```

#### 182. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2753-L2754` → after: `L2519-L2520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2519) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2519-L2520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2519-L2520) · [Before (L2753-L2754)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2753-L2754)

```diff
-     Hz.k.subscribe(dz.f, (() => {
-       const zz = (0, dz.g)().menuNavigation;
+     cq.i.subscribe(Wq.f, (() => {
+       const qq = (0, Wq.i)().menuNavigation;
```

#### 183. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2759` → after: `L2525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2525) · [Before (L2759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2759)

```diff
-         return null !== (zz = Mn) && void 0 !== zz ? zz : (0, dz.g)().menuNavigation
+         return null !== (qq = NY) && void 0 !== qq ? qq : (0, Wq.i)().menuNavigation
```

#### 184. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2786` → after: `L2552`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2552) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2552)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2552) · [Before (L2786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2786)

```diff
-           has: Ru(zz)
+           has: (0, eq.k)(qq)
```

#### 185. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2812-L2813` → after: `L2578-L2579`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2578-L2579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2578-L2579) · [Before (L2812-L2813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2812-L2813)

```diff
-     var Nn = bz(4303),
-       vn = bz(4776);
+     var bY = gq(4372),
+       iY = gq(4866);
```

#### 186. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2815` → after: `L2581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2581) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2581) · [Before (L2815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2815)

```diff
-       Jn = `${xn}, [data-pad-back]`,
+       fY = `${ZY}, [data-pad-back]`,
```

#### 187. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2846-L2847` → after: `L2612-L2613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2612-L2613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2612-L2613) · [Before (L2846-L2847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2846-L2847)

```diff
-         const bz = zz.querySelector(`${Gn}[data-pad-selected='true']`);
-         return bz && uz.includes(bz) ? bz : null
+         const gq = qq.querySelector(`${pY}[data-pad-selected='true']`);
+         return gq && Eq.includes(gq) ? gq : null
```

#### 188. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2863` → after: `L2629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2629) · [Before (L2863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2863)

```diff
-         if (Mz && Mz !== lz) return lz || (this.contentReturn = new WeakRef(zz)), null !== (tz = an(Mz, bz)) && void 0 !== tz ? tz : uz;
+         if (xq && xq !== mq) return mq || (this.contentReturn = new WeakRef(qq)), null !== (Aq = GY(xq, gq)) && void 0 !== Aq ? Aq : Eq;
```

#### 189. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2867` → after: `L2633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2633) · [Before (L2867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2867)

```diff
-         return Oz && Hz.contains(Oz) && bz.includes(Oz) ? Oz : null !== (iz = this.pickRegionStart(Hz, Az(uz, "y", Ez), bz)) && void 0 !== iz ? iz : uz
+         return uq && cq.contains(uq) && gq.includes(uq) ? uq : null !== (Oq = this.pickRegionStart(cq, nq(Eq, "y", Yq), gq)) && void 0 !== Oq ? Oq : Eq
```

#### 190. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2875` → after: `L2641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2641) · [Before (L2875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2875)

```diff
-         return bz.some((zz => iz.contains(zz) && !zz.closest(Jn))) || !uz.closest(Jn) ? iz : null
+         return gq.some((qq => Oq.contains(qq) && !qq.closest(fY))) || !Eq.closest(fY) ? Oq : null
```

#### 191. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2904` → after: `L2670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2670) · [Before (L2904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2904)

```diff
-         for (const iz of Xu(zz)) {
+         for (const Oq of (0, eq.h)(qq)) {
```

#### 192. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2924-L2925` → after: `L2690-L2691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2690-L2691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2690-L2691) · [Before (L2924-L2925)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2924-L2925)

```diff
-           if (bz) return uz === zz || uz.querySelectorAll(Mu).length <= 1 ? bz : null;
-           if (uz !== zz && uz.querySelectorAll(Mu).length > 1) return null
+           if (gq) return Eq === qq || Eq.querySelectorAll(eq.e).length <= 1 ? gq : null;
+           if (Eq !== qq && Eq.querySelectorAll(eq.e).length > 1) return null
```

#### 193. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2930` → after: `L2696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2696) · [Before (L2930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2930)

```diff
-         Ju(zz, uz, bz);
+         (0, Fq.s)(qq, Eq, gq);
```

#### 194. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2933` → after: `L2699`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2699) · [Before (L2933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2933)

```diff
-         Ez !== nz && Ju(Ez, nz, nz ? su(nz) : bz, {
+         Yq !== lq && (0, Fq.s)(Yq, lq, lq ? (0, Fq.D)(lq) : gq, {
```

#### 195. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2948` → after: `L2714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2714) · [Before (L2948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2948)

```diff
-         this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new WE, this.tabStripNav = new mn, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepe … [truncated]
+         this.focused = null, this.layerKey = null, this.layerRoot = null, this.memory = new qY, this.tabStripNav = new JY, this.movedInLayer = !1, this.scrolledInLayer = !1, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.confirmPressedOn = null, this.confirmRepe … [truncated]
```

#### 196. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2954` → after: `L2720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2720) · [Before (L2954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2954)

```diff
-         const zz = pz.b.register({
+         const qq = Bq.c.register({
```

#### 197. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2956` → after: `L2722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2722) · [Before (L2956)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2956)

```diff
-             isActive: () => (0, Fz.h)() && "focus" === fn(),
+             isActive: () => (0, Nq.k)() && "focus" === vY(),
```

#### 198. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2963` → after: `L2729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2729) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2729) · [Before (L2963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2963)

```diff
-             wakePressActs: zz => (0, pz.f)(zz) || zz === (0, Oz.i)("menuConfirm") && mu((0, Fz.d)())
+             wakePressActs: qq => (0, Bq.g)(qq) || qq === (0, uq.i)("menuConfirm") && (0, Fq.H)((0, Nq.e)())
```

#### 199. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2965-L2966` → after: `L2731-L2732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2731-L2732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2731-L2732) · [Before (L2965-L2966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2965-L2966)

```diff
-           uz = (0, eE.l)((zz => {
-             const uz = (0, eE.q)(zz);
+           Eq = (0, EY.m)((qq => {
+             const Eq = (0, EY.t)(qq);
```

#### 200. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2970-L2971` → after: `L2736-L2737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2736-L2737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2736-L2737) · [Before (L2970-L2971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2970-L2971)

```diff
-         const Ez = lz.g.onFrame((zz => {
-             (0, Fz.h)() || zz.timestampMs - bz < 100 || (bz = zz.timestampMs, un())
+         const Yq = mq.h.onFrame((qq => {
+             (0, Nq.k)() || qq.timestampMs - gq < 100 || (gq = qq.timestampMs, cY())
```

#### 201. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2974` → after: `L2740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2740) · [Before (L2974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2974)

```diff
-             zz.isTrusted && zz.target instanceof Element && lz.g.getActivePad() && this.noteChosenStop(zz.target)
+             qq.isTrusted && qq.target instanceof Element && mq.h.getActivePad() && this.noteChosenStop(qq.target)
```

#### 202. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2984` → after: `L2750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2750) · [Before (L2984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2984)

```diff
-         const nz = null !== (uz = null === (bz = zz.closest(".Dropdown-root")) || void 0 === bz ? void 0 : bz.querySelector(".Dropdown-control")) && void 0 !== uz ? uz : zz,
+         const lq = null !== (Eq = null === (gq = qq.closest(".Dropdown-root")) || void 0 === gq ? void 0 : gq.querySelector(".Dropdown-control")) && void 0 !== Eq ? Eq : qq,
```

#### 203. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2987` → after: `L2753`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2753) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2753)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2753) · [Before (L2987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2987)

```diff
-         const lz = (0, eE.q)(Ez.layer);
+         const mq = (0, EY.t)(Yq.layer);
```

#### 204. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L2991` → after: `L2757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2757) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2757) · [Before (L2991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L2991)

```diff
-         }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = iz, this.lastFocusedCentre = su(iz), this.rememberFocus(iz), this.notify())
+         }) : (this.pendingFocus = null, this.movedInLayer = !0, this.restoredFromMemory = !1, this.restoreOnFocusLoss = !1, this.focused = Oq, this.lastFocusedCentre = (0, Fq.D)(Oq), this.rememberFocus(Oq), this.notify())
```

#### 205. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3012` → after: `L2778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2778) · [Before (L3012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3012)

```diff
-           this.stickRepeat.reset(), null !== (zz = this.focused) && void 0 !== zz && zz.isConnected && yn(this.focused, null, su(this.focused)), this.notify()
+           this.stickRepeat.reset(), null !== (qq = this.focused) && void 0 !== qq && qq.isConnected && wY(this.focused, null, (0, Fq.D)(this.focused)), this.notify()
```

#### 206. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3032-L3034` → after: `L2798-L2800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2798-L2800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2798-L2800) · [Before (L3032-L3034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3032-L3034)

```diff
-           const uz = su(zz);
-           this.lastFocusedCentre = uz, this.movedInLayer && this.rememberFocus(zz), yn(nz, zz, uz), "false" === zz.getAttribute("aria-pressed") && zz.closest("[data-pad-select-on-focus]") && Tu(zz)
-         } else nz && yn(nz, null, su(nz));
+           const Eq = (0, Fq.D)(qq);
+           this.lastFocusedCentre = Eq, this.movedInLayer && this.rememberFocus(qq), wY(lq, qq, Eq), "false" === qq.getAttribute("aria-pressed") && qq.closest("[data-pad-select-on-focus]") && (0, Fq.b)(qq)
+         } else lq && wY(lq, null, (0, Fq.D)(lq));
```

#### 207. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3049` → after: `L2815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2815) · [Before (L3049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3049)

```diff
-         const iz = (0, eE.q)(uz.layer);
+         const Oq = (0, EY.t)(Eq.layer);
```

#### 208. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3068` → after: `L2834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2834) · [Before (L3068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3068)

```diff
-         return Fu(zz).filter((zz => !Ou(zz)))
+         return (0, eq.f)(qq).filter((qq => !(0, eq.w)(qq)))
```

#### 209. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3074` → after: `L2840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2840) · [Before (L3074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3074)

```diff
-         const Ez = null !== (uz = this.findOpenDropdown(bz)) && void 0 !== uz ? uz : bz,
+         const Yq = null !== (Eq = this.findOpenDropdown(gq)) && void 0 !== Eq ? Eq : gq,
```

#### 210. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3076` → after: `L2842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2842) · [Before (L3076)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3076)

```diff
-           iz = (0, eE.q)(Ez.layer);
+           Oq = (0, EY.t)(Yq.layer);
```

#### 211. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3079` → after: `L2845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2845) · [Before (L3079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3079)

```diff
-           if (null !== this.layerKey && Ez.root === this.layerRoot && uz && wu(uz, Ez.root)) this.continueLayer(iz, uz), this.wasActive || this.resume(Ez.root, nz);
+           if (null !== this.layerKey && Yq.root === this.layerRoot && Eq && (0, eq.t)(Eq, Yq.root)) this.continueLayer(Oq, Eq), this.wasActive || this.resume(Yq.root, lq);
```

#### 212. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3084` → after: `L2850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2850) · [Before (L3084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3084)

```diff
-             "popup" !== Ez.layer.kind || Ez !== bz || Mz ? "menu" === Ez.layer.kind && lz && "inGame" === tz.e.get("gameState") && !(0, Yb.i)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = nz + Nn.c) : (this.pressGuardExtends = uz, this.pressGuardUntilMs = nz + (u … [truncated]
+             "popup" !== Yq.layer.kind || Yq !== gq || xq ? "menu" === Yq.layer.kind && mq && "inGame" === Aq.b.get("gameState") && !(0, mg.g)(3e3) && (this.pressGuardExtends = !0, this.pressGuardUntilMs = lq + bY.b) : (this.pressGuardExtends = Eq, this.pressGuardUntilMs = lq + (E … [truncated]
```

#### 213. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3087` → after: `L2853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2853) · [Before (L3087)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3087)

```diff
-         if (this.layerKind = Ez.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), zz.wokeDevice && this.focusPointedStop(Ez.root), this.validateFocus(Ez, nz), nz < this.pressGuardUntilMs && this.pressGuardExtends && (zz.wasPressed((0, Oz.i)("menuConfirm")) || zz … [truncated]
+         if (this.layerKind = Yq.layer.kind, this.wasActive || (this.wasActive = !0, this.notify()), qq.wokeDevice && this.focusPointedStop(Yq.root), this.validateFocus(Yq, lq), lq < this.pressGuardUntilMs && this.pressGuardExtends && (qq.wasPressed((0, uq.i)("menuConfirm")) || qq … [truncated]
```

#### 214. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3091-L3092` → after: `L2857-L2858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2857-L2858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2857-L2858) · [Before (L3091-L3092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3091-L3092)

```diff
-             return uz !== dn && (dn = uz, pn.lock()), pn.update(zz, (0, dz.g)().moveDeadzone)
-           })(zz.leftStick)) return Mz = this.getHandoff(), On = nn(Mz), tn = En(), void pz.b.handOffHeldInput();
+             return Eq !== HY && (HY = Eq, jY.lock()), jY.update(qq, (0, Wq.i)().moveDeadzone)
+           })(qq.leftStick)) return xq = this.getHandoff(), dY = WY(xq), aY = BY(), void Bq.c.handOffHeldInput();
```

#### 215. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3098` → after: `L2864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2864) · [Before (L3098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3098)

```diff
-         if (!uz || !Hu(uz)) return null;
+         if (!Eq || !(0, eq.p)(Eq)) return null;
```

#### 216. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3105` → after: `L2871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2871) · [Before (L3105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3105)

```diff
-             Gu(uz)
+             (0, Fq.l)(Eq)
```

#### 217. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3115` → after: `L2881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2881) · [Before (L3115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3115)

```diff
-         const uz = (0, Fz.d)(),
+         const Eq = (0, Nq.e)(),
```

#### 218. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3134` → after: `L2900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2900) · [Before (L3134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3134)

```diff
-         this.restoredFromMemory = null !== bz, this.setFocus(null !== bz && void 0 !== bz ? bz : this.pickInitial(zz, {
+         this.restoredFromMemory = null !== gq, this.setFocus(null !== gq && void 0 !== gq ? gq : this.pickInitial(qq, {
```

#### 219. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3146` → after: `L2912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2912) · [Before (L3146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3146)

```diff
-         Ez && Wn(Ez, zz) ? this.takeOver(zz, Ez, uz) : null !== (bz = this.focused) && void 0 !== bz && bz.isConnected && yn(null, this.focused, su(this.focused))
+         Yq && IY(Yq, qq) ? this.takeOver(qq, Yq, Eq) : null !== (gq = this.focused) && void 0 !== gq && gq.isConnected && wY(null, this.focused, (0, Fq.D)(this.focused))
```

#### 220. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3150` → after: `L2916`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2916) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2916)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2916) · [Before (L3150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3150)

```diff
-         return null !== (uz = this.layerKey ? this.findRemembered(zz, this.layerKey) : null) && void 0 !== uz ? uz : this.pickInitial(zz, {
+         return null !== (Eq = this.layerKey ? this.findRemembered(qq, this.layerKey) : null) && void 0 !== Eq ? Eq : this.pickInitial(qq, {
```

#### 221. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3162` → after: `L2928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2928) · [Before (L3162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3162)

```diff
-           point: Ez ? su(Ez) : null !== (bz = this.lastFocusedCentre) && void 0 !== bz ? bz : this.getLayerStartPoint(nz),
+           point: Yq ? (0, Fq.D)(Yq) : null !== (gq = this.lastFocusedCentre) && void 0 !== gq ? gq : this.getLayerStartPoint(lq),
```

#### 222. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3175` → after: `L2941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2941) · [Before (L3175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3175)

```diff
-         return su(null !== uz && void 0 !== uz ? uz : zz)
+         return (0, Fq.D)(null !== Eq && void 0 !== Eq ? Eq : qq)
```

#### 223. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3182` → after: `L2948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2948) · [Before (L3182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3182)

```diff
-         } = uz, lz = Ez instanceof HTMLElement && wu(Ez, zz) ? Ez : null;
+         } = Eq, mq = Yq instanceof HTMLElement && (0, eq.t)(Yq, qq) ? Yq : null;
```

#### 224. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3188` → after: `L2954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2954) · [Before (L3188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3188)

```diff
-           }) : this.focusNearest(zz, iz), void(this.focused && this.focused === uz && this.focused.isConnected && yn(null, this.focused, su(this.focused)))
+           }) : this.focusNearest(qq, Oq), void(this.focused && this.focused === Eq && this.focused.isConnected && wY(null, this.focused, (0, Fq.D)(this.focused)))
```

#### 225. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3197` → after: `L2963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2963) · [Before (L3197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3197)

```diff
-           Oz = Hz >= 0 ? Hz : KE(iz, tz);
+           uq = cq >= 0 ? cq : rg(Oq, Aq);
```

#### 226. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3214` → after: `L2980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2980) · [Before (L3214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3214)

```diff
-         const Ez = [...zz.querySelectorAll(qn)].filter((Ez => (null === bz || void 0 === bz || !bz.has(Ez)) && (uz ? Ku(Ez, zz) : wu(Ez, zz)))),
+         const Yq = [...qq.querySelectorAll(kY)].filter((Yq => (null === gq || void 0 === gq || !gq.has(Yq)) && (Eq ? (0, eq.y)(Yq, qq) : (0, eq.t)(Yq, qq)))),
```

#### 227. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3219-L3220` → after: `L2985-L2986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR2985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L2985-L2986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L2985-L2986) · [Before (L3219-L3220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3219-L3220)

```diff
-         const bz = [...zz.querySelectorAll(gn)].filter(Hu);
-         for (const Ez of [...Xu(zz), ...bz]) {
+         const gq = [...qq.querySelectorAll(sY)].filter(eq.p);
+         for (const Yq of [...(0, eq.h)(qq), ...gq]) {
```

#### 228. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3238` → after: `L3004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR3004) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L3004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L3004) · [Before (L3238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3238)

```diff
-         const iz = zz => uz ? Fu(zz) : this.getEnabledCandidates(zz);
+         const Oq = qq => Eq ? (0, eq.f)(qq) : this.getEnabledCandidates(qq);
```

#### 229. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3240` → after: `L3006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR3006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L3006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L3006) · [Before (L3240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3240)

```diff
-         for (const dz of Xu(zz))
+         for (const Wq of (0, eq.h)(qq))
```

#### 230. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3243-L3247` → after: `L3009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR3009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L3009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L3009) · [Before (L3243-L3247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3243-L3247)

```diff
-           if (bz && performance.now() - Ez < 1e4 && (zz => {
-               for (const uz of zz.querySelectorAll("[data-pad-initial-area]"))
-                 if (!tu(uz, !1)) return !0;
-               return !1
-             })(zz)) return null;
+           if (gq && performance.now() - Yq < 1e4 && (0, eq.l)(qq)) return null;
```

#### 231. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3253` → after: `L3015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR3015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L3015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L3015) · [Before (L3253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3253)

```diff
-           Oz = Hz.length > 0 ? Hz : lz,
+           uq = cq.length > 0 ? cq : mq,
```

#### 232. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3261` → after: `L3023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR3023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L3023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L3023) · [Before (L3261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3261)

```diff
-           if (nz && wu(nz, zz.root)) return this.pendingFocus = null, void this.setFocus(nz, {
+           if (lq && (0, eq.t)(lq, qq.root)) return this.pendingFocus = null, void this.setFocus(lq, {
```

#### 233. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3267-L3268` → after: `L3029-L3030`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR3029) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L3029-L3030)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L3029-L3030) · [Before (L3267-L3268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3267-L3268)

```diff
-           iz = !!nz && wu(nz, zz.root);
-         if (!(!iz && nz && nz === this.lastActivated && uz - this.lastActivatedAtMs < 5e3 && zz.root.contains(nz) && Hu(nz) && Ou(nz))) {
+           Oq = !!lq && (0, eq.t)(lq, qq.root);
+         if (!(!Oq && lq && lq === this.lastActivated && Eq - this.lastActivatedAtMs < 5e3 && qq.root.contains(lq) && (0, eq.p)(lq) && (0, eq.w)(lq))) {
```

#### 234. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3273` → after: `L3035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR3035) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L3035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L3035) · [Before (L3273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3273)

```diff
-                 Ez = null !== bz && void 0 !== bz ? bz : this.restoredFromMemory ? null : this.pickDefault(zz.root);
+                 Yq = null !== gq && void 0 !== gq ? gq : this.restoredFromMemory ? null : this.pickDefault(qq.root);
```

#### 235. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3287` → after: `L3049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR3049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L3049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L3049) · [Before (L3287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3287)

```diff
-           const zz = Gu(uz.root);
+           const qq = (0, Fq.l)(Eq.root);
```

#### 236. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3290` → after: `L3052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR3052) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L3052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L3052) · [Before (L3290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3290)

```diff
-           }) : VE(this, uz.root) || (hu(uz.root) ? this.returnToOpener(uz.root) : this.backToStrip(uz.root) || bn()), !0
+           }) : Rg(this, Eq.root) || ((0, Fq.f)(Eq.root) ? this.returnToOpener(Eq.root) : this.backToStrip(Eq.root) || uY()), !0
```

#### 237. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3294` → after: `L3056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR3056) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L3056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L3056) · [Before (L3294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3294)

```diff
-         zz.wasPressed(bz) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (Ez = null === (nz = this.focused) || void 0 === nz ? void 0 : nz.getAttribute("data-pad-repeat")) && void 0 !== Ez ? Ez : null, this.confirmRepeated = zz.wokeDevice, this.confirm … [truncated]
+         qq.wasPressed(gq) && (this.confirmPressedOn = this.focused, this.confirmRepeatKey = null !== (Yq = null === (lq = this.focused) || void 0 === lq ? void 0 : lq.getAttribute("data-pad-repeat")) && void 0 !== Yq ? Yq : null, this.confirmRepeated = qq.wokeDevice, this.confirm … [truncated]
```

#### 238. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3297` → after: `L3059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR3059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L3059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L3059) · [Before (L3297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3297)

```diff
-           if (this.confirmPressedOn = null, zz && !this.confirmRepeated && zz === this.focused && zz.isConnected && !Ou(zz)) {
+           if (this.confirmPressedOn = null, qq && !this.confirmRepeated && qq === this.focused && qq.isConnected && !(0, eq.w)(qq)) {
```

#### 239. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3307` → after: `L3069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR3069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L3069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L3069) · [Before (L3307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3307)

```diff
-         bz && null !== this.confirmRepeatKey && zz.isHeld(uz) && (bz === this.focused && bz.isConnected && !Ou(bz) && bz.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? bz.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now()) && (thi … [truncated]
+         gq && null !== this.confirmRepeatKey && qq.isHeld(Eq) && (gq === this.focused && gq.isConnected && !(0, eq.w)(gq) && gq.getAttribute("data-pad-repeat") === this.confirmRepeatKey ? gq.hasAttribute("data-pad-repeat-wait") || this.confirmRepeat.update(!0, performance.now())  … [truncated]
```

#### 240. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3311` → after: `L3073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR3073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L3073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L3073) · [Before (L3311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3311)

```diff
-         if (!(0, dz.g)().menuBackToCategories) return !1;
+         if (!(0, Wq.i)().menuBackToCategories) return !1;
```

#### 241. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3321` → after: `L3083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR3083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L3083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L3083) · [Before (L3321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3321)

```diff
-           return null !== (bz = this.getEnabledCandidates(zz).find((zz => Uu(zz) === uz))) && void 0 !== bz ? bz : null
+           return null !== (gq = this.getEnabledCandidates(qq).find((qq => (0, Fq.F)(qq) === Eq))) && void 0 !== gq ? gq : null
```

#### 242. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3326-L3327` → after: `L3088-L3089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR3088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L3088-L3089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L3088-L3089) · [Before (L3326-L3327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3326-L3327)

```diff
-         if ((0, vn.b)(zz) || Vu(zz)) return;
-         this.lastActivatedKey = null !== (uz = Uu(zz)) && void 0 !== uz ? uz : this.lastActivatedKey, this.lastActivated = zz, this.lastActivatedAtMs = performance.now(), this.rememberFocus(zz);
+         if ((0, iY.e)(qq) || (0, Fq.G)(qq)) return;
+         this.lastActivatedKey = null !== (Eq = (0, Fq.F)(qq)) && void 0 !== Eq ? Eq : this.lastActivatedKey, this.lastActivated = qq, this.lastActivatedAtMs = performance.now(), this.rememberFocus(qq);
```

#### 243. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3331` → after: `L3093`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR3093) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L3093)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L3093) · [Before (L3331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3331)

```diff
-             Ez = new Set(bz.querySelectorAll(`[data-pad-initial-area], ${gn}`)),
+             Yq = new Set(gq.querySelectorAll(`[data-pad-initial-area], ${sY}`)),
```

#### 244. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3335` → after: `L3097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR3097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L3097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L3097) · [Before (L3335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3335)

```diff
-             return wu(zz, bz) ? null : null !== (nz = this.pickDefault(bz, {
+             return (0, eq.t)(qq, gq) ? null : null !== (lq = this.pickDefault(gq, {
```

#### 245. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3337-L3340` → after: `L3099-L3101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR3099) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L3099-L3101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L3099-L3101) · [Before (L3337-L3340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3337-L3340)

```diff
-             })) && void 0 !== nz ? nz : this.pickNewAreaStart(bz, Ez)
-           }), 5e3, (() => zz.isConnected && Ou(zz) && performance.now() - nz < 6e4))
-         }
-         Tu(zz), au(zz)
+             })) && void 0 !== lq ? lq : this.pickNewAreaStart(gq, Yq)
+           }), 5e3, (() => qq.isConnected && (0, eq.w)(qq) && performance.now() - lq < 6e4))
+         }(0, Fq.b)(qq), (0, Fq.i)(qq)
```

#### 246. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3344` → after: `L3105`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR3105) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L3105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L3105) · [Before (L3344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3344)

```diff
-         for (const Mz of Zz.H) {
+         for (const xq of aq.C) {
```

#### 247. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3347` → after: `L3108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR3108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L3108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L3108) · [Before (L3347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3347)

```diff
-         const iz = Ez ? (0, Zz.m)(zz.leftStick, (0, dz.g)().moveDeadzone) : {
+         const Oq = Yq ? (0, aq.j)(qq.leftStick, (0, Wq.i)().moveDeadzone) : {
```

#### 248. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3372` → after: `L3133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR3133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L3133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L3133) · [Before (L3372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3372)

```diff
-           tz = Mz ? (0, vn.b)(lz) : null;
+           Aq = xq ? (0, iY.e)(mq) : null;
```

#### 249. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3466` → after: `L3227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR3227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L3227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L3227) · [Before (L3466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3466)

```diff
-         Tu(zz), this.focusWhenFound((() => "true" !== zz.dataset.padSelected ? null : uz.isConnected ? this.tabStripNav.pickContentStart(uz, this.getEnabledCandidates(bz), bz) : nz ? this.tabStripNav.pickReplacedContentStart(zz, nz, this.getEnabledCandidates(bz), bz) : null), 3e3 … [truncated]
+         (0, Fq.b)(qq), this.focusWhenFound((() => "true" !== qq.dataset.padSelected ? null : Eq.isConnected ? this.tabStripNav.pickContentStart(Eq, this.getEnabledCandidates(gq), gq) : lq ? this.tabStripNav.pickReplacedContentStart(qq, lq, this.getEnabledCandidates(gq), gq) : nul … [truncated]
```

#### 250. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3484` → after: `L3245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR3245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L3245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L3245) · [Before (L3484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3484)

```diff
-         const bz = (0, Zz.m)(zz.rightStick, .2);
+         const gq = (0, aq.j)(qq.rightStick, .2);
```

#### 251. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3494` → after: `L3255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR3255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L3255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L3255) · [Before (L3494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3494)

```diff
-           const lz = null !== (nz = Az(this.focused, iz, uz.root)) && void 0 !== nz ? nz : Lz(uz.root, iz);
+           const mq = null !== (lq = nq(this.focused, Oq, Eq.root)) && void 0 !== lq ? lq : iq(Eq.root, Oq);
```

#### 252. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3502-L3503` → after: `L3263-L3264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR3263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L3263-L3264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L3263-L3264) · [Before (L3502-L3503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3502-L3503)

```diff
-     var jn = bz(7895);
-     var In = bz(8385);
+     var DY = gq(8123);
+     var ql = gq(8678);
```

#### 253. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3574-L3577` → after: `L3335-L3338`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR3335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L3335-L3338)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L3335-L3338) · [Before (L3574-L3577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3574-L3577)

```diff
-           return "function" === typeof(null === uz || void 0 === uz ? void 0 : uz.playEffect) ? uz : null
-         })(lz.g.getActiveGamepad()),
-         isVibrationOn: () => (0, dz.g)().vibration,
-         isPadInUse: Fz.h
+           return "function" === typeof(null === Eq || void 0 === Eq ? void 0 : Eq.playEffect) ? Eq : null
+         })(mq.h.getActiveGamepad()),
+         isVibrationOn: () => (0, Wq.i)().vibration,
+         isPadInUse: Nq.k
```

#### 254. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3582-L3586` → after: `L3343-L3347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR3343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L3343-L3347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L3343-L3347) · [Before (L3582-L3586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3582-L3586)

```diff
-     var zi = bz(7903),
-       ui = bz(2709),
-       bi = bz(111),
-       Ei = bz(33),
-       ni = bz(627);
+     var Ol = gq(8130),
+       ml = gq(2834),
+       xl = gq(114),
+       Al = gq(38),
+       cl = gq(623);
```

#### 255. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3596` → after: `L3357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR3357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L3357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L3357) · [Before (L3596)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3596)

```diff
-         return null === bz || this.deps.readReportedVisitId() === bz ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(bz), this.deps.xZ(uz, this.deps.getInputType()), "reported") : "notReady"
+         return null === gq || this.deps.readReportedVisitId() === gq ? "skipped" : this.deps.canReport() ? (this.deps.writeReportedVisitId(gq), this.deps.SN(Eq, this.deps.getInputType()), "reported") : "notReady"
```

#### 256. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3600-L3603` → after: `L3361-L3364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR3361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L3361-L3364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L3361-L3364) · [Before (L3600-L3603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3600-L3603)

```diff
-     var Mi = bz(1322),
-       ti = bz(1673),
-       Hi = bz(606),
-       Oi = bz(1417),
+     var Wl = gq(1336),
+       Nl = gq(1710),
+       al = gq(611),
+       Vl = gq(1416),
```

#### 257. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3606` → after: `L3367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR3367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L3367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L3367) · [Before (L3606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3606)

```diff
-         translationKey: `controller:${zz}`
+         translationKey: `controller:${qq}`
```

#### 258. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3668-L3669` → after: `L3429-L3430`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR3429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L3429-L3430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L3429-L3430) · [Before (L3668-L3669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3668-L3669)

```diff
-         const Ez = null !== (bz = Ri[zz][uz]) && void 0 !== bz ? bz : Zi[uz];
-         return "string" === typeof Ez ? Ez : (0, nz.x)(di.h.get().getCurrentLanguageCode(), Ez.translationKey)
+         const Yq = null !== (gq = ol[qq][Eq]) && void 0 !== gq ? gq : Hl[Eq];
+         return "string" === typeof Yq ? Yq : (0, lq.s)(dl.h.get().getCurrentLanguageCode(), Yq.translationKey)
```

#### 259. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3677-L3679` → after: `L3438-L3440`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR3438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L3438-L3440)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L3438-L3440) · [Before (L3677-L3679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3677-L3679)

```diff
-         const nz = (0, Fz.C)(),
-           iz = null !== bz && void 0 !== bz ? bz : nz,
-           lz = (0, zi.c)(iz, uz);
+         const lq = (0, Nq.B)(),
+           Oq = null !== gq && void 0 !== gq ? gq : lq,
+           mq = (0, Ol.i)(Oq, Eq);
```

#### 260. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3685-L3686` → after: `L3446-L3447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR3446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L3446-L3447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L3446-L3447) · [Before (L3685-L3686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3685-L3686)

```diff
-             "--pad-glyph-mask": `url(${lz})`,
-             "--pad-glyph-aspect": (0, zi.b)(iz, uz)
+             "--pad-glyph-mask": `url(${mq})`,
+             "--pad-glyph-aspect": (0, Ol.e)(Oq, Eq)
```

#### 261. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3690` → after: `L3451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR3451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L3451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L3451) · [Before (L3690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3690)

```diff
-     var Xi = bz(1846);
+     var yl = gq(1876);
```

#### 262. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3697` → after: `L3458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR3458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L3458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L3458) · [Before (L3697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3697)

```diff
-       } = (0, nz.F)();
+       } = (0, lq.v)();
```

#### 263. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3706` → after: `L3467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR3467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L3467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L3467) · [Before (L3706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3706)

```diff
-           return (0, cz.jsx)(Xi.b, {
+           return (0, Lq.jsx)(yl.c, {
```

#### 264. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3709` → after: `L3470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR3470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L3470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L3470) · [Before (L3709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3709)

```diff
-             }, ` ${uz.description}`] : [{
+             }, ` ${Eq.description}`] : [{
```

#### 265. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3714` → after: `L3475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR3475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L3475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L3475) · [Before (L3714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3714)

```diff
-           return (0, cz.jsx)(Xi.b, {
+           return (0, Lq.jsx)(yl.c, {
```

#### 266. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3719` → after: `L3480`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR3480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L3480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L3480) · [Before (L3719)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3719)

```diff
-     var si = bz(8387);
+     var rl = gq(8686);
```

#### 267. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3727` → after: `L3488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR3488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L3488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L3488) · [Before (L3727)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3727)

```diff
-           "--pad-drop-stack-hold": `${uz.holdMs}ms`
+           "--pad-drop-stack-hold": `${Eq.holdMs}ms`
```

#### 268. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3734-L3737` → after: `L3495-L3498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR3495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L3495-L3498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L3495-L3498) · [Before (L3734-L3737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3734-L3737)

```diff
-     var oi = bz(8412),
-       Ni = bz(8415),
-       vi = bz(8421),
-       xi = bz(8407);
+     var hl = gq(8709),
+       nl = gq(8712),
+       bl = gq(8718),
+       il = gq(8704);
```

#### 269. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3741` → after: `L3502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR3502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L3502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L3502) · [Before (L3741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3741)

```diff
-         } = (0, tz.m)(["gameState"]), uz = (0, Fz.z)(), [Ez, nz] = (0, qz.useState)(!1), [iz, lz] = (0, qz.useState)(!1);
+         } = (0, Aq.j)(["gameState"]), Eq = (0, Nq.y)(), [Yq, lq] = (0, Sq.useState)(!1), [Oq, mq] = (0, Sq.useState)(!1);
```

#### 270. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3748` → after: `L3509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR3509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L3509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L3509) · [Before (L3748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3748)

```diff
-           return (Hi.x ? Promise.all([bz.e(69), bz.e(259), bz.e(199), bz.e(217), bz.e(216), bz.e(84)]).then((() => bz(39696))).then((zz => zz.startWasmPadGameplay)) : Promise.all([bz.e(69), bz.e(226), bz.e(225), bz.e(94), bz.e(72), bz.e(71), bz.e(70), bz.e(218), bz.e(182), bz.e(2 … [truncated]
+           return (al.v ? Promise.all([gq.e(70), gq.e(261), gq.e(200), gq.e(219), gq.e(218), gq.e(85)]).then((() => gq(40287))).then((qq => qq.startWasmPadGameplay)) : Promise.all([gq.e(70), gq.e(227), gq.e(226), gq.e(95), gq.e(73), gq.e(72), gq.e(71), gq.e(183), gq.e(223), gq.e(7 … [truncated]
```

#### 271. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3774` → after: `L3535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR3535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L3535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L3535) · [Before (L3774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3774)

```diff
-         } = (0, nz.F)(), uz = (0, Fz.z)(), {
+         } = (0, lq.v)(), Eq = (0, Nq.y)(), {
```

#### 272. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3777` → after: `L3538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR3538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L3538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L3538) · [Before (L3777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3777)

```diff
-         } = (0, tz.m)(["gameState", "isUiHidden"]), {
+         } = (0, Aq.j)(["gameState", "isUiHidden"]), {
```

#### 273. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3779-L3780` → after: `L3540-L3541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR3540) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L3540-L3541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L3540-L3541) · [Before (L3779-L3780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3779-L3780)

```diff
-         } = (0, dz.q)(), lz = (0, si.k)(), Mz = (0, si.n)(), [Hz, pz] = (0, qz.useState)(vi.e);
-         return (0, Oi.g)(xi.q, pz), !uz || iz || Ez || "inGame" !== bz || !lz && !Hz ? null : (0, cz.jsxs)("div", {
+         } = (0, Wq.r)(), mq = (0, rl.h)(), xq = (0, rl.i)(), [cq, Bq] = (0, Sq.useState)(bl.c);
+         return (0, Vl.f)(il.n, Bq), !Eq || Oq || Yq || "inGame" !== gq || !mq && !cq ? null : (0, Lq.jsxs)("div", {
```

#### 274. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3805` → after: `L3566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR3566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L3566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L3566) · [Before (L3805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3805)

```diff
-         } = (0, nz.F)(), uz = (0, Fz.z)(), {
+         } = (0, lq.v)(), Eq = (0, Nq.y)(), {
```

#### 275. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3808-L3809` → after: `L3569-L3570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR3569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L3569-L3570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L3569-L3570) · [Before (L3808-L3809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3808-L3809)

```diff
-         } = (0, tz.m)(["gameState", "isUiHidden"]), [iz, lz] = (0, qz.useState)(oi.d);
-         return (0, Oi.g)(xi.m, lz), uz && !Ez && "inGame" === bz && iz ? (0, cz.jsxs)("div", {
+         } = (0, Aq.j)(["gameState", "isUiHidden"]), [Oq, mq] = (0, Sq.useState)(hl.d);
+         return (0, Vl.f)(il.j, mq), Eq && !Yq && "inGame" === gq && Oq ? (0, Lq.jsxs)("div", {
```

#### 276. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3821` → after: `L3582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR3582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L3582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L3582) · [Before (L3821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3821)

```diff
-         } = (0, nz.F)(), uz = (0, Fz.z)(), {
+         } = (0, lq.v)(), Eq = (0, Nq.y)(), {
```

#### 277. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3824` → after: `L3585`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR3585) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L3585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L3585) · [Before (L3824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3824)

```diff
-         } = (0, tz.m)(["gameState", "isUiHidden"]), {
+         } = (0, Aq.j)(["gameState", "isUiHidden"]), {
```

#### 278. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3826-L3827` → after: `L3587-L3588`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR3587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L3587-L3588)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L3587-L3588) · [Before (L3826-L3827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3826-L3827)

```diff
-         } = (0, dz.q)(), [lz, Mz] = (0, qz.useState)(Ni.c);
-         return (0, Oi.g)(xi.j, Mz), uz && !Ez && "inGame" === bz && lz ? (0, cz.jsxs)("div", {
+         } = (0, Wq.r)(), [mq, xq] = (0, Sq.useState)(nl.b);
+         return (0, Vl.f)(il.i, xq), Eq && !Yq && "inGame" === gq && mq ? (0, Lq.jsxs)("div", {
```

#### 279. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3836-L3840` → after: `L3597-L3601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR3597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L3597-L3601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L3597-L3601) · [Before (L3836-L3840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3836-L3840)

```diff
-     var Pi = bz(8427),
-       Gi = bz(1892),
-       ai = bz(2313),
-       Vi = bz(7877);
-     const mi = zz => zz && !(0, Pi.e)(Gi.b.get("shopInfo")),
+     var zl = gq(8723),
+       Sl = gq(1926),
+       pl = gq(2383),
+       Gl = gq(8110);
+     const Ll = qq => qq && !(0, zl.d)(Sl.c.get("shopInfo")),
```

#### 280. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3842-L3844` → after: `L3603-L3605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR3603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L3603-L3605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L3603-L3605) · [Before (L3842-L3844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3842-L3844)

```diff
-         const zz = "inGame" === (0, tz.m)(["gameState"]).gameState;
-         return (0, ai.f)("shopInfo", (() => {
-           (0, Vi.k)(mi(zz))
+         const qq = "inGame" === (0, Aq.j)(["gameState"]).gameState;
+         return (0, pl.g)("shopInfo", (() => {
+           (0, Gl.f)(Ll(qq))
```

#### 281. `bundles/preprod.bloxd.io/chunks/js/controller.js` (Changed code · before: `L3846` → after: `L3607`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49aR3607) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-929226b38c66731b8c73a133d8584b6c95fe8e913f54f0be0f4b11464fcdb49a) · [After (L3607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/controller.js#L3607) · [Before (L3846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/controller.js#L3846)

```diff
-           (0, Vi.k)(mi(zz))
+           (0, Gl.f)(Ll(qq))
```
