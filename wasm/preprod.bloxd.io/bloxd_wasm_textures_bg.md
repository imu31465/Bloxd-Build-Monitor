# WASM module: `bloxd_wasm_textures_bg`

> environment **preprod.bloxd.io** · build `sn3sfj.2522680a` · analyzed 2026-11-25T01:02:22+09:00
> source: https://preprod.bloxd.io/static/media/bloxd_wasm_textures_bg.d7d41d4f0bb8769a2dc8.wasm
> 226,106 bytes (220.8 KB) · sha256 `8da34a927a2e2142…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- name-section module id `c2d01e731e36aada.1150` → `daac9ff7c42499b3.1150` (numeric version suffix unchanged — same module version, re-randomized prefix)
- export identifiers rotated by the obfuscator: 1/39 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 295 / 3 |
| Exports / imports | 39 / 3 |
| Code bytes (function bodies) | 203,923 (199.1 KB) |
| Total local variables | 1,693 |
| Instructions (scanable bodies) | 99,059 |
| Data segments / bytes | 20 / 20,352 |
| Element segments / entries | 1 / 113 |
| Memories / tables / globals | 1 / 1 / 3 |
| name-section module id | `daac9ff7c42499b3.1150` |
| Sections | 12 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 227 | 29 |
| 2 | import | 37 | 3 |
| 3 | function | 297 | 295 |
| 4 | table | 5 | 1 |
| 5 | memory | 3 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 309 | 39 |
| 9 | element | 212 | 1 |
| 12 | datacount | 1 | — |
| 10 | code | 204,398 | 295 |
| 11 | data | 20,523 | 20 |
| 0 | custom:name | 29 | — |

## Types

29 function types; top shapes: `(i32 i32 i32) -> (i32)` ×1, `(i32 i32) -> (i32)` ×1, `(i32 i32) -> ()` ×1, `(i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1, `(i32 i32 i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1

## Imports

3 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `PRc7.GeTe` | func | `(i32 i32) -> ()` |
| 1 | `PRc7.WhfB` | func | `(i32 i32) -> ()` |
| 2 | `PRc7.Muj5` | func | `(i32 i32) -> (i32)` |

## Exports

39 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `C6HI` | func | 236 | `(i32) -> (i32 i32)` |
| `wi7n` | func | 183 | `(i32) -> (i32)` |
| `FBng` | func | 184 | `(i32) -> (i32)` |
| `Lw68` | func | 152 | `(i32) -> (i32)` |
| `WIAG` | func | 254 | `(i32 i32 i32) -> ()` |
| `zgUR` | func | 128 | `(i32 i32) -> (i32)` |
| `p4rh` | func | 129 | `(i32 i32) -> (i32)` |
| `ZD43` | func | 231 | `(i32) -> (i32 i32)` |
| `hMjG` | func | 185 | `(i32) -> (i32)` |
| `rDnw` | func | 167 | `(i32) -> (i32)` |
| `mX7X` | func | 211 | `(i32 i32 i32 i32) -> (i32)` |
| `odlS` | func | 239 | `(i32) -> (i32 i32)` |
| `YeiH` | func | 219 | `(i32 i32 i32 i32 i32) -> (i32 i32)` |
| `bV4U` | func | 230 | `(i32) -> (i32 i32)` |
| `pXUE` | func | 293 | `() -> ()` |
| `iDFW` | func | 233 | `(i32) -> (i32 i32)` |
| `ZigT` | func | 226 | `(i32 i32 i32) -> (i32 i32)` |
| `EVa2` | func | 127 | `(i32 i32 i32) -> (i32)` |
| `Q085` | func | 235 | `(i32) -> (i32 i32)` |
| `INgb` | global | 2 | `` |
| `oYjz` | func | 198 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32 i32 i32)` |
| `Cgqb` | func | 109 | `(i32) -> ()` |
| `caQu` | func | 238 | `(i32) -> (i32 i32)` |
| `npz1` | func | 157 | `(i32) -> (i32)` |
| `memory` | memory | 0 | `` |
| `kGHO` | func | 234 | `(i32) -> (i32 i32)` |
| `LhLO` | func | 159 | `(i32) -> (i32)` |
| `dO1b` | func | 168 | `(i32) -> (i32)` |
| `N2tc` | func | 293 | `() -> ()` |
| `JdsT` | func | 215 | `(i32 i32) -> (i32 i32 i32 i32)` |
| `SoFD` | func | 208 | `(i32 i32) -> (i32)` |
| `Na1z` | func | 228 | `(i32 i32) -> (i32 i32)` |
| `xbPj` | func | 227 | `(i32 i32 i32) -> (i32 i32)` |
| `LZs5` | func | 135 | `(i32 i32) -> ()` |
| `Gpyn` | func | 95 | `(i32) -> ()` |
| `FsRd` | global | 1 | `` |
| `fpQO` | func | 182 | `(i32) -> (i32)` |
| `Y2Hj` | func | 237 | `(i32) -> (i32 i32)` |
| `GGnt` | func | 232 | `(i32) -> (i32 i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- memory 0: min 17 pages · max ∞ · shared=False
- table 0: funcref · min 114 · max 114
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 1069348, `i32` = i32.const 1069836

## Functions

- 295 bodies · 203,923 code bytes · avg 691 B
- instruction scan: 295 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 50 |
| <= 64 bytes | 30 |
| <= 128 bytes | 39 |
| <= 256 bytes | 41 |
| <= 512 bytes | 67 |
| <= 1024 bytes | 36 |
| <= 2048 bytes | 17 |
| <= 4096 bytes | 6 |
| <= 8192 bytes | 6 |
| <= 16384 bytes | 1 |
| > 16384 bytes | 2 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32 i32 i32) -> ()` | 20 | 19,288 | 9,074 | local.get×2247, i32.const×1482, end×474, local.set×415, br_if×385 |
| 1 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` | 37 | 10,066 | 5,070 | local.get×1501, i32.const×694, local.tee×271, i32.add×246, end×226 |
| 2 | `(i32 i32 i32 i32 i32 i32) -> ()` | 20 | 8,012 | 4,355 | local.get×1091, i32.const×672, local.tee×598, i32.add×406, i32.load8_u×200 |
| 3 | `(i32) -> (i32)` | 10 | 4,929 | 2,157 | local.get×505, i32.const×449, i32.store×204, local.tee×154, i32.load×105 |
| 4 | `(i32 i32 i32) -> ()` | 28 | 4,049 | 2,016 | local.get×547, i32.const×297, local.tee×127, i32.add×117, local.set×90 |
| 5 | `(i32 i32) -> ()` | 26 | 3,781 | 1,983 | local.get×502, local.tee×165, i32.const×161, i64.const×136, local.set×112 |
| 6 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 27 | 3,460 | 1,798 | local.get×465, i32.const×304, local.set×157, i32.add×109, local.tee×93 |
| 7 | `(i32 i32 i32) -> ()` | 23 | 1,853 | 970 | local.get×269, local.tee×90, i32.const×64, i64.const×57, local.set×42 |
| 8 | `(i32 i32 i32 i32 i32) -> ()` | 17 | 4,202 | 2,026 | local.get×602, i32.const×250, end×121, i32.load×109, local.tee×107 |
| 9 | `(i32 i32 i32 i32 i32 i32) -> ()` | 10 | 1,959 | 924 | local.get×296, i32.const×110, i32.load×68, local.tee×53, i32.store×50 |
| 10 | `(i32 i32 i32 i32 i32) -> ()` | 19 | 1,513 | 727 | local.get×247, i32.const×73, end×41, i32.load×34, local.set×29 |
| 11 | `(i32 i32) -> ()` | 15 | 1,350 | 673 | local.get×187, i32.const×86, i32.add×40, local.tee×40, i32.load×40 |
| 12 | `(i32 i32 i32 i32 i32 i32) -> ()` | 32 | 6,991 | 3,333 | local.get×983, i32.const×368, local.set×163, end×162, i32.add×158 |
| 13 | `(i32 i32) -> ()` | 18 | 1,246 | 589 | local.get×187, i32.const×53, local.set×32, i64.store×32, i64.load×30 |
| 14 | `(i32 i32 i32) -> ()` | 12 | 1,953 | 876 | local.get×218, i32.const×147, local.set×39, i64.const×39, i32.store×38 |
| 16 | `(i32 i32) -> ()` | 17 | 2,007 | 1,002 | local.get×243, i32.const×177, local.set×82, local.tee×45, end×38 |
| 18 | `(i32 i32) -> ()` | 9 | 1,124 | 511 | local.get×155, i32.const×61, i32.store×36, i32.load×34, i32.add×24 |
| 21 | `(i32 i32 i32 i32 i32 i32) -> ()` | 27 | 1,887 | 949 | local.get×237, i32.const×121, local.tee×68, i32.add×57, local.set×48 |
| 34 | `(i32 i32 i32 i32) -> ()` | 13 | 1,148 | 569 | local.get×156, i32.const×66, i32.add×46, local.tee×41, local.set×34 |
| 36 | `(i32 i32 i32 i32) -> ()` | 23 | 1,733 | 831 | local.get×238, i32.const×84, local.tee×46, i64.load×46, i32.add×45 |
| 41 | `(i32 i32) -> ()` | 20 | 1,140 | 532 | local.get×144, i32.const×63, local.tee×29, i32.load×29, i32.add×28 |
| 60 | `(i32 i32) -> (i32)` | 10 | 1,128 | 533 | local.get×116, i32.const×102, local.tee×32, i32.add×27, local.set×25 |
| 195 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32 i32 i32)` | 25 | 6,465 | 2,889 | local.get×884, i32.const×399, i32.store×171, i32.load×145, i32.add×144 |
| 212 | `(i32 i32) -> (i32 i32 i32 i32)` | 14 | 1,303 | 630 | local.get×170, i32.const×91, i32.store×40, local.set×32, end×30 |
| 216 | `(i32 i32 i32 i32 i32) -> (i32 i32)` | 36 | 2,726 | 1,306 | local.get×354, i32.const×162, local.set×73, local.tee×68, i32.add×68 |
| 223 | `(i32 i32 i32) -> (i32 i32)` | 60 | 26,652 | 12,791 | local.get×3787, i32.const×1489, local.tee×782, i32.load×693, i32.add×669 |
| 225 | `(i32 i32) -> (i32 i32)` | 21 | 2,405 | 1,085 | local.get×360, i32.const×112, i32.load×77, local.set×55, i32.store×52 |
| 232 | `(i32) -> (i32 i32)` | 54 | 8,142 | 3,824 | local.get×1057, i32.const×469, local.set×207, i32.add×203, i32.load×190 |
| 236 | `(i32) -> (i32 i32)` | 18 | 1,360 | 655 | local.get×176, i32.const×97, i32.add×44, end×35, local.tee×33 |
| 279 | `(i32 i32) -> (i32)` | 2 | 2,231 | 961 | local.get×256, i32.const×161, i32.add×95, i32.load×84, end×46 |

## Embedded strings (data segments)

60 printable strings ≥6 chars; largest:

```
entity not foundpermission deniedconnection refusedconnection resethost unreachablenetwork unreachableconnection abortednot connectedaddress in useaddress not availablenetwork downbroken pipeentity al
criticalprivatereservedsafecopylimits are exceededBadZlibHeaderInsufficientInputInvalidBlockTypeInvalidUncompressedBlockLengthInvalidHlitInvalidHdistInvalidCodeLengthRepeatBadCodeLengthHuffmanTreeBadL
Errornull pointer passed to rustrecursive use of an object detected which would lead to unsafe aliasing in rustchunk size must be non-zeroassertion failed: self.filled >= old_filled
Utf8Errorvalid_up_toerror_lenNoneSomeEnd of image has been reachedA fatal decoding error has been encounted earlierGrayscaleRgbIndexedGrayscaleAlphaRgbaOneTwoFourEightSixteen
resources aren't name and source pairsdata:image/png;base64,ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/
/rustc/b940084d7eb6a299eb4bfeb8e34901bc051e7ac4/library/std/src/sys/sync/rwlock/no_threads.rs
some block atlas indices are missingthere are no block atlas texturesOneTwoFourEightSixteen
/rustc/b940084d7eb6a299eb4bfeb8e34901bc051e7ac4/library/core/src/iter/adapters/step_by.rs
a formatting trait implementation returned an error when the underlying stream did not
assertion failed: (8 / bit_depth as usize * channels).saturating_mul(input.len()) >=
internal error: entered unreachable code: Not a possible byte rounded pixel width
/rustc/b940084d7eb6a299eb4bfeb8e34901bc051e7ac4/library/alloc/src/raw_vec/mod.rs
/rustc/b940084d7eb6a299eb4bfeb8e34901bc051e7ac4/library/core/src/slice/index.rs
d/index.crates.io-1949cf8c6b5b557f/png-0.18.1/src/decoder/unfiltering_buffer.rs
/rustc/b940084d7eb6a299eb4bfeb8e34901bc051e7ac4/library/core/src/slice/iter.rs
d/index.crates.io-1949cf8c6b5b557f/png-0.18.1/src/decoder/transform/palette.rs
/rustc/b940084d7eb6a299eb4bfeb8e34901bc051e7ac4/library/std/src/panicking.rs
/rustc/b940084d7eb6a299eb4bfeb8e34901bc051e7ac4/library/alloc/src/string.rs
d/index.crates.io-1949cf8c6b5b557f/png-0.18.1/src/decoder/read_decoder.rs
/rustc/b940084d7eb6a299eb4bfeb8e34901bc051e7ac4/library/alloc/src/fmt.rs
```

## Opcode histogram (aggregated)

| opcode | count |
|---|---:|
| `local.get` | 27,217 |
| `i32.const` | 13,373 |
| `local.tee` | 5,578 |
| `i32.add` | 4,948 |
| `end` | 4,602 |
| `local.set` | 4,586 |
| `i32.load` | 4,223 |
| `i32.store` | 3,016 |
| `br_if` | 2,671 |
| `block` | 2,165 |
| `call` | 1,867 |
| `i32.sub` | 1,864 |
| `i64.const` | 1,754 |
| `if` | 1,655 |
| `i64.store` | 1,484 |
| `br` | 1,484 |
| `i64.load` | 1,311 |
| `i32.and` | 1,294 |
| `i32.eqz` | 1,006 |
| `i32.store8` | 842 |
| `i32.load8_u` | 809 |
| `i32.ne` | 672 |
| `i32.shl` | 624 |
| `unreachable` | 564 |
| `i32.shr_u` | 556 |

## Custom sections

- `name` · 24 bytes

## Analysis quality

- sections consumed: 12, structural errors: 0
- bodies fully decoded: 295/295 (degraded: 0)
