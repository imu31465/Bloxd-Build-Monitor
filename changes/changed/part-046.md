# Changed — Bundle Modifications Report (Part 046 / 058)

- **Updated at**: `2026-11-21T00:46 JST`
- **Part**: `46 / 58` (**396** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 045](part-045.md) · [Part 047 →](part-047.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/packTerrain.js` (ad2avs.90d9e4dd → bbb6l5.0244a119 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/packTerrain.js` (21 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1b0cd27c11378eb5e9cdd190957d7cddffe3154a8a698304309cc188b1942da9)

#### 14. `bundles/preprod.bloxd.io/chunks/js/packTerrain.js` (Changed code · before: `L125` → after: `L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1b0cd27c11378eb5e9cdd190957d7cddffe3154a8a698304309cc188b1942da9R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1b0cd27c11378eb5e9cdd190957d7cddffe3154a8a698304309cc188b1942da9) · [After (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/packTerrain.js#L125) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/packTerrain.js#L125)

```diff
-           const [lz, Mz] = await Promise.all([bz.e(201).then((() => bz(33750))), null !== (zz = null === (uz = (Ez = this.host).maxTextureSize) || void 0 === uz ? void 0 : uz.call(Ez)) && void 0 !== zz ? zz : null]);
+           const [mq, xq] = await Promise.all([gq.e(202).then((() => gq(34302))), null !== (qq = null === (Eq = (Yq = this.host).maxTextureSize) || void 0 === Eq ? void 0 : Eq.call(Yq)) && void 0 !== qq ? qq : null]);
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/packTerrain.js` (Changed code · before: `L160` → after: `L152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1b0cd27c11378eb5e9cdd190957d7cddffe3154a8a698304309cc188b1942da9R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1b0cd27c11378eb5e9cdd190957d7cddffe3154a8a698304309cc188b1942da9) · [After (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/packTerrain.js#L152) · [Before (L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/packTerrain.js#L160)

```diff
-         const nz = (0, lz.m)(bz);
+         const lq = (0, mq.k)(gq);
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/packTerrain.js` (Changed code · before: `L167-L168` → after: `L159-L160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1b0cd27c11378eb5e9cdd190957d7cddffe3154a8a698304309cc188b1942da9R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1b0cd27c11378eb5e9cdd190957d7cddffe3154a8a698304309cc188b1942da9) · [After (L159-L160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/packTerrain.js#L159-L160) · [Before (L167-L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/packTerrain.js#L167-L168)

```diff
-             Ez.warn(`texture pack texture ${null!==(uz=zz.name)&&void 0!==uz?uz:"(all)"} failed`, zz.error)
-           }), (async () => Ez.sourcesOf ? Ez.sourcesOf(uz) : null === uz ? (0, Mz.j)() : Rz(uz, await this.maxLayerWidth(), nz)), {
+             Yq.warn(`texture pack texture ${null!==(Eq=qq.name)&&void 0!==Eq?Eq:"(all)"} failed`, qq.error)
+           }), (async () => Yq.sourcesOf ? Yq.sourcesOf(Eq) : null === Eq ? (0, xq.k)() : Vq(Eq, await this.maxLayerWidth(), lq)), {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/packTerrain.js` (Changed code · before: `L189` → after: `L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1b0cd27c11378eb5e9cdd190957d7cddffe3154a8a698304309cc188b1942da9R181) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1b0cd27c11378eb5e9cdd190957d7cddffe3154a8a698304309cc188b1942da9) · [After (L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/packTerrain.js#L181) · [Before (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/packTerrain.js#L189)

```diff
-         return (null !== (uz = this.host.assetsOf) && void 0 !== uz ? uz : tz.e)(zz, await this.maxLayerWidth())
+         return (null !== (Eq = this.host.assetsOf) && void 0 !== Eq ? Eq : Aq.h)(qq, await this.maxLayerWidth())
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/packTerrain.js` (Changed code · before: `L200` → after: `L192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1b0cd27c11378eb5e9cdd190957d7cddffe3154a8a698304309cc188b1942da9R192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1b0cd27c11378eb5e9cdd190957d7cddffe3154a8a698304309cc188b1942da9) · [After (L192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/packTerrain.js#L192) · [Before (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/packTerrain.js#L200)

```diff
-   42624: (zz, uz, bz) => {
+   43094: (qq, Eq, gq) => {
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/packTerrain.js` (Changed code · before: `L204-L205` → after: `L196-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1b0cd27c11378eb5e9cdd190957d7cddffe3154a8a698304309cc188b1942da9R196) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1b0cd27c11378eb5e9cdd190957d7cddffe3154a8a698304309cc188b1942da9) · [After (L196-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/packTerrain.js#L196-L197) · [Before (L204-L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/packTerrain.js#L204-L205)

```diff
-     var Ez = bz(42603),
-       nz = bz(42615);
+     var Yq = gq(43081),
+       lq = gq(43092);
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/packTerrain.js` (Changed code · before: `L208` → after: `L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1b0cd27c11378eb5e9cdd190957d7cddffe3154a8a698304309cc188b1942da9R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1b0cd27c11378eb5e9cdd190957d7cddffe3154a8a698304309cc188b1942da9) · [After (L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/packTerrain.js#L200) · [Before (L208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/packTerrain.js#L208)

```diff
-       let Mz, tz = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : zz => (0, nz.e)(zz, (0, Ez.deviceMaxLayerWidth)(bz)),
+       let xq, Aq = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : qq => (0, lq.h)(qq, (0, Yq.deviceMaxLayerWidth)(gq)),
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/packTerrain.js` (Changed code · before: `L213` → after: `L205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1b0cd27c11378eb5e9cdd190957d7cddffe3154a8a698304309cc188b1942da9R205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1b0cd27c11378eb5e9cdd190957d7cddffe3154a8a698304309cc188b1942da9) · [After (L205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/packTerrain.js#L205) · [Before (L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/packTerrain.js#L213)

```diff
-           const bz = null === Oz.gameSource ? Oz : zz.playerState();
+           const gq = null === uq.gameSource ? uq : qq.playerState();
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (325 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L4)

```diff
-   38972: (zz, uz, bz) => {
+   39532: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L7-L8` → after: `L7-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR7) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L7-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L7-L8) · [Before (L7-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L7-L8)

```diff
-       f: () => iz,
-       g: () => nz
+       h: () => Oq,
+       k: () => lq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L17` → after: `L17`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L17) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L17)

```diff
-       const uz = (null !== zz && void 0 !== zz ? zz : "").match(/-?\d+(?:\.\d+)?/g);
+       const Eq = (null !== qq && void 0 !== qq ? qq : "").match(/-?\d+(?:\.\d+)?/g);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L22` → after: `L22`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR22) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L22) · [Before (L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L22)

```diff
-       return zz === uz ? String(zz) : `${zz}-${uz}`
+       return qq === Eq ? String(qq) : `${qq}-${Eq}`
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L36` → after: `L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR36) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L36) · [Before (L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L36)

```diff
-             const zz = `${tz} ${Hz} ${nz}`,
+             const qq = `${Aq} ${cq} ${lq}`,
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L50` → after: `L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L50) · [Before (L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L50)

```diff
-       return nz.push(...iz.values()), nz.sort(((zz, uz) => zz.z0 - uz.z0 || zz.x0 - uz.x0)).map((zz => `x${lz(zz.x0,zz.x1)} z${lz(zz.z0,zz.z1)} ${zz.name}`))
+       return lq.push(...Oq.values()), lq.sort(((qq, Eq) => qq.z0 - Eq.z0 || qq.x0 - Eq.x0)).map((qq => `x${mq(qq.x0,qq.x1)} z${mq(qq.z0,qq.z1)} ${qq.name}`))
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L57-L58` → after: `L57-L58`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR57) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L57-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L57-L58) · [Before (L57-L58)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L57-L58)

```diff
-         Oz = [`The chunk from ${zz.join(" ")} to ${tz.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
-       null !== nz && Oz.push(`The player's feet are at ${nz.map(Math.floor).join(" ")}, ${Hz?"in this chunk":"outside this chunk"}.`);
+         uq = [`The chunk from ${qq.join(" ")} to ${Aq.join(" ")}. Each line is one layer (y), with boxes of one block: x from-to, z from-to, then the block. Air is left out.`];
+       null !== lq && uq.push(`The player's feet are at ${lq.map(Math.floor).join(" ")}, ${cq?"in this chunk":"outside this chunk"}.`);
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L63` → after: `L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR63) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L63) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L63)

```diff
-         (null === iz || void 0 === iz ? void 0 : iz.boxes) === nz ? iz.to = Ez : pz.push({
+         (null === Oq || void 0 === Oq ? void 0 : Oq.boxes) === lq ? Oq.to = Yq : Bq.push({
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L73` → after: `L73`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR73) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L73) · [Before (L73)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L73)

```diff
-         const zz = `y${lz(Ez.from,Ez.to)}: ${Ez.boxes}`;
+         const qq = `y${mq(Yq.from,Yq.to)}: ${Yq.boxes}`;
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L75` → after: `L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR75) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L75) · [Before (L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L75)

```diff
-           Oz.push(`Cut short: the layers from y${Ez.from} up aren't shown, as there are too many blocks.`);
+           uq.push(`Cut short: the layers from y${Yq.from} up aren't shown, as there are too many blocks.`);
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L83` → after: `L83`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L83) · [Before (L83)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L83)

```diff
-   8466: (zz, uz, bz) => {
+   8755: (qq, Eq, gq) => {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L85` → after: `L85`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR85) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L85) · [Before (L85)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L85)

```diff
-       c: () => nz
+       e: () => lq
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L87` → after: `L87`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR87) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L87) · [Before (L87)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L87)

```diff
-     var Ez = bz(20);
+     var Yq = gq(24);
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L90` → after: `L90`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR90) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L90) · [Before (L90)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L90)

```diff
-       return !Ez.e.get("isTouchScreen") && null !== document.pointerLockElement
+       return !Yq.b.get("isTouchScreen") && null !== document.pointerLockElement
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L93` → after: `L93`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR93) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L93) · [Before (L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L93)

```diff
-   36378: (zz, uz, bz) => {
+   36995: (qq, Eq, gq) => {
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L97` → after: `L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR97) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L97) · [Before (L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L97)

```diff
-       k: () => nz
+       l: () => lq
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L115` → after: `L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L115) · [Before (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L115)

```diff
-   35970: (zz, uz, bz) => {
+   36543: (qq, Eq, gq) => {
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L117-L118` → after: `L117-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L117-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L117-L118) · [Before (L117-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L117-L118)

```diff
-       d: () => nz,
-       e: () => iz
+       e: () => lq,
+       h: () => Oq
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L130` → after: `L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR130) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L130) · [Before (L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L130)

```diff
-   38334: (zz, uz, bz) => {
+   38910: (qq, Eq, gq) => {
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L132` → after: `L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L132) · [Before (L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L132)

```diff
-       b: () => iz
+       c: () => Oq
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L134-L135` → after: `L134-L135`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L134-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L134-L135) · [Before (L134-L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L134-L135)

```diff
-     var Ez = bz(22),
-       nz = bz(1892);
+     var Yq = gq(31),
+       lq = gq(1926);
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L142-L143` → after: `L142-L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L142-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L142-L143) · [Before (L142-L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L142-L143)

```diff
-       const Ez = nz.b.get("_tasks");
-       null !== Ez && void 0 !== Ez && Ez[uz] && nz.b.apply({
+       const Yq = lq.c.get("_tasks");
+       null !== Yq && void 0 !== Yq && Yq[Eq] && lq.c.apply({
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L153` → after: `L153`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L153) · [Before (L153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L153)

```diff
-     Ez.k.subscribe("clientTaskProgress", (zz => {
+     Yq.i.subscribe("clientTaskProgress", (qq => {
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L157` → after: `L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L157) · [Before (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L157)

```diff
-   38950: (zz, uz, bz) => {
+   39511: (qq, Eq, gq) => {
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L164` → after: `L162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L162) · [Before (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L164)

```diff
-       l: () => lz,
+       m: () => Bq,
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L166` → after: `L164-L166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L164-L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L164-L166) · [Before (L166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L166)

```diff
-       o: () => Rz
+       p: () => mq,
+       s: () => uq,
+       w: () => Vq
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L168-L171` → after: `L168-L171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L168-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L168-L171) · [Before (L168-L171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L168-L171)

```diff
-     var Ez = bz(1892),
-       nz = bz(22),
-       iz = bz(1909);
-     const lz = (0, iz.m)((function() {
+     var Yq = gq(1926),
+       lq = gq(31),
+       Oq = gq(1933);
+     const mq = (0, Oq.j)((function() {
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L174-L177` → after: `L174-L177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L174-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L174-L177) · [Before (L174-L177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L174-L177)

```diff
-           health: null !== (zz = Ez.b.get("_health")) && void 0 !== zz ? zz : null,
-           maxHealth: null !== (uz = Ez.b.get("_totalMaxHealth")) && void 0 !== uz ? uz : null,
-           shield: null !== (bz = Ez.b.get("_shield")) && void 0 !== bz ? bz : null,
-           maxShield: null !== (nz = Ez.b.get("maxShield")) && void 0 !== nz ? nz : null
+           health: null !== (qq = Yq.c.get("_health")) && void 0 !== qq ? qq : null,
+           maxHealth: null !== (Eq = Yq.c.get("_totalMaxHealth")) && void 0 !== Eq ? Eq : null,
+           shield: null !== (gq = Yq.c.get("_shield")) && void 0 !== gq ? gq : null,
+           maxShield: null !== (lq = Yq.c.get("maxShield")) && void 0 !== lq ? lq : null
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L179` → after: `L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L179) · [Before (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L179)

```diff
-       }), [], (0, iz.k)("_health", "_totalMaxHealth", "_shield", "maxShield")),
+       }), [], (0, Oq.h)("_health", "_totalMaxHealth", "_shield", "maxShield")),
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L197` → after: `L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR197) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L197) · [Before (L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L197)

```diff
-     const Hz = (0, iz.m)((function() {
+     const cq = (0, Oq.j)((function() {
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L199-L200` → after: `L199-L200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L199-L200) · [Before (L199-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L199-L200)

```diff
-       return null !== (zz = Ez.b.get("_aura")) && void 0 !== zz ? zz : null
-     }), [], (0, iz.k)("_aura"));
+       return null !== (qq = Yq.c.get("_aura")) && void 0 !== qq ? qq : null
+     }), [], (0, Oq.h)("_aura"));
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L204` → after: `L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L204) · [Before (L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L204)

```diff
-         watch: uz => (0, nz.o)("shotPlayer", (bz => {
+         watch: Eq => (0, lq.k)("shotPlayer", (gq => {
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L221` → after: `L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L221) · [Before (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L221)

```diff
-       return (0, iz.e)("chat", (uz => {
+       return (0, Oq.c)("chat", (Eq => {
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L228` → after: `L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L228) · [Before (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L228)

```diff
-           serverChatMsgId: null !== bz && void 0 !== bz ? bz : null,
+           serverChatMsgId: null !== gq && void 0 !== gq ? gq : null,
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L247` → after: `L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L247) · [Before (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L247)

```diff
-         translationKey: `touchKeys:${zz}`
+         translationKey: `touchKeys:${qq}`
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L268` → after: `L268`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR268) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L268) · [Before (L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L268)

```diff
-   39925: (zz, uz, bz) => {
+   40479: (qq, Eq, gq) => {
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L270-L271` → after: `L270-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L270-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L270-L271) · [Before (L270-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L270-L271)

```diff
-       e: () => Mz,
-       f: () => lz
+       b: () => xq,
+       c: () => mq
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L273` → after: `L273`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR273) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L273) · [Before (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L273)

```diff
-     var Ez = bz(3052);
+     var Yq = gq(3170);
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L278` → after: `L278`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L278) · [Before (L278)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L278)

```diff
-       return iz ??= bz.e(208).then((() => bz(35817))).then((zz => {
+       return Oq ??= gq.e(209).then((() => gq(36389))).then((qq => {
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L290` → after: `L290`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR290) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L290) · [Before (L290)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L290)

```diff
-             for (const Mz of bz.split(Ez.t)) nz.add(Mz);
+             for (const xq of gq.split(Yq.v)) lq.add(xq);
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L292` → after: `L292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L292) · [Before (L292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L292)

```diff
-         }(uz.split(Ez.t), bz, iz)
+         }(Eq.split(Yq.v), gq, Oq)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L303` → after: `L303`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L303) · [Before (L303)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L303)

```diff
-   38966: (zz, uz, bz) => {
+   39525: (qq, Eq, gq) => {
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L305-L307` → after: `L305-L307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L305-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L305-L307) · [Before (L305-L307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L305-L307)

```diff
-       e: () => Ez,
-       f: () => iz,
-       h: () => nz
+       d: () => Yq,
+       g: () => Oq,
+       i: () => lq
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L341` → after: `L341`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L341) · [Before (L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L341)

```diff
-   38946: (zz, uz, bz) => {
+   39507: (qq, Eq, gq) => {
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L346` → after: `L346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L346) · [Before (L346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L346)

```diff
-       b: () => Ez
+       e: () => Yq
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L349` → after: `L349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L349) · [Before (L349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L349)

```diff
-   38351: (zz, uz, bz) => {
+   38927: (qq, Eq, gq) => {
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L351` → after: `L351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L351) · [Before (L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L351)

```diff
-       c: () => Oz
+       d: () => uq
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L353` → after: `L353-L355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR353) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L353-L355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L353-L355) · [Before (L353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L353)

```diff
-     var Ez = bz(1212),
+     var Yq = gq(1214),
+       lq = gq(1313),
+       Oq = gq(24),
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L355-L359` → after: `L357-L359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L357-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L357-L359) · [Before (L355-L359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L355-L359)

```diff
-       iz = bz(20),
-       lz = bz(1283),
-       Mz = bz(1296),
-       tz = bz(1482),
-       Hz = bz(35952);
+       xq = gq(1308),
+       Aq = gq(1498),
+       cq = gq(36519);
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L363-L364` → after: `L363-L364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L363-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L363-L364) · [Before (L363-L364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L363-L364)

```diff
-         zz: uz,
-         bz: bz
+         Oq: Eq,
+         mq: gq
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L366-L368` → after: `L366-L368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR366) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L366-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L366-L368) · [Before (L366-L368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L366-L368)

```diff
-       const Oz = null !== uz && void 0 !== uz ? uz : (0, Mz.b)().gameNameWithVariation;
-       (0, Ez.J)(Oz) && ((0, Hz.j)(), (0, lz.$)((() => {
-         console.log("Received matchmaking order from game server to game", uz), (0, iz.k)("inGameReplay"), (0, tz.navigatePreserveSearch)((0, nz.c)(Oz, null !== bz && void 0 !== bz ? bz : void 0))
+       const uq = null !== Eq && void 0 !== Eq ? Eq : (0, xq.e)().gameNameWithVariation;
+       (0, Yq.K)(uq) && ((0, cq.i)(), (0, mq.ob)((() => {
+         console.log("Received matchmaking order from game server to game", Eq), (0, Oq.f)("inGameReplay"), (0, Aq.navigatePreserveSearch)((0, lq.e)(uq, null !== gq && void 0 !== gq ? gq : void 0))
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L372` → after: `L372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR372) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L372) · [Before (L372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L372)

```diff
-   38527: (zz, uz, bz) => {
+   39121: (qq, Eq, gq) => {
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L376-L377` → after: `L376-L377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR376) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L376-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L376-L377) · [Before (L376-L377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L376-L377)

```diff
-     var Ez = bz(22),
-       nz = bz(1923);
+     var Yq = gq(31),
+       lq = gq(1952);
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L381-L383` → after: `L381-L383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR381) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L381-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L381-L383) · [Before (L381-L383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L381-L383)

```diff
-       const iz = (0, nz.l)(null !== (uz = null === (bz = nz.s.toggleFreeCam) || void 0 === bz ? void 0 : bz[0]) && void 0 !== uz ? uz : null);
-       Ez.k.sK("showBottomMessage", {
-         message: `Free Camera ${zz?"Enabled":"Disabled"}${iz?` - Press ${iz} to toggle`:""}`,
+       const Oq = (0, lq.l)(null !== (Eq = null === (gq = lq.u.toggleFreeCam) || void 0 === gq ? void 0 : gq[0]) && void 0 !== Eq ? Eq : null);
+       Yq.i.TV("showBottomMessage", {
+         message: `Free Camera ${qq?"Enabled":"Disabled"}${Oq?` - Press ${Oq} to toggle`:""}`,
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L389` → after: `L389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L389) · [Before (L389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L389)

```diff
-   38342: (zz, uz, bz) => {
+   38915: (qq, Eq, gq) => {
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L394` → after: `L394`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L394) · [Before (L394)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L394)

```diff
-       m: () => Hz
+       l: () => cq
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L396-L397` → after: `L396-L397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L396-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L396-L397) · [Before (L396-L397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L396-L397)

```diff
-     var Ez = bz(22),
-       nz = bz(1322);
+     var Yq = gq(31),
+       lq = gq(1336);
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L401` → after: `L401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L401) · [Before (L401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L401)

```diff
-       Ez.k.sK("newUiRequest", {
+       Yq.i.TV("newUiRequest", {
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L408` → after: `L408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L408) · [Before (L408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L408)

```diff
-       Ez.k.sK("removeUiRequest", zz, !0);
+       Yq.i.TV("removeUiRequest", qq, !0);
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L414` → after: `L414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR414) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L414) · [Before (L414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L414)

```diff
-       Ez.k.sK("clearUiRequests");
+       Yq.i.TV("clearUiRequests");
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L431` → after: `L431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L431) · [Before (L431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L431)

```diff
-   38970: (zz, uz, bz) => {
+   39529: (qq, Eq, gq) => {
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L434` → after: `L434`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR434) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L434) · [Before (L434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L434)

```diff
-       i: () => dz
+       h: () => Wq
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L436-L437` → after: `L436-L437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR436) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L436-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L436-L437) · [Before (L436-L437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L436-L437)

```diff
-     var Ez = bz(195),
-       nz = bz(38972);
+     var Yq = gq(190),
+       lq = gq(39532);
```

#### 64. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L445` → after: `L445`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L445) · [Before (L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L445)

```diff
-       return null === zz.amount || 1 === zz.amount ? zz.name : `${zz.amount} ${zz.name}`
+       return null === qq.amount || 1 === qq.amount ? qq.name : `${qq.amount} ${qq.name}`
```

#### 65. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L447-L449` → after: `L447-L449`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L447-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L447-L449) · [Before (L447-L449)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L447-L449)

```diff
-     var tz = bz(38974),
-       Hz = bz(1892),
-       Oz = bz(1296);
+     var Aq = gq(39535),
+       cq = gq(1926),
+       uq = gq(1308);
```

#### 66. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L452` → after: `L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L452) · [Before (L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L452)

```diff
-       if (!zz) return tz.e;
+       if (!qq) return Aq.b;
```

#### 67. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L455-L456` → after: `L455-L456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L455-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L455-L456) · [Before (L455-L456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L455-L456)

```diff
-       const iz = Ez.e.IZ,
-         lz = (0, nz.g)(null !== uz && void 0 !== uz ? uz : bz, iz),
+       const Oq = Yq.c.Oa,
+         mq = (0, lq.k)(null !== Eq && void 0 !== Eq ? Eq : gq, Oq),
```

#### 68. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L461` → after: `L461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L461) · [Before (L461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L461)

```diff
-       }), bz) : `The chunk from ${lz.join(" ")} isn't loaded: only chunks near the player are. The player's feet are at ${bz.map(Math.floor).join(" ")}.`
+       }), gq) : `The chunk from ${mq.join(" ")} isn't loaded: only chunks near the player are. The player's feet are at ${gq.map(Math.floor).join(" ")}.`
```

#### 69. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L466` → after: `L466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L466) · [Before (L466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L466)

```diff
-       if (!zz) return tz.h;
+       if (!qq) return Aq.d;
```

#### 70. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L475-L477` → after: `L475-L477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L475-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L475-L477) · [Before (L475-L477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L475-L477)

```diff
-         null !== zz.game && uz.push(`Game: ${zz.game}.`);
-         const bz = null === zz.health ? "" : `, health ${Math.round(zz.health)}${null===zz.maxHealth?"":` of ${Math.round(zz.maxHealth)}`}`;
-         uz.push(`The player (the creator) stands at ${lz(zz.position)}${bz}, ${zz.creative?"in":"not in"} creative mode.`);
+         null !== qq.game && Eq.push(`Game: ${qq.game}.`);
+         const gq = null === qq.health ? "" : `, health ${Math.round(qq.health)}${null===qq.maxHealth?"":` of ${Math.round(qq.maxHealth)}`}`;
+         Eq.push(`The player (the creator) stands at ${mq(qq.position)}${gq}, ${qq.creative?"in":"not in"} creative mode.`);
```

#### 71. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L479-L481` → after: `L479-L481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L479-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L479-L481) · [Before (L479-L481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L479-L481)

```diff
-         uz.push(Ez ? `Holding (slot ${zz.heldSlot}): ${Mz(Ez)}.` : `Holding nothing (slot ${zz.heldSlot} is empty).`);
-         const nz = zz.slots.flatMap(((zz, uz) => zz ? [`slot ${uz}: ${Mz(zz)}`] : []));
-         uz.push(nz.length > 0 ? `Inventory: ${nz.join(", ")}.` : "Inventory: empty.");
+         Eq.push(Yq ? `Holding (slot ${qq.heldSlot}): ${xq(Yq)}.` : `Holding nothing (slot ${qq.heldSlot} is empty).`);
+         const lq = qq.slots.flatMap(((qq, Eq) => qq ? [`slot ${Eq}: ${xq(qq)}`] : []));
+         Eq.push(lq.length > 0 ? `Inventory: ${lq.join(", ")}.` : "Inventory: empty.");
```

#### 72. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L488` → after: `L488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L488) · [Before (L488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L488)

```diff
-             const bz = "player" === zz.kind ? `player "${zz.name||"?"}"` : zz.name && zz.name !== zz.kind ? `${zz.kind} "${zz.name}"` : zz.kind,
+             const gq = "player" === qq.kind ? `player "${qq.name||"?"}"` : qq.name && qq.name !== qq.kind ? `${qq.kind} "${qq.name}"` : qq.kind,
```

#### 73. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L490` → after: `L490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L490) · [Before (L490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L490)

```diff
-             uz.push(`- ${bz} at ${lz(zz.position)}, ${Ez} block${1===Ez?"":"s"} away`)
+             Eq.push(`- ${gq} at ${mq(qq.position)}, ${Yq} block${1===Yq?"":"s"} away`)
```

#### 74. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L492` → after: `L492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L492) · [Before (L492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L492)

```diff
-           Hz.length > iz && uz.push(`- and ${Hz.length-iz} more further away`)
+           cq.length > Oq && Eq.push(`- and ${cq.length-Oq} more further away`)
```

#### 75. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L494` → after: `L494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L494) · [Before (L494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L494)

```diff
-         return zz.droppedItems > 0 && uz.push(`${zz.droppedItems} dropped item${1===zz.droppedItems?" is":"s are"} on the ground nearby.`), uz.join("\n")
+         return qq.droppedItems > 0 && Eq.push(`${qq.droppedItems} dropped item${1===qq.droppedItems?" is":"s are"} on the ground nearby.`), Eq.join("\n")
```

#### 76. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L496` → after: `L496`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR496) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L496) · [Before (L496)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L496)

```diff
-         game: null !== (uz = (0, Oz.b)().gameNameWithVariation) && void 0 !== uz ? uz : null,
+         game: null !== (Eq = (0, uq.e)().gameNameWithVariation) && void 0 !== Eq ? Eq : null,
```

#### 77. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L498-L500` → after: `L498-L500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L498-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L498-L500) · [Before (L498-L500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L498-L500)

```diff
-         health: null !== (bz = Hz.b.get("_health")) && void 0 !== bz ? bz : null,
-         maxHealth: null !== (Ez = Hz.b.get("_totalMaxHealth")) && void 0 !== Ez ? Ez : null,
-         creative: !0 === Hz.b.get("creative"),
+         health: null !== (gq = cq.c.get("_health")) && void 0 !== gq ? gq : null,
+         maxHealth: null !== (Yq = cq.c.get("_totalMaxHealth")) && void 0 !== Yq ? Yq : null,
+         creative: !0 === cq.c.get("creative"),
```

#### 78. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L508` → after: `L508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L508) · [Before (L508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L508)

```diff
-   38364: (zz, uz, bz) => {
+   38939: (qq, Eq, gq) => {
```

#### 79. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L510-L511` → after: `L510-L511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L510-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L510-L511) · [Before (L510-L511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L510-L511)

```diff
-       d: () => Mz,
-       f: () => tz,
+       c: () => xq,
+       g: () => Aq,
```

#### 80. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L514-L517` → after: `L514-L517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L514-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L514-L517) · [Before (L514-L517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L514-L517)

```diff
-     var Ez = bz(1212),
-       nz = bz(994),
-       iz = bz(36297),
-       lz = bz(22);
+     var Yq = gq(1214),
+       lq = gq(987),
+       Oq = gq(36912),
+       mq = gq(31);
```

#### 81. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L524` → after: `L524`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR524) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L524) · [Before (L524)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L524)

```diff
-       return !(0, Ez.M)(uz) || null !== bz && (bz.startsWith("testGym") || (0, nz.k)(bz))
+       return !(0, Yq.N)(Eq) || null !== gq && (gq.startsWith("testGym") || (0, lq.j)(gq))
```

#### 82. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L528` → after: `L528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L528) · [Before (L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L528)

```diff
-       return zz.ru === iz.e.Leave || zz.ru === iz.e.Cursor
+       return qq.nE === Oq.c.Leave || qq.nE === Oq.c.Cursor
```

#### 83. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L532-L546` → after: `L532-L546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L532-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L532-L546) · [Before (L532-L546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L532-L546)

```diff
-       lz.k.sK("codeCollab", {
-         type: zz.ru,
-         docKey: zz.ou,
-         version: zz.Nu,
-         editorCount: zz.vu,
-         peers: zz.xu,
-         updates: zz.Ju,
-         playerId: zz.Au,
-         playerName: zz.Tu,
-         colour: zz.Lu,
-         anchor: zz.Pu,
-         head: zz.Gu,
-         existingCursors: zz.au,
-         files: zz.Vu,
-         engineSettings: zz.mu
+       mq.i.TV("codeCollab", {
+         type: qq.nE,
+         docKey: qq.bE,
+         version: qq.iE,
+         editorCount: qq.ZE,
+         peers: qq.fE,
+         updates: qq.ME,
+         playerId: qq.TE,
+         playerName: qq.zE,
+         colour: qq.SE,
+         anchor: qq.pE,
+         head: qq.GE,
+         existingCursors: qq.LE,
+         files: qq.JE,
+         engineSettings: qq.kE
```

#### 84. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L550` → after: `L550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L550) · [Before (L550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L550)

```diff
-   39881: (zz, uz, bz) => {
+   40434: (qq, Eq, gq) => {
```

#### 85. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L556-L557` → after: `L554-L557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR554) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L554-L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L554-L557) · [Before (L556-L557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L556-L557)

```diff
-       H: () => mz,
-       J: () => Tz,
+       F: () => iq,
+       I: () => zq,
+       K: () => bq,
+       M: () => Fq,
```

#### 86. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L559-L560` → after: `L559-L561`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L559-L561)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L559-L561) · [Before (L559-L560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L559-L560)

```diff
-       Q: () => Dz,
-       S: () => Gz,
+       P: () => fq,
+       b: () => sq,
+       d: () => Gq,
```

#### 87. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L562` → after: `L563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L563) · [Before (L562)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L562)

```diff
-       h: () => Uz,
+       i: () => Xq,
```

#### 88. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L564-L567` → after: `L565-L567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L565-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L565-L567) · [Before (L564-L567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L564-L567)

```diff
-       o: () => ez,
-       r: () => Az,
-       s: () => xz,
-       v: () => hz,
+       m: () => vq,
+       q: () => pq,
+       u: () => Zq,
```

#### 89. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L571-L576` → after: `L571-L576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L571-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L571-L576) · [Before (L571-L576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L571-L576)

```diff
-     var Ez = bz(1362),
-       nz = bz(22),
-       iz = bz(1269),
-       lz = bz(2289),
-       Mz = bz(4575),
-       tz = bz(4544);
+     var Yq = gq(1367),
+       lq = gq(31),
+       Oq = gq(1274),
+       mq = gq(2357),
+       xq = gq(4637),
+       Aq = gq(4608);
```

#### 90. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L606` → after: `L606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L606) · [Before (L606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L606)

```diff
-       return (0, iz.q)() && !oz
+       return (0, Oq.p)() && !yq
```

#### 91. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L625` → after: `L625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L625) · [Before (L625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L625)

```diff
-       (0, Mz.i)(lz.z.Menu, (0, iz.q)() ? 0 : lz.z.Menu)
+       (0, xq.k)(mq.C.Menu, (0, Oq.p)() ? 0 : mq.C.Menu)
```

#### 92. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L659` → after: `L659`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L659) · [Before (L659)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L659)

```diff
-       return Tz() && !Oz && !wz && !(0, Ez.f)()
+       return bq() && !uq && !jq && !(0, Yq.c)()
```

#### 93. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L676` → after: `L676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L676) · [Before (L676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L676)

```diff
-       Xz ? navigator.vendor.startsWith("Apple") ? jz() : fz = sz : Dz()
+       Hq ? navigator.vendor.startsWith("Apple") ? wq() : oq = Pq : Uq()
```

#### 94. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L703` → after: `L703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L703) · [Before (L703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L703)

```diff
-       nz.k.sK("pointerLockUpdate", Oz)
+       lq.i.TV("pointerLockUpdate", uq)
```

#### 95. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L706` → after: `L706`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR706) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L706) · [Before (L706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L706)

```diff
-   39848: (zz, uz, bz) => {
+   40409: (qq, Eq, gq) => {
```

#### 96. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L708-L711` → after: `L708-L710`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR708) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L708-L710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L708-L710) · [Before (L708-L711)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L708-L711)

```diff
-       c: () => dz,
-       e: () => Mz,
-       g: () => pz,
-       h: () => Hz,
+       b: () => Wq,
+       f: () => xq,
+       i: () => Bq,
```

#### 97. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L714` → after: `L713-L714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR713) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L713-L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L713-L714) · [Before (L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L714)

```diff
-       o: () => tz
+       o: () => uq,
+       s: () => Aq
```

#### 98. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L749-L1024` → after: `L749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L749) · [Before (L749-L1024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L749-L1024)

```diff
-   39902: (zz, uz, bz) => {
-     bz.d(uz, {
-       b: () => lz,
-       d: () => iz,
-       h: () => Mz
-     });
-     var Ez = bz(39740),
-       nz = bz(39750);
- 
-     function iz(zz) {
-       if (zz.queries.drawCensus() < Ez.Hb.BYTES) return null;
-       const uz = zz.memoryData(zz.scratch(), Ez.Hb.BYTES, 4, "the draw census");
-       return null === uz ? null : {
-         terrainOpaque: Ez.Hb.terrainOpaque(uz, 0),
-         terrainTransparent: Ez.Hb.terrainTransparent(uz, 0),
-         terrainPack: Ez.Hb.terrainPack(uz, 0),
- ... (260 more removed lines; see GitHub link above)
+   40404: (qq, Eq, gq) => {
```

#### 99. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1029-L1043` → after: `L754-L768`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L754-L768)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L754-L768) · [Before (L1029-L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1029-L1043)

```diff
-     var Ez = bz(1871),
-       nz = bz(39848),
-       iz = bz(4544),
-       lz = bz(39750),
-       Mz = bz(39851),
-       tz = bz(38950),
-       Hz = bz(22),
-       Oz = bz(4564),
-       pz = bz(4560),
-       dz = bz(39784),
-       Fz = bz(39815),
-       Zz = bz(39859),
-       Rz = bz(39798);
-     (0, Rz.i)(Oz.Wb.Chat, (zz => {
-       if (zz.payloadKind !== pz.bc.Msgpack) return;
+     var Yq = gq(1904),
+       lq = gq(40409),
+       Oq = gq(4608),
+       mq = gq(40325),
+       xq = gq(40415),
+       Aq = gq(39511),
+       cq = gq(31),
+       uq = gq(4625),
+       Bq = gq(4622),
+       Wq = gq(40353),
+       Nq = gq(40377),
+       aq = gq(40421),
+       Vq = gq(40366);
+     (0, Vq.l)(uq.ec.Chat, (qq => {
+       if (qq.payloadKind !== Bq.hc.Msgpack) return;
```

#### 100. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1052` → after: `L777`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR777) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L777) · [Before (L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1052)

```diff
-           serverChatMsgId: null !== uz && void 0 !== uz ? uz : void 0,
+           serverChatMsgId: null !== Eq && void 0 !== Eq ? Eq : void 0,
```

#### 101. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1056-L1057` → after: `L781-L782`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L781-L782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L781-L782) · [Before (L1056-L1057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1056-L1057)

```diff
-       }((0, dz.b)(zz.payload));
-       null !== uz && Hz.k.sK("chat", uz, !0)
+       }((0, Wq.e)(qq.payload));
+       null !== Eq && cq.i.TV("chat", Eq, !0)
```

#### 102. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1060` → after: `L785`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L785)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L785) · [Before (L1060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1060)

```diff
-         chatReceived: (0, tz.i)((function(zz) {
+         chatReceived: (0, Aq.m)((function(qq) {
```

#### 103. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1064-L1066` → after: `L789-L791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR789) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L789-L791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L789-L791) · [Before (L1064-L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1064-L1066)

```diff
-             name: null !== (uz = Zz.f.getName(zz)) && void 0 !== uz ? uz : null,
-             local: (0, Fz.g)() === zz,
-             profileEffect: null !== (bz = null === (Ez = (0, Zz.h)(zz)) || void 0 === Ez ? void 0 : Ez.profileEffect) && void 0 !== bz ? bz : null
+             name: null !== (Eq = aq.e.getName(qq)) && void 0 !== Eq ? Eq : null,
+             local: (0, Nq.f)() === qq,
+             profileEffect: null !== (gq = null === (Yq = (0, aq.h)(qq)) || void 0 === Yq ? void 0 : Yq.profileEffect) && void 0 !== gq ? gq : null
```

#### 104. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1074` → after: `L799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L799) · [Before (L1074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1074)

```diff
-             zM: bz,
+             Hc: gq,
```

#### 105. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1077` → after: `L802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L802) · [Before (L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1077)

```diff
-           null === (uz = (0, lz.j)()) || void 0 === uz || uz.clientApi.sendChat(bz, Ez)
+           null === (Eq = (0, mq.e)()) || void 0 === Eq || Eq.clientApi.sendChat(gq, Yq)
```

#### 106. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1080-L1083` → after: `L805-L808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L805-L808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L805-L808) · [Before (L1080-L1083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1080-L1083)

```diff
-     var Xz = bz(195),
-       fz = bz(1892),
-       sz = bz(39740),
-       rz = bz(38946);
+     var Hq = gq(190),
+       oq = gq(1926),
+       Pq = gq(40318),
+       Qq = gq(39507);
```

#### 107. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1088` → after: `L813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L813) · [Before (L1088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1088)

```diff
-           const bz = (0, lz.j)();
+           const gq = (0, mq.e)();
```

#### 108. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1091-L1092` → after: `L816-L817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR816) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L816-L817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L816-L817) · [Before (L1091-L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1091-L1092)

```diff
-           if (0 !== (sz.z.playerFlags(Ez.apiView, 0) & sz.Id.Crouching)) return !1;
-           const nz = Ez.queries.directorEntity(Ez.localId) >= sz.yb.BYTES ? Ez.memoryData(Ez.scratch(), sz.yb.BYTES, 8, "the local player's DirectorEntity") : null;
+           if (0 !== (Pq.t.playerFlags(Yq.apiView, 0) & Pq.Pd.Crouching)) return !1;
+           const lq = Yq.queries.directorEntity(Yq.localId) >= Pq.sb.BYTES ? Yq.memoryData(Yq.scratch(), Pq.sb.BYTES, 8, "the local player's DirectorEntity") : null;
```

#### 109. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1094-L1095` → after: `L819-L820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L819-L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L819-L820) · [Before (L1094-L1095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1094-L1095)

```diff
-           for (let iz = 0; iz < 3; iz++) oz[iz] = sz.yb.feet(nz, 0, iz);
-           return oz[1] += sz.yb.eyeHeight(nz, 0), (0, rz.b)(oz, zz, null !== (uz = fz.b.get("blockReach")) && void 0 !== uz ? uz : Xz.e.Cw)
+           for (let Oq = 0; Oq < 3; Oq++) yq[Oq] = Pq.sb.feet(lq, 0, Oq);
+           return yq[1] += Pq.sb.eyeHeight(lq, 0), (0, Qq.e)(yq, qq, null !== (Eq = oq.c.get("blockReach")) && void 0 !== Eq ? Eq : Hq.c.IH)
```

#### 110. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1101` → after: `L826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L826) · [Before (L1101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1101)

```diff
-           null === (uz = (0, lz.j)()) || void 0 === uz || uz.clickCodeBlock(zz)
+           null === (Eq = (0, mq.e)()) || void 0 === Eq || Eq.clickCodeBlock(qq)
```

#### 111. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1104-L1111` → after: `L829-L836`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR829) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L829-L836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L829-L836) · [Before (L1104-L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1104-L1111)

```diff
-     var xz = bz(39765),
-       Jz = bz(39867),
-       Az = bz(994),
-       Tz = bz(38407),
-       Lz = bz(4540),
-       Pz = bz(39776),
-       Gz = bz(39758),
-       az = bz(39779);
+     var vq = gq(40331),
+       hq = gq(40428),
+       nq = gq(987),
+       bq = gq(38976),
+       iq = gq(4606),
+       Zq = gq(40343),
+       fq = gq(40329),
+       Mq = gq(40350);
```

#### 112. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1118` → after: `L843`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR843) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L843) · [Before (L1118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1118)

```diff
-         if ("Uz" === zz) {
+         if ("rg" === qq) {
```

#### 113. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1123` → after: `L848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L848) · [Before (L1123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1123)

```diff
-           } = bz.Uz, iz = Object.keys(zz)[0], lz = zz[iz];
+           } = gq.rg, Oq = Object.keys(qq)[0], mq = qq[Oq];
```

#### 114. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1136` → after: `L861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L861) · [Before (L1136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1136)

```diff
-         return null !== (uz = null === (bz = (0, lz.j)()) || void 0 === bz ? void 0 : bz.renderFrame.projectWorldPosToScreenPos(zz)) && void 0 !== uz ? uz : {
+         return null !== (Eq = null === (gq = (0, mq.e)()) || void 0 === gq ? void 0 : gq.renderFrame.projectWorldPosToScreenPos(qq)) && void 0 !== Eq ? Eq : {
```

#### 115. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1145-L1153` → after: `L870-L878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L870-L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L870-L878) · [Before (L1145-L1153)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1145-L1153)

```diff
-       qz || (qz = !0, (0, Rz.i)(Oz.Wb.ProgressBarUpdate, (zz => {
-         const uz = (0, az.l)(zz);
-         (0, az.e)(uz) && Hz.k.sK("progressBarUpdate", uz, !0)
-       })), (0, Rz.i)(Pz.x, (zz => {
-         const uz = (0, az.i)(Pz.x, zz);
-         uz && Hz.k.sK("middleScreenBarInitiate", {
-           duration: uz.RE,
-           KE: uz.KE,
-           horizBarRemOffset: uz.wE
+       Sq || (Sq = !0, (0, Vq.l)(uq.ec.ProgressBarUpdate, (qq => {
+         const Eq = (0, Mq.e)(qq);
+         (0, Mq.b)(Eq) && cq.i.TV("progressBarUpdate", Eq, !0)
+       })), (0, Vq.l)(Zq.u, (qq => {
+         const Eq = (0, Mq.d)(Zq.u, qq);
+         Eq && cq.i.TV("middleScreenBarInitiate", {
+           duration: Eq.cE,
+           uE: Eq.uE,
+           horizBarRemOffset: Eq.BE
```

#### 116. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1155-L1158` → after: `L880-L883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR880) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L880-L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L880-L883) · [Before (L1155-L1158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1155-L1158)

```diff
-       })), (0, Rz.i)(Oz.Wb.RemoveMiddleScreenBar, (() => {
-         Hz.k.sK("middleScreenBarRemove")
-       })), (0, Rz.i)(Pz.cb, (zz => {
-         const uz = (0, az.i)(Pz.cb, zz);
+       })), (0, Vq.l)(uq.ec.RemoveMiddleScreenBar, (() => {
+         cq.i.TV("middleScreenBarRemove")
+       })), (0, Vq.l)(Zq.V, (qq => {
+         const Eq = (0, Mq.d)(Zq.V, qq);
```

#### 117. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1161-L1163` → after: `L886-L888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L886-L888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L886-L888) · [Before (L1161-L1163)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1161-L1163)

```diff
-           const zz = uz.Mb ? null === (bz = (0, lz.j)()) || void 0 === bz ? void 0 : bz.renderFrame.projectDirectionToScreenPos(uz.Mb) : void 0;
-           Hz.k.sK("sendHitmarker", {
-             ib: uz.ib,
+           const qq = Eq.hq ? null === (gq = (0, mq.e)()) || void 0 === gq ? void 0 : gq.renderFrame.projectDirectionToScreenPos(Eq.hq) : void 0;
+           cq.i.TV("sendHitmarker", {
+             vq: Eq.vq,
```

#### 118. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1167-L1168` → after: `L892-L893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L892-L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L892-L893) · [Before (L1167-L1168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1167-L1168)

```diff
-       })), (0, Rz.i)(Pz.kb, (zz => {
-         const uz = (0, az.i)(Pz.kb, zz);
+       })), (0, Vq.l)(Zq._, (qq => {
+         const Eq = (0, Mq.d)(Zq._, qq);
```

#### 119. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1174-L1175` → after: `L899-L900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR899) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L899-L900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L899-L900) · [Before (L1174-L1175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1174-L1175)

```diff
-             Zi: nz,
-             Ki: iz
+             mY: lq,
+             AY: Oq
```

#### 120. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1177` → after: `L902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L902) · [Before (L1177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1177)

```diff
-           Hz.k.sK("setDirectionArrow", {
+           cq.i.TV("setDirectionArrow", {
```

#### 121. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1182` → after: `L907`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR907) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L907) · [Before (L1182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1182)

```diff
-             Ki: iz
+             AY: Oq
```

#### 122. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1185-L1187` → after: `L910-L912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L910-L912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L910-L912) · [Before (L1185-L1187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1185-L1187)

```diff
-       })), (0, Rz.i)(Pz.g, (zz => {
-         const uz = (0, az.i)(Pz.g, zz);
-         uz && Hz.k.sK("clearDirectionArrow", {
+       })), (0, Vq.l)(Zq.e, (qq => {
+         const Eq = (0, Mq.d)(Zq.e, qq);
+         Eq && cq.i.TV("clearDirectionArrow", {
```

#### 123. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1190-L1195` → after: `L915-L920`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR915) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L915-L920)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L915-L920) · [Before (L1190-L1195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1190-L1195)

```diff
-       })), (0, Rz.i)(Pz.p, (zz => {
-         const uz = (0, az.i)(Pz.p, zz);
-         uz && Hz.k.sK("flyingMiddleMessage", {
-           content: Vz(uz.Yi),
-           ki: uz.ki,
-           zl: uz.zl
+       })), (0, Vq.l)(Zq.p, (qq => {
+         const Eq = (0, Mq.d)(Zq.p, qq);
+         Eq && cq.i.TV("flyingMiddleMessage", {
+           content: Tq(Eq.tg),
+           hg: Eq.hg,
+           ng: Eq.ng
```

#### 124. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1197-L1198` → after: `L922-L923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L922-L923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L922-L923) · [Before (L1197-L1198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1197-L1198)

```diff
-       })), (0, Rz.i)(Oz.Wb.WorldVariation, (zz => {
-         const uz = (0, az.l)(zz);
+       })), (0, Vq.l)(uq.ec.WorldVariation, (qq => {
+         const Eq = (0, Mq.e)(qq);
```

#### 125. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1201` → after: `L926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L926) · [Before (L1201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1201)

```diff
-             message: `Currently loaded as variation: ${uz}`,
+             message: `Currently loaded as variation: ${Eq}`,
```

#### 126. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1204` → after: `L929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L929) · [Before (L1204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1204)

```diff
-           Hz.k.sK("showPermanentBottomMessage", zz, !0)
+           cq.i.TV("showPermanentBottomMessage", qq, !0)
```

#### 127. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1206-L1207` → after: `L931-L932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR931) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L931-L932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L931-L932) · [Before (L1206-L1207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1206-L1207)

```diff
-       })), (0, Rz.i)(Pz.J, (zz => {
-         const uz = (0, az.i)(Pz.J, zz);
+       })), (0, Vq.l)(Zq.A, (qq => {
+         const Eq = (0, Mq.d)(Zq.A, qq);
```

#### 128. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1212` → after: `L937`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR937) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L937) · [Before (L1212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1212)

```diff
-           } = (0, Tz.e)(uz), nz = {
+           } = (0, bq.c)(Eq), lq = {
```

#### 129. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1216` → after: `L941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L941) · [Before (L1216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1216)

```diff
-           Lz.d.queueQTE(zz, bz, nz).getResult().then((uz => {
+           iq.b.queueQTE(qq, gq, lq).getResult().then((Eq => {
```

#### 130. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1218` → after: `L943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L943) · [Before (L1218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1218)

```diff
-             "boolean" === typeof uz && (null === (bz = (0, lz.j)()) || void 0 === bz || bz.send(Gz.d.QteResponse, {
+             "boolean" === typeof Eq && (null === (gq = (0, mq.e)()) || void 0 === gq || gq.send(fq.b.QteResponse, {
```

#### 131. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1223-L1226` → after: `L948-L951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR948) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L948-L951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L948-L951) · [Before (L1223-L1226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1223-L1226)

```diff
-         }(uz.id, uz.Lz)
-       })), (0, Rz.i)(Pz.W, (zz => {
-         const uz = (0, az.i)(Pz.W, zz);
-         "number" === typeof uz && Lz.d.cancelQTE(uz)
+         }(Eq.id, Eq.vY)
+       })), (0, Vq.l)(Zq.O, (qq => {
+         const Eq = (0, Mq.d)(Zq.O, qq);
+         "number" === typeof Eq && iq.b.cancelQTE(Eq)
```

#### 132. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1228` → after: `L953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L953) · [Before (L1228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1228)

```diff
-         Lz.d.reset(), Hz.k.sK("showPermanentBottomMessage", null, !0)
+         iq.b.reset(), cq.i.TV("showPermanentBottomMessage", null, !0)
```

#### 133. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1230-L1233` → after: `L955-L958`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L955-L958)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L955-L958) · [Before (L1230-L1233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1230-L1233)

```diff
-         Lz.d.reset()
-       })), (0, Rz.i)(Oz.Wb.EditItemCraftingRecipes, (zz => {
-         const uz = (0, az.l)(zz);
-         (0, az.e)(uz) && Hz.k.sK("craftingRecipesEdited", {
+         iq.b.reset()
+       })), (0, Vq.l)(uq.ec.EditItemCraftingRecipes, (qq => {
+         const Eq = (0, Mq.e)(qq);
+         (0, Mq.b)(Eq) && cq.i.TV("craftingRecipesEdited", {
```

#### 134. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1237-L1240` → after: `L962-L965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L962-L965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L962-L965) · [Before (L1237-L1240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1237-L1240)

```diff
-       })), (0, Rz.i)(Pz.S, (zz => {
-         const uz = (0, az.i)(Pz.S, zz);
-         uz && Hz.k.sK("craftingRecipesEdited", {
-           itemName: uz.Un,
+       })), (0, Vq.l)(Zq.K, (qq => {
+         const Eq = (0, Mq.d)(Zq.K, qq);
+         Eq && cq.i.TV("craftingRecipesEdited", {
+           itemName: Eq.bg,
```

#### 135. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1245` → after: `L970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L970) · [Before (L1245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1245)

```diff
-     var Uz = bz(20);
+     var Gq = gq(24);
```

#### 136. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1261` → after: `L986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L986) · [Before (L1261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1261)

```diff
-       return sz.z.playerFlags(zz.api.apiView, 0)
+       return Pq.t.playerFlags(qq.api.apiView, 0)
```

#### 137. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1264-L1266` → after: `L989-L991`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L989-L991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L989-L991) · [Before (L1264-L1266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1264-L1266)

```diff
-         freeCamera: (0, Fz.d)((zz => () => {
-           const uz = zz.isSessionLive && 0 !== (gz(zz) & sz.Id.FreeCamMoves),
-             bz = zz.freeCameraAllowed() && null === Uz.e.get("scriptedCameraFacing");
+         freeCamera: (0, Nq.b)((qq => () => {
+           const Eq = qq.isSessionLive && 0 !== (Jq(qq) & Pq.Pd.FreeCamMoves),
+             gq = qq.freeCameraAllowed() && null === Gq.b.get("scriptedCameraFacing");
```

#### 138. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1273` → after: `L998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L998) · [Before (L1273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1273)

```diff
-           null === (uz = (0, lz.j)()) || void 0 === uz || uz.setFreeCameraMovesFly(zz)
+           null === (Eq = (0, mq.e)()) || void 0 === Eq || Eq.setFreeCameraMovesFly(qq)
```

#### 139. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1278-L1279` → after: `L1003-L1004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1003-L1004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1003-L1004) · [Before (L1278-L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1278-L1279)

```diff
-           const zz = (0, lz.j)();
-           return null !== zz && void 0 !== zz && zz.isSessionLive && zz.renderFrame.hasView && 0 !== (gz(zz) & sz.Id.FreeCam) ? zz.renderFrame.cameraPosition : null
+           const qq = (0, mq.e)();
+           return null !== qq && void 0 !== qq && qq.isSessionLive && qq.renderFrame.hasView && 0 !== (Jq(qq) & Pq.Pd.FreeCam) ? qq.renderFrame.cameraPosition : null
```

#### 140. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1282` → after: `L1007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1007) · [Before (L1282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1282)

```diff
-     var Qz = bz(38527);
+     var Fq = gq(39121);
```

#### 141. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1287` → after: `L1012`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1012) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1012) · [Before (L1287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1287)

```diff
-       const zz = (0, lz.j)();
+       const qq = (0, mq.e)();
```

#### 142. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1289` → after: `L1014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1014) · [Before (L1289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1289)

```diff
-       const uz = 0 !== (sz.z.playerFlags(zz.api.apiView, 0) & sz.Id.FreeCam);
+       const Eq = 0 !== (Pq.t.playerFlags(qq.api.apiView, 0) & Pq.Pd.FreeCam);
```

#### 143. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1292-L1296` → after: `L1017-L1021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1017-L1021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1017-L1021) · [Before (L1292-L1296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1292-L1296)

```diff
-     var Iz = bz(328),
-       Bz = bz(36465),
-       Cz = bz(1909);
-     var Yz = bz(39872),
-       kz = bz(39806);
+     var Kq = gq(307),
+       Cq = gq(37086),
+       Iq = gq(1933);
+     var eq = gq(40432),
+       Dq = gq(40371);
```

#### 144. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1307` → after: `L1032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1032) · [Before (L1307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1307)

```diff
-         label: null !== (uz = (0, Yz.b)(zz, "interactionPrompt")) && void 0 !== uz ? uz : null
+         label: null !== (Eq = (0, eq.d)(qq, "interactionPrompt")) && void 0 !== Eq ? Eq : null
```

#### 145. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1311-L1312` → after: `L1036-L1037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1036) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1036-L1037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1036-L1037) · [Before (L1311-L1312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1311-L1312)

```diff
-       [sz.yc.Open, {
-         label: tz.e.open
+       [Pq.xc.Open, {
+         label: Aq.i.open
```

#### 146. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1314-L1315` → after: `L1039-L1040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1039-L1040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1039-L1040) · [Before (L1314-L1315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1314-L1315)

```diff
-       [sz.yc.Close, {
-         label: tz.e.close
+       [Pq.xc.Close, {
+         label: Aq.i.close
```

#### 147. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1317-L1318` → after: `L1042-L1043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1042-L1043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1042-L1043) · [Before (L1317-L1318)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1317-L1318)

```diff
-       [sz.yc.Milk, {
-         label: tz.e.milk
+       [Pq.xc.Milk, {
+         label: Aq.i.milk
```

#### 148. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1320-L1321` → after: `L1045-L1046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1045-L1046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1045-L1046) · [Before (L1320-L1321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1320-L1321)

```diff
-       [sz.yc.Shear, {
-         label: tz.e.shear
+       [Pq.xc.Shear, {
+         label: Aq.i.shear
```

#### 149. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1323-L1324` → after: `L1048-L1049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1048-L1049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1048-L1049) · [Before (L1323-L1324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1323-L1324)

```diff
-       [sz.yc.Tame, {
-         label: tz.e.tame
+       [Pq.xc.Tame, {
+         label: Aq.i.tame
```

#### 150. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1326-L1327` → after: `L1051-L1052`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1051) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1051-L1052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1051-L1052) · [Before (L1326-L1327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1326-L1327)

```diff
-       [sz.yc.Feed, {
-         label: tz.e.feed
+       [Pq.xc.Feed, {
+         label: Aq.i.feed
```

#### 151. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1329-L1330` → after: `L1054-L1055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1054-L1055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1054-L1055) · [Before (L1329-L1330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1329-L1330)

```diff
-       [sz.yc.Ride, {
-         label: tz.e.ride
+       [Pq.xc.Ride, {
+         label: Aq.i.ride
```

#### 152. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1335` → after: `L1060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1060) · [Before (L1335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1335)

```diff
-         this.target = zu, this.hO = sz.cd, this.optionName = null, this.pickaxe = new tz.d
+         this.target = qE, this.lc = Pq.id, this.optionName = null, this.pickaxe = new Aq.e
```

#### 153. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1339-L1341` → after: `L1064-L1066`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1064) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1064-L1066)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1064-L1066) · [Before (L1339-L1341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1339-L1341)

```diff
-         const bz = sz.z.targetBlockId(zz.api.apiView, 0);
-         bz !== this.hO && (this.hO = bz, this.optionName = bz === sz.cd ? null : `${zz.tables.getMetaInfo(bz).rootName}CrosshairText`);
-         const Ez = null === this.optionName ? null : null !== (uz = zz.tables.getClientOption(this.optionName)) && void 0 !== uz ? uz : null;
+         const gq = Pq.t.targetBlockId(qq.api.apiView, 0);
+         gq !== this.lc && (this.lc = gq, this.optionName = gq === Pq.id ? null : `${qq.tables.getMetaInfo(gq).rootName}CrosshairText`);
+         const Yq = null === this.optionName ? null : null !== (Eq = qq.tables.getClientOption(this.optionName)) && void 0 !== Eq ? Eq : null;
```

#### 154. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1344` → after: `L1069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1069) · [Before (L1344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1344)

```diff
-           if (0 === (sz.z.playerFlags(zz.api.apiView, 0) & sz.Id.Breaking) || uz === sz.cd || 0 === uz) return null;
+           if (0 === (Pq.t.playerFlags(qq.api.apiView, 0) & Pq.Pd.Breaking) || Eq === Pq.id || 0 === Eq) return null;
```

#### 155. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1350-L1352` → after: `L1075-L1077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1075) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1075-L1077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1075-L1077) · [Before (L1350-L1352)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1350-L1352)

```diff
-             Mz = null === (bz = zz.items.yM()) || void 0 === bz ? void 0 : bz.name,
-             tz = null !== (Ez = iz.getItemStat(lz, "harvestLevel")) && void 0 !== Ez ? Ez : 0;
-           return (0, Iz.Dc)({
+             xq = null === (gq = qq.items.Fc()) || void 0 === gq ? void 0 : gq.name,
+             Aq = null !== (Yq = Oq.getItemStat(mq, "harvestLevel")) && void 0 !== Yq ? Yq : 0;
+           return (0, Kq.Mc)({
```

#### 156. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1358` → after: `L1083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1083) · [Before (L1358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1358)

```diff
-           }) && null !== (nz = Bz.p[tz]) && void 0 !== nz ? nz : null
+           }) && null !== (lq = Cq.q[Aq]) && void 0 !== lq ? lq : null
```

#### 157. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1363-L1365` → after: `L1088-L1090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1088-L1090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1088-L1090) · [Before (L1363-L1365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1363-L1365)

```diff
-           return bz === sz.yc.Entity ? bu(zz.promptEntity) : bz === sz.yc.TameWith ? {
-             label: (0, tz.o)(zz.tables.nameOfId(zz.interactIcon))
-           } : null !== (uz = Eu.get(bz)) && void 0 !== uz ? uz : null
+           return gq === Pq.xc.Entity ? gE(qq.promptEntity) : gq === Pq.xc.TameWith ? {
+             label: (0, Aq.w)(qq.tables.nameOfId(qq.interactIcon))
+           } : null !== (Eq = YE.get(gq)) && void 0 !== Eq ? Eq : null
```

#### 158. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1367` → after: `L1092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1092) · [Before (L1367)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1367)

```diff
-         return this.target = (0, Cz.n)(this.target, {
+         return this.target = (0, Iq.m)(this.target, {
```

#### 159. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1378` → after: `L1103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1103) · [Before (L1378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1378)

```diff
-         return null !== (zz = null === (uz = iu) || void 0 === uz ? void 0 : uz.target) && void 0 !== zz ? zz : zu
+         return null !== (qq = null === (Eq = OE) || void 0 === Eq ? void 0 : Eq.target) && void 0 !== qq ? qq : qE
```

#### 160. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1383` → after: `L1108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1108) · [Before (L1383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1383)

```diff
-         const bz = (0, Fz.k)((bz => {
+         const gq = (0, Nq.h)((gq => {
```

#### 161. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1386` → after: `L1111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1111) · [Before (L1386)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1386)

```diff
-           const nz = (0, iz.A)((() => {
+           const lq = (0, Oq.x)((() => {
```

#### 162. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1402-L1407` → after: `L1127-L1132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1127-L1132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1127-L1132) · [Before (L1402-L1407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1402-L1407)

```diff
-         health: tz.l,
-         aura: tz.f,
-         hotbar: kz.b.states.hotbar,
-         heldItemAim: kz.b.states.heldItemAim,
-         crouching: (0, Fz.d)((zz => function(zz) {
-           const uz = () => 0 !== (sz.z.playerFlags(zz.apiView, 0) & sz.Id.Crouching);
+         health: Aq.p,
+         aura: Aq.k,
+         hotbar: Dq.c.states.hotbar,
+         heldItemAim: Dq.c.states.heldItemAim,
+         crouching: (0, Nq.b)((qq => function(qq) {
+           const Eq = () => 0 !== (Pq.t.playerFlags(qq.apiView, 0) & Pq.Pd.Crouching);
```

#### 163. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1419-L1423` → after: `L1144-L1148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1144-L1148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1144-L1148) · [Before (L1419-L1423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1419-L1423)

```diff
-         flight: (0, Fz.d)((zz => () => function(zz) {
-           const uz = sz.z.playerFlags(zz.apiView, 0);
-           return (0, tz.k)(0 !== (uz & sz.Id.CanFly), 0 !== (uz & sz.Id.Flying))
-         }(zz.api)), (0, tz.k)(!1, !1), (zz => (0, iz.w)(zz))),
-         gliderBoostFuel: (0, Fz.d)((zz => () => sz.z.gliderBoostFuel(zz.api.apiView, 0)), 0, (zz => (0, iz.w)(zz))),
+         flight: (0, Nq.b)((qq => () => function(qq) {
+           const Eq = Pq.t.playerFlags(qq.apiView, 0);
+           return (0, Aq.n)(0 !== (Eq & Pq.Pd.CanFly), 0 !== (Eq & Pq.Pd.Flying))
+         }(qq.api)), (0, Aq.n)(!1, !1), (qq => (0, Oq.w)(qq))),
+         gliderBoostFuel: (0, Nq.b)((qq => () => Pq.t.gliderBoostFuel(qq.api.apiView, 0)), 0, (qq => (0, Oq.w)(qq))),
```

#### 164. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1427-L1430` → after: `L1152-L1155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1152-L1155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1152-L1155) · [Before (L1427-L1430)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1427-L1430)

```diff
-         hotbarSlotRequested: kz.b.events.hotbarSlotRequested,
-         hotbarScrolled: kz.b.events.hotbarScrolled,
-         numberKeyPressed: kz.b.events.numberKeyPressed,
-         shotDamageToShow: (0, tz.n)((zz => !0 === (0, Yz.b)(zz, "showDamageAmounts")))
+         hotbarSlotRequested: Dq.c.events.hotbarSlotRequested,
+         hotbarScrolled: Dq.c.events.hotbarScrolled,
+         numberKeyPressed: Dq.c.events.numberKeyPressed,
+         shotDamageToShow: (0, Aq.s)((qq => !0 === (0, eq.d)(qq, "showDamageAmounts")))
```

#### 165. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1433` → after: `L1158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1158) · [Before (L1433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1433)

```diff
-         selectHotbarSlot: kz.b.commands.selectHotbarSlot,
+         selectHotbarSlot: Dq.c.commands.selectHotbarSlot,
```

#### 166. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1441` → after: `L1166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1166) · [Before (L1441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1441)

```diff
-           const Ez = (0, lz.j)(),
+           const Yq = (0, mq.e)(),
```

#### 167. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1443-L1444` → after: `L1168-L1169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1168-L1169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1168-L1169) · [Before (L1443-L1444)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1443-L1444)

```diff
-             iz = null === Ez || void 0 === Ez || null === (zz = Ez.items.yM()) || void 0 === zz || null === (uz = zz.attributes) || void 0 === uz || null === (bz = uz.customAttributes) || void 0 === bz ? void 0 : bz.enchantments;
-           return Mu = null !== Ez && null !== iz && void 0 !== iz && iz.Momentum ? 0 !== (sz.z.playerFlags(Ez.api.apiView, 0) & sz.Id.Breaking) ? Math.max(0, sz.z.momentumFrac(Ez.api.apiView, 0)) : Math.max(0, Mu - (nz - tu) / 1500) : 0, tu = nz, Mu
+             Oq = null === Yq || void 0 === Yq || null === (qq = Yq.items.Fc()) || void 0 === qq || null === (Eq = qq.attributes) || void 0 === Eq || null === (gq = Eq.customAttributes) || void 0 === gq ? void 0 : gq.enchantments;
+           return xE = null !== Yq && null !== Oq && void 0 !== Oq && Oq.Momentum ? 0 !== (Pq.t.playerFlags(Yq.api.apiView, 0) & Pq.Pd.Breaking) ? Math.max(0, Pq.t.momentumFrac(Yq.api.apiView, 0)) : Math.max(0, xE - (lq - AE) / 1500) : 0, AE = lq, xE
```

#### 168. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1447-L1453` → after: `L1172-L1184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1172-L1184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1172-L1184) · [Before (L1447-L1453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1447-L1453)

```diff
-     var Fu = bz(39742),
-       Zu = bz(1226),
-       Ru = bz(35970),
-       Ku = bz(8466),
-       wu = bz(1595),
-       Xu = bz(2289),
-       fu = bz(4567);
+     var NE = gq(40320);
+     const aE = {
+       lobbyManage(qq) {
+         var Eq;
+         null === (Eq = (0, mq.e)()) || void 0 === Eq || Eq.send(fq.b.LobbyManage, qq)
+       }
+     };
+     var VE = gq(1226),
+       dE = gq(36543),
+       jE = gq(8755),
+       HE = gq(1622),
+       oE = gq(2357),
+       PE = gq(4627);
```

#### 169. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1461` → after: `L1192`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1192)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1192) · [Before (L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1461)

```diff
-       "inGame" !== Uz.e.get("gameState") || (0, wu.p)() || Hz.k.sK("ctrlCrouchWithoutFullscreen")
+       "inGame" !== Gq.b.get("gameState") || (0, HE.r)() || cq.i.TV("ctrlCrouchWithoutFullscreen")
```

#### 170. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1467` → after: `L1198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1198) · [Before (L1467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1467)

```diff
-             Nu && (Nu = !1, Hz.k.sK("requestEmoteWheelHoldOpen"))
+             rE && (rE = !1, cq.i.TV("requestEmoteWheelHoldOpen"))
```

#### 171. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1471` → after: `L1202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1202) · [Before (L1471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1471)

```diff
-           Hz.k.sK("toggleFullCoordinateOverlay")
+           cq.i.TV("toggleFullCoordinateOverlay")
```

#### 172. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1474` → after: `L1205`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1205) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1205)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1205) · [Before (L1474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1474)

```diff
-           (0, Ru.d)() || Hz.k.sK("YKeyPressed")
+           (0, dE.e)() || cq.i.TV("YKeyPressed")
```

#### 173. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1477` → after: `L1208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1208) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1208) · [Before (L1477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1477)

```diff
-           (0, Ru.d)() || Hz.k.sK("XKeyPressed")
+           (0, dE.e)() || cq.i.TV("XKeyPressed")
```

#### 174. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1481-L1482` → after: `L1212-L1213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1212-L1213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1212-L1213) · [Before (L1481-L1482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1481-L1482)

```diff
-           Hz.k.sK("mouseState", {
-             WO: Zu.e.DownFirePrimary,
+           cq.i.TV("mouseState", {
+             nu: VE.d.DownFirePrimary,
```

#### 175. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1487-L1488` → after: `L1218-L1219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1218-L1219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1218-L1219) · [Before (L1487-L1488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1487-L1488)

```diff
-           Hz.k.sK("mouseState", {
-             WO: Zu.e.DownFireSecondary,
+           cq.i.TV("mouseState", {
+             nu: VE.d.DownFireSecondary,
```

#### 176. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1493-L1494` → after: `L1224-L1225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1224-L1225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1224-L1225) · [Before (L1493-L1494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1493-L1494)

```diff
-           Hz.k.sK("mouseState", {
-             WO: Zu.e.TouchDownLong,
+           cq.i.TV("mouseState", {
+             nu: VE.d.TouchDownLong,
```

#### 177. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1501` → after: `L1232`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1232)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1232) · [Before (L1501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1501)

```diff
-           ru(!1), Nu ? (Nu = !1, (0, Ku.c)() || Hz.k.sK("requestEmoteWheelHoldOpen")) : Hz.k.sK("requestEmoteWheelHoldRelease")
+           yE(!1), rE ? (rE = !1, (0, jE.e)() || cq.i.TV("requestEmoteWheelHoldOpen")) : cq.i.TV("requestEmoteWheelHoldRelease")
```

#### 178. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1505-L1506` → after: `L1236-L1237`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1236-L1237)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1236-L1237) · [Before (L1505-L1506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1505-L1506)

```diff
-           Hz.k.sK("mouseState", {
-             WO: Zu.e.UpFirePrimary,
+           cq.i.TV("mouseState", {
+             nu: VE.d.UpFirePrimary,
```

#### 179. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1511-L1512` → after: `L1242-L1243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1242) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1242-L1243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1242-L1243) · [Before (L1511-L1512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1511-L1512)

```diff
-           Hz.k.sK("mouseState", {
-             WO: Zu.e.UpFireSecondary,
+           cq.i.TV("mouseState", {
+             nu: VE.d.UpFireSecondary,
```

#### 180. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1517-L1518` → after: `L1248-L1249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1248) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1248-L1249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1248-L1249) · [Before (L1517-L1518)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1517-L1518)

```diff
-           Hz.k.sK("mouseState", {
-             WO: Zu.e.UpFirePrimary,
+           cq.i.TV("mouseState", {
+             nu: VE.d.UpFirePrimary,
```

#### 181. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1526-L1528` → after: `L1257-L1259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1257-L1259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1257-L1259) · [Before (L1526-L1528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1526-L1528)

```diff
-       Ju || (Ju = !0, (0, fu.g)((zz => {
-         if ((0, nz.c)()) return;
-         const uz = (0, fu.c)(zz) ? "primary-fire" : zz.action;
+       nE || (nE = !0, (0, PE.h)((qq => {
+         if ((0, lq.b)()) return;
+         const Eq = (0, PE.d)(qq) ? "primary-fire" : qq.action;
```

#### 182. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1531` → after: `L1262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1262) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1262) · [Before (L1531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1531)

```diff
-           if (0 === (zz.flags & Xu.b.Synthetic)) {
+           if (0 === (qq.flags & oE.e.Synthetic)) {
```

#### 183. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1538` → after: `L1269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1269) · [Before (L1538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1538)

```diff
-     var Tu = bz(316),
+     var iE = gq(296),
```

#### 184. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1540-L1543` → after: `L1271-L1274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1271-L1274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1271-L1274) · [Before (L1540-L1543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1540-L1543)

```diff
-       Pu = bz(33),
-       Gu = bz(39881),
-       au = bz(1296),
-       Vu = bz(38364);
+       fE = gq(38),
+       ME = gq(40434),
+       TE = gq(1308),
+       zE = gq(38939);
```

#### 185. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1548` → after: `L1279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1279) · [Before (L1548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1548)

```diff
-         null === (uz = (0, lz.j)()) || void 0 === uz || uz.send(Gz.d.CodeCollab, (0, Gz.l)(zz), (0, Vu.f)(zz))
+         null === (Eq = (0, mq.e)()) || void 0 === Eq || Eq.send(fq.b.CodeCollab, (0, fq.o)(qq), (0, zE.g)(qq))
```

#### 186. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1556` → after: `L1288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1288) · [Before (L1556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1556)

```diff
-       return "inGame" === Uz.e.get("gameState") && !(0, Ru.d)()
+       return "inGame" === Gq.b.get("gameState") && !(0, dE.e)()
```

#### 187. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1560` → after: `L1292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1292) · [Before (L1560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1560)

```diff
-           (0, wu.x)(zz, "inventory", (0, Fu.g)())
+           (0, HE.v)(qq, "inventory", (0, NE.j)())
```

#### 188. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1563` → after: `L1295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1295) · [Before (L1563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1563)

```diff
-           hu && gu() && (0, wu.t)(zz, Tu.r.SHOP, !hu.shopIsEmpty(fz.b.get("shopInfo")))
+           LE && RE() && (0, HE.u)(qq, iE.p.SHOP, !LE.shopIsEmpty(oq.c.get("shopInfo")))
```

#### 189. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1566` → after: `L1298-L1301`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1298-L1301)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1298-L1301) · [Before (L1566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1566)

```diff
-           gu() && (0, wu.t)(zz, Tu.r.LOBBY_LEADERBOARD, !!fz.b.get("lobbyLeaderboardInfo"))
+           RE() && (0, HE.u)(qq, iE.p.LOBBY_LEADERBOARD, (0, GE.d)({
+             lobbyLeaderboardInfo: oq.c.get("lobbyLeaderboardInfo"),
+             lobbyManage: oq.c.get("lobbyManage")
+           }))
```

#### 190. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1571` → after: `L1306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1306) · [Before (L1571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1571)

```diff
-           bz ? (0, wu.A)(zz, !0, bz) : (0, wu.x)(zz, "retentionFeatures", !(!fz.b.get("_tasks") && !fz.b.get("_availableLeaderboards")))
+           gq ? (0, HE.y)(qq, !0, gq) : (0, HE.v)(qq, "retentionFeatures", !(!oq.c.get("_tasks") && !oq.c.get("_availableLeaderboards")))
```

#### 191. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1574` → after: `L1309`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1309) · [Before (L1574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1574)

```diff
-           (0, wu.x)(zz, "inviteLink", Lu.featureFlags.canUseInviteLinks)
+           (0, HE.v)(qq, "inviteLink", ZE.featureFlags.canUseInviteLinks)
```

#### 192. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1579` → after: `L1314`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1314) · [Before (L1579)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1579)

```diff
-             const bz = (0, lz.j)(),
+             const gq = (0, mq.e)(),
```

#### 193. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1581-L1584` → after: `L1316-L1319`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1316-L1319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1316-L1319) · [Before (L1581-L1584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1581-L1584)

```diff
-               nz = Ez ? Ez.Gs(Ez.localId) : null,
-               iz = null !== (uz = null === nz || void 0 === nz ? void 0 : nz.map((zz => Math.floor(zz)))) && void 0 !== uz ? uz : null;
-             (0, wu.A)(zz, null !== iz && (0, Vu.d)((0, au.b)()), (() => {
-               Hz.k.sK("EditLobbyCode", iz)
+               lq = Yq ? Yq.Py(Yq.localId) : null,
+               Oq = null !== (Eq = null === lq || void 0 === lq ? void 0 : lq.map((qq => Math.floor(qq)))) && void 0 !== Eq ? Eq : null;
+             (0, HE.y)(qq, null !== Oq && (0, zE.c)((0, TE.e)()), (() => {
+               cq.i.TV("EditLobbyCode", Oq)
```

#### 194. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1589` → after: `L1324`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1324) · [Before (L1589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1589)

```diff
-           Hz.k.sK("showUi", !1)
+           cq.i.TV("showUi", !1)
```

#### 195. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1594` → after: `L1329`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1329) · [Before (L1594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1594)

```diff
-           Hz.k.sK("showUi", !0)
+           cq.i.TV("showUi", !0)
```

#### 196. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1599` → after: `L1334`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1334) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1334)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1334) · [Before (L1599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1599)

```diff
-       Uu || (Uu = !0, bz.e(151).then((() => bz(41833))).then((zz => {
+       JE || (JE = !0, gq.e(153).then((() => gq(42369))).then((qq => {
```

#### 197. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1603-L1605` → after: `L1338-L1340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1338) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1338-L1340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1338-L1340) · [Before (L1603-L1605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1603-L1605)

```diff
-       })), (0, Gu.x)((zz => {
-         zz || !(0, Gu.k)() || (0, Lu.isMobile)() || !Pu.g.getItem("disableFullscreen") || (0, wu.l)() || Uz.e.set({
-           openEverythingMenuName: Tu.r.SETTINGS
+       })), (0, ME.w)((qq => {
+         qq || !(0, ME.e)() || (0, ZE.isMobile)() || !fE.i.getItem("disableFullscreen") || (0, HE.p)() || Gq.b.set({
+           openEverythingMenuName: iE.p.SETTINGS
```

#### 198. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1607` → after: `L1342`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1342) · [Before (L1607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1607)

```diff
-       })), (0, fu.g)((zz => {
+       })), (0, PE.h)((qq => {
```

#### 199. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1614` → after: `L1349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1349) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1349) · [Before (L1614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1614)

```diff
-         (0, nz.c)() || (bz ? null === (iz = Su[uz]) || void 0 === iz || iz.call(Su, function(zz) {
+         (0, lq.b)() || (gq ? null === (Oq = UE[Eq]) || void 0 === Oq || Oq.call(UE, function(qq) {
```

#### 200. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1629-L1631` → after: `L1364-L1366`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1364) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1364-L1366)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1364-L1366) · [Before (L1629-L1631)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1629-L1631)

```diff
-     var Qu = bz(38334),
-       Wu = bz(38351),
-       eu = bz(38342);
+     var XE = gq(38910),
+       wE = gq(38927),
+       KE = gq(38915);
```

#### 201. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1635` → after: `L1370`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1370) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1370)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1370) · [Before (L1635)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1635)

```diff
-         null === (uz = (0, lz.j)()) || void 0 === uz || uz.send(Gz.d.CompleteTask, (0, Gz.p)(zz))
+         null === (Eq = (0, mq.e)()) || void 0 === Eq || Eq.send(fq.b.CompleteTask, (0, fq.q)(qq))
```

#### 202. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1643-L1645` → after: `L1378-L1380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1378-L1380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1378-L1380) · [Before (L1643-L1645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1643-L1645)

```diff
-         null === (uz = (0, lz.j)()) || void 0 === uz || uz.send(Gz.d.GeneralCookieSet, (0, Gz.t)({
-           Al: bz,
-           Tl: Ez
+         null === (Eq = (0, mq.e)()) || void 0 === Eq || Eq.send(fq.b.GeneralCookieSet, (0, fq.w)({
+           KA: gq,
+           CA: Yq
```

#### 203. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1652` → after: `L1387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1387) · [Before (L1652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1652)

```diff
-           Vl: Ez
+           xu: Yq
```

#### 204. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1654-L1657` → after: `L1389-L1392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1389-L1392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1389-L1392) · [Before (L1654-L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1654-L1657)

```diff
-         null === (uz = (0, lz.j)()) || void 0 === uz || uz.send(Gz.d.UiRequestResp, (0, Gz.R)({
-           QM: bz,
-           WM: Ez,
-           eM: 5
+         null === (Eq = (0, mq.e)()) || void 0 === Eq || Eq.send(fq.b.UiRequestResp, (0, fq.V)({
+           ou: gq,
+           Pu: Yq,
+           Qu: 5
```

#### 205. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1664` → after: `L1399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1399) · [Before (L1664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1664)

```diff
-           Vl: Ez
+           xu: Yq
```

#### 206. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1666` → after: `L1401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1401) · [Before (L1666)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1666)

```diff
-         null === (uz = (0, lz.j)()) || void 0 === uz || uz.send(Gz.d.UiRequestResponded, (0, Gz.O)({
+         null === (Eq = (0, mq.e)()) || void 0 === Eq || Eq.send(fq.b.UiRequestResponded, (0, fq.S)({
```

#### 207. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1668` → after: `L1403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1403) · [Before (L1668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1668)

```diff
-           Vl: Ez
+           xu: Yq
```

#### 208. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1678` → after: `L1413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1413) · [Before (L1678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1678)

```diff
-         null === (uz = (0, lz.j)()) || void 0 === uz || uz.send(Gz.d.LeaderboardRequest, {
+         null === (Eq = (0, mq.e)()) || void 0 === Eq || Eq.send(fq.b.LeaderboardRequest, {
```

#### 209. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1686` → after: `L1421`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1421) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1421)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1421) · [Before (L1686)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1686)

```diff
-     const Bu = Xz.e.Gw / 2,
+     const eE = Hq.c.ZH / 2,
```

#### 210. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1697` → after: `L1432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1432) · [Before (L1697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1697)

```diff
-         const zz = (0, lz.j)();
+         const qq = (0, mq.e)();
```

#### 211. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1713` → after: `L1448`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1448) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1448)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1448) · [Before (L1713)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1713)

```diff
-           const dz = bz.hO(iz, tz, pz);
+           const Wq = gq.lc(Oq, Aq, Bq);
```

#### 212. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1719-L1720` → after: `L1454-L1455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1454-L1455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1454-L1455) · [Before (L1719-L1720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1719-L1720)

```diff
-         const zz = (0, lz.j)();
-         return null !== zz && 0 !== (sz.z.playerFlags(zz.api.apiView, 0) & sz.Id.DropAhead)
+         const qq = (0, mq.e)();
+         return null !== qq && 0 !== (Pq.t.playerFlags(qq.api.apiView, 0) & Pq.Pd.DropAhead)
```

#### 213. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1723-L1726` → after: `L1458-L1461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1458-L1461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1458-L1461) · [Before (L1723-L1726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1723-L1726)

```diff
-     var ub = bz(36378),
-       bb = bz(38441),
-       Eb = bz(1322),
-       nb = bz(39823);
+     var Yg = gq(36995),
+       lg = gq(39024),
+       Og = gq(1336),
+       mg = gq(40385);
```

#### 214. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1748` → after: `L1483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1483) · [Before (L1748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1748)

```diff
-       const lz = () => (bz = (0, Cz.n)(bz, zz()), bz);
+       const mq = () => (gq = (0, Iq.m)(gq, qq()), gq);
```

#### 215. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1752` → after: `L1487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1487) · [Before (L1752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1752)

```diff
-           const uz = (0, Zz.d)((uz => {
+           const Eq = (0, aq.b)((Eq => {
```

#### 216. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1756-L1758` → after: `L1491-L1493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1491-L1493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1491-L1493) · [Before (L1756-L1758)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1756-L1758)

```diff
-           let bz = (0, Fz.g)();
-           const Mz = (0, iz.A)((() => {
-             const uz = (0, Fz.g)();
+           let gq = (0, Nq.f)();
+           const xq = (0, Oq.x)((() => {
+             const Eq = (0, Nq.f)();
```

#### 217. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1769` → after: `L1504`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1504) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1504)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1504) · [Before (L1769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1769)

```diff
-           const zz = Zz.f.ids(),
+           const qq = aq.e.ids(),
```

#### 218. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1774-L1776` → after: `L1509-L1511`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1509-L1511)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1509-L1511) · [Before (L1774-L1776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1774-L1776)

```diff
-               name: null !== (bz = Zz.f.getName(iz)) && void 0 !== bz ? bz : null,
-               ranks: null !== (Ez = Zz.f.getSetting(iz, "ranks")) && void 0 !== Ez ? Ez : tb,
-               cosmetics: null !== (nz = (0, Zz.h)(iz)) && void 0 !== nz ? nz : null
+               name: null !== (gq = aq.e.getName(Oq)) && void 0 !== gq ? gq : null,
+               ranks: null !== (Yq = aq.e.getSetting(Oq, "ranks")) && void 0 !== Yq ? Yq : ug,
+               cosmetics: null !== (lq = (0, aq.h)(Oq)) && void 0 !== lq ? lq : null
```

#### 219. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1782` → after: `L1517`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1517) · [Before (L1782)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1782)

```diff
-             localId: (0, Fz.g)()
+             localId: (0, Nq.f)()
```

#### 220. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1790` → after: `L1525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1525) · [Before (L1790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1790)

```diff
-           for (const nz of Zz.f.ids()) {
+           for (const lq of aq.e.ids()) {
```

#### 221. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1793-L1795` → after: `L1528-L1530`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1528-L1530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1528-L1530) · [Before (L1793-L1795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1793-L1795)

```diff
-               colour: null !== (uz = Zz.f.getSetting(nz, "colorInLobbyLeaderboard")) && void 0 !== uz ? uz : null,
-               values: null !== (bz = Zz.f.getSetting(nz, "lobbyLeaderboardValues")) && void 0 !== bz ? bz : null,
-               tags: null !== (Ez = Zz.f.getSetting(nz, "lobbyLeaderboardTags")) && void 0 !== Ez ? Ez : null
+               colour: null !== (Eq = aq.e.getSetting(lq, "colorInLobbyLeaderboard")) && void 0 !== Eq ? Eq : null,
+               values: null !== (gq = aq.e.getSetting(lq, "lobbyLeaderboardValues")) && void 0 !== gq ? gq : null,
+               tags: null !== (Yq = aq.e.getSetting(lq, "lobbyLeaderboardTags")) && void 0 !== Yq ? Yq : null
```

#### 222. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1813` → after: `L1548`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1548) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1548)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1548) · [Before (L1813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1813)

```diff
-           watch: zz => (0, Zz.d)((uz => {
+           watch: qq => (0, aq.b)((Eq => {
```

#### 223. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1815` → after: `L1550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1550) · [Before (L1815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1815)

```diff
-             const bz = (0, Fz.g)();
+             const gq = (0, Nq.f)();
```

#### 224. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1818-L1820` → after: `L1553-L1555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1553-L1555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1553-L1555) · [Before (L1818-L1820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1818-L1820)

```diff
-                 Yb: uz,
-                 kb: Ez,
-                 zE: nz
+                 yY: Eq,
+                 tY: Yq,
+                 rY: lq
```

#### 225. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1824-L1825` → after: `L1559-L1560`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1559-L1560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1559-L1560) · [Before (L1824-L1825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1824-L1825)

```diff
-                 kb: Ez,
-                 zE: nz
+                 tY: Yq,
+                 rY: lq
```

#### 226. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1831-L1834` → after: `L1566-L1569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1566-L1569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1566-L1569) · [Before (L1831-L1834)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1831-L1834)

```diff
-     var db = bz(2709),
-       Fb = bz(1673),
-       Zb = bz(627),
-       Rb = bz(39887);
+     var ag = gq(2834),
+       Vg = gq(1710),
+       dg = gq(623),
+       jg = gq(40440);
```

#### 227. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1840` → after: `L1575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1575) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1575) · [Before (L1840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1840)

```diff
-         null === (uz = (0, lz.j)()) || void 0 === uz || uz.send(Gz.d.ShopMenuChanged, (0, Gz.J)(zz))
+         null === (Eq = (0, mq.e)()) || void 0 === Eq || Eq.send(fq.b.ShopMenuChanged, (0, fq.M)(qq))
```

#### 228. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1849` → after: `L1584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1584) · [Before (L1849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1849)

```diff
-         null === (uz = (0, lz.j)()) || void 0 === uz || uz.send(Gz.d.ItemBought, {
+         null === (Eq = (0, mq.e)()) || void 0 === Eq || Eq.send(fq.b.ItemBought, {
```

#### 229. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1852` → after: `L1587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1587) · [Before (L1852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1852)

```diff
-           shopVersion: fz.b.get("_shopVersion"),
+           shopVersion: oq.c.get("_shopVersion"),
```

#### 230. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1858-L1859` → after: `L1593-L1594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1593-L1594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1593-L1594) · [Before (L1858-L1859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1858-L1859)

```diff
-     var sb = bz(4575);
-     const rb = Xu.z.LookFrozen | Xu.z.ClicksSuppressed;
+     var yg = gq(4637);
+     const tg = oE.C.LookFrozen | oE.C.ClicksSuppressed;
```

#### 231. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1863-L1866` → after: `L1598-L1601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1598-L1601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1598-L1601) · [Before (L1863-L1866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1863-L1866)

```diff
-       null !== (bz = (0, lz.j)()) && void 0 !== bz && bz.send(zz, uz) || console.warn(`[bloxd-wasm-client] message ${zz} not sent: no live game or the core's command ring is full`)
-     }(0, Rz.i)(Pz.lb, (zz => {
-       const uz = (0, az.i)(Pz.lb, zz);
-       void 0 !== uz && Hz.k.sK("setDiscordReportKey", uz)
+       null !== (gq = (0, mq.e)()) && void 0 !== gq && gq.send(qq, Eq) || console.warn(`[bloxd-wasm-client] message ${qq} not sent: no live game or the core's command ring is full`)
+     }(0, Vq.l)(Zq.bb, (qq => {
+       const Eq = (0, Mq.d)(Zq.bb, qq);
+       void 0 !== Eq && cq.i.TV("setDiscordReportKey", Eq)
```

#### 232. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1870-L1871` → after: `L1605-L1606`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1605-L1606)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1605-L1606) · [Before (L1870-L1871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1870-L1871)

```diff
-         ob(Gz.d.IgnoreUser, (0, Gz.v)({
-           bM: zz
+         rg(fq.b.IgnoreUser, (0, fq.x)({
+           um: qq
```

#### 233. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1878` → after: `L1613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1613) · [Before (L1878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1878)

```diff
-           Nl: Ez,
+           Oc: Yq,
```

#### 234. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1881-L1885` → after: `L1616-L1620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1616-L1620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1616-L1620) · [Before (L1881-L1885)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1881-L1885)

```diff
-         ob(Gz.d.UserReport, (0, Gz.$)({
-           dp: uz,
-           Fp: bz,
-           Nl: Ez,
-           vl: nz
+         rg(fq.b.UserReport, (0, fq.gb)({
+           Sc: Eq,
+           Gc: gq,
+           Oc: Yq,
+           mc: lq
```

#### 235. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1891` → after: `L1626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1626) · [Before (L1891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1891)

```diff
-           Nl: bz,
+           Oc: gq,
```

#### 236. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1894-L1898` → after: `L1629-L1633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1629-L1633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1629-L1633) · [Before (L1894-L1898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1894-L1898)

```diff
-         ob(Gz.d.UserReport, (0, Gz.$)({
-           dp: "",
-           Fp: uz,
-           Nl: bz,
-           vl: Ez
+         rg(fq.b.UserReport, (0, fq.gb)({
+           Sc: "",
+           Gc: Eq,
+           Oc: gq,
+           mc: Yq
```

#### 237. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1902` → after: `L1637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1637) · [Before (L1902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1902)

```diff
-         ob(Gz.d.ReqDiscordReportKey, (0, Gz.B)(zz))
+         rg(fq.b.ReqDiscordReportKey, (0, fq.H)(qq))
```

#### 238. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1907` → after: `L1642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1642) · [Before (L1907)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1907)

```diff
-           Nl: bz,
+           Oc: gq,
```

#### 239. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1910-L1915` → after: `L1645-L1650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1645-L1650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1645-L1650) · [Before (L1910-L1915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1910-L1915)

```diff
-         "customGame" === uz ? ob(Gz.d.CustomGameReport, (0, Gz.r)({
-           Nl: bz,
-           vl: Ez
-         })) : ob(Gz.d.LobbyReport, (0, Gz.w)({
-           Nl: bz,
-           vl: Ez
+         "customGame" === Eq ? rg(fq.b.CustomGameReport, (0, fq.t)({
+           Oc: gq,
+           mc: Yq
+         })) : rg(fq.b.LobbyReport, (0, fq.y)({
+           Oc: gq,
+           mc: Yq
```

#### 240. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1919` → after: `L1654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1654) · [Before (L1919)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1919)

```diff
-         ob(Gz.d.UpdateMyCosmetic, (0, Gz.Y)(zz))
+         rg(fq.b.UpdateMyCosmetic, (0, fq.eb)(qq))
```

#### 241. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1922` → after: `L1657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1657) · [Before (L1922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1922)

```diff
-         !zz || su ? (0, sb.i)(rb, zz ? rb : 0) : Hz.k.sK("requestEmoteWheelHoldRelease")
+         !qq || QE ? (0, yg.k)(tg, qq ? tg : 0) : cq.i.TV("requestEmoteWheelHoldRelease")
```

#### 242. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1925-L1927` → after: `L1660-L1662`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1660) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1660-L1662)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1660-L1662) · [Before (L1925-L1927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1925-L1927)

```diff
-     var vb = bz(39895),
-       xb = bz(9078),
-       Jb = bz(38966);
+     var hg = gq(40448),
+       ng = gq(9379),
+       bg = gq(39525);
```

#### 243. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1937` → after: `L1672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1672) · [Before (L1937)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1937)

```diff
-           const Ez = (0, lz.j)();
+           const Yq = (0, mq.e)();
```

#### 244. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1945` → after: `L1680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1680) · [Before (L1945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1945)

```diff
-           return (0, Jb.f)(((zz, uz, bz) => (tz = iz.getBlockId(zz, uz, bz), 0 !== tz)), nz.cameraPosition, (0, Jb.h)((zz => sz.z.viewProj(Mz.apiView, 0, zz)), uz, bz, Ab), Jb.e, Tb, Lb) ? {
+           return (0, bg.g)(((qq, Eq, gq) => (Aq = Oq.getBlockId(qq, Eq, gq), 0 !== Aq)), lq.cameraPosition, (0, bg.i)((qq => Pq.t.viewProj(xq.apiView, 0, qq)), Eq, gq, ig), bg.d, Zg, fg) ? {
```

#### 245. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1948` → after: `L1683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1683) · [Before (L1948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1948)

```diff
-             name: (0, xb.g)(tz)
+             name: (0, ng.h)(Aq)
```

#### 246. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1955` → after: `L1690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1690) · [Before (L1955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1955)

```diff
-           null === (uz = (0, lz.j)()) || void 0 === uz || uz.setBlockHighlight(zz)
+           null === (Eq = (0, mq.e)()) || void 0 === Eq || Eq.setBlockHighlight(qq)
```

#### 247. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1958-L1963` → after: `L1693-L1882`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1693-L1882)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1693-L1882) · [Before (L1958-L1963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1958-L1963)

```diff
-     var ab = bz(1878),
-       Vb = bz(39898),
-       mb = bz(39902),
-       qb = bz(39910);
-     var hb = bz(584),
-       Ub = bz(38970);
+     var zg = gq(1914),
+       Sg = gq(40454),
+       pg = gq(40462),
+       Gg = gq(4319),
+       Lg = gq(4289),
+       Jg = gq(40466),
+       kg = gq(3166),
+       Rg = gq(3170);
+     let Ug = null,
+       Fg = null;
+ 
+     function sg(qq) {
+       const Eq = qq.startsWith(Rg.l),
+         [gq, Yq = gq, lq = gq] = (Eq ? qq.slice(Rg.l.length) : qq).split(Rg.h);
+       return {
+         top: gq,
+ ... (174 more added lines; see GitHub link above)
```

#### 248. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1975-L1976` → after: `L1894-L1895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1894-L1895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1894-L1895) · [Before (L1975-L1976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1975-L1976)

```diff
-           const zz = uz.Gs(uz.localId);
-           return null !== zz && void 0 !== zz && zz.every(Number.isFinite) ? zz : null
+           const qq = Eq.Py(Eq.localId);
+           return null !== qq && void 0 !== qq && qq.every(Number.isFinite) ? qq : null
```

#### 249. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1978` → after: `L1897`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1897) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1897) · [Before (L1978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1978)

```diff
-         chunkBlocks: zz => bz.isLoaded(zz[0], zz[1], zz[2]) ? (zz, uz, Ez) => bz.hO(zz, uz, Ez) : null,
+         chunkBlocks: qq => gq.isLoaded(qq[0], qq[1], qq[2]) ? (qq, Eq, Yq) => gq.lc(qq, Eq, Yq) : null,
```

#### 250. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1994-L1996` → after: `L1913-L1915`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1913) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1913-L1915)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1913-L1915) · [Before (L1994-L1996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1994-L1996)

```diff
-             if (null === iz || uz.isLocal(lz) || Mz >>> sz.e !== sz.w.Lifeform) continue;
-             const tz = uz.Gs(lz),
-               Hz = hb.j[Mz & sz.i];
+             if (null === Oq || Eq.isLocal(mq) || xq >>> Pq.b !== Pq.q.Lifeform) continue;
+             const Aq = Eq.Py(mq),
+               cq = dY.m[xq & Pq.c];
```

#### 251. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L1999` → after: `L1918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1918) · [Before (L1999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1999)

```diff
-               name: null !== (Ez = zz.clientApi.getEntityName(iz)) && void 0 !== Ez ? Ez : null,
+               name: null !== (Yq = qq.clientApi.getEntityName(Oq)) && void 0 !== Yq ? Yq : null,
```

#### 252. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2007` → after: `L1926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1926) · [Before (L2007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2007)

```diff
-           for (let bz = 0; bz < uz.idStr.length; bz++) null !== uz.idStr[bz] && uz.kinds[bz] >>> sz.e === sz.w.Item && zz++;
+           for (let gq = 0; gq < Eq.idStr.length; gq++) null !== Eq.idStr[gq] && Eq.kinds[gq] >>> Pq.b === Pq.q.Item && qq++;
```

#### 253. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2013-L2014` → after: `L1932-L1933`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1932-L1933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1932-L1933) · [Before (L2013-L2014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2013-L2014)

```diff
-         worldCodeAiChunk: zz => Promise.resolve((0, Ub.e)(cb((0, lz.j)()), zz)),
-         worldCodeAiGameState: () => Promise.resolve((0, Ub.i)(cb((0, lz.j)())))
+         worldCodeAiChunk: qq => Promise.resolve((0, jY.e)(HY((0, mq.e)()), qq)),
+         worldCodeAiGameState: () => Promise.resolve((0, jY.h)(HY((0, mq.e)())))
```

#### 254. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2023` → after: `L1942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1942) · [Before (L2023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2023)

```diff
-             return null !== (uz = null === (bz = zz.runtime()) || void 0 === bz ? void 0 : bz.currentViewer) && void 0 !== uz ? uz : null
+             return null !== (Eq = null === (gq = qq.runtime()) || void 0 === gq ? void 0 : gq.currentViewer) && void 0 !== Eq ? Eq : null
```

#### 255. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2045` → after: `L1964`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1964) · [Before (L2045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2045)

```diff
-             uz && bz && uz.seek(Math.max(0, Math.min(bz.totalTicks - 1, bz.sd + zz * pz.qd)))
+             Eq && gq && Eq.seek(Math.max(0, Math.min(gq.totalTicks - 1, gq.SB + qq * Bq.Fd)))
```

#### 256. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2051-L2052` → after: `L1970-L1971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1970-L1971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1970-L1971) · [Before (L2051-L2052)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2051-L2052)

```diff
-                 bz = null !== (zz = null === uz || void 0 === uz ? void 0 : uz.view) && void 0 !== zz ? zz : null;
-               return null === uz || null === bz || bz.state === pz.dd.None ? (Mz = null, null) : (Mz = (0, Cz.n)(Mz, {
+                 gq = null !== (qq = null === Eq || void 0 === Eq ? void 0 : Eq.view) && void 0 !== qq ? qq : null;
+               return null === Eq || null === gq || gq.state === Bq.rd.None ? (xq = null, null) : (xq = (0, Iq.m)(xq, {
```

#### 257. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2054` → after: `L1973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1973) · [Before (L2054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2054)

```diff
-                 sd: bz.sd,
+                 SB: gq.SB,
```

#### 258. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2056-L2057` → after: `L1975-L1976`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1975-L1976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1975-L1976) · [Before (L2056-L2057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2056-L2057)

```diff
-                 pT: pz.qd,
-                 playing: bz.state === pz.dd.Playing,
+                 bJ: Bq.Fd,
+                 playing: gq.state === Bq.rd.Playing,
```

#### 259. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2066-L2067` → after: `L1985-L1986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1985-L1986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1985-L1986) · [Before (L2066-L2067)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2066-L2067)

```diff
-                 bz = null !== (zz = null === uz || void 0 === uz ? void 0 : uz.view) && void 0 !== zz ? zz : null;
-               return null === uz || null === bz || bz.state === pz.dd.None ? (tz = null, null) : (tz = (0, Cz.n)(tz, {
+                 gq = null !== (qq = null === Eq || void 0 === Eq ? void 0 : Eq.view) && void 0 !== qq ? qq : null;
+               return null === Eq || null === gq || gq.state === Bq.rd.None ? (Aq = null, null) : (Aq = (0, Iq.m)(Aq, {
```

#### 260. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2077` → after: `L1996`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR1996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L1996)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L1996) · [Before (L2077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2077)

```diff
-               return null !== (uz = null === (bz = zz.runtime()) || void 0 === bz ? void 0 : bz.recorder.current) && void 0 !== uz ? uz : nb.e.states.replayRecorder.current()
+               return null !== (Eq = null === (gq = qq.runtime()) || void 0 === gq ? void 0 : gq.recorder.current) && void 0 !== Eq ? Eq : mg.b.states.replayRecorder.current()
```

#### 261. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2081` → after: `L2000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2000) · [Before (L2081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2081)

```diff
-               watch: zz => (0, Hz.o)("replayViewer|videoExportChanged", (() => {
+               watch: qq => (0, cq.k)("replayViewer|videoExportChanged", (() => {
```

#### 262. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2095` → after: `L2014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2014) · [Before (L2095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2095)

```diff
-             !0 === (null === (Ez = lz()) || void 0 === Ez ? void 0 : Ez.isOpen) && Promise.all([bz.e(94), bz.e(63)]).then((() => bz(41838))).then((bz => {
+             !0 === (null === (Yq = mq()) || void 0 === Yq ? void 0 : Yq.isOpen) && Promise.all([gq.e(95), gq.e(64)]).then((() => gq(42373))).then((gq => {
```

#### 263. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2103` → after: `L2022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2022) · [Before (L2103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2103)

```diff
-                   return null !== (uz = null === (bz = zz.canvas) || void 0 === bz ? void 0 : bz.call(zz)) && void 0 !== uz ? uz : null
+                   return null !== (Eq = null === (gq = qq.canvas) || void 0 === gq ? void 0 : gq.call(qq)) && void 0 !== Eq ? Eq : null
```

#### 264. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2130` → after: `L2049`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2049) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2049)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2049) · [Before (L2130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2130)

```diff
-                   null !== uz && void 0 !== uz && uz.view && uz.setSpeed((0, ub.k)(uz.view.speed, "replaySpeedUp" === zz ? "up" : "down"));
+                   null !== Eq && void 0 !== Eq && Eq.view && Eq.setSpeed((0, Yg.l)(Eq.view.speed, "replaySpeedUp" === qq ? "up" : "down"));
```

#### 265. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2143` → after: `L2062`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2062) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2062)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2062) · [Before (L2143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2143)

```diff
-                 sd: bz,
+                 SB: gq,
```

#### 266. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2188` → after: `L2107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2107) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2107) · [Before (L2188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2188)

```diff
-                 bz.e(129).then((() => bz(38566))).then((uz => {
+                 gq.e(130).then((() => gq(39158))).then((Eq => {
```

#### 267. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2219` → after: `L2138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2138) · [Before (L2219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2219)

```diff
-               (0, Ru.e)(uz) && (null === (bz = zz.runtime()) || void 0 === bz || bz.recorder.viewerShown(uz))
+               (0, dE.h)(Eq) && (null === (gq = qq.runtime()) || void 0 === gq || gq.recorder.viewerShown(Eq))
```

#### 268. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2225` → after: `L2144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2144) · [Before (L2225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2225)

```diff
-                 ki: nz,
+                 hg: lq,
```

#### 269. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2227` → after: `L2146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2146) · [Before (L2227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2227)

```diff
-                 zl: lz
+                 ng: mq
```

#### 270. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2247` → after: `L2166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2166) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2166) · [Before (L2247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2247)

```diff
-                 yM: nz
+                 Fc: lq
```

#### 271. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2255` → after: `L2174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2174) · [Before (L2255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2255)

```diff
-               Ez = null !== (uz = null === bz || void 0 === bz ? void 0 : bz.view) && void 0 !== uz ? uz : null;
+               Yq = null !== (Eq = null === gq || void 0 === gq ? void 0 : gq.view) && void 0 !== Eq ? Eq : null;
```

#### 272. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2258` → after: `L2177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2177) · [Before (L2258)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2258)

```diff
-             })(zz) : lb.has(zz) ? Xz.replayAction(zz) : "replayPlayPause" === zz ? bz && Ez && Ez.state !== pz.dd.None && Xz.setReplayPlaying(Ez.state !== pz.dd.Playing) : "replayChangeCameraMode" === zz ? null === bz || void 0 === bz || bz.cycleCameraMode() : "replayExit" === zz … [truncated]
+             })(qq) : Ag.has(qq) ? Hq.replayAction(qq) : "replayPlayPause" === qq ? gq && Yq && Yq.state !== Bq.rd.None && Hq.setReplayPlaying(Yq.state !== Bq.rd.Playing) : "replayChangeCameraMode" === qq ? null === gq || void 0 === gq || gq.cycleCameraMode() : "replayExit" === qq … [truncated]
```

#### 273. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2268` → after: `L2187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2187) · [Before (L2268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2268)

```diff
-               return !0 !== (null === (uz = lz()) || void 0 === uz ? void 0 : uz.isOpen) ? null : null !== (bz = null === (Ez = zz.cameraView) || void 0 === Ez ? void 0 : Ez.call(zz)) && void 0 !== bz ? bz : null
+               return !0 !== (null === (Eq = mq()) || void 0 === Eq ? void 0 : Eq.isOpen) ? null : null !== (gq = null === (Yq = qq.cameraView) || void 0 === Yq ? void 0 : Yq.call(qq)) && void 0 !== gq ? gq : null
```

#### 274. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2279` → after: `L2198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2198) · [Before (L2279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2279)

```diff
-               bz !== sz && (sz = bz, Hz.k.sK("connectedGameChanged")), uz.fire()
+               gq !== Pq && (Pq = gq, cq.i.TV("connectedGameChanged")), Eq.fire()
```

#### 275. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2288-L2289` → after: `L2207-L2208`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2207-L2208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2207-L2208) · [Before (L2288-L2289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2288-L2289)

```diff
-                   return void((0, Ru.d)() || Xz.saveClip())
-               }(0, bb.b)() || ("replayViewerOpen" !== zz ? zz.startsWith("replay") && ((0, Ru.d)() || !0 === (null === (uz = lz()) || void 0 === uz ? void 0 : uz.inPlayback)) && fz(zz) : Kz("toggle"))
+                   return void((0, dE.e)() || Hq.saveClip())
+               }(0, lg.b)() || ("replayViewerOpen" !== qq ? qq.startsWith("replay") && ((0, dE.e)() || !0 === (null === (Eq = mq()) || void 0 === Eq ? void 0 : Eq.inPlayback)) && oq(qq) : dq("toggle"))
```

#### 276. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2294` → after: `L2213`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2213) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2213) · [Before (L2294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2294)

```diff
-         runtime: nz.h,
+         runtime: lq.l,
```

#### 277. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2297` → after: `L2216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2216) · [Before (L2297)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2297)

```diff
-           const uz = null === (zz = (0, lz.j)()) || void 0 === zz ? void 0 : zz.renderFrame;
+           const Eq = null === (qq = (0, mq.e)()) || void 0 === qq ? void 0 : qq.renderFrame;
```

#### 278. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2307` → after: `L2226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2226) · [Before (L2307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2307)

```diff
-           return null !== (zz = null === (uz = (bz = (0, iz.M)()).canvas) || void 0 === uz ? void 0 : uz.call(bz)) && void 0 !== zz ? zz : null
+           return null !== (qq = null === (Eq = (gq = (0, Oq.M)()).canvas) || void 0 === Eq ? void 0 : Eq.call(gq)) && void 0 !== qq ? qq : null
```

#### 279. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2309` → after: `L2228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2228) · [Before (L2309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2309)

```diff
-         freecam: nz.g
+         freecam: lq.i
```

#### 280. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2314` → after: `L2233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2233) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2233) · [Before (L2314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2314)

```diff
-           ...Fu.e,
+           ...NE.i,
```

#### 281. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2323-L2324` → after: `L2243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2243) · [Before (L2323-L2324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2323-L2324)

```diff
-           ...Jz.d,
-           ...vb.h,
+           ...hg.i,
```

#### 282. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2327` → after: `L2246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2246) · [Before (L2327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2327)

```diff
-           ...xz.h
+           ...vq.i
```

#### 283. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2333` → after: `L2252`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2252) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2252) · [Before (L2333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2333)

```diff
-           ...Fu.b,
+           ...NE.d,
```

#### 284. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2344` → after: `L2264`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2264) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2264) · [Before (L2344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2344)

```diff
-           ...Fu.d,
+           ...NE.g,
```

#### 285. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2350` → after: `L2270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2270) · [Before (L2350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2350)

```diff
-           ...vb.l,
+           ...hg.m,
```

#### 286. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2360-L2362` → after: `L2280-L2282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2280-L2282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2280-L2282) · [Before (L2360-L2362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2360-L2362)

```diff
-       (0, Mz.g)(Rz.k), (0, nz.l)(Sb.feed), (0, Jz.h)(), Iu || (Iu = !0, (0, Rz.i)(Pz.l, (zz => {
-         const uz = (0, az.i)(Pz.l, zz);
-         "string" === typeof uz && Promise.resolve().then((() => bz(3398))).then((zz => {
+       (0, xq.h)(Vq.o), (0, lq.m)(PY.feed), (0, hq.e)(), IE || (IE = !0, (0, Vq.l)(Zq.i, (qq => {
+         const Eq = (0, Mq.d)(Zq.i, qq);
+         "string" === typeof Eq && Promise.resolve().then((() => gq(3514))).then((qq => {
```

#### 287. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2368-L2373` → after: `L2288-L2293`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2288-L2293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2288-L2293) · [Before (L2368-L2373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2368-L2373)

```diff
-       })), (0, Rz.i)(Pz.gb, (zz => {
-         const uz = (0, az.i)(Pz.gb, zz);
-         "number" === typeof uz && Hz.k.sK("serverUpdating", Date.now() + uz, !0)
-       })), (0, Rz.i)(Pz.F, (zz => {
-         const uz = (0, az.i)(Pz.F, zz);
-         if ((0, az.e)(uz)) {
+       })), (0, Vq.l)(Zq.W, (qq => {
+         const Eq = (0, Mq.d)(Zq.W, qq);
+         "number" === typeof Eq && cq.i.TV("serverUpdating", Date.now() + Eq, !0)
+       })), (0, Vq.l)(Zq.z, (qq => {
+         const Eq = (0, Mq.d)(Zq.z, qq);
+         if ((0, Mq.b)(Eq)) {
```

#### 288. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2375-L2376` → after: `L2295-L2296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2295-L2296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2295-L2296) · [Before (L2375-L2376)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2375-L2376)

```diff
-             zz: zz,
-             bz: bz
+             Oq: qq,
+             mq: gq
```

#### 289. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2378-L2380` → after: `L2298-L2300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2298-L2300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2298-L2300) · [Before (L2378-L2380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2378-L2380)

```diff
-           (0, Wu.c)({
-             zz: "string" === typeof zz ? zz : null,
-             bz: "string" === typeof bz ? bz : null
+           (0, wE.d)({
+             Oq: "string" === typeof qq ? qq : null,
+             mq: "string" === typeof gq ? gq : null
```

#### 290. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2383-L2387` → after: `L2303-L2307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2303) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2303-L2307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2303-L2307) · [Before (L2383-L2387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2383-L2387)

```diff
-       })), (0, Rz.i)(Oz.Wb.NewUiRequest, (zz => {
-         const uz = (0, az.l)(zz);
-         (0, az.e)(uz) && "number" === typeof uz.id && (0, az.e)(uz.clientParameters) && (0, eu.e)(uz.id, uz.clientParameters)
-       })), (0, Rz.i)(Pz.Z, (zz => {
-         const uz = (0, az.i)(Pz.Z, zz);
+       })), (0, Vq.l)(uq.ec.NewUiRequest, (qq => {
+         const Eq = (0, Mq.e)(qq);
+         (0, Mq.b)(Eq) && "number" === typeof Eq.id && (0, Mq.b)(Eq.clientParameters) && (0, KE.f)(Eq.id, Eq.clientParameters)
+       })), (0, Vq.l)(Zq.Q, (qq => {
+         const Eq = (0, Mq.d)(Zq.Q, qq);
```

#### 291. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2389-L2391` → after: `L2309-L2311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2309-L2311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2309-L2311) · [Before (L2389-L2391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2389-L2391)

```diff
-       })), (0, Rz.h)(eu.c), (0, Rz.i)(Oz.Wb.UiRequestPopup, (zz => {
-         const uz = (0, az.l)(zz);
-         if ((0, az.e)(uz) && "number" === typeof uz.id && "string" === typeof uz.text) {
+       })), (0, Vq.h)(KE.e), (0, Vq.l)(uq.ec.UiRequestPopup, (qq => {
+         const Eq = (0, Mq.e)(qq);
+         if ((0, Mq.b)(Eq) && "number" === typeof Eq.id && "string" === typeof Eq.text) {
```

#### 292. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2393` → after: `L2313`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2313) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2313)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2313) · [Before (L2393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2393)

```diff
-           (0, eu.m)(zz, uz.text, (uz => {
+           (0, KE.l)(qq, Eq.text, (Eq => {
```

#### 293. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2396` → after: `L2316`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2316) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2316) · [Before (L2396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2396)

```diff
-               Vl: uz
+               xu: Eq
```

#### 294. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2400-L2405` → after: `L2320-L2325`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2320) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2320-L2325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2320-L2325) · [Before (L2400-L2405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2400-L2405)

```diff
-       })), (0, Rz.i)(Oz.Wb.TopRightHelper, (zz => {
-         const uz = (0, az.l)(zz);
-         void 0 !== uz && Hz.k.sK("TopRightHelper", uz, !0)
-       })), (0, Rz.i)(Oz.Wb.TaskProgress, (zz => {
-         const uz = (0, az.l)(zz);
-         (0, az.e)(uz) && "string" === typeof uz.taskId && "number" === typeof uz.progress && (0, Qu.b)({
+       })), (0, Vq.l)(uq.ec.TopRightHelper, (qq => {
+         const Eq = (0, Mq.e)(qq);
+         void 0 !== Eq && cq.i.TV("TopRightHelper", Eq, !0)
+       })), (0, Vq.l)(uq.ec.TaskProgress, (qq => {
+         const Eq = (0, Mq.e)(qq);
+         (0, Mq.b)(Eq) && "string" === typeof Eq.taskId && "number" === typeof Eq.progress && (0, XE.c)({
```

#### 295. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2409-L2413` → after: `L2329-L2333`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2329) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2329-L2333)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2329-L2333) · [Before (L2409-L2413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2409-L2413)

```diff
-       }))), fb || (fb = !0, (0, Rz.i)(Pz.q, (zz => {
-         const uz = (0, az.i)(Pz.q, zz);
-         (0, az.e)(uz) && Hz.k.sK("showShopFromServer", {
-           toggle: uz.Ru,
-           Ku: uz.Ku
+       }))), Qg || (Qg = !0, (0, Vq.l)(Zq.s, (qq => {
+         const Eq = (0, Mq.d)(Zq.s, qq);
+         (0, Mq.b)(Eq) && cq.i.TV("showShopFromServer", {
+           toggle: Eq.Jg,
+           kg: Eq.kg
```

#### 296. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2415-L2419` → after: `L2335-L2339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2335-L2339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2335-L2339) · [Before (L2415-L2419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2415-L2419)

```diff
-       })), (0, Rz.i)(Oz.Wb.OverShopInfo, (zz => {
-         const uz = (0, az.l)(zz);
-         (0, az.e)(uz) && Hz.k.sK("overShopInfo", uz.info, !0)
-       })), (0, Rz.i)(Oz.Wb.ShowShopTutorial, (() => {
-         Hz.k.sK("showShopTutorial", null, !0)
+       })), (0, Vq.l)(uq.ec.OverShopInfo, (qq => {
+         const Eq = (0, Mq.e)(qq);
+         (0, Mq.b)(Eq) && cq.i.TV("overShopInfo", Eq.info, !0)
+       })), (0, Vq.l)(uq.ec.ShowShopTutorial, (() => {
+         cq.i.TV("showShopTutorial", null, !0)
```

#### 297. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2422-L2429` → after: `L2342-L2349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2342) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2342-L2349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2342-L2349) · [Before (L2422-L2429)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2422-L2429)

```diff
-         (0, db.G)(), null === (zz = wb) || void 0 === zz || zz(), wb = (0, Rz.b)() ? (0, Zb.f)(Rz.b) : null
-       })), (0, Rz.i)(Oz.Wb.SetCookie, (zz => {
-         const uz = (0, az.l)(zz),
-           bz = (0, au.b)().gameNameWithVariation;
-         (0, az.e)(uz) && "string" === typeof uz.key && null !== bz && (0, Fb.setCookie)(bz, uz.key, uz.value)
-       })), (0, Rz.i)(Oz.Wb.LeaveValues, (zz => {
-         const uz = (0, az.l)(zz);
-         if ((0, az.e)(uz) && "string" === typeof uz.leaveEventType) {
+         (0, ag.H)(), null === (qq = og) || void 0 === qq || qq(), og = (0, Vq.b)() ? (0, dg.h)(Vq.b) : null
+       })), (0, Vq.l)(uq.ec.SetCookie, (qq => {
+         const Eq = (0, Mq.e)(qq),
+           gq = (0, TE.e)().gameNameWithVariation;
+         (0, Mq.b)(Eq) && "string" === typeof Eq.key && null !== gq && (0, Vg.setCookie)(gq, Eq.key, Eq.value)
+       })), (0, Vq.l)(uq.ec.LeaveValues, (qq => {
+         const Eq = (0, Mq.e)(qq);
+         if ((0, Mq.b)(Eq) && "string" === typeof Eq.leaveEventType) {
```

#### 298. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2436` → after: `L2356`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2356) · [Before (L2436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2436)

```diff
-           (0, db.J)({
+           (0, ag.L)({
```

#### 299. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2443-L2445` → after: `L2363-L2365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2363-L2365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2363-L2365) · [Before (L2443-L2445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2443-L2445)

```diff
-       })), (0, Rz.i)(Oz.Wb.CustomAnalyticsEvent, (zz => {
-         const uz = (0, az.l)(zz);
-         if ((0, az.e)(uz) && "string" === typeof uz.cat1) {
+       })), (0, Vq.l)(uq.ec.CustomAnalyticsEvent, (qq => {
+         const Eq = (0, Mq.e)(qq);
+         if ((0, Mq.b)(Eq) && "string" === typeof Eq.cat1) {
```

#### 300. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2459-L2461` → after: `L2379-L2381`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2379-L2381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2379-L2381) · [Before (L2459-L2461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2459-L2461)

```diff
-       })), (0, Rz.i)(Oz.Wb.ProgressionEvent, (zz => {
-         const uz = (0, az.l)(zz);
-         if ((0, az.e)(uz)) {
+       })), (0, Vq.l)(uq.ec.ProgressionEvent, (qq => {
+         const Eq = (0, Mq.e)(qq);
+         if ((0, Mq.b)(Eq)) {
```

#### 301. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2469` → after: `L2389`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2389)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2389) · [Before (L2469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2469)

```diff
-           (0, db.A)({
+           (0, ag.y)({
```

#### 302. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2477-L2479` → after: `L2397-L2399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2397-L2399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2397-L2399) · [Before (L2477-L2479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2477-L2479)

```diff
-       })), (0, Rz.i)(Oz.Wb.ResourceEvent, (zz => {
-         const uz = (0, az.l)(zz);
-         if ((0, az.e)(uz)) {
+       })), (0, Vq.l)(uq.ec.ResourceEvent, (qq => {
+         const Eq = (0, Mq.e)(qq);
+         if ((0, Mq.b)(Eq)) {
```

#### 303. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2487` → after: `L2407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2407) · [Before (L2487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2487)

```diff
-           (0, db.B)({
+           (0, ag.C)({
```

#### 304. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2495-L2497` → after: `L2415-L2417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2415-L2417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2415-L2417) · [Before (L2495-L2497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2495-L2497)

```diff
-       })), (0, Rz.i)(Oz.Wb.LeaderboardResponse, (zz => {
-         const uz = (0, az.l)(zz);
-         if ((0, az.e)(uz)) {
+       })), (0, Vq.l)(uq.ec.LeaderboardResponse, (qq => {
+         const Eq = (0, Mq.e)(qq);
+         if ((0, Mq.b)(Eq)) {
```

#### 305. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2503` → after: `L2423`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2423) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2423)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2423) · [Before (L2503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2503)

```diff
-           Hz.k.sK("leaderboardResponse", {
+           cq.i.TV("leaderboardResponse", {
```

#### 306. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2509-L2516` → after: `L2429-L2436`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2429) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2429-L2436)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2429-L2436) · [Before (L2509-L2516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2509-L2516)

```diff
-       })), (0, Rz.i)(Pz.y, (zz => {
-         const uz = (0, az.i)(Pz.y, zz);
-         "string" === typeof uz && (0, Rb.b)(zz.conn, uz)
-       })), (0, Rz.i)(Pz.B, (zz => {
-         const uz = (0, az.i)(Pz.B, zz);
-         "string" === typeof uz && console.error(`[logErrorToConsole]: ${uz}`)
-       }))), hz(), (0, vb.c)(), mu || (mu = !0, (0, Rz.i)(Pz.h, (zz => {
-         const uz = (0, az.i)(Pz.h, zz);
+       })), (0, Vq.l)(Zq.v, (qq => {
+         const Eq = (0, Mq.d)(Zq.v, qq);
+         "string" === typeof Eq && (0, jg.c)(qq.conn, Eq)
+       })), (0, Vq.l)(Zq.w, (qq => {
+         const Eq = (0, Mq.d)(Zq.w, qq);
+         "string" === typeof Eq && console.error(`[logErrorToConsole]: ${Eq}`)
+       }))), pq(), (0, hg.e)(), SE || (SE = !0, (0, Vq.l)(Zq.h, (qq => {
+         const Eq = (0, Mq.d)(Zq.h, qq);
```

#### 307. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2521` → after: `L2441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2441) · [Before (L2521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2521)

```diff
-           setChunkAddDistance: Vb.f
+           setChunkAddDistance: Sg.k
```

#### 308. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2523` → after: `L2443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2443) · [Before (L2523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2523)

```diff
-         queries: qb.wasmIconQueries,
+         queries: aY,
```

#### 309. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2526-L2527` → after: `L2446-L2447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2446-L2447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2446-L2447) · [Before (L2526-L2527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2526-L2527)

```diff
-           ...qb.wasmIconLookups,
-           Kr: Vb.d,
+           ...VY,
+           Gy: Sg.e,
```

#### 310. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2530` → after: `L2450-L2479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2450-L2479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2450-L2479) · [Before (L2530)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2530)

```diff
-       }), (0, ab.c)(), (0, qb.loadIcons)()
+       }), (0, zg.d)(), mY()
+     }
+   },
+   40470: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       d: () => uq,
+       f: () => Aq,
+       j: () => xq,
+       k: () => cq
+     });
+     var Yq = gq(1914);
+     let lq = null,
+       Oq = 0;
+     const mq = new Set;
+ 
+     function xq() {
+ ... (14 more added lines; see GitHub link above)
```

#### 311. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2533` → after: `L2482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2482) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2482) · [Before (L2533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2533)

```diff
-   39922: (zz, uz, bz) => {
+   40476: (qq, Eq, gq) => {
```

#### 312. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2536` → after: `L2485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2485) · [Before (L2536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2536)

```diff
-       g: () => Mz
+       f: () => xq
```

#### 313. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2538` → after: `L2487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2487) · [Before (L2538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2538)

```diff
-     var Ez = bz(39925);
+     var Yq = gq(40479);
```

#### 314. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2543` → after: `L2492`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2492) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2492)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2492) · [Before (L2543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2543)

```diff
-       return nz ??= bz.e(58).then((() => bz(41849))).catch((zz => {
+       return lq ??= gq.e(59).then((() => gq(42392))).catch((qq => {
```

#### 315. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2549` → after: `L2498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2498) · [Before (L2549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2549)

```diff
-       return iz ??= Promise.all([lz(), (0, Ez.f)()]).then((zz => {
+       return Oq ??= Promise.all([mq(), (0, Yq.c)()]).then((qq => {
```

#### 316. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2557` → after: `L2506`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2506) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2506)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2506) · [Before (L2557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2557)

```diff
-   36491: (zz, uz, bz) => {
+   37111: (qq, Eq, gq) => {
```

#### 317. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2559` → after: `L2508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2508) · [Before (L2559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2559)

```diff
-       b: () => Ez
+       d: () => Yq
```

#### 318. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2721` → after: `L2670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2670) · [Before (L2721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2721)

```diff
-   36297: (zz, uz, bz) => {
+   36912: (qq, Eq, gq) => {
```

#### 319. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2723` → after: `L2672-L2673`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2672-L2673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2672-L2673) · [Before (L2723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2723)

```diff
-       e: () => nz,
+       c: () => lq,
+       f: () => Oq,
```

#### 320. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2726` → after: `L2677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2677) · [Before (L2726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2726)

```diff
-       m: () => Mz,
+       n: () => cq,
```

#### 321. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2728-L2731` → after: `L2679-L2680`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2679-L2680)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2679-L2680) · [Before (L2728-L2731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2728-L2731)

```diff
-       s: () => Hz,
-       t: () => pz,
-       v: () => Oz,
-       z: () => lz
+       q: () => uq,
+       t: () => mq
```

#### 322. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2742` → after: `L2691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2691) · [Before (L2742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2742)

```diff
-       return "lobby" === zz.kind ? `lobby:${zz.path}` : `codeBlock:${zz.pos[0]},${zz.pos[1]},${zz.pos[2]}`
+       return "lobby" === qq.kind ? `lobby:${qq.path}` : `codeBlock:${qq.pos[0]},${qq.pos[1]},${qq.pos[2]}`
```

#### 323. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2748` → after: `L2697`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2697) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2697)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2697) · [Before (L2748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2748)

```diff
-         path: Ez.i
+         path: Yq.j
```

#### 324. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2787` → after: `L2736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2736) · [Before (L2787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2787)

```diff
-   38407: (zz, uz, bz) => {
+   38976: (qq, Eq, gq) => {
```

#### 325. `bundles/preprod.bloxd.io/chunks/js/playGameSources.js` (Changed code · before: `L2790` → after: `L2739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3dR2739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-8666e74c8c4a1fff2c39b66897aaea5d15967857de9d20164a0664364ddd8e3d) · [After (L2739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2739) · [Before (L2790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/playGameSources.js#L2790)

```diff
-       e: () => nz
+       c: () => lq
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (121 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf)

#### 1. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L4)

```diff
-   4439: (zz, uz, bz) => {
+   4516: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L6)

```diff
-       c: () => Oz
+       d: () => uq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L8-L11` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L8-L11) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L8-L11)

```diff
-     var Ez = bz(20),
-       nz = bz(22),
-       iz = bz(1269),
-       lz = bz(2689);
+     var Yq = gq(24),
+       lq = gq(31),
+       Oq = gq(1274),
+       mq = gq(2733);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L16` → after: `L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L16) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L16)

```diff
-       return "visible" === document.visibilityState && "inGame" === Ez.e.get("gameState") && (0, iz.q)()
+       return "visible" === document.visibilityState && "inGame" === Yq.b.get("gameState") && (0, Oq.p)()
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L20` → after: `L20`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR20) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L20) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L20)

```diff
-       (0, lz.q)() || function(zz, uz, bz) {
+       (0, mq.v)() || function(qq, Eq, gq) {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L27` → after: `L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L27) · [Before (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L27)

```diff
-           zz(`saved for the player after ${Mz/1e3} s of play`), (0, lz.y)(), nz.k.sK("chat", {
+           qq(`saved for the player after ${xq/1e3} s of play`), (0, mq.C)(), lq.i.TV("chat", {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L39` → after: `L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR39) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L39) · [Before (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L39)

```diff
-   4430: (zz, uz, bz) => {
+   4511: (qq, Eq, gq) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L46-L48` → after: `L46-L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR46) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L46-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L46-L48) · [Before (L46-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L46-L48)

```diff
-     var Ez = bz(1761),
-       nz = bz(4439),
-       iz = bz(2689);
+     var Yq = gq(1789),
+       lq = gq(4516),
+       Oq = gq(2733);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L65-L66` → after: `L65-L66`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L65-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L65-L66) · [Before (L65-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L65-L66)

```diff
-         return uz + (1 === (22 >>> zz & 1) ? 4 - bz : bz) & 3
-       }(nz, tz(Ez), uz), lz = nz >>> 1, [Oz, pz] = Hz(bz), dz = 1 === iz || 2 === iz ? Oz : 0, Fz = iz >= 2 ? pz : 0, Zz = [63 & bz, bz >>> 6 & 63, bz >>> 12 & 63];
+         return Eq + (1 === (22 >>> qq & 1) ? 4 - gq : gq) & 3
+       }(lq, Aq(Yq), Eq), mq = lq >>> 1, [uq, Bq] = cq(gq), Wq = 1 === Oq || 2 === Oq ? uq : 0, Nq = Oq >= 2 ? Bq : 0, aq = [63 & gq, gq >>> 6 & 63, gq >>> 12 & 63];
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L89` → after: `L89`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L89) · [Before (L89)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L89)

```diff
-         iz.push(lz === uz ? `[${bz}]` : bz)
+         Oq.push(mq === Eq ? `[${gq}]` : gq)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L185` → after: `L185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L185) · [Before (L185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L185)

```diff
-       return null === zz.name ? `#${zz.id}` : `#${zz.id} ${zz.name}`
+       return null === qq.name ? `#${qq.id}` : `#${qq.id} ${qq.name}`
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L207` → after: `L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L207) · [Before (L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L207)

```diff
-         this.print = zz, this.now = uz, this.shown = 0, this.yM = 0, this.sections = 0, this.second = -1 / 0, this.inSecond = 0, this.MZ = [], this.dropped = 0
+         this.print = qq, this.now = Eq, this.shown = 0, this.Fc = 0, this.sections = 0, this.second = -1 / 0, this.inSecond = 0, this.jN = [], this.dropped = 0
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L211-L212` → after: `L211-L212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L211-L212) · [Before (L211-L212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L211-L212)

```diff
-         if (uz - this.second >= 1e3 && (this.second = uz, this.inSecond = 0), this.shown >= 400 || this.inSecond >= 20) return this.yM++, void this.store(zz);
-         this.shown++, this.inSecond++, this.print(400 === this.shown ? `${zz} (the last line here: the rest go to bloxdDebug.save())` : zz)
+         if (Eq - this.second >= 1e3 && (this.second = Eq, this.inSecond = 0), this.shown >= 400 || this.inSecond >= 20) return this.Fc++, void this.store(qq);
+         this.shown++, this.inSecond++, this.print(400 === this.shown ? `${qq} (the last line here: the rest go to bloxdDebug.save())` : qq)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L218` → after: `L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L218) · [Before (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L218)

```diff
-         this.MZ.push(`${new Date(Date.now()).toISOString()} ${zz}`), this.MZ.length > 2e4 && (this.MZ.shift(), this.dropped++)
+         this.jN.push(`${new Date(Date.now()).toISOString()} ${qq}`), this.jN.length > 2e4 && (this.jN.shift(), this.dropped++)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L221` → after: `L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L221) · [Before (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L221)

```diff
-         return [`${this.shown} lines logged (above); kept here: ${this.yM} lines past the console's budget, ${this.sections} sections; ${this.dropped} oldest dropped`, ...this.MZ].join("\n")
+         return [`${this.shown} lines logged (above); kept here: ${this.Fc} lines past the console's budget, ${this.sections} sections; ${this.dropped} oldest dropped`, ...this.jN].join("\n")
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L229` → after: `L229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L229) · [Before (L229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L229)

```diff
-           (0, iz.i)("render", zz)
+           (0, Oq.m)("render", qq)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L231` → after: `L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L231) · [Before (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L231)

```diff
-         (0, iz.f)("render", (() => zz.dump())), Uz = zz
+         (0, Oq.j)("render", (() => qq.dump())), Gq = qq
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L246` → after: `L246`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L246) · [Before (L246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L246)

```diff
-       return zz.length <= uz ? zz : `${zz.slice(0,uz)}... (${zz.length-uz} more characters)`
+       return qq.length <= Eq ? qq : `${qq.slice(0,Eq)}... (${qq.length-Eq} more characters)`
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L257` → after: `L257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L257) · [Before (L257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L257)

```diff
-           al: nz,
+           zV: lq,
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L282` → after: `L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L282) · [Before (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L282)

```diff
-             }), uz.push(`@${nz} buf#${qz(Ez)} +${iz} stride ${lz} ${Mz}x0x${tz.toString(16)}${Hz?" int":""} div ${Oz}`)
+             }), Eq.push(`@${lq} buf#${Sq(Yq)} +${Oq} stride ${mq} ${xq}x0x${Aq.toString(16)}${cq?" int":""} div ${uq}`)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L296` → after: `L296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L296) · [Before (L296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L296)

```diff
-               iz = Ez ? `+${Ez.offset}` : nz ? Array.from(nz).slice(0, 3).join(",") : "?";
+               Oq = Yq ? `+${Yq.offset}` : lq ? Array.from(lq).slice(0, 3).join(",") : "?";
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L315` → after: `L315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR315) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L315) · [Before (L315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L315)

```diff
-             const Hz = Math.min(nz, vz, Nz - (null !== tz && void 0 !== tz ? tz : 0));
+             const cq = Math.min(lq, rq, tq - (null !== Aq && void 0 !== Aq ? Aq : 0));
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L345` → after: `L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR345) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L345) · [Before (L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L345)

```diff
-             lz.parts.set(iz, (null !== tz && void 0 !== tz ? tz : 0) + Hz);
+             mq.parts.set(Oq, (null !== Aq && void 0 !== Aq ? Aq : 0) + cq);
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L350` → after: `L350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L350) · [Before (L350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L350)

```diff
-               Zz && (lz.fed.records++, bz.some(((zz, bz) => zz !== uz[bz])) && (lz.fed.differing++, lz.fed.first.length < 8 && lz.fed.first.push(`part ${iz} instance ${Rz}: fed ${bz.map(nu).join(" ")} buffer ${uz.map(nu).join(" ")}`)));
+               aq && (mq.fed.records++, gq.some(((qq, gq) => qq !== Eq[gq])) && (mq.fed.differing++, mq.fed.first.length < 8 && mq.fed.first.push(`part ${Oq} instance ${Vq}: fed ${gq.map(lE).join(" ")} buffer ${Eq.map(lE).join(" ")}`)));
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L396` → after: `L396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L396) · [Before (L396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L396)

```diff
-                 iz.parts.set(nz[bz + 3], (null !== (dz = iz.parts.get(nz[bz + 3])) && void 0 !== dz ? dz : 0) + (zz % 6 === 0 ? 1 : 0)), iz.vertices.push({
+                 Oq.parts.set(lq[gq + 3], (null !== (Wq = Oq.parts.get(lq[gq + 3])) && void 0 !== Wq ? Wq : 0) + (qq % 6 === 0 ? 1 : 0)), Oq.vertices.push({
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L407` → after: `L407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L407) · [Before (L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L407)

```diff
-         gz(`decode probe failed on program ${Tz(bz)}: ${String(Oz)}`)
+         Jq(`decode probe failed on program ${bq(gq)}: ${String(uq)}`)
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L416` → after: `L416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L416) · [Before (L416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L416)

```diff
-           return Wz(zz, uz.vertex, uz.fragment, Kz, `program ${Tz(uz)}'s twin`)
+           return sq(qq, Eq.vertex, Eq.fragment, dq, `program ${bq(Eq)}'s twin`)
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L433` → after: `L433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR433) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L433) · [Before (L433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L433)

```diff
-       return zz.getProgramParameter(lz, Rz.LINK_STATUS) ? lz : (gz(`decode probe: ${nz} failed to link: ${yz(null!==(Mz=zz.getProgramInfoLog(lz))&&void 0!==Mz?Mz:"",300)}`), zz.deleteProgram(lz), null)
+       return qq.getProgramParameter(mq, Vq.LINK_STATUS) ? mq : (Jq(`decode probe: ${lq} failed to link: ${Rq(null!==(xq=qq.getProgramInfoLog(mq))&&void 0!==xq?xq:"",300)}`), qq.deleteProgram(mq), null)
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L452` → after: `L452`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L452) · [Before (L452)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L452)

```diff
-           const lz = Ez.size > 1 ? `${nz}[${iz}]` : Ez.name,
+           const mq = Yq.size > 1 ? `${lq}[${Oq}]` : Yq.name,
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L507` → after: `L507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L507) · [Before (L507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L507)

```diff
-         iz !== Rz.NO_ERROR && gz(`GL error 0x${iz.toString(16)} pending before the decode probe (the renderer's)`), zz.useProgram(uz), zz.bindTransformFeedback(Rz.TRANSFORM_FEEDBACK, Oz), zz.bindBuffer(Rz.TRANSFORM_FEEDBACK_BUFFER, pz), zz.bufferData(Rz.TRANSFORM_FEEDBACK_BUFFER, … [truncated]
+         Oq !== Vq.NO_ERROR && Jq(`GL error 0x${Oq.toString(16)} pending before the decode probe (the renderer's)`), qq.useProgram(Eq), qq.bindTransformFeedback(Vq.TRANSFORM_FEEDBACK, uq), qq.bindBuffer(Vq.TRANSFORM_FEEDBACK_BUFFER, Bq), qq.bufferData(Vq.TRANSFORM_FEEDBACK_BUFFER, … [truncated]
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L509` → after: `L509`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR509) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L509) · [Before (L509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L509)

```diff
-         if (lz !== Rz.NO_ERROR) return gz(`${nz}: GL error 0x${lz.toString(16)} on the feedback draw`), null;
+         if (mq !== Vq.NO_ERROR) return Jq(`${lq}: GL error 0x${mq.toString(16)} on the feedback draw`), null;
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L522` → after: `L522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L522) · [Before (L522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L522)

```diff
-     const Cz = `#version 300 es\nlayout(location = ${wz}) in uvec3 record;\nflat out uvec3 fed;\nvoid main() {\n\tfed = record;\n\tgl_Position = vec4(0.0);\n\tgl_PointSize = 1.0;\n}\n`,
+     const Iq = `#version 300 es\nlayout(location = ${jq}) in uvec3 record;\nflat out uvec3 fed;\nvoid main() {\n\tfed = record;\n\tgl_Position = vec4(0.0);\n\tgl_PointSize = 1.0;\n}\n`,
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L573` → after: `L573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR573) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L573) · [Before (L573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L573)

```diff
-       const iz = `${zz} ${uz.bytes.length} B cpu ${Fz(uz.bytes).toString(16)} gpu ${Fz(bz).toString(16)}, ${nz}/${Ez} blocks differ${uz.missed?`, ${uz.missed} GPU-side writes uncopied`:""}`;
+       const Oq = `${qq} ${Eq.bytes.length} B cpu ${Nq(Eq.bytes).toString(16)} gpu ${Nq(gq).toString(16)}, ${lq}/${Yq} blocks differ${Eq.missed?`, ${Eq.missed} GPU-side writes uncopied`:""}`;
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L589` → after: `L589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L589) · [Before (L589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L589)

```diff
-       return Sz([`${iz}: ${lz} bytes differ`, ...Mz.map((zz => `  +${zz}: cpu ${Zz(uz.bytes,zz)} | gpu ${Zz(bz,zz)}`))].join("\n")), `${iz}: ${lz} bytes differ, first at ${Mz.join(", ")} (context in the saved file)`
+       return kq([`${Oq}: ${mq} bytes differ`, ...xq.map((qq => `  +${qq}: cpu ${aq(Eq.bytes,qq)} | gpu ${aq(gq,qq)}`))].join("\n")), `${Oq}: ${mq} bytes differ, first at ${xq.join(", ")} (context in the saved file)`
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L593` → after: `L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L593) · [Before (L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L593)

```diff
-       if (0 === zz.vertices.length) return void gz(`decode probe (${zz.reason}): no terrain draw probed (${zz.draws.length} seen)`);
+       if (0 === qq.vertices.length) return void Jq(`decode probe (${qq.reason}): no terrain draw probed (${qq.draws.length} seen)`);
```

#### 36. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L633` → after: `L633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L633) · [Before (L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L633)

```diff
-               bz.byBand[Hz] = (null !== (nz = bz.byBand[Hz]) && void 0 !== nz ? nz : 0) + 1, bz.first.length < dz && bz.first.push({
+               gq.byBand[cq] = (null !== (lq = gq.byBand[cq]) && void 0 !== lq ? lq : 0) + 1, gq.first.length < Wq && gq.first.push({
```

#### 37. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L641` → after: `L641`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L641) · [Before (L641)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L641)

```diff
-         bz = uz.byDirection.map(((zz, uz) => zz ? `${lz[uz]} ${zz}` : "")).filter(Boolean).join(" "),
+         gq = Eq.byDirection.map(((qq, Eq) => qq ? `${mq[Eq]} ${qq}` : "")).filter(Boolean).join(" "),
```

#### 38. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L644` → after: `L644`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L644) · [Before (L644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L644)

```diff
-           return `${uz}: ${bz}`
+           return `${Eq}: ${gq}`
```

#### 39. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L646-L648` → after: `L646-L648`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L646-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L646-L648) · [Before (L646-L648)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L646-L648)

```diff
-       if (gz(`decode probe (${zz.reason}): ${uz.mismatches}/${uz.vertices} vertices differ from the CPU decode over ${zz.parts.size} parts, in the probe's own transform feedback draw (the frame's draws can still differ)` + (uz.mismatches ? ` by direction [${bz}] diagonal [0: ${uz … [truncated]
-         gz(`decode probe input: ${zz.fed.differing}/${zz.fed.records} instanced records the vertex input fed differ from the buffer's readback` + (zz.fed.differing ? " (H2: the GPU's vertex copy differs, unless the feed's own integer pass-through is the fault)" : "") + (zz.fed.fa … [truncated]
-         for (const uz of zz.fed.first) gz(`  ${uz}`)
+       if (Jq(`decode probe (${qq.reason}): ${Eq.mismatches}/${Eq.vertices} vertices differ from the CPU decode over ${qq.parts.size} parts, in the probe's own transform feedback draw (the frame's draws can still differ)` + (Eq.mismatches ? ` by direction [${gq}] diagonal [0: ${Eq … [truncated]
+         Jq(`decode probe input: ${qq.fed.differing}/${qq.fed.records} instanced records the vertex input fed differ from the buffer's readback` + (qq.fed.differing ? " (H2: the GPU's vertex copy differs, unless the feed's own integer pass-through is the fault)" : "") + (qq.fed.fa … [truncated]
+         for (const Eq of qq.fed.first) Jq(`  ${Eq}`)
```

#### 40. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L652` → after: `L652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L652) · [Before (L652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L652)

```diff
-         gz(`  mismatch part ${nz.group} r0 ${zz.toString(16)} r1 ${uz.toString(16)} r2 ${bz.toString(16)} slot ${nz.slot} (${lz[Mz(bz)]}): expected ${nz.expected.map(iu).join(",")} gpu ${nz.gpu.map(iu).join(",")}`)
+         Jq(`  mismatch part ${lq.group} r0 ${qq.toString(16)} r1 ${Eq.toString(16)} r2 ${gq.toString(16)} slot ${lq.slot} (${mq[xq(gq)]}): expected ${lq.expected.map(OE).join(",")} gpu ${lq.gpu.map(OE).join(",")}`)
```

#### 41. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L654` → after: `L654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L654) · [Before (L654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L654)

```diff
-       Sz(`decode probe translations: ${[...uz.translations].map((zz=>{let[uz,bz]=zz;return`${uz}: ${bz.map(iu).join(",")}`})).join("; ")}`)
+       kq(`decode probe translations: ${[...Eq.translations].map((qq=>{let[Eq,gq]=qq;return`${Eq}: ${gq.map(OE).join(",")}`})).join("; ")}`)
```

#### 42. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L687` → after: `L687`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR687) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L687) · [Before (L687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L687)

```diff
-                 gz(`draw ranges (${zz.reason}): ${zz.terrainDraws} terrain draws in the frame, the first ${zz.draws.length} here`);
+                 Jq(`draw ranges (${qq.reason}): ${qq.terrainDraws} terrain draws in the frame, the first ${qq.draws.length} here`);
```

#### 43. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L689` → after: `L689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L689) · [Before (L689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L689)

```diff
-                   const zz = uz.al.slice(0, 8).map((zz => {
+                   const qq = Eq.zV.slice(0, 8).map((qq => {
```

#### 44. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L691` → after: `L691`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L691) · [Before (L691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L691)

```diff
-                       return `${uz}+${bz}`
+                       return `${Eq}+${gq}`
```

#### 45. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L693-L694` → after: `L693-L694`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR693) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L693-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L693-L694) · [Before (L693-L694)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L693-L694)

```diff
-                     bz = uz.al.length > 8 ? ` (+${uz.al.length-8} ranges)` : "";
-                   gz(`  ${Tz(uz.program)} ${uz.program.terrain} ${uz.call} ${zz}${bz} x${uz.instances}${uz.group>=0?` part ${uz.group} chunk ${uz.chunk}`:""} | ${uz.attributes.join(" | ")}`)
+                     gq = Eq.zV.length > 8 ? ` (+${Eq.zV.length-8} ranges)` : "";
+                   Jq(`  ${bq(Eq.program)} ${Eq.program.terrain} ${Eq.call} ${qq}${gq} x${Eq.instances}${Eq.group>=0?` part ${Eq.group} chunk ${Eq.chunk}`:""} | ${Eq.attributes.join(" | ")}`)
```

#### 46. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L712` → after: `L712`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR712) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L712) · [Before (L712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L712)

```diff
-                     uz.push(`${nz.kind}#${qz(Ez)}: no CPU copy (${az.uncopied} pages over the copy budget)`);
+                     Eq.push(`${lq.kind}#${Sq(Yq)}: no CPU copy (${Mq.uncopied} pages over the copy budget)`);
```

#### 47. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L716` → after: `L716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L716) · [Before (L716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L716)

```diff
-                     uz.push(bu(`buf#${zz.id}`, zz, Bz(iz, nz.buffer, 0, zz.bytes.length)));
+                     Eq.push(gE(`buf#${qq.id}`, qq, Cq(Oq, lq.buffer, 0, qq.bytes.length)));
```

#### 48. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L721` → after: `L721`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L721) · [Before (L721)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L721)

```diff
-                   uz.push(bu(`tex#${zz.id} (${16===zz.texelBytes?"records":"light"})`, zz, lz))
+                   Eq.push(gE(`tex#${qq.id} (${16===qq.texelBytes?"records":"light"})`, qq, mq))
```

#### 49. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L723` → after: `L723`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR723) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L723) · [Before (L723)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L723)

```diff
-                 for (const Ez of uz) gz(`page readback ${Ez}`)
+                 for (const Yq of Eq) Jq(`page readback ${Yq}`)
```

#### 50. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L726` → after: `L726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L726) · [Before (L726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L726)

```diff
-               gz(`check failed: ${String(zz)}`)
+               Jq(`check failed: ${String(qq)}`)
```

#### 51. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L739` → after: `L739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L739) · [Before (L739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L739)

```diff
-     var Mu = bz(4448);
+     var xE = gq(4524);
```

#### 52. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L749` → after: `L749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L749) · [Before (L749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L749)

```diff
-         zz[uz] = nz, (0, Mu.y)(nz, Ez)
+         qq[Eq] = lq, (0, xE.B)(lq, Yq)
```

#### 53. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L787` → after: `L787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR787) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L787) · [Before (L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L787)

```diff
-         iz = bz ? bz * Ez : zz.byteLength - uz * Ez;
+         Oq = gq ? gq * Yq : qq.byteLength - Eq * Yq;
```

#### 54. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L845` → after: `L845`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR845) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L845) · [Before (L845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L845)

```diff
-           lz = null !== (uz = Zu.get(iz)) && void 0 !== uz ? uz : [];
+           mq = null !== (Eq = aE.get(Oq)) && void 0 !== Eq ? Eq : [];
```

#### 55. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L856` → after: `L856`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR856) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L856) · [Before (L856)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L856)

```diff
-               Ku.lost < tu && (Ku.lost++, gz(`${uz}${"statusMessage"in zz?`: ${String(zz.statusMessage)}`:""}`))
+               dE.lost < AE && (dE.lost++, Jq(`${Eq}${"statusMessage"in qq?`: ${String(qq.statusMessage)}`:""}`))
```

#### 56. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L860` → after: `L860`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR860) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L860) · [Before (L860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L860)

```diff
-           const iz = null !== (bz = Zu.get(uz)) && void 0 !== bz ? bz : [];
+           const Oq = null !== (gq = aE.get(Eq)) && void 0 !== gq ? gq : [];
```

#### 57. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L865-L866` → after: `L865-L866`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR865) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L865-L866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L865-L866) · [Before (L865-L866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L865-L866)

```diff
-             const zz = null !== (tz = Fu.get(Oz)) && void 0 !== tz ? tz : "";
-             /\bgl_Position\b/.test(zz) ? lz = zz : Mz = zz
+             const qq = null !== (Aq = NE.get(uq)) && void 0 !== Aq ? Aq : "";
+             /\bgl_Position\b/.test(qq) ? mq = qq : xq = qq
```

#### 58. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L870` → after: `L870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L870) · [Before (L870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L870)

```diff
-             name: null !== (Ez = null === (nz = Az.exec(lz)) || void 0 === nz ? void 0 : nz[1]) && void 0 !== Ez ? Ez : null,
+             name: null !== (Yq = null === (lq = nq.exec(mq)) || void 0 === lq ? void 0 : lq[1]) && void 0 !== Yq ? Yq : null,
```

#### 59. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L881` → after: `L881`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L881) · [Before (L881)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L881)

```diff
-               return null !== (bz = zz.getShaderInfoLog(uz)) && void 0 !== bz ? bz : ""
+               return null !== (gq = qq.getShaderInfoLog(Eq)) && void 0 !== gq ? gq : ""
```

#### 60. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L883` → after: `L883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L883) · [Before (L883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L883)

```diff
-             uz.length > 0 && Sz(`program ${Tz(Hz)} (${Hz.terrain}) shader logs:\n${yz(uz.join("\n"))}`)
+             Eq.length > 0 && kq(`program ${bq(cq)} (${cq.terrain}) shader logs:\n${Rq(Eq.join("\n"))}`)
```

#### 61. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L893` → after: `L893`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR893) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L893) · [Before (L893)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L893)

```diff
-             const uz = "number" === typeof bz[1] ? null : su(bz[1], null !== (iz = bz[3]) && void 0 !== iz ? iz : 0, null !== (lz = bz[4]) && void 0 !== lz ? lz : 0);
+             const Eq = "number" === typeof gq[1] ? null : PE(gq[1], null !== (Oq = gq[3]) && void 0 !== Oq ? Oq : 0, null !== (mq = gq[4]) && void 0 !== mq ? mq : 0);
```

#### 62. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L895` → after: `L895`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR895) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L895) · [Before (L895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L895)

```diff
-             if (Nu(zz, "number" === typeof bz[1] ? bz[1] : null !== (Mz = null === uz || void 0 === uz ? void 0 : uz.length) && void 0 !== Mz ? Mz : 0), uz) null === (tz = Pz.get(zz)) || void 0 === tz || tz.bytes.set(uz)
+             if (tE(qq, "number" === typeof gq[1] ? gq[1] : null !== (xq = null === Eq || void 0 === Eq ? void 0 : Eq.length) && void 0 !== xq ? xq : 0), Eq) null === (Aq = Zq.get(qq)) || void 0 === Aq || Aq.bytes.set(Eq)
```

#### 63. `bundles/preprod.bloxd.io/chunks/js/renderDebug.js` (Changed code · before: `L906` → after: `L906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecfR906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a57d90c57e28b30a407360ab2a1fe643a968c5dec2ef4b17d95bd92e994b6ecf) · [After (L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L906) · [Before (L906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/renderDebug.js#L906)

```diff
-             Ez = su(bz[2], null !== (iz = bz[3]) && void 0 !== iz ? iz : 0, null !== (lz = bz[4]) && void 0 !== lz ? lz : 0);
+             Yq = PE(gq[2], null !== (Oq = gq[3]) && void 0 !== Oq ? Oq : 0, null !== (mq = gq[4]) && void 0 !== mq ? mq : 0);
```
