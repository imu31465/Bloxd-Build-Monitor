# WASM module: `bloxd_wasm_shader_pack_bg`

> environment **staging.bloxd.io** · build `fo1voe.f743fbcf` · analyzed 2026-11-26T01:33:49+09:00
> source: https://staging.bloxd.io/static/media/bloxd_wasm_shader_pack_bg.3abc4329b19aa8a1b898.wasm
> 303,820 bytes (296.7 KB) · sha256 `48a1189cb0646542…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- name-section module id `06ca712c0b2d6175.1190` → `3acac9ff6bb0daa0.1190` (numeric version suffix unchanged — same module version, re-randomized prefix)
- export identifiers rotated by the obfuscator: 1/29 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 265 / 10 |
| Exports / imports | 29 / 10 |
| Code bytes (function bodies) | 256,592 (250.6 KB) |
| Total local variables | 1,865 |
| Instructions (scanable bodies) | 127,325 |
| Data segments / bytes | 121 / 44,569 |
| Element segments / entries | 1 / 94 |
| Memories / tables / globals | 1 / 1 / 3 |
| name-section module id | `3acac9ff6bb0daa0.1190` |
| Sections | 12 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 317 | 38 |
| 2 | import | 121 | 10 |
| 3 | function | 267 | 265 |
| 4 | table | 5 | 1 |
| 5 | memory | 3 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 232 | 29 |
| 9 | element | 185 | 1 |
| 12 | datacount | 1 | — |
| 10 | code | 257,031 | 265 |
| 11 | data | 45,564 | 121 |
| 0 | custom:name | 29 | — |

## Types

38 function types; top shapes: `(i32 i32) -> (i32)` ×1, `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32) -> ()` ×1, `(i32 i32 i32) -> (i32)` ×1, `() -> (i32 i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `() -> ()` ×1

## Imports

10 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `Z6AG.NbBR` | func | `(i32 i32) -> ()` |
| 1 | `Z6AG.i5HW` | func | `(i32) -> ()` |
| 2 | `Z6AG.WvCd` | func | `(i32) -> (i32)` |
| 3 | `Z6AG.deBA` | func | `(i32 i32) -> (f64)` |
| 4 | `Z6AG.K28G` | func | `(i32 i32) -> ()` |
| 5 | `Z6AG.kjdt` | func | `(i32) -> (i32)` |
| 6 | `Z6AG.PmwO` | func | `(i32 i32) -> (i32)` |
| 7 | `Z6AG.fx3x` | func | `(i32) -> (i32)` |
| 8 | `Z6AG.B2g5` | func | `(i32 i32) -> ()` |
| 9 | `Z6AG.uTue` | func | `(i32 i32) -> (i32)` |

## Exports

29 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `memory` | memory | 0 | `` |
| `bQFX` | func | 222 | `(i32) -> (i32 i32)` |
| `itXl` | func | 270 | `() -> ()` |
| `Z87a` | func | 270 | `() -> ()` |
| `mxHZ` | func | 202 | `(i32 i32 i32 i32) -> (i32)` |
| `blV9` | global | 2 | `` |
| `Ur8S` | func | 219 | `(i32) -> (i32 i32)` |
| `I93C` | func | 226 | `() -> (i32 i32)` |
| `sKiU` | func | 244 | `(i32 i32 i32) -> ()` |
| `VdT8` | func | 223 | `(i32) -> (i32 i32)` |
| `pZJJ` | func | 215 | `(i32) -> (i32 i32)` |
| `Js5b` | func | 218 | `(i32) -> (i32 i32)` |
| `Vifg` | func | 221 | `(i32) -> (i32 i32)` |
| `ueLP` | func | 273 | `() -> (i32)` |
| `ZFKQ` | func | 216 | `(i32) -> (i32 i32)` |
| `ZZHJ` | func | 198 | `(i32 i32 f64 f64 i32 i32) -> (i32 i32 i32 i32)` |
| `jNIA` | global | 1 | `` |
| `ZbRp` | func | 193 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32 i32 i32 i32)` |
| `OlPM` | func | 146 | `(i32 i32) -> ()` |
| `OAr6` | func | 208 | `(i32) -> (i32 i32 i32 i32)` |
| `tXqn` | func | 201 | `(i32 i32 i32 i32) -> (i32 i32 i32 i32)` |
| `Gun2` | func | 190 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32 i32 i32)` |
| `MkYg` | func | 209 | `(i32) -> (i32 i32 i32 i32)` |
| `HLh6` | func | 217 | `(i32) -> (i32 i32)` |
| `CrML` | func | 228 | `() -> (i32 i32)` |
| `oXQq` | func | 220 | `(i32) -> (i32 i32)` |
| `DjZi` | func | 200 | `(i32 i32) -> (i32)` |
| `xU0n` | func | 227 | `() -> (i32 i32)` |
| `yD5Q` | func | 225 | `() -> (i32 i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- memory 0: min 17 pages · max ∞ · shared=False
- table 0: funcref · min 95 · max 95
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 1097408, `i32` = i32.const 1097988

## Functions

- 265 bodies · 256,592 code bytes · avg 968 B
- instruction scan: 265 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 49 |
| <= 64 bytes | 18 |
| <= 128 bytes | 27 |
| <= 256 bytes | 28 |
| <= 512 bytes | 67 |
| <= 1024 bytes | 36 |
| <= 2048 bytes | 15 |
| <= 4096 bytes | 14 |
| <= 8192 bytes | 5 |
| <= 16384 bytes | 5 |
| > 16384 bytes | 1 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 24 | 9,636 | 5,162 | local.get×1194, i32.const×998, local.set×538, i32.add×280, end×258 |
| 1 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 25 | 9,120 | 4,881 | local.get×1117, i32.const×931, local.set×521, end×255, i32.and×236 |
| 2 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 25 | 9,068 | 4,863 | local.get×1115, i32.const×931, local.set×521, end×255, i32.and×236 |
| 3 | `(i32 i32 i32 i32 i32) -> ()` | 54 | 8,946 | 4,688 | local.get×1854, local.tee×608, select×392, i32.const×289, i32.load×194 |
| 4 | `() -> ()` | 43 | 8,637 | 4,099 | local.get×1080, i32.const×656, local.set×232, end×223, i32.add×201 |
| 5 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 28 | 6,150 | 3,172 | local.get×886, i32.const×451, local.set×291, end×164, i32.add×120 |
| 6 | `(i32 i32 i32 i32) -> ()` | 22 | 5,609 | 2,763 | local.get×684, i32.const×482, i32.add×158, br_if×157, end×156 |
| 7 | `(i32) -> (i32)` | 10 | 4,929 | 2,157 | local.get×505, i32.const×449, i32.store×204, local.tee×154, i32.load×105 |
| 8 | `(i32 i32 i32 i32 i32 i32) -> ()` | 28 | 3,169 | 1,696 | local.get×424, i32.const×284, local.set×145, end×87, i32.add×85 |
| 9 | `(i32 i32 i32) -> ()` | 23 | 4,241 | 2,242 | local.get×562, i32.const×444, i32.add×106, end×98, local.set×92 |
| 10 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` | 31 | 3,096 | 1,575 | local.get×410, i32.const×154, local.tee×94, local.set×90, i32.add×86 |
| 11 | `(i32 i32 i32 i32 i32 i32) -> ()` | 28 | 2,629 | 1,426 | local.get×340, i32.const×251, local.set×134, end×74, local.tee×71 |
| 12 | `(i32 i32 i32 i32 i32 i32) -> ()` | 28 | 2,626 | 1,424 | local.get×340, i32.const×249, local.set×133, end×74, local.tee×73 |
| 13 | `(i32 i32 i32 i32 i32 i32) -> ()` | 28 | 2,567 | 1,402 | local.get×332, i32.const×257, local.set×136, end×73, i32.add×69 |
| 14 | `(i32 i32 i32) -> ()` | 3 | 2,687 | 1,215 | i64.const×308, local.get×184, i64.or×133, i64.and×116, i64.shl×76 |
| 15 | `(i32 i32) -> (i32)` | 2 | 2,645 | 1,213 | i64.const×308, local.get×180, i64.or×133, i64.and×116, i64.shl×76 |
| 16 | `() -> ()` | 20 | 2,167 | 991 | local.get×267, i32.const×168, i32.load×72, call×60, local.tee×57 |
| 17 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` | 13 | 2,754 | 1,426 | local.get×396, i32.const×209, local.set×106, i32.add×95, local.tee×80 |
| 18 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` | 12 | 1,743 | 833 | local.get×262, i32.const×100, local.set×55, i32.add×52, i32.load×50 |
| 19 | `(i32 i32 i32) -> ()` | 28 | 3,486 | 1,722 | local.get×473, i32.const×195, local.tee×107, i32.add×93, local.set×85 |
| 21 | `(i32 i32) -> ()` | 19 | 1,621 | 757 | local.get×186, i32.const×91, local.tee×47, i32.load×42, i32.add×42 |
| 22 | `(i32 i32 i32 i32) -> ()` | 16 | 1,823 | 939 | local.get×260, i32.const×105, i32.add×56, local.set×56, end×50 |
| 30 | `(i32 i32) -> ()` | 27 | 2,061 | 1,051 | local.get×231, i32.const×175, local.set×82, i32.add×60, local.tee×57 |
| 43 | `(i32 i32) -> ()` | 25 | 1,718 | 848 | local.get×208, i32.const×139, local.set×79, local.tee×43, end×42 |
| 60 | `(i32 i32 i32) -> ()` | 5 | 2,108 | 1,015 | i32.const×210, local.get×207, local.tee×66, i32.add×47, local.set×44 |
| 180 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32 i32 i32)` | 104 | 66,226 | 31,616 | local.get×8373, i32.const×4250, local.set×1765, local.tee×1752, i32.add×1731 |
| 183 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32 i32 i32 i32)` | 27 | 3,164 | 1,516 | local.get×473, i32.const×190, local.set×96, i32.store×82, end×80 |
| 188 | `(i32 i32 f64 f64 i32 i32) -> (i32 i32 i32 i32)` | 30 | 3,118 | 1,545 | local.get×433, i32.const×188, local.set×93, end×91, i32.load×70 |
| 191 | `(i32 i32 i32 i32) -> (i32 i32 i32 i32)` | 24 | 1,901 | 949 | local.get×257, i32.const×151, local.set×73, end×49, i32.add×42 |
| 218 | `() -> (i32 i32)` | 36 | 5,650 | 2,555 | local.get×773, i32.const×353, local.set×138, i32.add×129, end×126 |

## Embedded strings (data segments)

60 printable strings ≥6 chars; largest:

```
BloxdSurfaceEach textureId has a name: bloxdTextureId followed by its texture pack filename, e.g. bloxdTextureIdGrassTop for grass_top.png. For animated textures,skip the frame number, e.g. bloxdTextu
terrainmodelsundefinedDefined for liquids, enabling bloxdOpaqueBehind().Defined for liquids and non-strict games.Defined in strict games, which enforce visibility.bloxdFragmentBlockPositionbloxdShadow
Packs can't declare names starting with bloxd, other than the hook functions bloxd<Terrain|Liquid|Model><Vertex|Surface|Light>.WGSL names can't start with two underscores._ can only be the target of a
A line starting with # must be #define, #ifdef, #ifndef, #else or #endif.defineifdefifndefelseendifThis #ifdef or #ifndef already has an #else.#define takes only a flag name; values use const.Names st
pack_var<private> bloxdValidationP: vec4f;    let p = bloxdValidationP;@vertexfn bloxdValidateVertex(@builtin(vertex_index) i: u32) -> @builtin(position) vec4f {    let p = vec4f(f32(i));    return ve
Sunlight or moonlight reaching this fragment: 0 in shadow, 1 lit. Blocks,players, mobs and items cast shadows. Fades to 0 as the sun or moon sets, oras the face turns away from it. 1 on flags.emissive
called `Option::unwrap()` on a `None` value0001020304050607080910111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455565758596061626364656667686970717273747576777
Using a fragment's position and normal, identify the block's world position.Terrain looks half a block behind the face, and models 1/64 behind. Wherethat point is inside a placed block model's own blo
BloxdOpaqueBehindLike bloxdShadow, but at a point between the camera (t = 0) and thisfragment (t = 1), e.g. for light shafts. Only blocks cast these shadows,blurred to whole blocks. t is clamped to 0-
bloxdTerrainVertexbloxdTerrainSurfacebloxdTerrainLightbloxdLiquidVertexbloxdLiquidSurfacebloxdLiquidLightbloxdModelVertexbloxdModelSurfacebloxdModelLightbloxdDefaultSurfacebloxdDefaultLight
pathsourcetexture namealias namealias texturelineNumlinePosmessagemessage typeterrainwatermodelsskylightingmovesGeometryanimatedsceneDepthsunShadowsstrictdiagnostic filediagnostic message
, BLOXD_LIGHTING was removed in apiVersion 5; test bloxdLit() in code instead.This conditional isn't closed with #endif before the end of the file.
array contains a value of the wrong typenull pointer passed to rustrecursive use of an object detected which would lead to unsafe aliasing in rust
. Texture names are the file names texture packs use, as in bloxdTextureIdGrassTop for grass_top.png; BLOCK_TEXTURES.md lists them.
w directly, since the shader pack API adds fields to it over time; start from a bloxdDefault* function or copy an input.
${SHADER_PACK_API_VERSION}${SHADER_PACK_INPUTS_VAR}bloxdPackInputsThis comment isn't closed before the end of the file.
555555555555555555555555555555555555555555555555555555555555555555555555555555555551555555554555555555585555555555555
q can only be a function's parameter or return type, the type of an initialised let or var, or a ptr's store type.
n: the engine binds every texture and sampler. Surface and light hooks can read atlas textures with bloxdTexel.
    alias break case const const_assert continue continuing default diagnostic discard else enable false fn for
```

## Opcode histogram (aggregated)

| opcode | count |
|---|---:|
| `local.get` | 33,484 |
| `i32.const` | 18,367 |
| `local.set` | 7,721 |
| `local.tee` | 6,719 |
| `i32.add` | 6,339 |
| `end` | 6,189 |
| `i32.load` | 4,928 |
| `br_if` | 3,600 |
| `i32.store` | 2,863 |
| `block` | 2,617 |
| `if` | 2,534 |
| `call` | 2,270 |
| `i32.and` | 2,268 |
| `i64.const` | 2,235 |
| `br` | 2,080 |
| `i32.sub` | 1,975 |
| `i32.shl` | 1,508 |
| `i64.store` | 1,350 |
| `i64.load` | 1,260 |
| `i32.or` | 1,259 |
| `i32.eqz` | 1,078 |
| `i32.eq` | 1,013 |
| `i32.load8_u` | 993 |
| `select` | 913 |
| `loop` | 773 |

## Custom sections

- `name` · 24 bytes

## Analysis quality

- sections consumed: 12, structural errors: 0
- bodies fully decoded: 265/265 (degraded: 0)
