# WASM module: `bloxd_wasm_workers_bg`

> environment **bloxd.io** · build `fl4vv.bd3c59ce` · analyzed 2026-11-28T08:15:42+09:00
> source: https://bloxd.io/static/media/bloxd_wasm_workers_bg.5bded7162be9062b4193.wasm
> 203,635 bytes (198.9 KB) · sha256 `eaeeb1e1d8f554dc…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- name-section module id `47aa12e2112f56b0.790` → `d3b6c0adfc28c88b.790` (numeric version suffix unchanged — same module version, re-randomized prefix)
- export identifiers rotated by the obfuscator: 1/33 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 169 / 5 |
| Exports / imports | 33 / 5 |
| Code bytes (function bodies) | 192,404 (187.9 KB) |
| Total local variables | 1,531 |
| Instructions (scanable bodies) | 95,959 |
| Data segments / bytes | 9 / 10,051 |
| Element segments / entries | 1 / 44 |
| Memories / tables / globals | 1 / 1 / 3 |
| name-section module id | `d3b6c0adfc28c88b.790` |
| Sections | 12 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 167 | 22 |
| 2 | import | 61 | 5 |
| 3 | function | 171 | 169 |
| 4 | table | 5 | 1 |
| 5 | memory | 3 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 249 | 33 |
| 9 | element | 75 | 1 |
| 12 | datacount | 1 | — |
| 10 | code | 192,680 | 169 |
| 11 | data | 10,132 | 9 |
| 0 | custom:name | 28 | — |

## Types

22 function types; top shapes: `(i32 i32 i32) -> (i32)` ×1, `(i32 i32) -> (i32)` ×1, `(i32 i32) -> ()` ×1, `(i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `() -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

5 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `pJ0e.qJRB` | func | `(i32) -> ()` |
| 1 | `pJ0e.H7KA` | func | `(i32) -> ()` |
| 2 | `pJ0e.rQ1m` | func | `(i32 i32) -> ()` |
| 3 | `pJ0e.wE7o` | func | `(i32 i32) -> (i32)` |
| 4 | `pJ0e.dM5T` | func | `(i32 i32) -> ()` |

## Exports

33 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `x3eM` | func | 172 | `() -> (i32)` |
| `pvAk` | func | 131 | `(i32) -> (i32)` |
| `PWdk` | func | 170 | `(i32) -> ()` |
| `sgLj` | func | 106 | `(i32 i32) -> (i32)` |
| `KChZ` | func | 142 | `() -> (i32 i32)` |
| `memory` | memory | 0 | `` |
| `ruLC` | global | 1 | `` |
| `tOKa` | func | 40 | `() -> (i32)` |
| `HmGc` | func | 139 | `(i32 i32) -> (i32)` |
| `HmDh` | func | 140 | `(i32 i32 i32 i32) -> (i32)` |
| `lBD1` | func | 130 | `(i32) -> (i32)` |
| `eSdR` | func | 129 | `(i32) -> (i32)` |
| `iiSY` | func | 73 | `(i32 i32) -> ()` |
| `vvZn` | func | 153 | `(i32 i32 i32) -> ()` |
| `MiDL` | func | 126 | `(i32) -> (i32)` |
| `ip6j` | func | 127 | `(i32) -> (i32)` |
| `kERm` | func | 98 | `() -> (i32)` |
| `RPMr` | func | 119 | `(f64) -> (i32)` |
| `zIa4` | func | 141 | `(i32 i32 i32) -> (i32 i32)` |
| `CM3z` | func | 169 | `(i32) -> (i32)` |
| `qrCZ` | func | 114 | `(i32) -> (i32)` |
| `ndKg` | func | 138 | `() -> ()` |
| `Byk1` | func | 128 | `(i32) -> (i32)` |
| `BBUh` | func | 51 | `() -> (i32)` |
| `RLo0` | func | 58 | `(i32 i32) -> (i32)` |
| `H2vX` | func | 138 | `() -> ()` |
| `MWi1` | func | 147 | `() -> (i32)` |
| `aTDp` | func | 16 | `(i32 i32 i32) -> ()` |
| `UAe6` | func | 102 | `() -> (i32)` |
| `mI3d` | func | 5 | `(i32 i32) -> (i32)` |
| `uYQJ` | func | 94 | `(i32 i32) -> ()` |
| `If2e` | func | 117 | `(i32) -> ()` |
| `fP6I` | global | 2 | `` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- memory 0: min 17 pages · max ∞ · shared=False
- table 0: funcref · min 45 · max 45
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 1059280, `i32` = i32.const 1059504

## Functions

- 169 bodies · 192,404 code bytes · avg 1.1 KB
- instruction scan: 169 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 31 |
| <= 64 bytes | 4 |
| <= 128 bytes | 33 |
| <= 256 bytes | 35 |
| <= 512 bytes | 23 |
| <= 1024 bytes | 16 |
| <= 2048 bytes | 9 |
| <= 4096 bytes | 11 |
| <= 8192 bytes | 3 |
| <= 16384 bytes | 1 |
| > 16384 bytes | 3 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32) -> (i32)` | 159 | 55,456 | 27,732 | local.get×7935, i32.const×3924, local.set×1844, i32.add×1790, local.tee×1442 |
| 1 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` | 79 | 18,146 | 9,149 | local.get×2799, i32.const×1192, local.set×661, i32.add×478, end×462 |
| 2 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 100 | 10,232 | 5,391 | local.get×1725, i32.const×519, local.tee×357, i32.add×340, local.set×301 |
| 3 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 25 | 4,850 | 2,627 | local.get×818, i32.const×314, local.tee×167, i32.add×154, br_if×132 |
| 4 | `(i32 i32 i32 i32 i32 i32) -> (i32)` | 34 | 4,220 | 2,264 | local.get×700, i32.const×261, i32.add×236, local.set×234, br_if×100 |
| 5 | `(i32) -> (i32)` | 9 | 4,901 | 2,140 | local.get×498, i32.const×447, i32.store×201, local.tee×154, i32.load×103 |
| 6 | `(i32 i32 i32) -> ()` | 65 | 4,027 | 2,080 | local.get×643, i32.const×234, i32.add×173, local.tee×132, local.set×128 |
| 7 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` | 59 | 3,676 | 2,019 | local.get×673, i32.const×230, local.set×206, i32.add×97, end×92 |
| 8 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 61 | 4,017 | 2,137 | local.get×672, i32.const×233, local.set×180, br_if×131, i32.add×123 |
| 9 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 34 | 3,499 | 1,791 | local.get×540, i32.const×216, local.set×150, local.tee×91, i32.load×91 |
| 10 | `(i32 i32 i32 i32) -> ()` | 29 | 3,272 | 1,826 | local.get×749, local.tee×214, select×149, i32.const×97, i32.lt_s×78 |
| 11 | `(i32 i32 i32) -> ()` | 20 | 3,518 | 1,626 | local.get×475, i32.const×238, i32.add×87, local.set×84, local.tee×80 |
| 12 | `(i32 i32 i32) -> (i32)` | 30 | 2,981 | 1,579 | local.get×405, i32.const×226, local.set×135, i32.add×87, end×87 |
| 13 | `(i32 i32 i32 i32 i32) -> ()` | 30 | 2,780 | 1,478 | local.get×437, i32.const×198, local.set×104, i32.add×82, local.tee×65 |
| 14 | `(i32) -> ()` | 4 | 2,752 | 1,290 | local.get×349, i32.load×205, local.tee×119, end×116, i32.const×115 |
| 15 | `(i32 i32 i32) -> ()` | 24 | 2,117 | 1,186 | local.get×373, i32.add×237, i32.const×168, i32.xor×114, local.tee×85 |
| 16 | `(i32 i32 i32) -> ()` | 31 | 2,818 | 1,175 | local.get×298, i32.const×112, f64.const×93, local.tee×72, br_if×61 |
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
| 101 | `(i32 i32) -> (i32)` | 128 | 17,873 | 8,211 | local.get×2502, i32.const×1028, local.set×472, end×402, i32.store×342 |

## Embedded strings (data segments)

60 printable strings ≥6 chars; largest:

```
00010203040506070809101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384858687888990919293949596979899
light borders not of the chunk's sizeface layout direction or diagonal out of rangeruns it does not decodeno runs to decodenull pointer passed to rustrecursive use of an object detected which would le
a reused light without the lightchunk sizeuniform lighthood runs startborder kindsky seed gridcentre lightcentre light kindkeep bitshood entrystore slotopen sky faceskeyed lightneighbour bitmask
resumesteerdepenetrationRisechunkHashmeshLightchunkIngestblockEditsmovementTicknetReadnetSendcoreFramereplaySteplightComputebloxd-wasm debug trap
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
d/index.crates.io-1949cf8c6b5b557f/dlmalloc-0.2.14/src/dlmalloc.rs
A directions is not each direction once, then the first ones again
attempted to take ownership of Rust value while it was borrowed
```

## Opcode histogram (aggregated)

| opcode | count |
|---|---:|
| `local.get` | 28,140 |
| `i32.const` | 12,781 |
| `local.set` | 5,678 |
| `i32.add` | 5,522 |
| `local.tee` | 4,945 |
| `end` | 4,261 |
| `i32.load` | 3,641 |
| `br_if` | 2,975 |
| `i32.store` | 2,627 |
| `block` | 1,876 |
| `if` | 1,769 |
| `i32.and` | 1,567 |
| `i32.shl` | 1,484 |
| `call` | 1,421 |
| `br` | 1,192 |
| `i32.sub` | 1,136 |
| `i32.eqz` | 893 |
| `i32.load8_u` | 843 |
| `i64.const` | 818 |
| `select` | 804 |
| `i32.or` | 740 |
| `i64.store` | 697 |
| `i32.store8` | 618 |
| `i32.eq` | 592 |
| `i32.ne` | 591 |

## Custom sections

- `name` · 23 bytes

## Analysis quality

- sections consumed: 12, structural errors: 0
- bodies fully decoded: 169/169 (degraded: 0)
