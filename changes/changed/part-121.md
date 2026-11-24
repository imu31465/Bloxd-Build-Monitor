# Changed — Bundle Modifications Report (Part 121 / 137)

- **Updated at**: `2026-11-25T07:51 JST`
- **Part**: `121 / 137` (**424** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 120](part-120.md) · [Part 122 →](part-122.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/packTerrain.js` (7zvlu.7df130a9 → c6gaap.4d6587ec · continued)

- **File**: `bundles/bloxd.io/chunks/js/packTerrain.js` (21 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-523d9e4309995effb4745ee9ee7fbfbeb242907969903e72a0c1712c19771b6d)

#### 8. `bundles/bloxd.io/chunks/js/packTerrain.js` (Changed code · before: `L59` → after: `L59`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-523d9e4309995effb4745ee9ee7fbfbeb242907969903e72a0c1712c19771b6dR59) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-523d9e4309995effb4745ee9ee7fbfbeb242907969903e72a0c1712c19771b6d) · [After (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/packTerrain.js#L59) · [Before (L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/packTerrain.js#L59)

```diff
-         const BB = `the pack's atlas is sheets of ${IB.join(", ")} layers, the built atlas's ${nB.imagesPerAtlas.join(", ")}: run npm run buildAtlas`;
+         const BB = `the pack's atlas is sheets of ${GB.join(", ")} layers, the built atlas's ${JB.imagesPerAtlas.join(", ")}: run npm run buildAtlas`;
```

#### 9. `bundles/bloxd.io/chunks/js/packTerrain.js` (Changed code · before: `L68` → after: `L68`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-523d9e4309995effb4745ee9ee7fbfbeb242907969903e72a0c1712c19771b6dR68) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-523d9e4309995effb4745ee9ee7fbfbeb242907969903e72a0c1712c19771b6d) · [After (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/packTerrain.js#L68) · [Before (L68)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/packTerrain.js#L68)

```diff
-           return null !== (zB = null !== (IB = null !== (NB = JB(BB.terrain.texture(jB), QB)) && void 0 !== NB ? NB : nB.animatedBlockTextures[jB]) && void 0 !== IB ? IB : nB.rotatedBlockTextures[jB]) && void 0 !== zB ? zB : function(BB, jB, zB) {
+           return null !== (ZB = null !== (GB = null !== (vB = NB(BB.terrain.texture(IB), TB)) && void 0 !== vB ? vB : JB.animatedBlockTextures[IB]) && void 0 !== GB ? GB : JB.rotatedBlockTextures[IB]) && void 0 !== ZB ? ZB : function(BB, IB, ZB) {
```

#### 10. `bundles/bloxd.io/chunks/js/packTerrain.js` (Changed code · before: `L70-L71` → after: `L70-L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-523d9e4309995effb4745ee9ee7fbfbeb242907969903e72a0c1712c19771b6dR70) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-523d9e4309995effb4745ee9ee7fbfbeb242907969903e72a0c1712c19771b6d) · [After (L70-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/packTerrain.js#L70-L71) · [Before (L70-L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/packTerrain.js#L70-L71)

```diff
-             const IB = null !== (QB = dB.b[BB]) && void 0 !== QB ? QB : null;
-             return null === IB ? null : null !== (nB = JB(jB.texture(BB), zB)) && void 0 !== nB ? nB : IB
+             const GB = null !== (TB = oB.c[BB]) && void 0 !== TB ? TB : null;
+             return null === GB ? null : null !== (JB = NB(IB.texture(BB), ZB)) && void 0 !== JB ? JB : GB
```

#### 11. `bundles/bloxd.io/chunks/js/packTerrain.js` (Changed code · before: `L75` → after: `L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-523d9e4309995effb4745ee9ee7fbfbeb242907969903e72a0c1712c19771b6dR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-523d9e4309995effb4745ee9ee7fbfbeb242907969903e72a0c1712c19771b6d) · [After (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/packTerrain.js#L75) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/packTerrain.js#L75)

```diff
-           const zB = (0, NB.h)(jB);
+           const ZB = (0, vB.k)(IB);
```

#### 12. `bundles/bloxd.io/chunks/js/packTerrain.js` (Changed code · before: `L88` → after: `L88`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-523d9e4309995effb4745ee9ee7fbfbeb242907969903e72a0c1712c19771b6dR88) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-523d9e4309995effb4745ee9ee7fbfbeb242907969903e72a0c1712c19771b6d) · [After (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/packTerrain.js#L88) · [Before (L88)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/packTerrain.js#L88)

```diff
-             if (void 0 === nB) throw new Error(`the pack has no atlas sheet ${jB}`);
+             if (void 0 === JB) throw new Error(`the pack has no atlas sheet ${IB}`);
```

#### 13. `bundles/bloxd.io/chunks/js/packTerrain.js` (Changed code · before: `L90-L91` → after: `L90-L91`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-523d9e4309995effb4745ee9ee7fbfbeb242907969903e72a0c1712c19771b6dR90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-523d9e4309995effb4745ee9ee7fbfbeb242907969903e72a0c1712c19771b6d) · [After (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/packTerrain.js#L90-L91) · [Before (L90-L91)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/packTerrain.js#L90-L91)

```diff
-             if (null === dB) throw new Error(`the pack's atlas sheet ${jB} isn't a pack file`);
-             return (0, NB.o)(dB)
+             if (null === oB) throw new Error(`the pack's atlas sheet ${IB} isn't a pack file`);
+             return (0, vB.q)(oB)
```

#### 14. `bundles/bloxd.io/chunks/js/packTerrain.js` (Changed code · before: `L125` → after: `L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-523d9e4309995effb4745ee9ee7fbfbeb242907969903e72a0c1712c19771b6dR125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-523d9e4309995effb4745ee9ee7fbfbeb242907969903e72a0c1712c19771b6d) · [After (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/packTerrain.js#L125) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/packTerrain.js#L125)

```diff
-           const [IB, NB] = await Promise.all([zB.e(207).then((() => zB(34335))), null !== (BB = null === (jB = (QB = this.host).maxTextureSize) || void 0 === jB ? void 0 : jB.call(QB)) && void 0 !== BB ? BB : null]);
+           const [GB, vB] = await Promise.all([ZB.e(207).then((() => ZB(34276))), null !== (BB = null === (IB = (TB = this.host).maxTextureSize) || void 0 === IB ? void 0 : IB.call(TB)) && void 0 !== BB ? BB : null]);
```

#### 15. `bundles/bloxd.io/chunks/js/packTerrain.js` (Changed code · before: `L157` → after: `L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-523d9e4309995effb4745ee9ee7fbfbeb242907969903e72a0c1712c19771b6dR157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-523d9e4309995effb4745ee9ee7fbfbeb242907969903e72a0c1712c19771b6d) · [After (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/packTerrain.js#L157) · [Before (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/packTerrain.js#L157)

```diff
-         const dB = (0, IB.m)(zB);
+         const oB = (0, GB.i)(ZB);
```

#### 16. `bundles/bloxd.io/chunks/js/packTerrain.js` (Changed code · before: `L165-L166` → after: `L165-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-523d9e4309995effb4745ee9ee7fbfbeb242907969903e72a0c1712c19771b6dR165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-523d9e4309995effb4745ee9ee7fbfbeb242907969903e72a0c1712c19771b6d) · [After (L165-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/packTerrain.js#L165-L166) · [Before (L165-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/packTerrain.js#L165-L166)

```diff
-             nB.warn(`texture pack texture ${null!==(jB=BB.name)&&void 0!==jB?jB:"(all)"} failed`, BB.error), null !== BB.name && null === (0, NB.h)(BB.name) || (UB = BB.error)
-           }), (async () => nB.sourcesOf ? nB.sourcesOf(jB) : null === jB ? (0, NB.k)() : mB(jB, await this.maxLayerWidth(), dB)), {
+             JB.warn(`texture pack texture ${null!==(IB=BB.name)&&void 0!==IB?IB:"(all)"} failed`, BB.error), null !== BB.name && null === (0, vB.k)(BB.name) || (cB = BB.error)
+           }), (async () => JB.sourcesOf ? JB.sourcesOf(IB) : null === IB ? (0, vB.n)() : gB(IB, await this.maxLayerWidth(), oB)), {
```

#### 17. `bundles/bloxd.io/chunks/js/packTerrain.js` (Changed code · before: `L193` → after: `L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-523d9e4309995effb4745ee9ee7fbfbeb242907969903e72a0c1712c19771b6dR193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-523d9e4309995effb4745ee9ee7fbfbeb242907969903e72a0c1712c19771b6d) · [After (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/packTerrain.js#L193) · [Before (L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/packTerrain.js#L193)

```diff
-         return (null !== (jB = this.host.assetsOf) && void 0 !== jB ? jB : uB.h)(BB, await this.maxLayerWidth())
+         return (null !== (IB = this.host.assetsOf) && void 0 !== IB ? IB : kB.i)(BB, await this.maxLayerWidth())
```

#### 18. `bundles/bloxd.io/chunks/js/packTerrain.js` (Changed code · before: `L204` → after: `L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-523d9e4309995effb4745ee9ee7fbfbeb242907969903e72a0c1712c19771b6dR204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-523d9e4309995effb4745ee9ee7fbfbeb242907969903e72a0c1712c19771b6d) · [After (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/packTerrain.js#L204) · [Before (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/packTerrain.js#L204)

```diff
-   51181: (BB, jB, zB) => {
+   51093: (BB, IB, ZB) => {
```

#### 19. `bundles/bloxd.io/chunks/js/packTerrain.js` (Changed code · before: `L208-L209` → after: `L208-L209`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-523d9e4309995effb4745ee9ee7fbfbeb242907969903e72a0c1712c19771b6dR208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-523d9e4309995effb4745ee9ee7fbfbeb242907969903e72a0c1712c19771b6d) · [After (L208-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/packTerrain.js#L208-L209) · [Before (L208-L209)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/packTerrain.js#L208-L209)

```diff
-     var QB = zB(51166),
-       nB = zB(51173);
+     var TB = ZB(51075),
+       JB = ZB(51091);
```

#### 20. `bundles/bloxd.io/chunks/js/packTerrain.js` (Changed code · before: `L212` → after: `L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-523d9e4309995effb4745ee9ee7fbfbeb242907969903e72a0c1712c19771b6dR212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-523d9e4309995effb4745ee9ee7fbfbeb242907969903e72a0c1712c19771b6d) · [After (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/packTerrain.js#L212) · [Before (L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/packTerrain.js#L212)

```diff
-       let NB, uB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : BB => (0, nB.h)(BB, (0, QB.deviceMaxLayerWidth)(zB)),
+       let vB, kB = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : BB => (0, JB.i)(BB, (0, TB.deviceMaxLayerWidth)(ZB)),
```

#### 21. `bundles/bloxd.io/chunks/js/packTerrain.js` (Changed code · before: `L217` → after: `L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-523d9e4309995effb4745ee9ee7fbfbeb242907969903e72a0c1712c19771b6dR217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-523d9e4309995effb4745ee9ee7fbfbeb242907969903e72a0c1712c19771b6d) · [After (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/packTerrain.js#L217) · [Before (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/packTerrain.js#L217)

```diff
-           const zB = null === aB.gameSource ? aB : BB.playerState();
+           const ZB = null === nB.gameSource ? nB : BB.playerState();
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/playGameSources.js` (7zvlu.7df130a9 → c6gaap.4d6587ec)

- **File**: `bundles/bloxd.io/chunks/js/playGameSources.js` (348 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c)

#### 1. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L4)

```diff
-   39708: (BB, jB, zB) => {
+   39693: (BB, IB, ZB) => {
```

#### 2. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L7-L8` → after: `L7-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L7-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L7-L8) · [Before (L7-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L7-L8)

```diff
-       f: () => dB,
-       i: () => nB
+       c: () => oB,
+       d: () => JB
```

#### 3. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L22` → after: `L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L22) · [Before (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L22)

```diff
-       return BB === jB ? String(BB) : `${BB}-${jB}`
+       return BB === IB ? String(BB) : `${BB}-${IB}`
```

#### 4. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L36` → after: `L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L36) · [Before (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L36)

```diff
-             const BB = `${uB} ${UB} ${nB}`,
+             const BB = `${kB} ${cB} ${JB}`,
```

#### 5. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L50` → after: `L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L50) · [Before (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L50)

```diff
-       return nB.push(...dB.values()), nB.sort(((BB, jB) => BB.z0 - jB.z0 || BB.x0 - jB.x0)).map((BB => `x${IB(BB.x0,BB.x1)} z${IB(BB.z0,BB.z1)} ${BB.name}`))
+       return JB.push(...oB.values()), JB.sort(((BB, IB) => BB.z0 - IB.z0 || BB.x0 - IB.x0)).map((BB => `x${GB(BB.x0,BB.x1)} z${GB(BB.z0,BB.z1)} ${BB.name}`))
```

#### 6. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L57-L58` → after: `L57-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L57-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L57-L58) · [Before (L57-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L57-L58)

```diff
-         aB = [`The chunk from ${BB.join(" ")} to ${uB.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
-       null !== nB && aB.push(`The player's feet are at ${nB.map(Math.floor).join(" ")}, ${UB?"in this chunk":"outside this chunk"}.`);
+         nB = [`The chunk from ${BB.join(" ")} to ${kB.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
+       null !== JB && nB.push(`The player's feet are at ${JB.map(Math.floor).join(" ")}, ${cB?"in this chunk":"outside this chunk"}.`);
```

#### 7. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L63)

```diff
-         (null === dB || void 0 === dB ? void 0 : dB.boxes) === nB ? dB.to = QB : pB.push({
+         (null === oB || void 0 === oB ? void 0 : oB.boxes) === JB ? oB.to = TB : hB.push({
```

#### 8. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L73` → after: `L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L73) · [Before (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L73)

```diff
-         const BB = `y${IB(QB.from,QB.to)}: ${QB.boxes}`;
+         const BB = `y${GB(TB.from,TB.to)}: ${TB.boxes}`;
```

#### 9. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L75` → after: `L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L75) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L75)

```diff
-           aB.push(`Cut short: the layers from y${QB.from} up aren't shown, as there are too many blocks.`);
+           nB.push(`Cut short: the layers from y${TB.from} up aren't shown, as there are too many blocks.`);
```

#### 10. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L83` → after: `L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L83) · [Before (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L83)

```diff
-   8785: (BB, jB, zB) => {
+   8904: (BB, IB, ZB) => {
```

#### 11. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L85` → after: `L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L85) · [Before (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L85)

```diff
-       d: () => nB
+       e: () => JB
```

#### 12. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L87` → after: `L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L87) · [Before (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L87)

```diff
-     var QB = zB(28);
+     var TB = ZB(20);
```

#### 13. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L90` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L90) · [Before (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L90)

```diff
-       return !QB.c.get("isTouchScreen") && null !== document.pointerLockElement
+       return !TB.d.get("isTouchScreen") && null !== document.pointerLockElement
```

#### 14. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L93` → after: `L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L93) · [Before (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L93)

```diff
-   37020: (BB, jB, zB) => {
+   36976: (BB, IB, ZB) => {
```

#### 15. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L95-L96` → after: `L95-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR95) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L95-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L95-L96) · [Before (L95-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L95-L96)

```diff
-       d: () => IB,
-       f: () => dB,
+       c: () => GB,
+       g: () => oB,
```

#### 16. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L115` → after: `L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L115) · [Before (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L115)

```diff
-   39179: (BB, jB, zB) => {
+   39152: (BB, IB, ZB) => {
```

#### 17. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L118` → after: `L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L118) · [Before (L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L118)

```diff
-       f: () => IB
+       e: () => GB
```

#### 18. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L120` → after: `L120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L120) · [Before (L120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L120)

```diff
-     var QB = zB(31);
+     var TB = ZB(24);
```

#### 19. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L128` → after: `L128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR128) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L128) · [Before (L128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L128)

```diff
-       nB !== BB && (nB = BB, QB.n.Ly("replayViewer|videoExportChanged"))
+       JB !== BB && (JB = BB, TB.l.Gq("replayViewer|videoExportChanged"))
```

#### 20. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L131` → after: `L131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L131) · [Before (L131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L131)

```diff
-   36574: (BB, jB, zB) => {
+   36529: (BB, IB, ZB) => {
```

#### 21. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L133-L134` → after: `L133-L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L133-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L133-L134) · [Before (L133-L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L133-L134)

```diff
-       b: () => nB,
-       c: () => dB
+       d: () => JB,
+       h: () => oB
```

#### 22. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L146` → after: `L146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L146) · [Before (L146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L146)

```diff
-   39136: (BB, jB, zB) => {
+   39082: (BB, IB, ZB) => {
```

#### 23. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L150-L151` → after: `L150-L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR150) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L150-L151) · [Before (L150-L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L150-L151)

```diff
-     var QB = zB(31),
-       nB = zB(2006);
+     var TB = ZB(24),
+       JB = ZB(2029);
```

#### 24. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L169` → after: `L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L169) · [Before (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L169)

```diff
-     QB.n.subscribe("clientTaskProgress", (BB => {
+     TB.l.subscribe("clientTaskProgress", (BB => {
```

#### 25. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L173` → after: `L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L173) · [Before (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L173)

```diff
-   39681: (BB, jB, zB) => {
+   39671: (BB, IB, ZB) => {
```

#### 26. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L178-L179` → after: `L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L178) · [Before (L178-L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L178-L179)

```diff
-       f: () => pB,
-       j: () => uB,
+       h: () => hB,
```

#### 27. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L181-L182` → after: `L180-L182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L180-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L180-L182) · [Before (L181-L182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L181-L182)

```diff
-       n: () => aB,
-       p: () => mB
+       m: () => GB,
+       o: () => nB,
+       s: () => gB
```

#### 28. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L184-L187` → after: `L184-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L184-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L184-L187) · [Before (L184-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L184-L187)

```diff
-     var QB = zB(2006),
-       nB = zB(31),
-       dB = zB(2022);
-     const IB = (0, dB.o)((function() {
+     var TB = ZB(2029),
+       JB = ZB(24),
+       oB = ZB(2046);
+     const GB = (0, oB.h)((function() {
```

#### 29. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L191-L193` → after: `L191-L193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L191-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L191-L193) · [Before (L191-L193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L191-L193)

```diff
-           maxHealth: null !== (jB = QB.c.get("_totalMaxHealth")) && void 0 !== jB ? jB : null,
-           shield: null !== (zB = QB.c.get("_shield")) && void 0 !== zB ? zB : null,
-           maxShield: null !== (nB = QB.c.get("maxShield")) && void 0 !== nB ? nB : null
+           maxHealth: null !== (IB = TB.c.get("_totalMaxHealth")) && void 0 !== IB ? IB : null,
+           shield: null !== (ZB = TB.c.get("_shield")) && void 0 !== ZB ? ZB : null,
+           maxShield: null !== (JB = TB.c.get("maxShield")) && void 0 !== JB ? JB : null
```

#### 30. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L195` → after: `L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L195) · [Before (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L195)

```diff
-       }), [], (0, dB.l)("_health", "_totalMaxHealth", "_shield", "maxShield")),
+       }), [], (0, oB.f)("_health", "_totalMaxHealth", "_shield", "maxShield")),
```

#### 31. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L213` → after: `L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L213) · [Before (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L213)

```diff
-     const UB = (0, dB.o)((function() {
+     const cB = (0, oB.h)((function() {
```

#### 32. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L216` → after: `L216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L216) · [Before (L216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L216)

```diff
-     }), [], (0, dB.l)("_aura"));
+     }), [], (0, oB.f)("_aura"));
```

#### 33. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L220` → after: `L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L220) · [Before (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L220)

```diff
-         watch: jB => (0, nB.q)("shotPlayer", (zB => {
+         watch: IB => (0, JB.p)("shotPlayer", (ZB => {
```

#### 34. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L237` → after: `L237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR237) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L237) · [Before (L237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L237)

```diff
-       return (0, dB.e)("chat", (jB => {
+       return (0, oB.b)("chat", (IB => {
```

#### 35. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L244` → after: `L244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L244) · [Before (L244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L244)

```diff
-           serverChatMsgId: null !== zB && void 0 !== zB ? zB : null,
+           serverChatMsgId: null !== ZB && void 0 !== ZB ? ZB : null,
```

#### 36. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L284` → after: `L284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L284) · [Before (L284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L284)

```diff
-   41138: (BB, jB, zB) => {
+   41071: (BB, IB, ZB) => {
```

#### 37. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L286` → after: `L286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L286) · [Before (L286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L286)

```diff
-       e: () => NB,
+       d: () => vB,
```

#### 38. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L289` → after: `L289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L289) · [Before (L289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L289)

```diff
-     var QB = zB(3408);
+     var TB = ZB(3470);
```

#### 39. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L294` → after: `L294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L294) · [Before (L294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L294)

```diff
-       return dB ??= zB.e(216).then((() => zB(36392))).then((BB => {
+       return oB ??= ZB.e(216).then((() => ZB(36340))).then((BB => {
```

#### 40. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L302` → after: `L302`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR302) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L302) · [Before (L302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L302)

```diff
-             dB = (0, QB.x)(jB);
+             oB = (0, TB.t)(IB);
```

#### 41. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L306` → after: `L306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L306) · [Before (L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L306)

```diff
-             for (const NB of zB.split(QB.q)) nB.add(NB);
+             for (const vB of ZB.split(TB.o)) JB.add(vB);
```

#### 42. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L308` → after: `L308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L308) · [Before (L308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L308)

```diff
-         }(jB.split(QB.q), zB, dB)
+         }(IB.split(TB.o), ZB, oB)
```

#### 43. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L319` → after: `L319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR319) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L319) · [Before (L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L319)

```diff
-   39700: (BB, jB, zB) => {
+   39683: (BB, IB, ZB) => {
```

#### 44. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L321-L323` → after: `L321-L323`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L321-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L321-L323) · [Before (L321-L323)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L321-L323)

```diff
-       d: () => QB,
-       f: () => dB,
-       i: () => nB
+       e: () => TB,
+       g: () => oB,
+       k: () => JB
```

#### 45. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L357` → after: `L357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L357) · [Before (L357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L357)

```diff
-   39677: (BB, jB, zB) => {
+   39668: (BB, IB, ZB) => {
```

#### 46. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L359` → after: `L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L359) · [Before (L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L359)

```diff
-       b: () => nB
+       e: () => JB
```

#### 47. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L361` → after: `L361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L361) · [Before (L361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L361)

```diff
-     var QB = zB(1948);
+     var TB = ZB(1956);
```

#### 48. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L364` → after: `L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L364) · [Before (L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L364)

```diff
-       return (0, QB.s)(BB, jB) < zB
+       return (0, TB.p)(BB, IB) < ZB
```

#### 49. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L367` → after: `L367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L367) · [Before (L367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L367)

```diff
-   8724: (BB, jB, zB) => {
+   8843: (BB, IB, ZB) => {
```

#### 50. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L371` → after: `L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L371) · [Before (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L371)

```diff
-     var QB = zB(1289);
+     var TB = ZB(1317);
```

#### 51. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L376` → after: `L376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L376) · [Before (L376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L376)

```diff
-         const zB = (0, QB.e)();
+         const ZB = (0, TB.d)();
```

#### 52. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L386` → after: `L386`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L386) · [Before (L386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L386)

```diff
-   36538: (BB, jB, zB) => {
+   36492: (BB, IB, ZB) => {
```

#### 53. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L388` → after: `L388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L388) · [Before (L388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L388)

```diff
-       b: () => rB,
+       c: () => zB,
```

#### 54. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L391` → after: `L391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L391) · [Before (L391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L391)

```diff
-       i: () => pB
+       l: () => hB
```

#### 55. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L393-L396` → after: `L393-L396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L393-L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L393-L396) · [Before (L393-L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L393-L396)

```diff
-     var QB = zB(376),
-       nB = zB(698),
-       dB = zB(710),
-       IB = zB(41);
+     var TB = ZB(360),
+       JB = ZB(694),
+       oB = ZB(700),
+       GB = ZB(36);
```

#### 56. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L406-L407` → after: `L406-L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L406-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L406-L407) · [Before (L406-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L406-L407)

```diff
-       let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : IB.k;
-       (0, dB.h)(BB, NB)
+       let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GB.n;
+       (0, oB.i)(BB, vB)
```

#### 57. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L411` → after: `L411`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L411) · [Before (L411)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L411)

```diff
-       (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : IB.k).setItem(UB, !0)
+       (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GB.n).setItem(cB, !0)
```

#### 58. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L415-L416` → after: `L415-L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L415-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L415-L416) · [Before (L415-L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L415-L416)

```diff
-       let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : IB.k;
-       return (0, dB.d)(BB, NB)
+       let BB = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GB.n;
+       return (0, oB.c)(BB, vB)
```

#### 59. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L420-L421` → after: `L420-L421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L420-L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L420-L421) · [Before (L420-L421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L420-L421)

```diff
-       let jB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : IB.k;
-       const zB = (0, dB.d)(jB, NB),
+       let IB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : GB.n;
+       const ZB = (0, oB.c)(IB, vB),
```

#### 60. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L427` → after: `L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L427) · [Before (L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L427)

```diff
-           return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : IB.k).getItem(UB)
+           return !0 === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GB.n).getItem(cB)
```

#### 61. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L430-L434` → after: `L430-L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L430-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L430-L434) · [Before (L430-L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L430-L434)

```diff
-       return rB = null !== zB && null !== aB && (0, dB.f)(jB, NB) && function(BB, jB, zB) {
-           const nB = (0, QB.Sb)(BB),
-             dB = (0, QB.Sb)(jB),
-             IB = (0, QB.Mb)(BB),
-             NB = (0, QB.Mb)(jB);
+       return zB = null !== ZB && null !== nB && (0, oB.e)(IB, vB) && function(BB, IB, ZB) {
+           const JB = (0, TB.Vb)(BB),
+             oB = (0, TB.Vb)(IB),
+             GB = (0, TB.Pb)(BB),
+             vB = (0, TB.Pb)(IB);
```

#### 62. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L436` → after: `L436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L436) · [Before (L436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L436)

```diff
-         }(aB, BB, pB) ? zB : (0, nB.b)(), (0, dB.l)(jB, NB, rB), jB.setItem(uB, BB),
+         }(nB, BB, hB) ? ZB : (0, JB.d)(), (0, oB.l)(IB, vB, zB), IB.setItem(kB, BB),
```

#### 63. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L438` → after: `L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L438) · [Before (L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L438)

```diff
-           (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : IB.k).removeItem(UB)
+           (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : GB.n).removeItem(cB)
```

#### 64. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L442` → after: `L442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L442) · [Before (L442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L442)

```diff
-   39126: (BB, jB, zB) => {
+   39076: (BB, IB, ZB) => {
```

#### 65. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L444` → after: `L444`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR444) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L444) · [Before (L444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L444)

```diff
-       c: () => aB
+       e: () => nB
```

#### 66. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L446-L452` → after: `L446-L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L446-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L446-L452) · [Before (L446-L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L446-L452)

```diff
-     var QB = zB(1263),
-       nB = zB(1359),
-       dB = zB(28),
-       IB = zB(1343),
-       NB = zB(1357),
-       uB = zB(1543),
-       UB = zB(36538);
+     var TB = ZB(1281),
+       JB = ZB(1385),
+       oB = ZB(20),
+       GB = ZB(1370),
+       vB = ZB(1382),
+       kB = ZB(1579),
+       cB = ZB(36492);
```

#### 67. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L456-L457` → after: `L456-L457`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L456-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L456-L457) · [Before (L456-L457)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L456-L457)

```diff
-         xn: jB,
-         Kn: zB
+         jJ: IB,
+         PJ: ZB
```

#### 68. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L459-L461` → after: `L459-L461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L459-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L459-L461) · [Before (L459-L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L459-L461)

```diff
-       const aB = null !== jB && void 0 !== jB ? jB : (0, NB.d)().gameNameWithVariation;
-       (0, QB.C)(aB) && ((0, UB.i)(), (0, IB.W)((() => {
-         console.log("Received matchmaking order from game server to game", jB), (0, dB.i)("inGameReplay"), (0, uB.navigatePreserveSearch)((0, nB.e)(aB, null !== zB && void 0 !== zB ? zB : void 0))
+       const nB = null !== IB && void 0 !== IB ? IB : (0, vB.c)().gameNameWithVariation;
+       (0, TB.D)(nB) && ((0, cB.l)(), (0, GB.$)((() => {
+         console.log("Received matchmaking order from game server to game", IB), (0, oB.m)("inGameReplay"), (0, kB.navigatePreserveSearch)((0, JB.b)(nB, null !== ZB && void 0 !== ZB ? ZB : void 0))
```

#### 69. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L465` → after: `L465`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR465) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L465) · [Before (L465)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L465)

```diff
-   39277: (BB, jB, zB) => {
+   39247: (BB, IB, ZB) => {
```

#### 70. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L467` → after: `L467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L467) · [Before (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L467)

```diff
-       e: () => dB
+       c: () => oB
```

#### 71. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L469-L470` → after: `L469-L470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L469-L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L469-L470) · [Before (L469-L470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L469-L470)

```diff
-     var QB = zB(31),
-       nB = zB(2033);
+     var TB = ZB(24),
+       JB = ZB(2066);
```

#### 72. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L474-L476` → after: `L474-L476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L474-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L474-L476) · [Before (L474-L476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L474-L476)

```diff
-       const dB = (0, nB.m)(null !== (jB = null === (zB = nB.w.toggleFreeCam) || void 0 === zB ? void 0 : zB[0]) && void 0 !== jB ? jB : null);
-       QB.n.Ly("showBottomMessage", {
-         message: `Free Camera ${BB?"Enabled":"Disabled"}${dB?` - Press ${dB} to toggle`:""}`,
+       const oB = (0, JB.n)(null !== (IB = null === (ZB = JB.u.toggleFreeCam) || void 0 === ZB ? void 0 : ZB[0]) && void 0 !== IB ? IB : null);
+       TB.l.Gq("showBottomMessage", {
+         message: `Free Camera ${BB?"Enabled":"Disabled"}${oB?` - Press ${oB} to toggle`:""}`,
```

#### 73. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L482` → after: `L482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L482) · [Before (L482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L482)

```diff
-   39121: (BB, jB, zB) => {
+   39067: (BB, IB, ZB) => {
```

#### 74. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L487` → after: `L486-L487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR486) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L486-L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L486-L487) · [Before (L487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L487)

```diff
-       j: () => UB
+       j: () => vB,
+       k: () => cB
```

#### 75. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L489-L490` → after: `L489-L490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR489) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L489-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L489-L490) · [Before (L489-L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L489-L490)

```diff
-     var QB = zB(31),
-       nB = zB(1381);
+     var TB = ZB(24),
+       JB = ZB(1403);
```

#### 76. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L494` → after: `L494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L494) · [Before (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L494)

```diff
-       QB.n.Ly("newUiRequest", {
+       TB.l.Gq("newUiRequest", {
```

#### 77. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L501` → after: `L501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L501) · [Before (L501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L501)

```diff
-       QB.n.Ly("removeUiRequest", BB, !0);
+       TB.l.Gq("removeUiRequest", BB, !0);
```

#### 78. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L507` → after: `L507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L507) · [Before (L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L507)

```diff
-       QB.n.Ly("clearUiRequests");
+       TB.l.Gq("clearUiRequests");
```

#### 79. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L525` → after: `L525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L525) · [Before (L525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L525)

```diff
-   39703: (BB, jB, zB) => {
+   39689: (BB, IB, ZB) => {
```

#### 80. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L530-L531` → after: `L530-L531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR530) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L530-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L530-L531) · [Before (L530-L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L530-L531)

```diff
-     var QB = zB(214),
-       nB = zB(39708);
+     var TB = ZB(201),
+       JB = ZB(39693);
```

#### 81. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L541-L543` → after: `L541-L543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L541-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L541-L543) · [Before (L541-L543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L541-L543)

```diff
-     var uB = zB(39716),
-       UB = zB(2006),
-       aB = zB(1357);
+     var kB = ZB(39701),
+       cB = ZB(2029),
+       nB = ZB(1382);
```

#### 82. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L546` → after: `L546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L546) · [Before (L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L546)

```diff
-       if (!BB) return uB.b;
+       if (!BB) return kB.d;
```

#### 83. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L549-L550` → after: `L549-L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L549-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L549-L550) · [Before (L549-L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L549-L550)

```diff
-       const dB = QB.e.ZJ,
-         IB = (0, nB.i)(null !== jB && void 0 !== jB ? jB : zB, dB),
+       const oB = TB.f.YN,
+         GB = (0, JB.d)(null !== IB && void 0 !== IB ? IB : ZB, oB),
```

#### 84. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L555` → after: `L555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L555) · [Before (L555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L555)

```diff
-       }), zB) : `The chunk from ${IB.join(" ")} isn't loaded: only chunks near the player are. The player's feet are at ${zB.map(Math.floor).join(" ")}.`
+       }), ZB) : `The chunk from ${GB.join(" ")} isn't loaded: only chunks near the player are. The player's feet are at ${ZB.map(Math.floor).join(" ")}.`
```

#### 85. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L560` → after: `L560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L560) · [Before (L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L560)

```diff
-       if (!BB) return uB.e;
+       if (!BB) return kB.g;
```

#### 86. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L571` → after: `L571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L571) · [Before (L571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L571)

```diff
-         jB.push(`The player (the creator) stands at ${IB(BB.position)}${zB}, ${BB.creative?"in":"not in"} creative mode.`);
+         IB.push(`The player (the creator) stands at ${GB(BB.position)}${ZB}, ${BB.creative?"in":"not in"} creative mode.`);
```

#### 87. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L573-L575` → after: `L573-L575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L573-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L573-L575) · [Before (L573-L575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L573-L575)

```diff
-         jB.push(QB ? `Holding (slot ${BB.heldSlot}): ${NB(QB)}.` : `Holding nothing (slot ${BB.heldSlot} is empty).`);
-         const nB = BB.slots.flatMap(((BB, jB) => BB ? [`slot ${jB}: ${NB(BB)}`] : []));
-         jB.push(nB.length > 0 ? `Inventory: ${nB.join(", ")}.` : "Inventory: empty.");
+         IB.push(TB ? `Holding (slot ${BB.heldSlot}): ${vB(TB)}.` : `Holding nothing (slot ${BB.heldSlot} is empty).`);
+         const JB = BB.slots.flatMap(((BB, IB) => BB ? [`slot ${IB}: ${vB(BB)}`] : []));
+         IB.push(JB.length > 0 ? `Inventory: ${JB.join(", ")}.` : "Inventory: empty.");
```

#### 88. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L584` → after: `L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L584) · [Before (L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L584)

```diff
-             jB.push(`- ${zB} at ${IB(BB.position)}, ${QB} block${1===QB?"":"s"} away`)
+             IB.push(`- ${ZB} at ${GB(BB.position)}, ${TB} block${1===TB?"":"s"} away`)
```

#### 89. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L586` → after: `L586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L586) · [Before (L586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L586)

```diff
-           UB.length > dB && jB.push(`- and ${UB.length-dB} more further away`)
+           cB.length > oB && IB.push(`- and ${cB.length-oB} more further away`)
```

#### 90. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L590` → after: `L590`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR590) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L590) · [Before (L590)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L590)

```diff
-         game: null !== (jB = (0, aB.d)().gameNameWithVariation) && void 0 !== jB ? jB : null,
+         game: null !== (IB = (0, nB.c)().gameNameWithVariation) && void 0 !== IB ? IB : null,
```

#### 91. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L592-L593` → after: `L592-L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L592-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L592-L593) · [Before (L592-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L592-L593)

```diff
-         health: null !== (zB = UB.c.get("_health")) && void 0 !== zB ? zB : null,
-         maxHealth: null !== (QB = UB.c.get("_totalMaxHealth")) && void 0 !== QB ? QB : null,
+         health: null !== (ZB = cB.c.get("_health")) && void 0 !== ZB ? ZB : null,
+         maxHealth: null !== (TB = cB.c.get("_totalMaxHealth")) && void 0 !== TB ? TB : null,
```

#### 92. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L602` → after: `L602`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L602) · [Before (L602)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L602)

```diff
-   40956: (BB, jB, zB) => {
+   40901: (BB, IB, ZB) => {
```

#### 93. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L605-L606` → after: `L605-L606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L605-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L605-L606) · [Before (L605-L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L605-L606)

```diff
-       B: () => VB,
-       E: () => YB,
+       C: () => jB,
+       D: () => DB,
```

#### 94. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L610-L611` → after: `L610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L610) · [Before (L610-L611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L610-L611)

```diff
-       O: () => hB,
-       R: () => oB,
+       P: () => pB,
```

#### 95. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L614` → after: `L613-L614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L613-L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L613-L614) · [Before (L614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L614)

```diff
-       V: () => FB,
+       U: () => MB,
+       c: () => tB,
```

#### 96. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L616-L620` → after: `L616-L620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L616-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L616-L620) · [Before (L616-L620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L616-L620)

```diff
-       i: () => AB,
-       m: () => qB,
-       o: () => KB,
-       s: () => fB,
-       w: () => iB,
+       h: () => YB,
+       l: () => bB,
+       p: () => iB,
+       t: () => OB,
+       v: () => mB,
```

#### 97. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L623-L628` → after: `L623-L628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR623) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L623-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L623-L628) · [Before (L623-L628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L623-L628)

```diff
-     var QB = zB(1418),
-       nB = zB(31),
-       dB = zB(1316),
-       IB = zB(2482),
-       NB = zB(4909),
-       uB = zB(4873);
+     var TB = ZB(1454),
+       JB = ZB(24),
+       oB = ZB(1353),
+       GB = ZB(2481),
+       vB = ZB(4990),
+       kB = ZB(4958);
```

#### 98. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L658` → after: `L658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L658) · [Before (L658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L658)

```diff
-       return (0, dB.y)() && !SB
+       return (0, oB.w)() && !QB
```

#### 99. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L677` → after: `L677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L677) · [Before (L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L677)

```diff
-       (0, NB.l)(IB.t.Menu, (0, dB.y)() ? 0 : IB.t.Menu)
+       (0, vB.f)(GB.o.Menu, (0, oB.w)() ? 0 : GB.o.Menu)
```

#### 100. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L703` → after: `L703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L703) · [Before (L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L703)

```diff
-       return (!pB || performance.now() - yB > mB) && (pB = (0, uB.I)().lockPointer(), yB = performance.now()), pB
+       return (!hB || performance.now() - qB > gB) && (hB = (0, kB.H)().lockPointer(), qB = performance.now()), hB
```

#### 101. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L711` → after: `L711`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L711) · [Before (L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L711)

```diff
-       return oB() && !aB && !kB && !(0, QB.l)()
+       return pB() && !nB && !yB && !(0, TB.j)()
```

#### 102. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L728` → after: `L728`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L728) · [Before (L728)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L728)

```diff
-       GB ? navigator.vendor.startsWith("Apple") ? CB() : LB = gB : lB()
+       UB ? navigator.vendor.startsWith("Apple") ? xB() : WB = dB : lB()
```

#### 103. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L744` → after: `L744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L744) · [Before (L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L744)

```diff
-       tB = !0, (0, uB.I)().unlockPointer()
+       CB = !0, (0, kB.H)().unlockPointer()
```

#### 104. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L755` → after: `L755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR755) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L755) · [Before (L755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L755)

```diff
-       nB.n.Ly("pointerLockUpdate", aB)
+       JB.l.Gq("pointerLockUpdate", nB)
```

#### 105. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L758` → after: `L758`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR758) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L758) · [Before (L758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L758)

```diff
-   40766: (BB, jB, zB) => {
+   40729: (BB, IB, ZB) => {
```

#### 106. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L762` → after: `L761-L762`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L761-L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L761-L762) · [Before (L762)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L762)

```diff
-       g: () => pB,
+       f: () => vB,
+       h: () => hB,
```

#### 107. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L764` → after: `L764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L764) · [Before (L764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L764)

```diff
-       m: () => IB,
+       l: () => GB,
```

#### 108. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L766` → after: `L766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L766) · [Before (L766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L766)

```diff
-       q: () => uB
+       p: () => kB
```

#### 109. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L801` → after: `L801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L801) · [Before (L801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L801)

```diff
-   41085: (BB, jB, zB) => {
+   41032: (BB, IB, ZB) => {
```

#### 110. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L806-L820` → after: `L806-L820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L806-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L806-L820) · [Before (L806-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L806-L820)

```diff
-     var QB = zB(1982),
-       nB = zB(40766),
-       dB = zB(4873),
-       IB = zB(40695),
-       NB = zB(41061),
-       uB = zB(39681),
-       UB = zB(31),
-       aB = zB(4893),
-       pB = zB(4887),
-       rB = zB(40718),
-       sB = zB(40740),
-       JB = zB(41090),
-       mB = zB(40725);
-     (0, mB.l)(aB.Wb.Chat, (BB => {
-       if (BB.payloadKind !== pB.fc.Msgpack) return;
+     var TB = ZB(1995),
+       JB = ZB(40729),
+       oB = ZB(4958),
+       GB = ZB(40643),
+       vB = ZB(41017),
+       kB = ZB(39671),
+       cB = ZB(24),
+       nB = ZB(4975),
+       hB = ZB(4969),
+       zB = ZB(40682),
+       FB = ZB(40710),
+       NB = ZB(41037),
+       gB = ZB(40692);
+     (0, gB.l)(nB.nc.Chat, (BB => {
+       if (BB.payloadKind !== hB.nc.Msgpack) return;
```

#### 111. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L829` → after: `L829`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L829) · [Before (L829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L829)

```diff
-           serverChatMsgId: null !== jB && void 0 !== jB ? jB : void 0,
+           serverChatMsgId: null !== IB && void 0 !== IB ? IB : void 0,
```

#### 112. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L833-L834` → after: `L833-L834`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L833-L834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L833-L834) · [Before (L833-L834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L833-L834)

```diff
-       }((0, rB.c)(BB.payload));
-       null !== jB && UB.n.Ly("chat", jB, !0)
+       }((0, zB.e)(BB.payload));
+       null !== IB && cB.l.Gq("chat", IB, !0)
```

#### 113. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L837` → after: `L837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L837) · [Before (L837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L837)

```diff
-         chatReceived: (0, uB.f)((function(BB) {
+         chatReceived: (0, kB.h)((function(BB) {
```

#### 114. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L841-L843` → after: `L841-L843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR841) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L841-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L841-L843) · [Before (L841-L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L841-L843)

```diff
-             name: null !== (jB = JB.e.getName(BB)) && void 0 !== jB ? jB : null,
-             local: (0, sB.i)() === BB,
-             profileEffect: null !== (zB = null === (QB = (0, JB.i)(BB)) || void 0 === QB ? void 0 : QB.profileEffect) && void 0 !== zB ? zB : null
+             name: null !== (IB = NB.f.getName(BB)) && void 0 !== IB ? IB : null,
+             local: (0, FB.h)() === BB,
+             profileEffect: null !== (ZB = null === (TB = (0, NB.j)(BB)) || void 0 === TB ? void 0 : TB.profileEffect) && void 0 !== ZB ? ZB : null
```

#### 115. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L851` → after: `L851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L851) · [Before (L851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L851)

```diff
-             ha: zB,
+             Xn: ZB,
```

#### 116. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L854` → after: `L854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L854) · [Before (L854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L854)

```diff
-           null === (jB = (0, IB.g)()) || void 0 === jB || jB.clientApi.sendChat(zB, QB)
+           null === (IB = (0, GB.j)()) || void 0 === IB || IB.clientApi.sendChat(ZB, TB)
```

#### 117. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L857-L860` → after: `L857-L860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L857-L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L857-L860) · [Before (L857-L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L857-L860)

```diff
-     var GB = zB(214),
-       LB = zB(2006),
-       gB = zB(40682),
-       tB = zB(39677);
+     var UB = ZB(201),
+       WB = ZB(2029),
+       dB = ZB(40633),
+       CB = ZB(39668);
```

#### 118. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L865` → after: `L865`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L865) · [Before (L865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L865)

```diff
-           const zB = (0, IB.g)();
+           const ZB = (0, GB.j)();
```

#### 119. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L868-L869` → after: `L868-L869`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L868-L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L868-L869) · [Before (L868-L869)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L868-L869)

```diff
-           if (0 !== (gB.w.playerFlags(QB.apiView, 0) & gB.Sd.Crouching)) return !1;
-           const nB = QB.queries.directorEntity(QB.localId) >= gB.zb.BYTES ? QB.memoryData(QB.scratch(), gB.zb.BYTES, 8, "the local player's DirectorEntity") : null;
+           if (0 !== (dB.p.playerFlags(TB.apiView, 0) & dB.Bd.Crouching)) return !1;
+           const JB = TB.queries.directorEntity(TB.localId) >= dB.gb.BYTES ? TB.memoryData(TB.scratch(), dB.gb.BYTES, 8, "the local player's DirectorEntity") : null;
```

#### 120. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L871-L872` → after: `L871-L872`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L871-L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L871-L872) · [Before (L871-L872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L871-L872)

```diff
-           for (let dB = 0; dB < 3; dB++) SB[dB] = gB.zb.feet(nB, 0, dB);
-           return SB[1] += gB.zb.eyeHeight(nB, 0), (0, tB.b)(SB, BB, null !== (jB = LB.c.get("blockReach")) && void 0 !== jB ? jB : GB.e.zk)
+           for (let oB = 0; oB < 3; oB++) QB[oB] = dB.gb.feet(JB, 0, oB);
+           return QB[1] += dB.gb.eyeHeight(JB, 0), (0, CB.e)(QB, BB, null !== (IB = WB.c.get("blockReach")) && void 0 !== IB ? IB : UB.f.Aq)
```

#### 121. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L878` → after: `L878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L878) · [Before (L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L878)

```diff
-           null === (jB = (0, IB.g)()) || void 0 === jB || jB.clickCodeBlock(BB)
+           null === (IB = (0, GB.j)()) || void 0 === IB || IB.clickCodeBlock(BB)
```

#### 122. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L881-L888` → after: `L881-L888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L881-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L881-L888) · [Before (L881-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L881-L888)

```diff
-     var iB = zB(40699),
-       qB = zB(41096),
-       fB = zB(1067),
-       oB = zB(39146),
-       HB = zB(4866),
-       DB = zB(40709),
-       FB = zB(40697),
-       YB = zB(40713);
+     var OB = ZB(40658),
+       YB = ZB(41045),
+       iB = ZB(1058),
+       pB = ZB(39094),
+       aB = ZB(4952),
+       HB = ZB(40666),
+       MB = ZB(40649),
+       jB = ZB(40675);
```

#### 123. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L895` → after: `L895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L895) · [Before (L895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L895)

```diff
-         if ("jj" === BB) {
+         if ("II" === BB) {
```

#### 124. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L900` → after: `L900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L900) · [Before (L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L900)

```diff
-           } = zB.jj, dB = Object.keys(BB)[0], IB = BB[dB];
+           } = ZB.II, oB = Object.keys(BB)[0], GB = BB[oB];
```

#### 125. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L913` → after: `L913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L913) · [Before (L913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L913)

```diff
-         return null !== (jB = null === (zB = (0, IB.g)()) || void 0 === zB ? void 0 : zB.renderFrame.projectWorldPosToScreenPos(BB)) && void 0 !== jB ? jB : {
+         return null !== (IB = null === (ZB = (0, GB.j)()) || void 0 === ZB ? void 0 : ZB.renderFrame.projectWorldPosToScreenPos(BB)) && void 0 !== IB ? IB : {
```

#### 126. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L922-L930` → after: `L922-L930`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L922-L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L922-L930) · [Before (L922-L930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L922-L930)

```diff
-       XB || (XB = !0, (0, mB.l)(aB.Wb.ProgressBarUpdate, (BB => {
-         const jB = (0, YB.e)(BB);
-         (0, YB.c)(jB) && UB.n.Ly("progressBarUpdate", jB, !0)
-       })), (0, mB.l)(DB.q, (BB => {
-         const jB = (0, YB.d)(DB.q, BB);
-         jB && UB.n.Ly("middleScreenBarInitiate", {
-           duration: jB.Zn,
-           Tn: jB.Tn,
-           horizBarRemOffset: jB.Pn
+       rB || (rB = !0, (0, gB.l)(nB.nc.ProgressBarUpdate, (BB => {
+         const IB = (0, jB.f)(BB);
+         (0, jB.d)(IB) && cB.l.Gq("progressBarUpdate", IB, !0)
+       })), (0, gB.l)(HB.t, (BB => {
+         const IB = (0, jB.e)(HB.t, BB);
+         IB && cB.l.Gq("middleScreenBarInitiate", {
+           duration: IB.iJ,
+           pJ: IB.pJ,
+           horizBarRemOffset: IB.aJ
```

#### 127. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L932-L935` → after: `L932-L935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L932-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L932-L935) · [Before (L932-L935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L932-L935)

```diff
-       })), (0, mB.l)(aB.Wb.RemoveMiddleScreenBar, (() => {
-         UB.n.Ly("middleScreenBarRemove")
-       })), (0, mB.l)(DB.$, (BB => {
-         const jB = (0, YB.d)(DB.$, BB);
+       })), (0, gB.l)(nB.nc.RemoveMiddleScreenBar, (() => {
+         cB.l.Gq("middleScreenBarRemove")
+       })), (0, gB.l)(HB.R, (BB => {
+         const IB = (0, jB.e)(HB.R, BB);
```

#### 128. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L938-L940` → after: `L938-L940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR938) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L938-L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L938-L940) · [Before (L938-L940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L938-L940)

```diff
-           const BB = jB.fB ? null === (zB = (0, IB.g)()) || void 0 === zB ? void 0 : zB.renderFrame.projectDirectionToScreenPos(jB.fB) : void 0;
-           UB.n.Ly("sendHitmarker", {
-             Wj: jB.Wj,
+           const BB = IB.YB ? null === (ZB = (0, GB.j)()) || void 0 === ZB ? void 0 : ZB.renderFrame.projectDirectionToScreenPos(IB.YB) : void 0;
+           cB.l.Gq("sendHitmarker", {
+             uI: IB.uI,
```

#### 129. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L944-L945` → after: `L944-L945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L944-L945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L944-L945) · [Before (L944-L945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L944-L945)

```diff
-       })), (0, mB.l)(DB.bb, (BB => {
-         const jB = (0, YB.d)(DB.bb, BB);
+       })), (0, gB.l)(HB.W, (BB => {
+         const IB = (0, jB.e)(HB.W, BB);
```

#### 130. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L951-L952` → after: `L951-L952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR951) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L951-L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L951-L952) · [Before (L951-L952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L951-L952)

```diff
-             Yj: nB,
-             hj: dB
+             MI: JB,
+             RI: oB
```

#### 131. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L954` → after: `L954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L954) · [Before (L954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L954)

```diff
-           UB.n.Ly("setDirectionArrow", {
+           cB.l.Gq("setDirectionArrow", {
```

#### 132. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L959` → after: `L959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L959) · [Before (L959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L959)

```diff
-             hj: dB
+             RI: oB
```

#### 133. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L963-L964` → after: `L963-L964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR963) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L963-L964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L963-L964) · [Before (L963-L964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L963-L964)

```diff
-         const jB = (0, YB.d)(DB.f, BB);
-         jB && UB.n.Ly("clearDirectionArrow", {
+         const IB = (0, jB.e)(HB.f, BB);
+         IB && cB.l.Gq("clearDirectionArrow", {
```

#### 134. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L967-L972` → after: `L967-L972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR967) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L967-L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L967-L972) · [Before (L967-L972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L967-L972)

```diff
-       })), (0, mB.l)(DB.m, (BB => {
-         const jB = (0, YB.d)(DB.m, BB);
-         jB && UB.n.Ly("flyingMiddleMessage", {
-           content: VB(jB.wd),
-           xd: jB.xd,
-           Kd: jB.Kd
+       })), (0, gB.l)(HB.o, (BB => {
+         const IB = (0, jB.e)(HB.o, BB);
+         IB && cB.l.Gq("flyingMiddleMessage", {
+           content: PB(IB.jo),
+           Po: IB.Po,
+           Ro: IB.Ro
```

#### 135. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L974-L975` → after: `L974-L975`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L974-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L974-L975) · [Before (L974-L975)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L974-L975)

```diff
-       })), (0, mB.l)(aB.Wb.WorldVariation, (BB => {
-         const jB = (0, YB.e)(BB);
+       })), (0, gB.l)(nB.nc.WorldVariation, (BB => {
+         const IB = (0, jB.f)(BB);
```

#### 136. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L977-L978` → after: `L977-L978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L977-L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L977-L978) · [Before (L977-L978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L977-L978)

```diff
-           const BB = jB === fB.g ? null : {
-             message: `Currently loaded as variation: ${jB}`,
+           const BB = IB === iB.f ? null : {
+             message: `Currently loaded as variation: ${IB}`,
```

#### 137. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L981` → after: `L981`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR981) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L981) · [Before (L981)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L981)

```diff
-           UB.n.Ly("showPermanentBottomMessage", BB, !0)
+           cB.l.Gq("showPermanentBottomMessage", BB, !0)
```

#### 138. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L983-L984` → after: `L983-L984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L983-L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L983-L984) · [Before (L983-L984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L983-L984)

```diff
-       })), (0, mB.l)(DB.F, (BB => {
-         const jB = (0, YB.d)(DB.F, BB);
+       })), (0, gB.l)(HB.C, (BB => {
+         const IB = (0, jB.e)(HB.C, BB);
```

#### 139. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L989` → after: `L989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L989) · [Before (L989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L989)

```diff
-           } = (0, oB.c)(jB), nB = {
+           } = (0, pB.i)(IB), JB = {
```

#### 140. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L992-L993` → after: `L992-L993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L992-L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L992-L993) · [Before (L992-L993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L992-L993)

```diff
-           for (const dB of oB.b) nB[dB] && (nB[dB] = VB(nB[dB]));
-           HB.c.queueQTE(BB, zB, nB).getResult().then((jB => {
+           for (const oB of pB.e) JB[oB] && (JB[oB] = PB(JB[oB]));
+           aB.d.queueQTE(BB, ZB, JB).getResult().then((IB => {
```

#### 141. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L995` → after: `L995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L995) · [Before (L995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L995)

```diff
-             "boolean" === typeof jB && (null === (zB = (0, IB.g)()) || void 0 === zB || zB.send(FB.e.QteResponse, {
+             "boolean" === typeof IB && (null === (ZB = (0, GB.j)()) || void 0 === ZB || ZB.send(MB.e.QteResponse, {
```

#### 142. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1000-L1010` → after: `L1000-L1010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1000-L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1000-L1010) · [Before (L1000-L1010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1000-L1010)

```diff
-         }(jB.id, jB.xB)
-       })), (0, mB.l)(DB.T, (BB => {
-         const jB = (0, YB.d)(DB.T, BB);
-         "number" === typeof jB && HB.c.cancelQTE(jB)
-       })), (0, mB.e)((() => {
-         HB.c.reset()
-       })), (0, mB.h)((() => {
-         HB.c.reset()
-       })), (0, mB.l)(aB.Wb.EditItemCraftingRecipes, (BB => {
-         const jB = (0, YB.e)(BB);
-         (0, YB.c)(jB) && UB.n.Ly("craftingRecipesEdited", {
+         }(IB.id, IB.tB)
+       })), (0, gB.l)(HB.J, (BB => {
+         const IB = (0, jB.e)(HB.J, BB);
+         "number" === typeof IB && aB.d.cancelQTE(IB)
+       })), (0, gB.g)((() => {
+         aB.d.reset()
+       })), (0, gB.j)((() => {
+         aB.d.reset()
+       })), (0, gB.l)(nB.nc.EditItemCraftingRecipes, (BB => {
+         const IB = (0, jB.f)(BB);
+         (0, jB.d)(IB) && cB.l.Gq("craftingRecipesEdited", {
```

#### 143. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1014-L1017` → after: `L1014-L1017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1014-L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1014-L1017) · [Before (L1014-L1017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1014-L1017)

```diff
-       })), (0, mB.l)(DB.Q, (BB => {
-         const jB = (0, YB.d)(DB.Q, BB);
-         jB && UB.n.Ly("craftingRecipesEdited", {
-           itemName: jB.Xn,
+       })), (0, gB.l)(HB.I, (BB => {
+         const IB = (0, jB.e)(HB.I, BB);
+         IB && cB.l.Gq("craftingRecipesEdited", {
+           itemName: IB.YJ,
```

#### 144. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1022` → after: `L1022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1022) · [Before (L1022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1022)

```diff
-     var AB = zB(28);
+     var XB = ZB(20);
```

#### 145. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1038` → after: `L1038`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1038) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1038) · [Before (L1038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1038)

```diff
-       return gB.w.playerFlags(BB.api.apiView, 0)
+       return dB.p.playerFlags(BB.api.apiView, 0)
```

#### 146. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1042-L1043` → after: `L1042-L1043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1042-L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1042-L1043) · [Before (L1042-L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1042-L1043)

```diff
-           const jB = BB.isSessionLive && 0 !== (PB(BB) & gB.Sd.FreeCamMoves),
-             zB = BB.freeCameraAllowed() && null === AB.c.get("scriptedCameraFacing");
+           const IB = BB.isSessionLive && 0 !== (eB(BB) & dB.Bd.FreeCamMoves),
+             ZB = BB.freeCameraAllowed() && null === XB.d.get("scriptedCameraFacing");
```

#### 147. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1045` → after: `L1045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1045) · [Before (L1045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1045)

```diff
-         }), TB[0], (BB => (0, dB.u)(BB)))
+         }), LB[0], (BB => (0, oB.s)(BB)))
```

#### 148. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1050` → after: `L1050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1050) · [Before (L1050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1050)

```diff
-           null === (jB = (0, IB.g)()) || void 0 === jB || jB.setFreeCameraMovesFly(BB)
+           null === (IB = (0, GB.j)()) || void 0 === IB || IB.setFreeCameraMovesFly(BB)
```

#### 149. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1055-L1056` → after: `L1055-L1056`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1055-L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1055-L1056) · [Before (L1055-L1056)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1055-L1056)

```diff
-           const BB = (0, IB.g)();
-           return null !== BB && void 0 !== BB && BB.isSessionLive && BB.renderFrame.hasView && 0 !== (PB(BB) & gB.Sd.FreeCam) ? BB.renderFrame.cameraPosition : null
+           const BB = (0, GB.j)();
+           return null !== BB && void 0 !== BB && BB.isSessionLive && BB.renderFrame.hasView && 0 !== (eB(BB) & dB.Bd.FreeCam) ? BB.renderFrame.cameraPosition : null
```

#### 150. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1059` → after: `L1059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1059) · [Before (L1059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1059)

```diff
-     var wB = zB(39277);
+     var AB = ZB(39247);
```

#### 151. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1064` → after: `L1064`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1064) · [Before (L1064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1064)

```diff
-       const BB = (0, IB.g)();
+       const BB = (0, GB.j)();
```

#### 152. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1066-L1073` → after: `L1066-L1073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1066-L1073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1066-L1073) · [Before (L1066-L1073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1066-L1073)

```diff
-       const jB = 0 !== (gB.w.playerFlags(BB.api.apiView, 0) & gB.Sd.FreeCam);
-       jB !== xB && (xB = jB, (0, wB.e)(jB))
-     }
-     var cB = zB(376),
-       bB = zB(37109),
-       vB = zB(2022);
-     var RB = zB(41099),
-       OB = zB(40734);
+       const IB = 0 !== (dB.p.playerFlags(BB.api.apiView, 0) & dB.Bd.FreeCam);
+       IB !== tB && (tB = IB, (0, AB.c)(IB))
+     }
+     var EB = ZB(360),
+       DB = ZB(37060),
+       KB = ZB(2046);
+     var VB = ZB(41047),
+       SB = ZB(40705);
```

#### 153. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1084` → after: `L1084`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1084) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1084) · [Before (L1084)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1084)

```diff
-         label: null !== (jB = (0, RB.c)(BB, "interactionPrompt")) && void 0 !== jB ? jB : null
+         label: null !== (IB = (0, VB.b)(BB, "interactionPrompt")) && void 0 !== IB ? IB : null
```

#### 154. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1088-L1089` → after: `L1088-L1089`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1088-L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1088-L1089) · [Before (L1088-L1089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1088-L1089)

```diff
-       [gB.Jc.Open, {
-         label: uB.c.open
+       [dB.kc.Open, {
+         label: kB.d.open
```

#### 155. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1091-L1092` → after: `L1091-L1092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1091) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1091-L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1091-L1092) · [Before (L1091-L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1091-L1092)

```diff
-       [gB.Jc.Close, {
-         label: uB.c.close
+       [dB.kc.Close, {
+         label: kB.d.close
```

#### 156. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1094-L1095` → after: `L1094-L1095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1094-L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1094-L1095) · [Before (L1094-L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1094-L1095)

```diff
-       [gB.Jc.Milk, {
-         label: uB.c.milk
+       [dB.kc.Milk, {
+         label: kB.d.milk
```

#### 157. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1097-L1098` → after: `L1097-L1098`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1097-L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1097-L1098) · [Before (L1097-L1098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1097-L1098)

```diff
-       [gB.Jc.Shear, {
-         label: uB.c.shear
+       [dB.kc.Shear, {
+         label: kB.d.shear
```

#### 158. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1100-L1101` → after: `L1100-L1101`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1100-L1101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1100-L1101) · [Before (L1100-L1101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1100-L1101)

```diff
-       [gB.Jc.Tame, {
-         label: uB.c.tame
+       [dB.kc.Tame, {
+         label: kB.d.tame
```

#### 159. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1103-L1104` → after: `L1103-L1104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1103-L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1103-L1104) · [Before (L1103-L1104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1103-L1104)

```diff
-       [gB.Jc.Feed, {
-         label: uB.c.feed
+       [dB.kc.Feed, {
+         label: kB.d.feed
```

#### 160. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1106-L1107` → after: `L1106-L1107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1106-L1107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1106-L1107) · [Before (L1106-L1107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1106-L1107)

```diff
-       [gB.Jc.Ride, {
-         label: uB.c.ride
+       [dB.kc.Ride, {
+         label: kB.d.ride
```

#### 161. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1112` → after: `L1112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1112) · [Before (L1112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1112)

```diff
-         this.target = Bj, this.dN = gB.ld, this.optionName = null, this.pickaxe = new uB.b
+         this.target = BI, this.KG = dB.Tc, this.optionName = null, this.pickaxe = new kB.c
```

#### 162. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1116-L1118` → after: `L1116-L1118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1116-L1118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1116-L1118) · [Before (L1116-L1118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1116-L1118)

```diff
-         const zB = gB.w.targetBlockId(BB.api.apiView, 0);
-         zB !== this.dN && (this.dN = zB, this.optionName = zB === gB.ld ? null : `${BB.tables.getMetaInfo(zB).rootName}CrosshairText`);
-         const QB = null === this.optionName ? null : null !== (jB = BB.tables.getClientOption(this.optionName)) && void 0 !== jB ? jB : null;
+         const ZB = dB.p.targetBlockId(BB.api.apiView, 0);
+         ZB !== this.KG && (this.KG = ZB, this.optionName = ZB === dB.Tc ? null : `${BB.tables.getMetaInfo(ZB).rootName}CrosshairText`);
+         const TB = null === this.optionName ? null : null !== (IB = BB.tables.getClientOption(this.optionName)) && void 0 !== IB ? IB : null;
```

#### 163. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1121` → after: `L1121`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1121) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1121) · [Before (L1121)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1121)

```diff
-           if (0 === (gB.w.playerFlags(BB.api.apiView, 0) & gB.Sd.Breaking) || jB === gB.ld || 0 === jB) return null;
+           if (0 === (dB.p.playerFlags(BB.api.apiView, 0) & dB.Bd.Breaking) || IB === dB.Tc || 0 === IB) return null;
```

#### 164. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1127-L1129` → after: `L1127-L1129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1127-L1129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1127-L1129) · [Before (L1127-L1129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1127-L1129)

```diff
-             NB = null === (zB = BB.items.DN()) || void 0 === zB ? void 0 : zB.name,
-             uB = null !== (QB = dB.getItemStat(IB, "harvestLevel")) && void 0 !== QB ? QB : 0;
-           return (0, cB.Fc)({
+             vB = null === (ZB = BB.items.sv()) || void 0 === ZB ? void 0 : ZB.name,
+             kB = null !== (TB = oB.getItemStat(GB, "harvestLevel")) && void 0 !== TB ? TB : 0;
+           return (0, EB.Dc)({
```

#### 165. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1135` → after: `L1135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1135) · [Before (L1135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1135)

```diff
-           }) && null !== (nB = bB.n[uB]) && void 0 !== nB ? nB : null
+           }) && null !== (JB = DB.m[kB]) && void 0 !== JB ? JB : null
```

#### 166. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1140-L1142` → after: `L1140-L1142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1140-L1142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1140-L1142) · [Before (L1140-L1142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1140-L1142)

```diff
-           return zB === gB.Jc.Entity ? zj(BB.promptEntity) : zB === gB.Jc.TameWith ? {
-             label: (0, uB.p)(BB.tables.nameOfId(BB.interactIcon))
-           } : null !== (jB = Qj.get(zB)) && void 0 !== jB ? jB : null
+           return ZB === dB.kc.Entity ? ZI(BB.promptEntity) : ZB === dB.kc.TameWith ? {
+             label: (0, kB.s)(BB.tables.nameOfId(BB.interactIcon))
+           } : null !== (IB = TI.get(ZB)) && void 0 !== IB ? IB : null
```

#### 167. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1144` → after: `L1144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1144) · [Before (L1144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1144)

```diff
-         return this.target = (0, vB.s)(this.target, {
+         return this.target = (0, KB.l)(this.target, {
```

#### 168. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1160` → after: `L1160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1160) · [Before (L1160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1160)

```diff
-         const zB = (0, sB.l)((zB => {
+         const ZB = (0, FB.k)((ZB => {
```

#### 169. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1163` → after: `L1163`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1163) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1163) · [Before (L1163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1163)

```diff
-           const nB = (0, dB.y)((() => {
+           const JB = (0, oB.u)((() => {
```

#### 170. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1179` → after: `L1179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1179) · [Before (L1179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1179)

```diff
-         health: uB.l,
+         health: kB.m,
```

#### 171. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1184` → after: `L1184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1184) · [Before (L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1184)

```diff
-           const jB = () => 0 !== (gB.w.playerFlags(BB.apiView, 0) & gB.Sd.Crouching);
+           const IB = () => 0 !== (dB.p.playerFlags(BB.apiView, 0) & dB.Bd.Crouching);
```

#### 172. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1189` → after: `L1189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1189) · [Before (L1189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1189)

```diff
-               return (0, dB.u)((() => {
+               return (0, oB.s)((() => {
```

#### 173. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1195` → after: `L1195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1195) · [Before (L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1195)

```diff
-         }(BB.api).current), !1, (BB => (0, dB.u)(BB))),
+         }(BB.api).current), !1, (BB => (0, oB.s)(BB))),
```

#### 174. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1197-L1200` → after: `L1197-L1200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1197-L1200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1197-L1200) · [Before (L1197-L1200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1197-L1200)

```diff
-           const jB = gB.w.playerFlags(BB.apiView, 0);
-           return (0, uB.j)(0 !== (jB & gB.Sd.CanFly), 0 !== (jB & gB.Sd.Flying))
-         }(BB.api)), (0, uB.j)(!1, !1), (BB => (0, dB.u)(BB))),
-         gliderBoostFuel: (0, sB.e)((BB => () => gB.w.gliderBoostFuel(BB.api.apiView, 0)), 0, (BB => (0, dB.u)(BB))),
+           const IB = dB.p.playerFlags(BB.apiView, 0);
+           return (0, kB.l)(0 !== (IB & dB.Bd.CanFly), 0 !== (IB & dB.Bd.Flying))
+         }(BB.api)), (0, kB.l)(!1, !1), (BB => (0, oB.s)(BB))),
+         gliderBoostFuel: (0, FB.e)((BB => () => dB.p.gliderBoostFuel(BB.api.apiView, 0)), 0, (BB => (0, oB.s)(BB))),
```

#### 175. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1207` → after: `L1207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1207) · [Before (L1207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1207)

```diff
-         shotDamageToShow: (0, uB.n)((BB => !0 === (0, RB.c)(BB, "showDamageAmounts")))
+         shotDamageToShow: (0, kB.o)((BB => !0 === (0, VB.b)(BB, "showDamageAmounts")))
```

#### 176. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1218` → after: `L1218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1218) · [Before (L1218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1218)

```diff
-           const QB = (0, IB.g)(),
+           const TB = (0, GB.j)(),
```

#### 177. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1220-L1221` → after: `L1220-L1221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1220-L1221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1220-L1221) · [Before (L1220-L1221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1220-L1221)

```diff
-             dB = null === QB || void 0 === QB || null === (BB = QB.items.DN()) || void 0 === BB || null === (jB = BB.attributes) || void 0 === jB || null === (zB = jB.customAttributes) || void 0 === zB ? void 0 : zB.enchantments;
-           return Nj = null !== QB && null !== dB && void 0 !== dB && dB.Momentum ? 0 !== (gB.w.playerFlags(QB.api.apiView, 0) & gB.Sd.Breaking) ? Math.max(0, gB.w.momentumFrac(QB.api.apiView, 0)) : Math.max(0, Nj - (nB - uj) / 1500) : 0, uj = nB, Nj
+             oB = null === TB || void 0 === TB || null === (BB = TB.items.sv()) || void 0 === BB || null === (IB = BB.attributes) || void 0 === IB || null === (ZB = IB.customAttributes) || void 0 === ZB ? void 0 : ZB.enchantments;
+           return vI = null !== TB && null !== oB && void 0 !== oB && oB.Momentum ? 0 !== (dB.p.playerFlags(TB.api.apiView, 0) & dB.Bd.Breaking) ? Math.max(0, dB.p.momentumFrac(TB.api.apiView, 0)) : Math.max(0, vI - (JB - kI) / 1500) : 0, kI = JB, vI
```

#### 178. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1224` → after: `L1224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1224) · [Before (L1224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1224)

```diff
-     var sj = zB(40686);
+     var FI = ZB(40640);
```

#### 179. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1228` → after: `L1228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1228) · [Before (L1228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1228)

```diff
-         null === (jB = (0, IB.g)()) || void 0 === jB || jB.send(FB.e.LobbyManage, BB)
+         null === (IB = (0, GB.j)()) || void 0 === IB || IB.send(MB.e.LobbyManage, BB)
```

#### 180. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1231-L1236` → after: `L1231-L1236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1231-L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1231-L1236) · [Before (L1231-L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1231-L1236)

```diff
-     var mj = zB(1270),
-       yj = zB(36574),
-       kj = zB(8785),
-       Gj = zB(1664),
-       Lj = zB(2482),
-       gj = zB(4897);
+     var gI = ZB(1300),
+       qI = ZB(36529),
+       yI = ZB(8904),
+       UI = ZB(1711),
+       WI = ZB(2481),
+       dI = ZB(4978);
```

#### 181. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1244` → after: `L1244`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1244) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1244) · [Before (L1244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1244)

```diff
-       "inGame" !== AB.c.get("gameState") || (0, Gj.q)() || UB.n.Ly("ctrlCrouchWithoutFullscreen")
+       "inGame" !== XB.d.get("gameState") || (0, UI.p)() || cB.l.Gq("ctrlCrouchWithoutFullscreen")
```

#### 182. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1250` → after: `L1250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1250) · [Before (L1250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1250)

```diff
-             Ej && (Ej = !1, UB.n.Ly("requestEmoteWheelHoldOpen"))
+             wI && (wI = !1, cB.l.Gq("requestEmoteWheelHoldOpen"))
```

#### 183. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1254` → after: `L1254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1254) · [Before (L1254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1254)

```diff
-           UB.n.Ly("toggleFullCoordinateOverlay")
+           cB.l.Gq("toggleFullCoordinateOverlay")
```

#### 184. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1257` → after: `L1257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1257) · [Before (L1257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1257)

```diff
-           (0, yj.b)() || UB.n.Ly("YKeyPressed")
+           (0, qI.d)() || cB.l.Gq("YKeyPressed")
```

#### 185. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1260` → after: `L1260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1260) · [Before (L1260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1260)

```diff
-           (0, yj.b)() || UB.n.Ly("XKeyPressed")
+           (0, qI.d)() || cB.l.Gq("XKeyPressed")
```

#### 186. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1264-L1265` → after: `L1264-L1265`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1264-L1265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1264-L1265) · [Before (L1264-L1265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1264-L1265)

```diff
-           UB.n.Ly("mouseState", {
-             ea: mj.c.DownFirePrimary,
+           cB.l.Gq("mouseState", {
+             En: gI.d.DownFirePrimary,
```

#### 187. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1270-L1271` → after: `L1270-L1271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1270-L1271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1270-L1271) · [Before (L1270-L1271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1270-L1271)

```diff
-           UB.n.Ly("mouseState", {
-             ea: mj.c.DownFireSecondary,
+           cB.l.Gq("mouseState", {
+             En: gI.d.DownFireSecondary,
```

#### 188. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1276-L1277` → after: `L1276-L1277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1276) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1276-L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1276-L1277) · [Before (L1276-L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1276-L1277)

```diff
-           UB.n.Ly("mouseState", {
-             ea: mj.c.TouchDownLong,
+           cB.l.Gq("mouseState", {
+             En: gI.d.TouchDownLong,
```

#### 189. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1284` → after: `L1284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1284) · [Before (L1284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1284)

```diff
-           Sj(!1), Ej ? (Ej = !1, (0, kj.d)() || UB.n.Ly("requestEmoteWheelHoldOpen")) : UB.n.Ly("requestEmoteWheelHoldRelease")
+           QI(!1), wI ? (wI = !1, (0, yI.e)() || cB.l.Gq("requestEmoteWheelHoldOpen")) : cB.l.Gq("requestEmoteWheelHoldRelease")
```

#### 190. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1288-L1289` → after: `L1288-L1289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1288-L1289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1288-L1289) · [Before (L1288-L1289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1288-L1289)

```diff
-           UB.n.Ly("mouseState", {
-             ea: mj.c.UpFirePrimary,
+           cB.l.Gq("mouseState", {
+             En: gI.d.UpFirePrimary,
```

#### 191. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1294-L1295` → after: `L1294-L1295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1294-L1295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1294-L1295) · [Before (L1294-L1295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1294-L1295)

```diff
-           UB.n.Ly("mouseState", {
-             ea: mj.c.UpFireSecondary,
+           cB.l.Gq("mouseState", {
+             En: gI.d.UpFireSecondary,
```

#### 192. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1300-L1301` → after: `L1300-L1301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1300-L1301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1300-L1301) · [Before (L1300-L1301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1300-L1301)

```diff
-           UB.n.Ly("mouseState", {
-             ea: mj.c.UpFirePrimary,
+           cB.l.Gq("mouseState", {
+             En: gI.d.UpFirePrimary,
```

#### 193. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1309-L1311` → after: `L1309-L1311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1309-L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1309-L1311) · [Before (L1309-L1311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1309-L1311)

```diff
-       fj || (fj = !0, (0, gj.k)((BB => {
-         if ((0, nB.c)()) return;
-         const jB = (0, gj.g)(BB) ? "primary-fire" : BB.action;
+       iI || (iI = !0, (0, dI.e)((BB => {
+         if ((0, JB.d)()) return;
+         const IB = (0, dI.c)(BB) ? "primary-fire" : BB.action;
```

#### 194. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1314` → after: `L1314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1314) · [Before (L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1314)

```diff
-           if (0 === (BB.flags & Lj.c.Synthetic)) {
+           if (0 === (BB.flags & WI.b.Synthetic)) {
```

#### 195. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1321-L1326` → after: `L1321-L1326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1321-L1326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1321-L1326) · [Before (L1321-L1326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1321-L1326)

```diff
-     var Hj = zB(363),
-       Dj = zB(106),
-       Fj = zB(41),
-       Yj = zB(40956),
-       Vj = zB(1357),
-       hj = zB(2505);
+     var aI = ZB(342),
+       HI = ZB(105),
+       MI = ZB(36),
+       jI = ZB(40901),
+       PI = ZB(1382),
+       RI = ZB(2510);
```

#### 196. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1331` → after: `L1331`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1331) · [Before (L1331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1331)

```diff
-         null === (jB = (0, IB.g)()) || void 0 === jB || jB.send(FB.e.CodeCollab, (0, FB.n)(BB), (0, hj.c)(BB))
+         null === (IB = (0, GB.j)()) || void 0 === IB || IB.send(MB.e.CodeCollab, (0, MB.m)(BB), (0, RI.h)(BB))
```

#### 197. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1334-L1335` → after: `L1334-L1335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1334-L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1334-L1335) · [Before (L1334-L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1334-L1335)

```diff
-     var Aj = zB(39199),
-       Tj = zB(8724);
+     var XI = ZB(39175),
+       LI = ZB(8843);
```

#### 198. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1341` → after: `L1341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1341) · [Before (L1341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1341)

```diff
-       return "inGame" === AB.c.get("gameState") && !(0, yj.b)()
+       return "inGame" === XB.d.get("gameState") && !(0, qI.d)()
```

#### 199. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1345` → after: `L1345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1345) · [Before (L1345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1345)

```diff
-           (0, Gj.u)(BB, "inventory", (0, sj.m)())
+           (0, UI.A)(BB, "inventory", (0, FI.p)())
```

#### 200. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1348` → after: `L1348`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1348) · [Before (L1348)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1348)

```diff
-           Pj && lj() && (0, Gj.t)(BB, Hj.o.SHOP, !Pj.shopIsEmpty(LB.c.get("shopInfo")))
+           eI && lI() && (0, UI.x)(BB, aI.q.SHOP, !eI.shopIsEmpty(WB.c.get("shopInfo")))
```

#### 201. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1351` → after: `L1351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1351) · [Before (L1351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1351)

```diff
-           lj() && (0, Gj.t)(BB, Hj.o.LOBBY_LEADERBOARD, (0, Aj.c)({
+           lI() && (0, UI.x)(BB, aI.q.LOBBY_LEADERBOARD, (0, XI.d)({
```

#### 202. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1359` → after: `L1359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1359) · [Before (L1359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1359)

```diff
-           zB ? (0, Gj.v)(BB, !0, zB) : (0, Gj.u)(BB, "retentionFeatures", !(!LB.c.get("_tasks") && !LB.c.get("_availableLeaderboards")))
+           ZB ? (0, UI.C)(BB, !0, ZB) : (0, UI.A)(BB, "retentionFeatures", !(!WB.c.get("_tasks") && !WB.c.get("_availableLeaderboards")))
```

#### 203. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1362` → after: `L1362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1362) · [Before (L1362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1362)

```diff
-           (0, Gj.u)(BB, "inviteLink", Dj.featureFlags.canUseInviteLinks)
+           (0, UI.A)(BB, "inviteLink", HI.featureFlags.canUseInviteLinks)
```

#### 204. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1366` → after: `L1366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1366) · [Before (L1366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1366)

```diff
-             const jB = (0, IB.g)(),
+             const IB = (0, GB.j)(),
```

#### 205. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1368-L1370` → after: `L1368-L1370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1368-L1370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1368-L1370) · [Before (L1368-L1370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1368-L1370)

```diff
-               QB = zB ? zB.iG(zB.localId) : null;
-             (0, Gj.v)(BB, null !== QB && (0, hj.b)((0, Vj.d)()), (() => {
-               (0, hj.g)(QB)
+               TB = ZB ? ZB.aU(ZB.localId) : null;
+             (0, UI.C)(BB, null !== TB && (0, RI.e)((0, PI.c)()), (() => {
+               (0, RI.l)(TB)
```

#### 206. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1375` → after: `L1375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1375) · [Before (L1375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1375)

```diff
-           UB.n.Ly("showUi", !1)
+           cB.l.Gq("showUi", !1)
```

#### 207. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1380` → after: `L1380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1380) · [Before (L1380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1380)

```diff
-           UB.n.Ly("showUi", !0)
+           cB.l.Gq("showUi", !0)
```

#### 208. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1385` → after: `L1385`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1385) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1385) · [Before (L1385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1385)

```diff
-       Wj || (Wj = !0, zB.e(159).then((() => zB(60748))).then((BB => {
+       uI || (uI = !0, ZB.e(159).then((() => ZB(60666))).then((BB => {
```

#### 209. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1389-L1391` → after: `L1389-L1391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1389-L1391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1389-L1391) · [Before (L1389-L1391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1389-L1391)

```diff
-       })), (0, Yj.B)((BB => {
-         BB || !(0, Yj.m)() || (0, Dj.isMobile)() || !Fj.j.getItem("disableFullscreen") || (0, Gj.m)() || AB.c.set({
-           openEverythingMenuName: Hj.o.SETTINGS
+       })), (0, jI.A)((BB => {
+         BB || !(0, jI.h)() || (0, HI.isMobile)() || !MI.m.getItem("disableFullscreen") || (0, UI.n)() || XB.d.set({
+           openEverythingMenuName: aI.q.SETTINGS
```

#### 210. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1393` → after: `L1393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1393) · [Before (L1393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1393)

```diff
-       })), (0, gj.k)((BB => {
+       })), (0, dI.e)((BB => {
```

#### 211. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1400` → after: `L1400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1400) · [Before (L1400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1400)

```diff
-         (0, nB.c)() || (zB ? null === (dB = wj[jB]) || void 0 === dB || dB.call(wj, function(BB) {
+         (0, JB.d)() || (ZB ? null === (oB = AI[IB]) || void 0 === oB || oB.call(AI, function(BB) {
```

#### 212. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1415-L1417` → after: `L1415-L1417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1415-L1417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1415-L1417) · [Before (L1415-L1417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1415-L1417)

```diff
-     var Cj = zB(39136),
-       cj = zB(39126),
-       bj = zB(39121);
+     var xI = ZB(39082),
+       EI = ZB(39076),
+       DI = ZB(39067);
```

#### 213. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1421` → after: `L1421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1421) · [Before (L1421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1421)

```diff
-         null === (jB = (0, IB.g)()) || void 0 === jB || jB.send(FB.e.CompleteTask, (0, FB.p)(BB))
+         null === (IB = (0, GB.j)()) || void 0 === IB || IB.send(MB.e.CompleteTask, (0, MB.o)(BB))
```

#### 214. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1429-L1431` → after: `L1429-L1431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1429-L1431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1429-L1431) · [Before (L1429-L1431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1429-L1431)

```diff
-         null === (jB = (0, IB.g)()) || void 0 === jB || jB.send(FB.e.GeneralCookieSet, (0, FB.s)({
-           pN: zB,
-           rN: QB
+         null === (IB = (0, GB.j)()) || void 0 === IB || IB.send(MB.e.GeneralCookieSet, (0, MB.s)({
+           Tv: ZB,
+           Jv: TB
```

#### 215. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1438` → after: `L1438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1438) · [Before (L1438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1438)

```diff
-           Sa: QB
+           Cn: TB
```

#### 216. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1440-L1443` → after: `L1440-L1443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1440-L1443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1440-L1443) · [Before (L1440-L1443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1440-L1443)

```diff
-         null === (jB = (0, IB.g)()) || void 0 === jB || jB.send(FB.e.UiRequestResp, (0, FB.S)({
-           Ju: zB,
-           mu: QB,
-           yu: 5
+         null === (IB = (0, GB.j)()) || void 0 === IB || IB.send(MB.e.UiRequestResp, (0, MB.L)({
+           vk: ZB,
+           kk: TB,
+           nk: 5
```

#### 217. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1450` → after: `L1450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1450) · [Before (L1450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1450)

```diff
-           Sa: QB
+           Cn: TB
```

#### 218. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1452` → after: `L1452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1452) · [Before (L1452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1452)

```diff
-         null === (jB = (0, IB.g)()) || void 0 === jB || jB.send(FB.e.UiRequestResponded, (0, FB.Q)({
+         null === (IB = (0, GB.j)()) || void 0 === IB || IB.send(MB.e.UiRequestResponded, (0, MB.K)({
```

#### 219. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1454` → after: `L1454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1454) · [Before (L1454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1454)

```diff
-           Sa: QB
+           Cn: TB
```

#### 220. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1464` → after: `L1464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1464) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1464) · [Before (L1464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1464)

```diff
-         null === (jB = (0, IB.g)()) || void 0 === jB || jB.send(FB.e.LeaderboardRequest, {
+         null === (IB = (0, GB.j)()) || void 0 === IB || IB.send(MB.e.LeaderboardRequest, {
```

#### 221. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1472` → after: `L1472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1472) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1472) · [Before (L1472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1472)

```diff
-     const Oj = GB.e.Oy / 2,
+     const SI = UB.f.uq / 2,
```

#### 222. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1483` → after: `L1483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1483) · [Before (L1483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1483)

```diff
-         const BB = (0, IB.g)();
+         const BB = (0, GB.j)();
```

#### 223. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1499` → after: `L1499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1499) · [Before (L1499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1499)

```diff
-           const rB = zB.dN(dB, uB, pB);
+           const zB = ZB.KG(oB, kB, hB);
```

#### 224. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1505-L1506` → after: `L1505-L1506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1505) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1505-L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1505-L1506) · [Before (L1505-L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1505-L1506)

```diff
-         const BB = (0, IB.g)();
-         return null !== BB && 0 !== (gB.w.playerFlags(BB.api.apiView, 0) & gB.Sd.DropAhead)
+         const BB = (0, GB.j)();
+         return null !== BB && 0 !== (dB.p.playerFlags(BB.api.apiView, 0) & dB.Bd.DropAhead)
```

#### 225. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1509-L1512` → after: `L1509-L1512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1509-L1512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1509-L1512) · [Before (L1509-L1512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1509-L1512)

```diff
-     var nz = zB(37020),
-       dz = zB(39179),
-       Iz = zB(1381),
-       Nz = zB(40744);
+     var JZ = ZB(36976),
+       oZ = ZB(39152),
+       GZ = ZB(1403),
+       vZ = ZB(40715);
```

#### 226. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1534` → after: `L1534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1534) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1534) · [Before (L1534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1534)

```diff
-       const IB = () => (zB = (0, vB.s)(zB, BB()), zB);
+       const GB = () => (ZB = (0, KB.l)(ZB, BB()), ZB);
```

#### 227. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1542-L1544` → after: `L1542-L1544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1542) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1542-L1544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1542-L1544) · [Before (L1542-L1544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1542-L1544)

```diff
-           let zB = (0, sB.i)();
-           const NB = (0, dB.y)((() => {
-             const jB = (0, sB.i)();
+           let ZB = (0, FB.h)();
+           const vB = (0, oB.u)((() => {
+             const IB = (0, FB.h)();
```

#### 228. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1555` → after: `L1555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1555) · [Before (L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1555)

```diff
-           const BB = JB.e.ids(),
+           const BB = NB.f.ids(),
```

#### 229. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1560-L1562` → after: `L1560-L1562`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1560-L1562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1560-L1562) · [Before (L1560-L1562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1560-L1562)

```diff
-               name: null !== (zB = JB.e.getName(dB)) && void 0 !== zB ? zB : null,
-               ranks: null !== (QB = JB.e.getSetting(dB, "ranks")) && void 0 !== QB ? QB : pz,
-               cosmetics: null !== (nB = (0, JB.i)(dB)) && void 0 !== nB ? nB : null
+               name: null !== (ZB = NB.f.getName(oB)) && void 0 !== ZB ? ZB : null,
+               ranks: null !== (TB = NB.f.getSetting(oB, "ranks")) && void 0 !== TB ? TB : hZ,
+               cosmetics: null !== (JB = (0, NB.j)(oB)) && void 0 !== JB ? JB : null
```

#### 230. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1568` → after: `L1568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1568) · [Before (L1568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1568)

```diff
-             localId: (0, sB.i)()
+             localId: (0, FB.h)()
```

#### 231. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1576` → after: `L1576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1576) · [Before (L1576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1576)

```diff
-           for (const nB of JB.e.ids()) {
+           for (const JB of NB.f.ids()) {
```

#### 232. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1579-L1581` → after: `L1579-L1581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1579) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1579-L1581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1579-L1581) · [Before (L1579-L1581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1579-L1581)

```diff
-               colour: null !== (jB = JB.e.getSetting(nB, "colorInLobbyLeaderboard")) && void 0 !== jB ? jB : null,
-               values: null !== (zB = JB.e.getSetting(nB, "lobbyLeaderboardValues")) && void 0 !== zB ? zB : null,
-               tags: null !== (QB = JB.e.getSetting(nB, "lobbyLeaderboardTags")) && void 0 !== QB ? QB : null
+               colour: null !== (IB = NB.f.getSetting(JB, "colorInLobbyLeaderboard")) && void 0 !== IB ? IB : null,
+               values: null !== (ZB = NB.f.getSetting(JB, "lobbyLeaderboardValues")) && void 0 !== ZB ? ZB : null,
+               tags: null !== (TB = NB.f.getSetting(JB, "lobbyLeaderboardTags")) && void 0 !== TB ? TB : null
```

#### 233. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1601` → after: `L1601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1601) · [Before (L1601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1601)

```diff
-             const zB = (0, sB.i)();
+             const ZB = (0, FB.h)();
```

#### 234. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1604-L1606` → after: `L1604-L1606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1604) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1604-L1606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1604-L1606) · [Before (L1604-L1606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1604-L1606)

```diff
-                 Pd: jB,
-                 Wd: QB,
-                 ld: nB
+                 ao: IB,
+                 Ho: TB,
+                 Mo: JB
```

#### 235. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1610-L1611` → after: `L1610-L1611`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1610) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1610-L1611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1610-L1611) · [Before (L1610-L1611)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1610-L1611)

```diff
-                 Wd: QB,
-                 ld: nB
+                 Ho: TB,
+                 Mo: JB
```

#### 236. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1617-L1620` → after: `L1617-L1620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1617-L1620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1617-L1620) · [Before (L1617-L1620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1617-L1620)

```diff
-     var mz = zB(3015),
-       yz = zB(1778),
-       kz = zB(701),
-       Gz = zB(41007);
+     var gZ = ZB(3088),
+       qZ = ZB(1805),
+       yZ = ZB(696),
+       UZ = ZB(40954);
```

#### 237. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1626` → after: `L1626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1626) · [Before (L1626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1626)

```diff
-         null === (jB = (0, IB.g)()) || void 0 === jB || jB.send(FB.e.ShopMenuChanged, (0, FB.J)(BB))
+         null === (IB = (0, GB.j)()) || void 0 === IB || IB.send(MB.e.ShopMenuChanged, (0, MB.G)(BB))
```

#### 238. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1635` → after: `L1635`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1635) · [Before (L1635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1635)

```diff
-         null === (jB = (0, IB.g)()) || void 0 === jB || jB.send(FB.e.ItemBought, {
+         null === (IB = (0, GB.j)()) || void 0 === IB || IB.send(MB.e.ItemBought, {
```

#### 239. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1644-L1645` → after: `L1644-L1645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1644-L1645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1644-L1645) · [Before (L1644-L1645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1644-L1645)

```diff
-     var Mz = zB(4909);
-     const Ez = Lj.t.LookFrozen | Lj.t.ClicksSuppressed;
+     var sZ = ZB(4990);
+     const wZ = WI.o.LookFrozen | WI.o.ClicksSuppressed;
```

#### 240. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1649-L1652` → after: `L1649-L1652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1649-L1652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1649-L1652) · [Before (L1649-L1652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1649-L1652)

```diff
-       null !== (zB = (0, IB.g)()) && void 0 !== zB && zB.send(BB, jB) || console.warn(`[bloxd-wasm-client] message ${BB} not sent: no live game or the core's command ring is full`)
-     }(0, mB.l)(DB.db, (BB => {
-       const jB = (0, YB.d)(DB.db, BB);
-       void 0 !== jB && UB.n.Ly("setDiscordReportKey", jB)
+       null !== (ZB = (0, GB.j)()) && void 0 !== ZB && ZB.send(BB, IB) || console.warn(`[bloxd-wasm-client] message ${BB} not sent: no live game or the core's command ring is full`)
+     }(0, gB.l)(HB.Z, (BB => {
+       const IB = (0, jB.e)(HB.Z, BB);
+       void 0 !== IB && cB.l.Gq("setDiscordReportKey", IB)
```

#### 241. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1656-L1657` → after: `L1656-L1657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1656) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1656-L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1656-L1657) · [Before (L1656-L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1656-L1657)

```diff
-         iz(FB.e.IgnoreUser, (0, FB.w)({
-           ku: BB
+         OZ(MB.e.IgnoreUser, (0, MB.t)({
+           hk: BB
```

#### 242. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1664` → after: `L1664`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1664) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1664) · [Before (L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1664)

```diff
-           sN: QB,
+           ov: TB,
```

#### 243. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1667-L1671` → after: `L1667-L1671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1667-L1671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1667-L1671) · [Before (L1667-L1671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1667-L1671)

```diff
-         iz(FB.e.UserReport, (0, FB._)({
-           Ga: jB,
-           La: zB,
-           sN: QB,
-           JN: nB
+         OZ(MB.e.UserReport, (0, MB.T)({
+           Un: IB,
+           Wn: ZB,
+           ov: TB,
+           Gv: JB
```

#### 244. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1677` → after: `L1677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1677) · [Before (L1677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1677)

```diff
-           sN: zB,
+           ov: ZB,
```

#### 245. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1680-L1684` → after: `L1680-L1684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1680-L1684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1680-L1684) · [Before (L1680-L1684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1680-L1684)

```diff
-         iz(FB.e.UserReport, (0, FB._)({
-           Ga: "",
-           La: jB,
-           sN: zB,
-           JN: QB
+         OZ(MB.e.UserReport, (0, MB.T)({
+           Un: "",
+           Wn: IB,
+           ov: ZB,
+           Gv: TB
```

#### 246. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1688` → after: `L1688`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1688) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1688) · [Before (L1688)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1688)

```diff
-         iz(FB.e.ReqDiscordReportKey, (0, FB.E)(BB))
+         OZ(MB.e.ReqDiscordReportKey, (0, MB.B)(BB))
```

#### 247. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1693` → after: `L1693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1693) · [Before (L1693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1693)

```diff
-           sN: zB,
+           ov: ZB,
```

#### 248. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1697-L1701` → after: `L1697-L1701`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1697-L1701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1697-L1701) · [Before (L1697-L1701)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1697-L1701)

```diff
-           sN: zB,
-           JN: QB
-         })) : iz(FB.e.LobbyReport, (0, FB.y)({
-           sN: zB,
-           JN: QB
+           ov: ZB,
+           Gv: TB
+         })) : OZ(MB.e.LobbyReport, (0, MB.v)({
+           ov: ZB,
+           Gv: TB
```

#### 249. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1705` → after: `L1705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1705) · [Before (L1705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1705)

```diff
-         iz(FB.e.UpdateMyCosmetic, (0, FB.Z)(BB))
+         OZ(MB.e.UpdateMyCosmetic, (0, MB.R)(BB))
```

#### 250. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1708` → after: `L1708`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1708) · [Before (L1708)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1708)

```diff
-         !BB || tj ? (0, Mz.l)(Ez, BB ? Ez : 0) : UB.n.Ly("requestEmoteWheelHoldRelease")
+         !BB || CI ? (0, sZ.f)(wZ, BB ? wZ : 0) : cB.l.Gq("requestEmoteWheelHoldRelease")
```

#### 251. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1711-L1713` → after: `L1711-L1713`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1711) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1711-L1713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1711-L1713) · [Before (L1711-L1713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1711-L1713)

```diff
-     var fz = zB(41108),
-       oz = zB(9266),
-       Hz = zB(39700);
+     var iZ = ZB(41049),
+       pZ = ZB(9296),
+       aZ = ZB(39683);
```

#### 252. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1723` → after: `L1723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1723) · [Before (L1723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1723)

```diff
-           const QB = (0, IB.g)();
+           const TB = (0, GB.j)();
```

#### 253. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1731` → after: `L1731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1731) · [Before (L1731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1731)

```diff
-           return (0, Hz.f)(((BB, jB, zB) => (uB = dB.getBlockId(BB, jB, zB), 0 !== uB)), nB.cameraPosition, (0, Hz.i)((BB => gB.w.viewProj(NB.apiView, 0, BB)), jB, zB, Dz), Hz.d, Fz, Yz) ? {
+           return (0, aZ.g)(((BB, IB, ZB) => (kB = oB.getBlockId(BB, IB, ZB), 0 !== kB)), JB.cameraPosition, (0, aZ.k)((BB => dB.p.viewProj(vB.apiView, 0, BB)), IB, ZB, HZ), aZ.e, MZ, jZ) ? {
```

#### 254. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1734` → after: `L1734`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1734) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1734) · [Before (L1734)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1734)

```diff
-             name: (0, oz.g)(uB)
+             name: (0, pZ.e)(kB)
```

#### 255. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1741` → after: `L1741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1741) · [Before (L1741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1741)

```diff
-           null === (jB = (0, IB.g)()) || void 0 === jB || jB.setBlockHighlight(BB)
+           null === (IB = (0, GB.j)()) || void 0 === IB || IB.setBlockHighlight(BB)
```

#### 256. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1744-L1751` → after: `L1744-L1751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1744) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1744-L1751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1744-L1751) · [Before (L1744-L1751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1744-L1751)

```diff
-     var Xz = zB(1995),
-       Zz = zB(40992),
-       Az = zB(41117),
-       Tz = zB(4617),
-       Pz = zB(4585),
-       Wz = zB(41123),
-       ez = zB(3402),
-       lz = zB(3408);
+     var rZ = ZB(2012),
+       mZ = ZB(40944),
+       XZ = ZB(41052),
+       LZ = ZB(4680),
+       eZ = ZB(4649),
+       uZ = ZB(41058),
+       fZ = ZB(3461),
+       lZ = ZB(3470);
```

#### 257. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1756-L1757` → after: `L1756-L1757`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1756-L1757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1756-L1757) · [Before (L1756-L1757)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1756-L1757)

```diff
-       const jB = BB.startsWith(lz.i),
-         [zB, QB = zB, nB = zB] = (jB ? BB.slice(lz.i.length) : BB).split(lz.g);
+       const IB = BB.startsWith(lZ.l),
+         [ZB, TB = ZB, JB = ZB] = (IB ? BB.slice(lZ.l.length) : BB).split(lZ.i);
```

#### 258. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1771-L1775` → after: `L1771-L1775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1771) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1771-L1775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1771-L1775) · [Before (L1771-L1775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1771-L1775)

```diff
-     var cz = zB(3396),
-       bz = zB(4573),
-       vz = zB(4609),
-       Rz = zB(41034),
-       Oz = zB(41131);
+     var EZ = ZB(3452),
+       DZ = ZB(4639),
+       KZ = ZB(4672),
+       VZ = ZB(40974),
+       SZ = ZB(41064);
```

#### 259. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1786-L1787` → after: `L1786-L1787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1786) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1786-L1787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1786-L1787) · [Before (L1786-L1787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1786-L1787)

```diff
-         BB && (0, Xz.e)()
-       }))), QQ ??= Promise.all([(0, cz.f)(), (xz ??= zB.e(1).then((() => zB(60768))).then((BB => {
+         BB && (0, rZ.d)()
+       }))), TT ??= Promise.all([(0, EZ.g)(), (tZ ??= ZB.e(1).then((() => ZB(60686))).then((BB => {
```

#### 260. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1794-L1795` → after: `L1794-L1795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1794) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1794-L1795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1794-L1795) · [Before (L1794-L1795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1794-L1795)

```diff
-           codes: (0, lz.B)(jB, QB + 1),
-           pool: zB.split(lz.q).map(Kz)
+           codes: (0, lZ.u)(IB, TB + 1),
+           pool: ZB.split(lZ.o).map(bZ)
```

#### 261. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1799` → after: `L1799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1799) · [Before (L1799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1799)

```diff
-       })), xz), (0, Oz.f)(), zB.e(201).then((() => zB(34264)))]).then((BB => {
+       })), tZ), (0, SZ.d)(), ZB.e(201).then((() => ZB(34211)))]).then((BB => {
```

#### 262. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1801` → after: `L1801`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1801) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1801) · [Before (L1801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1801)

```diff
-         jB.followBundledTextures(), jQ = jB, zQ = zB, (0, Xz.e)()
+         IB.followBundledTextures(), IT = IB, ZT = ZB, (0, rZ.d)()
```

#### 263. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1809` → after: `L1809`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1809) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1809) · [Before (L1809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1809)

```diff
-       return null !== (jB = null === (zB = (0, Rz.g)()) || void 0 === zB ? void 0 : zB.textureUrl(BB)) && void 0 !== jB ? jB : jQ.itemSpriteUrl(BB)
+       return null !== (IB = null === (ZB = (0, VZ.h)()) || void 0 === ZB ? void 0 : ZB.textureUrl(BB)) && void 0 !== IB ? IB : IT.itemSpriteUrl(BB)
```

#### 264. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1814` → after: `L1814`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1814) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1814) · [Before (L1814)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1814)

```diff
-       return null !== (jB = null === (zB = (0, Rz.g)()) || void 0 === zB ? void 0 : zB.textureUrl(BB)) && void 0 !== jB ? jB : jQ.blockTextureUrl(BB)
+       return null !== (IB = null === (ZB = (0, VZ.h)()) || void 0 === ZB ? void 0 : ZB.textureUrl(BB)) && void 0 !== IB ? IB : IT.blockTextureUrl(BB)
```

#### 265. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1819` → after: `L1819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1819) · [Before (L1819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1819)

```diff
-       return null !== (jB = (0, cz.c)(BB)) && void 0 !== jB ? jB : BB
+       return null !== (IB = (0, EZ.e)(BB)) && void 0 !== IB ? IB : BB
```

#### 266. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1824` → after: `L1824`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1824) · [Before (L1824)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1824)

```diff
-       return null !== (zB = null !== (QB = null !== (nB = UQ(BB)) && void 0 !== nB ? nB : null === jB || void 0 === jB ? void 0 : jB.rotated[BB]) && void 0 !== QB ? QB : null === jB || void 0 === jB ? void 0 : jB.animated[BB]) && void 0 !== zB ? zB : jQ.notFoundUrl()
+       return null !== (ZB = null !== (TB = null !== (JB = cT(BB)) && void 0 !== JB ? JB : null === IB || void 0 === IB ? void 0 : IB.rotated[BB]) && void 0 !== TB ? TB : null === IB || void 0 === IB ? void 0 : IB.animated[BB]) && void 0 !== ZB ? ZB : IT.notFoundUrl()
```

#### 267. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1835-L1836` → after: `L1835-L1836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1835-L1836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1835-L1836) · [Before (L1835-L1836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1835-L1836)

```diff
-         const jB = (0, cz.c)(BB.slice(5));
-         return null !== (zB = void 0 === jB ? null : uQ(jB)) && void 0 !== zB ? zB : jQ.notFoundUrl()
+         const IB = (0, EZ.e)(BB.slice(5));
+         return null !== (ZB = void 0 === IB ? null : kT(IB)) && void 0 !== ZB ? ZB : IT.notFoundUrl()
```

#### 268. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1838` → after: `L1838`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1838) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1838) · [Before (L1838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1838)

```diff
-       return null !== (jB = jQ.particleUrl(BB)) && void 0 !== jB ? jB : jQ.notFoundUrl()
+       return null !== (IB = IT.particleUrl(BB)) && void 0 !== IB ? IB : IT.notFoundUrl()
```

#### 269. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1853-L1854` → after: `L1853-L1854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1853) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1853-L1854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1853-L1854) · [Before (L1853-L1854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1853-L1854)

```diff
-           const IB = null !== (jB = rQ(QB)) && void 0 !== jB ? jB : QB,
-             NB = (0, vz.c)(IB, nB, dB);
+           const GB = null !== (IB = zT(TB)) && void 0 !== IB ? IB : TB,
+             vB = (0, KZ.d)(GB, JB, oB);
```

#### 270. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1861` → after: `L1861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1861) · [Before (L1861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1861)

```diff
-             rB = pB ? await (nQ ??= zB.e(207).then((() => zB(34335))).then((BB => (dQ && (dQ = !1, (0, Xz.e)()), {
+             zB = hB ? await (JT ??= ZB.e(207).then((() => ZB(34276))).then((BB => (oT && (oT = !1, (0, rZ.d)()), {
```

#### 271. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1872-L1874` → after: `L1872-L1874`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1872-L1874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1872-L1874) · [Before (L1872-L1874)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1872-L1874)

```diff
-             JB = (0, Rz.e)(),
-             mB = 0 === JB ? IB : `${IB}#${JB}`;
-           return (await (0, bz.d)()).drawBlockIconUrl(mB, nB, dB, (() => sB))
+             NB = (0, VZ.d)(),
+             gB = 0 === NB ? GB : `${GB}#${NB}`;
+           return (await (0, DZ.b)()).drawBlockIconUrl(gB, JB, oB, (() => FB))
```

#### 272. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1881` → after: `L1881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1881) · [Before (L1881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1881)

```diff
-           if ((0, Pz.h)(BB)) return {
+           if ((0, eZ.g)(BB)) return {
```

#### 273. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1883` → after: `L1883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1883) · [Before (L1883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1883)

```diff
-             url: null !== (zB = null !== (nB = null === (dB = (0, Rz.g)()) || void 0 === dB ? void 0 : dB.textureUrl(BB)) && void 0 !== nB ? nB : jQ.ingameIconUrl(BB)) && void 0 !== zB ? zB : jQ.notFoundUrl()
+             url: null !== (ZB = null !== (JB = null === (oB = (0, VZ.h)()) || void 0 === oB ? void 0 : oB.textureUrl(BB)) && void 0 !== JB ? JB : IT.ingameIconUrl(BB)) && void 0 !== ZB ? ZB : IT.notFoundUrl()
```

#### 274. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1885` → after: `L1885`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1885) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1885) · [Before (L1885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1885)

```diff
-           if (BB.startsWith(Pz.c)) return {
+           if (BB.startsWith(eZ.d)) return {
```

#### 275. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1887` → after: `L1887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1887) · [Before (L1887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1887)

```diff
-             url: sQ(BB.slice(Pz.c.length))
+             url: FT(BB.slice(eZ.d.length))
```

#### 276. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1889-L1890` → after: `L1889-L1890`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1889) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1889-L1890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1889-L1890) · [Before (L1889-L1890)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1889-L1890)

```diff
-           if (0 === (0, ez.f)()) return (0, Wz.e)(), QB.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(BB);
-           const IB = null !== (jB = rQ(BB)) && void 0 !== jB ? jB : BB,
+           if (0 === (0, fZ.g)()) return (0, uZ.b)(), TB.DEFAULT_CLIENT_PAGE_SOURCES.lookups.itemIcon(BB);
+           const GB = null !== (IB = zT(BB)) && void 0 !== IB ? IB : BB,
```

#### 277. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1898` → after: `L1898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1898) · [Before (L1898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1898)

```diff
-             return null !== (jB = uQ(aQ(BB))) && void 0 !== jB ? jB : jQ.notFoundUrl()
+             return null !== (IB = kT(nT(BB))) && void 0 !== IB ? IB : IT.notFoundUrl()
```

#### 278. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1901` → after: `L1901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1901) · [Before (L1901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1901)

```diff
-               const jB = (0, Rz.g)();
+               const IB = (0, VZ.h)();
```

#### 279. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1911` → after: `L1911`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1911) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1911) · [Before (L1911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1911)

```diff
-           if (void 0 !== NB && "GrayscaleArmour" === zQ.itemTypeOf(NB) || Object.hasOwn(Tz.c, IB)) {
+           if (void 0 !== vB && "GrayscaleArmour" === ZT.itemTypeOf(vB) || Object.hasOwn(LZ.e, GB)) {
```

#### 280. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1913` → after: `L1913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1913) · [Before (L1913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1913)

```diff
-             const jB = null !== (aB = (0, Tz.g)(BB)) && void 0 !== aB ? aB : (0, Tz.g)(IB);
+             const IB = null !== (nB = (0, LZ.g)(BB)) && void 0 !== nB ? nB : (0, LZ.g)(GB);
```

#### 281. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1926` → after: `L1926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1926) · [Before (L1926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1926)

```diff
-           return void 0 !== rQ(BB) || (0, Pz.h)(BB) || BB.startsWith(Pz.c)
+           return void 0 !== zT(BB) || (0, eZ.g)(BB) || BB.startsWith(eZ.d)
```

#### 282. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1932-L1933` → after: `L1932-L1933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1932-L1933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1932-L1933) · [Before (L1932-L1933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1932-L1933)

```diff
-     var kQ = zB(644),
-       GQ = zB(39703);
+     var yT = ZB(655),
+       UT = ZB(39689);
```

#### 283. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1945` → after: `L1945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1945) · [Before (L1945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1945)

```diff
-           const BB = jB.iG(jB.localId);
+           const BB = IB.aU(IB.localId);
```

#### 284. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1948` → after: `L1948`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1948) · [Before (L1948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1948)

```diff
-         chunkBlocks: BB => zB.isLoaded(BB[0], BB[1], BB[2]) ? (BB, jB, QB) => zB.dN(BB, jB, QB) : null,
+         chunkBlocks: BB => ZB.isLoaded(BB[0], BB[1], BB[2]) ? (BB, IB, TB) => ZB.KG(BB, IB, TB) : null,
```

#### 285. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1964-L1966` → after: `L1964-L1966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1964-L1966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1964-L1966) · [Before (L1964-L1966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1964-L1966)

```diff
-             if (null === dB || jB.isLocal(IB) || NB >>> gB.c !== gB.s.Lifeform) continue;
-             const uB = jB.iG(IB),
-               UB = kQ.i[NB & gB.e];
+             if (null === oB || IB.isLocal(GB) || vB >>> dB.c !== dB.o.Lifeform) continue;
+             const kB = IB.aU(GB),
+               cB = yT.i[vB & dB.d];
```

#### 286. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1969` → after: `L1969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1969) · [Before (L1969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1969)

```diff
-               name: null !== (QB = BB.clientApi.getEntityName(dB)) && void 0 !== QB ? QB : null,
+               name: null !== (TB = BB.clientApi.getEntityName(oB)) && void 0 !== TB ? TB : null,
```

#### 287. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1977` → after: `L1977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1977) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1977) · [Before (L1977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1977)

```diff
-           for (let zB = 0; zB < jB.idStr.length; zB++) null !== jB.idStr[zB] && jB.kinds[zB] >>> gB.c === gB.s.Item && BB++;
+           for (let ZB = 0; ZB < IB.idStr.length; ZB++) null !== IB.idStr[ZB] && IB.kinds[ZB] >>> dB.c === dB.o.Item && BB++;
```

#### 288. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1983-L1984` → after: `L1983-L1984`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1983-L1984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1983-L1984) · [Before (L1983-L1984)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1983-L1984)

```diff
-         worldCodeAiChunk: BB => Promise.resolve((0, GQ.c)(LQ((0, IB.g)()), BB)),
-         worldCodeAiGameState: () => Promise.resolve((0, GQ.d)(LQ((0, IB.g)())))
+         worldCodeAiChunk: BB => Promise.resolve((0, UT.c)(WT((0, GB.j)()), BB)),
+         worldCodeAiGameState: () => Promise.resolve((0, UT.d)(WT((0, GB.j)())))
```

#### 289. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1993` → after: `L1993`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR1993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L1993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L1993) · [Before (L1993)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L1993)

```diff
-             return null !== (jB = null === (zB = BB.runtime()) || void 0 === zB ? void 0 : zB.currentViewer) && void 0 !== jB ? jB : null
+             return null !== (IB = null === (ZB = BB.runtime()) || void 0 === ZB ? void 0 : ZB.currentViewer) && void 0 !== IB ? IB : null
```

#### 290. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2015` → after: `L2015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2015) · [Before (L2015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2015)

```diff
-             jB && zB && jB.seek(Math.max(0, Math.min(zB.totalTicks - 1, zB.vp + BB * pB.qd)))
+             IB && ZB && IB.seek(Math.max(0, Math.min(ZB.totalTicks - 1, ZB.Iz + BB * hB.Dd)))
```

#### 291. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2022` → after: `L2022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2022) · [Before (L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2022)

```diff
-               return null === jB || null === zB || zB.state === pB.gd.None ? (NB = null, null) : (NB = (0, vB.s)(NB, {
+               return null === IB || null === ZB || ZB.state === hB.sd.None ? (vB = null, null) : (vB = (0, KB.l)(vB, {
```

#### 292. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2024` → after: `L2024`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2024) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2024) · [Before (L2024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2024)

```diff
-                 vp: zB.vp,
+                 Iz: ZB.Iz,
```

#### 293. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2026-L2027` → after: `L2026-L2027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2026-L2027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2026-L2027) · [Before (L2026-L2027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2026-L2027)

```diff
-                 KF: pB.qd,
-                 playing: zB.state === pB.gd.Playing,
+                 bM: hB.Dd,
+                 playing: ZB.state === hB.sd.Playing,
```

#### 294. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2037` → after: `L2037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2037) · [Before (L2037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2037)

```diff
-               return null === jB || null === zB || zB.state === pB.gd.None ? (uB = null, null) : (uB = (0, vB.s)(uB, {
+               return null === IB || null === ZB || ZB.state === hB.sd.None ? (kB = null, null) : (kB = (0, KB.l)(kB, {
```

#### 295. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2047` → after: `L2047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2047) · [Before (L2047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2047)

```diff
-               return null !== (jB = null === (zB = BB.runtime()) || void 0 === zB ? void 0 : zB.recorder.current) && void 0 !== jB ? jB : Nz.d.states.replayRecorder.current()
+               return null !== (IB = null === (ZB = BB.runtime()) || void 0 === ZB ? void 0 : ZB.recorder.current) && void 0 !== IB ? IB : vZ.b.states.replayRecorder.current()
```

#### 296. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2051` → after: `L2051`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2051) · [Before (L2051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2051)

```diff
-               watch: BB => (0, UB.q)("replayViewer|videoExportChanged", (() => {
+               watch: BB => (0, cB.p)("replayViewer|videoExportChanged", (() => {
```

#### 297. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2065` → after: `L2065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2065) · [Before (L2065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2065)

```diff
-             !0 === (null === (QB = IB()) || void 0 === QB ? void 0 : QB.isOpen) && Promise.all([zB.e(98), zB.e(67)]).then((() => zB(60755))).then((zB => {
+             !0 === (null === (TB = GB()) || void 0 === TB ? void 0 : TB.isOpen) && Promise.all([ZB.e(98), ZB.e(67)]).then((() => ZB(60674))).then((ZB => {
```

#### 298. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2073` → after: `L2073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2073) · [Before (L2073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2073)

```diff
-                   return null !== (jB = null === (zB = BB.canvas) || void 0 === zB ? void 0 : zB.call(BB)) && void 0 !== jB ? jB : null
+                   return null !== (IB = null === (ZB = BB.canvas) || void 0 === ZB ? void 0 : ZB.call(BB)) && void 0 !== IB ? IB : null
```

#### 299. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2113` → after: `L2113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2113) · [Before (L2113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2113)

```diff
-                 vp: zB,
+                 Iz: ZB,
```

#### 300. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2158` → after: `L2158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2158) · [Before (L2158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2158)

```diff
-                 zB.e(117).then((() => zB(39307))).then((jB => {
+                 ZB.e(117).then((() => ZB(39281))).then((IB => {
```

#### 301. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2189` → after: `L2189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2189) · [Before (L2189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2189)

```diff
-               (0, yj.c)(jB) && (null === (zB = BB.runtime()) || void 0 === zB || zB.recorder.viewerShown(jB))
+               (0, qI.h)(IB) && (null === (ZB = BB.runtime()) || void 0 === ZB || ZB.recorder.viewerShown(IB))
```

#### 302. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2195` → after: `L2195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2195) · [Before (L2195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2195)

```diff
-                 xd: nB,
+                 Po: JB,
```

#### 303. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2197` → after: `L2197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2197) · [Before (L2197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2197)

```diff
-                 Kd: IB
+                 Ro: GB
```

#### 304. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2217` → after: `L2217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2217) · [Before (L2217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2217)

```diff
-                 DN: nB
+                 sv: JB
```

#### 305. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2225` → after: `L2225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2225) · [Before (L2225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2225)

```diff
-               QB = null !== (jB = null === zB || void 0 === zB ? void 0 : zB.view) && void 0 !== jB ? jB : null;
+               TB = null !== (IB = null === ZB || void 0 === ZB ? void 0 : ZB.view) && void 0 !== IB ? IB : null;
```

#### 306. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2228` → after: `L2228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2228) · [Before (L2228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2228)

```diff
-             })(BB) : Uz.has(BB) ? GB.replayAction(BB) : "replayPlayPause" === BB ? zB && QB && QB.state !== pB.gd.None && GB.setReplayPlaying(QB.state !== pB.gd.Playing) : "replayChangeCameraMode" === BB ? null === zB || void 0 === zB || zB.cycleCameraMode() : "replayExit" === BB … [truncated]
+             })(BB) : cZ.has(BB) ? UB.replayAction(BB) : "replayPlayPause" === BB ? ZB && TB && TB.state !== hB.sd.None && UB.setReplayPlaying(TB.state !== hB.sd.Playing) : "replayChangeCameraMode" === BB ? null === ZB || void 0 === ZB || ZB.cycleCameraMode() : "replayExit" === BB … [truncated]
```

#### 307. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2238` → after: `L2238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2238) · [Before (L2238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2238)

```diff
-               return !0 !== (null === (jB = IB()) || void 0 === jB ? void 0 : jB.isOpen) ? null : null !== (zB = null === (QB = BB.cameraView) || void 0 === QB ? void 0 : QB.call(BB)) && void 0 !== zB ? zB : null
+               return !0 !== (null === (IB = GB()) || void 0 === IB ? void 0 : IB.isOpen) ? null : null !== (ZB = null === (TB = BB.cameraView) || void 0 === TB ? void 0 : TB.call(BB)) && void 0 !== ZB ? ZB : null
```

#### 308. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2249` → after: `L2249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2249) · [Before (L2249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2249)

```diff
-               zB !== gB && (gB = zB, UB.n.Ly("connectedGameChanged")), jB.fire()
+               ZB !== dB && (dB = ZB, cB.l.Gq("connectedGameChanged")), IB.fire()
```

#### 309. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2258-L2259` → after: `L2258-L2259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2258-L2259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2258-L2259) · [Before (L2258-L2259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2258-L2259)

```diff
-                   return void((0, yj.b)() || GB.saveClip())
-               }(0, dz.d)() || ("replayViewerOpen" !== BB ? BB.startsWith("replay") && ((0, yj.b)() || !0 === (null === (jB = IB()) || void 0 === jB ? void 0 : jB.inPlayback)) && LB(BB) : yB("toggle"))
+                   return void((0, qI.d)() || UB.saveClip())
+               }(0, oZ.d)() || ("replayViewerOpen" !== BB ? BB.startsWith("replay") && ((0, qI.d)() || !0 === (null === (IB = GB()) || void 0 === IB ? void 0 : IB.inPlayback)) && WB(BB) : qB("toggle"))
```

#### 310. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2267` → after: `L2267`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2267) · [Before (L2267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2267)

```diff
-           const jB = null === (BB = (0, IB.g)()) || void 0 === BB ? void 0 : BB.renderFrame;
+           const IB = null === (BB = (0, GB.j)()) || void 0 === BB ? void 0 : BB.renderFrame;
```

#### 311. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2277` → after: `L2277`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2277) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2277) · [Before (L2277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2277)

```diff
-           return null !== (BB = null === (jB = (zB = (0, dB.I)()).canvas) || void 0 === jB ? void 0 : jB.call(zB)) && void 0 !== BB ? BB : null
+           return null !== (BB = null === (IB = (ZB = (0, oB.H)()).canvas) || void 0 === IB ? void 0 : IB.call(ZB)) && void 0 !== BB ? BB : null
```

#### 312. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2279` → after: `L2279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2279) · [Before (L2279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2279)

```diff
-         freecam: nB.g
+         freecam: JB.h
```

#### 313. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2284` → after: `L2284`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2284) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2284) · [Before (L2284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2284)

```diff
-           ...sj.k,
+           ...FI.n,
```

#### 314. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2297` → after: `L2297`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2297) · [Before (L2297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2297)

```diff
-           ...iB.j
+           ...OB.h
```

#### 315. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2315` → after: `L2315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2315) · [Before (L2315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2315)

```diff
-           ...sj.h,
+           ...FI.j,
```

#### 316. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2321` → after: `L2321`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2321) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2321) · [Before (L2321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2321)

```diff
-           ...fz.j,
+           ...iZ.g,
```

#### 317. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2331-L2333` → after: `L2331-L2333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2331) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2331-L2333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2331-L2333) · [Before (L2331-L2333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2331-L2333)

```diff
-       (0, NB.g)(mB.m), (0, nB.m)(tQ.feed), (0, qB.i)(), Rj || (Rj = !0, (0, mB.l)(DB.h, (BB => {
-         const jB = (0, YB.d)(DB.h, BB);
-         "string" === typeof jB && Promise.resolve().then((() => zB(3762))).then((BB => {
+       (0, vB.f)(gB.p), (0, JB.l)(CT.feed), (0, YB.e)(), VI || (VI = !0, (0, gB.l)(HB.k, (BB => {
+         const IB = (0, jB.e)(HB.k, BB);
+         "string" === typeof IB && Promise.resolve().then((() => ZB(3820))).then((BB => {
```

#### 318. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2339-L2344` → after: `L2339-L2344`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2339) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2339-L2344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2339-L2344) · [Before (L2339-L2344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2339-L2344)

```diff
-       })), (0, mB.l)(DB.ab, (BB => {
-         const jB = (0, YB.d)(DB.ab, BB);
-         "number" === typeof jB && UB.n.Ly("serverUpdating", Date.now() + jB, !0)
-       })), (0, mB.l)(DB.C, (BB => {
-         const jB = (0, YB.d)(DB.C, BB);
-         if ((0, YB.c)(jB)) {
+       })), (0, gB.l)(HB.U, (BB => {
+         const IB = (0, jB.e)(HB.U, BB);
+         "number" === typeof IB && cB.l.Gq("serverUpdating", Date.now() + IB, !0)
+       })), (0, gB.l)(HB.A, (BB => {
+         const IB = (0, jB.e)(HB.A, BB);
+         if ((0, jB.d)(IB)) {
```

#### 319. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2346-L2347` → after: `L2346-L2347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2346-L2347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2346-L2347) · [Before (L2346-L2347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2346-L2347)

```diff
-             xn: BB,
-             Kn: zB
+             jJ: BB,
+             PJ: ZB
```

#### 320. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2349-L2351` → after: `L2349-L2351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2349-L2351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2349-L2351) · [Before (L2349-L2351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2349-L2351)

```diff
-           (0, cj.c)({
-             xn: "string" === typeof BB ? BB : null,
-             Kn: "string" === typeof zB ? zB : null
+           (0, EI.e)({
+             jJ: "string" === typeof BB ? BB : null,
+             PJ: "string" === typeof ZB ? ZB : null
```

#### 321. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2354-L2362` → after: `L2354-L2362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2354) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2354-L2362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2354-L2362) · [Before (L2354-L2362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2354-L2362)

```diff
-       })), (0, mB.l)(aB.Wb.NewUiRequest, (BB => {
-         const jB = (0, YB.e)(BB);
-         (0, YB.c)(jB) && "number" === typeof jB.id && (0, YB.c)(jB.clientParameters) && (0, bj.d)(jB.id, jB.clientParameters)
-       })), (0, mB.l)(DB.W, (BB => {
-         const jB = (0, YB.d)(DB.W, BB);
-         "number" === typeof jB && (0, bj.f)(jB)
-       })), (0, mB.h)(bj.b), (0, mB.l)(aB.Wb.UiRequestPopup, (BB => {
-         const jB = (0, YB.e)(BB);
-         if ((0, YB.c)(jB) && "number" === typeof jB.id && "string" === typeof jB.text) {
+       })), (0, gB.l)(nB.nc.NewUiRequest, (BB => {
+         const IB = (0, jB.f)(BB);
+         (0, jB.d)(IB) && "number" === typeof IB.id && (0, jB.d)(IB.clientParameters) && (0, DI.f)(IB.id, IB.clientParameters)
+       })), (0, gB.l)(HB.L, (BB => {
+         const IB = (0, jB.e)(HB.L, BB);
+         "number" === typeof IB && (0, DI.j)(IB)
+       })), (0, gB.j)(DI.b), (0, gB.l)(nB.nc.UiRequestPopup, (BB => {
+         const IB = (0, jB.f)(BB);
+         if ((0, jB.d)(IB) && "number" === typeof IB.id && "string" === typeof IB.text) {
```

#### 322. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2364` → after: `L2364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2364) · [Before (L2364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2364)

```diff
-           (0, bj.j)(BB, jB.text, !0 === jB.destructive, (jB => {
+           (0, DI.k)(BB, IB.text, !0 === IB.destructive, (IB => {
```

#### 323. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2367` → after: `L2367`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2367) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2367) · [Before (L2367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2367)

```diff
-               Sa: jB
+               Cn: IB
```

#### 324. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2371-L2376` → after: `L2371-L2376`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2371-L2376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2371-L2376) · [Before (L2371-L2376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2371-L2376)

```diff
-       })), (0, mB.l)(aB.Wb.TopRightHelper, (BB => {
-         const jB = (0, YB.e)(BB);
-         void 0 !== jB && UB.n.Ly("TopRightHelper", jB, !0)
-       })), (0, mB.l)(aB.Wb.TaskProgress, (BB => {
-         const jB = (0, YB.e)(BB);
-         (0, YB.c)(jB) && "string" === typeof jB.taskId && "number" === typeof jB.progress && (0, Cj.d)({
+       })), (0, gB.l)(nB.nc.TopRightHelper, (BB => {
+         const IB = (0, jB.f)(BB);
+         void 0 !== IB && cB.l.Gq("TopRightHelper", IB, !0)
+       })), (0, gB.l)(nB.nc.TaskProgress, (BB => {
+         const IB = (0, jB.f)(BB);
+         (0, jB.d)(IB) && "string" === typeof IB.taskId && "number" === typeof IB.progress && (0, xI.d)({
```

#### 325. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2380-L2384` → after: `L2380-L2384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2380-L2384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2380-L2384) · [Before (L2380-L2384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2380-L2384)

```diff
-       }))), Sz || (Sz = !0, (0, mB.l)(DB.o, (BB => {
-         const jB = (0, YB.d)(DB.o, BB);
-         (0, YB.c)(jB) && UB.n.Ly("showShopFromServer", {
-           toggle: jB.NB,
-           uB: jB.uB
+       }))), QZ || (QZ = !0, (0, gB.l)(HB.p, (BB => {
+         const IB = (0, jB.e)(HB.p, BB);
+         (0, jB.d)(IB) && cB.l.Gq("showShopFromServer", {
+           toggle: IB.vB,
+           kB: IB.kB
```

#### 326. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2386-L2391` → after: `L2386-L2391`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2386) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2386-L2391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2386-L2391) · [Before (L2386-L2391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2386-L2391)

```diff
-       })), (0, mB.l)(aB.Wb.OverShopInfo, (BB => {
-         const jB = (0, YB.e)(BB);
-         (0, YB.c)(jB) && UB.n.Ly("overShopInfo", jB.info, !0)
-       })), (0, mB.l)(aB.Wb.ShowShopTutorial, (() => {
-         UB.n.Ly("showShopTutorial", null, !0)
-       }))), Lz || (Lz = !0, (0, mB.e)((() => {
+       })), (0, gB.l)(nB.nc.OverShopInfo, (BB => {
+         const IB = (0, jB.f)(BB);
+         (0, jB.d)(IB) && cB.l.Gq("overShopInfo", IB.info, !0)
+       })), (0, gB.l)(nB.nc.ShowShopTutorial, (() => {
+         cB.l.Gq("showShopTutorial", null, !0)
+       }))), WZ || (WZ = !0, (0, gB.g)((() => {
```

#### 327. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2393-L2400` → after: `L2393-L2400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2393-L2400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2393-L2400) · [Before (L2393-L2400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2393-L2400)

```diff
-         (0, mz.resetLeaveEvents)(), null === (BB = gz) || void 0 === BB || BB(), gz = (0, mB.c)() ? (0, kz.l)(mB.c) : null, (0, mB.c)() || UB.n.Zk()
-       })), (0, mB.l)(aB.Wb.SetCookie, (BB => {
-         const jB = (0, YB.e)(BB),
-           zB = (0, Vj.d)().gameNameWithVariation;
-         (0, YB.c)(jB) && "string" === typeof jB.key && null !== zB && (0, yz.setCookie)(zB, jB.key, jB.value)
-       })), (0, mB.l)(aB.Wb.LeaveValues, (BB => {
-         const jB = (0, YB.e)(BB);
-         if ((0, YB.c)(jB) && "string" === typeof jB.leaveEventType) {
+         (0, gZ.resetLeaveEvents)(), null === (BB = dZ) || void 0 === BB || BB(), dZ = (0, gB.e)() ? (0, yZ.k)(gB.e) : null, (0, gB.e)() || cB.l.Qy()
+       })), (0, gB.l)(nB.nc.SetCookie, (BB => {
+         const IB = (0, jB.f)(BB),
+           ZB = (0, PI.c)().gameNameWithVariation;
+         (0, jB.d)(IB) && "string" === typeof IB.key && null !== ZB && (0, qZ.setCookie)(ZB, IB.key, IB.value)
+       })), (0, gB.l)(nB.nc.LeaveValues, (BB => {
+         const IB = (0, jB.f)(BB);
+         if ((0, jB.d)(IB) && "string" === typeof IB.leaveEventType) {
```

#### 328. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2414-L2416` → after: `L2414-L2416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2414-L2416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2414-L2416) · [Before (L2414-L2416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2414-L2416)

```diff
-       })), (0, mB.l)(aB.Wb.CustomAnalyticsEvent, (BB => {
-         const jB = (0, YB.e)(BB);
-         if ((0, YB.c)(jB) && "string" === typeof jB.cat1) {
+       })), (0, gB.l)(nB.nc.CustomAnalyticsEvent, (BB => {
+         const IB = (0, jB.f)(BB);
+         if ((0, jB.d)(IB) && "string" === typeof IB.cat1) {
```

#### 329. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2430-L2432` → after: `L2430-L2432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2430) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2430-L2432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2430-L2432) · [Before (L2430-L2432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2430-L2432)

```diff
-       })), (0, mB.l)(aB.Wb.ProgressionEvent, (BB => {
-         const jB = (0, YB.e)(BB);
-         if ((0, YB.c)(jB)) {
+       })), (0, gB.l)(nB.nc.ProgressionEvent, (BB => {
+         const IB = (0, jB.f)(BB);
+         if ((0, jB.d)(IB)) {
```

#### 330. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2448-L2450` → after: `L2448-L2450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2448-L2450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2448-L2450) · [Before (L2448-L2450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2448-L2450)

```diff
-       })), (0, mB.l)(aB.Wb.ResourceEvent, (BB => {
-         const jB = (0, YB.e)(BB);
-         if ((0, YB.c)(jB)) {
+       })), (0, gB.l)(nB.nc.ResourceEvent, (BB => {
+         const IB = (0, jB.f)(BB);
+         if ((0, jB.d)(IB)) {
```

#### 331. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2466-L2468` → after: `L2466-L2468`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2466-L2468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2466-L2468) · [Before (L2466-L2468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2466-L2468)

```diff
-       })), (0, mB.l)(aB.Wb.LeaderboardResponse, (BB => {
-         const jB = (0, YB.e)(BB);
-         if ((0, YB.c)(jB)) {
+       })), (0, gB.l)(nB.nc.LeaderboardResponse, (BB => {
+         const IB = (0, jB.f)(BB);
+         if ((0, jB.d)(IB)) {
```

#### 332. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2474` → after: `L2474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2474) · [Before (L2474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2474)

```diff
-           UB.n.Ly("leaderboardResponse", {
+           cB.l.Gq("leaderboardResponse", {
```

#### 333. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2480-L2489` → after: `L2480-L2489`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2480) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2480-L2489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2480-L2489) · [Before (L2480-L2489)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2480-L2489)

```diff
-       })), (0, mB.l)(DB.s, (BB => {
-         const jB = (0, YB.d)(DB.s, BB);
-         "string" === typeof jB && (0, Gz.c)(BB.conn, jB)
-       })), (0, mB.l)(DB.w, (BB => {
-         const jB = (0, YB.d)(DB.w, BB);
-         "string" === typeof jB && console.error(`[logErrorToConsole]: ${jB}`)
-       }))), ZB(), (0, fz.c)(), Xj || (Xj = !0, (0, mB.l)(DB.g, (BB => {
-         const jB = (0, YB.d)(DB.g, BB);
-         void 0 !== jB && (0, hj.k)(jB)
-       }))), Kj(), oj(), KB || (KB = !0, (0, dB.u)(CB)), QB.gameBridge.attach(SQ), (0, QB.installPageSources)({
+       })), (0, gB.l)(HB.u, (BB => {
+         const IB = (0, jB.e)(HB.u, BB);
+         "string" === typeof IB && (0, UZ.e)(BB.conn, IB)
+       })), (0, gB.l)(HB.v, (BB => {
+         const IB = (0, jB.e)(HB.v, BB);
+         "string" === typeof IB && console.error(`[logErrorToConsole]: ${IB}`)
+       }))), mB(), (0, iZ.b)(), rI || (rI = !0, (0, gB.l)(HB.h, (BB => {
+         const IB = (0, jB.e)(HB.h, BB);
+         void 0 !== IB && (0, RI.o)(IB)
+       }))), bI(), pI(), bB || (bB = !0, (0, oB.s)(xB)), TB.gameBridge.attach(QT), (0, TB.installPageSources)({
```

#### 334. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2492` → after: `L2492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2492) · [Before (L2492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2492)

```diff
-           setChunkAddDistance: Zz.g
+           setChunkAddDistance: mZ.j
```

#### 335. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2498` → after: `L2498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2498) · [Before (L2498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2498)

```diff
-           lG: Zz.b,
+           oW: mZ.d,
```

#### 336. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2501` → after: `L2501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2501) · [Before (L2501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2501)

```diff
-       }), (0, Xz.e)(), NQ()
+       }), (0, rZ.d)(), vT()
```

#### 337. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2504` → after: `L2504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2504) · [Before (L2504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2504)

```diff
-   41034: (BB, jB, zB) => {
+   40974: (BB, IB, ZB) => {
```

#### 338. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2507-L2509` → after: `L2507-L2509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2507-L2509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2507-L2509) · [Before (L2507-L2509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2507-L2509)

```diff
-       e: () => uB,
-       g: () => NB,
-       i: () => UB
+       d: () => kB,
+       h: () => vB,
+       j: () => cB
```

#### 339. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2511` → after: `L2511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2511) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2511) · [Before (L2511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2511)

```diff
-     var QB = zB(1995);
+     var TB = ZB(2012);
```

#### 340. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2525` → after: `L2525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2525) · [Before (L2525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2525)

```diff
-       nB = BB, dB++, (0, QB.e)();
+       JB = BB, oB++, (0, TB.d)();
```

#### 341. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2533` → after: `L2533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2533) · [Before (L2533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2533)

```diff
-   41131: (BB, jB, zB) => {
+   41064: (BB, IB, ZB) => {
```

#### 342. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2535-L2536` → after: `L2535-L2536`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2535-L2536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2535-L2536) · [Before (L2535-L2536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2535-L2536)

```diff
-       d: () => IB,
-       f: () => NB
+       c: () => GB,
+       d: () => vB
```

#### 343. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2538` → after: `L2538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2538) · [Before (L2538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2538)

```diff
-     var QB = zB(41138);
+     var TB = ZB(41071);
```

#### 344. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2543` → after: `L2543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2543) · [Before (L2543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2543)

```diff
-       return nB ??= zB.e(62).then((() => zB(60776))).catch((BB => {
+       return JB ??= ZB.e(62).then((() => ZB(60688))).catch((BB => {
```

#### 345. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2557` → after: `L2557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2557) · [Before (L2557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2557)

```diff
-   37148: (BB, jB, zB) => {
+   37093: (BB, IB, ZB) => {
```

#### 346. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2559` → after: `L2559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2559) · [Before (L2559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2559)

```diff
-       e: () => QB
+       b: () => TB
```

#### 347. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2721` → after: `L2721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2721) · [Before (L2721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2721)

```diff
-   39146: (BB, jB, zB) => {
+   39094: (BB, IB, ZB) => {
```

#### 348. `bundles/bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2723-L2724` → after: `L2723-L2724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582cR2723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-32f46ecca2ff30677931c01729f36681874218558f8797f9eef9495c0221582c) · [After (L2723-L2724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/playGameSources.js#L2723-L2724) · [Before (L2723-L2724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/playGameSources.js#L2723-L2724)

```diff
-       b: () => QB,
-       c: () => nB
+       e: () => TB,
+       i: () => JB
```

## `bloxd.io` · `bundles/bloxd.io/chunks/js/procGenWorker.js` (7zvlu.7df130a9 → c6gaap.4d6587ec)

- **File**: `bundles/bloxd.io/chunks/js/procGenWorker.js` (1820 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2)

#### 1. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L1` → after: `L1`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R1) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L1) · [Before (L1)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L1)

```diff
- /*! For license information please see 7zvlu.procGenWorker.d2e50d6a.chunk.js.LICENSE.txt */
+ /*! For license information please see c6gaap.procGenWorker.ad762c44.chunk.js.LICENSE.txt */
```

#### 2. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L4)

```diff
-       1672: BB => {
+       1723: BB => {
```

#### 3. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L82` → after: `L82`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R82) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L82) · [Before (L82)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L82)

```diff
-             return jB === 1 / 0 ? jB : void 0 !== jB ? Math.max(0, Math.ceil(jB - zB())) : 0
+             return IB === 1 / 0 ? IB : void 0 !== IB ? Math.max(0, Math.ceil(IB - ZB())) : 0
```

#### 4. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L151` → after: `L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L151) · [Before (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L151)

```diff
-       445: BB => {
+       451: BB => {
```

#### 5. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L156` → after: `L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L156) · [Before (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L156)

```diff
-       403: (BB, jB, zB) => {
+       388: (BB, IB, ZB) => {
```

#### 6. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L164-L166` → after: `L164-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L164-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L164-L166) · [Before (L164-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L164-L166)

```diff
-         var QB = zB(410),
-           nB = zB(414),
-           dB = zB(422)
+         var TB = ZB(393),
+           JB = ZB(402),
+           oB = ZB(410)
```

#### 7. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L168` → after: `L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L168) · [Before (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L168)

```diff
-       497: BB => {
+       515: BB => {
```

#### 8. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L173` → after: `L173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L173) · [Before (L173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L173)

```diff
-       400: BB => {
+       381: BB => {
```

#### 9. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L179` → after: `L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L179) · [Before (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L179)

```diff
-       431: BB => {
+       419: BB => {
```

#### 10. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L184` → after: `L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R184) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L184) · [Before (L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L184)

```diff
-       390: BB => {
+       372: BB => {
```

#### 11. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L190` → after: `L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L190) · [Before (L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L190)

```diff
-       579: BB => {
+       597: BB => {
```

#### 12. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L201-L202` → after: `L201-L202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L201-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L201-L202) · [Before (L201-L202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L201-L202)

```diff
-       531: (BB, jB, zB) => {
-         BB.exports = zB(522)
+       547: (BB, IB, ZB) => {
+         BB.exports = ZB(542)
```

#### 13. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L204` → after: `L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L204) · [Before (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L204)

```diff
-       522: BB => {
+       542: BB => {
```

#### 14. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L212-L213` → after: `L212-L213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L212-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L212-L213) · [Before (L212-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L212-L213)

```diff
-       479: (BB, jB, zB) => {
-         BB.exports = zB(470)
+       489: (BB, IB, ZB) => {
+         BB.exports = ZB(487)
```

#### 15. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L215` → after: `L215`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R215) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L215) · [Before (L215)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L215)

```diff
-       470: BB => {
+       487: BB => {
```

#### 16. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L220` → after: `L220`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R220) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L220) · [Before (L220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L220)

```diff
-       422: BB => {
+       410: BB => {
```

#### 17. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L225` → after: `L225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L225) · [Before (L225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L225)

```diff
-       398: BB => {
+       377: BB => {
```

#### 18. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L228` → after: `L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L228) · [Before (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L228)

```diff
-       438: (BB, jB, zB) => {
+       435: (BB, IB, ZB) => {
```

#### 19. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L238` → after: `L238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L238) · [Before (L238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L238)

```diff
-         var QB = zB(398)
+         var TB = ZB(377)
```

#### 20. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L240` → after: `L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L240) · [Before (L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L240)

```diff
-       441: BB => {
+       443: BB => {
```

#### 21. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L245` → after: `L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R245) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L245) · [Before (L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L245)

```diff
-       490: BB => {
+       506: BB => {
```

#### 22. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L250` → after: `L250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L250) · [Before (L250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L250)

```diff
-       623: (BB, jB, zB) => {
+       636: (BB, IB, ZB) => {
```

#### 23. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L259` → after: `L259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L259) · [Before (L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L259)

```diff
-         var QB = zB(390)()
+         var TB = ZB(372)()
```

#### 24. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L261` → after: `L261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L261) · [Before (L261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L261)

```diff
-       410: BB => {
+       393: BB => {
```

#### 25. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L267-L268` → after: `L267-L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R267) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L267-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L267-L268) · [Before (L267-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L267-L268)

```diff
-       386: (BB, jB, zB) => {
-         var QB = zB(390);
+       364: (BB, IB, ZB) => {
+         var TB = ZB(372);
```

#### 26. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L270` → after: `L270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L270) · [Before (L270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L270)

```diff
-           EPSILON: zB(398),
+           EPSILON: ZB(377),
```

#### 27. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L273-L318` → after: `L273-L318`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L273-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L273-L318) · [Before (L273-L318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L273-L318)

```diff
-           clone: zB(400),
-           angle: zB(403),
-           cj: zB(410),
-           copy: zB(431),
-           set: zB(434),
-           equals: zB(438),
-           exactEquals: zB(441),
-           add: zB(445),
-           subtract: zB(452),
-           sub: zB(459),
-           multiply: zB(464),
-           mul: zB(466),
-           divide: zB(470),
-           div: zB(479),
-           min: zB(482),
-           max: zB(484),
- ... (30 more removed lines; see GitHub link above)
+           clone: ZB(381),
+           angle: ZB(388),
+           nZ: ZB(393),
+           copy: ZB(419),
+           set: ZB(427),
+           equals: ZB(435),
+           exactEquals: ZB(443),
+           add: ZB(451),
+           subtract: ZB(460),
+           sub: ZB(464),
+           multiply: ZB(473),
+           mul: ZB(479),
+           divide: ZB(487),
+           div: ZB(489),
+           min: ZB(494),
+           max: ZB(499),
+ ... (30 more added lines; see GitHub link above)
```

#### 28. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L323-L324` → after: `L323-L324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R323) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L323-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L323-L324) · [Before (L323-L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L323-L324)

```diff
-       549: (BB, jB, zB) => {
-         BB.exports = zB(546)
+       567: (BB, IB, ZB) => {
+         BB.exports = ZB(564)
```

#### 29. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L326` → after: `L326`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R326) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L326) · [Before (L326)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L326)

```diff
-       546: BB => {
+       564: BB => {
```

#### 30. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L334` → after: `L334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L334) · [Before (L334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L334)

```diff
-       582: BB => {
+       601: BB => {
```

#### 31. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L342` → after: `L342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L342) · [Before (L342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L342)

```diff
-       484: BB => {
+       499: BB => {
```

#### 32. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L347` → after: `L347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L347) · [Before (L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L347)

```diff
-       482: BB => {
+       494: BB => {
```

#### 33. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L352-L353` → after: `L352-L353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L352-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L352-L353) · [Before (L352-L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L352-L353)

```diff
-       466: (BB, jB, zB) => {
-         BB.exports = zB(464)
+       479: (BB, IB, ZB) => {
+         BB.exports = ZB(473)
```

#### 34. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L355` → after: `L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L355) · [Before (L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L355)

```diff
-       464: BB => {
+       473: BB => {
```

#### 35. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L360` → after: `L360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L360) · [Before (L360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L360)

```diff
-       567: BB => {
+       586: BB => {
```

#### 36. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L365` → after: `L365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L365) · [Before (L365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L365)

```diff
-       414: BB => {
+       402: BB => {
```

#### 37. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L375` → after: `L375`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R375) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L375) · [Before (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L375)

```diff
-       590: BB => {
+       605: BB => {
```

#### 38. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L384` → after: `L384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L384) · [Before (L384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L384)

```diff
-       605: BB => {
+       625: BB => {
```

#### 39. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L395` → after: `L395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L395) · [Before (L395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L395)

```diff
-       609: BB => {
+       630: BB => {
```

#### 40. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L406` → after: `L406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L406) · [Before (L406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L406)

```diff
-       614: BB => {
+       632: BB => {
```

#### 41. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L417` → after: `L417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L417) · [Before (L417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L417)

```diff
-       505: BB => {
+       524: BB => {
```

#### 42. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L422` → after: `L422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L422) · [Before (L422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L422)

```diff
-       509: BB => {
+       529: BB => {
```

#### 43. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L427` → after: `L427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L427) · [Before (L427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L427)

```diff
-       516: BB => {
+       538: BB => {
```

#### 44. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L432` → after: `L432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L432) · [Before (L432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L432)

```diff
-       434: BB => {
+       427: BB => {
```

#### 45. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L437-L438` → after: `L437-L438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L437-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L437-L438) · [Before (L437-L438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L437-L438)

```diff
-       541: (BB, jB, zB) => {
-         BB.exports = zB(534)
+       555: (BB, IB, ZB) => {
+         BB.exports = ZB(553)
```

#### 46. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L440-L441` → after: `L440-L441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R440) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L440-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L440-L441) · [Before (L440-L441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L440-L441)

```diff
-       563: (BB, jB, zB) => {
-         BB.exports = zB(554)
+       578: (BB, IB, ZB) => {
+         BB.exports = ZB(573)
```

#### 47. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L443` → after: `L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L443) · [Before (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L443)

```diff
-       534: BB => {
+       553: BB => {
```

#### 48. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L451` → after: `L451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L451) · [Before (L451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L451)

```diff
-       554: BB => {
+       573: BB => {
```

#### 49. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L459-L460` → after: `L459-L460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L459-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L459-L460) · [Before (L459-L460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L459-L460)

```diff
-       459: (BB, jB, zB) => {
-         BB.exports = zB(452)
+       464: (BB, IB, ZB) => {
+         BB.exports = ZB(460)
```

#### 50. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L462` → after: `L462`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R462) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L462) · [Before (L462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L462)

```diff
-       452: BB => {
+       460: BB => {
```

#### 51. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L467` → after: `L467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L467) · [Before (L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L467)

```diff
-       599: BB => {
+       614: BB => {
```

#### 52. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L475` → after: `L475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L475) · [Before (L475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L475)

```diff
-       596: BB => {
+       609: BB => {
```

#### 53. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L484` → after: `L484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L484) · [Before (L484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L484)

```diff
-       602: BB => {
+       621: BB => {
```

#### 54. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L500` → after: `L500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L500) · [Before (L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L500)

```diff
-       2952: BB => {
+       3007: BB => {
```

#### 55. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L506` → after: `L506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L506) · [Before (L506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L506)

```diff
-       2954: BB => {
+       3011: BB => {
```

#### 56. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L516` → after: `L516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L516) · [Before (L516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L516)

```diff
-       39831: BB => {
+       39821: BB => {
```

#### 57. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L520` → after: `L520`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R520) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L520) · [Before (L520)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L520)

```diff
-             for (var IB = nB[dB] = new Array(jB), NB = dB < QB / 2 ? dB : dB + 1, uB = 1; uB <= jB; uB++) {
+             for (var GB = JB[oB] = new Array(IB), vB = oB < TB / 2 ? oB : oB + 1, kB = 1; kB <= IB; kB++) {
```

#### 58. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L527-L529` → after: `L527-L529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L527-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L527-L529) · [Before (L527-L529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L527-L529)

```diff
-       2944: (BB, jB, zB) => {
-         var QB = zB(2952),
-           nB = zB(2954),
+       3e3: (BB, IB, ZB) => {
+         var TB = ZB(3007),
+           JB = ZB(3011),
```

#### 59. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L674-L677` → after: `L674-L677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R674) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L674-L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L674-L677) · [Before (L674-L677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L674-L677)

```diff
-       39804: (BB, jB, zB) => {
-         var QB = zB(39810).integer,
-           nB = zB(39816),
-           dB = zB(39822);
+       39793: (BB, IB, ZB) => {
+         var TB = ZB(39797).integer,
+           JB = ZB(39804),
+           oB = ZB(39813);
```

#### 60. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L741-L744` → after: `L741-L744`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L741-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L741-L744) · [Before (L741-L744)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L741-L744)

```diff
-       39839: (BB, jB, zB) => {
-         var QB = zB(39810).array,
-           nB = zB(39816),
-           dB = zB(39822);
+       39829: (BB, IB, ZB) => {
+         var TB = ZB(39797).array,
+           JB = ZB(39804),
+           oB = ZB(39813);
```

#### 61. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L827-L828` → after: `L827-L828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L827-L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L827-L828) · [Before (L827-L828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L827-L828)

```diff
-       39822: (BB, jB, zB) => {
-         var QB = zB(39831);
+       39813: (BB, IB, ZB) => {
+         var TB = ZB(39821);
```

#### 62. `bundles/bloxd.io/chunks/js/procGenWorker.js` (Changed code · before: `L847-L849` → after: `L847-L849`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2R847) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2...build/bloxd.io/c6gaap.4d6587ec#diff-08d0d654cc58af71f43cd935cfe4c7c549cae829208f21d5ce724453c3a369a2) · [After (L847-L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/c6gaap.4d6587ec/bundles/bloxd.io/chunks/js/procGenWorker.js#L847-L849) · [Before (L847-L849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/3b14ebb6c99f523147f6c8af3fb8f77fee98a0e2/bundles/bloxd.io/chunks/js/procGenWorker.js#L847-L849)

```diff
-       39802: (BB, jB, zB) => {
-         var QB = zB(39804),
-           nB = zB(39839);
+       39784: (BB, IB, ZB) => {
+         var TB = ZB(39793),
+           JB = ZB(39829);
```
