# WASM module: `bloxd_wasm_workers_bg`

> environment **bloxd.io** · build `3lwmg.ecbaa066` · analyzed 2026-11-22T23:29:33+09:00
> source: https://bloxd.io/static/media/bloxd_wasm_workers_bg.a96ac8bbff87141ebda5.wasm
> 198,965 bytes (194.3 KB) · sha256 `1d7067ca0a5537d6…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- size 196,044 → 198,965 bytes (+2,921)
- defined functions 165 → 166
- code bytes 184,550 → 187,437
- data bytes 10,335 → 10,347
- name-section module id `f95acdaa2089e0df.777` → `12cef5151716957a.796`
- export signatures: +1 × `(f64) -> (i32)`
- export identifiers rotated by the obfuscator: 1/33 names kept (identifier names are randomly assigned per build; compare signatures instead)
- new embedded strings: `/home/runner/.cargo/registry/src/index.crates.io-1949cf8c6b5`; `a reused light without the lightchunk sizeuniform lighthood `
- removed embedded strings: `/home/arthur/.cargo/registry/src/index.crates.io-1949cf8c6b5`; `a reused light without the lightchunk sizeuniform lighthood `

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 166 / 5 |
| Exports / imports | 33 / 5 |
| Code bytes (function bodies) | 187,437 (183.0 KB) |
| Total local variables | 1,475 |
| Instructions (scanable bodies) | 93,288 |
| Data segments / bytes | 9 / 10,347 |
| Element segments / entries | 1 / 44 |
| Memories / tables / globals | 1 / 1 / 3 |
| name-section module id | `12cef5151716957a.796` |
| Sections | 12 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 179 | 23 |
| 2 | import | 61 | 5 |
| 3 | function | 168 | 166 |
| 4 | table | 5 | 1 |
| 5 | memory | 3 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 246 | 33 |
| 9 | element | 75 | 1 |
| 12 | datacount | 1 | — |
| 10 | code | 187,708 | 166 |
| 11 | data | 10,428 | 9 |
| 0 | custom:name | 28 | — |

## Types

23 function types; top shapes: `(i32 i32) -> (i32)` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32) -> ()` ×1, `(i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `() -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

5 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `XxUV.drqE` | func | `(i32) -> ()` |
| 1 | `XxUV.V8v2` | func | `(i32) -> ()` |
| 2 | `XxUV.RlmQ` | func | `(i32 i32) -> ()` |
| 3 | `XxUV.w8P4` | func | `(i32 i32) -> (i32)` |
| 4 | `XxUV.x1CJ` | func | `(i32 i32) -> ()` |

## Exports

33 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `wNSZ` | func | 40 | `() -> (i32)` |
| `vFOM` | func | 96 | `() -> (i32)` |
| `CPPt` | func | 166 | `(i32) -> (i32)` |
| `WACb` | func | 167 | `(i32) -> ()` |
| `jMJ2` | func | 169 | `() -> (i32)` |
| `EWTD` | func | 5 | `(i32 i32) -> (i32)` |
| `XLJJ` | func | 104 | `(i32 i32) -> (i32)` |
| `QiN7` | func | 50 | `() -> (i32)` |
| `nXSC` | func | 126 | `(i32) -> (i32)` |
| `T5Xz` | func | 138 | `(i32 i32 i32) -> (i32 i32)` |
| `wvCc` | func | 135 | `() -> ()` |
| `Kj2d` | func | 71 | `(i32 i32) -> ()` |
| `vqWq` | func | 139 | `() -> (i32 i32)` |
| `p459` | func | 127 | `(i32) -> (i32)` |
| `m2P7` | func | 114 | `(i32) -> ()` |
| `AsOq` | func | 137 | `(i32 i32 i32 i32) -> (i32)` |
| `J6RE` | func | 136 | `(i32 i32) -> (i32)` |
| `x9CE` | func | 135 | `() -> ()` |
| `QBdt` | func | 111 | `(i32) -> (i32)` |
| `SsUZ` | func | 92 | `(i32 i32) -> ()` |
| `siMB` | func | 100 | `() -> (i32)` |
| `o1nb` | func | 150 | `(i32 i32 i32) -> ()` |
| `DeZ3` | global | 2 | `` |
| `lGa5` | func | 57 | `(i32 i32) -> (i32)` |
| `PmVV` | func | 144 | `() -> (i32)` |
| `VeIs` | func | 128 | `(i32) -> (i32)` |
| `memory` | memory | 0 | `` |
| `artP` | global | 1 | `` |
| `mClJ` | func | 124 | `(i32) -> (i32)` |
| `ikRR` | func | 116 | `(f64) -> (i32)` |
| `YIPN` | func | 125 | `(i32) -> (i32)` |
| `gRY0` | func | 15 | `(i32 i32 i32) -> ()` |
| `fvvt` | func | 123 | `(i32) -> (i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- memory 0: min 17 pages · max ∞ · shared=False
- table 0: funcref · min 45 · max 45
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 1059576, `i32` = i32.const 1059792

## Functions

- 166 bodies · 187,437 code bytes · avg 1.1 KB
- instruction scan: 166 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 31 |
| <= 64 bytes | 4 |
| <= 128 bytes | 32 |
| <= 256 bytes | 34 |
| <= 512 bytes | 22 |
| <= 1024 bytes | 16 |
| <= 2048 bytes | 9 |
| <= 4096 bytes | 11 |
| <= 8192 bytes | 3 |
| <= 16384 bytes | 1 |
| > 16384 bytes | 3 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32) -> (i32)` | 145 | 53,637 | 26,754 | local.get×7665, i32.const×3757, local.set×1779, i32.add×1728, local.tee×1371 |
| 1 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` | 79 | 18,146 | 9,149 | local.get×2799, i32.const×1192, local.set×661, i32.add×478, end×462 |
| 2 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 100 | 10,232 | 5,391 | local.get×1725, i32.const×519, local.tee×357, i32.add×340, local.set×301 |
| 3 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 25 | 4,850 | 2,627 | local.get×818, i32.const×314, local.tee×167, i32.add×154, br_if×132 |
| 4 | `(i32 i32 i32 i32 i32 i32) -> (i32)` | 34 | 4,220 | 2,264 | local.get×700, i32.const×261, i32.add×236, local.set×234, br_if×100 |
| 5 | `(i32) -> (i32)` | 9 | 4,901 | 2,140 | local.get×498, i32.const×447, i32.store×201, local.tee×154, i32.load×103 |
| 6 | `(i32 i32 i32) -> ()` | 65 | 4,027 | 2,080 | local.get×643, i32.const×234, i32.add×173, local.tee×132, local.set×128 |
| 7 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 61 | 3,991 | 2,134 | local.get×675, i32.const×228, local.set×180, br_if×131, i32.add×123 |
| 8 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 34 | 3,499 | 1,791 | local.get×540, i32.const×216, local.set×150, local.tee×91, i32.load×91 |
| 9 | `(i32 i32 i32 i32) -> ()` | 29 | 3,272 | 1,826 | local.get×749, local.tee×214, select×149, i32.const×97, i32.lt_s×78 |
| 10 | `(i32 i32 i32) -> ()` | 20 | 3,518 | 1,626 | local.get×475, i32.const×238, i32.add×87, local.set×84, local.tee×80 |
| 11 | `(i32 i32 i32) -> (i32)` | 30 | 3,049 | 1,607 | local.get×410, i32.const×219, local.set×139, i32.add×87, end×87 |
| 12 | `(i32 i32 i32 i32 i32) -> ()` | 30 | 2,825 | 1,497 | local.get×450, i32.const×197, local.set×102, i32.add×82, local.tee×67 |
| 13 | `(i32) -> ()` | 4 | 2,734 | 1,283 | local.get×346, i32.load×203, local.tee×118, i32.const×116, end×115 |
| 14 | `(i32 i32 i32) -> ()` | 24 | 2,117 | 1,186 | local.get×373, i32.add×237, i32.const×168, i32.xor×114, local.tee×85 |
| 15 | `(i32 i32 i32) -> ()` | 31 | 2,818 | 1,175 | local.get×298, i32.const×112, f64.const×93, local.tee×72, br_if×61 |
| 16 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 51 | 2,111 | 1,151 | local.get×378, i32.const×119, local.set×114, end×55, i32.add×55 |
| 17 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` | 47 | 1,697 | 887 | local.get×246, i32.const×128, local.set×75, i32.add×66, local.tee×51 |
| 18 | `(i32 i32) -> ()` | 28 | 1,420 | 746 | local.get×219, i32.add×87, i32.load×72, i32.const×68, local.set×59 |
| 19 | `(i32 i32) -> ()` | 7 | 1,187 | 655 | local.get×201, i32.const×103, local.tee×46, i32.add×45, i32.sub×40 |
| 20 | `(i32 i32 i32) -> (i32)` | 11 | 1,222 | 656 | local.get×144, i32.const×121, i32.add×55, local.set×50, local.tee×32 |
| 21 | `(i32 i32) -> ()` | 53 | 1,168 | 519 | local.get×189, local.set×81, i32.load×81, i32.store×54, end×29 |
| 22 | `(i32 i32 i32 i32) -> (i32)` | 12 | 1,145 | 571 | local.get×147, i32.const×103, local.tee×38, end×27, i32.store×25 |
| 23 | `(i32 i32 i32 i32 i32 i32) -> ()` | 10 | 1,037 | 556 | local.get×173, i32.const×84, i32.add×42, local.tee×28, br_if×26 |
| 24 | `(i32 i32) -> (i32)` | 2 | 1,168 | 484 | local.get×131, i32.const×83, i32.add×39, i32.load×26, i64.store×26 |
| 25 | `(i32) -> ()` | 5 | 1,171 | 548 | local.get×135, i32.const×94, i32.store×43, i32.load×35, local.tee×32 |
| 26 | `(i32 i32) -> ()` | 27 | 1,008 | 491 | local.get×162, i32.load×54, local.tee×54, i32.store×54, end×29 |
| 27 | `(i32 i32 i32 i32 i32) -> (i32)` | 8 | 896 | 481 | local.get×156, i32.add×57, i32.const×47, local.tee×23, i32.store8×20 |
| 28 | `(i32 i32 i32 i32 i32 i32) -> (i32)` | 15 | 905 | 452 | local.get×161, i32.const×56, local.set×51, i32.store×38, local.tee×22 |
| 99 | `(i32 i32) -> (i32)` | 115 | 16,984 | 7,741 | local.get×2375, i32.const×949, local.set×413, end×369, i32.store×320 |

## Embedded strings (data segments)

60 printable strings ≥6 chars; largest:

```
00010203040506070809101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384858687888990919293949596979899
light borders not of the chunk's sizeface layout direction or diagonal out of rangeruns it does not decodeno runs to decodenull pointer passed to rustrecursive use of an object detected which would le
a reused light without the lightchunk sizeuniform lighthood runs startborder kindsky seed gridcentre lightcentre light kindkeep bitshood entrystore slotopen sky faceskeyed lightneighbour bitmask
resumesteerdepenetrationRisechunkHashmeshLightchunkIngestblockEditsmovementTicknetReadnetSendcoreFramereplaySteplightComputebloxd-wasm debug trap
/home/runner/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/dlmalloc-0.2.14/src/dlmalloc.rs
assertion failed: r.len() == att.len() && gb.len() == att.len() && queue.len().is_power_of_two()
/rustc/b940084d7eb6a299eb4bfeb8e34901bc051e7ac4/library/core/src/slice/sort/shared/smallsort.rs
/rustc/b940084d7eb6a299eb4bfeb8e34901bc051e7ac4/library/std/src/sys/sync/rwlock/no_threads.rs
a formatting trait implementation returned an error when the underlying stream did not
/rustc/b940084d7eb6a299eb4bfeb8e34901bc051e7ac4/library/alloc/src/raw_vec/mod.rs
/rustc/b940084d7eb6a299eb4bfeb8e34901bc051e7ac4/library/std/src/panicking.rs
assertion failed: sky.len() == att.len() && queue.len().is_power_of_two() &&
assertion failed: blk.len() == att.len() && queue.len().is_power_of_two() &&
/rustc/b940084d7eb6a299eb4bfeb8e34901bc051e7ac4/library/alloc/src/string.rs
assertion failed: l.len() == att.len() && queue.len().is_power_of_two() &&
/rustc/b940084d7eb6a299eb4bfeb8e34901bc051e7ac4/library/alloc/src/fmt.rs
{"a":"","b":""}malformed voxel-crunch runschunk size must be non-zero
Errorpayload truncateda count past its boundpayload not word-aligned
A directions is not each direction once, then the first ones again
attempted to take ownership of Rust value while it was borrowed
```

## Opcode histogram (aggregated)

| opcode | count |
|---|---:|
| `local.get` | 27,357 |
| `i32.const` | 12,365 |
| `local.set` | 5,449 |
| `i32.add` | 5,373 |
| `local.tee` | 4,817 |
| `end` | 4,145 |
| `i32.load` | 3,571 |
| `br_if` | 2,893 |
| `i32.store` | 2,595 |
| `block` | 1,826 |
| `if` | 1,716 |
| `i32.and` | 1,470 |
| `i32.shl` | 1,420 |
| `call` | 1,366 |
| `br` | 1,160 |
| `i32.sub` | 1,119 |
| `i32.eqz` | 855 |
| `i32.load8_u` | 844 |
| `i64.const` | 829 |
| `select` | 771 |
| `i32.or` | 701 |
| `i64.store` | 699 |
| `i32.store8` | 619 |
| `i32.gt_u` | 591 |
| `i32.ne` | 585 |

## Custom sections

- `name` · 23 bytes

## Analysis quality

- sections consumed: 12, structural errors: 0
- bodies fully decoded: 166/166 (degraded: 0)
