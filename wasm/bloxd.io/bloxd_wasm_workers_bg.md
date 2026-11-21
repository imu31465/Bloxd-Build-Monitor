# WASM module: `bloxd_wasm_workers_bg`

> environment **bloxd.io** · build `bqoxjr.2558012f` · analyzed 2026-11-21T12:37:12+09:00
> source: https://bloxd.io/static/media/bloxd_wasm_workers_bg.bbb759863ba8f8a8aa47.wasm
> 196,044 bytes (191.4 KB) · sha256 `e767134c25f99ed9…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 165 / 5 |
| Exports / imports | 33 / 5 |
| Code bytes (function bodies) | 184,550 (180.2 KB) |
| Total local variables | 1,410 |
| Instructions (scanable bodies) | 91,804 |
| Data segments / bytes | 9 / 10,335 |
| Element segments / entries | 1 / 44 |
| Memories / tables / globals | 1 / 1 / 3 |
| name-section module id | `f95acdaa2089e0df.777` |
| Sections | 12 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 161 | 21 |
| 2 | import | 61 | 5 |
| 3 | function | 167 | 165 |
| 4 | table | 5 | 1 |
| 5 | memory | 3 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 246 | 33 |
| 9 | element | 75 | 1 |
| 12 | datacount | 1 | — |
| 10 | code | 184,818 | 165 |
| 11 | data | 10,416 | 9 |
| 0 | custom:name | 28 | — |

## Types

21 function types; top shapes: `(i32 i32) -> (i32)` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32) -> ()` ×1, `(i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `() -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

5 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `Ds1K.IJJS` | func | `(i32) -> ()` |
| 1 | `Ds1K.rVpd` | func | `(i32) -> ()` |
| 2 | `Ds1K.EdYr` | func | `(i32 i32) -> ()` |
| 3 | `Ds1K.Sajy` | func | `(i32 i32) -> (i32)` |
| 4 | `Ds1K.naPf` | func | `(i32 i32) -> ()` |

## Exports

33 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `YzAA` | func | 138 | `() -> (i32 i32)` |
| `sW4G` | func | 113 | `(i32) -> ()` |
| `Y8nO` | func | 99 | `() -> (i32)` |
| `qfSw` | func | 95 | `() -> (i32)` |
| `Ukc5` | func | 149 | `(i32 i32 i32) -> ()` |
| `oAp0` | func | 165 | `(i32) -> (i32)` |
| `TNiv` | func | 136 | `(i32 i32 i32 i32) -> (i32)` |
| `ZvBS` | func | 56 | `(i32 i32) -> (i32)` |
| `f3Gr` | global | 1 | `` |
| `Ltvf` | func | 134 | `() -> ()` |
| `Qopz` | func | 125 | `(i32) -> (i32)` |
| `d4eH` | func | 49 | `() -> (i32)` |
| `sZ2y` | func | 123 | `(i32) -> (i32)` |
| `s7Cj` | func | 126 | `(i32) -> (i32)` |
| `A7H9` | func | 5 | `(i32 i32) -> (i32)` |
| `tgjz` | func | 134 | `() -> ()` |
| `COrf` | func | 135 | `(i32 i32) -> (i32)` |
| `Qp6i` | func | 137 | `(i32 i32 i32) -> (i32 i32)` |
| `Qf9Y` | func | 91 | `(i32 i32) -> ()` |
| `HGYa` | func | 122 | `(i32) -> (i32)` |
| `Vn3s` | func | 124 | `(i32) -> (i32)` |
| `ndgH` | func | 121 | `(i32) -> (i32)` |
| `R0LD` | func | 166 | `(i32) -> ()` |
| `MK59` | global | 2 | `` |
| `WWwr` | func | 168 | `() -> (i32)` |
| `HS9I` | func | 103 | `(i32 i32) -> (i32)` |
| `RYTJ` | func | 74 | `(i32 i32) -> ()` |
| `memory` | memory | 0 | `` |
| `C5Cb` | func | 143 | `() -> (i32)` |
| `AJG7` | func | 128 | `() -> (i32)` |
| `DFk8` | func | 39 | `() -> (i32)` |
| `wjAR` | func | 110 | `(i32) -> (i32)` |
| `qhzY` | func | 14 | `(i32 i32 i32) -> ()` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- memory 0: min 17 pages · max ∞ · shared=False
- table 0: funcref · min 45 · max 45
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 1059564, `i32` = i32.const 1059776

## Functions

- 165 bodies · 184,550 code bytes · avg 1.1 KB
- instruction scan: 165 bodies fully decoded, 0 degraded (unknown/extension opcodes)

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
| > 16384 bytes | 2 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32) -> (i32)` | 159 | 69,009 | 34,464 | local.get×10103, i32.const×4742, local.set×2381, i32.add×2099, local.tee×1603 |
| 1 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 100 | 10,232 | 5,391 | local.get×1725, i32.const×519, local.tee×357, i32.add×340, local.set×301 |
| 2 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 25 | 4,850 | 2,627 | local.get×818, i32.const×314, local.tee×167, i32.add×154, br_if×132 |
| 3 | `(i32 i32 i32 i32 i32 i32) -> (i32)` | 34 | 4,220 | 2,264 | local.get×700, i32.const×261, i32.add×236, local.set×234, br_if×100 |
| 4 | `(i32) -> (i32)` | 9 | 4,901 | 2,140 | local.get×498, i32.const×447, i32.store×201, local.tee×154, i32.load×103 |
| 5 | `(i32 i32 i32) -> ()` | 65 | 4,027 | 2,080 | local.get×643, i32.const×234, i32.add×173, local.tee×132, local.set×128 |
| 6 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 61 | 3,991 | 2,134 | local.get×675, i32.const×228, local.set×180, br_if×131, i32.add×123 |
| 7 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 34 | 3,499 | 1,791 | local.get×540, i32.const×216, local.set×150, local.tee×91, i32.load×91 |
| 8 | `(i32 i32 i32 i32) -> ()` | 29 | 3,272 | 1,826 | local.get×749, local.tee×214, select×149, i32.const×97, i32.lt_s×78 |
| 9 | `(i32 i32 i32) -> ()` | 20 | 3,518 | 1,626 | local.get×475, i32.const×238, i32.add×87, local.set×84, local.tee×80 |
| 10 | `(i32 i32 i32) -> (i32)` | 30 | 3,049 | 1,607 | local.get×410, i32.const×219, local.set×139, i32.add×87, end×87 |
| 11 | `(i32 i32 i32 i32 i32) -> ()` | 30 | 2,825 | 1,497 | local.get×450, i32.const×197, local.set×102, i32.add×82, local.tee×67 |
| 12 | `(i32) -> ()` | 4 | 2,709 | 1,272 | local.get×343, i32.load×201, local.tee×117, i32.const×115, end×114 |
| 13 | `(i32 i32 i32) -> ()` | 24 | 2,117 | 1,186 | local.get×373, i32.add×237, i32.const×168, i32.xor×114, local.tee×85 |
| 14 | `(i32 i32 i32) -> ()` | 31 | 2,818 | 1,175 | local.get×298, i32.const×112, f64.const×93, local.tee×72, br_if×61 |
| 15 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 51 | 2,111 | 1,151 | local.get×378, i32.const×119, local.set×114, end×55, i32.add×55 |
| 16 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` | 47 | 1,697 | 887 | local.get×246, i32.const×128, local.set×75, i32.add×66, local.tee×51 |
| 17 | `(i32 i32) -> ()` | 28 | 1,420 | 746 | local.get×219, i32.add×87, i32.load×72, i32.const×68, local.set×59 |
| 18 | `(i32 i32) -> ()` | 7 | 1,187 | 655 | local.get×201, i32.const×103, local.tee×46, i32.add×45, i32.sub×40 |
| 19 | `(i32 i32 i32) -> (i32)` | 11 | 1,222 | 656 | local.get×144, i32.const×121, i32.add×55, local.set×50, local.tee×32 |
| 20 | `(i32 i32) -> ()` | 53 | 1,168 | 519 | local.get×189, local.set×81, i32.load×81, i32.store×54, end×29 |
| 21 | `(i32 i32 i32 i32) -> (i32)` | 12 | 1,145 | 571 | local.get×147, i32.const×103, local.tee×38, end×27, i32.store×25 |
| 22 | `(i32 i32 i32 i32 i32 i32) -> ()` | 10 | 1,037 | 556 | local.get×173, i32.const×84, i32.add×42, local.tee×28, br_if×26 |
| 23 | `(i32 i32) -> (i32)` | 2 | 1,168 | 484 | local.get×131, i32.const×83, i32.add×39, i32.load×26, i64.store×26 |
| 24 | `(i32) -> ()` | 5 | 1,171 | 548 | local.get×135, i32.const×94, i32.store×43, i32.load×35, local.tee×32 |
| 25 | `(i32 i32) -> ()` | 27 | 1,008 | 491 | local.get×162, i32.load×54, local.tee×54, i32.store×54, end×29 |
| 26 | `(i32 i32 i32 i32 i32) -> (i32)` | 8 | 896 | 481 | local.get×156, i32.add×57, i32.const×47, local.tee×23, i32.store8×20 |
| 27 | `(i32 i32 i32 i32 i32 i32) -> (i32)` | 15 | 905 | 452 | local.get×161, i32.const×56, local.set×51, i32.store×38, local.tee×22 |
| 28 | `(i32 i32) -> ()` | 4 | 829 | 392 | local.get×108, i32.const×64, i32.store×37, i32.load×21, end×19 |
| 98 | `(i32 i32) -> (i32)` | 115 | 16,936 | 7,717 | local.get×2366, i32.const×948, local.set×410, end×369, i32.store×321 |

## Embedded strings (data segments)

60 printable strings ≥6 chars; largest:

```
00010203040506070809101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384858687888990919293949596979899
light borders not of the chunk's sizeface layout direction or diagonal out of rangeruns it does not decodeno runs to decodenull pointer passed to rustrecursive use of an object detected which would le
a reused light without the lightchunk sizeuniform lighthood runs startborder kindsky seed gridcentre lightcentre light kindkeep bitshood entrystore slotopen sky facesneighbour bitmask
resumesteerdepenetrationRisechunkHashmeshLightchunkIngestblockEditsmovementTicknetReadnetSendcoreFramereplaySteplightComputebloxd-wasm debug trap
/home/arthur/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/dlmalloc-0.2.14/src/dlmalloc.rs
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
| `local.get` | 26,980 |
| `i32.const` | 12,155 |
| `local.set` | 5,387 |
| `i32.add` | 5,263 |
| `local.tee` | 4,755 |
| `end` | 4,062 |
| `i32.load` | 3,487 |
| `br_if` | 2,817 |
| `i32.store` | 2,572 |
| `block` | 1,792 |
| `if` | 1,687 |
| `i32.and` | 1,462 |
| `i32.shl` | 1,419 |
| `call` | 1,340 |
| `br` | 1,136 |
| `i32.sub` | 1,101 |
| `i32.load8_u` | 841 |
| `i32.eqz` | 814 |
| `i64.const` | 795 |
| `select` | 767 |
| `i32.or` | 701 |
| `i64.store` | 648 |
| `i32.store8` | 618 |
| `i32.gt_u` | 588 |
| `i32.eq` | 574 |

## Custom sections

- `name` · 23 bytes

## Analysis quality

- sections consumed: 12, structural errors: 0
- bodies fully decoded: 165/165 (degraded: 0)
