# Changed — Bundle Modifications Report (Part 005 / 058)

- **Updated at**: `2026-11-21T00:46 JST`
- **Part**: `5 / 58` (**321** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 004](part-004.md) · [Part 006 →](part-006.md)

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/126.js` (ad2avs.90d9e4dd → bbb6l5.0244a119 · continued)

- **File**: `bundles/preprod.bloxd.io/chunks/js/126.js` (35 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b)

#### 3. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L6-L8` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/126.js#L6) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/126.js#L6-L8)

```diff
-       d: () => Ez.i,
-       f: () => nz,
-       g: () => Ez.q
+       b: () => mq
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L10` → after: `L8-L467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L8-L467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/126.js#L8-L467) · [Before (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/126.js#L10)

```diff
-     var Ez = bz(6307);
+     var Yq = gq(6473),
+       lq = gq(1070);
+     const Oq = {
+       strict: "shaderPack:variantStrict",
+       nonStrict: "shaderPack:variantNonStrict",
+       terrain: "shaderPack:variantTerrain",
+       liquid: "shaderPack:variantLiquid",
+       model: "shaderPack:variantModel"
+     };
+ 
+     function mq(qq) {
+       let {
+         diagnostics: Eq,
+         more: gq = 0,
+         t: mq
+       } = qq;
+ ... (444 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L16-L96` → after: `L473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/126.js#L473) · [Before (L16-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/126.js#L16-L96)

```diff
-   39648: (zz, uz, bz) => {
-     bz.d(uz, {
-       d: () => pz,
-       installListedShaderPack: () => Oz
-     });
-     var Ez = bz(6283),
-       nz = bz(6307),
-       iz = bz(1195),
-       lz = bz(6340),
-       Mz = bz(6331),
-       tz = bz(6379),
-       Hz = bz(6371);
-     async function Oz(zz) {
-       const uz = await (0, lz.loadPageShaderPackCompiler)();
-       if (null === uz) return {
-         kind: "failed",
- ... (65 more removed lines; see GitHub link above)
+   6531: (qq, Eq, gq) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L113-L118` → after: `L490-L495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L490-L495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/126.js#L490-L495) · [Before (L113-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/126.js#L113-L118)

```diff
-     var Ez = bz(6307),
-       nz = bz(6331),
-       iz = bz(33),
-       lz = bz(3198),
-       Mz = bz(6382),
-       tz = bz(6352);
+     var Yq = gq(6458),
+       lq = gq(6482),
+       Oq = gq(38),
+       mq = gq(3324),
+       xq = gq(6535),
+       Aq = gq(6514);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L125` → after: `L502`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR502) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/126.js#L502) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/126.js#L125)

```diff
-         files: (0, Ez.s)(zz.files),
+         files: (0, Yq.w)(qq.files),
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L151` → after: `L528`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L528)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/126.js#L528) · [Before (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/126.js#L151)

```diff
-       return Zz((async () => JSON.stringify(await (0, Mz.e)()) === JSON.stringify(zz) && (null === uz ? (await Xz(), !0) : wz(uz, bz))))
+       return aq((async () => JSON.stringify(await (0, xq.d)()) === JSON.stringify(qq) && (null === Eq ? (await Hq(), !0) : jq(Eq, gq))))
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L154` → after: `L531`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L531)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/126.js#L531) · [Before (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/126.js#L154)

```diff
-       const bz = await iz.d.setItem(Mz.d, zz);
+       const gq = await Oq.f.setItem(xq.b, qq);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L158` → after: `L535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/126.js#L535) · [Before (L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/126.js#L158)

```diff
-       await iz.d.removeItem(Mz.d), iz.g.removeItem(lz.b)
+       await Oq.f.removeItem(xq.b), Oq.i.removeItem(mq.c)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L195` → after: `L572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/126.js#L572) · [Before (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/126.js#L195)

```diff
-       iz.h.setItem(Hz, performance.timeOrigin)
+       Oq.k.setItem(cq, performance.timeOrigin)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L199-L207` → after: `L576-L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L576-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/126.js#L576-L584) · [Before (L199-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/126.js#L199-L207)

```diff
-       return iz.h.getItem(Hz) === performance.timeOrigin
-     }
- 
-     function vz(zz) {
-       return !(0, nz.g)(zz.manifest.apiVersion)
-     }
- 
-     function xz(zz) {
-       return Oz ??= zz.hA((0, tz.shaderPackTextures)()), Oz
+       return Oq.k.getItem(cq) === performance.timeOrigin
+     }
+ 
+     function rq(qq) {
+       return !(0, lq.e)(qq.manifest.apiVersion)
+     }
+ 
+     function vq(qq) {
+       return uq ??= qq.yJ((0, Aq.shaderPackTextures)()), uq
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L217` → after: `L594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR594) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/126.js#L594) · [Before (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/126.js#L217)

```diff
-         Lz(await (0, Mz.e)(!0), zz)
+         iq(await (0, xq.d)(!0), qq)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L223` → after: `L600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR600) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/126.js#L600) · [Before (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/126.js#L223)

```diff
-         iz.g.removeItem(lz.b)
+         Oq.i.removeItem(mq.c)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L228` → after: `L605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/126.js#L605) · [Before (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/126.js#L228)

```diff
-       sz(zz, uz) ? iz.g.setItem(lz.b, !0) : iz.g.removeItem(lz.b)
+       Pq(qq, Eq) ? Oq.i.setItem(mq.c, !0) : Oq.i.removeItem(mq.c)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L231` → after: `L608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/126.js#L608) · [Before (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/126.js#L231)

```diff
-   6352: (zz, uz, bz) => {
+   6514: (qq, Eq, gq) => {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L236` → after: `L613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/126.js#L613) · [Before (L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/126.js#L236)

```diff
-     var Ez = bz(6307);
+     var Yq = gq(6458);
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L241` → after: `L618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/126.js#L618) · [Before (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/126.js#L241)

```diff
-       return iz ??= Promise.all([bz.e(69), bz.e(198)]).then((() => bz(39645))).then((zz => {
+       return Oq ??= Promise.all([gq.e(70), gq.e(199)]).then((() => gq(40244))).then((qq => {
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L247` → after: `L624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/126.js#L624) · [Before (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/126.js#L247)

```diff
-         return nz ??= (0, Ez.m)(bz, iz, uz), nz
+         return lq ??= (0, Yq.j)(gq, Oq, Eq), lq
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L256` → after: `L633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR633) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/126.js#L633) · [Before (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/126.js#L256)

```diff
-   6371: (zz, uz, bz) => {
+   6526: (qq, Eq, gq) => {
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L258-L259` → after: `L635-L636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR635) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L635-L636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/126.js#L635-L636) · [Before (L258-L259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/126.js#L258-L259)

```diff
-       c: () => tz,
-       g: () => Mz
+       b: () => Aq,
+       e: () => xq
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L261-L263` → after: `L638-L640`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L638-L640)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/126.js#L638-L640) · [Before (L261-L263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/126.js#L261-L263)

```diff
-     var Ez = bz(6379),
-       nz = bz(6352),
-       iz = bz(115);
+     var Yq = gq(6531),
+       lq = gq(6514),
+       Oq = gq(118);
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L267-L268` → after: `L644-L645`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR644) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L644-L645)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/126.js#L644-L645) · [Before (L267-L268)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/126.js#L267-L268)

```diff
-       let Ez = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (bz = navigator.gpu) && void 0 !== bz ? bz : null;
-       const lz = zz.B_(uz, (0, nz.shaderPackTextures)());
+       let Yq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (gq = navigator.gpu) && void 0 !== gq ? gq : null;
+       const mq = qq.tqq(Eq, (0, lq.shaderPackTextures)());
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L273` → after: `L650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/126.js#L650) · [Before (L273)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/126.js#L273)

```diff
-           const uz = await (0, iz.w)(zz);
+           const Eq = await (0, Oq.v)(qq);
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L304` → after: `L681`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/126.js#L681) · [Before (L304)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/126.js#L304)

```diff
-         return tz ? null : Hz(zz, zz.tbz(uz.flat()), lz.offInStrict)
+         return Aq ? null : cq(qq, qq.aYq(Eq.flat()), mq.offInStrict)
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L319` → after: `L696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/126.js#L696) · [Before (L319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/126.js#L319)

```diff
-           validation: iz ? nz : {
+           validation: Oq ? lq : {
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L337` → after: `L714`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR714) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/126.js#L714) · [Before (L337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/126.js#L337)

```diff
-   6307: (zz, uz, bz) => {
+   6458: (qq, Eq, gq) => {
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L339-L345` → after: `L716-L722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L716-L722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/126.js#L716-L722) · [Before (L339-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/126.js#L339-L345)

```diff
-       c: () => lz,
-       e: () => iz,
-       i: () => Ez,
-       m: () => Zz,
-       n: () => Oz,
-       q: () => nz,
-       r: () => tz,
+       A: () => Bq,
+       d: () => mq,
+       f: () => Oq,
+       h: () => Yq,
+       j: () => aq,
+       k: () => uq,
+       o: () => lq,
```

#### 29. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L347` → after: `L724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/126.js#L724) · [Before (L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/126.js#L347)

```diff
-       u: () => pz
+       w: () => cq
```

#### 30. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L362` → after: `L739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/126.js#L739) · [Before (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/126.js#L362)

```diff
-         if ("string" !== typeof Ez) return `${bz} isn't text.`;
+         if ("string" !== typeof Yq) return `${gq} isn't text.`;
```

#### 31. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L371` → after: `L748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/126.js#L748) · [Before (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/126.js#L371)

```diff
-           if (zz.length > lz) return `The pack has more than ${lz} .wgsl files.`;
+           if (qq.length > mq) return `The pack has more than ${mq} .wgsl files.`;
```

#### 32. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L379` → after: `L756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/126.js#L756) · [Before (L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/126.js#L379)

```diff
-             if (uz.has(bz)) return `The pack has two files at ${bz}.`;
+             if (Eq.has(gq)) return `The pack has two files at ${gq}.`;
```

#### 33. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L382` → after: `L759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/126.js#L759) · [Before (L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/126.js#L382)

```diff
-           return pz(zz) > iz ? `The pack's .wgsl files are over ${iz/1024} KB in total.` : null
+           return Bq(qq) > Oq ? `The pack's .wgsl files are over ${Oq/1024} KB in total.` : null
```

#### 34. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L407-L410` → after: `L784-L787`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR784) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L784-L787)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/126.js#L784-L787) · [Before (L407-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/126.js#L407-L410)

```diff
-       if (!zz.toLowerCase().endsWith(".wgsl")) return `${zz} isn't a .wgsl file.`;
-       if (zz.length > Mz) return `A file path is over ${Mz} characters.`;
-       if (zz.includes("\\") || /[\u0000-\u001f]/.test(zz)) return `${zz} isn't a valid file path.`;
-       return zz.split("/").some((zz => "" === zz || "." === zz || ".." === zz)) ? `${zz} isn't a valid file path.` : null
+       if (!qq.toLowerCase().endsWith(".wgsl")) return `${qq} isn't a .wgsl file.`;
+       if (qq.length > xq) return `A file path is over ${xq} characters.`;
+       if (qq.includes("\\") || /[\u0000-\u001f]/.test(qq)) return `${qq} isn't a valid file path.`;
+       return qq.split("/").some((qq => "" === qq || "." === qq || ".." === qq)) ? `${qq} isn't a valid file path.` : null
```

#### 35. `bundles/preprod.bloxd.io/chunks/js/126.js` (Changed code · before: `L443` → after: `L820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47bR820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-955dc2b3fb0fee6525ee9a78ea3186556945bfb4c392c14dbdb9a3276559b47b) · [After (L820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/126.js#L820) · [Before (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/126.js#L443)

```diff
-           return (uz[bz]?.numAnimStates ?? 0) > 1 && !Mz.has(Ez) ? Ez : zz
+           return (Eq[gq]?.numAnimStates ?? 0) > 1 && !xq.has(Yq) ? Yq : qq
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/127.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/127.js` (28 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596)

#### 1. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/127.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/127.js#L2)

```diff
- export const ids = [127, 130];
+ export const ids = [127, 128, 131];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/127.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/127.js#L4)

```diff
-   6331: (zz, uz, bz) => {
+   6482: (qq, Eq, gq) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L6-L8` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/127.js#L6-L8) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/127.js#L6-L8)

```diff
-       d: () => Ez.i,
-       f: () => nz,
-       g: () => Ez.q
+       b: () => Yq.h,
+       c: () => lq,
+       e: () => Yq.o
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L10` → after: `L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/127.js#L10) · [Before (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/127.js#L10)

```diff
-     var Ez = bz(6307);
+     var Yq = gq(6458);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L16` → after: `L16-L96`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L16-L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/127.js#L16-L96) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/127.js#L16)

```diff
-   6379: (zz, uz, bz) => {
+   40249: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       c: () => Bq,
+       installListedShaderPack: () => uq
+     });
+     var Yq = gq(6424),
+       lq = gq(6458),
+       Oq = gq(1195),
+       mq = gq(6496),
+       xq = gq(6482),
+       Aq = gq(6531),
+       cq = gq(6526);
+     async function uq(qq) {
+       const Eq = await (0, mq.loadPageShaderPackCompiler)();
+       if (null === Eq) return {
+         kind: "failed",
+ ... (65 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L33-L38` → after: `L113-L118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L113-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/127.js#L113-L118) · [Before (L33-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/127.js#L33-L38)

```diff
-     var Ez = bz(6307),
-       nz = bz(6331),
-       iz = bz(33),
-       lz = bz(3198),
-       Mz = bz(6382),
-       tz = bz(6352);
+     var Yq = gq(6458),
+       lq = gq(6482),
+       Oq = gq(38),
+       mq = gq(3324),
+       xq = gq(6535),
+       Aq = gq(6514);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L45` → after: `L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/127.js#L125) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/127.js#L45)

```diff
-         files: (0, Ez.s)(zz.files),
+         files: (0, Yq.w)(qq.files),
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L71` → after: `L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/127.js#L151) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/127.js#L71)

```diff
-       return Zz((async () => JSON.stringify(await (0, Mz.e)()) === JSON.stringify(zz) && (null === uz ? (await Xz(), !0) : wz(uz, bz))))
+       return aq((async () => JSON.stringify(await (0, xq.d)()) === JSON.stringify(qq) && (null === Eq ? (await Hq(), !0) : jq(Eq, gq))))
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L74` → after: `L154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/127.js#L154) · [Before (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/127.js#L74)

```diff
-       const bz = await iz.d.setItem(Mz.d, zz);
+       const gq = await Oq.f.setItem(xq.b, qq);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L78` → after: `L158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/127.js#L158) · [Before (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/127.js#L78)

```diff
-       await iz.d.removeItem(Mz.d), iz.g.removeItem(lz.b)
+       await Oq.f.removeItem(xq.b), Oq.i.removeItem(mq.c)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L115` → after: `L195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/127.js#L195) · [Before (L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/127.js#L115)

```diff
-       iz.h.setItem(Hz, performance.timeOrigin)
+       Oq.k.setItem(cq, performance.timeOrigin)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L119-L127` → after: `L199-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L199-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/127.js#L199-L207) · [Before (L119-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/127.js#L119-L127)

```diff
-       return iz.h.getItem(Hz) === performance.timeOrigin
-     }
- 
-     function vz(zz) {
-       return !(0, nz.g)(zz.manifest.apiVersion)
-     }
- 
-     function xz(zz) {
-       return Oz ??= zz.hA((0, tz.shaderPackTextures)()), Oz
+       return Oq.k.getItem(cq) === performance.timeOrigin
+     }
+ 
+     function rq(qq) {
+       return !(0, lq.e)(qq.manifest.apiVersion)
+     }
+ 
+     function vq(qq) {
+       return uq ??= qq.yJ((0, Aq.shaderPackTextures)()), uq
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L137` → after: `L217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/127.js#L217) · [Before (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/127.js#L137)

```diff
-         Lz(await (0, Mz.e)(!0), zz)
+         iq(await (0, xq.d)(!0), qq)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L143` → after: `L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/127.js#L223) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/127.js#L143)

```diff
-         iz.g.removeItem(lz.b)
+         Oq.i.removeItem(mq.c)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L148` → after: `L228`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/127.js#L228) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/127.js#L148)

```diff
-       sz(zz, uz) ? iz.g.setItem(lz.b, !0) : iz.g.removeItem(lz.b)
+       Pq(qq, Eq) ? Oq.i.setItem(mq.c, !0) : Oq.i.removeItem(mq.c)
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L151` → after: `L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/127.js#L231) · [Before (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/127.js#L151)

```diff
-   6352: (zz, uz, bz) => {
+   6514: (qq, Eq, gq) => {
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L156` → after: `L236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/127.js#L236) · [Before (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/127.js#L156)

```diff
-     var Ez = bz(6307);
+     var Yq = gq(6458);
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L161` → after: `L241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/127.js#L241) · [Before (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/127.js#L161)

```diff
-       return iz ??= Promise.all([bz.e(69), bz.e(198)]).then((() => bz(39645))).then((zz => {
+       return Oq ??= Promise.all([gq.e(70), gq.e(199)]).then((() => gq(40244))).then((qq => {
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L167` → after: `L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/127.js#L247) · [Before (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/127.js#L167)

```diff
-         return nz ??= (0, Ez.m)(bz, iz, uz), nz
+         return lq ??= (0, Yq.j)(gq, Oq, Eq), lq
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L176` → after: `L256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/127.js#L256) · [Before (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/127.js#L176)

```diff
-   6307: (zz, uz, bz) => {
+   6526: (qq, Eq, gq) => {
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L178-L184` → after: `L258-L345`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L258-L345)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/127.js#L258-L345) · [Before (L178-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/127.js#L178-L184)

```diff
-       c: () => lz,
-       e: () => iz,
-       i: () => Ez,
-       m: () => Zz,
-       n: () => Oz,
-       q: () => nz,
-       r: () => tz,
+       b: () => Aq,
+       e: () => xq
+     });
+     var Yq = gq(6531),
+       lq = gq(6514),
+       Oq = gq(118);
+     const mq = 100;
+     async function xq(qq, Eq) {
+       var gq;
+       let Yq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (gq = navigator.gpu) && void 0 !== gq ? gq : null;
+       const mq = qq.tqq(Eq, (0, lq.shaderPackTextures)());
+       if (mq.errors.length > 0) return cq(qq, mq.errors, mq.offInStrict);
+       const xq = await async function(qq) {
+         if (!qq) return null;
+         try {
+           const Eq = await (0, Oq.v)(qq);
+ ... (72 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L186` → after: `L347`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R347) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/127.js#L347) · [Before (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/127.js#L186)

```diff
-       u: () => pz
+       w: () => cq
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L201` → after: `L362`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R362) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/127.js#L362) · [Before (L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/127.js#L201)

```diff
-         if ("string" !== typeof Ez) return `${bz} isn't text.`;
+         if ("string" !== typeof Yq) return `${gq} isn't text.`;
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L210` → after: `L371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/127.js#L371) · [Before (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/127.js#L210)

```diff
-           if (zz.length > lz) return `The pack has more than ${lz} .wgsl files.`;
+           if (qq.length > mq) return `The pack has more than ${mq} .wgsl files.`;
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L218` → after: `L379`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R379) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L379)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/127.js#L379) · [Before (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/127.js#L218)

```diff
-             if (uz.has(bz)) return `The pack has two files at ${bz}.`;
+             if (Eq.has(gq)) return `The pack has two files at ${gq}.`;
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L221` → after: `L382`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R382) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/127.js#L382) · [Before (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/127.js#L221)

```diff
-           return pz(zz) > iz ? `The pack's .wgsl files are over ${iz/1024} KB in total.` : null
+           return Bq(qq) > Oq ? `The pack's .wgsl files are over ${Oq/1024} KB in total.` : null
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L246-L249` → after: `L407-L410`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L407-L410)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/127.js#L407-L410) · [Before (L246-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/127.js#L246-L249)

```diff
-       if (!zz.toLowerCase().endsWith(".wgsl")) return `${zz} isn't a .wgsl file.`;
-       if (zz.length > Mz) return `A file path is over ${Mz} characters.`;
-       if (zz.includes("\\") || /[\u0000-\u001f]/.test(zz)) return `${zz} isn't a valid file path.`;
-       return zz.split("/").some((zz => "" === zz || "." === zz || ".." === zz)) ? `${zz} isn't a valid file path.` : null
+       if (!qq.toLowerCase().endsWith(".wgsl")) return `${qq} isn't a .wgsl file.`;
+       if (qq.length > xq) return `A file path is over ${xq} characters.`;
+       if (qq.includes("\\") || /[\u0000-\u001f]/.test(qq)) return `${qq} isn't a valid file path.`;
+       return qq.split("/").some((qq => "" === qq || "." === qq || ".." === qq)) ? `${qq} isn't a valid file path.` : null
```

#### 28. `bundles/preprod.bloxd.io/chunks/js/127.js` (Changed code · before: `L282` → after: `L443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596R443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-dedf8e0d03336d74bb3b6a5c8e88c9c64144923bd4c8dbfc4d48d40f2a82d596) · [After (L443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/127.js#L443) · [Before (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/127.js#L282)

```diff
-           return (uz[bz]?.numAnimStates ?? 0) > 1 && !Mz.has(Ez) ? Ez : zz
+           return (Eq[gq]?.numAnimStates ?? 0) > 1 && !xq.has(Yq) ? Yq : qq
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/128.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/128.js` (27 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc)

#### 1. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/128.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/128.js#L2)

```diff
- export const ids = [127, 128, 130];
+ export const ids = [128, 131];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/128.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/128.js#L4)

```diff
-   6331: (zz, uz, bz) => {
+   6482: (qq, Eq, gq) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L6-L8` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/128.js#L6-L8) · [Before (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/128.js#L6-L8)

```diff
-       d: () => Ez.i,
-       f: () => nz,
-       g: () => Ez.q
+       b: () => Yq.h,
+       c: () => lq,
+       e: () => Yq.o
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L10` → after: `L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/128.js#L10) · [Before (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/128.js#L10)

```diff
-     var Ez = bz(6307);
+     var Yq = gq(6458);
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L16` → after: `L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/128.js#L16) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/128.js#L16)

```diff
-   6379: (zz, uz, bz) => {
+   6531: (qq, Eq, gq) => {
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L33-L38` → after: `L33-L38`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L33-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/128.js#L33-L38) · [Before (L33-L38)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/128.js#L33-L38)

```diff
-     var Ez = bz(6307),
-       nz = bz(6331),
-       iz = bz(33),
-       lz = bz(3198),
-       Mz = bz(6382),
-       tz = bz(6352);
+     var Yq = gq(6458),
+       lq = gq(6482),
+       Oq = gq(38),
+       mq = gq(3324),
+       xq = gq(6535),
+       Aq = gq(6514);
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L45` → after: `L45`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/128.js#L45) · [Before (L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/128.js#L45)

```diff
-         files: (0, Ez.s)(zz.files),
+         files: (0, Yq.w)(qq.files),
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L71` → after: `L71`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR71) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/128.js#L71) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/128.js#L71)

```diff
-       return Zz((async () => JSON.stringify(await (0, Mz.e)()) === JSON.stringify(zz) && (null === uz ? (await Xz(), !0) : wz(uz, bz))))
+       return aq((async () => JSON.stringify(await (0, xq.d)()) === JSON.stringify(qq) && (null === Eq ? (await Hq(), !0) : jq(Eq, gq))))
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L74` → after: `L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR74) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/128.js#L74) · [Before (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/128.js#L74)

```diff
-       const bz = await iz.d.setItem(Mz.d, zz);
+       const gq = await Oq.f.setItem(xq.b, qq);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L78` → after: `L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/128.js#L78) · [Before (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/128.js#L78)

```diff
-       await iz.d.removeItem(Mz.d), iz.g.removeItem(lz.b)
+       await Oq.f.removeItem(xq.b), Oq.i.removeItem(mq.c)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L115-L127` → after: `L115-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L115-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/128.js#L115-L127) · [Before (L115-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/128.js#L115-L127)

```diff
-       iz.h.setItem(Hz, performance.timeOrigin)
-     }
- 
-     function Nz() {
-       return iz.h.getItem(Hz) === performance.timeOrigin
-     }
- 
-     function vz(zz) {
-       return !(0, nz.g)(zz.manifest.apiVersion)
-     }
- 
-     function xz(zz) {
-       return Oz ??= zz.hA((0, tz.shaderPackTextures)()), Oz
+       Oq.k.setItem(cq, performance.timeOrigin)
+     }
+ 
+     function tq() {
+       return Oq.k.getItem(cq) === performance.timeOrigin
+     }
+ 
+     function rq(qq) {
+       return !(0, lq.e)(qq.manifest.apiVersion)
+     }
+ 
+     function vq(qq) {
+       return uq ??= qq.yJ((0, Aq.shaderPackTextures)()), uq
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L137` → after: `L137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/128.js#L137) · [Before (L137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/128.js#L137)

```diff
-         Lz(await (0, Mz.e)(!0), zz)
+         iq(await (0, xq.d)(!0), qq)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L143` → after: `L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/128.js#L143) · [Before (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/128.js#L143)

```diff
-         iz.g.removeItem(lz.b)
+         Oq.i.removeItem(mq.c)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L148` → after: `L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR148) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/128.js#L148) · [Before (L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/128.js#L148)

```diff
-       sz(zz, uz) ? iz.g.setItem(lz.b, !0) : iz.g.removeItem(lz.b)
+       Pq(qq, Eq) ? Oq.i.setItem(mq.c, !0) : Oq.i.removeItem(mq.c)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L151-L164` → after: `L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/128.js#L151) · [Before (L151-L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/128.js#L151-L164)

```diff
-   6382: (zz, uz, bz) => {
-     bz.d(uz, {
-       d: () => nz,
-       e: () => iz
-     });
-     var Ez = bz(33);
-     const nz = "shaderPack";
-     async function iz() {
-       var zz;
-       let uz = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
-       return null !== (zz = await Ez.d.getItem(nz, uz)) && void 0 !== zz ? zz : null
-     }
-   },
-   6352: (zz, uz, bz) => {
+   6514: (qq, Eq, gq) => {
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L169` → after: `L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/128.js#L156) · [Before (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/128.js#L169)

```diff
-     var Ez = bz(6307);
+     var Yq = gq(6458);
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L174` → after: `L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/128.js#L161) · [Before (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/128.js#L174)

```diff
-       return iz ??= Promise.all([bz.e(69), bz.e(198)]).then((() => bz(39645))).then((zz => {
+       return Oq ??= Promise.all([gq.e(70), gq.e(199)]).then((() => gq(40244))).then((qq => {
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L180` → after: `L167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/128.js#L167) · [Before (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/128.js#L180)

```diff
-         return nz ??= (0, Ez.m)(bz, iz, uz), nz
+         return lq ??= (0, Yq.j)(gq, Oq, Eq), lq
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L189` → after: `L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/128.js#L176) · [Before (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/128.js#L189)

```diff
-   6307: (zz, uz, bz) => {
+   6458: (qq, Eq, gq) => {
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L191-L197` → after: `L178-L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L178-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/128.js#L178-L184) · [Before (L191-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/128.js#L191-L197)

```diff
-       c: () => lz,
-       e: () => iz,
-       i: () => Ez,
-       m: () => Zz,
-       n: () => Oz,
-       q: () => nz,
-       r: () => tz,
+       A: () => Bq,
+       d: () => mq,
+       f: () => Oq,
+       h: () => Yq,
+       j: () => aq,
+       k: () => uq,
+       o: () => lq,
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L199` → after: `L186`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L186)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/128.js#L186) · [Before (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/128.js#L199)

```diff
-       u: () => pz
+       w: () => cq
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L214` → after: `L201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/128.js#L201) · [Before (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/128.js#L214)

```diff
-         if ("string" !== typeof Ez) return `${bz} isn't text.`;
+         if ("string" !== typeof Yq) return `${gq} isn't text.`;
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L223` → after: `L210`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR210) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L210)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/128.js#L210) · [Before (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/128.js#L223)

```diff
-           if (zz.length > lz) return `The pack has more than ${lz} .wgsl files.`;
+           if (qq.length > mq) return `The pack has more than ${mq} .wgsl files.`;
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L231` → after: `L218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/128.js#L218) · [Before (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/128.js#L231)

```diff
-             if (uz.has(bz)) return `The pack has two files at ${bz}.`;
+             if (Eq.has(gq)) return `The pack has two files at ${gq}.`;
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L234` → after: `L221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR221) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/128.js#L221) · [Before (L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/128.js#L234)

```diff
-           return pz(zz) > iz ? `The pack's .wgsl files are over ${iz/1024} KB in total.` : null
+           return Bq(qq) > Oq ? `The pack's .wgsl files are over ${Oq/1024} KB in total.` : null
```

#### 26. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L259-L262` → after: `L246-L249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR246) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L246-L249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/128.js#L246-L249) · [Before (L259-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/128.js#L259-L262)

```diff
-       if (!zz.toLowerCase().endsWith(".wgsl")) return `${zz} isn't a .wgsl file.`;
-       if (zz.length > Mz) return `A file path is over ${Mz} characters.`;
-       if (zz.includes("\\") || /[\u0000-\u001f]/.test(zz)) return `${zz} isn't a valid file path.`;
-       return zz.split("/").some((zz => "" === zz || "." === zz || ".." === zz)) ? `${zz} isn't a valid file path.` : null
+       if (!qq.toLowerCase().endsWith(".wgsl")) return `${qq} isn't a .wgsl file.`;
+       if (qq.length > xq) return `A file path is over ${xq} characters.`;
+       if (qq.includes("\\") || /[\u0000-\u001f]/.test(qq)) return `${qq} isn't a valid file path.`;
+       return qq.split("/").some((qq => "" === qq || "." === qq || ".." === qq)) ? `${qq} isn't a valid file path.` : null
```

#### 27. `bundles/preprod.bloxd.io/chunks/js/128.js` (Changed code · before: `L295` → after: `L282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdcR282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f1314363e0ead602ebca12dbb0658f02acd3da92dccf4c866b095075fbc08fdc) · [After (L282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/128.js#L282) · [Before (L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/128.js#L295)

```diff
-           return (uz[bz]?.numAnimStates ?? 0) > 1 && !Mz.has(Ez) ? Ez : zz
+           return (Eq[gq]?.numAnimStates ?? 0) > 1 && !xq.has(Yq) ? Yq : qq
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/129.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/129.js` (23 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/129.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/129.js#L2)

```diff
- export const ids = [129, 130];
+ export const ids = [128, 129, 131];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/129.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/129.js#L4)

```diff
-   6331: (zz, uz, bz) => {
+   6482: (qq, Eq, gq) => {
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L6-L10` → after: `L6-L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/129.js#L6-L10) · [Before (L6-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/129.js#L6-L10)

```diff
-       d: () => Ez.i,
-       f: () => nz,
-       g: () => Ez.q
-     });
-     var Ez = bz(6307);
+       b: () => Yq.h,
+       c: () => lq,
+       e: () => Yq.o
+     });
+     var Yq = gq(6458);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L16` → after: `L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/129.js#L16) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/129.js#L16)

```diff
-   38566: (zz, uz, bz) => {
+   6531: (qq, Eq, gq) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L18-L40` → after: `L18-L48`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L18-L48)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/129.js#L18-L48) · [Before (L18-L40)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/129.js#L18-L40)

```diff
-       ShaderPackPage: () => tz,
-       harnessShaderPackMode: () => dz,
-       setHarnessUrlShaderPack: () => pz,
-       shaderPackPage: () => Oz
-     });
-     var Ez = bz(96),
-       nz = bz(33),
-       iz = (bz(3204), bz(6331), bz(3198)),
-       lz = bz(6382);
-     bz(6352);
-     const Mz = {
-       status: "none"
-     };
-     class tz {
-       constructor() {
-         this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
- ... (7 more removed lines; see GitHub link above)
+       forgetShaderPackActiveHint: () => bq,
+       isOtherApiVersion: () => rq,
+       isShaderPackActive: () => Pq,
+       isShaderPackChangePending: () => tq,
+       markShaderPackChangePending: () => yq,
+       pageShaderPackValidationVersion: () => vq,
+       reconcileStoredShaderPackHint: () => nq,
+       removeShaderPack: () => oq,
+       replaceShaderPack: () => dq,
+       saveShaderPack: () => Vq,
+       shaderPackNeedsCheck: () => hq,
+       storedPackOutcome: () => Qq,
+       storedShaderPackFiles: () => Wq,
+       toStoredShaderPack: () => Bq
+     });
+     var Yq = gq(6458),
+ ... (15 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L42-L77` → after: `L50-L75`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR50) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L50-L75)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/129.js#L50-L75) · [Before (L42-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/129.js#L42-L77)

```diff
-         return this.stored
-       }
-       prefetchHint() {
-         return (0, iz.c)(Ez.featureFlags.settings.canUseShaderPacks)
-       }
-       async loadActive() {
-         const zz = await this.load();
-         return "active" === zz.status ? zz.pack : null
-       }
-       load() {
-         return this.pagePack ??= this.read().catch((zz => (console.error("Failed to load the shader pack", zz), Mz))).then((zz => (this.resolved ??= zz, zz))), this.pagePack
-       }
-       hasNone() {
-         var zz;
-         return "none" === (null === (zz = this.resolved) || void 0 === zz ? void 0 : zz.status)
-       }
- ... (20 more removed lines; see GitHub link above)
+       }
+     }
+ 
+     function Wq(qq) {
+       return Object.keys(qq.files).map((Eq => ({
+         path: Eq,
+         source: qq.files[Eq]
+       })))
+     }
+     let Nq = Promise.resolve();
+ 
+     function aq(qq) {
+       const Eq = Nq.then(qq);
+       return Nq = Eq.catch((() => {})), Eq
+     }
+ 
+ ... (10 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L80-L93` → after: `L78-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR78) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L78-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/129.js#L78-L148) · [Before (L80-L93)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/129.js#L80-L93)

```diff
-       if (!(0, iz.h)(Ez.featureFlags.settings.canUseShaderPacks)) return null;
-       try {
-         const zz = await (0, lz.e)(!0);
-         return zz || nz.g.setItem(iz.b, !1), zz
-       } catch (zz) {
-         return console.error("Failed to read the stored shader pack", zz), nz.g.removeItem(iz.b), null
-       }
-     }
-     const Oz = new tz;
- 
-     function pz(zz, uz) {}
- 
-     function dz() {
-       return null
+       await Oq.f.removeItem(xq.b), Oq.i.removeItem(mq.c)
+     }
+ 
+     function oq() {
+       return aq(Hq)
+     }
+ 
+     function Pq(qq, Eq) {
+       return "active" === Qq(qq, Eq).kind
+     }
+ 
+     function Qq(qq, Eq) {
+       var gq;
+       return null === qq ? {
+         kind: "none",
+         reason: "nothingStored"
+ ... (55 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L96` → after: `L151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/129.js#L151) · [Before (L96)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/129.js#L96)

```diff
-   6382: (zz, uz, bz) => {
+   6535: (qq, Eq, gq) => {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L98-L101` → after: `L153-L156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L153-L156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/129.js#L153-L156) · [Before (L98-L101)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/129.js#L98-L101)

```diff
-       d: () => nz,
-       e: () => iz
-     });
-     var Ez = bz(33);
+       b: () => lq,
+       d: () => Oq
+     });
+     var Yq = gq(38);
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L106` → after: `L161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/129.js#L161) · [Before (L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/129.js#L106)

```diff
-       return null !== (zz = await Ez.d.getItem(nz, uz)) && void 0 !== zz ? zz : null
+       return null !== (qq = await Yq.f.getItem(lq, Eq)) && void 0 !== qq ? qq : null
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L109` → after: `L164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/129.js#L164) · [Before (L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/129.js#L109)

```diff
-   6352: (zz, uz, bz) => {
+   6514: (qq, Eq, gq) => {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L114` → after: `L169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/129.js#L169) · [Before (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/129.js#L114)

```diff
-     var Ez = bz(6307);
+     var Yq = gq(6458);
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L119` → after: `L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR174) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/129.js#L174) · [Before (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/129.js#L119)

```diff
-       return iz ??= Promise.all([bz.e(69), bz.e(198)]).then((() => bz(39645))).then((zz => {
+       return Oq ??= Promise.all([gq.e(70), gq.e(199)]).then((() => gq(40244))).then((qq => {
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L125` → after: `L180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/129.js#L180) · [Before (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/129.js#L125)

```diff
-         return nz ??= (0, Ez.m)(bz, iz, uz), nz
+         return lq ??= (0, Yq.j)(gq, Oq, Eq), lq
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L134` → after: `L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/129.js#L189) · [Before (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/129.js#L134)

```diff
-   6307: (zz, uz, bz) => {
+   6458: (qq, Eq, gq) => {
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L136-L142` → after: `L191-L197`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L191-L197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/129.js#L191-L197) · [Before (L136-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/129.js#L136-L142)

```diff
-       c: () => lz,
-       e: () => iz,
-       i: () => Ez,
-       m: () => Zz,
-       n: () => Oz,
-       q: () => nz,
-       r: () => tz,
+       A: () => Bq,
+       d: () => mq,
+       f: () => Oq,
+       h: () => Yq,
+       j: () => aq,
+       k: () => uq,
+       o: () => lq,
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L144` → after: `L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR199) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/129.js#L199) · [Before (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/129.js#L144)

```diff
-       u: () => pz
+       w: () => cq
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L159` → after: `L214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/129.js#L214) · [Before (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/129.js#L159)

```diff
-         if ("string" !== typeof Ez) return `${bz} isn't text.`;
+         if ("string" !== typeof Yq) return `${gq} isn't text.`;
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L168` → after: `L223`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L223)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/129.js#L223) · [Before (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/129.js#L168)

```diff
-           if (zz.length > lz) return `The pack has more than ${lz} .wgsl files.`;
+           if (qq.length > mq) return `The pack has more than ${mq} .wgsl files.`;
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L176` → after: `L231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/129.js#L231) · [Before (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/129.js#L176)

```diff
-             if (uz.has(bz)) return `The pack has two files at ${bz}.`;
+             if (Eq.has(gq)) return `The pack has two files at ${gq}.`;
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L179` → after: `L234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR234) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/129.js#L234) · [Before (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/129.js#L179)

```diff
-           return pz(zz) > iz ? `The pack's .wgsl files are over ${iz/1024} KB in total.` : null
+           return Bq(qq) > Oq ? `The pack's .wgsl files are over ${Oq/1024} KB in total.` : null
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L204-L207` → after: `L259-L262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L259-L262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/129.js#L259-L262) · [Before (L204-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/129.js#L204-L207)

```diff
-       if (!zz.toLowerCase().endsWith(".wgsl")) return `${zz} isn't a .wgsl file.`;
-       if (zz.length > Mz) return `A file path is over ${Mz} characters.`;
-       if (zz.includes("\\") || /[\u0000-\u001f]/.test(zz)) return `${zz} isn't a valid file path.`;
-       return zz.split("/").some((zz => "" === zz || "." === zz || ".." === zz)) ? `${zz} isn't a valid file path.` : null
+       if (!qq.toLowerCase().endsWith(".wgsl")) return `${qq} isn't a .wgsl file.`;
+       if (qq.length > xq) return `A file path is over ${xq} characters.`;
+       if (qq.includes("\\") || /[\u0000-\u001f]/.test(qq)) return `${qq} isn't a valid file path.`;
+       return qq.split("/").some((qq => "" === qq || "." === qq || ".." === qq)) ? `${qq} isn't a valid file path.` : null
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/129.js` (Changed code · before: `L240` → after: `L295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010cR295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-861b52b3ee20e0ce31eea1d19f40820348247737e18ddd5ba3289c0cecdb010c) · [After (L295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/129.js#L295) · [Before (L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/129.js#L240)

```diff
-           return (uz[bz]?.numAnimStates ?? 0) > 1 && !Mz.has(Ez) ? Ez : zz
+           return (Eq[gq]?.numAnimStates ?? 0) > 1 && !xq.has(Yq) ? Yq : qq
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/130.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/130.js` (14 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66)

#### 1. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L2` → after: `L2`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R2) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/130.js#L2) · [Before (L2)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/130.js#L2)

```diff
- export const ids = [130];
+ export const ids = [130, 131];
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L4` → after: `L4-L109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L4-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/130.js#L4-L109) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/130.js#L4)

```diff
-   6352: (zz, uz, bz) => {
+   6482: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => Yq.h,
+       c: () => lq,
+       e: () => Yq.o
+     });
+     var Yq = gq(6458);
+     const lq = [!1, !0].flatMap((qq => ["terrain", "liquid", "model"].map((Eq => ({
+       strict: qq,
+       program: Eq
+     })))))
+   },
+   39158: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       ShaderPackPage: () => Aq,
+       harnessShaderPackMode: () => Wq,
+ ... (90 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L9` → after: `L114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/130.js#L114) · [Before (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/130.js#L9)

```diff
-     var Ez = bz(6307);
+     var Yq = gq(6458);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L14` → after: `L119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/130.js#L119) · [Before (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/130.js#L14)

```diff
-       return iz ??= Promise.all([bz.e(69), bz.e(198)]).then((() => bz(39645))).then((zz => {
+       return Oq ??= Promise.all([gq.e(70), gq.e(199)]).then((() => gq(40244))).then((qq => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L20` → after: `L125`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R125) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/130.js#L125) · [Before (L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/130.js#L20)

```diff
-         return nz ??= (0, Ez.m)(bz, iz, uz), nz
+         return lq ??= (0, Yq.j)(gq, Oq, Eq), lq
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L29` → after: `L134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/130.js#L134) · [Before (L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/130.js#L29)

```diff
-   6307: (zz, uz, bz) => {
+   6458: (qq, Eq, gq) => {
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L31-L37` → after: `L136-L142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R136) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L136-L142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/130.js#L136-L142) · [Before (L31-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/130.js#L31-L37)

```diff
-       c: () => lz,
-       e: () => iz,
-       i: () => Ez,
-       m: () => Zz,
-       n: () => Oz,
-       q: () => nz,
-       r: () => tz,
+       A: () => Bq,
+       d: () => mq,
+       f: () => Oq,
+       h: () => Yq,
+       j: () => aq,
+       k: () => uq,
+       o: () => lq,
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L39` → after: `L144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/130.js#L144) · [Before (L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/130.js#L39)

```diff
-       u: () => pz
+       w: () => cq
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L54` → after: `L159`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R159) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/130.js#L159) · [Before (L54)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/130.js#L54)

```diff
-         if ("string" !== typeof Ez) return `${bz} isn't text.`;
+         if ("string" !== typeof Yq) return `${gq} isn't text.`;
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L63` → after: `L168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/130.js#L168) · [Before (L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/130.js#L63)

```diff
-           if (zz.length > lz) return `The pack has more than ${lz} .wgsl files.`;
+           if (qq.length > mq) return `The pack has more than ${mq} .wgsl files.`;
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L71` → after: `L176`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/130.js#L176) · [Before (L71)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/130.js#L71)

```diff
-             if (uz.has(bz)) return `The pack has two files at ${bz}.`;
+             if (Eq.has(gq)) return `The pack has two files at ${gq}.`;
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L74` → after: `L179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/130.js#L179) · [Before (L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/130.js#L74)

```diff
-           return pz(zz) > iz ? `The pack's .wgsl files are over ${iz/1024} KB in total.` : null
+           return Bq(qq) > Oq ? `The pack's .wgsl files are over ${Oq/1024} KB in total.` : null
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L99-L102` → after: `L204-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L204-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/130.js#L204-L207) · [Before (L99-L102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/130.js#L99-L102)

```diff
-       if (!zz.toLowerCase().endsWith(".wgsl")) return `${zz} isn't a .wgsl file.`;
-       if (zz.length > Mz) return `A file path is over ${Mz} characters.`;
-       if (zz.includes("\\") || /[\u0000-\u001f]/.test(zz)) return `${zz} isn't a valid file path.`;
-       return zz.split("/").some((zz => "" === zz || "." === zz || ".." === zz)) ? `${zz} isn't a valid file path.` : null
+       if (!qq.toLowerCase().endsWith(".wgsl")) return `${qq} isn't a .wgsl file.`;
+       if (qq.length > xq) return `A file path is over ${xq} characters.`;
+       if (qq.includes("\\") || /[\u0000-\u001f]/.test(qq)) return `${qq} isn't a valid file path.`;
+       return qq.split("/").some((qq => "" === qq || "." === qq || ".." === qq)) ? `${qq} isn't a valid file path.` : null
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/130.js` (Changed code · before: `L135` → after: `L240`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66R240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-56b6949b7650c79ddb1c5e446885209feb6359985b859296d4103cf9bf3f7f66) · [After (L240)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/130.js#L240) · [Before (L135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/130.js#L135)

```diff
-           return (uz[bz]?.numAnimStates ?? 0) > 1 && !Mz.has(Ez) ? Ez : zz
+           return (Eq[gq]?.numAnimStates ?? 0) > 1 && !xq.has(Yq) ? Yq : qq
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/131.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/131.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703)

#### 1. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/131.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/131.js#L4)

```diff
-   6340: (zz, uz, bz) => {
+   6514: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L6` → after: `L6-L7`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L6-L7)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/131.js#L6-L7) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/131.js#L6)

```diff
-       loadPageShaderPackCompiler: () => du
+       loadShaderPackTextures: () => mq,
+       shaderPackTextures: () => xq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L8-L445` → after: `L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R9) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/131.js#L9) · [Before (L8-L445)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/131.js#L8-L445)

```diff
-     var Ez = {};
-     bz.r(Ez), bz.d(Ez, {
-       oEz: () => nz,
-       B_: () => iz,
-       default: () => Qz,
-       NEz: () => lz,
-       vEz: () => Mz,
-       initSync: () => Dz,
-       Pp: () => tz,
-       tbz: () => Hz,
-       xEz: () => Oz,
-       JEz: () => pz,
-       lT: () => dz,
-       AEz: () => Fz,
-       hA: () => Zz,
-       TEz: () => Rz
- ... (422 more removed lines; see GitHub link above)
+     var Yq = gq(6458);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L450-L455` → after: `L14-L92`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L14-L92)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/131.js#L14-L92) · [Before (L450-L455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/131.js#L450-L455)

```diff
-       return Iz ? Promise.resolve(Iz) : (Bz || (Bz = async function() {
-         let zz;
-         try {
-           zz = await (0, Wz.x)(new bz.U(bz(6349)), (0, ez.d)("bloxd_wasm_shader_pack"))
-         } catch (uz) {
-           throw new jz((0, Wz.C)(uz), uz)
+       return Oq ??= Promise.all([gq.e(70), gq.e(199)]).then((() => gq(40244))).then((qq => {
+         let {
+           FORMER_BLOCK_IMAGE_NAMES: Eq,
+           textureNameToIndex: gq,
+           textureAnimationData: Oq
+         } = qq;
+         return lq ??= (0, Yq.j)(gq, Oq, Eq), lq
+       })), Oq
+     }
+ 
+     function xq() {
+       if (null === lq) throw new Error("Shader pack textures read before loadShaderPackTextures");
+       return lq
+     }
+   },
+   6458: (qq, Eq, gq) => {
+ ... (63 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L457-L459` → after: `L94-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R94) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L94-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/131.js#L94-L181) · [Before (L457-L459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/131.js#L457-L459)

```diff
-         try {
-           await Qz({
-             module_or_path: zz
+         of qq) gq += Eq.encode(Yq).byteLength;
+       return gq
+     }
+ 
+     function Wq(qq) {
+       if (!qq.toLowerCase().endsWith(".wgsl")) return `${qq} isn't a .wgsl file.`;
+       if (qq.length > xq) return `A file path is over ${xq} characters.`;
+       if (qq.includes("\\") || /[\u0000-\u001f]/.test(qq)) return `${qq} isn't a valid file path.`;
+       return qq.split("/").some((qq => "" === qq || "." === qq || ".." === qq)) ? `${qq} isn't a valid file path.` : null
+     }
+     const Nq = /^(.*)\[rot\[([1-4])$/;
+ 
+     function aq(qq, Eq) {
+       let gq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
+       const Yq = new Map;
+       Eq.forEach(((qq, Eq) => {
+ ... (72 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L461-L664` → after: `L183-L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L183-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/131.js#L183-L189) · [Before (L461-L664)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/131.js#L461-L664)

```diff
-         } catch (uz) {
-           throw new jz("instantiate", uz)
-         }
-         return Iz = Ez, Iz
-       }(), Bz.then(void 0, (() => {
-         Bz = null
-       }))), Bz)
-     }
-     var Yz = bz(6359);
- 
-     function kz(zz) {
-       let [uz, bz, Ez, nz] = zz;
-       const iz = {
-         file: uz,
-         line: bz,
-         message: Ez
- ... (188 more removed lines; see GitHub link above)
+         } else Wq.set(gq, Vq + 1)
+       }
+       for (const Nq of Wq.keys()) aq.delete(Nq);
+       for (const [Nq, Vq] of gq) {
+         const qq = Wq.get(Vq);
+         void 0 === qq || Wq.has(Nq) || (Wq.set(Nq, qq), aq.delete(Nq))
+       }
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L666-L717` → after: `L191-L198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L191-L198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/131.js#L191-L198) · [Before (L666-L717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/131.js#L666-L717)

```diff
-         strict: zz >= uz,
-         program: Ez.e[zz % uz]
-       }
-     }
- 
-     function Xz(zz) {
-       return Number(zz.strict) * Ez.e.length + Ez.e.indexOf(zz.program)
-     }
- 
-     function fz(zz) {
-       return "" === zz ? [] : zz.split(" ")
-     }
- 
-     function sz(zz) {
-       const uz = {
-         variantFlags: new Uint8Array(nz),
- ... (36 more removed lines; see GitHub link above)
+         named: [...Wq].sort(((qq, Eq) => {
+           let [gq] = qq, [Yq] = Eq;
+           return gq < Yq ? -1 : gq > Yq ? 1 : 0
+         })).map((qq => {
+           let [Eq, gq] = qq;
+           return {
+             name: Eq,
+             id: gq
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/131.js` (Changed code · before: `L719-L752` → after: `L200-L203`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703R200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-108421cec07e8a6e70741a9f8a0737b2894859440300d99a19b6b3e0be45c703) · [After (L200-L203)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/131.js#L200-L203) · [Before (L719-L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/131.js#L719-L752)

```diff
-         }
-       }))
-     }
-   },
-   6362: (zz, uz, bz) => {
-     bz.d(uz, {
-       e: () => Ez,
-       i: () => lz,
-       j: () => Mz,
-       m: () => nz,
-       p: () => iz
-     });
-     const Ez = ["terrain", "liquid", "model"];
- 
-     function nz() {
-       const zz = [];
- ... (18 more removed lines; see GitHub link above)
+         })),
+         aliases: [...aq.values()],
+         layers: Bq
+       }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/132.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/132.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7)

#### 1. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L4-L8` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/132.js#L4-L6) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/132.js#L4-L8)

```diff
-   35811: (zz, uz, bz) => {
-     bz.d(uz, {
-       d: () => Jz,
-       f: () => Lz,
-       g: () => xz
+   6496: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       loadPageShaderPackCompiler: () => WE
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L10-L20` → after: `L8-L450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L8-L450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/132.js#L8-L450) · [Before (L10-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/132.js#L10-L20)

```diff
-     var Ez = bz(3468),
-       nz = bz(3477),
-       iz = bz(6346),
-       lz = bz(4448),
-       Mz = bz(3475);
-     const tz = ".zst.bin",
-       Hz = Reflect.apply,
-       Oz = ArrayBuffer,
-       pz = "undefined" === typeof Response ? void 0 : Response,
-       dz = "undefined" === typeof ReadableStream ? void 0 : ReadableStream,
-       Fz = function() {
+     var Yq = {};
+     gq.r(Yq), gq.d(Yq, {
+       rlq: () => lq,
+       tqq: () => Oq,
+       default: () => Fq,
+       vlq: () => mq,
+       hlq: () => xq,
+       initSync: () => Uq,
+       Cu: () => Aq,
+       aYq: () => cq,
+       nlq: () => uq,
+       blq: () => Bq,
+       vJ: () => Wq,
+       ilq: () => Nq,
+       yJ: () => aq,
+       Zlq: () => Vq
+ ... (427 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L22-L33` → after: `L452-L534`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R452) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L452-L534)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/132.js#L452-L534) · [Before (L22-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/132.js#L22-L33)

```diff
-         void 0 !== dz && new dz({
-           __proto__: null,
-           start(uz) {
-             const {
-               enqueue: bz,
-               close: Ez,
-               error: nz
-             } = Object.getPrototypeOf(uz);
-             zz = {
-               enqueue: bz,
-               close: Ez,
-               error: nz
+         try {
+           qq = await (0, sq.N)(new gq.U(gq(6508)), (0, Xq.d)("bloxd_wasm_shader_pack"))
+         } catch (Eq) {
+           throw new wq((0, sq.R)(Eq), Eq)
+         }
+         try {
+           await Fq({
+             module_or_path: qq
+           })
+         } catch (Eq) {
+           throw new wq("instantiate", Eq)
+         }
+         return Kq = Yq, Kq
+       }(), Cq.then(void 0, (() => {
+         Cq = null
+       }))), Cq)
+ ... (67 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L35-L41` → after: `L536-L578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L536-L578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/132.js#L536-L578) · [Before (L35-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/132.js#L35-L41)

```diff
-           }
-         }, {
-           __proto__: null
-         });
-         return zz
-       }(),
-       Zz = function() {
+           }(qq, Eq, gq))),
+           mapValidationMessage: (Eq, gq) => {
+             const Yq = YE.get(Eq);
+             if (!Yq) throw new Error("mapValidationMessage takes a validation module this compiler made");
+             return Dq(JSON.parse(mE(qq, (() => Yq.pack.mapValidationMessage(Yq.index, gq.lineNum, gq.linePos, gq.message, gq.type)))))
+           },
+           aYq: Eq => mE(qq, (() => function(qq, Eq) {
+             const gq = new Int32Array(Eq.length),
+               Yq = [];
+             return Eq.forEach(((qq, Eq) => {
+               gq[Eq] = qq.variants ? qq.variants.length : -1;
+               for (const gq of qq.variants ?? []) Yq.push((0, eq.j)(gq))
+             })), qE(qq.aYq(Eq.map((qq => qq.file)), Uint32Array.from(Eq, (qq => EE(qq.line, "Diagnostic line"))), Eq.map((qq => qq.message)), gq, Uint8Array.from(Yq)))
+           }(qq, Eq))),
+           yJ: Eq => mE(qq, (() => qq.yJ(...gE(Eq)))),
+           get SHADER_PACK_HEADER_VERSION() {
+ ... (27 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L43-L213` → after: `L580-L584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L580-L584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/132.js#L580-L584) · [Before (L43-L213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/132.js#L43-L213)

```diff
-           return "undefined" !== typeof WebAssembly && "function" === typeof WebAssembly.compileStreaming && void 0 !== Fz && (0, lz.l)(pz, "Response", !0) && (0, lz.l)(dz, "ReadableStream", !0) && (0, lz.l)(Fz.enqueue, "enqueue") && (0, lz.l)(Fz.close, "close") && (0, lz.l)(Fz.e … [truncated]
-         } catch {
-           return !1
-         }
-       }();
-     let Rz = !1;
- 
-     function Kz(zz) {
-       for (const uz of "bloxd_wasm_webgpu:4997044,bloxd_wasm_webgl:5288190,bloxd_wasm_webgl1:4757905,bloxd_wasm_workers:196044,bloxd_wasm_models:311375,bloxd_wasm_client:3666763"?.split(",") ?? []) {
-         const [bz, Ez] = uz.split(":");
-         if (bz === zz) {
-           const zz = Number(Ez);
-           return Number.isInteger(zz) && zz > 0 ? zz : void 0
-         }
-       }
-     }
- ... (155 more removed lines; see GitHub link above)
+           const Eq = await async function() {
+             let qq = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Iq;
+             return xE(await qq())
+           }();
+           return await qq ? Eq : null
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L215-L321` → after: `L586-L593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R586) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L586-L593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/132.js#L586-L593) · [Before (L215-L321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/132.js#L215-L321)

```diff
-           console.warn(`${rz(Kz)}: loading ${zz.href} instead`)
-         }
-         const Zz = await (0, Mz.x)(zz, Ez, {
-           ...iz,
-           hideThen: !0
-         });
-         return Zz
-       }(zz.url(), iz, uz, Ez): Xz(zz, uz, Ez)
-     }
- 
-     function Xz(zz, uz, bz) {
-       return (0, Mz.x)(zz.url(), uz, {
-         ...bz,
-         hideThen: void 0 !== Kz(zz.name)
-       })
-     }
- ... (91 more removed lines; see GitHub link above)
+           const qq = Eq instanceof Error ? Eq.message : String(Eq);
+           return NE(AE.c[Eq instanceof wq ? Eq.stage : "instantiate"], qq), null
+         }
+       }(), BE
+     }
+ 
+     function NE(qq, Eq) {
+       (0, AE.e)(uE, `Shader pack wasm ${qq}, so shader packs can't run: ${Eq}`, Eq, `shader_pack_${qq}`)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L324` → after: `L596-L599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R596) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L596-L599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/132.js#L596-L599) · [Before (L324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/132.js#L324)

```diff
-   6346: (zz, uz, bz) => {
+   6508: (qq, Eq, gq) => {
+     qq.exports = gq.p + "static/media/bloxd_wasm_shader_pack_bg.85a99b3f49b7ce9ed7dc.wasm"
+   },
+   6500: (qq, Eq, gq) => {
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L328` → after: `L603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/132.js#L603) · [Before (L328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/132.js#L328)

```diff
-     var Ez = bz(3475);
+     var Yq = gq(2805);
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L330-L341` → after: `L605-L616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L605-L616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/132.js#L605-L616) · [Before (L330-L341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/132.js#L330-L341)

```diff
-       bloxd_wasm: () => "1d82d26b5e962a8115a8b9f5a71d4482bea630e4794af96826031054b5328287",
-       bloxd_wasm_client: () => "e76c5a2961724276556b1be66b22dec7bd5f65e384a93101c607286d297ee067",
-       bloxd_wasm_workers: () => "7e47409366bf7f39099f927cfa4a57348b448c74b02605efbd73e4a6b8f04dde",
-       bloxd_wasm_models: () => "a904d117ddddef41137d77eab973a77d1f2482bc6fba648f058b098f24fc0f06",
-       bloxd_wasm_webgpu: () => "8953137a8b71bf3e6e8a8f69ee233c91a42378bf3fc16cb1c4c8b9135861b1dc",
-       bloxd_wasm_webgl: () => "5dd590fce3f1cee12961fd4975adbeea583efcc5ec749ca76a788f4fc4940dd8",
-       bloxd_wasm_webgl1: () => "c9bbf8ccca86e0863424fb3eea3d6cf6b07feda842276f421c960b2ead4ebd7c",
-       bloxd_wasm_replay: () => "8494f1ab5acd2fa27c8efc81dbe5383c1e46f4eb345de017463045c5e3e0bee4",
-       bloxd_wasm_recorder: () => "e6f11baa69c0487a3c1dfa56f14484100398a051d758250d1642107a1cd5ca79",
-       bloxd_wasm_anim: () => "5e25d5318082a811e82e509be32ba6fcbfb252bb467f0c4d2fbbb91da19adb66",
-       bloxd_wasm_textures: () => "f4310b0ea0f5ae4902503cafb0076931617e380b6606a87042ca91b8b1e1cba5",
-       bloxd_wasm_shader_pack: () => "ba3761e2c3ceefb8d7f3f3f092016905f6affc6c5166b29a485d6c289fd71fdf"
+       bloxd_wasm: () => "6d78896f037d6c3dd2ec91f53e012efc14d4c7478e36fc57749ae14be1df3096",
+       bloxd_wasm_client: () => "132c78fe4d5d985a39aef9cb5338e6d40926f1581f341ef925ca4f1b873982cf",
+       bloxd_wasm_workers: () => "9fa00e1e679c4b317e391d15a0e20bcce764b10ac53881c003b3245b86db6cf5",
+       bloxd_wasm_models: () => "9dd9f9fb8ff600ad7045604d8a17da38690a8b012f1e8b7f578a1a671baf7185",
+       bloxd_wasm_webgpu: () => "72b5e9034b38cfcfd84eb4e4b1607ea3fedbb7078518766dd27ac431c9922848",
+       bloxd_wasm_webgl: () => "a5cefc5390d0e4cf10eab192e6d4403fc337fb14cfe0e3164c3430a7c721595d",
+       bloxd_wasm_webgl1: () => "3cb76bb92c5501eb795864d943ed2c567c8b5ff7777cd5f2c08b0940197979c9",
+       bloxd_wasm_replay: () => "f8132694ecb3c07d332a67ad7dab19d035d58dc2cea1ddbf2ca6dc7ec556cd0c",
+       bloxd_wasm_recorder: () => "166b4da1bfa19d1d90b1f2d66b23de17c858096a88eb92fe87a8c9e58f77c3bb",
+       bloxd_wasm_anim: () => "11dd5bcc2c7323ae0a5b9e4cd8b8c81d457a9ea85d6e339c6454ed1bb80a27c4",
+       bloxd_wasm_textures: () => "2ba4917ae218104948db870865715dacd8571878aedd4fece740312291892fac",
+       bloxd_wasm_shader_pack: () => "dfb97693642c8a1ee7219f62c2557fcfb1c20ef622361f5b18389c544478cae6"
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L343` → after: `L618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R618) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/132.js#L618) · [Before (L343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/132.js#L343)

```diff
-     var iz = bz(4448);
+     var Oq = gq(4524);
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/132.js` (Changed code · before: `L351` → after: `L626-L752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7R626) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-942cd03821e125e11e650cb22ff6cfce596599b820007ad33a8d6e68377745a7) · [After (L626-L752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/132.js#L626-L752) · [Before (L351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/132.js#L351)

```diff
-       throw new Ez.f(`${zz} has no release digest, so this build refuses it`)
+       throw new Yq.j(`${qq} has no release digest, so this build refuses it`)
+     }
+   },
+   6517: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => Pq,
+       f: () => Qq,
+       j: () => Hq,
+       l: () => jq
+     });
+     var Yq = gq(6521);
+     const lq = 6,
+       Oq = 3,
+       mq = 1,
+       xq = 2,
+       Aq = 4,
+ ... (111 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/133.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/133.js` (4 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61)

#### 1. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L4` → after: `L4-L594`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L4-L594)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/133.js#L4-L594) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/133.js#L4)

```diff
-   6359: (zz, uz, bz) => {
+   36356: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => xq,
+       e: () => cq,
+       i: () => mq,
+       j: () => Bq
+     });
+     var Yq = gq(36345),
+       lq = gq(15);
+     const Oq = /wasm-function\[\d+\]|wasm:\/\/|\[wasm code\]/;
+ 
+     function mq(qq) {
+       if (qq instanceof WebAssembly.RuntimeError) return !0;
+       const Eq = qq instanceof Error ? qq.stack : void 0;
+       return "string" === typeof Eq && Oq.test(Eq)
+     }
+ ... (575 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L7-L9` → after: `L597-L600`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R597) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L597-L600)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/133.js#L597-L600) · [Before (L7-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/133.js#L7-L9)

```diff
-       e: () => rz,
-       i: () => Xz,
-       m: () => wz
+       g: () => Oq,
+       j: () => Aq,
+       k: () => mq,
+       l: () => lq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L11-L39` → after: `L602-L622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L602-L622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/133.js#L602-L622) · [Before (L11-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/133.js#L11-L39)

```diff
-     var Ez = bz(6362);
-     const nz = 6,
-       iz = 3,
-       lz = 1,
-       Mz = 2,
-       tz = 4,
-       Hz = 8,
-       Oz = 16,
-       pz = 32,
-       dz = 64,
-       Fz = 128,
-       Zz = ["", "bloxdTerrainVertex", "bloxdTerrainSurface", "bloxdTerrainLight", "bloxdLiquidVertex", "bloxdLiquidSurface", "bloxdLiquidLight", "bloxdModelVertex", "bloxdModelSurface", "bloxdModelLight", "bloxdDefaultSurface", "bloxdDefaultLight"];
- 
-     function Rz(zz) {
-       if (!zz) return 0;
-       const uz = Zz.indexOf(zz);
- ... (13 more removed lines; see GitHub link above)
+     const Yq = /^alloc_failed (\d+) bytes$/;
+ 
+     function lq(qq, Eq) {
+       return Oq(qq, Eq) ? `trap=alloc_failed ${Eq} bytes` : `trap=${qq}`
+     }
+ 
+     function Oq(qq, Eq) {
+       return "unreachable" === qq && Eq > 0
+     }
+ 
+     function mq(qq, Eq, gq) {
+       const Yq = function(qq) {
+         return qq instanceof WebAssembly.RuntimeError ? /unreachable/i.test(qq.message) ? "unreachable" : /out of bounds/i.test(qq.message) ? "out_of_bounds" : "runtime_error" : (qq instanceof RangeError || qq instanceof Error && "InternalError" === qq.name) && /call stack|recurs … [truncated]
+       }(qq);
+       if ("unreachable" !== Yq) return {
+         kind: Yq,
+ ... (5 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/133.js` (Changed code · before: `L41-L245` → after: `L624-L633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61R624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-cf6e569688945368b473f459ac6e49493e0d75e8afed1ae76f8181306ec33f61) · [After (L624-L633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/133.js#L624-L633) · [Before (L41-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/133.js#L41-L245)

```diff
-         strict: zz >= uz,
-         program: Ez.e[zz % uz]
-       }
-     }
- 
-     function Xz(zz) {
-       return Number(zz.strict) * Ez.e.length + Ez.e.indexOf(zz.program)
-     }
- 
-     function fz(zz) {
-       return "" === zz ? [] : zz.split(" ")
-     }
- 
-     function sz(zz) {
-       const uz = {
-         variantFlags: new Uint8Array(nz),
- ... (189 more removed lines; see GitHub link above)
+         kind: Yq,
+         panic: Oq > 0 ? null : lq,
+         refusedBytes: Oq
+       }
+     }
+     const xq = 300;
+ 
+     function Aq(qq) {
+       return qq.replace(/\s*\n\s*/g, " / ").slice(0, xq)
+     }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/134.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/134.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-73ebf70303693ec5ae896bb61bb828faba6fe09f19401506c3d9287b8a3be85e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/134.js` (Changed code · before: `L4` → after: `L4-L222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-73ebf70303693ec5ae896bb61bb828faba6fe09f19401506c3d9287b8a3be85eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-73ebf70303693ec5ae896bb61bb828faba6fe09f19401506c3d9287b8a3be85e) · [After (L4-L222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/134.js#L4-L222) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/134.js#L4)

```diff
-   40955: (zz, uz, bz) => {
+   6517: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       b: () => Pq,
+       f: () => Qq,
+       j: () => Hq,
+       l: () => jq
+     });
+     var Yq = gq(6521);
+     const lq = 6,
+       Oq = 3,
+       mq = 1,
+       xq = 2,
+       Aq = 4,
+       cq = 8,
+       uq = 16,
+       Bq = 32,
+ ... (203 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/134.js` (Changed code · before: `L6-L269` → after: `L224-L245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-73ebf70303693ec5ae896bb61bb828faba6fe09f19401506c3d9287b8a3be85eR224) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-73ebf70303693ec5ae896bb61bb828faba6fe09f19401506c3d9287b8a3be85e) · [After (L224-L245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/134.js#L224-L245) · [Before (L6-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/134.js#L6-L269)

```diff
-       compilePagePack: () => Hz,
-       prefetchCompiler: () => Mz,
-       reconcileHint: () => tz
-     });
-     var Ez = bz(6340),
-       nz = bz(6379),
-       iz = bz(6352),
-       lz = bz(6371);
- 
-     function Mz() {
-       (0, Ez.loadPageShaderPackCompiler)()
-     }
-     async function tz() {
-       const zz = await (0, Ez.loadPageShaderPackCompiler)();
-       await (zz ? (0, nz.reconcileStoredShaderPackHint)(zz) : (0, nz.forgetShaderPackActiveHint)())
-     }
- ... (248 more removed lines; see GitHub link above)
+       SHADER_PACK_INPUTS_BINDING: () => Oq.b,
+       SHADER_PACK_INPUTS_GROUP: () => Oq.c,
+       SHADER_PACK_INPUTS_SIZE: () => Oq.e,
+       SHADER_PACK_INPUTS_VAR: () => Oq.g,
+       SHADER_PACK_MODES: () => Oq.j,
+       SHADER_PACK_PROGRAMS: () => Yq.b,
+       SHADER_PACK_SCENE_DEPTH_BINDING: () => Oq.l,
+       SHADER_PACK_SUN_SHADOW_BINDINGS: () => Oq.n,
+       SHADER_PACK_SUN_SHADOW_MASK_BINDING: () => Oq.r,
+       SHADER_PACK_TEXTURES_BINDING: () => Oq.v,
+       encodeTextureLayers: () => Oq.x,
+       flattenVariants: () => lq.b,
+       isVariantOff: () => Yq.d,
+       packRunsIn: () => Yq.g,
+       shaderPackInputsWgsl: () => Oq.B,
+       shaderPackVariantKeys: () => Yq.j,
+ ... (6 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/135.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/135.js` (2 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e)

#### 1. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L5-L2373` → after: `L4-L190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L4-L190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/135.js#L4-L190) · [Before (L5-L2373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/135.js#L5-L2373)

```diff
-   6430: (zz, uz, bz) => {
-     var Ez = bz(6434);
-     uz.e = {
-       prefix: Ez.prefix,
-       iconName: Ez.iconName,
-       icon: [Ez.width, Ez.height, Ez.aliases, Ez.unicode, Ez.svgPathData]
-     }, uz.f = uz.e, Ez.prefix, Ez.iconName, Ez.width, Ez.height, Ez.aliases, Ez.unicode, Ez.svgPathData, Ez.aliases
-   },
-   6440: (zz, uz, bz) => {
-     var Ez = bz(6446);
-     uz.e = {
-       prefix: Ez.prefix,
-       iconName: Ez.iconName,
-       icon: [Ez.width, Ez.height, Ez.aliases, Ez.unicode, Ez.svgPathData]
-     }, uz.f = uz.e, Ez.prefix, Ez.iconName, Ez.width, Ez.height, Ez.aliases, Ez.unicode, Ez.svgPathData, Ez.aliases
-   },
- ... (2353 more removed lines; see GitHub link above)
+   41501: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       compilePagePack: () => cq,
+       prefetchCompiler: () => xq,
+       reconcileHint: () => Aq
+     });
+     var Yq = gq(6496),
+       lq = gq(6531),
+       Oq = gq(6514),
+       mq = gq(6526);
+ 
+     function xq() {
+       (0, Yq.loadPageShaderPackCompiler)()
+     }
+     async function Aq() {
+       const qq = await (0, Yq.loadPageShaderPackCompiler)();
+ ... (171 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/135.js` (Changed code · before: `L2375-L2384` → after: `L192-L269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992eR192) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-c66dd453d6a95c33d79cbc9ac45ea3a48728fef22ebb1b1ee18a0e2b94c8992e) · [After (L192-L269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/135.js#L192-L269) · [Before (L2375-L2384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/135.js#L2375-L2384)

```diff
-       e: () => nz,
-       i: () => iz
-     });
-     var Ez = {
-         prefix: "fas",
-         iconName: "shirt",
-         icon: [640, 512, [128085, "t-shirt", "tshirt"], "f553", "M320.2 112c44.2 0 80-35.8 80-80l53.5 0c17 0 33.3 6.7 45.3 18.7L617.6 169.4c12.5 12.5 12.5 32.8 0 45.3l-50.7 50.7c-12.5 12.5-32.8 12.5-45.3 0l-41.4-41.4 0 224c0 35.3-28.7 64-64 64l-192 0c-35.3 0-64-28.7-64-64l0-224-4 … [truncated]
-       },
-       nz = Ez,
-       iz = Ez
+       b: () => Aq,
+       e: () => xq
+     });
+     var Yq = gq(6531),
+       lq = gq(6514),
+       Oq = gq(118);
+     const mq = 100;
+     async function xq(qq, Eq) {
+       var gq;
+       let Yq = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null !== (gq = navigator.gpu) && void 0 !== gq ? gq : null;
+       const mq = qq.tqq(Eq, (0, lq.shaderPackTextures)());
+       if (mq.errors.length > 0) return cq(qq, mq.errors, mq.offInStrict);
+       const xq = await async function(qq) {
+         if (!qq) return null;
+         try {
+           const Eq = await (0, Oq.v)(qq);
+ ... (62 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/136.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/136.js` (23 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00)

#### 1. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L4-L8` → after: `L5-L1910`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R5) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L5-L1910)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/136.js#L5-L1910) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/136.js#L4-L8)

```diff
-   7764: (zz, uz) => {
-     var bz = "youtube",
-       Ez = [61802],
-       nz = "f167",
-       iz = "M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48. … [truncated]
+   6592: (qq, Eq, gq) => {
+     var Yq = gq(6600);
+     Eq.b = {
+       prefix: Yq.prefix,
+       iconName: Yq.iconName,
+       icon: [Yq.width, Yq.height, Yq.aliases, Yq.unicode, Yq.svgPathData]
+     }, Eq.e = Eq.b, Yq.prefix, Yq.iconName, Yq.width, Yq.height, Yq.aliases, Yq.unicode, Yq.svgPathData, Yq.aliases
+   },
+   6603: (qq, Eq, gq) => {
+     var Yq = gq(6605);
+     Eq.e = {
+       prefix: Yq.prefix,
+       iconName: Yq.iconName,
+       icon: [Yq.width, Yq.height, Yq.aliases, Yq.unicode, Yq.svgPathData]
+     }, Eq.i = Eq.e, Yq.prefix, Yq.iconName, Yq.width, Yq.height, Yq.aliases, Yq.unicode, Yq.svgPathData, Yq.aliases
+   },
+ ... (1890 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L10` → after: `L1912-L1923`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R1912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L1912-L1923)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/136.js#L1912-L1923) · [Before (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/136.js#L10)

```diff
-       prefix: "fab",
+       prefix: "fas",
+       iconName: gq,
+       icon: [512, 512, Yq, lq, Oq]
+     }, Eq.g = Eq.e
+   },
+   7592: (qq, Eq) => {
+     var gq = "square-dashed",
+       Yq = [],
+       lq = "e269",
+       Oq = "M160 64c0-17.7 14.3-32 32-32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32zm-40.2-3.5c2.2 17.5-10.3 33.5-27.8 35.7-14.4 1.8-25.9 13.3-27.7 27.7-2.2 17.5-18.2 30-35.7 27.8S-1.4 133.6 .7 116C6.2 72.6 40.6 38.2 84 32.7 101.6 30.6 117.6 43 119.8 60. … [truncated]
+     Eq.b = {
+       prefix: "fas",
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L12-L13` → after: `L1925-L1926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R1925) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L1925-L1926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/136.js#L1925-L1926) · [Before (L12-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/136.js#L12-L13)

```diff
-       icon: [576, 512, Ez, nz, iz]
-     }, uz.h = uz.e
+       icon: [448, 512, Yq, lq, Oq]
+     }, Eq.f = Eq.b
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L15` → after: `L1928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R1928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L1928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/136.js#L1928) · [Before (L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/136.js#L15)

```diff
-   6554: (zz, uz) => {
+   7388: (qq, Eq) => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L19-L22` → after: `L1932-L1935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R1932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L1932-L1935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/136.js#L1932-L1935) · [Before (L19-L22)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/136.js#L19-L22)

```diff
-     var bz = "bolt",
-       Ez = [9889, "zap"],
-       nz = "f0e7",
-       iz = "M338.8-9.9c11.9 8.6 16.3 24.2 10.9 37.8L271.3 224 416 224c13.5 0 25.5 8.4 30.1 21.1s.7 26.9-9.6 35.5l-288 240c-11.3 9.4-27.4 9.9-39.3 1.3s-16.3-24.2-10.9-37.8L176.7 288 32 288c-13.5 0-25.5-8.4-30.1-21.1s-.7-26.9 9.6-35.5l288-240c11.3-9.4 27.4-9.9 39.3-1.3z";
+     var gq = "square-minus",
+       Yq = [61767, "minus-square"],
+       lq = "f146",
+       Oq = "M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm72 200l176 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-176 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z";
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L27` → after: `L1940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R1940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L1940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/136.js#L1940) · [Before (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/136.js#L27)

```diff
-     }, uz.faBolt = uz.definition, uz.prefix = "fas", uz.iconName = bz, uz.width = 448, uz.height = 512, uz.ligatures = Ez, uz.unicode = nz, uz.svgPathData = iz, uz.aliases = Ez
+     }, Eq.faSquareMinus = Eq.definition, Eq.prefix = "fas", Eq.iconName = gq, Eq.width = 448, Eq.height = 512, Eq.ligatures = Yq, Eq.unicode = lq, Eq.svgPathData = Oq, Eq.aliases = Yq
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L29-L30` → after: `L1942-L1954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R1942) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L1942-L1954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/136.js#L1942-L1954) · [Before (L29-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/136.js#L29-L30)

```diff
-   7236: (zz, uz) => {
-     var bz = "person-military-pointing",
+   7599: (qq, Eq) => {
+     var gq = "star",
+       Yq = [11088, 61446],
+       lq = "f005",
+       Oq = "M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 1 … [truncated]
+     Eq.c = {
+       prefix: "fas",
+       iconName: gq,
+       icon: [576, 512, Yq, lq, Oq]
+     }, Eq.g = Eq.c
+   },
+   7583: (qq, Eq) => {
+     var gq = "star-christmas",
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L32-L33` → after: `L1956-L1968`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R1956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L1956-L1968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/136.js#L1956-L1968) · [Before (L32-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/136.js#L32-L33)

```diff
-       nz = "e54a",
-       iz = "M214.9 14.1C202 15.2 192 26 192 39 192 52.8 203.2 64 217 64l151 0c8.8 0 16-7.2 16-16l0-30.6C384 8 376 .7 366.7 1.4L214.9 14.1zM208 112c0 44.2 35.8 80 80 80s80-35.8 80-80c0-5.5-.6-10.8-1.6-16L209.6 96c-1 5.2-1.6 10.5-1.6 16zM40 224c-22.1 0-40 17.9-40 40s17.9 40 40 40l1 … [truncated]
+       lq = "f7d4",
+       Oq = "M15.5 275.9L192 320 236.1 496.5c2.3 9.1 10.5 15.5 19.9 15.5s17.6-6.4 19.9-15.5L320 320 496.5 275.9c9.1-2.3 15.5-10.5 15.5-19.9s-6.4-17.6-15.5-19.9L320 192 275.9 15.5C273.6 6.4 265.4 0 256 0s-17.6 6.4-19.9 15.5L192 192 15.5 236.1C6.4 238.4 0 246.6 0 256s6.4 17.6 15.5 1 … [truncated]
+     Eq.c = {
+       prefix: "fas",
+       iconName: gq,
+       icon: [512, 512, Yq, lq, Oq]
+     }, Eq.g = Eq.c
+   },
+   7601: (qq, Eq) => {
+     var gq = "store",
+       Yq = [],
+       lq = "f54e",
+       Oq = "M30.7 72.3C37.6 48.4 59.5 32 84.4 32l344 0c24.9 0 46.8 16.4 53.8 40.3l23.4 80.2c12.8 43.7-20.1 87.5-65.6 87.5-26.3 0-49.4-14.9-60.8-37.1-11.6 21.9-34.6 37.1-61.4 37.1-26.6 0-49.7-15-61.3-37-11.6 22-34.7 37-61.3 37-26.8 0-49.8-15.1-61.4-37.1-11.4 22.1-34.5 37.1-60.8 37 … [truncated]
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L40-L44` → after: `L1975-L1998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R1975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L1975-L1998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/136.js#L1975-L1998) · [Before (L40-L44)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/136.js#L40-L44)

```diff
-   7385: (zz, uz) => {
-     var bz = "sparkle",
-       Ez = [],
-       nz = "e5d6",
-       iz = "M278.5 15.6C275 6.2 266 0 256 0s-19 6.2-22.5 15.6L174.2 174.2 15.6 233.5C6.2 237 0 246 0 256s6.2 19 15.6 22.5l158.6 59.4 59.4 158.6C237 505.8 246 512 256 512s19-6.2 22.5-15.6l59.4-158.6 158.6-59.4C505.8 275 512 266 512 256s-6.2-19-15.6-22.5L337.8 174.2 278.5 15.6z";
+   7604: (qq, Eq, gq) => {
+     var Yq = gq(7374);
+     Eq.b = {
+       prefix: Yq.prefix,
+       iconName: Yq.iconName,
+       icon: [Yq.width, Yq.height, Yq.aliases, Yq.unicode, Yq.svgPathData]
+     }, Eq.d = Eq.b, Yq.prefix, Yq.iconName, Yq.width, Yq.height, Yq.aliases, Yq.unicode, Yq.svgPathData, Yq.aliases
+   },
+   7609: (qq, Eq) => {
+     var gq = "sun-bright",
+       Yq = ["sun-alt"],
+       lq = "e28f",
+       Oq = "M288 432c13.3 0 24 10.7 24 24l0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-64c0-13.3 10.7-24 24-24zM129.6 380.4c9.4-9.4 24.6-9.4 34 0s9.4 24.6 0 34l-45.3 45.3c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l45.2-45.3zm282.8 0c9.4-9.4 24.6-9.4 34 0l45.3 45.3c9.4 9.4 9.4 24.6 0 … [truncated]
+     Eq.c = {
+       prefix: "fas",
+       iconName: gq,
+ ... (8 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L51` → after: `L2005-L2109`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R2005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L2005-L2109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/136.js#L2005-L2109) · [Before (L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/136.js#L51)

```diff
-   7483: (zz, uz) => {
+   7617: (qq, Eq, gq) => {
+     var Yq = gq(6692);
+     Eq.e = {
+       prefix: Yq.prefix,
+       iconName: Yq.iconName,
+       icon: [Yq.width, Yq.height, Yq.aliases, Yq.unicode, Yq.svgPathData]
+     }, Eq.g = Eq.e, Yq.prefix, Yq.iconName, Yq.width, Yq.height, Yq.aliases, Yq.unicode, Yq.svgPathData, Yq.aliases
+   },
+   7626: (qq, Eq, gq) => {
+     var Yq = gq(7157);
+     Eq.e = {
+       prefix: Yq.prefix,
+       iconName: Yq.iconName,
+       icon: [Yq.width, Yq.height, Yq.aliases, Yq.unicode, Yq.svgPathData]
+     }, Eq.h = Eq.e, Yq.prefix, Yq.iconName, Yq.width, Yq.height, Yq.aliases, Yq.unicode, Yq.svgPathData, Yq.aliases
+   },
+ ... (89 more added lines; see GitHub link above)
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L56` → after: `L2114`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R2114) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L2114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/136.js#L2114) · [Before (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/136.js#L56)

```diff
-     uz.c = {
+     Eq.b = {
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L60` → after: `L2118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R2118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L2118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/136.js#L2118) · [Before (L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/136.js#L60)

```diff
-     }, uz.g = uz.c
+     }, Eq.f = Eq.b
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L62-L66` → after: `L2120-L2146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R2120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L2120-L2146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/136.js#L2120-L2146) · [Before (L62-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/136.js#L62-L66)

```diff
-   7620: (zz, uz) => {
-     var bz = "wrench",
-       Ez = [128295],
-       nz = "f0ad",
-       iz = "M509.4 98.6c7.6-7.6 20.3-5.7 24.1 4.3 6.8 17.7 10.5 37 10.5 57.1 0 88.4-71.6 160-160 160-17.5 0-34.4-2.8-50.2-8L146.9 498.9c-28.1 28.1-73.7 28.1-101.8 0s-28.1-73.7 0-101.8L232 210.2c-5.2-15.8-8-32.6-8-50.2 0-88.4 71.6-160 160-160 20.1 0 39.4 3.7 57.1 10.5 10 3.8 11.8  … [truncated]
+   7683: (qq, Eq) => {
+     var gq = "user-astronaut",
+       Yq = [],
+       lq = "f4fb",
+       Oq = "M224 336c74.6 0 138.4-46.4 164-112l4 0c13.3 0 24-10.7 24-24l0-80c0-13.3-10.7-24-24-24l-4 0C362.4 30.4 298.6-16 224-16S85.6 30.4 60 96l-4 0c-13.3 0-24 10.7-24 24l0 80c0 13.3 10.7 24 24 24l4 0c25.6 65.6 89.4 112 164 112zM208 80l32 0c53 0 96 43 96 96s-43 96-96 96l-32 0c- … [truncated]
+     Eq.e = {
+       prefix: "fas",
+       iconName: gq,
+       icon: [448, 512, Yq, lq, Oq]
+     }, Eq.f = Eq.e
+   },
+   7690: (qq, Eq) => {
+     var gq = "user-check",
+       Yq = [],
+       lq = "f4fc",
+       Oq = "M286 304c98.5 0 178.3 79.8 178.3 178.3 0 16.4-13.3 29.7-29.7 29.7L78 512c-16.4 0-29.7-13.3-29.7-29.7 0-98.5 79.8-178.3 178.3-178.3l59.4 0zM585.7 105.9c7.8-10.7 22.8-13.1 33.5-5.3s13.1 22.8 5.3 33.5L522.1 274.9c-4.2 5.7-10.7 9.4-17.7 9.8s-14-2.2-18.9-7.3l-46.4-48c-9.2- … [truncated]
+ ... (11 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L73-L74` → after: `L2153-L2234`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R2153) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L2153-L2234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/136.js#L2153-L2234) · [Before (L73-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/136.js#L73-L74)

```diff
-   7630: (zz, uz, bz) => {
-     var Ez = bz(6554);
+   7706: (qq, Eq, gq) => {
+     var Yq = gq(7712);
+     Eq.e = {
+       prefix: Yq.prefix,
+       iconName: Yq.iconName,
+       icon: [Yq.width, Yq.height, Yq.aliases, Yq.unicode, Yq.svgPathData]
+     }, Eq.h = Eq.e, Yq.prefix, Yq.iconName, Yq.width, Yq.height, Yq.aliases, Yq.unicode, Yq.svgPathData, Yq.aliases
+   },
+   7712: (qq, Eq) => {
+     Object.defineProperty(Eq, "__esModule", {
+       value: !0
+     });
+     var gq = "user-group",
+       Yq = [128101, "user-friends"],
+       lq = "f500",
+       Oq = "M64 128a112 112 0 1 1 224 0 112 112 0 1 1 -224 0zM0 464c0-97.2 78.8-176 176-176s176 78.8 176 176l0 6c0 23.2-18.8 42-42 42L42 512c-23.2 0-42-18.8-42-42l0-6zM432 64a96 96 0 1 1 0 192 96 96 0 1 1 0-192zm0 240c79.5 0 144 64.5 144 144l0 22.4c0 23-18.6 41.6-41.6 41.6l-144.8 … [truncated]
+ ... (66 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L79` → after: `L2239`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R2239) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L2239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/136.js#L2239) · [Before (L79)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/136.js#L79)

```diff
-     }, uz.f = uz.d, Ez.prefix, Ez.iconName, Ez.width, Ez.height, Ez.aliases, Ez.unicode, Ez.svgPathData, Ez.aliases
+     }, Eq.e = Eq.d, Yq.prefix, Yq.iconName, Yq.width, Yq.height, Yq.aliases, Yq.unicode, Yq.svgPathData, Yq.aliases
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L81-L84` → after: `L2241-L2254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R2241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L2241-L2254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/136.js#L2241-L2254) · [Before (L81-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/136.js#L81-L84)

```diff
-   39925: (zz, uz, bz) => {
-     bz.d(uz, {
-       e: () => Mz,
-       f: () => lz
+   7746: (qq, Eq) => {
+     var gq = "users-gear",
+       Yq = ["users-cog"],
+       lq = "f509",
+       Oq = "M320 224a104 104 0 1 0 0-208 104 104 0 1 0 0 208zM96 232a72 72 0 1 0 0-144 72 72 0 1 0 0 144zM0 416l0 32c0 17.7 14.3 32 32 32l86.7 0c-4.3-9.8-6.7-20.6-6.7-32l0-16c0-53.2 20-101.8 52.9-138.6-11.7-3.5-24.1-5.4-36.9-5.4-70.7 0-128 57.3-128 128zM616 160a72 72 0 1 0 -144 0 … [truncated]
+     Eq.c = {
+       prefix: "fas",
+       iconName: gq,
+       icon: [640, 512, Yq, lq, Oq]
+     }, Eq.f = Eq.c
+   },
+   7755: (qq, Eq) => {
+     Object.defineProperty(Eq, "__esModule", {
+       value: !0
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L86-L119` → after: `L2256-L2276`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R2256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L2256-L2276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/136.js#L2256-L2276) · [Before (L86-L119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/136.js#L86-L119)

```diff
-     var Ez = bz(3052);
-     let nz = null,
-       iz = null;
- 
-     function lz() {
-       return iz ??= bz.e(208).then((() => bz(35817))).then((zz => {
-         let {
-           ITEM_SPRITES: uz,
-           ITEM_SPRITES_WITHOUT_FILE: bz,
-           ITEM_FILES_WITHOUT_SPRITE: iz
-         } = zz;
-         nz = function(zz, uz, bz) {
-           const nz = new Set,
-             iz = (0, Ez.y)(uz);
-           let lz = 0;
-           for (const [Ez, Mz] of zz.entries()) Ez === iz[lz] ? lz++ : nz.add(Mz);
- ... (18 more removed lines; see GitHub link above)
+     var gq = "video",
+       Yq = ["video-camera"],
+       lq = "f03d",
+       Oq = "M96 64c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L96 64zM464 336l73.5 58.8c4.2 3.4 9.4 5.2 14.8 5.2 13.1 0 23.7-10.6 23.7-23.7l0-240.6c0-13.1-10.6-23.7-23.7-23.7-5.4 0-10.6 1.8-14.8 5.2L464 176 464 336z";
+     Eq.definition = {
+       prefix: "fas",
+       iconName: gq,
+       icon: [576, 512, Yq, lq, Oq]
+     }, Eq.faVideo = Eq.definition, Eq.prefix = "fas", Eq.iconName = gq, Eq.width = 576, Eq.height = 512, Eq.ligatures = Yq, Eq.unicode = lq, Eq.svgPathData = Oq, Eq.aliases = Yq
+   },
+   7758: (qq, Eq, gq) => {
+     var Yq = gq(7755);
+     Eq.b = {
+       prefix: Yq.prefix,
+       iconName: Yq.iconName,
+       icon: [Yq.width, Yq.height, Yq.aliases, Yq.unicode, Yq.svgPathData]
+ ... (5 more added lines; see GitHub link above)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L121-L149` → after: `L2278-L2298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R2278) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L2278-L2298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/136.js#L2278-L2298) · [Before (L121-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/136.js#L121-L149)

```diff
-     var Ez = bz(39925);
-     let nz = null,
-       iz = null;
- 
-     function lz() {
-       return nz ??= bz.e(58).then((() => bz(41849))).catch((zz => {
-         throw nz = null, zz
-       })), nz
-     }
- 
-     function Mz() {
-       return iz ??= Promise.all([lz(), (0, Ez.f)()]).then((zz => {
-         let [uz] = zz;
-         return uz
-       }), (zz => {
-         throw iz = null, zz
- ... (13 more removed lines; see GitHub link above)
+     var gq = "volume",
+       Yq = [128265, "volume-medium"],
+       lq = "f6a8",
+       Oq = "M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM441.1 107c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C443.3 170.7 … [truncated]
+     Eq.definition = {
+       prefix: "fas",
+       iconName: gq,
+       icon: [512, 512, Yq, lq, Oq]
+     }, Eq.faVolume = Eq.definition, Eq.prefix = "fas", Eq.iconName = gq, Eq.width = 512, Eq.height = 512, Eq.ligatures = Yq, Eq.unicode = lq, Eq.svgPathData = Oq, Eq.aliases = Yq
+   },
+   7770: (qq, Eq, gq) => {
+     var Yq = gq(7772);
+     Eq.b = {
+       prefix: Yq.prefix,
+       iconName: Yq.iconName,
+       icon: [Yq.width, Yq.height, Yq.aliases, Yq.unicode, Yq.svgPathData]
+ ... (5 more added lines; see GitHub link above)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L151-L373` → after: `L2300-L2357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R2300) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L2300-L2357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/136.js#L2300-L2357) · [Before (L151-L373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/136.js#L151-L373)

```diff
-     var Ez = bz(4249),
-       nz = bz(4263),
-       iz = bz(9007),
-       lz = bz(3043),
-       Mz = bz(3036),
-       tz = bz(1081),
-       Hz = bz(40187),
-       Oz = bz(96),
-       pz = bz(1249),
-       dz = bz(39922),
-       Fz = bz(7764),
-       Zz = bz(7236),
-       Rz = bz(7385),
-       Kz = bz(7483),
-       wz = bz(7620),
-       Xz = bz(7630);
- ... (207 more removed lines; see GitHub link above)
+     var gq = "volume-low",
+       Yq = [128264, "volume-down"],
+       lq = "f027",
+       Oq = "M48 352l48 0 134.1 119.2c6.4 5.7 14.6 8.8 23.1 8.8 19.2 0 34.8-15.6 34.8-34.8l0-378.4c0-19.2-15.6-34.8-34.8-34.8-8.5 0-16.7 3.1-23.1 8.8L96 160 48 160c-26.5 0-48 21.5-48 48l0 96c0 26.5 21.5 48 48 48zM380.6 181.5c-10.3-8.4-25.4-6.8-33.8 3.5s-6.8 25.4 3.5 33.8C361.1 227 … [truncated]
+     Eq.definition = {
+       prefix: "fas",
+       iconName: gq,
+       icon: [448, 512, Yq, lq, Oq]
+     }, Eq.faVolumeLow = Eq.definition, Eq.prefix = "fas", Eq.iconName = gq, Eq.width = 448, Eq.height = 512, Eq.ligatures = Yq, Eq.unicode = lq, Eq.svgPathData = Oq, Eq.aliases = Yq
+   },
+   7777: (qq, Eq, gq) => {
+     var Yq = gq(7763);
+     Eq.d = {
+       prefix: Yq.prefix,
+       iconName: Yq.iconName,
+       icon: [Yq.width, Yq.height, Yq.aliases, Yq.unicode, Yq.svgPathData]
+ ... (42 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L375` → after: `L2359-L2406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R2359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L2359-L2406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/136.js#L2359-L2406) · [Before (L375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/136.js#L375)

```diff
-   41816: (zz, uz, bz) => {
+   7804: (qq, Eq, gq) => {
+     var Yq = gq(7793);
+     Eq.c = {
+       prefix: Yq.prefix,
+       iconName: Yq.iconName,
+       icon: [Yq.width, Yq.height, Yq.aliases, Yq.unicode, Yq.svgPathData]
+     }, Eq.e = Eq.c, Yq.prefix, Yq.iconName, Yq.width, Yq.height, Yq.aliases, Yq.unicode, Yq.svgPathData, Yq.aliases
+   },
+   7812: (qq, Eq) => {
+     var gq = "wrench",
+       Yq = [128295],
+       lq = "f0ad",
+       Oq = "M509.4 98.6c7.6-7.6 20.3-5.7 24.1 4.3 6.8 17.7 10.5 37 10.5 57.1 0 88.4-71.6 160-160 160-17.5 0-34.4-2.8-50.2-8L146.9 498.9c-28.1 28.1-73.7 28.1-101.8 0s-28.1-73.7 0-101.8L232 210.2c-5.2-15.8-8-32.6-8-50.2 0-88.4 71.6-160 160-160 20.1 0 39.4 3.7 57.1 10.5 10 3.8 11.8  … [truncated]
+     Eq.e = {
+       prefix: "fas",
+       iconName: gq,
+ ... (32 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L377-L378` → after: `L2408-L2409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R2408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L2408-L2409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/136.js#L2408-L2409) · [Before (L377-L378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/136.js#L377-L378)

```diff
-       d: () => ou,
-       g: () => Ru
+       b: () => lq,
+       e: () => Oq
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L380-L917` → after: `L2411-L2414`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R2411) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L2411-L2414)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/136.js#L2411-L2414) · [Before (L380-L917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/136.js#L380-L917)

```diff
-     var Ez = bz(36185),
-       nz = bz(40187),
-       iz = bz(38239),
-       lz = bz(577),
-       Mz = bz(316);
-     const tz = {
-         DEFAULT_FONT_SIZE: 47,
-         DEFAULT_SUBTITLE_FONT_SIZE: 30,
-         HORIZONTAL_PADDING: 30,
-         VERTICAL_PADDING: 22,
-         TEXT_SHADOW_WIDTH: 2,
-         LINE_SPACING: 8,
-         EFFECT_ICON_SIZE: 70
-       },
-       Hz = 41;
- 
- ... (522 more removed lines; see GitHub link above)
+     var Yq = {
+         prefix: "fas",
+         iconName: "shirt",
+         icon: [640, 512, [128085, "t-shirt", "tshirt"], "f553", "M320.2 112c44.2 0 80-35.8 80-80l53.5 0c17 0 33.3 6.7 45.3 18.7L617.6 169.4c12.5 12.5 12.5 32.8 0 45.3l-50.7 50.7c-12.5 12.5-32.8 12.5-45.3 0l-41.4-41.4 0 224c0 35.3-28.7 64-64 64l-192 0c-35.3 0-64-28.7-64-64l0-224-4 … [truncated]
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/136.js` (Changed code · before: `L919-L1094` → after: `L2416-L2417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00R2416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a7ffd272d782f5f4c47dd6f75e57d63849243a5e020dea3d9302e65e4417de00) · [After (L2416-L2417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/136.js#L2416-L2417) · [Before (L919-L1094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/136.js#L919-L1094)

```diff
-       Zu = [du(kz.Nametag, Fu), du(kz.Nametag, {
-         ...Fu,
-         info: {
-           content: [{
-             str: "Ag"
-           }],
-           subtitle: ["Ag"]
-         }
-       }), du(kz.MultilineText, {
-         box: {
-           content: ["Ag"]
-         },
-         shown: null
-       }), ...Ez.d.map(((zz, uz) => du(kz.Board, {
-         shared: {
-           text: "Ag",
- ... (160 more removed lines; see GitHub link above)
+       lq = Yq,
+       Oq = Yq
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/137.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/137.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4)

#### 1. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L4` → after: `L4-L81`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L4-L81)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/137.js#L4-L81) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/137.js#L4)

```diff
-   7768: (zz, uz, bz) => {
+   7972: (qq, Eq) => {
+     var gq = "youtube",
+       Yq = [61802],
+       lq = "f167",
+       Oq = "M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48. … [truncated]
+     Eq.e = {
+       prefix: "fab",
+       iconName: gq,
+       icon: [576, 512, Yq, lq, Oq]
+     }, Eq.g = Eq.e
+   },
+   6731: (qq, Eq) => {
+     Object.defineProperty(Eq, "__esModule", {
+       value: !0
+     });
+     var gq = "bolt",
+ ... (62 more added lines; see GitHub link above)
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L6` → after: `L83-L84`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R83) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L83-L84)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/137.js#L83-L84) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/137.js#L6)

```diff
-       encodeBinaryMessageWithMetricsCookies: () => nz
+       b: () => xq,
+       c: () => mq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/137.js` (Changed code · before: `L8-L11` → after: `L86-L1106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4R86) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-12067c17c24192b5589ccdb33c3ffd2c08961153162e90a38cc3a7d98d7157d4) · [After (L86-L1106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/137.js#L86-L1106) · [Before (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/137.js#L8-L11)

```diff
-     var Ez = bz(3521);
- 
-     function nz(zz) {
-       return Ez.k.toBuffer(zz)
+     var Yq = gq(3170);
+     let lq = null,
+       Oq = null;
+ 
+     function mq() {
+       return Oq ??= gq.e(209).then((() => gq(36389))).then((qq => {
+         let {
+           ITEM_SPRITES: Eq,
+           ITEM_SPRITES_WITHOUT_FILE: gq,
+           ITEM_FILES_WITHOUT_SPRITE: Oq
+         } = qq;
+         lq = function(qq, Eq, gq) {
+           const lq = new Set,
+             Oq = (0, Yq.y)(Eq);
+           let mq = 0;
+           for (const [Yq, xq] of qq.entries()) Yq === Oq[mq] ? mq++ : lq.add(xq);
+ ... (1005 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/138.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/138.js` (3 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-468f6c5b226b132ecfb5750921d44a837e8e49fd82f3b66158a1a840b45383ad)

#### 1. `bundles/preprod.bloxd.io/chunks/js/138.js` (Changed code · before: `L4-L8` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-468f6c5b226b132ecfb5750921d44a837e8e49fd82f3b66158a1a840b45383adR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-468f6c5b226b132ecfb5750921d44a837e8e49fd82f3b66158a1a840b45383ad) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/138.js#L4-L6) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/138.js#L4-L8)

```diff
-   7774: (zz, uz, bz) => {
-     bz.r(uz), bz.d(uz, {
-       BloxdDiscordSDK: () => Rz,
-       DiscordLoginCancelledError: () => Zz,
-       discordPopupTimeoutMs: () => Fz
+   7977: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       encodeBinaryMessageWithMetricsCookies: () => lq
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/138.js` (Changed code · before: `L10-L138` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-468f6c5b226b132ecfb5750921d44a837e8e49fd82f3b66158a1a840b45383adR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-468f6c5b226b132ecfb5750921d44a837e8e49fd82f3b66158a1a840b45383ad) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/138.js#L8) · [Before (L10-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/138.js#L10-L138)

```diff
-     var Ez = bz(158),
-       nz = bz(1219),
-       iz = bz(1118),
-       lz = bz(1139),
-       Mz = bz.n(lz),
-       tz = bz(1195),
-       Hz = bz(33),
-       Oz = bz(588),
-       pz = bz(1322),
-       dz = bz(1197);
-     const Fz = 6e5;
-     class Zz extends Error {
-       constructor() {
-         super(...arguments), this.name = iz.discordLoginCancelledErrorName
-       }
-     }
- ... (113 more removed lines; see GitHub link above)
+     var Yq = gq(3595);
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/138.js` (Changed code · before: `L141` → after: `L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-468f6c5b226b132ecfb5750921d44a837e8e49fd82f3b66158a1a840b45383adR11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-468f6c5b226b132ecfb5750921d44a837e8e49fd82f3b66158a1a840b45383ad) · [After (L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/138.js#L11) · [Before (L141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/138.js#L141)

```diff
-       return zz instanceof Ez.c && 435 === zz.httpCode
+       return Yq.l.toBuffer(qq)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/139.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/139.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226)

#### 1. `bundles/preprod.bloxd.io/chunks/js/139.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/139.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/139.js#L4)

```diff
-   7777: (zz, uz, bz) => {
+   7983: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/139.js` (Changed code · before: `L6` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/139.js#L6-L8) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/139.js#L6)

```diff
-       BloxdFirebaseSdk: () => Oz
+       BloxdDiscordSDK: () => Vq,
+       DiscordLoginCancelledError: () => aq,
+       discordPopupTimeoutMs: () => Nq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/139.js` (Changed code · before: `L8-L21` → after: `L10-L25`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226) · [After (L10-L25)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/139.js#L10-L25) · [Before (L8-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/139.js#L8-L21)

```diff
-     var Ez = bz(1790),
-       nz = bz(2709),
-       iz = bz(104),
-       lz = bz(96),
-       Mz = bz(1638),
-       tz = bz(1979);
-     const Hz = {
-       apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
-       authDomain: "bloxd-ee1aa.firebaseapp.com",
-       projectId: "bloxd-ee1aa",
-       storageBucket: "bloxd-ee1aa.appspot.com",
-       messagingSenderId: "758847442742",
-       appId: "1:758847442742:web:7bb74eb261641e30f02d97"
-     };
+     var Yq = gq(163),
+       lq = gq(1216),
+       Oq = gq(1109),
+       mq = gq(1131),
+       xq = gq.n(mq),
+       Aq = gq(1195),
+       cq = gq(38),
+       uq = gq(598),
+       Bq = gq(1336),
+       Wq = gq(1201);
+     const Nq = 6e5;
+     class aq extends Error {
+       constructor() {
+         super(...arguments), this.name = Oq.discordLoginCancelledErrorName
+       }
+     }
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/139.js` (Changed code · before: `L23-L24` → after: `L27-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226) · [After (L27-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/139.js#L27-L111) · [Before (L23-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/139.js#L23-L24)

```diff
-       constructor() {}
-       static async setup() {
+       constructor() {
+         this.popupWindowPromise = null, this.popupWindowPromiseResolve = null, this.popupWindowPromiseReject = null, this.popupWindow = null, this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.bloxdDiscordRefreshTokenKey = "4PSIDTCPM", this.discordRedirect … [truncated]
+         const qq = new URL(this.discordRedirectUrl).origin;
+         window.addEventListener("message", (Eq => {
+           var gq;
+           if (Eq.origin !== qq || "oauth_authentication_discord" !== (null === (gq = Eq.data) || void 0 === gq ? void 0 : gq.type)) return;
+           if ("string" !== typeof Eq.data.code || !Eq.data.code) return void this.failPopup(new aq("Discord authentication was cancelled on Discord"));
+           const Yq = this.popupWindowPromiseResolve;
+           this.resetPopupState(), null === Yq || void 0 === Yq || Yq(Eq.data.code)
+         }))
+       }
+       resetPopupState() {
+         null !== this.popupWindowCheckInterval && window.clearInterval(this.popupWindowCheckInterval), null !== this.popupWindowTimeout && window.clearTimeout(this.popupWindowTimeout), this.popupWindowCheckInterval = null, this.popupWindowTimeout = null, this.popupWindowPromiseRe … [truncated]
+       }
+       failPopup(qq) {
+         var Eq;
+ ... (69 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/139.js` (Changed code · before: `L26` → after: `L113-L127`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226) · [After (L113-L127)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/139.js#L113-L127) · [Before (L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/139.js#L26)

```diff
-           return await Oz.setupInternal()
+           const Yq = await xq()((async () => {
+             try {
+               return await (0, Oq.postJsonWithMetricsCookiesAndJsonResponse)(`${Aq.clientSideServerUrls.indexUrl}/index/discord/collect-event`, {
+                 refreshToken: Eq
+               }, {
+                 retries: 0
+               }, qq.getMetricsCookies())
+             } catch (gq) {
+               if (dq(gq)) throw new(xq().AbortError)(gq);
+               throw gq
+             }
+           }), {
+             retries: 3
+           });
+           gq = Yq.accessToken, cq.c.setItem(this.bloxdDiscordRefreshTokenKey, Yq.refreshToken)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/139.js` (Changed code · before: `L28` → after: `L129-L132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226R129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226) · [After (L129-L132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/139.js#L129-L132) · [Before (L28)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/139.js#L28)

```diff
-           return console.error("Failed to setup Firebase SDK:", zz), null
+           return dq(Yq) ? (cq.c.removeItem(this.bloxdDiscordRefreshTokenKey), null) : (console.error("Failed to refresh Discord access token:", Yq), null)
+         }
+         return {
+           accessToken: gq
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/139.js` (Changed code · before: `L31-L154` → after: `L135-L136`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226R135) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-353b7d2bd7e50ec8c9af91304c649bb40cd2551e3c83add06de35daf1a810226) · [After (L135-L136)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/139.js#L135-L136) · [Before (L31-L154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/139.js#L31-L154)

```diff
-       static async setupInternal() {
-         const zz = await Promise.all([bz.e(256), bz.e(255)]).then((() => bz(39654))),
-           uz = await Promise.all([bz.e(256), bz.e(257)]).then((() => bz(39686))),
-           pz = await Promise.all([bz.e(256), bz.e(258)]).then((() => bz(39688))),
-           dz = zz.initializeApp({
-             ...Hz,
-             measurementId: nz.e
-           });
-         (0, nz.H)(), window.gtag("config", nz.e), (0, nz.E)(), window.gtag("config", "AW-16469618203");
-         const Fz = uz.getAnalytics(dz),
-           Zz = {
-             portal: iz.currentUrl.getSearchParam("portal") || "root",
-             loggedIn: !1
-           };
-         uz.setUserProperties(Fz, Zz);
-         const Rz = pz.getAuth();
- ... (108 more removed lines; see GitHub link above)
+       signOut() {
+         this.failPopup(new aq("Signed out of Discord during login")), cq.c.removeItem(this.bloxdDiscordRefreshTokenKey)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/140.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/140.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1)

#### 1. `bundles/preprod.bloxd.io/chunks/js/140.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/140.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/140.js#L4)

```diff
-   7781: (zz, uz, bz) => {
+   7990: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/140.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/140.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/140.js#L6)

```diff
-       BloxdDiscordActivitySdk: () => Xz
+       BloxdFirebaseSdk: () => uq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/140.js` (Changed code · before: `L8-L26` → after: `L8-L13`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1) · [After (L8-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/140.js#L8-L13) · [Before (L8-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/140.js#L8-L26)

```diff
-     var Ez = bz(7787),
-       nz = bz(1219),
-       iz = bz(1181),
-       lz = bz(588),
-       Mz = bz(1241),
-       tz = bz(1673),
-       Hz = bz(1296),
-       Oz = bz(738),
-       pz = bz(20),
-       dz = bz(1197),
-       Fz = function(zz) {
-         return zz.APPLICATION_COMMANDS = "applications.commands", zz.IDENTIFY = "identify", zz.EMAIL = "email", zz.GUILDS = "guilds", zz.READ_DM_CHANNELS = "dm_channels.read", zz.WRITE_ACTIVITIES = "rpc.activities.write", zz
-       }(Fz || {}),
-       Zz = function(zz) {
-         return zz[zz.CLOSE_NORMAL = 1e3] = "CLOSE_NORMAL", zz[zz.CLOSE_UNSUPPORTED = 1003] = "CLOSE_UNSUPPORTED", zz[zz.CLOSE_ABNORMAL = 1006] = "CLOSE_ABNORMAL", zz[zz.INVALID_CLIENTID = 4e3] = "INVALID_CLIENTID", zz[zz.INVALID_ORIGIN = 4001] = "INVALID_ORIGIN", zz[zz.RATELIMITE … [truncated]
-       }(Zz || {}),
- ... (3 more removed lines; see GitHub link above)
+     var Yq = gq(1812),
+       lq = gq(2834),
+       Oq = gq(106),
+       mq = gq(96),
+       xq = gq(1677),
+       Aq = gq(2029);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/140.js` (Changed code · before: `L28-L63` → after: `L15-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1R15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1) · [After (L15-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/140.js#L15-L21) · [Before (L28-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/140.js#L28-L63)

```diff
-         Minigames: "Playing",
-         Puzzle: "Solving",
-         Escape: "Escaping",
-         Parkour: "Parkouring",
-         "Cool Parkour": "Parkouring",
-         "Two Player Parkour": "Parkouring",
-         "Clutch Parkour": "Parkouring",
-         "Challenging Parkour": "Parkouring",
-         "Progressive Parkour": "Parkouring",
-         "Themed Parkour": "Parkouring",
-         Obby: "Parkouring",
-         Tower: "Climbing",
-         Roleplay: "Roleplaying",
-         Arena: "Battling",
-         Duels: "Duelling",
-         Shooting: "Shooting",
- ... (20 more removed lines; see GitHub link above)
+       apiKey: "AIzaSyCJ-G6m_NyA3P021v-ugDmMmkcKysUebSE",
+       authDomain: "bloxd-ee1aa.firebaseapp.com",
+       projectId: "bloxd-ee1aa",
+       storageBucket: "bloxd-ee1aa.appspot.com",
+       messagingSenderId: "758847442742",
+       appId: "1:758847442742:web:7bb74eb261641e30f02d97"
+     };
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/140.js` (Changed code · before: `L65-L66` → after: `L23-L29`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1R23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1) · [After (L23-L29)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/140.js#L23-L29) · [Before (L65-L66)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/140.js#L65-L66)

```diff
-       constructor(zz) {
-         this.discordSdk = zz, this.guildNameCache = {}, this.startTime = Date.now(), this.cachedAccessToken = null
+       constructor() {}
+       static async setup() {
+         try {
+           return await uq.setupInternal()
+         } catch (qq) {
+           return console.error("Failed to setup Firebase SDK:", qq), null
+         }
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/140.js` (Changed code · before: `L68-L97` → after: `L31-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1R31) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1) · [After (L31-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/140.js#L31-L97) · [Before (L68-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/140.js#L68-L97)

```diff
-       static async setup() {
-         console.log("Setting up Discord SDK with client id", dz.c.discordClientID);
-         const zz = new Ez.c(dz.c.discordClientID);
-         let uz = !1;
-         setTimeout((() => {
-           uz || (console.warn("Discord SDK took too long to initialize"), (0, tz.reloadBloxd)())
-         }), 15e3), await zz.ready(), uz = !0;
-         try {
-           const {
-             enabled: uz
-           } = await zz.commands.encourageHardwareAcceleration();
-           uz || console.warn("Hardware acceleration not enabled in the Discord client")
-         } catch (nz) {
-           console.error("Failed to encourage hardware acceleration in the Discord client", nz)
-         }
-         const bz = new Xz(zz);
- ... (14 more removed lines; see GitHub link above)
+       static async setupInternal() {
+         const qq = await Promise.all([gq.e(258), gq.e(257)]).then((() => gq(40252))),
+           Eq = await Promise.all([gq.e(258), gq.e(259)]).then((() => gq(40278))),
+           Bq = await Promise.all([gq.e(258), gq.e(260)]).then((() => gq(40280))),
+           Wq = qq.initializeApp({
+             ...cq,
+             measurementId: lq.b
+           });
+         (0, lq.I)(), window.gtag("config", lq.b), (0, lq.G)(), window.gtag("config", "AW-16469618203");
+         const Nq = Eq.getAnalytics(Wq),
+           aq = {
+             portal: Oq.currentUrl.getSearchParam("portal") || "root",
+             loggedIn: !1
+           };
+         Eq.setUserProperties(Nq, aq);
+         const Vq = Bq.initializeAuth(Wq, {
+ ... (51 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/140.js` (Changed code · before: `L100-L110` → after: `L100-L124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1) · [After (L100-L124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/140.js#L100-L124) · [Before (L100-L110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/140.js#L100-L110)

```diff
-         await this.discordSdk.commands.setActivity({
-           activity: {
-             type: Rz.PLAYING,
-             details: uz,
-             state: bz,
-             assets: {
-               large_image: "icon",
-               large_text: uz
-             },
-             timestamps: {
-               start: this.startTime
+         async function Qq(qq, Eq) {
+           const gq = await xq.c.request(`${qq}.${Eq}`, {});
+           if (null === gq) return null;
+           const Yq = "google" === qq ? Bq.GoogleAuthProvider.credential(gq.idToken) : jq.credential({
+             idToken: gq.idToken
+           });
+           return (await Bq.signInWithCredential(Vq, Yq)).user
+         }
+         class yq extends uq {
+           setUserProperties(qq) {
+             Eq.setUserProperties(Nq, qq)
+           }
+           onIdTokenChanged(qq) {
+             Bq.onIdTokenChanged(Vq, qq)
+           }
+           canSignIn(qq) {
+ ... (9 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/140.js` (Changed code · before: `L113-L130` → after: `L127-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1R127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1) · [After (L127-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/140.js#L127-L155) · [Before (L113-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/140.js#L113-L130)

```diff
-         }).catch((zz => {
-           console.error(`Failed to update Discord activity rich presence with description="${uz}":`, zz)
-         }))
-       }
-       async getInGameDescriptions() {
-         var zz;
-         const {
-           requestedGameNameWithVariation: uz
-         } = (0, Hz.b)(), bz = (0, Oz.i)(uz), Ez = null !== (zz = wz[uz]) && void 0 !== zz ? zz : Kz[bz.type], nz = await (0, iz.B)(Mz.d.ENGLISH, bz.title), tz = (0, Hz.b)();
-         if ((0, Hz.g)(tz)) return {
-           primary: `${Ez} in a Discord World`
-         };
-         const pz = `${Ez} in ${nz}`;
-         return (0, lz.F)(tz.lobbyName) ? {
-           primary: pz
-         } : {
- ... (2 more removed lines; see GitHub link above)
+           async getCurrentUser(qq) {
+             const Eq = Vq.currentUser;
+             if (Eq) {
+               const {
+                 signInProvider: gq
+               } = await Eq.getIdTokenResult(!1);
+               if (gq === Yq.k[qq]) return Eq
+             }
+             const gq = (0, Aq.e)(qq);
+             if (null === gq) return null;
+             try {
+               return await Qq(gq, "getCurrentUser")
+             } catch (lq) {
+               return console.error(`Failed to get the current ${qq} user from the app:`, lq), null
+             }
+           }
+ ... (13 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/140.js` (Changed code · before: `L132-L248` → after: `L157`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-4bd8ffad96d678ab956ef15f461b43bdbe23594ddaac4d6687e16395928f1fc1) · [After (L157)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/140.js#L157) · [Before (L132-L248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/140.js#L132-L248)

```diff
-       }
-       getCurrentChannelType() {
-         const {
-           channelId: zz,
-           guildId: uz
-         } = this.getCurrentChannelAndGuild();
-         return null !== uz ? nz.d.GUILD : null !== zz ? nz.d.DM : null
-       }
-       getRequiredScopeForCurrentChannel() {
-         const zz = this.getCurrentChannelType(),
-           uz = [Fz.APPLICATION_COMMANDS, Fz.IDENTIFY, Fz.EMAIL, Fz.GUILDS, Fz.WRITE_ACTIVITIES];
-         switch (zz) {
-           case nz.d.DM:
-           case nz.d.GUILD:
-             return [...uz];
-           default:
- ... (101 more removed lines; see GitHub link above)
+         return (0, mq.isMobileApp)() ? (await xq.c.ready, new yq) : new Pq
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/141.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/141.js` (25 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417)

#### 1. `bundles/preprod.bloxd.io/chunks/js/141.js` (Changed code · before: `L4-L9` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/141.js#L4) · [Before (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/141.js#L4-L9)

```diff
-   7787: (zz, uz, bz) => {
-     bz.d(uz, {
-       c: () => Mi,
-       d: () => mb
-     });
-     var Ez = {};
+   7998: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/141.js` (Changed code · before: `L11-L196` → after: `L6-L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417) · [After (L6-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/141.js#L6-L56) · [Before (L11-L196)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/141.js#L11-L196)

```diff
-       b: () => EE,
-       h: () => lE,
-       d: () => iE,
-       l: () => Ib,
-       n: () => jb,
-       q: () => TE,
-       s: () => Yb,
-       t: () => GE,
-       x: () => oE,
-       z: () => PE,
-       D: () => Bb,
-       G: () => vE,
-       H: () => AE,
-       J: () => LE,
-       P: () => Cb,
-       L: () => uE,
- ... (170 more removed lines; see GitHub link above)
+       BloxdDiscordActivitySdk: () => Hq
+     });
+     var Yq = gq(8004),
+       lq = gq(1216),
+       Oq = gq(1183),
+       mq = gq(598),
+       xq = gq(1241),
+       Aq = gq(1710),
+       cq = gq(1308),
+       uq = gq(729),
+       Bq = gq(24),
+       Wq = gq(1201),
+       Nq = function(qq) {
+         return qq.APPLICATION_COMMANDS = "applications.commands", qq.IDENTIFY = "identify", qq.EMAIL = "email", qq.GUILDS = "guilds", qq.READ_DM_CHANNELS = "dm_channels.read", qq.WRITE_ACTIVITIES = "rpc.activities.write", qq
+       }(Nq || {}),
+       aq = function(qq) {
+ ... (35 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/141.js` (Changed code · before: `L198-L463` → after: `L58-L62`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417R58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417) · [After (L58-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/141.js#L58-L62) · [Before (L198-L463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/141.js#L198-L463)

```diff
-       dz = Mz.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_inters … [truncated]
-     class Fz extends Error {
-       constructor(zz) {
-         var uz;
-         super(), uz = this, this.issues = [], this.addIssue = zz => {
-           this.issues = [...this.issues, zz]
-         }, this.addIssues = function() {
-           let zz = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
-           uz.issues = [...uz.issues, ...zz]
-         };
-         const bz = new.target.prototype;
-         Object.setPrototypeOf ? Object.setPrototypeOf(this, bz) : this.__proto__ = bz, this.name = "ZodError", this.issues = zz
-       }
-       get errors() {
-         return this.issues
-       }
- ... (250 more removed lines; see GitHub link above)
+       jq = {
+         goalRush: "Playing",
+         heroesvbrainrots: "Battling",
+         hideseek: "Playing",
+         bingo: "Playing"
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/141.js` (Changed code · before: `L478-L505` → after: `L66-L97`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417R66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417) · [After (L66-L97)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/141.js#L66-L97) · [Before (L478-L505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/141.js#L478-L505)

```diff
-         this.spa = this.safeParseAsync, this._def = zz, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine  … [truncated]
-       }
-       get description() {
-         return this._def.description
-       }
-       _getType(zz) {
-         return pz(zz.data)
-       }
-       _getOrReturnCtx(zz, uz) {
-         return uz || {
-           common: zz.parent.common,
-           data: zz.data,
-           parsedType: pz(zz.data),
-           schemaErrorMap: this._def.errorMap,
-           path: zz.path,
-           parent: zz.parent
- ... (12 more removed lines; see GitHub link above)
+         this.discordSdk = qq, this.guildNameCache = {}, this.startTime = Date.now(), this.cachedAccessToken = null
+       }
+       static async setup() {
+         console.log("Setting up Discord SDK with client id", Wq.d.discordClientID);
+         const qq = new Yq.d(Wq.d.discordClientID);
+         let Eq = !1;
+         setTimeout((() => {
+           Eq || (console.warn("Discord SDK took too long to initialize"), (0, Aq.reloadBloxd)())
+         }), 15e3), await qq.ready(), Eq = !0;
+         try {
+           const {
+             enabled: Eq
+           } = await qq.commands.encourageHardwareAcceleration();
+           Eq || console.warn("Hardware acceleration not enabled in the Discord client")
+         } catch (lq) {
+           console.error("Failed to encourage hardware acceleration in the Discord client", lq)
+ ... (16 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/141.js` (Changed code · before: `L508-L554` → after: `L100-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417R100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417) · [After (L100-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/141.js#L100-L107) · [Before (L508-L554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/141.js#L508-L554)

```diff
-       }
-       _parseSync(zz) {
-         const uz = this._parse(zz);
-         if (Jz(uz)) throw new Error("Synchronous parse encountered promise.");
-         return uz
-       }
-       _parseAsync(zz) {
-         const uz = this._parse(zz);
-         return Promise.resolve(uz)
-       }
-       parse(zz, uz) {
-         const bz = this.safeParse(zz, uz);
-         if (bz.success) return bz.data;
-         throw bz.error
-       }
-       safeParse(zz, uz) {
- ... (31 more removed lines; see GitHub link above)
+         await this.discordSdk.commands.setActivity({
+           activity: {
+             type: Vq.PLAYING,
+             details: Eq,
+             state: gq,
+             assets: {
+               large_image: "icon",
+               large_text: Eq
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/141.js` (Changed code · before: `L556-L627` → after: `L109-L111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417R109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417) · [After (L109-L111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/141.js#L109-L111) · [Before (L556-L627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/141.js#L556-L627)

```diff
-             path: (null === uz || void 0 === uz ? void 0 : uz.path) || [],
-             schemaErrorMap: this._def.errorMap,
-             parent: null,
-             data: zz,
-             parsedType: pz(zz)
-           },
-           Ez = this._parse({
-             data: zz,
-             path: bz.path,
-             parent: bz
-           }),
-           nz = await (Jz(Ez) ? Ez : Promise.resolve(Ez));
-         return Lz(bz, nz)
-       }
-       refine(zz, uz) {
-         const bz = zz => "string" === typeof uz || "undefined" === typeof uz ? {
- ... (56 more removed lines; see GitHub link above)
+             timestamps: {
+               start: this.startTime
+             }
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/141.js` (Changed code · before: `L629-L876` → after: `L113-L115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417R113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417) · [After (L113-L115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/141.js#L113-L115) · [Before (L629-L876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/141.js#L629-L876)

```diff
-         })
-       }
-       default (zz) {
-         const uz = "function" === typeof zz ? zz : () => zz;
-         return new Nu({
-           ...Pz(this._def),
-           innerType: this,
-           defaultValue: uz,
-           typeName: au.ZodDefault
-         })
-       }
-       brand() {
-         return new Au({
-           typeName: au.ZodBranded,
-           type: this,
-           ...Pz(this._def)
- ... (232 more removed lines; see GitHub link above)
+         }).catch((qq => {
+           console.error(`Failed to update Discord activity rich presence with description="${Eq}":`, qq)
+         }))
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/141.js` (Changed code · before: `L878` → after: `L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417R117) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417) · [After (L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/141.js#L117) · [Before (L878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/141.js#L878)

```diff
-       datetime(zz) {
+       async getInGameDescriptions() {
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/141.js` (Changed code · before: `L880-L1074` → after: `L119-L130`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417R119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417) · [After (L119-L130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/141.js#L119-L130) · [Before (L880-L1074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/141.js#L880-L1074)

```diff
-         return "string" === typeof zz ? this._addCheck({
-           kind: "datetime",
-           precision: null,
-           offset: !1,
-           message: zz
-         }) : this._addCheck({
-           kind: "datetime",
-           precision: "undefined" === typeof(null === zz || void 0 === zz ? void 0 : zz.precision) ? null : null === zz || void 0 === zz ? void 0 : zz.precision,
-           offset: null !== (uz = null === zz || void 0 === zz ? void 0 : zz.offset) && void 0 !== uz && uz,
-           ...Az.errToObj(null === zz || void 0 === zz ? void 0 : zz.message)
-         })
-       }
-       regex(zz, uz) {
-         return this._addCheck({
-           kind: "regex",
-           regex: zz,
- ... (179 more removed lines; see GitHub link above)
+         const {
+           requestedGameNameWithVariation: Eq
+         } = (0, cq.e)(), gq = (0, uq.m)(Eq), Yq = null !== (qq = jq[Eq]) && void 0 !== qq ? qq : dq[gq.type], lq = await (0, Oq.u)(xq.d.ENGLISH, gq.title), Aq = (0, cq.e)();
+         if ((0, cq.k)(Aq)) return {
+           primary: `${Yq} in a Discord World`
+         };
+         const Bq = `${Yq} in ${lq}`;
+         return (0, mq.H)(Aq.lobbyName) ? {
+           primary: Bq
+         } : {
+           primary: Bq,
+           secondary: `Lobby ${Aq.lobbyName}`
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/141.js` (Changed code · before: `L1077-L1181` → after: `L133-L138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417R133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417) · [After (L133-L138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/141.js#L133-L138) · [Before (L1077-L1181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/141.js#L1077-L1181)

```diff
-       gte(zz, uz) {
-         return this.setLimit("min", zz, !0, Az.toString(uz))
-       }
-       gt(zz, uz) {
-         return this.setLimit("min", zz, !1, Az.toString(uz))
-       }
-       lte(zz, uz) {
-         return this.setLimit("max", zz, !0, Az.toString(uz))
-       }
-       lt(zz, uz) {
-         return this.setLimit("max", zz, !1, Az.toString(uz))
-       }
-       setLimit(zz, uz, bz, Ez) {
-         return new Dz({
-           ...this._def,
-           checks: [...this._def.checks, {
- ... (89 more removed lines; see GitHub link above)
+       getCurrentChannelType() {
+         const {
+           channelId: qq,
+           guildId: Eq
+         } = this.getCurrentChannelAndGuild();
+         return null !== Eq ? lq.c.GUILD : null !== qq ? lq.c.DM : null
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/141.js` (Changed code · before: `L1183-L1188` → after: `L140-L148`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417R140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417) · [After (L140-L148)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/141.js#L140-L148) · [Before (L1183-L1188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/141.js#L1183-L1188)

```diff
-       get isFinite() {
-         let zz = null,
-           uz = null;
-         for (const bz of this._def.checks) {
-           if ("finite" === bz.kind || "int" === bz.kind || "multipleOf" === bz.kind) return !0;
-           "min" === bz.kind ? (null === uz || bz.value > uz) && (uz = bz.value) : "max" === bz.kind && (null === zz || bz.value < zz) && (zz = bz.value)
+       getRequiredScopeForCurrentChannel() {
+         const qq = this.getCurrentChannelType(),
+           Eq = [Nq.APPLICATION_COMMANDS, Nq.IDENTIFY, Nq.EMAIL, Nq.GUILDS, Nq.WRITE_ACTIVITIES];
+         switch (qq) {
+           case lq.c.DM:
+           case lq.c.GUILD:
+             return [...Eq];
+           default:
+             throw new Error(`Unknown Discord channel type: ${qq}`)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/141.js` (Changed code · before: `L1203-L1236` → after: `L151-L155`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417R151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417) · [After (L151-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/141.js#L151-L155) · [Before (L1203-L1236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/141.js#L1203-L1236)

```diff
-       _parse(zz) {
-         this._def.coerce && (zz.data = BigInt(zz.data));
-         if (this._getType(zz) !== Oz.bigint) {
-           const uz = this._getOrReturnCtx(zz);
-           return Xz(uz, {
-             code: dz.invalid_type,
-             expected: Oz.bigint,
-             received: uz.parsedType
-           }), sz
-         }
-         let uz;
-         const bz = new fz;
-         for (const Ez of this._def.checks)
-           if ("min" === Ez.kind) {
-             (Ez.inclusive ? zz.data < Ez.value : zz.data <= Ez.value) && (uz = this._getOrReturnCtx(zz, uz), Xz(uz, {
-               code: dz.too_small,
- ... (18 more removed lines; see GitHub link above)
+       getCurrentChannelAndGuild() {
+         const {
+           channelId: qq,
+           guildId: Eq
+         } = this.discordSdk;
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/141.js` (Changed code · before: `L1238-L1249` → after: `L157-L175`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417R157) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417) · [After (L157-L175)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/141.js#L157-L175) · [Before (L1238-L1249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/141.js#L1238-L1249)

```diff
-           status: bz.value,
-           value: zz.data
-         }
-       }
-       gte(zz, uz) {
-         return this.setLimit("min", zz, !0, Az.toString(uz))
-       }
-       gt(zz, uz) {
-         return this.setLimit("min", zz, !1, Az.toString(uz))
-       }
-       lte(zz, uz) {
-         return this.setLimit("max", zz, !0, Az.toString(uz))
+           channelId: null !== qq && void 0 !== qq ? qq : null,
+           guildId: null !== Eq && void 0 !== Eq ? Eq : null
+         }
+       }
+       getInstanceId() {
+         return this.discordSdk.instanceId
+       }
+       async askDiscordUserForAuthorization() {
+         const qq = this.getRequiredScopeForCurrentChannel(),
+           {
+             code: Eq
+           } = await this.discordSdk.commands.authorize({
+             client_id: Wq.d.discordClientID,
+             response_type: "code",
+             state: "",
+             prompt: "none",
+ ... (3 more added lines; see GitHub link above)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/141.js` (Changed code · before: `L1251-L1252` → after: `L177-L178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417R177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417) · [After (L177-L178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/141.js#L177-L178) · [Before (L1251-L1252)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/141.js#L1251-L1252)

```diff
-       lt(zz, uz) {
-         return this.setLimit("max", zz, !1, Az.toString(uz))
+       getCachedAccessToken() {
+         return this.cachedAccessToken
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/141.js` (Changed code · before: `L1254-L1263` → after: `L180-L181`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417R180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417) · [After (L180-L181)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/141.js#L180-L181) · [Before (L1254-L1263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/141.js#L1254-L1263)

```diff
-       setLimit(zz, uz, bz, Ez) {
-         return new Qz({
-           ...this._def,
-           checks: [...this._def.checks, {
-             kind: zz,
-             value: uz,
-             inclusive: bz,
-             message: Az.toString(Ez)
-           }]
-         })
+       setCachedAccessToken(qq) {
+         this.cachedAccessToken = qq
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/141.js` (Changed code · before: `L1265-L1269` → after: `L183-L184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417R183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417) · [After (L183-L184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/141.js#L183-L184) · [Before (L1265-L1269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/141.js#L1265-L1269)

```diff
-       _addCheck(zz) {
-         return new Qz({
-           ...this._def,
-           checks: [...this._def.checks, zz]
-         })
+       registerGuild(qq, Eq) {
+         this.guildNameCache[qq] = Eq
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/141.js` (Changed code · before: `L1271-L1277` → after: `L186-L189`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417R186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417) · [After (L186-L189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/141.js#L186-L189) · [Before (L1271-L1277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/141.js#L1271-L1277)

```diff
-       positive(zz) {
-         return this._addCheck({
-           kind: "min",
-           value: BigInt(0),
-           inclusive: !1,
-           message: Az.toString(zz)
-         })
+       async authenticate(qq) {
+         return this.discordSdk.commands.authenticate({
+           access_token: qq
+         }).then((qq => null !== qq))
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/141.js` (Changed code · before: `L1279-L1285` → after: `L191-L199`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417R191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417) · [After (L191-L199)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/141.js#L191-L199) · [Before (L1279-L1285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/141.js#L1279-L1285)

```diff
-       negative(zz) {
-         return this._addCheck({
-           kind: "max",
-           value: BigInt(0),
-           inclusive: !1,
-           message: Az.toString(zz)
-         })
+       async getUserLocale() {
+         try {
+           const {
+             locale: qq
+           } = await this.discordSdk.commands.userSettingsGetLocale();
+           return qq
+         } catch (qq) {
+           return console.error("Failed to get user locale from Discord:", qq.stack), null
+         }
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/141.js` (Changed code · before: `L1287-L1293` → after: `L201-L204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417R201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417) · [After (L201-L204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/141.js#L201-L204) · [Before (L1287-L1293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/141.js#L1287-L1293)

```diff
-       nonpositive(zz) {
-         return this._addCheck({
-           kind: "max",
-           value: BigInt(0),
-           inclusive: !0,
-           message: Az.toString(zz)
-         })
+       async getChannelName(qq) {
+         return this.discordSdk.commands.getChannel({
+           channel_id: qq
+         }).then((qq => qq.name)).catch((qq => "Your Current Discord Chat"))
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/141.js` (Changed code · before: `L1295-L1300` → after: `L206-L211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417R206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417) · [After (L206-L211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/141.js#L206-L211) · [Before (L1295-L1300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/141.js#L1295-L1300)

```diff
-       nonnegative(zz) {
-         return this._addCheck({
-           kind: "min",
-           value: BigInt(0),
-           inclusive: !0,
-           message: Az.toString(zz)
+       async getDiscordContextFromChannelId(qq) {
+         const Eq = await this.getChannelName(qq);
+         return lq.h.from({
+           type: lq.c.DM,
+           channelId: qq,
+           channelName: Eq
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/141.js` (Changed code · before: `L1303-L1307` → after: `L214-L219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417R214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417) · [After (L214-L219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/141.js#L214-L219) · [Before (L1303-L1307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/141.js#L1303-L1307)

```diff
-       multipleOf(zz, uz) {
-         return this._addCheck({
-           kind: "multipleOf",
-           value: zz,
-           message: Az.toString(uz)
+       getDiscordContextFromGuildId(qq) {
+         const Eq = this.guildNameCache[qq];
+         return (0, mq.H)(Eq) ? null : lq.f.from({
+           type: lq.c.GUILD,
+           guildId: qq,
+           guildName: Eq
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/141.js` (Changed code · before: `L1310-L1385` → after: `L222-L227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417R222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417) · [After (L222-L227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/141.js#L222-L227) · [Before (L1310-L1385)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/141.js#L1310-L1385)

```diff
-       get minValue() {
-         let zz = null;
-         for (const uz of this._def.checks) "min" === uz.kind && (null === zz || uz.value > zz) && (zz = uz.value);
-         return zz
-       }
-       get maxValue() {
-         let zz = null;
-         for (const uz of this._def.checks) "max" === uz.kind && (null === zz || uz.value < zz) && (zz = uz.value);
-         return zz
-       }
-     }
-     Qz.create = zz => {
-       var uz;
-       return new Qz({
-         checks: [],
-         typeName: au.ZodBigInt,
- ... (60 more removed lines; see GitHub link above)
+       async getCurrentDiscordContext() {
+         const {
+           channelId: qq,
+           guildId: Eq
+         } = this.getCurrentChannelAndGuild();
+         return null !== Eq ? this.getDiscordContextFromGuildId(Eq) : null !== qq ? this.getDiscordContextFromChannelId(qq) : null
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/141.js` (Changed code · before: `L1387-L1391` → after: `L229-L230`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417R229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417) · [After (L229-L230)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/141.js#L229-L230) · [Before (L1387-L1391)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/141.js#L1387-L1391)

```diff
-       _addCheck(zz) {
-         return new ez({
-           ...this._def,
-           checks: [...this._def.checks, zz]
-         })
+       exit(qq) {
+         console.log("Exiting Discord Activity:", qq), this.discordSdk.close(aq.CLOSE_NORMAL, qq)
```

#### 24. `bundles/preprod.bloxd.io/chunks/js/141.js` (Changed code · before: `L1393-L1398` → after: `L232-L233`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417R232) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417) · [After (L232-L233)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/141.js#L232-L233) · [Before (L1393-L1398)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/141.js#L1393-L1398)

```diff
-       min(zz, uz) {
-         return this._addCheck({
-           kind: "min",
-           value: zz.getTime(),
-           message: Az.toString(uz)
-         })
+       isMobilePlatform() {
+         return this.discordSdk.platform === Yq.h.MOBILE
```

#### 25. `bundles/preprod.bloxd.io/chunks/js/141.js` (Changed code · before: `L1400-L1404` → after: `L235-L247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417R235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-048fea25350bacb78e2191385bf0909695508a998d3d8bc9eef1dc268a1fa417) · [After (L235-L247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/141.js#L235-L247) · [Before (L1400-L1404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/141.js#L1400-L1404)

```diff
-       max(zz, uz) {
-         return this._addCheck({
-           kind: "max",
-           value: zz.getTime(),
-           message: Az.toString(uz)
+       applyDiscordSafeAreaNotch() {
+         const qq = getComputedStyle(document.documentElement),
+           Eq = (Eq, gq) => {
+             const Yq = parseFloat(qq.getPropertyValue(`--discord-safe-area-inset-${Eq}`));
+             return isNaN(Yq) || 0 === gq ? 0 : Yq / gq * 100
+           };
+         Bq.b.set({
+           notchSize: {
+             top: Eq("top", window.innerHeight),
+             right: Math.max(Eq("right", window.innerWidth), 7),
+             bottom: 0,
+             left: Eq("left", window.innerWidth)
+           }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/142.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/142.js` (23 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088)

#### 1. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L4` → after: `L4-L9`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L4-L9)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/142.js#L4-L9) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/142.js#L4)

```diff
-   7792: (zz, uz, bz) => {
+   8004: (qq, Eq, gq) => {
+     gq.d(Eq, {
+       d: () => lO,
+       h: () => zg
+     });
+     var Yq = {};
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L6-L17` → after: `L11-L4817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R11) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L11-L4817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/142.js#L11-L4817) · [Before (L6-L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/142.js#L6-L17)

```diff
-       BloxdMsnAccountSdk: () => pz,
-       MsnSdkAdaptor: () => Rz,
-       msnMockIdentityStorageKey: () => tz
-     });
-     var Ez = bz(1288),
-       nz = bz(1171),
-       iz = bz(3210),
-       lz = bz(588);
-     bz(33);
-     const Mz = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js",
-       tz = "msnMockIdentity";
-     let Hz = null;
+       c: () => YY,
+       j: () => mY,
+       g: () => OY,
+       m: () => Kg,
+       o: () => wg,
+       p: () => bY,
+       t: () => eg,
+       w: () => fY,
+       x: () => yY,
+       y: () => ZY,
+       B: () => Cg,
+       E: () => rY,
+       H: () => nY,
+       L: () => iY,
+       P: () => Ig,
+       M: () => EY,
+ ... (4791 more added lines; see GitHub link above)
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L19-L23` → after: `L4819-L4832`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R4819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L4819-L4832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/142.js#L4819-L4832) · [Before (L19-L23)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/142.js#L19-L23)

```diff
-     function Oz() {
-       return Hz ??= async function() {
-         await (0, nz.e)(Mz, {}, !1);
-         for (let zz = 0; zz < 50 && !window.$msstart; zz++) await (0, lz.L)(100)
-       }(), Hz
+     function Bl(qq, Eq, gq) {
+       let Yq = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : () => {};
+       const lq = Cg.extend({
+         cmd: mg(Eq),
+         data: gq
+       });
+       return async gq => {
+         const Oq = await qq({
+           cmd: Eq,
+           args: gq,
+           transfer: Yq(gq)
+         });
+         return lq.parse(Oq).data
+       }
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L25-L33` → after: `L4834-L4957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R4834) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L4834-L4957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/142.js#L4834-L4957) · [Before (L25-L33)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/142.js#L25-L33)

```diff
-     class pz {
-       constructor() {}
-       static async setup() {
-         try {
-           await Promise.race([Oz(), (0, lz.L)(1e4).then((() => {
-             throw new Error("Not loaded after 10000ms")
-           }))])
-         } catch (zz) {
-           return console.error("MSN Play SDK failed to load, so MSN Play accounts are unavailable:", zz), null
+ 
+     function Wl(qq) {
+       let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {};
+       const gq = Xg[qq].response,
+         Yq = Cg.extend({
+           cmd: mg(qq),
+           data: gq
+         });
+       return gq => async lq => {
+         const Oq = await gq({
+           cmd: qq,
+           args: lq,
+           transfer: Eq(lq)
+         });
+         return Yq.parse(Oq).data
+       }
+ ... (108 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L35` → after: `L4959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R4959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L4959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/142.js#L4959) · [Before (L35)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/142.js#L35)

```diff
-         return window.$msstart ? new pz : (console.error("MSN Play SDK script loaded but window.$msstart is missing, so MSN Play accounts are unavailable"), null)
+         return Gl(mq)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L37-L43` → after: `L4961-L5006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R4961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L4961-L5006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/142.js#L4961-L5006) · [Before (L37-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/142.js#L37-L43)

```diff
-       async getSignedInUser() {
-         try {
-           return await Promise.race([window.$msstart.getSignedInUserAsync(), (0, lz.L)(1e4).then((() => {
-             throw new Error("No answer after 10000ms")
-           }))])
-         } catch (zz) {
-           return "USER_NOT_CONSENTED" !== (null === zz || void 0 === zz ? void 0 : zz.code) && console.error("Failed to get the signed-in MSN Play player:", zz), null
+       try {
+         Yq.name = qq
+       } catch (lq) {}
+       return Yq.DNS = "6ba7b810-9dad-11d1-80b4-00c04fd430c8", Yq.URL = "6ba7b811-9dad-11d1-80b4-00c04fd430c8", Yq
+     }
+ 
+     function kl(qq) {
+       return 14 + (qq + 64 >>> 9 << 4) + 1
+     }
+ 
+     function Rl(qq, Eq) {
+       var gq = (65535 & qq) + (65535 & Eq);
+       return (qq >> 16) + (Eq >> 16) + (gq >> 16) << 16 | 65535 & gq
+     }
+ 
+     function Ul(qq, Eq, gq, Yq, lq, Oq) {
+ ... (30 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L46-L47` → after: `L5039-L5050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R5039) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L5039-L5050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/142.js#L5039-L5050) · [Before (L46-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/142.js#L46-L47)

```diff
-       async signIn() {
-         return null !== null ? null : await window.$msstart.signInAsync()
+       return Gl(Yq)
+     }
+ 
+     function el(qq, Eq, gq, Yq) {
+       switch (qq) {
+         case 0:
+           return Eq & gq ^ ~Eq & Yq;
+         case 1:
+         case 3:
+           return Eq ^ gq ^ Yq;
+         case 2:
+           return Eq & gq ^ Eq & Yq ^ gq & Yq
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L50-L98` → after: `L5053-L5077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R5053) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L5053-L5077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/142.js#L5053-L5077) · [Before (L50-L98)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/142.js#L50-L98)

```diff
-     const dz = 20,
-       Fz = {
-         top: [{
-           width: 970,
-           height: 250
-         }, {
-           width: 728,
-           height: 90
-         }, {
-           width: 320,
-           height: 50
-         }],
-         right: [{
-           width: 300,
-           height: 600
-         }, {
- ... (33 more removed lines; see GitHub link above)
+ 
+     function Dl(qq, Eq) {
+       return qq << Eq | qq >>> 32 - Eq
+     }
+     Jl("v5", 80, (function(qq) {
+       var Eq = [1518500249, 1859775393, 2400959708, 3395469782],
+         gq = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
+       if ("string" === typeof qq) {
+         var Yq = unescape(encodeURIComponent(qq));
+         qq = [];
+         for (var lq = 0; lq < Yq.length; ++lq) qq.push(Yq.charCodeAt(lq))
+       } else Array.isArray(qq) || (qq = Array.prototype.slice.call(qq));
+       qq.push(128);
+       for (var Oq = qq.length / 4 + 2, mq = Math.ceil(Oq / 16), xq = new Array(mq), Aq = 0; Aq < mq; ++Aq) {
+         for (var cq = new Uint32Array(16), uq = 0; uq < 16; ++uq) cq[uq] = qq[64 * Aq + 4 * uq] << 24 | qq[64 * Aq + 4 * uq + 1] << 16 | qq[64 * Aq + 4 * uq + 2] << 8 | qq[64 * Aq + 4 * uq + 3];
+         xq[Aq] = cq
+ ... (9 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L100-L103` → after: `L5079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R5079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L5079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/142.js#L5079) · [Before (L100-L103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/142.js#L100-L103)

```diff
-       };
-     class Rz extends Ez.b {
-       constructor() {
-         super(), this.name = "msn", this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
+         gq[0] = gq[0] + Vq >>> 0, gq[1] = gq[1] + dq >>> 0, gq[2] = gq[2] + jq >>> 0, gq[3] = gq[3] + Hq >>> 0, gq[4] = gq[4] + oq >>> 0
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L105-L106` → after: `L5081-L5086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R5081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L5081-L5086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/142.js#L5081-L5086) · [Before (L105-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/142.js#L105-L106)

```diff
-       static async setup() {
-         return await Oz(), new Rz
+       return [gq[0] >> 24 & 255, gq[0] >> 16 & 255, gq[0] >> 8 & 255, 255 & gq[0], gq[1] >> 24 & 255, gq[1] >> 16 & 255, gq[1] >> 8 & 255, 255 & gq[1], gq[2] >> 24 & 255, gq[2] >> 16 & 255, gq[2] >> 8 & 255, 255 & gq[2], gq[3] >> 24 & 255, gq[3] >> 16 & 255, gq[3] >> 8 & 255, 255 … [truncated]
+     }));
+     class qO extends Error {
+       constructor(qq) {
+         let Eq = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
+         super(Eq), this.code = qq, this.message = Eq, this.name = "Discord SDK Error"
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L108-L109` → after: `L5088-L5104`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R5088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L5088-L5104)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/142.js#L5088-L5104) · [Before (L108-L109)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/142.js#L108-L109)

```diff
-       playVideoAd(zz, uz) {
-         this.playVideoOrRewarded("video", zz, zz)
+     }
+     const EO = ["log", "warn", "debug", "info", "error"];
+     var gO;
+     ! function(qq) {
+       qq[qq.HANDSHAKE = 0] = "HANDSHAKE", qq[qq.FRAME = 1] = "FRAME", qq[qq.CLOSE = 2] = "CLOSE", qq[qq.HELLO = 3] = "HELLO"
+     }(gO || (gO = {}));
+     const YO = new Set("undefined" === typeof window ? [] : [window.location.origin, "https://discord.com", "https://discordapp.com", "https://ptb.discord.com", "https://ptb.discordapp.com", "https://canary.discord.com", "https://canary.discordapp.com", "https://staging.discord.c … [truncated]
+     class lO {
+       getTransfer(qq) {
+         var Eq;
+         switch (qq.cmd) {
+           case Kg.SUBSCRIBE:
+           case Kg.UNSUBSCRIBE:
+             return;
+           default:
+             return null !== (Eq = qq.transfer) && void 0 !== Eq ? Eq : void 0
+ ... (1 more added lines; see GitHub link above)
```

#### 12. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L111-L112` → after: `L5106-L5174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R5106) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L5106-L5174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/142.js#L5106-L5174) · [Before (L111-L112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/142.js#L111-L112)

```diff
-       playRewarded(zz, uz) {
-         this.playVideoOrRewarded("rewarded", zz, uz)
+       constructor(qq, Eq) {
+         var gq;
+         if (this.eventBus = new cq, this.source = null, this.sourceOrigin = "", this.pendingCommands = new Map, this.sendCommand = qq => {
+             var Eq;
+             if (null == this.source) throw new Error("Attempting to send message before initialization");
+             const gq = Il();
+             null === (Eq = this.source) || void 0 === Eq || Eq.postMessage([gO.FRAME, Object.assign(Object.assign({}, qq), {
+               nonce: gq
+             })], this.sourceOrigin, this.getTransfer(qq));
+             return new Promise(((qq, Eq) => {
+               this.pendingCommands.set(gq, {
+                 resolve: qq,
+                 reject: Eq
+               })
+             }))
+           }, this.commands = (gq = this.sendCommand, {
+ ... (53 more added lines; see GitHub link above)
```

#### 13. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L114-L117` → after: `L5176-L5184`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R5176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L5176-L5184)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/142.js#L5176-L5184) · [Before (L114-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/142.js#L114-L117)

```diff
-       canShowBloxdAd(zz) {
-         for (const uz in Zz)
-           if (zz.adId in Zz[uz]) return !1;
-         return !0
+       close(qq, Eq) {
+         var gq;
+         window.removeEventListener("message", this.handleMessage);
+         const Yq = Il();
+         null === (gq = this.source) || void 0 === gq || gq.postMessage([gO.CLOSE, {
+           code: qq,
+           message: Eq,
+           nonce: Yq
+         }], this.sourceOrigin)
```

#### 14. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L119-L147` → after: `L5186-L5216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R5186) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L5186-L5216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/142.js#L5186-L5216) · [Before (L119-L147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/142.js#L119-L147)

```diff
-       async renderBanner(zz) {
-         if (null !== this.currentlyShowingBannerPlacement) return void console.log(`AD ${(0,iz.c)(zz)}: msn placement is already showing so not requesting`);
-         const uz = Zz[zz.adType][zz.adId];
-         if ((0, lz.F)(uz)) return void console.warn(`AD ${(0,iz.c)(zz)}: no msn placement is configured for this bloxd placement so not showing any ad`);
-         const bz = [];
-         for (const Ez of uz)
-           for (const zz of Fz[Ez])
-             if (zz.width <= window.innerWidth - 40 && zz.height <= window.innerHeight - 40) {
-               const uz = {
-                 placement: Ez,
-                 width: zz.width,
-                 height: zz.height
-               };
-               if (!bz.some((zz => wz(uz, zz)))) {
-                 bz.push(uz);
-                 break
- ... (13 more removed lines; see GitHub link above)
+       async subscribe(qq, Eq) {
+         for (var gq = arguments.length, Yq = new Array(gq > 2 ? gq - 2 : 0), lq = 2; lq < gq; lq++) Yq[lq - 2] = arguments[lq];
+         const [Oq] = Yq, mq = this.eventBus.listenerCount(qq), xq = this.eventBus.on(qq, Eq);
+         return Object.values(TY).includes(qq) && qq !== TY.READY && 0 === mq && await this.sendCommand({
+           cmd: Kg.SUBSCRIBE,
+           args: Oq,
+           evt: qq
+         }), xq
+       }
+       async unsubscribe(qq, Eq) {
+         for (var gq = arguments.length, Yq = new Array(gq > 2 ? gq - 2 : 0), lq = 2; lq < gq; lq++) Yq[lq - 2] = arguments[lq];
+         const [Oq] = Yq;
+         return qq !== TY.READY && 1 === this.eventBus.listenerCount(qq) && await this.sendCommand({
+           cmd: Kg.UNSUBSCRIBE,
+           evt: qq,
+           args: Oq
+ ... (15 more added lines; see GitHub link above)
```

#### 15. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L149-L150` → after: `L5218-L5221`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R5218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L5218-L5221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/142.js#L5218-L5221) · [Before (L149-L150)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/142.js#L149-L150)

```diff
-       async clearBanner(zz) {
-         null !== this.currentlyShowingBannerPlacement && (0, iz.c)(zz) === this.currentlyShowingBannerPlacement.placementId && (console.log(`AD ${(0,iz.c)(zz)}: Attempting to clear msn banner ads for banner`, zz), await this.clearAllBannerAds())
+       addOnReadyListener() {
+         this.eventBus.once(TY.READY, (() => {
+           this.overrideConsoleLogging(), this.isReady = !0
+         }))
```

#### 16. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L152` → after: `L5223-L5249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R5223) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L5223-L5249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/142.js#L5223-L5249) · [Before (L152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/142.js#L152)

```diff
-       async clearAllBannerAds() {
+       overrideConsoleLogging() {
+         if (this.configuration.disableConsoleLogOverride) return;
+         const qq = (qq, Eq) => {
+           this.commands.captureLog({
+             level: qq,
+             message: Eq
+           })
+         };
+         EO.forEach((Eq => {
+           ! function(qq, Eq, gq) {
+             const Yq = qq[Eq],
+               lq = qq;
+             Yq && (qq[Eq] = function() {
+               const qq = [].slice.call(arguments),
+                 Oq = "" + qq.join(" ");
+               gq(Eq, Oq), Yq.apply(lq, qq)
+ ... (11 more added lines; see GitHub link above)
```

#### 17. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L154-L155` → after: `L5251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R5251) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L5251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/142.js#L5251) · [Before (L154-L155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/142.js#L154-L155)

```diff
-           if (this.isCurrentlyClearingAllBanners) return;
-           this.isCurrentlyClearingAllBanners = !0, null !== this.currentlyShowingBannerPlacement && await this.currentlyShowingBannerPlacement.renderPromise, await window.$msstart.hideDisplayAdsAsync(), console.log("AD: Successfully cleared all msn banner ads")
+           Yq = ul(qq)
```

#### 18. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L157-L159` → after: `L5253-L5262`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R5253) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L5253-L5262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/142.js#L5253-L5262) · [Before (L157-L159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/142.js#L157-L159)

```diff
-           console.log("AD: Error while clearing all msn banner ads", zz)
-         } finally {
-           this.currentlyShowingBannerPlacement = null, this.isCurrentlyClearingAllBanners = !1
+           return console.error("Failed to parse", qq), void console.error(lq)
+         }
+         if ("DISPATCH" === Yq.cmd) this.eventBus.emit(Yq.evt, Yq.data);
+         else {
+           if (Yq.evt === MY) {
+             if (null != Yq.nonce) return null === (Eq = this.pendingCommands.get(Yq.nonce)) || void 0 === Eq || Eq.reject(Yq.data), void this.pendingCommands.delete(Yq.nonce);
+             this.eventBus.emit("error", new qO(Yq.data.code, Yq.data.message))
+           }
+           if (null == Yq.nonce) return void console.error("Missing nonce", qq);
+           null === (gq = this.pendingCommands.get(Yq.nonce)) || void 0 === gq || gq.resolve(Yq), this.pendingCommands.delete(Yq.nonce)
```

#### 19. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L162-L174` → after: `L5265-L5400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R5265) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L5265-L5400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/142.js#L5265-L5400) · [Before (L162-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/142.js#L162-L174)

```diff
-       playVideoOrRewarded(zz, uz, bz) {
-         const Ez = uz => {
-           console.error(`AD: Error while playing MSN ${zz} ad: `, uz), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), bz()
-         };
-         if (window.$msstart) {
-           console.log(`AD: Attempting to play MSN ${zz} ad`), document.getElementById("GenericVideoWrapper").style.display = "flex";
-           const bz = async () => {
-             try {
-               const bz = await window.$msstart.loadAdsAsync("rewarded" === zz),
-                 Ez = await window.$msstart.showAdsAsync(bz.instanceId);
-               this.clearAllBannerAds(), await Ez.showAdsCompletedAsync, console.log(`AD: Successfully finished MSN ${zz} ad`), document.getElementById("GenericVideoWrapper").style.display = "none", window.adCompleteSoResume(), uz()
-             } catch (bz) {
-               Ez(bz)
+       _getSearch() {
+         return "undefined" === typeof window ? "" : window.location.search
+       }
+     }
+     var OO, mO = 1e9,
+       xO = !0,
+       AO = "[DecimalError] ",
+       cO = AO + "Invalid argument: ",
+       uO = AO + "Exponent out of range: ",
+       BO = Math.floor,
+       WO = Math.pow,
+       NO = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
+       aO = 1e7,
+       VO = 9007199254740991,
+       dO = BO(1286742750677284.5),
+       jO = {};
+ ... (120 more added lines; see GitHub link above)
```

#### 20. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L176-L180` → after: `L5402-L5526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R5402) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L5402-L5526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/142.js#L5402-L5526) · [Before (L176-L180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/142.js#L176-L180)

```diff
-           };
-           window.adStartSoPause(null, {
-             preventMovement: !0
-           }), bz()
-         } else Ez(`AD: Can't play MSN ${zz} ad because sdk is not loaded`)
+           } else if ("9999" != Eq) break;
+           mq += 4
+         } return xO = !0, bO(Yq, gq)
+     }, jO.times = jO.mul = function(qq) {
+       var Eq, gq, Yq, lq, Oq, mq, xq, Aq, cq, uq = this,
+         Bq = uq.constructor,
+         Wq = uq.d,
+         Nq = (qq = new Bq(qq)).d;
+       if (!uq.s || !qq.s) return new Bq(0);
+       for (qq.s *= uq.s, gq = uq.e + qq.e, (Aq = Wq.length) < (cq = Nq.length) && (Oq = Wq, Wq = Nq, Nq = Oq, mq = Aq, Aq = cq, cq = mq), Oq = [], Yq = mq = Aq + cq; Yq--;) Oq.push(0);
+       for (Yq = cq; --Yq >= 0;) {
+         for (Eq = 0, lq = Aq + Yq; lq > Yq;) xq = Oq[lq] + Nq[Yq] * Wq[lq - Yq - 1] + Eq, Oq[lq--] = xq % aO | 0, Eq = xq / aO | 0;
+         Oq[lq] = (Oq[lq] + Eq) % aO | 0
+       }
+       for (; !Oq[--mq];) Oq.pop();
+       return Eq ? ++gq : Oq.shift(), qq.d = Oq, qq.e = gq, xO ? bO(qq, Bq.precision) : qq
+ ... (109 more added lines; see GitHub link above)
```

#### 21. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L185-L194` → after: `L5531-L5558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R5531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L5531-L5558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/142.js#L5531-L5558) · [Before (L185-L194)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/142.js#L185-L194)

```diff
-       let uz, bz;
-       switch (zz.placement) {
-         case "top":
-           uz = (window.innerWidth - zz.width) / 2, bz = dz;
-           break;
-         case "right":
-           uz = window.innerWidth - zz.width - dz, bz = window.innerHeight / 2 - zz.height / 2 - 10;
-           break;
-         case "left":
-           uz = dz, bz = window.innerHeight / 2 - zz.height / 2 - 10
+       for (var Eq = 7 * qq.e, gq = qq.d[0]; gq >= 10; gq /= 10) Eq++;
+       return Eq
+     }
+ 
+     function rO(qq, Eq, gq) {
+       if (Eq > qq.LN10.sd()) throw xO = !0, gq && (qq.precision = gq), Error(AO + "LN10 precision limit exceeded");
+       return bO(new qq(qq.LN10), Eq)
+     }
+ 
+     function vO(qq) {
+       for (var Eq = ""; qq--;) Eq += "0";
+       return Eq
+     }
+ 
+     function hO(qq, Eq) {
+       var gq, Yq, lq, Oq, mq, xq, Aq, cq, uq, Bq = 1,
+ ... (12 more added lines; see GitHub link above)
```

#### 22. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L196-L200` → after: `L5560-L5584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R5560) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L5560-L5584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/142.js#L5560-L5584) · [Before (L196-L200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/142.js#L196-L200)

```diff
-       return {
-         x1: uz,
-         y1: bz,
-         x2: uz + zz.width,
-         y2: bz + zz.height
+     }
+ 
+     function nO(qq, Eq) {
+       var gq, Yq, lq;
+       for ((gq = Eq.indexOf(".")) > -1 && (Eq = Eq.replace(".", "")), (Yq = Eq.search(/e/i)) > 0 ? (gq < 0 && (gq = Yq), gq += +Eq.slice(Yq + 1), Eq = Eq.substring(0, Yq)) : gq < 0 && (gq = Eq.length), Yq = 0; 48 === Eq.charCodeAt(Yq);) ++Yq;
+       for (lq = Eq.length; 48 === Eq.charCodeAt(lq - 1);) --lq;
+       if (Eq = Eq.slice(Yq, lq)) {
+         if (lq -= Yq, gq = gq - Yq - 1, qq.e = BO(gq / 7), qq.d = [], Yq = (gq + 1) % 7, gq < 0 && (Yq += 7), Yq < lq) {
+           for (Yq && qq.d.push(+Eq.slice(0, Yq)), lq -= 7; Yq < lq;) qq.d.push(+Eq.slice(Yq, Yq += 7));
+           Yq = 7 - (Eq = Eq.slice(Yq)).length
+         } else Yq -= lq;
+         for (; Yq--;) Eq += "0";
+         if (qq.d.push(+Eq), xO && (qq.e > dO || qq.e < -dO)) throw Error(uO + gq)
+       } else qq.s = 0, qq.e = 0, qq.d = [0];
+       return qq
+     }
+ ... (9 more added lines; see GitHub link above)
```

#### 23. `bundles/preprod.bloxd.io/chunks/js/142.js` (Changed code · before: `L205-L207` → after: `L5602-L5625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088R5602) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9c6b6f0a693b775ce8579fc6bc0aa1484108c28d44e9d6ecd5c9138e628ae088) · [After (L5602-L5625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/142.js#L5602-L5625) · [Before (L205-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/142.js#L205-L207)

```diff
-       const bz = Kz(zz),
-         Ez = Kz(uz);
-       return !(bz.x2 <= Ez.x1 || Ez.x2 <= bz.x1 || bz.y2 <= Ez.y1 || Ez.y2 <= bz.y1)
+       var gq, Yq, lq, Oq, mq, xq, Aq, cq, uq, Bq, Wq = qq.constructor,
+         Nq = Wq.precision;
+       if (!qq.s || !Eq.s) return Eq.s ? Eq.s = -Eq.s : Eq = new Wq(qq), xO ? bO(Eq, Nq) : Eq;
+       if (Aq = qq.d, Bq = Eq.d, Yq = Eq.e, cq = qq.e, Aq = Aq.slice(), mq = cq - Yq) {
+         for ((uq = mq < 0) ? (gq = Aq, mq = -mq, xq = Bq.length) : (gq = Bq, Yq = cq, xq = Aq.length), mq > (lq = Math.max(Math.ceil(Nq / 7), xq) + 2) && (mq = lq, gq.length = 1), gq.reverse(), lq = mq; lq--;) gq.push(0);
+         gq.reverse()
+       } else {
+         for ((uq = (lq = Aq.length) < (xq = Bq.length)) && (xq = lq), lq = 0; lq < xq; lq++)
+           if (Aq[lq] != Bq[lq]) {
+             uq = Aq[lq] < Bq[lq];
+             break
+           } mq = 0
+       }
+       for (uq && (gq = Aq, Aq = Bq, Bq = gq, Eq.s = -Eq.s), xq = Aq.length, lq = Bq.length - xq; lq > 0; --lq) Aq[xq++] = 0;
+       for (lq = Bq.length; lq > mq;) {
+         if (Aq[--lq] < Bq[lq]) {
+ ... (8 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/143.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/143.js` (5 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2)

#### 1. `bundles/preprod.bloxd.io/chunks/js/143.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/143.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/143.js#L4)

```diff
-   7795: (zz, uz, bz) => {
+   8011: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/143.js` (Changed code · before: `L6` → after: `L6-L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2) · [After (L6-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/143.js#L6-L8) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/143.js#L6)

```diff
-       GameDistributionSdkAdaptor: () => iz
+       BloxdMsnAccountSdk: () => Bq,
+       MsnSdkAdaptor: () => Vq,
+       msnMockIdentityStorageKey: () => Aq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/143.js` (Changed code · before: `L8-L13` → after: `L10-L26`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2) · [After (L10-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/143.js#L10-L26) · [Before (L8-L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/143.js#L8-L13)

```diff
-     var Ez = bz(1288),
-       nz = bz(1171);
-     class iz extends Ez.b {
-       constructor(zz) {
-         super(), this.setOnEndCb = zz, this.name = "gamedistribution"
-       }
+     var Yq = gq(1304),
+       lq = gq(1171),
+       Oq = gq(3337),
+       mq = gq(598);
+     gq(38);
+     const xq = "https://assets.msn.com/staticsb/statics/latest/msstart-games-sdk/msstart-v1.0.0-rc.23.min.js",
+       Aq = "msnMockIdentity";
+     let cq = null;
+ 
+     function uq() {
+       return cq ??= async function() {
+         await (0, lq.b)(xq, {}, !1);
+         for (let qq = 0; qq < 50 && !window.$msstart; qq++) await (0, mq.M)(100)
+       }(), cq
+     }
+     class Bq {
+ ... (1 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/143.js` (Changed code · before: `L15-L46` → after: `L28-L174`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2R28) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2) · [After (L28-L174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/143.js#L28-L174) · [Before (L15-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/143.js#L15-L46)

```diff
-         let zz;
-         let uz;
-         return window.GD_OPTIONS = {
-           gameId: "b35b336d21654aa5a378480d13ed7225",
-           onEvent: bz => {
-             const Ez = () => {
-               uz && (window.adCompleteSoResume(), uz = !1), zz && (zz(), zz = null)
-             };
-             switch (bz.name) {
-               case "SDK_GAME_START":
-                 console.log("Gamedis SDK_GAME_START"), uz = !1, zz ? (zz(), zz = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
-                 break;
-               case "SDK_GAME_PAUSE":
-                 console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
-                   preventMovement: !0
-                 }), uz = !0;
- ... (16 more removed lines; see GitHub link above)
+         try {
+           await Promise.race([uq(), (0, mq.M)(1e4).then((() => {
+             throw new Error("Not loaded after 10000ms")
+           }))])
+         } catch (qq) {
+           return console.error("MSN Play SDK failed to load, so MSN Play accounts are unavailable:", qq), null
+         }
+         return window.$msstart ? new Bq : (console.error("MSN Play SDK script loaded but window.$msstart is missing, so MSN Play accounts are unavailable"), null)
+       }
+       async getSignedInUser() {
+         try {
+           return await Promise.race([window.$msstart.getSignedInUserAsync(), (0, mq.M)(1e4).then((() => {
+             throw new Error("No answer after 10000ms")
+           }))])
+         } catch (qq) {
+           return "USER_NOT_CONSENTED" !== (null === qq || void 0 === qq ? void 0 : qq.code) && console.error("Failed to get the signed-in MSN Play player:", qq), null
+ ... (131 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/143.js` (Changed code · before: `L48-L62` → after: `L176-L207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2R176) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-efd2e2e16efafa5ca5aaefba82f0283fe73b632b8b4e590dc7c560f68cc40dc2) · [After (L176-L207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/143.js#L176-L207) · [Before (L48-L62)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/143.js#L48-L62)

```diff
-           }
-         }, await (0, nz.e)("https://html5.api.gamedistribution.com/main.min.js", {
-           id: "gamedistribution-jssdk"
-         }), new iz((uz => {
-           zz = uz
-         }))
-       }
-       playVideoAd(zz, uz) {
-         this.setOnEndCb(zz), console.log("Requesting gamedis preroll"), window.gdsdk.showAd()
-       }
-       renderBanner(zz) {
-         console.log("Getting new gamedis banners"), void 0 !== window.gdsdk.AdType.Display ? (console.log("requesting gamedis banner into", document.getElementById(zz.divId)), console.log("Params to window.gdsdk.showAd", window.gdsdk.AdType.Display, zz.divId), window.gdsdk.showAd … [truncated]
-           containerId: zz.divId
-         }).then((() => console.info("showAd(window.gdsdk.AdType.Display) resolved."))).catch((zz => console.info(zz)))) : console.error("window.gdsdk.AdType.Display is undefined")
-       }
+           };
+           window.adStartSoPause(null, {
+             preventMovement: !0
+           }), gq()
+         } else Yq(`AD: Can't play MSN ${qq} ad because sdk is not loaded`)
+       }
+     }
+ 
+     function dq(qq) {
+       let Eq, gq;
+       switch (qq.placement) {
+         case "top":
+           Eq = (window.innerWidth - qq.width) / 2, gq = Wq;
+           break;
+         case "right":
+           Eq = window.innerWidth - qq.width - Wq, gq = window.innerHeight / 2 - qq.height / 2 - 10;
+ ... (16 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/144.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/144.js` (7 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/144.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/144.js#L4)

```diff
-   7797: (zz, uz, bz) => {
+   8014: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/144.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/144.js#L6)

```diff
-       CoolMathGamesSdkAdaptor: () => iz
+       GameDistributionSdkAdaptor: () => Oq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/144.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/144.js#L8)

```diff
-     var Ez = bz(1288),
+     var Yq = gq(1304),
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L10-L24` → after: `L10-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L10-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/144.js#L10-L12) · [Before (L10-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/144.js#L10-L24)

```diff
-     class iz extends Ez.b {
-       constructor() {
-         super(), this.name = "coolmathgames", this.adBreakStartCallback = () => {
-           console.error("adBreakStartCallback not set")
-         }, this.adBreakCompleteCallback = () => {
-           console.error("adBreakCompleteCallback not set")
-         }, document.addEventListener("adBreakStart", this.doAdBreakStart.bind(this)), document.addEventListener("adBreakComplete", this.doAdBreakComplete.bind(this))
-       }
-       doAdBreakStart() {
-         this.adBreakStartCallback();
-         const zz = document.getElementsByClassName("ads-popup");
-         for (const uz of zz) uz instanceof HTMLElement && (uz.style.position = "fixed")
-       }
-       doAdBreakComplete() {
-         this.adBreakCompleteCallback()
+     class Oq extends Yq.e {
+       constructor(qq) {
+         super(), this.setOnEndCb = qq, this.name = "gamedistribution"
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L27` → after: `L15-L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L15-L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/144.js#L15-L53) · [Before (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/144.js#L27)

```diff
-         return await (0, nz.e)("https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"), await (0, nz.e)("https://www.coolmathgames.com/sites/default/files/cmg-ads.js"), new iz
+         let qq;
+         let Eq;
+         return window.GD_OPTIONS = {
+           gameId: "b35b336d21654aa5a378480d13ed7225",
+           onEvent: gq => {
+             const Yq = () => {
+               Eq && (window.adCompleteSoResume(), Eq = !1), qq && (qq(), qq = null)
+             };
+             switch (gq.name) {
+               case "SDK_GAME_START":
+                 console.log("Gamedis SDK_GAME_START"), Eq = !1, qq ? (qq(), qq = null, window.adCompleteSoResume()) : console.error("onEndCb is not defined during SDK_GAME_START for gamedis sdk. Probably means error happened before.");
+                 break;
+               case "SDK_GAME_PAUSE":
+                 console.log("Gamedis SDK_GAME_PAUSE"), window.adStartSoPause(null, {
+                   preventMovement: !0
+                 }), Eq = !0;
+ ... (23 more added lines; see GitHub link above)
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L30-L36` → after: `L56`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR56) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/144.js#L56) · [Before (L30-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/144.js#L30-L36)

```diff
-         this.adBreakStartCallback = () => {
-           console.log("CoolMathGames adBreak Started"), window.adStartSoPause(null, {
-             preventMovement: !0
-           })
-         }, this.adBreakCompleteCallback = () => {
-           console.log("CoolMathGames adBreak Complete"), window.adCompleteSoResume(), zz()
-         }, window.hasOwnProperty("cmgAdBreak") && window.cmgAdBreak()
+         this.setOnEndCb(qq), console.log("Requesting gamedis preroll"), window.gdsdk.showAd()
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/144.js` (Changed code · before: `L38-L43` → after: `L58-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3cR58) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-ecf53dc906339e9f8c565722cf0e6a252e27b1c3e90559623a40b5ee40de0f3c) · [After (L58-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/144.js#L58-L61) · [Before (L38-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/144.js#L38-L43)

```diff
-       onGameplayStart() {
-         try {
-           window.parent.cmgGameEvent("start")
-         } catch {
-           console.log("Couldn't access cmgGameEvent on parent")
-         }
+       renderBanner(qq) {
+         console.log("Getting new gamedis banners"), void 0 !== window.gdsdk.AdType.Display ? (console.log("requesting gamedis banner into", document.getElementById(qq.divId)), console.log("Params to window.gdsdk.showAd", window.gdsdk.AdType.Display, qq.divId), window.gdsdk.showAd … [truncated]
+           containerId: qq.divId
+         }).then((() => console.info("showAd(window.gdsdk.AdType.Display) resolved."))).catch((qq => console.info(qq)))) : console.error("window.gdsdk.AdType.Display is undefined")
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/145.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/145.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31)

#### 1. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/145.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/145.js#L4)

```diff
-   7799: (zz, uz, bz) => {
+   8023: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/145.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/145.js#L6)

```diff
-       AdMobSdkAdaptor: () => Oz
+       CoolMathGamesSdkAdaptor: () => Oq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L8-L37` → after: `L8-L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L8-L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/145.js#L8-L16) · [Before (L8-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/145.js#L8-L37)

```diff
-     var Ez = bz(1288),
-       nz = bz(20),
-       iz = bz(1638),
-       lz = bz(128),
-       Mz = bz(3210),
-       tz = bz(328);
-     const Hz = {
-       mobileAndroid: {
-         banners: {
-           leaderboard_1: "ca-app-pub-5991928098122027/7081016880",
-           leaderboard_4: "ca-app-pub-5991928098122027/6301601920",
-           leaderboard_5: "ca-app-pub-5991928098122027/7592152779",
-           skyscraper_1: "ca-app-pub-5991928098122027/1026744422",
-           skyscraper_2: "ca-app-pub-5991928098122027/3483866894",
-           square_1: "ca-app-pub-5991928098122027/6381115670"
-         },
- ... (14 more removed lines; see GitHub link above)
+     var Yq = gq(1304),
+       lq = gq(1171);
+     class Oq extends Yq.e {
+       constructor() {
+         super(), this.name = "coolmathgames", this.adBreakStartCallback = () => {
+           console.error("adBreakStartCallback not set")
+         }, this.adBreakCompleteCallback = () => {
+           console.error("adBreakCompleteCallback not set")
+         }, document.addEventListener("adBreakStart", this.doAdBreakStart.bind(this)), document.addEventListener("adBreakComplete", this.doAdBreakComplete.bind(this))
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L39-L50` → after: `L18-L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R18) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L18-L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/145.js#L18-L24) · [Before (L39-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/145.js#L39-L50)

```diff
-     };
-     class Oz extends Ez.b {
-       constructor(zz) {
-         super(), this.name = "admob", this.bannerAutoRefresh = "alwaysOn", this.adUnitIds = void 0, this.bannerPlacementByBloxdId = new Map, this.bannerFirstResponseSeen = new Set, this.fullScreenAdsInFlight = 0, this.adUnitIds = Hz[zz], iz.d.on("ads.bannerStatus", (zz => {
-           let {
-             placementId: uz,
-             shown: bz,
-             error: Ez
-           } = zz;
-           const nz = !this.bannerFirstResponseSeen.has(uz);
-           this.bannerFirstResponseSeen.add(uz), nz ? bz ? console.log(`AD ${uz}: AdMob banner loaded`) : console.warn(`AD ${uz}: AdMob banner failed to load: ${Ez}`) : bz || console.warn(`AD ${uz}: AdMob banner refresh failed: ${Ez}`)
-         }))
+       doAdBreakStart() {
+         this.adBreakStartCallback();
+         const qq = document.getElementsByClassName("ads-popup");
+         for (const Eq of qq) Eq instanceof HTMLElement && (Eq.style.position = "fixed")
+       }
+       doAdBreakComplete() {
+         this.adBreakCompleteCallback()
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L53-L76` → after: `L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/145.js#L27) · [Before (L53-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/145.js#L53-L76)

```diff
-         const zz = "mobileIos" === lz.x ? "mobileIos" : "mobileAndroid";
-         return console.log(`AD: AdMobSDK initialised for ${zz}`), new Oz(zz)
-       }
-       muteGameDuring(zz) {
-         return this.fullScreenAdsInFlight++, nz.e.set({
-           soundOnFromAd: !1
-         }), zz.finally((() => {
-           this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && nz.e.set({
-             soundOnFromAd: !0
-           })
-         }))
-       }
-       playRewarded(zz, uz) {
-         const bz = this.adUnitIds.rewarded;
-         this.muteGameDuring(iz.d.request("ads.showRewarded", {
-           placementId: bz
- ... (8 more removed lines; see GitHub link above)
+         return await (0, lq.b)("https://ajax.googleapis.com/ajax/libs/jquery/3.6.3/jquery.min.js"), await (0, lq.b)("https://www.coolmathgames.com/sites/default/files/cmg-ads.js"), new Oq
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L79-L86` → after: `L30-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L30-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/145.js#L30-L36) · [Before (L79-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/145.js#L79-L86)

```diff
-         const bz = this.adUnitIds.interstitial;
-         this.muteGameDuring(iz.d.request("ads.showInterstitial", {
-           placementId: bz
-         })).then((() => {
-           zz()
-         }), (uz => {
-           console.warn(`AD ${bz}: AdMob interstitial failed:`, uz), zz()
-         }))
+         this.adBreakStartCallback = () => {
+           console.log("CoolMathGames adBreak Started"), window.adStartSoPause(null, {
+             preventMovement: !0
+           })
+         }, this.adBreakCompleteCallback = () => {
+           console.log("CoolMathGames adBreak Complete"), window.adCompleteSoResume(), qq()
+         }, window.hasOwnProperty("cmgAdBreak") && window.cmgAdBreak()
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L88-L107` → after: `L38-L43`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L38-L43)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/145.js#L38-L43) · [Before (L88-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/145.js#L88-L107)

```diff
-       renderBanner(zz) {
-         const uz = (0, Mz.c)(zz),
-           bz = this.adUnitIds.banners[uz];
-         if (void 0 === bz) return;
-         const Ez = document.getElementById(zz.divId);
-         if (!Ez) return void console.warn(`AD ${uz}: AdMob renderBanner called but div ${zz.divId} is not in DOM`);
-         const nz = Ez.getBoundingClientRect(),
-           lz = window.innerWidth,
-           Hz = window.innerHeight;
-         if (0 === lz || 0 === Hz) return void console.warn(`AD ${uz}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
-         const Oz = {
-           x1: tz.d.clamp(nz.left / lz * 100, 0, 100),
-           y1: tz.d.clamp(nz.top / Hz * 100, 0, 100),
-           x2: tz.d.clamp(nz.right / lz * 100, 0, 100),
-           y2: tz.d.clamp(nz.bottom / Hz * 100, 0, 100)
-         };
- ... (4 more removed lines; see GitHub link above)
+       onGameplayStart() {
+         try {
+           window.parent.cmgGameEvent("start")
+         } catch {
+           console.log("Couldn't access cmgGameEvent on parent")
+         }
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L109-L114` → after: `L45-L51`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R45) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L45-L51)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/145.js#L45-L51) · [Before (L109-L114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/145.js#L109-L114)

```diff
-       clearBanner(zz) {
-         const uz = (0, Mz.c)(zz),
-           bz = this.bannerPlacementByBloxdId.get(uz);
-         void 0 !== bz && (this.bannerPlacementByBloxdId.delete(uz), this.bannerFirstResponseSeen.delete(bz), console.log(`AD ${uz}: AdMob clearBanner placementId=${bz}`), iz.d.emit("ads.hideBanner", {
-           placementId: bz
-         }))
+       onGameplayStop() {}
+       onGameEntered() {
+         try {
+           window.parent.cmgGameEvent("start")
+         } catch {
+           console.log("Couldn't access cmgGameEvent on parent")
+         }
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/145.js` (Changed code · before: `L116-L118` → after: `L53`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31R53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-d7476da6586b056055a6853875ed9d984e24046896744443d986f4c09f586b31) · [After (L53)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/145.js#L53) · [Before (L116-L118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/145.js#L116-L118)

```diff
-       canShowBloxdAd(zz) {
-         return !1
-       }
+       onGameExited() {}
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/146.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/146.js` (9 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af)

#### 1. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/146.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/146.js#L4)

```diff
-   7808: (zz, uz, bz) => {
+   8025: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/146.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/146.js#L6)

```diff
-       AdinPlaySdkAdaptor: () => Mz
+       AdMobSdkAdaptor: () => uq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L8-L14` → after: `L8-L50`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L8-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/146.js#L8-L50) · [Before (L8-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/146.js#L8-L14)

```diff
-     var Ez = bz(1288),
-       nz = bz(1171),
-       iz = bz(235);
-     const lz = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
-     class Mz extends Ez.b {
-       constructor() {
-         super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = lz
+     var Yq = gq(1304),
+       lq = gq(24),
+       Oq = gq(1677),
+       mq = gq(136),
+       xq = gq(3337),
+       Aq = gq(307);
+     const cq = {
+       mobileAndroid: {
+         banners: {
+           leaderboard_1: "ca-app-pub-5991928098122027/7081016880",
+           leaderboard_4: "ca-app-pub-5991928098122027/6301601920",
+           leaderboard_5: "ca-app-pub-5991928098122027/7592152779",
+           skyscraper_1: "ca-app-pub-5991928098122027/1026744422",
+           skyscraper_2: "ca-app-pub-5991928098122027/3483866894",
+           square_1: "ca-app-pub-5991928098122027/6381115670"
+         },
+ ... (27 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L17` → after: `L53-L63`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR53) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L53-L63)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/146.js#L53-L63) · [Before (L17)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/146.js#L17)

```diff
-         return (0, iz.canonicaliseZonesWhenIdle)(lz), await (0, nz.e)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"), new Mz
+         const qq = "mobileIos" === mq.n ? "mobileIos" : "mobileAndroid";
+         return console.log(`AD: AdMobSDK initialised for ${qq}`), new uq(qq)
+       }
+       muteGameDuring(qq) {
+         return this.fullScreenAdsInFlight++, lq.b.set({
+           soundOnFromAd: !1
+         }), qq.finally((() => {
+           this.fullScreenAdsInFlight--, 0 === this.fullScreenAdsInFlight && lq.b.set({
+             soundOnFromAd: !0
+           })
+         }))
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L20-L30` → after: `L66-L76`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR66) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L66-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/146.js#L66-L76) · [Before (L20-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/146.js#L20-L30)

```diff
-         if ("undefined" !== typeof window.aiptag.adplayer) {
-           console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
-           const bz = "video_reward";
-           window.aiptag.cmd.player.push((function() {
-             window.aiptag.adplayer.startPreRoll({
-               alias: bz
-             })
-           })), window.adStartSoPause(zz, {
-             onFailCb: uz
-           })
-         } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), uz()
+         const gq = this.adUnitIds.rewarded;
+         this.muteGameDuring(Oq.c.request("ads.showRewarded", {
+           placementId: gq
+         })).then((gq => {
+           let {
+             rewarded: Yq
+           } = gq;
+           Yq ? qq() : Eq()
+         }), (qq => {
+           console.warn(`AD ${gq}: AdMob rewarded failed:`, qq), Eq()
+         }))
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L33-L37` → after: `L79-L86`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR79) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L79-L86)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/146.js#L79-L86) · [Before (L33-L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/146.js#L33-L37)

```diff
-         "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (uz ? ` (alias: ${uz})` : "")), window.aiptag.cmd.player.push((function() {
-           window.aiptag.adplayer.startPreRoll({
-             alias: uz
-           })
-         })), window.adStartSoPause(zz)) : (zz(), console.error("AIP ad lib not loaded, no ad playing"))
+         const gq = this.adUnitIds.interstitial;
+         this.muteGameDuring(Oq.c.request("ads.showInterstitial", {
+           placementId: gq
+         })).then((() => {
+           qq()
+         }), (Eq => {
+           console.warn(`AD ${gq}: AdMob interstitial failed:`, Eq), qq()
+         }))
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L40-L50` → after: `L89-L107`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR89) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L89-L107)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/146.js#L89-L107) · [Before (L40-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/146.js#L40-L50)

```diff
-         if ("undefined" === typeof window.aiptag.adplayer) return void console.log("AD: User has adblock, not requesting new banners");
-         const {
-           divId: uz,
-           alias: bz
-         } = zz;
-         window.aiptag.cmd.display.push((function() {
-           window.aipDisplayTag.display({
-             adUnitName: uz,
-             alias: bz
-           })
-         })), console.log("AD: Requested aip banner", document.getElementById(zz.divId), bz ? `(alias: ${bz})` : "")
+         const Eq = (0, xq.b)(qq),
+           gq = this.adUnitIds.banners[Eq];
+         if (void 0 === gq) return;
+         const Yq = document.getElementById(qq.divId);
+         if (!Yq) return void console.warn(`AD ${Eq}: AdMob renderBanner called but div ${qq.divId} is not in DOM`);
+         const lq = Yq.getBoundingClientRect(),
+           mq = window.innerWidth,
+           cq = window.innerHeight;
+         if (0 === mq || 0 === cq) return void console.warn(`AD ${Eq}: AdMob renderBanner skipped \u2014 viewport has zero dimension`);
+         const uq = {
+           x1: Aq.c.clamp(lq.left / mq * 100, 0, 100),
+           y1: Aq.c.clamp(lq.top / cq * 100, 0, 100),
+           x2: Aq.c.clamp(lq.right / mq * 100, 0, 100),
+           y2: Aq.c.clamp(lq.bottom / cq * 100, 0, 100)
+         };
+         this.bannerPlacementByBloxdId.set(Eq, gq), console.log(`AD ${Eq}: AdMob renderBanner placementId=${gq} box=`, uq), Oq.c.emit("ads.showBanner", {
+ ... (3 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L53-L59` → after: `L110-L113`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L110-L113)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/146.js#L110-L113) · [Before (L53-L59)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/146.js#L53-L59)

```diff
-         "undefined" !== typeof window.aiptag.adplayer ? (window.aiptag.cmd.display.push((function() {
-           window.aipDisplayTag.destroy(zz.divId)
-         })), console.log(`AD: Clearing aip banner ad ${zz.divId}`)) : console.log("AD: User has adblock, not requesting new banners")
-       }
-       setBannerAutoRefreshEnabled(zz, uz) {
-         window.aiptag.cmd.display.push((function() {
-           window.aipDisplayTag.setAutoRefresh(zz.divId, uz)
+         const Eq = (0, xq.b)(qq),
+           gq = this.bannerPlacementByBloxdId.get(Eq);
+         void 0 !== gq && (this.bannerPlacementByBloxdId.delete(Eq), this.bannerFirstResponseSeen.delete(gq), console.log(`AD ${Eq}: AdMob clearBanner placementId=${gq}`), Oq.c.emit("ads.hideBanner", {
+           placementId: gq
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/146.js` (Changed code · before: `L62-L67` → after: `L116-L117`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7afR116) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-f45008abfce3dfde279590575b9078ee898a2fdec0e04711456a07a97013f7af) · [After (L116-L117)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/146.js#L116-L117) · [Before (L62-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/146.js#L62-L67)

```diff
-       newPageSession() {
-         console.log("AD: Requesting new page session"), window.aiptag.cmd.display.push((function() {
-           window.__VM.push((function(zz, uz) {
-             uz.Instances.pageManager.newPageSession(!1)
-           }))
-         }))
+       canShowBloxdAd(qq) {
+         return !1
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/147.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/147.js` (6 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39)

#### 1. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/147.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/147.js#L4)

```diff
-   7810: (zz, uz, bz) => {
+   8027: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/147.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/147.js#L6)

```diff
-       AdsenseForGamesSdkAdaptor: () => iz
+       AdinPlaySdkAdaptor: () => xq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L8-L10` → after: `L8-L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L8-L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/147.js#L8-L12) · [Before (L8-L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/147.js#L8-L10)

```diff
-     var Ez = bz(1288),
-       nz = bz(1171);
-     class iz extends Ez.b {
+     var Yq = gq(1304),
+       lq = gq(1171),
+       Oq = gq(218);
+     const mq = ["CN", "VN", "IN", "PK", "ID", "EG", "BD", "SV", "DZ", "EC", "VE", "UA", "MA", "LK", "NG", "BO", "KE", "TN", "RU", "NP", "IQ", "MM", "HN", "UY", "JO", "PY", "PS", "ET", "GH", "JM", "CM", "AS", "SY", "BY", "AO", "MN", "GY", "LB", "MV", "BW", "UG"];
+     class xq extends Yq.e {
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L12` → after: `L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R14) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/147.js#L14) · [Before (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/147.js#L12)

```diff
-         super(), this.name = "adsense"
+         super(), this.name = "adinplay", this.bannerAutoRefresh = "disableable", this.noAdCountries = mq
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L15-L27` → after: `L17-L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R17) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L17-L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/147.js#L17-L30) · [Before (L15-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/147.js#L15-L27)

```diff
-         return window.adsbygoogle = window.adsbygoogle || [], window.adBreak = window.adConfig = function(zz) {
-           window.adsbygoogle.push(zz)
-         }, window.adConfig({
-           preloadAdBreaks: "on",
-           sound: "on",
-           onReady: () => {
-             console.log("adsense for games ready")
-           }
-         }), await (0, nz.e)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
-           "data-ad-client": "ca-pub-5991928098122027",
-           "data-ad-frequency-hint": "120s",
-           type: "text/javascript"
-         }), console.log("Loaded adsense for games"), new iz
+         return (0, Oq.canonicaliseZonesWhenIdle)(mq), await (0, lq.b)("https://api.adinplay.com/libs/aiptag/pub/RBN/bloxd.io/tag.min.js"), new xq
+       }
+       playRewarded(qq, Eq) {
+         if ("undefined" !== typeof window.aiptag.adplayer) {
+           console.log("AD: Requesting AdInPlay preroll ad for rewarded placement");
+           const gq = "video_reward";
+           window.aiptag.cmd.player.push((function() {
+             window.aiptag.adplayer.startPreRoll({
+               alias: gq
+             })
+           })), window.adStartSoPause(qq, {
+             onFailCb: Eq
+           })
+         } else console.log("AD: AIP ad lib not loaded, no rewarded ad playing"), Eq()
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/147.js` (Changed code · before: `L30-L49` → after: `L33-L67`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39R33) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-5626c8d71e23a5d4bf1b164f242480391966d00f43988feaee8e9c2eac3c6e39) · [After (L33-L67)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/147.js#L33-L67) · [Before (L30-L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/147.js#L30-L49)

```diff
-         console.log("playPreroll requested");
-         let bz = !1;
-         const Ez = setTimeout((() => {
-           console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds"), bz = !0, zz()
-         }), 3e3);
-         window.adBreak({
-           type: "video_start" === uz ? "start" : "next",
-           name: uz,
-           beforeAd: () => {
-             console.log("beforeAd called"), clearTimeout(Ez), window.adStartSoPause(null, {
-               preventMovement: !0
-             })
-           },
-           afterAd: () => {
-             console.log("afterAd called"), window.adCompleteSoResume()
-           },
- ... (4 more removed lines; see GitHub link above)
+         "undefined" !== typeof window.aiptag.adplayer ? (console.log("AD: Requesting AdInPlay video ad" + (Eq ? ` (alias: ${Eq})` : "")), window.aiptag.cmd.player.push((function() {
+           window.aiptag.adplayer.startPreRoll({
+             alias: Eq
+           })
+         })), window.adStartSoPause(qq)) : (qq(), console.error("AIP ad lib not loaded, no ad playing"))
+       }
+       renderBanner(qq) {
+         if ("undefined" === typeof window.aiptag.adplayer) return void console.log("AD: User has adblock, not requesting new banners");
+         const {
+           divId: Eq,
+           alias: gq
+         } = qq;
+         window.aiptag.cmd.display.push((function() {
+           window.aipDisplayTag.display({
+             adUnitName: Eq,
+             alias: gq
+ ... (19 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/148.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/148.js` (10 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30d)

#### 1. `bundles/preprod.bloxd.io/chunks/js/148.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30dR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30d) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/148.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/148.js#L4)

```diff
-   7817: (zz, uz, bz) => {
+   8036: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/148.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30dR6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30d) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/148.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/148.js#L6)

```diff
-       AditudeSdkAdaptor: () => lz
+       AdsenseForGamesSdkAdaptor: () => Oq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/148.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30dR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30d) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/148.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/148.js#L8)

```diff
-     var Ez = bz(1288),
+     var Yq = gq(1304),
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/148.js` (Changed code · before: `L10-L14` → after: `L10`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30dR10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30d) · [After (L10)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/148.js#L10) · [Before (L10-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/148.js#L10-L14)

```diff
-     const iz = {
-       video: "pb-slot-interstitial-video",
-       rewarded: "pb-slot-rewarded-video"
-     };
-     class lz extends Ez.b {
+     class Oq extends Yq.e {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/148.js` (Changed code · before: `L16` → after: `L12`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30dR12) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30d) · [After (L12)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/148.js#L12) · [Before (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/148.js#L16)

```diff
-         super(), this.name = "aditude"
+         super(), this.name = "adsense"
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/148.js` (Changed code · before: `L19-L21` → after: `L15-L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30dR15) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30d) · [After (L15-L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/148.js#L15-L27) · [Before (L19-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/148.js#L19-L21)

```diff
-         return window.tude = window.tude || {
-           cmd: []
-         }, await (0, nz.e)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new lz
+         return window.adsbygoogle = window.adsbygoogle || [], window.adBreak = window.adConfig = function(qq) {
+           window.adsbygoogle.push(qq)
+         }, window.adConfig({
+           preloadAdBreaks: "on",
+           sound: "on",
+           onReady: () => {
+             console.log("adsense for games ready")
+           }
+         }), await (0, lq.b)("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", {
+           "data-ad-client": "ca-pub-5991928098122027",
+           "data-ad-frequency-hint": "120s",
+           type: "text/javascript"
+         }), console.log("Loaded adsense for games"), new Oq
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/148.js` (Changed code · before: `L24-L42` → after: `L30`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30dR30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30d) · [After (L30)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/148.js#L30) · [Before (L24-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/148.js#L24-L42)

```diff
-         this.playVideoOrRewarded("video", zz, zz)
-       }
-       playRewarded(zz, uz) {
-         this.playVideoOrRewarded("rewarded", zz, uz)
-       }
-       renderBanner(zz) {
-         const uz = this.getBaseDivId(zz.adId, zz.width, zz.height);
-         window.tude.cmd.push((function() {
-           window.tude.refreshAdsViaDivMappings([{
-             divId: zz.divId,
-             baseDivId: uz
-           }])
-         }))
-       }
-       getBaseDivId(zz, uz, bz) {
-         return `pb-slot-bloxdio-${uz}-${bz}${zz>1?`-${zz}`:""}`
- ... (3 more removed lines; see GitHub link above)
+         console.log("playPreroll requested");
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/148.js` (Changed code · before: `L44-L45` → after: `L32-L41`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30dR32) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30d) · [After (L32-L41)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/148.js#L32-L41) · [Before (L44-L45)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/148.js#L44-L45)

```diff
-         const lz = () => {
-             document.getElementById("GenericVideoWrapper").style.display = "none", nz = !0
+         const Yq = setTimeout((() => {
+           console.log("Calling onEnd from timeout - window.adBreak did not respond after 3 seconds"), gq = !0, qq()
+         }), 3e3);
+         window.adBreak({
+           type: "video_start" === Eq ? "start" : "next",
+           name: Eq,
+           beforeAd: () => {
+             console.log("beforeAd called"), clearTimeout(Yq), window.adStartSoPause(null, {
+               preventMovement: !0
+             })
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/148.js` (Changed code · before: `L47-L76` → after: `L43-L47`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30dR43) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30d) · [After (L43-L47)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/148.js#L43-L47) · [Before (L47-L76)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/148.js#L47-L76)

```diff
-           Mz = (zz, uz) => {
-             console.error(`AD: Error while playing Aditude video ad: ${zz}:`, uz), lz(), bz()
-           };
-         if (console.log(`AD: Requesting Aditude ${zz} ad`), void 0 === (null === (Ez = window.tude) || void 0 === Ez ? void 0 : Ez.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${zz} ad playing`), void Mz("Aditude ad lib not loaded", null);
-         document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
-           console.log("AD: Inside Aditude window.tude.cmd.push");
-           try {
-             window.tude.requestInstreamPlayer({
-               code: iz[zz],
-               divId: "GenericVideoInner",
-               mode: "adOnly"
-             }).then((bz => {
-               console.log("AD: Inside Aditude window.tude.requestInstreamPlayer.then"), bz.on("playerClose", ((bz, Ez) => {
-                 console.log("AD: Inside Aditude player.on playerClose"), console.log(`AD: Successfully finished Aditude ${zz} ad`), lz(), uz()
-               })).on("adPrefetchError", ((zz, uz) => {
-                 console.log("AD: Inside Aditude player.on adPrefetchError"), Mz("Prefetch error", uz)
- ... (14 more removed lines; see GitHub link above)
+           afterAd: () => {
+             console.log("afterAd called"), window.adCompleteSoResume()
+           },
+           adBreakDone: Eq => {
+             console.log("adBreakDone called", Eq), clearTimeout(Yq), gq || (console.log("Haven't called onEnd yet, calling it from adBreakDone."), qq())
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/148.js` (Changed code · before: `L78` → after: `L49`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30dR49) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-1a3bb85ef23595aa0eee0d3c8fe96ee48c5d7471bb45fcdb4c75cf918d88c30d) · [After (L49)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/148.js#L49) · [Before (L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/148.js#L78)

```diff
-         }))
+         })
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/149.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/149.js` (11 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6)

#### 1. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/149.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/149.js#L4)

```diff
-   7825: (zz, uz, bz) => {
+   8038: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L6` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/149.js#L6) · [Before (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/149.js#L6)

```diff
-       NitroSdkAdaptor: () => lz
+       AditudeSdkAdaptor: () => mq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L8` → after: `L8`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/149.js#L8) · [Before (L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/149.js#L8)

```diff
-     var Ez = bz(1288),
+     var Yq = gq(1304),
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L10-L11` → after: `L10-L14`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R10) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L10-L14)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/149.js#L10-L14) · [Before (L10-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/149.js#L10-L11)

```diff
-     const iz = "NitroOutstreamVideo";
-     class lz extends Ez.b {
+     const Oq = {
+       video: "pb-slot-interstitial-video",
+       rewarded: "pb-slot-rewarded-video"
+     };
+     class mq extends Yq.e {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L13` → after: `L16`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R16) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L16)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/149.js#L16) · [Before (L13)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/149.js#L13)

```diff
-         super(), this.name = "nitro", this.bannerAutoRefresh = "alwaysOn", this.videoInFlight = !1
+         super(), this.name = "aditude"
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L16-L34` → after: `L19-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R19) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L19-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/149.js#L19-L21) · [Before (L16-L34)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/149.js#L16-L34)

```diff
-         return window.nitroAds = window.nitroAds || {
-           createAd: function() {
-             for (var zz = arguments.length, uz = new Array(zz), bz = 0; bz < zz; bz++) uz[bz] = arguments[bz];
-             return new Promise((zz => {
-               window.nitroAds.queue.push(["createAd", uz, zz])
-             }))
-           },
-           addUserToken: function() {
-             for (var zz = arguments.length, uz = new Array(zz), bz = 0; bz < zz; bz++) uz[bz] = arguments[bz];
-             window.nitroAds.queue.push(["addUserToken", uz])
-           },
-           queue: []
-         }, document.addEventListener("nitroAds.rendered", (zz => {
-           var uz, bz, Ez;
-           const nz = document.getElementById(null !== (uz = null === (bz = zz.detail) || void 0 === bz || null === (Ez = bz.adInfo) || void 0 === Ez ? void 0 : Ez.adUnitCode) && void 0 !== uz ? uz : "");
-           null !== nz && void 0 !== nz && nz.classList.contains("NitroBanner") && nz.classList.toggle("NitroBannerUnfilled", "blank" === zz.detail.type)
- ... (3 more removed lines; see GitHub link above)
+         return window.tude = window.tude || {
+           cmd: []
+         }, await (0, lq.b)("https://edge.aditude.io/site/bloxd-Jf9xJheMSn/bloxd-longform/bloxd.io/prod/load.js"), new mq
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L37` → after: `L24`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R24) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L24)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/149.js#L24) · [Before (L37)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/149.js#L37)

```diff
-         this.showVideoAd(zz, zz)
+         this.playVideoOrRewarded("video", qq, qq)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L40-L108` → after: `L27`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R27) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L27)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/149.js#L27) · [Before (L40-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/149.js#L40-L108)

```diff
-         this.showVideoAd(zz, uz)
-       }
-       showVideoAd(zz, uz) {
-         if (this.videoInFlight) return console.log("AD: Nitro video already playing"), void uz();
-         const bz = document.getElementById("GenericVideoWrapper"),
-           Ez = document.getElementById("GenericVideoInner");
-         if (null === bz || null === Ez) return void uz();
-         this.videoInFlight = !0;
-         let nz = !1;
-         const lz = document.createElement("div");
-         lz.id = iz, lz.className = "NitroVideoPlacement";
-         const Mz = iz => {
-           if (!nz) {
-             nz = !0, clearTimeout(wz), clearInterval(Kz), document.removeEventListener("nitroAds.adResult", Oz), document.removeEventListener("nitroAds.rendered", pz), document.removeEventListener("nitroAds.complete", dz);
-             try {
-               Fz.remove(), lz.querySelectorAll("video").forEach((zz => {
- ... (53 more removed lines; see GitHub link above)
+         this.playVideoOrRewarded("rewarded", qq, Eq)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L111-L125` → after: `L30-L36`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R30) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L30-L36)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/149.js#L30-L36) · [Before (L111-L125)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/149.js#L111-L125)

```diff
-         const {
-           divId: uz,
-           width: bz,
-           height: Ez
-         } = zz, nz = `${uz}-nitro`;
-         let iz = document.getElementById(nz);
-         null === iz && (iz = document.createElement("div"), iz.id = nz, iz.className = "NitroBanner", iz.style.setProperty("--nitro-slot-width", `${bz}px`), iz.style.setProperty("--nitro-slot-height", `${Ez}px`), document.getElementById(uz).appendChild(iz));
-         const lz = [
-           [String(bz), String(Ez)]
-         ];
-         Promise.resolve(window.nitroAds.createAd(nz, {
-           sizes: lz
-         })).catch((zz => {
-           console.error(`AD: Nitro failed to create banner ${nz}:`, zz)
-         })), console.log(`AD: Requested Nitro banner ${nz}`)
+         const Eq = this.getBaseDivId(qq.adId, qq.width, qq.height);
+         window.tude.cmd.push((function() {
+           window.tude.refreshAdsViaDivMappings([{
+             divId: qq.divId,
+             baseDivId: Eq
+           }])
+         }))
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L127-L129` → after: `L38-L39`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R38) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L38-L39)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/149.js#L38-L39) · [Before (L127-L129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/149.js#L127-L129)

```diff
-       displayConsentUI() {
-         var zz, uz;
-         null === (zz = (uz = window).__cmp) || void 0 === zz || zz.call(uz, "showModal")
+       getBaseDivId(qq, Eq, gq) {
+         return `pb-slot-bloxdio-${Eq}-${gq}${qq>1?`-${qq}`:""}`
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/149.js` (Changed code · before: `L131-L140` → after: `L41-L78`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6R41) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-a727bd4202a864ec01437330035d530f14c47fa6fd46ddc2ab2de9a44c5ad5c6) · [After (L41-L78)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/149.js#L41-L78) · [Before (L131-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/149.js#L131-L140)

```diff
-       addPrivacyLinks(zz) {
-         var uz, bz, Ez, nz;
-         const iz = document.createElement("span");
-         iz.dataset.ccpaLink = "1";
-         const lz = document.createElement("div");
-         lz.id = "ncmp-consent-link", zz.replaceChildren(iz, lz), null === (uz = (bz = window).__uspapi) || void 0 === uz || uz.call(bz, "addLink", 1), null === (Ez = (nz = window).__cmp) || void 0 === Ez || Ez.call(nz, "addConsentLink")
-       }
-       newPageSession() {
-         var zz, uz;
-         null === (zz = (uz = window.nitroAds).navigate) || void 0 === zz || zz.call(uz)
+       playVideoOrRewarded(qq, Eq, gq) {
+         var Yq;
+         let lq = !1;
+         const mq = () => {
+             document.getElementById("GenericVideoWrapper").style.display = "none", lq = !0
+           },
+           xq = (qq, Eq) => {
+             console.error(`AD: Error while playing Aditude video ad: ${qq}:`, Eq), mq(), gq()
+           };
+         if (console.log(`AD: Requesting Aditude ${qq} ad`), void 0 === (null === (Yq = window.tude) || void 0 === Yq ? void 0 : Yq.requestInstreamPlayer)) return console.log(`AD: Aditude ad lib not loaded, no ${qq} ad playing`), void xq("Aditude ad lib not loaded", null);
+         document.getElementById("GenericVideoWrapper").style.display = "flex", document.getElementById("GenericVideoInner").classList.add("AditudeVideo"), window.tude.cmd.push((function() {
+           console.log("AD: Inside Aditude window.tude.cmd.push");
+           try {
+             window.tude.requestInstreamPlayer({
+               code: Oq[qq],
+               divId: "GenericVideoInner",
+ ... (22 more added lines; see GitHub link above)
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/150.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/150.js` (8 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2c)

#### 1. `bundles/preprod.bloxd.io/chunks/js/150.js` (Changed code · before: `L4-L8` → after: `L4-L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2cR4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2c) · [After (L4-L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/150.js#L4-L6) · [Before (L4-L8)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/150.js#L4-L8)

```diff
-   8459: (zz, uz, bz) => {
-     bz.d(uz, {
-       b: () => Pz,
-       e: () => Jz,
-       f: () => Az
+   8045: (qq, Eq, gq) => {
+     gq.r(Eq), gq.d(Eq, {
+       NitroSdkAdaptor: () => mq
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/150.js` (Changed code · before: `L10-L183` → after: `L8-L21`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2cR8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2c) · [After (L8-L21)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/150.js#L8-L21) · [Before (L10-L183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/150.js#L10-L183)

```diff
-     var Ez = bz(56),
-       nz = bz(4300),
-       iz = bz(1114),
-       lz = bz(1417),
-       Mz = bz(22),
-       tz = bz(3174),
-       Hz = bz(2136),
-       Oz = bz(1226),
-       pz = bz(8494),
-       dz = bz(1871),
-       Fz = bz(1912),
-       Zz = bz(1181),
-       Rz = bz(20),
-       Kz = bz(1595),
-       wz = bz(1038),
-       Xz = bz.n(wz),
- ... (158 more removed lines; see GitHub link above)
+     var Yq = gq(1304),
+       lq = gq(1171);
+     const Oq = "NitroOutstreamVideo";
+     class mq extends Yq.e {
+       constructor() {
+         super(), this.name = "nitro", this.bannerAutoRefresh = "alwaysOn", this.videoInFlight = !1
+       }
+       static async setup() {
+         return window.nitroAds = window.nitroAds || {
+           createAd: function() {
+             for (var qq = arguments.length, Eq = new Array(qq), gq = 0; gq < qq; gq++) Eq[gq] = arguments[gq];
+             return new Promise((qq => {
+               window.nitroAds.queue.push(["createAd", Eq, qq])
+             }))
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/150.js` (Changed code · before: `L185-L306` → after: `L23-L61`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2cR23) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2c) · [After (L23-L61)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/150.js#L23-L61) · [Before (L185-L306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/150.js#L185-L306)

```diff
-           children: [(0, vz.jsxs)("svg", {
-             className: "EmoteWheelSvg",
-             viewBox: `0 0 ${sz.m} ${sz.m}`,
-             children: [hz.map(((uz, bz) => {
-               const Ez = null !== uz,
-                 nz = Qz && bz === wz;
-               return (0, vz.jsx)("path", {
-                 d: Lz(bz),
-                 className: Xz()("EmoteWheelWedge", {
-                   EmoteWheelWedgeHighlighted: nz,
-                   EmoteWheelWedgeDisabled: !Ez
-                 }),
-                 onClick: zz => {
-                   zz.stopPropagation(), null !== uz && (zz => {
-                     gz(), Sz(zz)
-                   })(uz)
- ... (106 more removed lines; see GitHub link above)
+           addUserToken: function() {
+             for (var qq = arguments.length, Eq = new Array(qq), gq = 0; gq < qq; gq++) Eq[gq] = arguments[gq];
+             window.nitroAds.queue.push(["addUserToken", Eq])
+           },
+           queue: []
+         }, document.addEventListener("nitroAds.rendered", (qq => {
+           var Eq, gq, Yq;
+           const lq = document.getElementById(null !== (Eq = null === (gq = qq.detail) || void 0 === gq || null === (Yq = gq.adInfo) || void 0 === Yq ? void 0 : Yq.adUnitCode) && void 0 !== Eq ? Eq : "");
+           null !== lq && void 0 !== lq && lq.classList.contains("NitroBanner") && lq.classList.toggle("NitroBannerUnfilled", "blank" === qq.detail.type)
+         })), await (0, lq.b)("https://s.nitropay.com/ads-2842.js", {
+           "data-cfasync": "false"
+         }), new mq
+       }
+       playVideoAd(qq, Eq) {
+         this.showVideoAd(qq, qq)
+       }
+ ... (23 more added lines; see GitHub link above)
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/150.js` (Changed code · before: `L319-L327` → after: `L65-L74`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2cR65) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2c) · [After (L65-L74)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/150.js#L65-L74) · [Before (L319-L327)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/150.js#L319-L327)

```diff
-         this.setState({
-           ...this.state,
-           messages: [Ez, ...this.state.messages].slice(0, nz.e)
-         })
-       }
-       selectNextChannel() {
-         const zz = Hz.b.get("chatChannels");
-         if (zz) {
-           const uz = zz.findIndex((zz => {
+         let Aq = !1;
+         const cq = (qq, Eq) => {
+             if (!Aq) {
+               if (!qq) return console.log(`AD: Nitro video not filled: ${Eq}`), void xq(!1);
+               Aq = !0, clearTimeout(jq), jq = setTimeout((() => {
+                 console.log("AD: Nitro video never completed"), xq(!1)
+               }), 12e4)
+             }
+           },
+           uq = qq => {
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/150.js` (Changed code · before: `L329-L362` → after: `L76-L77`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2cR76) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2c) · [After (L76-L77)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/150.js#L76-L77) · [Before (L329-L362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/150.js#L329-L362)

```diff
-             return zz.channelName === (null === (uz = this.state.channel) || void 0 === uz ? void 0 : uz.channelName)
-           }));
-           this.setState({
-             ...this.state,
-             channel: zz[(uz + 1) % zz.length]
-           })
-         }
-       }
-       setState(zz) {
-         this.state = zz;
-         for (const uz of this.listeners) uz()
-       }
-     };
- 
-     function dz() {
-       const [zz, uz] = (0, Ez.useState)(pz.getState);
- ... (18 more removed lines; see GitHub link above)
+             (null === (Eq = qq.detail) || void 0 === Eq ? void 0 : Eq.id) === Oq && cq("filled" === qq.detail.status, qq.detail.status)
+           },
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/150.js` (Changed code · before: `L365-L380` → after: `L80-L108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2cR80) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2c) · [After (L80-L108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/150.js#L80-L108) · [Before (L365-L380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/150.js#L365-L380)

```diff
-             const lz = null !== (Ez = null === (iz = bz.byId[zz]) || void 0 === iz ? void 0 : iz.name) && void 0 !== Ez ? Ez : null;
-             return null !== lz && (lz === uz || (0, tz.b)(lz, nz) === uz)
-           };
-         if (null !== bz.localId && Mz(bz.localId)) return void pz.addMessage(null, [{
-           str: "You cannot report yourself."
-         }]);
-         for (const zz of bz.ids)
-           if (Mz(zz)) return iz.k.sK("OpenReportMenu", {
-             playerEId: zz,
-             playerName: bz.byId[zz].name,
-             zM: null,
-             serverChatMsgId: null
-           }), void console.log("Opening report menu...");
-         pz.addMessage(null, [{
-           str: "Player not found in lobby."
-         }])
+             (null === (Eq = qq.detail) || void 0 === Eq || null === (gq = Eq.adInfo) || void 0 === gq ? void 0 : gq.adUnitCode) === Oq && cq("blank" !== qq.detail.type, qq.detail.type)
+           },
+           Wq = qq => {
+             var Eq;
+             (null === (Eq = qq.detail) || void 0 === Eq ? void 0 : Eq.adUnitCode) === Oq && xq(!0)
+           },
+           Nq = document.createElement("button");
+         Nq.className = "NitroVideoSkip", Nq.disabled = !0, Nq.addEventListener("click", (() => {
+           console.log("AD: Nitro video skipped"), xq(!0)
+         }));
+         let aq = Math.ceil(15);
+         const Vq = () => {
+           if (aq <= 0) return clearInterval(dq), Nq.textContent = "Skip Ad", void(Nq.disabled = !1);
+           Nq.textContent = `Skip ad in ${aq}s`, aq--
+         };
+         Vq();
+ ... (13 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/150.js` (Changed code · before: `L382-L407` → after: `L110-L140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2cR110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2c) · [After (L110-L140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/150.js#L110-L140) · [Before (L382-L407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/150.js#L382-L407)

```diff
-       lz.gameBridge.send("sendChatMessage", {
-           zM: zz,
-           channelName: null !== (uz = null === (bz = pz.getState().channel) || void 0 === bz ? void 0 : bz.channelName) && void 0 !== uz ? uz : null
-         }),
-         function(zz) {
-           var uz;
-           const bz = null !== (uz = Mz.g.getItem("recentlySentChatMsgs")) && void 0 !== uz ? uz : [];
-           bz.push(zz), bz.length > Oz && bz.shift();
-           Mz.g.setItem("recentlySentChatMsgs", bz)
-         }(zz)
-     }
- 
-     function Zz() {
-       var zz;
-       return null !== (zz = Mz.g.getItem("recentlySentChatMsgs")) && void 0 !== zz ? zz : []
-     }
- ... (10 more removed lines; see GitHub link above)
+       renderBanner(qq) {
+         const {
+           divId: Eq,
+           width: gq,
+           height: Yq
+         } = qq, lq = `${Eq}-nitro`;
+         let Oq = document.getElementById(lq);
+         null === Oq && (Oq = document.createElement("div"), Oq.id = lq, Oq.className = "NitroBanner", Oq.style.setProperty("--nitro-slot-width", `${gq}px`), Oq.style.setProperty("--nitro-slot-height", `${Yq}px`), document.getElementById(Eq).appendChild(Oq));
+         const mq = [
+           [String(gq), String(Yq)]
+         ];
+         Promise.resolve(window.nitroAds.createAd(lq, {
+           sizes: mq
+         })).catch((qq => {
+           console.error(`AD: Nitro failed to create banner ${lq}:`, qq)
+         })), console.log(`AD: Requested Nitro banner ${lq}`)
+ ... (15 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/150.js` (Changed code · before: `L410-L1110` → after: `L143`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2cR143) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-9e652ff6bd666cbf8d757fe1f90b4ef44bb44c7611401d52c60c3099d4641a2c) · [After (L143)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/150.js#L143) · [Before (L410-L1110)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/150.js#L410-L1110)

```diff
-   },
-   8402: (zz, uz, bz) => {
-     bz.d(uz, {
-       b: () => lz,
-       e: () => iz
-     });
-     var Ez = bz(1934);
-     const nz = /^(?:Key[A-Z]|Digit[0-9]|Arrow(?:Up|Down|Left|Right)|Space)$/,
-       iz = zz => "string" === typeof zz.icon && "" !== zz.icon && "string" === typeof zz.keycode && nz.test(zz.keycode),
-       lz = zz => "Space" === zz ? "_" : Ez.k[zz]
-   },
-   8466: (zz, uz, bz) => {
-     bz.d(uz, {
-       c: () => nz
-     });
-     var Ez = bz(20);
- ... (685 more removed lines; see GitHub link above)
+   }
```

## `preprod.bloxd.io` · `bundles/preprod.bloxd.io/chunks/js/151.js` (ad2avs.90d9e4dd → bbb6l5.0244a119)

- **File**: `bundles/preprod.bloxd.io/chunks/js/151.js` (33 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0)

#### 1. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L4` → after: `L4`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R4) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/151.js#L4) · [Before (L4)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/151.js#L4)

```diff
-   36080: (zz, uz, bz) => {
+   8843: (qq, Eq, gq) => {
```

#### 2. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L6-L15` → after: `L6`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R6) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L6)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/151.js#L6) · [Before (L6-L15)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/151.js#L6-L15)

```diff
-       c: () => iz,
-       d: () => Rz,
-       g: () => Kz,
-       h: () => Mz,
-       i: () => dz,
-       j: () => wz,
-       n: () => pz,
-       q: () => fz,
-       u: () => Zz,
-       x: () => Xz
+       e: () => xq
```

#### 3. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L17-L20` → after: `L8-L11`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R8) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L8-L11)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/151.js#L8-L11) · [Before (L17-L20)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/151.js#L17-L20)

```diff
-     var Ez = bz(20),
-       nz = bz(22);
-     const iz = "clientGameInventoryButtonsChanged",
-       lz = new Map;
+     var Yq = gq(24),
+       lq = gq(1183),
+       Oq = gq(4828),
+       mq = gq(1070);
```

#### 4. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L22-L26` → after: `L13-L106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R13) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L13-L106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/151.js#L13-L106) · [Before (L22-L26)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/151.js#L22-L26)

```diff
-     function Mz() {
-       return [...lz.values()].sort(((zz, uz) => {
-         var bz, Ez;
-         return (null !== (bz = zz.order) && void 0 !== bz ? bz : 0) - (null !== (Ez = uz.order) && void 0 !== Ez ? Ez : 0)
-       }))
+     function xq(qq) {
+       let {
+         note: Eq
+       } = qq;
+       const {
+         t: gq
+       } = (0, lq.v)(), {
+         clientEscMenuOptions: xq
+       } = (0, Yq.j)(["clientEscMenuOptions"]);
+       return (0, mq.jsx)(Oq.d, {
+         label: gq("touchSettings:actionButtons"),
+         checked: xq.touchActionButtons,
+         onClick: qq => {
+           Yq.b.setClientEscMenuOptions({
+             touchActionButtons: qq
+           })
+ ... (78 more added lines; see GitHub link above)
```

#### 5. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L31` → after: `L110-L116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R110) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L110-L116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/151.js#L110-L116) · [Before (L31)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/151.js#L31)

```diff
-       tz = zz
+       let {
+         className: Eq,
+         keepPlace: gq
+       } = qq;
+       return gq ? (0, Qq.jsx)("div", {
+         className: Aq()(Eq, "Placeholder")
+       }) : null
```

#### 6. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L36-L42` → after: `L120-L149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L120-L149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/151.js#L120-L149) · [Before (L36-L42)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/151.js#L36-L42)

```diff
-       Oz = !0;
-       try {
-         zz.onClick()
-       } finally {
-         Oz = !1
-       }
-       zz.panel && "clientGame" === Ez.e.get("openInGameMenuName") && Hz(zz.id)
+       let {
+         id: Eq,
+         elements: gq,
+         actionButtons: lq,
+         keyNames: Oq,
+         className: mq,
+         keepPlace: xq,
+         onHidden: Aq
+       } = qq;
+       const {
+         t: uq
+       } = (0, Yq.v)();
+       if (!Sq[Eq].hide) return (0, Qq.jsx)(Jq, {
+         className: mq,
+         keepPlace: xq
+       });
+ ... (14 more added lines; see GitHub link above)
```

#### 7. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L45-L46` → after: `L152-L187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L152-L187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/151.js#L152-L187) · [Before (L45-L46)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/151.js#L45-L46)

```diff
-     function dz() {
-       return Oz
+     function Rq(qq) {
+       var Eq;
+       let {
+         id: gq,
+         elements: lq,
+         actionButtons: Oq,
+         keyNames: mq,
+         className: xq,
+         keepPlace: Aq,
+         onlyWhenMoved: uq,
+         locked: Bq,
+         onReset: Wq
+       } = qq;
+       const {
+         t: Nq
+       } = (0, Yq.v)(), aq = Sq[gq], Vq = (0, bq.L)(null !== (Eq = lq[gq]) && void 0 !== Eq ? Eq : bq.q);
+ ... (20 more added lines; see GitHub link above)
```

#### 8. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L49-L50` → after: `L190-L224`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L190-L224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/151.js#L190-L224) · [Before (L49-L50)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/151.js#L49-L50)

```diff
-     function Fz() {
-       return Mz().filter((zz => zz.panel && !zz.disabled))
+     function Uq(qq) {
+       let {
+         id: Eq,
+         actionButtons: gq,
+         keyNames: lq,
+         className: Oq,
+         keepPlace: mq,
+         locked: xq,
+         lockable: Aq,
+         onLocked: uq
+       } = qq;
+       const {
+         t: Bq
+       } = (0, Yq.v)();
+       return Aq || xq ? (0, Qq.jsx)(cq.Q, {
+         className: Oq,
+ ... (19 more added lines; see GitHub link above)
```

#### 9. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L54-L56` → after: `L228-L253`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R228) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L228-L253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/151.js#L228-L253) · [Before (L54-L56)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/151.js#L54-L56)

```diff
-       const uz = Fz(),
-         bz = uz.findIndex((zz => zz.id === tz));
-       return !(bz < 0 || uz.length < 2) && (pz(uz[(bz + zz + uz.length) % uz.length]), !0)
+       let {
+         className: Eq,
+         open: gq,
+         name: lq,
+         onToggle: Oq
+       } = qq;
+       const {
+         t: mq
+       } = (0, Yq.v)();
+       return (0, Qq.jsx)(cq.Q, {
+         className: Eq,
+         ariaLabel: mq(gq ? "hudLayout:hideChildren" : "hudLayout:showChildren", {
+           name: lq
+         }),
+         pressed: gq,
+         analyticsClick: {
+ ... (10 more added lines; see GitHub link above)
```

#### 10. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L59-L60` → after: `L256-L271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R256) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L256-L271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/151.js#L256-L271) · [Before (L59-L60)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/151.js#L59-L60)

```diff
-     function Rz() {
-       return null !== tz && Fz().length > 1
+     function sq(qq, Eq) {
+       var gq;
+       qq.contains(document.activeElement) && Eq.focus({
+         preventScroll: !0
+       }), null === (gq = (0, nq.g)()) || void 0 === gq || gq.handOverPadFocus(qq, Eq)
+     }
+ 
+     function Xq(qq) {
+       const Eq = qq.closest("[data-hud-row]"),
+         gq = null === Eq || void 0 === Eq ? void 0 : Eq.querySelector(".HudElementRowName");
+       return !(!Eq || !gq) && (sq(Eq, gq), !0)
+     }
+     const wq = "button:not(:disabled), [role=button]:not([aria-disabled='true'])";
+ 
+     function Kq(qq, Eq) {
+       return "joystick" === qq && !Eq
```

#### 11. `bundles/preprod.bloxd.io/chunks/js/151.js` (Changed code · before: `L64` → after: `L275-L503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0R275) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/62aee44daa895972ea128c7a34e71c6ed17bbcae...build/preprod.bloxd.io/bbb6l5.0244a119#diff-b5e6590f1143469f6d28e2649676cfe89498565388d3a6af71b19aa80c13b4d0) · [After (L275-L503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/preprod.bloxd.io/bbb6l5.0244a119/bundles/preprod.bloxd.io/chunks/js/151.js#L275-L503) · [Before (L64)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/62aee44daa895972ea128c7a34e71c6ed17bbcae/bundles/preprod.bloxd.io/chunks/js/151.js#L64)

```diff
-       Hz(null)
+       const {
+         t: qq
+       } = (0, Yq.v)();
+       return (0, Qq.jsx)(cq.Q, {
+         className: "HudFixJoystickButton",
+         analyticsClick: {
+           id: "hud_layout.fix_joystick"
+         },
+         onClick: qq => {
+           const Eq = qq.currentTarget;
+           if (!Xq(Eq)) {
+             const qq = function(qq) {
+               var Eq, gq;
+               const Yq = [qq.previousElementSibling, qq.nextElementSibling].find((qq => qq instanceof HTMLElement && qq.matches(wq)));
+               return null !== (Eq = null !== Yq && void 0 !== Yq ? Yq : null === (gq = qq.closest(".HudLayoutSidePanel, .HudFullScreenToolbar")) || void 0 === gq ? void 0 : gq.querySelector(`:is(${wq}):not(.HudFixJoystickButton)`)) && void 0 !== Eq ? Eq : null
+             }(Eq);
+ ... (213 more added lines; see GitHub link above)
```
