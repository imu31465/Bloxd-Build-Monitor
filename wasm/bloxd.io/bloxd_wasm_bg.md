# WASM module: `bloxd_wasm_bg`

> environment **bloxd.io** · build `bqoxjr.2558012f` · analyzed 2026-11-21T12:37:12+09:00
> source: https://bloxd.io/static/media/bloxd_wasm_bg.80cf7a9d2c5f9fd62bf3.wasm
> 335,733 bytes (327.9 KB) · sha256 `1dd71b260cf77c23…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 369 / 6 |
| Exports / imports | 158 / 6 |
| Code bytes (function bodies) | 318,720 (311.2 KB) |
| Total local variables | 3,248 |
| Instructions (scanable bodies) | 153,926 |
| Data segments / bytes | 25 / 13,709 |
| Element segments / entries | 1 / 57 |
| Memories / tables / globals | 1 / 1 / 3 |
| name-section module id | `d82fc2f36a68119e.2444` |
| Sections | 12 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 568 | 61 |
| 2 | import | 73 | 6 |
| 3 | function | 371 | 369 |
| 4 | table | 5 | 1 |
| 5 | memory | 3 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,246 | 158 |
| 9 | element | 119 | 1 |
| 12 | datacount | 1 | — |
| 10 | code | 319,335 | 369 |
| 11 | data | 13,920 | 25 |
| 0 | custom:name | 29 | — |

## Types

61 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32) -> (i32)` ×1, `() -> (i32 i32)` ×1, `(i32 i32 i32) -> ()` ×1, `() -> (i32 i32 i32)` ×1

## Imports

6 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `yAdS.ZdN9` | func | `(i32) -> ()` |
| 1 | `yAdS.Tz4p` | func | `(i32 i32) -> (i32)` |
| 2 | `yAdS.Zc2r` | func | `(i32) -> ()` |
| 3 | `yAdS.nt5i` | func | `(i32 i32) -> ()` |
| 4 | `yAdS.RAJ3` | func | `() -> (f64)` |
| 5 | `yAdS.OWEB` | func | `(i32 i32) -> ()` |

## Exports

158 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `IAK1` | func | 255 | `(i32) -> (i32)` |
| `WNX5` | func | 259 | `(i32) -> (i32)` |
| `cR7A` | global | 2 | `` |
| `Dlat` | func | 315 | `(i32 i32 i32) -> (i32 i32)` |
| `ck2d` | func | 108 | `() -> (i32)` |
| `SwfB` | func | 238 | `(i32) -> (i32)` |
| `Y9PT` | func | 245 | `(i32) -> (i32)` |
| `memory` | memory | 0 | `` |
| `O9eE` | func | 275 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32 i32)` |
| `UjQi` | func | 172 | `(i32 i32) -> ()` |
| `kdUB` | func | 317 | `(i32) -> (i32 i32 i32)` |
| `gkip` | func | 254 | `(i32) -> (i32)` |
| `kfwW` | func | 320 | `(i32 i32 i32) -> (i32 i32)` |
| `aIfd` | func | 124 | `() -> (i32)` |
| `ZTsO` | func | 33 | `(i32) -> (i32)` |
| `Y5Ap` | global | 1 | `` |
| `QDi7` | func | 277 | `(i32 i32) -> (i32)` |
| `VPwo` | func | 232 | `(i32) -> (i32)` |
| `ory2` | func | 263 | `() -> (i32)` |
| `wMX5` | func | 311 | `(i32 i32 i32) -> (i32 i32)` |
| `c3rs` | func | 166 | `(i32 i32) -> ()` |
| `XgRn` | func | 227 | `(i32) -> (i32)` |
| `d9B6` | func | 239 | `(i32) -> (i32)` |
| `E0em` | func | 247 | `(i32) -> (i32)` |
| `tM5x` | func | 169 | `(i32 i32 i32 i32) -> (i32)` |
| `faz4` | func | 282 | `(i32 i32 i32 i32) -> (i32)` |
| `D7O4` | func | 303 | `(i32 i32) -> (i32 i32 i32)` |
| `nRhE` | func | 150 | `(i32 i32) -> ()` |
| `xo5R` | func | 318 | `(i32 i32 i32) -> (i32 i32)` |
| `C5Rc` | func | 306 | `(i32 i32) -> (i32 i32 i32)` |
| `gYT2` | func | 330 | `(f64) -> (i32)` |
| `pDor` | func | 228 | `(i32) -> (i32)` |
| `kmBv` | func | 242 | `(i32) -> (i32)` |
| `J2PA` | func | 284 | `(i32 i32 i32 i32 i32) -> (i32 i32 i32)` |
| `uMiS` | func | 233 | `(i32) -> (i32)` |
| `samZ` | func | 170 | `(i32 i32) -> ()` |
| `RcHc` | func | 336 | `() -> (i32 i32)` |
| `nG0b` | func | 293 | `(i32 i32 i32 i32 i32 i32) -> (i32 i32)` |
| `OVdz` | func | 292 | `(i32 i32) -> (i32 i32 i32 i32)` |
| `OEtS` | func | 246 | `(i32) -> (i32)` |
| `WZ8d` | func | 28 | `(i32 i32 i32 i32) -> (i32)` |
| `G4rd` | func | 331 | `() -> (i32 i32)` |
| `vzEs` | func | 329 | `(i32) -> (i32 i32)` |
| `CpFc` | func | 252 | `(i32) -> (i32)` |
| `WmHV` | func | 371 | `() -> (i32)` |
| `H7kO` | func | 305 | `(i32 i32) -> (i32 i32 i32)` |
| `fvaj` | func | 313 | `(i32 i32 i32) -> (i32 i32)` |
| `oO66` | func | 193 | `(i32) -> (i32)` |
| `BxnL` | func | 158 | `() -> (i32)` |
| `by2H` | func | 234 | `(i32) -> (i32)` |
| `qEm7` | func | 179 | `() -> (i32)` |
| `CDIt` | func | 251 | `(i32) -> (i32)` |
| `s7px` | func | 98 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `ooSo` | func | 368 | `() -> ()` |
| `IEvF` | func | 178 | `() -> (i32)` |
| `canJ` | func | 294 | `(i32 f64 i32) -> (i32 i32 i32)` |
| `yQdd` | func | 348 | `(i32 i32 i32) -> ()` |
| `tvK3` | func | 335 | `() -> (i32 i32)` |
| `mm7T` | func | 273 | `() -> ()` |
| `qPts` | func | 301 | `(i32 i32 i32 i32) -> (i32 i32)` |
| `sOFB` | func | 240 | `(i32) -> (i32)` |
| `vydX` | func | 221 | `(i32) -> ()` |
| `WcpF` | func | 279 | `(i32 i32 i32 i32 i32 i32) -> (i32 i32 i32)` |
| `u1dw` | func | 270 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32 i32 i32)` |
| `nx5d` | func | 250 | `(i32) -> (i32)` |
| `XkLJ` | func | 321 | `(i32 i32) -> (i32 i32)` |
| `gvvz` | func | 205 | `(i32) -> (i32)` |
| `Fk5B` | func | 175 | `(i32) -> ()` |
| `qieB` | func | 309 | `(i32 f64) -> (i32 i32 i32)` |
| `PesK` | func | 187 | `(i32 i32 i32) -> ()` |
| `ZVL8` | func | 307 | `(i32 i32) -> (i32 i32 i32)` |
| `fVFf` | func | 272 | `(f64 f64 f64 f64 f64 f64 f64 i32) -> (i32 i32 i32)` |
| `i11V` | func | 16 | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `ZrTg` | func | 296 | `(i32 i32 i32) -> (i32 i32 i32)` |
| `zw63` | func | 253 | `(i32) -> (i32)` |
| `XxVF` | func | 137 | `(i32 i32 i32) -> ()` |
| `RolW` | func | 280 | `(i32 i32 f64 i32 i32 i32) -> (i32 i32 i32)` |
| `uTan` | func | 274 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32 i32)` |
| `IIBx` | func | 314 | `(i32) -> (i32 i32 i32)` |
| `XTPB` | func | 206 | `(i32) -> (i32)` |
| `irUX` | func | 295 | `(i32 i32 i32) -> (i32 i32 i32)` |
| `JuOL` | func | 206 | `(i32) -> (i32)` |
| `uWGx` | func | 249 | `(i32) -> (i32)` |
| `cdSH` | func | 233 | `(i32) -> (i32)` |
| `uaLb` | func | 237 | `(i32) -> (i32)` |
| `B9bW` | func | 319 | `(i32 i32 i32) -> (i32 i32)` |
| `Rfko` | func | 162 | `(i32 i32) -> ()` |
| `O2C6` | func | 248 | `(i32) -> (i32)` |
| `TMwT` | func | 219 | `(i32 i32) -> ()` |
| `QpT8` | func | 149 | `(i32 i32) -> ()` |
| `e2Mo` | func | 326 | `(i32) -> (i32 i32)` |
| `bpsQ` | func | 366 | `(i32) -> (i32)` |
| `T1w5` | func | 244 | `(i32) -> (i32)` |
| `uM97` | func | 88 | `(i32 i32 i32 i32) -> (i32)` |
| `bLbW` | func | 328 | `(i32) -> (i32 f64)` |
| `IzRe` | func | 35 | `(i32 i32) -> (i32)` |
| `sJFq` | func | 208 | `(i32 i32) -> ()` |
| `kl62` | func | 89 | `(i32 i32 i32 i32 i32) -> ()` |
| `ARO7` | func | 276 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32 i32)` |
| `E7ud` | func | 217 | `(i32 i32) -> (i32)` |
| `TiXL` | func | 372 | `() -> (i32)` |
| `Ga2p` | func | 342 | `() -> (i32)` |
| `n0yP` | func | 11 | `(i32) -> (i32)` |
| `pDez` | func | 243 | `(i32) -> (i32)` |
| `nzeI` | func | 273 | `() -> ()` |
| `ymIA` | func | 332 | `() -> (i32 i32)` |
| `qUVd` | func | 210 | `(i32) -> (i32)` |
| `y0I1` | func | 171 | `(i32 i32) -> ()` |
| `KHFz` | func | 58 | `(i32 i32 i32 i32) -> ()` |
| `vtLz` | func | 327 | `(i32) -> (i32 i32)` |
| `YpzH` | func | 302 | `(i32 i32) -> (i32 i32 i32)` |
| `XxGK` | func | 323 | `(i32 i32) -> (i32 i32)` |
| `V9Vp` | func | 298 | `(i32 i32 i32) -> (i32 i32 i32)` |
| `p0n4` | func | 231 | `(i32) -> (i32)` |
| `gbxH` | func | 129 | `(i32 i32 i32) -> ()` |
| `dxMK` | func | 308 | `(i32 i32) -> (i32 i32 i32)` |
| `Orjr` | func | 74 | `(i32) -> ()` |
| `Zh6E` | func | 333 | `() -> (i32 i32)` |
| `zWaa` | func | 195 | `(i32) -> (i32)` |
| `xlmr` | func | 312 | `(i32 i32 i32) -> (i32 i32)` |
| `P3PO` | func | 325 | `(i32) -> (i32 i32)` |
| `rKA3` | func | 281 | `(i32 i32 i32 i32) -> (i32 i32 i32 i32)` |
| `yNds` | func | 373 | `() -> (i32)` |
| `plIP` | func | 194 | `(i32) -> (i32)` |
| `Xiwb` | func | 236 | `(i32) -> (f64)` |
| `f6v9` | func | 229 | `(i32) -> (i32)` |
| `E3HQ` | func | 138 | `(i32 i32) -> (i32)` |
| `pYO0` | func | 322 | `(i32 i32) -> (i32 i32)` |
| `zqsn` | func | 235 | `(i32) -> (i32)` |
| `WdY0` | func | 334 | `() -> (i32 i32)` |
| `VuCs` | func | 144 | `(i32 i32) -> ()` |
| `dVZu` | func | 107 | `(i32 i32 i32 i32) -> ()` |
| `Te51` | func | 160 | `() -> (i32)` |
| `ctg3` | func | 97 | `(i32 i32 i32) -> ()` |
| `bwbU` | func | 258 | `(i32) -> (i32)` |
| `L0jX` | func | 316 | `(i32) -> (i32 i32 i32)` |
| `nqSc` | func | 304 | `(i32 i32) -> (i32 i32 i32)` |
| `v1XL` | func | 241 | `(i32) -> (i32)` |
| `C26r` | func | 215 | `(i32) -> ()` |
| `WIj2` | func | 278 | `(i32 i32 f64 i32 i32 i32) -> (i32 i32 i32)` |
| `K9V8` | func | 79 | `() -> (i32)` |
| `KKCa` | func | 101 | `(i32 i32 i32 i32) -> ()` |
| `wB06` | func | 31 | `(i32 i32 i32) -> (i32)` |
| `Bz40` | func | 257 | `(i32) -> (i32)` |
| `zIPD` | func | 283 | `(i32 i32 i32 i32 f64 f64 f64) -> (i32 i32)` |
| `XgwW` | func | 230 | `(i32) -> (i32)` |
| `y2gi` | func | 102 | `(i32 i32 i32 i32) -> ()` |
| `YVS4` | func | 189 | `(i32 i32 i32) -> ()` |
| `rLzz` | func | 367 | `(i32) -> ()` |
| `XXHg` | func | 299 | `(i32 f64 i32) -> (i32 i32 i32)` |
| `VfdY` | func | 310 | `(i32 i32 i32) -> (i32 i32)` |
| `WNCB` | func | 214 | `(i32 i32) -> (i32)` |
| `DgpY` | func | 324 | `(i32) -> (i32 i32)` |
| `LUBn` | func | 81 | `() -> (i32)` |
| `Tt31` | func | 297 | `(i32 i32 i32 i32 i32) -> (i32 i32)` |
| `bqZi` | func | 197 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 f64 i32 i32 i32 i32) -> (i32 i32 i32)` |
| `kO0N` | func | 266 | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64 f64 i32) -> (f64 i32 i32)` |
| `rPfG` | func | 300 | `(i32 i32 i32 i32) -> (i32 i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- memory 0: min 17 pages · max ∞ · shared=False
- table 0: funcref · min 58 · max 58
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 1063224, `i32` = i32.const 1063600

## Functions

- 369 bodies · 318,720 code bytes · avg 863 B
- instruction scan: 369 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 38 |
| <= 64 bytes | 12 |
| <= 128 bytes | 80 |
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
| 8 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 61 | 4,027 | 2,134 | local.get×675, i32.const×228, local.set×180, br_if×131, i32.add×123 |
| 9 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 61 | 4,328 | 2,034 | local.get×749, local.tee×119, local.set×93, i32.const×81, f64.load×77 |
| 10 | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64 f64) -> (f64)` | 64 | 4,014 | 1,882 | local.get×677, local.tee×120, i32.const×105, local.set×83, i32.add×80 |
| 11 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 60 | 3,981 | 1,857 | local.get×700, local.tee×109, local.set×81, i32.const×77, f64.load×72 |
| 12 | `(i32 i32 i32 i32) -> ()` | 29 | 3,273 | 1,826 | local.get×749, local.tee×214, select×149, i32.const×97, i32.lt_s×78 |
| 13 | `(i32 i32 i32) -> (i32)` | 30 | 3,051 | 1,607 | local.get×410, i32.const×219, local.set×139, i32.add×87, end×87 |
| 14 | `(i32 i32 i32 i32 i32) -> ()` | 30 | 2,827 | 1,497 | local.get×450, i32.const×197, local.set×102, i32.add×82, local.tee×67 |
| 15 | `(i32 i32 i32) -> ()` | 39 | 2,718 | 1,354 | local.get×474, i32.const×163, end×109, if×99, call×93 |
| 17 | `(i32 i32 i32) -> ()` | 31 | 2,819 | 1,175 | local.get×298, i32.const×112, f64.const×93, local.tee×72, br_if×61 |
| 18 | `(i32 i32 i32 f64) -> (f64)` | 33 | 2,380 | 1,211 | local.get×321, i32.const×118, br_if×101, f64.load×69, local.tee×65 |
| 20 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` | 35 | 4,082 | 2,007 | local.get×503, i32.const×244, local.tee×137, i32.add×118, local.set×97 |
| 21 | `(i32) -> ()` | 4 | 2,125 | 968 | local.get×257, i32.load×154, i32.const×92, local.tee×90, end×85 |
| 27 | `(i32) -> (i32)` | 51 | 2,296 | 1,060 | local.get×309, i32.const×95, local.set×71, local.tee×64, i32.add×38 |
| 79 | `(i32 i32 i32 i32 i32) -> ()` | 21 | 2,228 | 1,062 | local.get×265, i32.const×120, local.tee×67, i32.add×65, i64.const×56 |
| 191 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 f64 i32 i32 i32 i32) -> (i32 i32 i32)` | 62 | 10,029 | 4,387 | local.get×1380, i32.const×520, local.set×224, i32.store×193, end×182 |
| 268 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32 i32)` | 31 | 3,146 | 1,518 | local.get×374, i32.const×205, i32.add×89, local.tee×84, end×74 |
| 273 | `(i32 i32 i32 i32 i32 i32) -> (i32 i32 i32)` | 90 | 33,407 | 16,781 | local.get×4960, i32.const×2286, i32.add×1217, local.set×1146, local.tee×766 |
| 287 | `(i32 i32 i32 i32 i32 i32) -> (i32 i32)` | 35 | 4,042 | 2,002 | local.get×595, i32.const×281, local.set×147, i32.add×116, local.tee×96 |
| 289 | `(i32 i32 i32) -> (i32 i32 i32)` | 78 | 17,419 | 7,570 | local.get×2375, i32.const×532, local.set×433, local.tee×395, f64.load×271 |
| 292 | `(i32 i32 i32) -> (i32 i32 i32)` | 88 | 8,369 | 4,132 | local.get×1124, i32.const×475, local.set×251, local.tee×234, i32.add×198 |
| 294 | `(i32 i32 i32 i32) -> (i32 i32)` | 16 | 3,241 | 1,460 | local.get×430, i32.const×218, local.tee×87, i32.add×82, local.set×62 |
| 306 | `(i32 i32 i32) -> (i32 i32)` | 19 | 2,779 | 1,214 | local.get×345, i32.const×147, i32.load×92, i32.add×67, local.tee×61 |

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
/home/arthur/.cargo/registry/src/index.crates.io-1949cf8c6b5b557f/dlmalloc-0.2.14/src/dlmalloc.rs
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
```

## Opcode histogram (aggregated)

| opcode | count |
|---|---:|
| `local.get` | 45,286 |
| `i32.const` | 18,262 |
| `local.tee` | 7,987 |
| `local.set` | 7,908 |
| `i32.add` | 7,894 |
| `end` | 6,809 |
| `i32.load` | 6,161 |
| `br_if` | 4,733 |
| `i32.store` | 4,214 |
| `block` | 3,058 |
| `if` | 2,693 |
| `call` | 2,531 |
| `i32.sub` | 2,171 |
| `i64.store` | 2,007 |
| `i64.const` | 1,904 |
| `br` | 1,842 |
| `i32.shl` | 1,830 |
| `i32.eqz` | 1,771 |
| `i32.and` | 1,756 |
| `select` | 1,207 |
| `i64.load` | 1,195 |
| `i32.load8_u` | 1,192 |
| `f64.load` | 1,057 |
| `i32.store8` | 1,029 |
| `i32.eq` | 995 |

## Custom sections

- `name` · 24 bytes

## Analysis quality

- sections consumed: 12, structural errors: 0
- bodies fully decoded: 369/369 (degraded: 0)
