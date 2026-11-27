# Changed — Bundle Modifications Report (Part 064 / 153)

- **Updated at**: `2026-11-27T18:53 JST`
- **Part**: `64 / 153` (**407** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 063](part-063.md) · [Part 065 →](part-065.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/301.js` (gw4e3a.937868ec → u88b9b.1969c480 · continued)

- **File**: `bundles/bloxd.io/chunks/js/301.js` (674 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad)

#### 145. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1791` → after: `L1791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L1791) · [Before (L1791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L1791)

```diff
-       return `#if defined(${BB}) && ${BB}DIRECTUV == 0\nvarying v${OB}UV: vec2f;\n#endif`
+       return `#if defined(${ee}) && ${ee}DIRECTUV == 0\nvarying v${ie}UV: vec2f;\n#endif`
```

#### 146. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1795` → after: `L1795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L1795) · [Before (L1795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L1795)

```diff
-       return `#if defined(${BB}) && ${BB}DIRECTUV == 0\nif (uniforms.v${OB}Infos.x==0.)\n{vertexOutputs.v${OB}UV= (uniforms.${GB}Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.v${OB}UV= (uniforms.${GB}Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif`
+       return `#if defined(${ee}) && ${ee}DIRECTUV == 0\nif (uniforms.v${ie}Infos.x==0.)\n{vertexOutputs.v${ie}UV= (uniforms.${He}Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.v${ie}UV= (uniforms.${He}Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif`
```

#### 147. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1799` → after: `L1799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L1799) · [Before (L1799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L1799)

```diff
-       return `#ifdef ${BB}\n#if ${BB}DIRECTUV == 1\n#define v${OB}UV vMainUV1\n#elif ${BB}DIRECTUV == 2\n#define v${OB}UV vMainUV2\n#else\nvarying v${OB}UV: vec2f;\n#endif\nvar ${GB}SamplerSampler: sampler;\nvar ${GB}Sampler: texture_2d<f32>;\n#endif`
+       return `#ifdef ${ee}\n#if ${ee}DIRECTUV == 1\n#define v${ie}UV vMainUV1\n#elif ${ee}DIRECTUV == 2\n#define v${ie}UV vMainUV2\n#else\nvarying v${ie}UV: vec2f;\n#endif\nvar ${He}SamplerSampler: sampler;\nvar ${He}Sampler: texture_2d<f32>;\n#endif`
```

#### 148. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1818-L1819` → after: `L1818-L1819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1818-L1819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L1818-L1819) · [Before (L1818-L1819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L1818-L1819)

```diff
-       ND = `\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#ifdef UV2\nattribute uv2: vec2f;\n#endif\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${PD}\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#e … [truncated]
-     const RD = `\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vC … [truncated]
+       Bb = `\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#ifdef UV2\nattribute uv2: vec2f;\n#endif\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${qb}\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#e … [truncated]
+     const Eb = `\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vC … [truncated]
```

#### 149. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1848` → after: `L1848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L1848) · [Before (L1848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L1848)

```diff
-     n #endif`}(OB))).join("\n")}\naggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);\nvar reflectionColor: vec4f= vec4f(0.,0.,0.,1.);\n#ifdef REFLECTION\nvar vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);\n … [truncated]
+     n #endif`}(ie))).join("\n")}\naggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);\nvar reflectionColor: vec4f= vec4f(0.,0.,0.,1.);\n#ifdef REFLECTION\nvar vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);\n … [truncated]
```

#### 150. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1851` → after: `L1851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L1851) · [Before (L1851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L1851)

```diff
-       AD.has(BB) || (AD.add(BB), console.warn(`Lite: no place for plugin code at ${BB} in the standard shader: it is left out`))
+       Ob.has(ee) || (Ob.add(ee), console.warn(`Lite: no place for plugin code at ${ee} in the standard shader: it is left out`))
```

#### 151. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1859` → after: `L1859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L1859) · [Before (L1859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L1859)

```diff
-         YB.set(QB, `${null!==(DB=YB.get(QB))&&void 0!==DB?DB:""}${oB}\n`)
+         ye.set(Me, `${null!==(be=ye.get(Me))&&void 0!==be?be:""}${Ke}\n`)
```

#### 152. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1863` → after: `L1863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L1863) · [Before (L1863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L1863)

```diff
-           const BB = `#define ${QB}`;
+           const ee = `#define ${Me}`;
```

#### 153. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1868` → after: `L1868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L1868) · [Before (L1868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L1868)

```diff
-           GB = GB.replace(BB, (() => `\n${oB}\n${BB}`));
+           He = He.replace(ee, (() => `\n${Ke}\n${ee}`));
```

#### 154. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1878` → after: `L1878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L1878) · [Before (L1878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L1878)

```diff
-         const YB = new RegExp(BB, OB.includes("g") ? OB : `${OB}g`);
+         const ye = new RegExp(ee, ie.includes("g") ? ie : `${ie}g`);
```

#### 155. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1927` → after: `L1927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L1927) · [Before (L1927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L1927)

```diff
-       if (!GB) throw new Error(`Lite: unsupported uniform type ${BB}`);
+       if (!He) throw new Error(`Lite: unsupported uniform type ${ee}`);
```

#### 156. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1932` → after: `L1932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L1932) · [Before (L1932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L1932)

```diff
-       return void 0 === OB && void 0 === GB ? /^(u32|i32|vec\du|vec\di|vec\d<[ui]32>)$/.test(BB.replace(/\s+/g, "")) ? "@interpolate(flat) " : "" : "flat" === OB ? "@interpolate(flat) " : `@interpolate(${null!==OB&&void 0!==OB?OB:"perspective"}, ${null!==GB&&void 0!==GB?GB:"cente … [truncated]
+       return void 0 === ie && void 0 === He ? /^(u32|i32|vec\du|vec\di|vec\d<[ui]32>)$/.test(ee.replace(/\s+/g, "")) ? "@interpolate(flat) " : "" : "flat" === ie ? "@interpolate(flat) " : `@interpolate(${null!==ie&&void 0!==ie?ie:"perspective"}, ${null!==He&&void 0!==He?He:"cente … [truncated]
```

#### 157. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1940` → after: `L1940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L1940) · [Before (L1940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L1940)

```diff
-         members: [...GD, ...BB.defines.has("OPACITY") ? YD : [], ...BB.defines.has("EMISSIVE") ? DD : [], ...BB.pluginUniforms],
+         members: [...bb, ...ee.defines.has("OPACITY") ? Mb : [], ...ee.defines.has("EMISSIVE") ? Kb : [], ...ee.pluginUniforms],
```

#### 158. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1950-L1951` → after: `L1950-L1951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1950-L1951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L1950-L1951) · [Before (L1950-L1951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L1950-L1951)

```diff
-     const ID = `\nattribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${PD}\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n@vertex\nfn main( … [truncated]
-       FD = `\nuniform color: vec4f;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n${qD}\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs =  … [truncated]
+     const ab = `\nattribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${qb}\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n@vertex\nfn main( … [truncated]
+       cb = `\nuniform color: vec4f;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n${Xb}\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs =  … [truncated]
```

#### 159. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1959` → after: `L1959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L1959) · [Before (L1959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L1959)

```diff
-       const QB = [...DB.values()].map(((BB, OB) => `\t@location(${OB}) ${BB.interpolation}${BB.name}: ${BB.type},`)),
+       const Me = [...be.values()].map(((ee, ie) => `\t@location(${ie}) ${ee.interpolation}${ee.name}: ${ee.type},`)),
```

#### 160. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1970` → after: `L1970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L1970) · [Before (L1970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L1970)

```diff
-         const BB = `${WB.name}Sampler`,
+         const ee = `${Be.name}Sampler`,
```

#### 161. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1979` → after: `L1979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L1979) · [Before (L1979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L1979)

```diff
-         }), JB.push(`@group(2) @binding(${OB}) var ${WB.name}: ${WB.type};`), JB.push(`@group(2) @binding(${GB}) var ${BB}: sampler;`)
+         }), Je.push(`@group(2) @binding(${ie}) var ${Be.name}: ${Be.type};`), Je.push(`@group(2) @binding(${He}) var ${ee}: sampler;`)
```

#### 162. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1982-L1983` → after: `L1982-L1983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1982-L1983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L1982-L1983) · [Before (L1982-L1983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L1982-L1983)

```diff
-         if (!PB.has(WB.replace(/Sampler$/, ""))) throw new Error(`Lite: sampler ${WB} has no texture`);
-       const zB = [XY, MD, jB.wgsl, `@group(2) @binding(0) var<uniform> uniforms: ${BB.structName};`, ...JB].join("\n"),
+         if (!Re.has(Be.replace(/Sampler$/, ""))) throw new Error(`Lite: sampler ${Be} has no texture`);
+       const ke = [uy, kb, Ue.wgsl, `@group(2) @binding(0) var<uniform> uniforms: ${ee.structName};`, ...Je].join("\n"),
```

#### 163. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1985` → after: `L1985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L1985) · [Before (L1985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L1985)

```diff
-         pB = ["struct VertexInputs {", "\t@builtin(vertex_index) vertexIndex: u32,", "\t@builtin(instance_index) instanceIndex: u32,", ...GB.attributes.map(((BB, OB) => `\t@location(${OB}) ${BB.name}: ${BB.type},`)), "}", "var<private> vertexInputs: VertexInputs;"].join("\n"),
+         fe = ["struct VertexInputs {", "\t@builtin(vertex_index) vertexIndex: u32,", "\t@builtin(instance_index) instanceIndex: u32,", ...He.attributes.map(((ee, ie) => `\t@location(${ie}) ${ee.name}: ${ee.type},`)), "}", "var<private> vertexInputs: VertexInputs;"].join("\n"),
```

#### 164. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1987` → after: `L1987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L1987) · [Before (L1987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L1987)

```diff
-         ZB = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...YB.body.includes("fragmentInputs.frontFacing") ? ["\t@builtin(front_facing) frontFacing: bool,"] : [], ...QB, "}", "var<private> fragmentInputs: FragmentInputs;", "struct FragmentOutputs {", "\t@ … [truncated]
+         pe = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...ye.body.includes("fragmentInputs.frontFacing") ? ["\t@builtin(front_facing) frontFacing: bool,"] : [], ...Me, "}", "var<private> fragmentInputs: FragmentInputs;", "struct FragmentOutputs {", "\t@ … [truncated]
```

#### 165. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1989` → after: `L1989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L1989) · [Before (L1989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L1989)

```diff
-           for (const OB of jB.stridedArrays) BB = BB.replace(new RegExp(`\\b${OB}\\s*\\[(.*?)\\]`, "g"), `${OB}[$1].el`);
+           for (const ie of Ue.stridedArrays) ee = ee.replace(new RegExp(`\\b${ie}\\s*\\[(.*?)\\]`, "g"), `${ie}[$1].el`);
```

#### 166. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L1993-L1994` → after: `L1993-L1994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR1993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L1993-L1994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L1993-L1994) · [Before (L1993-L1994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L1993-L1994)

```diff
-         vertex: `${zB}\n${pB}\n${qB}\n${NB(GB.body)}`,
-         fragment: `diagnostic(off, derivative_uniformity);\n${zB}\n${ZB}\n${mD((RB=NB(YB.body),RB.includes("fragmentInputs.position")?RB.replace("fragmentInputs = input;","fragmentInputs = input;\nfragmentInputs.position.y = frame.outputHeight - fragmentInputs.position.y;"):RB))} … [truncated]
+         vertex: `${ke}\n${fe}\n${Te}\n${Xe(He.body)}`,
+         fragment: `diagnostic(off, derivative_uniformity);\n${ke}\n${pe}\n${Vb((ze=Xe(ye.body),ze.includes("fragmentInputs.position")?ze.replace("fragmentInputs = input;","fragmentInputs = input;\nfragmentInputs.position.y = frame.outputHeight - fragmentInputs.position.y;"):ze))} … [truncated]
```

#### 167. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2011-L2016` → after: `L2011-L2016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2011-L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2011-L2016) · [Before (L2011-L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2011-L2016)

```diff
-       wD = `${XY}\n${MD}\n${XD.wgsl}\n@group(2) @binding(0) var<uniform> sky: EarthSkyUniforms;\nstruct EarthSkyVarying {\n\t@builtin(position) position: vec4f,\n\t@location(0) worldPosition: vec3f,\n\t@location(1) fogDistance: vec3f,\n\t@location(2) tint: vec3f,\n}\n`,
-       ED = `\n@vertex\nfn main(@builtin(vertex_index) index: u32) -> EarthSkyVarying {\n\tlet corners = array<u32, 36>(${LD.join(", ")});\n\tlet corner = corners[index];\n\tlet position = vec3f(f32(corner & 1u), f32((corner >> 1u) & 1u), f32(corner >> 2u)) - 0.5;\n\tvar out: Eart … [truncated]
-       cD = `\n${ZO}\nconst PI: f32 = 3.141592653589793238462643383279502884197169;\nconst SUN_DISC_COS: f32 = 0.999956676946448443553574619906976478926848692873900859324;\n${Object.entries(wO).map((BB=>{let[OB,GB]=BB;return`const TONE_${OB}: f32 = ${GB};`})).join(" ")}\n\n// The  … [truncated]
-     var hD = GB(37771);
-     const aD = new hD.Xp,
-       eD = new hD.Xp,
+       mb = `${uy}\n${kb}\n${ub.wgsl}\n@group(2) @binding(0) var<uniform> sky: EarthSkyUniforms;\nstruct EarthSkyVarying {\n\t@builtin(position) position: vec4f,\n\t@location(0) worldPosition: vec3f,\n\t@location(1) fogDistance: vec3f,\n\t@location(2) tint: vec3f,\n}\n`,
+       lb = `\n@vertex\nfn main(@builtin(vertex_index) index: u32) -> EarthSkyVarying {\n\tlet corners = array<u32, 36>(${Lb.join(", ")});\n\tlet corner = corners[index];\n\tlet position = vec3f(f32(corner & 1u), f32((corner >> 1u) & 1u), f32(corner >> 2u)) - 0.5;\n\tvar out: Eart … [truncated]
+       Sb = `\n${Xi}\nconst PI: f32 = 3.141592653589793238462643383279502884197169;\nconst SUN_DISC_COS: f32 = 0.999956676946448443553574619906976478926848692873900859324;\n${Object.entries(ui).map((ee=>{let[ie,He]=ee;return`const TONE_${ie}: f32 = ${He};`})).join(" ")}\n\n// The  … [truncated]
+     var nb = He(37913);
+     const jb = new nb.rf,
+       sb = new nb.rf,
```

#### 168. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2034` → after: `L2034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2034) · [Before (L2034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2034)

```diff
-         aD.set(OB.distance * Math.cos(GB) * Math.cos(BB), OB.distance * Math.sin(-BB), OB.distance * Math.sin(GB) * Math.cos(BB)), hD.Quaternion.FromUnitVectorsToRef(hD.Xp.UpReadOnly, eD.set(OB.up[0], OB.up[1], OB.up[2]), TD), aD.rotateByQuaternionToRef(TD, aD)
+         jb.set(ie.distance * Math.cos(He) * Math.cos(ee), ie.distance * Math.sin(-ee), ie.distance * Math.sin(He) * Math.cos(ee)), nb.Quaternion.FromUnitVectorsToRef(nb.rf.UpReadOnly, sb.set(ie.up[0], ie.up[1], ie.up[2]), Ib), jb.rotateByQuaternionToRef(Ib, jb)
```

#### 169. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2060` → after: `L2060`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2060) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2060) · [Before (L2060)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2060)

```diff
-         oB && oB !== this.packGroup && (BB.setBindGroup(vO.e, oB), this.packGroup = oB);
+         Ke && Ke !== this.packGroup && (ee.setBindGroup(ri.f, Ke), this.packGroup = Ke);
```

#### 170. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2071-L2072` → after: `L2071-L2072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2071-L2072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2071-L2072) · [Before (L2071-L2072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2071-L2072)

```diff
-         this.modelMeshes = BB, this.mBB = OB, this.maker = GB, this.warnOnce = YB, this.skyDraws = [], this.opaqueDraws = [], this.transparentDraws = [], this.frontDraws = [], this.warnIfNotDrawn = (BB, OB) => {
-           (OB < -1 || OB > 1) && this.warnOnce(`group:${OB}`, `rendering group ${OB} is not drawn`)
+         this.modelMeshes = ee, this.Nee = ie, this.maker = He, this.warnOnce = ye, this.skyDraws = [], this.opaqueDraws = [], this.transparentDraws = [], this.frontDraws = [], this.warnIfNotDrawn = (ee, ie) => {
+           (ie < -1 || ie > 1) && this.warnOnce(`group:${ie}`, `rendering group ${ie} is not drawn`)
```

#### 171. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2079` → after: `L2079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2079) · [Before (L2079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2079)

```diff
-         this.collectGroup(BB, -1, this.skyDraws, this.skyDraws, !0), this.collectGroup(BB, 0, this.opaqueDraws, this.transparentDraws, !1), this.collectGroup(BB, 1, this.frontDraws, this.frontDraws, !0), this.modelMeshes.forEachGroup(this.warnIfNotDrawn), this.mBB.forEachGroup(th … [truncated]
+         this.collectGroup(ee, -1, this.skyDraws, this.skyDraws, !0), this.collectGroup(ee, 0, this.opaqueDraws, this.transparentDraws, !1), this.collectGroup(ee, 1, this.frontDraws, this.frontDraws, !0), this.modelMeshes.forEachGroup(this.warnIfNotDrawn), this.Nee.forEachGroup(th … [truncated]
```

#### 172. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2083` → after: `L2083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2083) · [Before (L2083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2083)

```diff
-           oB = this.mBB.group(OB),
+           Ke = this.Nee.group(ie),
```

#### 173. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2085` → after: `L2085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2085) · [Before (L2085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2085)

```diff
-         this.collectList(BB, null === QB || void 0 === QB ? void 0 : QB.opaque, jB || null === oB || void 0 === oB ? void 0 : oB.opaque, OB, !1, GB, DB), jB && (this.mBB.drawn += this.maker.bundleDraws(BB, jB, OB)), this.collectList(BB, null === QB || void 0 === QB ? void 0 : QB. … [truncated]
+         this.collectList(ee, null === Me || void 0 === Me ? void 0 : Me.opaque, Ue || null === Ke || void 0 === Ke ? void 0 : Ke.opaque, ie, !1, He, be), Ue && (this.Nee.drawn += this.maker.bundleDraws(ee, Ue, ie)), this.collectList(ee, null === Me || void 0 === Me ? void 0 : Me. … [truncated]
```

#### 174. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2090` → after: `L2090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2090) · [Before (L2090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2090)

```diff
-         OB && this.maker.pushDraws(BB, OB.units, OB.units.length, YB, DB, QB, OB.rows), GB && (this.mBB.drawn += this.maker.pushDraws(BB, GB, GB.length, YB, DB, QB));
+         ie && this.maker.pushDraws(ee, ie.units, ie.units.length, ye, be, Me, ie.rows), He && (this.Nee.drawn += this.maker.pushDraws(ee, He, He.length, ye, be, Me));
```

#### 175. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2115` → after: `L2115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2115) · [Before (L2115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2115)

```diff
-       return BB.hasThinInstances ? "thin" : BB.WQB || BB._userInstancedBuffersStorage ? "instanced" : "none"
+       return ee.hasThinInstances ? "thin" : ee.nMe || ee._userInstancedBuffersStorage ? "instanced" : "none"
```

#### 176. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2119` → after: `L2119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2119) · [Before (L2119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2119)

```diff
-       return BB ? (GB._needUVs = !0, BB.optimizeUVAllocation && (0, dB.B)(BB.matrix) ? (GB[`${OB}DIRECTUV`] = BB.uvSet + 1, GB[`MAINUV${BB.uvSet+1}`] = !0) : GB[`${OB}DIRECTUV`] = 0, !0) : (GB[`${OB}DIRECTUV`] = 0, !1)
+       return ee ? (He._needUVs = !0, ee.optimizeUVAllocation && (0, we.E)(ee.matrix) ? (He[`${ie}DIRECTUV`] = ee.uvSet + 1, He[`MAINUV${ee.uvSet+1}`] = !0) : He[`${ie}DIRECTUV`] = 0, !0) : (He[`${ie}DIRECTUV`] = 0, !1)
```

#### 177. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2147` → after: `L2147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2147) · [Before (L2147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2147)

```diff
-       return null !== OB && void 0 !== OB && OB.live ? OB : null
+       return null !== ie && void 0 !== ie && ie.live ? ie : null
```

#### 178. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2152` → after: `L2152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2152) · [Before (L2152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2152)

```diff
-       return null !== (OB = yQ(BB)) && void 0 !== OB ? OB : YQ
+       return null !== (ie = oM(ee)) && void 0 !== ie ? ie : MM
```

#### 179. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2164` → after: `L2164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2164) · [Before (L2164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2164)

```diff
-           if (!BB) return this.warnOnce("model", `${GB.name} on ${QB.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
+           if (!ee) return this.warnOnce("model", `${He.name} on ${Me.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
```

#### 180. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2187` → after: `L2187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2187) · [Before (L2187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2187)

```diff
-           for (const [GB, YB] of BB) OB += !0 === YB ? `${GB};` : `${GB}=${YB};`;
+           for (const [He, ye] of ee) ie += !0 === ye ? `${He};` : `${He}=${ye};`;
```

#### 181. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2200` → after: `L2200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2200) · [Before (L2200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2200)

```diff
-         return 0 === this.modelPackVariant ? null : null !== (OB = (0, fB.A)(BB, UB.f.name)) && void 0 !== OB && OB.active ? "placed" : BB.item ? "item" : BB.lifeform ? "lifeform" : BB.box ? "box" : null
+         return 0 === this.modelPackVariant ? null : null !== (ie = (0, te.y)(ee, We.e.name)) && void 0 !== ie && ie.active ? "placed" : ee.item ? "item" : ee.lifeform ? "lifeform" : ee.box ? "box" : null
```

#### 182. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2204` → after: `L2204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2204) · [Before (L2204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2204)

```diff
-         return "thin" === OB ? null !== (DB = this.resources.lBB.get(BB)) && void 0 !== DB ? DB : null : "instanced" === OB && null !== (GB = null === (YB = BB._userInstancedBuffersStorage) || void 0 === YB ? void 0 : YB.interleavedKinds) && void 0 !== GB ? GB : null
+         return "thin" === ie ? null !== (be = this.resources.Zee.get(ee)) && void 0 !== be ? be : null : "instanced" === ie && null !== (He = null === (ye = ee._userInstancedBuffersStorage) || void 0 === ye ? void 0 : ye.interleavedKinds) && void 0 !== He ? He : null
```

#### 183. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2214` → after: `L2214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2214) · [Before (L2214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2214)

```diff
-           for (; YB < this.view.lightCount && (BB[`LIGHT${YB}`] = !0, BB[`LITE_LIGHT${YB}_SLOT`] = YB, YB++, BB._needNormals = !0, YB !== OB););
+           for (; ye < this.view.lightCount && (ee[`LIGHT${ye}`] = !0, ee[`LITE_LIGHT${ye}_SLOT`] = ye, ye++, ee._needNormals = !0, ye !== ie););
```

#### 184. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2216` → after: `L2216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2216) · [Before (L2216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2216)

```diff
-         for (let DB = YB; DB < 4; DB++) BB[`LIGHT${DB}`] = !1, BB[`LITE_LIGHT${DB}_SLOT`] = void 0
+         for (let be = ye; be < 4; be++) ee[`LIGHT${be}`] = !1, ee[`LITE_LIGHT${be}_SLOT`] = void 0
```

#### 185. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2226` → after: `L2226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2226) · [Before (L2226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2226)

```diff
-         yB ? (YB._needUVs = !0, YB.DIFFUSE = !0, yB.optimizeUVAllocation && (0, dB.B)(yB.matrix) ? (YB.DIFFUSEDIRECTUV = yB.uvSet + 1, YB[`MAINUV${yB.uvSet+1}`] = !0) : YB.DIFFUSEDIRECTUV = 0, yB.uvSet > 1 && this.warnOnce(`uvset:${GB.name}`, `${GB.name} samples UV set ${yB.uvSet … [truncated]
+         Fe ? (ye._needUVs = !0, ye.DIFFUSE = !0, Fe.optimizeUVAllocation && (0, we.E)(Fe.matrix) ? (ye.DIFFUSEDIRECTUV = Fe.uvSet + 1, ye[`MAINUV${Fe.uvSet+1}`] = !0) : ye.DIFFUSEDIRECTUV = 0, Fe.uvSet > 1 && this.warnOnce(`uvset:${He.name}`, `${He.name} samples UV set ${Fe.uvSet … [truncated]
```

#### 186. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2229` → after: `L2229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2229) · [Before (L2229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2229)

```diff
-         YB.OPACITY = QQ(JB, "OPACITY", YB), YB.OPACITYRGB = null !== JB && JB.getAlphaFromRGB, YB.EMISSIVE = QQ(MB, "EMISSIVE", YB), (JB && JB.uvSet > 1 || MB && MB.uvSet > 1) && this.warnOnce(`uvset:${GB.name}`, `${GB.name} samples a UV set past 2, which is not supported`);
+         ye.OPACITY = UM(Je, "OPACITY", ye), ye.OPACITYRGB = null !== Je && Je.getAlphaFromRGB, ye.EMISSIVE = UM(oe, "EMISSIVE", ye), (Je && Je.uvSet > 1 || oe && oe.uvSet > 1) && this.warnOnce(`uvset:${He.name}`, `${He.name} samples a UV set past 2, which is not supported`);
```

#### 187. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2236` → after: `L2236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2236) · [Before (L2236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2236)

```diff
-         YB.REFLECTION = zB, YB.REFLECTIONMAP_3D = zB, YB.REFLECTIONMAP_SKYBOX = zB, YB.REFLECTIONMAP_OPPOSITEZ = zB && (BB.useRightHandedSystem ? !PB.invertZ : PB.invertZ), YB.ROUGHNESS = zB && GB.roughness > 0, YB.REFLECTIONOVERALPHA = zB && GB.useReflectionOverAlpha, YB.LITE_RE … [truncated]
+         ye.REFLECTION = ke, ye.REFLECTIONMAP_3D = ke, ye.REFLECTIONMAP_SKYBOX = ke, ye.REFLECTIONMAP_OPPOSITEZ = ke && (ee.useRightHandedSystem ? !Re.invertZ : Re.invertZ), ye.ROUGHNESS = ke && He.roughness > 0, ye.REFLECTIONOVERALPHA = ke && He.useReflectionOverAlpha, ye.LITE_RE … [truncated]
```

#### 188. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2241` → after: `L2241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2241) · [Before (L2241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2241)

```diff
-         YB.ALPHATEST = (0, fB.Q)(GB, lB, pB), YB.ALPHAFROMDIFFUSE = (0, fB.cb)(GB), YB.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== GB.transparencyMode, YB.ALPHABLEND = null === GB.transparencyMode || (0, fB.P)(GB, lB, pB), YB.PREMULTIPLYALPHA = 7 === GB.alphaMode || 8 === GB.a … [truncated]
+         ye.ALPHATEST = (0, te.O)(He, qe, fe), ye.ALPHAFROMDIFFUSE = (0, te.db)(He), ye.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== He.transparencyMode, ye.ALPHABLEND = null === He.transparencyMode || (0, te.M)(He, qe, fe), ye.PREMULTIPLYALPHA = 7 === He.alphaMode || 8 === He.a … [truncated]
```

#### 189. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2249` → after: `L2249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2249) · [Before (L2249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2249)

```diff
-           if (fB) null === (qB = (ZB = (0, FO.i)(nB)).prepareDefinesBeforeAttributes) || void 0 === qB || qB.call(ZB, UB, YB, BB, OB)
+           if (te) null === (Te = (pe = (0, ai.e)(de)).prepareDefinesBeforeAttributes) || void 0 === Te || Te.call(pe, We, ye, ee, ie)
```

#### 190. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2261` → after: `L2261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2261) · [Before (L2261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2261)

```diff
-           if (fB) null === (RB = (WB = (0, FO.i)(nB)).prepareDefines) || void 0 === RB || RB.call(WB, UB, YB, BB, OB, GB)
+           if (te) null === (ze = (Be = (0, ai.e)(de)).prepareDefines) || void 0 === ze || ze.call(Be, We, ye, ee, ie, He)
```

#### 191. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2263` → after: `L2263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2263) · [Before (L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2263)

```diff
-         const AB = BB.Lp();
+         const Ee = ee.Nf();
```

#### 192. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2271` → after: `L2271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2271) · [Before (L2271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2271)

```diff
-           if (fB && !1 === (null === (VB = (SB = (0, FO.i)(nB)).isReadyForSubMesh) || void 0 === VB ? void 0 : VB.call(SB, UB, YB, BB, AB))) return !1
+           if (te && !1 === (null === (ge = (Oe = (0, ai.e)(de)).isReadyForSubMesh) || void 0 === ge ? void 0 : ge.call(Oe, We, ye, ee, Ee))) return !1
```

#### 193. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2288` → after: `L2288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2288) · [Before (L2288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2288)

```diff
-           if (pB) zQ(null === (DB = (QB = (0, FO.i)(zB)).getCustomCode) || void 0 === DB ? void 0 : DB.call(QB, lB, "vertex", SB.c.WGSL), GB), zQ(null === (oB = (jB = (0, FO.i)(zB)).getCustomCode) || void 0 === oB ? void 0 : oB.call(jB, lB, "fragment", SB.c.WGSL), YB)
+           if (fe) fM(null === (be = (Me = (0, ai.e)(ke)).getCustomCode) || void 0 === be ? void 0 : be.call(Me, qe, "vertex", Oe.b.WGSL), He), fM(null === (Ke = (Ue = (0, ai.e)(ke)).getCustomCode) || void 0 === Ke ? void 0 : Ke.call(Ue, qe, "fragment", Oe.b.WGSL), ye)
```

#### 194. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2297-L2298` → after: `L2297-L2298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2297-L2298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2297-L2298) · [Before (L2297-L2298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2297-L2298)

```diff
-           const BB = null === (JB = (MB = (0, FO.i)(zB)).getUniforms) || void 0 === JB ? void 0 : JB.call(MB, lB, SB.c.WGSL);
-           for (const OB of null !== (PB = null === BB || void 0 === BB ? void 0 : BB.ubo) && void 0 !== PB ? PB : []) {
+           const ee = null === (Je = (oe = (0, ai.e)(ke)).getUniforms) || void 0 === Je ? void 0 : Je.call(oe, qe, Oe.b.WGSL);
+           for (const ie of null !== (Re = null === ee || void 0 === ee ? void 0 : ee.ubo) && void 0 !== Re ? Re : []) {
```

#### 195. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2308` → after: `L2308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2308) · [Before (L2308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2308)

```diff
-       }(BB, OB), `${GB}#${BB.codeKey}`
+       }(ee, ie), `${He}#${ee.codeKey}`
```

#### 196. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2332` → after: `L2332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2332) · [Before (L2332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2332)

```diff
-           oB = null !== (DB = BB.sideOrientation) && void 0 !== DB ? DB : OB.sideOrientation;
+           Ke = null !== (be = ee.sideOrientation) && void 0 !== be ? be : ie.sideOrientation;
```

#### 197. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2343` → after: `L2343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2343) · [Before (L2343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2343)

```diff
-         return YB && YB.alphaMode === yB && YB.depthWrite === JB && YB.depthFunction === zB && YB.cullMode === MB && YB.frontFace === PB && YB.zOffset === lB && YB.zOffsetUnits === pB && YB.colourWrite === qB && YB.topology === QB ? YB : this.stateFor(yB, JB, zB, MB, PB, lB, pB,  … [truncated]
+         return ye && ye.alphaMode === Fe && ye.depthWrite === Je && ye.depthFunction === ke && ye.cullMode === oe && ye.frontFace === Re && ye.zOffset === qe && ye.zOffsetUnits === fe && ye.colourWrite === Te && ye.topology === Me ? ye : this.stateFor(Fe, Je, ke, oe, Re, qe, fe,  … [truncated]
```

#### 198. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2346` → after: `L2346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2346) · [Before (L2346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2346)

```diff
-         const JB = `${BB}|${OB}|${GB}|${YB}|${DB}|${QB}|${oB}|${jB}|${yB}`;
+         const Je = `${ee}|${ie}|${He}|${ye}|${be}|${Me}|${Ke}|${Ue}|${Fe}`;
```

#### 199. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2351` → after: `L2351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2351) · [Before (L2351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2351)

```diff
-           BB && !zB && this.warnOnce(`alpha:${BB}`, `alpha mode ${BB} is not supported`), MB = {
+           ee && !ke && this.warnOnce(`alpha:${ee}`, `alpha mode ${ee} is not supported`), oe = {
```

#### 200. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2360` → after: `L2360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2360) · [Before (L2360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2360)

```diff
-             depthCompare: GB && null !== (PB = lQ.get(GB)) && void 0 !== PB ? PB : null,
+             depthCompare: He && null !== (Re = TM.get(He)) && void 0 !== Re ? Re : null,
```

#### 201. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2371` → after: `L2371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2371) · [Before (L2371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2371)

```diff
-     var qQ = GB(38035);
+     var XM = He(38159);
```

#### 202. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2383` → after: `L2383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2383) · [Before (L2383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2383)

```diff
-         const BB = (0, FO.i)(GB).uniformsVersion;
+         const ee = (0, ai.e)(He).uniformsVersion;
```

#### 203. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2431` → after: `L2431`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2431) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2431) · [Before (L2431)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2431)

```diff
-       TBB(BB, OB) {
+       oie(ee, ie) {
```

#### 204. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2466` → after: `L2466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2466) · [Before (L2466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2466)

```diff
-         YB = qQ.i,
+         ye = XM.h,
```

#### 205. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2471-L2472` → after: `L2471-L2472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2471-L2472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2471-L2472) · [Before (L2471-L2472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2471-L2472)

```diff
-           QB = oB * qQ.c;
-         OB[BB] = DB[QB + YB.vector], OB[BB + 1] = DB[QB + YB.vector + 1], OB[BB + 2] = DB[QB + YB.vector + 2], OB[BB + 3] = DB[QB + YB.kind] === qQ.g.directional ? 1 : 0, OB[BB + 4] = DB[QB + YB.diffuse], OB[BB + 5] = DB[QB + YB.diffuse + 1], OB[BB + 6] = DB[QB + YB.diffuse + 2], … [truncated]
+           Me = Ke * XM.b;
+         ie[ee] = be[Me + ye.vector], ie[ee + 1] = be[Me + ye.vector + 1], ie[ee + 2] = be[Me + ye.vector + 2], ie[ee + 3] = be[Me + ye.kind] === XM.f.directional ? 1 : 0, ie[ee + 4] = be[Me + ye.diffuse], ie[ee + 5] = be[Me + ye.diffuse + 1], ie[ee + 6] = be[Me + ye.diffuse + 2], … [truncated]
```

#### 206. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2500` → after: `L2500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2500) · [Before (L2500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2500)

```diff
-         const PB = BB.Lp();
+         const Re = ee.Nf();
```

#### 207. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2508` → after: `L2508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2508) · [Before (L2508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2508)

```diff
-           if (ZB) null === (zB = (lB = (0, FO.i)(pB)).bind) || void 0 === zB || zB.call(lB, qB, DB, BB, PB)
+           if (pe) null === (ke = (qe = (0, ai.e)(fe)).bind) || void 0 === ke || ke.call(qe, Te, be, ee, Re)
```

#### 208. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2521` → after: `L2521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2521) · [Before (L2521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2521)

```diff
-         DB = BB => 4 === GB ? `${BB}x4` : 2 === GB ? `${BB}x2` : null;
+         be = ee => 4 === He ? `${ee}x4` : 2 === He ? `${ee}x2` : null;
```

#### 209. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2523` → after: `L2523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2523) · [Before (L2523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2523)

```diff
-         if (5126 === BB.type) return 1 === GB ? "float32" : GB >= 2 && GB <= 4 ? `float32x${GB}` : null;
+         if (5126 === ee.type) return 1 === He ? "float32" : He >= 2 && He <= 4 ? `float32x${He}` : null;
```

#### 210. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2541` → after: `L2541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2541) · [Before (L2541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2541)

```diff
-           return 1 === GB ? `${QB}32` : GB <= 4 ? `${QB}32x${GB}` : null;
+           return 1 === He ? `${Me}32` : He <= 4 ? `${Me}32x${He}` : null;
```

#### 211. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2544` → after: `L2544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2544) · [Before (L2544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2544)

```diff
-           return DB(`${QB}8`);
+           return be(`${Me}8`);
```

#### 212. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2547` → after: `L2547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2547) · [Before (L2547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2547)

```diff
-           return DB(`${QB}16`)
+           return be(`${Me}16`)
```

#### 213. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2555` → after: `L2555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2555) · [Before (L2555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2555)

```diff
-       return GB ? Number(GB[1]) / 8 * Number(null !== (OB = GB[2]) && void 0 !== OB ? OB : 1) : 4
+       return He ? Number(He[1]) / 8 * Number(null !== (ie = He[2]) && void 0 !== ie ? ie : 1) : 4
```

#### 214. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2593` → after: `L2593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2593) · [Before (L2593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2593)

```diff
-           if (!JB) return this.warnOnce(`format:${OB}:${GB.name}`, `${OB}'s ${GB.name} (type ${jB.type}, size ${jB.getSize()}) has no WebGPU vertex format`), null;
+           if (!Je) return this.warnOnce(`format:${ie}:${He.name}`, `${ie}'s ${He.name} (type ${Ue.type}, size ${Ue.getSize()}) has no WebGPU vertex format`), null;
```

#### 215. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2614` → after: `L2614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2614) · [Before (L2614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2614)

```diff
-         if (DB.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${OB}`, `${OB} needs ${DB.length} vertex buffers`), null;
+         if (be.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${ie}`, `${ie} needs ${be.length} vertex buffers`), null;
```

#### 216. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2617-L2618` → after: `L2617-L2618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2617-L2618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2617-L2618) · [Before (L2617-L2618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2617-L2618)

```diff
-           jB += `${MB.stride}${"instance"===MB.step?"i":"v"}`;
-           for (const BB of MB.attributes) jB += `,${BB.shaderLocation}:${BB.offset}:${BB.format}`;
+           Ue += `${oe.stride}${"instance"===oe.step?"i":"v"}`;
+           for (const ee of oe.attributes) Ue += `,${ee.shaderLocation}:${ee.offset}:${ee.format}`;
```

#### 217. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2642` → after: `L2642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2642) · [Before (L2642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2642)

```diff
-           iBB: JB,
+           Qee: Je,
```

#### 218. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2722` → after: `L2722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2722) · [Before (L2722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2722)

```diff
-       return BB.gpu[dB.f.lite] ??= BB.materials.map(((OB, GB) => ({
+       return ee.gpu[we.e.lite] ??= ee.materials.map(((ie, He) => ({
```

#### 219. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2731` → after: `L2731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2731) · [Before (L2731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2731)

```diff
-       return null !== (OB = null !== (GB = null === (YB = BB.parts.materials[BB.range]) || void 0 === YB ? void 0 : YB.mirror) && void 0 !== GB ? GB : BB.owner.material) && void 0 !== OB ? OB : null
+       return null !== (ie = null !== (He = null === (ye = ee.parts.materials[ee.range]) || void 0 === ye ? void 0 : ye.mirror) && void 0 !== He ? He : ee.owner.material) && void 0 !== ie ? ie : null
```

#### 220. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2740` → after: `L2740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2740) · [Before (L2740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2740)

```diff
-         this.selectedCount = 0, this.model = null, this.mirror = null, this.groups = new Map, this.batches = new WeakMap, this.rows = new Int32Array(0), this.frame = 0, this.warnOnce = (0, IO.c)("Lite: ")
+         this.selectedCount = 0, this.model = null, this.mirror = null, this.groups = new Map, this.batches = new WeakMap, this.rows = new Int32Array(0), this.frame = 0, this.warnOnce = (0, Vi.b)("Lite: ")
```

#### 221. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2746` → after: `L2746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2746) · [Before (L2746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2746)

```diff
-         return this.model.nodes.mP
+         return this.model.nodes.xR
```

#### 222. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2769` → after: `L2769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2769) · [Before (L2769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2769)

```diff
-         this.rows.length < GB.nodes.CP && (this.rows = new Int32Array(GB.nodes.CP));
+         this.rows.length < He.nodes.bk && (this.rows = new Int32Array(He.nodes.bk));
```

#### 223. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2775` → after: `L2775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2775) · [Before (L2775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2775)

```diff
-           GB && !GB.isBlocked && GB.isEnabled() && !GB.SP.hasAZeroComponent && QB.selects(BB, OB.frustum) && (this.activate(GB, BB), this.selectedCount++)
+           He && !He.isBlocked && He.isEnabled() && !He.wR.hasAZeroComponent && Me.selects(ee, ie.frustum) && (this.activate(He, ee), this.selectedCount++)
```

#### 224. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2796` → after: `L2796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2796) · [Before (L2796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2796)

```diff
-         if (!BB.SF) {
+         if (!ee.Zx) {
```

#### 225. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2798` → after: `L2798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2798) · [Before (L2798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2798)

```diff
-           if (GB.WQB) {
+           if (He.nMe) {
```

#### 226. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2805-L2806` → after: `L2805-L2806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2805-L2806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2805-L2806) · [Before (L2805-L2806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2805-L2806)

```diff
-           YB = GB.AQB;
-         if (YB._getWorldMatrixDeterminant() >= 0 !== GB._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${YB.name}`, `A mirrored InstancedMesh of ${YB.name} is not drawn yet`);
+           ye = He.jMe;
+         if (ye._getWorldMatrixDeterminant() >= 0 !== He._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${ye.name}`, `A mirrored InstancedMesh of ${ye.name} is not drawn yet`);
```

#### 227. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2864` → after: `L2864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2864) · [Before (L2864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2864)

```diff
-         this.sJ = new Map, this.enabled = [], this.groups = new Map, this.GP = [], this.warned = new Set, this.selected = 0, this.drawn = 0
+         this.lJ = new Map, this.enabled = [], this.groups = new Map, this.KR = [], this.warned = new Set, this.selected = 0, this.drawn = 0
```

#### 228. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2867` → after: `L2867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2867) · [Before (L2867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2867)

```diff
-         if (this.sJ.has(BB)) return;
+         if (this.lJ.has(ee)) return;
```

#### 229. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2871` → after: `L2871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2871) · [Before (L2871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2871)

```diff
-             this.Zk(OB, BB)
+             this.JY(ie, ee)
```

#### 230. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2876` → after: `L2876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2876) · [Before (L2876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2876)

```diff
-         this.sJ.set(BB, OB), this.Zk(OB, BB.isEnabled())
+         this.lJ.set(ee, ie), this.JY(ie, ee.isEnabled())
```

#### 231. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2879-L2880` → after: `L2879-L2880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2879-L2880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2879-L2880) · [Before (L2879-L2880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2879-L2880)

```diff
-         const OB = this.sJ.get(BB);
-         OB && (OB.observer.remove(!0), this.Zk(OB, !1), this.sJ.delete(BB))
+         const ie = this.lJ.get(ee);
+         ie && (ie.observer.remove(!0), this.JY(ie, !1), this.lJ.delete(ee))
```

#### 232. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2883` → after: `L2883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2883) · [Before (L2883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2883)

```diff
-         for (const BB of this.sJ.values()) BB.steady = null
+         for (const ee of this.lJ.values()) ee.steady = null
```

#### 233. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2886` → after: `L2886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2886) · [Before (L2886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2886)

```diff
-         return this.sJ.get(BB)
+         return this.lJ.get(ee)
```

#### 234. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2892` → after: `L2892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2892) · [Before (L2892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2892)

```diff
-           sJ: this.sJ.size
+           lJ: this.lJ.size
```

#### 235. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2900` → after: `L2900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2900) · [Before (L2900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2900)

```diff
-         for (const OB of this.GP) BB(OB.mesh, "opaque", 0)
+         for (const ie of this.KR) ee(ie.mesh, "opaque", 0)
```

#### 236. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2909` → after: `L2909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2909) · [Before (L2909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2909)

```diff
-         if (this.drawn = 0, this.selected = 0, this.GP.length = 0, this.groups.forEach(FQ), !BB) return;
+         if (this.drawn = 0, this.selected = 0, this.KR.length = 0, this.groups.forEach(cM), !ee) return;
```

#### 237. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2914` → after: `L2914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2914) · [Before (L2914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2914)

```diff
-             this.selected++, this.GP.push(DB);
+             this.selected++, this.KR.push(be);
```

#### 238. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2918` → after: `L2918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2918) · [Before (L2918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2918)

```diff
-           if (QB.isBlocked || QB.SP.hasAZeroComponent) continue;
+           if (Me.isBlocked || Me.wR.hasAZeroComponent) continue;
```

#### 239. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2920-L2921` → after: `L2920-L2921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2920-L2921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2920-L2921) · [Before (L2920-L2921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2920-L2921)

```diff
-           if (QB.WQB) {
-             this.warned.has(QB.name) || (this.warned.add(QB.name), console.warn(`Lite: thin instance base ${QB.name} has InstancedMeshes and is not drawn`));
+           if (Me.nMe) {
+             this.warned.has(Me.name) || (this.warned.add(Me.name), console.warn(`Lite: thin instance base ${Me.name} has InstancedMeshes and is not drawn`));
```

#### 240. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2954` → after: `L2954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2954) · [Before (L2954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2954)

```diff
-     var LQ = GB(40357);
+     var LM = He(40472);
```

#### 241. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2957` → after: `L2957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2957) · [Before (L2957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2957)

```diff
-         this.bundle = null, this.stale = !0, this.sJ = new Set
+         this.bundle = null, this.stale = !0, this.lJ = new Set
```

#### 242. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2962-L2963` → after: `L2962-L2963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2962-L2963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2962-L2963) · [Before (L2962-L2963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2962-L2963)

```diff
-         this.device = BB, this.slots = OB, this.host = GB, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = n … [truncated]
-           BB.seen !== this.frame && (BB.draw && (BB.draw = null, this.args[5 * BB.slot + 1] = 0, this.argsDirty = !0, this.Jm.stale ||= BB.Jm), this.frame - BB.seen > 120 && (this.records.delete(BB.unit), this.freeSlots.push(BB.slot), BB.recorded && (this.bundleOf(BB).stale = !0) … [truncated]
+         this.device = ee, this.slots = ie, this.host = He, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = n … [truncated]
+           ee.seen !== this.frame && (ee.draw && (ee.draw = null, this.args[5 * ee.slot + 1] = 0, this.argsDirty = !0, this.oV.stale ||= ee.oV), this.frame - ee.seen > 120 && (this.records.delete(ee.unit), this.freeSlots.push(ee.slot), ee.recorded && (this.bundleOf(ee).stale = !0) … [truncated]
```

#### 243. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2966` → after: `L2966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2966) · [Before (L2966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2966)

```diff
-           let YB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (OB = null === (GB = globalThis.navigator) || void 0 === GB ? void 0 : GB.userAgent) && void 0 !== OB ? OB : "";
+           let ye = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (ie = null === (He = globalThis.navigator) || void 0 === He ? void 0 : He.userAgent) && void 0 !== ie ? ie : "";
```

#### 244. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2969` → after: `L2969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2969) · [Before (L2969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2969)

```diff
-         }(BB), (0, LQ.G)(this.direct)
+         }(ee), (0, LM.D)(this.direct)
```

#### 245. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2972` → after: `L2972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2972) · [Before (L2972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2972)

```diff
-         this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, LQ.G)(this.directThisFrame)
+         this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, LM.D)(this.directThisFrame)
```

#### 246. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2979` → after: `L2979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2979) · [Before (L2979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2979)

```diff
-         return BB.Jm ? this.Jm : this.main
+         return ee.oV ? this.oV : this.main
```

#### 247. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2985` → after: `L2985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2985) · [Before (L2985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2985)

```diff
-         BB.seen = this.frame, BB.Jm && null === BB.draw && (this.Jm.stale = !0), BB.draw = OB, this.drawn++, GB && this.slots.write(BB.slot, GB, YB) && (this.slotsFrom = Math.min(this.slotsFrom, BB.slot), this.slotsTo = Math.max(this.slotsTo, BB.slot));
+         ee.seen = this.frame, ee.oV && null === ee.draw && (this.oV.stale = !0), ee.draw = ie, this.drawn++, He && this.slots.write(ee.slot, He, ye) && (this.slotsFrom = Math.min(this.slotsFrom, ee.slot), this.slotsTo = Math.max(this.slotsTo, ee.slot));
```

#### 248. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2988` → after: `L2988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2988) · [Before (L2988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2988)

```diff
-         DB[QB] === OB.count && DB[QB + 1] === OB.instances && DB[QB + 2] === OB.first || (DB[QB] = OB.count, DB[QB + 1] = OB.instances, DB[QB + 2] = OB.first, this.argsDirty = !0, this.Jm.stale ||= BB.Jm)
+         be[Me] === ie.count && be[Me + 1] === ie.instances && be[Me + 2] === ie.first || (be[Me] = ie.count, be[Me + 1] = ie.instances, be[Me + 2] = ie.first, this.argsDirty = !0, this.oV.stale ||= ee.oV)
```

#### 249. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2994` → after: `L2994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2994) · [Before (L2994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2994)

```diff
-         for (const OB of this.records.values()) OB.draw && OB.seen === this.frame && !OB.Jm && BB(OB.draw, this.slots.data, OB.slot * JD / 4)
+         for (const ie of this.records.values()) ie.draw && ie.seen === this.frame && !ie.oV && ee(ie.draw, this.slots.data, ie.slot * Rb / 4)
```

#### 250. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L2997` → after: `L2997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR2997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L2997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L2997) · [Before (L2997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L2997)

```diff
-         this.main.stale ||= this.main.sJ.has(BB), this.Jm.stale ||= this.Jm.sJ.has(BB)
+         this.main.stale ||= this.main.lJ.has(ee), this.oV.stale ||= this.oV.lJ.has(ee)
```

#### 251. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3003-L3004` → after: `L3003-L3004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3003-L3004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3003-L3004) · [Before (L3003-L3004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3003-L3004)

```diff
-         if (!YB) return this.main.bundle = null, this.Jm.bundle = null, this.recordedSceneGroup = null, this.encode(BB, OB, GB, "direct"), this.drawn;
-         this.recordedTarget === GB && this.recordedSceneGroup === YB || (this.recordedTarget = GB, this.recordedSceneGroup = YB, this.main.stale = !0, this.Jm.stale = !0);
+         if (!ye) return this.main.bundle = null, this.oV.bundle = null, this.recordedSceneGroup = null, this.encode(ee, ie, He, "direct"), this.drawn;
+         this.recordedTarget === He && this.recordedSceneGroup === ye || (this.recordedTarget = He, this.recordedSceneGroup = ye, this.main.stale = !0, this.oV.stale = !0);
```

#### 252. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3006` → after: `L3006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3006) · [Before (L3006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3006)

```diff
-           QB = this.Jm;
+           Me = this.oV;
```

#### 253. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3009-L3010` → after: `L3009-L3010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3009-L3010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3009-L3010) · [Before (L3009-L3010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3009-L3010)

```diff
-         const jB = (0, LQ.l)();
-         return (QB.stale || this.rangedEpoch !== jB) && (this.rangedEpoch = jB, QB.bundle = this.drawsRanged() ? this.record(OB, GB, YB, "Jm") : this.noRangedBundle(), oB = !0), oB && (this.bundles = QB.bundle ? [DB.bundle, QB.bundle] : [DB.bundle]), BB.executeBundles(this.bundle … [truncated]
+         const Ue = (0, LM.n)();
+         return (Me.stale || this.rangedEpoch !== Ue) && (this.rangedEpoch = Ue, Me.bundle = this.drawsRanged() ? this.record(ie, He, ye, "oV") : this.noRangedBundle(), Ke = !0), Ke && (this.bundles = Me.bundle ? [be.bundle, Me.bundle] : [be.bundle]), ee.executeBundles(this.bundle … [truncated]
```

#### 254. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3014` → after: `L3014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3014) · [Before (L3014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3014)

```diff
-           label: "Jm" === YB ? "thin-bases-ranged" : "thin-bases",
+           label: "oV" === ye ? "thin-bases-ranged" : "thin-bases",
```

#### 255. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3022-L3023` → after: `L3022-L3023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3022-L3023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3022-L3023) · [Before (L3022-L3023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3022-L3023)

```diff
-         for (const BB of this.records.values()) BB.Jm && (BB.recorded = !1);
-         return this.Jm.sJ.clear(), this.Jm.stale = !1, null
+         for (const ee of this.records.values()) ee.oV && (ee.recorded = !1);
+         return this.oV.lJ.clear(), this.oV.stale = !1, null
```

#### 256. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3027` → after: `L3027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3027) · [Before (L3027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3027)

```diff
-           if (BB.Jm && BB.draw) return !0;
+           if (ee.oV && ee.draw) return !0;
```

#### 257. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3032` → after: `L3032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3032) · [Before (L3032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3032)

```diff
-         for (const yB of this.records.values()) "direct" !== YB && yB.Jm !== ("Jm" === YB) || (yB.recorded = !1, yB.draw && DB.push(yB));
+         for (const Fe of this.records.values()) "direct" !== ye && Fe.oV !== ("oV" === ye) || (Fe.recorded = !1, Fe.draw && be.push(Fe));
```

#### 258. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3034-L3035` → after: `L3034-L3035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3034-L3035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3034-L3035) · [Before (L3034-L3035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3034-L3035)

```diff
-         const QB = "direct" === YB ? null : "Jm" === YB ? this.Jm : this.main;
-         null === QB || void 0 === QB || QB.sJ.clear(), this.binder.reset();
+         const Me = "direct" === ye ? null : "oV" === ye ? this.oV : this.main;
+         null === Me || void 0 === Me || Me.lJ.clear(), this.binder.reset();
```

#### 259. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3042` → after: `L3042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3042) · [Before (L3042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3042)

```diff
-             this.host.pipelineCompiling(DB, GB) ? oB = !0 : QB && this.keep(yB, DB, QB.sJ);
+             this.host.pipelineCompiling(be, He) ? Ke = !0 : Me && this.keep(Fe, be, Me.lJ);
```

#### 260. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3046` → after: `L3046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3046) · [Before (L3046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3046)

```diff
-           if (yB.Jm && "indirect" !== YB) {
+           if (Fe.oV && "indirect" !== ye) {
```

#### 261. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3048` → after: `L3048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3048) · [Before (L3048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3048)

```diff
-             MB = "direct" === YB && (0, LQ.x)(BB) || (0, LQ.o)(BB) || void 0
+             oe = "direct" === ye && (0, LM.w)(ee) || (0, LM.q)(ee) || void 0
```

#### 262. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3050` → after: `L3050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3050) · [Before (L3050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3050)

```diff
-           if (QB && this.keep(yB, DB, QB.sJ), 0 === (null === (jB = MB) || void 0 === jB ? void 0 : jB.count)) continue;
+           if (Me && this.keep(Fe, be, Me.lJ), 0 === (null === (Ue = oe) || void 0 === Ue ? void 0 : Ue.count)) continue;
```

#### 263. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3073` → after: `L3073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3073) · [Before (L3073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3073)

```diff
-           Jm: void 0 !== (0, LQ.o)(BB.owner),
+           oV: void 0 !== (0, LM.q)(ee.owner),
```

#### 264. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3086` → after: `L3086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3086) · [Before (L3086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3086)

```diff
-         if (this.slots.ensure(this.slotCount) && (this.slotsFrom = 0, this.slotsTo = this.slotCount - 1, this.main.stale = !0, this.Jm.stale = !0), 5 * this.slotCount > this.args.length) {
+         if (this.slots.ensure(this.slotCount) && (this.slotsFrom = 0, this.slotsTo = this.slotCount - 1, this.main.stale = !0, this.oV.stale = !0), 5 * this.slotCount > this.args.length) {
```

#### 265. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3129` → after: `L3129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3129) · [Before (L3129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3129)

```diff
-       const YB = `${OB.depth?"-depth":""}${OB.sunShadow?"-shadow":""}${OB.shadowMask?"-mask":""}`;
+       const ye = `${ie.depth?"-depth":""}${ie.sunShadow?"-shadow":""}${ie.shadowMask?"-mask":""}`;
```

#### 266. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3133` → after: `L3133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3133) · [Before (L3133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3133)

```diff
-           binding: vO.b,
+           binding: ri.d,
```

#### 267. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3137` → after: `L3137`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3137) · [Before (L3137)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3137)

```diff
-             minBindingSize: vO.f
+             minBindingSize: ri.j
```

#### 268. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3140` → after: `L3140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3140) · [Before (L3140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3140)

```diff
-           binding: vO.p,
+           binding: ri.u,
```

#### 269. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3147` → after: `L3147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3147) · [Before (L3147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3147)

```diff
-           binding: vO.k,
+           binding: ri.p,
```

#### 270. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3154` → after: `L3154`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3154) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3154) · [Before (L3154)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3154)

```diff
-             OB = vO.n;
+             ie = ri.q;
```

#### 271. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3162` → after: `L3162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3162) · [Before (L3162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3162)

```diff
-             binding: OB.sz,
+             binding: ie.Uq,
```

#### 272. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3200` → after: `L3200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3200) · [Before (L3200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3200)

```diff
-           binding: vO.o,
+           binding: ri.s,
```

#### 273. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3206` → after: `L3206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3206) · [Before (L3206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3206)

```diff
-           label: `${OB.depth?"terrain-":""}shader-pack-inputs${YB}`,
+           label: `${ie.depth?"terrain-":""}shader-pack-inputs${ye}`,
```

#### 274. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3219` → after: `L3219`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3219) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3219) · [Before (L3219)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3219)

```diff
-       const GB = (0, sO.h)(BB);
+       const He = (0, Qi.c)(ee);
```

#### 275. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3236` → after: `L3236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3236) · [Before (L3236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3236)

```diff
-         this.device = BB, this.sunShadow = GB, this.bindGroup = void 0, this.buffer = void 0, this.textures = void 0, this.data = new ArrayBuffer(vO.f), this.groups = new Map, this.depthView = null, this.maskView = null, this.buffer = BB.createBuffer({
+         this.device = ee, this.sunShadow = He, this.bindGroup = void 0, this.buffer = void 0, this.textures = void 0, this.data = new ArrayBuffer(ri.j), this.groups = new Map, this.depthView = null, this.maskView = null, this.buffer = ee.createBuffer({
```

#### 276. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3238` → after: `L3238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3238) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3238) · [Before (L3238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3238)

```diff
-           size: vO.f,
+           size: ri.j,
```

#### 277. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3241` → after: `L3241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3241) · [Before (L3241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3241)

```diff
-         const YB = (0, vO.t)(OB);
+         const ye = (0, ri.x)(ie);
```

#### 278. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3254` → after: `L3254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3254) · [Before (L3254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3254)

```diff
-           binding: vO.b,
+           binding: ri.d,
```

#### 279. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3259` → after: `L3259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3259) · [Before (L3259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3259)

```diff
-           binding: vO.p,
+           binding: ri.u,
```

#### 280. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3266` → after: `L3266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3266) · [Before (L3266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3266)

```diff
-         (0, vO.z)(this.data, {
+         (0, ri.C)(this.data, {
```

#### 281. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3270` → after: `L3270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3270) · [Before (L3270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3270)

```diff
-           nOB: BB.nOB(),
+           Sie: ee.Sie(),
```

#### 282. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3280` → after: `L3280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3280) · [Before (L3280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3280)

```diff
-         (BB && BB !== this.depthView || GB && GB !== this.maskView) && (this.depthView = null !== BB && void 0 !== BB ? BB : this.depthView, this.maskView = null !== GB && void 0 !== GB ? GB : this.maskView, this.groups.clear());
+         (ee && ee !== this.depthView || He && He !== this.maskView) && (this.depthView = null !== ee && void 0 !== ee ? ee : this.depthView, this.maskView = null !== He && void 0 !== He ? He : this.maskView, this.groups.clear());
```

#### 283. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3286` → after: `L3286`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3286) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3286) · [Before (L3286)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3286)

```diff
-             binding: vO.k,
+             binding: ri.p,
```

#### 284. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3289` → after: `L3289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3289) · [Before (L3289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3289)

```diff
-             binding: vO.o,
+             binding: ri.s,
```

#### 285. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3292` → after: `L3292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3292) · [Before (L3292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3292)

```diff
-             label: `${BB||GB?"terrain-":""}shader-pack-inputs${BB?"-depth":""}${YB?"-shadow":""}${GB?"-mask":""}`,
+             label: `${ee||He?"terrain-":""}shader-pack-inputs${ee?"-depth":""}${ye?"-shadow":""}${He?"-mask":""}`,
```

#### 286. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3306` → after: `L3306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3306) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3306) · [Before (L3306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3306)

```diff
-         BB.setBindGroup(vO.e, this.bindGroupFor(OB, GB, YB))
+         ee.setBindGroup(ri.f, this.bindGroupFor(ie, He, ye))
```

#### 287. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3327-L3328` → after: `L3327-L3328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3327-L3328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3327-L3328) · [Before (L3327-L3328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3327-L3328)

```diff
-         const yB = BB.iBB[QB] + (oB ? OB.gpuOffset(oB) : 0);
-         yB !== (null !== (DB = YB) && void 0 !== DB ? DB : BB.offsets)[QB] && (YB ??= BB.offsets.slice(), YB[QB] = yB), BB.ends[QB] = oB ? OB.gpuEnd(oB) : jB.size
+         const Fe = ee.Qee[Me] + (Ke ? ie.gpuOffset(Ke) : 0);
+         Fe !== (null !== (be = ye) && void 0 !== be ? be : ee.offsets)[Me] && (ye ??= ee.offsets.slice(), ye[Me] = Fe), ee.ends[Me] = Ke ? ie.gpuEnd(Ke) : Ue.size
```

#### 288. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3340` → after: `L3340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3340) · [Before (L3340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3340)

```diff
-         iBB: yB
+         Qee: Fe
```

#### 289. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3356-L3357` → after: `L3356-L3357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3356-L3357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3356-L3357) · [Before (L3356-L3357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3356-L3357)

```diff
-     var xQ = GB(38494),
-       tQ = GB(38531);
+     var eK = He(38650),
+       iK = He(38685);
```

#### 290. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3361` → after: `L3361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3361) · [Before (L3361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3361)

```diff
-       Yo = `((vertexInputs.aPackedLightLevels >> 16u) | ${mO.b.placed}u)`,
+       MK = `((vertexInputs.aPackedLightLevels >> 16u) | ${Yi.d.placed}u)`,
```

#### 291. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3363` → after: `L3363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3363) · [Before (L3363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3363)

```diff
-       Qo = `${mO.b.lifeform}u`;
+       UK = `${Yi.d.lifeform}u`;
```

#### 292. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3399` → after: `L3399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3399) · [Before (L3399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3399)

```diff
-           vertexFlags: `(${Do} & 0xffffu)`,
+           vertexFlags: `(${KK} & 0xffffu)`,
```

#### 293. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3416` → after: `L3416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3416) · [Before (L3416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3416)

```diff
-       return "lifeform" === BB.kind ? Qo : "0u"
+       return "lifeform" === ee.kind ? UK : "0u"
```

#### 294. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3427` → after: `L3427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3427) · [Before (L3427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3427)

```diff
-       return GB && qo(OB.defines) && "lifeform" === OB.kind && So(BB, "enchantTier") ? GB : null
+       return He && pK(ie.defines) && "lifeform" === ie.kind && dK(ee, "enchantTier") ? He : null
```

#### 295. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3441` → after: `L3441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3441) · [Before (L3441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3441)

```diff
-       return `vec4f(${OB.colour}.rgb * uniforms.vDiffuseInfos.y${YB?" * fragmentInputs.vColor.rgb":""}, ${OB.colour}.a)`
+       return `vec4f(${ie.colour}.rgb * uniforms.vDiffuseInfos.y${ye?" * fragmentInputs.vColor.rgb":""}, ${ie.colour}.a)`
```

#### 296. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3460` → after: `L3460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3460) · [Before (L3460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3460)

```diff
-         uv: `fragmentInputs.${1===GB.DIFFUSEDIRECTUV?"vMainUV1":2===GB.DIFFUSEDIRECTUV?"vMainUV2":"vDiffuseUV"}`
+         uv: `fragmentInputs.${1===He.DIFFUSEDIRECTUV?"vMainUV1":2===He.DIFFUSEDIRECTUV?"vMainUV2":"vDiffuseUV"}`
```

#### 297. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3467-L3469` → after: `L3467-L3469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3467-L3469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3467-L3469) · [Before (L3467-L3469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3467-L3469)

```diff
-       const QB = SB.c.WGSL,
-         oB = (0, SB.Ab)(QB, "uAnimStatesNum"),
-         jB = (0, SB.X)(QB, (0, xQ.f)(QB), oB),
+       const Me = Oe.b.WGSL,
+         Ke = (0, Oe.zb)(Me, "uAnimStatesNum"),
+         Ue = (0, Oe.bb)(Me, (0, eK.i)(Me), Ke),
```

#### 298. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3473` → after: `L3473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3473) · [Before (L3473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3473)

```diff
-         cells: `vec2f(1.0, ${oB})`,
+         cells: `vec2f(1.0, ${Ke})`,
```

#### 299. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3475` → after: `L3475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3475) · [Before (L3475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3475)

```diff
-         uv: `vec2f(${yB}.x, ${yB}.y * ${oB} - ${jB})`,
+         uv: `vec2f(${Fe}.x, ${Fe}.y * ${Ke} - ${Ue})`,
```

#### 300. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3498` → after: `L3498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3498) · [Before (L3498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3498)

```diff
-       if (1 !== DB.length) throw new Error(`A model program for shader packs has ${0===DB.length?"no":"more than one"} ${YB} code before fog (lite/modelShaderPack.ts)`);
+       if (1 !== be.length) throw new Error(`A model program for shader packs has ${0===be.length?"no":"more than one"} ${ye} code before fog (lite/modelShaderPack.ts)`);
```

#### 301. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3510` → after: `L3510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3510) · [Before (L3510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3510)

```diff
-       OB.atlas && DB.surface && jB.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", zY("atlasIdxIn")]), "item" === QB && jB.push(["CUSTOM_VERTEX_DEFINITIONS", (0, SB.e)(SB.c.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS … [truncated]
+       ie.atlas && be.surface && Ue.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", fy("atlasIdxIn")]), "item" === Me && Ue.push(["CUSTOM_VERTEX_DEFINITIONS", (0, Oe.f)(Oe.b.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS … [truncated]
```

#### 302. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3512` → after: `L3512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3512) · [Before (L3512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3512)

```diff
-       JB && (DB.surface || DB.light) && jB.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${JB.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${JB.varying} = ${JB.value};`]);
+       Je && (be.surface || be.light) && Ue.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${Je.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${Je.varying} = ${Je.value};`]);
```

#### 303. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3514` → after: `L3514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3514) · [Before (L3514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3514)

```diff
-       if (Jo(BB, OB, "fragment") && (jB.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${yo});`]), MB = [...MB, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), So(BB, … [truncated]
+       if (RK(ee, ie, "fragment") && (Ue.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${oK});`]), oe = [...oe, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), dK(ee, … [truncated]
```

#### 304. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3517-L3519` → after: `L3517-L3519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3517-L3519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3517-L3519) · [Before (L3517-L3519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3517-L3519)

```diff
-         GB && jB.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${GB});`]);
-         const YB = (0, SB.kb)(SB.c.WGSL, "color", "mix(color.xyz, bloxdSpSurface.enchantColour.rgb, bloxdSpSurface.enchantColour.a)");
-         MB = [...Uo(MB, (0, tQ.h)(SB.c.WGSL), YB, "enchantment"), ["CUSTOM_FRAGMENT_DEFINITIONS", (0, tQ.d)(jo)]]
+         He && Ue.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${He});`]);
+         const ye = (0, Oe.mb)(Oe.b.WGSL, "color", "mix(color.xyz, bloxdSpSurface.enchantColour.rgb, bloxdSpSurface.enchantColour.a)");
+         oe = [...tK(oe, (0, iK.j)(Oe.b.WGSL), ye, "enchantment"), ["CUSTOM_FRAGMENT_DEFINITIONS", (0, iK.c)(JK)]]
```

#### 305. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3528-L3529` → after: `L3528-L3529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3528-L3529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3528-L3529) · [Before (L3528-L3529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3528-L3529)

```diff
-           engine: (0, bO.T)(SB.c.WGSL),
-           pack: (0, bO.lb)(SB.c.WGSL)
+           engine: (0, Ii.O)(Oe.b.WGSL),
+           pack: (0, Ii.jb)(Oe.b.WGSL)
```

#### 306. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3532-L3533` → after: `L3532-L3533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3532) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3532-L3533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3532-L3533) · [Before (L3532-L3533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3532-L3533)

```diff
-           engine: (0, bO.L)(SB.c.WGSL),
-           pack: (0, bO.gb)(SB.c.WGSL)
+           engine: (0, Ii.F)(Oe.b.WGSL),
+           pack: (0, Ii.db)(Oe.b.WGSL)
```

#### 307. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3536-L3538` → after: `L3536-L3538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3536-L3538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3536-L3538) · [Before (L3536-L3538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3536-L3538)

```diff
-       if (zB && (MB = Uo(MB, zB.engine, zB.pack, `${zB.name} light`), "placed" !== QB && no(oB))) {
-         const BB = oB.BLOXD_UNIFORM_ENTITY_LIGHT ? (0, SB.Ab)(SB.c.WGSL, "uEntityLightLevels") : (0, SB.Lb)(SB.c.WGSL, "aLightLevels");
-         jB.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${bO.d}: vec4f;`], ["CUSTOM_VERTEX_MAIN_END", (0, bO.hb)(SB.c.WGSL, BB)])
+       if (ke && (oe = tK(oe, ke.engine, ke.pack, `${ke.name} light`), "placed" !== Me && WK(Ke))) {
+         const ee = Ke.BLOXD_UNIFORM_ENTITY_LIGHT ? (0, Oe.zb)(Oe.b.WGSL, "uEntityLightLevels") : (0, Oe.Fb)(Oe.b.WGSL, "aLightLevels");
+         Ue.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${Ii.b}: vec4f;`], ["CUSTOM_VERTEX_MAIN_END", (0, Ii.hb)(Oe.b.WGSL, ee)])
```

#### 308. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3553` → after: `L3553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3553) · [Before (L3553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3553)

```diff
-       return `${GB}${OB}${BB.slice(GB.length)}`
+       return `${He}${ie}${ee.slice(He.length)}`
```

#### 309. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3567` → after: `L3567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3567) · [Before (L3567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3567)

```diff
-         } = OB, oB = zo(OB), jB = !!QB.FOG, yB = qo(QB), JB = null !== (GB = null === oB || void 0 === oB ? void 0 : oB.enchantTier) && void 0 !== GB ? GB : Zo(BB, OB) ? "fragmentInputs.vPackEnchantTier" : "0u", MB = "lifeform" === OB.kind && !QB.ALPHAFROMDIFFUSE;
+         } = ie, Ke = fK(ie), Ue = !!Me.FOG, Fe = pK(Me), Je = null !== (He = null === Ke || void 0 === Ke ? void 0 : Ke.enchantTier) && void 0 !== He ? He : XK(ee, ie) ? "fragmentInputs.vPackEnchantTier" : "0u", oe = "lifeform" === ie.kind && !Me.ALPHAFROMDIFFUSE;
```

#### 310. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3569` → after: `L3569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3569) · [Before (L3569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3569)

```diff
-           vertexFlags: null !== (YB = null === oB || void 0 === oB ? void 0 : oB.vertexFlags) && void 0 !== YB ? YB : po(OB),
+           vertexFlags: null !== (ye = null === Ke || void 0 === Ke ? void 0 : Ke.vertexFlags) && void 0 !== ye ? ye : TK(ie),
```

#### 311. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3571` → after: `L3571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3571) · [Before (L3571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3571)

```diff
-           flags: null !== (DB = null === oB || void 0 === oB ? void 0 : oB.flags) && void 0 !== DB ? DB : po(OB),
+           flags: null !== (be = null === Ke || void 0 === Ke ? void 0 : Ke.flags) && void 0 !== be ? be : TK(ie),
```

#### 312. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3582` → after: `L3582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3582) · [Before (L3582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3582)

```diff
-           enchantColour: yB ? `${jo}(fragmentInputs.vEnchantRgbAndRotY, fragmentInputs.vPositionAndAnimTick, baseColor.rgb)` : "vec4f(0.0)",
+           enchantColour: Fe ? `${JK}(fragmentInputs.vEnchantRgbAndRotY, fragmentInputs.vPositionAndAnimTick, baseColor.rgb)` : "vec4f(0.0)",
```

#### 313. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3595` → after: `L3595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3595) · [Before (L3595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3595)

```diff
-             kP: "frame.animTick",
+             YR: "frame.animTick",
```

#### 314. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3598` → after: `L3598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3598) · [Before (L3598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3598)

```diff
-             perTexture: BB => `uniforms.uAnimDataPerTex[${BB}]${OB}`
+             perTexture: ee => `uniforms.uAnimDataPerTex[${ee}]${ie}`
```

#### 315. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3601` → after: `L3601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3601) · [Before (L3601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3601)

```diff
-       } : null, PB = "placed" === oB ? "var<private> bloxdSpCell: vec3f;\nfn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\tlet bloxdSpBehind = bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0);\n\tlet bloxdSpInside = all(abs(bloxdSpBehind - b … [truncated]
+       } : null, Re = "placed" === Ke ? "var<private> bloxdSpCell: vec3f;\nfn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\tlet bloxdSpBehind = bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0);\n\tlet bloxdSpInside = all(abs(bloxdSpBehind - b … [truncated]
```

#### 316. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3603` → after: `L3603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3603) · [Before (L3603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3603)

```diff
-         return `${(0,vO.w)()}${jY(OB,GB)}${YB}${pY(BB)}${BY}${PB}${OB.code}`
+         return `${(0,ri.z)()}${Jy(ie,He)}${ye}${py(ee)}${Hy}${Re}${ie.code}`
```

#### 317. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3611-L3612` → after: `L3611-L3612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3611-L3612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3611-L3612) · [Before (L3611-L3612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3611-L3612)

```diff
-         const BB = Jo(OB, GB, "vertex") ? `\tbloxdSpCell = ${yo};\n` : "";
-         pB = ko(pB, Bo, `${BB}${ZB.slice(1)}${Bo}`, "vertex")
+         const ee = RK(ie, He, "vertex") ? `\tbloxdSpCell = ${oK};\n` : "";
+         fe = wK(fe, HK, `${ee}${pe.slice(1)}${HK}`, "vertex")
```

#### 318. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3614-L3615` → after: `L3614-L3615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3614-L3615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3614-L3615) · [Before (L3614-L3615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3614-L3615)

```diff
-       const NB = `${yY(OB,QB,function(BB,OB){return OB.TWOSIDEDLIGHTING?BB:`select(-(${BB}), ${BB}, fragmentInputs.frontFacing)`}(yB.normal,jB),yB.flags)}${NY(DB,OB.strict,OB.program,zB,yB)}`;
-       NB && (qB = ko(qB, Oo, `${NB.slice(1)}${Oo}`, "surface")), QB && OB.sunShadow && !jB.TWOSIDEDLIGHTING && (qB = ko(qB, Ko, `${Ko}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
+       const Xe = `${oy(ie,Me,function(ee,ie){return ie.TWOSIDEDLIGHTING?ee:`select(-(${ee}), ${ee}, fragmentInputs.frontFacing)`}(Fe.normal,Ue),Fe.flags)}${By(be,ie.strict,ie.program,ke,Fe)}`;
+       Xe && (Te = wK(Te, yK, `${Xe.slice(1)}${yK}`, "surface")), Me && ie.sunShadow && !Ue.TWOSIDEDLIGHTING && (Te = wK(Te, DK, `${DK}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
```

#### 319. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3619` → after: `L3619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3619) · [Before (L3619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3619)

```diff
-         qB = ko(qB, Go, `${BB}${RB.slice(1)}${Go}`, "light")
+         Te = wK(Te, bK, `${ee}${ze.slice(1)}${bK}`, "light")
```

#### 320. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3621` → after: `L3621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3621) · [Before (L3621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3621)

```diff
-       const WB = Vo(OB, GB) ? PY : "";
+       const Be = OK(ie, He) ? qy : "";
```

#### 321. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3649` → after: `L3649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3649) · [Before (L3649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3649)

```diff
-         this.device = BB, this.resources = OB, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.mBB = void 0, this.modelMeshes = void 0, this.thinBundle = void 0, this.binder = new xD, this.s … [truncated]
+         this.device = ee, this.resources = ie, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.Nee = void 0, this.modelMeshes = void 0, this.thinBundle = void 0, this.binder = new eM, this.s … [truncated]
```

#### 322. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3676` → after: `L3676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3676) · [Before (L3676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3676)

```diff
-           pipelineCompiling: (BB, OB) => !BB.program.failed && !1 !== this.pipelines.get(`${BB.pipelineKey}|${OB}`),
+           pipelineCompiling: (ee, ie) => !ee.program.failed && !1 !== this.pipelines.get(`${ee.pipelineKey}|${ie}`),
```

#### 323. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3701-L3703` → after: `L3701-L3703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3701-L3703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3701-L3703) · [Before (L3701-L3703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3701-L3703)

```diff
-         this.frame++, this.view = OB, this.drawDefines.view = OB, this.thinBundle.zW(), this.writeFrameUniforms();
-         const QB = null !== (YB = null === DB || void 0 === DB ? void 0 : DB.defineFor("model")) && void 0 !== YB ? YB : 0;
-         this.drawDefines.modelPackVariant = QB, DB && 0 !== QB && (this.packInputs ??= new CQ(this.device, DB.textureLayers(), this.sunShadow), this.packInputs.write(DB, OB.eye, DB.wq())), this.lists.clear(), this.slotCount = 0;
+         this.frame++, this.view = ie, this.drawDefines.view = ie, this.thinBundle.LO(), this.writeFrameUniforms();
+         const Me = null !== (ye = null === be || void 0 === be ? void 0 : be.defineFor("model")) && void 0 !== ye ? ye : 0;
+         this.drawDefines.modelPackVariant = Me, be && 0 !== Me && (this.packInputs ??= new NM(this.device, be.textureLayers(), this.sunShadow), this.packInputs.write(be, ie.eye, be.GT())), this.lists.clear(), this.slotCount = 0;
```

#### 324. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3705` → after: `L3705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3705) · [Before (L3705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3705)

```diff
-         this.mBB.select(oB, this.keepSteadyBase), this.modelMeshes.select(oB, OB), GB && this.pushEarthSky(GB), this.lists.collect(BB), this.thinBundle.AP(), this.uploadMeshSlots()
+         this.Nee.select(Ke, this.keepSteadyBase), this.modelMeshes.select(Ke, ie), He && this.pushEarthSky(He), this.lists.collect(ee), this.thinBundle.ZR(), this.uploadMeshSlots()
```

#### 325. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3736` → after: `L3736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3736) · [Before (L3736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3736)

```diff
-           DB = this.mBB.base(YB),
+           be = this.Nee.base(ye),
```

#### 326. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3770-L3772` → after: `L3770-L3772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3770-L3772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3770-L3772) · [Before (L3770-L3772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3770-L3772)

```diff
-           yB = YB.forcedInstanceCount || YB.rBB;
-         if (!YB.isVisible || YB.WQB || YB.visibility !== GB.visibility || 0 === (YB.layerMask & OB.layerMask) || YB.material !== GB.material || 0 !== YB.renderingGroupId || YB.hasVertexAlpha || !this.drawDefines.definesHold(jB, DB, jB.instancing) || GB.gpuVersion !== this.resourc … [truncated]
-         if (oB.frame !== this.frame && this.bindMaterial(oB, this.modelUniforms.refreshModelUniforms(YB.JF(), oB, oB.model, this.view)), !oB.bindable || oB.bindGroup !== GB.bindGroup) return !1;
+           Fe = ye.forcedInstanceCount || ye.Hie;
+         if (!ye.isVisible || ye.nMe || ye.visibility !== He.visibility || 0 === (ye.layerMask & ie.layerMask) || ye.material !== He.material || 0 !== ye.renderingGroupId || ye.hasVertexAlpha || !this.drawDefines.definesHold(Ue, be, Ue.instancing) || He.gpuVersion !== this.resourc … [truncated]
+         if (Ke.frame !== this.frame && this.bindMaterial(Ke, this.modelUniforms.refreshModelUniforms(ye.Xx(), Ke, Ke.model, this.view)), !Ke.bindable || Ke.bindGroup !== He.bindGroup) return !1;
```

#### 327. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3775` → after: `L3775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3775) · [Before (L3775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3775)

```diff
-         return GB.worldFlag = JB.updateFlag, QB.instances = yB, this.thinBundle.addAgain(GB.record, QB, MB ? JB.m : null, GB.visibility), GB.handedFrame = this.frame, this.mBB.drawn++, !0
+         return He.worldFlag = Je.updateFlag, Me.instances = Fe, this.thinBundle.addAgain(He.record, Me, oe ? Je.m : null, He.visibility), He.handedFrame = this.frame, this.Nee.drawn++, !0
```

#### 328. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3833` → after: `L3833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3833) · [Before (L3833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3833)

```diff
-             }(QB)) return this.warnOnce(`lines:${oB}`, `A LinesMesh with a ${oB} is not drawn yet (${QB.name})`), null;
+             }(Me)) return this.warnOnce(`lines:${Ke}`, `A LinesMesh with a ${Ke} is not drawn yet (${Me.name})`), null;
```

#### 329. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3835` → after: `L3835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3835) · [Before (L3835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3835)

```diff
-         } else if ("StandardMaterial" !== oB && "LiteMaterial" !== oB) return this.warnOnce(`class:${oB}`, `${oB} is not drawn yet (${QB.name})`), null;
+         } else if ("StandardMaterial" !== Ke && "LiteMaterial" !== Ke) return this.warnOnce(`class:${Ke}`, `${Ke} is not drawn yet (${Me.name})`), null;
```

#### 330. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3850` → after: `L3850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3850) · [Before (L3850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3850)

```diff
-         const NB = this.renderStates.renderState(null !== PB && void 0 !== PB ? PB : QB, DB, YB, pB.state, jB ? "line-list" : "triangle-list"),
+         const Xe = this.renderStates.renderState(null !== Re && void 0 !== Re ? Re : Me, be, ye, fe.state, Ue ? "line-list" : "triangle-list"),
```

#### 331. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3861` → after: `L3861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3861) · [Before (L3861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3861)

```diff
-         BB.unit = OB, BB.first = OB.parts.JZ[DB], BB.count = OB.parts.JZ[DB + 1]
+         ee.unit = ie, ee.first = ie.parts.zp[be], ee.count = ie.parts.zp[be + 1]
```

#### 332. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3864` → after: `L3864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3864) · [Before (L3864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3864)

```diff
-         OB.state !== GB && (OB.state = GB, OB.pipelineKey = `${BB.id}|${OB.layout.key}|${GB.key}`, OB.pipeline = null);
+         ie.state !== He && (ie.state = He, ie.pipelineKey = `${ee.id}|${ie.layout.key}|${He.key}`, ie.pipeline = null);
```

#### 333. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3887` → after: `L3887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3887) · [Before (L3887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3887)

```diff
-             return BB.forcedInstanceCount || BB.rBB;
+             return ee.forcedInstanceCount || ee.Hie;
```

#### 334. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3900` → after: `L3900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3900) · [Before (L3900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3900)

```diff
-             if (YB.layout === (null !== (DB = null === GB || void 0 === GB ? void 0 : GB.interleavedKinds) && void 0 !== DB ? DB : null)) return YB;
+             if (ye.layout === (null !== (be = null === He || void 0 === He ? void 0 : He.interleavedKinds) && void 0 !== be ? be : null)) return ye;
```

#### 335. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3912` → after: `L3912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3912) · [Before (L3912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3912)

```diff
-             const DB = (0, fB.A)(BB, nB.f.name),
+             const be = (0, te.y)(ee, de.k.name),
```

#### 336. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3921` → after: `L3921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3921) · [Before (L3921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3921)

```diff
-               const BB = MB ? null === (oB = (jB = (0, FO.i)(yB)).zp) || void 0 === oB ? void 0 : oB.call(jB, JB) : void 0;
+               const ee = oe ? null === (Ke = (Ue = (0, ai.e)(Fe)).Zf) || void 0 === Ke ? void 0 : Ke.call(Ue, Je) : void 0;
```

#### 337. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3926` → after: `L3926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3926) · [Before (L3926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3926)

```diff
-               atlas: null !== DB && void 0 !== DB && DB.active ? (0, nB.c)(DB.state) : null,
+               atlas: null !== be && void 0 !== be && be.active ? (0, de.e)(be.state) : null,
```

#### 338. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3935` → after: `L3935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3935) · [Before (L3935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3935)

```diff
-           const GB = this.modelPackProgram(BB, OB, `${DB}#${QB}#sp${this.drawDefines.modelPackVariant}`, YB, oB);
+           const He = this.modelPackProgram(ee, ie, `${be}#${Me}#sp${this.drawDefines.modelPackVariant}`, ye, Ke);
```

#### 339. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3939` → after: `L3939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3939) · [Before (L3939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3939)

```diff
-         if (jB || this.unbuildable.has(DB)) return null !== jB && void 0 !== jB ? jB : null;
+         if (Ue || this.unbuildable.has(be)) return null !== Ue && void 0 !== Ue ? Ue : null;
```

#### 340. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3949` → after: `L3949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3949) · [Before (L3949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3949)

```diff
-           return this.unbuildable.add(DB), this.warnOnce(`build:${DB}`, `could not build a program for ${BB.name}: ${String(JB)}`), null
+           return this.unbuildable.add(be), this.warnOnce(`build:${be}`, `could not build a program for ${ee.name}: ${String(Je)}`), null
```

#### 341. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3955` → after: `L3955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3955) · [Before (L3955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3955)

```diff
-         if (QB || this.unbuildable.has(GB)) return null !== QB && void 0 !== QB ? QB : null;
+         if (Me || this.unbuildable.has(He)) return null !== Me && void 0 !== Me ? Me : null;
```

#### 342. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3960` → after: `L3960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3960) · [Before (L3960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3960)

```diff
-               return (0, sO.d)(BB, "model")
+               return (0, Qi.b)(ee, "model")
```

#### 343. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3969` → after: `L3969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3969) · [Before (L3969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3969)

```diff
-           return this.unbuildable.add(GB), this.warnOnce(`build:${GB}`, `could not build a shader pack program for ${BB.name}, which draws without the pack: ${String(MB)}`), null
+           return this.unbuildable.add(He), this.warnOnce(`build:${He}`, `could not build a shader pack program for ${ee.name}, which draws without the pack: ${String(oe)}`), null
```

#### 344. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3980` → after: `L3980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3980) · [Before (L3980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3980)

```diff
-           return `standard-sp${BB}`
+           return `standard-sp${ee}`
```

#### 345. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L3987` → after: `L3987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR3987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L3987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L3987) · [Before (L3987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L3987)

```diff
-         return DB || (DB = this.createProgram(`lines#${YB}`, (QB = function(BB) {
+         return be || (be = this.createProgram(`lines#${ye}`, (Me = function(ee) {
```

#### 346. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4003` → after: `L4003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L4003) · [Before (L4003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L4003)

```diff
-           oB = `${GB}-${QB}`,
+           Ke = `${He}-${Me}`,
```

#### 347. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4033` → after: `L4033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L4033) · [Before (L4033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L4033)

```diff
-               label: `${oB}-vertex`,
+               label: `${Ke}-vertex`,
```

#### 348. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4037` → after: `L4037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L4037) · [Before (L4037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L4037)

```diff
-               label: `${oB}-fragment`,
+               label: `${Ke}-fragment`,
```

#### 349. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4045` → after: `L4045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L4045) · [Before (L4045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L4045)

```diff
-             packGroup: null !== (YB = null === DB || void 0 === DB ? void 0 : DB.group) && void 0 !== YB ? YB : null,
+             packGroup: null !== (ye = null === be || void 0 === be ? void 0 : be.group) && void 0 !== ye ? ye : null,
```

#### 350. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4063` → after: `L4063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L4063) · [Before (L4063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L4063)

```diff
-           BB.lF.addOnce((() => {
+           ee.Bx.addOnce((() => {
```

#### 351. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4078-L4079` → after: `L4078-L4079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4078-L4079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L4078-L4079) · [Before (L4078-L4079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L4078-L4079)

```diff
-         let GB = BB.gpu[dB.f.lite];
-         return (null === (OB = GB) || void 0 === OB ? void 0 : OB.epoch) !== this.resources.epoch && (GB = new Fo(this.resources, this.resources.epoch), BB.gpu[dB.f.lite] = GB), GB
+         let He = ee.gpu[we.e.lite];
+         return (null === (ie = He) || void 0 === ie ? void 0 : ie.epoch) !== this.resources.epoch && (He = new VK(this.resources, this.resources.epoch), ee.gpu[we.e.lite] = He), He
```

#### 352. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4092` → after: `L4092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L4092) · [Before (L4092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L4092)

```diff
-             label: `${BB.name}-uniforms`,
+             label: `${ee.name}-uniforms`,
```

#### 353. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4119` → after: `L4119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L4119) · [Before (L4119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L4119)

```diff
-         const QB = null !== (OB = DB.state) && void 0 !== OB ? OB : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
+         const Me = null !== (ie = be.state) && void 0 !== ie ? ie : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
```

#### 354. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4146` → after: `L4146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L4146) · [Before (L4146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L4146)

```diff
-           jB ? GB[2 * oB] === jB.view && GB[2 * oB + 1] === jB.sampler || (GB[2 * oB] = jB.view, GB[2 * oB + 1] = jB.sampler, DB = !0) : (OB || BB.ubo.expected.has(YB[oB].name) || this.warnOnce(`texture:${BB.owner.name}:${YB[oB].name}`, `${BB.owner.name} has no ${YB[oB].name}`),  … [truncated]
+           Ue ? He[2 * Ke] === Ue.view && He[2 * Ke + 1] === Ue.sampler || (He[2 * Ke] = Ue.view, He[2 * Ke + 1] = Ue.sampler, be = !0) : (ie || ee.ubo.expected.has(ye[Ke].name) || this.warnOnce(`texture:${ee.owner.name}:${ye[Ke].name}`, `${ee.owner.name} has no ${ye[Ke].name}`),  … [truncated]
```

#### 355. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4164` → after: `L4164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L4164) · [Before (L4164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L4164)

```diff
-             label: `${BB.owner.name}-material`,
+             label: `${ee.owner.name}-material`,
```

#### 356. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4182` → after: `L4182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L4182) · [Before (L4182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L4182)

```diff
-           if (QB = null !== (oB = this.vertexLayouts.resolveInputs(OB, GB, YB, DB)) && void 0 !== oB ? oB : void 0, !QB) return null;
+           if (Me = null !== (Ke = this.vertexLayouts.resolveInputs(ie, He, ye, be)) && void 0 !== Ke ? Ke : void 0, !Me) return null;
```

#### 357. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4201` → after: `L4201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L4201) · [Before (L4201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L4201)

```diff
-         return HQ(BB, this.resources, this.zeroBuffer) ? BB : null
+         return GM(ee, this.resources, this.zeroBuffer) ? ee : null
```

#### 358. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4206-L4207` → after: `L4206-L4207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4206-L4207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L4206-L4207) · [Before (L4206-L4207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L4206-L4207)

```diff
-           const DB = OB.ends[YB.index] - OB.offsets[YB.index] + OB.iBB[YB.index];
-           return this.warnOnce(`overrun:${BB}`, `${BB} draws ${GB} instances from a ${DB}-byte buffer (${YB.needed} needed)`), !1
+           const be = ie.ends[ye.index] - ie.offsets[ye.index] + ie.Qee[ye.index];
+           return this.warnOnce(`overrun:${ee}`, `${ee} draws ${He} instances from a ${be}-byte buffer (${ye.needed} needed)`), !1
```

#### 359. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4212` → after: `L4212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L4212) · [Before (L4212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L4212)

```diff
-         const DB = `${OB._colorFormat}|${OB._depthStencilFormat}|${OB._depthCompare}|${OB._sampleCount}`,
+         const be = `${ie._colorFormat}|${ie._depthStencilFormat}|${ie._depthCompare}|${ie._sampleCount}`,
```

#### 360. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4236` → after: `L4236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L4236) · [Before (L4236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L4236)

```diff
-           const GB = (null !== (oB = OB._depthCompare) && void 0 !== oB ? oB : UO).startsWith("greater") ? 0 : 1;
+           const He = (null !== (Ke = ie._depthCompare) && void 0 !== Ke ? Ke : ti).startsWith("greater") ? 0 : 1;
```

#### 361. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4257` → after: `L4257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L4257) · [Before (L4257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L4257)

```diff
-         const oB = `${BB.pipelineKey}|${GB}`,
+         const Ke = `${ee.pipelineKey}|${He}`,
```

#### 362. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4266` → after: `L4266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L4266) · [Before (L4266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L4266)

```diff
-           label: `standard-${yB.id}`,
+           label: `standard-${Fe.id}`,
```

#### 363. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4279` → after: `L4279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L4279) · [Before (L4279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L4279)

```diff
-             depthCompare: null !== (YB = null !== (DB = MB.depthCompare) && void 0 !== DB ? DB : OB._depthCompare) && void 0 !== YB ? YB : UO,
+             depthCompare: null !== (ye = null !== (be = oe.depthCompare) && void 0 !== be ? be : ie._depthCompare) && void 0 !== ye ? ye : ti,
```

#### 364. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4308` → after: `L4308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L4308) · [Before (L4308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L4308)

```diff
-             switch (OB.geometry = QB, OB.skip = oB.noSunShadowVertices, OB.indexed = null !== GB.indexBuffer, OB.first = GB.first, OB.count = GB.count, OB.mP = YB, OB.worldAt = DB, OB.instances = null, OB.instanceCount = 1, OB.thin = !1, DQ(oB)) {
+             switch (ie.geometry = Me, ie.skip = Ke.noSunShadowVertices, ie.indexed = null !== He.indexBuffer, ie.first = He.first, ie.count = He.count, ie.xR = ye, ie.worldAt = be, ie.instances = null, ie.instanceCount = 1, ie.thin = !1, KM(Ke)) {
```

#### 365. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4346` → after: `L4346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L4346) · [Before (L4346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L4346)

```diff
-           for (const OB of BB.messages) DB &&= "error" !== OB.type, YB.push(`${QB}:${OB.lineNum}:${OB.linePos} ${OB.type}: ${OB.message}`)
+           for (const ie of ee.messages) be &&= "error" !== ie.type, ye.push(`${Me}:${ie.lineNum}:${ie.linePos} ${ie.type}: ${ie.message}`)
```

#### 366. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4348-L4349` → after: `L4348-L4349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4348-L4349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L4348-L4349) · [Before (L4348-L4349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L4348-L4349)

```diff
-         if (DB && !BB.packGroup) return this.pipelines.set(OB, !1), console.error(`Lite: pipeline ${OB} failed`, GB), void MO(this.device, "mesh", BB.kind, GB);
-         BB.failed || (BB.failed = !0, console.error(`Lite: program ${BB.id} failed`, GB, YB.join("\n"), {
+         if (be && !ee.packGroup) return this.pipelines.set(ie, !1), console.error(`Lite: pipeline ${ie} failed`, He), void oi(this.device, "mesh", ee.kind, He);
+         ee.failed || (ee.failed = !0, console.error(`Lite: program ${ee.id} failed`, He, ye.join("\n"), {
```

#### 367. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4358` → after: `L4358`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L4358) · [Before (L4358)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L4358)

```diff
-       const YB = null === (OB = BB.yX) || void 0 === OB || null === (GB = OB.aShaderPackItem) || void 0 === GB ? void 0 : GB.x;
+       const ye = null === (ie = ee.pC) || void 0 === ie || null === (He = ie.aShaderPackItem) || void 0 === He ? void 0 : He.x;
```

#### 368. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4361-L4364` → after: `L4361-L4364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4361-L4364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L4361-L4364) · [Before (L4361-L4364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L4361-L4364)

```diff
-     var ro = GB(44812),
-       Xo = GB(44815),
-       wo = GB(44820),
-       Eo = GB(44778);
+     var LK = He(44873),
+       CK = He(44880),
+       vK = He(44882),
+       uK = He(44842);
```

#### 369. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4371-L4372` → after: `L4371-L4372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4371-L4372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L4371-L4372) · [Before (L4371-L4372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L4371-L4372)

```diff
-           const YB = (0, Eo.c)(BB, GB, GB, 6);
-           for (let DB = 0; DB < 6; DB++)(0, Eo.d)(BB, YB, DB, OB[co[DB]], {
+           const ye = (0, uK.d)(ee, He, He, 6);
+           for (let be = 0; be < 6; be++)(0, uK.g)(ee, ye, be, ie[mK[be]], {
```

#### 370. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4408` → after: `L4408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L4408) · [Before (L4408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L4408)

```diff
-       for (const OB of null !== BB && void 0 !== BB ? BB : []) null === OB || void 0 === OB || OB.close()
+       for (const ie of null !== ee && void 0 !== ee ? ee : []) null === ie || void 0 === ie || ie.close()
```

#### 371. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4422` → after: `L4422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L4422) · [Before (L4422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L4422)

```diff
-         this.CP = BB, this.starts = [], this.lengths = [], this.used = 0, BB > 0 && (this.starts.push(0), this.lengths.push(BB))
+         this.bk = ee, this.starts = [], this.lengths = [], this.used = 0, ee > 0 && (this.starts.push(0), this.lengths.push(ee))
```

#### 372. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4438` → after: `L4438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L4438) · [Before (L4438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L4438)

```diff
-         const GB = Math.min(BB + OB, this.CP);
+         const He = Math.min(ee + ie, this.bk);
```

#### 373. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4442-L4443` → after: `L4442-L4443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4442-L4443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L4442-L4443) · [Before (L4442-L4443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L4442-L4443)

```diff
-         const OB = this.CP;
-         this.CP = BB, this.release(OB, BB - OB)
+         const ie = this.bk;
+         this.bk = ee, this.release(ie, ee - ie)
```

#### 374. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4451` → after: `L4451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L4451) · [Before (L4451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L4451)

```diff
-         this.CP = BB
+         this.bk = ee
```

#### 375. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4467` → after: `L4467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L4467) · [Before (L4467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L4467)

```diff
-         jB && yB ? (YB[oB - 1] += OB + YB[oB], GB.splice(oB, 1), YB.splice(oB, 1)) : jB ? YB[oB - 1] += OB : yB ? (GB[oB] = BB, YB[oB] += OB) : (GB.splice(oB, 0, BB), YB.splice(oB, 0, OB))
+         Ue && Fe ? (ye[Ke - 1] += ie + ye[Ke], He.splice(Ke, 1), ye.splice(Ke, 1)) : Ue ? ye[Ke - 1] += ie : Fe ? (He[Ke] = ee, ye[Ke] += ie) : (He.splice(Ke, 0, ee), ye.splice(Ke, 0, ie))
```

#### 376. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4475` → after: `L4475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L4475) · [Before (L4475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L4475)

```diff
-         this.device = BB, this.onReplaced = OB, this.mergeGap = GB, this.gpu = null, this.bytes = void 0, this.words = void 0, this.sourceWords = new WeakMap, this.JZ = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], thi … [truncated]
+         this.device = ee, this.onReplaced = ie, this.mergeGap = He, this.gpu = null, this.bytes = void 0, this.words = void 0, this.sourceWords = new WeakMap, this.zp = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], thi … [truncated]
```

#### 377. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4477` → after: `L4477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L4477) · [Before (L4477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L4477)

```diff
-         this.bytes = new Uint8Array(DB), this.words = new Uint32Array(this.bytes.buffer), this.JZ = new To(DB / bo)
+         this.bytes = new Uint8Array(be), this.words = new Uint32Array(this.bytes.buffer), this.zp = new jK(be / sK)
```

#### 378. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4490-L4491` → after: `L4490-L4491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4490-L4491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L4490-L4491) · [Before (L4490-L4491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L4490-L4491)

```diff
-         let QB = this.JZ.allocate(DB);
-         QB < 0 && (this.grow(this.JZ.CP + DB), QB = this.JZ.allocate(DB));
+         let Me = this.zp.allocate(be);
+         Me < 0 && (this.grow(this.zp.bk + be), Me = this.zp.allocate(be));
```

#### 379. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4497` → after: `L4497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L4497) · [Before (L4497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L4497)

```diff
-         OB > this.JZ.CP && this.grow(OB)
+         ie > this.zp.bk && this.grow(ie)
```

#### 380. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4549` → after: `L4549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L4549) · [Before (L4549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L4549)

```diff
-         for (let OB = 0; OB < BB.length; OB += 2) this.JZ.free(BB[OB] / bo, BB[OB + 1] / bo);
+         for (let ie = 0; ie < ee.length; ie += 2) this.zp.free(ee[ie] / sK, ee[ie + 1] / sK);
```

#### 381. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4563` → after: `L4563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L4563) · [Before (L4563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L4563)

```diff
-         const OB = this.JZ.CP,
+         const ie = this.zp.bk,
```

#### 382. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4568` → after: `L4568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L4568) · [Before (L4568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L4568)

```diff
-         this.gpu = this.createGpu(YB.byteLength), this.bytes = YB, this.words = new Uint32Array(YB.buffer), this.JZ.grow(GB), DB && (this.replaced.push(DB), this.onReplaced(DB)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, OB * bo)
+         this.gpu = this.createGpu(ye.byteLength), this.bytes = ye, this.words = new Uint32Array(ye.buffer), this.zp.grow(He), be && (this.replaced.push(be), this.onReplaced(be)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, ie * sK)
```

#### 383. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4658` → after: `L4658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L4658) · [Before (L4658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L4658)

```diff
-         this.engine = BB, this.device = OB, this.buffers = new WeakMap, this.lBB = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.atlasSources = new WeakMap, this.atlasRebuilds = new WeakSet,  … [truncated]
+         this.engine = ee, this.device = ie, this.buffers = new WeakMap, this.Zee = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.atlasSources = new WeakMap, this.atlasRebuilds = new WeakSet,  … [truncated]
```

#### 384. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4677` → after: `L4677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L4677) · [Before (L4677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L4677)

```diff
-         null === (BB = this.arena) || void 0 === BB || BB.AP()
+         null === (ee = this.arena) || void 0 === ee || ee.ZR()
```

#### 385. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4683` → after: `L4683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L4683) · [Before (L4683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L4683)

```diff
-         BB.CP = DB.byteLength, this.buffers.set(BB, {
+         ee.bk = be.byteLength, this.buffers.set(ee, {
```

#### 386. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4720` → after: `L4720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L4720) · [Before (L4720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L4720)

```diff
-         BB.is32Bits = 4 === YB.BYTES_PER_ELEMENT, BB.CP = YB.byteLength, this.buffers.set(BB, {
+         ee.is32Bits = 4 === ye.BYTES_PER_ELEMENT, ee.bk = ye.byteLength, this.buffers.set(ee, {
```

#### 387. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4756` → after: `L4756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L4756) · [Before (L4756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L4756)

```diff
-             const OB = new Uint8Array(Math.max(null !== (DB = null === oB || void 0 === oB ? void 0 : oB.byteLength) && void 0 !== DB ? DB : 0, GB + YB));
+             const ie = new Uint8Array(Math.max(null !== (be = null === Ke || void 0 === Ke ? void 0 : Ke.byteLength) && void 0 !== be ? be : 0, He + ye));
```

#### 388. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4820` → after: `L4820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L4820) · [Before (L4820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L4820)

```diff
-         const YB = null !== (OB = null === (GB = this.buffers.get(BB)) || void 0 === GB ? void 0 : GB.slot) && void 0 !== OB ? OB : -1;
+         const ye = null !== (ie = null === (He = this.buffers.get(ee)) || void 0 === He ? void 0 : He.slot) && void 0 !== ie ? ie : -1;
```

#### 389. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4826` → after: `L4826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L4826) · [Before (L4826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L4826)

```diff
-         return YB ? YB.slot >= 0 ? YB.slot + YB.size : null !== (OB = null === (GB = YB.gpu) || void 0 === GB ? void 0 : GB.size) && void 0 !== OB ? OB : 0 : 0
+         return ye ? ye.slot >= 0 ? ye.slot + ye.size : null !== (ie = null === (He = ye.gpu) || void 0 === He ? void 0 : He.size) && void 0 !== ie ? ie : 0 : 0
```

#### 390. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4830` → after: `L4830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L4830) · [Before (L4830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L4830)

```diff
-         return null !== (YB = null !== (DB = GB && this.modelInput(GB, OB)) && void 0 !== DB ? DB : null === (QB = null !== (oB = this.lBB.get(BB)) && void 0 !== oB ? oB : this.batchUploads.get(BB)) || void 0 === QB ? void 0 : QB.inputs[OB]) && void 0 !== YB ? YB : null
+         return null !== (ye = null !== (be = He && this.modelInput(He, ie)) && void 0 !== be ? be : null === (Me = null !== (Ke = this.Zee.get(ee)) && void 0 !== Ke ? Ke : this.batchUploads.get(ee)) || void 0 === Me ? void 0 : Me.inputs[ie]) && void 0 !== ye ? ye : null
```

#### 391. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4846` → after: `L4846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L4846) · [Before (L4846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L4846)

```diff
-         let GB = BB.gpu[dB.f.lite];
+         let He = ee.gpu[we.e.lite];
```

#### 392. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4862` → after: `L4862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L4862) · [Before (L4862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L4862)

```diff
-           }, BB.gpu[dB.f.lite] = GB
+           }, ee.gpu[we.e.lite] = He
```

#### 393. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4871` → after: `L4871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L4871) · [Before (L4871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L4871)

```diff
-               CP: 0,
+               bk: 0,
```

#### 394. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4876` → after: `L4876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L4876) · [Before (L4876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L4876)

```diff
-             CP: 0
+             bk: 0
```

#### 395. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4896` → after: `L4896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L4896) · [Before (L4896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L4896)

```diff
-             if (6 !== BB.length) throw new Error(`${BB.length} files where six faces were expected`);
+             if (6 !== ee.length) throw new Error(`${ee.length} files where six faces were expected`);
```

#### 396. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4954` → after: `L4954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L4954) · [Before (L4954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L4954)

```diff
-         const DB = (0, ro.c)(this.engine, {
+         const be = (0, LK.b)(this.engine, {
```

#### 397. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L4983` → after: `L4983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR4983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L4983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L4983) · [Before (L4983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L4983)

```diff
-         return jB && jB.view === QB.view && jB.sampler === oB ? jB : (DB.bound = {
+         return Ue && Ue.view === Me.view && Ue.sampler === Ke ? Ue : (be.bound = {
```

#### 398. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5000` → after: `L5000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5000) · [Before (L5000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5000)

```diff
-           OB[0].layers === DB && OB[YB] ? QB === this.epoch && this.atlasBindings.set(BB, this.atlasBindings.get(OB[YB])) : console.error(`Lite: the new device splits the atlas ${xB(GB.urls[0])} into other arrays than its materials read`)
+           ie[0].layers === be && ie[ye] ? Me === this.epoch && this.atlasBindings.set(ee, this.atlasBindings.get(ie[ye])) : console.error(`Lite: the new device splits the atlas ${re(He.urls[0])} into other arrays than its materials read`)
```

#### 399. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5002` → after: `L5002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5002) · [Before (L5002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5002)

```diff
-           console.error(`Lite: could not build the atlas ${xB(GB.urls[0])} again on a new device`, BB)
+           console.error(`Lite: could not build the atlas ${re(He.urls[0])} again on a new device`, ee)
```

#### 400. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5007` → after: `L5007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5007) · [Before (L5007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5007)

```diff
-         return null !== (OB = null === (GB = this.heldSlot(BB)) || void 0 === GB ? void 0 : GB.state.decoded) && void 0 !== OB ? OB : null
+         return null !== (ie = null === (He = this.heldSlot(ee)) || void 0 === He ? void 0 : He.state.decoded) && void 0 !== ie ? ie : null
```

#### 401. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5014-L5015` → after: `L5014-L5015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5014-L5015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5014-L5015) · [Before (L5014-L5015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5014-L5015)

```diff
-         const OB = BB.gpu[dB.f.lite];
-         return (null === OB || void 0 === OB ? void 0 : OB.epoch) === this.epoch ? OB : void 0
+         const ie = ee.gpu[we.e.lite];
+         return (null === ie || void 0 === ie ? void 0 : ie.epoch) === this.epoch ? ie : void 0
```

#### 402. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5026` → after: `L5026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5026) · [Before (L5026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5026)

```diff
-           } = dB.g;
+           } = we.h;
```

#### 403. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5047` → after: `L5047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5047) · [Before (L5047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5047)

```diff
-         const GB = BB.gpu[dB.f.lite];
+         const He = ee.gpu[we.e.lite];
```

#### 404. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5054` → after: `L5054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5054) · [Before (L5054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5054)

```diff
-           return "canvas" === OB.kind ? null : `${OB.kind}|${Bj(OB)}|${GB.noMipmap}|${GB.samplingMode}|${GB.invertY}`
+           return "canvas" === ie.kind ? null : `${ie.kind}|${eU(ie)}|${He.noMipmap}|${He.samplingMode}|${He.invertY}`
```

#### 405. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5069` → after: `L5069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5069) · [Before (L5069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5069)

```diff
-           dynamicSource: null !== (QB = null === GB || void 0 === GB ? void 0 : GB.state.dynamicSource) && void 0 !== QB ? QB : null
+           dynamicSource: null !== (Me = null === He || void 0 === He ? void 0 : He.state.dynamicSource) && void 0 !== Me ? Me : null
```

#### 406. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5085` → after: `L5085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5085) · [Before (L5085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5085)

```diff
-         return BB.gpu[dB.f.lite] = yB, yB
+         return ee.gpu[we.e.lite] = Fe, Fe
```

#### 407. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5088` → after: `L5088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5088) · [Before (L5088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5088)

```diff
-         const QB = `${BB}|${OB}|${GB}|${YB}|${DB}`;
+         const Me = `${ee}|${ie}|${He}|${ye}|${be}`;
```

#### 408. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5096` → after: `L5096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5096) · [Before (L5096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5096)

```diff
-           oB = (0, ro.c)(this.engine, jB), this.samplers.set(QB, oB)
+           Ke = (0, LK.b)(this.engine, Ue), this.samplers.set(Me, Ke)
```

#### 409. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5112` → after: `L5112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5112) · [Before (L5112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5112)

```diff
-         } = this, QB = (0, Xo.e)(this.engine, YB, {
+         } = this, Me = (0, CK.b)(this.engine, ye, {
```

#### 410. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5126` → after: `L5126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5126) · [Before (L5126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5126)

```diff
-           DB === this.epoch && (BB.failed = !0, console.warn(`Lite: could not load texture ${xB(OB)}`, GB))
+           be === this.epoch && (ee.failed = !0, console.warn(`Lite: could not load texture ${re(ie)}`, He))
```

#### 411. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5144` → after: `L5144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5144) · [Before (L5144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5144)

```diff
-         } = BB, YB = (0, wo.e)(this.engine, Math.max(1, GB.width), Math.max(1, GB.height), {
+         } = ee, ye = (0, vK.c)(this.engine, Math.max(1, He.width), Math.max(1, He.height), {
```

#### 412. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5158` → after: `L5158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5158) · [Before (L5158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5158)

```diff
-         if (GB && YB && 0 !== DB.width && 0 !== DB.height) return DB.width !== YB.width || DB.height !== YB.height ? (this.releaseTexture(OB), OB.dynamic = null, OB.view = null, void this.createDynamic(BB, OB)) : void(0, wo.i)(this.engine, YB, DB, {
+         if (He && ye && 0 !== be.width && 0 !== be.height) return be.width !== ye.width || be.height !== ye.height ? (this.releaseTexture(ie), ie.dynamic = null, ie.view = null, void this.createDynamic(ee, ie)) : void(0, vK.d)(this.engine, ye, be, {
```

#### 413. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5169` → after: `L5169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5169) · [Before (L5169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5169)

```diff
-     var Gj = GB(39446);
+     var HU = He(39540);
```

#### 414. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5173` → after: `L5173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5173) · [Before (L5173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5173)

```diff
-       BB._colorAttachment.storeOp = BB._targetSignature._sampleCount > 1 ? OB : "store";
+       ee._colorAttachment.storeOp = ee._targetSignature._sampleCount > 1 ? ie : "store";
```

#### 415. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5177-L5180` → after: `L5177-L5180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5177-L5180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5177-L5180) · [Before (L5177-L5180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5177-L5180)

```diff
-     var Dj = GB(38432),
-       Qj = GB(38496),
-       oj = GB(38074),
-       jj = GB(40363);
+     var bU = He(38590),
+       MU = He(38657),
+       KU = He(38185),
+       UU = He(40477);
```

#### 416. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5189-L5190` → after: `L5189-L5190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5189-L5190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5189-L5190) · [Before (L5189-L5190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5189-L5190)

```diff
-       BB.fov = OB.fov, BB.near = OB.near, BB.far = OB.far, BB.renderWidth = GB.renderWidth, BB.renderHeight = GB.renderHeight, (0, oj.v)(OB.holderRotation, 0, Mj, 0), (0, oj.e)(yj, 0, Mj, 0, OB.holderPosition, 0, Pj);
-       const YB = OB.q_;
+       ee.fov = ie.fov, ee.near = ie.near, ee.far = ie.far, ee.renderWidth = He.renderWidth, ee.renderHeight = He.renderHeight, (0, KU.p)(ie.holderRotation, 0, oU, 0), (0, KU.b)(FU, 0, oU, 0, ie.holderPosition, 0, RU);
+       const ye = ie.Z8;
```

#### 417. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5193` → after: `L5193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5193) · [Before (L5193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5193)

```diff
-       (0, oj.n)(YB, zj, Jj, DB), (0, oj.j)(DB, 0, DB), (0, oj.o)(DB, Pj, 0, DB), (0, oj.j)(DB, 0, DB);
+       (0, KU.i)(ye, kU, JU, be), (0, KU.g)(be, 0, be), (0, KU.k)(be, RU, 0, be), (0, KU.g)(be, 0, be);
```

#### 418. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5195` → after: `L5195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5195) · [Before (L5195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5195)

```diff
-       (0, oj.j)(DB, 0, QB), BB.eye[0] = QB[12], BB.eye[1] = QB[13], BB.eye[2] = QB[14], lj[0] = BB.fov, lj[1] = BB.renderWidth / BB.renderHeight, lj[2] = BB.near, lj[3] = BB.far, (0, oj.r)(lj, BB.projectionMatrix), (0, oj.o)(DB, BB.projectionMatrix, 0, BB.viewProjectionMatrix), ( … [truncated]
+       (0, KU.g)(be, 0, Me), ee.eye[0] = Me[12], ee.eye[1] = Me[13], ee.eye[2] = Me[14], qU[0] = ee.fov, qU[1] = ee.renderWidth / ee.renderHeight, qU[2] = ee.near, qU[3] = ee.far, (0, KU.m)(qU, ee.projectionMatrix), (0, KU.k)(be, ee.projectionMatrix, 0, ee.viewProjectionMatrix), ( … [truncated]
```

#### 419. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5218` → after: `L5218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5218) · [Before (L5218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5218)

```diff
-       return OB.animTick = (0, Qj.g)(), OB.timeMs = performance.now(), Zj(OB, BB.eq), BB.model.update(OB.frameId), OB
+       return ie.animTick = (0, MU.e)(), ie.timeMs = performance.now(), pU(ie, ee.yp), ee.model.update(ie.frameId), ie
```

#### 420. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5222` → after: `L5222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5222) · [Before (L5222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5222)

```diff
-       const OB = BB.eq,
+       const ie = ee.yp,
```

#### 421. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5225` → after: `L5225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5225) · [Before (L5225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5225)

```diff
-           p_: YB
+           W8: ye
```

#### 422. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5227` → after: `L5227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5227) · [Before (L5227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5227)

```diff
-       return pj(GB, YB, OB.Lp()), OB.onBeforeRenderObservable.notifyObservers(OB), qj(OB, GB.frustum), OB.onBeforeCameraRenderObservable.notifyObservers(OB.activeCamera), Nj(BB)
+       return fU(He, ye, ie.Nf()), ie.onBeforeRenderObservable.notifyObservers(ie), TU(ie, He.frustum), ie.onBeforeCameraRenderObservable.notifyObservers(ie.activeCamera), XU(ee)
```

#### 423. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5229-L5231` → after: `L5229-L5231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5229-L5231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5229-L5231) · [Before (L5229-L5231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5229-L5231)

```diff
-     var Wj = GB(38030),
-       Aj = GB(38138),
-       Vj = GB(38491);
+     var BU = He(38154),
+       EU = He(38254),
+       gU = He(38648);
```

#### 424. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5235-L5238` → after: `L5235-L5238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5235-L5238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5235-L5238) · [Before (L5235-L5238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5235-L5238)

```diff
-       const YB = (0, fB.U)(BB);
-       if (!YB || YB.diffuseTexture && (0, Vj.h)(BB)) return null;
-       const DB = null === (OB = (0, fB.A)(YB, nB.f.name)) || void 0 === OB ? void 0 : OB.state,
-         QB = null === (GB = (0, fB.A)(YB, xQ.e.name)) || void 0 === GB ? void 0 : GB.state,
+       const ye = (0, te.V)(ee);
+       if (!ye || ye.diffuseTexture && (0, gU.i)(ee)) return null;
+       const be = null === (ie = (0, te.y)(ye, de.k.name)) || void 0 === ie ? void 0 : ie.state,
+         Me = null === (He = (0, te.y)(ye, eK.e.name)) || void 0 === He ? void 0 : He.state,
```

#### 425. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5243` → after: `L5243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5243) · [Before (L5243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5243)

```diff
-         YB.set(BB.diffuseColor, oB.diffuse), YB[oB.diffuse + 3] = BB.alpha, YB.set(BB.ambientColor, oB.ambientAndCutoff), YB[oB.ambientAndCutoff + 3] = BB.alphaCutOff, YB.set(BB.emissiveColor, oB.emissiveAndLevel), YB[oB.emissiveAndLevel + 3] = null !== (DB = null === (QB = BB.di … [truncated]
+         ye.set(ee.diffuseColor, Ke.diffuse), ye[Ke.diffuse + 3] = ee.alpha, ye.set(ee.ambientColor, Ke.ambientAndCutoff), ye[Ke.ambientAndCutoff + 3] = ee.alphaCutOff, ye.set(ee.emissiveColor, Ke.emissiveAndLevel), ye[Ke.emissiveAndLevel + 3] = null !== (be = null === (Me = ee.di … [truncated]
```

#### 426. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5250` → after: `L5250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5250) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5250) · [Before (L5250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5250)

```diff
-         customRenderMat: (0, Vj.h)(BB),
+         customRenderMat: (0, gU.i)(ee),
```

#### 427. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5254` → after: `L5254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5254) · [Before (L5254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5254)

```diff
-     var nj = GB(3200);
+     var dU = He(3090);
```

#### 428. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5269` → after: `L5269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5269) · [Before (L5269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5269)

```diff
-         this.arena = BB, this.JZ = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.JZ = new To(OB);
+         this.arena = ee, this.zp = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.zp = new jK(ie);
```

#### 429. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5274` → after: `L5274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5274) · [Before (L5274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5274)

```diff
-         return this.JZ.CP
+         return this.zp.bk
```

#### 430. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5294` → after: `L5294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5294) · [Before (L5294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5294)

```diff
-         return this.dropped || BB.start + BB.length > this.CP
+         return this.dropped || ee.start + ee.length > this.bk
```

#### 431. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5328` → after: `L5328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5328) · [Before (L5328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5328)

```diff
-           label: `${YB}-grow`
+           label: `${ye}-grow`
```

#### 432. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5330` → after: `L5330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5330) · [Before (L5330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5330)

```diff
-         QB.buffer = this.createBuffer(QB, !1), oB.copyBufferToBuffer(DB.buffer, 0, QB.buffer, 0, DB.units * GB), DB.twin && (QB.twin = this.createBuffer(QB, !0), oB.copyBufferToBuffer(DB.twin, 0, QB.twin, 0, DB.units * this.arena.twinUnitBytes)), OB.queue.submit([oB.finish()]), t … [truncated]
+         Me.buffer = this.createBuffer(Me, !1), Ke.copyBufferToBuffer(be.buffer, 0, Me.buffer, 0, be.units * He), be.twin && (Me.twin = this.createBuffer(Me, !0), Ke.copyBufferToBuffer(be.twin, 0, Me.twin, 0, be.units * this.arena.twinUnitBytes)), ie.queue.submit([Ke.finish()]), t … [truncated]
```

#### 433. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5352-L5353` → after: `L5352-L5353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5352-L5353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5352-L5353) · [Before (L5352-L5353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5352-L5353)

```diff
-           label: OB ? `${oB}-light` : oB,
-           size: BB.units * (OB ? DB : YB),
+           label: ie ? `${Ke}-light` : Ke,
+           size: ee.units * (ie ? be : ye),
```

#### 434. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5359` → after: `L5359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5359) · [Before (L5359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5359)

```diff
-           this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${oB} buffer, taken as failed: ${String(GB)}`), this.settle(BB, OB, !1, !1)
+           this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${Ke} buffer, taken as failed: ${String(He)}`), this.settle(ee, ie, !1, !1)
```

#### 435. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5368` → after: `L5368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5368) · [Before (L5368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5368)

```diff
-             return this.JZ.truncate(this.backings[DB - 1].units), this.growable = !1, void this.promote()
+             return this.zp.truncate(this.backings[be - 1].units), this.growable = !1, void this.promote()
```

#### 436. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5393` → after: `L5393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5393) · [Before (L5393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5393)

```diff
-         if (this.device = BB, this.unitBytes = OB, this.usage = GB, this.label = YB, this.pages = [], this.WP = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, this.c … [truncated]
+         if (this.device = ee, this.unitBytes = ie, this.usage = He, this.label = ye, this.pages = [], this.tR = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, this.c … [truncated]
```

#### 437. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5416` → after: `L5416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5416) · [Before (L5416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5416)

```diff
-           const OB = DB.JZ.allocate(BB);
+           const ie = be.zp.allocate(ee);
```

#### 438. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5425-L5426` → after: `L5425-L5426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5425-L5426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5425-L5426) · [Before (L5425-L5426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5425-L5426)

```diff
-           const GB = Math.min(this.ceiling, Math.max(2 * OB.CP, OB.CP + BB));
-           if (GB - OB.CP >= BB) return OB.grow(GB), {
+           const He = Math.min(this.ceiling, Math.max(2 * ie.bk, ie.bk + ee));
+           if (He - ie.bk >= ee) return ie.grow(He), {
```

#### 439. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5428` → after: `L5428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5428) · [Before (L5428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5428)

```diff
-             start: OB.JZ.allocate(BB),
+             start: ie.zp.allocate(ee),
```

#### 440. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5432` → after: `L5432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5432) · [Before (L5432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5432)

```diff
-         OB && OB !== this.pages[0] && 0 === OB.JZ.used && OB.drop();
+         ie && ie !== this.pages[0] && 0 === ie.zp.used && ie.drop();
```

#### 441. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5437` → after: `L5437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5437) · [Before (L5437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5437)

```diff
-           start: YB.JZ.allocate(BB),
+           start: ye.zp.allocate(ee),
```

#### 442. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5446` → after: `L5446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5446) · [Before (L5446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5446)

```diff
-         OB.JZ.free(BB.start, BB.length), 0 === OB.JZ.used && OB !== this.pages[0] && OB !== this.pages[this.pages.length - 1] && OB.drop()
+         ie.zp.free(ee.start, ee.length), 0 === ie.zp.used && ie !== this.pages[0] && ie !== this.pages[this.pages.length - 1] && ie.drop()
```

#### 443. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5456` → after: `L5456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5456) · [Before (L5456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5456)

```diff
-         this.warnOnce("outOfMemory", `out of GPU memory for a ${OB}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, BB), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, BB) / 2));
+         this.warnOnce("outOfMemory", `out of GPU memory for a ${ie}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, ee), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, ee) / 2));
```

#### 444. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5470` → after: `L5470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5470) · [Before (L5470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5470)

```diff
-         for (const DB of this.pages) BB += DB.CP, OB += DB.JZ.used, GB += DB.hasTwin ? DB.CP * this.twinUnitBytes : 0, YB += DB.allocatedBytes;
+         for (const be of this.pages) ee += be.bk, ie += be.zp.used, He += be.hasTwin ? be.bk * this.twinUnitBytes : 0, ye += be.allocatedBytes;
```

#### 445. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5499-L5500` → after: `L5499-L5500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5499) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5499-L5500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5499-L5500) · [Before (L5499-L5500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5499-L5500)

```diff
-         const GB = CO.g.strideWithoutAtlas;
-         this.vertexArena = new kj(BB, GB, GPUBufferUsage.VERTEX, `terrain-vertices-${GB}`), this.quadArena = new kj(BB, Aj.d, GPUBufferUsage.STORAGE, "terrain-quads", {
+         const He = Ni.f.strideWithoutAtlas;
+         this.vertexArena = new ZU(ee, He, GPUBufferUsage.VERTEX, `terrain-vertices-${He}`), this.quadArena = new ZU(ee, EU.c, GPUBufferUsage.STORAGE, "terrain-quads", {
```

#### 446. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5526` → after: `L5526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5526) · [Before (L5526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5526)

```diff
-         GB && 0 !== OB.length && GB.page.live && (OB.length < BB.vertexCount ? GB.page.arena.warnOnce("shortLight", `a part's ${OB.length} light values are fewer than its ${BB.vertexCount} vertices, so its light is left as it was`) : (GB.page.writeLight(GB, OB), BB.lit = !0))
+         He && 0 !== ie.length && He.page.live && (ie.length < ee.vertexCount ? He.page.arena.warnOnce("shortLight", `a part's ${ie.length} light values are fewer than its ${ee.vertexCount} vertices, so its light is left as it was`) : (He.page.writeLight(He, ie), ee.lit = !0))
```

#### 447. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5529` → after: `L5529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5529) · [Before (L5529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5529)

```diff
-         this.fullSky.length < OB && (this.fullSky = new Uint16Array(Math.max(OB, 4096)).fill(nj.e));
+         this.fullSky.length < ie && (this.fullSky = new Uint16Array(Math.max(ie, 4096)).fill(dU.h));
```

#### 448. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5591` → after: `L5591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5591) · [Before (L5591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5591)

```diff
-           code: (QB = GB._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${QB?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(pos … [truncated]
+           code: (Me = He._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${Me?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(pos … [truncated]
```

#### 449. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5625` → after: `L5625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5625) · [Before (L5625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5625)

```diff
-         return null !== (BB = null === (OB = this.copy) || void 0 === OB ? void 0 : OB.view) && void 0 !== BB ? BB : null
+         return null !== (ee = null === (ie = this.copy) || void 0 === ie ? void 0 : ie.view) && void 0 !== ee ? ee : null
```

#### 450. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5639` → after: `L5639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5639) · [Before (L5639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5639)

```diff
-         if (JB += this.drawList(yB, OB, BB._directBindings, 0, BB._directBindings.length), JB += this.drawList(yB, OB, DB, 0, QB >= 0 ? QB : DB.length), yB.end(), QB < 0) return JB;
+         if (Je += this.drawList(Fe, ie, ee._directBindings, 0, ee._directBindings.length), Je += this.drawList(Fe, ie, be, 0, Me >= 0 ? Me : be.length), Fe.end(), Me < 0) return Je;
```

#### 451. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5672` → after: `L5672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5672) · [Before (L5672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5672)

```diff
-         const DB = (null !== (GB = OB._config.depth) && void 0 !== GB ? GB : OB._config.rt)._depthTexture,
+         const be = (null !== (He = ie._config.depth) && void 0 !== He ? He : ie._config.rt)._depthTexture,
```

#### 452. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5679` → after: `L5679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5679) · [Before (L5679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5679)

```diff
-         this.retired = null !== (OB = null === (GB = this.copy) || void 0 === GB ? void 0 : GB.texture) && void 0 !== OB ? OB : null;
+         this.retired = null !== (ie = null === (He = this.copy) || void 0 === He ? void 0 : He.texture) && void 0 !== ie ? ie : null;
```

#### 453. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5764` → after: `L5764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5764) · [Before (L5764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5764)

```diff
-           code: (oB = this.edge, `${(0,vO.w)()}${jY({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_2d<f32>;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\t … [truncated]
+           code: (Ke = this.edge, `${(0,ri.z)()}${Jy({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_2d<f32>;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\t … [truncated]
```

#### 454. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5804` → after: `L5804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5804) · [Before (L5804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5804)

```diff
-         return null !== (BB = null === (OB = this.targets) || void 0 === OB ? void 0 : OB.maskView) && void 0 !== BB ? BB : null
+         return null !== (ee = null === (ie = this.targets) || void 0 === ie ? void 0 : ie.maskView) && void 0 !== ee ? ee : null
```

#### 455. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5851` → after: `L5851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5851) · [Before (L5851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5851)

```diff
-         const YB = (null !== (OB = BB._config.depth) && void 0 !== OB ? OB : BB._config.rt)._depthTexture;
+         const ye = (null !== (ie = ee._config.depth) && void 0 !== ie ? ie : ee._config.rt)._depthTexture;
```

#### 456. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5870` → after: `L5870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5870) · [Before (L5870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5870)

```diff
-           oB = null !== (GB = BB._targetSignature._depthStencilFormat) && void 0 !== GB ? GB : OB.format,
+           Ke = null !== (He = ee._targetSignature._depthStencilFormat) && void 0 !== He ? He : ie.format,
```

#### 457. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5904` → after: `L5904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5904) · [Before (L5904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5904)

```diff
-               resource: (null !== jB && void 0 !== jB ? jB : OB).createView({
+               resource: (null !== Ue && void 0 !== Ue ? Ue : ie).createView({
```

#### 458. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5960` → after: `L5960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5960) · [Before (L5960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5960)

```diff
-         status: "rB"
+         status: "Ce"
```

#### 459. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5974` → after: `L5974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5974) · [Before (L5974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5974)

```diff
-               zp: BB.runtime
+               Zf: ee.runtime
```

#### 460. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5978` → after: `L5978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5978) · [Before (L5978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5978)

```diff
-               return QB && IY(OB.programKey(QB, !1, DB)) ? (await QB.ready, BB.isCancelled() ? rj : QB.bindGroupLayout ? await async function(BB, OB, GB, YB) {
+               return Me && ay(ie.programKey(Me, !1, be)) ? (await Me.ready, ee.isCancelled() ? LU : Me.bindGroupLayout ? await async function(ee, ie, He, ye) {
```

#### 461. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5989` → after: `L5989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5989) · [Before (L5989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5989)

```diff
-                 const [jB, yB] = await Promise.all([oB, QB.built.then((() => null), (BB => null !== BB && void 0 !== BB ? BB : new Error("pipeline failed")))]);
+                 const [Ue, Fe] = await Promise.all([Ke, Me.built.then((() => null), (ee => null !== ee && void 0 !== ee ? ee : new Error("pipeline failed")))]);
```

#### 462. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5992` → after: `L5992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5992) · [Before (L5992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5992)

```diff
-                   MB = JB.length > 0 ? JB.map((BB => `${QB.name} ${BB.lineNum}:${BB.linePos}: ${BB.message}`)).join("\n") : `${QB.name}: ${cj(null!==yB&&void 0!==yB?yB:jB)}`;
+                   oe = Je.length > 0 ? Je.map((ee => `${Me.name} ${ee.lineNum}:${ee.linePos}: ${ee.message}`)).join("\n") : `${Me.name}: ${mU(null!==Fe&&void 0!==Fe?Fe:Ue)}`;
```

#### 463. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L5998` → after: `L5998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR5998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L5998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L5998) · [Before (L5998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L5998)

```diff
-               }(OB, QB, OB.programKey(QB, "none" !== QB.texture, DB), GB): (console.warn(`Shader pack: skipped the compile check for "${YB.name}", whose textures failed to load`), Xj)) : rj
+               }(ie, Me, ie.programKey(Me, "none" !== Me.texture, be), He): (console.warn(`Shader pack: skipped the compile check for "${ye.name}", whose textures failed to load`), CU)) : LU
```

#### 464. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6014-L6015` → after: `L6014-L6015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6014-L6015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6014-L6015) · [Before (L6014-L6015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6014-L6015)

```diff
-             }), null !== (oB = OB.timeoutMs) && void 0 !== oB ? oB : gj), YB = setInterval((() => {
-               OB.isCancelled() && QB("rB")
+             }), null !== (Ke = ie.timeoutMs) && void 0 !== Ke ? Ke : xU), ye = setInterval((() => {
+               ie.isCancelled() && Me("Ce")
```

#### 465. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6034-L6035` → after: `L6034-L6035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6034-L6035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6034-L6035) · [Before (L6034-L6035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6034-L6035)

```diff
-       if ("rB" === jB || GB()) return {
-         status: "rB"
+       if ("Ce" === Ue || He()) return {
+         status: "Ce"
```

#### 466. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6048` → after: `L6048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6048) · [Before (L6048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6048)

```diff
-       } : "timeout" === jB ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(JB=BB.timeoutMs)&&void 0!==JB?JB:gj)/1e3} s`), {
+       } : "timeout" === Ue ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(Je=ee.timeoutMs)&&void 0!==Je?Je:xU)/1e3} s`), {
```

#### 467. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6068` → after: `L6068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6068) · [Before (L6068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6068)

```diff
-       return null !== (OB = null === BB || void 0 === BB ? void 0 : BB.message) && void 0 !== OB ? OB : String(BB)
+       return null !== (ie = null === ee || void 0 === ee ? void 0 : ee.message) && void 0 !== ie ? ie : String(ee)
```

#### 468. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6074` → after: `L6074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6074) · [Before (L6074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6074)

```diff
-         MO(BB, "terrain", GB, DB, YB ? `${YB.lineNum}:${YB.linePos} error: ${YB.message}` : null)
+         oi(ee, "terrain", He, be, ye ? `${ye.lineNum}:${ye.linePos} error: ${ye.message}` : null)
```

#### 469. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6077-L6080` → after: `L6077-L6080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6077-L6080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6077-L6080) · [Before (L6077-L6080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6077-L6080)

```diff
-     var aj = GB(38140),
-       ej = GB(38151),
-       Tj = GB(38156),
-       bj = GB(3187);
+     var SU = He(38258),
+       nU = He(38273),
+       jU = He(38284),
+       sU = He(3084);
```

#### 470. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6092` → after: `L6092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6092) · [Before (L6092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6092)

```diff
-         pP: PB
+         BR: Re
```

#### 471. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6094` → after: `L6094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6094) · [Before (L6094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6094)

```diff
-       let zB = BB.sH(jB[0], jB[1], jB[2]);
+       let ke = ee.sG(Ue[0], Ue[1], Ue[2]);
```

#### 472. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6100` → after: `L6100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6100) · [Before (L6100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6100)

```diff
-         const QB = BB.sH(jB[0], jB[1], jB[2]),
+         const Me = ee.sG(Ue[0], Ue[1], Ue[2]),
```

#### 473. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6108` → after: `L6108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6108) · [Before (L6108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6108)

```diff
-           !BB.isDrawn(QB, oB, yB) && BB.hasParts(QB, oB, yB) && DB.add(`${QB},${oB},${yB}`)
+           !ee.isDrawn(Me, Ke, Fe) && ee.hasParts(Me, Ke, Fe) && be.add(`${Me},${Ke},${Fe}`)
```

#### 474. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6120` → after: `L6120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6120) · [Before (L6120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6120)

```diff
-         this.device = BB, this.vN = OB, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
+         this.device = ee, this.jB = ie, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
```

#### 475. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6131` → after: `L6131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6131) · [Before (L6131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6131)

```diff
-         const OB = null !== (BB = this.free.pop()) && void 0 !== BB ? BB : this.next++;
+         const ie = null !== (ee = this.free.pop()) && void 0 !== ee ? ee : this.next++;
```

#### 476. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6134` → after: `L6134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6134) · [Before (L6134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6134)

```diff
-           BB.set(this.data), this.data = BB, this.words = new Uint32Array(BB.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.vN()
+           ee.set(this.data), this.data = ee, this.words = new Uint32Array(ee.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.jB()
```

#### 477. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6178` → after: `L6178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6178) · [Before (L6178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6178)

```diff
-         this.device = BB, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout  … [truncated]
+         this.device = ee, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout  … [truncated]
```

#### 478. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6255` → after: `L6255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6255) · [Before (L6255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6255)

```diff
-               buffer: null !== BB && void 0 !== BB ? BB : this.slots.buffer
+               buffer: null !== ee && void 0 !== ee ? ee : this.slots.buffer
```

#### 479. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6260` → after: `L6260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6260) · [Before (L6260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6260)

```diff
-               buffer: null !== OB && void 0 !== OB ? OB : this.slots.buffer
+               buffer: null !== ie && void 0 !== ie ? ie : this.slots.buffer
```

#### 480. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6266` → after: `L6266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6266) · [Before (L6266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6266)

```diff
-         const GB = null !== OB && void 0 !== OB ? OB : BB;
+         const He = null !== ie && void 0 !== ie ? ie : ee;
```

#### 481. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6305-L6306` → after: `L6305-L6306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6305-L6306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6305-L6306) · [Before (L6305-L6306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6305-L6306)

```diff
-         }, this.chunks.set(BB, DB), this.writeSlot(DB)), DB.material = BB.material ? this.materialFor(BB.material) : null, DB.packed = !!OB.packedVertices, DB.vertexCount = (0, Aj.f)(OB), DB.faceCount = DB.vertexCount / 4;
-         const QB = null !== (YB = OB.faceGroups) && void 0 !== YB ? YB : null;
+         }, this.chunks.set(ee, be), this.writeSlot(be)), be.material = ee.material ? this.materialFor(ee.material) : null, be.packed = !!ie.packedVertices, be.vertexCount = (0, EU.g)(ie), be.faceCount = be.vertexCount / 4;
+         const Me = null !== (ye = ie.faceGroups) && void 0 !== ye ? ye : null;
```

#### 482. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6308` → after: `L6308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6308) · [Before (L6308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6308)

```diff
-           const BB = aj.k;
+           const ee = SU.n;
```

#### 483. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6311` → after: `L6311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6311) · [Before (L6311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6311)

```diff
-         this.drawWhole(DB), 0 !== DB.faceCount && (this.geometry.set(DB, OB) ? (DB.packed && this.slots.setFaces(DB.slot, DB.vertices.start + DB.faceCount, DB.faceCount), OB.Zp && this.setChunkMeshLight(BB, OB.Zp)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${DB.vertexCo … [truncated]
+         this.drawWhole(be), 0 !== be.faceCount && (this.geometry.set(be, ie) ? (be.packed && this.slots.setFaces(be.slot, be.vertices.start + be.faceCount, be.faceCount), ie.Pf && this.setChunkMeshLight(ee, ie.Pf)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${be.vertexCo … [truncated]
```

#### 484. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6343-L6346` → after: `L6343-L6346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6343-L6346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6343-L6346) · [Before (L6343-L6346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6343-L6346)

```diff
-         const GB = BB.mP,
-           [YB, DB, QB] = GB.qDB(OB.origin[0], OB.origin[1], OB.origin[2]),
-           oB = GB.Vq.Sq(YB, DB, QB);
-         oB && (oB.Wq = !0, oB.Uq = !0, GB.Aq(oB, !1))
+         const He = ee.xR,
+           [ye, be, Me] = He.ube(ie.origin[0], ie.origin[1], ie.origin[2]),
+           Ke = He.aT.cT(ye, be, Me);
+         Ke && (Ke.YT = !0, Ke.LT = !0, He.VT(Ke, !1))
```

#### 485. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6350` → after: `L6350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6350) · [Before (L6350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6350)

```diff
-         BB.faceMask = GB, BB.rangeCount = (0, ej.o)(OB, GB, YB), BB.first0 = YB[0], BB.count0 = YB[1], BB.first1 = YB[2], BB.count1 = YB[3]
+         ee.faceMask = He, ee.rangeCount = (0, nU.n)(ie, He, ye), ee.first0 = ye[0], ee.count0 = ye[1], ee.first1 = ye[2], ee.count1 = ye[3]
```

#### 486. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6363` → after: `L6363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6363) · [Before (L6363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6363)

```diff
-         if (!GB) return this.warnOnce(`material:${BB.name}`, `Lite terrain cannot draw material "${BB.name}"; its chunks are skipped.`), null;
+         if (!He) return this.warnOnce(`material:${ee.name}`, `Lite terrain cannot draw material "${ee.name}"; its chunks are skipped.`), null;
```

#### 487. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6377` → after: `L6377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6377) · [Before (L6377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6377)

```diff
-             label: `terrain-material-${BB.name}`,
+             label: `terrain-material-${ee.name}`,
```

#### 488. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6384` → after: `L6384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6384) · [Before (L6384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6384)

```diff
-           v_: 0,
+           W4: 0,
```

#### 489. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6392` → after: `L6392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6392) · [Before (L6392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6392)

```diff
-           console.error(`Lite terrain failed to load the textures of material "${BB.name}"`, OB)
+           console.error(`Lite terrain failed to load the textures of material "${ee.name}"`, ie)
```

#### 490. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6409` → after: `L6409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6409) · [Before (L6409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6409)

```diff
-             label: `terrain-material-${GB}`,
+             label: `terrain-material-${He}`,
```

#### 491. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6456` → after: `L6456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6456) · [Before (L6456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6456)

```diff
-           BB.atlasCount = YB.length, BB.v_ = YB[0].layerWidth, BB.atlasLayers = YB[0].layers, OB.animDataPerTex && GB.push({
+           ee.atlasCount = ye.length, ee.W4 = ye[0].layerWidth, ee.atlasLayers = ye[0].layers, ie.animDataPerTex && He.push({
```

#### 492. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6470` → after: `L6470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6470) · [Before (L6470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6470)

```diff
-           GB.push(this.sampler), GB.push(vB(this.device, YB, DB, QB, 1, `terrain-${OB}`).createView({
+           He.push(this.sampler), He.push(Ne(this.device, ye, be, Me, 1, `terrain-${ie}`).createView({
```

#### 493. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6476` → after: `L6476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6476) · [Before (L6476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6476)

```diff
-           label: `terrain-material-${BB.model.name}`,
+           label: `terrain-material-${ee.model.name}`,
```

#### 494. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6487` → after: `L6487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6487) · [Before (L6487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6487)

```diff
-           DB = GB ? GB.zp : this.zp,
+           be = He ? He.Zf : this.Zf,
```

#### 495. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6491` → after: `L6491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6491) · [Before (L6491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6491)

```diff
-             v_: BB.v_,
+             W4: ee.W4,
```

#### 496. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6510` → after: `L6510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6510) · [Before (L6510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6510)

```diff
-         return void 0 === GB ? fY : {
+         return void 0 === He ? wy : {
```

#### 497. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6547` → after: `L6547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6547) · [Before (L6547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6547)

```diff
-         return void 0 !== DB ? DB : (this.startPipeline(YB, BB, this.programKey(BB, OB), GB), null)
+         return void 0 !== be ? be : (this.startPipeline(ye, ee, this.programKey(ee, ie), He), null)
```

#### 498. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6556-L6557` → after: `L6556-L6557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6556-L6557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6556-L6557) · [Before (L6556-L6557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6556-L6557)

```diff
-         } = BB.model, yB = this.packVariant(BB, this.zp), JB = (OB ? 2 : 0) + (GB ? 1 : 0), MB = BB.pipelineIds[JB];
-         if (null !== MB && MB.lighting === DB && MB.dirLightCount === QB && MB.packVariant === yB && MB.transparencyMode === oB && MB.cull === jB && MB.atlasCount === BB.atlasCount && MB.v_ === BB.v_ && MB.atlasLayers === BB.atlasLayers && MB.colorFormat === YB._colorFormat && MB … [truncated]
+         } = ee.model, Fe = this.packVariant(ee, this.Zf), Je = (ie ? 2 : 0) + (He ? 1 : 0), oe = ee.pipelineIds[Je];
+         if (null !== oe && oe.lighting === be && oe.dirLightCount === Me && oe.packVariant === Fe && oe.transparencyMode === Ke && oe.cull === Ue && oe.atlasCount === ee.atlasCount && oe.W4 === ee.W4 && oe.atlasLayers === ee.atlasLayers && oe.colorFormat === ye._colorFormat && oe … [truncated]
```

#### 499. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6571` → after: `L6571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6571) · [Before (L6571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6571)

```diff
-           v_: BB.v_,
+           W4: ee.W4,
```

#### 500. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6584` → after: `L6584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6584) · [Before (L6584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6584)

```diff
-         return null !== (YB = this.builds.get(DB)) && void 0 !== YB ? YB : this.startPipeline(DB, BB, OB, GB)
+         return null !== (ye = this.builds.get(be)) && void 0 !== ye ? ye : this.startPipeline(be, ee, ie, He)
```

#### 501. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6593` → after: `L6593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6593) · [Before (L6593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6593)

```diff
-             const DB = (0, sO.h)(BB.packVariant);
+             const be = (0, Qi.c)(ee.packVariant);
```

#### 502. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6608` → after: `L6608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6608) · [Before (L6608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6608)

```diff
-             offset: CO.g.LQ,
+             offset: Ni.f.sM,
```

#### 503. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6612` → after: `L6612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6612) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6612) · [Before (L6612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6612)

```diff
-             offset: CO.g.normalOffset,
+             offset: Ni.f.normalOffset,
```

#### 504. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6616` → after: `L6616`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6616) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6616) · [Before (L6616)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6616)

```diff
-             offset: CO.g.colorOffset,
+             offset: Ni.f.colorOffset,
```

#### 505. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6621` → after: `L6621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6621) · [Before (L6621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6621)

```diff
-             offset: CO.g.uvOffset,
+             offset: Ni.f.uvOffset,
```

#### 506. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6625` → after: `L6625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6625) · [Before (L6625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6625)

```diff
-             offset: CO.g.normalOffset,
+             offset: Ni.f.normalOffset,
```

#### 507. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6628` → after: `L6628`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6628) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6628) · [Before (L6628)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6628)

```diff
-             arrayStride: CO.g.strideWithoutAtlas,
+             arrayStride: Ni.f.strideWithoutAtlas,
```

#### 508. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6647` → after: `L6647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6647) · [Before (L6647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6647)

```diff
-             }, YB, oB ? By : null),
+             }, ye, Ke ? eF : null),
```

#### 509. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6650` → after: `L6650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6650) · [Before (L6650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6650)

```diff
-               depthCompare: null !== (DB = YB._depthCompare) && void 0 !== DB ? DB : UO,
+               depthCompare: null !== (be = ye._depthCompare) && void 0 !== be ? be : ti,
```

#### 510. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6668` → after: `L6668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6668) · [Before (L6668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6668)

```diff
-           this.compiling -= lB, console.error(`Lite terrain pipeline ${QB} failed`, BB), hj(this.device, GB, QB, JB, BB)
+           this.compiling -= qe, console.error(`Lite terrain pipeline ${Me} failed`, ee), lU(this.device, He, Me, Je, ee)
```

#### 511. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6679` → after: `L6679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6679) · [Before (L6679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6679)

```diff
-           DB = this.device.createRenderPipelineAsync(GB ? OB : {
+           be = this.device.createRenderPipelineAsync(He ? ie : {
```

#### 512. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6689` → after: `L6689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6689) · [Before (L6689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6689)

```diff
-             label: `${OB.label}-prepass`,
+             label: `${ie.label}-prepass`,
```

#### 513. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6707` → after: `L6707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6707) · [Before (L6707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6707)

```diff
-         console.error(`Lite terrain pipeline ${GB} failed`, YB), hj(this.device, OB, GB, null, YB);
+         console.error(`Lite terrain pipeline ${He} failed`, ye), lU(this.device, ie, He, null, ye);
```

#### 514. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6743` → after: `L6743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6743) · [Before (L6743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6743)

```diff
-           kz: oB
+           uk: Ke
```

#### 515. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6745-L6748` → after: `L6745-L6748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6745-L6748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6745-L6748) · [Before (L6745-L6748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6745-L6748)

```diff
-         this.lighting = BB.wq;
-         const jB = (0, Wj.u)(OB);
-         this.dirLightCount = Math.min(jB, 4), this.zp = null !== (GB = oB.zp) && void 0 !== GB ? GB : null, jB > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(BB, OB), this.animateMaterials(OB.animTick);
-         const yB = oB.Tz,
+         this.lighting = ee.GT;
+         const Ue = (0, BU.x)(ie);
+         this.dirLightCount = Math.min(Ue, 4), this.Zf = null !== (He = Ke.Zf) && void 0 !== He ? He : null, Ue > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(ee, ie), this.animateMaterials(ie.animTick);
+         const Fe = Ke.yq,
```

#### 516. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6761` → after: `L6761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6761) · [Before (L6761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6761)

```diff
-         const qB = oB.mP.qP,
+         const Te = Ke.xR.ER,
```

#### 517. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6764` → after: `L6764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6764) · [Before (L6764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6764)

```diff
-         const RB = !!this.zp && kY(this.zp.defineFor("liquid"));
+         const ze = !!this.Zf && Dy(this.Zf.defineFor("liquid"));
```

#### 518. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6766-L6767` → after: `L6766-L6767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6766-L6767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6766-L6767) · [Before (L6766-L6767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6766-L6767)

```diff
-         const AB = null !== (YB = null === (DB = oB.pW) || void 0 === DB ? void 0 : DB.visibility) && void 0 !== YB ? YB : null,
-           VB = this.visCull && zB && 0 === this.compiling && null !== AB && oB.mP.gDB[0] >= this.visCullMinDistance ? this.target : null,
+         const Ee = null !== (ye = null === (be = Ke.iW) || void 0 === be ? void 0 : be.visibility) && void 0 !== ye ? ye : null,
+           ge = this.visCull && ke && 0 === this.compiling && null !== Ee && Ke.xR.KMe[0] >= this.visCullMinDistance ? this.target : null,
```

#### 519. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6778` → after: `L6778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6778) · [Before (L6778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6778)

```diff
-             if (0 === lB && (lB = (0, ej.b)(PB, OB.renderWidth, OB.renderHeight), lB !== this.faceFocalPx && (this.faceFocalPx = lB, pB = ++this.faceEpoch)), BB.faceEpoch !== pB) {
+             if (0 === qe && (qe = (0, nU.c)(Re, ie.renderWidth, ie.renderHeight), qe !== this.faceFocalPx && (this.faceFocalPx = qe, fe = ++this.faceEpoch)), ee.faceEpoch !== fe) {
```

#### 520. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6781` → after: `L6781`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6781) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6781) · [Before (L6781)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6781)

```diff
-                 GB = (0, ej.h)(BB.planePX, BB.planeNX, BB.planePY, BB.planeNY, BB.planePZ, BB.planeNZ, this.eye[0] - (BB.origin[0] - this.originOffset[0]), this.eye[1] - (BB.origin[1] - this.originOffset[1]), this.eye[2] - (BB.origin[2] - this.originOffset[2]), (0, ej.f)(OB, lB)) … [truncated]
+                 He = (0, nU.j)(ee.planePX, ee.planeNX, ee.planePY, ee.planeNY, ee.planePZ, ee.planeNZ, this.eye[0] - (ee.origin[0] - this.originOffset[0]), this.eye[1] - (ee.origin[1] - this.originOffset[1]), this.eye[2] - (ee.origin[2] - this.originOffset[2]), (0, nU.g)(ie, qe)) … [truncated]
```

#### 521. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6798` → after: `L6798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6798) · [Before (L6798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6798)

```diff
-           if (VB && (Number.isNaN(uB.key) && (uB.ci = Math.floor(uB.origin[0] / qB), uB.cj = Math.floor(uB.origin[1] / qB), uB.ck = Math.floor(uB.origin[2] / qB), uB.key = (0, bj.i)(uB.ci, uB.cj, uB.ck)), (!YB || BB < 1 || DB || !this.batchDraws(GB, uB.packed, VB)) && this.visSee … [truncated]
+           if (ge && (Number.isNaN(Pe.key) && (Pe.ci = Math.floor(Pe.origin[0] / Te), Pe.cj = Math.floor(Pe.origin[1] / Te), Pe.ck = Math.floor(Pe.origin[2] / Te), Pe.key = (0, sU.f)(Pe.ci, Pe.cj, Pe.ck)), (!ye || ee < 1 || be || !this.batchDraws(He, Pe.packed, ge)) && this.visSee … [truncated]
```

#### 522. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6803` → after: `L6803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6803) · [Before (L6803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6803)

```diff
-           if (!(0, jj.e)(OB.frustum, QB, jB, yB, qB)) continue;
+           if (!(0, UU.b)(ie.frustum, Me, Ue, Fe, Te)) continue;
```

#### 523. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6824-L6825` → after: `L6824-L6825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6824-L6825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6824-L6825) · [Before (L6824-L6825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6824-L6825)

```diff
-           mP: YB
-         } = BB.kz, DB = YB.qP, QB = this.visPassable, oB = this.eye[0] + this.originOffset[0], jB = this.eye[1] + this.originOffset[1], yB = this.eye[2] + this.originOffset[2];
+           xR: ye
+         } = ee.uk, be = ye.ER, Me = this.visPassable, Ke = this.eye[0] + this.originOffset[0], Ue = this.eye[1] + this.originOffset[1], Fe = this.eye[2] + this.originOffset[2];
```

#### 524. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6827-L6828` → after: `L6827-L6828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6827-L6828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6827-L6828) · [Before (L6827-L6828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6827-L6828)

```diff
-         const [JB, MB] = YB.gDB, PB = GB.update(oB, jB, yB, DB, JB, MB, QB);
-         return this.visSweeps = GB.sweeps, PB ? GB : null
+         const [Je, oe] = ye.KMe, Re = He.update(Ke, Ue, Fe, be, Je, oe, Me);
+         return this.visSweeps = He.sweeps, Re ? He : null
```

#### 525. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6842` → after: `L6842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6842) · [Before (L6842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6842)

```diff
-         let QB = null !== (YB = this.visBatchDraws.get(BB)) && void 0 !== YB ? YB : 0;
+         let Me = null !== (ye = this.visBatchDraws.get(ee)) && void 0 !== ye ? ye : 0;
```

#### 526. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6844` → after: `L6844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6844) · [Before (L6844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6844)

```diff
-           QB |= 1 << DB | (!!BB.bindGroupLayout && this.canDraw(BB, OB) && !!this.pipelines.get(this.pipelineIdNow(BB, OB, !1, GB)) ? 2 << DB : 0), this.visBatchDraws.set(BB, QB)
+           Me |= 1 << be | (!!ee.bindGroupLayout && this.canDraw(ee, ie) && !!this.pipelines.get(this.pipelineIdNow(ee, ie, !1, He)) ? 2 << be : 0), this.visBatchDraws.set(ee, Me)
```

#### 527. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6850` → after: `L6850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6850) · [Before (L6850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6850)

```diff
-           kz: YB
+           uk: ye
```

#### 528. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6852-L6853` → after: `L6852-L6853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6852-L6853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6852-L6853) · [Before (L6852-L6853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6852-L6853)

```diff
-           mP: DB
-         } = YB, QB = DB.qP, oB = new Set;
+           xR: be
+         } = ye, Me = be.ER, Ke = new Set;
```

#### 529. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6857` → after: `L6857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6857) · [Before (L6857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6857)

```diff
-           PB = new hD.Xp,
+           Re = new nb.rf,
```

#### 530. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6867` → after: `L6867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6867) · [Before (L6867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6867)

```diff
-             sH: (BB, OB, GB) => DB.sH(BB, OB, GB),
+             sG: (ee, ie, He) => be.sG(ee, ie, He),
```

#### 531. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6870` → after: `L6870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6870) · [Before (L6870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6870)

```diff
-             pP: QB,
+             BR: Me,
```

#### 532. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6872-L6873` → after: `L6872-L6873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6872-L6873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6872-L6873) · [Before (L6872-L6873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6872-L6873)

```diff
-             hasParts: (BB, OB, GB) => oB.has((0, bj.i)(BB, OB, GB))
-           }, [this.eye[0] + yB, this.eye[1] + JB, this.eye[2] + MB], ((BB, OB) => (hD.Xp.TransformCoordinatesFromFloatsToRef(BB, OB, .5, jB, PB), [PB.x + yB, PB.y + JB, PB.z + MB])), (DB.gDB[0] + 1) * QB);
+             hasParts: (ee, ie, He) => Ke.has((0, sU.f)(ee, ie, He))
+           }, [this.eye[0] + Fe, this.eye[1] + Je, this.eye[2] + oe], ((ee, ie) => (nb.rf.TransformCoordinatesFromFloatsToRef(ee, ie, .5, Ue, Re), [Re.x + Fe, Re.y + Je, Re.z + oe])), (be.KMe[0] + 1) * Me);
```

#### 533. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6875` → after: `L6875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6875) · [Before (L6875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6875)

```diff
-         for (const lB of zB) this.warnOnce(`vis:${lB}`, `Lite terrain cave culling skipped chunk ${lB}, which a ray from the eye reaches.`)
+         for (const qe of ke) this.warnOnce(`vis:${qe}`, `Lite terrain cave culling skipped chunk ${qe}, which a ray from the eye reaches.`)
```

#### 534. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6879` → after: `L6879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6879) · [Before (L6879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6879)

```diff
-         null !== (BB = this.zp) && void 0 !== BB && BB.isRunning() && (this.shaderPackInputs ??= new CQ(this.device, this.zp.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.zp, this.eye, this.lighting))
+         null !== (ee = this.Zf) && void 0 !== ee && ee.isRunning() && (this.shaderPackInputs ??= new NM(this.device, this.Zf.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.Zf, this.eye, this.lighting))
```

#### 535. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6887-L6888` → after: `L6887-L6888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6887-L6888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6887-L6888) · [Before (L6887-L6888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6887-L6888)

```diff
-         const JB = kY(yB) ? null !== (YB = null === (DB = this.sceneDepth) || void 0 === DB ? void 0 : DB.view) && void 0 !== YB ? YB : this.standIn() : null,
-           MB = jB ? null !== (QB = null === (oB = this.shadowMask) || void 0 === oB ? void 0 : oB.view) && void 0 !== QB ? QB : this.standIn() : null;
+         const Je = Dy(Fe) ? null !== (ye = null === (be = this.sceneDepth) || void 0 === be ? void 0 : be.view) && void 0 !== ye ? ye : this.standIn() : null,
+           oe = Ue ? null !== (Me = null === (Ke = this.shadowMask) || void 0 === Ke ? void 0 : Ke.view) && void 0 !== Me ? Me : this.standIn() : null;
```

#### 536. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6901` → after: `L6901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6901) · [Before (L6901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6901)

```diff
-         return null !== (BB = null === (OB = this.shaderPackInputs) || void 0 === OB ? void 0 : OB.bindGroupFor(null, !0)) && void 0 !== BB ? BB : null
+         return null !== (ee = null === (ie = this.shaderPackInputs) || void 0 === ie ? void 0 : ie.bindGroupFor(null, !0)) && void 0 !== ee ? ee : null
```

#### 537. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6941` → after: `L6941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6941) · [Before (L6941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6941)

```diff
-         return !(!OB || !(0, aj.n)(BB.model)) && (!this.zp || ! function(BB) {
+         return !(!ie || !(0, SU.v)(ee.model)) && (!this.Zf || ! function(ee) {
```

#### 538. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6943-L6944` → after: `L6943-L6944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6943) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6943-L6944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6943-L6944) · [Before (L6943-L6944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6943-L6944)

```diff
-           return !(null === (OB = (0, sO.h)(BB)) || void 0 === OB || !OB.movesVertices)
-         }(this.packVariant(BB, this.zp)))
+           return !(null === (ie = (0, Qi.c)(ee)) || void 0 === ie || !ie.movesVertices)
+         }(this.packVariant(ee, this.Zf)))
```

#### 539. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6949-L6950` → after: `L6949-L6950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6949-L6950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6949-L6950) · [Before (L6949-L6950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6949-L6950)

```diff
-         if ((0, Wj.w)(BB, GB), GB[YB.fogInfos] = OB.fogEnabled ? OB.fogMode : 0, GB[YB.fogInfos + 1] = OB.fogStart, GB[YB.fogInfos + 2] = OB.fogEnd, GB[YB.fogInfos + 3] = OB.fogDensity, GB.set(OB.fogColour, YB.fogColour), GB[YB.outputHeight] = OB.renderHeight, GB.set(OB.ambientCo … [truncated]
-           const OB = (0, Aj.i)(BB.Qq, BB.mp, BB.Ip);
+         if ((0, BU.A)(ee, He), He[ye.fogInfos] = ie.fogEnabled ? ie.fogMode : 0, He[ye.fogInfos + 1] = ie.fogStart, He[ye.fogInfos + 2] = ie.fogEnd, He[ye.fogInfos + 3] = ie.fogDensity, He.set(ie.fogColour, ye.fogColour), He[ye.outputHeight] = ie.renderHeight, He.set(ie.ambientCo … [truncated]
+           const ie = (0, EU.i)(ee.XT, ee.Sf, ee.jf);
```

#### 540. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6961` → after: `L6961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6961) · [Before (L6961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6961)

```diff
-         return !("atlas" === BB.texture && !OB) || (this.warnOnce(`stride:${BB.id}`, `Lite terrain: material "${BB.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
+         return !("atlas" === ee.texture && !ie) || (this.warnOnce(`stride:${ee.id}`, `Lite terrain: material "${ee.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
```

#### 541. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6969` → after: `L6969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6969) · [Before (L6969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6969)

```diff
-           DB && (BB.setPipeline(DB), BB.setBindGroup(2, YB.material.bindGroup), this.zp && this.bindShaderPackInputs(BB, YB.material, this.zp, this.prepassOf.has(DB)), GB += this.drawBatch(BB, YB))
+           be && (ee.setPipeline(be), ee.setBindGroup(2, ye.material.bindGroup), this.Zf && this.bindShaderPackInputs(ee, ye.material, this.Zf, this.prepassOf.has(be)), He += this.drawBatch(ee, ye))
```

#### 542. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L6978` → after: `L6978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR6978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L6978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L6978) · [Before (L6978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L6978)

```diff
-           DB = this.zp;
+           be = this.Zf;
```

#### 543. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L7015` → after: `L7015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR7015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L7015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L7015) · [Before (L7015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L7015)

```diff
-           jB && (jB !== YB && (BB.setPipeline(jB), YB = jB, this.zp && this.bindShaderPackInputs(BB, oB, this.zp)), oB !== DB && (BB.setBindGroup(2, oB.bindGroup), DB = oB), GB += this.geometry.draw(BB, QB, this.lighting))
+           Ue && (Ue !== ye && (ee.setPipeline(Ue), ye = Ue, this.Zf && this.bindShaderPackInputs(ee, Ke, this.Zf)), Ke !== be && (ee.setBindGroup(2, Ke.bindGroup), be = Ke), He += this.geometry.draw(ee, Me, this.lighting))
```

#### 544. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L7022` → after: `L7022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR7022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L7022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L7022) · [Before (L7022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L7022)

```diff
-       return `${xY(BB)}|${BB.atlasLayers}|${BB.v_}|${OB}|${GB}|${YB._colorFormat}|${YB._depthStencilFormat}|${YB._sampleCount}`
+       return `${eb(ee)}|${ee.atlasLayers}|${ee.W4}|${ie}|${He}|${ye._colorFormat}|${ye._depthStencilFormat}|${ye._sampleCount}`
```

#### 545. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L7100` → after: `L7100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR7100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L7100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L7100) · [Before (L7100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L7100)

```diff
-         return (BB.pC !== this.builtVersion || this.blockCaster.length !== OB) && (this.build(BB, OB), !0)
+         return (ee.iN !== this.builtVersion || this.blockCaster.length !== ie) && (this.build(ee, ie), !0)
```

#### 546. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L7103` → after: `L7103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR7103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L7103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L7103) · [Before (L7103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L7103)

```diff
-         this.builtVersion = BB.pC;
+         this.builtVersion = ee.iN;
```

#### 547. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L7118` → after: `L7118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR7118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L7118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L7118) · [Before (L7118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L7118)

```diff
-         const GB = BB.QBB[OB];
+         const He = ee.Tee[ie];
```

#### 548. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L7123` → after: `L7123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR7123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L7123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L7123) · [Before (L7123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L7123)

```diff
-           return this.warnOnce(`Sun shadows: no caster option for block ${OB}: ${YB instanceof Error?YB.message:String(YB)}`), null
+           return this.warnOnce(`Sun shadows: no caster option for block ${ie}: ${ye instanceof Error?ye.message:String(ye)}`), null
```

#### 549. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L7133` → after: `L7133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR7133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L7133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L7133) · [Before (L7133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L7133)

```diff
-             key: `planes:${JSON.stringify(BB)}`,
+             key: `planes:${JSON.stringify(ee)}`,
```

#### 550. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L7137-L7138` → after: `L7137-L7138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR7137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L7137-L7138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L7137-L7138) · [Before (L7137-L7138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L7137-L7138)

```diff
-         if (BB.Ul[OB]) return null;
-         const DB = BB.kl[OB] ? BB.WC(OB) : null;
+         if (ee.xq[ie]) return null;
+         const be = ee.Cq[ie] ? ee.FN(ie) : null;
```

#### 551. `bundles/bloxd.io/chunks/js/301.js` (Changed code · before: `L7156` → after: `L7156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdadR7156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/45a351f6c791a243d07ee9fd711721773f9a49a1...build/bloxd.io/u88b9b.1969c480#diff-860bf6c0dcca088a6a35756facd0d64b7d40629cd98bda7fd1d75c48ce3fcdad) · [After (L7156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/u88b9b.1969c480/bundles/bloxd.io/chunks/js/301.js#L7156) · [Before (L7156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/45a351f6c791a243d07ee9fd711721773f9a49a1/bundles/bloxd.io/chunks/js/301.js#L7156)

```diff
-           }(BB) ? NG : BB.every((BB => 0 === BB)) ? null : {
+           }(ee) ? BH : ee.every((ee => 0 === ee)) ? null : {
```
