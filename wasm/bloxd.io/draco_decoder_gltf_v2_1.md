# WASM module: `draco_decoder_gltf_v2_1`

> environment **bloxd.io** · build `bqoxjr.2558012f` · analyzed 2026-11-21T12:37:12+09:00
> source: https://bloxd.io/static/media/draco_decoder_gltf_v2_1.1207caa8c6e38dc2aa04.wasm
> 188,782 bytes (184.4 KB) · sha256 `833427ade1455b6c…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 421 / 5 |
| Exports / imports | 148 / 5 |
| Code bytes (function bodies) | 175,896 (171.8 KB) |
| Total local variables | 1,601 |
| Instructions (scanable bodies) | 90,451 |
| Data segments / bytes | 8 / 10,296 |
| Element segments / entries | 1 / 302 |
| Memories / tables / globals | 1 / 1 / 1 |
| Sections | 10 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 132 | 20 |
| 2 | import | 31 | 5 |
| 3 | function | 423 | 421 |
| 4 | table | 7 | 1 |
| 5 | memory | 7 | 1 |
| 6 | global | 9 | 1 |
| 7 | export | 790 | 148 |
| 9 | element | 490 | 1 |
| 10 | code | 176,500 | 421 |
| 11 | data | 10,358 | 8 |

## Types

20 function types; top shapes: `(i32) -> (i32)` ×1, `(i32 i32) -> (i32)` ×1, `(i32) -> ()` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32) -> ()` ×1, `() -> (i32)` ×1, `(i32 i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32) -> ()` ×1

## Imports

5 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `a.a` | func | `() -> ()` |
| 1 | `a.b` | func | `(i32 i32 i32) -> (i32)` |
| 2 | `a.c` | func | `(i32) -> (i32)` |
| 3 | `a.d` | func | `(i32 i32 i32) -> ()` |
| 4 | `a.e` | func | `(i32) -> (i32)` |

## Exports

148 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `f` | memory | 0 | `` |
| `g` | func | 112 | `() -> ()` |
| `h` | table | 0 | `` |
| `i` | func | 102 | `(i32) -> ()` |
| `j` | func | 338 | `() -> (i32)` |
| `k` | func | 337 | `(i32 i32 i32) -> ()` |
| `l` | func | 102 | `(i32) -> ()` |
| `m` | func | 336 | `() -> (i32)` |
| `n` | func | 160 | `(i32) -> (i32)` |
| `o` | func | 335 | `(i32) -> ()` |
| `p` | func | 334 | `() -> (i32)` |
| `q` | func | 102 | `(i32) -> ()` |
| `r` | func | 333 | `() -> (i32)` |
| `s` | func | 101 | `(i32) -> (i32)` |
| `t` | func | 332 | `(i32) -> (i32)` |
| `u` | func | 331 | `(i32) -> (i32)` |
| `v` | func | 50 | `(i32) -> (i32)` |
| `w` | func | 329 | `(i32) -> (i32)` |
| `x` | func | 328 | `(i32) -> (i32)` |
| `y` | func | 327 | `(i32) -> (i32)` |
| `z` | func | 326 | `(i32) -> (i32)` |
| `A` | func | 325 | `(i32) -> (i32)` |
| `B` | func | 17 | `(i32) -> ()` |
| `C` | func | 324 | `() -> (i32)` |
| `D` | func | 159 | `(i32 i32) -> (i32)` |
| `E` | func | 40 | `(i32) -> (i32)` |
| `F` | func | 323 | `(i32 i32) -> (f32)` |
| `G` | func | 322 | `(i32) -> (f32)` |
| `H` | func | 70 | `(i32) -> ()` |
| `I` | func | 321 | `() -> (i32)` |
| `J` | func | 159 | `(i32 i32) -> (i32)` |
| `K` | func | 40 | `(i32) -> (i32)` |
| `L` | func | 70 | `(i32) -> ()` |
| `M` | func | 320 | `() -> (i32)` |
| `N` | func | 158 | `(i32) -> (i32)` |
| `O` | func | 101 | `(i32) -> (i32)` |
| `P` | func | 70 | `(i32) -> ()` |
| `Q` | func | 319 | `() -> (i32)` |
| `R` | func | 318 | `(i32) -> (i32)` |
| `S` | func | 158 | `(i32) -> (i32)` |
| `T` | func | 101 | `(i32) -> (i32)` |
| `U` | func | 70 | `(i32) -> ()` |
| `V` | func | 317 | `() -> (i32)` |
| `W` | func | 316 | `(i32) -> ()` |
| `X` | func | 160 | `(i32) -> (i32)` |
| `Y` | func | 315 | `(i32) -> (i32)` |
| `Z` | func | 314 | `(i32) -> (i32)` |
| `_` | func | 313 | `(i32) -> ()` |
| `$` | func | 44 | `() -> (i32)` |
| `aa` | func | 312 | `(i32 i32) -> (f32)` |
| `ba` | func | 99 | `(i32) -> (i32)` |
| `ca` | func | 43 | `(i32) -> ()` |
| `da` | func | 44 | `() -> (i32)` |
| `ea` | func | 311 | `(i32 i32) -> (i32)` |
| `fa` | func | 157 | `(i32) -> (i32)` |
| `ga` | func | 43 | `(i32) -> ()` |
| `ha` | func | 44 | `() -> (i32)` |
| `ia` | func | 310 | `(i32 i32) -> (i32)` |
| `ja` | func | 157 | `(i32) -> (i32)` |
| `ka` | func | 43 | `(i32) -> ()` |
| `la` | func | 44 | `() -> (i32)` |
| `ma` | func | 309 | `(i32 i32) -> (i32)` |
| `na` | func | 156 | `(i32) -> (i32)` |
| `oa` | func | 43 | `(i32) -> ()` |
| `pa` | func | 44 | `() -> (i32)` |
| `qa` | func | 308 | `(i32 i32) -> (i32)` |
| `ra` | func | 156 | `(i32) -> (i32)` |
| `sa` | func | 43 | `(i32) -> ()` |
| `ta` | func | 44 | `() -> (i32)` |
| `ua` | func | 155 | `(i32 i32) -> (i32)` |
| `va` | func | 99 | `(i32) -> (i32)` |
| `wa` | func | 43 | `(i32) -> ()` |
| `xa` | func | 44 | `() -> (i32)` |
| `ya` | func | 155 | `(i32 i32) -> (i32)` |
| `za` | func | 99 | `(i32) -> (i32)` |
| `Aa` | func | 43 | `(i32) -> ()` |
| `Ba` | func | 306 | `() -> (i32)` |
| `Ca` | func | 305 | `(i32 i32 i32) -> (i32)` |
| `Da` | func | 304 | `(i32 i32 i32) -> (i32)` |
| `Ea` | func | 303 | `(i32 i32 i32 i32) -> ()` |
| `Fa` | func | 302 | `(i32 i32 i32) -> (f64)` |
| `Ga` | func | 301 | `(i32 i32 i32) -> (i32)` |
| `Ha` | func | 300 | `(i32 i32) -> (i32)` |
| `Ia` | func | 299 | `(i32 i32 i32) -> (i32)` |
| `Ja` | func | 298 | `(i32) -> ()` |
| `Ka` | func | 297 | `() -> (i32)` |
| `La` | func | 296 | `(i32 i32 i32 i32) -> (i32)` |
| `Ma` | func | 295 | `(i32 i32 i32 i32) -> (i32)` |
| `Na` | func | 294 | `(i32 i32 i32) -> (i32)` |
| `Oa` | func | 293 | `(i32 i32 i32) -> (i32)` |
| `Pa` | func | 292 | `(i32 i32 i32 i32) -> (i32)` |
| `Qa` | func | 291 | `(i32 i32 i32) -> (i32)` |
| `Ra` | func | 290 | `(i32 i32 i32) -> (i32)` |
| `Sa` | func | 289 | `(i32 i32) -> (i32)` |
| `Ta` | func | 288 | `(i32 i32 i32) -> (i32)` |
| `Ua` | func | 287 | `(i32 i32 i32 i32) -> (i32)` |
| `Va` | func | 286 | `(i32 i32 i32) -> (i32)` |
| `Wa` | func | 285 | `(i32 i32 i32 i32) -> (i32)` |
| `Xa` | func | 284 | `(i32 i32 i32 i32) -> (i32)` |
| `Ya` | func | 283 | `(i32 i32 i32 i32) -> (i32)` |
| `Za` | func | 282 | `(i32 i32 i32 i32) -> (i32)` |
| `_a` | func | 154 | `(i32 i32 i32 i32) -> (i32)` |
| `$a` | func | 281 | `(i32 i32 i32 i32) -> (i32)` |
| `ab` | func | 280 | `(i32 i32 i32 i32) -> (i32)` |
| `bb` | func | 279 | `(i32 i32 i32 i32) -> (i32)` |
| `cb` | func | 277 | `(i32 i32 i32 i32) -> (i32)` |
| `db` | func | 154 | `(i32 i32 i32 i32) -> (i32)` |
| `eb` | func | 276 | `(i32 i32 i32 i32) -> (i32)` |
| `fb` | func | 275 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `gb` | func | 274 | `(i32 i32) -> ()` |
| `hb` | func | 273 | `(i32 i32) -> (i32)` |
| `ib` | func | 272 | `(i32 i32 i32) -> (i32)` |
| `jb` | func | 271 | `(i32 i32 i32) -> (i32)` |
| `kb` | func | 270 | `(i32) -> ()` |
| `lb` | func | 69 | `() -> (i32)` |
| `mb` | func | 57 | `() -> (i32)` |
| `nb` | func | 68 | `() -> (i32)` |
| `ob` | func | 95 | `() -> (i32)` |
| `pb` | func | 69 | `() -> (i32)` |
| `qb` | func | 57 | `() -> (i32)` |
| `rb` | func | 68 | `() -> (i32)` |
| `sb` | func | 95 | `() -> (i32)` |
| `tb` | func | 152 | `() -> (i32)` |
| `ub` | func | 151 | `() -> (i32)` |
| `vb` | func | 69 | `() -> (i32)` |
| `wb` | func | 57 | `() -> (i32)` |
| `xb` | func | 68 | `() -> (i32)` |
| `yb` | func | 57 | `() -> (i32)` |
| `zb` | func | 68 | `() -> (i32)` |
| `Ab` | func | 95 | `() -> (i32)` |
| `Bb` | func | 152 | `() -> (i32)` |
| `Cb` | func | 151 | `() -> (i32)` |
| `Db` | func | 269 | `() -> (i32)` |
| `Eb` | func | 268 | `() -> (i32)` |
| `Fb` | func | 267 | `() -> (i32)` |
| `Gb` | func | 266 | `() -> (i32)` |
| `Hb` | func | 265 | `() -> (i32)` |
| `Ib` | func | 264 | `() -> (i32)` |
| `Jb` | func | 263 | `() -> (i32)` |
| `Kb` | func | 262 | `() -> (i32)` |
| `Lb` | func | 57 | `() -> (i32)` |
| `Mb` | func | 69 | `() -> (i32)` |
| `Nb` | func | 261 | `() -> (i32)` |
| `Ob` | func | 260 | `() -> (i32)` |
| `Pb` | func | 259 | `() -> (i32)` |
| `Qb` | func | 258 | `() -> (i32)` |
| `Rb` | func | 128 | `(i32) -> (i32)` |
| `Sb` | func | 5 | `(i32) -> ()` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- memory 0: min 256 pages · max 1,024 · shared=False
- table 0: funcref · min 303 · max 303
- globals: 1 (1 mutable); sample: `i32` = i32.const 5254912

## Functions

- 421 bodies · 175,896 code bytes · avg 417 B
- instruction scan: 421 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 118 |
| <= 64 bytes | 57 |
| <= 128 bytes | 67 |
| <= 256 bytes | 58 |
| <= 512 bytes | 40 |
| <= 1024 bytes | 36 |
| <= 2048 bytes | 28 |
| <= 4096 bytes | 11 |
| <= 8192 bytes | 5 |
| <= 16384 bytes | 1 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32) -> ()` | 7 | 1,612 | 793 | local.get×214, i32.const×119, i32.store×66, local.tee×60, i32.load×53 |
| 19 | `(i32 i32 i32 i32) -> ()` | 6 | 1,534 | 813 | local.get×251, i32.const×48, local.tee×47, i32.add×45, end×40 |
| 54 | `(i32 i32 i32 i32) -> (i32)` | 5 | 2,385 | 1,289 | local.get×368, i32.const×102, local.tee×100, br_if×74, i32.add×69 |
| 66 | `(i32 i32 i32 i32) -> (i32)` | 7 | 1,605 | 851 | local.get×255, i32.const×62, local.tee×48, i32.add×45, local.set×44 |
| 67 | `(i32 i32 i32 i32) -> (i32)` | 7 | 1,609 | 852 | local.get×254, i32.const×63, local.tee×49, i32.add×45, local.set×44 |
| 68 | `(i32 i32 i32 i32) -> (i32)` | 7 | 1,645 | 873 | local.get×259, i32.const×67, local.tee×52, i32.add×45, local.set×44 |
| 69 | `(i32 i32 i32 i32) -> (i32)` | 7 | 1,630 | 864 | local.get×256, i32.const×66, local.tee×51, i32.add×45, local.set×44 |
| 70 | `(i32 i32 i32 i32) -> (i32)` | 6 | 1,845 | 967 | local.get×271, local.tee×86, i32.const×64, br_if×63, i32.load×58 |
| 71 | `(i32 i32 i32 i32) -> (i32)` | 6 | 1,851 | 969 | local.get×269, local.tee×86, i32.const×67, br_if×63, i32.load×58 |
| 105 | `(i32 i32 i32 i32) -> (i32)` | 22 | 9,036 | 4,683 | local.get×1299, i32.const×562, local.tee×322, i32.add×229, end×228 |
| 123 | `(i32) -> (i32)` | 11 | 5,901 | 2,985 | local.get×761, i32.const×499, local.tee×250, i32.store×195, i32.add×139 |
| 130 | `(i32) -> (i32)` | 6 | 1,590 | 902 | local.get×316, local.tee×103, br_if×98, i32.const×74, i32.add×57 |
| 131 | `(i32 i32) -> ()` | 8 | 1,484 | 807 | local.get×210, i32.const×103, local.tee×83, i32.load×51, end×46 |
| 138 | `(i32 i32) -> (i32)` | 18 | 3,726 | 1,852 | local.get×573, i32.load×154, i32.const×145, local.tee×135, end×105 |
| 162 | `(i32 i32) -> (i32)` | 9 | 2,331 | 1,213 | local.get×303, i32.const×189, local.tee×90, i32.load×81, i32.add×64 |
| 169 | `(i32 i32) -> (i32)` | 17 | 2,115 | 1,115 | local.get×280, i32.const×163, local.tee×80, i32.load×79, i32.add×60 |
| 178 | `(i32 i32) -> (i32)` | 14 | 2,289 | 1,097 | local.get×351, i32.const×118, i32.store×68, local.tee×67, i32.load×63 |
| 187 | `(i32 i32 i32 i32) -> ()` | 14 | 2,400 | 1,111 | local.get×320, i32.const×156, i32.load×68, call×62, i32.store×57 |
| 200 | `(i32 i32 i32 i32 i32 i32) -> (i32)` | 25 | 1,565 | 844 | local.get×239, local.tee×73, i32.const×72, i32.load×55, i32.add×37 |
| 203 | `(i32 i32 i32 i32 i32 i32) -> (i32)` | 29 | 2,968 | 1,593 | local.get×443, i32.const×197, i32.add×131, i32.load×118, local.tee×95 |
| 210 | `(i32 i32) -> (i32)` | 13 | 2,906 | 1,555 | local.get×431, i32.const×204, i32.load×146, i32.add×146, local.set×111 |
| 211 | `(i32 i32 i32) -> (i32)` | 11 | 2,530 | 1,159 | local.get×412, i32.const×99, i64.store×92, i32.store×85, i64.load×51 |
| 270 | `(i32 i32 i32 i32 i32 i32) -> (i32)` | 15 | 7,622 | 4,167 | local.get×1141, i32.const×552, local.set×342, i32.add×301, end×212 |
| 281 | `(i32 i32 i32) -> (i32)` | 32 | 6,846 | 3,617 | local.get×958, i32.const×550, local.tee×254, i32.add×222, i32.load×211 |
| 369 | `(i32) -> (i32)` | 32 | 7,469 | 3,852 | local.get×1036, i32.const×556, local.tee×282, i32.load×258, i32.add×228 |
| 371 | `(i32) -> (i32)` | 31 | 6,652 | 3,443 | local.get×920, i32.const×502, local.tee×243, i32.load×211, i32.add×206 |
| 375 | `(i32 i32 i32 i32) -> (i32)` | 23 | 1,786 | 922 | local.get×223, i32.const×106, local.set×69, i32.add×65, local.tee×47 |
| 385 | `(i32 i32) -> ()` | 20 | 2,482 | 1,265 | local.get×355, i32.const×120, local.tee×107, i32.load×94, end×81 |
| 412 | `(i32 i32 i32 i32 i32 i32) -> (i32)` | 25 | 1,593 | 859 | local.get×242, i32.const×74, local.tee×72, i32.load×57, i32.add×37 |
| 415 | `(i32 i32 i32 i32 i32 i32) -> (i32)` | 28 | 2,864 | 1,550 | local.get×432, i32.const×190, i32.add×127, i32.load×103, local.tee×98 |

## Embedded strings (data segments)

60 printable strings ≥6 chars; largest:

```
00010203040506070809101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384858687888990919293949596979899
N5draco48MeshPredictionSchemeGeometricNormalPredictorAreaIiNS_62PredictionSchemeNormalOctahedronCanonicalizedDecodingTransformIiEENS_24MeshPredictionSchemeDataINS_24MeshAttributeCornerTableEEEEE
N5draco48MeshPredictionSchemeGeometricNormalPredictorBaseIiNS_62PredictionSchemeNormalOctahedronCanonicalizedDecodingTransformIiEENS_24MeshPredictionSchemeDataINS_24MeshAttributeCornerTableEEEEE
N5draco42MeshPredictionSchemeGeometricNormalDecoderIiNS_62PredictionSchemeNormalOctahedronCanonicalizedDecodingTransformIiEENS_24MeshPredictionSchemeDataINS_24MeshAttributeCornerTableEEEEE
N5draco48MeshPredictionSchemeGeometricNormalPredictorAreaIiNS_62PredictionSchemeNormalOctahedronCanonicalizedDecodingTransformIiEENS_24MeshPredictionSchemeDataINS_11CornerTableEEEEE
N5draco48MeshPredictionSchemeGeometricNormalPredictorBaseIiNS_62PredictionSchemeNormalOctahedronCanonicalizedDecodingTransformIiEENS_24MeshPredictionSchemeDataINS_11CornerTableEEEEE
N5draco56MeshPredictionSchemeConstrainedMultiParallelogramDecoderIiNS_37PredictionSchemeWrapDecodingTransformIiiEENS_24MeshPredictionSchemeDataINS_24MeshAttributeCornerTableEEEEE
N5draco42MeshPredictionSchemeGeometricNormalDecoderIiNS_62PredictionSchemeNormalOctahedronCanonicalizedDecodingTransformIiEENS_24MeshPredictionSchemeDataINS_11CornerTableEEEEE
N5draco27MeshPredictionSchemeDecoderIiNS_62PredictionSchemeNormalOctahedronCanonicalizedDecodingTransformIiEENS_24MeshPredictionSchemeDataINS_24MeshAttributeCornerTableEEEEE
N5draco48MeshPredictionSchemeGeometricNormalPredictorAreaIiNS_37PredictionSchemeWrapDecodingTransformIiiEENS_24MeshPredictionSchemeDataINS_24MeshAttributeCornerTableEEEEE
N5draco48MeshPredictionSchemeGeometricNormalPredictorBaseIiNS_37PredictionSchemeWrapDecodingTransformIiiEENS_24MeshPredictionSchemeDataINS_24MeshAttributeCornerTableEEEEE
N5draco44MeshPredictionSchemeTexCoordsPortableDecoderIiNS_37PredictionSchemeWrapDecodingTransformIiiEENS_24MeshPredictionSchemeDataINS_24MeshAttributeCornerTableEEEEE
N5draco56MeshPredictionSchemeConstrainedMultiParallelogramDecoderIiNS_37PredictionSchemeWrapDecodingTransformIiiEENS_24MeshPredictionSchemeDataINS_11CornerTableEEEEE
N5draco42MeshPredictionSchemeGeometricNormalDecoderIiNS_37PredictionSchemeWrapDecodingTransformIiiEENS_24MeshPredictionSchemeDataINS_24MeshAttributeCornerTableEEEEE
N5draco40MeshPredictionSchemeParallelogramDecoderIiNS_37PredictionSchemeWrapDecodingTransformIiiEENS_24MeshPredictionSchemeDataINS_24MeshAttributeCornerTableEEEEE
N5draco27MeshPredictionSchemeDecoderIiNS_62PredictionSchemeNormalOctahedronCanonicalizedDecodingTransformIiEENS_24MeshPredictionSchemeDataINS_11CornerTableEEEEE
N5draco48MeshPredictionSchemeGeometricNormalPredictorAreaIiNS_37PredictionSchemeWrapDecodingTransformIiiEENS_24MeshPredictionSchemeDataINS_11CornerTableEEEEE
N5draco48MeshPredictionSchemeGeometricNormalPredictorBaseIiNS_37PredictionSchemeWrapDecodingTransformIiiEENS_24MeshPredictionSchemeDataINS_11CornerTableEEEEE
N5draco44MeshPredictionSchemeTexCoordsPortableDecoderIiNS_37PredictionSchemeWrapDecodingTransformIiiEENS_24MeshPredictionSchemeDataINS_11CornerTableEEEEE
N5draco42MeshPredictionSchemeGeometricNormalDecoderIiNS_37PredictionSchemeWrapDecodingTransformIiiEENS_24MeshPredictionSchemeDataINS_11CornerTableEEEEE
```

## Opcode histogram (aggregated)

| opcode | count |
|---|---:|
| `local.get` | 25,542 |
| `i32.const` | 10,592 |
| `local.tee` | 5,895 |
| `i32.load` | 5,398 |
| `end` | 4,621 |
| `i32.add` | 4,511 |
| `local.set` | 3,652 |
| `i32.store` | 3,034 |
| `br_if` | 2,917 |
| `if` | 2,015 |
| `call` | 1,765 |
| `block` | 1,552 |
| `i32.shl` | 1,544 |
| `i32.sub` | 1,448 |
| `br` | 1,079 |
| `i64.store` | 933 |
| `i64.const` | 785 |
| `i32.eqz` | 742 |
| `i32.and` | 712 |
| `i32.ne` | 686 |
| `select` | 656 |
| `i64.load` | 644 |
| `loop` | 633 |
| `i32.eq` | 572 |
| `i32.lt_s` | 509 |

## Analysis quality

- sections consumed: 10, structural errors: 0
- bodies fully decoded: 421/421 (degraded: 0)
