# Changed — Bundle Modifications Report (Part 055 / 141)

- **Updated at**: `2026-11-25T08:36 JST`
- **Part**: `55 / 141` (**407** changed item(s) on this page)
- **Navigation**: [Index (`changes/changed.md`)](../changed.md) · [← Part 054](part-054.md) · [Part 056 →](part-056.md)

## `bloxd.io` · `bundles/bloxd.io/chunks/js/274.js` (c6gaap.4d6587ec → igzsf.a0b73a5f · continued)

- **File**: `bundles/bloxd.io/chunks/js/274.js` (653 changed item(s) total)
- **GitHub File Diff**: [View file diff on GitHub](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3)

#### 135. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1676` → after: `L1676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L1676) · [Before (L1676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L1676)

```diff
-           cB = `\n${XT}\n${rT}\n${mT}\n@group(1) @binding(0) var<uniform> uniforms: TerrainFrameUniforms;\n/** Per chunk part, indexed by the draw's first instance (TERRAIN_CHUNK_SLOT_WORDS words). */\nstruct TerrainChunk {\n\t/** Into the render frame. */\n\ttranslation: vec3f,\ … [truncated]
+           Ht = `\n${zO}\n${kO}\n${GO}\n@group(1) @binding(0) var<uniform> uniforms: TerrainFrameUniforms;\n/** Per chunk part, indexed by the draw's first instance (TERRAIN_CHUNK_SLOT_WORDS words). */\nstruct TerrainChunk {\n\t/** Into the render frame. */\n\ttranslation: vec3f,\ … [truncated]
```

#### 136. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1684` → after: `L1684`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1684) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L1684) · [Before (L1684)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L1684)

```diff
-       return "none" === ZB ? JB : `${JB}${function(BB){const IB="none"!==BB.texture&&BB.alphaTest;return`\n@fragment\nfn prepassFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${BB.resting?"":LT}\n\t${BB.alphaTest?`var baseColor = vec4f(1.0);\n\tvar alpha = material … [truncated]
+       return "none" === Vt ? qt : `${qt}${function(tt){const et="none"!==tt.texture&&tt.alphaTest;return`\n@fragment\nfn prepassFragment(fragmentInputs: Varyings) -> @location(0) vec4f {\n\t${tt.resting?"":oO}\n\t${tt.alphaTest?`var baseColor = vec4f(1.0);\n\tvar alpha = material … [truncated]
```

#### 137. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1722` → after: `L1722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L1722) · [Before (L1722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L1722)

```diff
-         const IB = null !== (vB = cB.type.trim().split(/\s+/).pop()) && void 0 !== vB ? vB : cB.type,
+         const et = null !== (dt = Ht.type.trim().split(/\s+/).pop()) && void 0 !== dt ? dt : Ht.type,
```

#### 138. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1724-L1725` → after: `L1724-L1725`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1724) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1724-L1725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L1724-L1725) · [Before (L1724-L1725)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L1724-L1725)

```diff
-         if (!nB) throw new Error(`Lite: no uniform layout for ${cB.name}: ${cB.type}`);
-         const hB = null !== (kB = cB.arraySize) && void 0 !== kB ? kB : 0,
+         if (!Xt) throw new Error(`Lite: no uniform layout for ${Ht.name}: ${Ht.type}`);
+         const Qt = null !== (jt = Ht.arraySize) && void 0 !== jt ? jt : 0,
```

#### 139. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1735-L1738` → after: `L1735-L1738`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1735) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1735-L1738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L1735-L1738) · [Before (L1735-L1738)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L1735-L1738)

```diff
-           const IB = `${BB}_${GB.length}_strided`;
-           oB.push(`struct ${IB} {\n\t@size(16) el: ${nB.wgsl},\n}`), GB.push(cB.name), JB.push(`\t@align(16) ${cB.name}: array<${IB}, ${hB}>,`)
-         } else hB ? JB.push(`\t@align(16) ${cB.name}: array<${nB.wgsl}, ${hB}>,`) : JB.push(`\t${cB.name}: ${nB.wgsl},`);
-         TB += hB ? FB * hB : nB.floats
+           const et = `${tt}_${mt.length}_strided`;
+           Dt.push(`struct ${et} {\n\t@size(16) el: ${Xt.wgsl},\n}`), mt.push(Ht.name), qt.push(`\t@align(16) ${Ht.name}: array<${et}, ${Qt}>,`)
+         } else Qt ? qt.push(`\t@align(16) ${Ht.name}: array<${Xt.wgsl}, ${Qt}>,`) : qt.push(`\t${Ht.name}: ${Xt.wgsl},`);
+         Ot += Qt ? Et * Qt : Xt.floats
```

#### 140. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1743` → after: `L1743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L1743) · [Before (L1743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L1743)

```diff
-         wgsl: `${oB.join("\n")}\nstruct ${BB} {\n${JB.join("\n")}\n}\n`,
+         wgsl: `${Dt.join("\n")}\nstruct ${tt} {\n${qt.join("\n")}\n}\n`,
```

#### 141. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1791` → after: `L1791`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1791) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L1791) · [Before (L1791)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L1791)

```diff
-       return `#if defined(${BB}) && ${BB}DIRECTUV == 0\nvarying v${IB}UV: vec2f;\n#endif`
+       return `#if defined(${tt}) && ${tt}DIRECTUV == 0\nvarying v${et}UV: vec2f;\n#endif`
```

#### 142. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1795` → after: `L1795`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1795) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L1795) · [Before (L1795)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L1795)

```diff
-       return `#if defined(${BB}) && ${BB}DIRECTUV == 0\nif (uniforms.v${IB}Infos.x==0.)\n{vertexOutputs.v${IB}UV= (uniforms.${ZB}Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.v${IB}UV= (uniforms.${ZB}Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif`
+       return `#if defined(${tt}) && ${tt}DIRECTUV == 0\nif (uniforms.v${et}Infos.x==0.)\n{vertexOutputs.v${et}UV= (uniforms.${Vt}Matrix* vec4f(uvUpdated,1.0,0.0)).xy;}\nelse\n{vertexOutputs.v${et}UV= (uniforms.${Vt}Matrix* vec4f(uv2Updated,1.0,0.0)).xy;}\n#endif`
```

#### 143. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1799` → after: `L1799`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1799) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L1799) · [Before (L1799)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L1799)

```diff
-       return `#ifdef ${BB}\n#if ${BB}DIRECTUV == 1\n#define v${IB}UV vMainUV1\n#elif ${BB}DIRECTUV == 2\n#define v${IB}UV vMainUV2\n#else\nvarying v${IB}UV: vec2f;\n#endif\nvar ${ZB}SamplerSampler: sampler;\nvar ${ZB}Sampler: texture_2d<f32>;\n#endif`
+       return `#ifdef ${tt}\n#if ${tt}DIRECTUV == 1\n#define v${et}UV vMainUV1\n#elif ${tt}DIRECTUV == 2\n#define v${et}UV vMainUV2\n#else\nvarying v${et}UV: vec2f;\n#endif\nvar ${Vt}SamplerSampler: sampler;\nvar ${Vt}Sampler: texture_2d<f32>;\n#endif`
```

#### 144. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1818-L1819` → after: `L1818-L1819`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1818) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1818-L1819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L1818-L1819) · [Before (L1818-L1819)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L1818-L1819)

```diff
-       yJ = `\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#ifdef UV2\nattribute uv2: vec2f;\n#endif\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${hJ}\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#e … [truncated]
-     const UJ = `\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vC … [truncated]
+       aq = `\nattribute position: vec3f;\n#ifdef NORMAL\nattribute normal: vec3f;\n#endif\n#ifdef UV1\nattribute uv: vec2f;\n#endif\n#ifdef UV2\nattribute uv2: vec2f;\n#endif\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${lq}\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#e … [truncated]
+     const Mq = `\n#ifdef MAINUV1\nvarying vMainUV1: vec2f;\n#endif\n#ifdef MAINUV2\nvarying vMainUV2: vec2f;\n#endif\nvarying vPositionW: vec3f;\n#ifdef NORMAL\nvarying vNormalW: vec3f;\n#endif\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vC … [truncated]
```

#### 145. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1848` → after: `L1848`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1848) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L1848) · [Before (L1848)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L1848)

```diff
-     n #endif`}(IB))).join("\n")}\naggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);\nvar reflectionColor: vec4f= vec4f(0.,0.,0.,1.);\n#ifdef REFLECTION\nvar vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);\n … [truncated]
+     n #endif`}(et))).join("\n")}\naggShadow=aggShadow/numLights;var refractionColor: vec4f= vec4f(0.,0.,0.,1.);\nvar reflectionColor: vec4f= vec4f(0.,0.,0.,1.);\n#ifdef REFLECTION\nvar vReflectionUVW: vec3f=computeReflectionCoords( vec4f(fragmentInputs.vPositionW,1.0),normalW);\n … [truncated]
```

#### 146. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1851` → after: `L1851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L1851) · [Before (L1851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L1851)

```diff
-       dJ.has(BB) || (dJ.add(BB), console.warn(`Lite: no place for plugin code at ${BB} in the standard shader: it is left out`))
+       Jq.has(tt) || (Jq.add(tt), console.warn(`Lite: no place for plugin code at ${tt} in the standard shader: it is left out`))
```

#### 147. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1859` → after: `L1859`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1859) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L1859) · [Before (L1859)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L1859)

```diff
-         TB.set(oB, `${null!==(JB=TB.get(oB))&&void 0!==JB?JB:""}${GB}\n`)
+         Ot.set(Dt, `${null!==(qt=Ot.get(Dt))&&void 0!==qt?qt:""}${mt}\n`)
```

#### 148. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1863` → after: `L1863`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1863) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L1863) · [Before (L1863)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L1863)

```diff
-           const BB = `#define ${oB}`;
+           const tt = `#define ${Dt}`;
```

#### 149. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1868` → after: `L1868`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1868) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L1868) · [Before (L1868)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L1868)

```diff
-           ZB = ZB.replace(BB, (() => `\n${GB}\n${BB}`));
+           Vt = Vt.replace(tt, (() => `\n${mt}\n${tt}`));
```

#### 150. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1878` → after: `L1878`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1878) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L1878) · [Before (L1878)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L1878)

```diff
-         const TB = new RegExp(BB, IB.includes("g") ? IB : `${IB}g`);
+         const Ot = new RegExp(tt, et.includes("g") ? et : `${et}g`);
```

#### 151. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1927` → after: `L1927`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1927) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L1927) · [Before (L1927)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L1927)

```diff
-       if (!ZB) throw new Error(`Lite: unsupported uniform type ${BB}`);
+       if (!Vt) throw new Error(`Lite: unsupported uniform type ${tt}`);
```

#### 152. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1932` → after: `L1932`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1932) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L1932) · [Before (L1932)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L1932)

```diff
-       return void 0 === IB && void 0 === ZB ? /^(u32|i32|vec\du|vec\di|vec\d<[ui]32>)$/.test(BB.replace(/\s+/g, "")) ? "@interpolate(flat) " : "" : "flat" === IB ? "@interpolate(flat) " : `@interpolate(${null!==IB&&void 0!==IB?IB:"perspective"}, ${null!==ZB&&void 0!==ZB?ZB:"cente … [truncated]
+       return void 0 === et && void 0 === Vt ? /^(u32|i32|vec\du|vec\di|vec\d<[ui]32>)$/.test(tt.replace(/\s+/g, "")) ? "@interpolate(flat) " : "" : "flat" === et ? "@interpolate(flat) " : `@interpolate(${null!==et&&void 0!==et?et:"perspective"}, ${null!==Vt&&void 0!==Vt?Vt:"cente … [truncated]
```

#### 153. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1940` → after: `L1940`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1940) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L1940) · [Before (L1940)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L1940)

```diff
-         members: [...ZJ, ...BB.defines.has("OPACITY") ? TJ : [], ...BB.defines.has("EMISSIVE") ? JJ : [], ...BB.pluginUniforms],
+         members: [...Oq, ...tt.defines.has("OPACITY") ? qq : [], ...tt.defines.has("EMISSIVE") ? Dq : [], ...tt.pluginUniforms],
```

#### 154. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1950-L1951` → after: `L1950-L1951`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1950) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1950-L1951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L1950-L1951) · [Before (L1950-L1951)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L1950-L1951)

```diff
-     const MJ = `\nattribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${hJ}\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n@vertex\nfn main( … [truncated]
-       jJ = `\nuniform color: vec4f;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n${gJ}\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs =  … [truncated]
+     const Pq = `\nattribute position: vec3f;\n#ifdef VERTEXCOLOR\nattribute color: vec4f;\n#endif\n${lq}\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n@vertex\nfn main( … [truncated]
+       Zq = `\nuniform color: vec4f;\n#if defined(VERTEXCOLOR) || defined(INSTANCESCOLOR) && defined(INSTANCES)\nvarying vColor: vec4f;\n#endif\n#ifdef FOG\nvarying vFogDistance: vec3f;\n#endif\n${yq}\n@fragment\nfn main(input: FragmentInputs)->FragmentOutputs {\nfragmentInputs =  … [truncated]
```

#### 155. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1959` → after: `L1959`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1959) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L1959) · [Before (L1959)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L1959)

```diff
-       const oB = [...JB.values()].map(((BB, IB) => `\t@location(${IB}) ${BB.interpolation}${BB.name}: ${BB.type},`)),
+       const Dt = [...qt.values()].map(((tt, et) => `\t@location(${et}) ${tt.interpolation}${tt.name}: ${tt.type},`)),
```

#### 156. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1970` → after: `L1970`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1970) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L1970) · [Before (L1970)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L1970)

```diff
-         const BB = `${WB.name}Sampler`,
+         const tt = `${bt.name}Sampler`,
```

#### 157. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1979` → after: `L1979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L1979) · [Before (L1979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L1979)

```diff
-         }), cB.push(`@group(2) @binding(${IB}) var ${WB.name}: ${WB.type};`), cB.push(`@group(2) @binding(${ZB}) var ${BB}: sampler;`)
+         }), Ht.push(`@group(2) @binding(${et}) var ${bt.name}: ${bt.type};`), Ht.push(`@group(2) @binding(${Vt}) var ${tt}: sampler;`)
```

#### 158. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1982-L1983` → after: `L1982-L1983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1982) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1982-L1983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L1982-L1983) · [Before (L1982-L1983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L1982-L1983)

```diff
-         if (!hB.has(WB.replace(/Sampler$/, ""))) throw new Error(`Lite: sampler ${WB} has no texture`);
-       const zB = [XT, nJ, vB.wgsl, `@group(2) @binding(0) var<uniform> uniforms: ${BB.structName};`, ...cB].join("\n"),
+         if (!Qt.has(bt.replace(/Sampler$/, ""))) throw new Error(`Lite: sampler ${bt} has no texture`);
+       const lt = [zO, Qq, dt.wgsl, `@group(2) @binding(0) var<uniform> uniforms: ${tt.structName};`, ...Ht].join("\n"),
```

#### 159. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1985` → after: `L1985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L1985) · [Before (L1985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L1985)

```diff
-         NB = ["struct VertexInputs {", "\t@builtin(vertex_index) vertexIndex: u32,", "\t@builtin(instance_index) instanceIndex: u32,", ...ZB.attributes.map(((BB, IB) => `\t@location(${IB}) ${BB.name}: ${BB.type},`)), "}", "var<private> vertexInputs: VertexInputs;"].join("\n"),
+         ft = ["struct VertexInputs {", "\t@builtin(vertex_index) vertexIndex: u32,", "\t@builtin(instance_index) instanceIndex: u32,", ...Vt.attributes.map(((tt, et) => `\t@location(${et}) ${tt.name}: ${tt.type},`)), "}", "var<private> vertexInputs: VertexInputs;"].join("\n"),
```

#### 160. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1987` → after: `L1987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L1987) · [Before (L1987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L1987)

```diff
-         qB = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...TB.body.includes("fragmentInputs.frontFacing") ? ["\t@builtin(front_facing) frontFacing: bool,"] : [], ...oB, "}", "var<private> fragmentInputs: FragmentInputs;", "struct FragmentOutputs {", "\t@ … [truncated]
+         yt = ["struct FragmentInputs {", "\t@builtin(position) position: vec4f,", ...Ot.body.includes("fragmentInputs.frontFacing") ? ["\t@builtin(front_facing) frontFacing: bool,"] : [], ...Dt, "}", "var<private> fragmentInputs: FragmentInputs;", "struct FragmentOutputs {", "\t@ … [truncated]
```

#### 161. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1989` → after: `L1989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L1989) · [Before (L1989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L1989)

```diff
-           for (const IB of vB.stridedArrays) BB = BB.replace(new RegExp(`\\b${IB}\\s*\\[(.*?)\\]`, "g"), `${IB}[$1].el`);
+           for (const et of dt.stridedArrays) tt = tt.replace(new RegExp(`\\b${et}\\s*\\[(.*?)\\]`, "g"), `${et}[$1].el`);
```

#### 162. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L1993-L1994` → after: `L1993-L1994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R1993) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L1993-L1994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L1993-L1994) · [Before (L1993-L1994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L1993-L1994)

```diff
-         vertex: `${zB}\n${NB}\n${gB}\n${yB(ZB.body)}`,
-         fragment: `diagnostic(off, derivative_uniformity);\n${zB}\n${qB}\n${HJ((UB=yB(TB.body),UB.includes("fragmentInputs.position")?UB.replace("fragmentInputs = input;","fragmentInputs = input;\nfragmentInputs.position.y = frame.outputHeight - fragmentInputs.position.y;"):UB))} … [truncated]
+         vertex: `${lt}\n${ft}\n${wt}\n${Nt(Vt.body)}`,
+         fragment: `diagnostic(off, derivative_uniformity);\n${lt}\n${yt}\n${Iq((Mt=Nt(Ot.body),Mt.includes("fragmentInputs.position")?Mt.replace("fragmentInputs = input;","fragmentInputs = input;\nfragmentInputs.position.y = frame.outputHeight - fragmentInputs.position.y;"):Mt))} … [truncated]
```

#### 163. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2011-L2016` → after: `L2011-L2016`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2011) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2011-L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2011-L2016) · [Before (L2011-L2016)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2011-L2016)

```diff
-       LJ = `${XT}\n${nJ}\n${XJ.wgsl}\n@group(2) @binding(0) var<uniform> sky: EarthSkyUniforms;\nstruct EarthSkyVarying {\n\t@builtin(position) position: vec4f,\n\t@location(0) worldPosition: vec3f,\n\t@location(1) fogDistance: vec3f,\n\t@location(2) tint: vec3f,\n}\n`,
-       eJ = `\n@vertex\nfn main(@builtin(vertex_index) index: u32) -> EarthSkyVarying {\n\tlet corners = array<u32, 36>(${RJ.join(", ")});\n\tlet corner = corners[index];\n\tlet position = vec3f(f32(corner & 1u), f32((corner >> 1u) & 1u), f32(corner >> 2u)) - 0.5;\n\tvar out: Eart … [truncated]
-       uJ = `\n${qI}\nconst PI: f32 = 3.141592653589793238462643383279502884197169;\nconst SUN_DISC_COS: f32 = 0.999956676946448443553574619906976478926848692873900859324;\n${Object.entries(LI).map((BB=>{let[IB,ZB]=BB;return`const TONE_${IB}: f32 = ${ZB};`})).join(" ")}\n\n// The  … [truncated]
-     var fJ = ZB(37113);
-     const lJ = new fJ.rN,
-       AJ = new fJ.rN,
+       oq = `${zO}\n${Qq}\n${zq.wgsl}\n@group(2) @binding(0) var<uniform> sky: EarthSkyUniforms;\nstruct EarthSkyVarying {\n\t@builtin(position) position: vec4f,\n\t@location(0) worldPosition: vec3f,\n\t@location(1) fogDistance: vec3f,\n\t@location(2) tint: vec3f,\n}\n`,
+       rq = `\n@vertex\nfn main(@builtin(vertex_index) index: u32) -> EarthSkyVarying {\n\tlet corners = array<u32, 36>(${Fq.join(", ")});\n\tlet corner = corners[index];\n\tlet position = vec3f(f32(corner & 1u), f32((corner >> 1u) & 1u), f32(corner >> 2u)) - 0.5;\n\tvar out: Eart … [truncated]
+       Uq = `\n${Ne}\nconst PI: f32 = 3.141592653589793238462643383279502884197169;\nconst SUN_DISC_COS: f32 = 0.999956676946448443553574619906976478926848692873900859324;\n${Object.entries(oe).map((tt=>{let[et,Vt]=tt;return`const TONE_${et}: f32 = ${Vt};`})).join(" ")}\n\n// The  … [truncated]
+     var Aq = Vt(37331);
+     const iq = new Aq.uf,
+       Yq = new Aq.uf,
```

#### 164. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2034` → after: `L2034`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2034) · [Before (L2034)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2034)

```diff
-         lJ.set(IB.distance * Math.cos(ZB) * Math.cos(BB), IB.distance * Math.sin(-BB), IB.distance * Math.sin(ZB) * Math.cos(BB)), fJ.Quaternion.FromUnitVectorsToRef(fJ.rN.UpReadOnly, AJ.set(IB.up[0], IB.up[1], IB.up[2]), tJ), lJ.rotateByQuaternionToRef(tJ, lJ)
+         iq.set(et.distance * Math.cos(Vt) * Math.cos(tt), et.distance * Math.sin(-tt), et.distance * Math.sin(Vt) * Math.cos(tt)), Aq.Quaternion.FromUnitVectorsToRef(Aq.uf.UpReadOnly, Yq.set(et.up[0], et.up[1], et.up[2]), Bq), iq.rotateByQuaternionToRef(Bq, iq)
```

#### 165. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2071-L2072` → after: `L2071-L2072`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2071) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2071-L2072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2071-L2072) · [Before (L2071-L2072)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2071-L2072)

```diff
-         this.modelMeshes = BB, this.Z4 = IB, this.maker = ZB, this.warnOnce = TB, this.skyDraws = [], this.opaqueDraws = [], this.transparentDraws = [], this.frontDraws = [], this.warnIfNotDrawn = (BB, IB) => {
-           (IB < -1 || IB > 1) && this.warnOnce(`group:${IB}`, `rendering group ${IB} is not drawn`)
+         this.modelMeshes = tt, this.R_ = et, this.maker = Vt, this.warnOnce = Ot, this.skyDraws = [], this.opaqueDraws = [], this.transparentDraws = [], this.frontDraws = [], this.warnIfNotDrawn = (tt, et) => {
+           (et < -1 || et > 1) && this.warnOnce(`group:${et}`, `rendering group ${et} is not drawn`)
```

#### 166. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2079` → after: `L2079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2079) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2079) · [Before (L2079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2079)

```diff
-         this.collectGroup(BB, -1, this.skyDraws, this.skyDraws, !0), this.collectGroup(BB, 0, this.opaqueDraws, this.transparentDraws, !1), this.collectGroup(BB, 1, this.frontDraws, this.frontDraws, !0), this.modelMeshes.forEachGroup(this.warnIfNotDrawn), this.Z4.forEachGroup(thi … [truncated]
+         this.collectGroup(tt, -1, this.skyDraws, this.skyDraws, !0), this.collectGroup(tt, 0, this.opaqueDraws, this.transparentDraws, !1), this.collectGroup(tt, 1, this.frontDraws, this.frontDraws, !0), this.modelMeshes.forEachGroup(this.warnIfNotDrawn), this.R_.forEachGroup(thi … [truncated]
```

#### 167. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2083` → after: `L2083`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2083) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2083) · [Before (L2083)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2083)

```diff
-           GB = this.Z4.group(IB),
+           mt = this.R_.group(et),
```

#### 168. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2085` → after: `L2085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2085) · [Before (L2085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2085)

```diff
-         this.collectList(BB, null === oB || void 0 === oB ? void 0 : oB.opaque, vB || null === GB || void 0 === GB ? void 0 : GB.opaque, IB, !1, ZB, JB), vB && (this.Z4.drawn += this.maker.bundleDraws(BB, vB, IB)), this.collectList(BB, null === oB || void 0 === oB ? void 0 : oB.a … [truncated]
+         this.collectList(tt, null === Dt || void 0 === Dt ? void 0 : Dt.opaque, dt || null === mt || void 0 === mt ? void 0 : mt.opaque, et, !1, Vt, qt), dt && (this.R_.drawn += this.maker.bundleDraws(tt, dt, et)), this.collectList(tt, null === Dt || void 0 === Dt ? void 0 : Dt.a … [truncated]
```

#### 169. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2090` → after: `L2090`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2090) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2090) · [Before (L2090)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2090)

```diff
-         IB && this.maker.pushDraws(BB, IB.units, IB.units.length, TB, JB, oB, IB.rows), ZB && (this.Z4.drawn += this.maker.pushDraws(BB, ZB, ZB.length, TB, JB, oB));
+         et && this.maker.pushDraws(tt, et.units, et.units.length, Ot, qt, Dt, et.rows), Vt && (this.R_.drawn += this.maker.pushDraws(tt, Vt, Vt.length, Ot, qt, Dt));
```

#### 170. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2115` → after: `L2115`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2115) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2115) · [Before (L2115)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2115)

```diff
-       return BB.hasThinInstances ? "thin" : BB.sJB || BB._userInstancedBuffersStorage ? "instanced" : "none"
+       return tt.hasThinInstances ? "thin" : tt.cqt || tt._userInstancedBuffersStorage ? "instanced" : "none"
```

#### 171. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2119` → after: `L2119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2119) · [Before (L2119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2119)

```diff
-       return BB ? (ZB._needUVs = !0, BB.optimizeUVAllocation && (0, iB.F)(BB.matrix) ? (ZB[`${IB}DIRECTUV`] = BB.uvSet + 1, ZB[`MAINUV${BB.uvSet+1}`] = !0) : ZB[`${IB}DIRECTUV`] = 0, !0) : (ZB[`${IB}DIRECTUV`] = 0, !1)
+       return tt ? (Vt._needUVs = !0, tt.optimizeUVAllocation && (0, St.M)(tt.matrix) ? (Vt[`${et}DIRECTUV`] = tt.uvSet + 1, Vt[`MAINUV${tt.uvSet+1}`] = !0) : Vt[`${et}DIRECTUV`] = 0, !0) : (Vt[`${et}DIRECTUV`] = 0, !1)
```

#### 172. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2147` → after: `L2147`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2147) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2147) · [Before (L2147)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2147)

```diff
-       return null !== IB && void 0 !== IB && IB.live ? IB : null
+       return null !== et && void 0 !== et && et.live ? et : null
```

#### 173. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2152` → after: `L2152`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2152) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2152) · [Before (L2152)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2152)

```diff
-       return null !== (IB = ko(BB)) && void 0 !== IB ? IB : To
+       return null !== (et = HD(tt)) && void 0 !== et ? et : qD
```

#### 174. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2164` → after: `L2164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2164) · [Before (L2164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2164)

```diff
-           if (!BB) return this.warnOnce("model", `${ZB.name} on ${oB.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
+           if (!tt) return this.warnOnce("model", `${Vt.name} on ${Dt.name} is not a model material, so it is not drawn on WebGPU (adoptModelMaterial); further ones are not reported`), null;
```

#### 175. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2187` → after: `L2187`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2187) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2187) · [Before (L2187)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2187)

```diff
-           for (const [ZB, TB] of BB) IB += !0 === TB ? `${ZB};` : `${ZB}=${TB};`;
+           for (const [Vt, Ot] of tt) et += !0 === Ot ? `${Vt};` : `${Vt}=${Ot};`;
```

#### 176. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2200` → after: `L2200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2200) · [Before (L2200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2200)

```diff
-         return 0 === this.modelPackVariant ? null : null !== (IB = (0, OB.v)(BB, wB.f.name)) && void 0 !== IB && IB.active ? "placed" : BB.item ? "item" : BB.lifeform ? "lifeform" : BB.box ? "box" : null
+         return 0 === this.modelPackVariant ? null : null !== (et = (0, vt.s)(tt, ht.i.name)) && void 0 !== et && et.active ? "placed" : tt.item ? "item" : tt.lifeform ? "lifeform" : tt.box ? "box" : null
```

#### 177. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2204` → after: `L2204`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2204) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2204) · [Before (L2204)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2204)

```diff
-         return "thin" === IB ? null !== (JB = this.resources.I5.get(BB)) && void 0 !== JB ? JB : null : "instanced" === IB && null !== (ZB = null === (TB = BB._userInstancedBuffersStorage) || void 0 === TB ? void 0 : TB.interleavedKinds) && void 0 !== ZB ? ZB : null
+         return "thin" === et ? null !== (qt = this.resources.T6.get(tt)) && void 0 !== qt ? qt : null : "instanced" === et && null !== (Vt = null === (Ot = tt._userInstancedBuffersStorage) || void 0 === Ot ? void 0 : Ot.interleavedKinds) && void 0 !== Vt ? Vt : null
```

#### 178. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2214` → after: `L2214`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2214) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2214) · [Before (L2214)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2214)

```diff
-           for (; TB < this.view.lightCount && (BB[`LIGHT${TB}`] = !0, BB[`LITE_LIGHT${TB}_SLOT`] = TB, TB++, BB._needNormals = !0, TB !== IB););
+           for (; Ot < this.view.lightCount && (tt[`LIGHT${Ot}`] = !0, tt[`LITE_LIGHT${Ot}_SLOT`] = Ot, Ot++, tt._needNormals = !0, Ot !== et););
```

#### 179. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2216` → after: `L2216`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2216) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2216) · [Before (L2216)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2216)

```diff
-         for (let JB = TB; JB < 4; JB++) BB[`LIGHT${JB}`] = !1, BB[`LITE_LIGHT${JB}_SLOT`] = void 0
+         for (let qt = Ot; qt < 4; qt++) tt[`LIGHT${qt}`] = !1, tt[`LITE_LIGHT${qt}_SLOT`] = void 0
```

#### 180. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2226` → after: `L2226`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2226) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2226) · [Before (L2226)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2226)

```diff
-         kB ? (TB._needUVs = !0, TB.DIFFUSE = !0, kB.optimizeUVAllocation && (0, iB.F)(kB.matrix) ? (TB.DIFFUSEDIRECTUV = kB.uvSet + 1, TB[`MAINUV${kB.uvSet+1}`] = !0) : TB.DIFFUSEDIRECTUV = 0, kB.uvSet > 1 && this.warnOnce(`uvset:${ZB.name}`, `${ZB.name} samples UV set ${kB.uvSet … [truncated]
+         jt ? (Ot._needUVs = !0, Ot.DIFFUSE = !0, jt.optimizeUVAllocation && (0, St.M)(jt.matrix) ? (Ot.DIFFUSEDIRECTUV = jt.uvSet + 1, Ot[`MAINUV${jt.uvSet+1}`] = !0) : Ot.DIFFUSEDIRECTUV = 0, jt.uvSet > 1 && this.warnOnce(`uvset:${Vt.name}`, `${Vt.name} samples UV set ${jt.uvSet … [truncated]
```

#### 181. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2229` → after: `L2229`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2229) · [Before (L2229)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2229)

```diff
-         TB.OPACITY = oo(cB, "OPACITY", TB), TB.OPACITYRGB = null !== cB && cB.getAlphaFromRGB, TB.EMISSIVE = oo(nB, "EMISSIVE", TB), (cB && cB.uvSet > 1 || nB && nB.uvSet > 1) && this.warnOnce(`uvset:${ZB.name}`, `${ZB.name} samples a UV set past 2, which is not supported`);
+         Ot.OPACITY = mD(Ht, "OPACITY", Ot), Ot.OPACITYRGB = null !== Ht && Ht.getAlphaFromRGB, Ot.EMISSIVE = mD(Xt, "EMISSIVE", Ot), (Ht && Ht.uvSet > 1 || Xt && Xt.uvSet > 1) && this.warnOnce(`uvset:${Vt.name}`, `${Vt.name} samples a UV set past 2, which is not supported`);
```

#### 182. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2236` → after: `L2236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2236) · [Before (L2236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2236)

```diff
-         TB.REFLECTION = zB, TB.REFLECTIONMAP_3D = zB, TB.REFLECTIONMAP_SKYBOX = zB, TB.REFLECTIONMAP_OPPOSITEZ = zB && (BB.useRightHandedSystem ? !hB.invertZ : hB.invertZ), TB.ROUGHNESS = zB && ZB.roughness > 0, TB.REFLECTIONOVERALPHA = zB && ZB.useReflectionOverAlpha, TB.LITE_RE … [truncated]
+         Ot.REFLECTION = lt, Ot.REFLECTIONMAP_3D = lt, Ot.REFLECTIONMAP_SKYBOX = lt, Ot.REFLECTIONMAP_OPPOSITEZ = lt && (tt.useRightHandedSystem ? !Qt.invertZ : Qt.invertZ), Ot.ROUGHNESS = lt && Vt.roughness > 0, Ot.REFLECTIONOVERALPHA = lt && Vt.useReflectionOverAlpha, Ot.LITE_RE … [truncated]
```

#### 183. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2241` → after: `L2241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2241) · [Before (L2241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2241)

```diff
-         TB.ALPHATEST = (0, OB.S)(ZB, FB, NB), TB.ALPHAFROMDIFFUSE = (0, OB.eb)(ZB), TB.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== ZB.transparencyMode, TB.ALPHABLEND = null === ZB.transparencyMode || (0, OB.P)(ZB, FB, NB), TB.PREMULTIPLYALPHA = 7 === ZB.alphaMode || 8 === ZB.a … [truncated]
+         Ot.ALPHATEST = (0, vt.P)(Vt, Et, ft), Ot.ALPHAFROMDIFFUSE = (0, vt.bb)(Vt), Ot.ALPHATEST_AFTERALLALPHACOMPUTATIONS = null !== Vt.transparencyMode, Ot.ALPHABLEND = null === Vt.transparencyMode || (0, vt.O)(Vt, Et, ft), Ot.PREMULTIPLYALPHA = 7 === Vt.alphaMode || 8 === Vt.a … [truncated]
```

#### 184. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2249` → after: `L2249`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2249) · [Before (L2249)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2249)

```diff
-           if (OB) null === (gB = (qB = (0, jI.h)(sB)).prepareDefinesBeforeAttributes) || void 0 === gB || gB.call(qB, wB, TB, BB, IB)
+           if (vt) null === (wt = (yt = (0, Ze.g)(Kt)).prepareDefinesBeforeAttributes) || void 0 === wt || wt.call(yt, ht, Ot, tt, et)
```

#### 185. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2261` → after: `L2261`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2261) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2261) · [Before (L2261)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2261)

```diff
-           if (OB) null === (UB = (WB = (0, jI.h)(sB)).prepareDefines) || void 0 === UB || UB.call(WB, wB, TB, BB, IB, ZB)
+           if (vt) null === (Mt = (bt = (0, Ze.g)(Kt)).prepareDefines) || void 0 === Mt || Mt.call(bt, ht, Ot, tt, et, Vt)
```

#### 186. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2263` → after: `L2263`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2263) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2263) · [Before (L2263)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2263)

```diff
-         const dB = BB.PN();
+         const Jt = tt.Jf();
```

#### 187. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2271` → after: `L2271`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2271) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2271) · [Before (L2271)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2271)

```diff
-           if (OB && !1 === (null === (CB = (QB = (0, jI.h)(sB)).isReadyForSubMesh) || void 0 === CB ? void 0 : CB.call(QB, wB, TB, BB, dB))) return !1
+           if (vt && !1 === (null === (Ct = (ut = (0, Ze.g)(Kt)).isReadyForSubMesh) || void 0 === Ct ? void 0 : Ct.call(ut, ht, Ot, tt, Jt))) return !1
```

#### 188. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2288` → after: `L2288`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2288) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2288) · [Before (L2288)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2288)

```diff
-           if (NB) zo(null === (JB = (oB = (0, jI.h)(zB)).getCustomCode) || void 0 === JB ? void 0 : JB.call(oB, FB, "vertex", QB.c.WGSL), ZB), zo(null === (GB = (vB = (0, jI.h)(zB)).getCustomCode) || void 0 === GB ? void 0 : GB.call(vB, FB, "fragment", QB.c.WGSL), TB)
+           if (ft) ED(null === (qt = (Dt = (0, Ze.g)(lt)).getCustomCode) || void 0 === qt ? void 0 : qt.call(Dt, Et, "vertex", ut.c.WGSL), Vt), ED(null === (mt = (dt = (0, Ze.g)(lt)).getCustomCode) || void 0 === mt ? void 0 : mt.call(dt, Et, "fragment", ut.c.WGSL), Ot)
```

#### 189. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2297-L2298` → after: `L2297-L2298`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2297) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2297-L2298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2297-L2298) · [Before (L2297-L2298)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2297-L2298)

```diff
-           const BB = null === (cB = (nB = (0, jI.h)(zB)).getUniforms) || void 0 === cB ? void 0 : cB.call(nB, FB, QB.c.WGSL);
-           for (const IB of null !== (hB = null === BB || void 0 === BB ? void 0 : BB.ubo) && void 0 !== hB ? hB : []) {
+           const tt = null === (Ht = (Xt = (0, Ze.g)(lt)).getUniforms) || void 0 === Ht ? void 0 : Ht.call(Xt, Et, ut.c.WGSL);
+           for (const et of null !== (Qt = null === tt || void 0 === tt ? void 0 : tt.ubo) && void 0 !== Qt ? Qt : []) {
```

#### 190. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2308` → after: `L2308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2308) · [Before (L2308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2308)

```diff
-       }(BB, IB), `${ZB}#${BB.codeKey}`
+       }(tt, et), `${Vt}#${tt.codeKey}`
```

#### 191. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2332` → after: `L2332`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2332) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2332) · [Before (L2332)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2332)

```diff
-           GB = null !== (JB = BB.sideOrientation) && void 0 !== JB ? JB : IB.sideOrientation;
+           mt = null !== (qt = tt.sideOrientation) && void 0 !== qt ? qt : et.sideOrientation;
```

#### 192. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2343` → after: `L2343`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2343) · [Before (L2343)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2343)

```diff
-         return TB && TB.alphaMode === kB && TB.depthWrite === cB && TB.depthFunction === zB && TB.cullMode === nB && TB.frontFace === hB && TB.zOffset === FB && TB.zOffsetUnits === NB && TB.colourWrite === gB && TB.topology === oB ? TB : this.stateFor(kB, cB, zB, nB, hB, FB, NB,  … [truncated]
+         return Ot && Ot.alphaMode === jt && Ot.depthWrite === Ht && Ot.depthFunction === lt && Ot.cullMode === Xt && Ot.frontFace === Qt && Ot.zOffset === Et && Ot.zOffsetUnits === ft && Ot.colourWrite === wt && Ot.topology === Dt ? Ot : this.stateFor(jt, Ht, lt, Xt, Qt, Et, ft,  … [truncated]
```

#### 193. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2346` → after: `L2346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2346) · [Before (L2346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2346)

```diff
-         const cB = `${BB}|${IB}|${ZB}|${TB}|${JB}|${oB}|${GB}|${vB}|${kB}`;
+         const Ht = `${tt}|${et}|${Vt}|${Ot}|${qt}|${Dt}|${mt}|${dt}|${jt}`;
```

#### 194. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2351` → after: `L2351`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2351) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2351) · [Before (L2351)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2351)

```diff
-           BB && !zB && this.warnOnce(`alpha:${BB}`, `alpha mode ${BB} is not supported`), nB = {
+           tt && !lt && this.warnOnce(`alpha:${tt}`, `alpha mode ${tt} is not supported`), Xt = {
```

#### 195. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2360` → after: `L2360`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2360) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2360) · [Before (L2360)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2360)

```diff
-             depthCompare: ZB && null !== (hB = Fo.get(ZB)) && void 0 !== hB ? hB : null,
+             depthCompare: Vt && null !== (Qt = fD.get(Vt)) && void 0 !== Qt ? Qt : null,
```

#### 196. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2371` → after: `L2371`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2371) · [Before (L2371)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2371)

```diff
-     var go = ZB(37484);
+     var yD = Vt(37685);
```

#### 197. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2383` → after: `L2383`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2383) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2383) · [Before (L2383)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2383)

```diff
-         const BB = (0, jI.h)(ZB).uniformsVersion;
+         const tt = (0, Ze.g)(Vt).uniformsVersion;
```

#### 198. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2466` → after: `L2466`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2466) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2466) · [Before (L2466)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2466)

```diff
-         TB = go.h,
+         Ot = yD.f,
```

#### 199. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2471-L2472` → after: `L2471-L2472`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2471) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2471-L2472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2471-L2472) · [Before (L2471-L2472)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2471-L2472)

```diff
-           oB = GB * go.b;
-         IB[BB] = JB[oB + TB.vector], IB[BB + 1] = JB[oB + TB.vector + 1], IB[BB + 2] = JB[oB + TB.vector + 2], IB[BB + 3] = JB[oB + TB.kind] === go.f.directional ? 1 : 0, IB[BB + 4] = JB[oB + TB.diffuse], IB[BB + 5] = JB[oB + TB.diffuse + 1], IB[BB + 6] = JB[oB + TB.diffuse + 2], … [truncated]
+           Dt = mt * yD.d;
+         et[tt] = qt[Dt + Ot.vector], et[tt + 1] = qt[Dt + Ot.vector + 1], et[tt + 2] = qt[Dt + Ot.vector + 2], et[tt + 3] = qt[Dt + Ot.kind] === yD.e.directional ? 1 : 0, et[tt + 4] = qt[Dt + Ot.diffuse], et[tt + 5] = qt[Dt + Ot.diffuse + 1], et[tt + 6] = qt[Dt + Ot.diffuse + 2], … [truncated]
```

#### 200. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2500` → after: `L2500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2500) · [Before (L2500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2500)

```diff
-         const hB = BB.PN();
+         const Qt = tt.Jf();
```

#### 201. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2508` → after: `L2508`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2508) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2508) · [Before (L2508)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2508)

```diff
-           if (qB) null === (zB = (FB = (0, jI.h)(NB)).bind) || void 0 === zB || zB.call(FB, gB, JB, BB, hB)
+           if (yt) null === (lt = (Et = (0, Ze.g)(ft)).bind) || void 0 === lt || lt.call(Et, wt, qt, tt, Qt)
```

#### 202. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2521` → after: `L2521`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2521) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2521) · [Before (L2521)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2521)

```diff
-         JB = BB => 4 === ZB ? `${BB}x4` : 2 === ZB ? `${BB}x2` : null;
+         qt = tt => 4 === Vt ? `${tt}x4` : 2 === Vt ? `${tt}x2` : null;
```

#### 203. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2523` → after: `L2523`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2523) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2523) · [Before (L2523)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2523)

```diff
-         if (5126 === BB.type) return 1 === ZB ? "float32" : ZB >= 2 && ZB <= 4 ? `float32x${ZB}` : null;
+         if (5126 === tt.type) return 1 === Vt ? "float32" : Vt >= 2 && Vt <= 4 ? `float32x${Vt}` : null;
```

#### 204. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2541` → after: `L2541`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2541) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2541) · [Before (L2541)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2541)

```diff
-           return 1 === ZB ? `${oB}32` : ZB <= 4 ? `${oB}32x${ZB}` : null;
+           return 1 === Vt ? `${Dt}32` : Vt <= 4 ? `${Dt}32x${Vt}` : null;
```

#### 205. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2544` → after: `L2544`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2544) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2544) · [Before (L2544)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2544)

```diff
-           return JB(`${oB}8`);
+           return qt(`${Dt}8`);
```

#### 206. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2547` → after: `L2547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2547) · [Before (L2547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2547)

```diff
-           return JB(`${oB}16`)
+           return qt(`${Dt}16`)
```

#### 207. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2555` → after: `L2555`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2555) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2555) · [Before (L2555)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2555)

```diff
-       return ZB ? Number(ZB[1]) / 8 * Number(null !== (IB = ZB[2]) && void 0 !== IB ? IB : 1) : 4
+       return Vt ? Number(Vt[1]) / 8 * Number(null !== (et = Vt[2]) && void 0 !== et ? et : 1) : 4
```

#### 208. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2593` → after: `L2593`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2593) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2593) · [Before (L2593)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2593)

```diff
-           if (!cB) return this.warnOnce(`format:${IB}:${ZB.name}`, `${IB}'s ${ZB.name} (type ${vB.type}, size ${vB.getSize()}) has no WebGPU vertex format`), null;
+           if (!Ht) return this.warnOnce(`format:${et}:${Vt.name}`, `${et}'s ${Vt.name} (type ${dt.type}, size ${dt.getSize()}) has no WebGPU vertex format`), null;
```

#### 209. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2614` → after: `L2614`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2614) · [Before (L2614)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2614)

```diff
-         if (JB.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${IB}`, `${IB} needs ${JB.length} vertex buffers`), null;
+         if (qt.length > this.limits.maxVertexBuffers) return this.warnOnce(`slots:${et}`, `${et} needs ${qt.length} vertex buffers`), null;
```

#### 210. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2617-L2618` → after: `L2617-L2618`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2617) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2617-L2618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2617-L2618) · [Before (L2617-L2618)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2617-L2618)

```diff
-           vB += `${nB.stride}${"instance"===nB.step?"i":"v"}`;
-           for (const BB of nB.attributes) vB += `,${BB.shaderLocation}:${BB.offset}:${BB.format}`;
+           dt += `${Xt.stride}${"instance"===Xt.step?"i":"v"}`;
+           for (const tt of Xt.attributes) dt += `,${tt.shaderLocation}:${tt.offset}:${tt.format}`;
```

#### 211. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2642` → after: `L2642`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2642) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2642) · [Before (L2642)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2642)

```diff
-           O4: cB,
+           F_: Ht,
```

#### 212. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2722` → after: `L2722`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2722) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2722) · [Before (L2722)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2722)

```diff
-       return BB.gpu[iB.f.lite] ??= BB.materials.map(((IB, ZB) => ({
+       return tt.gpu[St.i.lite] ??= tt.materials.map(((et, Vt) => ({
```

#### 213. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2731` → after: `L2731`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2731) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2731) · [Before (L2731)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2731)

```diff
-       return null !== (IB = null !== (ZB = null === (TB = BB.parts.materials[BB.range]) || void 0 === TB ? void 0 : TB.mirror) && void 0 !== ZB ? ZB : BB.owner.material) && void 0 !== IB ? IB : null
+       return null !== (et = null !== (Vt = null === (Ot = tt.parts.materials[tt.range]) || void 0 === Ot ? void 0 : Ot.mirror) && void 0 !== Vt ? Vt : tt.owner.material) && void 0 !== et ? et : null
```

#### 214. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2740` → after: `L2740`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2740) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2740) · [Before (L2740)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2740)

```diff
-         this.selectedCount = 0, this.model = null, this.mirror = null, this.groups = new Map, this.batches = new WeakMap, this.rows = new Int32Array(0), this.frame = 0, this.warnOnce = (0, MI.c)("Lite: ")
+         this.selectedCount = 0, this.model = null, this.mirror = null, this.groups = new Map, this.batches = new WeakMap, this.rows = new Int32Array(0), this.frame = 0, this.warnOnce = (0, Pe.b)("Lite: ")
```

#### 215. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2746` → after: `L2746`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2746) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2746) · [Before (L2746)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2746)

```diff
-         return this.model.nodes.vz
+         return this.model.nodes.sQ
```

#### 216. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2769` → after: `L2769`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2769) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2769) · [Before (L2769)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2769)

```diff
-         this.rows.length < ZB.nodes.ah && (this.rows = new Int32Array(ZB.nodes.ah));
+         this.rows.length < Vt.nodes.uQ && (this.rows = new Int32Array(Vt.nodes.uQ));
```

#### 217. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2775` → after: `L2775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2775) · [Before (L2775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2775)

```diff
-           ZB && !ZB.isBlocked && ZB.isEnabled() && !ZB.ek.hasAZeroComponent && oB.selects(BB, IB.frustum) && (this.activate(ZB, BB), this.selectedCount++)
+           Vt && !Vt.isBlocked && Vt.isEnabled() && !Vt.cj.hasAZeroComponent && Dt.selects(tt, et.frustum) && (this.activate(Vt, tt), this.selectedCount++)
```

#### 218. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2796` → after: `L2796`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2796) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2796) · [Before (L2796)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2796)

```diff
-         if (!BB.vR) {
+         if (!tt.pI) {
```

#### 219. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2798` → after: `L2798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2798) · [Before (L2798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2798)

```diff
-           if (ZB.sJB) {
+           if (Vt.cqt) {
```

#### 220. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2805-L2806` → after: `L2805-L2806`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2805) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2805-L2806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2805-L2806) · [Before (L2805-L2806)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2805-L2806)

```diff
-           TB = ZB.wJB;
-         if (TB._getWorldMatrixDeterminant() >= 0 !== ZB._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${TB.name}`, `A mirrored InstancedMesh of ${TB.name} is not drawn yet`);
+           Ot = Vt.Rqt;
+         if (Ot._getWorldMatrixDeterminant() >= 0 !== Vt._getWorldMatrixDeterminant() >= 0) return void this.warnOnce(`mirrored:${Ot.name}`, `A mirrored InstancedMesh of ${Ot.name} is not drawn yet`);
```

#### 221. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2864` → after: `L2864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2864) · [Before (L2864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2864)

```diff
-         this.sv = new Map, this.enabled = [], this.groups = new Map, this.XF = [], this.warned = new Set, this.selected = 0, this.drawn = 0
+         this.Pd = new Map, this.enabled = [], this.groups = new Map, this.hE = [], this.warned = new Set, this.selected = 0, this.drawn = 0
```

#### 222. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2867` → after: `L2867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2867) · [Before (L2867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2867)

```diff
-         if (this.sv.has(BB)) return;
+         if (this.Pd.has(tt)) return;
```

#### 223. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2871` → after: `L2871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2871) · [Before (L2871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2871)

```diff
-             this.qY(IB, BB)
+             this.Av(et, tt)
```

#### 224. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2876` → after: `L2876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2876) · [Before (L2876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2876)

```diff
-         this.sv.set(BB, IB), this.qY(IB, BB.isEnabled())
+         this.Pd.set(tt, et), this.Av(et, tt.isEnabled())
```

#### 225. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2879-L2880` → after: `L2879-L2880`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2879-L2880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2879-L2880) · [Before (L2879-L2880)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2879-L2880)

```diff
-         const IB = this.sv.get(BB);
-         IB && (IB.observer.remove(!0), this.qY(IB, !1), this.sv.delete(BB))
+         const et = this.Pd.get(tt);
+         et && (et.observer.remove(!0), this.Av(et, !1), this.Pd.delete(tt))
```

#### 226. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2883` → after: `L2883`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2883) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2883) · [Before (L2883)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2883)

```diff
-         for (const BB of this.sv.values()) BB.steady = null
+         for (const tt of this.Pd.values()) tt.steady = null
```

#### 227. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2886` → after: `L2886`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2886) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2886) · [Before (L2886)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2886)

```diff
-         return this.sv.get(BB)
+         return this.Pd.get(tt)
```

#### 228. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2892` → after: `L2892`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2892) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2892) · [Before (L2892)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2892)

```diff
-           sv: this.sv.size
+           Pd: this.Pd.size
```

#### 229. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2900` → after: `L2900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2900) · [Before (L2900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2900)

```diff
-         for (const IB of this.XF) BB(IB.mesh, "opaque", 0)
+         for (const et of this.hE) tt(et.mesh, "opaque", 0)
```

#### 230. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2909` → after: `L2909`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2909) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2909) · [Before (L2909)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2909)

```diff
-         if (this.drawn = 0, this.selected = 0, this.XF.length = 0, this.groups.forEach(Po), !BB) return;
+         if (this.drawn = 0, this.selected = 0, this.hE.length = 0, this.groups.forEach(ZD), !tt) return;
```

#### 231. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2914` → after: `L2914`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2914) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2914) · [Before (L2914)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2914)

```diff
-             this.selected++, this.XF.push(JB);
+             this.selected++, this.hE.push(qt);
```

#### 232. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2918` → after: `L2918`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2918) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2918) · [Before (L2918)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2918)

```diff
-           if (oB.isBlocked || oB.ek.hasAZeroComponent) continue;
+           if (Dt.isBlocked || Dt.cj.hasAZeroComponent) continue;
```

#### 233. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2920-L2921` → after: `L2920-L2921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2920) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2920-L2921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2920-L2921) · [Before (L2920-L2921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2920-L2921)

```diff
-           if (oB.sJB) {
-             this.warned.has(oB.name) || (this.warned.add(oB.name), console.warn(`Lite: thin instance base ${oB.name} has InstancedMeshes and is not drawn`));
+           if (Dt.cqt) {
+             this.warned.has(Dt.name) || (this.warned.add(Dt.name), console.warn(`Lite: thin instance base ${Dt.name} has InstancedMeshes and is not drawn`));
```

#### 234. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2954` → after: `L2954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2954) · [Before (L2954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2954)

```diff
-     var ro = ZB(39649);
+     var FD = Vt(39794);
```

#### 235. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2957` → after: `L2957`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2957) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2957) · [Before (L2957)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2957)

```diff
-         this.bundle = null, this.stale = !0, this.sv = new Set
+         this.bundle = null, this.stale = !0, this.Pd = new Set
```

#### 236. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2962-L2963` → after: `L2962-L2963`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2962) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2962-L2963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2962-L2963) · [Before (L2962-L2963)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2962-L2963)

```diff
-         this.device = BB, this.slots = IB, this.host = ZB, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = n … [truncated]
-           BB.seen !== this.frame && (BB.draw && (BB.draw = null, this.args[5 * BB.slot + 1] = 0, this.argsDirty = !0, this.gH.stale ||= BB.gH), this.frame - BB.seen > 120 && (this.records.delete(BB.unit), this.freeSlots.push(BB.slot), BB.recorded && (this.bundleOf(BB).stale = !0) … [truncated]
+         this.device = tt, this.slots = et, this.host = Vt, this.records = new Map, this.freeSlots = [], this.slotCount = 0, this.slotsFrom = Number.POSITIVE_INFINITY, this.slotsTo = -1, this.args = new Uint32Array(320), this.argsBuffer = void 0, this.argsDirty = !1, this.main = n … [truncated]
+           tt.seen !== this.frame && (tt.draw && (tt.draw = null, this.args[5 * tt.slot + 1] = 0, this.argsDirty = !0, this.jR.stale ||= tt.jR), this.frame - tt.seen > 120 && (this.records.delete(tt.unit), this.freeSlots.push(tt.slot), tt.recorded && (this.bundleOf(tt).stale = !0) … [truncated]
```

#### 237. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2966` → after: `L2966`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2966) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2966) · [Before (L2966)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2966)

```diff
-           let TB = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (IB = null === (ZB = globalThis.navigator) || void 0 === ZB ? void 0 : ZB.userAgent) && void 0 !== IB ? IB : "";
+           let Ot = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null !== (et = null === (Vt = globalThis.navigator) || void 0 === Vt ? void 0 : Vt.userAgent) && void 0 !== et ? et : "";
```

#### 238. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2969` → after: `L2969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2969) · [Before (L2969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2969)

```diff
-         }(BB), (0, ro.F)(this.direct)
+         }(tt), (0, FD.Q)(this.direct)
```

#### 239. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2972` → after: `L2972`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2972) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2972) · [Before (L2972)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2972)

```diff
-         this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, ro.F)(this.directThisFrame)
+         this.frame++, this.drawn = 0, this.directThisFrame = this.direct, (0, FD.Q)(this.directThisFrame)
```

#### 240. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2979` → after: `L2979`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2979) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2979) · [Before (L2979)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2979)

```diff
-         return BB.gH ? this.gH : this.main
+         return tt.jR ? this.jR : this.main
```

#### 241. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2985` → after: `L2985`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2985) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2985) · [Before (L2985)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2985)

```diff
-         BB.seen = this.frame, BB.gH && null === BB.draw && (this.gH.stale = !0), BB.draw = IB, this.drawn++, ZB && this.slots.write(BB.slot, ZB, TB) && (this.slotsFrom = Math.min(this.slotsFrom, BB.slot), this.slotsTo = Math.max(this.slotsTo, BB.slot));
+         tt.seen = this.frame, tt.jR && null === tt.draw && (this.jR.stale = !0), tt.draw = et, this.drawn++, Vt && this.slots.write(tt.slot, Vt, Ot) && (this.slotsFrom = Math.min(this.slotsFrom, tt.slot), this.slotsTo = Math.max(this.slotsTo, tt.slot));
```

#### 242. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2988` → after: `L2988`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2988) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2988) · [Before (L2988)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2988)

```diff
-         JB[oB] === IB.count && JB[oB + 1] === IB.instances && JB[oB + 2] === IB.first || (JB[oB] = IB.count, JB[oB + 1] = IB.instances, JB[oB + 2] = IB.first, this.argsDirty = !0, this.gH.stale ||= BB.gH)
+         qt[Dt] === et.count && qt[Dt + 1] === et.instances && qt[Dt + 2] === et.first || (qt[Dt] = et.count, qt[Dt + 1] = et.instances, qt[Dt + 2] = et.first, this.argsDirty = !0, this.jR.stale ||= tt.jR)
```

#### 243. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2994` → after: `L2994`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2994) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2994) · [Before (L2994)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2994)

```diff
-         for (const IB of this.records.values()) IB.draw && IB.seen === this.frame && !IB.gH && BB(IB.draw, this.slots.data, IB.slot * cJ / 4)
+         for (const et of this.records.values()) et.draw && et.seen === this.frame && !et.jR && tt(et.draw, this.slots.data, et.slot * Xq / 4)
```

#### 244. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L2997` → after: `L2997`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R2997) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L2997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L2997) · [Before (L2997)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L2997)

```diff
-         this.main.stale ||= this.main.sv.has(BB), this.gH.stale ||= this.gH.sv.has(BB)
+         this.main.stale ||= this.main.Pd.has(tt), this.jR.stale ||= this.jR.Pd.has(tt)
```

#### 245. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3003-L3004` → after: `L3003-L3004`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3003-L3004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3003-L3004) · [Before (L3003-L3004)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3003-L3004)

```diff
-         if (!TB) return this.main.bundle = null, this.gH.bundle = null, this.recordedSceneGroup = null, this.encode(BB, IB, ZB, "direct"), this.drawn;
-         this.recordedTarget === ZB && this.recordedSceneGroup === TB || (this.recordedTarget = ZB, this.recordedSceneGroup = TB, this.main.stale = !0, this.gH.stale = !0);
+         if (!Ot) return this.main.bundle = null, this.jR.bundle = null, this.recordedSceneGroup = null, this.encode(tt, et, Vt, "direct"), this.drawn;
+         this.recordedTarget === Vt && this.recordedSceneGroup === Ot || (this.recordedTarget = Vt, this.recordedSceneGroup = Ot, this.main.stale = !0, this.jR.stale = !0);
```

#### 246. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3006` → after: `L3006`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3006) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3006) · [Before (L3006)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3006)

```diff
-           oB = this.gH;
+           Dt = this.jR;
```

#### 247. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3009-L3010` → after: `L3009-L3010`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3009) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3009-L3010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3009-L3010) · [Before (L3009-L3010)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3009-L3010)

```diff
-         const vB = (0, ro.j)();
-         return (oB.stale || this.rangedEpoch !== vB) && (this.rangedEpoch = vB, oB.bundle = this.drawsRanged() ? this.record(IB, ZB, TB, "gH") : this.noRangedBundle(), GB = !0), GB && (this.bundles = oB.bundle ? [JB.bundle, oB.bundle] : [JB.bundle]), BB.executeBundles(this.bundle … [truncated]
+         const dt = (0, FD.p)();
+         return (Dt.stale || this.rangedEpoch !== dt) && (this.rangedEpoch = dt, Dt.bundle = this.drawsRanged() ? this.record(et, Vt, Ot, "jR") : this.noRangedBundle(), mt = !0), mt && (this.bundles = Dt.bundle ? [qt.bundle, Dt.bundle] : [qt.bundle]), tt.executeBundles(this.bundle … [truncated]
```

#### 248. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3014` → after: `L3014`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3014) · [Before (L3014)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3014)

```diff
-           label: "gH" === TB ? "thin-bases-ranged" : "thin-bases",
+           label: "jR" === Ot ? "thin-bases-ranged" : "thin-bases",
```

#### 249. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3022-L3023` → after: `L3022-L3023`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3022-L3023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3022-L3023) · [Before (L3022-L3023)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3022-L3023)

```diff
-         for (const BB of this.records.values()) BB.gH && (BB.recorded = !1);
-         return this.gH.sv.clear(), this.gH.stale = !1, null
+         for (const tt of this.records.values()) tt.jR && (tt.recorded = !1);
+         return this.jR.Pd.clear(), this.jR.stale = !1, null
```

#### 250. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3027` → after: `L3027`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3027) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3027) · [Before (L3027)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3027)

```diff
-           if (BB.gH && BB.draw) return !0;
+           if (tt.jR && tt.draw) return !0;
```

#### 251. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3032` → after: `L3032`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3032) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3032) · [Before (L3032)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3032)

```diff
-         for (const kB of this.records.values()) "direct" !== TB && kB.gH !== ("gH" === TB) || (kB.recorded = !1, kB.draw && JB.push(kB));
+         for (const jt of this.records.values()) "direct" !== Ot && jt.jR !== ("jR" === Ot) || (jt.recorded = !1, jt.draw && qt.push(jt));
```

#### 252. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3034-L3035` → after: `L3034-L3035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3034-L3035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3034-L3035) · [Before (L3034-L3035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3034-L3035)

```diff
-         const oB = "direct" === TB ? null : "gH" === TB ? this.gH : this.main;
-         null === oB || void 0 === oB || oB.sv.clear(), this.binder.reset();
+         const Dt = "direct" === Ot ? null : "jR" === Ot ? this.jR : this.main;
+         null === Dt || void 0 === Dt || Dt.Pd.clear(), this.binder.reset();
```

#### 253. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3042` → after: `L3042`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3042) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3042) · [Before (L3042)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3042)

```diff
-             this.host.pipelineCompiling(JB, ZB) ? GB = !0 : oB && this.keep(kB, JB, oB.sv);
+             this.host.pipelineCompiling(qt, Vt) ? mt = !0 : Dt && this.keep(jt, qt, Dt.Pd);
```

#### 254. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3046` → after: `L3046`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3046) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3046) · [Before (L3046)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3046)

```diff
-           if (kB.gH && "indirect" !== TB) {
+           if (jt.jR && "indirect" !== Ot) {
```

#### 255. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3048` → after: `L3048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3048) · [Before (L3048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3048)

```diff
-             nB = "direct" === TB && (0, ro.r)(BB) || (0, ro.k)(BB) || void 0
+             Xt = "direct" === Ot && (0, FD.A)(tt) || (0, FD.s)(tt) || void 0
```

#### 256. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3050` → after: `L3050`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3050) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3050) · [Before (L3050)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3050)

```diff
-           if (oB && this.keep(kB, JB, oB.sv), 0 === (null === (vB = nB) || void 0 === vB ? void 0 : vB.count)) continue;
+           if (Dt && this.keep(jt, qt, Dt.Pd), 0 === (null === (dt = Xt) || void 0 === dt ? void 0 : dt.count)) continue;
```

#### 257. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3073` → after: `L3073`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3073) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3073) · [Before (L3073)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3073)

```diff
-           gH: void 0 !== (0, ro.k)(BB.owner),
+           jR: void 0 !== (0, FD.s)(tt.owner),
```

#### 258. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3086` → after: `L3086`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3086) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3086) · [Before (L3086)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3086)

```diff
-         if (this.slots.ensure(this.slotCount) && (this.slotsFrom = 0, this.slotsTo = this.slotCount - 1, this.main.stale = !0, this.gH.stale = !0), 5 * this.slotCount > this.args.length) {
+         if (this.slots.ensure(this.slotCount) && (this.slotsFrom = 0, this.slotsTo = this.slotCount - 1, this.main.stale = !0, this.jR.stale = !0), 5 * this.slotCount > this.args.length) {
```

#### 259. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3129` → after: `L3129`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3129) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3129) · [Before (L3129)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3129)

```diff
-       const TB = `${IB.depth?"-depth":""}${IB.sunShadow?"-shadow":""}${IB.shadowMask?"-mask":""}`;
+       const Ot = `${et.depth?"-depth":""}${et.sunShadow?"-shadow":""}${et.shadowMask?"-mask":""}`;
```

#### 260. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3140` → after: `L3140`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3140) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3140) · [Before (L3140)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3140)

```diff
-           binding: DI.w,
+           binding: ge.v,
```

#### 261. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3162` → after: `L3162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3162) · [Before (L3162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3162)

```diff
-             binding: IB.mz,
+             binding: et.hl,
```

#### 262. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3200` → after: `L3200`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3200) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3200) · [Before (L3200)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3200)

```diff
-           binding: DI.u,
+           binding: ge.t,
```

#### 263. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3206` → after: `L3206`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3206) · [Before (L3206)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3206)

```diff
-           label: `${IB.depth?"terrain-":""}shader-pack-inputs${TB}`,
+           label: `${et.depth?"terrain-":""}shader-pack-inputs${Ot}`,
```

#### 264. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3241` → after: `L3241`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3241) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3241) · [Before (L3241)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3241)

```diff
-         const TB = (0, DI.A)(IB);
+         const Ot = (0, ge.w)(et);
```

#### 265. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3259` → after: `L3259`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3259) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3259) · [Before (L3259)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3259)

```diff
-           binding: DI.w,
+           binding: ge.v,
```

#### 266. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3266` → after: `L3266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3266) · [Before (L3266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3266)

```diff
-         (0, DI.D)(this.data, {
+         (0, ge.E)(this.data, {
```

#### 267. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3270` → after: `L3270`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3270) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3270) · [Before (L3270)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3270)

```diff
-           WBB: BB.WBB(),
+           jtt: tt.jtt(),
```

#### 268. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3280` → after: `L3280`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3280) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3280) · [Before (L3280)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3280)

```diff
-         (BB && BB !== this.depthView || ZB && ZB !== this.maskView) && (this.depthView = null !== BB && void 0 !== BB ? BB : this.depthView, this.maskView = null !== ZB && void 0 !== ZB ? ZB : this.maskView, this.groups.clear());
+         (tt && tt !== this.depthView || Vt && Vt !== this.maskView) && (this.depthView = null !== tt && void 0 !== tt ? tt : this.depthView, this.maskView = null !== Vt && void 0 !== Vt ? Vt : this.maskView, this.groups.clear());
```

#### 269. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3289` → after: `L3289`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3289) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3289) · [Before (L3289)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3289)

```diff
-             binding: DI.u,
+             binding: ge.t,
```

#### 270. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3292` → after: `L3292`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3292) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3292) · [Before (L3292)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3292)

```diff
-             label: `${BB||ZB?"terrain-":""}shader-pack-inputs${BB?"-depth":""}${TB?"-shadow":""}${ZB?"-mask":""}`,
+             label: `${tt||Vt?"terrain-":""}shader-pack-inputs${tt?"-depth":""}${Ot?"-shadow":""}${Vt?"-mask":""}`,
```

#### 271. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3327-L3328` → after: `L3327-L3328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3327) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3327-L3328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3327-L3328) · [Before (L3327-L3328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3327-L3328)

```diff
-         const kB = BB.O4[oB] + (GB ? IB.gpuOffset(GB) : 0);
-         kB !== (null !== (JB = TB) && void 0 !== JB ? JB : BB.offsets)[oB] && (TB ??= BB.offsets.slice(), TB[oB] = kB), BB.ends[oB] = GB ? IB.gpuEnd(GB) : vB.size
+         const jt = tt.F_[Dt] + (mt ? et.gpuOffset(mt) : 0);
+         jt !== (null !== (qt = Ot) && void 0 !== qt ? qt : tt.offsets)[Dt] && (Ot ??= tt.offsets.slice(), Ot[Dt] = jt), tt.ends[Dt] = mt ? et.gpuEnd(mt) : dt.size
```

#### 272. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3340` → after: `L3340`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3340) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3340) · [Before (L3340)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3340)

```diff
-         O4: kB
+         F_: jt
```

#### 273. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3356-L3357` → after: `L3356-L3357`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3356) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3356-L3357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3356-L3357) · [Before (L3356-L3357)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3356-L3357)

```diff
-     var BG = ZB(37869),
-       IG = ZB(37901);
+     var nD = Vt(38068),
+       tm = Vt(38105);
```

#### 274. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3361` → after: `L3361`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3361) · [Before (L3361)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3361)

```diff
-       oG = `((vertexInputs.aPackedLightLevels >> 16u) | ${HI.d.placed}u)`,
+       qm = `((vertexInputs.aPackedLightLevels >> 16u) | ${Ie.b.placed}u)`,
```

#### 275. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3363` → after: `L3363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3363) · [Before (L3363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3363)

```diff
-       vG = `${HI.d.lifeform}u`;
+       mm = `${Ie.b.lifeform}u`;
```

#### 276. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3399` → after: `L3399`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3399) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3399) · [Before (L3399)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3399)

```diff
-           vertexFlags: `(${GG} & 0xffffu)`,
+           vertexFlags: `(${Dm} & 0xffffu)`,
```

#### 277. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3416` → after: `L3416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3416) · [Before (L3416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3416)

```diff
-       return "lifeform" === BB.kind ? vG : "0u"
+       return "lifeform" === tt.kind ? mm : "0u"
```

#### 278. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3427` → after: `L3427`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3427) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3427) · [Before (L3427)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3427)

```diff
-       return ZB && qG(IB.defines) && "lifeform" === IB.kind && sG(BB, "enchantTier") ? ZB : null
+       return Vt && wm(et.defines) && "lifeform" === et.kind && Cm(tt, "enchantTier") ? Vt : null
```

#### 279. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3441` → after: `L3441`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3441) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3441) · [Before (L3441)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3441)

```diff
-       return `vec4f(${IB.colour}.rgb * uniforms.vDiffuseInfos.y${TB?" * fragmentInputs.vColor.rgb":""}, ${IB.colour}.a)`
+       return `vec4f(${et.colour}.rgb * uniforms.vDiffuseInfos.y${Ot?" * fragmentInputs.vColor.rgb":""}, ${et.colour}.a)`
```

#### 280. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3460` → after: `L3460`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3460) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3460) · [Before (L3460)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3460)

```diff
-         uv: `fragmentInputs.${1===ZB.DIFFUSEDIRECTUV?"vMainUV1":2===ZB.DIFFUSEDIRECTUV?"vMainUV2":"vDiffuseUV"}`
+         uv: `fragmentInputs.${1===Vt.DIFFUSEDIRECTUV?"vMainUV1":2===Vt.DIFFUSEDIRECTUV?"vMainUV2":"vDiffuseUV"}`
```

#### 281. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3468-L3469` → after: `L3468-L3469`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3468) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3468-L3469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3468-L3469) · [Before (L3468-L3469)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3468-L3469)

```diff
-         GB = (0, QB.Hb)(oB, "uAnimStatesNum"),
-         vB = (0, QB.db)(oB, (0, BG.f)(oB), GB),
+         mt = (0, ut.vb)(Dt, "uAnimStatesNum"),
+         dt = (0, ut._)(Dt, (0, nD.i)(Dt), mt),
```

#### 282. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3473` → after: `L3473`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3473) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3473) · [Before (L3473)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3473)

```diff
-         cells: `vec2f(1.0, ${GB})`,
+         cells: `vec2f(1.0, ${mt})`,
```

#### 283. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3475` → after: `L3475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3475) · [Before (L3475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3475)

```diff
-         uv: `vec2f(${kB}.x, ${kB}.y * ${GB} - ${vB})`,
+         uv: `vec2f(${jt}.x, ${jt}.y * ${mt} - ${dt})`,
```

#### 284. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3498` → after: `L3498`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3498) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3498) · [Before (L3498)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3498)

```diff
-       if (1 !== JB.length) throw new Error(`A model program for shader packs has ${0===JB.length?"no":"more than one"} ${TB} code before fog (lite/modelShaderPack.ts)`);
+       if (1 !== qt.length) throw new Error(`A model program for shader packs has ${0===qt.length?"no":"more than one"} ${Ot} code before fog (lite/modelShaderPack.ts)`);
```

#### 285. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3510` → after: `L3510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3510) · [Before (L3510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3510)

```diff
-       IB.atlas && JB.surface && vB.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", zT("atlasIdxIn")]), "item" === oB && vB.push(["CUSTOM_VERTEX_DEFINITIONS", (0, QB.g)(QB.c.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS … [truncated]
+       et.atlas && qt.surface && dt.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackTexture: u32;"], ["CUSTOM_VERTEX_MAIN_END", EO("atlasIdxIn")]), "item" === Dt && dt.push(["CUSTOM_VERTEX_DEFINITIONS", (0, ut.d)(ut.c.WGSL, "aShaderPackItem", "vec4")], ["CUSTOM_VERTEX_DEFINITIONS … [truncated]
```

#### 286. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3512` → after: `L3512`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3512) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3512) · [Before (L3512)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3512)

```diff
-       cB && (JB.surface || JB.light) && vB.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${cB.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${cB.varying} = ${cB.value};`]);
+       Ht && (qt.surface || qt.light) && dt.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${Ht.varying}: u32;`], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.${Ht.varying} = ${Ht.value};`]);
```

#### 287. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3514` → after: `L3514`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3514) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3514) · [Before (L3514)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3514)

```diff
-       if (hG(BB, IB, "fragment") && (vB.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${nG});`]), nB = [...nB, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), sG(BB, … [truncated]
+       if (Xm(tt, et, "fragment") && (dt.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackCell: vec3i;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackCell = vec3i(${Hm});`]), Xt = [...Xt, ["CUSTOM_FRAGMENT_MAIN_BEGIN", "bloxdSpCell = vec3f(fragmentInputs.vPackCell);"]]), Cm(tt, … [truncated]
```

#### 288. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3517-L3519` → after: `L3517-L3519`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3517) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3517-L3519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3517-L3519) · [Before (L3517-L3519)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3517-L3519)

```diff
-         ZB && vB.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${ZB});`]);
-         const TB = (0, QB.rb)(QB.c.WGSL, "color", "mix(color.xyz, bloxdSpSurface.enchantColour.rgb, bloxdSpSurface.enchantColour.a)");
-         nB = [...OG(nB, (0, IG.h)(QB.c.WGSL), TB, "enchantment"), ["CUSTOM_FRAGMENT_DEFINITIONS", (0, IG.b)(cG)]]
+         Vt && dt.push(["CUSTOM_VERTEX_DEFINITIONS", "varying vPackEnchantTier: u32;"], ["CUSTOM_VERTEX_MAIN_END", `vertexOutputs.vPackEnchantTier = u32(${Vt});`]);
+         const Ot = (0, ut.ib)(ut.c.WGSL, "color", "mix(color.xyz, bloxdSpSurface.enchantColour.rgb, bloxdSpSurface.enchantColour.a)");
+         Xt = [...Km(Xt, (0, tm.e)(ut.c.WGSL), Ot, "enchantment"), ["CUSTOM_FRAGMENT_DEFINITIONS", (0, tm.c)(jm)]]
```

#### 289. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3528-L3529` → after: `L3528-L3529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3528) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3528-L3529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3528-L3529) · [Before (L3528-L3529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3528-L3529)

```diff
-           engine: (0, bI.N)(QB.c.WGSL),
-           pack: (0, bI.hb)(QB.c.WGSL)
+           engine: (0, pe.J)(ut.c.WGSL),
+           pack: (0, pe.cb)(ut.c.WGSL)
```

#### 290. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3533` → after: `L3533`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3533) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3533) · [Before (L3533)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3533)

```diff
-           pack: (0, bI.eb)(QB.c.WGSL)
+           pack: (0, pe.X)(ut.c.WGSL)
```

#### 291. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3536-L3538` → after: `L3536-L3538`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3536) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3536-L3538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3536-L3538) · [Before (L3536-L3538)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3536-L3538)

```diff
-       if (zB && (nB = OG(nB, zB.engine, zB.pack, `${zB.name} light`), "placed" !== oB && wG(GB))) {
-         const BB = GB.BLOXD_UNIFORM_ENTITY_LIGHT ? (0, QB.Hb)(QB.c.WGSL, "uEntityLightLevels") : (0, QB.Pb)(QB.c.WGSL, "aLightLevels");
-         vB.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${bI.b}: vec4f;`], ["CUSTOM_VERTEX_MAIN_END", (0, bI.gb)(QB.c.WGSL, BB)])
+       if (lt && (Xt = Km(Xt, lt.engine, lt.pack, `${lt.name} light`), "placed" !== Dt && um(mt))) {
+         const tt = mt.BLOXD_UNIFORM_ENTITY_LIGHT ? (0, ut.vb)(ut.c.WGSL, "uEntityLightLevels") : (0, ut.Ab)(ut.c.WGSL, "aLightLevels");
+         dt.push(["CUSTOM_VERTEX_DEFINITIONS", `varying ${pe.b}: vec4f;`], ["CUSTOM_VERTEX_MAIN_END", (0, pe.$)(ut.c.WGSL, tt)])
```

#### 292. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3553` → after: `L3553`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3553) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3553) · [Before (L3553)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3553)

```diff
-       return `${ZB}${IB}${BB.slice(ZB.length)}`
+       return `${Vt}${et}${tt.slice(Vt.length)}`
```

#### 293. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3567` → after: `L3567`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3567) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3567) · [Before (L3567)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3567)

```diff
-         } = IB, GB = NG(IB), vB = !!oB.FOG, kB = qG(oB), cB = null !== (ZB = null === GB || void 0 === GB ? void 0 : GB.enchantTier) && void 0 !== ZB ? ZB : yG(BB, IB) ? "fragmentInputs.vPackEnchantTier" : "0u", nB = "lifeform" === IB.kind && !oB.ALPHAFROMDIFFUSE;
+         } = et, mt = Em(et), dt = !!Dt.FOG, jt = wm(Dt), Ht = null !== (Vt = null === mt || void 0 === mt ? void 0 : mt.enchantTier) && void 0 !== Vt ? Vt : ym(tt, et) ? "fragmentInputs.vPackEnchantTier" : "0u", Xt = "lifeform" === et.kind && !Dt.ALPHAFROMDIFFUSE;
```

#### 294. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3569` → after: `L3569`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3569) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3569) · [Before (L3569)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3569)

```diff
-           vertexFlags: null !== (TB = null === GB || void 0 === GB ? void 0 : GB.vertexFlags) && void 0 !== TB ? TB : gG(IB),
+           vertexFlags: null !== (Ot = null === mt || void 0 === mt ? void 0 : mt.vertexFlags) && void 0 !== Ot ? Ot : fm(et),
```

#### 295. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3571` → after: `L3571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3571) · [Before (L3571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3571)

```diff
-           flags: null !== (JB = null === GB || void 0 === GB ? void 0 : GB.flags) && void 0 !== JB ? JB : gG(IB),
+           flags: null !== (qt = null === mt || void 0 === mt ? void 0 : mt.flags) && void 0 !== qt ? qt : fm(et),
```

#### 296. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3582` → after: `L3582`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3582) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3582) · [Before (L3582)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3582)

```diff
-           enchantColour: kB ? `${cG}(fragmentInputs.vEnchantRgbAndRotY, fragmentInputs.vPositionAndAnimTick, baseColor.rgb)` : "vec4f(0.0)",
+           enchantColour: jt ? `${jm}(fragmentInputs.vEnchantRgbAndRotY, fragmentInputs.vPositionAndAnimTick, baseColor.rgb)` : "vec4f(0.0)",
```

#### 297. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3595` → after: `L3595`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3595) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3595) · [Before (L3595)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3595)

```diff
-             Iz: "frame.animTick",
+             BQ: "frame.animTick",
```

#### 298. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3598` → after: `L3598`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3598) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3598) · [Before (L3598)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3598)

```diff
-             perTexture: BB => `uniforms.uAnimDataPerTex[${BB}]${IB}`
+             perTexture: tt => `uniforms.uAnimDataPerTex[${tt}]${et}`
```

#### 299. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3601` → after: `L3601`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3601) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3601) · [Before (L3601)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3601)

```diff
-       } : null, hB = "placed" === GB ? "var<private> bloxdSpCell: vec3f;\nfn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\tlet bloxdSpBehind = bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0);\n\tlet bloxdSpInside = all(abs(bloxdSpBehind - b … [truncated]
+       } : null, Qt = "placed" === mt ? "var<private> bloxdSpCell: vec3f;\nfn bloxdFragmentBlockPosition(bloxdSpPosition: vec3f, bloxdSpNormal: vec3f) -> vec3i {\n\tlet bloxdSpBehind = bloxdSpPosition - bloxdSpNormal * (1.0 / 64.0);\n\tlet bloxdSpInside = all(abs(bloxdSpBehind - b … [truncated]
```

#### 300. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3603` → after: `L3603`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3603) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3603) · [Before (L3603)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3603)

```diff
-         return `${(0,DI.B)()}${vT(IB,ZB)}${TB}${NT(BB)}${BT}${hB}${IB.code}`
+         return `${(0,ge.A)()}${jO(et,Vt)}${Ot}${wO(tt)}${eO}${Qt}${et.code}`
```

#### 301. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3611-L3612` → after: `L3611-L3612`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3611) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3611-L3612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3611-L3612) · [Before (L3611-L3612)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3611-L3612)

```diff
-         const BB = hG(IB, ZB, "vertex") ? `\tbloxdSpCell = ${nG};\n` : "";
-         NB = iG(NB, ZG, `${BB}${qB.slice(1)}${ZG}`, "vertex")
+         const tt = Xm(et, Vt, "vertex") ? `\tbloxdSpCell = ${Hm};\n` : "";
+         ft = Wm(ft, em, `${tt}${yt.slice(1)}${em}`, "vertex")
```

#### 302. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3614-L3615` → after: `L3614-L3615`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3614) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3614-L3615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3614-L3615) · [Before (L3614-L3615)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3614-L3615)

```diff
-       const yB = `${kT(IB,oB,function(BB,IB){return IB.TWOSIDEDLIGHTING?BB:`select(-(${BB}), ${BB}, fragmentInputs.frontFacing)`}(kB.normal,vB),kB.flags)}${yT(JB,IB.strict,IB.program,zB,kB)}`;
-       yB && (gB = iG(gB, TG, `${yB.slice(1)}${TG}`, "surface")), oB && IB.sunShadow && !vB.TWOSIDEDLIGHTING && (gB = iG(gB, pG, `${pG}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
+       const Nt = `${HO(et,Dt,function(tt,et){return et.TWOSIDEDLIGHTING?tt:`select(-(${tt}), ${tt}, fragmentInputs.frontFacing)`}(jt.normal,dt),jt.flags)}${aO(qt,et.strict,et.program,lt,jt)}`;
+       Nt && (wt = Wm(wt, Vm, `${Nt.slice(1)}${Vm}`, "surface")), Dt && et.sunShadow && !dt.TWOSIDEDLIGHTING && (wt = Wm(wt, Sm, `${Sm}\t@builtin(front_facing) frontFacing: bool,\n`, "front facing"));
```

#### 303. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3619` → after: `L3619`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3619) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3619) · [Before (L3619)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3619)

```diff
-         gB = iG(gB, JG, `${BB}${UB.slice(1)}${JG}`, "light")
+         wt = Wm(wt, Om, `${tt}${Mt.slice(1)}${Om}`, "light")
```

#### 304. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3621` → after: `L3621`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3621) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3621) · [Before (L3621)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3621)

```diff
-       const WB = QG(IB, ZB) ? hT : "";
+       const bt = Jm(et, Vt) ? lO : "";
```

#### 305. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3649` → after: `L3649`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3649) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3649) · [Before (L3649)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3649)

```diff
-         this.device = BB, this.resources = IB, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.Z4 = void 0, this.modelMeshes = void 0, this.thinBundle = void 0, this.binder = new VJ, this.sc … [truncated]
+         this.device = tt, this.resources = et, this.skyLastRenderable = void 0, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.frontRenderable = void 0, this.R_ = void 0, this.modelMeshes = void 0, this.thinBundle = void 0, this.binder = new nq, this.sc … [truncated]
```

#### 306. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3676` → after: `L3676`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3676) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3676) · [Before (L3676)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3676)

```diff
-           pipelineCompiling: (BB, IB) => !BB.program.failed && !1 !== this.pipelines.get(`${BB.pipelineKey}|${IB}`),
+           pipelineCompiling: (tt, et) => !tt.program.failed && !1 !== this.pipelines.get(`${tt.pipelineKey}|${et}`),
```

#### 307. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3701-L3703` → after: `L3701-L3703`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3701) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3701-L3703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3701-L3703) · [Before (L3701-L3703)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3701-L3703)

```diff
-         this.frame++, this.view = IB, this.drawDefines.view = IB, this.thinBundle.dW(), this.writeFrameUniforms();
-         const oB = null !== (TB = null === JB || void 0 === JB ? void 0 : JB.defineFor("model")) && void 0 !== TB ? TB : 0;
-         this.drawDefines.modelPackVariant = oB, JB && 0 !== oB && (this.packInputs ??= new Do(this.device, JB.textureLayers(), this.sunShadow), this.packInputs.write(JB, IB.eye, JB.Xg())), this.lists.clear(), this.slotCount = 0;
+         this.frame++, this.view = et, this.drawDefines.view = et, this.thinBundle.QJ(), this.writeFrameUniforms();
+         const Dt = null !== (Ot = null === qt || void 0 === qt ? void 0 : qt.defineFor("model")) && void 0 !== Ot ? Ot : 0;
+         this.drawDefines.modelPackVariant = Dt, qt && 0 !== Dt && (this.packInputs ??= new xD(this.device, qt.textureLayers(), this.sunShadow), this.packInputs.write(qt, et.eye, qt.Rw())), this.lists.clear(), this.slotCount = 0;
```

#### 308. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3705` → after: `L3705`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3705) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3705) · [Before (L3705)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3705)

```diff
-         this.Z4.select(GB, this.keepSteadyBase), this.modelMeshes.select(GB, IB), ZB && this.pushEarthSky(ZB), this.lists.collect(BB), this.thinBundle.OW(), this.uploadMeshSlots()
+         this.R_.select(mt, this.keepSteadyBase), this.modelMeshes.select(mt, et), Vt && this.pushEarthSky(Vt), this.lists.collect(tt), this.thinBundle.yJ(), this.uploadMeshSlots()
```

#### 309. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3736` → after: `L3736`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3736) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3736) · [Before (L3736)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3736)

```diff
-           JB = this.Z4.base(TB),
+           qt = this.R_.base(Ot),
```

#### 310. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3770-L3772` → after: `L3770-L3772`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3770) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3770-L3772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3770-L3772) · [Before (L3770-L3772)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3770-L3772)

```diff
-           kB = TB.forcedInstanceCount || TB.B3;
-         if (!TB.isVisible || TB.sJB || TB.visibility !== ZB.visibility || 0 === (TB.layerMask & IB.layerMask) || TB.material !== ZB.material || 0 !== TB.renderingGroupId || TB.hasVertexAlpha || !this.drawDefines.definesHold(vB, JB, vB.instancing) || ZB.gpuVersion !== this.resourc … [truncated]
-         if (GB.frame !== this.frame && this.bindMaterial(GB, this.modelUniforms.refreshModelUniforms(TB.JR(), GB, GB.model, this.view)), !GB.bindable || GB.bindGroup !== ZB.bindGroup) return !1;
+           jt = Ot.forcedInstanceCount || Ot.r_;
+         if (!Ot.isVisible || Ot.cqt || Ot.visibility !== Vt.visibility || 0 === (Ot.layerMask & et.layerMask) || Ot.material !== Vt.material || 0 !== Ot.renderingGroupId || Ot.hasVertexAlpha || !this.drawDefines.definesHold(dt, qt, dt.instancing) || Vt.gpuVersion !== this.resourc … [truncated]
+         if (mt.frame !== this.frame && this.bindMaterial(mt, this.modelUniforms.refreshModelUniforms(Ot.vI(), mt, mt.model, this.view)), !mt.bindable || mt.bindGroup !== Vt.bindGroup) return !1;
```

#### 311. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3775` → after: `L3775`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3775) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3775) · [Before (L3775)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3775)

```diff
-         return ZB.worldFlag = cB.updateFlag, oB.instances = kB, this.thinBundle.addAgain(ZB.record, oB, nB ? cB.m : null, ZB.visibility), ZB.handedFrame = this.frame, this.Z4.drawn++, !0
+         return Vt.worldFlag = Ht.updateFlag, Dt.instances = jt, this.thinBundle.addAgain(Vt.record, Dt, Xt ? Ht.m : null, Vt.visibility), Vt.handedFrame = this.frame, this.R_.drawn++, !0
```

#### 312. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3833` → after: `L3833`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3833) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3833) · [Before (L3833)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3833)

```diff
-             }(oB)) return this.warnOnce(`lines:${GB}`, `A LinesMesh with a ${GB} is not drawn yet (${oB.name})`), null;
+             }(Dt)) return this.warnOnce(`lines:${mt}`, `A LinesMesh with a ${mt} is not drawn yet (${Dt.name})`), null;
```

#### 313. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3835` → after: `L3835`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3835) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3835) · [Before (L3835)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3835)

```diff
-         } else if ("StandardMaterial" !== GB && "LiteMaterial" !== GB) return this.warnOnce(`class:${GB}`, `${GB} is not drawn yet (${oB.name})`), null;
+         } else if ("StandardMaterial" !== mt && "LiteMaterial" !== mt) return this.warnOnce(`class:${mt}`, `${mt} is not drawn yet (${Dt.name})`), null;
```

#### 314. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3850` → after: `L3850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3850) · [Before (L3850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3850)

```diff
-         const yB = this.renderStates.renderState(null !== hB && void 0 !== hB ? hB : oB, JB, TB, NB.state, vB ? "line-list" : "triangle-list"),
+         const Nt = this.renderStates.renderState(null !== Qt && void 0 !== Qt ? Qt : Dt, qt, Ot, ft.state, dt ? "line-list" : "triangle-list"),
```

#### 315. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3861` → after: `L3861`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3861) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3861) · [Before (L3861)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3861)

```diff
-         BB.unit = IB, BB.first = IB.parts.vq[JB], BB.count = IB.parts.vq[JB + 1]
+         tt.unit = et, tt.first = et.parts.nw[qt], tt.count = et.parts.nw[qt + 1]
```

#### 316. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3864` → after: `L3864`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3864) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3864) · [Before (L3864)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3864)

```diff
-         IB.state !== ZB && (IB.state = ZB, IB.pipelineKey = `${BB.id}|${IB.layout.key}|${ZB.key}`, IB.pipeline = null);
+         et.state !== Vt && (et.state = Vt, et.pipelineKey = `${tt.id}|${et.layout.key}|${Vt.key}`, et.pipeline = null);
```

#### 317. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3887` → after: `L3887`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3887) · [Before (L3887)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3887)

```diff
-             return BB.forcedInstanceCount || BB.B3;
+             return tt.forcedInstanceCount || tt.r_;
```

#### 318. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3900` → after: `L3900`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3900) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3900) · [Before (L3900)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3900)

```diff
-             if (TB.layout === (null !== (JB = null === ZB || void 0 === ZB ? void 0 : ZB.interleavedKinds) && void 0 !== JB ? JB : null)) return TB;
+             if (Ot.layout === (null !== (qt = null === Vt || void 0 === Vt ? void 0 : Vt.interleavedKinds) && void 0 !== qt ? qt : null)) return Ot;
```

#### 319. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3912` → after: `L3912`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3912) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3912) · [Before (L3912)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3912)

```diff
-             const JB = (0, OB.v)(BB, sB.g.name),
+             const qt = (0, vt.s)(tt, Kt.j.name),
```

#### 320. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3921` → after: `L3921`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3921) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3921) · [Before (L3921)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3921)

```diff
-               const BB = nB ? null === (GB = (vB = (0, jI.h)(kB)).oN) || void 0 === GB ? void 0 : GB.call(vB, cB) : void 0;
+               const tt = Xt ? null === (mt = (dt = (0, Ze.g)(jt)).YE) || void 0 === mt ? void 0 : mt.call(dt, Ht) : void 0;
```

#### 321. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3926` → after: `L3926`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3926) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3926) · [Before (L3926)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3926)

```diff
-               atlas: null !== JB && void 0 !== JB && JB.active ? (0, sB.b)(JB.state) : null,
+               atlas: null !== qt && void 0 !== qt && qt.active ? (0, Kt.c)(qt.state) : null,
```

#### 322. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3935` → after: `L3935`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3935) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3935) · [Before (L3935)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3935)

```diff
-           const ZB = this.modelPackProgram(BB, IB, `${JB}#${oB}#sp${this.drawDefines.modelPackVariant}`, TB, GB);
+           const Vt = this.modelPackProgram(tt, et, `${qt}#${Dt}#sp${this.drawDefines.modelPackVariant}`, Ot, mt);
```

#### 323. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3939` → after: `L3939`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3939) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3939) · [Before (L3939)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3939)

```diff
-         if (vB || this.unbuildable.has(JB)) return null !== vB && void 0 !== vB ? vB : null;
+         if (dt || this.unbuildable.has(qt)) return null !== dt && void 0 !== dt ? dt : null;
```

#### 324. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3949` → after: `L3949`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3949) · [Before (L3949)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3949)

```diff
-           return this.unbuildable.add(JB), this.warnOnce(`build:${JB}`, `could not build a program for ${BB.name}: ${String(cB)}`), null
+           return this.unbuildable.add(qt), this.warnOnce(`build:${qt}`, `could not build a program for ${tt.name}: ${String(Ht)}`), null
```

#### 325. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3955` → after: `L3955`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3955) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3955) · [Before (L3955)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3955)

```diff
-         if (oB || this.unbuildable.has(ZB)) return null !== oB && void 0 !== oB ? oB : null;
+         if (Dt || this.unbuildable.has(Vt)) return null !== Dt && void 0 !== Dt ? Dt : null;
```

#### 326. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3969` → after: `L3969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3969) · [Before (L3969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3969)

```diff
-           return this.unbuildable.add(ZB), this.warnOnce(`build:${ZB}`, `could not build a shader pack program for ${BB.name}, which draws without the pack: ${String(nB)}`), null
+           return this.unbuildable.add(Vt), this.warnOnce(`build:${Vt}`, `could not build a shader pack program for ${tt.name}, which draws without the pack: ${String(Xt)}`), null
```

#### 327. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3980` → after: `L3980`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3980) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3980) · [Before (L3980)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3980)

```diff
-           return `standard-sp${BB}`
+           return `standard-sp${tt}`
```

#### 328. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L3987` → after: `L3987`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R3987) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L3987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L3987) · [Before (L3987)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L3987)

```diff
-         return JB || (JB = this.createProgram(`lines#${TB}`, (oB = function(BB) {
+         return qt || (qt = this.createProgram(`lines#${Ot}`, (Dt = function(tt) {
```

#### 329. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4003` → after: `L4003`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4003) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L4003) · [Before (L4003)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L4003)

```diff
-           GB = `${ZB}-${oB}`,
+           mt = `${Vt}-${Dt}`,
```

#### 330. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4033` → after: `L4033`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4033) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L4033) · [Before (L4033)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L4033)

```diff
-               label: `${GB}-vertex`,
+               label: `${mt}-vertex`,
```

#### 331. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4037` → after: `L4037`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4037) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L4037) · [Before (L4037)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L4037)

```diff
-               label: `${GB}-fragment`,
+               label: `${mt}-fragment`,
```

#### 332. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4045` → after: `L4045`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4045) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L4045) · [Before (L4045)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L4045)

```diff
-             packGroup: null !== (TB = null === JB || void 0 === JB ? void 0 : JB.group) && void 0 !== TB ? TB : null,
+             packGroup: null !== (Ot = null === qt || void 0 === qt ? void 0 : qt.group) && void 0 !== Ot ? Ot : null,
```

#### 333. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4063` → after: `L4063`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4063) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L4063) · [Before (L4063)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L4063)

```diff
-           BB.oR.addOnce((() => {
+           tt.ZI.addOnce((() => {
```

#### 334. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4078-L4079` → after: `L4078-L4079`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4078) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4078-L4079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L4078-L4079) · [Before (L4078-L4079)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L4078-L4079)

```diff
-         let ZB = BB.gpu[iB.f.lite];
-         return (null === (IB = ZB) || void 0 === IB ? void 0 : IB.epoch) !== this.resources.epoch && (ZB = new jG(this.resources, this.resources.epoch), BB.gpu[iB.f.lite] = ZB), ZB
+         let Vt = tt.gpu[St.i.lite];
+         return (null === (et = Vt) || void 0 === et ? void 0 : et.epoch) !== this.resources.epoch && (Vt = new Pm(this.resources, this.resources.epoch), tt.gpu[St.i.lite] = Vt), Vt
```

#### 335. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4092` → after: `L4092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L4092) · [Before (L4092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L4092)

```diff
-             label: `${BB.name}-uniforms`,
+             label: `${tt.name}-uniforms`,
```

#### 336. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4119` → after: `L4119`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4119) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L4119) · [Before (L4119)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L4119)

```diff
-         const oB = null !== (IB = JB.state) && void 0 !== IB ? IB : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
+         const Dt = null !== (et = qt.state) && void 0 !== et ? et : this.renderStates.stateFor(0, !1, 0, "none", "cw", 0, 0, !0, "triangle-list"),
```

#### 337. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4146` → after: `L4146`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4146) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L4146) · [Before (L4146)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L4146)

```diff
-           vB ? ZB[2 * GB] === vB.view && ZB[2 * GB + 1] === vB.sampler || (ZB[2 * GB] = vB.view, ZB[2 * GB + 1] = vB.sampler, JB = !0) : (IB || BB.ubo.expected.has(TB[GB].name) || this.warnOnce(`texture:${BB.owner.name}:${TB[GB].name}`, `${BB.owner.name} has no ${TB[GB].name}`),  … [truncated]
+           dt ? Vt[2 * mt] === dt.view && Vt[2 * mt + 1] === dt.sampler || (Vt[2 * mt] = dt.view, Vt[2 * mt + 1] = dt.sampler, qt = !0) : (et || tt.ubo.expected.has(Ot[mt].name) || this.warnOnce(`texture:${tt.owner.name}:${Ot[mt].name}`, `${tt.owner.name} has no ${Ot[mt].name}`),  … [truncated]
```

#### 338. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4164` → after: `L4164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L4164) · [Before (L4164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L4164)

```diff
-             label: `${BB.owner.name}-material`,
+             label: `${tt.owner.name}-material`,
```

#### 339. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4182` → after: `L4182`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4182) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L4182) · [Before (L4182)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L4182)

```diff
-           if (oB = null !== (GB = this.vertexLayouts.resolveInputs(IB, ZB, TB, JB)) && void 0 !== GB ? GB : void 0, !oB) return null;
+           if (Dt = null !== (mt = this.vertexLayouts.resolveInputs(et, Vt, Ot, qt)) && void 0 !== mt ? mt : void 0, !Dt) return null;
```

#### 340. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4201` → after: `L4201`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4201) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L4201) · [Before (L4201)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L4201)

```diff
-         return Ko(BB, this.resources, this.zeroBuffer) ? BB : null
+         return TD(tt, this.resources, this.zeroBuffer) ? tt : null
```

#### 341. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4206-L4207` → after: `L4206-L4207`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4206) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4206-L4207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L4206-L4207) · [Before (L4206-L4207)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L4206-L4207)

```diff
-           const JB = IB.ends[TB.index] - IB.offsets[TB.index] + IB.O4[TB.index];
-           return this.warnOnce(`overrun:${BB}`, `${BB} draws ${ZB} instances from a ${JB}-byte buffer (${TB.needed} needed)`), !1
+           const qt = et.ends[Ot.index] - et.offsets[Ot.index] + et.F_[Ot.index];
+           return this.warnOnce(`overrun:${tt}`, `${tt} draws ${Vt} instances from a ${qt}-byte buffer (${Ot.needed} needed)`), !1
```

#### 342. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4212` → after: `L4212`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4212) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L4212) · [Before (L4212)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L4212)

```diff
-         const JB = `${IB._colorFormat}|${IB._depthStencilFormat}|${IB._depthCompare}|${IB._sampleCount}`,
+         const qt = `${et._colorFormat}|${et._depthStencilFormat}|${et._depthCompare}|${et._sampleCount}`,
```

#### 343. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4236` → after: `L4236`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4236) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L4236) · [Before (L4236)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L4236)

```diff
-           const ZB = (null !== (GB = IB._depthCompare) && void 0 !== GB ? GB : wI).startsWith("greater") ? 0 : 1;
+           const Vt = (null !== (mt = et._depthCompare) && void 0 !== mt ? mt : he).startsWith("greater") ? 0 : 1;
```

#### 344. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4257` → after: `L4257`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4257) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L4257) · [Before (L4257)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L4257)

```diff
-         const GB = `${BB.pipelineKey}|${ZB}`,
+         const mt = `${tt.pipelineKey}|${Vt}`,
```

#### 345. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4266` → after: `L4266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L4266) · [Before (L4266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L4266)

```diff
-           label: `standard-${kB.id}`,
+           label: `standard-${jt.id}`,
```

#### 346. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4279` → after: `L4279`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4279) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L4279) · [Before (L4279)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L4279)

```diff
-             depthCompare: null !== (TB = null !== (JB = nB.depthCompare) && void 0 !== JB ? JB : IB._depthCompare) && void 0 !== TB ? TB : wI,
+             depthCompare: null !== (Ot = null !== (qt = Xt.depthCompare) && void 0 !== qt ? qt : et._depthCompare) && void 0 !== Ot ? Ot : he,
```

#### 347. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4308` → after: `L4308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L4308) · [Before (L4308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L4308)

```diff
-             switch (IB.geometry = oB, IB.skip = GB.noSunShadowVertices, IB.indexed = null !== ZB.indexBuffer, IB.first = ZB.first, IB.count = ZB.count, IB.vz = TB, IB.worldAt = JB, IB.instances = null, IB.instanceCount = 1, IB.thin = !1, Jo(GB)) {
+             switch (et.geometry = Dt, et.skip = mt.noSunShadowVertices, et.indexed = null !== Vt.indexBuffer, et.first = Vt.first, et.count = Vt.count, et.sQ = Ot, et.worldAt = qt, et.instances = null, et.instanceCount = 1, et.thin = !1, DD(mt)) {
```

#### 348. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4346` → after: `L4346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4346) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L4346) · [Before (L4346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L4346)

```diff
-           for (const IB of BB.messages) JB &&= "error" !== IB.type, TB.push(`${oB}:${IB.lineNum}:${IB.linePos} ${IB.type}: ${IB.message}`)
+           for (const et of tt.messages) qt &&= "error" !== et.type, Ot.push(`${Dt}:${et.lineNum}:${et.linePos} ${et.type}: ${et.message}`)
```

#### 349. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4348-L4349` → after: `L4348-L4349`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4348) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4348-L4349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L4348-L4349) · [Before (L4348-L4349)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L4348-L4349)

```diff
-         if (JB && !BB.packGroup) return this.pipelines.set(IB, !1), console.error(`Lite: pipeline ${IB} failed`, ZB), void nI(this.device, "mesh", BB.kind, ZB);
-         BB.failed || (BB.failed = !0, console.error(`Lite: program ${BB.id} failed`, ZB, TB.join("\n"), {
+         if (qt && !tt.packGroup) return this.pipelines.set(et, !1), console.error(`Lite: pipeline ${et} failed`, Vt), void Qe(this.device, "mesh", tt.kind, Vt);
+         tt.failed || (tt.failed = !0, console.error(`Lite: program ${tt.id} failed`, Vt, Ot.join("\n"), {
```

#### 350. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4358-L4359` → after: `L4358-L4359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4358) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4358-L4359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L4358-L4359) · [Before (L4358-L4359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L4358-L4359)

```diff
-       const TB = null === (IB = BB.Zm) || void 0 === IB || null === (ZB = IB.aShaderPackItem) || void 0 === ZB ? void 0 : ZB.x;
-       return void 0 !== TB && 0 !== (TB & HI.g)
+       const Ot = null === (et = tt.qL) || void 0 === et || null === (Vt = et.aShaderPackItem) || void 0 === Vt ? void 0 : Vt.x;
+       return void 0 !== Ot && 0 !== (Ot & Ie.i)
```

#### 351. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4361-L4364` → after: `L4361-L4364`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4361) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4361-L4364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L4361-L4364) · [Before (L4361-L4364)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L4361-L4364)

```diff
-     var mG = ZB(41712),
-       XG = ZB(41715),
-       LG = ZB(41722),
-       eG = ZB(41672);
+     var km = Vt(41933),
+       Gm = Vt(41941),
+       zm = Vt(41946),
+       om = Vt(41891);
```

#### 352. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4371-L4372` → after: `L4371-L4372`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4371) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4371-L4372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L4371-L4372) · [Before (L4371-L4372)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L4371-L4372)

```diff
-           const TB = (0, eG.b)(BB, ZB, ZB, 6);
-           for (let JB = 0; JB < 6; JB++)(0, eG.f)(BB, TB, JB, IB[uG[JB]], {
+           const Ot = (0, om.c)(tt, Vt, Vt, 6);
+           for (let qt = 0; qt < 6; qt++)(0, om.d)(tt, Ot, qt, et[rm[qt]], {
```

#### 353. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4408` → after: `L4408`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4408) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L4408) · [Before (L4408)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L4408)

```diff
-       for (const IB of null !== BB && void 0 !== BB ? BB : []) null === IB || void 0 === IB || IB.close()
+       for (const et of null !== tt && void 0 !== tt ? tt : []) null === et || void 0 === et || et.close()
```

#### 354. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4422` → after: `L4422`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4422) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L4422) · [Before (L4422)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L4422)

```diff
-         this.ah = BB, this.starts = [], this.lengths = [], this.used = 0, BB > 0 && (this.starts.push(0), this.lengths.push(BB))
+         this.uQ = tt, this.starts = [], this.lengths = [], this.used = 0, tt > 0 && (this.starts.push(0), this.lengths.push(tt))
```

#### 355. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4438` → after: `L4438`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4438) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L4438) · [Before (L4438)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L4438)

```diff
-         const ZB = Math.min(BB + IB, this.ah);
+         const Vt = Math.min(tt + et, this.uQ);
```

#### 356. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4442-L4443` → after: `L4442-L4443`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4442) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4442-L4443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L4442-L4443) · [Before (L4442-L4443)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L4442-L4443)

```diff
-         const IB = this.ah;
-         this.ah = BB, this.release(IB, BB - IB)
+         const et = this.uQ;
+         this.uQ = tt, this.release(et, tt - et)
```

#### 357. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4451` → after: `L4451`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4451) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L4451) · [Before (L4451)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L4451)

```diff
-         this.ah = BB
+         this.uQ = tt
```

#### 358. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4467` → after: `L4467`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4467) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L4467) · [Before (L4467)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L4467)

```diff
-         vB && kB ? (TB[GB - 1] += IB + TB[GB], ZB.splice(GB, 1), TB.splice(GB, 1)) : vB ? TB[GB - 1] += IB : kB ? (ZB[GB] = BB, TB[GB] += IB) : (ZB.splice(GB, 0, BB), TB.splice(GB, 0, IB))
+         dt && jt ? (Ot[mt - 1] += et + Ot[mt], Vt.splice(mt, 1), Ot.splice(mt, 1)) : dt ? Ot[mt - 1] += et : jt ? (Vt[mt] = tt, Ot[mt] += et) : (Vt.splice(mt, 0, tt), Ot.splice(mt, 0, et))
```

#### 359. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4475` → after: `L4475`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4475) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L4475) · [Before (L4475)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L4475)

```diff
-         this.device = BB, this.onReplaced = IB, this.mergeGap = ZB, this.gpu = null, this.bytes = void 0, this.words = void 0, this.sourceWords = new WeakMap, this.vq = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], thi … [truncated]
+         this.device = tt, this.onReplaced = et, this.mergeGap = Vt, this.gpu = null, this.bytes = void 0, this.words = void 0, this.sourceWords = new WeakMap, this.nw = void 0, this.dirtyStarts = [], this.dirtyEnds = [], this.order = [], this.replaced = [], this.retired = [], thi … [truncated]
```

#### 360. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4477` → after: `L4477`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4477) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L4477) · [Before (L4477)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L4477)

```diff
-         this.bytes = new Uint8Array(JB), this.words = new Uint32Array(this.bytes.buffer), this.vq = new tG(JB / bG)
+         this.bytes = new Uint8Array(qt), this.words = new Uint32Array(this.bytes.buffer), this.nw = new Ym(qt / Bm)
```

#### 361. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4490-L4491` → after: `L4490-L4491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4490) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4490-L4491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L4490-L4491) · [Before (L4490-L4491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L4490-L4491)

```diff
-         let oB = this.vq.allocate(JB);
-         oB < 0 && (this.grow(this.vq.ah + JB), oB = this.vq.allocate(JB));
+         let Dt = this.nw.allocate(qt);
+         Dt < 0 && (this.grow(this.nw.uQ + qt), Dt = this.nw.allocate(qt));
```

#### 362. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4497` → after: `L4497`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4497) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L4497) · [Before (L4497)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L4497)

```diff
-         IB > this.vq.ah && this.grow(IB)
+         et > this.nw.uQ && this.grow(et)
```

#### 363. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4549` → after: `L4549`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4549) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L4549) · [Before (L4549)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L4549)

```diff
-         for (let IB = 0; IB < BB.length; IB += 2) this.vq.free(BB[IB] / bG, BB[IB + 1] / bG);
+         for (let et = 0; et < tt.length; et += 2) this.nw.free(tt[et] / Bm, tt[et + 1] / Bm);
```

#### 364. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4563` → after: `L4563`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4563) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L4563) · [Before (L4563)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L4563)

```diff
-         const IB = this.vq.ah,
+         const et = this.nw.uQ,
```

#### 365. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4568` → after: `L4568`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4568) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L4568) · [Before (L4568)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L4568)

```diff
-         this.gpu = this.createGpu(TB.byteLength), this.bytes = TB, this.words = new Uint32Array(TB.buffer), this.vq.grow(ZB), JB && (this.replaced.push(JB), this.onReplaced(JB)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, IB * bG)
+         this.gpu = this.createGpu(Ot.byteLength), this.bytes = Ot, this.words = new Uint32Array(Ot.buffer), this.nw.grow(Vt), qt && (this.replaced.push(qt), this.onReplaced(qt)), this.dirtyStarts.length = 0, this.dirtyEnds.length = 0, this.markDirty(0, et * Bm)
```

#### 366. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4658` → after: `L4658`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4658) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L4658) · [Before (L4658)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L4658)

```diff
-         this.engine = BB, this.device = IB, this.buffers = new WeakMap, this.I5 = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.atlasSources = new WeakMap, this.atlasRebuilds = new WeakSet, t … [truncated]
+         this.engine = tt, this.device = et, this.buffers = new WeakMap, this.T6 = new WeakMap, this.batchUploads = new WeakMap, this.textures = new Map, this.samplers = new Map, this.atlasBindings = new WeakMap, this.atlasSources = new WeakMap, this.atlasRebuilds = new WeakSet, t … [truncated]
```

#### 367. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4677` → after: `L4677`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4677) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L4677) · [Before (L4677)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L4677)

```diff
-         null === (BB = this.arena) || void 0 === BB || BB.OW()
+         null === (tt = this.arena) || void 0 === tt || tt.yJ()
```

#### 368. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4683` → after: `L4683`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4683) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L4683) · [Before (L4683)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L4683)

```diff
-         BB.ah = JB.byteLength, this.buffers.set(BB, {
+         tt.uQ = qt.byteLength, this.buffers.set(tt, {
```

#### 369. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4720` → after: `L4720`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4720) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L4720) · [Before (L4720)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L4720)

```diff
-         BB.is32Bits = 4 === TB.BYTES_PER_ELEMENT, BB.ah = TB.byteLength, this.buffers.set(BB, {
+         tt.is32Bits = 4 === Ot.BYTES_PER_ELEMENT, tt.uQ = Ot.byteLength, this.buffers.set(tt, {
```

#### 370. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4756` → after: `L4756`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4756) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L4756) · [Before (L4756)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L4756)

```diff
-             const IB = new Uint8Array(Math.max(null !== (JB = null === GB || void 0 === GB ? void 0 : GB.byteLength) && void 0 !== JB ? JB : 0, ZB + TB));
+             const et = new Uint8Array(Math.max(null !== (qt = null === mt || void 0 === mt ? void 0 : mt.byteLength) && void 0 !== qt ? qt : 0, Vt + Ot));
```

#### 371. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4820` → after: `L4820`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4820) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L4820) · [Before (L4820)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L4820)

```diff
-         const TB = null !== (IB = null === (ZB = this.buffers.get(BB)) || void 0 === ZB ? void 0 : ZB.slot) && void 0 !== IB ? IB : -1;
+         const Ot = null !== (et = null === (Vt = this.buffers.get(tt)) || void 0 === Vt ? void 0 : Vt.slot) && void 0 !== et ? et : -1;
```

#### 372. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4826` → after: `L4826`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4826) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L4826) · [Before (L4826)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L4826)

```diff
-         return TB ? TB.slot >= 0 ? TB.slot + TB.size : null !== (IB = null === (ZB = TB.gpu) || void 0 === ZB ? void 0 : ZB.size) && void 0 !== IB ? IB : 0 : 0
+         return Ot ? Ot.slot >= 0 ? Ot.slot + Ot.size : null !== (et = null === (Vt = Ot.gpu) || void 0 === Vt ? void 0 : Vt.size) && void 0 !== et ? et : 0 : 0
```

#### 373. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4830` → after: `L4830`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4830) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L4830) · [Before (L4830)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L4830)

```diff
-         return null !== (TB = null !== (JB = ZB && this.modelInput(ZB, IB)) && void 0 !== JB ? JB : null === (oB = null !== (GB = this.I5.get(BB)) && void 0 !== GB ? GB : this.batchUploads.get(BB)) || void 0 === oB ? void 0 : oB.inputs[IB]) && void 0 !== TB ? TB : null
+         return null !== (Ot = null !== (qt = Vt && this.modelInput(Vt, et)) && void 0 !== qt ? qt : null === (Dt = null !== (mt = this.T6.get(tt)) && void 0 !== mt ? mt : this.batchUploads.get(tt)) || void 0 === Dt ? void 0 : Dt.inputs[et]) && void 0 !== Ot ? Ot : null
```

#### 374. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4846` → after: `L4846`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4846) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L4846) · [Before (L4846)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L4846)

```diff
-         let ZB = BB.gpu[iB.f.lite];
+         let Vt = tt.gpu[St.i.lite];
```

#### 375. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4862` → after: `L4862`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4862) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L4862) · [Before (L4862)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L4862)

```diff
-           }, BB.gpu[iB.f.lite] = ZB
+           }, tt.gpu[St.i.lite] = Vt
```

#### 376. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4871` → after: `L4871`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4871) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L4871) · [Before (L4871)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L4871)

```diff
-               ah: 0,
+               uQ: 0,
```

#### 377. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4876` → after: `L4876`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4876) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L4876) · [Before (L4876)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L4876)

```diff
-             ah: 0
+             uQ: 0
```

#### 378. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4896` → after: `L4896`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4896) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L4896) · [Before (L4896)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L4896)

```diff
-             if (6 !== BB.length) throw new Error(`${BB.length} files where six faces were expected`);
+             if (6 !== tt.length) throw new Error(`${tt.length} files where six faces were expected`);
```

#### 379. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4954` → after: `L4954`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4954) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L4954) · [Before (L4954)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L4954)

```diff
-         const JB = (0, mG.b)(this.engine, {
+         const qt = (0, km.d)(this.engine, {
```

#### 380. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L4983` → after: `L4983`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R4983) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L4983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L4983) · [Before (L4983)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L4983)

```diff
-         return vB && vB.view === oB.view && vB.sampler === GB ? vB : (JB.bound = {
+         return dt && dt.view === Dt.view && dt.sampler === mt ? dt : (qt.bound = {
```

#### 381. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5000` → after: `L5000`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5000) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5000) · [Before (L5000)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5000)

```diff
-           IB[0].layers === JB && IB[TB] ? oB === this.epoch && this.atlasBindings.set(BB, this.atlasBindings.get(IB[TB])) : console.error(`Lite: the new device splits the atlas ${VB(ZB.urls[0])} into other arrays than its materials read`)
+           et[0].layers === qt && et[Ot] ? Dt === this.epoch && this.atlasBindings.set(tt, this.atlasBindings.get(et[Ot])) : console.error(`Lite: the new device splits the atlas ${nt(Vt.urls[0])} into other arrays than its materials read`)
```

#### 382. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5002` → after: `L5002`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5002) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5002) · [Before (L5002)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5002)

```diff
-           console.error(`Lite: could not build the atlas ${VB(ZB.urls[0])} again on a new device`, BB)
+           console.error(`Lite: could not build the atlas ${nt(Vt.urls[0])} again on a new device`, tt)
```

#### 383. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5007` → after: `L5007`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5007) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5007) · [Before (L5007)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5007)

```diff
-         return null !== (IB = null === (ZB = this.heldSlot(BB)) || void 0 === ZB ? void 0 : ZB.state.decoded) && void 0 !== IB ? IB : null
+         return null !== (et = null === (Vt = this.heldSlot(tt)) || void 0 === Vt ? void 0 : Vt.state.decoded) && void 0 !== et ? et : null
```

#### 384. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5014-L5015` → after: `L5014-L5015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5014-L5015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5014-L5015) · [Before (L5014-L5015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5014-L5015)

```diff
-         const IB = BB.gpu[iB.f.lite];
-         return (null === IB || void 0 === IB ? void 0 : IB.epoch) === this.epoch ? IB : void 0
+         const et = tt.gpu[St.i.lite];
+         return (null === et || void 0 === et ? void 0 : et.epoch) === this.epoch ? et : void 0
```

#### 385. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5026` → after: `L5026`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5026) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5026) · [Before (L5026)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5026)

```diff
-           } = iB.j;
+           } = St.k;
```

#### 386. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5047` → after: `L5047`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5047) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5047) · [Before (L5047)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5047)

```diff
-         const ZB = BB.gpu[iB.f.lite];
+         const Vt = tt.gpu[St.i.lite];
```

#### 387. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5054` → after: `L5054`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5054) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5054) · [Before (L5054)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5054)

```diff
-           return "canvas" === IB.kind ? null : `${IB.kind}|${Bv(IB)}|${ZB.noMipmap}|${ZB.samplingMode}|${ZB.invertY}`
+           return "canvas" === et.kind ? null : `${et.kind}|${td(et)}|${Vt.noMipmap}|${Vt.samplingMode}|${Vt.invertY}`
```

#### 388. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5069` → after: `L5069`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5069) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5069) · [Before (L5069)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5069)

```diff
-           dynamicSource: null !== (oB = null === ZB || void 0 === ZB ? void 0 : ZB.state.dynamicSource) && void 0 !== oB ? oB : null
+           dynamicSource: null !== (Dt = null === Vt || void 0 === Vt ? void 0 : Vt.state.dynamicSource) && void 0 !== Dt ? Dt : null
```

#### 389. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5085` → after: `L5085`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5085) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5085) · [Before (L5085)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5085)

```diff
-         return BB.gpu[iB.f.lite] = kB, kB
+         return tt.gpu[St.i.lite] = jt, jt
```

#### 390. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5088` → after: `L5088`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5088) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5088) · [Before (L5088)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5088)

```diff
-         const oB = `${BB}|${IB}|${ZB}|${TB}|${JB}`;
+         const Dt = `${tt}|${et}|${Vt}|${Ot}|${qt}`;
```

#### 391. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5096` → after: `L5096`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5096) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5096) · [Before (L5096)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5096)

```diff
-           GB = (0, mG.b)(this.engine, vB), this.samplers.set(oB, GB)
+           mt = (0, km.d)(this.engine, dt), this.samplers.set(Dt, mt)
```

#### 392. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5112` → after: `L5112`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5112) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5112) · [Before (L5112)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5112)

```diff
-         } = this, oB = (0, XG.c)(this.engine, TB, {
+         } = this, Dt = (0, Gm.d)(this.engine, Ot, {
```

#### 393. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5126` → after: `L5126`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5126) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5126) · [Before (L5126)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5126)

```diff
-           JB === this.epoch && (BB.failed = !0, console.warn(`Lite: could not load texture ${VB(IB)}`, ZB))
+           qt === this.epoch && (tt.failed = !0, console.warn(`Lite: could not load texture ${nt(et)}`, Vt))
```

#### 394. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5134` → after: `L5134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5134) · [Before (L5134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5134)

```diff
-         const TB = fG(this.engine, this.device, ZB, (0, iB.x)(IB), BB.hasMips);
+         const Ot = Um(this.engine, this.device, Vt, (0, St.B)(et), tt.hasMips);
```

#### 395. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5144` → after: `L5144`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5144) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5144) · [Before (L5144)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5144)

```diff
-         } = BB, TB = (0, LG.b)(this.engine, Math.max(1, ZB.width), Math.max(1, ZB.height), {
+         } = tt, Ot = (0, zm.d)(this.engine, Math.max(1, Vt.width), Math.max(1, Vt.height), {
```

#### 396. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5158` → after: `L5158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5158) · [Before (L5158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5158)

```diff
-         if (ZB && TB && 0 !== JB.width && 0 !== JB.height) return JB.width !== TB.width || JB.height !== TB.height ? (this.releaseTexture(IB), IB.dynamic = null, IB.view = null, void this.createDynamic(BB, IB)) : void(0, LG.c)(this.engine, TB, JB, {
+         if (Vt && Ot && 0 !== qt.width && 0 !== qt.height) return qt.width !== Ot.width || qt.height !== Ot.height ? (this.releaseTexture(et), et.dynamic = null, et.view = null, void this.createDynamic(tt, et)) : void(0, zm.h)(this.engine, Ot, qt, {
```

#### 397. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5169` → after: `L5169`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5169) · [Before (L5169)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5169)

```diff
-     var Zv = ZB(38804);
+     var Vd = Vt(38967);
```

#### 398. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5173` → after: `L5173`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5173) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5173) · [Before (L5173)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5173)

```diff
-       BB._colorAttachment.storeOp = BB._targetSignature._sampleCount > 1 ? IB : "store";
+       tt._colorAttachment.storeOp = tt._targetSignature._sampleCount > 1 ? et : "store";
```

#### 399. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5177-L5180` → after: `L5177-L5180`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5177) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5177-L5180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5177-L5180) · [Before (L5177-L5180)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5177-L5180)

```diff
-     var Jv = ZB(37824),
-       ov = ZB(37876),
-       Gv = ZB(37516),
-       vv = ZB(39657);
+     var qd = Vt(38016),
+       Dd = Vt(38073),
+       md = Vt(37716),
+       dd = Vt(39803);
```

#### 400. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5189-L5190` → after: `L5189-L5190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5189) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5189-L5190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5189-L5190) · [Before (L5189-L5190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5189-L5190)

```diff
-       BB.fov = IB.fov, BB.near = IB.near, BB.far = IB.far, BB.renderWidth = ZB.renderWidth, BB.renderHeight = ZB.renderHeight, (0, Gv.o)(IB.holderRotation, 0, nv, 0), (0, Gv.b)(kv, 0, nv, 0, IB.holderPosition, 0, hv);
-       const TB = IB.bS;
+       tt.fov = et.fov, tt.near = et.near, tt.far = et.far, tt.renderWidth = Vt.renderWidth, tt.renderHeight = Vt.renderHeight, (0, md.w)(et.holderRotation, 0, Xd, 0), (0, md.c)(jd, 0, Xd, 0, et.holderPosition, 0, Qd);
+       const Ot = et.lT;
```

#### 401. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5193` → after: `L5193`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5193) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5193) · [Before (L5193)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5193)

```diff
-       (0, Gv.i)(TB, zv, cv, JB), (0, Gv.g)(JB, 0, JB), (0, Gv.j)(JB, hv, 0, JB), (0, Gv.g)(JB, 0, JB);
+       (0, md.n)(Ot, ld, Hd, qt), (0, md.j)(qt, 0, qt), (0, md.q)(qt, Qd, 0, qt), (0, md.j)(qt, 0, qt);
```

#### 402. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5195` → after: `L5195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5195) · [Before (L5195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5195)

```diff
-       (0, Gv.g)(JB, 0, oB), BB.eye[0] = oB[12], BB.eye[1] = oB[13], BB.eye[2] = oB[14], Fv[0] = BB.fov, Fv[1] = BB.renderWidth / BB.renderHeight, Fv[2] = BB.near, Fv[3] = BB.far, (0, Gv.m)(Fv, BB.projectionMatrix), (0, Gv.j)(JB, BB.projectionMatrix, 0, BB.viewProjectionMatrix), ( … [truncated]
+       (0, md.j)(qt, 0, Dt), tt.eye[0] = Dt[12], tt.eye[1] = Dt[13], tt.eye[2] = Dt[14], Ed[0] = tt.fov, Ed[1] = tt.renderWidth / tt.renderHeight, Ed[2] = tt.near, Ed[3] = tt.far, (0, md.t)(Ed, tt.projectionMatrix), (0, md.q)(qt, tt.projectionMatrix, 0, tt.viewProjectionMatrix), ( … [truncated]
```

#### 403. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5202` → after: `L5202`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5202) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5202) · [Before (L5202)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5202)

```diff
-       }, (() => new Jv.c(0, 0, 0, 0))));
+       }, (() => new qd.b(0, 0, 0, 0))));
```

#### 404. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5218` → after: `L5218`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5218) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5218) · [Before (L5218)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5218)

```diff
-       return IB.animTick = (0, ov.g)(), IB.timeMs = performance.now(), qv(IB, BB.lg), BB.model.update(IB.frameId), IB
+       return et.animTick = (0, Dd.g)(), et.timeMs = performance.now(), yd(et, tt.Fw), tt.model.update(et.frameId), et
```

#### 405. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5222` → after: `L5222`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5222) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5222) · [Before (L5222)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5222)

```diff
-       const IB = BB.lg,
+       const et = tt.Fw,
```

#### 406. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5225` → after: `L5225`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5225) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5225) · [Before (L5225)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5225)

```diff
-           qS: TB
+           XT: Ot
```

#### 407. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5227` → after: `L5227`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5227) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5227) · [Before (L5227)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5227)

```diff
-       return Nv(ZB, TB, IB.PN()), IB.onBeforeRenderObservable.notifyObservers(IB), gv(IB, ZB.frustum), IB.onBeforeCameraRenderObservable.notifyObservers(IB.activeCamera), yv(BB)
+       return fd(Vt, Ot, et.Jf()), et.onBeforeRenderObservable.notifyObservers(et), wd(et, Vt.frustum), et.onBeforeCameraRenderObservable.notifyObservers(et.activeCamera), Nd(tt)
```

#### 408. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5229-L5231` → after: `L5229-L5231`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5229) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5229-L5231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5229-L5231) · [Before (L5229-L5231)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5229-L5231)

```diff
-     var Wv = ZB(37482),
-       dv = ZB(37600),
-       Cv = ZB(37862);
+     var bd = Vt(37676),
+       Jd = Vt(37792),
+       Cd = Vt(38060);
```

#### 409. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5235-L5238` → after: `L5235-L5238`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5235) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5235-L5238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5235-L5238) · [Before (L5235-L5238)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5235-L5238)

```diff
-       const TB = (0, OB._)(BB);
-       if (!TB || TB.diffuseTexture && (0, Cv.i)(BB)) return null;
-       const JB = null === (IB = (0, OB.v)(TB, sB.g.name)) || void 0 === IB ? void 0 : IB.state,
-         oB = null === (ZB = (0, OB.v)(TB, BG.e.name)) || void 0 === ZB ? void 0 : ZB.state,
+       const Ot = (0, vt.X)(tt);
+       if (!Ot || Ot.diffuseTexture && (0, Cd.k)(tt)) return null;
+       const qt = null === (et = (0, vt.s)(Ot, Kt.j.name)) || void 0 === et ? void 0 : et.state,
+         Dt = null === (Vt = (0, vt.s)(Ot, nD.e.name)) || void 0 === Vt ? void 0 : Vt.state,
```

#### 410. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5243` → after: `L5243`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5243) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5243) · [Before (L5243)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5243)

```diff
-         TB.set(BB.diffuseColor, GB.diffuse), TB[GB.diffuse + 3] = BB.alpha, TB.set(BB.ambientColor, GB.ambientAndCutoff), TB[GB.ambientAndCutoff + 3] = BB.alphaCutOff, TB.set(BB.emissiveColor, GB.emissiveAndLevel), TB[GB.emissiveAndLevel + 3] = null !== (JB = null === (oB = BB.di … [truncated]
+         Ot.set(tt.diffuseColor, mt.diffuse), Ot[mt.diffuse + 3] = tt.alpha, Ot.set(tt.ambientColor, mt.ambientAndCutoff), Ot[mt.ambientAndCutoff + 3] = tt.alphaCutOff, Ot.set(tt.emissiveColor, mt.emissiveAndLevel), Ot[mt.emissiveAndLevel + 3] = null !== (qt = null === (Dt = tt.di … [truncated]
```

#### 411. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5249-L5250` → after: `L5249-L5250`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5249) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5249-L5250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5249-L5250) · [Before (L5249-L5250)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5249-L5250)

```diff
-         liquid: (0, Cv.j)(BB),
-         customRenderMat: (0, Cv.i)(BB),
+         liquid: (0, Cd.o)(tt),
+         customRenderMat: (0, Cd.k)(tt),
```

#### 412. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5254` → after: `L5254`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5254) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5254) · [Before (L5254)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5254)

```diff
-     var sv = ZB(3027);
+     var Kd = Vt(2959);
```

#### 413. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5269` → after: `L5269`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5269) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5269) · [Before (L5269)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5269)

```diff
-         this.arena = BB, this.vq = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.vq = new tG(IB);
+         this.arena = tt, this.nw = void 0, this.buffer = void 0, this.twin = null, this.usable = 0, this.backings = [], this.growable = !0, this.dropped = !1, this.nw = new Ym(et);
```

#### 414. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5274` → after: `L5274`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5274) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5274) · [Before (L5274)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5274)

```diff
-         return this.vq.ah
+         return this.nw.uQ
```

#### 415. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5294` → after: `L5294`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5294) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5294) · [Before (L5294)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5294)

```diff
-         return this.dropped || BB.start + BB.length > this.ah
+         return this.dropped || tt.start + tt.length > this.uQ
```

#### 416. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5328` → after: `L5328`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5328) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5328) · [Before (L5328)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5328)

```diff
-           label: `${TB}-grow`
+           label: `${Ot}-grow`
```

#### 417. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5330` → after: `L5330`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5330) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5330) · [Before (L5330)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5330)

```diff
-         oB.buffer = this.createBuffer(oB, !1), GB.copyBufferToBuffer(JB.buffer, 0, oB.buffer, 0, JB.units * ZB), JB.twin && (oB.twin = this.createBuffer(oB, !0), GB.copyBufferToBuffer(JB.twin, 0, oB.twin, 0, JB.units * this.arena.twinUnitBytes)), IB.queue.submit([GB.finish()]), t … [truncated]
+         Dt.buffer = this.createBuffer(Dt, !1), mt.copyBufferToBuffer(qt.buffer, 0, Dt.buffer, 0, qt.units * Vt), qt.twin && (Dt.twin = this.createBuffer(Dt, !0), mt.copyBufferToBuffer(qt.twin, 0, Dt.twin, 0, qt.units * this.arena.twinUnitBytes)), et.queue.submit([mt.finish()]), t … [truncated]
```

#### 418. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5352-L5353` → after: `L5352-L5353`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5352) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5352-L5353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5352-L5353) · [Before (L5352-L5353)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5352-L5353)

```diff
-           label: IB ? `${GB}-light` : GB,
-           size: BB.units * (IB ? JB : TB),
+           label: et ? `${mt}-light` : mt,
+           size: tt.units * (et ? qt : Ot),
```

#### 419. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5359` → after: `L5359`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5359) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5359) · [Before (L5359)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5359)

```diff
-           this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${GB} buffer, taken as failed: ${String(ZB)}`), this.settle(BB, IB, !1, !1)
+           this.arena.awaitingVerdict--, this.arena.warnOnce("noVerdict", `no out-of-memory verdict for a ${mt} buffer, taken as failed: ${String(Vt)}`), this.settle(tt, et, !1, !1)
```

#### 420. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5368` → after: `L5368`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5368) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5368) · [Before (L5368)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5368)

```diff
-             return this.vq.truncate(this.backings[JB - 1].units), this.growable = !1, void this.promote()
+             return this.nw.truncate(this.backings[qt - 1].units), this.growable = !1, void this.promote()
```

#### 421. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5393` → after: `L5393`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5393) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5393) · [Before (L5393)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5393)

```diff
-         if (this.device = BB, this.unitBytes = IB, this.usage = ZB, this.label = TB, this.pages = [], this.drawing = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, t … [truncated]
+         if (this.device = tt, this.unitBytes = et, this.usage = Vt, this.label = Ot, this.pages = [], this.drawing = !1, this.awaitingVerdict = 0, this.verticesPerUnit = void 0, this.twinUsage = void 0, this.twinValueBytes = void 0, this.twinUnitBytes = void 0, this.limit = -1, t … [truncated]
```

#### 422. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5416` → after: `L5416`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5416) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5416) · [Before (L5416)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5416)

```diff
-           const IB = JB.vq.allocate(BB);
+           const et = qt.nw.allocate(tt);
```

#### 423. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5425-L5426` → after: `L5425-L5426`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5425) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5425-L5426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5425-L5426) · [Before (L5425-L5426)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5425-L5426)

```diff
-           const ZB = Math.min(this.ceiling, Math.max(2 * IB.ah, IB.ah + BB));
-           if (ZB - IB.ah >= BB) return IB.grow(ZB), {
+           const Vt = Math.min(this.ceiling, Math.max(2 * et.uQ, et.uQ + tt));
+           if (Vt - et.uQ >= tt) return et.grow(Vt), {
```

#### 424. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5428` → after: `L5428`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5428) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5428) · [Before (L5428)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5428)

```diff
-             start: IB.vq.allocate(BB),
+             start: et.nw.allocate(tt),
```

#### 425. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5432` → after: `L5432`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5432) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5432) · [Before (L5432)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5432)

```diff
-         IB && IB !== this.pages[0] && 0 === IB.vq.used && IB.drop();
+         et && et !== this.pages[0] && 0 === et.nw.used && et.drop();
```

#### 426. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5437` → after: `L5437`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5437) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5437) · [Before (L5437)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5437)

```diff
-           start: TB.vq.allocate(BB),
+           start: Ot.nw.allocate(tt),
```

#### 427. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5446` → after: `L5446`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5446) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5446) · [Before (L5446)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5446)

```diff
-         IB.vq.free(BB.start, BB.length), 0 === IB.vq.used && IB !== this.pages[0] && IB !== this.pages[this.pages.length - 1] && IB.drop()
+         et.nw.free(tt.start, tt.length), 0 === et.nw.used && et !== this.pages[0] && et !== this.pages[this.pages.length - 1] && et.drop()
```

#### 428. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5456` → after: `L5456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5456) · [Before (L5456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5456)

```diff
-         this.warnOnce("outOfMemory", `out of GPU memory for a ${IB}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, BB), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, BB) / 2));
+         this.warnOnce("outOfMemory", `out of GPU memory for a ${et}-byte ${this.label} buffer; its chunks are meshed again`), this.failed = Math.min(this.failed, tt), this.ceiling = Math.max(1, Math.floor(Math.min(this.ceiling, tt) / 2));
```

#### 429. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5470` → after: `L5470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5470) · [Before (L5470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5470)

```diff
-         for (const JB of this.pages) BB += JB.ah, IB += JB.vq.used, ZB += JB.hasTwin ? JB.ah * this.twinUnitBytes : 0, TB += JB.allocatedBytes;
+         for (const qt of this.pages) tt += qt.uQ, et += qt.nw.used, Vt += qt.hasTwin ? qt.uQ * this.twinUnitBytes : 0, Ot += qt.allocatedBytes;
```

#### 430. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5500` → after: `L5500`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5500) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5500) · [Before (L5500)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5500)

```diff
-         this.vertexArena = new Yv(BB, ZB, GPUBufferUsage.VERTEX, `terrain-vertices-${ZB}`), this.quadArena = new Yv(BB, dv.e, GPUBufferUsage.STORAGE, "terrain-quads", {
+         this.vertexArena = new Wd(tt, Vt, GPUBufferUsage.VERTEX, `terrain-vertices-${Vt}`), this.quadArena = new Wd(tt, Jd.b, GPUBufferUsage.STORAGE, "terrain-quads", {
```

#### 431. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5526` → after: `L5526`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5526) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5526) · [Before (L5526)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5526)

```diff
-         ZB && 0 !== IB.length && ZB.page.live && (IB.length < BB.vertexCount ? ZB.page.arena.warnOnce("shortLight", `a part's ${IB.length} light values are fewer than its ${BB.vertexCount} vertices, so its light is left as it was`) : (ZB.page.writeLight(ZB, IB), BB.lit = !0))
+         Vt && 0 !== et.length && Vt.page.live && (et.length < tt.vertexCount ? Vt.page.arena.warnOnce("shortLight", `a part's ${et.length} light values are fewer than its ${tt.vertexCount} vertices, so its light is left as it was`) : (Vt.page.writeLight(Vt, et), tt.lit = !0))
```

#### 432. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5529` → after: `L5529`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5529) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5529) · [Before (L5529)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5529)

```diff
-         this.fullSky.length < IB && (this.fullSky = new Uint16Array(Math.max(IB, 4096)).fill(sv.f));
+         this.fullSky.length < et && (this.fullSky = new Uint16Array(Math.max(et, 4096)).fill(Kd.h));
```

#### 433. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5591` → after: `L5591`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5591) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5591) · [Before (L5591)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5591)

```diff
-           code: (oB = ZB._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${oB?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(pos … [truncated]
+           code: (Dt = Vt._targetSignature._sampleCount > 1, `\n@group(0) @binding(0) var depth: ${Dt?"texture_depth_multisampled_2d":"texture_depth_2d"};\n@group(0) @binding(1) var<uniform> unproject: vec2f;\n\n@vertex\nfn copyVertex(@builtin(vertex_index) i: u32) -> @builtin(pos … [truncated]
```

#### 434. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5625` → after: `L5625`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5625) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5625) · [Before (L5625)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5625)

```diff
-         return null !== (BB = null === (IB = this.copy) || void 0 === IB ? void 0 : IB.view) && void 0 !== BB ? BB : null
+         return null !== (tt = null === (et = this.copy) || void 0 === et ? void 0 : et.view) && void 0 !== tt ? tt : null
```

#### 435. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5639` → after: `L5639`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5639) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5639) · [Before (L5639)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5639)

```diff
-         if (cB += this.drawList(kB, IB, BB._directBindings, 0, BB._directBindings.length), cB += this.drawList(kB, IB, JB, 0, oB >= 0 ? oB : JB.length), kB.end(), oB < 0) return cB;
+         if (Ht += this.drawList(jt, et, tt._directBindings, 0, tt._directBindings.length), Ht += this.drawList(jt, et, qt, 0, Dt >= 0 ? Dt : qt.length), jt.end(), Dt < 0) return Ht;
```

#### 436. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5672` → after: `L5672`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5672) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5672) · [Before (L5672)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5672)

```diff
-         const JB = (null !== (ZB = IB._config.depth) && void 0 !== ZB ? ZB : IB._config.rt)._depthTexture,
+         const qt = (null !== (Vt = et._config.depth) && void 0 !== Vt ? Vt : et._config.rt)._depthTexture,
```

#### 437. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5679` → after: `L5679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5679) · [Before (L5679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5679)

```diff
-         this.retired = null !== (IB = null === (ZB = this.copy) || void 0 === ZB ? void 0 : ZB.texture) && void 0 !== IB ? IB : null;
+         this.retired = null !== (et = null === (Vt = this.copy) || void 0 === Vt ? void 0 : Vt.texture) && void 0 !== et ? et : null;
```

#### 438. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5764` → after: `L5764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5764) · [Before (L5764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5764)

```diff
-           code: (GB = this.edge, `${(0,DI.B)()}${vT({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_2d<f32>;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\t … [truncated]
+           code: (mt = this.edge, `${(0,ge.A)()}${jO({sunShadow:!0,airShadow:!1},!0,"lit")}\n@group(0) @binding(0) var bloxdSmDepth: texture_2d<f32>;\nstruct BloxdSmCamera {\n\teye: vec3f,\n\ttolerance: f32,\n\tright: vec3f,\n\tdepthScale: f32,\n\tup: vec3f,\n\tdepthBias: f32,\n\t … [truncated]
```

#### 439. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5804` → after: `L5804`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5804) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5804) · [Before (L5804)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5804)

```diff
-         return null !== (BB = null === (IB = this.targets) || void 0 === IB ? void 0 : IB.maskView) && void 0 !== BB ? BB : null
+         return null !== (tt = null === (et = this.targets) || void 0 === et ? void 0 : et.maskView) && void 0 !== tt ? tt : null
```

#### 440. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5851` → after: `L5851`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5851) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5851) · [Before (L5851)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5851)

```diff
-         const TB = (null !== (IB = BB._config.depth) && void 0 !== IB ? IB : BB._config.rt)._depthTexture;
+         const Ot = (null !== (et = tt._config.depth) && void 0 !== et ? et : tt._config.rt)._depthTexture;
```

#### 441. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5870` → after: `L5870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5870) · [Before (L5870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5870)

```diff
-           GB = null !== (ZB = BB._targetSignature._depthStencilFormat) && void 0 !== ZB ? ZB : IB.format,
+           mt = null !== (Vt = tt._targetSignature._depthStencilFormat) && void 0 !== Vt ? Vt : et.format,
```

#### 442. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5904` → after: `L5904`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5904) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5904) · [Before (L5904)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5904)

```diff
-               resource: (null !== vB && void 0 !== vB ? vB : IB).createView({
+               resource: (null !== dt && void 0 !== dt ? dt : et).createView({
```

#### 443. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5960` → after: `L5960`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5960) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5960) · [Before (L5960)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5960)

```diff
-         status: "fZ"
+         status: "nV"
```

#### 444. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5974` → after: `L5974`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5974) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5974) · [Before (L5974)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5974)

```diff
-               oN: BB.runtime
+               YE: tt.runtime
```

#### 445. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5978` → after: `L5978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5978) · [Before (L5978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5978)

```diff
-               return oB && MT(IB.programKey(oB, !1, JB)) ? (await oB.ready, BB.isCancelled() ? mv : oB.bindGroupLayout ? await async function(BB, IB, ZB, TB) {
+               return Dt && PO(et.programKey(Dt, !1, qt)) ? (await Dt.ready, tt.isCancelled() ? Gd : Dt.bindGroupLayout ? await async function(tt, et, Vt, Ot) {
```

#### 446. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5989` → after: `L5989`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5989) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5989) · [Before (L5989)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5989)

```diff
-                 const [vB, kB] = await Promise.all([GB, oB.built.then((() => null), (BB => null !== BB && void 0 !== BB ? BB : new Error("pipeline failed")))]);
+                 const [dt, jt] = await Promise.all([mt, Dt.built.then((() => null), (tt => null !== tt && void 0 !== tt ? tt : new Error("pipeline failed")))]);
```

#### 447. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5992` → after: `L5992`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5992) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5992) · [Before (L5992)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5992)

```diff
-                   nB = cB.length > 0 ? cB.map((BB => `${oB.name} ${BB.lineNum}:${BB.linePos}: ${BB.message}`)).join("\n") : `${oB.name}: ${uv(null!==kB&&void 0!==kB?kB:vB)}`;
+                   Xt = Ht.length > 0 ? Ht.map((tt => `${Dt.name} ${tt.lineNum}:${tt.linePos}: ${tt.message}`)).join("\n") : `${Dt.name}: ${Ud(null!==jt&&void 0!==jt?jt:dt)}`;
```

#### 448. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L5998` → after: `L5998`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R5998) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L5998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L5998) · [Before (L5998)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L5998)

```diff
-               }(IB, oB, IB.programKey(oB, "none" !== oB.texture, JB), ZB): (console.warn(`Shader pack: skipped the compile check for "${TB.name}", whose textures failed to load`), Xv)) : mv
+               }(et, Dt, et.programKey(Dt, "none" !== Dt.texture, qt), Vt): (console.warn(`Shader pack: skipped the compile check for "${Ot.name}", whose textures failed to load`), zd)) : Gd
```

#### 449. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6014-L6015` → after: `L6014-L6015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6014) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6014-L6015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6014-L6015) · [Before (L6014-L6015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6014-L6015)

```diff
-             }), null !== (GB = IB.timeoutMs) && void 0 !== GB ? GB : rv), TB = setInterval((() => {
-               IB.isCancelled() && oB("fZ")
+             }), null !== (mt = et.timeoutMs) && void 0 !== mt ? mt : kd), Ot = setInterval((() => {
+               et.isCancelled() && Dt("nV")
```

#### 450. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6034-L6035` → after: `L6034-L6035`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6034) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6034-L6035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6034-L6035) · [Before (L6034-L6035)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6034-L6035)

```diff
-       if ("fZ" === vB || ZB()) return {
-         status: "fZ"
+       if ("nV" === dt || Vt()) return {
+         status: "nV"
```

#### 451. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6048` → after: `L6048`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6048) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6048) · [Before (L6048)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6048)

```diff
-       } : "timeout" === vB ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(cB=BB.timeoutMs)&&void 0!==cB?cB:rv)/1e3} s`), {
+       } : "timeout" === dt ? (console.warn(`Shader pack: skipped the compile check, which didn't finish in ${(null!==(Ht=tt.timeoutMs)&&void 0!==Ht?Ht:kd)/1e3} s`), {
```

#### 452. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6068` → after: `L6068`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6068) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6068) · [Before (L6068)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6068)

```diff
-       return null !== (IB = null === BB || void 0 === BB ? void 0 : BB.message) && void 0 !== IB ? IB : String(BB)
+       return null !== (et = null === tt || void 0 === tt ? void 0 : tt.message) && void 0 !== et ? et : String(tt)
```

#### 453. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6074` → after: `L6074`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6074) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6074) · [Before (L6074)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6074)

```diff
-         nI(BB, "terrain", ZB, JB, TB ? `${TB.lineNum}:${TB.linePos} error: ${TB.message}` : null)
+         Qe(tt, "terrain", Vt, qt, Ot ? `${Ot.lineNum}:${Ot.linePos} error: ${Ot.message}` : null)
```

#### 454. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6077-L6080` → after: `L6077-L6080`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6077) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6077-L6080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6077-L6080) · [Before (L6077-L6080)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6077-L6080)

```diff
-     var lv = ZB(37609),
-       Av = ZB(37622),
-       tv = ZB(37635),
-       bv = ZB(3014);
+     var Yd = Vt(37798),
+       Bd = Vt(37814),
+       pd = Vt(37825),
+       xd = Vt(2947);
```

#### 455. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6092` → after: `L6092`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6092) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6092) · [Before (L6092)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6092)

```diff
-         YN: hB
+         ff: Qt
```

#### 456. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6094` → after: `L6094`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6094) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6094) · [Before (L6094)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6094)

```diff
-       let zB = BB.ND(vB[0], vB[1], vB[2]);
+       let lt = tt.pU(dt[0], dt[1], dt[2]);
```

#### 457. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6100` → after: `L6100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6100) · [Before (L6100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6100)

```diff
-         const oB = BB.ND(vB[0], vB[1], vB[2]),
+         const Dt = tt.pU(dt[0], dt[1], dt[2]),
```

#### 458. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6108` → after: `L6108`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6108) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6108) · [Before (L6108)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6108)

```diff
-           !BB.isDrawn(oB, GB, kB) && BB.hasParts(oB, GB, kB) && JB.add(`${oB},${GB},${kB}`)
+           !tt.isDrawn(Dt, mt, jt) && tt.hasParts(Dt, mt, jt) && qt.add(`${Dt},${mt},${jt}`)
```

#### 459. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6120` → after: `L6120`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6120) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6120) · [Before (L6120)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6120)

```diff
-         this.device = BB, this.kU = IB, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
+         this.device = tt, this.iN = et, this.data = new Float32Array(2048), this.words = new Uint32Array(this.data.buffer), this.buffer = void 0, this.free = [], this.next = 0, this.dirtyMin = 1 / 0, this.dirtyMax = -1, this.buffer = this.createBuffer()
```

#### 460. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6131` → after: `L6131`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6131) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6131) · [Before (L6131)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6131)

```diff
-         const IB = null !== (BB = this.free.pop()) && void 0 !== BB ? BB : this.next++;
+         const et = null !== (tt = this.free.pop()) && void 0 !== tt ? tt : this.next++;
```

#### 461. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6134` → after: `L6134`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6134) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6134) · [Before (L6134)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6134)

```diff
-           BB.set(this.data), this.data = BB, this.words = new Uint32Array(BB.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.kU()
+           tt.set(this.data), this.data = tt, this.words = new Uint32Array(tt.buffer), this.buffer.destroy(), this.buffer = this.createBuffer(), this.markDirty(0, this.next - 1), this.iN()
```

#### 462. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6178` → after: `L6178`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6178) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6178) · [Before (L6178)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6178)

```diff
-         this.device = BB, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout  … [truncated]
+         this.device = tt, this.opaqueRenderable = void 0, this.transparentRenderable = void 0, this.sceneDepth = null, this.sunShadow = null, this.shadowMask = null, this.chunks = new Map, this.materials = new Map, this.slots = void 0, this.sceneLayout = void 0, this.frameLayout  … [truncated]
```

#### 463. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6255` → after: `L6255`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6255) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6255) · [Before (L6255)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6255)

```diff
-               buffer: null !== BB && void 0 !== BB ? BB : this.slots.buffer
+               buffer: null !== tt && void 0 !== tt ? tt : this.slots.buffer
```

#### 464. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6260` → after: `L6260`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6260) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6260) · [Before (L6260)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6260)

```diff
-               buffer: null !== IB && void 0 !== IB ? IB : this.slots.buffer
+               buffer: null !== et && void 0 !== et ? et : this.slots.buffer
```

#### 465. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6266` → after: `L6266`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6266) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6266) · [Before (L6266)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6266)

```diff
-         const ZB = null !== IB && void 0 !== IB ? IB : BB;
+         const Vt = null !== et && void 0 !== et ? et : tt;
```

#### 466. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6305-L6306` → after: `L6305-L6306`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6305) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6305-L6306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6305-L6306) · [Before (L6305-L6306)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6305-L6306)

```diff
-         }, this.chunks.set(BB, JB), this.writeSlot(JB)), JB.material = BB.material ? this.materialFor(BB.material) : null, JB.packed = !!IB.packedVertices, JB.vertexCount = (0, dv.h)(IB), JB.faceCount = JB.vertexCount / 4;
-         const oB = null !== (TB = IB.faceGroups) && void 0 !== TB ? TB : null;
+         }, this.chunks.set(tt, qt), this.writeSlot(qt)), qt.material = tt.material ? this.materialFor(tt.material) : null, qt.packed = !!et.packedVertices, qt.vertexCount = (0, Jd.f)(et), qt.faceCount = qt.vertexCount / 4;
+         const Dt = null !== (Ot = et.faceGroups) && void 0 !== Ot ? Ot : null;
```

#### 467. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6308` → after: `L6308`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6308) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6308) · [Before (L6308)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6308)

```diff
-           const BB = lv.o;
+           const tt = Yd.p;
```

#### 468. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6311` → after: `L6311`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6311) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6311) · [Before (L6311)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6311)

```diff
-         this.drawWhole(JB), 0 !== JB.faceCount && (this.geometry.set(JB, IB) ? (JB.packed && this.slots.setFaces(JB.slot, JB.vertices.start + JB.faceCount, JB.faceCount), IB.FN && this.setChunkMeshLight(BB, IB.FN)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${JB.vertexCo … [truncated]
+         this.drawWhole(qt), 0 !== qt.faceCount && (this.geometry.set(qt, et) ? (qt.packed && this.slots.setFaces(qt.slot, qt.vertices.start + qt.faceCount, qt.faceCount), et.tf && this.setChunkMeshLight(tt, et.tf)) : this.warnOnce("tooBig", `Lite terrain: a chunk of ${qt.vertexCo … [truncated]
```

#### 469. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6343-L6346` → after: `L6343-L6346`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6343) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6343-L6346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6343-L6346) · [Before (L6343-L6346)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6343-L6346)

```diff
-         const ZB = BB.vz,
-           [TB, JB, oB] = ZB.UTB(IB.origin[0], IB.origin[1], IB.origin[2]),
-           GB = ZB.Wg.Cg(TB, JB, oB);
-         GB && (GB.yg = !0, GB.sg = !0, ZB.Ug(GB, !1))
+         const Vt = tt.sQ,
+           [Ot, qt, Dt] = Vt.hOt(et.origin[0], et.origin[1], et.origin[2]),
+           mt = Vt.lw.Ew(Ot, qt, Dt);
+         mt && (mt.Xw = !0, mt.ww = !0, Vt.Qw(mt, !1))
```

#### 470. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6350` → after: `L6350`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6350) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6350) · [Before (L6350)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6350)

```diff
-         BB.faceMask = ZB, BB.rangeCount = (0, Av.p)(IB, ZB, TB), BB.first0 = TB[0], BB.count0 = TB[1], BB.first1 = TB[2], BB.count1 = TB[3]
+         tt.faceMask = Vt, tt.rangeCount = (0, Bd.o)(et, Vt, Ot), tt.first0 = Ot[0], tt.count0 = Ot[1], tt.first1 = Ot[2], tt.count1 = Ot[3]
```

#### 471. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6363` → after: `L6363`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6363) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6363) · [Before (L6363)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6363)

```diff
-         if (!ZB) return this.warnOnce(`material:${BB.name}`, `Lite terrain cannot draw material "${BB.name}"; its chunks are skipped.`), null;
+         if (!Vt) return this.warnOnce(`material:${tt.name}`, `Lite terrain cannot draw material "${tt.name}"; its chunks are skipped.`), null;
```

#### 472. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6377` → after: `L6377`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6377) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6377) · [Before (L6377)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6377)

```diff
-             label: `terrain-material-${BB.name}`,
+             label: `terrain-material-${tt.name}`,
```

#### 473. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6384` → after: `L6384`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6384) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6384) · [Before (L6384)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6384)

```diff
-           U_: 0,
+           E1: 0,
```

#### 474. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6392` → after: `L6392`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6392) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6392) · [Before (L6392)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6392)

```diff
-           console.error(`Lite terrain failed to load the textures of material "${BB.name}"`, IB)
+           console.error(`Lite terrain failed to load the textures of material "${tt.name}"`, et)
```

#### 475. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6409` → after: `L6409`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6409) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6409) · [Before (L6409)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6409)

```diff
-             label: `terrain-material-${ZB}`,
+             label: `terrain-material-${Vt}`,
```

#### 476. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6456` → after: `L6456`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6456) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6456) · [Before (L6456)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6456)

```diff
-           BB.atlasCount = TB.length, BB.U_ = TB[0].layerWidth, BB.atlasLayers = TB[0].layers, IB.animDataPerTex && ZB.push({
+           tt.atlasCount = Ot.length, tt.E1 = Ot[0].layerWidth, tt.atlasLayers = Ot[0].layers, et.animDataPerTex && Vt.push({
```

#### 477. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6470` → after: `L6470`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6470) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6470) · [Before (L6470)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6470)

```diff
-           ZB.push(this.sampler), ZB.push(DB(this.device, TB, JB, oB, 1, `terrain-${IB}`).createView({
+           Vt.push(this.sampler), Vt.push(gt(this.device, Ot, qt, Dt, 1, `terrain-${et}`).createView({
```

#### 478. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6476` → after: `L6476`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6476) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6476) · [Before (L6476)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6476)

```diff
-           label: `terrain-material-${BB.model.name}`,
+           label: `terrain-material-${tt.model.name}`,
```

#### 479. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6487` → after: `L6487`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6487) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6487) · [Before (L6487)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6487)

```diff
-           JB = ZB ? ZB.oN : this.oN,
+           qt = Vt ? Vt.YE : this.YE,
```

#### 480. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6491` → after: `L6491`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6491) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6491) · [Before (L6491)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6491)

```diff
-             U_: BB.U_,
+             E1: tt.E1,
```

#### 481. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6494` → after: `L6494`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6494) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6494) · [Before (L6494)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6494)

```diff
-             alphaTest: BB.model.transparencyMode === OB.o.alphaTest,
+             alphaTest: tt.model.transparencyMode === vt.n.alphaTest,
```

#### 482. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6501` → after: `L6501`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6501) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6501) · [Before (L6501)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6501)

```diff
-           vB = "atlas" === BB.texture && BB.model.transparencyMode === OB.o.opaque && iT(GB.packVariant);
+           dt = "atlas" === tt.texture && tt.model.transparencyMode === vt.n.opaque && SO(mt.packVariant);
```

#### 483. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6510` → after: `L6510`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6510) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6510) · [Before (L6510)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6510)

```diff
-         return void 0 === ZB ? OT : {
+         return void 0 === Vt ? vO : {
```

#### 484. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6522` → after: `L6522`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6522) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6522) · [Before (L6522)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6522)

```diff
-         return BB.model.transparencyMode === OB.o.alphaBlend
+         return tt.model.transparencyMode === vt.n.alphaBlend
```

#### 485. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6547` → after: `L6547`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6547) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6547) · [Before (L6547)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6547)

```diff
-         return void 0 !== JB ? JB : (this.startPipeline(TB, BB, this.programKey(BB, IB), ZB), null)
+         return void 0 !== qt ? qt : (this.startPipeline(Ot, tt, this.programKey(tt, et), Vt), null)
```

#### 486. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6556-L6557` → after: `L6556-L6557`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6556) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6556-L6557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6556-L6557) · [Before (L6556-L6557)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6556-L6557)

```diff
-         } = BB.model, kB = this.packVariant(BB, this.oN), cB = (IB ? 2 : 0) + (ZB ? 1 : 0), nB = BB.pipelineIds[cB];
-         if (null !== nB && nB.lighting === JB && nB.dirLightCount === oB && nB.packVariant === kB && nB.transparencyMode === GB && nB.cull === vB && nB.atlasCount === BB.atlasCount && nB.U_ === BB.U_ && nB.atlasLayers === BB.atlasLayers && nB.colorFormat === TB._colorFormat && nB … [truncated]
+         } = tt.model, jt = this.packVariant(tt, this.YE), Ht = (et ? 2 : 0) + (Vt ? 1 : 0), Xt = tt.pipelineIds[Ht];
+         if (null !== Xt && Xt.lighting === qt && Xt.dirLightCount === Dt && Xt.packVariant === jt && Xt.transparencyMode === mt && Xt.cull === dt && Xt.atlasCount === tt.atlasCount && Xt.E1 === tt.E1 && Xt.atlasLayers === tt.atlasLayers && Xt.colorFormat === Ot._colorFormat && Xt … [truncated]
```

#### 487. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6571` → after: `L6571`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6571) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6571) · [Before (L6571)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6571)

```diff
-           U_: BB.U_,
+           E1: tt.E1,
```

#### 488. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6584` → after: `L6584`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6584) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6584) · [Before (L6584)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6584)

```diff
-         return null !== (TB = this.builds.get(JB)) && void 0 !== TB ? TB : this.startPipeline(JB, BB, IB, ZB)
+         return null !== (Ot = this.builds.get(qt)) && void 0 !== Ot ? Ot : this.startPipeline(qt, tt, et, Vt)
```

#### 489. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6608` → after: `L6608`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6608) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6608) · [Before (L6608)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6608)

```diff
-             offset: xI.d.aZ,
+             offset: xe.d.oV,
```

#### 490. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6647` → after: `L6647`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6647) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6647) · [Before (L6647)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6647)

```diff
-             }, TB, GB ? Bk : null),
+             }, Ot, mt ? Vj : null),
```

#### 491. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6650` → after: `L6650`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6650) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6650) · [Before (L6650)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6650)

```diff
-               depthCompare: null !== (JB = TB._depthCompare) && void 0 !== JB ? JB : wI,
+               depthCompare: null !== (qt = Ot._depthCompare) && void 0 !== qt ? qt : he,
```

#### 492. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6668` → after: `L6668`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6668) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6668) · [Before (L6668)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6668)

```diff
-           this.compiling -= FB, console.error(`Lite terrain pipeline ${oB} failed`, BB), fv(this.device, ZB, oB, cB, BB)
+           this.compiling -= Et, console.error(`Lite terrain pipeline ${Dt} failed`, tt), Ad(this.device, Vt, Dt, Ht, tt)
```

#### 493. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6679` → after: `L6679`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6679) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6679) · [Before (L6679)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6679)

```diff
-           JB = this.device.createRenderPipelineAsync(ZB ? IB : {
+           qt = this.device.createRenderPipelineAsync(Vt ? et : {
```

#### 494. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6689` → after: `L6689`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6689) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6689) · [Before (L6689)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6689)

```diff
-             label: `${IB.label}-prepass`,
+             label: `${et.label}-prepass`,
```

#### 495. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6707` → after: `L6707`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6707) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6707) · [Before (L6707)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6707)

```diff
-         console.error(`Lite terrain pipeline ${ZB} failed`, TB), fv(this.device, IB, ZB, null, TB);
+         console.error(`Lite terrain pipeline ${Vt} failed`, Ot), Ad(this.device, et, Vt, null, Ot);
```

#### 496. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6743` → after: `L6743`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6743) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6743) · [Before (L6743)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6743)

```diff
-           Nz: GB
+           ql: mt
```

#### 497. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6745-L6748` → after: `L6745-L6748`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6745) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6745-L6748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6745-L6748) · [Before (L6745-L6748)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6745-L6748)

```diff
-         this.lighting = BB.Xg;
-         const vB = (0, Wv.v)(IB);
-         this.dirLightCount = Math.min(vB, 4), this.oN = null !== (ZB = GB.oN) && void 0 !== ZB ? ZB : null, vB > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(BB, IB), this.animateMaterials(IB.animTick);
-         const kB = GB.Mz,
+         this.lighting = tt.Rw;
+         const dt = (0, bd.w)(et);
+         this.dirLightCount = Math.min(dt, 4), this.YE = null !== (Vt = mt.YE) && void 0 !== Vt ? Vt : null, dt > 4 && this.warnOnce("dirLights", "Lite terrain lights with the first 4 directional lights only."), this.writeFrameUniforms(tt, et), this.animateMaterials(et.animTick);
+         const jt = mt.bl,
```

#### 498. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6761` → after: `L6761`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6761) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6761) · [Before (L6761)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6761)

```diff
-         const gB = GB.vz.mBB,
+         const wt = mt.sQ.vtt,
```

#### 499. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6764` → after: `L6764`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6764) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6764) · [Before (L6764)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6764)

```diff
-         const UB = !!this.oN && YT(this.oN.defineFor("liquid"));
+         const Mt = !!this.YE && WO(this.YE.defineFor("liquid"));
```

#### 500. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6766-L6767` → after: `L6766-L6767`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6766) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6766-L6767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6766-L6767) · [Before (L6766-L6767)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6766-L6767)

```diff
-         const dB = null !== (TB = null === (JB = GB.pW) || void 0 === JB ? void 0 : JB.visibility) && void 0 !== TB ? TB : null,
-           CB = this.visCull && zB && 0 === this.compiling && null !== dB && GB.vz.LTB[0] >= this.visCullMinDistance ? this.target : null,
+         const Jt = null !== (Ot = null === (qt = mt.aJ) || void 0 === qt ? void 0 : qt.visibility) && void 0 !== Ot ? Ot : null,
+           Ct = this.visCull && lt && 0 === this.compiling && null !== Jt && mt.sQ.BOt[0] >= this.visCullMinDistance ? this.target : null,
```

#### 501. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6778` → after: `L6778`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6778) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6778) · [Before (L6778)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6778)

```diff
-             if (0 === FB && (FB = (0, Av.e)(hB, IB.renderWidth, IB.renderHeight), FB !== this.faceFocalPx && (this.faceFocalPx = FB, NB = ++this.faceEpoch)), BB.faceEpoch !== NB) {
+             if (0 === Et && (Et = (0, Bd.d)(Qt, et.renderWidth, et.renderHeight), Et !== this.faceFocalPx && (this.faceFocalPx = Et, ft = ++this.faceEpoch)), tt.faceEpoch !== ft) {
```

#### 502. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6798` → after: `L6798`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6798) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6798) · [Before (L6798)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6798)

```diff
-           if (CB && (Number.isNaN(aB.key) && (aB.ci = Math.floor(aB.origin[0] / gB), aB.cj = Math.floor(aB.origin[1] / gB), aB.ck = Math.floor(aB.origin[2] / gB), aB.key = (0, bv.i)(aB.ci, aB.cj, aB.ck)), (!TB || BB < 1 || JB || !this.batchDraws(ZB, aB.packed, CB)) && this.visSee … [truncated]
+           if (Ct && (Number.isNaN(Rt.key) && (Rt.ci = Math.floor(Rt.origin[0] / wt), Rt.cj = Math.floor(Rt.origin[1] / wt), Rt.ck = Math.floor(Rt.origin[2] / wt), Rt.key = (0, xd.e)(Rt.ci, Rt.cj, Rt.ck)), (!Ot || tt < 1 || qt || !this.batchDraws(Vt, Rt.packed, Ct)) && this.visSee … [truncated]
```

#### 503. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6803` → after: `L6803`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6803) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6803) · [Before (L6803)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6803)

```diff
-           if (!(0, vv.b)(IB.frustum, oB, vB, kB, gB)) continue;
+           if (!(0, dd.d)(et.frustum, Dt, dt, jt, wt)) continue;
```

#### 504. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6812` → after: `L6812`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6812) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6812) · [Before (L6812)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6812)

```diff
-         null === (oB = (0, ro.v)(GB)) || void 0 === oB || oB.update(IB.frustum, this.originOffset, gB, pB);
+         null === (Dt = (0, FD.E)(mt)) || void 0 === Dt || Dt.update(et.frustum, this.originOffset, wt, ct);
```

#### 505. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6824-L6825` → after: `L6824-L6825`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6824) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6824-L6825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6824-L6825) · [Before (L6824-L6825)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6824-L6825)

```diff
-           vz: TB
-         } = BB.Nz, JB = TB.mBB, oB = this.visPassable, GB = this.eye[0] + this.originOffset[0], vB = this.eye[1] + this.originOffset[1], kB = this.eye[2] + this.originOffset[2];
+           sQ: Ot
+         } = tt.ql, qt = Ot.vtt, Dt = this.visPassable, mt = this.eye[0] + this.originOffset[0], dt = this.eye[1] + this.originOffset[1], jt = this.eye[2] + this.originOffset[2];
```

#### 506. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6827-L6828` → after: `L6827-L6828`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6827) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6827-L6828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6827-L6828) · [Before (L6827-L6828)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6827-L6828)

```diff
-         const [cB, nB] = TB.LTB, hB = ZB.update(GB, vB, kB, JB, cB, nB, oB);
-         return this.visSweeps = ZB.sweeps, hB ? ZB : null
+         const [Ht, Xt] = Ot.BOt, Qt = Vt.update(mt, dt, jt, qt, Ht, Xt, Dt);
+         return this.visSweeps = Vt.sweeps, Qt ? Vt : null
```

#### 507. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6842` → after: `L6842`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6842) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6842) · [Before (L6842)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6842)

```diff
-         let oB = null !== (TB = this.visBatchDraws.get(BB)) && void 0 !== TB ? TB : 0;
+         let Dt = null !== (Ot = this.visBatchDraws.get(tt)) && void 0 !== Ot ? Ot : 0;
```

#### 508. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6844` → after: `L6844`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6844) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6844) · [Before (L6844)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6844)

```diff
-           oB |= 1 << JB | (!!BB.bindGroupLayout && this.canDraw(BB, IB) && !!this.pipelines.get(this.pipelineIdNow(BB, IB, !1, ZB)) ? 2 << JB : 0), this.visBatchDraws.set(BB, oB)
+           Dt |= 1 << qt | (!!tt.bindGroupLayout && this.canDraw(tt, et) && !!this.pipelines.get(this.pipelineIdNow(tt, et, !1, Vt)) ? 2 << qt : 0), this.visBatchDraws.set(tt, Dt)
```

#### 509. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6850` → after: `L6850`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6850) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6850) · [Before (L6850)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6850)

```diff
-           Nz: TB
+           ql: Ot
```

#### 510. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6852-L6853` → after: `L6852-L6853`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6852) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6852-L6853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6852-L6853) · [Before (L6852-L6853)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6852-L6853)

```diff
-           vz: JB
-         } = TB, oB = JB.mBB, GB = new Set;
+           sQ: qt
+         } = Ot, Dt = qt.vtt, mt = new Set;
```

#### 511. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6857` → after: `L6857`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6857) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6857) · [Before (L6857)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6857)

```diff
-           hB = new fJ.rN,
+           Qt = new Aq.uf,
```

#### 512. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6867` → after: `L6867`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6867) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6867) · [Before (L6867)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6867)

```diff
-             ND: (BB, IB, ZB) => JB.ND(BB, IB, ZB),
+             pU: (tt, et, Vt) => qt.pU(tt, et, Vt),
```

#### 513. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6870` → after: `L6870`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6870) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6870) · [Before (L6870)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6870)

```diff
-             YN: oB,
+             ff: Dt,
```

#### 514. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6872-L6873` → after: `L6872-L6873`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6872) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6872-L6873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6872-L6873) · [Before (L6872-L6873)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6872-L6873)

```diff
-             hasParts: (BB, IB, ZB) => GB.has((0, bv.i)(BB, IB, ZB))
-           }, [this.eye[0] + kB, this.eye[1] + cB, this.eye[2] + nB], ((BB, IB) => (fJ.rN.TransformCoordinatesFromFloatsToRef(BB, IB, .5, vB, hB), [hB.x + kB, hB.y + cB, hB.z + nB])), (JB.LTB[0] + 1) * oB);
+             hasParts: (tt, et, Vt) => mt.has((0, xd.e)(tt, et, Vt))
+           }, [this.eye[0] + jt, this.eye[1] + Ht, this.eye[2] + Xt], ((tt, et) => (Aq.uf.TransformCoordinatesFromFloatsToRef(tt, et, .5, dt, Qt), [Qt.x + jt, Qt.y + Ht, Qt.z + Xt])), (qt.BOt[0] + 1) * Dt);
```

#### 515. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6875` → after: `L6875`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6875) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6875) · [Before (L6875)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6875)

```diff
-         for (const FB of zB) this.warnOnce(`vis:${FB}`, `Lite terrain cave culling skipped chunk ${FB}, which a ray from the eye reaches.`)
+         for (const Et of lt) this.warnOnce(`vis:${Et}`, `Lite terrain cave culling skipped chunk ${Et}, which a ray from the eye reaches.`)
```

#### 516. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6879` → after: `L6879`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6879) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6879) · [Before (L6879)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6879)

```diff
-         null !== (BB = this.oN) && void 0 !== BB && BB.isRunning() && (this.shaderPackInputs ??= new Do(this.device, this.oN.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.oN, this.eye, this.lighting))
+         null !== (tt = this.YE) && void 0 !== tt && tt.isRunning() && (this.shaderPackInputs ??= new xD(this.device, this.YE.textureLayers(), this.sunShadow), this.shaderPackInputs.write(this.YE, this.eye, this.lighting))
```

#### 517. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6887-L6888` → after: `L6887-L6888`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6887) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6887-L6888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6887-L6888) · [Before (L6887-L6888)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6887-L6888)

```diff
-         const cB = YT(kB) ? null !== (TB = null === (JB = this.sceneDepth) || void 0 === JB ? void 0 : JB.view) && void 0 !== TB ? TB : this.standIn() : null,
-           nB = vB ? null !== (oB = null === (GB = this.shadowMask) || void 0 === GB ? void 0 : GB.view) && void 0 !== oB ? oB : this.standIn() : null;
+         const Ht = WO(jt) ? null !== (Ot = null === (qt = this.sceneDepth) || void 0 === qt ? void 0 : qt.view) && void 0 !== Ot ? Ot : this.standIn() : null,
+           Xt = dt ? null !== (Dt = null === (mt = this.shadowMask) || void 0 === mt ? void 0 : mt.view) && void 0 !== Dt ? Dt : this.standIn() : null;
```

#### 518. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6901` → after: `L6901`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6901) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6901) · [Before (L6901)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6901)

```diff
-         return null !== (BB = null === (IB = this.shaderPackInputs) || void 0 === IB ? void 0 : IB.bindGroupFor(null, !0)) && void 0 !== BB ? BB : null
+         return null !== (tt = null === (et = this.shaderPackInputs) || void 0 === et ? void 0 : et.bindGroupFor(null, !0)) && void 0 !== tt ? tt : null
```

#### 519. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6941` → after: `L6941`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6941) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6941) · [Before (L6941)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6941)

```diff
-         return !(!IB || !(0, lv.r)(BB.model)) && (!this.oN || ! function(BB) {
+         return !(!et || !(0, Yd.t)(tt.model)) && (!this.YE || ! function(tt) {
```

#### 520. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6944` → after: `L6944`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6944) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6944) · [Before (L6944)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6944)

```diff
-         }(this.packVariant(BB, this.oN)))
+         }(this.packVariant(tt, this.YE)))
```

#### 521. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6949-L6950` → after: `L6949-L6950`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6949) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6949-L6950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6949-L6950) · [Before (L6949-L6950)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6949-L6950)

```diff
-         if ((0, Wv.z)(BB, ZB), ZB[TB.fogInfos] = IB.fogEnabled ? IB.fogMode : 0, ZB[TB.fogInfos + 1] = IB.fogStart, ZB[TB.fogInfos + 2] = IB.fogEnd, ZB[TB.fogInfos + 3] = IB.fogDensity, ZB.set(IB.fogColour, TB.fogColour), ZB[TB.outputHeight] = IB.renderHeight, ZB.set(IB.ambientCo … [truncated]
-           const IB = (0, dv.i)(BB.Tg, BB.aN, BB.HN);
+         if ((0, bd.z)(tt, Vt), Vt[Ot.fogInfos] = et.fogEnabled ? et.fogMode : 0, Vt[Ot.fogInfos + 1] = et.fogStart, Vt[Ot.fogInfos + 2] = et.fogEnd, Vt[Ot.fogInfos + 3] = et.fogDensity, Vt.set(et.fogColour, Ot.fogColour), Vt[Ot.outputHeight] = et.renderHeight, Vt.set(et.ambientCo … [truncated]
+           const et = (0, Jd.g)(tt.xf, tt.Nf, tt.af);
```

#### 522. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6961` → after: `L6961`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6961) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6961) · [Before (L6961)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6961)

```diff
-         return !("atlas" === BB.texture && !IB) || (this.warnOnce(`stride:${BB.id}`, `Lite terrain: material "${BB.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
+         return !("atlas" === tt.texture && !et) || (this.warnOnce(`stride:${tt.id}`, `Lite terrain: material "${tt.model.name}" samples the atlas but its mesh has no quad records, which hold its atlas indices.`), !1)
```

#### 523. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6969` → after: `L6969`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6969) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6969) · [Before (L6969)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6969)

```diff
-           JB && (BB.setPipeline(JB), BB.setBindGroup(2, TB.material.bindGroup), this.oN && this.bindShaderPackInputs(BB, TB.material, this.oN, this.prepassOf.has(JB)), ZB += this.drawBatch(BB, TB))
+           qt && (tt.setPipeline(qt), tt.setBindGroup(2, Ot.material.bindGroup), this.YE && this.bindShaderPackInputs(tt, Ot.material, this.YE, this.prepassOf.has(qt)), Vt += this.drawBatch(tt, Ot))
```

#### 524. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L6978` → after: `L6978`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R6978) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L6978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L6978) · [Before (L6978)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L6978)

```diff
-           JB = this.oN;
+           qt = this.YE;
```

#### 525. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7015` → after: `L7015`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7015) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L7015) · [Before (L7015)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L7015)

```diff
-           vB && (vB !== TB && (BB.setPipeline(vB), TB = vB, this.oN && this.bindShaderPackInputs(BB, GB, this.oN)), GB !== JB && (BB.setBindGroup(2, GB.bindGroup), JB = GB), ZB += this.geometry.draw(BB, oB, this.lighting))
+           dt && (dt !== Ot && (tt.setPipeline(dt), Ot = dt, this.YE && this.bindShaderPackInputs(tt, mt, this.YE)), mt !== qt && (tt.setBindGroup(2, mt.bindGroup), qt = mt), Vt += this.geometry.draw(tt, Dt, this.lighting))
```

#### 526. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7022` → after: `L7022`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7022) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L7022) · [Before (L7022)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L7022)

```diff
-       return `${VT(BB)}|${BB.atlasLayers}|${BB.U_}|${IB}|${ZB}|${TB._colorFormat}|${TB._depthStencilFormat}|${TB._sampleCount}`
+       return `${nO(tt)}|${tt.atlasLayers}|${tt.E1}|${et}|${Vt}|${Ot._colorFormat}|${Ot._depthStencilFormat}|${Ot._sampleCount}`
```

#### 527. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7100` → after: `L7100`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7100) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L7100) · [Before (L7100)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L7100)

```diff
-         return (BB.hA !== this.builtVersion || this.blockCaster.length !== IB) && (this.build(BB, IB), !0)
+         return (tt.JG !== this.builtVersion || this.blockCaster.length !== et) && (this.build(tt, et), !0)
```

#### 528. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7103` → after: `L7103`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7103) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L7103) · [Before (L7103)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L7103)

```diff
-         this.builtVersion = BB.hA;
+         this.builtVersion = tt.JG;
```

#### 529. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7118` → after: `L7118`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7118) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L7118) · [Before (L7118)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L7118)

```diff
-         const ZB = BB.l_[IB];
+         const Vt = tt.f6[et];
```

#### 530. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7123` → after: `L7123`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7123) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L7123) · [Before (L7123)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L7123)

```diff
-           return this.warnOnce(`Sun shadows: no caster option for block ${IB}: ${TB instanceof Error?TB.message:String(TB)}`), null
+           return this.warnOnce(`Sun shadows: no caster option for block ${et}: ${Ot instanceof Error?Ot.message:String(Ot)}`), null
```

#### 531. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7133` → after: `L7133`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7133) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L7133) · [Before (L7133)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L7133)

```diff
-             key: `planes:${JSON.stringify(BB)}`,
+             key: `planes:${JSON.stringify(tt)}`,
```

#### 532. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7137-L7138` → after: `L7137-L7138`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7137) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7137-L7138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L7137-L7138) · [Before (L7137-L7138)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L7137-L7138)

```diff
-         if (BB.NF[IB]) return null;
-         const JB = BB.qF[IB] ? BB.HA(IB) : null;
+         if (tt.VE[et]) return null;
+         const qt = tt.qE[et] ? tt.vG(et) : null;
```

#### 533. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7156` → after: `L7156`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7156) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L7156) · [Before (L7156)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L7156)

```diff
-           }(BB) ? yZ : BB.every((BB => 0 === BB)) ? null : {
+           }(tt) ? aV : tt.every((tt => 0 === tt)) ? null : {
```

#### 534. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7158` → after: `L7158`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7158) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L7158) · [Before (L7158)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L7158)

```diff
-             key: `shape:${BB.join(",")}`,
+             key: `shape:${tt.join(",")}`,
```

#### 535. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7162` → after: `L7162`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7162) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L7162) · [Before (L7162)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L7162)

```diff
-         if (BB.Gs[IB] || !BB.Jg[IB]) return null;
+         if (tt.pC[et] || !tt.Tf[et]) return null;
```

#### 536. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7164` → after: `L7164`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7164) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L7164) · [Before (L7164)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L7164)

```diff
-           const JB = BB.og[6 * IB + TB];
+           const qt = tt.gf[6 * et + Ot];
```

#### 537. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7167` → after: `L7167`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7167) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L7167) · [Before (L7167)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L7167)

```diff
-             if (!BB || BB.gg) return null;
+             if (!tt || tt.jw) return null;
```

#### 538. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7169-L7171` → after: `L7169-L7171`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7169) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7169-L7171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L7169-L7171) · [Before (L7169-L7171)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L7169-L7171)

```diff
-               y_: IB,
-               U_: ZB,
-               q_: TB
+               R7: et,
+               E1: Vt,
+               J7: Ot
```

#### 539. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7190` → after: `L7190`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7190) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L7190) · [Before (L7190)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L7190)

```diff
-           }(BB.Ng(JB)), ZB.set(JB, oB)), oB
+           }(tt.dw(qt)), Vt.set(qt, Dt)), Dt
```

#### 540. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7195` → after: `L7195`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7195) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L7195) · [Before (L7195)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L7195)

```diff
-             return null !== (IB = null === BB || void 0 === BB ? void 0 : BB.width) && void 0 !== IB ? IB : 1
+             return null !== (et = null === tt || void 0 === tt ? void 0 : tt.width) && void 0 !== et ? et : 1
```

#### 541. `bundles/bloxd.io/chunks/js/274.js` (Changed code · before: `L7198` → after: `L7198`)

- **Links**: [Diff Hunk](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3R7198) · [File Diff](https://github.com/imu31465/Bloxd-Build-Monitor/compare/b4e1daae7e6b1111c92ff0193dea5054a123c4fd...build/bloxd.io/igzsf.a0b73a5f#diff-55324bedea79be5cc3f28dcb36c61ab0776a908e63b78933313dffc93f19a3b3) · [After (L7198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/build/bloxd.io/igzsf.a0b73a5f/bundles/bloxd.io/chunks/js/274.js#L7198) · [Before (L7198)](https://github.com/imu31465/Bloxd-Build-Monitor/blob/b4e1daae7e6b1111c92ff0193dea5054a123c4fd/bundles/bloxd.io/chunks/js/274.js#L7198)

```diff
-           kB = oB.map((BB => null === BB ? vB : kk(BB.alpha, BB.width, BB.width, GB)));
+           jt = Dt.map((tt => null === tt ? dt : Hj(tt.alpha, tt.width, tt.width, mt)));
```
