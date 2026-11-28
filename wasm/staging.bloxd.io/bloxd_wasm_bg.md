# WASM module: `bloxd_wasm_bg`

> environment **staging.bloxd.io** · build `welxxc.ffac0572` · analyzed 2026-11-28T21:24:47+09:00
> source: https://staging.bloxd.io/static/media/bloxd_wasm_bg.43db6ba6f123c28f67d5.wasm
> 340,007 bytes (332.0 KB) · sha256 `0021d096c0b49586…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- size 340,111 → 340,007 bytes (-104)
- data bytes 13,329 → 13,225
- name-section module id `3a138b0b6ed4c32d.2438` → `a7804f3975b59ab6.2438` (numeric version suffix unchanged — same module version, re-randomized prefix)
- export identifiers rotated by the obfuscator: 1/158 names kept (identifier names are randomly assigned per build; compare signatures instead)
- new embedded strings: `/rustc/b940084d7eb6a299eb4bfeb8e34901bc051e7ac4/library/allo`; `/rustc/b940084d7eb6a299eb4bfeb8e34901bc051e7ac4/library/allo`; `/rustc/b940084d7eb6a299eb4bfeb8e34901bc051e7ac4/library/allo`; `/rustc/b940084d7eb6a299eb4bfeb8e34901bc051e7ac4/library/std/`; `cannot modify the panic hook from a panicking thread(`
- removed embedded strings: `cannot modify the panic hook from a panicking thread\`; `h/.rustup/toolchains/1.99.0-x86_64-unknown-linux-gnu/lib/rus`; `h/.rustup/toolchains/1.99.0-x86_64-unknown-linux-gnu/lib/rus`; `h/.rustup/toolchains/1.99.0-x86_64-unknown-linux-gnu/lib/rus`; `h/.rustup/toolchains/1.99.0-x86_64-unknown-linux-gnu/lib/rus`

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
| name-section module id | `a7804f3975b59ab6.2438` |
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
| 0 | `NM3c.APR7` | func | `(i32) -> ()` |
| 1 | `NM3c.dT6O` | func | `(i32 i32) -> (i32)` |
| 2 | `NM3c.weTu` | func | `(i32) -> ()` |
| 3 | `NM3c.vvU3` | func | `(i32 i32) -> ()` |
| 4 | `NM3c.cRSY` | func | `() -> (f64)` |
| 5 | `NM3c.yrZU` | func | `(i32 i32) -> ()` |

## Exports

158 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `J6bU` | func | 234 | `(i32) -> (i32)` |
| `GlMf` | func | 257 | `(i32) -> (i32)` |
| `zho8` | func | 196 | `(i32) -> (i32)` |
| `dlSN` | func | 145 | `(i32 i32) -> ()` |
| `UA85` | func | 351 | `(i32 i32 i32) -> ()` |
| `e8tm` | func | 316 | `(i32 i32 i32) -> (i32 i32)` |
| `H1AP` | func | 327 | `(i32) -> (i32 i32)` |
| `XVfM` | func | 125 | `() -> (i32)` |
| `M2EO` | func | 97 | `(i32 i32 i32) -> ()` |
| `x3y5` | func | 335 | `() -> (i32 i32)` |
| `UAXT` | func | 307 | `(i32 i32) -> (i32 i32 i32)` |
| `ubWQ` | func | 172 | `(i32 i32) -> ()` |
| `flYK` | func | 337 | `() -> (i32 i32)` |
| `ILd4` | func | 241 | `(i32) -> (i32)` |
| `o63Y` | func | 376 | `() -> (i32)` |
| `Cox7` | func | 304 | `(i32 i32 i32 i32) -> (i32 i32)` |
| `FySV` | func | 330 | `(i32) -> (i32 i32)` |
| `zFRf` | func | 251 | `(i32) -> (i32)` |
| `hk5z` | func | 320 | `(i32) -> (i32 i32 i32)` |
| `nWyf` | func | 309 | `(i32 i32) -> (i32 i32 i32)` |
| `jxXs` | func | 311 | `(i32 i32) -> (i32 i32 i32)` |
| `jxX0` | func | 208 | `(i32) -> (i32)` |
| `FYbj` | func | 325 | `(i32 i32) -> (i32 i32)` |
| `zaiI` | func | 297 | `(i32 f64 i32) -> (i32 i32 i32)` |
| `uavO` | func | 246 | `(i32) -> (i32)` |
| `YI0n` | func | 275 | `(f64 f64 f64 f64 f64 f64 f64 i32) -> (i32 i32 i32)` |
| `QbSq` | func | 332 | `(i32) -> (i32 i32)` |
| `CqQk` | func | 195 | `(i32) -> (i32)` |
| `yH0s` | func | 213 | `(i32) -> (i32)` |
| `KqPp` | func | 281 | `(i32 i32 f64 i32 i32 i32) -> (i32 i32 i32)` |
| `a1JC` | func | 255 | `(i32) -> (i32)` |
| `afUb` | func | 374 | `() -> (i32)` |
| `LdM0` | func | 299 | `(i32 i32 i32) -> (i32 i32 i32)` |
| `dDhQ` | func | 189 | `(i32 i32 i32) -> ()` |
| `lszy` | func | 224 | `(i32) -> ()` |
| `IODt` | func | 326 | `(i32 i32) -> (i32 i32)` |
| `U3Jd` | func | 334 | `() -> (i32 i32)` |
| `n0C5` | func | 28 | `(i32 i32 i32 i32) -> (i32)` |
| `aMtz` | func | 164 | `(i32 i32) -> ()` |
| `wpx8` | func | 280 | `(i32 i32) -> (i32)` |
| `ac7k` | func | 329 | `(i32) -> (i32 i32)` |
| `VIvH` | func | 310 | `(i32 i32) -> (i32 i32 i32)` |
| `ci95` | func | 174 | `(i32 i32) -> ()` |
| `t33H` | func | 239 | `(i32) -> (f64)` |
| `RRAu` | func | 230 | `(i32) -> (i32)` |
| `gonl` | func | 302 | `(i32 f64 i32) -> (i32 i32 i32)` |
| `HOQB` | func | 262 | `(i32) -> (i32)` |
| `X6rM` | func | 160 | `() -> (i32)` |
| `EtvA` | global | 1 | `` |
| `U5uv` | func | 109 | `() -> (i32)` |
| `qTUU` | func | 197 | `(i32) -> (i32)` |
| `Ktba` | func | 339 | `() -> (i32 i32)` |
| `q3Ih` | func | 209 | `(i32) -> (i32)` |
| `SnVY` | func | 317 | `(i32) -> (i32 i32 i32)` |
| `oPkU` | func | 336 | `() -> (i32 i32)` |
| `ZAzF` | func | 305 | `(i32 i32) -> (i32 i32 i32)` |
| `YlqB` | func | 313 | `(i32 i32 i32) -> (i32 i32)` |
| `wgBl` | func | 181 | `() -> (i32)` |
| `VRTS` | func | 312 | `(i32 f64) -> (i32 i32 i32)` |
| `RvBu` | func | 98 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `x1zV` | func | 238 | `(i32) -> (i32)` |
| `H3hj` | func | 198 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 f64 i32 i32 i32 i32) -> (i32 i32 i32)` |
| `aUcE` | func | 11 | `(i32) -> (i32)` |
| `JrMs` | func | 308 | `(i32 i32) -> (i32 i32 i32)` |
| `vUm9` | func | 240 | `(i32) -> (i32)` |
| `fVGl` | func | 102 | `(i32 i32 i32 i32) -> ()` |
| `o4HK` | func | 269 | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64 f64 i32) -> (f64 i32 i32)` |
| `hjcn` | func | 222 | `(i32 i32) -> ()` |
| `yUMQ` | func | 331 | `(i32) -> (i32 f64)` |
| `NuU1` | func | 369 | `(i32) -> (i32)` |
| `VPIY` | func | 236 | `(i32) -> (i32)` |
| `X6A3` | func | 278 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32 i32)` |
| `VGJf` | func | 333 | `(f64) -> (i32)` |
| `sf1F` | func | 276 | `() -> ()` |
| `bmhm` | func | 300 | `(i32 i32 i32 i32 i32) -> (i32 i32)` |
| `p5mQ` | func | 318 | `(i32 i32 i32) -> (i32 i32)` |
| `t7VF` | func | 88 | `(i32 i32 i32 i32) -> (i32)` |
| `JJKe` | func | 260 | `(i32) -> (i32)` |
| `SQuE` | func | 233 | `(i32) -> (i32)` |
| `J6w1` | func | 323 | `(i32 i32 i32) -> (i32 i32)` |
| `yMKH` | func | 338 | `() -> (i32 i32)` |
| `qyP7` | func | 345 | `() -> (i32)` |
| `AMK5` | func | 286 | `(i32 i32 i32 i32 f64 f64 f64) -> (i32 i32)` |
| `hPBP` | func | 370 | `(i32) -> ()` |
| `dKDU` | func | 151 | `(i32 i32) -> ()` |
| `YWf6` | func | 31 | `(i32 i32 i32) -> (i32)` |
| `n1ow` | func | 177 | `(i32) -> ()` |
| `Ayg0` | func | 250 | `(i32) -> (i32)` |
| `hvKV` | func | 375 | `() -> (i32)` |
| `glV7` | func | 283 | `(i32 i32 f64 i32 i32 i32) -> (i32 i32 i32)` |
| `rCpV` | func | 79 | `() -> (i32)` |
| `Eh0K` | func | 89 | `(i32 i32 i32 i32 i32) -> ()` |
| `ZX8J` | func | 273 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32 i32 i32)` |
| `nUe3` | func | 173 | `(i32 i32) -> ()` |
| `xLaP` | func | 108 | `(i32 i32 i32 i32) -> ()` |
| `JUYz` | func | 209 | `(i32) -> (i32)` |
| `Rgp9` | func | 315 | `(i32 i32 i32) -> (i32 i32)` |
| `dSyK` | func | 296 | `(i32 i32 i32 i32 i32 i32) -> (i32 i32)` |
| `SuVQ` | func | 371 | `() -> ()` |
| `IWI0` | func | 236 | `(i32) -> (i32)` |
| `QJFa` | func | 217 | `(i32 i32) -> (i32)` |
| `FOG6` | func | 232 | `(i32) -> (i32)` |
| `FwuX` | func | 218 | `(i32) -> ()` |
| `DXl0` | func | 284 | `(i32 i32 i32 i32) -> (i32 i32 i32 i32)` |
| `Lv36` | func | 138 | `(i32 i32 i32) -> ()` |
| `AeKU` | func | 295 | `(i32 i32) -> (i32 i32 i32 i32)` |
| `tpaC` | func | 303 | `(i32 i32 i32 i32) -> (i32 i32)` |
| `CJpj` | func | 276 | `() -> ()` |
| `q3RP` | func | 17 | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `HwfE` | func | 298 | `(i32 i32 i32) -> (i32 i32 i32)` |
| `Bmwy` | func | 130 | `(i32 i32 i32) -> ()` |
| `sv8k` | func | 180 | `() -> (i32)` |
| `C1Bd` | func | 220 | `(i32 i32) -> (i32)` |
| `Ex5O` | func | 254 | `(i32) -> (i32)` |
| `NVVA` | func | 245 | `(i32) -> (i32)` |
| `NpNn` | func | 261 | `(i32) -> (i32)` |
| `memory` | memory | 0 | `` |
| `Mgcx` | func | 252 | `(i32) -> (i32)` |
| `vP8S` | func | 248 | `(i32) -> (i32)` |
| `wX0B` | func | 35 | `(i32 i32) -> (i32)` |
| `W3ts` | func | 287 | `(i32 i32 i32 i32 i32) -> (i32 i32 i32)` |
| `n4g3` | func | 321 | `(i32 i32 i32) -> (i32 i32)` |
| `tS3K` | func | 243 | `(i32) -> (i32)` |
| `RYyc` | func | 324 | `(i32 i32) -> (i32 i32)` |
| `mhNy` | func | 277 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32 i32)` |
| `MGKt` | func | 258 | `(i32) -> (i32)` |
| `mu7a` | func | 244 | `(i32) -> (i32)` |
| `oiJP` | func | 171 | `(i32 i32 i32 i32) -> (i32)` |
| `kts5` | func | 285 | `(i32 i32 i32 i32) -> (i32)` |
| `eDGC` | func | 249 | `(i32) -> (i32)` |
| `FBce` | func | 235 | `(i32) -> (i32)` |
| `DjJ4` | func | 33 | `(i32) -> (i32)` |
| `Tyqw` | func | 81 | `() -> (i32)` |
| `hN1Q` | func | 152 | `(i32 i32) -> ()` |
| `ZFTC` | func | 266 | `() -> (i32)` |
| `Ql3N` | func | 74 | `(i32) -> ()` |
| `pUgv` | func | 103 | `(i32 i32 i32 i32) -> ()` |
| `m4Vl` | func | 191 | `(i32 i32 i32) -> ()` |
| `Ol3p` | func | 139 | `(i32 i32) -> (i32)` |
| `kcCC` | func | 322 | `(i32 i32 i32) -> (i32 i32)` |
| `Kvkp` | func | 247 | `(i32) -> (i32)` |
| `MnEN` | func | 237 | `(i32) -> (i32)` |
| `aabi` | func | 242 | `(i32) -> (i32)` |
| `tqTH` | func | 256 | `(i32) -> (i32)` |
| `PqGB` | global | 2 | `` |
| `CZrZ` | func | 253 | `(i32) -> (i32)` |
| `eUfd` | func | 282 | `(i32 i32 i32 i32 i32 i32) -> (i32 i32 i32)` |
| `PpCc` | func | 279 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32 i32)` |
| `jvDK` | func | 328 | `(i32) -> (i32 i32)` |
| `wX67` | func | 168 | `(i32 i32) -> ()` |
| `EfFS` | func | 58 | `(i32 i32 i32 i32) -> ()` |
| `yRl4` | func | 162 | `() -> (i32)` |
| `r40h` | func | 319 | `(i32) -> (i32 i32 i32)` |
| `ykIv` | func | 301 | `(i32 i32 i32) -> (i32 i32 i32)` |
| `cWxx` | func | 231 | `(i32) -> (i32)` |
| `zz9y` | func | 314 | `(i32 i32 i32) -> (i32 i32)` |
| `pC6B` | func | 211 | `(i32 i32) -> ()` |
| `EteI` | func | 306 | `(i32 i32) -> (i32 i32 i32)` |

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
