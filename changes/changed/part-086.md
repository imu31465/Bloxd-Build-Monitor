# Changed — Bundle Modifications Report (Part 086 / 142)

- **Updated at**: `2026-11-25T04:31 JST`
- **Part**: `86 / 142` (**423** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 085](part-085.md) · [Part 087 →](part-087.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/77.js` (sn3sfj.2522680a → yma3ej.f92ebd70 · continued)

- **File**: `bundles/bloxd.io/chunks/js/77.js` (4724 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45)

#### 3376. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L25695` → after: `L25373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25373) · [Before (L25695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L25695)

```diff
-       return `\n    #ifdef BLOXD_LIGHTING\n    #ifndef BLOXD_UNLIT\n    ${(0,Op.A)(pp,"vec4",Jp,(0,Op.R)(pp,Tp))}\n    ${(0,Op.A)(pp,"vec3",Bp,(0,Op.j)(pp,"vec3","0.0"))}\n    {\n        ${(0,Op.A)(pp,"vec3","lightResult",`${(0,Op.R)(pp,"vLightAndOpacity")}.xyz`)}\n        ${Hp(p … [truncated]
+       return `\n    #ifdef BLOXD_LIGHTING\n    #ifndef BLOXD_UNLIT\n    ${(0,WT.w)(TT,"vec4",IT,(0,WT.R)(TT,FT))}\n    ${(0,WT.w)(TT,"vec3",QT,(0,WT.k)(TT,"vec3","0.0"))}\n    {\n        ${(0,WT.w)(TT,"vec3","lightResult",`${(0,WT.R)(TT,"vLightAndOpacity")}.xyz`)}\n        ${qT(T … [truncated]
```

#### 3377. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L25699` → after: `L25377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25377) · [Before (L25699)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L25699)

```diff
-       return `\n    #ifndef V_LIGHT_AND_OPACITY\n        #define V_LIGHT_AND_OPACITY\n        ${(0,Op.tb)(pp,"vLightAndOpacity","vec4","mediump")}\n    #endif\n`
+       return `\n    #ifndef V_LIGHT_AND_OPACITY\n        #define V_LIGHT_AND_OPACITY\n        ${(0,WT.Ab)(TT,"vLightAndOpacity","vec4","mediump")}\n    #endif\n`
```

#### 3378. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L25705` → after: `L25383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25383) · [Before (L25705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L25705)

```diff
-       return `\n    #ifdef V_TINT_AND_OPACITY\n        #define BLOXD_OPACITY ${cp}.a\n    #else\n        ${ap(pp)}\n        #define BLOXD_OPACITY ${Op}.w\n    #endif\n`
+       return `\n    #ifdef V_TINT_AND_OPACITY\n        #define BLOXD_OPACITY ${mT}.a\n    #else\n        ${CT(TT)}\n        #define BLOXD_OPACITY ${WT}.w\n    #endif\n`
```

#### 3379. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L25709` → after: `L25387`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25387) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25387) · [Before (L25709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L25709)

```diff
-       return `\n    #ifndef V_TINT_AND_OPACITY\n        #define V_TINT_AND_OPACITY\n        ${(0,Op.tb)(pp,"vTintAndOpacity","vec4","lowp")}\n    #endif\n`
+       return `\n    #ifndef V_TINT_AND_OPACITY\n        #define V_TINT_AND_OPACITY\n        ${(0,WT.Ab)(TT,"vTintAndOpacity","vec4","lowp")}\n    #endif\n`
```

#### 3380. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L25713-L25714` → after: `L25391-L25392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25391) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25391-L25392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25391-L25392) · [Before (L25713-L25714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L25713-L25714)

```diff
-       const ip = `\n            ${(0,Op.A)(pp,"vec2","pos",`floor(${(0,Op.$)(pp,"position","4.0")})`)}\n            if (pos.y < 0.5) {\n                     if (pos.x < 0.5) { return  1.0 / 16.0; } \n                else if (pos.x < 1.5) { return  9.0 / 16.0; } \n                 … [truncated]
-       return `\n    #ifndef BAYER_DITHER_FN\n        #define BAYER_DITHER_FN\n        ${(0,Op.v)(pp,"float","bayerDither",[{name:"position",type:"vec2"}],ip)}\n    #endif\n`
+       const UT = `\n            ${(0,WT.w)(TT,"vec2","pos",`floor(${(0,WT.db)(TT,"position","4.0")})`)}\n            if (pos.y < 0.5) {\n                     if (pos.x < 0.5) { return  1.0 / 16.0; } \n                else if (pos.x < 1.5) { return  9.0 / 16.0; } \n                … [truncated]
+       return `\n    #ifndef BAYER_DITHER_FN\n        #define BAYER_DITHER_FN\n        ${(0,WT.r)(TT,"float","bayerDither",[{name:"position",type:"vec2"}],UT)}\n    #endif\n`
```

#### 3381. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L25717` → after: `L25395`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25395) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25395)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25395) · [Before (L25717)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L25717)

```diff
-   37658: (pp, ip, cp) => {
+   37540: (TT, UT, mT) => {
```

#### 3382. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L25719-L25720` → after: `L25397-L25399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25397) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25397-L25399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25397-L25399) · [Before (L25719-L25720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L25719-L25720)

```diff
-       d: () => xp,
-       g: () => op,
+       b: () => nT,
+       e: () => zT,
+       h: () => pT,
```

#### 3383. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L25722-L25726` → after: `L25401-L25404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25401) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25401-L25404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25401-L25404) · [Before (L25722-L25726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L25722-L25726)

```diff
-       k: () => Ap,
-       o: () => Pp,
-       r: () => Up,
-       t: () => Yp,
-       u: () => Lp,
+       l: () => LT,
+       p: () => ZT,
+       q: () => kT,
+       s: () => HT,
```

#### 3384. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L25729` → after: `L25407`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25407) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25407)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25407) · [Before (L25729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L25729)

```diff
-     var Op = cp(37660);
+     var WT = mT(37546);
```

#### 3385. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L25748` → after: `L25426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25426) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25426) · [Before (L25748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L25748)

```diff
-         const ip = pp.useUbo ? pp : pp.currentEffect;
+         const UT = TT.useUbo ? TT : TT.currentEffect;
```

#### 3386. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L25775` → after: `L25453`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25453) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25453)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25453) · [Before (L25775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L25775)

```diff
-       for (let cp = 0; cp < pp.lightCount * Op.c; cp += Op.c) ip += pp.lights[cp + Op.h.kind] === Op.f.directional ? 1 : 0;
+       for (let mT = 0; mT < TT.lightCount * WT.d; mT += WT.d) UT += TT.lights[mT + WT.k.kind] === WT.h.directional ? 1 : 0;
```

#### 3387. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L25783` → after: `L25461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25461) · [Before (L25783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L25783)

```diff
-       } = pp, Ip = Op.h;
+       } = TT, MT = WT.k;
```

#### 3388. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L25785-L25786` → after: `L25463-L25464`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25463) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25463-L25464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25463-L25464) · [Before (L25785-L25786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L25785-L25786)

```diff
-       for (let xp = 0; xp < pp.lightCount * Op.c && Sp < 4 * ip; xp += Op.c) {
-         if (op[xp + Ip.kind] !== Op.f.directional) continue;
+       for (let nT = 0; nT < TT.lightCount * WT.d && gT < 4 * UT; nT += WT.d) {
+         if (zT[nT + MT.kind] !== WT.h.directional) continue;
```

#### 3389. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L25791` → after: `L25469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25469) · [Before (L25791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L25791)

```diff
-           Dp = Yp > 0 ? -1 / Yp : 0;
+           jT = kT > 0 ? -1 / kT : 0;
```

#### 3390. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L25806` → after: `L25484`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25484)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25484) · [Before (L25806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L25806)

```diff
-         this.WU = pp, this.dedup = new Ip
+         this.GB = TT, this.dedup = new MT
```

#### 3391. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L25809` → after: `L25487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25487) · [Before (L25809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L25809)

```diff
-         this.WU.ZU && this.dedup.shouldWrite(pp) && function(pp, ip) {
+         this.GB.dZ && this.dedup.shouldWrite(TT) && function(TT, UT) {
```

#### 3392. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L25812` → after: `L25490`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25490) · [Before (L25812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L25812)

```diff
-         }(pp, this.WU)
+         }(TT, this.GB)
```

#### 3393. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L25819` → after: `L25497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25497) · [Before (L25819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L25819)

```diff
-       return ip || (ip = new Sp(new Float32Array(17)), yp.set(pp, ip)), ip.due() && (vp(pp, ip.values), ip.values[16] = pp.ZU ? 1 : 0, ip.settle()), ip.version
+       return UT || (UT = new gT(new Float32Array(17)), BT.set(TT, UT)), UT.due() && (vT(TT, UT.values), UT.values[16] = TT.dZ ? 1 : 0, UT.settle()), UT.version
```

#### 3394. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L25825-L25827` → after: `L25503-L25505`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25503-L25505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25503-L25505) · [Before (L25825-L25827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L25825-L25827)

```diff
-       ip[0] = pp.lop[0], ip[1] = pp.lop[1], ip[2] = pp.lop[2], ip[3] = pp.uLp, ip[4] = pp.Qop[0], ip[5] = pp.Qop[1], ip[6] = pp.Qop[2], ip[7] = pp.dLp;
-       const op = null !== (cp = pp.skyLightColourOverride) && void 0 !== cp ? cp : pp.Jop,
-         Ip = null !== (Op = pp.ambientLightColourOverride) && void 0 !== Op ? Op : pp.Bop,
+       UT[0] = TT.jzT[0], UT[1] = TT.jzT[1], UT[2] = TT.jzT[2], UT[3] = TT.UHT, UT[4] = TT.lzT[0], UT[5] = TT.lzT[1], UT[6] = TT.lzT[2], UT[7] = TT.RnT;
+       const zT = null !== (mT = TT.skyLightColourOverride) && void 0 !== mT ? mT : TT.LzT,
+         MT = null !== (WT = TT.ambientLightColourOverride) && void 0 !== WT ? WT : TT.pzT,
```

#### 3395. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L25835` → after: `L25513`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25513) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25513) · [Before (L25835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L25835)

```diff
-   37413: (pp, ip, cp) => {
+   37281: (TT, UT, mT) => {
```

#### 3396. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L25838` → after: `L25516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25516) · [Before (L25838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L25838)

```diff
-         [`BLOXD_PLUGIN_${pp}`]: !0
+         [`BLOXD_PLUGIN_${TT}`]: !0
```

#### 3397. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L25845` → after: `L25523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25523) · [Before (L25845)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L25845)

```diff
-   37662: (pp, ip, cp) => {
+   37549: (TT, UT, mT) => {
```

#### 3398. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L25847` → after: `L25525`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25525) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25525)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25525) · [Before (L25847)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L25847)

```diff
-       b: () => Lp
+       c: () => HT
```

#### 3399. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L25849` → after: `L25527`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25527) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25527)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25527) · [Before (L25849)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L25849)

```diff
-     var Op = cp(37421);
+     var WT = mT(37288);
```

#### 3400. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L25872` → after: `L25550`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25550) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25550)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25550) · [Before (L25872)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L25872)

```diff
-           if (void 0 === ip) throw new Error(`Cannot size uniform of type "${pp}" - add it to UNIFORM_COMPONENTS`);
+           if (void 0 === UT) throw new Error(`Cannot size uniform of type "${TT}" - add it to UNIFORM_COMPONENTS`);
```

#### 3401. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L25875-L25876` → after: `L25553-L25554`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25553-L25554)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25553-L25554) · [Before (L25875-L25876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L25875-L25876)

```diff
-         if (pp.arraySize && cp > 4 && 16 !== cp) throw new Error(`Uniform "${pp.name}" cannot be an array of "${pp.type}"`);
-         const xp = (0, Op.Y)(ip) ? function(pp) {
+         if (TT.arraySize && mT > 4 && 16 !== mT) throw new Error(`Uniform "${TT.name}" cannot be an array of "${TT.type}"`);
+         const nT = (0, WT.$)(UT) ? function(TT) {
```

#### 3402. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L25878` → after: `L25556`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25556)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25556) · [Before (L25878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L25878)

```diff
-           if (!Ip.has(ip)) throw new Error(`Uniform type "${pp}" has no WGSL form - MaterialPluginManager would emit "${ip}f"`);
+           if (!MT.has(UT)) throw new Error(`Uniform type "${TT}" has no WGSL form - MaterialPluginManager would emit "${UT}f"`);
```

#### 3403. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L25891` → after: `L25569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25569) · [Before (L25891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L25891)

```diff
-       if ((0, Op.Y)(cp)) return {
+       if ((0, WT.$)(mT)) return {
```

#### 3404. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L25896-L25897` → after: `L25574-L25575`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25574-L25575)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25574-L25575) · [Before (L25896-L25897)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L25896-L25897)

```diff
-           const ip = pp.arraySize ? `[${pp.arraySize}]` : "";
-           return `uniform ${pp.type} ${pp.name}${ip};`
+           const UT = TT.arraySize ? `[${TT.arraySize}]` : "";
+           return `uniform ${TT.type} ${TT.name}${UT};`
```

#### 3405. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L25902` → after: `L25580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25580) · [Before (L25902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L25902)

```diff
-         if (ip) throw new Error(`Fragment uniform "${ip.name}" must not be highp`)
+         if (UT) throw new Error(`Fragment uniform "${UT.name}" must not be highp`)
```

#### 3406. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L25917` → after: `L25595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25595) · [Before (L25917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L25917)

```diff
-   37519: (pp, ip, cp) => {
+   37397: (TT, UT, mT) => {
```

#### 3407. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L25921-L25922` → after: `L25599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25599) · [Before (L25921-L25922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L25921-L25922)

```diff
-       B: () => Wp,
-       D: () => tp,
+       E: () => fT,
```

#### 3408. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L25924-L25930` → after: `L25601-L25604`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25601-L25604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25601-L25604) · [Before (L25924-L25930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L25924-L25930)

```diff
-       I: () => Mp,
-       J: () => jp,
-       L: () => kp,
-       P: () => Jp,
-       R: () => dp,
-       S: () => Ep,
-       W: () => Xp,
+       K: () => dT,
+       M: () => OT,
+       Q: () => eT,
+       T: () => IT,
```

#### 3409. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L25932-L25933` → after: `L25606-L25610`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25606) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25606-L25610)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25606-L25610) · [Before (L25932-L25933)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L25932-L25933)

```diff
-       e: () => lp,
-       f: () => Pp,
+       _: () => tT,
+       c: () => yT,
+       cb: () => QT,
+       eb: () => xT,
+       g: () => LT,
```

#### 3410. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L25936-L25938` → after: `L25614-L25616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25614-L25616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25614-L25616) · [Before (L25936-L25938)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L25936-L25938)

```diff
-       m: () => Qp,
-       p: () => Cp,
-       t: () => yp,
+       o: () => wT,
+       q: () => BT,
+       u: () => cT,
```

#### 3411. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L25941-L25949` → after: `L25619-L25627`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25619-L25627)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25619-L25627) · [Before (L25941-L25949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L25941-L25949)

```diff
-     var Op = cp(37479),
-       op = cp(37313),
-       Ip = cp(37433),
-       Sp = cp(37525),
-       xp = cp(37436),
-       Lp = cp(37448),
-       Yp = cp(37445),
-       Dp = cp(37438),
-       Ap = cp(37529);
+     var WT = mT(37364),
+       zT = mT(37185),
+       MT = mT(37298),
+       gT = mT(37406),
+       nT = mT(37302),
+       HT = mT(37321),
+       kT = mT(37312),
+       jT = mT(37307),
+       lT = mT(37414);
```

#### 3412. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L25952` → after: `L25630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25630) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25630) · [Before (L25952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L25952)

```diff
-       const ip = (0, xp.$)(pp);
+       const UT = (0, nT.R)(TT);
```

#### 3413. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L25954` → after: `L25632`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25632)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25632) · [Before (L25954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L25954)

```diff
-       const cp = new xp.i(pp.name);
+       const mT = new nT.h(TT.name);
```

#### 3414. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L25960` → after: `L25638`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25638) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25638)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25638) · [Before (L25960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L25960)

```diff
-         for (const Op of xp.h) pp[Op] = ip[Op];
+         for (const WT of nT.f) TT[WT] = UT[WT];
```

#### 3415. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L25963-L25964` → after: `L25641-L25642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25641) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25641-L25642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25641-L25642) · [Before (L25963-L25964)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L25963-L25964)

```diff
-         if (cp) throw new Error(`${ip.name} has textures adopt does not take`);
-         (0, xp.hb)(pp, "diffuseTexture", ip.diffuseTexture ? Wp(ip.diffuseTexture) : null), (0, xp.hb)(pp, "opacityTexture", ip.opacityTexture ? Wp(ip.opacityTexture) : null), (0, xp.hb)(pp, "emissiveTexture", ip.emissiveTexture ? Wp(ip.emissiveTexture) : null),
+         if (mT) throw new Error(`${UT.name} has textures adopt does not take`);
+         (0, nT.W)(TT, "diffuseTexture", UT.diffuseTexture ? pT(UT.diffuseTexture) : null), (0, nT.W)(TT, "opacityTexture", UT.opacityTexture ? pT(UT.opacityTexture) : null), (0, nT.W)(TT, "emissiveTexture", UT.emissiveTexture ? pT(UT.emissiveTexture) : null),
```

#### 3416. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L25968-L25969` → after: `L25646-L25647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25646) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25646-L25647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25646-L25647) · [Before (L25968-L25969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L25968-L25969)

```diff
-             const op = Op.getClassName() === Dp.d.className,
-               Sp = op ? Dp.d : (0, Ip.p)(Op.name),
+             const zT = WT.getClassName() === jT.b.className,
+               gT = zT ? jT.b : (0, MT.k)(WT.name),
```

#### 3417. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L25971` → after: `L25649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25649) · [Before (L25971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L25971)

```diff
-             if (!Sp || op && xp) throw new Error(`${ip.name}'s plugin ${Op.name} has no model feature`);
+             if (!gT || zT && nT) throw new Error(`${UT.name}'s plugin ${WT.name} has no model feature`);
```

#### 3418. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L25989` → after: `L25667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25667) · [Before (L25989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L25989)

```diff
-         Ip = null !== (ip = op.url) && void 0 !== ip ? ip : "",
+         MT = null !== (UT = zT.url) && void 0 !== UT ? UT : "",
```

#### 3419. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L25994` → after: `L25672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25672) · [Before (L25994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L25994)

```diff
-           data: ArrayBuffer.isView(Sp) ? Sp : null
+           data: ArrayBuffer.isView(gT) ? gT : null
```

#### 3420. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L25999` → after: `L25677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25677) · [Before (L25999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L25999)

```diff
-         Yp = new Lp.k(pp.isCube ? "cube" : pp.is2DArray ? "2d-array" : "2d", xp, {
+         kT = new HT.o(TT.isCube ? "cube" : TT.is2DArray ? "2d-array" : "2d", nT, {
```

#### 3421. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26004` → after: `L25682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25682) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25682) · [Before (L26004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26004)

```diff
-           invertY: null !== (cp = pp.invertY) && void 0 !== cp ? cp : null
+           invertY: null !== (mT = TT.invertY) && void 0 !== mT ? mT : null
```

#### 3422. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26006` → after: `L25684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25684) · [Before (L26006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26006)

```diff
-       return Yp.hasAlpha = pp.hasAlpha, Yp.level = pp.level, Yp.uvSet = pp.coordinatesIndex, Yp.getAlphaFromRGB = pp.getAlphaFromRGB, Yp.optimizeUVAllocation = pp.optimizeUVAllocation, Yp.invertZ = pp.invertZ, Yp.matrix.set(kp(pp)), (0, Lp.K)(Yp, pp), Yp
+       return kT.hasAlpha = TT.hasAlpha, kT.level = TT.level, kT.uvSet = TT.coordinatesIndex, kT.getAlphaFromRGB = TT.getAlphaFromRGB, kT.optimizeUVAllocation = TT.optimizeUVAllocation, kT.invertZ = TT.invertZ, kT.matrix.set(eT(TT)), (0, HT.N)(kT, TT), kT
```

#### 3423. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26012` → after: `L25690`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25690)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25690) · [Before (L26012)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26012)

```diff
-       return null !== (ip = (0, Lp.Z)(pp)) && void 0 !== ip ? ip : wp(pp)
+       return null !== (UT = (0, HT.Y)(TT)) && void 0 !== UT ? UT : cT(TT)
```

#### 3424. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26020` → after: `L25698`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25698) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25698)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25698) · [Before (L26020)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26020)

```diff
-       return (0, Yp.g)(pp).canvas(pp, ip, cp)
+       return (0, kT.h)(TT).canvas(TT, UT, mT)
```

#### 3425. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26042` → after: `L25720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25720) · [Before (L26042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26042)

```diff
-       pp.released || ((0, Sp.g)(pp.source.canvas), null === (Op = pp.mirror) || void 0 === Op || Op.update(ip, cp), (0, Lp.l)(pp, ip, cp))
+       TT.released || ((0, gT.f)(TT.source.canvas), null === (WT = TT.mirror) || void 0 === WT || WT.update(UT, mT), (0, HT.r)(TT, UT, mT))
```

#### 3426. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26059` → after: `L25737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25737) · [Before (L26059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26059)

```diff
-       null === cp || void 0 === cp || cp.gy().updateTextureSamplingMode(ip, cp, !1);
+       null === mT || void 0 === mT || mT.eB().updateTextureSamplingMode(UT, mT, !1);
```

#### 3427. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26070` → after: `L25748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25748) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25748) · [Before (L26070)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26070)

```diff
-       return ip._cachedTextureMatrix = void 0, ip._rowGenerationMatrix = void 0, ip._cachedUOffset = Number.NaN, ip.Gl = () => null, ip.getTextureMatrix().m
+       return UT._cachedTextureMatrix = void 0, UT._rowGenerationMatrix = void 0, UT._cachedUOffset = Number.NaN, UT.KF = () => null, UT.getTextureMatrix().m
```

#### 3428. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26073` → after: `L25751`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25751) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25751)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25751) · [Before (L26073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26073)

```diff
-       Rp = [op.Zy.Zero(), op.Zy.Zero(), op.Zy.Zero()];
+       JT = [zT.JB.Zero(), zT.JB.Zero(), zT.JB.Zero()];
```

#### 3429. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26091-L26092` → after: `L25769-L25770`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25769-L25770)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25769-L25770) · [Before (L26091-L26092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26091-L26092)

```diff
-         ]) op.Zy.TransformCoordinatesFromFloatsToRef(Wp * Ip - Lp * Ip, yp * Sp - Yp * Sp, -.5, mp, Up), Up.x += Lp * Ip + cp, Up.y += Yp * Sp + Op, Up.z += .5;
-       Ap.Iop(Dp), Pp.Iop(Dp), pp.set([Ap.x, Ap.y, Ap.z, 0, Pp.x, Pp.y, Pp.z, 0, Dp.x, Dp.y, Dp.z, 0, 0, 0, 0, 1])
+         ]) zT.JB.TransformCoordinatesFromFloatsToRef(pT * MT - HT * MT, BT * gT - kT * gT, -.5, YT, ZT), ZT.x += HT * MT + mT, ZT.y += kT * gT + WT, ZT.z += .5;
+       lT.FWT(jT), LT.FWT(jT), TT.set([lT.x, lT.y, lT.z, 0, LT.x, LT.y, LT.z, 0, jT.x, jT.y, jT.z, 0, 0, 0, 0, 1])
```

#### 3430. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26096` → after: `L25774`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25774)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25774) · [Before (L26096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26096)

```diff
-       const cp = (0, xp.$)(pp),
+       const mT = (0, nT.R)(TT),
```

#### 3431. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26100` → after: `L25778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25778) · [Before (L26100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26100)

```diff
-         const pp = (0, Lp.H)(Op.matrix);
+         const TT = (0, HT.M)(WT.matrix);
```

#### 3432. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26102` → after: `L25780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25780) · [Before (L26102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26102)

```diff
-         if (Op.optimizeUVAllocation = !1, op && (op.optimizeUVAllocation = !1), pp)(0, xp.Y)(cp), null === op || void 0 === op || null === (Ip = op.Gl()) || void 0 === Ip || Ip.markAllMaterialsAsDirty(1, (pp => pp.hasTexture(op)))
+         if (WT.optimizeUVAllocation = !1, zT && (zT.optimizeUVAllocation = !1), TT)(0, nT.Q)(mT), null === zT || void 0 === zT || null === (MT = zT.KF()) || void 0 === MT || MT.markAllMaterialsAsDirty(1, (TT => TT.hasTexture(zT)))
```

#### 3433. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26110-L26111` → after: `L25788-L25789`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25788-L25789)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25788-L25789) · [Before (L26110-L26111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26110-L26111)

```diff
-       (0, xp.z)(pp, ip), ip.Kl.addOnce((() => {
-         (0, xp.X)(pp)
+       (0, nT.u)(TT, UT), UT.SF.addOnce((() => {
+         (0, nT.O)(TT)
```

#### 3434. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26128` → after: `L25806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25806) · [Before (L26128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26128)

```diff
-           pp[ip] = null !== (op = null === cp || void 0 === cp ? void 0 : cp.mirror) && void 0 !== op ? op : null;
+           TT[UT] = null !== (zT = null === mT || void 0 === mT ? void 0 : mT.mirror) && void 0 !== zT ? zT : null;
```

#### 3435. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26137` → after: `L25815`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25815) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25815)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25815) · [Before (L26137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26137)

```diff
-         Op = !cp || cp instanceof Lp.k ? ip : {
+         WT = !mT || mT instanceof HT.o ? UT : {
```

#### 3436. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26139` → after: `L25817`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25817) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25817) · [Before (L26139)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26139)

```diff
-           diffuseTexture: (0, Lp.t)(pp.Gl(), cp)
+           diffuseTexture: (0, HT.z)(TT.KF(), mT)
```

#### 3437. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26141-L26142` → after: `L25819-L25820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25819) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25819-L25820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25819-L25820) · [Before (L26141-L26142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26141-L26142)

```diff
-         op = (0, xp.$)(pp);
-       if (op)(0, xp.mb)(op, Op);
+         zT = (0, nT.R)(TT);
+       if (zT)(0, nT.bb)(zT, WT);
```

#### 3438. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26155` → after: `L25833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25833) · [Before (L26155)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26155)

```diff
-       pp.freeze(), (0, xp.db)(pp, !0)
+       TT.freeze(), (0, nT.U)(TT, !0)
```

#### 3439. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26159` → after: `L25837`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25837) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25837)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25837) · [Before (L26159)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26159)

```diff
-       pp.unfreeze(), (0, xp.db)(pp, !1)
+       TT.unfreeze(), (0, nT.U)(TT, !1)
```

#### 3440. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26164` → after: `L25842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25842) · [Before (L26164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26164)

```diff
-       const Op = null !== (cp = (0, Ap.f)(pp)) && void 0 !== cp ? cp : new Ap.b(pp),
+       const WT = null !== (mT = (0, lT.f)(TT)) && void 0 !== mT ? mT : new lT.c(TT),
```

#### 3441. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26174` → after: `L25852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25852) · [Before (L26174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26174)

```diff
-   37754: (pp, ip, cp) => {
+   37641: (TT, UT, mT) => {
```

#### 3442. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26176` → after: `L25854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25854) · [Before (L26176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26176)

```diff
-       return pp instanceof Float32Array ? pp : new Float32Array(pp)
+       return TT instanceof Float32Array ? TT : new Float32Array(TT)
```

#### 3443. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26180` → after: `L25858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25858) · [Before (L26180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26180)

```diff
-       return pp instanceof Uint16Array ? pp : new Uint16Array(pp)
+       return TT instanceof Uint16Array ? TT : new Uint16Array(TT)
```

#### 3444. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26185` → after: `L25863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25863) · [Before (L26185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26185)

```diff
-         ty: ip
+         mB: UT
```

#### 3445. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26189` → after: `L25867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25867) · [Before (L26189)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26189)

```diff
-         ty: op(ip)
+         mB: zT(UT)
```

#### 3446. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26194-L26195` → after: `L25873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25873) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25873) · [Before (L26194-L26195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26194-L26195)

```diff
-       i: () => Ip,
-       l: () => op
+       g: () => zT
```

#### 3447. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26198` → after: `L25876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25876) · [Before (L26198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26198)

```diff
-   38253: (pp, ip, cp) => {
+   38161: (TT, UT, mT) => {
```

#### 3448. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26201` → after: `L25879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25879) · [Before (L26201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26201)

```diff
-       c: () => yp
+       e: () => BT
```

#### 3449. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26203-L26208` → after: `L25881-L25886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25881) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25881-L25886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25881-L25886) · [Before (L26203-L26208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26203-L26208)

```diff
-     var Op = cp(37313),
-       op = cp(37683),
-       Ip = cp(37689),
-       Sp = cp(37475),
-       xp = cp(37713);
-     const Lp = new op.h,
+     var WT = mT(37185),
+       zT = mT(37566),
+       MT = mT(37570),
+       gT = mT(37359),
+       nT = mT(37602);
+     const HT = new zT.g,
```

#### 3450. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26213` → after: `L25891`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25891) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25891)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25891) · [Before (L26213)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26213)

```diff
-       return pp.Ow && pp.isEnabled() && !pp.Fip
+       return TT.QZ && TT.isEnabled() && !TT.sUT
```

#### 3451. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26220-L26221` → after: `L25898-L25899`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25898-L25899)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25898-L25899) · [Before (L26220-L26221)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26220-L26221)

```diff
-       } = pp.model, Lp = null === (op = xp.parts[cp]) || void 0 === op ? void 0 : op.geometry, Yp = Lp && (0, Ip.k)(Lp), Dp = xp.parts[cp].By;
-       if (null === Lp || void 0 === Lp || !Lp.live || !Yp || (null === (Sp = ip.material) || void 0 === Sp ? void 0 : Sp.fillMode) > 2) throw new Error(`${ip.name} is a handle without live parts in a triangle fill mode, which a pick needs`);
+       } = TT.model, HT = null === (zT = nT.parts[mT]) || void 0 === zT ? void 0 : zT.geometry, kT = HT && (0, MT.l)(HT), jT = nT.parts[mT].hZ;
+       if (null === HT || void 0 === HT || !HT.live || !kT || (null === (gT = UT.material) || void 0 === gT ? void 0 : gT.fillMode) > 2) throw new Error(`${UT.name} is a handle without live parts in a triangle fill mode, which a pick needs`);
```

#### 3452. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26225` → after: `L25903`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25903) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25903)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25903) · [Before (L26225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26225)

```diff
-         Op.By[2 * Ip] = Dp[4 * Ip], Op.By[2 * Ip + 1] = Dp[4 * Ip] + Dp[4 * Ip + 1], Op.boxes.set(null !== (Ap = null === (Pp = ip.partBoxes) || void 0 === Pp ? void 0 : Pp.subarray(6 * Ip, 6 * Ip + 6)) && void 0 !== Ap ? Ap : [...Lp.boundsMin, ...Lp.boundsMax], 6 * Ip)
+         WT.hZ[2 * MT] = jT[4 * MT], WT.hZ[2 * MT + 1] = jT[4 * MT] + jT[4 * MT + 1], WT.boxes.set(null !== (lT = null === (LT = UT.partBoxes) || void 0 === LT ? void 0 : LT.subarray(6 * MT, 6 * MT + 6)) && void 0 !== lT ? lT : [...HT.boundsMin, ...HT.boundsMax], 6 * MT)
```

#### 3453. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26231` → after: `L25909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25909) · [Before (L26231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26231)

```diff
-       if (!pp.yU) return pp.pw.pickWithRay(ip, Ap);
+       if (!TT.NB) return TT.XZ.pickWithRay(UT, lT);
```

#### 3454. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26246` → after: `L25924`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25924) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25924)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25924) · [Before (L26246)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26246)

```diff
-         if (!cp.pickable(Ip) || !Ap(yp) || null === (Wp = yp.metadata) || void 0 === Wp || !Wp[xp.f] || yp.metadata[xp.k]) continue;
+         if (!mT.pickable(MT) || !lT(BT) || null === (pT = BT.metadata) || void 0 === pT || !pT[nT.d] || BT.metadata[nT.i]) continue;
```

#### 3455. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26250` → after: `L25928`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25928) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25928)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25928) · [Before (L26250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26250)

```diff
-           pickedPoint: new Op.Zy(Dp[0], Dp[1], Dp[2]),
+           pickedPoint: new WT.JB(jT[0], jT[1], jT[2]),
```

#### 3456. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26262-L26264` → after: `L25940-L25942`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25940-L25942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25940-L25942) · [Before (L26262-L26264)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26262-L26264)

```diff
-         Lp = Op.Zy.TransformCoordinatesFromFloatsToRef(Ip, xp, -1, op, new Op.Zy),
-         Yp = Op.Zy.TransformCoordinatesFromFloatsToRef(Ip, xp, 1 - 1e-8, op, new Op.Zy);
-       return new Sp.f(Lp, Yp.Iop(Lp).normalize())
+         HT = WT.JB.TransformCoordinatesFromFloatsToRef(MT, nT, -1, zT, new WT.JB),
+         kT = WT.JB.TransformCoordinatesFromFloatsToRef(MT, nT, 1 - 1e-8, zT, new WT.JB);
+       return new gT.g(HT, kT.FWT(HT).normalize())
```

#### 3457. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26267` → after: `L25945`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25945) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25945)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25945) · [Before (L26267)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26267)

```diff
-   37810: (pp, ip, cp) => {
+   37729: (TT, UT, mT) => {
```

#### 3458. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26269` → after: `L25947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25947) · [Before (L26269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26269)

```diff
-       d: () => op
+       b: () => zT
```

#### 3459. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26271` → after: `L25949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25949) · [Before (L26271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26271)

```diff
-     var Op = cp(37676);
+     var WT = mT(37559);
```

#### 3460. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26274` → after: `L25952`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25952) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25952)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25952) · [Before (L26274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26274)

```diff
-       (0, Op.r)(pp, ip, cp, op), Ip && pp.ei.set(Ip[0], Ip[1], Ip[2]), Sp && pp.rotation.set(Sp[0], Sp[1], Sp[2])
+       (0, WT.n)(TT, UT, mT, zT), MT && TT.gp.set(MT[0], MT[1], MT[2]), gT && TT.rotation.set(gT[0], gT[1], gT[2])
```

#### 3461. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26277` → after: `L25955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25955) · [Before (L26277)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26277)

```diff
-   37815: (pp, ip, cp) => {
+   37733: (TT, UT, mT) => {
```

#### 3462. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26279-L26280` → after: `L25957-L25959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25957-L25959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25957-L25959) · [Before (L26279-L26280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26279-L26280)

```diff
-       b: () => Yp,
-       f: () => Lp,
+       c: () => kT,
+       d: () => HT,
+       g: () => LT,
```

#### 3463. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26282-L26284` → after: `L25961-L25962`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25961-L25962)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25961-L25962) · [Before (L26282-L26284)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26282-L26284)

```diff
-       j: () => Ap,
-       n: () => xp,
-       r: () => Dp
+       l: () => nT,
+       m: () => jT
```

#### 3464. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26286-L26289` → after: `L25964-L25967`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25964) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25964-L25967)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25964-L25967) · [Before (L26286-L26289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26286-L26289)

```diff
-     var Op = cp(37660),
-       op = cp(37822),
-       Ip = cp(37436);
-     var Sp = cp(37519);
+     var WT = mT(37546),
+       zT = mT(37738),
+       MT = mT(37302);
+     var gT = mT(37397);
```

#### 3465. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26293` → after: `L25971`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25971) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25971)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25971) · [Before (L26293)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26293)

```diff
-         HP: ip
+         Rl: UT
```

#### 3466. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26297-L26299` → after: `L25975-L25977`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25975) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25975-L25977)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25975-L25977) · [Before (L26297-L26299)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26297-L26299)

```diff
-         tV: Ip
-       } = pp.model.wV, Sp = cp.Qs();
-       Op[0] = Sp[0], Op[1] = Sp[1], Op[2] = Sp[2], 0 !== cp.HZ ? (op[0] = cp.pitch + cp.GL[0] + cp.cameraRotationOffset[0], op[1] = cp.heading + cp.GL[1] + cp.cameraRotationOffset[1], op[2] = cp.AO + cp.GL[2] + cp.cameraRotationOffset[2]) : (op[0] = cp.pitch + cp.GL[0], op[1] = c … [truncated]
+         JA: MT
+       } = TT.model.HA, gT = mT.QE();
+       WT[0] = gT[0], WT[1] = gT[1], WT[2] = gT[2], 0 !== mT.oN ? (zT[0] = mT.pitch + mT.GZ[0] + mT.cameraRotationOffset[0], zT[1] = mT.heading + mT.GZ[1] + mT.cameraRotationOffset[1], zT[2] = mT.ep + mT.GZ[2] + mT.cameraRotationOffset[2]) : (zT[0] = mT.pitch + mT.GZ[0], zT[1] = m … [truncated]
```

#### 3467. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26308` → after: `L25986`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25986) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25986)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25986) · [Before (L26308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26308)

```diff
-       op.fogMode = 3, op.fogStart = ip, op.fogEnd = cp, op.fogColour.set(Op), pp.kop.setBabylonFog(pp, ip, cp, Op)
+       zT.fogMode = 3, zT.fogStart = UT, zT.fogEnd = mT, zT.fogColour.set(WT), TT.WzT.setBabylonFog(TT, UT, mT, WT)
```

#### 3468. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26316` → after: `L25994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25994) · [Before (L26316)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26316)

```diff
-         Ip = Op.h;
+         MT = WT.k;
```

#### 3469. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26318-L26319` → after: `L25996-L25997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R25996) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L25996-L25997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L25996-L25997) · [Before (L26318-L26319)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26318-L26319)

```diff
-         const pp = Sp * Op.c;
-         op.lights[pp + Ip.kind] = Op.f.directional, op.lights[pp + Ip.vector] = cp[Sp][0], op.lights[pp + Ip.vector + 1] = cp[Sp][1], op.lights[pp + Ip.vector + 2] = cp[Sp][2], op.lights.fill(Yp[Sp], pp + Ip.diffuse, pp + Ip.specular + 3), op.lights[pp + Ip.range] = Number.MAX_VA … [truncated]
+         const TT = gT * WT.d;
+         zT.lights[TT + MT.kind] = WT.h.directional, zT.lights[TT + MT.vector] = mT[gT][0], zT.lights[TT + MT.vector + 1] = mT[gT][1], zT.lights[TT + MT.vector + 2] = mT[gT][2], zT.lights.fill(kT[gT], TT + MT.diffuse, TT + MT.specular + 3), zT.lights[TT + MT.range] = Number.MAX_VA … [truncated]
```

#### 3470. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26325` → after: `L26003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26003) · [Before (L26325)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26325)

```diff
-       pp.wLp = ip(pp, "camScreen", (0, op.i)({
+       TT.hnT = UT(TT, "camScreen", (0, zT.g)({
```

#### 3471. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26328-L26329` → after: `L26006-L26007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26006-L26007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26006-L26007) · [Before (L26328-L26329)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26328-L26329)

```diff
-       })), pp.wLp.Gy = !0, pp.wLp.position.set(0, 0, pp.model.wV.near + 1 / 512), pp.wLp.parent = pp.camera, pp.Iw(pp.wLp);
-       const cp = (0, Ip.q)("camera_screen_mat", pp.pw);
+       })), TT.hnT.YB = !0, TT.hnT.position.set(0, 0, TT.model.HA.near + 1 / 512), TT.hnT.parent = TT.camera, TT.FZ(TT.hnT);
+       const mT = (0, MT.p)("camera_screen_mat", TT.XZ);
```

#### 3472. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26331` → after: `L26009`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26009)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26009) · [Before (L26331)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26331)

```diff
-       pp.vLp = cp.mirror, (Op = pp.vLp).uniqueId = Number.MAX_SAFE_INTEGER, (0, Ip.$)(Op).uniqueId = Number.MAX_SAFE_INTEGER, (0, Ip.mb)(cp, {
+       TT.DnT = mT.mirror, (WT = TT.DnT).uniqueId = Number.MAX_SAFE_INTEGER, (0, MT.R)(WT).uniqueId = Number.MAX_SAFE_INTEGER, (0, MT.bb)(mT, {
```

#### 3473. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26336` → after: `L26014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26014) · [Before (L26336)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26336)

```diff
-       }), pp.wLp.eC(!1), (0, Sp.m)(pp.vLp), pp.wLp.material = pp.vLp
+       }), TT.hnT.Qy(!1), (0, gT.k)(TT.DnT), TT.hnT.material = TT.DnT
```

#### 3474. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26339` → after: `L26017`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26017) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26017) · [Before (L26339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26339)

```diff
-   37676: (pp, ip, cp) => {
+   37559: (TT, UT, mT) => {
```

#### 3475. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26341-L26342` → after: `L26019-L26021`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26019-L26021)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26019-L26021) · [Before (L26341-L26342)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26341-L26342)

```diff
-       e: () => wp,
-       i: () => kp,
+       c: () => cT,
+       g: () => eT,
+       j: () => vT,
```

#### 3476. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26344-L26347` → after: `L26023-L26025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26023) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26023-L26025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26023-L26025) · [Before (L26344-L26347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26344-L26347)

```diff
-       m: () => jp,
-       o: () => dp,
-       r: () => tp,
-       t: () => Hp
+       l: () => iT,
+       n: () => fT,
+       o: () => qT
```

#### 3477. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26349-L26353` → after: `L26027-L26031`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26027-L26031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26027-L26031) · [Before (L26349-L26353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26349-L26353)

```diff
-     var Op = cp(37313),
-       op = cp(37667),
-       Ip = cp(37695),
-       Sp = cp(37683),
-       xp = cp(37704);
+     var WT = mT(37185),
+       zT = mT(37552),
+       MT = mT(37580),
+       gT = mT(37566),
+       nT = mT(37593);
```

#### 3478. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26356` → after: `L26034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26034) · [Before (L26356)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26356)

```diff
-         this.holderPosition = new Float64Array(3), this.holderRotation = new Float64Array(3), this.tV = new Float64Array(3), this.fov = .8, this.near = 1 / 32, this.far = 1e4
+         this.holderPosition = new Float64Array(3), this.holderRotation = new Float64Array(3), this.JA = new Float64Array(3), this.fov = .8, this.near = 1 / 32, this.far = 1e4
```

#### 3479. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26359-L26362` → after: `L26037-L26040`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26037-L26040)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26037-L26040) · [Before (L26359-L26362)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26359-L26362)

```diff
-     var Yp = cp(37660),
-       Dp = cp(37698),
-       Ap = cp(37436),
-       Pp = cp(37448);
+     var kT = mT(37546),
+       jT = mT(37584),
+       lT = mT(37302),
+       LT = mT(37321);
```

#### 3480. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26365` → after: `L26043`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26043) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26043)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26043) · [Before (L26365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26365)

```diff
-         this.view = new Yp.k, this.wV = new Lp, this.earthSky = null, this.nodes = new Ip.j, this.meshes = new Sp.j(this.nodes)
+         this.view = new kT.n, this.HA = new HT, this.earthSky = null, this.nodes = new MT.i, this.meshes = new gT.h(this.nodes)
```

#### 3481. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26372-L26375` → after: `L26050-L26053`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26050-L26053)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26050-L26053) · [Before (L26372-L26375)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26372-L26375)

```diff
-           materials: (0, Ap.C)(),
-           textures: (0, Pp.M)(),
-           geometries: (0, Dp.q)(),
-           batches: (0, xp.f)(),
+           materials: (0, lT.x)(),
+           textures: (0, LT.Q)(),
+           geometries: (0, jT.n)(),
+           batches: (0, nT.g)(),
```

#### 3482. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26381` → after: `L26059`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26059) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26059) · [Before (L26381)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26381)

```diff
-     var yp = cp(37713);
+     var BT = mT(37602);
```

#### 3483. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26388-L26390` → after: `L26066-L26068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26066) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26066-L26068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26066-L26068) · [Before (L26388-L26390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26388-L26390)

```diff
-       7: Ip.e.all,
-       2: Ip.e.y,
-       135: Ip.e.usePosition
+       7: MT.d.all,
+       2: MT.d.y,
+       135: MT.d.usePosition
```

#### 3484. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26399` → after: `L26077`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26077) · [Before (L26399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26399)

```diff
-       pp.position.jxp(ip, cp, Op) || pp.position.set(ip, cp, Op)
+       TT.position.UnT(UT, mT, WT) || TT.position.set(UT, mT, WT)
```

#### 3485. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26417` → after: `L26095`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26095) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26095)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26095) · [Before (L26417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26417)

```diff
-       Op.setListed(ip.row, cp && (0 === (op.flags[ip.row] & Ip.f.mesh) || Number.isNaN(Op.radius[ip.row]))), Op.setFlag(ip.row, Sp.c.visible, cp)
+       WT.setListed(UT.row, mT && (0 === (zT.flags[UT.row] & MT.f.mesh) || Number.isNaN(WT.radius[UT.row]))), WT.setFlag(UT.row, gT.b.visible, mT)
```

#### 3486. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26425` → after: `L26103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26103) · [Before (L26425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26425)

```diff
-       cp.meshes.setListed(op, !1, Sp), Op.nodes[op] = null, Sp && cp.meshes.setParts(op, null), cp.nodes.dispose(op), ip.metadata && (ip.metadata[yp.C] = void 0)
+       mT.meshes.setListed(zT, !1, gT), WT.nodes[zT] = null, gT && mT.meshes.setParts(zT, null), mT.nodes.dispose(zT), UT.metadata && (UT.metadata[BT.A] = void 0)
```

#### 3487. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26431-L26434` → after: `L26109-L26112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26109) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26109-L26112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26109-L26112) · [Before (L26431-L26434)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26431-L26434)

```diff
-       xOp: pp => pp.model.view,
-       wV: pp => pp.model.wV,
-       OJ: op.f,
-       TOp(pp, ip) {
+       rmT: TT => TT.model.view,
+       HA: TT => TT.model.HA,
+       lV: zT.f,
+       fWT(TT, UT) {
```

#### 3488. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26442` → after: `L26120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26120) · [Before (L26442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26442)

```diff
-           if (null !== op && void 0 !== op && op[yp.B] && !ip.parent) {
+           if (null !== zT && void 0 !== zT && zT[BT.y] && !UT.parent) {
```

#### 3489. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26446` → after: `L26124`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26124) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26124) · [Before (L26446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26446)

```diff
-             op[yp.C] = Ip, cp.setRadius(Op, Ip), cp.setFlag(Op, Sp.c.textPlane | Sp.c.alwaysSelect, !0)
+             zT[BT.A] = MT, mT.setRadius(WT, MT), mT.setFlag(WT, gT.b.textPlane | gT.b.alwaysSelect, !0)
```

#### 3490. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26451` → after: `L26129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26129) · [Before (L26451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26451)

```diff
-       h_(pp, ip, cp) {
+       t5(TT, UT, mT) {
```

#### 3491. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26454` → after: `L26132`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26132) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26132) · [Before (L26454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26454)

```diff
-       K9(pp, ip) {
+       W9(TT, UT) {
```

#### 3492. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26463` → after: `L26141`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26141) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26141)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26141) · [Before (L26463)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26463)

```diff
-           if (0 !== (Op.flags[Sp] & Ip.f.mesh) && !(0, yp.y)(pp)) {
+           if (0 !== (WT.flags[gT] & MT.f.mesh) && !(0, BT.v)(TT)) {
```

#### 3493. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26471` → after: `L26149`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26149) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26149) · [Before (L26471)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26471)

```diff
-   38118: (pp, ip, cp) => {
+   38036: (TT, UT, mT) => {
```

#### 3494. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26476-L26480` → after: `L26152-L26158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26152-L26158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26152-L26158) · [Before (L26476-L26480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26476-L26480)

```diff
-       h: () => Pp,
-       k: () => tp,
-       o: () => Yp,
-       p: () => yp,
-       t: () => Dp
+       f: () => pT,
+       g: () => qT,
+       j: () => LT,
+       l: () => fT,
+       m: () => kT,
+       n: () => BT,
+       q: () => jT
```

#### 3495. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26482-L26487` → after: `L26160-L26165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26160-L26165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26160-L26165) · [Before (L26482-L26487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26482-L26487)

```diff
-     var Op = cp(38124),
-       op = cp(38126),
-       Ip = cp(37667),
-       Sp = cp(37698),
-       xp = cp(38109),
-       Lp = cp(37800);
+     var WT = mT(38045),
+       zT = mT(38054),
+       MT = mT(37552),
+       gT = mT(37584),
+       nT = mT(38029),
+       HT = mT(37708);
```

#### 3496. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26490` → after: `L26168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26168) · [Before (L26490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26490)

```diff
-       return pp.yU ? Hp(pp, ip, cp, op.c) : (0, Lp.e)().meshFromArrays(ip, cp, pp.Gl())
+       return TT.NB ? qT(TT, UT, mT, zT.c) : (0, HT.d)().meshFromArrays(UT, mT, TT.KF())
```

#### 3497. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26494` → after: `L26172`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26172) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26172) · [Before (L26494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26494)

```diff
-       return pp.yU ? Yp(pp, ip, cp) : (0, Lp.e)().plainMeshFromArrays(ip, cp, pp.Gl(), !0)
+       return TT.NB ? kT(TT, UT, mT) : (0, HT.d)().plainMeshFromArrays(UT, mT, TT.KF(), !0)
```

#### 3498. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26499` → after: `L26177`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26177)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26177) · [Before (L26499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26499)

```diff
-         const cp = (0, Sp.j)(ip);
+         const mT = (0, gT.k)(UT);
```

#### 3499. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26501` → after: `L26179`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26179) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26179)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26179) · [Before (L26501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26501)

```diff
-       } else Object.assign(new((0, Lp.e)().VertexData), ip).applyToMesh(pp, !0)
+       } else Object.assign(new((0, HT.d)().VertexData), UT).applyToMesh(TT, !0)
```

#### 3500. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26505` → after: `L26183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26183) · [Before (L26505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26505)

```diff
-       return pp.kop.linesFromArrays(pp, ip, cp)
+       return TT.WzT.linesFromArrays(TT, UT, mT)
```

#### 3501. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26509` → after: `L26187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26187) · [Before (L26509)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26509)

```diff
-       return pp.yU ? new op.c(pp, ip, pp.Gl().getUniqueId(), null, !1, new Int32Array(0)) : new((0, Lp.e)().Mesh)(ip, pp.Gl())
+       return TT.NB ? new zT.c(TT, UT, TT.KF().getUniqueId(), null, !1, new Int32Array(0)) : new((0, HT.d)().Mesh)(UT, TT.KF())
```

#### 3502. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26513` → after: `L26191`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26191) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26191)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26191) · [Before (L26513)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26513)

```diff
-       return pp.yU ? (0, Ip.j)(pp, ip) : new((0, Lp.e)().TransformNode)(ip, pp.Gl())
+       return TT.NB ? (0, MT.g)(TT, UT) : new((0, HT.d)().TransformNode)(UT, TT.KF())
```

#### 3503. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26538` → after: `L26216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26216) · [Before (L26538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26538)

```diff
-         indices: null !== (ip = pp.NOp()) && void 0 !== ip ? ip : [],
+         indices: null !== (UT = TT.vWT()) && void 0 !== UT ? UT : [],
```

#### 3504. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26549` → after: `L26227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26227) · [Before (L26549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26549)

```diff
-       if (!(0, Ip.f)(pp[0])) return (0, Lp.e)().MirroredGeometry.mergeMeshes(pp, !0, cp, null, !1, ip);
+       if (!(0, MT.f)(TT[0])) return (0, HT.d)().MirroredGeometry.mergeMeshes(TT, !0, mT, null, !1, UT);
```

#### 3505. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26553` → after: `L26231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26231) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26231) · [Before (L26553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26553)

```diff
-         Ap = Op.some((pp => pp.Vl || pp.sideOrientation !== Yp.sideOrientation));
+         lT = WT.some((TT => TT.RP || TT.sideOrientation !== kT.sideOrientation));
```

#### 3506. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26560` → after: `L26238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26238) · [Before (L26560)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26560)

```diff
-           return (null !== (cp = null === (Op = pp.material) || void 0 === Op ? void 0 : Op.uniqueId) && void 0 !== cp ? cp : -1) - (null !== (op = null === (Ip = ip.material) || void 0 === Ip ? void 0 : Ip.uniqueId) && void 0 !== op ? op : -1)
+           return (null !== (mT = null === (WT = TT.material) || void 0 === WT ? void 0 : WT.uniqueId) && void 0 !== mT ? mT : -1) - (null !== (zT = null === (MT = UT.material) || void 0 === MT ? void 0 : MT.uniqueId) && void 0 !== zT ? zT : -1)
```

#### 3507. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26571-L26573` → after: `L26249-L26251`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26249-L26251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26249-L26251) · [Before (L26571-L26573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26571-L26573)

```diff
-           for (let ip = 0; ip < cp.By.length; ip += 4) {
-             const [Ip, Sp] = [op + cp.By[ip], cp.By[ip + 1]], xp = Wp.length - 4;
-             xp >= 0 && Wp[xp + 2] === Op && Wp[xp] + Wp[xp + 1] === Ip ? Wp[xp + 1] += Sp : Wp.push(Ip, Sp, Op, 0), pp = Math.max(pp, Ip + Sp)
+           for (let UT = 0; UT < mT.hZ.length; UT += 4) {
+             const [MT, gT] = [zT + mT.hZ[UT], mT.hZ[UT + 1]], nT = pT.length - 4;
+             nT >= 0 && pT[nT + 2] === WT && pT[nT] + pT[nT + 1] === MT ? pT[nT + 1] += gT : pT.push(MT, gT, WT, 0), TT = Math.max(TT, MT + gT)
```

#### 3508. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26577-L26578` → after: `L26255-L26256`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26255-L26256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26255-L26256) · [Before (L26577-L26578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26577-L26578)

```diff
-       const yp = (0, xp.e)(Op.map((pp => [wp(pp), pp.getWorldMatrix().m]))),
-         Up = `${Yp.name}_merged`,
+       const BT = (0, nT.d)(WT.map((TT => [cT(TT), TT.getWorldMatrix().m]))),
+         ZT = `${kT.name}_merged`,
```

#### 3509. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26580-L26581` → after: `L26258-L26259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26258) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26258-L26259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26258-L26259) · [Before (L26580-L26581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26580-L26581)

```diff
-         dp = Int32Array.from(Wp, ((pp, ip) => ip % 4 === 2 ? 0 : ip % 4 === 3 ? tp : pp)),
-         ep = Hp(Yp.WU, Up, yp, op.c, ip ? dp : void 0);
+         iT = Int32Array.from(pT, ((TT, UT) => UT % 4 === 2 ? 0 : UT % 4 === 3 ? fT : TT)),
+         bT = qT(kT.GB, ZT, BT, zT.c, UT ? iT : void 0);
```

#### 3510. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26592-L26593` → after: `L26270-L26271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26270-L26271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26270-L26271) · [Before (L26592-L26593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26592-L26593)

```diff
-         uniqueId: Yp.Gl().getUniqueId(),
-         u9: Pp,
+         uniqueId: kT.KF().getUniqueId(),
+         w6: LT,
```

#### 3511. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26601` → after: `L26279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26279) · [Before (L26601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26601)

```diff
-       const xp = (0, Sp.j)(cp);
+       const nT = (0, gT.k)(mT);
```

#### 3512. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26603-L26604` → after: `L26281-L26282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26281) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26281-L26282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26281-L26282) · [Before (L26603-L26604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26603-L26604)

```diff
-       const Lp = new op(pp, ip, pp.Gl().getUniqueId(), xp, !0, Ip);
-       return (0, Op.e)(), Lp
+       const HT = new zT(TT, UT, TT.KF().getUniqueId(), nT, !0, MT);
+       return (0, WT.c)(), HT
```

#### 3513. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26607` → after: `L26285`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26285) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26285)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26285) · [Before (L26607)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26607)

```diff
-   37421: (pp, ip, cp) => {
+   37288: (TT, UT, mT) => {
```

#### 3514. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26615` → after: `L26294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26294) · [Before (L26615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26615)

```diff
-       I: () => Bp,
+       Ib: () => dT,
```

#### 3515. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26617` → after: `L26296`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26296) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26296) · [Before (L26617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26617)

```diff
-       N: () => dp,
+       O: () => iT,
```

#### 3516. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26619-L26620` → after: `L26298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26298) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26298) · [Before (L26619-L26620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26619-L26620)

```diff
-       S: () => Xp,
-       V: () => fp,
+       U: () => aT,
```

#### 3517. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26629-L26630` → after: `L26307`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26307) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26307) · [Before (L26629-L26630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26629-L26630)

```diff
-       gb: () => ap,
-       i: () => tp,
+       h: () => fT,
```

#### 3518. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26632-L26637` → after: `L26309-L26315`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26309) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26309-L26315)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26309-L26315) · [Before (L26632-L26637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26632-L26637)

```diff
-       j: () => Lp,
-       jb: () => bp,
-       l: () => Np,
-       mb: () => ep,
-       n: () => Tp,
-       qb: () => Yp,
+       k: () => HT,
+       kb: () => CT,
+       lb: () => KT,
+       m: () => sT,
+       o: () => FT,
+       pb: () => VT,
+       q: () => LT,
```

#### 3519. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26657` → after: `L26335`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26335) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26335)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26335) · [Before (L26657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26657)

```diff
-       return op(pp) ? cp : ip
+       return zT(TT) ? mT : UT
```

#### 3520. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26673` → after: `L26351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26351) · [Before (L26673)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26673)

```diff
-       if (!cp) throw new Error(`No WGSL name for shader type "${ip}"`);
+       if (!mT) throw new Error(`No WGSL name for shader type "${UT}"`);
```

#### 3521. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26679` → after: `L26357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26357) · [Before (L26679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26679)

```diff
-       return `${xp(pp,ip)}(${Op.join(", ")})`
+       return `${nT(TT,UT)}(${WT.join(", ")})`
```

#### 3522. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26687` → after: `L26365`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26365) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26365)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26365) · [Before (L26687)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26687)

```diff
-       return op(pp) ? `var ${cp}: ${xp(pp,ip)} = ${Op};` : `${yp(pp,Ip)}${ip} ${cp} = ${Op};`
+       return zT(TT) ? `var ${mT}: ${nT(TT,UT)} = ${WT};` : `${BT(TT,MT)}${UT} ${mT} = ${WT};`
```

#### 3523. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26691` → after: `L26369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26369) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26369) · [Before (L26691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26691)

```diff
-       return op(pp) ? `var ${cp}: ${xp(pp,ip)};` : `${ip} ${cp};`
+       return zT(TT) ? `var ${mT}: ${nT(TT,UT)};` : `${UT} ${mT};`
```

#### 3524. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26695` → after: `L26373`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26373) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26373)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26373) · [Before (L26695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26695)

```diff
-       return op(pp) ? `const ${cp}: ${xp(pp,ip)} = ${Op};` : `const ${ip} ${cp} = ${Op};`
+       return zT(TT) ? `const ${mT}: ${nT(TT,UT)} = ${WT};` : `const ${UT} ${mT} = ${WT};`
```

#### 3525. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26700` → after: `L26378`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26378) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26378)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26378) · [Before (L26700)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26700)

```diff
-         return `fn ${cp}(${Op.map((ip=>`${ip.name}: ${xp(pp,ip.type)}`)).join(", ")}) -> ${xp(pp,ip)} {${Ip}}`
+         return `fn ${mT}(${WT.map((UT=>`${UT.name}: ${nT(TT,UT.type)}`)).join(", ")}) -> ${nT(TT,UT)} {${MT}}`
```

#### 3526. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26702` → after: `L26380`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26380) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26380)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26380) · [Before (L26702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26702)

```diff
-       return `${ip} ${cp}(${Op.map((pp=>`${pp.type} ${pp.name}`)).join(", ")}) {${Ip}}`
+       return `${UT} ${mT}(${WT.map((TT=>`${TT.type} ${TT.name}`)).join(", ")}) {${MT}}`
```

#### 3527. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26706` → after: `L26384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26384) · [Before (L26706)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26706)

```diff
-       return !ip || op(pp) ? "" : `${ip} `
+       return !UT || zT(TT) ? "" : `${UT} `
```

#### 3528. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26710` → after: `L26388`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26388) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26388)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26388) · [Before (L26710)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26710)

```diff
-       return op(pp) ? `attribute ${ip}: ${xp(pp,cp)};` : `attribute ${yp(pp,Op)}${cp} ${ip};`
+       return zT(TT) ? `attribute ${UT}: ${nT(TT,mT)};` : `attribute ${BT(TT,WT)}${mT} ${UT};`
```

#### 3529. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26714` → after: `L26392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26392) · [Before (L26714)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26714)

```diff
-       return op(pp) ? `varying ${ip}: ${xp(pp,cp)};` : `varying ${yp(pp,Op)}${cp} ${ip};`
+       return zT(TT) ? `varying ${UT}: ${nT(TT,mT)};` : `varying ${BT(TT,WT)}${mT} ${UT};`
```

#### 3530. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26718` → after: `L26396`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26396) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26396)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26396) · [Before (L26718)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26718)

```diff
-       return op(pp) ? `uniform ${ip}: ${xp(pp,cp)};` : `uniform ${cp} ${ip};`
+       return zT(TT) ? `uniform ${UT}: ${nT(TT,mT)};` : `uniform ${mT} ${UT};`
```

#### 3531. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26726` → after: `L26404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26404) · [Before (L26726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26726)

```diff
-       return op(pp) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${ip}}` : `void main() {${ip}}`
+       return zT(TT) ? `@vertex\nfn main(input: VertexInputs) -> FragmentInputs {${UT}}` : `void main() {${UT}}`
```

#### 3532. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26730` → after: `L26408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26408) · [Before (L26730)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26730)

```diff
-       return op(pp) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${ip}}` : `void main() {${ip}}`
+       return zT(TT) ? `@fragment\nfn main(input: FragmentInputs) -> FragmentOutputs {${UT}}` : `void main() {${UT}}`
```

#### 3533. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26735` → after: `L26413`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26413) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26413)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26413) · [Before (L26735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26735)

```diff
-         return [`var ${ip}Sampler: sampler;`, `var ${ip}: ${"2dArray"===cp?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
+         return [`var ${UT}Sampler: sampler;`, `var ${UT}: ${"2dArray"===mT?"texture_2d_array<f32>":"texture_2d<f32>"};`].join("\n")
```

#### 3534. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26737` → after: `L26415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26415) · [Before (L26737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26737)

```diff
-       return `uniform highp ${"2dArray"===cp?"sampler2DArray":"sampler2D"} ${ip};`
+       return `uniform highp ${"2dArray"===mT?"sampler2DArray":"sampler2D"} ${UT};`
```

#### 3535. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26741` → after: `L26419`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26419) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26419) · [Before (L26741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26741)

```diff
-       return op(pp) ? `textureSample(${ip}, ${ip}Sampler, ${cp})` : `texture2D(${ip}, ${cp})`
+       return zT(TT) ? `textureSample(${UT}, ${UT}Sampler, ${mT})` : `texture2D(${UT}, ${mT})`
```

#### 3536. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26746` → after: `L26424`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26424) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26424)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26424) · [Before (L26746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26746)

```diff
-         return `${Ip?"textureSampleLevel":"textureSample"}(${ip}, ${ip}Sampler, ${cp}, ${Yp(pp,`round(${Op})`)}${Ip?`, ${Ip}`:""})`
+         return `${MT?"textureSampleLevel":"textureSample"}(${UT}, ${UT}Sampler, ${mT}, ${kT(TT,`round(${WT})`)}${MT?`, ${MT}`:""})`
```

#### 3537. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26749` → after: `L26427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26427) · [Before (L26749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26749)

```diff
-       return Ip ? `textureLod(${ip}, ${Sp}, ${Ip})` : `texture(${ip}, ${Sp})`
+       return MT ? `textureLod(${UT}, ${gT}, ${MT})` : `texture(${UT}, ${gT})`
```

#### 3538. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26765` → after: `L26443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26443) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26443) · [Before (L26765)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26765)

```diff
-       return op(pp) ? `vertexInputs.${ip}` : ip
+       return zT(TT) ? `vertexInputs.${UT}` : UT
```

#### 3539. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26769` → after: `L26447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26447) · [Before (L26769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26769)

```diff
-       return op(pp) ? `vertexOutputs.${ip}` : ip
+       return zT(TT) ? `vertexOutputs.${UT}` : UT
```

#### 3540. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26773` → after: `L26451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26451) · [Before (L26773)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26773)

```diff
-       return op(pp) ? `fragmentInputs.${ip}` : ip
+       return zT(TT) ? `fragmentInputs.${UT}` : UT
```

#### 3541. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26777` → after: `L26455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26455) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26455) · [Before (L26777)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26777)

```diff
-       return op(pp) ? `uniforms.${ip}` : ip
+       return zT(TT) ? `uniforms.${UT}` : UT
```

#### 3542. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26781` → after: `L26459`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26459) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26459) · [Before (L26781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26781)

```diff
-       return op(pp) ? `frame.${ip}` : cp
+       return zT(TT) ? `frame.${UT}` : mT
```

#### 3543. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26801` → after: `L26479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26479) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26479) · [Before (L26801)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26801)

```diff
-       return op(pp) ? `dpdx(${ip})` : `dFdx(${ip})`
+       return zT(TT) ? `dpdx(${UT})` : `dFdx(${UT})`
```

#### 3544. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26805` → after: `L26483`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26483) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26483) · [Before (L26805)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26805)

```diff
-       return op(pp) ? `dpdy(${ip})` : `dFdy(${ip})`
+       return zT(TT) ? `dpdy(${UT})` : `dFdy(${UT})`
```

#### 3545. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26809` → after: `L26487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26487) · [Before (L26809)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26809)

```diff
-       return op(pp) ? `inverseSqrt(${ip})` : `inversesqrt(${ip})`
+       return zT(TT) ? `inverseSqrt(${UT})` : `inversesqrt(${UT})`
```

#### 3546. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26813` → after: `L26491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26491) · [Before (L26813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26813)

```diff
-       return op(pp) ? `select(${Op}, ${cp}, ${ip})` : `((${ip}) ? (${cp}) : (${Op}))`
+       return zT(TT) ? `select(${WT}, ${mT}, ${UT})` : `((${UT}) ? (${mT}) : (${WT}))`
```

#### 3547. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26817` → after: `L26495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26495) · [Before (L26817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26817)

```diff
-       return op(pp) ? `((${ip}) - (${cp}) * floor((${ip}) / (${cp})))` : `mod(${ip}, ${cp})`
+       return zT(TT) ? `((${UT}) - (${mT}) * floor((${UT}) / (${mT})))` : `mod(${UT}, ${mT})`
```

#### 3548. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26821` → after: `L26499`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26499)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26499) · [Before (L26821)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26821)

```diff
-       return op(pp) ? `${ip} = vec4f(${cp}, ${ip}.a);` : `${ip}.rgb = ${cp};`
+       return zT(TT) ? `${UT} = vec4f(${mT}, ${UT}.a);` : `${UT}.rgb = ${mT};`
```

#### 3549. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26825` → after: `L26503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26503) · [Before (L26825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26825)

```diff
-       return op(pp) ? `${ip} = vec4f(${ip}.rgb * (${cp}), ${ip}.a);` : `${ip}.rgb *= ${cp};`
+       return zT(TT) ? `${UT} = vec4f(${UT}.rgb * (${mT}), ${UT}.a);` : `${UT}.rgb *= ${mT};`
```

#### 3550. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26829` → after: `L26507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26507) · [Before (L26829)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26829)

```diff
-       return op(pp) ? `${ip} = vec4f(${cp}, ${ip}.w);` : `${ip}.xyz = ${cp};`
+       return zT(TT) ? `${UT} = vec4f(${mT}, ${UT}.w);` : `${UT}.xyz = ${mT};`
```

#### 3551. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26832` → after: `L26510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26510) · [Before (L26832)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26832)

```diff
-   37765: (pp, ip, cp) => {
+   37658: (TT, UT, mT) => {
```

#### 3552. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26834-L26836` → after: `L26512-L26514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26512-L26514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26512-L26514) · [Before (L26834-L26836)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26834-L26836)

```diff
-       e: () => Ip,
-       f: () => op,
-       h: () => Sp
+       b: () => MT,
+       c: () => zT,
+       g: () => gT
```

#### 3553. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26838` → after: `L26516`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26516) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26516)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26516) · [Before (L26838)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26838)

```diff
-     var Op = cp(37745);
+     var WT = mT(37628);
```

#### 3554. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26843` → after: `L26521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26521) · [Before (L26843)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26843)

```diff
-       return null !== (ip = pp.vertexCount) && void 0 !== ip ? ip : pp.vertices.byteLength / (0, Op.h)(pp.usesAtlas)
+       return null !== (UT = TT.vertexCount) && void 0 !== UT ? UT : TT.vertices.byteLength / (0, WT.i)(TT.usesAtlas)
```

#### 3555. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26848` → after: `L26526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26526) · [Before (L26848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26848)

```diff
-       return [cp, ip[0], ip[1], ip[2]].map((ip => pp ? (0, Op.i)(ip) : 255))
+       return [mT, UT[0], UT[1], UT[2]].map((UT => TT ? (0, WT.l)(UT) : 255))
```

#### 3556. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26851` → after: `L26529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26529) · [Before (L26851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26851)

```diff
-   37760: (pp, ip, cp) => {
+   37649: (TT, UT, mT) => {
```

#### 3557. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26853-L26854` → after: `L26531-L26532`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26531) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26531-L26532)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26531-L26532) · [Before (L26853-L26854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26853-L26854)

```diff
-       d: () => Lp,
-       g: () => xp
+       c: () => HT,
+       f: () => nT
```

#### 3558. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26866` → after: `L26544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26544) · [Before (L26866)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26866)

```diff
-       (null !== (ip = null === (cp = pp.getBuffer()) || void 0 === cp ? void 0 : cp.TA) && void 0 !== ip ? ip : 0) > 0 && (Op.add(pp), 0 === op ? Sp(pp, null) : Ip.add(pp))
+       (null !== (UT = null === (mT = TT.getBuffer()) || void 0 === mT ? void 0 : mT.fl) && void 0 !== UT ? UT : 0) > 0 && (WT.add(TT), 0 === zT ? gT(TT, null) : MT.add(TT))
```

#### 3559. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26875` → after: `L26553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26553) · [Before (L26875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26875)

```diff
-             for (const op of Object.values(null !== (cp = null === pp || void 0 === pp ? void 0 : pp.getVertexBuffers()) && void 0 !== cp ? cp : {})) {
+             for (const zT of Object.values(null !== (mT = null === TT || void 0 === TT ? void 0 : TT.getVertexBuffers()) && void 0 !== mT ? mT : {})) {
```

#### 3560. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26894` → after: `L26572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26572) · [Before (L26894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26894)

```diff
-       if (!ip || !(ip.TA > 0)) return;
+       if (!UT || !(UT.fl > 0)) return;
```

#### 3561. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26896` → after: `L26574`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26574) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26574)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26574) · [Before (L26896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26896)

```diff
-         Op = new Uint8Array(ip.TA);
+         WT = new Uint8Array(UT.fl);
```

#### 3562. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26900` → after: `L26578`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26578)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26578) · [Before (L26900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26900)

```diff
-   37767: (pp, ip, cp) => {
+   37666: (TT, UT, mT) => {
```

#### 3563. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26902` → after: `L26580`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26580) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26580)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26580) · [Before (L26902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26902)

```diff
-       e: () => Sp,
+       c: () => gT,
```

#### 3564. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26904-L26908` → after: `L26582-L26586`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26582-L26586)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26582-L26586) · [Before (L26904-L26908)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26904-L26908)

```diff
-       g: () => Lp,
-       j: () => Op,
-       n: () => xp,
-       r: () => op,
-       v: () => Yp
+       i: () => HT,
+       l: () => WT,
+       m: () => nT,
+       o: () => zT,
+       p: () => kT
```

#### 3565. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26927` → after: `L26605`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26605) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26605)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26605) · [Before (L26927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26927)

```diff
-   37807: (pp, ip, cp) => {
+   37721: (TT, UT, mT) => {
```

#### 3566. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26930` → after: `L26608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26608) · [Before (L26930)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26930)

```diff
-       d: () => Op
+       f: () => WT
```

#### 3567. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26935` → after: `L26613`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26613)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26613) · [Before (L26935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26935)

```diff
-       for (const op of null !== (ip = pp._drawWrappers) && void 0 !== ip ? ip : []) {
+       for (const zT of null !== (UT = TT._drawWrappers) && void 0 !== UT ? UT : []) {
```

#### 3568. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26942` → after: `L26620`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26620) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26620)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26620) · [Before (L26942)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26942)

```diff
-       for (const cp of null !== (ip = pp.Am) && void 0 !== ip ? ip : []) {
+       for (const mT of null !== (UT = TT.rY) && void 0 !== UT ? UT : []) {
```

#### 3569. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26944` → after: `L26622`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26622) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26622) · [Before (L26944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26944)

```diff
-         const pp = cp.Ky();
+         const TT = mT.wB();
```

#### 3570. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26959` → after: `L26637`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26637) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26637)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26637) · [Before (L26959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26959)

```diff
-           if (ip.uR()) {
+           if (UT.bJ()) {
```

#### 3571. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26974` → after: `L26652`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26652) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26652)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26652) · [Before (L26974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26974)

```diff
-   38041: (pp, ip, cp) => {
+   37938: (TT, UT, mT) => {
```

#### 3572. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26978-L26979` → after: `L26657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26657) · [Before (L26978-L26979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26978-L26979)

```diff
-       j: () => vp,
-       m: () => Up
+       k: () => ZT
```

#### 3573. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26981-L26989` → after: `L26659-L26667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26659) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26659-L26667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26659-L26667) · [Before (L26981-L26989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26981-L26989)

```diff
-     var Op = cp(38045),
-       op = cp(38055),
-       Ip = cp(38061),
-       Sp = cp(38064),
-       xp = cp(37436),
-       Lp = cp(37448),
-       Yp = cp(37791),
-       Dp = cp(38069),
-       Ap = cp(37519);
+     var WT = mT(37947),
+       zT = mT(37959),
+       MT = mT(37965),
+       gT = mT(37972),
+       nT = mT(37302),
+       HT = mT(37321),
+       kT = mT(37704),
+       jT = mT(37974),
+       lT = mT(37397);
```

#### 3574. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26992` → after: `L26670`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26670) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26670)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26670) · [Before (L26992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26992)

```diff
-         this.HP = pp, this._defaultMat = void 0, this.allMaterials = void 0, this._blockMatIDtoTerrainID = void 0, this._idCounter = void 0, this._terrainIDtoMatObject = void 0, this._texURLtoTerrainID = void 0, this._renderMatToTerrainID = void 0, this._defaultMat = Hp(pp, "base … [truncated]
+         this.Rl = TT, this._defaultMat = void 0, this.allMaterials = void 0, this._blockMatIDtoTerrainID = void 0, this._idCounter = void 0, this._terrainIDtoMatObject = void 0, this._texURLtoTerrainID = void 0, this._renderMatToTerrainID = void 0, this._defaultMat = qT(TT, "base … [truncated]
```

#### 3575. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L26997-L27000` → after: `L26675-L26678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26675) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26675-L26678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26675-L26678) · [Before (L26997-L27000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L26997-L27000)

```diff
-           var cp = pp.HP.UW.RU(ip);
-           if (cp.qU) {
-             var Op = cp.qU;
-             return pp._renderMatToTerrainID.has(Op) || ((0, Ap.f)(Op), pp._renderMatToTerrainID.set(Op, pp._idCounter++), wp.add(Op)), pp._renderMatToTerrainID.get(Op)
+           var mT = TT.Rl.DL.MZ(UT);
+           if (mT.gZ) {
+             var WT = mT.gZ;
+             return TT._renderMatToTerrainID.has(WT) || ((0, lT.g)(WT), TT._renderMatToTerrainID.set(WT, TT._idCounter++), cT.add(WT)), TT._renderMatToTerrainID.get(WT)
```

#### 3576. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27002-L27004` → after: `L26680-L26682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26680) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26680-L26682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26680-L26682) · [Before (L27002-L27004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27002-L27004)

```diff
-           if (cp.i6.length) {
-             var op = cp.i6[0];
-             return (op = (0, Yp.i)(pp.HP, cp, op)) in pp._texURLtoTerrainID || (pp._texURLtoTerrainID[op] = pp._idCounter++), pp._texURLtoTerrainID[op]
+           if (mT.Z4.length) {
+             var zT = mT.Z4[0];
+             return (zT = (0, kT.e)(TT.Rl, mT, zT)) in TT._texURLtoTerrainID || (TT._texURLtoTerrainID[zT] = TT._idCounter++), TT._texURLtoTerrainID[zT]
```

#### 3577. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27011` → after: `L26689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26689) · [Before (L27011)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27011)

```diff
-               HP: cp
+               Rl: mT
```

#### 3578. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27013-L27015` → after: `L26691-L26693`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26691) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26691-L26693)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26691-L26693) · [Before (L27013-L27015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27013-L27015)

```diff
-             var Ip = cp.UW.RU(ip);
-             if (Ip.qU) return Ip.qU;
-             if (0 === Ip.i6.length) {
+             var MT = mT.DL.MZ(UT);
+             if (MT.gZ) return MT.gZ;
+             if (0 === MT.Z4.length) {
```

#### 3579. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27018` → after: `L26696`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26696) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26696)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26696) · [Before (L27018)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27018)

```diff
-                 (0, xp.mb)(pp, {
+                 (0, nT.bb)(TT, {
```

#### 3580. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27025-L27031` → after: `L26703-L26709`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26703) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26703-L26709)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26703-L26709) · [Before (L27025-L27031)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27025-L27031)

```diff
-               const ip = Ip.i6,
-                 Sp = Ip.w6 >= 0,
-                 Lp = Sp && (0, Yp.j)(cp, Ip),
-                 Ap = !Lp && (Ip.I6 || Sp && ip.some((pp => cp.UW.K4(pp)))),
-                 Pp = ip.map((pp => tp(pp, cp.WU.pw, Ap))),
-                 Wp = Lp ? xp.k.opaque : Ap ? xp.k.alphaTest : null;
-               (0, xp.mb)(pp, {
+               const UT = MT.Z4,
+                 gT = MT.K4 >= 0,
+                 HT = gT && (0, kT.i)(mT, MT),
+                 lT = !HT && (MT.O4 || gT && UT.some((TT => mT.DL.p_(TT)))),
+                 LT = UT.map((TT => fT(TT, mT.GB.XZ, lT))),
+                 pT = HT ? nT.j.opaque : lT ? nT.j.alphaTest : null;
+               (0, nT.bb)(TT, {
```

#### 3581. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27037` → after: `L26715`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26715) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26715)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26715) · [Before (L27037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27037)

```diff
-                 Uw: yp
+                 RZ: BT
```

#### 3582. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27043-L27044` → after: `L26721-L26722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26721) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26721-L26722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26721-L26722) · [Before (L27043-L27044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27043-L27044)

```diff
-                   pixels: null !== (Up = Ip.R6) && void 0 !== Up ? Up : null,
-                   layerWidth: null !== (wp = Ip.M6) && void 0 !== wp ? wp : null
+                   pixels: null !== (ZT = MT.o4) && void 0 !== ZT ? ZT : null,
+                   layerWidth: null !== (cT = MT.A4) && void 0 !== cT ? cT : null
```

#### 3583. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27046-L27047` → after: `L26724-L26725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26724-L26725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26724-L26725) · [Before (L27046-L27047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27046-L27047)

```diff
-                 (0, xp.n)(pp, op.f, (0, Dp.j)(Op, Pp, yp, cp.WU.dU(), !0))
-               } else yp && (0, xp.n)(pp, Op.d, (0, Op.k)(yp[0] + 1, yp[2]))
+                 (0, nT.m)(TT, zT.i, (0, jT.j)(WT, LT, BT, mT.GB.RB(), !0))
+               } else BT && (0, nT.m)(TT, WT.b, (0, WT.g)(BT[0] + 1, BT[2]))
```

#### 3584. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27059` → after: `L26737`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26737) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26737)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26737) · [Before (L27059)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27059)

```diff
-         return (0, xp.$)(this._terrainIDtoMatObject[pp])
+         return (0, nT.R)(this._terrainIDtoMatObject[TT])
```

#### 3585. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27062-L27064` → after: `L26740-L26742`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26740-L26742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26740-L26742) · [Before (L27062-L27064)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27062-L27064)

```diff
-         const ip = (0, xp.$)(pp).diffuseTexture;
-         ip.mirror && (ip.mirror.hasAlpha = !0), ip.hasAlpha = !0, (0, Ap.W)(pp, {
-           transparencyMode: xp.k.alphaTest,
+         const UT = (0, nT.R)(TT).diffuseTexture;
+         UT.mirror && (UT.mirror.hasAlpha = !0), UT.hasAlpha = !0, (0, lT.$)(TT, {
+           transparencyMode: nT.j.alphaTest,
```

#### 3586. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27071` → after: `L26749`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26749) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26749)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26749) · [Before (L27071)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27071)

```diff
-       return !pp.qU && 0 === pp.i6.length && pp.alpha > 0 && pp.alpha < 1
+       return !TT.gZ && 0 === TT.Z4.length && TT.alpha > 0 && TT.alpha < 1
```

#### 3587. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27085` → after: `L26763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26763) · [Before (L27085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27085)

```diff
-       return (0, Lp.t)(ip, {
+       return (0, HT.z)(UT, {
```

#### 3588. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27089` → after: `L26767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26767) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26767) · [Before (L27089)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27089)

```diff
-         samplingMode: Lp.g.nearestNearestMipLinear,
+         samplingMode: HT.k.nearestNearestMipLinear,
```

#### 3589. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27098-L27100` → after: `L26776-L26778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26776) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26776-L26778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26776-L26778) · [Before (L27098-L27100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27098-L27100)

```diff
-         WU: Op
-       } = pp, op = (0, xp.q)(ip, Op.pw);
-       (0, xp.mb)(op, Ap.e), null === cp || void 0 === cp || cp(op);
+         GB: WT
+       } = TT, zT = (0, nT.p)(UT, WT.XZ);
+       (0, nT.bb)(zT, lT.c), null === mT || void 0 === mT || mT(zT);
```

#### 3590. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27102` → after: `L26780`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26780) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26780) · [Before (L27102)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27102)

```diff
-       return (0, xp.n)(op, Sp.g, (0, Sp.i)(Op, Lp)), (0, Ip.e)(op, (0, Yp.e)(pp)), (0, Ap.m)(Lp), Lp
+       return (0, nT.m)(zT, gT.k, (0, gT.o)(WT, HT)), (0, MT.d)(zT, (0, kT.d)(TT)), (0, lT.k)(HT), HT
```

#### 3591. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27105` → after: `L26783`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26783) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26783) · [Before (L27105)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27105)

```diff
-   37736: (pp, ip, cp) => {
+   37625: (TT, UT, mT) => {
```

#### 3592. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27107-L27108` → after: `L26785-L26786`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26785) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26785-L26786)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26785-L26786) · [Before (L27107-L27108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27107-L27108)

```diff
-       d: () => tp,
-       f: () => Lp
+       c: () => fT,
+       d: () => HT
```

#### 3593. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27110-L27114` → after: `L26788-L26792`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26788-L26792)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26788-L26792) · [Before (L27110-L27114)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27110-L27114)

```diff
-     var Op = cp(2957),
-       op = cp(37745),
-       Ip = cp(37747),
-       Sp = cp(37754),
-       xp = cp(37760);
+     var WT = mT(2990),
+       zT = mT(37628),
+       MT = mT(37637),
+       gT = mT(37641),
+       nT = mT(37649);
```

#### 3594. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27122` → after: `L26800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26800) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26800) · [Before (L27122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27122)

```diff
-       const Op = pp.gy(),
+       const WT = TT.eB(),
```

#### 3595. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27130` → after: `L26808`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26808) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26808)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26808) · [Before (L27130)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27130)

```diff
-             op = (0, Ip.f)(new Uint32Array(6 * Op), Op),
+             zT = (0, MT.h)(new Uint32Array(6 * WT), WT),
```

#### 3596. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27135` → after: `L26813`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26813) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26813) · [Before (L27135)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27135)

```diff
-           return cp ? pp._releaseBuffer(cp.buffer) : pp.Fy.addOnce((() => {
+           return mT ? TT._releaseBuffer(mT.buffer) : TT.OB.addOnce((() => {
```

#### 3597. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27149` → after: `L26827`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26827)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26827) · [Before (L27149)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27149)

```diff
-       return !!pp && ip <= pp.TA && pp.TA <= 2 * ip + 64 * cp
+       return !!TT && UT <= TT.fl && TT.fl <= 2 * UT + 64 * mT
```

#### 3598. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27162` → after: `L26840`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26840) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26840)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26840) · [Before (L27162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27162)

```diff
-         this.terrainMatManager = pp, this.babylon = ip, this.Qy = cp, this.releasesCpuCopies = Op
+         this.terrainMatManager = TT, this.babylon = UT, this.cB = mT, this.releasesCpuCopies = WT
```

#### 3599. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27168` → after: `L26846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26846) · [Before (L27168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27168)

```diff
-             cp && (0, xp.g)(cp.getWrapperBuffer())
+             mT && (0, nT.f)(mT.getWrapperBuffer())
```

#### 3600. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27174` → after: `L26852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26852) · [Before (L27174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27174)

```diff
-           Zy: ip
+           JB: UT
```

#### 3601. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27176` → after: `L26854`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26854) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26854)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26854) · [Before (L27176)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27176)

```diff
-           Qy: cp
+           cB: mT
```

#### 3602. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27185` → after: `L26863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26863) · [Before (L27185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27185)

```diff
-           zy: Dp,
+           xB: jT,
```

#### 3603. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27189-L27190` → after: `L26867-L26868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26867-L26868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26867-L26868) · [Before (L27189-L27190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27189-L27190)

```diff
-         pp.sy || console.warn(`assignMeshData: chunk mesh "${pp.name}" missing doNotSyncBoundingInfo`), pp.name = `chunk_${Dp}_${Ap}`;
-         const Wp = (0, op.h)(xp),
+         TT.dB || console.warn(`assignMeshData: chunk mesh "${TT.name}" missing doNotSyncBoundingInfo`), TT.name = `chunk_${jT}_${lT}`;
+         const pT = (0, zT.i)(nT),
```

#### 3604. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27192-L27193` → after: `L26870-L26871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26870-L26871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26870-L26871) · [Before (L27192-L27193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27192-L27193)

```diff
-           Up = ip.ty ? (0, Sp.e)(ip.ty) : yp > 0 ? function(pp) {
-             return (!Yp || Yp.length < pp) && (Yp = new Float32Array(pp).fill(Op.i)), Yp.subarray(0, pp)
+           ZT = UT.mB ? (0, gT.b)(UT.mB) : BT > 0 ? function(TT) {
+             return (!kT || kT.length < TT) && (kT = new Float32Array(TT).fill(WT.h)), kT.subarray(0, TT)
```

#### 3605. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27197` → after: `L26875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26875) · [Before (L27197)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27197)

```diff
-         pp.material = null !== wp && void 0 !== wp ? wp : this.terrainMatManager.Ky(Ap)
+         TT.material = null !== cT && void 0 !== cT ? cT : this.terrainMatManager.wB(lT)
```

#### 3606. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27208` → after: `L26886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26886) · [Before (L27208)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27208)

```diff
-             return Op ? Op.getWrapperBuffer() === Lp : !cp
+             return WT ? WT.getWrapperBuffer() === HT : !mT
```

#### 3607. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27220` → after: `L26898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26898) · [Before (L27220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27220)

```diff
-           my: Lp,
+           HB: HT,
```

#### 3608. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27222` → after: `L26900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26900) · [Before (L27222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27222)

```diff
-         } = this.babylon, Ap = pp.gy(), Pp = function(pp) {
+         } = this.babylon, lT = TT.eB(), LT = function(TT) {
```

#### 3609. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27234` → after: `L26912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26912) · [Before (L27234)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27234)

```diff
-           nc: vp,
+           am: vT,
```

#### 3610. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27239` → after: `L26917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26917) · [Before (L27239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27239)

```diff
-         } = op.d;
+         } = zT.f;
```

#### 3611. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27244` → after: `L26922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26922) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26922) · [Before (L27244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27244)

```diff
-         jp.useBoundingInfoFromGeometry || (jp.useBoundingInfoFromGeometry = !0, jp._boundingInfo = this.newChunkBoundingInfo()), pp.setVerticesBuffer(Up("position", vp, 3, Yp.FLOAT, !1), !0, Op), Wp(pp, Op, Sp.length), pp.Vy(), xp && pp.setVerticesData("aPackedLightLevels", wp(xp … [truncated]
+         OT.useBoundingInfoFromGeometry || (OT.useBoundingInfoFromGeometry = !0, OT._boundingInfo = this.newChunkBoundingInfo()), TT.setVerticesBuffer(ZT("position", vT, 3, kT.FLOAT, !1), !0, WT), pT(TT, WT, gT.length), TT.tB(), nT && TT.setVerticesData("aPackedLightLevels", cT(nT … [truncated]
```

#### 3612. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27248` → after: `L26926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26926) · [Before (L27248)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27248)

```diff
-   37723: (pp, ip, cp) => {
+   37617: (TT, UT, mT) => {
```

#### 3613. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27251-L27253` → after: `L26930-L26931`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26930) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26930-L26931)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26930-L26931) · [Before (L27251-L27253)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27251-L27253)

```diff
-       h: () => Xp,
-       l: () => lp,
-       n: () => Ep
+       g: () => yT,
+       i: () => tT
```

#### 3614. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27257` → after: `L26935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26935) · [Before (L27257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27257)

```diff
-         this.hP = new Float64Array(54), this.useSeed = !1, this.seed = null
+         this.iL = new Float64Array(54), this.useSeed = !1, this.seed = null
```

#### 3615. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27269` → after: `L26947`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26947)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26947) · [Before (L27269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27269)

```diff
-         hP: pp.hP,
+         iL: TT.iL,
```

#### 3616. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27276` → after: `L26954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26954) · [Before (L27276)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27276)

```diff
-         this.enabled = !0, this.aW = new WeakMap, this.inFlight = new WeakMap
+         this.enabled = !0, this.Jp = new WeakMap, this.inFlight = new WeakMap
```

#### 3617. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27279-L27282` → after: `L26957-L26960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26957-L26960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26957-L26960) · [Before (L27279-L27282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27279-L27282)

```diff
-         const Op = this.aW.get(pp);
-         return !!Op && (Op.ty !== ip ? (this.aW.delete(pp), !1) : this.enabled && function(pp, ip) {
-           const cp = pp.hP,
-             Op = ip.hP;
+         const WT = this.Jp.get(TT);
+         return !!WT && (WT.mB !== UT ? (this.Jp.delete(TT), !1) : this.enabled && function(TT, UT) {
+           const mT = TT.iL,
+             WT = UT.iL;
```

#### 3618. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27295-L27296` → after: `L26973-L26974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26973-L26974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26973-L26974) · [Before (L27295-L27296)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27295-L27296)

```diff
-         const cp = this.aW.get(pp);
-         if (cp && cp.ty === ip) return cp.inputs.seed
+         const mT = this.Jp.get(TT);
+         if (mT && mT.mB === UT) return mT.inputs.seed
```

#### 3619. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27307` → after: `L26985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26985) · [Before (L27307)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27307)

```diff
-           if (this.inFlight.delete(pp), "clientBfs" === cp) return void this.aW.set(pp, {
+           if (this.inFlight.delete(TT), "clientBfs" === mT) return void this.Jp.set(TT, {
```

#### 3620. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27309` → after: `L26987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26987) · [Before (L27309)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27309)

```diff
-             ty: Op
+             mB: WT
```

#### 3621. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27311-L27312` → after: `L26989-L26990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26989-L26990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26989-L26990) · [Before (L27311-L27312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27311-L27312)

```diff
-           const ip = this.aW.get(pp);
-           if ("reused" === cp && ip) return void this.aW.set(pp, {
+           const UT = this.Jp.get(TT);
+           if ("reused" === mT && UT) return void this.Jp.set(TT, {
```

#### 3622. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27314` → after: `L26992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26992) · [Before (L27314)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27314)

```diff
-             ty: Op
+             mB: WT
```

#### 3623. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27317` → after: `L26995`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26995) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26995)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26995) · [Before (L27317)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27317)

```diff
-         this.aW.delete(pp)
+         this.Jp.delete(TT)
```

#### 3624. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27320-L27322` → after: `L26998-L27000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R26998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L26998-L27000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L26998-L27000) · [Before (L27320-L27322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27320-L27322)

```diff
-     var Sp = cp(2953),
-       xp = cp(2957),
-       Lp = cp(37729);
+     var gT = mT(2988),
+       nT = mT(2990),
+       HT = mT(37622);
```

#### 3625. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27335-L27337` → after: `L27013-L27015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27013) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27013-L27015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27013-L27015) · [Before (L27335-L27337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27335-L27337)

```diff
-     var Dp = cp(37736),
-       Ap = cp(37754),
-       Pp = cp(37765);
+     var jT = mT(37625),
+       lT = mT(37641),
+       LT = mT(37658);
```

#### 3626. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27341` → after: `L27019`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27019) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27019)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27019) · [Before (L27341)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27341)

```diff
-         this.material = null, this.visibility = 1, this.vertexCount = 0, this.metadata = {}, this.Am = Wp, this.Ry = !1
+         this.material = null, this.visibility = 1, this.vertexCount = 0, this.metadata = {}, this.rY = pT, this.kB = !1
```

#### 3627. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27344` → after: `L27022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27022) · [Before (L27344)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27344)

```diff
-         return this.Ry
+         return this.kB
```

#### 3628. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27347` → after: `L27025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27025) · [Before (L27347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27347)

```diff
-         this.Ry = !0
+         this.kB = !0
```

#### 3629. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27350-L27351` → after: `L27028-L27029`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27028) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27028-L27029)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27028-L27029) · [Before (L27350-L27351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27350-L27351)

```diff
-     var Up = cp(37767),
-       wp = cp(37769);
+     var ZT = mT(37666),
+       cT = mT(37673);
```

#### 3630. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27425-L27428` → after: `L27103-L27106`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27103-L27106)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27103-L27106) · [Before (L27425-L27428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27425-L27428)

```diff
-     var tp = cp(37781),
-       Hp = cp(37784);
-     var dp = cp(37789),
-       ep = cp(37791);
+     var fT = mT(37681),
+       qT = mT(37687);
+     var iT = mT(37695),
+       bT = mT(37704);
```

#### 3631. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27433` → after: `L27111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27111) · [Before (L27433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27433)

```diff
-         this.budget = pp, this.sx = new Map, this.heldBytes = 0, this.jobs = 0, this.forgotten = [], this.forgetAll = !1
+         this.budget = TT, this.fn = new Map, this.heldBytes = 0, this.jobs = 0, this.forgotten = [], this.forgetAll = !1
```

#### 3632. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27449-L27450` → after: `L27127-L27128`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27127) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27127-L27128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27127-L27128) · [Before (L27449-L27450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27449-L27450)

```diff
-           const Ap = Lp.YU;
-           let Pp = this.sx.get(Dp);
+           const lT = HT.uB;
+           let LT = this.fn.get(jT);
```

#### 3633. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27460` → after: `L27138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27138) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27138) · [Before (L27460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27460)

```diff
-           }, this.sx.set(Dp, Pp)), Pp.version = Ap, Pp.bytes = Wp.byteLength, Pp.used = Op, this.heldBytes += Wp.byteLength, Ip.push(Dp), Sp.push(Wp)
+           }, this.fn.set(jT, LT)), LT.version = lT, LT.bytes = pT.byteLength, LT.used = WT, this.heldBytes += pT.byteLength, MT.push(jT), gT.push(pT)
```

#### 3634. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27462` → after: `L27140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27140) · [Before (L27462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27462)

```diff
-         this.heldBytes > this.budget && this.sx.size > jp && this.forgetOldest(Op);
+         this.heldBytes > this.budget && this.fn.size > OT && this.forgetOldest(WT);
```

#### 3635. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27473` → after: `L27151`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27151) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27151)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27151) · [Before (L27473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27473)

```diff
-         const ip = [...this.sx].sort(((pp, ip) => {
+         const UT = [...this.fn].sort(((TT, UT) => {
```

#### 3636. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27482` → after: `L27160`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27160) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27160)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27160) · [Before (L27482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27482)

```diff
-           this.sx.delete(cp), this.heldBytes -= Op, this.forgotten.push(cp)
+           this.fn.delete(mT), this.heldBytes -= WT, this.forgotten.push(mT)
```

#### 3637. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27486-L27487` → after: `L27164-L27165`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27164-L27165)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27164-L27165) · [Before (L27486-L27487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27486-L27487)

```diff
-         const ip = this.sx.get(pp);
-         ip && (this.sx.delete(pp), this.heldBytes -= ip.bytes, this.forgotten.push(pp))
+         const UT = this.fn.get(TT);
+         UT && (this.fn.delete(TT), this.heldBytes -= UT.bytes, this.forgotten.push(TT))
```

#### 3638. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27490` → after: `L27168`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27168) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27168) · [Before (L27490)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27490)

```diff
-         this.sx.clear(), this.heldBytes = 0, this.forgotten = [], this.forgetAll = !0
+         this.fn.clear(), this.heldBytes = 0, this.forgotten = [], this.forgetAll = !0
```

#### 3639. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27493` → after: `L27171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27171) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27171) · [Before (L27493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27493)

```diff
-         return this.sx.size
+         return this.fn.size
```

#### 3640. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27502` → after: `L27180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27180) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27180) · [Before (L27502)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27502)

```diff
-         this.TA = pp, this.sx = new Map, this.job = 1, this.forgotten = [], this.forgetAll = !1
+         this.fl = TT, this.fn = new Map, this.job = 1, this.forgotten = [], this.forgetAll = !1
```

#### 3641. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27505` → after: `L27183`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27183) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27183)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27183) · [Before (L27505)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27505)

```diff
-         const cp = this.sx.get(pp);
+         const mT = this.fn.get(TT);
```

#### 3642. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27515-L27517` → after: `L27193-L27195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27193-L27195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27193-L27195) · [Before (L27515-L27517)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27515-L27517)

```diff
-           }] of this.sx) {
-           if (this.sx.size <= this.TA) break;
-           op !== this.job && (this.sx.delete(Op), this.forgotten.push(Op))
+           }] of this.fn) {
+           if (this.fn.size <= this.fl) break;
+           zT !== this.job && (this.fn.delete(WT), this.forgotten.push(WT))
```

#### 3643. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27526` → after: `L27204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27204) · [Before (L27526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27526)

```diff
-         ip.job = this.job, this.sx.delete(pp), this.sx.set(pp, ip)
+         UT.job = this.job, this.fn.delete(TT), this.fn.set(TT, UT)
```

#### 3644. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27529` → after: `L27207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27207) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27207) · [Before (L27529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27529)

```diff
-         this.sx.delete(pp) && this.forgotten.push(pp)
+         this.fn.delete(TT) && this.forgotten.push(TT)
```

#### 3645. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27533` → after: `L27211`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27211) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27211)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27211) · [Before (L27533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27533)

```diff
-         (null === (cp = this.sx.get(pp)) || void 0 === cp ? void 0 : cp.tag) === ip && this.drop(pp)
+         (null === (mT = this.fn.get(TT)) || void 0 === mT ? void 0 : mT.tag) === UT && this.drop(TT)
```

#### 3646. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27536` → after: `L27214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27214) · [Before (L27536)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27536)

```diff
-         this.sx.clear(), this.forgotten = [], this.forgetAll = !0
+         this.fn.clear(), this.forgotten = [], this.forgetAll = !0
```

#### 3647. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27539` → after: `L27217`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27217) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27217)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27217) · [Before (L27539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27539)

```diff
-         return this.sx.size
+         return this.fn.size
```

#### 3648. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27585` → after: `L27263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27263) · [Before (L27585)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27585)

```diff
-         return null !== (pp = null === (ip = this.busynessTracker) || void 0 === ip ? void 0 : ip.totalInFlightCount) && void 0 !== pp ? pp : 0
+         return null !== (TT = null === (UT = this.busynessTracker) || void 0 === UT ? void 0 : UT.totalInFlightCount) && void 0 !== TT ? TT : 0
```

#### 3649. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27601` → after: `L27279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27279) · [Before (L27601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27601)

```diff
-         this.HP = pp, this.terrainMatManager = ip, this.babylon = cp, this.opts = Op, this.allTerrainMaterials = void 0, this._defaultMaterial = void 0, this.meshBuilder = void 0, this.workers = [], this.busynessTracker = null, this.workersStopped = !1, this.workerScanStartIndex  … [truncated]
+         this.Rl = TT, this.terrainMatManager = UT, this.babylon = mT, this.opts = WT, this.allTerrainMaterials = void 0, this._defaultMaterial = void 0, this.meshBuilder = void 0, this.workers = [], this.busynessTracker = null, this.workersStopped = !1, this.workerScanStartIndex  … [truncated]
```

#### 3650. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27604` → after: `L27282`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27282) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27282)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27282) · [Before (L27604)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27604)

```diff
-             return !(null === (ip = this.currentChunkOf(pp)) || void 0 === ip || !ip.DU)
+             return !(null === (UT = this.currentChunkOf(TT)) || void 0 === UT || !UT.CB)
```

#### 3651. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27617` → after: `L27295`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27295) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27295) · [Before (L27617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27617)

```diff
-           zy: null,
+           xB: null,
```

#### 3652. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27619-L27622` → after: `L27297-L27300`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27297-L27300)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27297-L27300) · [Before (L27619-L27622)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27619-L27622)

```diff
-           ey: !1,
-           Uy: !1,
-           TW: null,
-           My: null
+           zB: !1,
+           Rp: !1,
+           ip: null,
+           lB: null
```

#### 3653. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27626-L27628` → after: `L27304-L27306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27304) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27304-L27306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27304-L27306) · [Before (L27626-L27628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27626-L27628)

```diff
-           return (null === (ip = cp) || void 0 === ip ? void 0 : ip.version) !== pp.YU && (cp = {
-             version: pp.YU,
-             runs: this.HP.WP.PU.encode(pp.hP)
+           return (null === (UT = mT) || void 0 === UT ? void 0 : UT.version) !== TT.uB && (mT = {
+             version: TT.uB,
+             runs: this.Rl.Nl.SB.encode(TT.iL)
```

#### 3654. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27630` → after: `L27308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27308) · [Before (L27630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27630)

```diff
-         }, this.allTerrainMaterials = ip.allMaterials, this._defaultMaterial = ip._defaultMat, this.Qy = null !== (op = Op.Qy) && void 0 !== op ? op : 32
+         }, this.allTerrainMaterials = UT.allMaterials, this._defaultMaterial = UT._defaultMat, this.cB = null !== (zT = WT.cB) && void 0 !== zT ? zT : 32
```

#### 3655. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27636-L27644` → after: `L27314-L27322`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27314) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27314-L27322)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27314-L27322) · [Before (L27636-L27644)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27636-L27644)

```diff
-           UW: op,
-           WU: Ip
-         } = this.HP;
-         this.chunkStandIns = !(null === (pp = Ip.yU) || void 0 === pp || !pp.terrain);
-         const Sp = op.HW,
-           xp = Ip.UU,
-           Lp = Ip.hy === Ip.Ty[0],
-           Yp = op.wU,
-           Ap = op.vU,
+           DL: zT,
+           GB: MT
+         } = this.Rl;
+         this.chunkStandIns = !(null === (TT = MT.NB) || void 0 === TT || !TT.terrain);
+         const gT = zT.Tp,
+           nT = MT.EB,
+           HT = MT.iB === MT.qB[0],
+           kT = zT.hB,
+           lT = zT.DB,
```

#### 3656. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27646-L27650` → after: `L27324-L27328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27324) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27324-L27328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27324-L27328) · [Before (L27646-L27650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27646-L27650)

```diff
-           Wp = Ip.Ty,
-           yp = Ip.hy,
-           wp = op.tU,
-           vp = op.HU,
-           tp = this.HP.Dy ? function(pp, ip) {
+           pT = MT.qB,
+           BT = MT.iB,
+           cT = zT.oB,
+           vT = zT.AB,
+           fT = this.Rl.Np ? function(TT, UT) {
```

#### 3657. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27659-L27661` → after: `L27337-L27339`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27337) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27337-L27339)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27337-L27339) · [Before (L27659-L27661)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27659-L27661)

```diff
-           }(Ap, op.OU) : null,
-           dp = (Ip.yU ? !(null === (ip = Ip.yU.terrain) || void 0 === ip || !ip.faceGroups) : Ip.dU()) ? this.listFaceGroupTerrainIds(Pp) : [],
-           ep = Ip.yU ? Up.r : Up.e;
+           }(lT, zT.IB) : null,
+           iT = (MT.NB ? !(null === (UT = MT.NB.terrain) || void 0 === UT || !UT.faceGroups) : MT.RB()) ? this.listFaceGroupTerrainIds(LT) : [],
+           bT = MT.NB ? ZT.o : ZT.c;
```

#### 3658. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27663-L27665` → after: `L27341-L27343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27341) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27341-L27343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27341-L27343) · [Before (L27663-L27665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27663-L27665)

```diff
-         (Ip.yU ? !(null === (cp = Ip.yU.terrain) || void 0 === cp || !cp.visibilityGraph) : Ip.dU()) && (jp = this.listVisOccluders(Yp, Ap, Pp), this.visibility = new Hp.e(jp, Yp, ((pp, ip, cp, Op) => this.settledAirStamp(pp, ip, cp, Op)), this.visAirSource()), this.visibility.bu … [truncated]
-         const kp = Ip.yU ? null : Ip.engine,
-           mp = !!kp && (null !== (Op = kp.eU) && void 0 !== Op ? Op : 0) >= 2;
+         (MT.NB ? !(null === (mT = MT.NB.terrain) || void 0 === mT || !mT.visibilityGraph) : MT.RB()) && (OT = this.listVisOccluders(kT, lT, LT), this.visibility = new qT.b(OT, kT, ((TT, UT, mT, WT) => this.settledAirStamp(TT, UT, mT, WT)), this.visAirSource()), this.visibility.bu … [truncated]
+         const eT = MT.NB ? null : MT.engine,
+           YT = !!eT && (null !== (WT = eT.TZ) && void 0 !== WT ? WT : 0) >= 2;
```

#### 3659. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27677` → after: `L27355`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27355) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27355)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27355) · [Before (L27677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27677)

```diff
-         this.meshBuilder = new Dp.d(this.terrainMatManager, this.babylon, this.Qy, mp);
+         this.meshBuilder = new jT.c(this.terrainMatManager, this.babylon, this.cB, YT);
```

#### 3660. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27679-L27681` → after: `L27357-L27359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27357) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27357-L27359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27357-L27359) · [Before (L27679-L27681)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27679-L27681)

```diff
-           uU: Rp,
-           jU: qp,
-           kU: Mp
+           UZ: JT,
+           mZ: xT,
+           WZ: dT
```

#### 3661. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27683` → after: `L27361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27361) · [Before (L27683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27683)

```diff
-           Qy: this.Qy,
+           cB: this.cB,
```

#### 3662. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27690-L27691` → after: `L27368-L27369`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27368-L27369)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27368-L27369) · [Before (L27690-L27691)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27690-L27691)

```diff
-           Ty: Wp,
-           hy: yp,
+           qB: pT,
+           iB: BT,
```

#### 3663. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27711-L27712` → after: `L27389-L27390`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27389) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27389-L27390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27389-L27390) · [Before (L27711-L27712)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27711-L27712)

```diff
-         const ip = null !== (pp = this.opts.meshingWorkerCount) && void 0 !== pp ? pp : 1;
-         this.busynessTracker = new Lp.b(ip), this.busynessTracker.markWindowStart(), this.endWorkers();
+         const UT = null !== (TT = this.opts.meshingWorkerCount) && void 0 !== TT ? TT : 1;
+         this.busynessTracker = new HT.d(UT), this.busynessTracker.markWindowStart(), this.endWorkers();
```

#### 3664. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27722` → after: `L27400`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27400) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27400) · [Before (L27722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27722)

```diff
-         null !== this.busynessTracker && (this.endWorkers(), this.workersStopped || (this.resultQueue.drainAll(), this.lostWorkers.clear(), this.retiredWorkers.clear(), this.workerReplacements.length = 0, this.jobsTowardRefill.length = 0, this.lostCauses.length = 0, this.workerSc … [truncated]
+         null !== this.busynessTracker && (this.endWorkers(), this.workersStopped || (this.resultQueue.drainAll(), this.lostWorkers.clear(), this.retiredWorkers.clear(), this.workerReplacements.length = 0, this.jobsTowardRefill.length = 0, this.lostCauses.length = 0, this.workerSc … [truncated]
```

#### 3665. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27726` → after: `L27404`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27404) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27404)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27404) · [Before (L27726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27726)

```diff
-         for (const cp of new Set(Object.values(pp)))(0, Up.v)(this.terrainMatManager.getModel(cp)) && ip.push(cp);
+         for (const mT of new Set(Object.values(TT)))(0, ZT.p)(this.terrainMatManager.getModel(mT)) && UT.push(mT);
```

#### 3666. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27739` → after: `L27417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27417) · [Before (L27739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27739)

```diff
-               const pp = this.HP.UW.RU(Op),
+               const TT = this.Rl.DL.MZ(WT),
```

#### 3667. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27742` → after: `L27420`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27420) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27420)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27420) · [Before (L27742)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27742)

```diff
-               xp = !!pp && (0, tp.p)(Ip, (0, ep.p)(pp), !!pp.qU), op.set(Op, xp)
+               nT = !!TT && (0, fT.m)(MT, (0, bT.n)(TT), !!TT.gZ), zT.set(WT, nT)
```

#### 3668. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27754-L27755` → after: `L27432-L27433`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27432-L27433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27432-L27433) · [Before (L27754-L27755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27754-L27755)

```diff
-         const Ip = pp.My,
-           Sp = (null !== (ip = Ip.get(-1, 0, 0)) && void 0 !== ip && ip.hP ? 1 : 0) | (null !== (cp = Ip.get(0, -1, 0)) && void 0 !== cp && cp.hP ? 2 : 0) | (null !== (Op = Ip.get(0, 0, -1)) && void 0 !== Op && Op.hP ? 4 : 0),
+         const MT = TT.lB,
+           gT = (null !== (UT = MT.get(-1, 0, 0)) && void 0 !== UT && UT.iL ? 1 : 0) | (null !== (mT = MT.get(0, -1, 0)) && void 0 !== mT && mT.iL ? 2 : 0) | (null !== (WT = MT.get(0, 0, -1)) && void 0 !== WT && WT.iL ? 4 : 0),
```

#### 3669. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27759-L27761` → after: `L27437-L27439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27437-L27439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27437-L27439) · [Before (L27759-L27761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27759-L27761)

```diff
-           const ip = pp.hP.data;
-           Lp = (0, tp.r)(ip, pp.ey, pp.size, op.occluders, this.visScratch, pp.TW), this.visKept.set(pp, {
-             voxelVersion: pp.YU,
+           const UT = TT.iL.data;
+           HT = (0, fT.q)(UT, TT.zB, TT.size, zT.occluders, this.visScratch, TT.ip), this.visKept.set(TT, {
+             voxelVersion: TT.uB,
```

#### 3670. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27769` → after: `L27447`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27447) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27447)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27447) · [Before (L27769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27769)

```diff
-         return ip && ip.voxelVersion === pp.YU ? ip.graphs : void 0
+         return UT && UT.voxelVersion === TT.uB ? UT.graphs : void 0
```

#### 3671. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27776` → after: `L27454`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27454)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27454) · [Before (L27776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27776)

```diff
-         void 0 === Ip ? Ip = op && null !== (Sp = op.graphs) && void 0 !== Sp ? Sp : null : op && this.visKept.set(pp, {
+         void 0 === MT ? MT = zT && null !== (gT = zT.graphs) && void 0 !== gT ? gT : null : zT && this.visKept.set(TT, {
```

#### 3672. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27780` → after: `L27458`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27458)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27458) · [Before (L27780)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27780)

```diff
-         this.visibility.setChunk(pp.i, pp.j, pp.k, Ip, cp, null !== (Op = null === op || void 0 === op ? void 0 : op.stamps) && void 0 !== Op ? Op : Cp)
+         this.visibility.setChunk(TT.i, TT.j, TT.k, MT, mT, null !== (WT = null === zT || void 0 === zT ? void 0 : zT.stamps) && void 0 !== WT ? WT : wT)
```

#### 3673. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27783` → after: `L27461`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27461) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27461)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27461) · [Before (L27783)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27783)

```diff
-         return this.chunkObjectId(pp) * 2 ** 24 + pp.MU[ip] % 2 ** 24
+         return this.chunkObjectId(TT) * 2 ** 24 + TT.HZ[UT] % 2 ** 24
```

#### 3674. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27791` → after: `L27469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27469) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27469) · [Before (L27791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27791)

```diff
-           cp = pp.My,
+           mT = TT.lB,
```

#### 3675. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27796` → after: `L27474`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27474) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27474)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27474) · [Before (L27796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27796)

```diff
-           ip[3 + op] = null !== cp && void 0 !== cp && cp.hP ? this.visStamp(cp, op) : -1
+           UT[3 + zT] = null !== mT && void 0 !== mT && mT.iL ? this.visStamp(mT, zT) : -1
```

#### 3676. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27803` → after: `L27481`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27481)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27481) · [Before (L27803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27803)

```diff
-         null !== cp && (pp.ey || ip) && cp(pp.i, pp.j, pp.k)
+         null !== mT && (TT.zB || UT) && mT(TT.i, TT.j, TT.k)
```

#### 3677. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27806-L27807` → after: `L27484-L27485`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27484) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27484-L27485)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27484-L27485) · [Before (L27806-L27807)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27806-L27807)

```diff
-         const op = this.HP.WP.XU.lU(pp, ip, cp);
-         return !op || !op.ey || op.CU || op.SU ? -1 : this.visStamp(op, Op)
+         const zT = this.Rl.Nl.lZ.LZ(TT, UT, mT);
+         return !zT || !zT.zB || zT.kZ || zT.FB ? -1 : this.visStamp(zT, WT)
```

#### 3678. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27810` → after: `L27488`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27488) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27488) · [Before (L27810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27810)

```diff
-         const pp = this.HP.WP.XU;
+         const TT = this.Rl.Nl.lZ;
```

#### 3679. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27813` → after: `L27491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27491) · [Before (L27813)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27813)

```diff
-           chunkAt: (ip, cp, Op) => pp.lU(ip, cp, Op),
+           chunkAt: (UT, mT, WT) => TT.LZ(UT, mT, WT),
```

#### 3680. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27817` → after: `L27495`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27495) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27495)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27495) · [Before (L27817)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27817)

```diff
-             if (!Op.ey || Op.CU || Op.SU) cp[0] = cp[1] = cp[2] = -1;
+             if (!WT.zB || WT.kZ || WT.FB) mT[0] = mT[1] = mT[2] = -1;
```

#### 3681. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27819` → after: `L27497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27497) · [Before (L27819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27819)

```diff
-               for (let op = 0; op < 3; op++) cp[op] = ip * 2 ** 24 + Op.MU[op] % 2 ** 24
+               for (let zT = 0; zT < 3; zT++) mT[zT] = UT * 2 ** 24 + WT.HZ[zT] % 2 ** 24
```

#### 3682. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27844` → after: `L27522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27522) · [Before (L27844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27844)

```diff
-           null === (Op = this.meshProbe) || void 0 === Op || Op.received(op), this.busynessTracker.onJobCompleted(pp), this.jobsInFlight[pp].delete(op.meshJobId), this._meshJobsDone++, this.queueBudget.jobDone(op.jobMs), this.refillReplacements(pp), !1 === op.lightOnlyUpdate && ( … [truncated]
+           null === (WT = this.meshProbe) || void 0 === WT || WT.received(zT), this.busynessTracker.onJobCompleted(TT), this.jobsInFlight[TT].delete(zT.meshJobId), this._meshJobsDone++, this.queueBudget.jobDone(zT.jobMs), this.refillReplacements(TT), !1 === zT.lightOnlyUpdate && ( … [truncated]
```

#### 3683. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27860` → after: `L27538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27538) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27538) · [Before (L27860)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27860)

```diff
-         return ++this.workerScanStartIndex >= cp && (this.workerScanStartIndex = 0), pp >= 0 && pp < cp && Op(pp) === Sp ? pp : Ip
+         return ++this.workerScanStartIndex >= mT && (this.workerScanStartIndex = 0), TT >= 0 && TT < mT && WT(TT) === gT ? TT : MT
```

#### 3684. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27865` → after: `L27543`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27543) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27543)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27543) · [Before (L27865)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27865)

```diff
-         console.warn(`Meshing worker ${pp} was lost (${cp}): queueing its ${Op.size} jobs in flight again`);
+         console.warn(`Meshing worker ${TT} was lost (${mT}): queueing its ${WT.size} jobs in flight again`);
```

#### 3685. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27868` → after: `L27546`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27546) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27546)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27546) · [Before (L27868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27868)

```diff
-           this.busynessTracker.onJobCancelled(pp), null === (op = this.meshProbe) || void 0 === op || op.failed(Ip), Sp.SU === Ip && this.HP.WP.XU.lU(Sp.i, Sp.j, Sp.k) === Sp && (Sp.SU = 0, Sp.CU = !0, Sp.JU = !0, this.HP.WP.EU(Sp, !0))
+           this.busynessTracker.onJobCancelled(TT), null === (zT = this.meshProbe) || void 0 === zT || zT.failed(MT), gT.FB === MT && this.Rl.Nl.lZ.LZ(gT.i, gT.j, gT.k) === gT && (gT.FB = 0, gT.kZ = !0, gT.BZ = !0, this.Rl.Nl.jZ(gT, !0))
```

#### 3686. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27879-L27880` → after: `L27557-L27558`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27557) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27557-L27558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27557-L27558) · [Before (L27879-L27880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27879-L27880)

```diff
-           Op = null !== (ip = this.workerReplacements[pp]) && void 0 !== ip ? ip : 0;
-         if (Op >= 3) this.retireWorker(pp, `3 replacements used: ${cp}`);
+           WT = null !== (UT = this.workerReplacements[TT]) && void 0 !== UT ? UT : 0;
+         if (WT >= 3) this.retireWorker(TT, `3 replacements used: ${mT}`);
```

#### 3687. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27886` → after: `L27564`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27564) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27564)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27564) · [Before (L27886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27886)

```diff
-             return void this.retireWorker(pp, `no new worker (${op instanceof Error?op.message:String(op)}): ${cp}`)
+             return void this.retireWorker(TT, `no new worker (${zT instanceof Error?zT.message:String(zT)}): ${mT}`)
```

#### 3688. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27888` → after: `L27566`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27566) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27566)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27566) · [Before (L27888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27888)

```diff
-           this.lostWorkers.delete(pp), this.HP.BU(`Meshing worker ${pp} replaced (${Op+1} of 3): ${cp}`)
+           this.lostWorkers.delete(TT), this.Rl.ZZ(`Meshing worker ${TT} replaced (${WT+1} of 3): ${mT}`)
```

#### 3689. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27894-L27895` → after: `L27572-L27573`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27572-L27573)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27572-L27573) · [Before (L27894-L27895)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27894-L27895)

```diff
-         const cp = (null !== (ip = this.jobsTowardRefill[pp]) && void 0 !== ip ? ip : 0) + 1;
-         cp < 1e3 ? this.jobsTowardRefill[pp] = cp : (this.jobsTowardRefill[pp] = 0, this.workerReplacements[pp]--)
+         const mT = (null !== (UT = this.jobsTowardRefill[TT]) && void 0 !== UT ? UT : 0) + 1;
+         mT < 1e3 ? this.jobsTowardRefill[TT] = mT : (this.jobsTowardRefill[TT] = 0, this.workerReplacements[TT]--)
```

#### 3690. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27898` → after: `L27576`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27576) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27576)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27576) · [Before (L27898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27898)

```diff
-         if (this.workers[pp].terminate(), this.retiredWorkers.add(pp), this.HP.BU(`Meshing worker ${pp} is out for good, ${ip}`), this.retiredWorkers.size === this.workers.length) {
+         if (this.workers[TT].terminate(), this.retiredWorkers.add(TT), this.Rl.ZZ(`Meshing worker ${TT} is out for good, ${UT}`), this.retiredWorkers.size === this.workers.length) {
```

#### 3691. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27904` → after: `L27582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27582) · [Before (L27904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27904)

```diff
-         null !== ip.message && this.HP.BU(`Meshing worker ${pp}: ${ip.message}`);
+         null !== UT.message && this.Rl.ZZ(`Meshing worker ${TT}: ${UT.message}`);
```

#### 3692. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27909` → after: `L27587`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27587) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27587)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27587) · [Before (L27909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27909)

```diff
-           const pp = null !== (Op = ip.message) && void 0 !== Op ? Op : `Wasm light failure: ${cp}`,
+           const TT = null !== (WT = UT.message) && void 0 !== WT ? WT : `Wasm light failure: ${mT}`,
```

#### 3693. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27911` → after: `L27589`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27589) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27589)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27589) · [Before (L27911)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27911)

```diff
-           this.HP.NU(new Error(pp), {
+           this.Rl.cZ(new Error(TT), {
```

#### 3694. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27914` → after: `L27592`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27592) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27592)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27592) · [Before (L27914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27914)

```diff
-             deviceMemory: String(null !== Sp && void 0 !== Sp ? Sp : "unreported")
+             deviceMemory: String(null !== gT && void 0 !== gT ? gT : "unreported")
```

#### 3695. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27921` → after: `L27599`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27599) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27599)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27599) · [Before (L27921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27921)

```diff
-         ip.lost && this.markLost(pp, null !== (Sp = ip.message) && void 0 !== Sp ? Sp : "no message")
+         UT.lost && this.markLost(TT, null !== (gT = UT.message) && void 0 !== gT ? gT : "no message")
```

#### 3696. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27935-L27939` → after: `L27613-L27617`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27613-L27617)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27613-L27617) · [Before (L27935-L27939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27935-L27939)

```diff
-         this.HP.BU(`Meshing worker ${pp} failed chunk (${op}, ${Ip}, ${xp}): ${Yp}`), this.jobEnded(pp, Lp), null === (cp = this.meshProbe) || void 0 === cp || cp.failed(Lp), Dp ? this.lightUnused(op, Ip, xp, Lp) : (this.chunkMirrors[pp].reset(), this.lightMirrors[pp].reset()), A … [truncated]
-         const yp = this.HP.WP.XU.lU(op, Ip, xp);
-         if (!yp || yp.SU !== Lp) return;
-         yp.SU = 0, yp.CU = !0, yp.JU = !0;
-         const Up = null !== (Op = this.meshFailures.get(yp)) && void 0 !== Op ? Op : {
+         this.Rl.ZZ(`Meshing worker ${TT} failed chunk (${zT}, ${MT}, ${nT}): ${kT}`), this.jobEnded(TT, HT), null === (mT = this.meshProbe) || void 0 === mT || mT.failed(HT), jT ? this.lightUnused(zT, MT, nT, HT) : (this.chunkMirrors[TT].reset(), this.lightMirrors[TT].reset()), l … [truncated]
+         const BT = this.Rl.Nl.lZ.LZ(zT, MT, nT);
+         if (!BT || BT.FB !== HT) return;
+         BT.FB = 0, BT.kZ = !0, BT.BZ = !0;
+         const ZT = null !== (WT = this.meshFailures.get(BT)) && void 0 !== WT ? WT : {
```

#### 3697. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27946-L27948` → after: `L27624-L27626`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27624-L27626)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27624-L27626) · [Before (L27946-L27948)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27946-L27948)

```diff
-           const pp = Up.lostMesher >= 2 ? `lost its worker's mesher ${Up.lostMesher} times` : Up.refused >= 6 ? `was refused memory ${Up.refused} times` : `failed ${Up.failed} times in a row`;
-           this.HP.BU(`Meshing chunk (${op}, ${Ip}, ${xp}) ${pp}, so it is dropped until it reloads: ${Yp}`)
-         } else this.meshFailures.set(yp, Up), this.HP.WP.EU(yp, !0)
+           const TT = ZT.lostMesher >= 2 ? `lost its worker's mesher ${ZT.lostMesher} times` : ZT.refused >= 6 ? `was refused memory ${ZT.refused} times` : `failed ${ZT.failed} times in a row`;
+           this.Rl.ZZ(`Meshing chunk (${zT}, ${MT}, ${nT}) ${TT}, so it is dropped until it reloads: ${kT}`)
+         } else this.meshFailures.set(BT, ZT), this.Rl.Nl.jZ(BT, !0)
```

#### 3698. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27951` → after: `L27629`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27629)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27629) · [Before (L27951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27951)

```diff
-         this.droppedChunks.add(pp), pp.CU = !1, pp.JU = !1, this.LU(pp)
+         this.droppedChunks.add(TT), TT.kZ = !1, TT.BZ = !1, this.VB(TT)
```

#### 3699. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27967-L27968` → after: `L27645-L27646`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27645) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27645-L27646)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27645-L27646) · [Before (L27967-L27968)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27967-L27968)

```diff
-           WP: ip
-         } = this.HP, {
+           Nl: UT
+         } = this.Rl, {
```

#### 3700. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27972-L27973` → after: `L27650-L27651`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27650-L27651)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27650-L27651) · [Before (L27972-L27973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27972-L27973)

```diff
-         } = pp, Ip = ip.XU.lU(cp, Op, op);
-         return Ip && Ip.SU === pp.meshJobId ? ip.fU.includes(cp, Op, op) || ip.bU.includes(cp, Op, op) ? null : Ip : null
+         } = TT, MT = UT.lZ.LZ(mT, WT, zT);
+         return MT && MT.FB === TT.meshJobId ? UT.fZ.includes(mT, WT, zT) || UT.qZ.includes(mT, WT, zT) ? null : MT : null
```

#### 3701. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27976` → after: `L27654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27654) · [Before (L27976)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27976)

```diff
-         pp.computedLightData && (0, Sp.w)(pp.computedLightData), this.lightUnused(pp.i, pp.j, pp.k, pp.meshJobId)
+         TT.computedLightData && (0, gT.r)(TT.computedLightData), this.lightUnused(TT.i, TT.j, TT.k, TT.meshJobId)
```

#### 3702. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27979` → after: `L27657`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27657) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27657)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27657) · [Before (L27979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27979)

```diff
-         const op = this.HP.WP.XU.lU(pp, ip, cp);
+         const zT = this.Rl.Nl.lZ.LZ(TT, UT, mT);
```

#### 3703. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27987` → after: `L27665`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27665) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27665)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27665) · [Before (L27987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27987)

```diff
-           if (this.remeshesLostContext && (0, dp.b)(this.HP.WU.engine)) return this.dropResult(pp), ip.SU = 0, void this.chunksToRemeshOnRestore.add(ip);
+           if (this.remeshesLostContext && (0, iT.b)(this.Rl.GB.engine)) return this.dropResult(TT), UT.FB = 0, void this.chunksToRemeshOnRestore.add(UT);
```

#### 3704. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L27991` → after: `L27669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27669) · [Before (L27991)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L27991)

```diff
-             this.HP.BU(`Applying the mesh of chunk (${pp.i}, ${pp.j}, ${pp.k}) failed`, cp)
+             this.Rl.ZZ(`Applying the mesh of chunk (${TT.i}, ${TT.j}, ${TT.k}) failed`, mT)
```

#### 3705. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28000` → after: `L27678`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27678) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27678)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27678) · [Before (L28000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28000)

```diff
-         if (pp.SU = 0, this.meshFailures.delete(pp), pp.hU = !!op || pp.Uy || pp.ey, !0 === ip.lightOnlyUpdate) this.assignLightOnlyData(pp, ip.lightDataArrays) || (pp.CU = !0, pp.JU = !0);
+         if (TT.FB = 0, this.meshFailures.delete(TT), TT.iZ = !!zT || TT.Rp || TT.zB, !0 === UT.lightOnlyUpdate) this.assignLightOnlyData(TT, UT.lightDataArrays) || (TT.kZ = !0, TT.BZ = !0);
```

#### 3706. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28003-L28004` → after: `L27681-L27682`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27681) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27681-L27682)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27681-L27682) · [Before (L28003-L28004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28003-L28004)

```diff
-           const cp = this.HP.WP;
-           !cp.aU && ip.vertexDataInfo.length > 0 && (cp.aU = !0, cp.emit("aU")), this.visibility && void 0 !== ip.visNegNeighbours && this.setVisibilityFromWorker(pp, ip.visGraphs, ip.visNegNeighbours)
+           const mT = this.Rl.Nl;
+           !mT.bZ && UT.vertexDataInfo.length > 0 && (mT.bZ = !0, mT.emit("bZ")), this.visibility && void 0 !== UT.visNegNeighbours && this.setVisibilityFromWorker(TT, UT.visGraphs, UT.visNegNeighbours)
```

#### 3707. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28006` → after: `L27684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27684) · [Before (L28006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28006)

```diff
-         if (pp.nU = null !== (cp = ip.faceLayout) && void 0 !== cp ? cp : null, op && "clientBfs" === ip.lightSource || this.lightUnused(ip.i, ip.j, ip.k, ip.meshJobId), op) {
+         if (TT.OZ = null !== (mT = UT.faceLayout) && void 0 !== mT ? mT : null, zT && "clientBfs" === UT.lightSource || this.lightUnused(UT.i, UT.j, UT.k, UT.meshJobId), zT) {
```

#### 3708. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28012-L28014` → after: `L27690-L27692`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27690) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27690-L27692)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27690-L27692) · [Before (L28012-L28014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28012-L28014)

```diff
-           this.storeAndPropagateLight(pp, op, ip.SO, "server" === ip.lightSource), this.lightReuse.lightStored(pp, ip.meshJobId, ip.lightSource, op, ip.lightSeedColumnsRead), ip.lightSeedColumnsRead && (0, Sp.A)(ip.lightSeedColumnsRead)
-         } else this.HP.FU.gU(pp);
-         pp.CU ? this.HP.WP.EU(pp, !0) : pp.DU = !1, this.checkSkySeedAtReply(pp, !pp.CU), this.LU(pp), null === (Op = this.meshProbe) || void 0 === Op || Op.applied(pp, ip.meshJobId)
+           this.storeAndPropagateLight(TT, zT, UT.Nm, "server" === UT.lightSource), this.lightReuse.lightStored(TT, UT.meshJobId, UT.lightSource, zT, UT.lightSeedColumnsRead), UT.lightSeedColumnsRead && (0, gT.v)(UT.lightSeedColumnsRead)
+         } else this.Rl.eZ.YZ(TT);
+         TT.kZ ? this.Rl.Nl.jZ(TT, !0) : TT.CB = !1, this.checkSkySeedAtReply(TT, !TT.kZ), this.VB(TT), null === (WT = this.meshProbe) || void 0 === WT || WT.applied(TT, UT.meshJobId)
```

#### 3709. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28017` → after: `L27695`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27695) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27695)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27695) · [Before (L28017)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28017)

```diff
-         pp.rU.length = 0
+         TT.xZ.length = 0
```

#### 3710. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28021-L28024` → after: `L27699-L27702`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27699) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27699-L27702)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27699-L27702) · [Before (L28021-L28024)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28021-L28024)

```diff
-         const cp = null === (ip = this.HP.WU.yU) || void 0 === ip ? void 0 : ip.terrain;
-         pp.rU.forEach((pp => {
-           this.HP.emit("removingTerrainMesh", pp), null === cp || void 0 === cp || cp.removeChunkMesh(pp), pp.dispose()
-         })), pp.rU.length = 0, pp.nU = null
+         const mT = null === (UT = this.Rl.GB.NB) || void 0 === UT ? void 0 : UT.terrain;
+         TT.xZ.forEach((TT => {
+           this.Rl.emit("removingTerrainMesh", TT), null === mT || void 0 === mT || mT.removeChunkMesh(TT), TT.dispose()
+         })), TT.xZ.length = 0, TT.OZ = null
```

#### 3711. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28038` → after: `L27716`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27716) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27716)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27716) · [Before (L28038)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28038)

```diff
-         if (this.lazyInitMeshingObjs(), pp.SU) return !1;
+         if (this.lazyInitMeshingObjs(), TT.FB) return !1;
```

#### 3712. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28041-L28042` → after: `L27719-L27720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27719) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27719-L27720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27719-L27720) · [Before (L28041-L28042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28041-L28042)

```diff
-             if (!pp.Uy) return !1;
-             const ip = pp.My,
+             if (!TT.Rp) return !1;
+             const UT = TT.lB,
```

#### 3713. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28044` → after: `L27722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27722) · [Before (L28044)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28044)

```diff
-             if (cp && !cp.Uy) return !1;
+             if (mT && !mT.Rp) return !1;
```

#### 3714. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28046` → after: `L27724`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27724)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27724) · [Before (L28046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28046)

```diff
-             if (Op && !Op.Uy) return !1;
+             if (WT && !WT.Rp) return !1;
```

#### 3715. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28048` → after: `L27726`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27726) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27726)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27726) · [Before (L28048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28048)

```diff
-             if (op && !op.Uy) return !1;
+             if (zT && !zT.Rp) return !1;
```

#### 3716. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28050-L28051` → after: `L27728-L27729`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27728) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27728-L27729)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27728-L27729) · [Before (L28050-L28051)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28050-L28051)

```diff
-           }(pp)) return this.meshFailures.delete(pp), this.assignMeshDataToChunk(pp, []), this.setVisibilityOnThisThread(pp), pp.hU = !0, this.HP.FU.gU(pp), this.checkHeldSkySeedReaders(pp), !0;
-         const op = this.HP.WU.ZU;
+           }(TT)) return this.meshFailures.delete(TT), this.assignMeshDataToChunk(TT, []), this.setVisibilityOnThisThread(TT), TT.iZ = !0, this.Rl.eZ.YZ(TT), this.checkHeldSkySeedReaders(TT), !0;
+         const zT = this.Rl.GB.dZ;
```

#### 3717. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28054` → after: `L27732`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27732) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27732)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27732) · [Before (L28054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28054)

```diff
-         op && (Ip = this.HP.WP.Cy(pp.i, pp.k), Lp = (0, xp.A)(pp.ey, pp.j, Ip));
+         zT && (MT = this.Rl.Nl.LB(TT.i, TT.k), HT = (0, nT.v)(TT.zB, TT.j, MT));
```

#### 3718. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28057` → after: `L27735`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27735)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27735) · [Before (L28057)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28057)

```diff
-         this.providedLightEligible(pp, Ip) && pp.zU && pp.ty && (Yp = pp.ty, Dp = pp.jy);
+         this.providedLightEligible(TT, MT) && TT.wZ && TT.mB && (kT = TT.mB, jT = TT.gB);
```

#### 3719. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28061` → after: `L27739`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27739) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27739)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27739) · [Before (L28061)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28061)

```diff
-         !op || Lp || pp.Uy || Yp || (Wp = (0, Sp.l)(pp, xp.j), Ap = function(pp, ip, cp, op) {
+         !zT || HT || TT.Rp || kT || (pT = (0, gT.e)(TT, nT.i), lT = function(TT, UT, mT, zT) {
```

#### 3720. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28063` → after: `L27741`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27741) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27741)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27741) · [Before (L28063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28063)

```diff
-             Sp = Ip.hP;
+             gT = MT.iL;
```

#### 3721. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28069` → after: `L27747`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27747) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27747)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27747) · [Before (L28069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28069)

```diff
-                 !Ip || Ip.ey && 0 !== (Op | cp | op) ? (Sp[xp] = -1, Sp[xp + 1] = -1) : (Sp[xp] = ip(Ip), Sp[xp + 1] = Ip.YU)
+                 !MT || MT.zB && 0 !== (WT | mT | zT) ? (gT[nT] = -1, gT[nT + 1] = -1) : (gT[nT] = UT(MT), gT[nT + 1] = MT.uB)
```

#### 3722. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28072` → after: `L27750`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27750) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27750)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27750) · [Before (L28072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28072)

```diff
-         }(pp.My, this.chunkObjectIdOf, (0, xp.K)(pp.j, Ip), Wp), this.lightReuse.canReuse(pp, pp.ty, Ap) && (Yp = pp.ty, Dp = pp.jy, Pp = !0, (0, Sp.A)(Wp), Wp = null));
+         }(TT.lB, this.chunkObjectIdOf, (0, nT.C)(TT.j, MT), pT), this.lightReuse.canReuse(TT, TT.mB, lT) && (kT = TT.mB, jT = TT.gB, LT = !0, (0, gT.v)(pT), pT = null));
```

#### 3723. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28074` → after: `L27752`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27752) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27752)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27752) · [Before (L28074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28074)

```diff
-           Up = null === Yp && pp.sU;
+           ZT = null === kT && TT.tZ;
```

#### 3724. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28076-L28077` → after: `L27754-L27755`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27754) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27754-L27755)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27754-L27755) · [Before (L28076-L28077)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28076-L28077)

```diff
-             if (!pp.ey) return !1;
-             const ip = pp.My,
+             if (!TT.zB) return !1;
+             const UT = TT.lB,
```

#### 3725. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28081` → after: `L27759`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27759) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27759)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27759) · [Before (L28081)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28081)

```diff
-             if (op && !op.ey && 0 !== op.TW[cp - 1]) return !1;
+             if (zT && !zT.zB && 0 !== zT.ip[mT - 1]) return !1;
```

#### 3726. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28083` → after: `L27761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27761) · [Before (L28083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28083)

```diff
-             if (Ip && !Ip.ey && bp(Ip.hP.data, (cp - 1) * Op, 1, Op)) return !1;
+             if (MT && !MT.zB && VT(MT.iL.data, (mT - 1) * WT, 1, WT)) return !1;
```

#### 3727. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28085` → after: `L27763`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27763) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27763)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27763) · [Before (L28085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28085)

```diff
-             if (Sp && !Sp.ey && bp(Sp.hP.data, cp - 1, cp, Op)) return !1;
+             if (gT && !gT.zB && VT(gT.iL.data, mT - 1, mT, WT)) return !1;
```

#### 3728. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28087-L28088` → after: `L27765-L27766`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27765) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27765-L27766)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27765-L27766) · [Before (L28087-L28088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28087-L28088)

```diff
-           }(pp)) return this.meshFailures.delete(pp), this.assignMeshDataToChunk(pp, []), this.setVisibilityOnThisThread(pp), pp.hU = !0, pp.nU = null, this.HP.FU.gU(pp), this.checkHeldSkySeedReaders(pp), !0;
-         const wp = this.getLeastLoadedWorkerIndex(null !== (ip = this.stateWorkerOf.get(pp)) && void 0 !== ip ? ip : -1),
+           }(TT)) return this.meshFailures.delete(TT), this.assignMeshDataToChunk(TT, []), this.setVisibilityOnThisThread(TT), TT.iZ = !0, TT.OZ = null, this.Rl.eZ.YZ(TT), this.checkHeldSkySeedReaders(TT), !0;
+         const cT = this.getLeastLoadedWorkerIndex(null !== (UT = this.stateWorkerOf.get(TT)) && void 0 !== UT ? UT : -1),
```

#### 3729. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28094` → after: `L27772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27772) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27772) · [Before (L28094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28094)

```diff
-             zy: ep,
+             xB: bT,
```

#### 3730. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28096-L28098` → after: `L27774-L27776`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27774) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27774-L27776)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27774-L27776) · [Before (L28096-L28098)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28096-L28098)

```diff
-             ey: kp,
-             Uy: mp,
-             TW: Rp
+             zB: eT,
+             Rp: YT,
+             ip: JT
```

#### 3731. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28100` → after: `L27778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27778) · [Before (L28100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28100)

```diff
-         this.tempChunk.i = tp, this.tempChunk.j = Hp, this.tempChunk.k = dp, this.tempChunk.zy = ep, this.tempChunk.size = jp, this.tempChunk.ey = kp, this.tempChunk.Uy = mp, this.tempChunk.TW = Rp, this.tempChunk.My = null;
+         this.tempChunk.i = fT, this.tempChunk.j = qT, this.tempChunk.k = iT, this.tempChunk.xB = bT, this.tempChunk.size = OT, this.tempChunk.zB = eT, this.tempChunk.Rp = YT, this.tempChunk.ip = JT, this.tempChunk.lB = null;
```

#### 3732. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28110-L28112` → after: `L27788-L27790`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27788) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27788-L27790)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27788-L27790) · [Before (L28110-L28112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28110-L28112)

```diff
-               cp = (0, Sp.h)(pp, this.HP.WP, (pp => {
-                 const cp = this.lightTags.get(pp.ty);
-                 return ip.holds(this.chunkObjectId(pp), cp) ? cp : 0
+               mT = (0, gT.d)(TT, this.Rl.Nl, (TT => {
+                 const mT = this.lightTags.get(TT.mB);
+                 return UT.holds(this.chunkObjectId(TT), mT) ? mT : 0
```

#### 3733. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28118` → after: `L27796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27796) · [Before (L28118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28118)

```diff
-           lp = (0, Sp.d)();
+           yT = (0, gT.b)();
```

#### 3734. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28121-L28122` → after: `L27799-L27800`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27799-L27800)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27799-L27800) · [Before (L28121-L28122)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28121-L28122)

```diff
-         let Qp = pp.nU;
-         const Jp = op && !pp.JU && pp.hU && pp.rU.length > 0 && !!Qp;
+         let XT = TT.OZ;
+         const IT = zT && !TT.BZ && TT.iZ && TT.xZ.length > 0 && !!XT;
```

#### 3735. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28124` → after: `L27802`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27802) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27802)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27802) · [Before (L28124)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28124)

```diff
-           for (const cp of ip) pp.push(cp.is.buffer), pp.push(cp.js.buffer), pp.push(cp.ks.buffer), pp.push(cp.wids.buffer), pp.push(cp.hts.buffer), pp.push(cp.Bc.buffer), pp.push(cp.diagonals.buffer)
+           for (const mT of UT) TT.push(mT.is.buffer), TT.push(mT.js.buffer), TT.push(mT.ks.buffer), TT.push(mT.wids.buffer), TT.push(mT.hts.buffer), TT.push(mT.bm.buffer), TT.push(mT.diagonals.buffer)
```

#### 3736. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28128` → after: `L27806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27806) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27806) · [Before (L28128)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28128)

```diff
-         if (pp.SU = Bp, this.jobsInFlight[wp].set(Bp, pp), Ap && this.lightReuse.dispatched(pp, Bp, Ap), this.visibility) {
+         if (TT.FB = QT, this.jobsInFlight[cT].set(QT, TT), lT && this.lightReuse.dispatched(TT, QT, lT), this.visibility) {
```

#### 3737. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28132` → after: `L27810`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27810) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27810)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27810) · [Before (L28132)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28132)

```diff
-             voxelVersion: pp.YU,
+             voxelVersion: TT.uB,
```

#### 3738. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28168` → after: `L27846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27846) · [Before (L28168)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28168)

```diff
-             type: "oU",
+             type: "QB",
```

#### 3739. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28172` → after: `L27850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27850) · [Before (L28172)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28172)

```diff
-           return this.HP.BU(`Meshing worker ${wp} postMessage failed`, np), pp.SU = 0, this.jobEnded(wp, Bp), this.chunkMirrors[wp].reset(), this.lightMirrors[wp].reset(), (0, Sp.q)(lp), Xp && (0, Sp.A)(Xp), pp.CU = !0, this.HP.WP.EU(pp, !0), !1
+           return this.Rl.ZZ(`Meshing worker ${cT} postMessage failed`, rT), TT.FB = 0, this.jobEnded(cT, QT), this.chunkMirrors[cT].reset(), this.lightMirrors[cT].reset(), (0, gT.m)(yT), aT && (0, gT.v)(aT), TT.kZ = !0, this.Rl.Nl.jZ(TT, !0), !1
```

#### 3740. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28174` → after: `L27852`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27852)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27852) · [Before (L28174)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28174)

```diff
-         return Jp && (pp.nU = null), null === (cp = this.meshProbe) || void 0 === cp || cp.sent(pp, Bp, this.busynessTracker.inFlightCounts[wp] - 1, this.workerInFlightCount, this.jobCapacity()), !0
+         return IT && (TT.OZ = null), null === (mT = this.meshProbe) || void 0 === mT || mT.sent(TT, QT, this.busynessTracker.inFlightCounts[cT] - 1, this.workerInFlightCount, this.jobCapacity()), !0
```

#### 3741. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28180` → after: `L27858`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27858) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27858)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27858) · [Before (L28180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28180)

```diff
-           const [ip, op, Sp] = Mp(Ip), xp = pp.My.get(ip, op, Sp);
+           const [UT, zT, gT] = dT(MT), nT = TT.lB.get(UT, zT, gT);
```

#### 3742. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28193` → after: `L27871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27871) · [Before (L28193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28193)

```diff
-         const Yp = op ? this.lightTags.get(pp.ty) : void 0;
+         const kT = zT ? this.lightTags.get(TT.mB) : void 0;
```

#### 3743. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28201` → after: `L27879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27879) · [Before (L28201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28201)

```diff
-         } = Sp.dispatched(Op ? xp : -1, cp);
+         } = gT.dispatched(WT ? nT : -1, mT);
```

#### 3744. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28212-L28214` → after: `L27890-L27892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27890) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27890-L27892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27890-L27892) · [Before (L28212-L28214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28212-L28214)

```diff
-         const Op = !pp.KU && this.HP.WU.VU() ? performance.now() : 0;
-         pp.KU = !0;
-         const op = null === (cp = this.HP.WU.yU) || void 0 === cp ? void 0 : cp.terrain;
+         const WT = !TT.aZ && this.Rl.GB.yZ() ? performance.now() : 0;
+         TT.aZ = !0;
+         const zT = null === (mT = this.Rl.GB.NB) || void 0 === mT ? void 0 : mT.terrain;
```

#### 3745. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28216` → after: `L27894`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27894) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27894)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27894) · [Before (L28216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28216)

```diff
-         const Ip = pp.rU;
+         const MT = TT.xZ;
```

#### 3746. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28220` → after: `L27898`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27898) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27898)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27898) · [Before (L28220)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28220)

```diff
-           cp && (xp = new this.babylon.Mesh("TEMP_CHUNK_NAME", this.HP.WU.pw), xp.sy = !0, xp._updateBoundingInfo = Qp, xp._refreshBoundingInfo = Qp, Ip.push(xp)), this.meshBuilder.assignMeshData(xp, ip[Sp]), op || (0, wp.g)(xp, ip[Sp].faceGroups), cp || this.HP.WU.iw(xp), null = … [truncated]
+           mT && (nT = new this.babylon.Mesh("TEMP_CHUNK_NAME", this.Rl.GB.XZ), nT.dB = !0, nT._updateBoundingInfo = XT, nT._refreshBoundingInfo = XT, MT.push(nT)), this.meshBuilder.assignMeshData(nT, UT[gT]), zT || (0, cT.k)(nT, UT[gT].faceGroups), mT || this.Rl.GB.IZ(nT), null = … [truncated]
```

#### 3747. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28224` → after: `L27902`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27902) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27902)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27902) · [Before (L28224)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28224)

```diff
-           this.HP.emit("removingTerrainMesh", pp), null === op || void 0 === op || op.removeChunkMesh(pp), pp.dispose()
+           this.Rl.emit("removingTerrainMesh", TT), null === zT || void 0 === zT || zT.removeChunkMesh(TT), TT.dispose()
```

#### 3748. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28228` → after: `L27906`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27906) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27906)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27906) · [Before (L28228)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28228)

```diff
-         const op = pp.rU;
+         const zT = TT.xZ;
```

#### 3749. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28232-L28235` → after: `L27910-L27913`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27910) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27910-L27913)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27910-L27913) · [Before (L28232-L28235)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28232-L28235)

```diff
-             Lp = xp ? new yp : op[Ip];
-           xp && op.push(Lp), Lp.vertexCount = (0, Pp.f)(Sp);
-           const Yp = Lp.metadata[Dp.f];
-           Lp.material = null !== Yp && void 0 !== Yp ? Yp : this.terrainMatManager.Ky(Sp.terrainID), cp.setChunkMesh(Lp, (0, Ap.i)(Sp), pp.pos), xp && (Lp.metadata[Xp] = pp.i, Lp.metadata[lp] = pp.k, Lp.metadata[Ep] = !0, Op && this.HP.WU.Sw(Lp, Op), this.HP.emit("addingTerrainMe … [truncated]
+             HT = nT ? new BT : zT[MT];
+           nT && zT.push(HT), HT.vertexCount = (0, LT.c)(gT);
+           const kT = HT.metadata[jT.d];
+           HT.material = null !== kT && void 0 !== kT ? kT : this.terrainMatManager.wB(gT.terrainID), mT.setChunkMesh(HT, (0, lT.e)(gT), TT.pos), nT && (HT.metadata[aT] = TT.i, HT.metadata[yT] = TT.k, HT.metadata[tT] = !0, WT && this.Rl.GB.PZ(HT, WT), this.Rl.emit("addingTerrainMe … [truncated]
```

#### 3750. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28239` → after: `L27917`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27917) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27917)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27917) · [Before (L28239)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28239)

```diff
-           this.HP.emit("removingTerrainMesh", pp), cp.removeChunkMesh(pp), pp.dispose()
+           this.Rl.emit("removingTerrainMesh", TT), mT.removeChunkMesh(TT), TT.dispose()
```

#### 3751. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28243-L28244` → after: `L27921-L27922`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27921-L27922)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27921-L27922) · [Before (L28243-L28244)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28243-L28244)

```diff
-         const cp = pp.rU;
-         if (ip.length !== cp.length) return console.warn(`Light-only update submesh count mismatch: ${ip.length} light arrays vs ${cp.length} meshes`), !1;
+         const mT = TT.xZ;
+         if (UT.length !== mT.length) return console.warn(`Light-only update submesh count mismatch: ${UT.length} light arrays vs ${mT.length} meshes`), !1;
```

#### 3752. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28249` → after: `L27927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27927) · [Before (L28249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28249)

```diff
-           if (Lp.length !== Yp) return console.warn(`Light-only update vertex count mismatch on submesh ${xp}: ${Lp.length} vs ${Yp}`), !1;
+           if (HT.length !== kT) return console.warn(`Light-only update vertex count mismatch on submesh ${nT}: ${HT.length} vs ${kT}`), !1;
```

#### 3753. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28251` → after: `L27929`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27929) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27929)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27929) · [Before (L28251)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28251)

```diff
-           if (pp instanceof yp) Lp.length > 0 && (null === (Op = this.HP.WU.yU) || void 0 === Op || null === (op = Op.terrain) || void 0 === op || op.setChunkMeshLight(pp, (0, Ap.l)(Lp)));
+           if (TT instanceof BT) HT.length > 0 && (null === (WT = this.Rl.GB.NB) || void 0 === WT || null === (zT = WT.terrain) || void 0 === zT || zT.setChunkMeshLight(TT, (0, lT.g)(HT)));
```

#### 3754. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28254` → after: `L27932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27932) · [Before (L28254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28254)

```diff
-             const ip = (0, Ap.e)(Lp),
+             const UT = (0, lT.b)(HT),
```

#### 3755. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28256` → after: `L27934`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27934) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27934)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27934) · [Before (L28256)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28256)

```diff
-             cp && cp.isUpdatable() ? cp.updateDirectly(ip, 0) : pp.setVerticesData("aPackedLightLevels", ip, !0, 1), this.meshBuilder.releaseCpuCopies(pp), null === (Ip = this.HP.WU.yU) || void 0 === Ip || null === (Sp = Ip.terrain) || void 0 === Sp || Sp.setChunkMeshLight(pp, (0 … [truncated]
+             mT && mT.isUpdatable() ? mT.updateDirectly(UT, 0) : TT.setVerticesData("aPackedLightLevels", UT, !0, 1), this.meshBuilder.releaseCpuCopies(TT), null === (MT = this.Rl.GB.NB) || void 0 === MT || null === (gT = MT.terrain) || void 0 === gT || gT.setChunkMeshLight(TT, (0 … [truncated]
```

#### 3756. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28262` → after: `L27940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27940) · [Before (L28262)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28262)

```diff
-         return this.HP.WU.ZU && !pp.Uy && !(0, xp.A)(pp.ey, pp.j, ip)
+         return this.Rl.GB.dZ && !TT.Rp && !(0, nT.v)(TT.zB, TT.j, UT)
```

#### 3757. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28265` → after: `L27943`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27943)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27943) · [Before (L28265)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28265)

```diff
-         this.providedLightEligible(pp, this.HP.WP.Cy(pp.i, pp.k)) && (pp.sU = !0, this.storeAndPropagateLight(pp, ip, cp, !0), pp.zU = !0)
+         this.providedLightEligible(TT, this.Rl.Nl.LB(TT.i, TT.k)) && (TT.tZ = !0, this.storeAndPropagateLight(TT, UT, mT, !0), TT.wZ = !0)
```

#### 3758. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28269-L28271` → after: `L27947-L27949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27947) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27947-L27949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27947-L27949) · [Before (L28269-L28271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28269-L28271)

```diff
-         const op = pp.ty,
-           Ip = pp.jy;
-         if ((0, Sp.u)(pp, ip, cp), !pp.Uy) {
+         const zT = TT.mB,
+           MT = TT.gB;
+         if ((0, gT.o)(TT, UT, mT), !TT.Rp) {
```

#### 3759. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28275` → after: `L27953`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27953) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27953)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27953) · [Before (L28275)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28275)

```diff
-             const [cp, op, Ip] = xp.h[ip], Yp = pp.My.get(cp, op, Ip);
+             const [mT, zT, MT] = nT.e[UT], kT = TT.lB.get(mT, zT, MT);
```

#### 3760. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28278-L28279` → after: `L27956-L27957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27956) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27956-L27957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27956-L27957) · [Before (L28278-L28279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28278-L28279)

```diff
-             Yp.Yw > 0 && (Yp.CU ? this.HP.WP.EU(Yp) : Dp = !0);
-             const Ap = !Op && Yp.zU;
+             kT.CZ > 0 && (kT.kZ ? this.Rl.Nl.jZ(kT) : jT = !0);
+             const lT = !WT && kT.wZ;
```

#### 3761. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28287` → after: `L27965`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27965) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27965)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27965) · [Before (L28287)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28287)

```diff
-               cp && (Op || this.invalidateProvidedLightFrom(pp, cp), cp.Yw > 0 && (cp.CU = !0, pp.DU && (cp.DU = !0), this.HP.WP.EU(cp, pp.DU)))
+               mT && (WT || this.invalidateProvidedLightFrom(TT, mT), mT.CZ > 0 && (mT.kZ = !0, TT.CB && (mT.CB = !0), this.Rl.Nl.jZ(mT, TT.CB)))
```

#### 3762. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28291-L28292` → after: `L27969-L27970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27969-L27970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27969-L27970) · [Before (L28291-L28292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28291-L28292)

```diff
-         const Lp = (0, xp.H)(pp.size, xp.j, op, Ip, ip, cp);
-         this.requeueSkySeedReaders(pp, Lp, !Op, !pp.CU), op && (0, Sp.w)(op), this.HP.FU.gU(pp)
+         const HT = (0, nT.A)(TT.size, nT.i, zT, MT, UT, mT);
+         this.requeueSkySeedReaders(TT, HT, !WT, !TT.kZ), zT && (0, gT.r)(zT), this.Rl.eZ.YZ(TT)
```

#### 3763. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28295` → after: `L27973`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27973) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27973)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27973) · [Before (L28295)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28295)

```diff
-         ip.zU = !1, pp.sU || (ip.sU = !1)
+         UT.wZ = !1, TT.tZ || (UT.tZ = !1)
```

#### 3764. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28301-L28302` → after: `L27979-L27980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27979-L27980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27979-L27980) · [Before (L28301-L28302)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28301-L28302)

```diff
-               const Op = ip >> 3 * (Ip + 1) + cp + 1 & 1 ? pp.My.get(Ip, -1, cp) : null;
-               null !== Op && void 0 !== Op && Op.zU && this.invalidateProvidedLightFrom(pp, Op)
+               const WT = UT >> 3 * (MT + 1) + mT + 1 & 1 ? TT.lB.get(MT, -1, mT) : null;
+               null !== WT && void 0 !== WT && WT.wZ && this.invalidateProvidedLightFrom(TT, WT)
```

#### 3765. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28305` → after: `L27983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27983) · [Before (L28305)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28305)

```diff
-         if (op && (ip = xp.e), ip)
+         if (zT && (UT = nT.b), UT)
```

#### 3766. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28311-L28312` → after: `L27989-L27990`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27989-L27990)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27989-L27990) · [Before (L28311-L28312)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28311-L28312)

```diff
-                 const op = pp.My.get(cp, -1, Op);
-                 op && 0 !== op.Yw && !op.CU && (op.SU ? this.skySeedRecheck.add(op) : this.skySeedStale(op, pp) && (op.CU = !0, this.HP.WP.EU(op)))
+                 const zT = TT.lB.get(mT, -1, WT);
+                 zT && 0 !== zT.CZ && !zT.kZ && (zT.FB ? this.skySeedRecheck.add(zT) : this.skySeedStale(zT, TT) && (zT.kZ = !0, this.Rl.Nl.jZ(zT)))
```

#### 3767. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28321` → after: `L27999`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R27999) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L27999)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L27999) · [Before (L28321)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28321)

```diff
-         this.skySeedRecheck.delete(pp), ip && (this.checkHeldSkySeedReaders(pp), cp && this.skySeedStale(pp, null) && (pp.CU = !0, this.HP.WP.EU(pp)))
+         this.skySeedRecheck.delete(TT), UT && (this.checkHeldSkySeedReaders(TT), mT && this.skySeedStale(TT, null) && (TT.kZ = !0, this.Rl.Nl.jZ(TT)))
```

#### 3768. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28324` → after: `L28002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L28002) · [Before (L28324)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28324)

```diff
-         this.requeueSkySeedReaders(pp, xp.e, !1, !pp.CU)
+         this.requeueSkySeedReaders(TT, nT.b, !1, !TT.kZ)
```

#### 3769. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28327-L28328` → after: `L28005-L28006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28005) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28005-L28006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L28005-L28006) · [Before (L28327-L28328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28327-L28328)

```diff
-         const cp = pp.ty;
-         if (!cp || pp.Uy) return !1;
+         const mT = TT.mB;
+         if (!mT || TT.Rp) return !1;
```

#### 3770. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28330` → after: `L28008`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28008) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28008)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L28008) · [Before (L28330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28330)

```diff
-         if (void 0 === Op) return !pp.zU;
+         if (void 0 === WT) return !TT.wZ;
```

#### 3771. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28336-L28337` → after: `L28014-L28015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28014-L28015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L28014-L28015) · [Before (L28336-L28337)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28336-L28337)

```diff
-             const Lp = pp.My.get(Sp, 1, cp);
-             if ((!ip || Lp === ip) && (0, xp.E)(Op, null !== (Ip = null === Lp || void 0 === Lp ? void 0 : Lp.ty) && void 0 !== Ip ? Ip : null, !(null === Lp || void 0 === Lp || !Lp.jy), Sp, cp, op, xp.j, 255)) return !0
+             const HT = TT.lB.get(gT, 1, mT);
+             if ((!UT || HT === UT) && (0, nT.y)(WT, null !== (MT = null === HT || void 0 === HT ? void 0 : HT.mB) && void 0 !== MT ? MT : null, !(null === HT || void 0 === HT || !HT.gB), gT, mT, zT, nT.i, 255)) return !0
```

#### 3772. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28347` → after: `L28025`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28025) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28025)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L28025) · [Before (L28347)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28347)

```diff
-         const cp = null !== (pp = null === (ip = this.busynessTracker) || void 0 === ip ? void 0 : ip.sample()) && void 0 !== pp ? pp : null,
+         const mT = null !== (TT = null === (UT = this.busynessTracker) || void 0 === UT ? void 0 : UT.sample()) && void 0 !== TT ? TT : null,
```

#### 3773. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28377` → after: `L28055`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28055) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28055)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L28055) · [Before (L28377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28377)

```diff
-         return this.queueBudget.TA(this.liveWorkerCount)
+         return this.queueBudget.fl(this.liveWorkerCount)
```

#### 3774. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28380-L28382` → after: `L28058-L28060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28058) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28058-L28060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L28058-L28060) · [Before (L28380-L28382)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28380-L28382)

```diff
-         this.HP.WP.Aw.qy.forEach((pp => {
-           const ip = this.HP.WP.XU.lU(pp[0], pp[1], pp[2]);
-           ip && ip.rU.length > 0 && (this.disposeChunkMeshes(ip), this.chunksToRemeshOnRestore.add(ip))
+         this.Rl.Nl.KZ.jB.forEach((TT => {
+           const UT = this.Rl.Nl.lZ.LZ(TT[0], TT[1], TT[2]);
+           UT && UT.xZ.length > 0 && (this.disposeChunkMeshes(UT), this.chunksToRemeshOnRestore.add(UT))
```

#### 3775. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28387` → after: `L28065`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28065) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28065)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L28065) · [Before (L28387)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28387)

```diff
-         this.chunksToRemeshOnRestore.clear(), this.requeueKnownChunks((ip => !(!pp.has(ip) && 0 === ip.rU.length) && (this.retryDroppedChunk(ip), !0)), !0)
+         this.chunksToRemeshOnRestore.clear(), this.requeueKnownChunks((UT => !(!TT.has(UT) && 0 === UT.xZ.length) && (this.retryDroppedChunk(UT), !0)), !0)
```

#### 3776. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28390` → after: `L28068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L28068) · [Before (L28390)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28390)

```diff
-         this.requeueKnownChunks((pp => 0 !== pp.rU.length && (this.retryDroppedChunk(pp), !0)), !0)
+         this.requeueKnownChunks((TT => 0 !== TT.xZ.length && (this.retryDroppedChunk(TT), !0)), !0)
```

#### 3777. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28400` → after: `L28078`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28078)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L28078) · [Before (L28400)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28400)

```diff
-         this.requeueKnownChunks((pp => !pp.hU && pp.Yw > 0), !1)
+         this.requeueKnownChunks((TT => !TT.iZ && TT.CZ > 0), !1)
```

#### 3778. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28403-L28405` → after: `L28081-L28083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28081) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28081-L28083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L28081-L28083) · [Before (L28403-L28405)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28403-L28405)

```diff
-         this.HP.WP.Aw.qy.forEach((cp => {
-           const Op = this.HP.WP.XU.lU(cp[0], cp[1], cp[2]);
-           Op && pp(Op) && (Op.CU = !0, ip && (Op.JU = !0), this.HP.WP.EU(Op))
+         this.Rl.Nl.KZ.jB.forEach((mT => {
+           const WT = this.Rl.Nl.lZ.LZ(mT[0], mT[1], mT[2]);
+           WT && TT(WT) && (WT.kZ = !0, UT && (WT.BZ = !0), this.Rl.Nl.jZ(WT))
```

#### 3779. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28416` → after: `L28094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L28094) · [Before (L28416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28416)

```diff
-   37747: (pp, ip, cp) => {
+   37637: (TT, UT, mT) => {
```

#### 3780. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28419` → after: `L28097`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28097) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28097)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L28097) · [Before (L28419)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28419)

```diff
-       f: () => Ip
+       h: () => MT
```

#### 3781. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28433` → after: `L28111`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28111) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28111)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L28111) · [Before (L28433)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28433)

```diff
-   37745: (pp, ip, cp) => {
+   37628: (TT, UT, mT) => {
```

#### 3782. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28435-L28438` → after: `L28113-L28116`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28113) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28113-L28116)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L28113-L28116) · [Before (L28435-L28438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28435-L28438)

```diff
-       b: () => Sp,
-       d: () => Op,
-       h: () => op,
-       i: () => Ip
+       c: () => gT,
+       f: () => WT,
+       i: () => zT,
+       l: () => MT
```

#### 3783. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28441` → after: `L28119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L28119) · [Before (L28441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28441)

```diff
-       nc: 0,
+       am: 0,
```

#### 3784. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28459` → after: `L28137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L28137) · [Before (L28459)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28459)

```diff
-   37996: (pp, ip, cp) => {
+   37895: (TT, UT, mT) => {
```

#### 3785. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28462` → after: `L28140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L28140) · [Before (L28462)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28462)

```diff
-       h: () => Ip
+       e: () => MT
```

#### 3786. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28464` → after: `L28142`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28142) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28142)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L28142) · [Before (L28464)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28464)

```diff
-     var Op = cp(37713);
+     var WT = mT(37602);
```

#### 3787. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28467-L28468` → after: `L28145-L28146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28145) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28145-L28146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L28145-L28146) · [Before (L28467-L28468)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28467-L28468)

```diff
-       const cp = pp.ei,
-         op = pp.metadata[Op.C] * Math.max(Math.abs(cp.x), Math.abs(cp.y), Math.abs(cp.z)),
+       const mT = TT.gp,
+         zT = TT.metadata[WT.A] * Math.max(Math.abs(mT.x), Math.abs(mT.y), Math.abs(mT.z)),
```

#### 3788. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28480` → after: `L28158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L28158) · [Before (L28480)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28480)

```diff
-       return void 0 !== (null === (cp = pp.metadata) || void 0 === cp ? void 0 : cp[Op.C]) ? op(pp, ip) : (pp.computeWorldMatrix(), pp.isInFrustum(ip))
+       return void 0 !== (null === (mT = TT.metadata) || void 0 === mT ? void 0 : mT[WT.A]) ? zT(TT, UT) : (TT.computeWorldMatrix(), TT.isInFrustum(UT))
```

#### 3789. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28483` → after: `L28161`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28161) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28161)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L28161) · [Before (L28483)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28483)

```diff
-   37889: (pp, ip, cp) => {
+   37798: (TT, UT, mT) => {
```

#### 3790. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28487-L28488` → after: `L28165-L28166`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28165) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28165-L28166)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L28165-L28166) · [Before (L28487-L28488)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28487-L28488)

```diff
-       l: () => xp,
-       o: () => Lp
+       i: () => nT,
+       j: () => HT
```

#### 3791. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28507` → after: `L28185`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28185) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28185)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L28185) · [Before (L28507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28507)

```diff
-       return "function" === typeof pp && null !== (ip = pp[op]) && void 0 !== ip ? ip : null
+       return "function" === typeof TT && null !== (UT = TT[zT]) && void 0 !== UT ? UT : null
```

#### 3792. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28510` → after: `L28188`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28188) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28188)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L28188) · [Before (L28510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28510)

```diff
-   37729: (pp, ip, cp) => {
+   37622: (TT, UT, mT) => {
```

#### 3793. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28512` → after: `L28190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L28190) · [Before (L28512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28512)

```diff
-       b: () => Op
+       d: () => WT
```

#### 3794. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28558` → after: `L28236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L28236) · [Before (L28558)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28558)

```diff
-   38126: (pp, ip, cp) => {
+   38054: (TT, UT, mT) => {
```

#### 3795. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28562-L28567` → after: `L28240-L28245`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28240) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28240-L28245)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L28240-L28245) · [Before (L28562-L28567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28562-L28567)

```diff
-     var Op = cp(37313),
-       op = cp(38124),
-       Ip = cp(37683),
-       Sp = cp(37436),
-       xp = cp(37698),
-       Lp = cp(38109);
+     var WT = mT(37185),
+       zT = mT(38045),
+       MT = mT(37566),
+       gT = mT(37302),
+       nT = mT(37584),
+       HT = mT(38029);
```

#### 3796. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28569` → after: `L28247`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28247) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28247)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L28247) · [Before (L28569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28569)

```diff
-     var Dp = cp(37667);
+     var jT = mT(37552);
```

#### 3797. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28572` → after: `L28250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L28250) · [Before (L28572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28572)

```diff
-         super(pp, ip, cp), this.model = Op, this.owned = op, this.By = Sp, this.sideOrientation = void 0, this.MJ = {}, this._userInstancedBuffersStorage = void 0, this.Vl = !1, this.aop = null, this.instances = [], this._thinInstanceDataStorage = {
+         super(TT, UT, mT), this.model = WT, this.owned = zT, this.hZ = gT, this.sideOrientation = void 0, this.XV = {}, this._userInstancedBuffersStorage = void 0, this.RP = !1, this.czT = null, this.instances = [], this._thinInstanceDataStorage = {
```

#### 3798. `bundles/bloxd.io/chunks/js/77.js` (Changed code · before: `L28577` → after: `L28255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45R28255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/058c9f4e1b9c3d594eaf591327c888eaca6eb505...build/bloxd.io/yma3ej.f92ebd70#diff-085dda395c2abd0ffdc51a87cdc042523ba79312d3c126a91b7ad410dd53db45) · [After (L28255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/yma3ej.f92ebd70/bundles/bloxd.io/chunks/js/77.js#L28255) · [Before (L28577)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/058c9f4e1b9c3d594eaf591327c888eaca6eb505/bundles/bloxd.io/chunks/js/77.js#L28577)

```diff
-         }, this.Fip = !1, this.forcedInstanceCount = 0, this.isUnIndexed = !1, this.hasVertexAlpha = !1, this.applyFog = !0, this.useVertexColors = !0, this.sy = !1, this.receiveShadows = !1, this.skeleton = null, this.morphTargetManager = null, this.isBlocked = !1, this.geometry … [truncated]
+         }, this.sUT = !1, this.forcedInstanceCount = 0, this.isUnIndexed = !1, this.hasVertexAlpha = !1, this.applyFog = !0, this.useVertexColors = !0, this.dB = !1, this.receiveShadows = !1, this.skeleton = null, this.morphTargetManager = null, this.isBlocked = !1, this.geometry … [truncated]
```
