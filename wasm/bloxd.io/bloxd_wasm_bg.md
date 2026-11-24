# WASM module: `bloxd_wasm_bg`

> environment **bloxd.io** · build `igzsf.a0b73a5f` · analyzed 2026-11-25T08:36:21+09:00
> source: https://bloxd.io/static/media/bloxd_wasm_bg.64474d163218655c8ebd.wasm
> 337,698 bytes (329.8 KB) · sha256 `79e619b054ae905a…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- name-section module id `5b699d940dfe7e2e.2445` → `e3120e8379584c06.2445` (numeric version suffix unchanged — same module version, re-randomized prefix)
- export identifiers rotated by the obfuscator: 1/158 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 370 / 6 |
| Exports / imports | 158 / 6 |
| Code bytes (function bodies) | 321,239 (313.7 KB) |
| Total local variables | 3,264 |
| Instructions (scanable bodies) | 155,284 |
| Data segments / bytes | 25 / 13,153 |
| Element segments / entries | 1 / 57 |
| Memories / tables / globals | 1 / 1 / 3 |
| name-section module id | `e3120e8379584c06.2445` |
| Sections | 12 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 568 | 61 |
| 2 | import | 73 | 6 |
| 3 | function | 372 | 370 |
| 4 | table | 5 | 1 |
| 5 | memory | 3 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,246 | 158 |
| 9 | element | 119 | 1 |
| 12 | datacount | 1 | — |
| 10 | code | 321,855 | 370 |
| 11 | data | 13,364 | 25 |
| 0 | custom:name | 29 | — |

## Types

61 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32) -> (i32)` ×1, `() -> (i32 i32)` ×1, `(i32 i32 i32) -> ()` ×1, `() -> (i32 i32 i32)` ×1

## Imports

6 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `baO7.ClE0` | func | `(i32) -> ()` |
| 1 | `baO7.QUmg` | func | `(i32 i32) -> (i32)` |
| 2 | `baO7.xW2v` | func | `(i32) -> ()` |
| 3 | `baO7.YwCw` | func | `(i32 i32) -> ()` |
| 4 | `baO7.w27p` | func | `() -> (f64)` |
| 5 | `baO7.jgk9` | func | `(i32 i32) -> ()` |

## Exports

158 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `XhEL` | func | 215 | `(i32 i32) -> (i32)` |
| `YFkK` | func | 335 | `() -> (i32 i32)` |
| `q5uf` | func | 244 | `(i32) -> (i32)` |
| `DGHA` | func | 334 | `() -> (i32 i32)` |
| `tGHt` | func | 372 | `() -> (i32)` |
| `UfnI` | func | 274 | `() -> ()` |
| `tjQp` | func | 294 | `(i32 i32 i32 i32 i32 i32) -> (i32 i32)` |
| `FH5G` | func | 172 | `(i32 i32) -> ()` |
| `rLMm` | func | 318 | `(i32) -> (i32 i32 i32)` |
| `RaaD` | func | 207 | `(i32) -> (i32)` |
| `L4gj` | func | 260 | `(i32) -> (i32)` |
| `I7Sa` | func | 129 | `(i32 i32 i32) -> ()` |
| `eUw4` | func | 319 | `(i32 i32 i32) -> (i32 i32)` |
| `iWbT` | func | 369 | `() -> ()` |
| `bExh` | func | 171 | `(i32 i32) -> ()` |
| `PJDG` | func | 327 | `(i32) -> (i32 i32)` |
| `gPNC` | func | 240 | `(i32) -> (i32)` |
| `D1Qk` | func | 137 | `(i32 i32 i32) -> ()` |
| `phlL` | func | 222 | `(i32) -> ()` |
| `prPt` | func | 314 | `(i32 i32 i32) -> (i32 i32)` |
| `mtt4` | func | 279 | `(i32 i32 f64 i32 i32 i32) -> (i32 i32 i32)` |
| `rslU` | func | 81 | `() -> (i32)` |
| `k3TQ` | func | 324 | `(i32 i32) -> (i32 i32)` |
| `r8Zz` | func | 97 | `(i32 i32 i32) -> ()` |
| `M7Sw` | func | 368 | `(i32) -> ()` |
| `MMVb` | func | 211 | `(i32) -> (i32)` |
| `kpT4` | func | 275 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32 i32)` |
| `Fpcx` | func | 138 | `(i32 i32) -> (i32)` |
| `n4Jo` | func | 313 | `(i32 i32 i32) -> (i32 i32)` |
| `mlsF` | func | 194 | `(i32) -> (i32)` |
| `vkH4` | func | 281 | `(i32 i32 f64 i32 i32 i32) -> (i32 i32 i32)` |
| `gt1F` | func | 255 | `(i32) -> (i32)` |
| `Sbrw` | func | 329 | `(i32) -> (i32 f64)` |
| `mHIX` | func | 298 | `(i32 i32 i32 i32 i32) -> (i32 i32)` |
| `ENTa` | func | 305 | `(i32 i32) -> (i32 i32 i32)` |
| `WhYC` | func | 336 | `() -> (i32 i32)` |
| `m8vZ` | func | 274 | `() -> ()` |
| `Kfqe` | func | 330 | `(i32) -> (i32 i32)` |
| `U5Va` | func | 297 | `(i32 i32 i32) -> (i32 i32 i32)` |
| `pMKG` | func | 231 | `(i32) -> (i32)` |
| `jSqk` | func | 317 | `(i32) -> (i32 i32 i32)` |
| `sHJw` | func | 242 | `(i32) -> (i32)` |
| `NGZz` | func | 27 | `(i32 i32 i32 i32) -> (i32)` |
| `LBdo` | func | 283 | `(i32 i32 i32 i32) -> (i32)` |
| `bCMj` | func | 259 | `(i32) -> (i32)` |
| `CAuP` | func | 300 | `(i32 f64 i32) -> (i32 i32 i32)` |
| `FYA2` | func | 229 | `(i32) -> (i32)` |
| `eekZ` | func | 303 | `(i32 i32) -> (i32 i32 i32)` |
| `G5AL` | global | 1 | `` |
| `P040` | func | 102 | `(i32 i32 i32 i32) -> ()` |
| `WUsQ` | func | 267 | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64 f64 i32) -> (f64 i32 i32)` |
| `YGdI` | func | 373 | `() -> (i32)` |
| `Axma` | func | 284 | `(i32 i32 i32 i32 f64 f64 f64) -> (i32 i32)` |
| `mvXi` | func | 235 | `(i32) -> (i32)` |
| `G8AS` | func | 285 | `(i32 i32 i32 i32 i32) -> (i32 i32 i32)` |
| `kf55` | func | 304 | `(i32 i32) -> (i32 i32 i32)` |
| `ONRI` | func | 216 | `(i32) -> ()` |
| `S8RC` | func | 241 | `(i32) -> (i32)` |
| `AJoG` | func | 149 | `(i32 i32) -> ()` |
| `Bmty` | func | 256 | `(i32) -> (i32)` |
| `memory` | memory | 0 | `` |
| `oYqx` | func | 248 | `(i32) -> (i32)` |
| `itQy` | func | 264 | `() -> (i32)` |
| `s03M` | func | 79 | `() -> (i32)` |
| `Q46E` | func | 58 | `(i32 i32 i32 i32) -> ()` |
| `D8cT` | func | 206 | `(i32) -> (i32)` |
| `s3uE` | func | 332 | `() -> (i32 i32)` |
| `gYlc` | func | 209 | `(i32 i32) -> ()` |
| `KkCS` | func | 234 | `(i32) -> (i32)` |
| `U1QW` | global | 2 | `` |
| `e7l6` | func | 218 | `(i32 i32) -> (i32)` |
| `NrZb` | func | 250 | `(i32) -> (i32)` |
| `kzxB` | func | 107 | `(i32 i32 i32 i32) -> ()` |
| `ngoX` | func | 312 | `(i32 i32 i32) -> (i32 i32)` |
| `waCJ` | func | 310 | `(i32 f64) -> (i32 i32 i32)` |
| `AX0m` | func | 243 | `(i32) -> (i32)` |
| `ymW8` | func | 179 | `() -> (i32)` |
| `R34H` | func | 166 | `(i32 i32) -> ()` |
| `mlvT` | func | 374 | `() -> (i32)` |
| `Jsqi` | func | 175 | `(i32) -> ()` |
| `uyLs` | func | 321 | `(i32 i32 i32) -> (i32 i32)` |
| `pTae` | func | 170 | `(i32 i32) -> ()` |
| `gaW3` | func | 178 | `() -> (i32)` |
| `jBeN` | func | 271 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32 i32 i32)` |
| `pJ7A` | func | 323 | `(i32 i32) -> (i32 i32)` |
| `a4Ce` | func | 236 | `(i32) -> (i32)` |
| `l2E5` | func | 278 | `(i32 i32) -> (i32)` |
| `bysj` | func | 343 | `() -> (i32)` |
| `xdk7` | func | 252 | `(i32) -> (i32)` |
| `jhPv` | func | 316 | `(i32 i32 i32) -> (i32 i32)` |
| `flKk` | func | 234 | `(i32) -> (i32)` |
| `u6Vb` | func | 280 | `(i32 i32 i32 i32 i32 i32) -> (i32 i32 i32)` |
| `ZLfW` | func | 296 | `(i32 i32 i32) -> (i32 i32 i32)` |
| `Z0LA` | func | 158 | `() -> (i32)` |
| `qih3` | func | 74 | `(i32) -> ()` |
| `dTko` | func | 349 | `(i32 i32 i32) -> ()` |
| `i5iD` | func | 249 | `(i32) -> (i32)` |
| `rloY` | func | 162 | `(i32 i32) -> ()` |
| `Zkdx` | func | 328 | `(i32) -> (i32 i32)` |
| `j1Ix` | func | 302 | `(i32 i32 i32 i32) -> (i32 i32)` |
| `UgdC` | func | 233 | `(i32) -> (i32)` |
| `FLPI` | func | 33 | `(i32) -> (i32)` |
| `Pa5B` | func | 16 | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `Jx9x` | func | 277 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32 i32)` |
| `EpxD` | func | 197 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 f64 i32 i32 i32 i32) -> (i32 i32 i32)` |
| `uS6N` | func | 326 | `(i32) -> (i32 i32)` |
| `gWbY` | func | 306 | `(i32 i32) -> (i32 i32 i32)` |
| `EYlT` | func | 124 | `() -> (i32)` |
| `Ga55` | func | 239 | `(i32) -> (i32)` |
| `CaWr` | func | 251 | `(i32) -> (i32)` |
| `vfaB` | func | 254 | `(i32) -> (i32)` |
| `BcBT` | func | 293 | `(i32 i32) -> (i32 i32 i32 i32)` |
| `MF2I` | func | 276 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32 i32)` |
| `fOkw` | func | 160 | `() -> (i32)` |
| `zAtO` | func | 237 | `(i32) -> (f64)` |
| `xiky` | func | 232 | `(i32) -> (i32)` |
| `udwU` | func | 169 | `(i32 i32 i32 i32) -> (i32)` |
| `dzB9` | func | 11 | `(i32) -> (i32)` |
| `JLQc` | func | 193 | `(i32) -> (i32)` |
| `Qubx` | func | 273 | `(f64 f64 f64 f64 f64 f64 f64 i32) -> (i32 i32 i32)` |
| `oN2Q` | func | 295 | `(i32 f64 i32) -> (i32 i32 i32)` |
| `bsRj` | func | 337 | `() -> (i32 i32)` |
| `BSSk` | func | 325 | `(i32) -> (i32 i32)` |
| `x2Af` | func | 144 | `(i32 i32) -> ()` |
| `uvgD` | func | 253 | `(i32) -> (i32)` |
| `HtdN` | func | 282 | `(i32 i32 i32 i32) -> (i32 i32 i32 i32)` |
| `Dnz0` | func | 88 | `(i32 i32 i32 i32) -> (i32)` |
| `pvs8` | func | 301 | `(i32 i32 i32 i32) -> (i32 i32)` |
| `q5fN` | func | 101 | `(i32 i32 i32 i32) -> ()` |
| `IDlU` | func | 108 | `() -> (i32)` |
| `cvUE` | func | 230 | `(i32) -> (i32)` |
| `yoaD` | func | 245 | `(i32) -> (i32)` |
| `fkNM` | func | 220 | `(i32 i32) -> ()` |
| `nz47` | func | 247 | `(i32) -> (i32)` |
| `Fn1y` | func | 311 | `(i32 i32 i32) -> (i32 i32)` |
| `eych` | func | 189 | `(i32 i32 i32) -> ()` |
| `ICYr` | func | 228 | `(i32) -> (i32)` |
| `alIW` | func | 207 | `(i32) -> (i32)` |
| `VRk1` | func | 367 | `(i32) -> (i32)` |
| `p7wJ` | func | 309 | `(i32 i32) -> (i32 i32 i32)` |
| `RSxS` | func | 31 | `(i32 i32 i32) -> (i32)` |
| `S6v3` | func | 89 | `(i32 i32 i32 i32 i32) -> ()` |
| `jY71` | func | 308 | `(i32 i32) -> (i32 i32 i32)` |
| `ZdKq` | func | 322 | `(i32 i32) -> (i32 i32)` |
| `qSYI` | func | 320 | `(i32 i32 i32) -> (i32 i32)` |
| `jmSn` | func | 238 | `(i32) -> (i32)` |
| `PXNV` | func | 187 | `(i32 i32 i32) -> ()` |
| `LQWK` | func | 315 | `(i32) -> (i32 i32 i32)` |
| `wGvu` | func | 299 | `(i32 i32 i32) -> (i32 i32 i32)` |
| `svmN` | func | 195 | `(i32) -> (i32)` |
| `keKH` | func | 307 | `(i32 i32) -> (i32 i32 i32)` |
| `UmqC` | func | 258 | `(i32) -> (i32)` |
| `sqee` | func | 246 | `(i32) -> (i32)` |
| `Bh5f` | func | 150 | `(i32 i32) -> ()` |
| `yHux` | func | 333 | `() -> (i32 i32)` |
| `wvQ5` | func | 35 | `(i32 i32) -> (i32)` |
| `MqLd` | func | 331 | `(f64) -> (i32)` |
| `QegG` | func | 98 | `(i32 i32 i32 i32 i32) -> (i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- memory 0: min 17 pages · max ∞ · shared=False
- table 0: funcref · min 58 · max 58
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 1062664, `i32` = i32.const 1063040

## Functions

- 370 bodies · 321,239 code bytes · avg 868 B
- instruction scan: 370 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 38 |
| <= 64 bytes | 12 |
| <= 128 bytes | 81 |
| <= 256 bytes | 43 |
| <= 512 bytes | 75 |
| <= 1024 bytes | 57 |
| <= 2048 bytes | 32 |
| <= 4096 bytes | 20 |
| <= 8192 bytes | 6 |
| <= 16384 bytes | 3 |
| > 16384 bytes | 3 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` | 80 | 16,830 | 8,333 | local.get×2527, i32.const×1065, local.set×610, i32.add×464, i32.load×375 |
| 1 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 100 | 10,287 | 5,391 | local.get×1725, i32.const×519, local.tee×357, i32.add×340, local.set×301 |
| 2 | `(i32 i32 i32 i32 i32 i32) -> ()` | 27 | 7,217 | 3,149 | local.get×1025, i32.const×434, i32.store×158, end×148, i32.load×148 |
| 3 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 25 | 4,867 | 2,627 | local.get×818, i32.const×314, local.tee×167, i32.add×154, br_if×132 |
| 4 | `(i32 i32 i32 i32 i32 i32) -> (i32)` | 34 | 4,229 | 2,264 | local.get×700, i32.const×261, i32.add×236, local.set×234, br_if×100 |
| 5 | `(i32) -> (i32)` | 64 | 4,906 | 2,263 | local.get×784, local.tee×140, i32.const×126, local.set×105, br_if×79 |
| 6 | `(i32) -> (i32)` | 9 | 4,904 | 2,140 | local.get×498, i32.const×447, i32.store×201, local.tee×154, i32.load×103 |
| 7 | `(i32 i32 i32) -> ()` | 65 | 4,036 | 2,080 | local.get×643, i32.const×234, i32.add×173, local.tee×132, local.set×128 |
| 8 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 61 | 4,053 | 2,137 | local.get×672, i32.const×233, local.set×180, br_if×131, i32.add×123 |
| 9 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 61 | 4,328 | 2,034 | local.get×749, local.tee×119, local.set×93, i32.const×81, f64.load×77 |
| 10 | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64 f64) -> (f64)` | 64 | 4,014 | 1,882 | local.get×677, local.tee×120, i32.const×105, local.set×83, i32.add×80 |
| 11 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 60 | 3,981 | 1,857 | local.get×700, local.tee×109, local.set×81, i32.const×77, f64.load×72 |
| 12 | `(i32 i32 i32 i32) -> ()` | 29 | 3,273 | 1,826 | local.get×749, local.tee×214, select×149, i32.const×97, i32.lt_s×78 |
| 13 | `(i32 i32 i32) -> (i32)` | 30 | 2,985 | 1,579 | local.get×405, i32.const×226, local.set×135, i32.add×87, end×87 |
| 14 | `(i32 i32 i32 i32 i32) -> ()` | 30 | 2,782 | 1,478 | local.get×437, i32.const×198, local.set×104, i32.add×82, local.tee×65 |
| 15 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 55 | 2,238 | 1,212 | local.get×397, i32.const×128, local.set×120, end×57, i32.add×57 |
| 16 | `(i32 i32 i32) -> ()` | 39 | 2,718 | 1,354 | local.get×474, i32.const×163, end×109, if×99, call×93 |
| 18 | `(i32 i32 i32) -> ()` | 31 | 2,819 | 1,175 | local.get×298, i32.const×112, f64.const×93, local.tee×72, br_if×61 |
| 19 | `(i32 i32 i32 f64) -> (f64)` | 33 | 2,380 | 1,211 | local.get×321, i32.const×118, br_if×101, f64.load×69, local.tee×65 |
| 20 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` | 35 | 4,082 | 2,007 | local.get×503, i32.const×244, local.tee×137, i32.add×118, local.set×97 |
| 27 | `(i32) -> (i32)` | 51 | 2,296 | 1,060 | local.get×309, i32.const×95, local.set×71, local.tee×64, i32.add×38 |
| 79 | `(i32 i32 i32 i32 i32) -> ()` | 21 | 2,228 | 1,062 | local.get×265, i32.const×120, local.tee×67, i32.add×65, i64.const×56 |
| 191 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 f64 i32 i32 i32 i32) -> (i32 i32 i32)` | 62 | 10,809 | 4,752 | local.get×1493, i32.const×569, local.set×251, i32.store×211, end×201 |
| 269 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32 i32)` | 31 | 3,146 | 1,518 | local.get×374, i32.const×205, i32.add×89, local.tee×84, end×74 |
| 274 | `(i32 i32 i32 i32 i32 i32) -> (i32 i32 i32)` | 100 | 35,026 | 17,721 | local.get×5218, i32.const×2454, i32.add×1276, local.set×1213, local.tee×836 |
| 288 | `(i32 i32 i32 i32 i32 i32) -> (i32 i32)` | 35 | 4,042 | 2,002 | local.get×595, i32.const×281, local.set×147, i32.add×116, local.tee×96 |
| 290 | `(i32 i32 i32) -> (i32 i32 i32)` | 78 | 17,419 | 7,570 | local.get×2375, i32.const×532, local.set×433, local.tee×395, f64.load×271 |
| 293 | `(i32 i32 i32) -> (i32 i32 i32)` | 88 | 8,369 | 4,132 | local.get×1124, i32.const×475, local.set×251, local.tee×234, i32.add×198 |
| 295 | `(i32 i32 i32 i32) -> (i32 i32)` | 16 | 3,241 | 1,460 | local.get×430, i32.const×218, local.tee×87, i32.add×82, local.set×62 |
| 307 | `(i32 i32 i32) -> (i32 i32)` | 19 | 2,779 | 1,214 | local.get×345, i32.const×147, i32.load×92, i32.add×67, local.tee×61 |

## Embedded strings (data segments)

60 printable strings ≥6 chars; largest:

```
00010203040506070809101112131415161718192021222324252627282930313233343536373839404142434445464748495051525354555657585960616263646566676869707172737475767778798081828384858687888990919293949596979899
resumesteerdepenetrationRisechunkHashmeshLightchunkIngestblockEditsmovementTicknetReadnetSendcoreFramereplaySteplightComputebloxd-wasm debug trap
memory allocation failed because the computed capacity exceeded the collection's maximum because the memory allocator returned an error
light borders not of the chunk's sizeface layout direction or diagonal out of rangeruns it does not decodeno runs to decode
null pointer passed to rustrecursive use of an object detected which would lead to unsafe aliasing in rust
0x0123456789ABCDEFRefCell already mutably borrowedRefCell already borrowedHash table capacity overflow
attempt to divide by zerouser-provided comparison function does not correctly implement a total order
assertion failed: r.len() == att.len() && gb.len() == att.len() && queue.len().is_power_of_two()
/rustc/b940084d7eb6a299eb4bfeb8e34901bc051e7ac4/library/core/src/slice/sort/shared/smallsort.rs
/rustc/b940084d7eb6a299eb4bfeb8e34901bc051e7ac4/library/alloc/src/vec/spec_from_iter_nested.rs
/rustc/b940084d7eb6a299eb4bfeb8e34901bc051e7ac4/library/std/src/sys/sync/rwlock/no_threads.rs
a formatting trait implementation returned an error when the underlying stream did not
/rustc/b940084d7eb6a299eb4bfeb8e34901bc051e7ac4/library/alloc/src/raw_vec/mod.rs
/rustc/b940084d7eb6a299eb4bfeb8e34901bc051e7ac4/library/std/src/thread/local.rs
/rustc/b940084d7eb6a299eb4bfeb8e34901bc051e7ac4/library/std/src/panicking.rs
/rustc/b940084d7eb6a299eb4bfeb8e34901bc051e7ac4/library/alloc/src/vec/mod.rs
assertion failed: sky.len() == att.len() && queue.len().is_power_of_two() &&
assertion failed: blk.len() == att.len() && queue.len().is_power_of_two() &&
/rustc/b940084d7eb6a299eb4bfeb8e34901bc051e7ac4/library/alloc/src/string.rs
assertion failed: l.len() == att.len() && queue.len().is_power_of_two() &&
```

## Opcode histogram (aggregated)

| opcode | count |
|---|---:|
| `local.get` | 45,652 |
| `i32.const` | 18,519 |
| `local.tee` | 8,072 |
| `local.set` | 7,995 |
| `i32.add` | 7,967 |
| `end` | 6,856 |
| `i32.load` | 6,194 |
| `br_if` | 4,766 |
| `i32.store` | 4,233 |
| `block` | 3,077 |
| `if` | 2,721 |
| `call` | 2,555 |
| `i32.sub` | 2,178 |
| `i64.store` | 2,008 |
| `i64.const` | 1,893 |
| `i32.shl` | 1,869 |
| `br` | 1,856 |
| `i32.and` | 1,823 |
| `i32.eqz` | 1,784 |
| `select` | 1,226 |
| `i64.load` | 1,199 |
| `i32.load8_u` | 1,192 |
| `f64.load` | 1,057 |
| `i32.store8` | 1,038 |
| `i32.eq` | 1,000 |

## Custom sections

- `name` · 24 bytes

## Analysis quality

- sections consumed: 12, structural errors: 0
- bodies fully decoded: 370/370 (degraded: 0)
