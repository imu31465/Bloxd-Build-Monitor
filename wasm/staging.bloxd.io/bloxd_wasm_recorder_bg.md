# WASM module: `bloxd_wasm_recorder_bg`

> environment **staging.bloxd.io** · build `wp3j0a.a13381cf` · analyzed 2026-11-25T16:44:18+09:00
> source: https://staging.bloxd.io/static/media/bloxd_wasm_recorder_bg.168b744bcb3cb1239e29.wasm
> 193,653 bytes (189.1 KB) · sha256 `8c52d908a7d9cbdc…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- name-section module id `d57efed5620f6850.1078` → `0ac4e4669f7aefb1.1078` (numeric version suffix unchanged — same module version, re-randomized prefix)
- export identifiers rotated by the obfuscator: 1/26 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 424 / 5 |
| Exports / imports | 26 / 5 |
| Code bytes (function bodies) | 183,469 (179.2 KB) |
| Total local variables | 1,978 |
| Instructions (scanable bodies) | 89,508 |
| Data segments / bytes | 39 / 8,113 |
| Element segments / entries | 1 / 54 |
| Memories / tables / globals | 1 / 1 / 3 |
| name-section module id | `0ac4e4669f7aefb1.1078` |
| Sections | 12 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 207 | 32 |
| 2 | import | 61 | 5 |
| 3 | function | 426 | 424 |
| 4 | table | 5 | 1 |
| 5 | memory | 3 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 208 | 26 |
| 9 | element | 109 | 1 |
| 12 | datacount | 1 | — |
| 10 | code | 184,107 | 424 |
| 11 | data | 8,434 | 39 |
| 0 | custom:name | 29 | — |

## Types

32 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32) -> ()` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32) -> ()` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

5 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `A9Ns.gwSf` | func | `() -> (f64)` |
| 1 | `A9Ns.uVX9` | func | `(i32 i32) -> ()` |
| 2 | `A9Ns.sHtO` | func | `(i32 i32) -> ()` |
| 3 | `A9Ns.ybYN` | func | `(i32 i32) -> (i32)` |
| 4 | `A9Ns.Muzk` | func | `() -> (i32)` |

## Exports

26 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `cYIN` | func | 423 | `() -> ()` |
| `Gugp` | func | 329 | `(i32 i32 i32 i32) -> (i32)` |
| `pq0t` | global | 1 | `` |
| `YQYx` | func | 189 | `(i32 i32 i32) -> (i32)` |
| `yPSE` | func | 420 | `(i32) -> (i32)` |
| `sSlb` | func | 416 | `(i32) -> ()` |
| `jvps` | func | 251 | `(i32 i32) -> ()` |
| `Y0kV` | func | 425 | `() -> (i32)` |
| `iip7` | func | 422 | `(i32) -> (i32)` |
| `XYu7` | func | 415 | `(i32) -> (i32)` |
| `Nw1m` | func | 259 | `(i32 i32) -> (i32)` |
| `aXYv` | func | 256 | `(i32 i32) -> (i32)` |
| `L3vL` | func | 257 | `(i32 i32) -> (i32)` |
| `memory` | memory | 0 | `` |
| `j0xs` | func | 258 | `() -> (i32)` |
| `aR6h` | func | 424 | `() -> (i32)` |
| `ClbS` | global | 2 | `` |
| `pMox` | func | 419 | `(i32) -> (i32)` |
| `IqBF` | func | 417 | `(i32) -> (i32)` |
| `TtDk` | func | 421 | `(i32) -> (i32)` |
| `arFo` | func | 423 | `() -> ()` |
| `aZwi` | func | 146 | `(i32 i32 i32 i32) -> (i32)` |
| `SkL3` | func | 328 | `(i32) -> (i32)` |
| `j0eL` | func | 345 | `(i32 i32 i32) -> (i32 i32)` |
| `zUPq` | func | 317 | `(i32 i32) -> (i32)` |
| `XqbC` | func | 418 | `(i32) -> (i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- memory 0: min 18 pages · max ∞ · shared=False
- table 0: funcref · min 55 · max 55
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 1122692, `i32` = i32.const 1123184

## Functions

- 424 bodies · 183,469 code bytes · avg 432 B
- instruction scan: 424 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 60 |
| <= 64 bytes | 50 |
| <= 128 bytes | 106 |
| <= 256 bytes | 91 |
| <= 512 bytes | 57 |
| <= 1024 bytes | 37 |
| <= 2048 bytes | 8 |
| <= 4096 bytes | 6 |
| <= 8192 bytes | 6 |
| <= 16384 bytes | 2 |
| > 16384 bytes | 1 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32 i32) -> (i32)` | 60 | 8,367 | 3,865 | local.get×1293, i32.const×564, i32.load×229, local.set×224, i32.add×215 |
| 1 | `(i32 i32) -> ()` | 33 | 6,388 | 3,092 | local.get×871, i32.const×447, local.set×200, end×168, br×131 |
| 2 | `(i32) -> (i32)` | 10 | 4,926 | 2,157 | local.get×505, i32.const×449, i32.store×204, local.tee×154, i32.load×105 |
| 3 | `(i32 i32) -> ()` | 27 | 4,734 | 2,204 | local.get×631, i32.const×328, local.tee×123, i32.load×97, i32.add×87 |
| 4 | `(i32 i32 i32 i32 i32) -> (i32)` | 26 | 8,326 | 4,186 | local.get×1223, i32.const×558, i32.add×273, local.set×237, local.tee×211 |
| 5 | `(i32 i32 i32 i32 i32) -> ()` | 14 | 2,805 | 1,457 | local.get×374, i32.const×266, i32.add×129, local.set×97, end×72 |
| 6 | `(i32 i32 i32) -> ()` | 32 | 5,292 | 2,701 | local.get×798, i32.const×346, local.set×196, i32.add×157, local.tee×140 |
| 7 | `(i32 i32) -> (i32)` | 20 | 2,090 | 982 | local.get×302, i32.const×107, local.tee×55, i32.load×47, i32.add×41 |
| 8 | `(i32 i32 i32 i32) -> ()` | 38 | 3,828 | 1,879 | local.get×493, i32.const×327, i32.add×128, local.tee×94, local.set×88 |
| 9 | `(i32 i32 i32) -> ()` | 95 | 25,251 | 12,384 | local.get×3556, i32.const×1598, i32.load×727, local.set×721, i32.add×627 |
| 10 | `(i32 i32 i32 i32 i32) -> ()` | 16 | 1,890 | 880 | local.get×263, i32.const×130, i32.add×60, br_if×37, i32.load×36 |
| 11 | `(i32) -> ()` | 7 | 1,424 | 666 | i32.const×170, local.get×156, call×94, i32.add×90, local.tee×27 |
| 12 | `(i32 i32) -> ()` | 13 | 1,236 | 630 | local.get×165, i32.const×93, local.set×45, end×38, i32.add×28 |
| 13 | `(i32 i32 i32) -> ()` | 14 | 998 | 526 | local.get×133, i32.const×70, br_if×36, end×35, local.tee×30 |
| 14 | `(i32 i32) -> ()` | 8 | 998 | 486 | local.get×147, i32.const×43, i32.load×43, i32.store×21, local.tee×20 |
| 15 | `(i32 f64 i32) -> ()` | 18 | 1,903 | 890 | local.get×293, i32.const×102, i32.add×50, i32.load×49, end×35 |
| 16 | `(i32 i32 i32 i32) -> (i32)` | 6 | 912 | 472 | local.get×128, i32.const×79, local.tee×33, i32.or×23, end×21 |
| 31 | `(i32 i32 i32 i32 i32) -> ()` | 36 | 3,069 | 1,492 | local.get×446, local.set×140, i32.const×127, i32.load×86, end×66 |
| 37 | `(i32 i32 i32 i32) -> (i32)` | 12 | 908 | 456 | local.get×126, i32.const×63, local.tee×36, i32.add×29, local.set×28 |
| 38 | `(i32 i32 i32 i32) -> ()` | 25 | 1,354 | 714 | local.get×233, i32.const×77, i32.add×44, end×40, local.tee×39 |
| 41 | `(i32) -> ()` | 10 | 926 | 463 | local.get×145, i32.const×58, local.tee×29, i32.load×29, i32.add×26 |
| 44 | `(i32 i32 i32 i32) -> ()` | 27 | 2,070 | 1,026 | local.get×266, i32.const×136, i32.add×65, i32.load×62, local.tee×51 |
| 54 | `(i32 i32) -> ()` | 16 | 1,659 | 831 | local.get×215, i32.const×135, local.set×63, end×41, i32.add×35 |
| 58 | `(i32 i32 i32 i32 i32 i32) -> (i32)` | 12 | 940 | 463 | local.get×132, i32.const×55, i32.add×26, local.set×23, local.tee×20 |
| 74 | `(i32 i32) -> (i32)` | 9 | 914 | 447 | local.get×125, i32.const×66, local.tee×40, i32.load×28, i32.add×24 |
| 103 | `(i32 i32 i32 i32 i32) -> (i32)` | 38 | 5,411 | 2,741 | local.get×806, i32.const×353, i32.add×184, local.set×177, local.tee×165 |
| 224 | `(i32 i32) -> ()` | 33 | 6,722 | 3,554 | local.get×958, i32.const×328, local.set×213, local.tee×197, end×175 |
| 253 | `() -> (i32)` | 12 | 4,016 | 1,447 | local.get×491, i64.store×221, i32.const×195, i64.const×168, i32.store×73 |
| 340 | `(i32 i32 i32) -> (i32 i32)` | 13 | 1,826 | 837 | local.get×173, i32.const×125, local.set×45, i32.add×42, end×38 |
| 417 | `(i32) -> (i32)` | 15 | 1,591 | 743 | local.get×232, i32.const×97, i32.add×43, i32.load×42, local.tee×38 |

## Embedded strings (data segments)

60 printable strings ≥6 chars; largest:

```
called `Option::unwrap()` on a `None` value0001020304050607080910111213141516171819202122232425262728293031323334353637383940414243444546474849505152535455565758596061626364656667686970717273747576777
Errornull pointer passed to rustrecursive use of an object detected which would lead to unsafe aliasing in rust
/rustc/b940084d7eb6a299eb4bfeb8e34901bc051e7ac4/library/alloc/src/collections/vec_deque/mod.rs
/rustc/b940084d7eb6a299eb4bfeb8e34901bc051e7ac4/library/std/src/sys/sync/rwlock/no_threads.rs
a formatting trait implementation returned an error when the underlying stream did not
/rustc/b940084d7eb6a299eb4bfeb8e34901bc051e7ac4/library/core/src/slice/sort/select.rs
/rustc/b940084d7eb6a299eb4bfeb8e34901bc051e7ac4/library/alloc/src/raw_vec/mod.rs
/rustc/b940084d7eb6a299eb4bfeb8e34901bc051e7ac4/library/core/src/slice/index.rs
/rustc/b940084d7eb6a299eb4bfeb8e34901bc051e7ac4/library/std/src/thread/local.rs
/rustc/b940084d7eb6a299eb4bfeb8e34901bc051e7ac4/library/std/src/panicking.rs
/rustc/b940084d7eb6a299eb4bfeb8e34901bc051e7ac4/library/alloc/src/vec/mod.rs
/rustc/b940084d7eb6a299eb4bfeb8e34901bc051e7ac4/library/alloc/src/string.rs
d/index.crates.io-1949cf8c6b5b557f/miniz_oxide-0.9.1/src/deflate/buffer.rs
d/index.crates.io-1949cf8c6b5b557f/miniz_oxide-0.9.1/src/deflate/stored.rs
Hcannot access a Thread Local Storage value during or after destruction: 
/rustc/b940084d7eb6a299eb4bfeb8e34901bc051e7ac4/library/alloc/src/fmt.rs
d/index.crates.io-1949cf8c6b5b557f/miniz_oxide-0.9.1/src/deflate/core.rs
attempted to take ownership of Rust value while it was borrowed
a Display implementation returned an error unexpectedly
cannot modify the panic hook from a panicking thread
```

## Opcode histogram (aggregated)

| opcode | count |
|---|---:|
| `local.get` | 25,577 |
| `i32.const` | 12,183 |
| `i32.add` | 4,797 |
| `local.tee` | 4,640 |
| `local.set` | 4,352 |
| `i32.load` | 4,113 |
| `end` | 4,095 |
| `i32.store` | 2,640 |
| `br_if` | 2,562 |
| `call` | 1,966 |
| `block` | 1,809 |
| `i32.sub` | 1,479 |
| `if` | 1,364 |
| `br` | 1,333 |
| `i64.store` | 1,151 |
| `i64.const` | 1,095 |
| `i32.eqz` | 865 |
| `i64.load` | 862 |
| `i32.and` | 848 |
| `select` | 839 |
| `global.set` | 745 |
| `i32.load8_u` | 692 |
| `i32.ne` | 674 |
| `i32.store8` | 672 |
| `i32.eq` | 513 |

## Custom sections

- `name` · 24 bytes

## Analysis quality

- sections consumed: 12, structural errors: 0
- bodies fully decoded: 424/424 (degraded: 0)
