# WASM module: `bloxd_wasm_models_bg`

> environment **bloxd.io** · build `welxxc.ffac0572` · analyzed 2026-11-28T21:24:40+09:00
> source: https://bloxd.io/static/media/bloxd_wasm_models_bg.fd4d14f832799978af36.wasm
> 478,484 bytes (467.3 KB) · sha256 `6bd85ee20b75ed8b…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- size 478,723 → 478,484 bytes (-239)
- data bytes 76,274 → 76,035
- name-section module id `32d7472f8b7c4c24.893` → `bd99babec4e0c543.893` (numeric version suffix unchanged — same module version, re-randomized prefix)
- export identifiers rotated by the obfuscator: 1/22 names kept (identifier names are randomly assigned per build; compare signatures instead)
- new embedded strings: `/rustc/b940084d7eb6a299eb4bfeb8e34901bc051e7ac4/library/allo`; `/rustc/b940084d7eb6a299eb4bfeb8e34901bc051e7ac4/library/allo`; `/rustc/b940084d7eb6a299eb4bfeb8e34901bc051e7ac4/library/allo`; `/rustc/b940084d7eb6a299eb4bfeb8e34901bc051e7ac4/library/core`; `/rustc/b940084d7eb6a299eb4bfeb8e34901bc051e7ac4/library/core`; `d/index.crates.io-1949cf8c6b5b557f/draco-core-2.5.0/src/pred`
- removed embedded strings: `h/.rustup/toolchains/1.99.0-x86_64-unknown-linux-gnu/lib/rus`; `h/.rustup/toolchains/1.99.0-x86_64-unknown-linux-gnu/lib/rus`; `h/.rustup/toolchains/1.99.0-x86_64-unknown-linux-gnu/lib/rus`; `h/.rustup/toolchains/1.99.0-x86_64-unknown-linux-gnu/lib/rus`; `h/.rustup/toolchains/1.99.0-x86_64-unknown-linux-gnu/lib/rus`; `h/.rustup/toolchains/1.99.0-x86_64-unknown-linux-gnu/lib/rus`

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 290 / 5 |
| Exports / imports | 22 / 5 |
| Code bytes (function bodies) | 399,466 (390.1 KB) |
| Total local variables | 2,166 |
| Instructions (scanable bodies) | 189,066 |
| Data segments / bytes | 195 / 76,035 |
| Element segments / entries | 1 / 46 |
| Memories / tables / globals | 1 / 1 / 3 |
| name-section module id | `bd99babec4e0c543.893` |
| Sections | 12 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 209 | 29 |
| 2 | import | 61 | 5 |
| 3 | function | 292 | 290 |
| 4 | table | 5 | 1 |
| 5 | memory | 3 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 173 | 22 |
| 9 | element | 90 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 399,934 | 290 |
| 11 | data | 77,623 | 195 |
| 0 | custom:name | 28 | — |

## Types

29 function types; top shapes: `(i32) -> ()` ×1, `(i32 i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `() -> (i32)` ×1

## Imports

5 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `izHN.uxZD` | func | `(i32) -> ()` |
| 1 | `izHN.jlRZ` | func | `(i32) -> ()` |
| 2 | `izHN.Fpmp` | func | `(i32 i32) -> ()` |
| 3 | `izHN.gxzz` | func | `(i32 i32) -> (i32)` |
| 4 | `izHN.ArVW` | func | `(i32 i32) -> ()` |

## Exports

22 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `memory` | memory | 0 | `` |
| `Lpv7` | func | 267 | `() -> (i32)` |
| `jE3t` | func | 93 | `() -> (i32)` |
| `Mgji` | func | 220 | `(i32) -> ()` |
| `eEAZ` | func | 256 | `(i32 i32 i32) -> (i32 i32)` |
| `j0RC` | func | 152 | `() -> (i32)` |
| `VA8K` | func | 273 | `(i32 i32 i32) -> ()` |
| `lGAY` | func | 213 | `(i32) -> (i32)` |
| `KP0t` | func | 252 | `(i32 i32 i32 i32) -> (i32 i32)` |
| `D4h2` | func | 245 | `() -> ()` |
| `BeiQ` | global | 1 | `` |
| `bUZW` | func | 290 | `(i32) -> (i32)` |
| `Z1Mm` | func | 258 | `() -> (i32 i32)` |
| `n1o3` | func | 49 | `() -> (i32)` |
| `sruK` | func | 74 | `() -> (i32)` |
| `ALJB` | func | 248 | `(i32 i32 i32 i32) -> (i32)` |
| `HfMx` | global | 2 | `` |
| `ytK4` | func | 293 | `() -> (i32)` |
| `t8Vg` | func | 245 | `() -> ()` |
| `qHpc` | func | 137 | `(i32 i32) -> ()` |
| `PN2X` | func | 246 | `(i32 i32) -> (i32)` |
| `dzx8` | func | 291 | `(i32) -> ()` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- memory 0: min 18 pages · max ∞ · shared=False
- table 0: funcref · min 47 · max 47
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 1130480, `i32` = i32.const 1130700

## Functions

- 290 bodies · 399,466 code bytes · avg 1.3 KB
- instruction scan: 290 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 33 |
| <= 64 bytes | 15 |
| <= 128 bytes | 71 |
| <= 256 bytes | 52 |
| <= 512 bytes | 39 |
| <= 1024 bytes | 36 |
| <= 2048 bytes | 20 |
| <= 4096 bytes | 12 |
| <= 8192 bytes | 8 |
| <= 16384 bytes | 1 |
| > 16384 bytes | 3 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 55 | 28,762 | 13,565 | local.get×3772, i32.const×1948, i32.add×682, local.tee×675, local.set×619 |
| 1 | `(i32 i32 i32 i32 i32) -> ()` | 78 | 10,097 | 5,033 | local.get×1420, i32.const×605, local.set×348, local.tee×314, i32.load×297 |
| 2 | `(i32 i32 i32 i32) -> (i32)` | 31 | 7,875 | 3,897 | local.get×1115, i32.const×496, local.set×306, i32.load×194, end×183 |
| 3 | `(i32 i32 i32) -> ()` | 26 | 7,866 | 3,770 | local.get×1198, i32.const×524, i32.add×254, local.tee×207, local.set×199 |
| 4 | `(i32 i32) -> ()` | 33 | 7,753 | 4,082 | local.get×1044, i32.const×407, local.set×303, i64.const×219, end×203 |
| 5 | `(i32 i32 i32) -> ()` | 20 | 6,275 | 3,081 | local.get×935, i32.const×508, i32.load×276, i32.add×225, local.set×196 |
| 6 | `(i32 i32 i32 i32) -> ()` | 69 | 6,977 | 3,208 | local.get×996, i32.const×310, i32.load×175, local.tee×174, local.set×166 |
| 7 | `(i32 i32 i32 i32) -> ()` | 63 | 6,030 | 3,095 | local.get×872, i32.const×392, local.set×265, i32.add×175, local.tee×165 |
| 8 | `(i32 f64) -> ()` | 37 | 6,275 | 2,908 | local.get×655, i32.const×373, local.set×241, i32.add×178, local.tee×151 |
| 9 | `(i32) -> (i32)` | 9 | 4,901 | 2,140 | local.get×498, i32.const×447, i32.store×201, local.tee×154, i32.load×103 |
| 10 | `(i32 i32 i32 i32) -> ()` | 10 | 3,837 | 2,049 | local.get×559, i32.const×241, local.set×149, local.tee×136, end×133 |
| 11 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 103 | 85,172 | 40,199 | local.get×11216, i32.const×5899, i32.add×2050, local.tee×2011, i32.load×1960 |
| 12 | `(i32 i32 i32) -> ()` | 26 | 3,561 | 1,846 | local.get×491, i32.const×276, local.set×156, i32.add×151, i32.load×109 |
| 13 | `(i32 i32 i32) -> ()` | 53 | 3,891 | 1,642 | local.get×490, i32.const×173, local.set×128, i64.store×90, i64.load×69 |
| 14 | `(i32 i32 i32 i32 i32 i32) -> ()` | 15 | 2,806 | 1,502 | local.get×464, i32.const×170, local.tee×135, i32.add×116, i32.load×111 |
| 15 | `(i32 i32 i32 i32 i32 i32) -> ()` | 15 | 2,683 | 1,454 | local.get×461, i32.const×172, i32.add×115, local.tee×114, local.set×81 |
| 16 | `(i32 i32) -> ()` | 31 | 3,028 | 1,428 | local.get×423, i32.const×190, local.set×88, i32.add×78, i32.load×75 |
| 17 | `(i32 i32 i32) -> ()` | 45 | 2,993 | 1,402 | local.get×448, i32.const×156, local.tee×105, i32.add×60, local.set×59 |
| 18 | `(i32 i32 i32) -> ()` | 16 | 2,939 | 1,478 | local.get×429, i32.const×127, local.set×95, end×80, local.tee×70 |
| 19 | `(i32 i32 i32 i32) -> ()` | 11 | 3,502 | 1,302 | local.get×588, i64.store×217, i64.load×188, i32.const×66, i32.load×44 |
| 20 | `(i32 i32 i32 i32 i32) -> ()` | 25 | 2,447 | 1,247 | local.get×353, i32.const×177, local.set×81, end×69, i32.add×66 |
| 21 | `(i32 i32 i32) -> ()` | 21 | 2,049 | 1,080 | local.get×285, i32.const×153, local.set×100, end×71, local.tee×54 |
| 22 | `(i32 i32 i32) -> (i32)` | 14 | 1,936 | 989 | local.get×265, i32.const×135, br_if×75, local.set×72, i32.load×70 |
| 23 | `(i32 i32) -> ()` | 27 | 1,964 | 958 | local.get×296, i32.const×127, local.set×82, i32.add×48, end×42 |
| 24 | `(i32 i32 i32) -> ()` | 21 | 1,778 | 910 | local.get×248, i32.const×90, local.set×86, end×57, local.tee×50 |
| 25 | `(i32 i32) -> ()` | 12 | 1,774 | 878 | local.get×277, i32.const×125, i32.load×85, local.set×69, local.tee×47 |
| 30 | `(i32 i32) -> (i32)` | 16 | 2,087 | 1,091 | local.get×310, i32.const×166, i32.add×78, local.tee×66, local.set×58 |
| 31 | `(i32) -> ()` | 8 | 1,379 | 668 | local.get×139, i32.const×84, i32.load×72, local.set×66, end×57 |
| 33 | `(i32 i32) -> ()` | 12 | 1,379 | 643 | local.get×159, i32.const×93, end×49, local.set×37, block×32 |
| 247 | `(i32 i32 i32 i32) -> (i32 i32)` | 145 | 100,270 | 44,667 | local.get×13612, i32.const×5390, local.set×2655, i32.add×2123, i32.load×1880 |

## Embedded strings (data segments)

60 printable strings ≥6 chars; largest:

```
alliumaspen_saplingattached_banana_stemattached_banana_stem_wrapperattached_melon_stemattached_melon_stem_wrapperautumn_fernazure_bluetbanana_stembeetroot_plant_stage0beetroot_plant_stage1beetroot_pla
````````````````````````````````^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZYYYYYYYY
Failed to start valence main-symbol bit decodingFailed to start start-face bit decodingFailed to read traversal decoder typeFailed to read num_encoded_verticesFailed to read num_facesFailed to read at
Unexpected number of faces at endstart face configInvalid left_most_corner for vert_xMore faces than expected in start face configUnexpected number of vertices after first passTOPOLOGY_CDegenerate fac
Failed to allocate corner tableAttribute byte range overflowFailed to allocate mesh facesMetadata entry data size too largeStream ends before the prediction transform typeFailed to decode the entropy-
Edgebreaker predictive traversal decode support is disabledFailed to start attribute seam decoding for valenceFailed to start seam decodingEdgebreaker predictive traversal decode is not supportedEdgeb
Parallelogram prediction requires corner tableMultiParallelogram prediction is disabledTexCoordsDeprecated prediction is disabledConstrainedMultiParallelogram prediction requires corner tablePosition 
Invalid attribute component countData-to-corner map references an invalid vertexData-to-corner map references an invalid cornerSymbol decode needs at least one componentBuffer ran out reading the symb
`````````^^^^^^^^^]]]]]]]]]\\\\\\\\\[[[[[[[[[ZZZZZZZZZYYYYYYYYYXXXXXXXXXRRRRRRRRRWWWWWWWWW_________QQQQQQQQQVVVVVVVVVUUUUUUUUUTTTTTTTTTSSSSSSSSS<<<<<<<<<=========>>>>>>>>>?????????@@@@@@@@@AAAAAAAAABB
?bloxdProcessedassetextensionsUsedextensionsRequiredbuffersbufferViewsaccessorsscenescenesnodesmeshesmaterialstexturessamplersimagesanimationsskinsindextexCoordextensionsnameprimitivesweightsextraschi
Portable texture-coordinate prediction value count overflowentry-to-point mapposition parentGeneral errorIO errorInvalid parameterUnsupported versionUnknown versionUnsupported featureBitstream version
OPAQUEMASKBLENDbufferbyteOffsetbyteLengthbyteStridebufferViewoffsetversionminVersionurimimeTypemagFilterminFilterwrapSwrapTsamplersourcecomponentTypenormalizedcounttypeminmaxsparseJPEGWebPKTX2non-PNG2
Invalid number of attributesEdgebreaker decoder did not provide corner tableSequential connectivity index overflowSequential connectivity index underflowInvalid Edgebreaker attribute seam opposite cor
called `Option::unwrap()` on a `None` value0001020304050607080910111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455565758596061626364656667686970717273747576777
Stream ends before the raw correction byte widthDecoded values do not fit the portable attributeDecoded values do not fit the destination attributeFailed to decode prediction methodInteger attribute d
NoneUndefinedDifferenceMeshPredictionParallelogramMeshPredictionMultiParallelogramMeshPredictionTexCoordsDeprecatedMeshPredictionConstrainedMultiParallelogramMeshPredictionTexCoordsPortableMeshPredict
attempted to take ownership of Rust value while it was borrowedresumesteerdepenetrationRisechunkHashmeshLightchunkIngestblockEditsmovementTicknetReadnetSendcoreFramereplaySteplightCompute
POSITIONNORMALTEXCOORD_0TEXCOORD_1COLOR_0KHR_texture_transformKHR_materials_unlitbaseColorFactormetallicFactorroughnessFactorbaseColorTextureKHR_draco_mesh_compressionNorthEastSouthWest
Edgebreaker point assignment traversal did not terminateInconsistent corner table for attribute traversalPoint cloud decode support is disabledfacesdecoded attribute bytes
9I?KSCA;=U{23456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklRV[_dRV[_dRV[_dRV[_dRV[_dRV[_dRV[_dRV[_dRV[_dRV[_dRV[_dRV[_dRV[_dRV[_dRV[_dRV[_dmnopqrstuvwxyz{|}~
```

## Opcode histogram (aggregated)

| opcode | count |
|---|---:|
| `local.get` | 54,144 |
| `i32.const` | 25,222 |
| `local.set` | 10,403 |
| `local.tee` | 9,487 |
| `i32.add` | 9,419 |
| `end` | 8,400 |
| `i32.load` | 8,284 |
| `i32.store` | 5,534 |
| `br_if` | 5,371 |
| `i64.store` | 4,335 |
| `call` | 4,079 |
| `if` | 3,597 |
| `block` | 3,499 |
| `i64.load` | 3,485 |
| `i32.sub` | 2,811 |
| `br` | 2,684 |
| `i32.shl` | 1,847 |
| `i32.eqz` | 1,794 |
| `i64.const` | 1,750 |
| `select` | 1,237 |
| `i32.eq` | 1,152 |
| `i32.and` | 1,118 |
| `i32.load8_u` | 1,066 |
| `i32.ne` | 1,046 |
| `loop` | 1,014 |

## Custom sections

- `name` · 23 bytes

## Analysis quality

- sections consumed: 12, structural errors: 0
- bodies fully decoded: 290/290 (degraded: 0)
