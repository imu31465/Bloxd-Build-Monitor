# WASM module: `bloxd_wasm_bg`

> environment **staging.bloxd.io** · build `cwj32u.ae3e40c2` · analyzed 2026-11-27T00:59:42+09:00
> source: https://staging.bloxd.io/static/media/bloxd_wasm_bg.d827f2f3b3de35f70008.wasm
> 340,007 bytes (332.0 KB) · sha256 `1a9ca3a508835437…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- size 337,698 → 340,007 bytes (+2,309)
- defined functions 370 → 372
- code bytes 321,239 → 323,479
- data bytes 13,153 → 13,225
- name-section module id `abe1c1735e147bdc.2445` → `294bc607a79c4134.2438`
- export signatures: +1 × `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 f64 i32 i32 i32 i32) -> (i32 i32 i32)`; -1 × `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 f64 i32 i32 i32 i32) -> (i32 i32 i32)`
- export identifiers rotated by the obfuscator: 1/158 names kept (identifier names are randomly assigned per build; compare signatures instead)
- new embedded strings: `cannot modify the panic hook from a panicking thread(`
- removed embedded strings: `cannot modify the panic hook from a panicking thread`

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
| name-section module id | `294bc607a79c4134.2438` |
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
| 0 | `ogdq.QSzS` | func | `(i32) -> ()` |
| 1 | `ogdq.qxxj` | func | `(i32 i32) -> (i32)` |
| 2 | `ogdq.N1tc` | func | `(i32) -> ()` |
| 3 | `ogdq.Mu23` | func | `(i32 i32) -> ()` |
| 4 | `ogdq.mkE2` | func | `() -> (f64)` |
| 5 | `ogdq.LLIv` | func | `(i32 i32) -> ()` |

## Exports

158 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `nv8U` | func | 233 | `(i32) -> (i32)` |
| `zT9F` | func | 35 | `(i32 i32) -> (i32)` |
| `RVKy` | func | 260 | `(i32) -> (i32)` |
| `ycPC` | func | 213 | `(i32) -> (i32)` |
| `PamF` | func | 97 | `(i32 i32 i32) -> ()` |
| `iF3M` | func | 316 | `(i32 i32 i32) -> (i32 i32)` |
| `LthH` | func | 245 | `(i32) -> (i32)` |
| `FOVS` | func | 301 | `(i32 i32 i32) -> (i32 i32 i32)` |
| `i8VP` | func | 160 | `() -> (i32)` |
| `BD64` | func | 211 | `(i32 i32) -> ()` |
| `Jiwf` | func | 28 | `(i32 i32 i32 i32) -> (i32)` |
| `YGuD` | func | 303 | `(i32 i32 i32 i32) -> (i32 i32)` |
| `rdqU` | func | 286 | `(i32 i32 i32 i32 f64 f64 f64) -> (i32 i32)` |
| `i83i` | func | 102 | `(i32 i32 i32 i32) -> ()` |
| `NwXO` | func | 321 | `(i32 i32 i32) -> (i32 i32)` |
| `IIbI` | func | 287 | `(i32 i32 i32 i32 i32) -> (i32 i32 i32)` |
| `h0jM` | func | 209 | `(i32) -> (i32)` |
| `UKkA` | func | 196 | `(i32) -> (i32)` |
| `WgTL` | func | 172 | `(i32 i32) -> ()` |
| `KKkB` | func | 299 | `(i32 i32 i32) -> (i32 i32 i32)` |
| `ADdN` | func | 317 | `(i32) -> (i32 i32 i32)` |
| `unki` | func | 258 | `(i32) -> (i32)` |
| `loKF` | func | 297 | `(i32 f64 i32) -> (i32 i32 i32)` |
| `Vcru` | func | 276 | `() -> ()` |
| `eWqn` | func | 79 | `() -> (i32)` |
| `fLoK` | func | 198 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 f64 i32 i32 i32 i32) -> (i32 i32 i32)` |
| `yKZq` | global | 2 | `` |
| `Sb8S` | func | 174 | `(i32 i32) -> ()` |
| `PFqX` | func | 33 | `(i32) -> (i32)` |
| `K2ur` | func | 310 | `(i32 i32) -> (i32 i32 i32)` |
| `rguR` | func | 269 | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64 f64 i32) -> (f64 i32 i32)` |
| `sJ9h` | func | 220 | `(i32 i32) -> (i32)` |
| `QqF3` | func | 197 | `(i32) -> (i32)` |
| `fyWy` | func | 151 | `(i32 i32) -> ()` |
| `ggYM` | func | 238 | `(i32) -> (i32)` |
| `qjmh` | func | 74 | `(i32) -> ()` |
| `yu7d` | func | 369 | `(i32) -> (i32)` |
| `CO4Y` | func | 208 | `(i32) -> (i32)` |
| `ewiP` | func | 323 | `(i32 i32 i32) -> (i32 i32)` |
| `Dg2A` | func | 209 | `(i32) -> (i32)` |
| `fKqO` | func | 322 | `(i32 i32 i32) -> (i32 i32)` |
| `wGeX` | func | 312 | `(i32 f64) -> (i32 i32 i32)` |
| `RliP` | func | 311 | `(i32 i32) -> (i32 i32 i32)` |
| `E9QO` | func | 164 | `(i32 i32) -> ()` |
| `loqH` | func | 222 | `(i32 i32) -> ()` |
| `gIzZ` | func | 334 | `() -> (i32 i32)` |
| `RJhM` | func | 285 | `(i32 i32 i32 i32) -> (i32)` |
| `NZkm` | func | 191 | `(i32 i32 i32) -> ()` |
| `WhER` | func | 189 | `(i32 i32 i32) -> ()` |
| `LA4B` | func | 236 | `(i32) -> (i32)` |
| `GEk8` | func | 173 | `(i32 i32) -> ()` |
| `kLp1` | func | 130 | `(i32 i32 i32) -> ()` |
| `K3ip` | func | 103 | `(i32 i32 i32 i32) -> ()` |
| `FWBQ` | func | 250 | `(i32) -> (i32)` |
| `ktJc` | func | 279 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32 i32)` |
| `AvST` | func | 125 | `() -> (i32)` |
| `iGCq` | func | 171 | `(i32 i32 i32 i32) -> (i32)` |
| `imwG` | func | 177 | `(i32) -> ()` |
| `Xx4y` | func | 266 | `() -> (i32)` |
| `gkZu` | func | 231 | `(i32) -> (i32)` |
| `dDH1` | func | 282 | `(i32 i32 i32 i32 i32 i32) -> (i32 i32 i32)` |
| `Oy0J` | func | 248 | `(i32) -> (i32)` |
| `HE49` | func | 336 | `() -> (i32 i32)` |
| `w8WJ` | func | 232 | `(i32) -> (i32)` |
| `HaL3` | func | 236 | `(i32) -> (i32)` |
| `FY6B` | func | 195 | `(i32) -> (i32)` |
| `NhWh` | func | 247 | `(i32) -> (i32)` |
| `UDkm` | func | 283 | `(i32 i32 f64 i32 i32 i32) -> (i32 i32 i32)` |
| `VLUJ` | func | 162 | `() -> (i32)` |
| `sujb` | func | 242 | `(i32) -> (i32)` |
| `pEzR` | func | 246 | `(i32) -> (i32)` |
| `Og82` | func | 284 | `(i32 i32 i32 i32) -> (i32 i32 i32 i32)` |
| `Wtfm` | func | 152 | `(i32 i32) -> ()` |
| `f8Cl` | func | 304 | `(i32 i32 i32 i32) -> (i32 i32)` |
| `wGNq` | func | 261 | `(i32) -> (i32)` |
| `GdzV` | func | 326 | `(i32 i32) -> (i32 i32)` |
| `urjs` | func | 109 | `() -> (i32)` |
| `lijX` | func | 375 | `() -> (i32)` |
| `iUBX` | func | 224 | `(i32) -> ()` |
| `S9pW` | func | 295 | `(i32 i32) -> (i32 i32 i32 i32)` |
| `nZxg` | func | 300 | `(i32 i32 i32 i32 i32) -> (i32 i32)` |
| `RFQZ` | func | 370 | `(i32) -> ()` |
| `sPSa` | func | 217 | `(i32 i32) -> (i32)` |
| `oMME` | func | 374 | `() -> (i32)` |
| `wZU6` | func | 239 | `(i32) -> (f64)` |
| `t93E` | func | 243 | `(i32) -> (i32)` |
| `qr4i` | func | 31 | `(i32 i32 i32) -> (i32)` |
| `oQFw` | func | 318 | `(i32 i32 i32) -> (i32 i32)` |
| `pCU7` | func | 88 | `(i32 i32 i32 i32) -> (i32)` |
| `ehDk` | func | 324 | `(i32 i32) -> (i32 i32)` |
| `I1Ny` | func | 253 | `(i32) -> (i32)` |
| `wUwp` | func | 235 | `(i32) -> (i32)` |
| `qns1` | func | 58 | `(i32 i32 i32 i32) -> ()` |
| `IVe1` | func | 138 | `(i32 i32 i32) -> ()` |
| `lhh9` | func | 89 | `(i32 i32 i32 i32 i32) -> ()` |
| `qZik` | func | 255 | `(i32) -> (i32)` |
| `wiR3` | global | 1 | `` |
| `gSgE` | func | 145 | `(i32 i32) -> ()` |
| `Nl4W` | func | 302 | `(i32 f64 i32) -> (i32 i32 i32)` |
| `Q6VJ` | func | 328 | `(i32) -> (i32 i32)` |
| `qEWo` | func | 332 | `(i32) -> (i32 i32)` |
| `t6dB` | func | 81 | `() -> (i32)` |
| `G7FQ` | func | 345 | `() -> (i32)` |
| `Vevh` | func | 319 | `(i32) -> (i32 i32 i32)` |
| `AoHY` | func | 277 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32 i32)` |
| `GmTI` | func | 376 | `() -> (i32)` |
| `ZnVX` | func | 338 | `() -> (i32 i32)` |
| `fXjt` | func | 230 | `(i32) -> (i32)` |
| `PyZM` | func | 351 | `(i32 i32 i32) -> ()` |
| `mVMH` | func | 331 | `(i32) -> (i32 f64)` |
| `oqG8` | func | 249 | `(i32) -> (i32)` |
| `fYgC` | func | 273 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32 i32 i32)` |
| `vk4T` | func | 254 | `(i32) -> (i32)` |
| `Uxt1` | func | 252 | `(i32) -> (i32)` |
| `HwsI` | func | 257 | `(i32) -> (i32)` |
| `Eqfx` | func | 325 | `(i32 i32) -> (i32 i32)` |
| `yYta` | func | 305 | `(i32 i32) -> (i32 i32 i32)` |
| `B31E` | func | 308 | `(i32 i32) -> (i32 i32 i32)` |
| `KEEA` | func | 168 | `(i32 i32) -> ()` |
| `RXJs` | func | 17 | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `xw4Y` | func | 337 | `() -> (i32 i32)` |
| `mjue` | func | 339 | `() -> (i32 i32)` |
| `HNw1` | func | 139 | `(i32 i32) -> (i32)` |
| `DCQt` | func | 314 | `(i32 i32 i32) -> (i32 i32)` |
| `efe5` | func | 98 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `wxbw` | func | 11 | `(i32) -> (i32)` |
| `rsvn` | func | 108 | `(i32 i32 i32 i32) -> ()` |
| `KIjO` | func | 307 | `(i32 i32) -> (i32 i32 i32)` |
| `jwGi` | func | 234 | `(i32) -> (i32)` |
| `yBxu` | func | 218 | `(i32) -> ()` |
| `BHEO` | func | 309 | `(i32 i32) -> (i32 i32 i32)` |
| `QWgO` | func | 244 | `(i32) -> (i32)` |
| `yXxE` | func | 275 | `(f64 f64 f64 f64 f64 f64 f64 i32) -> (i32 i32 i32)` |
| `HUk8` | func | 181 | `() -> (i32)` |
| `X0He` | func | 315 | `(i32 i32 i32) -> (i32 i32)` |
| `lixC` | func | 320 | `(i32) -> (i32 i32 i32)` |
| `ofOY` | func | 298 | `(i32 i32 i32) -> (i32 i32 i32)` |
| `eRfP` | func | 313 | `(i32 i32 i32) -> (i32 i32)` |
| `memory` | memory | 0 | `` |
| `uvD5` | func | 329 | `(i32) -> (i32 i32)` |
| `p5PJ` | func | 240 | `(i32) -> (i32)` |
| `ugIp` | func | 333 | `(f64) -> (i32)` |
| `ZMDI` | func | 262 | `(i32) -> (i32)` |
| `QCfo` | func | 180 | `() -> (i32)` |
| `dcn2` | func | 251 | `(i32) -> (i32)` |
| `gJQX` | func | 306 | `(i32 i32) -> (i32 i32 i32)` |
| `ymxJ` | func | 237 | `(i32) -> (i32)` |
| `hACG` | func | 276 | `() -> ()` |
| `sSDT` | func | 330 | `(i32) -> (i32 i32)` |
| `yQwp` | func | 371 | `() -> ()` |
| `EDXW` | func | 278 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32 i32)` |
| `fL0J` | func | 296 | `(i32 i32 i32 i32 i32 i32) -> (i32 i32)` |
| `WljO` | func | 327 | `(i32) -> (i32 i32)` |
| `ElUx` | func | 335 | `() -> (i32 i32)` |
| `jkVF` | func | 241 | `(i32) -> (i32)` |
| `Srmp` | func | 280 | `(i32 i32) -> (i32)` |
| `a4OX` | func | 256 | `(i32) -> (i32)` |
| `l8a8` | func | 281 | `(i32 i32 f64 i32 i32 i32) -> (i32 i32 i32)` |

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
