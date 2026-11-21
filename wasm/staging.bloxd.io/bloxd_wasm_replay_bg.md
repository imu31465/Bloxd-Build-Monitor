# WASM module: `bloxd_wasm_replay_bg`

> environment **staging.bloxd.io** · build `bqoxjr.2558012f` · analyzed 2026-11-21T12:37:19+09:00
> source: https://staging.bloxd.io/static/media/bloxd_wasm_replay_bg.6817b8cd52234e0f59f4.wasm
> 354,518 bytes (346.2 KB) · sha256 `225276b91dfdf588…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 359 / 5 |
| Exports / imports | 34 / 5 |
| Code bytes (function bodies) | 344,967 (336.9 KB) |
| Total local variables | 2,887 |
| Instructions (scanable bodies) | 168,524 |
| Data segments / bytes | 38 / 7,442 |
| Element segments / entries | 1 / 40 |
| Memories / tables / globals | 1 / 1 / 3 |
| name-section module id | `317b70a5892beea7.1124` |
| Sections | 12 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 277 | 39 |
| 2 | import | 61 | 5 |
| 3 | function | 361 | 359 |
| 4 | table | 5 | 1 |
| 5 | memory | 3 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 272 | 34 |
| 9 | element | 86 | 1 |
| 12 | datacount | 1 | — |
| 10 | code | 345,604 | 359 |
| 11 | data | 7,756 | 38 |
| 0 | custom:name | 29 | — |

## Types

39 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32) -> ()` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32 i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

5 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `hOo0.U0kg` | func | `() -> (f64)` |
| 1 | `hOo0.vznD` | func | `(i32 i32) -> ()` |
| 2 | `hOo0.o88w` | func | `(i32 i32) -> ()` |
| 3 | `hOo0.WG1V` | func | `(i32 i32) -> (i32)` |
| 4 | `hOo0.y03V` | func | `() -> (i32)` |

## Exports

34 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `qtpf` | func | 234 | `(i32) -> (i32)` |
| `XpBj` | func | 326 | `(i32 i32 i32) -> (i32 i32)` |
| `MkIr` | func | 359 | `() -> (i32)` |
| `kIB4` | global | 1 | `` |
| `BHjA` | func | 362 | `() -> (i32)` |
| `OsrM` | func | 248 | `(i32 i32 i32) -> ()` |
| `tRF8` | func | 249 | `(i32) -> (i32)` |
| `ZovV` | func | 254 | `(i32) -> ()` |
| `IawZ` | func | 198 | `(i32 i32) -> ()` |
| `Hxzv` | func | 240 | `(i32 i32) -> (i32)` |
| `vCLj` | func | 252 | `(i32) -> ()` |
| `Sjac` | func | 179 | `(i32 i32 i32) -> ()` |
| `dblD` | func | 223 | `(i32 f64 f64 f64 f64 f64 f64) -> ()` |
| `XjrD` | func | 226 | `(i32 i32) -> ()` |
| `memory` | memory | 0 | `` |
| `VxAF` | global | 2 | `` |
| `W9nU` | func | 203 | `(i32) -> ()` |
| `WkJJ` | func | 180 | `(i32 i32 i32) -> ()` |
| `ssx9` | func | 361 | `() -> ()` |
| `O9fp` | func | 321 | `(i32 i32) -> (i32)` |
| `bMko` | func | 219 | `() -> (i32)` |
| `lO9O` | func | 253 | `(i32) -> ()` |
| `vyNZ` | func | 361 | `() -> ()` |
| `QSaN` | func | 323 | `(i32 i32 i32 i32) -> (i32)` |
| `iVie` | func | 278 | `(i32) -> (i32)` |
| `AMoe` | func | 280 | `(i32) -> (i32)` |
| `GIAv` | func | 250 | `(i32 i32 i32) -> ()` |
| `iZjQ` | func | 201 | `(i32) -> ()` |
| `IYpZ` | func | 231 | `(i32 i32 f32) -> (i32)` |
| `fZEk` | func | 304 | `(i32) -> (i32)` |
| `cFQv` | func | 183 | `(i32 f32) -> ()` |
| `JNLr` | func | 237 | `(i32) -> (i32)` |
| `GbZy` | func | 163 | `(i32 i32 i32 i32) -> ()` |
| `n7ud` | func | 245 | `(i32 i32 i32) -> ()` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- memory 0: min 17 pages · max ∞ · shared=False
- table 0: funcref · min 41 · max 41
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 1056512, `i32` = i32.const 1056996

## Functions

- 359 bodies · 344,967 code bytes · avg 960 B
- instruction scan: 359 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 35 |
| <= 64 bytes | 12 |
| <= 128 bytes | 39 |
| <= 256 bytes | 62 |
| <= 512 bytes | 75 |
| <= 1024 bytes | 68 |
| <= 2048 bytes | 35 |
| <= 4096 bytes | 18 |
| <= 8192 bytes | 11 |
| <= 16384 bytes | 2 |
| > 16384 bytes | 2 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32) -> ()` | 100 | 15,379 | 7,153 | local.get×2095, i32.const×838, i32.load×486, local.set×418, local.tee×377 |
| 1 | `(i32 i32) -> ()` | 51 | 19,173 | 9,309 | local.get×2904, i32.const×1026, local.set×530, local.tee×525, i32.load×519 |
| 2 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` | 44 | 11,405 | 5,887 | local.get×1677, i32.const×838, local.set×454, i32.add×301, local.tee×289 |
| 3 | `(i32 i32 i32) -> ()` | 40 | 6,280 | 3,229 | local.get×940, i32.const×396, local.set×220, local.tee×198, i32.add×167 |
| 4 | `(i32 i32 i32 i32 i32) -> ()` | 30 | 4,829 | 2,568 | local.get×900, local.tee×285, i32.const×246, i32.add×156, select×143 |
| 5 | `(i32 i32 i32 i32 i32) -> ()` | 22 | 7,171 | 3,841 | local.get×1297, local.tee×483, i32.const×380, i32.add×234, select×226 |
| 6 | `(i32) -> (i32)` | 10 | 4,933 | 2,157 | local.get×505, i32.const×449, i32.store×204, local.tee×154, i32.load×105 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 22 | 4,018 | 2,067 | local.get×648, local.tee×207, i32.const×150, i32.load×127, local.set×123 |
| 8 | `(i32 i32 i32 i32) -> ()` | 75 | 40,627 | 19,406 | local.get×5822, i32.const×2584, local.tee×1007, i32.add×995, i32.load×969 |
| 9 | `(i32 i32 i32) -> ()` | 43 | 8,039 | 4,031 | local.get×1172, i32.const×451, local.set×285, i32.load×241, local.tee×217 |
| 10 | `(i32 i32 i32 i32 i32) -> ()` | 28 | 3,290 | 1,838 | local.get×754, local.tee×218, select×149, i32.const×95, i32.lt_s×81 |
| 11 | `(i32 i32 i32 i32 i32) -> ()` | 16 | 3,576 | 1,848 | local.get×665, local.tee×177, i64.load×174, i32.const×133, i64.store×102 |
| 12 | `(i32 i32) -> ()` | 26 | 3,891 | 1,843 | local.get×535, i32.const×261, i32.load×114, i32.add×109, local.tee×107 |
| 13 | `(i32 i32) -> ()` | 12 | 2,978 | 1,383 | local.get×404, i32.const×120, br_if×95, local.tee×87, i32.load×71 |
| 14 | `(i32 i32 i32) -> ()` | 16 | 3,066 | 1,325 | local.get×433, i32.const×193, i32.load×81, call×77, i32.add×68 |
| 15 | `(i32 i32 i32) -> ()` | 21 | 2,529 | 1,276 | local.get×390, i32.const×130, local.set×85, i32.load×82, local.tee×78 |
| 16 | `(i32 i32) -> ()` | 26 | 2,745 | 1,219 | local.get×400, i32.const×145, call×74, i32.load×71, local.set×65 |
| 17 | `(i32 i32 i32) -> ()` | 17 | 2,321 | 1,178 | local.get×343, i32.const×144, local.set×100, i32.add×79, local.tee×75 |
| 18 | `(i32 i32 i32 i32 i32 i32) -> (i32)` | 28 | 4,834 | 2,527 | local.get×752, i32.const×327, local.tee×217, i32.add×163, local.set×138 |
| 20 | `(i32 i32) -> ()` | 21 | 3,242 | 1,551 | local.get×496, local.set×151, i32.load×119, i32.const×78, end×74 |
| 23 | `(i32 i32) -> ()` | 38 | 7,482 | 3,960 | local.get×1025, i32.const×383, local.set×296, i64.const×210, end×199 |
| 28 | `(i32 i32 i32 i32 i32) -> ()` | 19 | 4,199 | 2,095 | local.get×679, i32.const×286, i32.add×197, local.tee×147, i64.load×137 |
| 29 | `(i32 i32 i32 i32 i32) -> ()` | 15 | 3,538 | 1,736 | local.get×626, i64.load×189, i64.store×152, i32.const×141, local.tee×122 |
| 30 | `(i32 i32) -> ()` | 30 | 4,302 | 1,904 | local.get×578, i32.const×249, i32.load×110, i32.add×100, local.tee×96 |
| 31 | `(i32 f32 i32 i32) -> ()` | 35 | 6,161 | 2,759 | local.get×841, local.tee×281, f64.mul×242, f64.const×144, i32.const×131 |
| 32 | `(i32 f64) -> ()` | 40 | 5,406 | 2,461 | local.get×614, i32.const×285, local.set×154, local.tee×135, i32.add×117 |
| 106 | `(i32 i32 i32 i32 i32 i64 i32 i64 i32 f32 i32) -> ()` | 10 | 2,898 | 1,414 | local.get×293, i32.const×135, local.set×120, end×109, block×85 |
| 226 | `(i32 i32 f32) -> (i32)` | 24 | 3,693 | 1,723 | local.get×516, i32.const×215, local.tee×96, i32.add×77, local.set×76 |
| 243 | `(i32 i32 i32) -> ()` | 22 | 3,504 | 1,573 | local.get×492, i32.const×180, i64.store×106, i64.const×95, local.tee×83 |
| 248 | `(i32) -> ()` | 41 | 2,984 | 1,382 | local.get×426, i32.const×190, i32.add×84, local.tee×69, local.set×66 |

## Embedded strings (data segments)

54 printable strings ≥6 chars; largest:

```
Error000102030405060708091011121314151617181920212223242526272829303132333435363738394041424344454647484950515253545556575859606162636465666768697071727374757677787980818283848586878889909192939495969
timeFractionlerpModeprepostt3_t2pointPrecomputespreGradientpostGradientdeltaanimationDurationMsloopModenodeAnimationsrotationposition
/home/arthur/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/miniz_oxide-0.9.1/src/inflate/output_buffer.rs
Errornull pointer passed to rustrecursive use of an object detected which would lead to unsafe aliasing in rust
/home/arthur/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/miniz_oxide-0.9.1/src/inflate/core.rs
attempt to divide by zerouser-provided comparison function does not correctly implement a total order
MeshskyBoxfogColourOverridefogChunkDistanceOverridecameraTintfogOnSkyboxfogBlockDistanceOverride
/rustc/b940084d7eb6a299eb4bfeb8e34901bc051e7ac4/library/core/src/slice/sort/shared/smallsort.rs
/rustc/b940084d7eb6a299eb4bfeb8e34901bc051e7ac4/library/std/src/sys/sync/rwlock/no_threads.rs
a formatting trait implementation returned an error when the underlying stream did not
/rustc/b940084d7eb6a299eb4bfeb8e34901bc051e7ac4/library/alloc/src/raw_vec/mod.rs
/rustc/b940084d7eb6a299eb4bfeb8e34901bc051e7ac4/library/core/src/slice/index.rs
/rustc/b940084d7eb6a299eb4bfeb8e34901bc051e7ac4/library/core/src/slice/iter.rs
/rustc/b940084d7eb6a299eb4bfeb8e34901bc051e7ac4/library/std/src/panicking.rs
/rustc/b940084d7eb6a299eb4bfeb8e34901bc051e7ac4/library/alloc/src/string.rs
/rustc/b940084d7eb6a299eb4bfeb8e34901bc051e7ac4/library/alloc/src/fmt.rs
assertion failed: (source_pos + 3) & out_buf_size_mask < out_slice.len()
assertion failed: (source_pos + 1) & out_buf_size_mask < out_slice.len()
assertion failed: (source_pos + 2) & out_buf_size_mask < out_slice.len()
attempted to take ownership of Rust value while it was borrowed
```

## Opcode histogram (aggregated)

| opcode | count |
|---|---:|
| `local.get` | 49,867 |
| `i32.const` | 19,904 |
| `local.tee` | 10,469 |
| `local.set` | 8,401 |
| `i32.add` | 7,998 |
| `i32.load` | 7,917 |
| `end` | 7,038 |
| `br_if` | 5,262 |
| `i32.store` | 4,383 |
| `block` | 3,345 |
| `call` | 2,945 |
| `i32.sub` | 2,673 |
| `select` | 2,582 |
| `br` | 2,582 |
| `if` | 2,578 |
| `i64.store` | 2,503 |
| `i64.const` | 2,392 |
| `i64.load` | 2,365 |
| `i32.eq` | 1,372 |
| `i32.load8_u` | 1,268 |
| `i32.gt_u` | 1,250 |
| `i32.ne` | 1,246 |
| `i32.shl` | 1,211 |
| `i32.store8` | 1,162 |
| `i32.eqz` | 1,157 |

## Custom sections

- `name` · 24 bytes

## Analysis quality

- sections consumed: 12, structural errors: 0
- bodies fully decoded: 359/359 (degraded: 0)
