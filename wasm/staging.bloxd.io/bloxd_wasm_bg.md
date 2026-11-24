# WASM module: `bloxd_wasm_bg`

> environment **staging.bloxd.io** · build `mpd96o.85ad4551` · analyzed 2026-11-24T14:21:15+09:00
> source: https://staging.bloxd.io/static/media/bloxd_wasm_bg.a1990935b232763da059.wasm
> 337,698 bytes (329.8 KB) · sha256 `613a21bc0b0d6795…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- name-section module id `4c71880f2f66d659.2445` → `6da6288397ca1f8a.2445` (numeric version suffix unchanged — same module version, re-randomized prefix)
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
| name-section module id | `6da6288397ca1f8a.2445` |
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
| 0 | `sMqr.cyay` | func | `(i32) -> ()` |
| 1 | `sMqr.EPRD` | func | `(i32 i32) -> (i32)` |
| 2 | `sMqr.WrjM` | func | `(i32) -> ()` |
| 3 | `sMqr.M2vs` | func | `(i32 i32) -> ()` |
| 4 | `sMqr.kewC` | func | `() -> (f64)` |
| 5 | `sMqr.OxyO` | func | `(i32 i32) -> ()` |

## Exports

158 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `cxyk` | func | 239 | `(i32) -> (i32)` |
| `Xryl` | global | 1 | `` |
| `iPFi` | func | 322 | `(i32 i32) -> (i32 i32)` |
| `KkHV` | func | 193 | `(i32) -> (i32)` |
| `Hi9o` | func | 284 | `(i32 i32 i32 i32 f64 f64 f64) -> (i32 i32)` |
| `KDVb` | func | 195 | `(i32) -> (i32)` |
| `AHQF` | func | 129 | `(i32 i32 i32) -> ()` |
| `bfqq` | func | 236 | `(i32) -> (i32)` |
| `eFuH` | func | 233 | `(i32) -> (i32)` |
| `heVR` | func | 305 | `(i32 i32) -> (i32 i32 i32)` |
| `yJn8` | func | 343 | `() -> (i32)` |
| `oR93` | func | 367 | `(i32) -> (i32)` |
| `d0GP` | func | 228 | `(i32) -> (i32)` |
| `HbHE` | func | 319 | `(i32 i32 i32) -> (i32 i32)` |
| `kVgw` | func | 374 | `() -> (i32)` |
| `Y9I4` | func | 220 | `(i32 i32) -> ()` |
| `JEvF` | func | 160 | `() -> (i32)` |
| `UTqO` | func | 304 | `(i32 i32) -> (i32 i32 i32)` |
| `DeOT` | func | 300 | `(i32 f64 i32) -> (i32 i32 i32)` |
| `cX6o` | func | 331 | `(f64) -> (i32)` |
| `NsSo` | func | 298 | `(i32 i32 i32 i32 i32) -> (i32 i32)` |
| `TGok` | func | 11 | `(i32) -> (i32)` |
| `lU4g` | func | 267 | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64 f64 i32) -> (f64 i32 i32)` |
| `kH2W` | func | 329 | `(i32) -> (i32 f64)` |
| `DuXv` | func | 137 | `(i32 i32 i32) -> ()` |
| `Twpe` | func | 373 | `() -> (i32)` |
| `hgxn` | func | 255 | `(i32) -> (i32)` |
| `OeRF` | func | 211 | `(i32) -> (i32)` |
| `bBvl` | func | 295 | `(i32 f64 i32) -> (i32 i32 i32)` |
| `EJeT` | func | 307 | `(i32 i32) -> (i32 i32 i32)` |
| `s9Qs` | func | 218 | `(i32 i32) -> (i32)` |
| `AaYm` | func | 334 | `() -> (i32 i32)` |
| `y3o1` | func | 302 | `(i32 i32 i32 i32) -> (i32 i32)` |
| `qDgr` | func | 215 | `(i32 i32) -> (i32)` |
| `AoYu` | func | 274 | `() -> ()` |
| `gIrc` | func | 260 | `(i32) -> (i32)` |
| `yjTu` | func | 335 | `() -> (i32 i32)` |
| `GhUM` | func | 31 | `(i32 i32 i32) -> (i32)` |
| `fKNE` | func | 369 | `() -> ()` |
| `IkBW` | func | 321 | `(i32 i32 i32) -> (i32 i32)` |
| `ScZG` | func | 258 | `(i32) -> (i32)` |
| `KjAn` | func | 245 | `(i32) -> (i32)` |
| `r2uS` | func | 178 | `() -> (i32)` |
| `o0ei` | func | 102 | `(i32 i32 i32 i32) -> ()` |
| `lw5Y` | func | 253 | `(i32) -> (i32)` |
| `Cc0h` | func | 124 | `() -> (i32)` |
| `RgXK` | func | 172 | `(i32 i32) -> ()` |
| `cWQE` | func | 166 | `(i32 i32) -> ()` |
| `EB9u` | func | 273 | `(f64 f64 f64 f64 f64 f64 f64 i32) -> (i32 i32 i32)` |
| `MkJL` | func | 189 | `(i32 i32 i32) -> ()` |
| `Uze3` | func | 368 | `(i32) -> ()` |
| `PnsD` | func | 237 | `(i32) -> (f64)` |
| `xho1` | func | 144 | `(i32 i32) -> ()` |
| `f4VM` | func | 336 | `() -> (i32 i32)` |
| `Qbl4` | func | 231 | `(i32) -> (i32)` |
| `Upzl` | func | 316 | `(i32 i32 i32) -> (i32 i32)` |
| `fUt1` | func | 264 | `() -> (i32)` |
| `LscO` | func | 306 | `(i32 i32) -> (i32 i32 i32)` |
| `uqPb` | func | 248 | `(i32) -> (i32)` |
| `CVXG` | func | 324 | `(i32 i32) -> (i32 i32)` |
| `Il7j` | func | 317 | `(i32) -> (i32 i32 i32)` |
| `isX8` | func | 162 | `(i32 i32) -> ()` |
| `riHs` | func | 294 | `(i32 i32 i32 i32 i32 i32) -> (i32 i32)` |
| `nXkd` | func | 314 | `(i32 i32 i32) -> (i32 i32)` |
| `Is5A` | func | 170 | `(i32 i32) -> ()` |
| `w4t7` | func | 238 | `(i32) -> (i32)` |
| `fsr0` | func | 276 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32 i32)` |
| `WTOE` | func | 278 | `(i32 i32) -> (i32)` |
| `p4Q8` | func | 320 | `(i32 i32 i32) -> (i32 i32)` |
| `ntPZ` | func | 158 | `() -> (i32)` |
| `Prhy` | func | 328 | `(i32) -> (i32 i32)` |
| `ODVm` | func | 325 | `(i32) -> (i32 i32)` |
| `n87k` | func | 312 | `(i32 i32 i32) -> (i32 i32)` |
| `O7kS` | func | 271 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32 i32 i32)` |
| `Ptv5` | func | 250 | `(i32) -> (i32)` |
| `gVY9` | func | 216 | `(i32) -> ()` |
| `pZvX` | func | 108 | `() -> (i32)` |
| `C9E5` | func | 171 | `(i32 i32) -> ()` |
| `ZBMA` | func | 175 | `(i32) -> ()` |
| `nxVR` | func | 301 | `(i32 i32 i32 i32) -> (i32 i32)` |
| `aoc9` | func | 187 | `(i32 i32 i32) -> ()` |
| `oSy8` | func | 282 | `(i32 i32 i32 i32) -> (i32 i32 i32 i32)` |
| `z7yU` | func | 81 | `() -> (i32)` |
| `YftN` | func | 230 | `(i32) -> (i32)` |
| `NRVf` | func | 372 | `() -> (i32)` |
| `JC6P` | func | 79 | `() -> (i32)` |
| `AUC0` | func | 150 | `(i32 i32) -> ()` |
| `nB4K` | func | 309 | `(i32 i32) -> (i32 i32 i32)` |
| `Y0Be` | func | 249 | `(i32) -> (i32)` |
| `memory` | memory | 0 | `` |
| `Xdd3` | func | 326 | `(i32) -> (i32 i32)` |
| `sn7g` | func | 299 | `(i32 i32 i32) -> (i32 i32 i32)` |
| `pFlh` | func | 296 | `(i32 i32 i32) -> (i32 i32 i32)` |
| `xigm` | func | 280 | `(i32 i32 i32 i32 i32 i32) -> (i32 i32 i32)` |
| `z3qa` | func | 179 | `() -> (i32)` |
| `NmjU` | func | 297 | `(i32 i32 i32) -> (i32 i32 i32)` |
| `d8I7` | func | 241 | `(i32) -> (i32)` |
| `UMr0` | func | 207 | `(i32) -> (i32)` |
| `K7Vu` | func | 98 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `ugkd` | func | 251 | `(i32) -> (i32)` |
| `pvYx` | func | 234 | `(i32) -> (i32)` |
| `GFCE` | func | 303 | `(i32 i32) -> (i32 i32 i32)` |
| `XVHT` | func | 330 | `(i32) -> (i32 i32)` |
| `AP98` | func | 242 | `(i32) -> (i32)` |
| `WSDB` | func | 332 | `() -> (i32 i32)` |
| `Y1T1` | func | 149 | `(i32 i32) -> ()` |
| `BmOy` | func | 279 | `(i32 i32 f64 i32 i32 i32) -> (i32 i32 i32)` |
| `vSGD` | func | 313 | `(i32 i32 i32) -> (i32 i32)` |
| `l2Yj` | func | 274 | `() -> ()` |
| `qdki` | func | 169 | `(i32 i32 i32 i32) -> (i32)` |
| `cFMq` | func | 293 | `(i32 i32) -> (i32 i32 i32 i32)` |
| `Obxy` | func | 246 | `(i32) -> (i32)` |
| `EsIK` | func | 310 | `(i32 f64) -> (i32 i32 i32)` |
| `PVLJ` | func | 89 | `(i32 i32 i32 i32 i32) -> ()` |
| `YRkw` | func | 138 | `(i32 i32) -> (i32)` |
| `ouFN` | func | 16 | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `u5Py` | func | 275 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32 i32)` |
| `FoEt` | func | 243 | `(i32) -> (i32)` |
| `nGl5` | func | 327 | `(i32) -> (i32 i32)` |
| `GlH0` | func | 308 | `(i32 i32) -> (i32 i32 i32)` |
| `Dvwj` | func | 235 | `(i32) -> (i32)` |
| `QdBo` | func | 254 | `(i32) -> (i32)` |
| `Xlko` | func | 197 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 f64 i32 i32 i32 i32) -> (i32 i32 i32)` |
| `llZs` | global | 2 | `` |
| `ZbDi` | func | 315 | `(i32) -> (i32 i32 i32)` |
| `oRUn` | func | 252 | `(i32) -> (i32)` |
| `Xr7O` | func | 247 | `(i32) -> (i32)` |
| `Rc6W` | func | 318 | `(i32) -> (i32 i32 i32)` |
| `LsY0` | func | 206 | `(i32) -> (i32)` |
| `dAOh` | func | 240 | `(i32) -> (i32)` |
| `vVO3` | func | 101 | `(i32 i32 i32 i32) -> ()` |
| `qm17` | func | 74 | `(i32) -> ()` |
| `rze3` | func | 259 | `(i32) -> (i32)` |
| `pLPp` | func | 244 | `(i32) -> (i32)` |
| `hyFe` | func | 97 | `(i32 i32 i32) -> ()` |
| `aPVu` | func | 222 | `(i32) -> ()` |
| `UDlB` | func | 27 | `(i32 i32 i32 i32) -> (i32)` |
| `Aeni` | func | 88 | `(i32 i32 i32 i32) -> (i32)` |
| `bNoJ` | func | 349 | `(i32 i32 i32) -> ()` |
| `M1TV` | func | 283 | `(i32 i32 i32 i32) -> (i32)` |
| `NcBM` | func | 281 | `(i32 i32 f64 i32 i32 i32) -> (i32 i32 i32)` |
| `U3vo` | func | 337 | `() -> (i32 i32)` |
| `Lass` | func | 256 | `(i32) -> (i32)` |
| `FYN5` | func | 35 | `(i32 i32) -> (i32)` |
| `yYLd` | func | 323 | `(i32 i32) -> (i32 i32)` |
| `bF4P` | func | 277 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32 i32)` |
| `Oxpm` | func | 229 | `(i32) -> (i32)` |
| `dlpx` | func | 58 | `(i32 i32 i32 i32) -> ()` |
| `spLU` | func | 232 | `(i32) -> (i32)` |
| `tXYL` | func | 194 | `(i32) -> (i32)` |
| `IPuB` | func | 207 | `(i32) -> (i32)` |
| `djiW` | func | 311 | `(i32 i32 i32) -> (i32 i32)` |
| `ASsi` | func | 209 | `(i32 i32) -> ()` |
| `Jo5Q` | func | 33 | `(i32) -> (i32)` |
| `Dvuw` | func | 234 | `(i32) -> (i32)` |
| `zxLg` | func | 285 | `(i32 i32 i32 i32 i32) -> (i32 i32 i32)` |
| `lDLH` | func | 107 | `(i32 i32 i32 i32) -> ()` |
| `upS4` | func | 333 | `() -> (i32 i32)` |

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
