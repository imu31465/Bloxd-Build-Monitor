# Changed — Bundle Modifications Report (Part 054 / 141)

- **Updated at**: `2026-11-25T05:21 JST`
- **Part**: `54 / 141` (**396** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 053](part-053.md) · [Part 055 →](part-055.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/274.js` (yma3ej.f92ebd70 → 7zvlu.7df130a9 · continued)

- **File**: `bundles/bloxd.io/chunks/js/274.js` (671 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3)

#### 97. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1394-L1397` → after: `L1394-L1397`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1394) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1394-L1397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1394-L1397) · [Before (L1394-L1397)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1394-L1397)

```diff
-         TT.sunShadow && (MT = zT ? `${Nm(UT,!0,"lit"===mT)}${WT=UT,`@group(${WT.group}) @binding(${WT.entities}) var<storage, read> bloxdSpShadowEntities: array<u32>;\n@group(${WT.group}) @binding(${WT.entityGrids}) var<storage, read> bloxdSpShadowEntityGrids: array<u32>;\nfn blo … [truncated]
-           const WT = `@group(${TT}) @binding(${UT}) var bloxdSpShadowMask: texture_2d<f32>;\nvar<private> bloxdSpShadowPixel: vec2i;\n`;
-           return mT ? `${WT}var<private> bloxdSpShadowZ: f32;\nvar<private> bloxdSpShadowDz: vec2f;\n${om}fn bloxdSpMaskEdge() -> f32 {\n\tlet code = bloxdSpNormalCode(bloxdSpShadowNormal);\n\tlet tolerance = abs(bloxdSpShadowDz.x) + abs(bloxdSpShadowDz.y) + 1e-7;\n\tlet m = text … [truncated]
-         }(UT.group, DU.A, "maskEdge" === mT));
+         BB.sunShadow && (dB = nB ? `${xz(jB,!0,"lit"===zB)}${QB=jB,`@group(${QB.group}) @binding(${QB.entities}) var<storage, read> bloxdSpShadowEntities: array<u32>;\n@group(${QB.group}) @binding(${QB.entityGrids}) var<storage, read> bloxdSpShadowEntityGrids: array<u32>;\nfn blo … [truncated]
+           const QB = `@group(${BB}) @binding(${jB}) var bloxdSpShadowMask: texture_2d<f32>;\nvar<private> bloxdSpShadowPixel: vec2i;\n`;
+           return zB ? `${QB}var<private> bloxdSpShadowZ: f32;\nvar<private> bloxdSpShadowDz: vec2f;\n${bz}fn bloxdSpMaskEdge() -> f32 {\n\tlet code = bloxdSpNormalCode(bloxdSpShadowNormal);\n\tlet tolerance = abs(bloxdSpShadowDz.x) + abs(bloxdSpShadowDz.y) + 1e-7;\n\tlet m = text … [truncated]
+         }(jB.group, bj.y, "maskEdge" === zB));
```

#### 98. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1399-L1401` → after: `L1399-L1401`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1399-L1401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1399-L1401) · [Before (L1399-L1401)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1399-L1401)

```diff
-           shadowDirection: `${DU.p}.shadowDirection`,
-           renderOffset: `${DU.p}.renderOffset`,
-           eyePosition: `${DU.p}.eyePosition`
+           shadowDirection: `${bj.o}.shadowDirection`,
+           renderOffset: `${bj.o}.renderOffset`,
+           eyePosition: `${bj.o}.eyePosition`
```

#### 99. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1403` → after: `L1403`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1403) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1403) · [Before (L1403)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1403)

```diff
-         return `${Gm(UT)}${MT}${function(TT){const[UT,mT,WT]=Sm.o;return`@group(${TT.group}) @binding(${TT.volume}) var bloxdSpShadowVolume: texture_3d<f32>;\n@group(${TT.group}) @binding(${TT.sampler}) var bloxdSpShadowVolumeSampler: sampler;\nfn bloxdSpVolumeAt(p: vec3f, offset … [truncated]
+         return `${wz(jB)}${dB}${function(BB){const[jB,zB,QB]=lz.p;return`@group(${BB.group}) @binding(${BB.volume}) var bloxdSpShadowVolume: texture_3d<f32>;\n@group(${BB.group}) @binding(${BB.sampler}) var bloxdSpShadowVolumeSampler: sampler;\nfn bloxdSpVolumeAt(p: vec3f, offset … [truncated]
```

#### 100. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1406` → after: `L1406`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1406) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1406) · [Before (L1406)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1406)

```diff
-       return `${TT.sunShadow?"fn bloxdShadow() -> f32 {\n\treturn 1.0;\n}\n":""}${TT.airShadow?"fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\treturn 1.0;\n}\n":""}`
+       return `${BB.sunShadow?"fn bloxdShadow() -> f32 {\n\treturn 1.0;\n}\n":""}${BB.airShadow?"fn bloxdAirShadow(bloxdSpT: f32) -> f32 {\n\treturn 1.0;\n}\n":""}`
```

#### 101. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1415` → after: `L1415`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1415) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1415) · [Before (L1415)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1415)

```diff
-       } : null, `\n\tbloxdSpShadowPosition = ${gT};\n${nT?`\tbloxdSpShadowNormal = normalize(${nT.normal});\n\tbloxdSpShadowEmissive = (${nT.flags} & ${aU.c.emissive}u) != 0u;\n\tbloxdSpShadowFirstPerson = (${nT.flags} & ${aU.f}u) != 0u;\n`:""}`);
+       } : null, `\n\tbloxdSpShadowPosition = ${IB};\n${NB?`\tbloxdSpShadowNormal = normalize(${NB.normal});\n\tbloxdSpShadowEmissive = (${NB.flags} & ${Dj.e.emissive}u) != 0u;\n\tbloxdSpShadowFirstPerson = (${NB.flags} & ${Dj.i}u) != 0u;\n`:""}`);
```

#### 102. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1417` → after: `L1417`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1417) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1417) · [Before (L1417)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1417)

```diff
-       return TT.sunShadow && ("mask" === zT || "maskEdge" === zT) ? `${MT}${HT="fragmentInputs.position",kT="maskEdge"===zT,`\n\tbloxdSpShadowPixel = vec2i(${HT}.xy);\n${kT?`\tbloxdSpShadowZ = ${HT}.z;\n\tbloxdSpShadowDz = vec2f(dpdx(${HT}.z), dpdy(${HT}.z));\n`:""}`}` : MT;
+       return BB.sunShadow && ("mask" === nB || "maskEdge" === nB) ? `${dB}${uB="fragmentInputs.position",UB="maskEdge"===nB,`\n\tbloxdSpShadowPixel = vec2i(${uB}.xy);\n${UB?`\tbloxdSpShadowZ = ${uB}.z;\n\tbloxdSpShadowDz = vec2f(dpdx(${uB}.z), dpdy(${uB}.z));\n`:""}`}` : dB;
```

#### 103. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1422` → after: `L1422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1422) · [Before (L1422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1422)

```diff
-       LW = `@group(${DU.i}) @binding(${DU.E}) var<storage, read> ${lW}: array<u32>;\n`;
+       pQ = `@group(${bj.h}) @binding(${bj.C}) var<storage, read> ${aQ}: array<u32>;\n`;
```

#### 104. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1425` → after: `L1425`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1425) · [Before (L1425)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1425)

```diff
-       return `\tvertexOutputs.vPackTexture = ${lW}[min(u32(${TT}), arrayLength(&${lW}) - 1u)];\n`
+       return `\tvertexOutputs.vPackTexture = ${aQ}[min(u32(${BB}), arrayLength(&${aQ}) - 1u)];\n`
```

#### 105. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1439` → after: `L1439`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1439) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1439) · [Before (L1439)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1439)

```diff
-         } = TT, zT = `textureDimensions(${UT}, bloxdSpLevel)`, MT = mT ? `max(vec2u(vec2f(${zT}) / ${mT}), vec2u(1u))` : zT, gT = mT ? `fn bloxdSpOwnTexel(bloxdSpCellIndex: f32, bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${MT};\n\tlet bloxdSpIndex = u32( … [truncated]
+         } = BB, nB = `textureDimensions(${jB}, bloxdSpLevel)`, dB = zB ? `max(vec2u(vec2f(${nB}) / ${zB}), vec2u(1u))` : nB, IB = zB ? `fn bloxdSpOwnTexel(bloxdSpCellIndex: f32, bloxdSpUv: vec2f, bloxdSpLevel: u32) -> vec4f {\n\tlet bloxdSpSize = ${dB};\n\tlet bloxdSpIndex = u32( … [truncated]
```

#### 106. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1442` → after: `L1442`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1442) · [Before (L1442)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1442)

```diff
-           if (1 === WT.length) nT = `\treturn bloxdSpOwnTexel(${WT[0]}, bloxdSpUv, bloxdSpLevel);\n`;
+           if (1 === QB.length) NB = `\treturn bloxdSpOwnTexel(${QB[0]}, bloxdSpUv, bloxdSpLevel);\n`;
```

#### 107. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1445-L1446` → after: `L1445-L1446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1445) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1445-L1446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1445-L1446) · [Before (L1445-L1446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1445-L1446)

```diff
-             nT = `\tvar bloxdSpColour = bloxdSpOwnTexel(${WT[TT]}, bloxdSpUv, bloxdSpLevel);\n\tbloxdSpColour = vec4f(bloxdSpColour.rgb * bloxdSpColour.a, bloxdSpColour.a);\n`;
-             for (let UT = TT - 1; UT >= 0; UT--) nT += `\t{\n\t\tlet bloxdSpLayer = bloxdSpOwnTexel(${WT[UT]}, bloxdSpUv, bloxdSpLevel);\n\t\tbloxdSpColour = vec4f(mix(bloxdSpColour.rgb, bloxdSpLayer.rgb, bloxdSpLayer.a), bloxdSpLayer.a + bloxdSpColour.a * (1.0 - bloxdSpLayer.a)) … [truncated]
+             NB = `\tvar bloxdSpColour = bloxdSpOwnTexel(${QB[BB]}, bloxdSpUv, bloxdSpLevel);\n\tbloxdSpColour = vec4f(bloxdSpColour.rgb * bloxdSpColour.a, bloxdSpColour.a);\n`;
+             for (let jB = BB - 1; jB >= 0; jB--) NB += `\t{\n\t\tlet bloxdSpLayer = bloxdSpOwnTexel(${QB[jB]}, bloxdSpUv, bloxdSpLevel);\n\t\tbloxdSpColour = vec4f(mix(bloxdSpColour.rgb, bloxdSpLayer.rgb, bloxdSpLayer.a), bloxdSpLayer.a + bloxdSpColour.a * (1.0 - bloxdSpLayer.a)) … [truncated]
```

#### 108. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1450` → after: `L1450`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1450) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1450) · [Before (L1450)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1450)

```diff
-         return `${TT.id?`var<private> ${Rm}: u32;\n`:""}${gT}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\tlet bloxdSpLevel = ${TW(TT)};\n\treturn ${MT};\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId  … [truncated]
+         return `${BB.id?`var<private> ${Rz}: u32;\n`:""}${IB}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\tlet bloxdSpLevel = ${Oz(BB)};\n\treturn ${dB};\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: vec2f, bloxdSpMipLevel: f32) -> vec4f {\n\tif (bloxdSpTextureId  … [truncated]
```

#### 109. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1454-L1455` → after: `L1454-L1455`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1454) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1454-L1455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1454-L1455) · [Before (L1454-L1455)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1454-L1455)

```diff
-           const mT = TT > 0 ? `bloxdSpLayer - ${UT.layers*TT}u` : "bloxdSpLayer";
-           return `return textureSampleLevel(textureAtlas${TT}, ${UT.sampler}, bloxdSpTurned, ${mT}, round(bloxdSpMipLevel));`
+           const zB = BB > 0 ? `bloxdSpLayer - ${jB.layers*BB}u` : "bloxdSpLayer";
+           return `return textureSampleLevel(textureAtlas${BB}, ${jB.sampler}, bloxdSpTurned, ${zB}, round(bloxdSpMipLevel));`
```

#### 110. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1458-L1460` → after: `L1458-L1460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1458) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1458-L1460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1458-L1460) · [Before (L1458-L1460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1458-L1460)

```diff
-       for (let MT = 0; MT < UT.count - 1; MT++) WT += `\tif (bloxdSpLayer < ${UT.layers*(MT+1)}u) {\n\t\t${mT(MT)}\n\t}\n`;
-       const zT = UT.frame ? `${UT.frame("f32(bloxdSpTextureId - 1u)","let bloxdSpFrame = ")}\tlet bloxdSpLayer = u32(round(bloxdSpFrame));\n` : "\tlet bloxdSpLayer = bloxdSpTextureId - 1u;\n";
-       return `var<private> ${jW}: u32;\n${LW}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn textureDimensions(textureAtlas0, u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(textureAtlas0) - 1u))));\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: ve … [truncated]
+       for (let dB = 0; dB < jB.count - 1; dB++) QB += `\tif (bloxdSpLayer < ${jB.layers*(dB+1)}u) {\n\t\t${zB(dB)}\n\t}\n`;
+       const nB = jB.frame ? `${jB.frame("f32(bloxdSpTextureId - 1u)","let bloxdSpFrame = ")}\tlet bloxdSpLayer = u32(round(bloxdSpFrame));\n` : "\tlet bloxdSpLayer = bloxdSpTextureId - 1u;\n";
+       return `var<private> ${UQ}: u32;\n${pQ}fn bloxdTextureSize(bloxdSpMipLevel: f32) -> vec2u {\n\treturn textureDimensions(textureAtlas0, u32(clamp(round(bloxdSpMipLevel), 0.0, f32(textureNumLevels(textureAtlas0) - 1u))));\n}\nfn bloxdTexel(bloxdSpTextureId: u32, bloxdSpUv: ve … [truncated]
```

#### 111. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1470` → after: `L1470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1470) · [Before (L1470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1470)

```diff
-       return TT.vertex ? `\n\t{\n\t\tlet bloxdSpVertexIn = BloxdVertexIn(worldPos.xyz, vertexOutputs.vNormalW, ${UT.vertexLocalPosition}, ${mW(UT.vertexFlags)});\n\t\tlet bloxdSpVertex = ${TT.vertex}(bloxdSpVertexIn);\n\t\tworldPos = vec4f(bloxdSpVertex.position, worldPos.w);\n\t … [truncated]
+       return BB.vertex ? `\n\t{\n\t\tlet bloxdSpVertexIn = BloxdVertexIn(worldPos.xyz, vertexOutputs.vNormalW, ${jB.vertexLocalPosition}, ${jQ(jB.vertexFlags)});\n\t\tlet bloxdSpVertex = ${BB.vertex}(bloxdSpVertexIn);\n\t\tworldPos = vec4f(bloxdSpVertex.position, worldPos.w);\n\t … [truncated]
```

#### 112. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1475` → after: `L1475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1475) · [Before (L1475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1475)

```diff
-       const MT = (TT, UT) => `\n\tlet bloxdSpTexelUV = ${TT};\n\tlet bloxdSpDdx = dpdx(bloxdSpTexelUV);\n\tlet bloxdSpDdy = dpdy(bloxdSpTexelUV);\n\tlet bloxdSpLod = 0.5 * log2(max(max(dot(bloxdSpDdx, bloxdSpDdx), dot(bloxdSpDdy, bloxdSpDdy)), 1e-10));\n\tlet bloxdSpMipLevel = cl … [truncated]
+       const dB = (BB, jB) => `\n\tlet bloxdSpTexelUV = ${BB};\n\tlet bloxdSpDdx = dpdx(bloxdSpTexelUV);\n\tlet bloxdSpDdy = dpdy(bloxdSpTexelUV);\n\tlet bloxdSpLod = 0.5 * log2(max(max(dot(bloxdSpDdx, bloxdSpDdx), dot(bloxdSpDdy, bloxdSpDdy)), 1e-10));\n\tlet bloxdSpMipLevel = cl … [truncated]
```

#### 113. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1478-L1479` → after: `L1478-L1479`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1478) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1478-L1479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1478-L1479) · [Before (L1478-L1479)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1478-L1479)

```diff
-       const HT = WT && BW(WT) ? WT : null,
-         kT = WT && !BW(WT) ? WT : null;
+       const uB = QB && sQ(QB) ? QB : null,
+         UB = QB && !sQ(QB) ? QB : null;
```

#### 114. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1481-L1482` → after: `L1481-L1482`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1481) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1481-L1482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1481-L1482) · [Before (L1481-L1482)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1481-L1482)

```diff
-         gT = `${HT.id?`\n\tlet bloxdSpTexture = ${HT.id};\n\t${Rm} = bloxdSpTexture & 0xffffu;`:""}\n\tlet bloxdSpUv = ${HT.uv};${MT(function(TT,UT){var mT;return`${null!==(mT=TT.levelUv)&&void 0!==mT?mT:TT.cells?`${UT} / ${TT.cells}`:UT} * vec2f(textureDimensions(${TT.texture})) … [truncated]
-       } else kT && (gT = `\n\tlet bloxdSpTexture = fragmentInputs.vPackTexture;\n\t${jW} = bloxdSpTexture >> 16u;${MT(`fragmentInputs.vMainUV1 * ${(0,NU.nb)(kT.width)}`,"textureAtlas0")}`, nT = `bloxdSpTexture & 0xffffu, ${jW}, fragmentInputs.vMainUV1, bloxdSpMipLevel`);
+         IB = `${uB.id?`\n\tlet bloxdSpTexture = ${uB.id};\n\t${Rz} = bloxdSpTexture & 0xffffu;`:""}\n\tlet bloxdSpUv = ${uB.uv};${dB(function(BB,jB){var zB;return`${null!==(zB=BB.levelUv)&&void 0!==zB?zB:BB.cells?`${jB} / ${BB.cells}`:jB} * vec2f(textureDimensions(${BB.texture})) … [truncated]
+       } else UB && (IB = `\n\tlet bloxdSpTexture = fragmentInputs.vPackTexture;\n\t${UQ} = bloxdSpTexture >> 16u;${dB(`fragmentInputs.vMainUV1 * ${(0,Kj.jb)(UB.width)}`,"textureAtlas0")}`, NB = `bloxdSpTexture & 0xffffu, ${UQ}, fragmentInputs.vMainUV1, bloxdSpMipLevel`);
```

#### 115. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1485-L1487` → after: `L1485-L1487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1485) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1485-L1487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1485-L1487) · [Before (L1485-L1487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1485-L1487)

```diff
-         LT = "bloxdDefaultSurface" !== TT.surface || jT ? `\n\tbaseColor = vec4f(${lT}, baseColor.a);` : "",
-         pT = cW(TT, UT, mT) ? `\n\t${zT.alphaOut} = bloxdSpSurface.alpha;` : "";
-       return `${gT}\n\tlet bloxdSpSurfaceIn = BloxdSurfaceIn(baseColor.rgb, ${zT.alpha}, ${zT.enchantTier}, ${zT.enchantColour}, ${zT.enchantSpeed}, ${null!==jT&&void 0!==jT?jT:"vec4f(0.0)"}, fragmentInputs.vPositionW, ${zT.normal}, ${zT.localPosition}, ${mW(zT.flags)}, ${nT});\n … [truncated]
+         rB = "bloxdDefaultSurface" !== BB.surface || aB ? `\n\tbaseColor = vec4f(${pB}, baseColor.a);` : "",
+         sB = mQ(BB, jB, zB) ? `\n\t${nB.alphaOut} = bloxdSpSurface.alpha;` : "";
+       return `${IB}\n\tlet bloxdSpSurfaceIn = BloxdSurfaceIn(baseColor.rgb, ${nB.alpha}, ${nB.enchantTier}, ${nB.enchantColour}, ${nB.enchantSpeed}, ${null!==aB&&void 0!==aB?aB:"vec4f(0.0)"}, fragmentInputs.vPositionW, ${nB.normal}, ${nB.localPosition}, ${jQ(nB.flags)}, ${NB});\n … [truncated]
```

#### 116. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1493` → after: `L1493`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1493) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1493) · [Before (L1493)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1493)

```diff
-       const zT = UT ? `${NU.l}.rgb, ${NU.l}.w, uniforms.uAmbientLightColour, uniforms.uSkyLightColour, ${NU.h}` : "vec3f(0.0), 1.0, vec3f(1.0), vec3f(1.0), vec3f(0.0)",
+       const nB = jB ? `${Kj.m}.rgb, ${Kj.m}.w, uniforms.uAmbientLightColour, uniforms.uSkyLightColour, ${Kj.j}` : "vec3f(0.0), 1.0, vec3f(1.0), vec3f(1.0), vec3f(0.0)",
```

#### 117. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1503` → after: `L1503`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1503) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1503) · [Before (L1503)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1503)

```diff
-       return `\tvar ${qW} = BloxdLightIn(vec3f(0.0), ${mT?MT:"0.0"}, ${gT}, ${nT}, ${HT}, ${zT}, ${kT}, ${jT}, fragmentInputs.vPositionW, ${lT}, bloxdSpSurfaceIn.localPosition, bloxdSpSurfaceIn.flags, bloxdSpSurfaceIn.textureId, bloxdSpSurfaceIn.textureRotation, bloxdSpSurfaceIn. … [truncated]
+       return `\tvar ${GQ} = BloxdLightIn(vec3f(0.0), ${zB?dB:"0.0"}, ${IB}, ${NB}, ${uB}, ${nB}, ${UB}, ${aB}, fragmentInputs.vPositionW, ${pB}, bloxdSpSurfaceIn.localPosition, bloxdSpSurfaceIn.flags, bloxdSpSurfaceIn.textureId, bloxdSpSurfaceIn.textureRotation, bloxdSpSurfaceIn. … [truncated]
```

#### 118. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1507` → after: `L1507`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1507) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1507) · [Before (L1507)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1507)

```diff
-       return TT.light ? `\n\t{\n\t\tlet bloxdSpLight = ${TT.light}(bloxdSpSurface, ${qW});\n\t\tcolor = vec4f(bloxdSpLight.colour, color.a);\n\t}\n` : ""
+       return BB.light ? `\n\t{\n\t\tlet bloxdSpLight = ${BB.light}(bloxdSpSurface, ${GQ});\n\t\tcolor = vec4f(bloxdSpLight.colour, color.a);\n\t}\n` : ""
```

#### 119. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1535` → after: `L1535`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1535) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1535) · [Before (L1535)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1535)

```diff
-       return !(null === (UT = (0, oU.d)(TT)) || void 0 === UT || !UT.sceneDepth)
+       return !(null === (jB = (0, vj.f)(BB)) || void 0 === jB || !jB.sceneDepth)
```

#### 120. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1539` → after: `L1539`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1539) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1539) · [Before (L1539)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1539)

```diff
-       const UT = (0, oU.d)(TT);
+       const jB = (0, vj.f)(BB);
```

#### 121. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1551` → after: `L1551`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1551) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1551) · [Before (L1551)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1551)

```diff
-           return (0, oU.b)(TT.packVariant, TT.liquid ? "liquid" : "terrain")
+           return (0, vj.e)(BB.packVariant, BB.liquid ? "liquid" : "terrain")
```

#### 122. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1559` → after: `L1559`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1559) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1559) · [Before (L1559)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1559)

```diff
-       kT && (UT = tW(UT, "\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz … [truncated]
+       UB && (jB = oQ(jB, "\tlet worldPos = vec4f(vertexInputs.position + chunk.translation, 1.0);\n\tvertexOutputs.position = liteWorldLayer(scene.viewProjection * worldPos);\n\tvertexOutputs.vPositionW = worldPos.xyz;\n\tvertexOutputs.vNormalW = normalize(vertexInputs.normal.xyz … [truncated]
```

#### 123. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1563` → after: `L1563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1563) · [Before (L1563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1563)

```diff
-           width: TT.A4,
+           width: BB.xR,
```

#### 124. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1565` → after: `L1565`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1565) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1565) · [Before (L1565)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1565)

```diff
-           frame: TT.animated ? mT : null
+           frame: BB.animated ? zB : null
```

#### 125. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1567-L1568` → after: `L1567-L1568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1567-L1568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1567-L1568) · [Before (L1567-L1568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1567-L1568)

```diff
-         lT = `${MT.sceneDepth?"\n\tbloxdSpPixel = vec2i(fragmentInputs.position.xy);\n\tbloxdSpPositionW = fragmentInputs.vPositionW;\n":""}${kW(MT,nT,JW.normal,JW.flags,HT)}${fW(gT,MT.strict,MT.program,jT,JW)}`;
-       lT && (UT = tW(UT, OW, `${OW.slice(0,-1)}${lT}`, "surface"));
+         pB = `${dB.sceneDepth?"\n\tbloxdSpPixel = vec2i(fragmentInputs.position.xy);\n\tbloxdSpPositionW = fragmentInputs.vPositionW;\n":""}${uQ(dB,NB,EQ.normal,EQ.flags,uB)}${kQ(IB,dB.strict,dB.program,aB,EQ)}`;
+       pB && (jB = oQ(jB, tQ, `${tQ.slice(0,-1)}${pB}`, "surface"));
```

#### 126. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1570` → after: `L1570`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1570) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1570) · [Before (L1570)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1570)

```diff
-       return LT && (UT = tW(UT, eW, `${iW(gT,TT.lighting,TT.dirLightCount>0,JW)}${eW}`, "light input"), UT = tW(UT, YW, `${LT.slice(1)}${YW}`, "light")), `${(0,DU.H)()}${MT.sceneDepth?`@group(${DU.i}) @binding(${DU.u}) var bloxdSpSceneDepth: texture_2d<f32>;\nvar<private> bloxdSp … [truncated]
+       return rB && (jB = oQ(jB, SQ, `${LQ(IB,BB.lighting,BB.dirLightCount>0,EQ)}${SQ}`, "light input"), jB = oQ(jB, MQ, `${rB.slice(1)}${MQ}`, "light")), `${(0,bj.I)()}${dB.sceneDepth?`@group(${bj.h}) @binding(${bj.u}) var bloxdSpSceneDepth: texture_2d<f32>;\nvar<private> bloxdSp … [truncated]
```

#### 127. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1572` → after: `L1572`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1572) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1572) · [Before (L1572)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1572)

```diff
-     const yW = OT.e.WGSL;
+     const DQ = SB.c.WGSL;
```

#### 128. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1578-L1581` → after: `L1578-L1581`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1578) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1578-L1581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1578-L1581) · [Before (L1578-L1581)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1578-L1581)

```diff
-         jzT: 0,
-         lzT: 4,
-         LzT: 8,
-         pzT: 12,
+         xQB: 0,
+         KQB: 4,
+         CQB: 8,
+         cQB: 12,
```

#### 129. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1613-L1614` → after: `L1613-L1614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1613) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1613-L1614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1613-L1614) · [Before (L1613-L1614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1613-L1614)

```diff
-       EW = `\nfn packedNormal(dir: u32) -> vec4f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\treturn vec4f(select(0.0, s, axis == 0u), select(0.0, s, axis == 1u), select(0.0, s, axis == 2u), 0.0);\n}\nfn packedUv(p: vec3f, dir: u32, corner: u32) -> vec2f {\ … [truncated]
-       hW = `\n@group(1) @binding(2) var<storage, read> quads: array<u32>;\n// A quad's light: its four slots' packed values as u16, two a word, the lower slot in the low half (liteTerrainArena.ts)\n@group(1) @binding(3) var<storage, read> quadLight: array<u32>;\nfn quadSlotLight( … [truncated]
+       KQ = `\nfn packedNormal(dir: u32) -> vec4f {\n\tlet axis = dir >> 1u;\n\tlet s = 1.0 - 2.0 * f32(dir & 1u);\n\treturn vec4f(select(0.0, s, axis == 0u), select(0.0, s, axis == 1u), select(0.0, s, axis == 2u), 0.0);\n}\nfn packedUv(p: vec3f, dir: u32, corner: u32) -> vec2f {\ … [truncated]
+       CQ = `\n@group(1) @binding(2) var<storage, read> quads: array<u32>;\n// A quad's light: its four slots' packed values as u16, two a word, the lower slot in the low half (liteTerrainArena.ts)\n@group(1) @binding(3) var<storage, read> quadLight: array<u32>;\nfn quadSlotLight( … [truncated]
```

#### 130. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1616` → after: `L1616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1616) · [Before (L1616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1616)

```diff
-       Cl: "material.anim.x",
+       vp: "material.anim.x",
```

#### 131. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1619` → after: `L1619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1619) · [Before (L1619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1619)

```diff
-       perTexture: TT => `animDataPerTex[${TT}]`
+       perTexture: BB => `animDataPerTex[${BB}]`
```

#### 132. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1624` → after: `L1624`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1624) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1624) · [Before (L1624)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1624)

```diff
-       return `\n\tlet atlasIdxIn = ${TT};\n\tlet animTick = ${mT.Cl};\n\tlet animTickStride = ${mT.stride};\n\tlet numAnimTextures = ${mT.count};\n\t${(0,eT.f)(OT.e.WGSL,mT.perTexture)}\n\t${UT}animLayer;\n`
+       return `\n\tlet atlasIdxIn = ${BB};\n\tlet animTick = ${zB.vp};\n\tlet animTickStride = ${zB.stride};\n\tlet numAnimTextures = ${zB.count};\n\t${(0,MB.e)(SB.c.WGSL,zB.perTexture)}\n\t${jB}animLayer;\n`
```

#### 133. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1629-L1630` → after: `L1629-L1630`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1629) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1629-L1630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1629-L1630) · [Before (L1629-L1630)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1629-L1630)

```diff
-         const WT = UT > 0 ? `fragmentInputs.texAtlasIndex - ${TT.atlasLayers.toFixed(1)} * ${UT.toFixed(1)}` : "fragmentInputs.texAtlasIndex";
-         return `${mT?"textureSampleLevel":"textureSample"}(textureAtlas${UT}, atlasSampler, fragmentInputs.vMainUV1, i32(round(${WT}))${mT?", atlasLod":""})`
+         const QB = jB > 0 ? `fragmentInputs.texAtlasIndex - ${BB.atlasLayers.toFixed(1)} * ${jB.toFixed(1)}` : "fragmentInputs.texAtlasIndex";
+         return `${zB?"textureSampleLevel":"textureSample"}(textureAtlas${jB}, atlasSampler, fragmentInputs.vMainUV1, i32(round(${QB}))${zB?", atlasLod":""})`
```

#### 134. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1632-L1633` → after: `L1632-L1633`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1632) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1632-L1633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1632-L1633) · [Before (L1632-L1633)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1632-L1633)

```diff
-       if (1 === TT.atlasCount) return `baseColor = ${UT(0,!1)};`;
-       let mT = `\n\tlet atlasTexelUV = fragmentInputs.vMainUV1 * ${(0,NU.nb)(TT.A4)};\n\tlet atlasDdx = dpdx(atlasTexelUV);\n\tlet atlasDdy = dpdy(atlasTexelUV);\n\tlet atlasLod = 0.5 * log2(max(max(dot(atlasDdx, atlasDdx), dot(atlasDdy, atlasDdy)), 1e-10));\n`;
+       if (1 === BB.atlasCount) return `baseColor = ${jB(0,!1)};`;
+       let zB = `\n\tlet atlasTexelUV = fragmentInputs.vMainUV1 * ${(0,Kj.jb)(BB.xR)};\n\tlet atlasDdx = dpdx(atlasTexelUV);\n\tlet atlasDdy = dpdy(atlasTexelUV);\n\tlet atlasLod = 0.5 * log2(max(max(dot(atlasDdx, atlasDdx), dot(atlasDdy, atlasDdy)), 1e-10));\n`;
```

#### 135. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1636` → after: `L1636`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1636) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1636) · [Before (L1636)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1636)

```diff
-         mT += `${WT>0?" else ":"\n\t"}if (fragmentInputs.texAtlasIndex < ${(0,NU.nb)(zT)}) {\n\t\tbaseColor = ${UT(WT,!0)};\n\t}`
+         zB += `${QB>0?" else ":"\n\t"}if (fragmentInputs.texAtlasIndex < ${(0,Kj.jb)(nB)}) {\n\t\tbaseColor = ${jB(QB,!0)};\n\t}`
```

#### 136. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1642` → after: `L1642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1642) · [Before (L1642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1642)

```diff
-       return `terrain-${TT.texture}${"atlas"===TT.texture?TT.atlasCount:""}${TT.animated?"-anim":""}${TT.alphaTest?"-test":""}${TT.lighting?"-lit":""}-dir${TT.dirLightCount}${TT.packed?"-packed":""}${XW(TT)?`-sp${TT.packVariant}`:""}${TT.liquid?"-liquid":""}${TT.resting?"-rest":" … [truncated]
+       return `terrain-${BB.texture}${"atlas"===BB.texture?BB.atlasCount:""}${BB.animated?"-anim":""}${BB.alphaTest?"-test":""}${BB.lighting?"-lit":""}-dir${BB.dirLightCount}${BB.packed?"-packed":""}${FQ(BB)?`-sp${BB.packVariant}`:""}${BB.liquid?"-liquid":""}${BB.resting?"-rest":" … [truncated]
```

#### 137. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1654` → after: `L1654`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1654) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1654) · [Before (L1654)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1654)

```diff
-         if (TT.dirLightCount > 4) throw new Error(`Terrain supports 4 directional lights, not ${TT.dirLightCount}`);
+         if (BB.dirLightCount > 4) throw new Error(`Terrain supports 4 directional lights, not ${BB.dirLightCount}`);
```

#### 138. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1658-L1660` → after: `L1658-L1660`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1658-L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1658-L1660) · [Before (L1658-L1660)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1658-L1660)

```diff
-           TT.animated && (nT += `@group(2) @binding(${gT++}) var<storage, read> animDataPerTex: array<f32>;\n`), nT += `@group(2) @binding(${gT++}) var atlasSampler: sampler;\n`;
-           for (let UT = 0; UT < TT.atlasCount; UT++) nT += `@group(2) @binding(${gT++}) var textureAtlas${UT}: texture_2d_array<f32>;\n`
-         } else "single" === TT.texture && (nT += `@group(2) @binding(${gT++}) var diffuseSamplerSampler: sampler;\n`, nT += `@group(2) @binding(${gT++}) var diffuseSampler: texture_2d<f32>;\n`);
+           BB.animated && (NB += `@group(2) @binding(${IB++}) var<storage, read> animDataPerTex: array<f32>;\n`), NB += `@group(2) @binding(${IB++}) var atlasSampler: sampler;\n`;
+           for (let jB = 0; jB < BB.atlasCount; jB++) NB += `@group(2) @binding(${IB++}) var textureAtlas${jB}: texture_2d_array<f32>;\n`
+         } else "single" === BB.texture && (NB += `@group(2) @binding(${IB++}) var diffuseSamplerSampler: sampler;\n`, NB += `@group(2) @binding(${IB++}) var diffuseSampler: texture_2d<f32>;\n`);
```

#### 139. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1667` → after: `L1667`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1667) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1667) · [Before (L1667)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1667)

```diff
-               declarations: `\nstruct PackedVertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@builtin(vertex_index) vertexIndex: u32,\n}\nstruct VertexInputs {\n\tchunkSlot: u32,\n\tposition: vec3f,\n\tnormal: vec4f,\n\tcolor: vec4f,\n\t${mT?"uv: vec2f,":""}\n\t${WT? … [truncated]
+               declarations: `\nstruct PackedVertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@builtin(vertex_index) vertexIndex: u32,\n}\nstruct VertexInputs {\n\tchunkSlot: u32,\n\tposition: vec3f,\n\tnormal: vec4f,\n\tcolor: vec4f,\n\t${zB?"uv: vec2f,":""}\n\t${QB? … [truncated]
```

#### 140. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1669` → after: `L1669`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1669) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1669) · [Before (L1669)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1669)

```diff
-               decode: `\n\tvar vertexInputs: VertexInputs;\n\tlet part = chunks[packedInputs.chunkSlot];\n\tlet drawn = packedInputs.vertexIndex >> 2u;\n\tlet quad = select(drawn, drawn - part.faceCount, drawn >= part.faceEnd);\n\tlet slot = packedInputs.vertexIndex & 3u;\n\tlet  … [truncated]
+               decode: `\n\tvar vertexInputs: VertexInputs;\n\tlet part = chunks[packedInputs.chunkSlot];\n\tlet drawn = packedInputs.vertexIndex >> 2u;\n\tlet quad = select(drawn, drawn - part.faceCount, drawn >= part.faceEnd);\n\tlet slot = packedInputs.vertexIndex & 3u;\n\tlet  … [truncated]
```

#### 141. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1671` → after: `L1671`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1671) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1671) · [Before (L1671)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1671)

```diff
-               declarations: `\nstruct VertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@location(${UT.position}) position: vec3f,\n\t@location(${UT.normal}) normal: vec4f,\n\t@location(${UT.color}) color: vec4f,\n\t${mT?`@location(${UT.uv}) uv: vec2f,`:""}\n\t${TT.li … [truncated]
+               declarations: `\nstruct VertexInputs {\n\t@builtin(instance_index) chunkSlot: u32,\n\t@location(${jB.position}) position: vec3f,\n\t@location(${jB.normal}) normal: vec4f,\n\t@location(${jB.color}) color: vec4f,\n\t${zB?`@location(${jB.uv}) uv: vec2f,`:""}\n\t${BB.li … [truncated]
```

#### 142. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1676` → after: `L1676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1676) · [Before (L1676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1676)

```diff
-           kT = `\n${VW}\n${FW}\n${PW}\n@group(1) @binding(0) var<uniform> uniforms: TerrainFrameUniforms;\n/** Per chunk part, indexed by the draw's first instance (TERRAIN_CHUNK_SLOT_WORDS words). */\nstruct TerrainChunk {\n\t/** Into the render frame. */\n\ttranslation: vec3f,\ … [truncated]
+           UB = `\n${AQ}\n${XQ}\n${ZQ}\n@group(1) @binding(0) var<uniform> uniforms: TerrainFrameUniforms;\n/** Per chunk part, indexed by the draw's first instance (TERRAIN_CHUNK_SLOT_WORDS words). */\nstruct TerrainChunk {\n\t/** Into the render frame. */\n\ttranslation: vec3f,\ … [truncated]
```

#### 143. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1684` → after: `L1684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1684) · [Before (L1684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1684)

```diff
-       return "none" === mT ? zT : `${zT}${function(TT){const UT="none"!==TT.texture&&TT.alphaTest;return`\n@fragment\nfn prepassFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${TT.resting?"":uW}\n\t${TT.alphaTest?`var baseColor = vec4f(1.0);\n\tvar alpha = material … [truncated]
+       return "none" === zB ? nB : `${nB}${function(BB){const jB="none"!==BB.texture&&BB.alphaTest;return`\n@fragment\nfn prepassFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${BB.resting?"":TQ}\n\t${BB.alphaTest?`var baseColor = vec4f(1.0);\n\tvar alpha = material … [truncated]
```

#### 144. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1722` → after: `L1722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1722) · [Before (L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1722)

```diff
-         const UT = null !== (nT = kT.type.trim().split(/\s+/).pop()) && void 0 !== nT ? nT : kT.type,
+         const jB = null !== (NB = UB.type.trim().split(/\s+/).pop()) && void 0 !== NB ? NB : UB.type,
```

#### 145. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1724-L1725` → after: `L1724-L1725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1724-L1725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1724-L1725) · [Before (L1724-L1725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1724-L1725)

```diff
-         if (!jT) throw new Error(`Lite: no uniform layout for ${kT.name}: ${kT.type}`);
-         const lT = null !== (HT = kT.arraySize) && void 0 !== HT ? HT : 0,
+         if (!aB) throw new Error(`Lite: no uniform layout for ${UB.name}: ${UB.type}`);
+         const pB = null !== (uB = UB.arraySize) && void 0 !== uB ? uB : 0,
```

#### 146. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1735-L1738` → after: `L1735-L1738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1735-L1738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1735-L1738) · [Before (L1735-L1738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1735-L1738)

```diff
-           const UT = `${TT}_${gT.length}_strided`;
-           MT.push(`struct ${UT} {\n\t@size(16) el: ${jT.wgsl},\n}`), gT.push(kT.name), zT.push(`\t@align(16) ${kT.name}: array<${UT}, ${lT}>,`)
-         } else lT ? zT.push(`\t@align(16) ${kT.name}: array<${jT.wgsl}, ${lT}>,`) : zT.push(`\t${kT.name}: ${jT.wgsl},`);
-         WT += lT ? pT * lT : jT.floats
+           const jB = `${BB}_${IB.length}_strided`;
+           dB.push(`struct ${jB} {\n\t@size(16) el: ${aB.wgsl},\n}`), IB.push(UB.name), nB.push(`\t@align(16) ${UB.name}: array<${jB}, ${pB}>,`)
+         } else pB ? nB.push(`\t@align(16) ${UB.name}: array<${aB.wgsl}, ${pB}>,`) : nB.push(`\t${UB.name}: ${aB.wgsl},`);
+         QB += pB ? sB * pB : aB.floats
```

#### 147. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1743` → after: `L1743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1743) · [Before (L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1743)

```diff
-         wgsl: `${MT.join("\n")}\nstruct ${TT} {\n${zT.join("\n")}\n}\n`,
+         wgsl: `${dB.join("\n")}\nstruct ${BB} {\n${nB.join("\n")}\n}\n`,
```

#### 148. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1791` → after: `L1791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1791) · [Before (L1791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1791)

```diff
-       return `#if defined(${TT}) && ${TT}DIRECTUV == 0\nvarying v${UT}UV: vec2f;\n#endif`
+       return `#if defined(${BB}) && ${BB}DIRECTUV == 0\nvarying v${jB}UV: vec2f;\n#endif`
```

#### 149. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1795` → after: `L1795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1795) · [Before (L1795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1795)

```diff
-       return `#if defined(${TT}) && ${TT}DIRECTUV == 0\nif (uniforms.v${UT}Infos.x==0.)\n{vertexOutputs.v${UT}UV= (uniforms.${mT}Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.v${UT}UV= (uniforms.${mT}Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif`
+       return `#if defined(${BB}) && ${BB}DIRECTUV == 0\nif (uniforms.v${jB}Infos.x==0.)\n{vertexOutputs.v${jB}UV= (uniforms.${zB}Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.v${jB}UV= (uniforms.${zB}Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif`
```

#### 150. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1799` → after: `L1799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1799) · [Before (L1799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1799)

```diff
-       return `#ifdef ${TT}\n#if ${TT}DIRECTUV == 1\n#define v${UT}UV vMainUV1\n#elif ${TT}DIRECTUV == 2\n#define v${UT}UV vMainUV2\n#else\nvarying v${UT}UV: vec2f;\n#endif\nvar ${mT}SamplerSampler: sampler;\nvar ${mT}Sampler: texture_2d<f32>;\n#endif`
+       return `#ifdef ${BB}\n#if ${BB}DIRECTUV == 1\n#define v${jB}UV vMainUV1\n#elif ${BB}DIRECTUV == 2\n#define v${jB}UV vMainUV2\n#else\nvarying v${jB}UV: vec2f;\n#endif\nvar ${zB}SamplerSampler: sampler;\nvar ${zB}Sampler: texture_2d<f32>;\n#endif`
```

#### 151. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1818-L1819` → after: `L1818-L1819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1818-L1819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1818-L1819) · [Before (L1818-L1819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1818-L1819)

```diff
-       fz = `\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#ifdef UV2\nattribute uv2: vec2f;\n#endif\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${Lz}\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#e … [truncated]
-     const qz = `\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vC … [truncated]
+       kn = `\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#ifdef UV2\nattribute uv2: vec2f;\n#endif\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${pn}\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#e … [truncated]
+     const Gn = `\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vC … [truncated]
```

#### 152. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1848` → after: `L1848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1848) · [Before (L1848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1848)

```diff
-     n #endif`}(UT))).join("\n")}\naggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);\nvar reflectionColor: vec4f= vec4f(0.,0.,0.,1.);\n#ifdef REFLECTION\nvar vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);\n … [truncated]
+     n #endif`}(jB))).join("\n")}\naggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);\nvar reflectionColor: vec4f= vec4f(0.,0.,0.,1.);\n#ifdef REFLECTION\nvar vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);\n … [truncated]
```

#### 153. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1851` → after: `L1851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1851) · [Before (L1851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1851)

```diff
-       bz.has(TT) || (bz.add(TT), console.warn(`Lite: no place for plugin code at ${TT} in the standard shader: it is left out`))
+       gn.has(BB) || (gn.add(BB), console.warn(`Lite: no place for plugin code at ${BB} in the standard shader: it is left out`))
```

#### 154. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1859` → after: `L1859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1859) · [Before (L1859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1859)

```diff
-         WT.set(MT, `${null!==(zT=WT.get(MT))&&void 0!==zT?zT:""}${gT}\n`)
+         QB.set(dB, `${null!==(nB=QB.get(dB))&&void 0!==nB?nB:""}${IB}\n`)
```

#### 155. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1863` → after: `L1863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1863) · [Before (L1863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1863)

```diff
-           const TT = `#define ${MT}`;
+           const BB = `#define ${dB}`;
```

#### 156. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1868` → after: `L1868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1868) · [Before (L1868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1868)

```diff
-           mT = mT.replace(TT, (() => `\n${gT}\n${TT}`));
+           zB = zB.replace(BB, (() => `\n${IB}\n${BB}`));
```

#### 157. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1878` → after: `L1878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1878) · [Before (L1878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1878)

```diff
-         const WT = new RegExp(TT, UT.includes("g") ? UT : `${UT}g`);
+         const QB = new RegExp(BB, jB.includes("g") ? jB : `${jB}g`);
```

#### 158. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1927` → after: `L1927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1927) · [Before (L1927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1927)

```diff
-       if (!mT) throw new Error(`Lite: unsupported uniform type ${TT}`);
+       if (!zB) throw new Error(`Lite: unsupported uniform type ${BB}`);
```

#### 159. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1932` → after: `L1932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1932) · [Before (L1932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1932)

```diff
-       return void 0 === UT && void 0 === mT ? /^(u32|i32|vec\du|vec\di|vec\d<[ui]32>)$/.test(TT.replace(/\s+/g, "")) ? "@interpolate(flat) " : "" : "flat" === UT ? "@interpolate(flat) " : `@interpolate(${null!==UT&&void 0!==UT?UT:"perspective"}, ${null!==mT&&void 0!==mT?mT:"cente … [truncated]
+       return void 0 === jB && void 0 === zB ? /^(u32|i32|vec\du|vec\di|vec\d<[ui]32>)$/.test(BB.replace(/\s+/g, "")) ? "@interpolate(flat) " : "" : "flat" === jB ? "@interpolate(flat) " : `@interpolate(${null!==jB&&void 0!==jB?jB:"perspective"}, ${null!==zB&&void 0!==zB?zB:"cente … [truncated]
```

#### 160. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1940` → after: `L1940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1940) · [Before (L1940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1940)

```diff
-         members: [...Wz, ...TT.defines.has("OPACITY") ? zz : [], ...TT.defines.has("EMISSIVE") ? Mz : [], ...TT.pluginUniforms],
+         members: [...zn, ...BB.defines.has("OPACITY") ? Qn : [], ...BB.defines.has("EMISSIVE") ? nn : [], ...BB.pluginUniforms],
```

#### 161. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1950-L1951` → after: `L1950-L1951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1950-L1951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1950-L1951) · [Before (L1950-L1951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1950-L1951)

```diff
-     const Xz = `\nattribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${Lz}\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n@vertex\nfn main( … [truncated]
-       Iz = `\nuniform color: vec4f;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n${cz}\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs =  … [truncated]
+     const Vn = `\nattribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${pn}\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n@vertex\nfn main( … [truncated]
+       hn = `\nuniform color: vec4f;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n${mn}\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs =  … [truncated]
```

#### 162. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1959` → after: `L1959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1959) · [Before (L1959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1959)

```diff
-       const MT = [...zT.values()].map(((TT, UT) => `\t@location(${UT}) ${TT.interpolation}${TT.name}: ${TT.type},`)),
+       const dB = [...nB.values()].map(((BB, jB) => `\t@location(${jB}) ${BB.interpolation}${BB.name}: ${BB.type},`)),
```

#### 163. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1970` → after: `L1970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1970) · [Before (L1970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1970)

```diff
-         const TT = `${qT.name}Sampler`,
+         const BB = `${LB.name}Sampler`,
```

#### 164. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1979` → after: `L1979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1979) · [Before (L1979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1979)

```diff
-         }), kT.push(`@group(2) @binding(${UT}) var ${qT.name}: ${qT.type};`), kT.push(`@group(2) @binding(${mT}) var ${TT}: sampler;`)
+         }), UB.push(`@group(2) @binding(${jB}) var ${LB.name}: ${LB.type};`), UB.push(`@group(2) @binding(${zB}) var ${BB}: sampler;`)
```

#### 165. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1982-L1983` → after: `L1982-L1983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1982-L1983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1982-L1983) · [Before (L1982-L1983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1982-L1983)

```diff
-         if (!lT.has(qT.replace(/Sampler$/, ""))) throw new Error(`Lite: sampler ${qT} has no texture`);
-       const LT = [VW, lz, nT.wgsl, `@group(2) @binding(0) var<uniform> uniforms: ${TT.structName};`, ...kT].join("\n"),
+         if (!pB.has(LB.replace(/Sampler$/, ""))) throw new Error(`Lite: sampler ${LB} has no texture`);
+       const rB = [AQ, an, NB.wgsl, `@group(2) @binding(0) var<uniform> uniforms: ${BB.structName};`, ...UB].join("\n"),
```

#### 166. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1985` → after: `L1985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1985) · [Before (L1985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1985)

```diff
-         BT = ["struct VertexInputs {", "\t@builtin(vertex_index) vertexIndex: u32,", "\t@builtin(instance_index) instanceIndex: u32,", ...mT.attributes.map(((TT, UT) => `\t@location(${UT}) ${TT.name}: ${TT.type},`)), "}", "var<private> vertexInputs: VertexInputs;"].join("\n"),
+         JB = ["struct VertexInputs {", "\t@builtin(vertex_index) vertexIndex: u32,", "\t@builtin(instance_index) instanceIndex: u32,", ...zB.attributes.map(((BB, jB) => `\t@location(${jB}) ${BB.name}: ${BB.type},`)), "}", "var<private> vertexInputs: VertexInputs;"].join("\n"),
```

#### 167. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1987` → after: `L1987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1987) · [Before (L1987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1987)

```diff
-         cT = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...WT.body.includes("fragmentInputs.frontFacing") ? ["\t@builtin(front_facing) frontFacing: bool,"] : [], ...MT, "}", "var<private> fragmentInputs: FragmentInputs;", "struct FragmentOutputs {", "\t@ … [truncated]
+         yB = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...QB.body.includes("fragmentInputs.frontFacing") ? ["\t@builtin(front_facing) frontFacing: bool,"] : [], ...dB, "}", "var<private> fragmentInputs: FragmentInputs;", "struct FragmentOutputs {", "\t@ … [truncated]
```

#### 168. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1989` → after: `L1989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1989) · [Before (L1989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1989)

```diff
-           for (const UT of nT.stridedArrays) TT = TT.replace(new RegExp(`\\b${UT}\\s*\\[(.*?)\\]`, "g"), `${UT}[$1].el`);
+           for (const jB of NB.stridedArrays) BB = BB.replace(new RegExp(`\\b${jB}\\s*\\[(.*?)\\]`, "g"), `${jB}[$1].el`);
```

#### 169. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1993-L1994` → after: `L1993-L1994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1993-L1994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L1993-L1994) · [Before (L1993-L1994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L1993-L1994)

```diff
-         vertex: `${LT}\n${BT}\n${ZT}\n${vT(mT.body)}`,
-         fragment: `diagnostic(off, derivative_uniformity);\n${LT}\n${cT}\n${yz((fT=vT(WT.body),fT.includes("fragmentInputs.position")?fT.replace("fragmentInputs = input;","fragmentInputs = input;\nfragmentInputs.position.y = frame.outputHeight - fragmentInputs.position.y;"):fT))} … [truncated]
+         vertex: `${rB}\n${JB}\n${mB}\n${kB(zB.body)}`,
+         fragment: `diagnostic(off, derivative_uniformity);\n${rB}\n${yB}\n${Yn((GB=kB(QB.body),GB.includes("fragmentInputs.position")?GB.replace("fragmentInputs = input;","fragmentInputs = input;\nfragmentInputs.position.y = frame.outputHeight - fragmentInputs.position.y;"):GB))} … [truncated]
```

#### 170. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2011-L2016` → after: `L2011-L2016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2011-L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2011-L2016) · [Before (L2011-L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2011-L2016)

```diff
-       uz = `${VW}\n${lz}\n${Vz.wgsl}\n@group(2) @binding(0) var<uniform> sky: EarthSkyUniforms;\nstruct EarthSkyVarying {\n\t@builtin(position) position: vec4f,\n\t@location(0) worldPosition: vec3f,\n\t@location(1) fogDistance: vec3f,\n\t@location(2) tint: vec3f,\n}\n`,
-       Cz = `\n@vertex\nfn main(@builtin(vertex_index) index: u32) -> EarthSkyVarying {\n\tlet corners = array<u32, 36>(${sz.join(", ")});\n\tlet corner = corners[index];\n\tlet position = vec3f(f32(corner & 1u), f32((corner >> 1u) & 1u), f32(corner >> 2u)) - 0.5;\n\tvar out: Eart … [truncated]
-       rz = `\n${cU}\nconst PI: f32 = 3.141592653589793238462643383279502884197169;\nconst SUN_DISC_COS: f32 = 0.999956676946448443553574619906976478926848692873900859324;\n${Object.entries(VU).map((TT=>{let[UT,mT]=TT;return`const TONE_${UT}: f32 = ${mT};`})).join(" ")}\n\n// The  … [truncated]
-     var Kz = mT(37185);
-     const Sz = new Kz.JB,
-       Gz = new Kz.JB,
+       Wn = `${AQ}\n${an}\n${Pn.wgsl}\n@group(2) @binding(0) var<uniform> sky: EarthSkyUniforms;\nstruct EarthSkyVarying {\n\t@builtin(position) position: vec4f,\n\t@location(0) worldPosition: vec3f,\n\t@location(1) fogDistance: vec3f,\n\t@location(2) tint: vec3f,\n}\n`,
+       en = `\n@vertex\nfn main(@builtin(vertex_index) index: u32) -> EarthSkyVarying {\n\tlet corners = array<u32, 36>(${Zn.join(", ")});\n\tlet corner = corners[index];\n\tlet position = vec3f(f32(corner & 1u), f32((corner >> 1u) & 1u), f32(corner >> 2u)) - 0.5;\n\tvar out: Eart … [truncated]
+       wn = `\n${yj}\nconst PI: f32 = 3.141592653589793238462643383279502884197169;\nconst SUN_DISC_COS: f32 = 0.999956676946448443553574619906976478926848692873900859324;\n${Object.entries(Tj).map((BB=>{let[jB,zB]=BB;return`const TONE_${jB}: f32 = ${zB};`})).join(" ")}\n\n// The  … [truncated]
+     var xn = zB(37166);
+     const Kn = new xn.KJ,
+       Cn = new xn.KJ,
```

#### 171. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2034` → after: `L2034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2034) · [Before (L2034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2034)

```diff
-         Sz.set(UT.distance * Math.cos(mT) * Math.cos(TT), UT.distance * Math.sin(-TT), UT.distance * Math.sin(mT) * Math.cos(TT)), Kz.Quaternion.FromUnitVectorsToRef(Kz.JB.UpReadOnly, Gz.set(UT.up[0], UT.up[1], UT.up[2]), Nz), Sz.rotateByQuaternionToRef(Nz, Sz)
+         Kn.set(jB.distance * Math.cos(zB) * Math.cos(BB), jB.distance * Math.sin(-BB), jB.distance * Math.sin(zB) * Math.cos(BB)), xn.Quaternion.FromUnitVectorsToRef(xn.KJ.UpReadOnly, Cn.set(jB.up[0], jB.up[1], jB.up[2]), cn), Kn.rotateByQuaternionToRef(cn, Kn)
```

#### 172. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2060` → after: `L2060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2060) · [Before (L2060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2060)

```diff
-         gT && gT !== this.packGroup && (TT.setBindGroup(DU.i, gT), this.packGroup = gT);
+         IB && IB !== this.packGroup && (BB.setBindGroup(bj.h, IB), this.packGroup = IB);
```

#### 173. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2071-L2072` → after: `L2071-L2072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2071-L2072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2071-L2072) · [Before (L2071-L2072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2071-L2072)

```diff
-         this.modelMeshes = TT, this.I3 = UT, this.maker = mT, this.warnOnce = WT, this.skyDraws = [], this.opaqueDraws = [], this.transparentDraws = [], this.frontDraws = [], this.warnIfNotDrawn = (TT, UT) => {
-           (UT < -1 || UT > 1) && this.warnOnce(`group:${UT}`, `rendering group ${UT} is not drawn`)
+         this.modelMeshes = BB, this.M_ = jB, this.maker = zB, this.warnOnce = QB, this.skyDraws = [], this.opaqueDraws = [], this.transparentDraws = [], this.frontDraws = [], this.warnIfNotDrawn = (BB, jB) => {
+           (jB < -1 || jB > 1) && this.warnOnce(`group:${jB}`, `rendering group ${jB} is not drawn`)
```

#### 174. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2079` → after: `L2079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2079) · [Before (L2079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2079)

```diff
-         this.collectGroup(TT, -1, this.skyDraws, this.skyDraws, !0), this.collectGroup(TT, 0, this.opaqueDraws, this.transparentDraws, !1), this.collectGroup(TT, 1, this.frontDraws, this.frontDraws, !0), this.modelMeshes.forEachGroup(this.warnIfNotDrawn), this.I3.forEachGroup(thi … [truncated]
+         this.collectGroup(BB, -1, this.skyDraws, this.skyDraws, !0), this.collectGroup(BB, 0, this.opaqueDraws, this.transparentDraws, !1), this.collectGroup(BB, 1, this.frontDraws, this.frontDraws, !0), this.modelMeshes.forEachGroup(this.warnIfNotDrawn), this.M_.forEachGroup(thi … [truncated]
```

#### 175. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2083` → after: `L2083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2083) · [Before (L2083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2083)

```diff
-           gT = this.I3.group(UT),
+           IB = this.M_.group(jB),
```

#### 176. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2085` → after: `L2085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2085) · [Before (L2085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2085)

```diff
-         this.collectList(TT, null === MT || void 0 === MT ? void 0 : MT.opaque, nT || null === gT || void 0 === gT ? void 0 : gT.opaque, UT, !1, mT, zT), nT && (this.I3.drawn += this.maker.bundleDraws(TT, nT, UT)), this.collectList(TT, null === MT || void 0 === MT ? void 0 : MT.a … [truncated]
+         this.collectList(BB, null === dB || void 0 === dB ? void 0 : dB.opaque, NB || null === IB || void 0 === IB ? void 0 : IB.opaque, jB, !1, zB, nB), NB && (this.M_.drawn += this.maker.bundleDraws(BB, NB, jB)), this.collectList(BB, null === dB || void 0 === dB ? void 0 : dB.a … [truncated]
```

#### 177. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2090` → after: `L2090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2090) · [Before (L2090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2090)

```diff
-         UT && this.maker.pushDraws(TT, UT.units, UT.units.length, WT, zT, MT, UT.rows), mT && (this.I3.drawn += this.maker.pushDraws(TT, mT, mT.length, WT, zT, MT));
+         jB && this.maker.pushDraws(BB, jB.units, jB.units.length, QB, nB, dB, jB.rows), zB && (this.M_.drawn += this.maker.pushDraws(BB, zB, zB.length, QB, nB, dB));
```

#### 178. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2115` → after: `L2115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2115) · [Before (L2115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2115)

```diff
-       return TT.hasThinInstances ? "thin" : TT.ZzT || TT._userInstancedBuffersStorage ? "instanced" : "none"
+       return BB.hasThinInstances ? "thin" : BB.bQB || BB._userInstancedBuffersStorage ? "instanced" : "none"
```

#### 179. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2119` → after: `L2119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2119) · [Before (L2119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2119)

```diff
-       return TT ? (mT._needUVs = !0, TT.optimizeUVAllocation && (0, dT.M)(TT.matrix) ? (mT[`${UT}DIRECTUV`] = TT.uvSet + 1, mT[`MAINUV${TT.uvSet+1}`] = !0) : mT[`${UT}DIRECTUV`] = 0, !0) : (mT[`${UT}DIRECTUV`] = 0, !1)
+       return BB ? (zB._needUVs = !0, BB.optimizeUVAllocation && (0, fB.K)(BB.matrix) ? (zB[`${jB}DIRECTUV`] = BB.uvSet + 1, zB[`MAINUV${BB.uvSet+1}`] = !0) : zB[`${jB}DIRECTUV`] = 0, !0) : (zB[`${jB}DIRECTUV`] = 0, !1)
```

#### 180. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2147` → after: `L2147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2147) · [Before (L2147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2147)

```diff
-       return null !== UT && void 0 !== UT && UT.live ? UT : null
+       return null !== jB && void 0 !== jB && jB.live ? jB : null
```

#### 181. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2152` → after: `L2152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2152) · [Before (L2152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2152)

```diff
-       return null !== (UT = kM(TT)) && void 0 !== UT ? UT : zM
+       return null !== (jB = rd(BB)) && void 0 !== jB ? jB : Id
```

#### 182. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2164` → after: `L2164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2164) · [Before (L2164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2164)

```diff
-           if (!TT) return this.warnOnce("model", `${mT.name} on ${MT.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
+           if (!BB) return this.warnOnce("model", `${zB.name} on ${dB.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
```

#### 183. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2187` → after: `L2187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2187) · [Before (L2187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2187)

```diff
-           for (const [mT, WT] of TT) UT += !0 === WT ? `${mT};` : `${mT}=${WT};`;
+           for (const [zB, QB] of BB) jB += !0 === QB ? `${zB};` : `${zB}=${QB};`;
```

#### 184. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2200` → after: `L2200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2200) · [Before (L2200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2200)

```diff
-         return 0 === this.modelPackVariant ? null : null !== (UT = (0, JT.s)(TT, YT.k.name)) && void 0 !== UT && UT.active ? "placed" : TT.item ? "item" : TT.lifeform ? "lifeform" : TT.box ? "box" : null
+         return 0 === this.modelPackVariant ? null : null !== (jB = (0, iB.w)(BB, EB.j.name)) && void 0 !== jB && jB.active ? "placed" : BB.item ? "item" : BB.lifeform ? "lifeform" : BB.box ? "box" : null
```

#### 185. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2204` → after: `L2204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2204) · [Before (L2204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2204)

```diff
-         return "thin" === UT ? null !== (zT = this.resources.J_.get(TT)) && void 0 !== zT ? zT : null : "instanced" === UT && null !== (mT = null === (WT = TT._userInstancedBuffersStorage) || void 0 === WT ? void 0 : WT.interleavedKinds) && void 0 !== mT ? mT : null
+         return "thin" === jB ? null !== (nB = this.resources.U1.get(BB)) && void 0 !== nB ? nB : null : "instanced" === jB && null !== (zB = null === (QB = BB._userInstancedBuffersStorage) || void 0 === QB ? void 0 : QB.interleavedKinds) && void 0 !== zB ? zB : null
```

#### 186. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2214` → after: `L2214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2214) · [Before (L2214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2214)

```diff
-           for (; WT < this.view.lightCount && (TT[`LIGHT${WT}`] = !0, TT[`LITE_LIGHT${WT}_SLOT`] = WT, WT++, TT._needNormals = !0, WT !== UT););
+           for (; QB < this.view.lightCount && (BB[`LIGHT${QB}`] = !0, BB[`LITE_LIGHT${QB}_SLOT`] = QB, QB++, BB._needNormals = !0, QB !== jB););
```

#### 187. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2216` → after: `L2216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2216) · [Before (L2216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2216)

```diff
-         for (let zT = WT; zT < 4; zT++) TT[`LIGHT${zT}`] = !1, TT[`LITE_LIGHT${zT}_SLOT`] = void 0
+         for (let nB = QB; nB < 4; nB++) BB[`LIGHT${nB}`] = !1, BB[`LITE_LIGHT${nB}_SLOT`] = void 0
```

#### 188. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2226` → after: `L2226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2226) · [Before (L2226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2226)

```diff
-         HT ? (WT._needUVs = !0, WT.DIFFUSE = !0, HT.optimizeUVAllocation && (0, dT.M)(HT.matrix) ? (WT.DIFFUSEDIRECTUV = HT.uvSet + 1, WT[`MAINUV${HT.uvSet+1}`] = !0) : WT.DIFFUSEDIRECTUV = 0, HT.uvSet > 1 && this.warnOnce(`uvset:${mT.name}`, `${mT.name} samples UV set ${HT.uvSet … [truncated]
+         uB ? (QB._needUVs = !0, QB.DIFFUSE = !0, uB.optimizeUVAllocation && (0, fB.K)(uB.matrix) ? (QB.DIFFUSEDIRECTUV = uB.uvSet + 1, QB[`MAINUV${uB.uvSet+1}`] = !0) : QB.DIFFUSEDIRECTUV = 0, uB.uvSet > 1 && this.warnOnce(`uvset:${zB.name}`, `${zB.name} samples UV set ${uB.uvSet … [truncated]
```

#### 189. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2229` → after: `L2229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2229) · [Before (L2229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2229)

```diff
-         WT.OPACITY = gM(kT, "OPACITY", WT), WT.OPACITYRGB = null !== kT && kT.getAlphaFromRGB, WT.EMISSIVE = gM(jT, "EMISSIVE", WT), (kT && kT.uvSet > 1 || jT && jT.uvSet > 1) && this.warnOnce(`uvset:${mT.name}`, `${mT.name} samples a UV set past 2, which is not supported`);
+         QB.OPACITY = ud(UB, "OPACITY", QB), QB.OPACITYRGB = null !== UB && UB.getAlphaFromRGB, QB.EMISSIVE = ud(aB, "EMISSIVE", QB), (UB && UB.uvSet > 1 || aB && aB.uvSet > 1) && this.warnOnce(`uvset:${zB.name}`, `${zB.name} samples a UV set past 2, which is not supported`);
```

#### 190. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2236` → after: `L2236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2236) · [Before (L2236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2236)

```diff
-         WT.REFLECTION = LT, WT.REFLECTIONMAP_3D = LT, WT.REFLECTIONMAP_SKYBOX = LT, WT.REFLECTIONMAP_OPPOSITEZ = LT && (TT.useRightHandedSystem ? !lT.invertZ : lT.invertZ), WT.ROUGHNESS = LT && mT.roughness > 0, WT.REFLECTIONOVERALPHA = LT && mT.useReflectionOverAlpha, WT.LITE_RE … [truncated]
+         QB.REFLECTION = rB, QB.REFLECTIONMAP_3D = rB, QB.REFLECTIONMAP_SKYBOX = rB, QB.REFLECTIONMAP_OPPOSITEZ = rB && (BB.useRightHandedSystem ? !pB.invertZ : pB.invertZ), QB.ROUGHNESS = rB && zB.roughness > 0, QB.REFLECTIONOVERALPHA = rB && zB.useReflectionOverAlpha, QB.LITE_RE … [truncated]
```

#### 191. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2241` → after: `L2241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2241) · [Before (L2241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2241)

```diff
-         WT.ALPHATEST = (0, JT.K)(mT, pT, BT), WT.ALPHAFROMDIFFUSE = (0, JT._)(mT), WT.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== mT.transparencyMode, WT.ALPHABLEND = null === mT.transparencyMode || (0, JT.H)(mT, pT, BT), WT.PREMULTIPLYALPHA = 7 === mT.alphaMode || 8 === mT.al … [truncated]
+         QB.ALPHATEST = (0, iB.Y)(zB, sB, JB), QB.ALPHAFROMDIFFUSE = (0, iB.lb)(zB), QB.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== zB.transparencyMode, QB.ALPHABLEND = null === zB.transparencyMode || (0, iB.U)(zB, sB, JB), QB.PREMULTIPLYALPHA = 7 === zB.alphaMode || 8 === zB.a … [truncated]
```

#### 192. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2263` → after: `L2263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2263) · [Before (L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2263)

```diff
-         const iT = TT.eB();
+         const gB = BB.wJ();
```

#### 193. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2288` → after: `L2288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2288) · [Before (L2288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2288)

```diff
-           if (BT) pM(null === (zT = (MT = (0, XU.g)(LT)).getCustomCode) || void 0 === zT ? void 0 : zT.call(MT, pT, "vertex", OT.e.WGSL), mT), pM(null === (gT = (nT = (0, XU.g)(LT)).getCustomCode) || void 0 === gT ? void 0 : gT.call(nT, pT, "fragment", OT.e.WGSL), WT)
+           if (JB) yd(null === (nB = (dB = (0, Yj.g)(rB)).getCustomCode) || void 0 === nB ? void 0 : nB.call(dB, sB, "vertex", SB.c.WGSL), zB), yd(null === (IB = (NB = (0, Yj.g)(rB)).getCustomCode) || void 0 === IB ? void 0 : IB.call(NB, sB, "fragment", SB.c.WGSL), QB)
```

#### 194. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2297-L2298` → after: `L2297-L2298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2297-L2298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2297-L2298) · [Before (L2297-L2298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2297-L2298)

```diff
-           const TT = null === (kT = (jT = (0, XU.g)(LT)).getUniforms) || void 0 === kT ? void 0 : kT.call(jT, pT, OT.e.WGSL);
-           for (const UT of null !== (lT = null === TT || void 0 === TT ? void 0 : TT.ubo) && void 0 !== lT ? lT : []) {
+           const BB = null === (UB = (aB = (0, Yj.g)(rB)).getUniforms) || void 0 === UB ? void 0 : UB.call(aB, sB, SB.c.WGSL);
+           for (const jB of null !== (pB = null === BB || void 0 === BB ? void 0 : BB.ubo) && void 0 !== pB ? pB : []) {
```

#### 195. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2308` → after: `L2308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2308) · [Before (L2308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2308)

```diff
-       }(TT, UT), `${mT}#${TT.codeKey}`
+       }(BB, jB), `${zB}#${BB.codeKey}`
```

#### 196. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2332` → after: `L2332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2332) · [Before (L2332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2332)

```diff
-           gT = null !== (zT = TT.sideOrientation) && void 0 !== zT ? zT : UT.sideOrientation;
+           IB = null !== (nB = BB.sideOrientation) && void 0 !== nB ? nB : jB.sideOrientation;
```

#### 197. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2343` → after: `L2343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2343) · [Before (L2343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2343)

```diff
-         return WT && WT.alphaMode === HT && WT.depthWrite === kT && WT.depthFunction === LT && WT.cullMode === jT && WT.frontFace === lT && WT.zOffset === pT && WT.zOffsetUnits === BT && WT.colourWrite === ZT && WT.topology === MT ? WT : this.stateFor(HT, kT, LT, jT, lT, pT, BT,  … [truncated]
+         return QB && QB.alphaMode === uB && QB.depthWrite === UB && QB.depthFunction === rB && QB.cullMode === aB && QB.frontFace === pB && QB.zOffset === sB && QB.zOffsetUnits === JB && QB.colourWrite === mB && QB.topology === dB ? QB : this.stateFor(uB, UB, rB, aB, pB, sB, JB,  … [truncated]
```

#### 198. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2346` → after: `L2346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2346) · [Before (L2346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2346)

```diff
-         const kT = `${TT}|${UT}|${mT}|${WT}|${zT}|${MT}|${gT}|${nT}|${HT}`;
+         const UB = `${BB}|${jB}|${zB}|${QB}|${nB}|${dB}|${IB}|${NB}|${uB}`;
```

#### 199. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2351` → after: `L2351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2351) · [Before (L2351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2351)

```diff
-           TT && !LT && this.warnOnce(`alpha:${TT}`, `alpha mode ${TT} is not supported`), jT = {
+           BB && !rB && this.warnOnce(`alpha:${BB}`, `alpha mode ${BB} is not supported`), aB = {
```

#### 200. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2360` → after: `L2360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2360) · [Before (L2360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2360)

```diff
-             depthCompare: mT && null !== (lT = BM.get(mT)) && void 0 !== lT ? lT : null,
+             depthCompare: zB && null !== (pB = kd.get(zB)) && void 0 !== pB ? pB : null,
```

#### 201. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2371` → after: `L2371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2371) · [Before (L2371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2371)

```diff
-     var cM = mT(37546);
+     var Ld = zB(37542);
```

#### 202. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2466` → after: `L2466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2466) · [Before (L2466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2466)

```diff
-         WT = cM.k,
+         QB = Ld.g,
```

#### 203. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2471-L2472` → after: `L2471-L2472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2471-L2472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2471-L2472) · [Before (L2471-L2472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2471-L2472)

```diff
-           MT = gT * cM.d;
-         UT[TT] = zT[MT + WT.vector], UT[TT + 1] = zT[MT + WT.vector + 1], UT[TT + 2] = zT[MT + WT.vector + 2], UT[TT + 3] = zT[MT + WT.kind] === cM.h.directional ? 1 : 0, UT[TT + 4] = zT[MT + WT.diffuse], UT[TT + 5] = zT[MT + WT.diffuse + 1], UT[TT + 6] = zT[MT + WT.diffuse + 2], … [truncated]
+           dB = IB * Ld.b;
+         jB[BB] = nB[dB + QB.vector], jB[BB + 1] = nB[dB + QB.vector + 1], jB[BB + 2] = nB[dB + QB.vector + 2], jB[BB + 3] = nB[dB + QB.kind] === Ld.d.directional ? 1 : 0, jB[BB + 4] = nB[dB + QB.diffuse], jB[BB + 5] = nB[dB + QB.diffuse + 1], jB[BB + 6] = nB[dB + QB.diffuse + 2], … [truncated]
```

#### 204. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2500` → after: `L2500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2500) · [Before (L2500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2500)

```diff
-         const lT = TT.eB();
+         const pB = BB.wJ();
```

#### 205. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2521` → after: `L2521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2521) · [Before (L2521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2521)

```diff
-         zT = TT => 4 === mT ? `${TT}x4` : 2 === mT ? `${TT}x2` : null;
+         nB = BB => 4 === zB ? `${BB}x4` : 2 === zB ? `${BB}x2` : null;
```

#### 206. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2523` → after: `L2523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2523) · [Before (L2523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2523)

```diff
-         if (5126 === TT.type) return 1 === mT ? "float32" : mT >= 2 && mT <= 4 ? `float32x${mT}` : null;
+         if (5126 === BB.type) return 1 === zB ? "float32" : zB >= 2 && zB <= 4 ? `float32x${zB}` : null;
```

#### 207. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2541` → after: `L2541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2541) · [Before (L2541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2541)

```diff
-           return 1 === mT ? `${MT}32` : mT <= 4 ? `${MT}32x${mT}` : null;
+           return 1 === zB ? `${dB}32` : zB <= 4 ? `${dB}32x${zB}` : null;
```

#### 208. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2544` → after: `L2544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2544) · [Before (L2544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2544)

```diff
-           return zT(`${MT}8`);
+           return nB(`${dB}8`);
```

#### 209. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2547` → after: `L2547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2547) · [Before (L2547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2547)

```diff
-           return zT(`${MT}16`)
+           return nB(`${dB}16`)
```

#### 210. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2555` → after: `L2555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2555) · [Before (L2555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2555)

```diff
-       return mT ? Number(mT[1]) / 8 * Number(null !== (UT = mT[2]) && void 0 !== UT ? UT : 1) : 4
+       return zB ? Number(zB[1]) / 8 * Number(null !== (jB = zB[2]) && void 0 !== jB ? jB : 1) : 4
```

#### 211. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2593` → after: `L2593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2593) · [Before (L2593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2593)

```diff
-           if (!kT) return this.warnOnce(`format:${UT}:${mT.name}`, `${UT}'s ${mT.name} (type ${nT.type}, size ${nT.getSize()}) has no WebGPU vertex format`), null;
+           if (!UB) return this.warnOnce(`format:${jB}:${zB.name}`, `${jB}'s ${zB.name} (type ${NB.type}, size ${NB.getSize()}) has no WebGPU vertex format`), null;
```

#### 212. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2614` → after: `L2614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2614) · [Before (L2614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2614)

```diff
-         if (zT.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${UT}`, `${UT} needs ${zT.length} vertex buffers`), null;
+         if (nB.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${jB}`, `${jB} needs ${nB.length} vertex buffers`), null;
```

#### 213. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2617-L2618` → after: `L2617-L2618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2617-L2618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2617-L2618) · [Before (L2617-L2618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2617-L2618)

```diff
-           nT += `${jT.stride}${"instance"===jT.step?"i":"v"}`;
-           for (const TT of jT.attributes) nT += `,${TT.shaderLocation}:${TT.offset}:${TT.format}`;
+           NB += `${aB.stride}${"instance"===aB.step?"i":"v"}`;
+           for (const BB of aB.attributes) NB += `,${BB.shaderLocation}:${BB.offset}:${BB.format}`;
```

#### 214. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2642` → after: `L2642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2642) · [Before (L2642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2642)

```diff
-           Z2: kT,
+           q_: UB,
```

#### 215. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2722` → after: `L2722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2722) · [Before (L2722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2722)

```diff
-       return TT.gpu[dT.i.lite] ??= TT.materials.map(((UT, mT) => ({
+       return BB.gpu[fB.g.lite] ??= BB.materials.map(((jB, zB) => ({
```

#### 216. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2731` → after: `L2731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2731) · [Before (L2731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2731)

```diff
-       return null !== (UT = null !== (mT = null === (WT = TT.parts.materials[TT.range]) || void 0 === WT ? void 0 : WT.mirror) && void 0 !== mT ? mT : TT.owner.material) && void 0 !== UT ? UT : null
+       return null !== (jB = null !== (zB = null === (QB = BB.parts.materials[BB.range]) || void 0 === QB ? void 0 : QB.mirror) && void 0 !== zB ? zB : BB.owner.material) && void 0 !== jB ? jB : null
```

#### 217. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2740` → after: `L2740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2740) · [Before (L2740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2740)

```diff
-         this.selectedCount = 0, this.model = null, this.mirror = null, this.groups = new Map, this.batches = new WeakMap, this.rows = new Int32Array(0), this.frame = 0, this.warnOnce = (0, yU.c)("Lite: ")
+         this.selectedCount = 0, this.model = null, this.mirror = null, this.groups = new Map, this.batches = new WeakMap, this.rows = new Int32Array(0), this.frame = 0, this.warnOnce = (0, Fj.b)("Lite: ")
```

#### 218. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2746` → after: `L2746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2746) · [Before (L2746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2746)

```diff
-         return this.model.nodes.Nl
+         return this.model.nodes.zr
```

#### 219. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2769` → after: `L2769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2769) · [Before (L2769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2769)

```diff
-         this.rows.length < mT.nodes.fl && (this.rows = new Int32Array(mT.nodes.fl));
+         this.rows.length < zB.nodes.Ep && (this.rows = new Int32Array(zB.nodes.Ep));
```

#### 220. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2775` → after: `L2775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2775) · [Before (L2775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2775)

```diff
-           mT && !mT.isBlocked && mT.isEnabled() && !mT.gp.hasAZeroComponent && MT.selects(TT, UT.frustum) && (this.activate(mT, TT), this.selectedCount++)
+           zB && !zB.isBlocked && zB.isEnabled() && !zB.pp.hasAZeroComponent && dB.selects(BB, jB.frustum) && (this.activate(zB, BB), this.selectedCount++)
```

#### 221. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2796` → after: `L2796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2796) · [Before (L2796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2796)

```diff
-         if (!TT.RP) {
+         if (!BB.rY) {
```

#### 222. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2798` → after: `L2798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2798) · [Before (L2798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2798)

```diff
-           if (mT.ZzT) {
+           if (zB.bQB) {
```

#### 223. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2805-L2806` → after: `L2805-L2806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2805-L2806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2805-L2806) · [Before (L2805-L2806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2805-L2806)

```diff
-           WT = mT.czT;
-         if (WT._getWorldMatrixDeterminant() >= 0 !== mT._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${WT.name}`, `A mirrored InstancedMesh of ${WT.name} is not drawn yet`);
+           QB = zB.vQB;
+         if (QB._getWorldMatrixDeterminant() >= 0 !== zB._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${QB.name}`, `A mirrored InstancedMesh of ${QB.name} is not drawn yet`);
```

#### 224. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2864` → after: `L2864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2864) · [Before (L2864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2864)

```diff
-         this.fn = new Map, this.enabled = [], this.groups = new Map, this.Jp = [], this.warned = new Set, this.selected = 0, this.drawn = 0
+         this.DN = new Map, this.enabled = [], this.groups = new Map, this.Cs = [], this.warned = new Set, this.selected = 0, this.drawn = 0
```

#### 225. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2867` → after: `L2867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2867) · [Before (L2867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2867)

```diff
-         if (this.fn.has(TT)) return;
+         if (this.DN.has(BB)) return;
```

#### 226. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2871` → after: `L2871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2871) · [Before (L2871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2871)

```diff
-             this.Qy(UT, TT)
+             this.mH(jB, BB)
```

#### 227. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2876` → after: `L2876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2876) · [Before (L2876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2876)

```diff
-         this.fn.set(TT, UT), this.Qy(UT, TT.isEnabled())
+         this.DN.set(BB, jB), this.mH(jB, BB.isEnabled())
```

#### 228. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2879-L2880` → after: `L2879-L2880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2879-L2880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2879-L2880) · [Before (L2879-L2880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2879-L2880)

```diff
-         const UT = this.fn.get(TT);
-         UT && (UT.observer.remove(!0), this.Qy(UT, !1), this.fn.delete(TT))
+         const jB = this.DN.get(BB);
+         jB && (jB.observer.remove(!0), this.mH(jB, !1), this.DN.delete(BB))
```

#### 229. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2883` → after: `L2883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2883) · [Before (L2883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2883)

```diff
-         for (const TT of this.fn.values()) TT.steady = null
+         for (const BB of this.DN.values()) BB.steady = null
```

#### 230. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2886` → after: `L2886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2886) · [Before (L2886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2886)

```diff
-         return this.fn.get(TT)
+         return this.DN.get(BB)
```

#### 231. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2892` → after: `L2892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2892) · [Before (L2892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2892)

```diff
-           fn: this.fn.size
+           DN: this.DN.size
```

#### 232. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2900` → after: `L2900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2900) · [Before (L2900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2900)

```diff
-         for (const UT of this.Jp) TT(UT.mesh, "opaque", 0)
+         for (const jB of this.Cs) BB(jB.mesh, "opaque", 0)
```

#### 233. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2909` → after: `L2909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2909) · [Before (L2909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2909)

```diff
-         if (this.drawn = 0, this.selected = 0, this.Jp.length = 0, this.groups.forEach(IM), !TT) return;
+         if (this.drawn = 0, this.selected = 0, this.Cs.length = 0, this.groups.forEach(Ad), !BB) return;
```

#### 234. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2914` → after: `L2914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2914) · [Before (L2914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2914)

```diff
-             this.selected++, this.Jp.push(zT);
+             this.selected++, this.Cs.push(nB);
```

#### 235. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2918` → after: `L2918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2918) · [Before (L2918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2918)

```diff
-           if (MT.isBlocked || MT.gp.hasAZeroComponent) continue;
+           if (dB.isBlocked || dB.pp.hasAZeroComponent) continue;
```

#### 236. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2920-L2921` → after: `L2920-L2921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2920-L2921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2920-L2921) · [Before (L2920-L2921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2920-L2921)

```diff
-           if (MT.ZzT) {
-             this.warned.has(MT.name) || (this.warned.add(MT.name), console.warn(`Lite: thin instance base ${MT.name} has InstancedMeshes and is not drawn`));
+           if (dB.bQB) {
+             this.warned.has(dB.name) || (this.warned.add(dB.name), console.warn(`Lite: thin instance base ${dB.name} has InstancedMeshes and is not drawn`));
```

#### 237. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2954` → after: `L2954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2954) · [Before (L2954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2954)

```diff
-     var sM = mT(39700);
+     var Pd = zB(39663);
```

#### 238. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2957` → after: `L2957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2957) · [Before (L2957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2957)

```diff
-         this.bundle = null, this.stale = !0, this.fn = new Set
+         this.bundle = null, this.stale = !0, this.DN = new Set
```

#### 239. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2962-L2963` → after: `L2962-L2963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2962-L2963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2962-L2963) · [Before (L2962-L2963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2962-L2963)

```diff
-         this.device = TT, this.slots = UT, this.host = mT, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = n … [truncated]
-           TT.seen !== this.frame && (TT.draw && (TT.draw = null, this.args[5 * TT.slot + 1] = 0, this.argsDirty = !0, this.FQ.stale ||= TT.FQ), this.frame - TT.seen > 120 && (this.records.delete(TT.unit), this.freeSlots.push(TT.slot), TT.recorded && (this.bundleOf(TT).stale = !0) … [truncated]
+         this.device = BB, this.slots = jB, this.host = zB, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = n … [truncated]
+           BB.seen !== this.frame && (BB.draw && (BB.draw = null, this.args[5 * BB.slot + 1] = 0, this.argsDirty = !0, this.PD.stale ||= BB.PD), this.frame - BB.seen > 120 && (this.records.delete(BB.unit), this.freeSlots.push(BB.slot), BB.recorded && (this.bundleOf(BB).stale = !0) … [truncated]
```

#### 240. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2966` → after: `L2966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2966) · [Before (L2966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2966)

```diff
-           let WT = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (UT = null === (mT = globalThis.navigator) || void 0 === mT ? void 0 : mT.userAgent) && void 0 !== UT ? UT : "";
+           let QB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (jB = null === (zB = globalThis.navigator) || void 0 === zB ? void 0 : zB.userAgent) && void 0 !== jB ? jB : "";
```

#### 241. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2969` → after: `L2969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2969) · [Before (L2969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2969)

```diff
-         }(TT), (0, sM.L)(this.direct)
+         }(BB), (0, Pd.I)(this.direct)
```

#### 242. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2972` → after: `L2972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2972) · [Before (L2972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2972)

```diff
-         this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, sM.L)(this.directThisFrame)
+         this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, Pd.I)(this.directThisFrame)
```

#### 243. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2979` → after: `L2979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2979) · [Before (L2979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2979)

```diff
-         return TT.FQ ? this.FQ : this.main
+         return BB.PD ? this.PD : this.main
```

#### 244. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2985` → after: `L2985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2985) · [Before (L2985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2985)

```diff
-         TT.seen = this.frame, TT.FQ && null === TT.draw && (this.FQ.stale = !0), TT.draw = UT, this.drawn++, mT && this.slots.write(TT.slot, mT, WT) && (this.slotsFrom = Math.min(this.slotsFrom, TT.slot), this.slotsTo = Math.max(this.slotsTo, TT.slot));
+         BB.seen = this.frame, BB.PD && null === BB.draw && (this.PD.stale = !0), BB.draw = jB, this.drawn++, zB && this.slots.write(BB.slot, zB, QB) && (this.slotsFrom = Math.min(this.slotsFrom, BB.slot), this.slotsTo = Math.max(this.slotsTo, BB.slot));
```

#### 245. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2988` → after: `L2988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2988) · [Before (L2988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2988)

```diff
-         zT[MT] === UT.count && zT[MT + 1] === UT.instances && zT[MT + 2] === UT.first || (zT[MT] = UT.count, zT[MT + 1] = UT.instances, zT[MT + 2] = UT.first, this.argsDirty = !0, this.FQ.stale ||= TT.FQ)
+         nB[dB] === jB.count && nB[dB + 1] === jB.instances && nB[dB + 2] === jB.first || (nB[dB] = jB.count, nB[dB + 1] = jB.instances, nB[dB + 2] = jB.first, this.argsDirty = !0, this.PD.stale ||= BB.PD)
```

#### 246. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2994` → after: `L2994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2994) · [Before (L2994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2994)

```diff
-         for (const UT of this.records.values()) UT.draw && UT.seen === this.frame && !UT.FQ && TT(UT.draw, this.slots.data, UT.slot * jz / 4)
+         for (const jB of this.records.values()) jB.draw && jB.seen === this.frame && !jB.PD && BB(jB.draw, this.slots.data, jB.slot * Un / 4)
```

#### 247. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2997` → after: `L2997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L2997) · [Before (L2997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L2997)

```diff
-         this.main.stale ||= this.main.fn.has(TT), this.FQ.stale ||= this.FQ.fn.has(TT)
+         this.main.stale ||= this.main.DN.has(BB), this.PD.stale ||= this.PD.DN.has(BB)
```

#### 248. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3003-L3004` → after: `L3003-L3004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3003-L3004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3003-L3004) · [Before (L3003-L3004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3003-L3004)

```diff
-         if (!WT) return this.main.bundle = null, this.FQ.bundle = null, this.recordedSceneGroup = null, this.encode(TT, UT, mT, "direct"), this.drawn;
-         this.recordedTarget === mT && this.recordedSceneGroup === WT || (this.recordedTarget = mT, this.recordedSceneGroup = WT, this.main.stale = !0, this.FQ.stale = !0);
+         if (!QB) return this.main.bundle = null, this.PD.bundle = null, this.recordedSceneGroup = null, this.encode(BB, jB, zB, "direct"), this.drawn;
+         this.recordedTarget === zB && this.recordedSceneGroup === QB || (this.recordedTarget = zB, this.recordedSceneGroup = QB, this.main.stale = !0, this.PD.stale = !0);
```

#### 249. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3006` → after: `L3006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3006) · [Before (L3006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3006)

```diff
-           MT = this.FQ;
+           dB = this.PD;
```

#### 250. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3010` → after: `L3010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3010) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3010) · [Before (L3010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3010)

```diff
-         return (MT.stale || this.rangedEpoch !== nT) && (this.rangedEpoch = nT, MT.bundle = this.drawsRanged() ? this.record(UT, mT, WT, "FQ") : this.noRangedBundle(), gT = !0), gT && (this.bundles = MT.bundle ? [zT.bundle, MT.bundle] : [zT.bundle]), TT.executeBundles(this.bundle … [truncated]
+         return (dB.stale || this.rangedEpoch !== NB) && (this.rangedEpoch = NB, dB.bundle = this.drawsRanged() ? this.record(jB, zB, QB, "PD") : this.noRangedBundle(), IB = !0), IB && (this.bundles = dB.bundle ? [nB.bundle, dB.bundle] : [nB.bundle]), BB.executeBundles(this.bundle … [truncated]
```

#### 251. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3014` → after: `L3014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3014) · [Before (L3014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3014)

```diff
-           label: "FQ" === WT ? "thin-bases-ranged" : "thin-bases",
+           label: "PD" === QB ? "thin-bases-ranged" : "thin-bases",
```

#### 252. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3022-L3023` → after: `L3022-L3023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3022-L3023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3022-L3023) · [Before (L3022-L3023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3022-L3023)

```diff
-         for (const TT of this.records.values()) TT.FQ && (TT.recorded = !1);
-         return this.FQ.fn.clear(), this.FQ.stale = !1, null
+         for (const BB of this.records.values()) BB.PD && (BB.recorded = !1);
+         return this.PD.DN.clear(), this.PD.stale = !1, null
```

#### 253. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3027` → after: `L3027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3027) · [Before (L3027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3027)

```diff
-           if (TT.FQ && TT.draw) return !0;
+           if (BB.PD && BB.draw) return !0;
```

#### 254. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3032` → after: `L3032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3032) · [Before (L3032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3032)

```diff
-         for (const HT of this.records.values()) "direct" !== WT && HT.FQ !== ("FQ" === WT) || (HT.recorded = !1, HT.draw && zT.push(HT));
+         for (const uB of this.records.values()) "direct" !== QB && uB.PD !== ("PD" === QB) || (uB.recorded = !1, uB.draw && nB.push(uB));
```

#### 255. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3034-L3035` → after: `L3034-L3035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3034-L3035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3034-L3035) · [Before (L3034-L3035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3034-L3035)

```diff
-         const MT = "direct" === WT ? null : "FQ" === WT ? this.FQ : this.main;
-         null === MT || void 0 === MT || MT.fn.clear(), this.binder.reset();
+         const dB = "direct" === QB ? null : "PD" === QB ? this.PD : this.main;
+         null === dB || void 0 === dB || dB.DN.clear(), this.binder.reset();
```

#### 256. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3042` → after: `L3042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3042) · [Before (L3042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3042)

```diff
-             this.host.pipelineCompiling(zT, mT) ? gT = !0 : MT && this.keep(HT, zT, MT.fn);
+             this.host.pipelineCompiling(nB, zB) ? IB = !0 : dB && this.keep(uB, nB, dB.DN);
```

#### 257. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3046` → after: `L3046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3046) · [Before (L3046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3046)

```diff
-           if (HT.FQ && "indirect" !== WT) {
+           if (uB.PD && "indirect" !== QB) {
```

#### 258. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3048` → after: `L3048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3048) · [Before (L3048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3048)

```diff
-             jT = "direct" === WT && (0, sM.y)(TT) || (0, sM.p)(TT) || void 0
+             aB = "direct" === QB && (0, Pd.u)(BB) || (0, Pd.o)(BB) || void 0
```

#### 259. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3050` → after: `L3050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3050) · [Before (L3050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3050)

```diff
-           if (MT && this.keep(HT, zT, MT.fn), 0 === (null === (nT = jT) || void 0 === nT ? void 0 : nT.count)) continue;
+           if (dB && this.keep(uB, nB, dB.DN), 0 === (null === (NB = aB) || void 0 === NB ? void 0 : NB.count)) continue;
```

#### 260. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3073` → after: `L3073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3073) · [Before (L3073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3073)

```diff
-           FQ: void 0 !== (0, sM.p)(TT.owner),
+           PD: void 0 !== (0, Pd.o)(BB.owner),
```

#### 261. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3086` → after: `L3086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3086) · [Before (L3086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3086)

```diff
-         if (this.slots.ensure(this.slotCount) && (this.slotsFrom = 0, this.slotsTo = this.slotCount - 1, this.main.stale = !0, this.FQ.stale = !0), 5 * this.slotCount > this.args.length) {
+         if (this.slots.ensure(this.slotCount) && (this.slotsFrom = 0, this.slotsTo = this.slotCount - 1, this.main.stale = !0, this.PD.stale = !0), 5 * this.slotCount > this.args.length) {
```

#### 262. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3129` → after: `L3129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3129) · [Before (L3129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3129)

```diff
-       const WT = `${UT.depth?"-depth":""}${UT.sunShadow?"-shadow":""}${UT.shadowMask?"-mask":""}`;
+       const QB = `${jB.depth?"-depth":""}${jB.sunShadow?"-shadow":""}${jB.shadowMask?"-mask":""}`;
```

#### 263. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3133` → after: `L3133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3133) · [Before (L3133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3133)

```diff
-           binding: DU.e,
+           binding: bj.d,
```

#### 264. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3137` → after: `L3137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3137) · [Before (L3137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3137)

```diff
-             minBindingSize: DU.m
+             minBindingSize: bj.k
```

#### 265. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3140` → after: `L3140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3140) · [Before (L3140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3140)

```diff
-           binding: DU.E,
+           binding: bj.C,
```

#### 266. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3154` → after: `L3154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3154) · [Before (L3154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3154)

```diff
-             UT = DU.x;
+             jB = bj.v;
```

#### 267. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3162` → after: `L3162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3162) · [Before (L3162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3162)

```diff
-             binding: UT.iL,
+             binding: jB.Vr,
```

#### 268. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3200` → after: `L3200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3200) · [Before (L3200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3200)

```diff
-           binding: DU.A,
+           binding: bj.y,
```

#### 269. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3206` → after: `L3206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3206) · [Before (L3206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3206)

```diff
-           label: `${UT.depth?"terrain-":""}shader-pack-inputs${WT}`,
+           label: `${jB.depth?"terrain-":""}shader-pack-inputs${QB}`,
```

#### 270. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3219` → after: `L3219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3219) · [Before (L3219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3219)

```diff
-       const mT = (0, oU.d)(TT);
+       const zB = (0, vj.f)(BB);
```

#### 271. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3236` → after: `L3236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3236) · [Before (L3236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3236)

```diff
-         this.device = TT, this.sunShadow = mT, this.bindGroup = void 0, this.buffer = void 0, this.textures = void 0, this.data = new ArrayBuffer(DU.m), this.groups = new Map, this.depthView = null, this.maskView = null, this.buffer = TT.createBuffer({
+         this.device = BB, this.sunShadow = zB, this.bindGroup = void 0, this.buffer = void 0, this.textures = void 0, this.data = new ArrayBuffer(bj.k), this.groups = new Map, this.depthView = null, this.maskView = null, this.buffer = BB.createBuffer({
```

#### 272. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3238` → after: `L3238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3238) · [Before (L3238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3238)

```diff
-           size: DU.m,
+           size: bj.k,
```

#### 273. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3241` → after: `L3241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3241) · [Before (L3241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3241)

```diff
-         const WT = (0, DU.F)(UT);
+         const QB = (0, bj.E)(jB);
```

#### 274. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3254` → after: `L3254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3254) · [Before (L3254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3254)

```diff
-           binding: DU.e,
+           binding: bj.d,
```

#### 275. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3259` → after: `L3259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3259) · [Before (L3259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3259)

```diff
-           binding: DU.E,
+           binding: bj.C,
```

#### 276. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3266` → after: `L3266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3266) · [Before (L3266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3266)

```diff
-         (0, DU.K)(this.data, {
+         (0, bj.J)(this.data, {
```

#### 277. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3270` → after: `L3270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3270) · [Before (L3270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3270)

```diff
-           zTT: TT.zTT(),
+           J7: BB.J7(),
```

#### 278. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3280` → after: `L3280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3280) · [Before (L3280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3280)

```diff
-         (TT && TT !== this.depthView || mT && mT !== this.maskView) && (this.depthView = null !== TT && void 0 !== TT ? TT : this.depthView, this.maskView = null !== mT && void 0 !== mT ? mT : this.maskView, this.groups.clear());
+         (BB && BB !== this.depthView || zB && zB !== this.maskView) && (this.depthView = null !== BB && void 0 !== BB ? BB : this.depthView, this.maskView = null !== zB && void 0 !== zB ? zB : this.maskView, this.groups.clear());
```

#### 279. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3289` → after: `L3289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3289) · [Before (L3289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3289)

```diff
-             binding: DU.A,
+             binding: bj.y,
```

#### 280. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3292` → after: `L3292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3292) · [Before (L3292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3292)

```diff
-             label: `${TT||mT?"terrain-":""}shader-pack-inputs${TT?"-depth":""}${WT?"-shadow":""}${mT?"-mask":""}`,
+             label: `${BB||zB?"terrain-":""}shader-pack-inputs${BB?"-depth":""}${QB?"-shadow":""}${zB?"-mask":""}`,
```

#### 281. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3306` → after: `L3306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3306) · [Before (L3306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3306)

```diff
-         TT.setBindGroup(DU.i, this.bindGroupFor(UT, mT, WT))
+         BB.setBindGroup(bj.h, this.bindGroupFor(jB, zB, QB))
```

#### 282. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3327-L3328` → after: `L3327-L3328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3327-L3328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3327-L3328) · [Before (L3327-L3328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3327-L3328)

```diff
-         const HT = TT.Z2[MT] + (gT ? UT.gpuOffset(gT) : 0);
-         HT !== (null !== (zT = WT) && void 0 !== zT ? zT : TT.offsets)[MT] && (WT ??= TT.offsets.slice(), WT[MT] = HT), TT.ends[MT] = gT ? UT.gpuEnd(gT) : nT.size
+         const uB = BB.q_[dB] + (IB ? jB.gpuOffset(IB) : 0);
+         uB !== (null !== (nB = QB) && void 0 !== nB ? nB : BB.offsets)[dB] && (QB ??= BB.offsets.slice(), QB[dB] = uB), BB.ends[dB] = IB ? jB.gpuEnd(IB) : NB.size
```

#### 283. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3340` → after: `L3340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3340) · [Before (L3340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3340)

```diff
-         Z2: HT
+         q_: uB
```

#### 284. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3356-L3357` → after: `L3356-L3357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3356-L3357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3356-L3357) · [Before (L3356-L3357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3356-L3357)

```diff
-     var RM = mT(37947),
-       Tg = mT(37976);
+     var QI = zB(37908),
+       nI = zB(37936);
```

#### 285. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3361` → after: `L3361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3361) · [Before (L3361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3361)

```diff
-       zg = `((vertexInputs.aPackedLightLevels >> 16u) | ${aU.c.placed}u)`,
+       uI = `((vertexInputs.aPackedLightLevels >> 16u) | ${Dj.e.placed}u)`,
```

#### 286. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3363` → after: `L3363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3363) · [Before (L3363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3363)

```diff
-       gg = `${aU.c.lifeform}u`;
+       aI = `${Dj.e.lifeform}u`;
```

#### 287. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3399` → after: `L3399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3399) · [Before (L3399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3399)

```diff
-           vertexFlags: `(${Mg} & 0xffffu)`,
+           vertexFlags: `(${UI} & 0xffffu)`,
```

#### 288. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3416` → after: `L3416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3416) · [Before (L3416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3416)

```diff
-       return "lifeform" === TT.kind ? gg : "0u"
+       return "lifeform" === BB.kind ? aI : "0u"
```

#### 289. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3427` → after: `L3427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3427) · [Before (L3427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3427)

```diff
-       return mT && Zg(UT.defines) && "lifeform" === UT.kind && Og(TT, "enchantTier") ? mT : null
+       return zB && LI(jB.defines) && "lifeform" === jB.kind && qI(BB, "enchantTier") ? zB : null
```

#### 290. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3441` → after: `L3441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3441) · [Before (L3441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3441)

```diff
-       return `vec4f(${UT.colour}.rgb * uniforms.vDiffuseInfos.y${WT?" * fragmentInputs.vColor.rgb":""}, ${UT.colour}.a)`
+       return `vec4f(${jB.colour}.rgb * uniforms.vDiffuseInfos.y${QB?" * fragmentInputs.vColor.rgb":""}, ${jB.colour}.a)`
```

#### 291. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3460` → after: `L3460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3460) · [Before (L3460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3460)

```diff
-         uv: `fragmentInputs.${1===mT.DIFFUSEDIRECTUV?"vMainUV1":2===mT.DIFFUSEDIRECTUV?"vMainUV2":"vDiffuseUV"}`
+         uv: `fragmentInputs.${1===zB.DIFFUSEDIRECTUV?"vMainUV1":2===zB.DIFFUSEDIRECTUV?"vMainUV2":"vDiffuseUV"}`
```

#### 292. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3467-L3469` → after: `L3467-L3469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3467-L3469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3467-L3469) · [Before (L3467-L3469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3467-L3469)

```diff
-       const MT = OT.e.WGSL,
-         gT = (0, OT.zb)(MT, "uAnimStatesNum"),
-         nT = (0, OT.db)(MT, (0, RM.e)(MT), gT),
+       const dB = SB.c.WGSL,
+         IB = (0, SB.Ab)(dB, "uAnimStatesNum"),
+         NB = (0, SB.hb)(dB, (0, QI.g)(dB), IB),
```

#### 293. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3473` → after: `L3473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3473) · [Before (L3473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3473)

```diff
-         cells: `vec2f(1.0, ${gT})`,
+         cells: `vec2f(1.0, ${IB})`,
```

#### 294. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3475` → after: `L3475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3475) · [Before (L3475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3475)

```diff
-         uv: `vec2f(${HT}.x, ${HT}.y * ${gT} - ${nT})`,
+         uv: `vec2f(${uB}.x, ${uB}.y * ${IB} - ${NB})`,
```

#### 295. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3498` → after: `L3498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3498) · [Before (L3498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3498)

```diff
-       if (1 !== zT.length) throw new Error(`A model program for shader packs has ${0===zT.length?"no":"more than one"} ${WT} code before fog (lite/modelShaderPack.ts)`);
+       if (1 !== nB.length) throw new Error(`A model program for shader packs has ${0===nB.length?"no":"more than one"} ${QB} code before fog (lite/modelShaderPack.ts)`);
```

#### 296. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3510` → after: `L3510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3510) · [Before (L3510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3510)

```diff
-       UT.atlas && zT.surface && nT.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", pW("atlasIdxIn")]), "item" === MT && nT.push(["CUSTOM_VERTEX_DEFINITIONS", (0, OT.f)(OT.e.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS … [truncated]
+       jB.atlas && nB.surface && NB.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", rQ("atlasIdxIn")]), "item" === dB && NB.push(["CUSTOM_VERTEX_DEFINITIONS", (0, SB.g)(SB.c.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS … [truncated]
```

#### 297. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3512` → after: `L3512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3512) · [Before (L3512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3512)

```diff
-       kT && (zT.surface || zT.light) && nT.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${kT.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${kT.varying} = ${kT.value};`]);
+       UB && (nB.surface || nB.light) && NB.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${UB.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${UB.varying} = ${UB.value};`]);
```

#### 298. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3514` → after: `L3514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3514) · [Before (L3514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3514)

```diff
-       if (jg(TT, UT, "fragment") && (nT.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${kg});`]), jT = [...jT, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), Og(TT, … [truncated]
+       if (JI(BB, jB, "fragment") && (NB.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${sI});`]), aB = [...aB, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), qI(BB, … [truncated]
```

#### 299. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3517-L3519` → after: `L3517-L3519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3517-L3519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3517-L3519) · [Before (L3517-L3519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3517-L3519)

```diff
-         mT && nT.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${mT});`]);
-         const WT = (0, OT.lb)(OT.e.WGSL, "color", "mix(color.xyz, bloxdSpSurface.enchantColour.rgb, bloxdSpSurface.enchantColour.a)");
-         jT = [...Yg(jT, (0, Tg.e)(OT.e.WGSL), WT, "enchantment"), ["CUSTOM_FRAGMENT_DEFINITIONS", (0, Tg.b)(Hg)]]
+         zB && NB.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${zB});`]);
+         const QB = (0, SB.qb)(SB.c.WGSL, "color", "mix(color.xyz, bloxdSpSurface.enchantColour.rgb, bloxdSpSurface.enchantColour.a)");
+         aB = [...oI(aB, (0, nI.f)(SB.c.WGSL), QB, "enchantment"), ["CUSTOM_FRAGMENT_DEFINITIONS", (0, nI.c)(rI)]]
```

#### 300. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3528-L3529` → after: `L3528-L3529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3528-L3529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3528-L3529) · [Before (L3528-L3529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3528-L3529)

```diff
-           engine: (0, NU.T)(OT.e.WGSL),
-           pack: (0, NU.jb)(OT.e.WGSL)
+           engine: (0, Kj.R)(SB.c.WGSL),
+           pack: (0, Kj.fb)(SB.c.WGSL)
```

#### 301. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3532-L3533` → after: `L3532-L3533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3532-L3533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3532-L3533) · [Before (L3532-L3533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3532-L3533)

```diff
-           engine: (0, NU.Q)(OT.e.WGSL),
-           pack: (0, NU.fb)(OT.e.WGSL)
+           engine: (0, Kj.J)(SB.c.WGSL),
+           pack: (0, Kj.cb)(SB.c.WGSL)
```

#### 302. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3536-L3538` → after: `L3536-L3538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3536-L3538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3536-L3538) · [Before (L3536-L3538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3536-L3538)

```diff
-       if (LT && (jT = Yg(jT, LT.engine, LT.pack, `${LT.name} light`), "placed" !== MT && eg(gT))) {
-         const TT = gT.BLOXD_UNIFORM_ENTITY_LIGHT ? (0, OT.zb)(OT.e.WGSL, "uEntityLightLevels") : (0, OT.Eb)(OT.e.WGSL, "aLightLevels");
-         nT.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${NU.e}: vec4f;`], ["CUSTOM_VERTEX_MAIN_END", (0, NU.hb)(OT.e.WGSL, TT)])
+       if (rB && (aB = oI(aB, rB.engine, rB.pack, `${rB.name} light`), "placed" !== dB && fI(IB))) {
+         const BB = IB.BLOXD_UNIFORM_ENTITY_LIGHT ? (0, SB.Ab)(SB.c.WGSL, "uEntityLightLevels") : (0, SB.Gb)(SB.c.WGSL, "aLightLevels");
+         NB.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${Kj.c}: vec4f;`], ["CUSTOM_VERTEX_MAIN_END", (0, Kj.eb)(SB.c.WGSL, BB)])
```

#### 303. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3553` → after: `L3553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3553) · [Before (L3553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3553)

```diff
-       return `${mT}${UT}${TT.slice(mT.length)}`
+       return `${zB}${jB}${BB.slice(zB.length)}`
```

#### 304. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3567` → after: `L3567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3567) · [Before (L3567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3567)

```diff
-         } = UT, gT = pg(UT), nT = !!MT.FOG, HT = Zg(MT), kT = null !== (mT = null === gT || void 0 === gT ? void 0 : gT.enchantTier) && void 0 !== mT ? mT : cg(TT, UT) ? "fragmentInputs.vPackEnchantTier" : "0u", jT = "lifeform" === UT.kind && !MT.ALPHAFROMDIFFUSE;
+         } = jB, IB = kI(jB), NB = !!dB.FOG, uB = LI(dB), UB = null !== (zB = null === IB || void 0 === IB ? void 0 : IB.enchantTier) && void 0 !== zB ? zB : gI(BB, jB) ? "fragmentInputs.vPackEnchantTier" : "0u", aB = "lifeform" === jB.kind && !dB.ALPHAFROMDIFFUSE;
```

#### 305. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3569` → after: `L3569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3569) · [Before (L3569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3569)

```diff
-           vertexFlags: null !== (WT = null === gT || void 0 === gT ? void 0 : gT.vertexFlags) && void 0 !== WT ? WT : Bg(UT),
+           vertexFlags: null !== (QB = null === IB || void 0 === IB ? void 0 : IB.vertexFlags) && void 0 !== QB ? QB : GI(jB),
```

#### 306. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3571` → after: `L3571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3571) · [Before (L3571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3571)

```diff
-           flags: null !== (zT = null === gT || void 0 === gT ? void 0 : gT.flags) && void 0 !== zT ? zT : Bg(UT),
+           flags: null !== (nB = null === IB || void 0 === IB ? void 0 : IB.flags) && void 0 !== nB ? nB : GI(jB),
```

#### 307. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3582` → after: `L3582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3582) · [Before (L3582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3582)

```diff
-           enchantColour: HT ? `${Hg}(fragmentInputs.vEnchantRgbAndRotY, fragmentInputs.vPositionAndAnimTick, baseColor.rgb)` : "vec4f(0.0)",
+           enchantColour: uB ? `${rI}(fragmentInputs.vEnchantRgbAndRotY, fragmentInputs.vPositionAndAnimTick, baseColor.rgb)` : "vec4f(0.0)",
```

#### 308. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3595` → after: `L3595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3595) · [Before (L3595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3595)

```diff
-             Cl: "frame.animTick",
+             vp: "frame.animTick",
```

#### 309. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3598` → after: `L3598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3598) · [Before (L3598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3598)

```diff
-             perTexture: TT => `uniforms.uAnimDataPerTex[${TT}]${UT}`
+             perTexture: BB => `uniforms.uAnimDataPerTex[${BB}]${jB}`
```

#### 310. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3601` → after: `L3601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3601) · [Before (L3601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3601)

```diff
-       } : null, lT = "placed" === gT ? "var<private> bloxdSpCell: vec3f;\nfn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\tlet bloxdSpBehind = bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0);\n\tlet bloxdSpInside = all(abs(bloxdSpBehind - b … [truncated]
+       } : null, pB = "placed" === IB ? "var<private> bloxdSpCell: vec3f;\nfn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\tlet bloxdSpBehind = bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0);\n\tlet bloxdSpInside = all(abs(bloxdSpBehind - b … [truncated]
```

#### 311. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3603` → after: `L3603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3603) · [Before (L3603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3603)

```diff
-         return `${(0,DU.H)()}${HW(UT,mT)}${WT}${ZW(TT)}${UW}${lT}${UT.code}`
+         return `${(0,bj.I)()}${NQ(jB,zB)}${QB}${JQ(BB)}${BQ}${pB}${jB.code}`
```

#### 312. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3611-L3612` → after: `L3611-L3612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3611-L3612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3611-L3612) · [Before (L3611-L3612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3611-L3612)

```diff
-         const TT = jg(UT, mT, "vertex") ? `\tbloxdSpCell = ${kg};\n` : "";
-         BT = xg(BT, Ug, `${TT}${cT.slice(1)}${Ug}`, "vertex")
+         const BB = JI(jB, zB, "vertex") ? `\tbloxdSpCell = ${sI};\n` : "";
+         JB = DI(JB, dI, `${BB}${yB.slice(1)}${dI}`, "vertex")
```

#### 313. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3614-L3615` → after: `L3614-L3615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3614-L3615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3614-L3615) · [Before (L3614-L3615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3614-L3615)

```diff
-       const vT = `${kW(UT,MT,function(TT,UT){return UT.TWOSIDEDLIGHTING?TT:`select(-(${TT}), ${TT}, fragmentInputs.frontFacing)`}(HT.normal,nT),HT.flags)}${fW(zT,UT.strict,UT.program,LT,HT)}`;
-       vT && (ZT = xg(ZT, mg, `${vT.slice(1)}${mg}`, "surface")), MT && UT.sunShadow && !nT.TWOSIDEDLIGHTING && (ZT = xg(ZT, dg, `${dg}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
+       const kB = `${uQ(jB,dB,function(BB,jB){return jB.TWOSIDEDLIGHTING?BB:`select(-(${BB}), ${BB}, fragmentInputs.frontFacing)`}(uB.normal,NB),uB.flags)}${kQ(nB,jB.strict,jB.program,rB,uB)}`;
+       kB && (mB = DI(mB, II, `${kB.slice(1)}${II}`, "surface")), dB && jB.sunShadow && !NB.TWOSIDEDLIGHTING && (mB = DI(mB, FI, `${FI}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
```

#### 314. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3619` → after: `L3619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3619) · [Before (L3619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3619)

```diff
-         ZT = xg(ZT, Wg, `${TT}${fT.slice(1)}${Wg}`, "light")
+         mB = DI(mB, NI, `${BB}${GB.slice(1)}${NI}`, "light")
```

#### 315. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3621` → after: `L3621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3621) · [Before (L3621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3621)

```diff
-       const qT = bg(UT, mT) ? LW : "";
+       const LB = iI(jB, zB) ? pQ : "";
```

#### 316. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3649` → after: `L3649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3649) · [Before (L3649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3649)

```diff
-         this.device = TT, this.resources = UT, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.I3 = void 0, this.modelMeshes = void 0, this.thinBundle = void 0, this.binder = new Rz, this.sc … [truncated]
+         this.device = BB, this.resources = jB, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.M_ = void 0, this.modelMeshes = void 0, this.thinBundle = void 0, this.binder = new jd, this.sc … [truncated]
```

#### 317. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3676` → after: `L3676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3676) · [Before (L3676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3676)

```diff
-           pipelineCompiling: (TT, UT) => !TT.program.failed && !1 !== this.pipelines.get(`${TT.pipelineKey}|${UT}`),
+           pipelineCompiling: (BB, jB) => !BB.program.failed && !1 !== this.pipelines.get(`${BB.pipelineKey}|${jB}`),
```

#### 318. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3701-L3703` → after: `L3701-L3703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3701-L3703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3701-L3703) · [Before (L3701-L3703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3701-L3703)

```diff
-         this.frame++, this.view = UT, this.drawDefines.view = UT, this.thinBundle.fY(), this.writeFrameUniforms();
-         const MT = null !== (WT = null === zT || void 0 === zT ? void 0 : zT.defineFor("model")) && void 0 !== WT ? WT : 0;
-         this.drawDefines.modelPackVariant = MT, zT && 0 !== MT && (this.packInputs ??= new hM(this.device, zT.textureLayers(), this.sunShadow), this.packInputs.write(zT, UT.eye, zT.dZ())), this.lists.clear(), this.slotCount = 0;
+         this.frame++, this.view = jB, this.drawDefines.view = jB, this.thinBundle.gL(), this.writeFrameUniforms();
+         const dB = null !== (QB = null === nB || void 0 === nB ? void 0 : nB.defineFor("model")) && void 0 !== QB ? QB : 0;
+         this.drawDefines.modelPackVariant = dB, nB && 0 !== dB && (this.packInputs ??= new Od(this.device, nB.textureLayers(), this.sunShadow), this.packInputs.write(nB, jB.eye, nB.Rm())), this.lists.clear(), this.slotCount = 0;
```

#### 319. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3705` → after: `L3705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3705) · [Before (L3705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3705)

```diff
-         this.I3.select(gT, this.keepSteadyBase), this.modelMeshes.select(gT, UT), mT && this.pushEarthSky(mT), this.lists.collect(TT), this.thinBundle.qY(), this.uploadMeshSlots()
+         this.M_.select(IB, this.keepSteadyBase), this.modelMeshes.select(IB, jB), zB && this.pushEarthSky(zB), this.lists.collect(BB), this.thinBundle.tL(), this.uploadMeshSlots()
```

#### 320. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3736` → after: `L3736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3736) · [Before (L3736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3736)

```diff
-           zT = this.I3.base(WT),
+           nB = this.M_.base(QB),
```

#### 321. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3770-L3772` → after: `L3770-L3772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3770-L3772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3770-L3772) · [Before (L3770-L3772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3770-L3772)

```diff
-           HT = WT.forcedInstanceCount || WT.i5;
-         if (!WT.isVisible || WT.ZzT || WT.visibility !== mT.visibility || 0 === (WT.layerMask & UT.layerMask) || WT.material !== mT.material || 0 !== WT.renderingGroupId || WT.hasVertexAlpha || !this.drawDefines.definesHold(nT, zT, nT.instancing) || mT.gpuVersion !== this.resourc … [truncated]
-         if (gT.frame !== this.frame && this.bindMaterial(gT, this.modelUniforms.refreshModelUniforms(WT.KF(), gT, gT.model, this.view)), !gT.bindable || gT.bindGroup !== mT.bindGroup) return !1;
+           uB = QB.forcedInstanceCount || QB.F_;
+         if (!QB.isVisible || QB.bQB || QB.visibility !== zB.visibility || 0 === (QB.layerMask & jB.layerMask) || QB.material !== zB.material || 0 !== QB.renderingGroupId || QB.hasVertexAlpha || !this.drawDefines.definesHold(NB, nB, NB.instancing) || zB.gpuVersion !== this.resourc … [truncated]
+         if (IB.frame !== this.frame && this.bindMaterial(IB, this.modelUniforms.refreshModelUniforms(QB.aY(), IB, IB.model, this.view)), !IB.bindable || IB.bindGroup !== zB.bindGroup) return !1;
```

#### 322. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3775` → after: `L3775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3775) · [Before (L3775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3775)

```diff
-         return mT.worldFlag = kT.updateFlag, MT.instances = HT, this.thinBundle.addAgain(mT.record, MT, jT ? kT.m : null, mT.visibility), mT.handedFrame = this.frame, this.I3.drawn++, !0
+         return zB.worldFlag = UB.updateFlag, dB.instances = uB, this.thinBundle.addAgain(zB.record, dB, aB ? UB.m : null, zB.visibility), zB.handedFrame = this.frame, this.M_.drawn++, !0
```

#### 323. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3833` → after: `L3833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3833) · [Before (L3833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3833)

```diff
-             }(MT)) return this.warnOnce(`lines:${gT}`, `A LinesMesh with a ${gT} is not drawn yet (${MT.name})`), null;
+             }(dB)) return this.warnOnce(`lines:${IB}`, `A LinesMesh with a ${IB} is not drawn yet (${dB.name})`), null;
```

#### 324. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3835` → after: `L3835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3835) · [Before (L3835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3835)

```diff
-         } else if ("StandardMaterial" !== gT && "LiteMaterial" !== gT) return this.warnOnce(`class:${gT}`, `${gT} is not drawn yet (${MT.name})`), null;
+         } else if ("StandardMaterial" !== IB && "LiteMaterial" !== IB) return this.warnOnce(`class:${IB}`, `${IB} is not drawn yet (${dB.name})`), null;
```

#### 325. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3850` → after: `L3850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3850) · [Before (L3850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3850)

```diff
-         const vT = this.renderStates.renderState(null !== lT && void 0 !== lT ? lT : MT, zT, WT, BT.state, nT ? "line-list" : "triangle-list"),
+         const kB = this.renderStates.renderState(null !== pB && void 0 !== pB ? pB : dB, nB, QB, JB.state, NB ? "line-list" : "triangle-list"),
```

#### 326. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3861` → after: `L3861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3861) · [Before (L3861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3861)

```diff
-         TT.unit = UT, TT.first = UT.parts.hZ[zT], TT.count = UT.parts.hZ[zT + 1]
+         BB.unit = jB, BB.first = jB.parts.gy[nB], BB.count = jB.parts.gy[nB + 1]
```

#### 327. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3864` → after: `L3864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3864) · [Before (L3864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3864)

```diff
-         UT.state !== mT && (UT.state = mT, UT.pipelineKey = `${TT.id}|${UT.layout.key}|${mT.key}`, UT.pipeline = null);
+         jB.state !== zB && (jB.state = zB, jB.pipelineKey = `${BB.id}|${jB.layout.key}|${zB.key}`, jB.pipeline = null);
```

#### 328. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3887` → after: `L3887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3887) · [Before (L3887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3887)

```diff
-             return TT.forcedInstanceCount || TT.i5;
+             return BB.forcedInstanceCount || BB.F_;
```

#### 329. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3900` → after: `L3900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3900) · [Before (L3900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3900)

```diff
-             if (WT.layout === (null !== (zT = null === mT || void 0 === mT ? void 0 : mT.interleavedKinds) && void 0 !== zT ? zT : null)) return WT;
+             if (QB.layout === (null !== (nB = null === zB || void 0 === zB ? void 0 : zB.interleavedKinds) && void 0 !== nB ? nB : null)) return QB;
```

#### 330. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3912` → after: `L3912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3912) · [Before (L3912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3912)

```diff
-             const zT = (0, JT.s)(TT, eT.i.name),
+             const nB = (0, iB.w)(BB, MB.h.name),
```

#### 331. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3921` → after: `L3921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3921) · [Before (L3921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3921)

```diff
-               const TT = jT ? null === (gT = (nT = (0, XU.g)(HT)).Np) || void 0 === gT ? void 0 : gT.call(nT, kT) : void 0;
+               const BB = aB ? null === (IB = (NB = (0, Yj.g)(uB)).mJ) || void 0 === IB ? void 0 : IB.call(NB, UB) : void 0;
```

#### 332. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3935` → after: `L3935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3935) · [Before (L3935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3935)

```diff
-           const mT = this.modelPackProgram(TT, UT, `${zT}#${MT}#sp${this.drawDefines.modelPackVariant}`, WT, gT);
+           const zB = this.modelPackProgram(BB, jB, `${nB}#${dB}#sp${this.drawDefines.modelPackVariant}`, QB, IB);
```

#### 333. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3939` → after: `L3939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3939) · [Before (L3939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3939)

```diff
-         if (nT || this.unbuildable.has(zT)) return null !== nT && void 0 !== nT ? nT : null;
+         if (NB || this.unbuildable.has(nB)) return null !== NB && void 0 !== NB ? NB : null;
```

#### 334. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3949` → after: `L3949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3949) · [Before (L3949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3949)

```diff
-           return this.unbuildable.add(zT), this.warnOnce(`build:${zT}`, `could not build a program for ${TT.name}: ${String(kT)}`), null
+           return this.unbuildable.add(nB), this.warnOnce(`build:${nB}`, `could not build a program for ${BB.name}: ${String(UB)}`), null
```

#### 335. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3955` → after: `L3955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3955) · [Before (L3955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3955)

```diff
-         if (MT || this.unbuildable.has(mT)) return null !== MT && void 0 !== MT ? MT : null;
+         if (dB || this.unbuildable.has(zB)) return null !== dB && void 0 !== dB ? dB : null;
```

#### 336. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3960` → after: `L3960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3960) · [Before (L3960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3960)

```diff
-               return (0, oU.b)(TT, "model")
+               return (0, vj.e)(BB, "model")
```

#### 337. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3969` → after: `L3969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3969) · [Before (L3969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3969)

```diff
-           return this.unbuildable.add(mT), this.warnOnce(`build:${mT}`, `could not build a shader pack program for ${TT.name}, which draws without the pack: ${String(jT)}`), null
+           return this.unbuildable.add(zB), this.warnOnce(`build:${zB}`, `could not build a shader pack program for ${BB.name}, which draws without the pack: ${String(aB)}`), null
```

#### 338. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3980` → after: `L3980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3980) · [Before (L3980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3980)

```diff
-           return `standard-sp${TT}`
+           return `standard-sp${BB}`
```

#### 339. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3987` → after: `L3987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L3987) · [Before (L3987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L3987)

```diff
-         return zT || (zT = this.createProgram(`lines#${WT}`, (MT = function(TT) {
+         return nB || (nB = this.createProgram(`lines#${QB}`, (dB = function(BB) {
```

#### 340. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4003` → after: `L4003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L4003) · [Before (L4003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L4003)

```diff
-           gT = `${mT}-${MT}`,
+           IB = `${zB}-${dB}`,
```

#### 341. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4033` → after: `L4033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L4033) · [Before (L4033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L4033)

```diff
-               label: `${gT}-vertex`,
+               label: `${IB}-vertex`,
```

#### 342. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4037` → after: `L4037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L4037) · [Before (L4037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L4037)

```diff
-               label: `${gT}-fragment`,
+               label: `${IB}-fragment`,
```

#### 343. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4045` → after: `L4045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L4045) · [Before (L4045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L4045)

```diff
-             packGroup: null !== (WT = null === zT || void 0 === zT ? void 0 : zT.group) && void 0 !== WT ? WT : null,
+             packGroup: null !== (QB = null === nB || void 0 === nB ? void 0 : nB.group) && void 0 !== QB ? QB : null,
```

#### 344. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4063` → after: `L4063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L4063) · [Before (L4063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L4063)

```diff
-           TT.SF.addOnce((() => {
+           BB.pY.addOnce((() => {
```

#### 345. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4078-L4079` → after: `L4078-L4079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4078-L4079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L4078-L4079) · [Before (L4078-L4079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L4078-L4079)

```diff
-         let mT = TT.gpu[dT.i.lite];
-         return (null === (UT = mT) || void 0 === UT ? void 0 : UT.epoch) !== this.resources.epoch && (mT = new yg(this.resources, this.resources.epoch), TT.gpu[dT.i.lite] = mT), mT
+         let zB = BB.gpu[fB.g.lite];
+         return (null === (jB = zB) || void 0 === jB ? void 0 : jB.epoch) !== this.resources.epoch && (zB = new XI(this.resources, this.resources.epoch), BB.gpu[fB.g.lite] = zB), zB
```

#### 346. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4092` → after: `L4092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L4092) · [Before (L4092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L4092)

```diff
-             label: `${TT.name}-uniforms`,
+             label: `${BB.name}-uniforms`,
```

#### 347. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4119` → after: `L4119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L4119) · [Before (L4119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L4119)

```diff
-         const MT = null !== (UT = zT.state) && void 0 !== UT ? UT : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
+         const dB = null !== (jB = nB.state) && void 0 !== jB ? jB : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
```

#### 348. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4146` → after: `L4146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L4146) · [Before (L4146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L4146)

```diff
-           nT ? mT[2 * gT] === nT.view && mT[2 * gT + 1] === nT.sampler || (mT[2 * gT] = nT.view, mT[2 * gT + 1] = nT.sampler, zT = !0) : (UT || TT.ubo.expected.has(WT[gT].name) || this.warnOnce(`texture:${TT.owner.name}:${WT[gT].name}`, `${TT.owner.name} has no ${WT[gT].name}`),  … [truncated]
+           NB ? zB[2 * IB] === NB.view && zB[2 * IB + 1] === NB.sampler || (zB[2 * IB] = NB.view, zB[2 * IB + 1] = NB.sampler, nB = !0) : (jB || BB.ubo.expected.has(QB[IB].name) || this.warnOnce(`texture:${BB.owner.name}:${QB[IB].name}`, `${BB.owner.name} has no ${QB[IB].name}`),  … [truncated]
```

#### 349. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4164` → after: `L4164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L4164) · [Before (L4164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L4164)

```diff
-             label: `${TT.owner.name}-material`,
+             label: `${BB.owner.name}-material`,
```

#### 350. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4182` → after: `L4182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L4182) · [Before (L4182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L4182)

```diff
-           if (MT = null !== (gT = this.vertexLayouts.resolveInputs(UT, mT, WT, zT)) && void 0 !== gT ? gT : void 0, !MT) return null;
+           if (dB = null !== (IB = this.vertexLayouts.resolveInputs(jB, zB, QB, nB)) && void 0 !== IB ? IB : void 0, !dB) return null;
```

#### 351. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4201` → after: `L4201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L4201) · [Before (L4201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L4201)

```diff
-         return DM(TT, this.resources, this.zeroBuffer) ? TT : null
+         return BI(BB, this.resources, this.zeroBuffer) ? BB : null
```

#### 352. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4206-L4207` → after: `L4206-L4207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4206-L4207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L4206-L4207) · [Before (L4206-L4207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L4206-L4207)

```diff
-           const zT = UT.ends[WT.index] - UT.offsets[WT.index] + UT.Z2[WT.index];
-           return this.warnOnce(`overrun:${TT}`, `${TT} draws ${mT} instances from a ${zT}-byte buffer (${WT.needed} needed)`), !1
+           const nB = jB.ends[QB.index] - jB.offsets[QB.index] + jB.q_[QB.index];
+           return this.warnOnce(`overrun:${BB}`, `${BB} draws ${zB} instances from a ${nB}-byte buffer (${QB.needed} needed)`), !1
```

#### 353. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4212` → after: `L4212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L4212) · [Before (L4212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L4212)

```diff
-         const zT = `${UT._colorFormat}|${UT._depthStencilFormat}|${UT._depthCompare}|${UT._sampleCount}`,
+         const nB = `${jB._colorFormat}|${jB._depthStencilFormat}|${jB._depthCompare}|${jB._sampleCount}`,
```

#### 354. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4236` → after: `L4236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L4236) · [Before (L4236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L4236)

```diff
-           const mT = (null !== (gT = UT._depthCompare) && void 0 !== gT ? gT : YU).startsWith("greater") ? 0 : 1;
+           const zB = (null !== (IB = jB._depthCompare) && void 0 !== IB ? IB : Ej).startsWith("greater") ? 0 : 1;
```

#### 355. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4257` → after: `L4257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L4257) · [Before (L4257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L4257)

```diff
-         const gT = `${TT.pipelineKey}|${mT}`,
+         const IB = `${BB.pipelineKey}|${zB}`,
```

#### 356. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4266` → after: `L4266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L4266) · [Before (L4266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L4266)

```diff
-           label: `standard-${HT.id}`,
+           label: `standard-${uB.id}`,
```

#### 357. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4279` → after: `L4279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L4279) · [Before (L4279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L4279)

```diff
-             depthCompare: null !== (WT = null !== (zT = jT.depthCompare) && void 0 !== zT ? zT : UT._depthCompare) && void 0 !== WT ? WT : YU,
+             depthCompare: null !== (QB = null !== (nB = aB.depthCompare) && void 0 !== nB ? nB : jB._depthCompare) && void 0 !== QB ? QB : Ej,
```

#### 358. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4308` → after: `L4308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L4308) · [Before (L4308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L4308)

```diff
-             switch (UT.geometry = MT, UT.skip = gT.noSunShadowVertices, UT.indexed = null !== mT.indexBuffer, UT.first = mT.first, UT.count = mT.count, UT.Nl = WT, UT.worldAt = zT, UT.instances = null, UT.instanceCount = 1, UT.thin = !1, MM(gT)) {
+             switch (jB.geometry = dB, jB.skip = IB.noSunShadowVertices, jB.indexed = null !== zB.indexBuffer, jB.first = zB.first, jB.count = zB.count, jB.zr = QB, jB.worldAt = nB, jB.instances = null, jB.instanceCount = 1, jB.thin = !1, Nd(IB)) {
```

#### 359. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4346` → after: `L4346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L4346) · [Before (L4346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L4346)

```diff
-           for (const UT of TT.messages) zT &&= "error" !== UT.type, WT.push(`${MT}:${UT.lineNum}:${UT.linePos} ${UT.type}: ${UT.message}`)
+           for (const jB of BB.messages) nB &&= "error" !== jB.type, QB.push(`${dB}:${jB.lineNum}:${jB.linePos} ${jB.type}: ${jB.message}`)
```

#### 360. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4348-L4349` → after: `L4348-L4349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4348-L4349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L4348-L4349) · [Before (L4348-L4349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L4348-L4349)

```diff
-         if (zT && !TT.packGroup) return this.pipelines.set(UT, !1), console.error(`Lite: pipeline ${UT} failed`, mT), void jU(this.device, "mesh", TT.kind, mT);
-         TT.failed || (TT.failed = !0, console.error(`Lite: program ${TT.id} failed`, mT, WT.join("\n"), {
+         if (nB && !BB.packGroup) return this.pipelines.set(jB, !1), console.error(`Lite: pipeline ${jB} failed`, zB), void aj(this.device, "mesh", BB.kind, zB);
+         BB.failed || (BB.failed = !0, console.error(`Lite: program ${BB.id} failed`, zB, QB.join("\n"), {
```

#### 361. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4358-L4359` → after: `L4358-L4359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4358-L4359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L4358-L4359) · [Before (L4358-L4359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L4358-L4359)

```diff
-       const WT = null === (UT = TT.XV) || void 0 === UT || null === (mT = UT.aShaderPackItem) || void 0 === mT ? void 0 : mT.x;
-       return void 0 !== WT && 0 !== (WT & aU.f)
+       const QB = null === (jB = BB.vY) || void 0 === jB || null === (zB = jB.aShaderPackItem) || void 0 === zB ? void 0 : zB.x;
+       return void 0 !== QB && 0 !== (QB & Dj.i)
```

#### 362. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4361-L4364` → after: `L4361-L4364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4361-L4364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L4361-L4364) · [Before (L4361-L4364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L4361-L4364)

```diff
-     var sg = mT(41822),
-       Fg = mT(41825),
-       Pg = mT(41829),
-       Vg = mT(41786);
+     var PI = zB(41775),
+       WI = zB(41782),
+       eI = zB(41787),
+       lI = zB(41731);
```

#### 363. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4408` → after: `L4408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L4408) · [Before (L4408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L4408)

```diff
-       for (const UT of null !== TT && void 0 !== TT ? TT : []) null === UT || void 0 === UT || UT.close()
+       for (const jB of null !== BB && void 0 !== BB ? BB : []) null === jB || void 0 === jB || jB.close()
```

#### 364. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4422` → after: `L4422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L4422) · [Before (L4422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L4422)

```diff
-         this.fl = TT, this.starts = [], this.lengths = [], this.used = 0, TT > 0 && (this.starts.push(0), this.lengths.push(TT))
+         this.Ep = BB, this.starts = [], this.lengths = [], this.used = 0, BB > 0 && (this.starts.push(0), this.lengths.push(BB))
```

#### 365. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4438` → after: `L4438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L4438) · [Before (L4438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L4438)

```diff
-         const mT = Math.min(TT + UT, this.fl);
+         const zB = Math.min(BB + jB, this.Ep);
```

#### 366. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4442-L4443` → after: `L4442-L4443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4442-L4443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L4442-L4443) · [Before (L4442-L4443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L4442-L4443)

```diff
-         const UT = this.fl;
-         this.fl = TT, this.release(UT, TT - UT)
+         const jB = this.Ep;
+         this.Ep = BB, this.release(jB, BB - jB)
```

#### 367. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4451` → after: `L4451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L4451) · [Before (L4451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L4451)

```diff
-         this.fl = TT
+         this.Ep = BB
```

#### 368. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4467` → after: `L4467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L4467) · [Before (L4467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L4467)

```diff
-         nT && HT ? (WT[gT - 1] += UT + WT[gT], mT.splice(gT, 1), WT.splice(gT, 1)) : nT ? WT[gT - 1] += UT : HT ? (mT[gT] = TT, WT[gT] += UT) : (mT.splice(gT, 0, TT), WT.splice(gT, 0, UT))
+         NB && uB ? (QB[IB - 1] += jB + QB[IB], zB.splice(IB, 1), QB.splice(IB, 1)) : NB ? QB[IB - 1] += jB : uB ? (zB[IB] = BB, QB[IB] += jB) : (zB.splice(IB, 0, BB), QB.splice(IB, 0, jB))
```

#### 369. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4475` → after: `L4475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L4475) · [Before (L4475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L4475)

```diff
-         this.device = TT, this.onReplaced = UT, this.mergeGap = mT, this.gpu = null, this.bytes = void 0, this.words = void 0, this.sourceWords = new WeakMap, this.hZ = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], thi … [truncated]
+         this.device = BB, this.onReplaced = jB, this.mergeGap = zB, this.gpu = null, this.bytes = void 0, this.words = void 0, this.sourceWords = new WeakMap, this.gy = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], thi … [truncated]
```

#### 370. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4477` → after: `L4477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L4477) · [Before (L4477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L4477)

```diff
-         this.bytes = new Uint8Array(zT), this.words = new Uint32Array(this.bytes.buffer), this.hZ = new Sg(zT / Gg)
+         this.bytes = new Uint8Array(nB), this.words = new Uint32Array(this.bytes.buffer), this.gy = new cI(nB / bI)
```

#### 371. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4490-L4491` → after: `L4490-L4491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4490-L4491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L4490-L4491) · [Before (L4490-L4491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L4490-L4491)

```diff
-         let MT = this.hZ.allocate(zT);
-         MT < 0 && (this.grow(this.hZ.fl + zT), MT = this.hZ.allocate(zT));
+         let dB = this.gy.allocate(nB);
+         dB < 0 && (this.grow(this.gy.Ep + nB), dB = this.gy.allocate(nB));
```

#### 372. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4497` → after: `L4497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L4497) · [Before (L4497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L4497)

```diff
-         UT > this.hZ.fl && this.grow(UT)
+         jB > this.gy.Ep && this.grow(jB)
```

#### 373. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4549` → after: `L4549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L4549) · [Before (L4549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L4549)

```diff
-         for (let UT = 0; UT < TT.length; UT += 2) this.hZ.free(TT[UT] / Gg, TT[UT + 1] / Gg);
+         for (let jB = 0; jB < BB.length; jB += 2) this.gy.free(BB[jB] / bI, BB[jB + 1] / bI);
```

#### 374. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4563` → after: `L4563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L4563) · [Before (L4563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L4563)

```diff
-         const UT = this.hZ.fl,
+         const jB = this.gy.Ep,
```

#### 375. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4568` → after: `L4568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L4568) · [Before (L4568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L4568)

```diff
-         this.gpu = this.createGpu(WT.byteLength), this.bytes = WT, this.words = new Uint32Array(WT.buffer), this.hZ.grow(mT), zT && (this.replaced.push(zT), this.onReplaced(zT)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, UT * Gg)
+         this.gpu = this.createGpu(QB.byteLength), this.bytes = QB, this.words = new Uint32Array(QB.buffer), this.gy.grow(zB), nB && (this.replaced.push(nB), this.onReplaced(nB)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, jB * bI)
```

#### 376. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4658` → after: `L4658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L4658) · [Before (L4658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L4658)

```diff
-         this.engine = TT, this.device = UT, this.buffers = new WeakMap, this.J_ = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.atlasSources = new WeakMap, this.atlasRebuilds = new WeakSet, t … [truncated]
+         this.engine = BB, this.device = jB, this.buffers = new WeakMap, this.U1 = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.atlasSources = new WeakMap, this.atlasRebuilds = new WeakSet, t … [truncated]
```

#### 377. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4677` → after: `L4677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L4677) · [Before (L4677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L4677)

```diff
-         null === (TT = this.arena) || void 0 === TT || TT.qY()
+         null === (BB = this.arena) || void 0 === BB || BB.tL()
```

#### 378. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4683` → after: `L4683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L4683) · [Before (L4683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L4683)

```diff
-         TT.fl = zT.byteLength, this.buffers.set(TT, {
+         BB.Ep = nB.byteLength, this.buffers.set(BB, {
```

#### 379. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4720` → after: `L4720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L4720) · [Before (L4720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L4720)

```diff
-         TT.is32Bits = 4 === WT.BYTES_PER_ELEMENT, TT.fl = WT.byteLength, this.buffers.set(TT, {
+         BB.is32Bits = 4 === QB.BYTES_PER_ELEMENT, BB.Ep = QB.byteLength, this.buffers.set(BB, {
```

#### 380. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4756` → after: `L4756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L4756) · [Before (L4756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L4756)

```diff
-             const UT = new Uint8Array(Math.max(null !== (zT = null === gT || void 0 === gT ? void 0 : gT.byteLength) && void 0 !== zT ? zT : 0, mT + WT));
+             const jB = new Uint8Array(Math.max(null !== (nB = null === IB || void 0 === IB ? void 0 : IB.byteLength) && void 0 !== nB ? nB : 0, zB + QB));
```

#### 381. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4820` → after: `L4820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L4820) · [Before (L4820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L4820)

```diff
-         const WT = null !== (UT = null === (mT = this.buffers.get(TT)) || void 0 === mT ? void 0 : mT.slot) && void 0 !== UT ? UT : -1;
+         const QB = null !== (jB = null === (zB = this.buffers.get(BB)) || void 0 === zB ? void 0 : zB.slot) && void 0 !== jB ? jB : -1;
```

#### 382. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4826` → after: `L4826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L4826) · [Before (L4826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L4826)

```diff
-         return WT ? WT.slot >= 0 ? WT.slot + WT.size : null !== (UT = null === (mT = WT.gpu) || void 0 === mT ? void 0 : mT.size) && void 0 !== UT ? UT : 0 : 0
+         return QB ? QB.slot >= 0 ? QB.slot + QB.size : null !== (jB = null === (zB = QB.gpu) || void 0 === zB ? void 0 : zB.size) && void 0 !== jB ? jB : 0 : 0
```

#### 383. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4830` → after: `L4830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L4830) · [Before (L4830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L4830)

```diff
-         return null !== (WT = null !== (zT = mT && this.modelInput(mT, UT)) && void 0 !== zT ? zT : null === (MT = null !== (gT = this.J_.get(TT)) && void 0 !== gT ? gT : this.batchUploads.get(TT)) || void 0 === MT ? void 0 : MT.inputs[UT]) && void 0 !== WT ? WT : null
+         return null !== (QB = null !== (nB = zB && this.modelInput(zB, jB)) && void 0 !== nB ? nB : null === (dB = null !== (IB = this.U1.get(BB)) && void 0 !== IB ? IB : this.batchUploads.get(BB)) || void 0 === dB ? void 0 : dB.inputs[jB]) && void 0 !== QB ? QB : null
```

#### 384. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4846` → after: `L4846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L4846) · [Before (L4846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L4846)

```diff
-         let mT = TT.gpu[dT.i.lite];
+         let zB = BB.gpu[fB.g.lite];
```

#### 385. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4862` → after: `L4862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L4862) · [Before (L4862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L4862)

```diff
-           }, TT.gpu[dT.i.lite] = mT
+           }, BB.gpu[fB.g.lite] = zB
```

#### 386. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4871` → after: `L4871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L4871) · [Before (L4871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L4871)

```diff
-               fl: 0,
+               Ep: 0,
```

#### 387. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4876` → after: `L4876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L4876) · [Before (L4876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L4876)

```diff
-             fl: 0
+             Ep: 0
```

#### 388. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4896` → after: `L4896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L4896) · [Before (L4896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L4896)

```diff
-             if (6 !== TT.length) throw new Error(`${TT.length} files where six faces were expected`);
+             if (6 !== BB.length) throw new Error(`${BB.length} files where six faces were expected`);
```

#### 389. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4983` → after: `L4983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L4983) · [Before (L4983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L4983)

```diff
-         return nT && nT.view === MT.view && nT.sampler === gT ? nT : (zT.bound = {
+         return NB && NB.view === dB.view && NB.sampler === IB ? NB : (nB.bound = {
```

#### 390. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5000` → after: `L5000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5000) · [Before (L5000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5000)

```diff
-           UT[0].layers === zT && UT[WT] ? MT === this.epoch && this.atlasBindings.set(TT, this.atlasBindings.get(UT[WT])) : console.error(`Lite: the new device splits the atlas ${AT(mT.urls[0])} into other arrays than its materials read`)
+           jB[0].layers === nB && jB[QB] ? dB === this.epoch && this.atlasBindings.set(BB, this.atlasBindings.get(jB[QB])) : console.error(`Lite: the new device splits the atlas ${RB(zB.urls[0])} into other arrays than its materials read`)
```

#### 391. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5002` → after: `L5002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5002) · [Before (L5002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5002)

```diff
-           console.error(`Lite: could not build the atlas ${AT(mT.urls[0])} again on a new device`, TT)
+           console.error(`Lite: could not build the atlas ${RB(zB.urls[0])} again on a new device`, BB)
```

#### 392. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5007` → after: `L5007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5007) · [Before (L5007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5007)

```diff
-         return null !== (UT = null === (mT = this.heldSlot(TT)) || void 0 === mT ? void 0 : mT.state.decoded) && void 0 !== UT ? UT : null
+         return null !== (jB = null === (zB = this.heldSlot(BB)) || void 0 === zB ? void 0 : zB.state.decoded) && void 0 !== jB ? jB : null
```

#### 393. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5014-L5015` → after: `L5014-L5015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5014-L5015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5014-L5015) · [Before (L5014-L5015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5014-L5015)

```diff
-         const UT = TT.gpu[dT.i.lite];
-         return (null === UT || void 0 === UT ? void 0 : UT.epoch) === this.epoch ? UT : void 0
+         const jB = BB.gpu[fB.g.lite];
+         return (null === jB || void 0 === jB ? void 0 : jB.epoch) === this.epoch ? jB : void 0
```

#### 394. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5026` → after: `L5026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5026) · [Before (L5026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5026)

```diff
-           } = dT.k;
+           } = fB.j;
```

#### 395. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5047` → after: `L5047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5047) · [Before (L5047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5047)

```diff
-         const mT = TT.gpu[dT.i.lite];
+         const zB = BB.gpu[fB.g.lite];
```

#### 396. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5054` → after: `L5054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5054) · [Before (L5054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5054)

```diff
-           return "canvas" === UT.kind ? null : `${UT.kind}|${Rg(UT)}|${mT.noMipmap}|${mT.samplingMode}|${mT.invertY}`
+           return "canvas" === jB.kind ? null : `${jB.kind}|${QN(jB)}|${zB.noMipmap}|${zB.samplingMode}|${zB.invertY}`
```

#### 397. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5069` → after: `L5069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5069) · [Before (L5069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5069)

```diff
-           dynamicSource: null !== (MT = null === mT || void 0 === mT ? void 0 : mT.state.dynamicSource) && void 0 !== MT ? MT : null
+           dynamicSource: null !== (dB = null === zB || void 0 === zB ? void 0 : zB.state.dynamicSource) && void 0 !== dB ? dB : null
```

#### 398. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5085` → after: `L5085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5085) · [Before (L5085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5085)

```diff
-         return TT.gpu[dT.i.lite] = HT, HT
+         return BB.gpu[fB.g.lite] = uB, uB
```

#### 399. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5088` → after: `L5088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5088) · [Before (L5088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5088)

```diff
-         const MT = `${TT}|${UT}|${mT}|${WT}|${zT}`;
+         const dB = `${BB}|${jB}|${zB}|${QB}|${nB}`;
```

#### 400. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5112` → after: `L5112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5112) · [Before (L5112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5112)

```diff
-         } = this, MT = (0, Fg.e)(this.engine, WT, {
+         } = this, dB = (0, WI.c)(this.engine, QB, {
```

#### 401. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5126` → after: `L5126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5126) · [Before (L5126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5126)

```diff
-           zT === this.epoch && (TT.failed = !0, console.warn(`Lite: could not load texture ${AT(UT)}`, mT))
+           nB === this.epoch && (BB.failed = !0, console.warn(`Lite: could not load texture ${RB(jB)}`, zB))
```

#### 402. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5144` → after: `L5144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5144) · [Before (L5144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5144)

```diff
-         } = TT, WT = (0, Pg.b)(this.engine, Math.max(1, mT.width), Math.max(1, mT.height), {
+         } = BB, QB = (0, eI.c)(this.engine, Math.max(1, zB.width), Math.max(1, zB.height), {
```

#### 403. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5158` → after: `L5158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5158) · [Before (L5158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5158)

```diff
-         if (mT && WT && 0 !== zT.width && 0 !== zT.height) return zT.width !== WT.width || zT.height !== WT.height ? (this.releaseTexture(UT), UT.dynamic = null, UT.view = null, void this.createDynamic(TT, UT)) : void(0, Pg.f)(this.engine, WT, zT, {
+         if (zB && QB && 0 !== nB.width && 0 !== nB.height) return nB.width !== QB.width || nB.height !== QB.height ? (this.releaseTexture(jB), jB.dynamic = null, jB.view = null, void this.createDynamic(BB, jB)) : void(0, eI.g)(this.engine, QB, nB, {
```

#### 404. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5169` → after: `L5169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5169) · [Before (L5169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5169)

```diff
-     var Un = mT(38865);
+     var dN = zB(38858);
```

#### 405. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5173` → after: `L5173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5173) · [Before (L5173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5173)

```diff
-       TT._colorAttachment.storeOp = TT._targetSignature._sampleCount > 1 ? UT : "store";
+       BB._colorAttachment.storeOp = BB._targetSignature._sampleCount > 1 ? jB : "store";
```

#### 406. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5177-L5180` → after: `L5177-L5180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5177-L5180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5177-L5180) · [Before (L5177-L5180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5177-L5180)

```diff
-     var Wn = mT(37889),
-       zn = mT(37951),
-       Mn = mT(37577),
-       gn = mT(39706);
+     var NN = zB(37869),
+       uN = zB(37911),
+       UN = zB(37568),
+       aN = zB(39672);
```

#### 407. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5189-L5190` → after: `L5189-L5190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5189-L5190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5189-L5190) · [Before (L5189-L5190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5189-L5190)

```diff
-       TT.fov = UT.fov, TT.near = UT.near, TT.far = UT.far, TT.renderWidth = mT.renderWidth, TT.renderHeight = mT.renderHeight, (0, Mn.r)(UT.holderRotation, 0, kn, 0), (0, Mn.c)(nn, 0, kn, 0, UT.holderPosition, 0, jn);
-       const WT = UT.JA;
+       BB.fov = jB.fov, BB.near = jB.near, BB.far = jB.far, BB.renderWidth = zB.renderWidth, BB.renderHeight = zB.renderHeight, (0, UN.v)(jB.holderRotation, 0, sN, 0), (0, UN.e)(pN, 0, sN, 0, jB.holderPosition, 0, JN);
+       const QB = jB.YC;
```

#### 408. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5193` → after: `L5193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5193) · [Before (L5193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5193)

```diff
-       (0, Mn.i)(WT, Ln, Hn, zT), (0, Mn.g)(zT, 0, zT), (0, Mn.k)(zT, jn, 0, zT), (0, Mn.g)(zT, 0, zT);
+       (0, UN.m)(QB, mN, rN, nB), (0, UN.k)(nB, 0, nB), (0, UN.q)(nB, JN, 0, nB), (0, UN.k)(nB, 0, nB);
```

#### 409. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5195` → after: `L5195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5195) · [Before (L5195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5195)

```diff
-       (0, Mn.g)(zT, 0, MT), TT.eye[0] = MT[12], TT.eye[1] = MT[13], TT.eye[2] = MT[14], pn[0] = TT.fov, pn[1] = TT.renderWidth / TT.renderHeight, pn[2] = TT.near, pn[3] = TT.far, (0, Mn.o)(pn, TT.projectionMatrix), (0, Mn.k)(zT, TT.projectionMatrix, 0, TT.viewProjectionMatrix), ( … [truncated]
+       (0, UN.k)(nB, 0, dB), BB.eye[0] = dB[12], BB.eye[1] = dB[13], BB.eye[2] = dB[14], yN[0] = BB.fov, yN[1] = BB.renderWidth / BB.renderHeight, yN[2] = BB.near, yN[3] = BB.far, (0, UN.r)(yN, BB.projectionMatrix), (0, UN.q)(nB, BB.projectionMatrix, 0, BB.viewProjectionMatrix), ( … [truncated]
```

#### 410. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5202` → after: `L5202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5202) · [Before (L5202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5202)

```diff
-       }, (() => new Wn.e(0, 0, 0, 0))));
+       }, (() => new NN.c(0, 0, 0, 0))));
```

#### 411. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5218` → after: `L5218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5218) · [Before (L5218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5218)

```diff
-       return UT.animTick = (0, zn.f)(), UT.timeMs = performance.now(), cn(UT, TT.XZ), TT.model.update(UT.frameId), UT
+       return jB.animTick = (0, uN.f)(), jB.timeMs = performance.now(), LN(jB, BB.ny), BB.model.update(jB.frameId), jB
```

#### 412. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5222` → after: `L5222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5222) · [Before (L5222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5222)

```diff
-       const UT = TT.XZ,
+       const jB = BB.ny,
```

#### 413. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5225` → after: `L5225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5225) · [Before (L5225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5225)

```diff
-           HA: WT
+           fC: QB
```

#### 414. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5227` → after: `L5227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5227) · [Before (L5227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5227)

```diff
-       return Bn(mT, WT, UT.eB()), UT.onBeforeRenderObservable.notifyObservers(UT), Zn(UT, mT.frustum), UT.onBeforeCameraRenderObservable.notifyObservers(UT.activeCamera), vn(TT)
+       return kN(zB, QB, jB.wJ()), jB.onBeforeRenderObservable.notifyObservers(jB), GN(jB, zB.frustum), jB.onBeforeCameraRenderObservable.notifyObservers(jB.activeCamera), gN(BB)
```

#### 415. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5229-L5231` → after: `L5229-L5231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5229-L5231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5229-L5231) · [Before (L5229-L5231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5229-L5231)

```diff
-     var qn = mT(37540),
-       bn = mT(37658),
-       On = mT(37938);
+     var SN = zB(37536),
+       MN = zB(37632),
+       EN = zB(37905);
```

#### 416. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5235-L5238` → after: `L5235-L5238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5235-L5238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5235-L5238) · [Before (L5235-L5238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5235-L5238)

```diff
-       const WT = (0, JT.R)(TT);
-       if (!WT || WT.diffuseTexture && (0, On.g)(TT)) return null;
-       const zT = null === (UT = (0, JT.s)(WT, eT.i.name)) || void 0 === UT ? void 0 : UT.state,
-         MT = null === (mT = (0, JT.s)(WT, RM.b.name)) || void 0 === mT ? void 0 : mT.state,
+       const QB = (0, iB.eb)(BB);
+       if (!QB || QB.diffuseTexture && (0, EN.j)(BB)) return null;
+       const nB = null === (jB = (0, iB.w)(QB, MB.h.name)) || void 0 === jB ? void 0 : jB.state,
+         dB = null === (zB = (0, iB.w)(QB, QI.d.name)) || void 0 === zB ? void 0 : zB.state,
```

#### 417. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5243` → after: `L5243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5243) · [Before (L5243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5243)

```diff
-         WT.set(TT.diffuseColor, gT.diffuse), WT[gT.diffuse + 3] = TT.alpha, WT.set(TT.ambientColor, gT.ambientAndCutoff), WT[gT.ambientAndCutoff + 3] = TT.alphaCutOff, WT.set(TT.emissiveColor, gT.emissiveAndLevel), WT[gT.emissiveAndLevel + 3] = null !== (zT = null === (MT = TT.di … [truncated]
+         QB.set(BB.diffuseColor, IB.diffuse), QB[IB.diffuse + 3] = BB.alpha, QB.set(BB.ambientColor, IB.ambientAndCutoff), QB[IB.ambientAndCutoff + 3] = BB.alphaCutOff, QB.set(BB.emissiveColor, IB.emissiveAndLevel), QB[IB.emissiveAndLevel + 3] = null !== (nB = null === (dB = BB.di … [truncated]
```

#### 418. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5249-L5250` → after: `L5249-L5250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5249-L5250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5249-L5250) · [Before (L5249-L5250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5249-L5250)

```diff
-         liquid: (0, On.k)(TT),
-         customRenderMat: (0, On.g)(TT),
+         liquid: (0, EN.n)(BB),
+         customRenderMat: (0, EN.j)(BB),
```

#### 419. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5254` → after: `L5254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5254) · [Before (L5254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5254)

```diff
-     var Yn = mT(2990);
+     var qN = zB(2963);
```

#### 420. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5269` → after: `L5269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5269) · [Before (L5269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5269)

```diff
-         this.arena = TT, this.hZ = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.hZ = new Sg(UT);
+         this.arena = BB, this.gy = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.gy = new cI(jB);
```

#### 421. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5274` → after: `L5274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5274) · [Before (L5274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5274)

```diff
-         return this.hZ.fl
+         return this.gy.Ep
```

#### 422. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5294` → after: `L5294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5294) · [Before (L5294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5294)

```diff
-         return this.dropped || TT.start + TT.length > this.fl
+         return this.dropped || BB.start + BB.length > this.Ep
```

#### 423. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5328` → after: `L5328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5328) · [Before (L5328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5328)

```diff
-           label: `${WT}-grow`
+           label: `${QB}-grow`
```

#### 424. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5330` → after: `L5330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5330) · [Before (L5330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5330)

```diff
-         MT.buffer = this.createBuffer(MT, !1), gT.copyBufferToBuffer(zT.buffer, 0, MT.buffer, 0, zT.units * mT), zT.twin && (MT.twin = this.createBuffer(MT, !0), gT.copyBufferToBuffer(zT.twin, 0, MT.twin, 0, zT.units * this.arena.twinUnitBytes)), UT.queue.submit([gT.finish()]), t … [truncated]
+         dB.buffer = this.createBuffer(dB, !1), IB.copyBufferToBuffer(nB.buffer, 0, dB.buffer, 0, nB.units * zB), nB.twin && (dB.twin = this.createBuffer(dB, !0), IB.copyBufferToBuffer(nB.twin, 0, dB.twin, 0, nB.units * this.arena.twinUnitBytes)), jB.queue.submit([IB.finish()]), t … [truncated]
```

#### 425. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5352-L5353` → after: `L5352-L5353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5352-L5353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5352-L5353) · [Before (L5352-L5353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5352-L5353)

```diff
-           label: UT ? `${gT}-light` : gT,
-           size: TT.units * (UT ? zT : WT),
+           label: jB ? `${IB}-light` : IB,
+           size: BB.units * (jB ? nB : QB),
```

#### 426. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5359` → after: `L5359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5359) · [Before (L5359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5359)

```diff
-           this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${gT} buffer, taken as failed: ${String(mT)}`), this.settle(TT, UT, !1, !1)
+           this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${IB} buffer, taken as failed: ${String(zB)}`), this.settle(BB, jB, !1, !1)
```

#### 427. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5368` → after: `L5368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5368) · [Before (L5368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5368)

```diff
-             return this.hZ.truncate(this.backings[zT - 1].units), this.growable = !1, void this.promote()
+             return this.gy.truncate(this.backings[nB - 1].units), this.growable = !1, void this.promote()
```

#### 428. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5393` → after: `L5393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5393) · [Before (L5393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5393)

```diff
-         if (this.device = TT, this.unitBytes = UT, this.usage = mT, this.label = WT, this.pages = [], this.drawing = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, t … [truncated]
+         if (this.device = BB, this.unitBytes = jB, this.usage = zB, this.label = QB, this.pages = [], this.drawing = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, t … [truncated]
```

#### 429. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5416` → after: `L5416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5416) · [Before (L5416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5416)

```diff
-           const UT = zT.hZ.allocate(TT);
+           const jB = nB.gy.allocate(BB);
```

#### 430. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5425-L5426` → after: `L5425-L5426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5425-L5426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5425-L5426) · [Before (L5425-L5426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5425-L5426)

```diff
-           const mT = Math.min(this.ceiling, Math.max(2 * UT.fl, UT.fl + TT));
-           if (mT - UT.fl >= TT) return UT.grow(mT), {
+           const zB = Math.min(this.ceiling, Math.max(2 * jB.Ep, jB.Ep + BB));
+           if (zB - jB.Ep >= BB) return jB.grow(zB), {
```

#### 431. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5428` → after: `L5428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5428) · [Before (L5428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5428)

```diff
-             start: UT.hZ.allocate(TT),
+             start: jB.gy.allocate(BB),
```

#### 432. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5432` → after: `L5432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5432) · [Before (L5432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5432)

```diff
-         UT && UT !== this.pages[0] && 0 === UT.hZ.used && UT.drop();
+         jB && jB !== this.pages[0] && 0 === jB.gy.used && jB.drop();
```

#### 433. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5437` → after: `L5437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5437) · [Before (L5437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5437)

```diff
-           start: WT.hZ.allocate(TT),
+           start: QB.gy.allocate(BB),
```

#### 434. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5446` → after: `L5446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5446) · [Before (L5446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5446)

```diff
-         UT.hZ.free(TT.start, TT.length), 0 === UT.hZ.used && UT !== this.pages[0] && UT !== this.pages[this.pages.length - 1] && UT.drop()
+         jB.gy.free(BB.start, BB.length), 0 === jB.gy.used && jB !== this.pages[0] && jB !== this.pages[this.pages.length - 1] && jB.drop()
```

#### 435. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5456` → after: `L5456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5456) · [Before (L5456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5456)

```diff
-         this.warnOnce("outOfMemory", `out of GPU memory for a ${UT}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, TT), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, TT) / 2));
+         this.warnOnce("outOfMemory", `out of GPU memory for a ${jB}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, BB), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, BB) / 2));
```

#### 436. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5470` → after: `L5470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5470) · [Before (L5470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5470)

```diff
-         for (const zT of this.pages) TT += zT.fl, UT += zT.hZ.used, mT += zT.hasTwin ? zT.fl * this.twinUnitBytes : 0, WT += zT.allocatedBytes;
+         for (const nB of this.pages) BB += nB.Ep, jB += nB.gy.used, zB += nB.hasTwin ? nB.Ep * this.twinUnitBytes : 0, QB += nB.allocatedBytes;
```

#### 437. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5499-L5500` → after: `L5499-L5500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5499-L5500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5499-L5500) · [Before (L5499-L5500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5499-L5500)

```diff
-         const mT = EU.f.strideWithoutAtlas;
-         this.vertexArena = new dn(TT, mT, GPUBufferUsage.VERTEX, `terrain-vertices-${mT}`), this.quadArena = new dn(TT, bn.b, GPUBufferUsage.STORAGE, "terrain-quads", {
+         const zB = Cj.c.strideWithoutAtlas;
+         this.vertexArena = new HN(BB, zB, GPUBufferUsage.VERTEX, `terrain-vertices-${zB}`), this.quadArena = new HN(BB, MN.e, GPUBufferUsage.STORAGE, "terrain-quads", {
```

#### 438. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5526` → after: `L5526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5526) · [Before (L5526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5526)

```diff
-         mT && 0 !== UT.length && mT.page.live && (UT.length < TT.vertexCount ? mT.page.arena.warnOnce("shortLight", `a part's ${UT.length} light values are fewer than its ${TT.vertexCount} vertices, so its light is left as it was`) : (mT.page.writeLight(mT, UT), TT.lit = !0))
+         zB && 0 !== jB.length && zB.page.live && (jB.length < BB.vertexCount ? zB.page.arena.warnOnce("shortLight", `a part's ${jB.length} light values are fewer than its ${BB.vertexCount} vertices, so its light is left as it was`) : (zB.page.writeLight(zB, jB), BB.lit = !0))
```

#### 439. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5529` → after: `L5529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5529) · [Before (L5529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5529)

```diff
-         this.fullSky.length < UT && (this.fullSky = new Uint16Array(Math.max(UT, 4096)).fill(Yn.h));
+         this.fullSky.length < jB && (this.fullSky = new Uint16Array(Math.max(jB, 4096)).fill(qN.g));
```

#### 440. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5591` → after: `L5591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5591) · [Before (L5591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5591)

```diff
-           code: (MT = mT._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${MT?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(pos … [truncated]
+           code: (dB = zB._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${dB?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(pos … [truncated]
```

#### 441. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5625` → after: `L5625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5625) · [Before (L5625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5625)

```diff
-         return null !== (TT = null === (UT = this.copy) || void 0 === UT ? void 0 : UT.view) && void 0 !== TT ? TT : null
+         return null !== (BB = null === (jB = this.copy) || void 0 === jB ? void 0 : jB.view) && void 0 !== BB ? BB : null
```

#### 442. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5639` → after: `L5639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5639) · [Before (L5639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5639)

```diff
-         if (kT += this.drawList(HT, UT, TT._directBindings, 0, TT._directBindings.length), kT += this.drawList(HT, UT, zT, 0, MT >= 0 ? MT : zT.length), HT.end(), MT < 0) return kT;
+         if (UB += this.drawList(uB, jB, BB._directBindings, 0, BB._directBindings.length), UB += this.drawList(uB, jB, nB, 0, dB >= 0 ? dB : nB.length), uB.end(), dB < 0) return UB;
```

#### 443. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5672` → after: `L5672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5672) · [Before (L5672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5672)

```diff
-         const zT = (null !== (mT = UT._config.depth) && void 0 !== mT ? mT : UT._config.rt)._depthTexture,
+         const nB = (null !== (zB = jB._config.depth) && void 0 !== zB ? zB : jB._config.rt)._depthTexture,
```

#### 444. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5679` → after: `L5679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5679) · [Before (L5679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5679)

```diff
-         this.retired = null !== (UT = null === (mT = this.copy) || void 0 === mT ? void 0 : mT.texture) && void 0 !== UT ? UT : null;
+         this.retired = null !== (jB = null === (zB = this.copy) || void 0 === zB ? void 0 : zB.texture) && void 0 !== jB ? jB : null;
```

#### 445. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5764` → after: `L5764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5764) · [Before (L5764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5764)

```diff
-           code: (gT = this.edge, `${(0,DU.H)()}${HW({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_2d<f32>;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\t … [truncated]
+           code: (IB = this.edge, `${(0,bj.I)()}${NQ({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_2d<f32>;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\t … [truncated]
```

#### 446. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5804` → after: `L5804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5804) · [Before (L5804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5804)

```diff
-         return null !== (TT = null === (UT = this.targets) || void 0 === UT ? void 0 : UT.maskView) && void 0 !== TT ? TT : null
+         return null !== (BB = null === (jB = this.targets) || void 0 === jB ? void 0 : jB.maskView) && void 0 !== BB ? BB : null
```

#### 447. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5851` → after: `L5851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5851) · [Before (L5851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5851)

```diff
-         const WT = (null !== (UT = TT._config.depth) && void 0 !== UT ? UT : TT._config.rt)._depthTexture;
+         const QB = (null !== (jB = BB._config.depth) && void 0 !== jB ? jB : BB._config.rt)._depthTexture;
```

#### 448. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5870` → after: `L5870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5870) · [Before (L5870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5870)

```diff
-           gT = null !== (mT = TT._targetSignature._depthStencilFormat) && void 0 !== mT ? mT : UT.format,
+           IB = null !== (zB = BB._targetSignature._depthStencilFormat) && void 0 !== zB ? zB : jB.format,
```

#### 449. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5904` → after: `L5904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5904) · [Before (L5904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5904)

```diff
-               resource: (null !== nT && void 0 !== nT ? nT : UT).createView({
+               resource: (null !== NB && void 0 !== NB ? NB : jB).createView({
```

#### 450. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5960` → after: `L5960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5960) · [Before (L5960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5960)

```diff
-         status: "Km"
+         status: "xz"
```

#### 451. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5974` → after: `L5974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5974) · [Before (L5974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5974)

```diff
-               Np: TT.runtime
+               mJ: BB.runtime
```

#### 452. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5978` → after: `L5978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5978) · [Before (L5978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5978)

```diff
-               return MT && XW(UT.programKey(MT, !1, zT)) ? (await MT.ready, TT.isCancelled() ? Pn : MT.bindGroupLayout ? await async function(TT, UT, mT, WT) {
+               return dB && FQ(jB.programKey(dB, !1, nB)) ? (await dB.ready, BB.isCancelled() ? PN : dB.bindGroupLayout ? await async function(BB, jB, zB, QB) {
```

#### 453. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5989` → after: `L5989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5989) · [Before (L5989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5989)

```diff
-                 const [nT, HT] = await Promise.all([gT, MT.built.then((() => null), (TT => null !== TT && void 0 !== TT ? TT : new Error("pipeline failed")))]);
+                 const [NB, uB] = await Promise.all([IB, dB.built.then((() => null), (BB => null !== BB && void 0 !== BB ? BB : new Error("pipeline failed")))]);
```

#### 454. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5992` → after: `L5992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5992) · [Before (L5992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5992)

```diff
-                   jT = kT.length > 0 ? kT.map((TT => `${MT.name} ${TT.lineNum}:${TT.linePos}: ${TT.message}`)).join("\n") : `${MT.name}: ${rn(null!==HT&&void 0!==HT?HT:nT)}`;
+                   aB = UB.length > 0 ? UB.map((BB => `${dB.name} ${BB.lineNum}:${BB.linePos}: ${BB.message}`)).join("\n") : `${dB.name}: ${wN(null!==uB&&void 0!==uB?uB:NB)}`;
```

#### 455. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5998` → after: `L5998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L5998) · [Before (L5998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L5998)

```diff
-               }(UT, MT, UT.programKey(MT, "none" !== MT.texture, zT), mT): (console.warn(`Shader pack: skipped the compile check for "${WT.name}", whose textures failed to load`), Vn)) : Pn
+               }(jB, dB, jB.programKey(dB, "none" !== dB.texture, nB), zB): (console.warn(`Shader pack: skipped the compile check for "${QB.name}", whose textures failed to load`), WN)) : PN
```

#### 456. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6014-L6015` → after: `L6014-L6015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6014-L6015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L6014-L6015) · [Before (L6014-L6015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L6014-L6015)

```diff
-             }), null !== (gT = UT.timeoutMs) && void 0 !== gT ? gT : Fn), WT = setInterval((() => {
-               UT.isCancelled() && MT("Km")
+             }), null !== (IB = jB.timeoutMs) && void 0 !== IB ? IB : TN), QB = setInterval((() => {
+               jB.isCancelled() && dB("xz")
```

#### 457. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6034-L6035` → after: `L6034-L6035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6034-L6035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L6034-L6035) · [Before (L6034-L6035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L6034-L6035)

```diff
-       if ("Km" === nT || mT()) return {
-         status: "Km"
+       if ("xz" === NB || zB()) return {
+         status: "xz"
```

#### 458. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6048` → after: `L6048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L6048) · [Before (L6048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L6048)

```diff
-       } : "timeout" === nT ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(kT=TT.timeoutMs)&&void 0!==kT?kT:Fn)/1e3} s`), {
+       } : "timeout" === NB ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(UB=BB.timeoutMs)&&void 0!==UB?UB:TN)/1e3} s`), {
```

#### 459. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6068` → after: `L6068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L6068) · [Before (L6068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L6068)

```diff
-       return null !== (UT = null === TT || void 0 === TT ? void 0 : TT.message) && void 0 !== UT ? UT : String(TT)
+       return null !== (jB = null === BB || void 0 === BB ? void 0 : BB.message) && void 0 !== jB ? jB : String(BB)
```

#### 460. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6074` → after: `L6074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L6074) · [Before (L6074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L6074)

```diff
-         jU(TT, "terrain", mT, zT, WT ? `${WT.lineNum}:${WT.linePos} error: ${WT.message}` : null)
+         aj(BB, "terrain", zB, nB, QB ? `${QB.lineNum}:${QB.linePos} error: ${QB.message}` : null)
```

#### 461. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6077-L6080` → after: `L6077-L6080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6077-L6080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L6077-L6080) · [Before (L6077-L6080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L6077-L6080)

```diff
-     var Sn = mT(37666),
-       Gn = mT(37676),
-       Nn = mT(37687),
-       En = mT(2985);
+     var KN = zB(37640),
+       CN = zB(37655),
+       cN = zB(37666),
+       bN = zB(2956);
```

#### 462. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6092` → after: `L6092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L6092) · [Before (L6092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L6092)

```diff
-         cB: lT
+         ZJ: pB
```

#### 463. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6094` → after: `L6094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L6094) · [Before (L6094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L6094)

```diff
-       let LT = TT.QG(nT[0], nT[1], nT[2]);
+       let rB = BB.cW(NB[0], NB[1], NB[2]);
```

#### 464. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6100` → after: `L6100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L6100) · [Before (L6100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L6100)

```diff
-         const MT = TT.QG(nT[0], nT[1], nT[2]),
+         const dB = BB.cW(NB[0], NB[1], NB[2]),
```

#### 465. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6108` → after: `L6108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L6108) · [Before (L6108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L6108)

```diff
-           !TT.isDrawn(MT, gT, HT) && TT.hasParts(MT, gT, HT) && zT.add(`${MT},${gT},${HT}`)
+           !BB.isDrawn(dB, IB, uB) && BB.hasParts(dB, IB, uB) && nB.add(`${dB},${IB},${uB}`)
```

#### 466. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6120` → after: `L6120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L6120) · [Before (L6120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L6120)

```diff
-         this.device = TT, this.Qq = UT, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
+         this.device = BB, this.rG = jB, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
```

#### 467. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6131` → after: `L6131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L6131) · [Before (L6131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L6131)

```diff
-         const UT = null !== (TT = this.free.pop()) && void 0 !== TT ? TT : this.next++;
+         const jB = null !== (BB = this.free.pop()) && void 0 !== BB ? BB : this.next++;
```

#### 468. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6134` → after: `L6134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L6134) · [Before (L6134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L6134)

```diff
-           TT.set(this.data), this.data = TT, this.words = new Uint32Array(TT.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.Qq()
+           BB.set(this.data), this.data = BB, this.words = new Uint32Array(BB.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.rG()
```

#### 469. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6178` → after: `L6178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L6178) · [Before (L6178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L6178)

```diff
-         this.device = TT, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout  … [truncated]
+         this.device = BB, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout  … [truncated]
```

#### 470. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6255` → after: `L6255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L6255) · [Before (L6255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L6255)

```diff
-               buffer: null !== TT && void 0 !== TT ? TT : this.slots.buffer
+               buffer: null !== BB && void 0 !== BB ? BB : this.slots.buffer
```

#### 471. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6260` → after: `L6260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L6260) · [Before (L6260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L6260)

```diff
-               buffer: null !== UT && void 0 !== UT ? UT : this.slots.buffer
+               buffer: null !== jB && void 0 !== jB ? jB : this.slots.buffer
```

#### 472. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6266` → after: `L6266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L6266) · [Before (L6266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L6266)

```diff
-         const mT = null !== UT && void 0 !== UT ? UT : TT;
+         const zB = null !== jB && void 0 !== jB ? jB : BB;
```

#### 473. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6305-L6306` → after: `L6305-L6306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6305-L6306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L6305-L6306) · [Before (L6305-L6306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L6305-L6306)

```diff
-         }, this.chunks.set(TT, zT), this.writeSlot(zT)), zT.material = TT.material ? this.materialFor(TT.material) : null, zT.packed = !!UT.packedVertices, zT.vertexCount = (0, bn.c)(UT), zT.faceCount = zT.vertexCount / 4;
-         const MT = null !== (WT = UT.faceGroups) && void 0 !== WT ? WT : null;
+         }, this.chunks.set(BB, nB), this.writeSlot(nB)), nB.material = BB.material ? this.materialFor(BB.material) : null, nB.packed = !!jB.packedVertices, nB.vertexCount = (0, MN.i)(jB), nB.faceCount = nB.vertexCount / 4;
+         const dB = null !== (QB = jB.faceGroups) && void 0 !== QB ? QB : null;
```

#### 474. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6308` → after: `L6308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L6308) · [Before (L6308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L6308)

```diff
-           const TT = Sn.m;
+           const BB = KN.p;
```

#### 475. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6311` → after: `L6311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L6311) · [Before (L6311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L6311)

```diff
-         this.drawWhole(zT), 0 !== zT.faceCount && (this.geometry.set(zT, UT) ? (zT.packed && this.slots.setFaces(zT.slot, zT.vertices.start + zT.faceCount, zT.faceCount), UT.mB && this.setChunkMeshLight(TT, UT.mB)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${zT.vertexCo … [truncated]
+         this.drawWhole(nB), 0 !== nB.faceCount && (this.geometry.set(nB, jB) ? (nB.packed && this.slots.setFaces(nB.slot, nB.vertices.start + nB.faceCount, nB.faceCount), jB.MJ && this.setChunkMeshLight(BB, jB.MJ)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${nB.vertexCo … [truncated]
```

#### 476. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6343-L6346` → after: `L6343-L6346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6343-L6346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L6343-L6346) · [Before (L6343-L6346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L6343-L6346)

```diff
-         const mT = TT.Nl,
-           [WT, zT, MT] = mT.zWT(UT.origin[0], UT.origin[1], UT.origin[2]),
-           gT = mT.lZ.LZ(WT, zT, MT);
-         gT && (gT.kZ = !0, gT.BZ = !0, mT.jZ(gT, !1))
+         const zB = BB.zr,
+           [QB, nB, dB] = zB.xzB(jB.origin[0], jB.origin[1], jB.origin[2]),
+           IB = zB.Fm.Ym(QB, nB, dB);
+         IB && (IB.Hm = !0, IB.hm = !0, zB.Dm(IB, !1))
```

#### 477. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6350` → after: `L6350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L6350) · [Before (L6350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L6350)

```diff
-         TT.faceMask = mT, TT.rangeCount = (0, Gn.n)(UT, mT, WT), TT.first0 = WT[0], TT.count0 = WT[1], TT.first1 = WT[2], TT.count1 = WT[3]
+         BB.faceMask = zB, BB.rangeCount = (0, CN.k)(jB, zB, QB), BB.first0 = QB[0], BB.count0 = QB[1], BB.first1 = QB[2], BB.count1 = QB[3]
```

#### 478. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6363` → after: `L6363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L6363) · [Before (L6363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L6363)

```diff
-         if (!mT) return this.warnOnce(`material:${TT.name}`, `Lite terrain cannot draw material "${TT.name}"; its chunks are skipped.`), null;
+         if (!zB) return this.warnOnce(`material:${BB.name}`, `Lite terrain cannot draw material "${BB.name}"; its chunks are skipped.`), null;
```

#### 479. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6377` → after: `L6377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L6377) · [Before (L6377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L6377)

```diff
-             label: `terrain-material-${TT.name}`,
+             label: `terrain-material-${BB.name}`,
```

#### 480. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6384` → after: `L6384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L6384) · [Before (L6384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L6384)

```diff
-           A4: 0,
+           xR: 0,
```

#### 481. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6392` → after: `L6392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L6392) · [Before (L6392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L6392)

```diff
-           console.error(`Lite terrain failed to load the textures of material "${TT.name}"`, UT)
+           console.error(`Lite terrain failed to load the textures of material "${BB.name}"`, jB)
```

#### 482. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6409` → after: `L6409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L6409) · [Before (L6409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L6409)

```diff
-             label: `terrain-material-${mT}`,
+             label: `terrain-material-${zB}`,
```

#### 483. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6456` → after: `L6456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L6456) · [Before (L6456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L6456)

```diff
-           TT.atlasCount = WT.length, TT.A4 = WT[0].layerWidth, TT.atlasLayers = WT[0].layers, UT.animDataPerTex && mT.push({
+           BB.atlasCount = QB.length, BB.xR = QB[0].layerWidth, BB.atlasLayers = QB[0].layers, jB.animDataPerTex && zB.push({
```

#### 484. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6470` → after: `L6470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L6470) · [Before (L6470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L6470)

```diff
-           mT.push(this.sampler), mT.push(DT(this.device, WT, zT, MT, 1, `terrain-${UT}`).createView({
+           zB.push(this.sampler), zB.push(bB(this.device, QB, nB, dB, 1, `terrain-${jB}`).createView({
```

#### 485. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6476` → after: `L6476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L6476) · [Before (L6476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L6476)

```diff
-           label: `terrain-material-${TT.model.name}`,
+           label: `terrain-material-${BB.model.name}`,
```

#### 486. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6487` → after: `L6487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L6487) · [Before (L6487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L6487)

```diff
-           zT = mT ? mT.Np : this.Np,
+           nB = zB ? zB.mJ : this.mJ,
```

#### 487. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6491` → after: `L6491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L6491) · [Before (L6491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L6491)

```diff
-             A4: TT.A4,
+             xR: BB.xR,
```

#### 488. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6494` → after: `L6494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L6494) · [Before (L6494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L6494)

```diff
-             alphaTest: TT.model.transparencyMode === JT.j.alphaTest,
+             alphaTest: BB.model.transparencyMode === iB.o.alphaTest,
```

#### 489. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6501` → after: `L6501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L6501) · [Before (L6501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L6501)

```diff
-           nT = "atlas" === TT.texture && TT.model.transparencyMode === JT.j.opaque && wW(gT.packVariant);
+           NB = "atlas" === BB.texture && BB.model.transparencyMode === iB.o.opaque && fQ(IB.packVariant);
```

#### 490. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6510` → after: `L6510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L6510) · [Before (L6510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L6510)

```diff
-         return void 0 === mT ? xW : {
+         return void 0 === zB ? iQ : {
```

#### 491. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6522` → after: `L6522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L6522) · [Before (L6522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L6522)

```diff
-         return TT.model.transparencyMode === JT.j.alphaBlend
+         return BB.model.transparencyMode === iB.o.alphaBlend
```

#### 492. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6547` → after: `L6547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/07ca37923fef37a8fe3c01ded26d576fef5edd4e...build/bloxd.io/7zvlu.7df130a9#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/7zvlu.7df130a9/bundles/bloxd.io/chunks/js/274.js#L6547) · [Before (L6547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/07ca37923fef37a8fe3c01ded26d576fef5edd4e/bundles/bloxd.io/chunks/js/274.js#L6547)

```diff
-         return void 0 !== zT ? zT : (this.startPipeline(WT, TT, this.programKey(TT, UT), mT), null)
+         return void 0 !== nB ? nB : (this.startPipeline(QB, BB, this.programKey(BB, jB), zB), null)
```
