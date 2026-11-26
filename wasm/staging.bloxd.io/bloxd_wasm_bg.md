# WASM module: `bloxd_wasm_bg`

> environment **staging.bloxd.io** · build `gw4e3a.937868ec` · analyzed 2026-11-27T02:11:43+09:00
> source: https://staging.bloxd.io/static/media/bloxd_wasm_bg.2d869609fdbc6beb838a.wasm
> 340,007 bytes (332.0 KB) · sha256 `bbd4532b4204ac6b…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- name-section module id `294bc607a79c4134.2438` → `809faf7563fb6531.2438` (numeric version suffix unchanged — same module version, re-randomized prefix)
- export identifiers rotated by the obfuscator: 1/158 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 372 / 6 |
| Exports / imports | 158 / 6 |
| Code bytes (function bodies) | 323,479 (315.9 KB) |
| Total local variables | 3,286 |
| Instructions (scanable bodies) | 156,488 |
| Data segments / bytes | 25 / 13,225 |
| Element segments / entries | 1 / 57 |
| Memories / tables / globals | 1 / 1 / 3 |
| name-section module id | `809faf7563fb6531.2438` |
| Sections | 12 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 558 | 60 |
| 2 | import | 73 | 6 |
| 3 | function | 374 | 372 |
| 4 | table | 5 | 1 |
| 5 | memory | 3 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,246 | 158 |
| 9 | element | 120 | 1 |
| 12 | datacount | 1 | — |
| 10 | code | 324,099 | 372 |
| 11 | data | 13,436 | 25 |
| 0 | custom:name | 29 | — |

## Types

60 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32) -> (i32)` ×1, `() -> (i32 i32)` ×1, `(i32 i32 i32) -> ()` ×1, `() -> (i32 i32 i32)` ×1

## Imports

6 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `TUf1.DVax` | func | `(i32) -> ()` |
| 1 | `TUf1.wR7S` | func | `(i32 i32) -> (i32)` |
| 2 | `TUf1.oAPd` | func | `(i32) -> ()` |
| 3 | `TUf1.CTsr` | func | `(i32 i32) -> ()` |
| 4 | `TUf1.TMOf` | func | `() -> (f64)` |
| 5 | `TUf1.vTGt` | func | `(i32 i32) -> ()` |

## Exports

158 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `lOVx` | func | 262 | `(i32) -> (i32)` |
| `uYmN` | func | 326 | `(i32 i32) -> (i32 i32)` |
| `n9Xn` | func | 102 | `(i32 i32 i32 i32) -> ()` |
| `rFRs` | func | 312 | `(i32 f64) -> (i32 i32 i32)` |
| `CLy3` | func | 327 | `(i32) -> (i32 i32)` |
| `XidX` | func | 196 | `(i32) -> (i32)` |
| `hibU` | func | 172 | `(i32 i32) -> ()` |
| `LbVU` | func | 81 | `() -> (i32)` |
| `TYHd` | func | 239 | `(i32) -> (f64)` |
| `AdrK` | func | 301 | `(i32 i32 i32) -> (i32 i32 i32)` |
| `EnRy` | func | 138 | `(i32 i32 i32) -> ()` |
| `TzT0` | func | 151 | `(i32 i32) -> ()` |
| `N9r4` | func | 79 | `() -> (i32)` |
| `sH1H` | func | 275 | `(f64 f64 f64 f64 f64 f64 f64 i32) -> (i32 i32 i32)` |
| `eHBH` | func | 309 | `(i32 i32) -> (i32 i32 i32)` |
| `w5zy` | func | 180 | `() -> (i32)` |
| `zhjq` | func | 191 | `(i32 i32 i32) -> ()` |
| `gOSt` | func | 338 | `() -> (i32 i32)` |
| `oH7w` | func | 321 | `(i32 i32 i32) -> (i32 i32)` |
| `kiD3` | func | 323 | `(i32 i32 i32) -> (i32 i32)` |
| `jvaV` | func | 282 | `(i32 i32 i32 i32 i32 i32) -> (i32 i32 i32)` |
| `bsrS` | func | 174 | `(i32 i32) -> ()` |
| `klZt` | func | 305 | `(i32 i32) -> (i32 i32 i32)` |
| `nx4G` | func | 351 | `(i32 i32 i32) -> ()` |
| `tLC8` | func | 209 | `(i32) -> (i32)` |
| `heZ1` | func | 320 | `(i32) -> (i32 i32 i32)` |
| `RaL9` | func | 276 | `() -> ()` |
| `gKMX` | func | 273 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32 i32 i32)` |
| `GwWJ` | func | 218 | `(i32) -> ()` |
| `bd9c` | func | 213 | `(i32) -> (i32)` |
| `AdoX` | func | 171 | `(i32 i32 i32 i32) -> (i32)` |
| `R2T5` | func | 283 | `(i32 i32 f64 i32 i32 i32) -> (i32 i32 i32)` |
| `PU5T` | func | 11 | `(i32) -> (i32)` |
| `XweW` | func | 243 | `(i32) -> (i32)` |
| `I756` | func | 230 | `(i32) -> (i32)` |
| `tCnu` | func | 98 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `VBR7` | func | 330 | `(i32) -> (i32 i32)` |
| `ZFg6` | func | 261 | `(i32) -> (i32)` |
| `qwec` | func | 125 | `() -> (i32)` |
| `fw20` | func | 285 | `(i32 i32 i32 i32) -> (i32)` |
| `vgkj` | func | 370 | `(i32) -> ()` |
| `lJR9` | func | 209 | `(i32) -> (i32)` |
| `UCPn` | func | 217 | `(i32 i32) -> (i32)` |
| `ovxF` | func | 257 | `(i32) -> (i32)` |
| `g24p` | func | 139 | `(i32 i32) -> (i32)` |
| `sw3F` | func | 236 | `(i32) -> (i32)` |
| `NxGB` | func | 33 | `(i32) -> (i32)` |
| `wo8R` | func | 28 | `(i32 i32 i32 i32) -> (i32)` |
| `E1i1` | func | 269 | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64 f64 i32) -> (f64 i32 i32)` |
| `YUgy` | func | 245 | `(i32) -> (i32)` |
| `YVtY` | func | 220 | `(i32 i32) -> (i32)` |
| `Ue50` | func | 314 | `(i32 i32 i32) -> (i32 i32)` |
| `txsY` | func | 300 | `(i32 i32 i32 i32 i32) -> (i32 i32)` |
| `Dd6o` | func | 89 | `(i32 i32 i32 i32 i32) -> ()` |
| `pw2k` | func | 237 | `(i32) -> (i32)` |
| `sI4T` | func | 255 | `(i32) -> (i32)` |
| `LNHR` | func | 162 | `() -> (i32)` |
| `vYRR` | func | 58 | `(i32 i32 i32 i32) -> ()` |
| `pIAe` | func | 317 | `(i32) -> (i32 i32 i32)` |
| `Ftn1` | func | 222 | `(i32 i32) -> ()` |
| `ONh6` | func | 298 | `(i32 i32 i32) -> (i32 i32 i32)` |
| `d7xf` | func | 31 | `(i32 i32 i32) -> (i32)` |
| `XCjZ` | func | 335 | `() -> (i32 i32)` |
| `sX7f` | func | 318 | `(i32 i32 i32) -> (i32 i32)` |
| `D6ir` | func | 256 | `(i32) -> (i32)` |
| `F9Td` | func | 276 | `() -> ()` |
| `GUHS` | func | 224 | `(i32) -> ()` |
| `rWLy` | func | 296 | `(i32 i32 i32 i32 i32 i32) -> (i32 i32)` |
| `yRYQ` | func | 339 | `() -> (i32 i32)` |
| `FteC` | func | 287 | `(i32 i32 i32 i32 i32) -> (i32 i32 i32)` |
| `memory` | memory | 0 | `` |
| `wo15` | func | 315 | `(i32 i32 i32) -> (i32 i32)` |
| `MX4c` | func | 246 | `(i32) -> (i32)` |
| `EJ7C` | func | 277 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32 i32)` |
| `VUg4` | func | 233 | `(i32) -> (i32)` |
| `TCZI` | func | 236 | `(i32) -> (i32)` |
| `JI2k` | func | 145 | `(i32 i32) -> ()` |
| `ijCN` | func | 297 | `(i32 f64 i32) -> (i32 i32 i32)` |
| `DH3q` | func | 232 | `(i32) -> (i32)` |
| `c2Pu` | func | 284 | `(i32 i32 i32 i32) -> (i32 i32 i32 i32)` |
| `eZX1` | func | 281 | `(i32 i32 f64 i32 i32 i32) -> (i32 i32 i32)` |
| `i4xG` | func | 251 | `(i32) -> (i32)` |
| `TEVN` | func | 244 | `(i32) -> (i32)` |
| `NgkQ` | func | 328 | `(i32) -> (i32 i32)` |
| `AVMk` | func | 371 | `() -> ()` |
| `BzgY` | func | 103 | `(i32 i32 i32 i32) -> ()` |
| `KlKB` | func | 247 | `(i32) -> (i32)` |
| `cbqz` | func | 331 | `(i32) -> (i32 f64)` |
| `PfZK` | func | 324 | `(i32 i32) -> (i32 i32)` |
| `vmST` | func | 332 | `(i32) -> (i32 i32)` |
| `oVJ7` | func | 313 | `(i32 i32 i32) -> (i32 i32)` |
| `Df62` | func | 336 | `() -> (i32 i32)` |
| `ANKh` | func | 375 | `() -> (i32)` |
| `EqiV` | func | 164 | `(i32 i32) -> ()` |
| `wcaX` | func | 303 | `(i32 i32 i32 i32) -> (i32 i32)` |
| `s3F1` | func | 240 | `(i32) -> (i32)` |
| `clIZ` | func | 17 | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `F2oI` | func | 234 | `(i32) -> (i32)` |
| `WwN1` | func | 333 | `(f64) -> (i32)` |
| `EUOf` | func | 198 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 f64 i32 i32 i32 i32) -> (i32 i32 i32)` |
| `HLFf` | func | 266 | `() -> (i32)` |
| `mXa5` | func | 376 | `() -> (i32)` |
| `RogI` | func | 211 | `(i32 i32) -> ()` |
| `mhhS` | func | 306 | `(i32 i32) -> (i32 i32 i32)` |
| `k1XM` | func | 168 | `(i32 i32) -> ()` |
| `DBOz` | func | 152 | `(i32 i32) -> ()` |
| `VhVB` | func | 258 | `(i32) -> (i32)` |
| `SEIU` | func | 329 | `(i32) -> (i32 i32)` |
| `hjyC` | func | 334 | `() -> (i32 i32)` |
| `Pyva` | func | 307 | `(i32 i32) -> (i32 i32 i32)` |
| `xmb2` | func | 241 | `(i32) -> (i32)` |
| `E1Ct` | func | 254 | `(i32) -> (i32)` |
| `Yth8` | func | 189 | `(i32 i32 i32) -> ()` |
| `TEDh` | func | 250 | `(i32) -> (i32)` |
| `H7r5` | func | 197 | `(i32) -> (i32)` |
| `qjy8` | func | 248 | `(i32) -> (i32)` |
| `Zifk` | func | 208 | `(i32) -> (i32)` |
| `aKaF` | func | 109 | `() -> (i32)` |
| `LOVY` | func | 260 | `(i32) -> (i32)` |
| `arTe` | func | 130 | `(i32 i32 i32) -> ()` |
| `QDNm` | func | 108 | `(i32 i32 i32 i32) -> ()` |
| `Fkoj` | func | 249 | `(i32) -> (i32)` |
| `iBl3` | func | 173 | `(i32 i32) -> ()` |
| `zwVm` | func | 299 | `(i32 i32 i32) -> (i32 i32 i32)` |
| `rkqt` | func | 280 | `(i32 i32) -> (i32)` |
| `KflE` | global | 1 | `` |
| `Qjt1` | func | 286 | `(i32 i32 i32 i32 f64 f64 f64) -> (i32 i32)` |
| `foch` | func | 311 | `(i32 i32) -> (i32 i32 i32)` |
| `YmNw` | func | 160 | `() -> (i32)` |
| `D3Hb` | func | 345 | `() -> (i32)` |
| `OWdJ` | func | 74 | `(i32) -> ()` |
| `kZ3K` | func | 253 | `(i32) -> (i32)` |
| `BauY` | func | 295 | `(i32 i32) -> (i32 i32 i32 i32)` |
| `B20F` | func | 319 | `(i32) -> (i32 i32 i32)` |
| `MKP6` | func | 181 | `() -> (i32)` |
| `AtfZ` | func | 97 | `(i32 i32 i32) -> ()` |
| `dlDz` | func | 325 | `(i32 i32) -> (i32 i32)` |
| `nTTS` | func | 316 | `(i32 i32 i32) -> (i32 i32)` |
| `vvI4` | func | 322 | `(i32 i32 i32) -> (i32 i32)` |
| `Jdnx` | func | 231 | `(i32) -> (i32)` |
| `kmx6` | func | 278 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32 i32)` |
| `aGPo` | func | 302 | `(i32 f64 i32) -> (i32 i32 i32)` |
| `dHKm` | func | 308 | `(i32 i32) -> (i32 i32 i32)` |
| `IhsG` | func | 195 | `(i32) -> (i32)` |
| `BmSO` | func | 252 | `(i32) -> (i32)` |
| `X6Fs` | global | 2 | `` |
| `uoXg` | func | 310 | `(i32 i32) -> (i32 i32 i32)` |
| `rbWz` | func | 177 | `(i32) -> ()` |
| `N5jl` | func | 88 | `(i32 i32 i32 i32) -> (i32)` |
| `YvBm` | func | 374 | `() -> (i32)` |
| `qrKM` | func | 337 | `() -> (i32 i32)` |
| `LS9g` | func | 369 | `(i32) -> (i32)` |
| `Tr1E` | func | 35 | `(i32 i32) -> (i32)` |
| `PR2w` | func | 235 | `(i32) -> (i32)` |
| `JCk4` | func | 242 | `(i32) -> (i32)` |
| `FAKM` | func | 238 | `(i32) -> (i32)` |
| `JL5t` | func | 279 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32 i32)` |
| `jM3o` | func | 304 | `(i32 i32 i32 i32) -> (i32 i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- memory 0: min 17 pages · max ∞ · shared=False
- table 0: funcref · min 58 · max 58
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 1062736, `i32` = i32.const 1063120

## Functions

- 372 bodies · 323,479 code bytes · avg 869 B
- instruction scan: 372 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 38 |
| <= 64 bytes | 12 |
| <= 128 bytes | 81 |
| <= 256 bytes | 43 |
| <= 512 bytes | 77 |
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
| 8 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` | 59 | 3,692 | 2,019 | local.get×673, i32.const×230, local.set×206, i32.add×97, end×92 |
| 9 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 61 | 4,053 | 2,137 | local.get×672, i32.const×233, local.set×180, br_if×131, i32.add×123 |
| 10 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 61 | 4,328 | 2,034 | local.get×749, local.tee×119, local.set×93, i32.const×81, f64.load×77 |
| 11 | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64 f64) -> (f64)` | 64 | 4,014 | 1,882 | local.get×677, local.tee×120, i32.const×105, local.set×83, i32.add×80 |
| 12 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 60 | 3,981 | 1,857 | local.get×700, local.tee×109, local.set×81, i32.const×77, f64.load×72 |
| 13 | `(i32 i32 i32 i32) -> ()` | 29 | 3,273 | 1,826 | local.get×749, local.tee×214, select×149, i32.const×97, i32.lt_s×78 |
| 14 | `(i32 i32 i32) -> (i32)` | 30 | 2,985 | 1,579 | local.get×405, i32.const×226, local.set×135, i32.add×87, end×87 |
| 15 | `(i32 i32 i32 i32 i32) -> ()` | 30 | 2,782 | 1,478 | local.get×437, i32.const×198, local.set×104, i32.add×82, local.tee×65 |
| 16 | `(i32 i32 i32) -> ()` | 39 | 2,718 | 1,354 | local.get×474, i32.const×163, end×109, if×99, call×93 |
| 18 | `(i32 i32 i32) -> ()` | 31 | 2,819 | 1,175 | local.get×298, i32.const×112, f64.const×93, local.tee×72, br_if×61 |
| 19 | `(i32 i32 i32 f64) -> (f64)` | 33 | 2,380 | 1,211 | local.get×321, i32.const×118, br_if×101, f64.load×69, local.tee×65 |
| 20 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` | 35 | 4,082 | 2,007 | local.get×503, i32.const×244, local.tee×137, i32.add×118, local.set×97 |
| 27 | `(i32) -> (i32)` | 51 | 2,296 | 1,060 | local.get×309, i32.const×95, local.set×71, local.tee×64, i32.add×38 |
| 79 | `(i32 i32 i32 i32 i32) -> ()` | 21 | 2,228 | 1,062 | local.get×265, i32.const×120, local.tee×67, i32.add×65, i64.const×56 |
| 192 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 f64 i32 i32 i32 i32) -> (i32 i32 i32)` | 63 | 10,948 | 4,820 | local.get×1519, i32.const×579, local.set×250, i32.store×216, end×205 |
| 271 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32 i32)` | 31 | 3,146 | 1,518 | local.get×374, i32.const×205, i32.add×89, local.tee×84, end×74 |
| 276 | `(i32 i32 i32 i32 i32 i32) -> (i32 i32 i32)` | 98 | 34,967 | 17,687 | local.get×5209, i32.const×2447, i32.add×1274, local.set×1209, local.tee×831 |
| 290 | `(i32 i32 i32 i32 i32 i32) -> (i32 i32)` | 35 | 4,042 | 2,002 | local.get×595, i32.const×281, local.set×147, i32.add×116, local.tee×96 |
| 292 | `(i32 i32 i32) -> (i32 i32 i32)` | 78 | 17,419 | 7,570 | local.get×2375, i32.const×532, local.set×433, local.tee×395, f64.load×271 |
| 295 | `(i32 i32 i32) -> (i32 i32 i32)` | 88 | 8,369 | 4,132 | local.get×1124, i32.const×475, local.set×251, local.tee×234, i32.add×198 |
| 297 | `(i32 i32 i32 i32) -> (i32 i32)` | 16 | 3,241 | 1,460 | local.get×430, i32.const×218, local.tee×87, i32.add×82, local.set×62 |
| 309 | `(i32 i32 i32) -> (i32 i32)` | 19 | 2,779 | 1,214 | local.get×345, i32.const×147, i32.load×92, i32.add×67, local.tee×61 |

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
| `local.get` | 46,060 |
| `i32.const` | 18,652 |
| `local.tee` | 8,114 |
| `local.set` | 8,102 |
| `i32.add` | 8,032 |
| `end` | 6,912 |
| `i32.load` | 6,216 |
| `br_if` | 4,812 |
| `i32.store` | 4,245 |
| `block` | 3,100 |
| `if` | 2,741 |
| `call` | 2,578 |
| `i32.sub` | 2,187 |
| `i64.store` | 2,012 |
| `i64.const` | 1,894 |
| `i32.shl` | 1,892 |
| `br` | 1,865 |
| `i32.and` | 1,848 |
| `i32.eqz` | 1,802 |
| `select` | 1,240 |
| `i64.load` | 1,202 |
| `i32.load8_u` | 1,200 |
| `f64.load` | 1,057 |
| `i32.store8` | 1,038 |
| `i32.eq` | 1,008 |

## Custom sections

- `name` · 24 bytes

## Analysis quality

- sections consumed: 12, structural errors: 0
- bodies fully decoded: 372/372 (degraded: 0)
