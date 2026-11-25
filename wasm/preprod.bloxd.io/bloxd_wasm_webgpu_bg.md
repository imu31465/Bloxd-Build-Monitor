# WASM module: `bloxd_wasm_webgpu_bg`

> environment **preprod.bloxd.io** · build `fo1voe.f743fbcf` · analyzed 2026-11-26T01:26:18+09:00
> source: https://preprod.bloxd.io/static/media/bloxd_wasm_webgpu_bg.fc48a598565d706c50bb.wasm
> 5,157,353 bytes (4.9 MB) · sha256 `b23ee9a016abf7c0…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- size 5,139,786 → 5,157,353 bytes (+17,567)
- defined functions 2,952 → 2,967
- code bytes 4,053,210 → 4,069,311
- data bytes 1,040,182 → 1,041,569
- name-section module id `e2ab7c4ef64b2316.12298` → `7a32ea29144a3534.12337`
- export signatures: +1 × `(i32 i32) -> (i32)`; +1 × `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()`
- export identifiers rotated by the obfuscator: 1/162 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,967 / 393 |
| Exports / imports | 162 / 394 |
| Code bytes (function bodies) | 4,069,311 (3.9 MB) |
| Total local variables | 31,152 |
| Instructions (scanable bodies) | 1,903,974 |
| Data segments / bytes | 3,546 / 1,041,569 |
| Element segments / entries | 1 / 839 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `7a32ea29144a3534.12337` |
| Sections | 11 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,533 | 179 |
| 2 | import | 4,734 | 394 |
| 3 | function | 3,020 | 2967 |
| 4 | table | 7 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,297 | 162 |
| 9 | element | 1,685 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 4,074,725 | 2967 |
| 11 | data | 1,070,255 | 3546 |
| 0 | custom:name | 30 | — |

## Types

179 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

394 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `n8my.PBZb` | memory | `[128..14648]` |
| 0 | `n8my.yfJv` | func | `(i32) -> (i32)` |
| 1 | `n8my.Pkck` | func | `(i32) -> (f64)` |
| 2 | `n8my.jfmT` | func | `() -> (i32)` |
| 3 | `n8my.pGTV` | func | `(i32 i32 i32) -> (i32)` |
| 4 | `n8my.UMGR` | func | `(i32) -> ()` |
| 5 | `n8my.c2kz` | func | `(i32 i32) -> (i32)` |
| 6 | `n8my.gKkQ` | func | `(i32) -> (i32)` |
| 7 | `n8my.vatK` | func | `(i32 i32 i32) -> (i32)` |
| 8 | `n8my.uVF0` | func | `(i32 i32 i32 i32) -> (i32)` |
| 9 | `n8my.rowc` | func | `(i32) -> (i32)` |
| 10 | `n8my.ikVU` | func | `(i32 i32) -> ()` |
| 11 | `n8my.sp8g` | func | `(i32 i32) -> ()` |
| 12 | `n8my.ZMkZ` | func | `(i32 i32 i32 i32) -> (i32)` |
| 13 | `n8my.CfrC` | func | `(i32 i32) -> (i32)` |
| 14 | `n8my.U5nK` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 15 | `n8my.iWYk` | func | `(i32) -> (i32)` |
| 16 | `n8my.mbyh` | func | `(i32 i32) -> (i32)` |
| 17 | `n8my.x0dk` | func | `(i32 i32) -> (i32)` |
| 18 | `n8my.mLdw` | func | `(i32 i32) -> ()` |
| 19 | `n8my.UpaK` | func | `(i32) -> (i32)` |
| 20 | `n8my.jiD6` | func | `(i32) -> (i32)` |
| 21 | `n8my.zEAv` | func | `(i32 i32 i32) -> ()` |
| 22 | `n8my.OTic` | func | `(i32 i32 i32) -> (i32)` |
| 23 | `n8my.Tnc4` | func | `(i32) -> (i32)` |
| 24 | `n8my.fYIG` | func | `(i32) -> (i32)` |
| 25 | `n8my.aXyd` | func | `(i32 i32) -> ()` |
| 26 | `n8my.OKRV` | func | `(i32 i32) -> (i32)` |
| 27 | `n8my.iu7V` | func | `(i32 i32 i32 i32) -> ()` |
| 28 | `n8my.ERi1` | func | `(i32) -> (i32)` |
| 29 | `n8my.ZzLU` | func | `(i32) -> (i32)` |
| 30 | `n8my.p7P3` | func | `(i32) -> (i32)` |
| 31 | `n8my.mXsC` | func | `(i32) -> (i32)` |
| 32 | `n8my.ylqc` | func | `(i32) -> (i32)` |
| 33 | `n8my.ABFB` | func | `(i32 i32 i32) -> ()` |
| 34 | `n8my.xdDB` | func | `(i32 i32) -> (i32)` |
| 35 | `n8my.voYJ` | func | `(i32) -> (i32)` |
| 36 | `n8my.gO3F` | func | `(i32) -> ()` |
| 37 | `n8my.RTMD` | func | `(i32) -> (i32)` |
| 38 | `n8my.OGvy` | func | `(i32) -> (i32)` |
| 39 | `n8my.CQIj` | func | `(i32) -> ()` |
| 40 | `n8my.hXIa` | func | `(i32 i32) -> (i32)` |
| 41 | `n8my.uNJ0` | func | `(i32 i32 i32) -> (i32)` |
| 42 | `n8my.MLMW` | func | `(i32) -> ()` |
| 43 | `n8my.L3ov` | func | `(i32 i32) -> ()` |
| 44 | `n8my.ZW3W` | func | `() -> (i32)` |
| 45 | `n8my.eaC8` | func | `(i32 i32) -> (i32)` |
| 46 | `n8my.CS3x` | func | `(i32 i32) -> (i32)` |
| 47 | `n8my.mZES` | func | `(i32) -> (i32)` |
| 48 | `n8my.Hsn1` | func | `(i32) -> (i32)` |
| 49 | `n8my.P1tZ` | func | `(i32) -> (i32)` |
| 50 | `n8my.SK9S` | func | `(i32 i32) -> ()` |
| 51 | `n8my.WcNn` | func | `(i32) -> (i32)` |
| 52 | `n8my.vugY` | func | `(i32) -> ()` |
| 53 | `n8my.KI5C` | func | `(i32 i32) -> (i32)` |
| 54 | `n8my.Y81x` | func | `(i32 i32 i32) -> (i32)` |
| 55 | `n8my.k7AM` | func | `(i32) -> (i32)` |
| 56 | `n8my.ENet` | func | `(i32 i32 i32) -> ()` |
| 57 | `n8my.BsEo` | func | `(i32 i32) -> ()` |
| 58 | `n8my.hzQz` | func | `(i32) -> (i32)` |
| 59 | `n8my.hKaa` | func | `(i32 i32 f64 i32 i32 f64 f64) -> ()` |
| 60 | `n8my.zcm2` | func | `(i32) -> ()` |
| 61 | `n8my.bsy4` | func | `(i32 i32 f64 i32 f64 f64) -> ()` |
| 62 | `n8my.aNEp` | func | `(i32) -> ()` |
| 63 | `n8my.EIGz` | func | `(i32 i32 i32) -> ()` |
| 64 | `n8my.twYQ` | func | `(i32 i32) -> ()` |
| 65 | `n8my.jHYN` | func | `(i32 i32 i32 i32 i32 f64 i32) -> ()` |
| 66 | `n8my.lkW3` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 67 | `n8my.xzkM` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 68 | `n8my.EC4E` | func | `(i32 i32 f64) -> ()` |
| 69 | `n8my.fgH2` | func | `(i32) -> (i32)` |
| 70 | `n8my.utVZ` | func | `(i32 i32) -> ()` |
| 71 | `n8my.sPnN` | func | `(i32 i32 i32) -> ()` |
| 72 | `n8my.OKpd` | func | `(i32 i32 i32 i32) -> ()` |
| 73 | `n8my.IkvA` | func | `(i32 i32 i32) -> ()` |
| 74 | `n8my.j8oe` | func | `(i32) -> ()` |
| 75 | `n8my.fE7j` | func | `(i32 i32) -> ()` |
| 76 | `n8my.iFwN` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 77 | `n8my.GhSH` | func | `(i32 f32 f32 f32 f32 f32 f32) -> ()` |
| 78 | `n8my.BVHS` | func | `(i32 i32 i32) -> ()` |
| 79 | `n8my.XpdQ` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 80 | `n8my.c6B2` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 81 | `n8my.bj4d` | func | `(i32 i32 i32 i32 i32 f64 i32) -> ()` |
| 82 | `n8my.lyWC` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 83 | `n8my.ytgT` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 84 | `n8my.wpsZ` | func | `(i32 i32 i32) -> ()` |
| 85 | `n8my.k0gy` | func | `(i32 i32) -> (i32)` |
| 86 | `n8my.KPBE` | func | `(i32) -> (i32)` |
| 87 | `n8my.jIMe` | func | `(i32) -> (i32)` |
| 88 | `n8my.hGCF` | func | `(i32) -> (i32)` |
| 89 | `n8my.Wa0B` | func | `(i32 i32) -> (i32)` |
| 90 | `n8my.fPAG` | func | `(i32) -> ()` |
| 91 | `n8my.uIOp` | func | `(i32) -> (i32)` |
| 92 | `n8my.Zjl2` | func | `(i32 i32) -> (i32)` |
| 93 | `n8my.otKe` | func | `(i32 i32 i32) -> (i32)` |
| 94 | `n8my.L62G` | func | `(i32 i32 i32) -> ()` |
| 95 | `n8my.sphW` | func | `(i32 i32 i32 i32) -> (i32)` |
| 96 | `n8my.im3N` | func | `() -> (f64)` |
| 97 | `n8my.d5nU` | func | `() -> (f64)` |
| 98 | `n8my.NDlZ` | func | `(i32 i32) -> ()` |
| 99 | `n8my.iDgo` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 100 | `n8my.YK09` | func | `(i32) -> (i32)` |
| 101 | `n8my.LC9T` | func | `(i32) -> (i32)` |
| 102 | `n8my.qLKL` | func | `(i32) -> (i32)` |
| 103 | `n8my.kYrG` | func | `() -> (i32)` |
| 104 | `n8my.D5VZ` | func | `() -> (i32)` |
| 105 | `n8my.bd7y` | func | `() -> (i32)` |
| 106 | `n8my.y9o7` | func | `() -> (i32)` |
| 107 | `n8my.SjcQ` | func | `(i32 i32) -> (i32)` |
| 108 | `n8my.A179` | func | `(i32) -> ()` |
| 109 | `n8my.tPb0` | func | `(i32 i32) -> (i32)` |
| 110 | `n8my.bfMY` | func | `(i32) -> (i32)` |
| 111 | `n8my.ryFo` | func | `() -> (f64)` |
| 112 | `n8my.G3XH` | func | `(i32) -> (i32)` |
| 113 | `n8my.hbcd` | func | `(i32 i32) -> ()` |
| 114 | `n8my.RCcD` | func | `(i32 i32) -> ()` |
| 115 | `n8my.vC6b` | func | `(i32 i32) -> ()` |
| 116 | `n8my.Uh9D` | func | `(i32 f32) -> ()` |
| 117 | `n8my.oqda` | func | `(i32 f32) -> ()` |
| 118 | `n8my.HmN3` | func | `(i32 i32) -> ()` |
| 119 | `n8my.wC3J` | func | `(i32 i32) -> ()` |
| 120 | `n8my.B8yc` | func | `(i32 i32) -> ()` |
| 121 | `n8my.SW7r` | func | `(i32 i32) -> ()` |
| 122 | `n8my.nllx` | func | `(i32 i32 i32) -> ()` |
| 123 | `n8my.MEkV` | func | `(i32 i32) -> (i32)` |
| 124 | `n8my.gK2N` | func | `(i32 i32) -> ()` |
| 125 | `n8my.m2Bz` | func | `(i32 i32) -> ()` |
| 126 | `n8my.Lqk3` | func | `(i32 i32) -> ()` |
| 127 | `n8my.cjb4` | func | `(i32 i32) -> ()` |
| 128 | `n8my.H754` | func | `(i32 f64) -> ()` |
| 129 | `n8my.iasv` | func | `(i32 f64) -> ()` |
| 130 | `n8my.oi5f` | func | `(i32 i32) -> ()` |
| 131 | `n8my.tXYA` | func | `(i32 i32 i32) -> ()` |
| 132 | `n8my.H8Iy` | func | `(i32 i32) -> ()` |
| 133 | `n8my.GZAK` | func | `(i32 i32) -> (i32)` |
| 134 | `n8my.fk1N` | func | `(i32 i32 i32) -> ()` |
| 135 | `n8my.YMti` | func | `(i32 i32 i32) -> ()` |
| 136 | `n8my.T4nR` | func | `(i32 i32) -> (i32)` |
| 137 | `n8my.AZX2` | func | `(i32 i32) -> (i32)` |
| 138 | `n8my.W0kn` | func | `(i32 i32 i32) -> ()` |
| 139 | `n8my.xRxF` | func | `(i32 i32 i32) -> ()` |
| 140 | `n8my.iDSs` | func | `(i32 i32) -> (i32)` |
| 141 | `n8my.CCMS` | func | `(i32 i32) -> ()` |
| 142 | `n8my.PX3Q` | func | `(i32 i32) -> ()` |
| 143 | `n8my.Ff3Q` | func | `(i32 i32) -> ()` |
| 144 | `n8my.aGzW` | func | `(i32 i32) -> ()` |
| 145 | `n8my.LQeZ` | func | `(i32 i32) -> ()` |
| 146 | `n8my.icHv` | func | `(i32 i32) -> ()` |
| 147 | `n8my.R9fh` | func | `(i32 i32) -> ()` |
| 148 | `n8my.T7cf` | func | `(i32 f64) -> ()` |
| 149 | `n8my.roBK` | func | `(i32 i32) -> ()` |
| 150 | `n8my.pY3y` | func | `(i32 i32) -> ()` |
| 151 | `n8my.Mha8` | func | `(i32 i32) -> ()` |
| 152 | `n8my.uKrn` | func | `(i32 i32) -> ()` |
| 153 | `n8my.VThf` | func | `(i32 i32) -> ()` |
| 154 | `n8my.WWKg` | func | `(i32 i32) -> ()` |
| 155 | `n8my.Ro1J` | func | `(i32 i32) -> ()` |
| 156 | `n8my.HU3v` | func | `(i32 i32) -> ()` |
| 157 | `n8my.AhCC` | func | `(i32 i32) -> ()` |
| 158 | `n8my.USwh` | func | `(i32 i32 i32) -> ()` |
| 159 | `n8my.pgFT` | func | `(i32 i32 i32) -> ()` |
| 160 | `n8my.sLZ2` | func | `(i32 i32) -> (i32)` |
| 161 | `n8my.kjb2` | func | `(i32 i32) -> (i32)` |
| 162 | `n8my.Eslo` | func | `(i32 i32) -> ()` |
| 163 | `n8my.NA3W` | func | `(i32 i32) -> ()` |
| 164 | `n8my.qvdC` | func | `(i32 f64) -> ()` |
| 165 | `n8my.cdnq` | func | `(i32 i32) -> ()` |
| 166 | `n8my.CLHZ` | func | `(i32 i32) -> ()` |
| 167 | `n8my.UZLP` | func | `(i32 i32) -> ()` |
| 168 | `n8my.Tjmy` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 169 | `n8my.ooG4` | func | `(i32 f64) -> ()` |
| 170 | `n8my.LUO5` | func | `(i32 f64) -> ()` |
| 171 | `n8my.BCKy` | func | `(i32 f64) -> ()` |
| 172 | `n8my.IfhK` | func | `(i32 f64) -> ()` |
| 173 | `n8my.dsKu` | func | `(i32 i32) -> ()` |
| 174 | `n8my.edp4` | func | `(i32 i32) -> ()` |
| 175 | `n8my.fUJd` | func | `(i32 i32) -> ()` |
| 176 | `n8my.W1Az` | func | `(i32 i32) -> ()` |
| 177 | `n8my.mFAH` | func | `(i32 i32) -> ()` |
| 178 | `n8my.WWjL` | func | `(i32 i32 i32) -> ()` |
| 179 | `n8my.hxcE` | func | `(i32 i32) -> ()` |
| 180 | `n8my.UYgJ` | func | `(i32 f32) -> ()` |
| 181 | `n8my.OvQR` | func | `(i32 i32) -> ()` |
| 182 | `n8my.eiEW` | func | `(i32 i32) -> ()` |
| 183 | `n8my.ejG0` | func | `(i32 i32) -> ()` |
| 184 | `n8my.CNNj` | func | `(i32 i32) -> ()` |
| 185 | `n8my.w66X` | func | `(i32 i32) -> ()` |
| 186 | `n8my.dofU` | func | `(i32 i32) -> ()` |
| 187 | `n8my.dIzQ` | func | `(i32 i32) -> ()` |
| 188 | `n8my.rdti` | func | `(i32 i32) -> ()` |
| 189 | `n8my.hcv0` | func | `(i32 i32) -> ()` |
| 190 | `n8my.Cfy5` | func | `(i32 i32) -> ()` |
| 191 | `n8my.oD3F` | func | `(i32 i32) -> ()` |
| 192 | `n8my.wJYx` | func | `(i32 i32) -> ()` |
| 193 | `n8my.pqNt` | func | `(i32 i32) -> (i32)` |
| 194 | `n8my.VDOP` | func | `(i32 i32 i32 i32) -> ()` |
| 195 | `n8my.fgZP` | func | `(i32 i32) -> ()` |
| 196 | `n8my.thgQ` | func | `(i32 i32 i32) -> ()` |
| 197 | `n8my.FHOW` | func | `(i32 i32) -> (i32)` |
| 198 | `n8my.b5wn` | func | `(i32) -> (i32)` |
| 199 | `n8my.aaTx` | func | `(i32 i32) -> ()` |
| 200 | `n8my.Hq8H` | func | `(i32 i32) -> ()` |
| 201 | `n8my.RvUP` | func | `(i32 i32) -> ()` |
| 202 | `n8my.XcXj` | func | `(i32 i32) -> ()` |
| 203 | `n8my.bHBg` | func | `(i32 i32) -> ()` |
| 204 | `n8my.avki` | func | `(i32 i32) -> ()` |
| 205 | `n8my.dsZw` | func | `(i32 i32) -> ()` |
| 206 | `n8my.QwWA` | func | `(i32 i32) -> ()` |
| 207 | `n8my.fyny` | func | `(i32) -> (i32)` |
| 208 | `n8my.pTX0` | func | `(i32 i32 i32) -> ()` |
| 209 | `n8my.xomo` | func | `(i32 i32) -> ()` |
| 210 | `n8my.VzoF` | func | `(i32 i32 i32 i32) -> ()` |
| 211 | `n8my.KIgK` | func | `(i32 i32) -> ()` |
| 212 | `n8my.wwnr` | func | `(i32) -> ()` |
| 213 | `n8my.igc4` | func | `(i32 i32) -> ()` |
| 214 | `n8my.Xd8z` | func | `(i32) -> (i32)` |
| 215 | `n8my.YP9J` | func | `(i32 i32 i32) -> ()` |
| 216 | `n8my.Dwin` | func | `(i32 i32) -> ()` |
| 217 | `n8my.lkdZ` | func | `(i32 i32) -> ()` |
| 218 | `n8my.bMm3` | func | `(i32 i32) -> ()` |
| 219 | `n8my.IWPJ` | func | `(i32 i32) -> ()` |
| 220 | `n8my.sBgZ` | func | `(i32 i32) -> (i32)` |
| 221 | `n8my.HDm0` | func | `(i32 i32) -> ()` |
| 222 | `n8my.seib` | func | `(i32 i32) -> ()` |
| 223 | `n8my.fJTe` | func | `(i32 i32) -> ()` |
| 224 | `n8my.l2MG` | func | `(i32 i32) -> ()` |
| 225 | `n8my.uWVl` | func | `(i32 i32) -> ()` |
| 226 | `n8my.vkIn` | func | `(i32 i32) -> ()` |
| 227 | `n8my.We0F` | func | `(i32 i32) -> ()` |
| 228 | `n8my.Oqvl` | func | `(i32 i32 f64 f64) -> (i32)` |
| 229 | `n8my.L0iZ` | func | `(i32) -> (i32)` |
| 230 | `n8my.WGqd` | func | `(i32) -> ()` |
| 231 | `n8my.k6IJ` | func | `(i32 f64) -> ()` |
| 232 | `n8my.Uvwq` | func | `(i32 i32) -> ()` |
| 233 | `n8my.erFb` | func | `(i32 i32) -> ()` |
| 234 | `n8my.ysIw` | func | `(i32 i32 i32) -> ()` |
| 235 | `n8my.DIUp` | func | `(i32 i32) -> (i32)` |
| 236 | `n8my.hfyw` | func | `(i32 i32) -> ()` |
| 237 | `n8my.vH2q` | func | `(i32 i32) -> ()` |
| 238 | `n8my.I0v9` | func | `(i32 i32) -> ()` |
| 239 | `n8my.tMoc` | func | `(i32 i32 i32) -> ()` |
| 240 | `n8my.Tqpr` | func | `(i32 i32) -> ()` |
| 241 | `n8my.NBry` | func | `(i32 i32) -> ()` |
| 242 | `n8my.zSPE` | func | `(i32 i32) -> ()` |
| 243 | `n8my.cakx` | func | `(i32 i32 i32) -> ()` |
| 244 | `n8my.dHYi` | func | `(i32 i32) -> ()` |
| 245 | `n8my.q2WU` | func | `(i32 i32) -> ()` |
| 246 | `n8my.MVzi` | func | `(i32 i32 i32) -> ()` |
| 247 | `n8my.ChxD` | func | `(i32 i32) -> (i32)` |
| 248 | `n8my.F3Yx` | func | `(i32 i32) -> ()` |
| 249 | `n8my.bGVv` | func | `(i32 i32 i32) -> ()` |
| 250 | `n8my.CiT2` | func | `(i32 i32) -> ()` |
| 251 | `n8my.FHKc` | func | `(i32 f64) -> ()` |
| 252 | `n8my.tvd0` | func | `(i32 i32) -> ()` |
| 253 | `n8my.OzoJ` | func | `(i32 f64) -> ()` |
| 254 | `n8my.G0Zl` | func | `(i32 i32 i32) -> ()` |
| 255 | `n8my.Kw4M` | func | `(i32 i32) -> ()` |
| 256 | `n8my.q8oE` | func | `(i32 i32 i32) -> ()` |
| 257 | `n8my.kQMf` | func | `(i32 i32) -> ()` |
| 258 | `n8my.tCpv` | func | `(i32 i32) -> ()` |
| 259 | `n8my.n0mE` | func | `(i32 i32) -> ()` |
| 260 | `n8my.FKlX` | func | `(i32 i32 i32) -> ()` |
| 261 | `n8my.XitP` | func | `(i32 i32) -> ()` |
| 262 | `n8my.eOxW` | func | `(i32 i32) -> ()` |
| 263 | `n8my.knoI` | func | `(i32 i32) -> ()` |
| 264 | `n8my.kiJ8` | func | `(i32 i32) -> ()` |
| 265 | `n8my.WgCq` | func | `(i32 f32) -> ()` |
| 266 | `n8my.R7Gx` | func | `(i32 f32) -> ()` |
| 267 | `n8my.m2Hp` | func | `(i32 i32) -> ()` |
| 268 | `n8my.LNRB` | func | `(i32 i32) -> ()` |
| 269 | `n8my.cXVi` | func | `(i32 i32) -> ()` |
| 270 | `n8my.suui` | func | `(i32 i32) -> ()` |
| 271 | `n8my.xkCD` | func | `(i32 i32) -> ()` |
| 272 | `n8my.BThD` | func | `(i32 i32) -> ()` |
| 273 | `n8my.iM7i` | func | `(i32 i32) -> ()` |
| 274 | `n8my.PoUY` | func | `(i32 i32) -> ()` |
| 275 | `n8my.kZvK` | func | `(i32 i32) -> ()` |
| 276 | `n8my.r50g` | func | `(i32 i32) -> ()` |
| 277 | `n8my.dIOT` | func | `(i32 i32) -> ()` |
| 278 | `n8my.WfFU` | func | `(i32 i32) -> ()` |
| 279 | `n8my.pMKG` | func | `(i32 i32) -> ()` |
| 280 | `n8my.q9mU` | func | `(i32 i32) -> ()` |
| 281 | `n8my.emof` | func | `(i32 i32) -> ()` |
| 282 | `n8my.zsFv` | func | `(i32 i32) -> ()` |
| 283 | `n8my.Nz4a` | func | `(i32 i32) -> ()` |
| 284 | `n8my.yRTM` | func | `(i32 i32) -> ()` |
| 285 | `n8my.qVME` | func | `(i32 i32 i32) -> ()` |
| 286 | `n8my.j5JZ` | func | `(i32 i32 i32) -> ()` |
| 287 | `n8my.XDKp` | func | `(i32 i32) -> ()` |
| 288 | `n8my.ljwq` | func | `(i32 i32) -> ()` |
| 289 | `n8my.Pn7P` | func | `(i32 i32) -> ()` |
| 290 | `n8my.ggaQ` | func | `(i32 i32) -> ()` |
| 291 | `n8my.ldiQ` | func | `(i32 i32) -> ()` |
| 292 | `n8my.iATT` | func | `(i32 i32) -> ()` |
| 293 | `n8my.u9JY` | func | `(i32 i32) -> ()` |
| 294 | `n8my.jdIX` | func | `(i32 i32) -> ()` |
| 295 | `n8my.TwBp` | func | `(i32 i32) -> ()` |
| 296 | `n8my.z2JT` | func | `(i32 i32) -> ()` |
| 297 | `n8my.uD30` | func | `(i32 i32) -> ()` |
| 298 | `n8my.ar8e` | func | `(i32 i32) -> (i32)` |
| 299 | `n8my.w5zg` | func | `(i32 i32) -> ()` |
| 300 | `n8my.M5cB` | func | `(i32 i32 i32) -> ()` |
| 301 | `n8my.BmFQ` | func | `(i32 i32) -> ()` |
| 302 | `n8my.oDkR` | func | `(i32 i32) -> ()` |
| 303 | `n8my.xK5b` | func | `(i32 i32) -> ()` |
| 304 | `n8my.yek7` | func | `(i32 i32 i32) -> ()` |
| 305 | `n8my.wBKd` | func | `(i32 i32) -> (i32)` |
| 306 | `n8my.fKxa` | func | `(i32 i32 i32) -> ()` |
| 307 | `n8my.hsuW` | func | `(i32 i32 i32) -> ()` |
| 308 | `n8my.mY0y` | func | `(i32 i32) -> ()` |
| 309 | `n8my.deOS` | func | `(i32 i32) -> ()` |
| 310 | `n8my.w6a4` | func | `(i32 i32) -> ()` |
| 311 | `n8my.R9zu` | func | `(i32 i32) -> ()` |
| 312 | `n8my.NZ6o` | func | `(i32 i32) -> (i32)` |
| 313 | `n8my.E3D4` | func | `(i32) -> (i32)` |
| 314 | `n8my.Ck4v` | func | `(i32) -> (i32)` |
| 315 | `n8my.H7ad` | func | `(i32) -> (i32)` |
| 316 | `n8my.FSm1` | func | `(i32) -> (i32)` |
| 317 | `n8my.Kgmj` | func | `(i32) -> (i32)` |
| 318 | `n8my.ImOl` | func | `(i32) -> (i32)` |
| 319 | `n8my.SZiE` | func | `(i32) -> (i32)` |
| 320 | `n8my.wNSJ` | func | `(i32) -> (i32)` |
| 321 | `n8my.rgIA` | func | `(i32) -> (i32)` |
| 322 | `n8my.Bd9M` | func | `(i32) -> (i32)` |
| 323 | `n8my.YgDL` | func | `(i32) -> (i32)` |
| 324 | `n8my.YmxC` | func | `(i32) -> (i32)` |
| 325 | `n8my.bJ9Z` | func | `(i32) -> (i32)` |
| 326 | `n8my.TlUl` | func | `(i32) -> (i32)` |
| 327 | `n8my.vhPo` | func | `(i32) -> (f64)` |
| 328 | `n8my.pvxL` | func | `(i32) -> (f64)` |
| 329 | `n8my.SYqe` | func | `(i32) -> (i32)` |
| 330 | `n8my.dCDT` | func | `(i32) -> (f64)` |
| 331 | `n8my.cc0R` | func | `(i32) -> (i32)` |
| 332 | `n8my.KPoj` | func | `(i32) -> (i32)` |
| 333 | `n8my.uFTG` | func | `(i32) -> (i32)` |
| 334 | `n8my.wrtR` | func | `(i32) -> (i32)` |
| 335 | `n8my.uQoS` | func | `(i32) -> (i32)` |
| 336 | `n8my.ea7R` | func | `(i32) -> (i32)` |
| 337 | `n8my.tWAM` | func | `(i32) -> (i32)` |
| 338 | `n8my.UCy7` | func | `(i32) -> (i32)` |
| 339 | `n8my.lYCq` | func | `(i32) -> (i32)` |
| 340 | `n8my.EW8P` | func | `(i32) -> (i32)` |
| 341 | `n8my.s1lT` | func | `(i32) -> (i32)` |
| 342 | `n8my.x38w` | func | `(i32) -> (i32)` |
| 343 | `n8my.KxmL` | func | `(i32) -> (i32)` |
| 344 | `n8my.J8Dw` | func | `(i32 i32 i32) -> (i32)` |
| 345 | `n8my.Vqjr` | func | `() -> (i32)` |
| 346 | `n8my.JfU0` | func | `(i32 i32) -> ()` |
| 347 | `n8my.lGWI` | func | `(i32 i32 i32) -> ()` |
| 348 | `n8my.jAe2` | func | `(i32 i32 i32) -> ()` |
| 349 | `n8my.eES9` | func | `(i32 i32) -> (i32)` |
| 350 | `n8my.Ylch` | func | `(i32) -> (i32)` |
| 351 | `n8my.rZVu` | func | `(i32 i32 i32) -> (i32)` |
| 352 | `n8my.KGFD` | func | `(i32) -> ()` |
| 353 | `n8my.ARMl` | func | `(i32) -> (i32)` |
| 354 | `n8my.OvfL` | func | `(i32 i32) -> ()` |
| 355 | `n8my.lsPY` | func | `(i32) -> (i32)` |
| 356 | `n8my.RJxk` | func | `(i32) -> (i32)` |
| 357 | `n8my.xLRX` | func | `(i32) -> (i32)` |
| 358 | `n8my.p2NC` | func | `(i32) -> (i32)` |
| 359 | `n8my.NUDu` | func | `(i32) -> (i32)` |
| 360 | `n8my.zRuo` | func | `(i32 i32) -> ()` |
| 361 | `n8my.R786` | func | `(i32 i32) -> ()` |
| 362 | `n8my.CupD` | func | `(i32 i32) -> ()` |
| 363 | `n8my.JqUA` | func | `(i32 i32) -> ()` |
| 364 | `n8my.qfdS` | func | `(i32 i32) -> ()` |
| 365 | `n8my.OdUL` | func | `(i32 i32) -> ()` |
| 366 | `n8my.zeNi` | func | `(i32 i32) -> ()` |
| 367 | `n8my.pV2I` | func | `(i32 i32 i32) -> ()` |
| 368 | `n8my.KIYH` | func | `(i32 i32) -> ()` |
| 369 | `n8my.Qb2O` | func | `(i32 i32) -> (i32)` |
| 370 | `n8my.Gkmj` | func | `(i32) -> (i32)` |
| 371 | `n8my.OMOU` | func | `(i32) -> (i32)` |
| 372 | `n8my.D1P0` | func | `(i32 i32) -> ()` |
| 373 | `n8my.OjCi` | func | `(i32) -> (i32)` |
| 374 | `n8my.uPeq` | func | `(i32 f64 f64) -> (i32)` |
| 375 | `n8my.pLQu` | func | `(i32 i32 i32) -> (i32)` |
| 376 | `n8my.nD8X` | func | `(i32 i32) -> ()` |
| 377 | `n8my.Xq6H` | func | `(i32) -> (i32)` |
| 378 | `n8my.Scup` | func | `(i32) -> (i32)` |
| 379 | `n8my.eXsA` | func | `(i32) -> (i32)` |
| 380 | `n8my.vEhK` | func | `(i32) -> (i32)` |
| 381 | `n8my.t0Du` | func | `(i32) -> (i32)` |
| 382 | `n8my.sGZO` | func | `(i32) -> (i32)` |
| 383 | `n8my.EEHm` | func | `(i32 i32) -> ()` |
| 384 | `n8my.bAWA` | func | `(i32 i32) -> (i32)` |
| 385 | `n8my.ztpr` | func | `(i32 i32) -> (i32)` |
| 386 | `n8my.XiiB` | func | `(i32 i32) -> (i32)` |
| 387 | `n8my.mTxe` | func | `(i32 i32) -> (i32)` |
| 388 | `n8my.ZSis` | func | `(i32 i32) -> (i32)` |
| 389 | `n8my.lPCR` | func | `(i32 i32) -> (i32)` |
| 390 | `n8my.FKZF` | func | `(f64) -> (i32)` |
| 391 | `n8my.oV7Z` | func | `(i32 i32) -> (i32)` |
| 392 | `n8my.flec` | func | `(i32 i32) -> (i32)` |

## Exports

162 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `ecgj` | func | 2481 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64 i32 i32) -> (i32)` |
| `bNkL` | func | 773 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `wfFS` | func | 1352 | `(i32 i32 i32) -> ()` |
| `yZFq` | func | 2601 | `(i32) -> (i32)` |
| `nNU6` | func | 2578 | `(i32) -> (i32)` |
| `FSHn` | func | 1526 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `TzQ7` | func | 1983 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `XN7k` | func | 2600 | `(i32 i32) -> ()` |
| `f6Ap` | func | 990 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `TJ6t` | func | 2172 | `(i32 i32) -> (i32)` |
| `aTid` | func | 1261 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `GKKp` | global | 1 | `` |
| `eEmP` | func | 1330 | `(i32 i32) -> (i32)` |
| `M2wZ` | func | 3263 | `(i32 i32 i32) -> ()` |
| `pxJV` | func | 2148 | `(i32 i32) -> ()` |
| `jPAe` | func | 2435 | `(i32 i32) -> (i32)` |
| `qScF` | func | 1568 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `FoSZ` | func | 1694 | `(i32 f64 f64 f64) -> (i32)` |
| `tG5n` | func | 763 | `(i32 i32) -> (i32)` |
| `VEIM` | func | 839 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `fKnl` | func | 2304 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `jtIx` | func | 1204 | `(i32 i32) -> ()` |
| `Osqq` | func | 3322 | `(i32) -> (i32)` |
| `zpN8` | func | 2530 | `(i32) -> (i32)` |
| `Cqpu` | func | 1406 | `(i32) -> ()` |
| `tnex` | func | 974 | `(i32 i32) -> (i32)` |
| `axQe` | func | 2599 | `(i32) -> (i32)` |
| `usdw` | func | 2584 | `(i32) -> (i32)` |
| `bRbI` | func | 3154 | `(i32) -> (i32 i32)` |
| `GCvh` | func | 2890 | `(i32) -> (i32)` |
| `XgM7` | global | 2 | `` |
| `H7MQ` | func | 2952 | `(i32) -> (i32)` |
| `KUMy` | func | 2486 | `(i32 i32 i32 i32) -> (i32)` |
| `LWpy` | func | 2618 | `(i32) -> (i32)` |
| `fEDS` | func | 3100 | `(i32 i32) -> (i32)` |
| `wjzh` | func | 1796 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `FOxp` | func | 1819 | `(i32) -> (i32)` |
| `qTlu` | func | 3138 | `(i32 i32) -> (i32 i32)` |
| `eBdy` | func | 2609 | `(i32 i32) -> (i32)` |
| `rNUG` | func | 3155 | `(i32) -> (i32 i32)` |
| `EUYa` | func | 973 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `FLuX` | func | 1499 | `(i32 i32) -> (i32)` |
| `wc6A` | func | 2906 | `(i32) -> (i32)` |
| `lSeV` | func | 2649 | `(i32 i32) -> ()` |
| `mo3F` | func | 3346 | `() -> (i32)` |
| `Zrg9` | func | 2283 | `(i32 i32) -> (i32)` |
| `AznO` | func | 2583 | `(i32) -> (i32)` |
| `EZR6` | func | 1966 | `(i32 i32) -> ()` |
| `YHEh` | func | 1960 | `(i32 i32 f64 f64 f64) -> ()` |
| `qbV3` | func | 1380 | `(i32 i32) -> (i32)` |
| `Zw3z` | func | 3168 | `() -> (i32 i32)` |
| `WlXZ` | func | 2561 | `(i32) -> (i32)` |
| `O2AR` | func | 1613 | `(i32 i32) -> (i32)` |
| `kTPi` | func | 3113 | `(i32 i32) -> ()` |
| `fRh2` | func | 1203 | `(i32 i32) -> (i32)` |
| `cm3C` | func | 3153 | `(i32) -> (i32 i32)` |
| `oxnM` | func | 802 | `(i32 i32) -> (i32)` |
| `hCbe` | func | 2115 | `(i32 f64) -> (i32)` |
| `JBsK` | func | 2917 | `(i32) -> (i32)` |
| `K1kJ` | func | 1690 | `(i32 i32) -> ()` |
| `KH1K` | func | 2581 | `(i32) -> (i32)` |
| `uL1y` | func | 1534 | `(i32) -> (i32)` |
| `djRD` | func | 1474 | `(i32 f64 f64) -> (i32)` |
| `on36` | func | 1616 | `(i32 f64) -> (f64)` |
| `nvsj` | func | 2667 | `() -> (i32)` |
| `lYm9` | func | 1308 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `NPGn` | func | 1001 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `D2Cc` | func | 1628 | `(i32 i32 i32) -> (i32)` |
| `fmit` | func | 1473 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `RvC5` | func | 1348 | `(i32 i32 i32) -> (i32)` |
| `rdjv` | func | 1423 | `(i32 i32 i32) -> (i32)` |
| `c8s6` | func | 2699 | `(i32 i32) -> ()` |
| `Q05J` | func | 3323 | `(i32) -> ()` |
| `nAnz` | func | 2594 | `(i32 i32) -> ()` |
| `gdXc` | func | 2582 | `(i32) -> ()` |
| `i7tb` | func | 832 | `(i32 i32 i32 i32) -> (i32)` |
| `f5TQ` | func | 3107 | `(i32 i32 i32 i32) -> (i32)` |
| `vq43` | func | 2579 | `(i32) -> (i32)` |
| `sEtC` | func | 1922 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `kTv3` | func | 1600 | `(i32 i32) -> (i32)` |
| `dMRR` | func | 2356 | `(i32 i32) -> ()` |
| `sJoN` | func | 707 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `ushW` | func | 2607 | `(i32) -> (i32)` |
| `wsB9` | func | 2383 | `(i32 i32) -> ()` |
| `IF2N` | func | 3167 | `() -> (i32 i32)` |
| `Zg1m` | func | 1648 | `(i32 i32 i32 i32) -> (i32)` |
| `JEzd` | func | 2357 | `(i32 f64) -> (i32)` |
| `A8xQ` | func | 3131 | `(i32 i32 i32) -> (i32 i32)` |
| `GHBU` | func | 3144 | `(i32 i32) -> (i32 i32)` |
| `pski` | func | 3131 | `(i32 i32 i32) -> (i32 i32)` |
| `BA0P` | func | 1586 | `(i32 i32) -> (i32)` |
| `JoAj` | func | 2437 | `(i32 i32) -> (i32)` |
| `RMyk` | func | 3142 | `(i32 i32) -> (i32 i32)` |
| `lkIM` | func | 3151 | `(i32) -> (i32 i32)` |
| `K5XY` | func | 1976 | `(i32 i32) -> (i32)` |
| `qHLg` | func | 2438 | `(i32 i32) -> (i32)` |
| `ljMO` | func | 3194 | `(i32 i32 i32 i32) -> ()` |
| `d8gw` | func | 1300 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `wiVi` | func | 1579 | `(i32) -> (i32)` |
| `M9hU` | func | 1938 | `(i32 i32 i32 i32) -> (i32)` |
| `aK2I` | func | 3203 | `(i32 i32 i32) -> (i32)` |
| `RVw2` | func | 1410 | `(i32 i32) -> (i32)` |
| `CWPe` | func | 2436 | `(i32 i32) -> (i32)` |
| `Sp57` | func | 851 | `(i32 i32 i32) -> (i32)` |
| `ONZ5` | func | 2132 | `(i32 f64 f64 f64) -> (i32)` |
| `TBCt` | func | 663 | `(i32 i32 i32) -> (i32)` |
| `jGk0` | func | 1915 | `() -> (i32)` |
| `MdZT` | func | 3141 | `(i32 i32) -> (i32 i32)` |
| `yuxk` | func | 2882 | `(i32) -> (i32)` |
| `YZ6S` | func | 1732 | `(i32 i32 i32 i32) -> (i32)` |
| `LlG5` | func | 2056 | `(i32 i32 i32 i32) -> ()` |
| `btcw` | func | 1553 | `(i32 i32 i32 i32) -> ()` |
| `M8iM` | func | 2560 | `(i32 i32) -> ()` |
| `dMs5` | func | 2929 | `(i32) -> ()` |
| `e5u9` | func | 2089 | `(i32 i32) -> ()` |
| `iXy5` | func | 3131 | `(i32 i32 i32) -> (i32 i32)` |
| `w5Ky` | func | 3140 | `(i32 i32) -> (i32 i32)` |
| `clCS` | func | 3347 | `() -> (i32)` |
| `RZ0V` | func | 2513 | `(i32) -> (i32)` |
| `MiXY` | func | 3169 | `() -> (i32 i32)` |
| `Sa35` | func | 3139 | `(i32 i32) -> (i32 i32)` |
| `fCNR` | func | 1578 | `(i32 i32 i32 i32) -> (i32)` |
| `Dn7J` | func | 3131 | `(i32 i32 i32) -> (i32 i32)` |
| `DntV` | func | 2585 | `(i32) -> (i32)` |
| `WMVJ` | func | 3205 | `(i32 i32 i32) -> ()` |
| `urVL` | func | 2245 | `(i32 i32) -> (i32)` |
| `mKlq` | func | 2616 | `(i32) -> (i32)` |
| `mKRh` | func | 2471 | `(i32 i32) -> (i32)` |
| `t6EK` | func | 2617 | `(i32) -> (i32)` |
| `Pk4m` | func | 2608 | `(i32 i32) -> (i32)` |
| `cIA9` | func | 1374 | `(i32) -> (i32)` |
| `zVeN` | func | 1614 | `(i32 i32) -> (i32)` |
| `Z4br` | func | 2037 | `(i32) -> (i32)` |
| `EhPX` | func | 3318 | `() -> (f64)` |
| `GT5w` | func | 2700 | `() -> (i32)` |
| `moXS` | func | 2598 | `(i32) -> (i32)` |
| `memory` | memory | 0 | `` |
| `H2hj` | func | 1837 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `iEn2` | func | 1678 | `(i32 i32) -> (i32)` |
| `nOPp` | func | 836 | `(i32) -> (i32)` |
| `sreV` | func | 3233 | `() -> (i32)` |
| `lCgJ` | func | 1689 | `(i32 i32) -> ()` |
| `wk06` | func | 2054 | `(i32) -> (i32)` |
| `geHV` | func | 3274 | `() -> ()` |
| `ZXkP` | func | 2577 | `(i32) -> (i32)` |
| `Vy9b` | func | 1531 | `() -> (i32)` |
| `Sso6` | func | 1301 | `(i32 i32 i32 i32) -> (i32)` |
| `oM9w` | func | 779 | `(i32 i32) -> (i32)` |
| `mNUE` | func | 1573 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `ytYB` | func | 3080 | `() -> ()` |
| `ZYXM` | func | 1992 | `(i32) -> ()` |
| `htcd` | func | 3130 | `(i32 i32 i32) -> (i32 i32)` |
| `jtMX` | func | 3272 | `(i32) -> ()` |
| `vGq8` | func | 939 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `uB71` | func | 1856 | `(i32 i32) -> (i32)` |
| `geEu` | func | 2580 | `(i32) -> (i32)` |
| `SL7L` | func | 1843 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `Zo0o` | func | 1991 | `(i32) -> ()` |
| `u8qD` | func | 3152 | `(i32) -> (i32 i32)` |
| `D632` | func | 2576 | `(i32) -> (i32)` |
| `HO7F` | func | 2575 | `(i32) -> (f64)` |
| `aMqf` | func | 3143 | `(i32 i32) -> (i32 i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 840 · max 840
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2250104, `i32` = i32.const 2250676

## Functions

- 2,967 bodies · 4,069,311 code bytes · avg 1.3 KB
- instruction scan: 2,967 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 171 |
| <= 64 bytes | 115 |
| <= 128 bytes | 275 |
| <= 256 bytes | 389 |
| <= 512 bytes | 674 |
| <= 1024 bytes | 592 |
| <= 2048 bytes | 414 |
| <= 4096 bytes | 181 |
| <= 8192 bytes | 93 |
| <= 16384 bytes | 27 |
| > 16384 bytes | 36 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32) -> ()` | 218 | 200,777 | 91,008 | local.get×26752, i32.const×10169, i32.load×5791, local.set×4887, local.tee×4766 |
| 1 | `(i32 i32 i32 i32 i32) -> ()` | 150 | 122,738 | 58,940 | local.get×16686, i32.const×7065, i32.add×3411, local.set×3377, i32.load×3107 |
| 2 | `(i32 i32 i32 i32 i32 i32) -> ()` | 132 | 56,262 | 25,609 | local.get×7565, i32.const×3392, local.set×1402, i32.add×1294, i32.load×1168 |
| 3 | `(i32 i32) -> ()` | 105 | 36,397 | 16,578 | local.get×4596, i32.const×1664, local.set×977, local.tee×845, i32.load×782 |
| 4 | `(i32 i32 i32) -> ()` | 66 | 31,462 | 14,007 | local.get×4107, i32.const×1883, i32.load×880, i32.add×647, local.set×620 |
| 5 | `(i32 i32) -> ()` | 59 | 29,628 | 14,267 | local.get×4192, i32.const×1730, i32.load×1042, local.set×931, i32.add×815 |
| 6 | `(i32 i32) -> ()` | 90 | 26,038 | 12,563 | local.get×3702, i32.const×1379, local.set×779, i32.load×721, local.tee×698 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 135 | 32,562 | 16,141 | local.get×4566, i32.const×2205, local.set×1141, i32.add×1062, local.tee×800 |
| 8 | `(i32 i32 i32 i32 i32) -> ()` | 58 | 21,485 | 10,526 | local.get×2903, i32.const×1490, local.set×728, i32.add×591, local.tee×504 |
| 10 | `(i32 i32 i32 i32) -> ()` | 105 | 26,546 | 12,837 | local.get×3810, i32.const×1624, local.set×997, i32.add×682, i32.load×663 |
| 11 | `(i32 i32 i32 i32 i32 i32) -> ()` | 177 | 20,026 | 9,398 | local.get×2934, i32.const×1038, local.set×621, i32.add×458, i32.load×421 |
| 12 | `(i32 i32 i32 i32) -> ()` | 53 | 24,505 | 11,634 | local.get×3005, i32.const×1276, local.tee×731, end×592, i32.load×586 |
| 14 | `(i32 i32 i32 i32 i32 i32) -> ()` | 125 | 19,810 | 8,875 | local.get×2493, i32.const×1111, local.set×430, local.tee×385, i32.load×382 |
| 17 | `(i32 i32) -> ()` | 96 | 31,834 | 14,861 | local.get×4482, i32.const×1910, i32.add×763, local.set×692, i32.load×669 |
| 19 | `(i32 i32 i64 i32 i32 i64 i32 i32) -> ()` | 105 | 20,468 | 7,839 | local.get×2940, i32.const×890, i64.store×834, i32.store×615, i64.const×478 |
| 21 | `(i32 i32) -> ()` | 82 | 29,023 | 13,043 | local.get×4618, i32.const×1456, i32.store×702, i32.add×689, local.tee×645 |
| 23 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 64 | 24,289 | 11,198 | local.get×2682, i32.const×1711, local.set×821, end×663, block×465 |
| 25 | `(i32 i32 i32 i32 i32) -> ()` | 68 | 22,728 | 10,576 | local.get×3337, i32.const×1240, local.tee×731, i32.add×436, local.set×333 |
| 44 | `(i32 i32 i32 i32 i32) -> ()` | 83 | 27,436 | 12,890 | local.get×3670, i32.const×1868, i32.add×766, local.set×697, end×577 |
| 66 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 112 | 27,605 | 13,066 | local.get×3810, i32.const×1687, i32.load×857, local.set×788, i32.add×672 |
| 194 | `(i32 i32) -> ()` | 10 | 27,205 | 13,103 | local.get×4614, i32.load×1243, i32.const×1038, end×817, i32.add×750 |
| 214 | `(i32) -> ()` | 19 | 23,276 | 10,918 | local.get×2734, i32.load×1496, i32.const×1188, local.tee×1012, end×856 |
| 710 | `(i32 i32) -> ()` | 139 | 42,852 | 20,210 | local.get×5266, i32.const×2331, local.tee×1194, i32.add×1062, local.set×1004 |
| 711 | `(i32 i32 i32 i32) -> ()` | 54 | 21,809 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 1015 | `(i32 i32) -> (i32)` | 40 | 19,972 | 7,775 | local.get×2507, i32.const×849, i64.store×583, i32.load×394, local.set×357 |
| 1583 | `(i32 i32) -> (i32)` | 180 | 54,763 | 19,852 | local.get×6590, i32.const×2618, i64.store×1917, i64.const×1082, i64.load×1056 |
| 1982 | `(i32 i32) -> ()` | 111 | 39,589 | 17,528 | local.get×5140, i32.const×1646, local.set×891, local.tee×743, end×677 |
| 2624 | `(i32 i32) -> ()` | 398 | 142,401 | 64,327 | local.get×18492, i32.const×8026, local.set×3850, i32.load×3179, end×2818 |
| 2915 | `(i32 i32 i32 i32) -> ()` | 137 | 31,358 | 14,274 | local.get×4256, i32.const×1515, local.tee×741, local.set×690, br_if×629 |
| 2934 | `(i32 i32) -> ()` | 143 | 33,655 | 15,072 | local.get×4234, i32.const×1988, local.set×803, local.tee×732, i32.add×689 |

## Embedded strings (data segments)

60 printable strings ≥6 chars; largest:

```
beaver_lumberjackchefdwarf_blue_hairdwarf_braided_hairdwarf_childdwarf_forked_bearddwarf_ginger_bearddwarf_grey_bearddwarf_hair_bunsdwarf_purple_bearddwarf_red_hairdwarf_short_beardfarmerfarmer_gillfi
DEEJJJJJJHHHHEEDDDDDDHHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDEEDEEEEEEDEDEDHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
ZombieGrunt1ZombieGrunt2ZombieGrunt3ZombieHurt1ZombieHurt2ZombieHurt3ZombieHurt4bassbassattackbdbearRoar1bearRoar2bearRoar3bearRoar4bearRoar5beepbigDrumSwish1bigDrumSwish2bigDrumSwish3bowbucketEmpty1b
                                                                                                skin_1_0skin_1_1skin_1_2skin_1_3skin_1_4hat_0_0hat_0_1hat_0_2hat_0_3hat_0_4hat_0_5hat_0_6hat_13_0hat_13_
456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;
vs_mesh_00000020801vs_mesh_00000021801vs_mesh_00000040000vs_mesh_00000040011vs_mesh_00000040030vs_mesh_00000040042vs_mesh_00000040142vs_mesh_000000403c2vs_mesh_00000040801vs_mesh_00000041801vs_mesh_00
alliumaspen_saplingattached_banana_stemattached_banana_stem_wrapperattached_melon_stemattached_melon_stem_wrapperautumn_fernazure_bluetbanana_stembeetroot_plant_stage0beetroot_plant_stage1beetroot_pla
````````````````````````````````^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZYYYYYYYY
0x | SHADER_FLOAT32_ATOMICTEXTURE_FORMAT_16BIT_NORMTEXTURE_COMPRESSION_ASTC_HDRTEXTURE_ADAPTER_SPECIFIC_FORMAT_FEATURESPIPELINE_STATISTICS_QUERYTIMESTAMP_QUERY_INSIDE_ENCODERSTIMESTAMP_QUERY_INSIDE_PA
fs_mesh_0040d000053_l7fs_mesh_0040d040073_l3fs_mesh_0040d040073_l7fs_mesh_0040d0b0053_l1fs_mesh_0040d0b0073_l1fs_mesh_0042d040072_l3fs_mesh_0044b0b0073fs_mesh_0044d000053_l3fs_mesh_0044d000053_l7fs_me
ue:keydownkeyupmousedownmouseuptouchstarttouchendotherMouse1Mouse2Mouse3Alt+Left ClickF2F4F5F8F9Digit0Digit1Digit2Digit3Digit4Digit5Digit6Digit7Digit8Digit9KeyQKeyWKeyEKeyRKeyTKeyYKeyUKeyIKeyOKeyPKeyA
targetcolourmaxUpSpeedforceinclinationazimuthturbidityluminancemieCoefficientmieDirectionalGsunPositionvertexTintxCameraOffsetyCameraOffsetzCameraOffsetditheringinfiniteDistanceuseSunPositionrgba(tran
r8unormr8snormr8uintr8sintr16unormr16snormr16uintr16sintr16floatrg8unormrg8snormrg8uintrg8sintr32uintr32sintr32floatrg16unormrg16snormrg16uintrg16sintrg16floatrgba8unormrgba8unorm-srgbrgba8snormrgba8u
schema023canChangeblockReachezBridgingezBridgingGrowMsezToweringezToweringGrowMscrouchingSpeedwalkingSpeedrunningSpeedjumpAmountairJumpCountjumpHoldThrustbunnyhopMaxMultiplierskyBoxminChunkAddDistshow
Aspen LeavesAspen LogAspen SaplingAspen Wood PlanksBarkless Aspen LogBarkless Cedar LogBarkless Jungle LogBarkless Maple LogBarkless Pine LogBarkless Plum LogBlack PlanksBlue PlanksBookshelfBowl of Cr
Acacia LeavesAcacia LogAcacia SaplingAcacia Wood PlanksAlchemy TableBarkless Acacia LogBarkless Birch LogBarkless Dark Oak LogBarkless Elm LogBarkless Oak LogBarkless Spruce LogBirch LeavesBirch LogBi
maxTextureDimension1DmaxTextureDimension2DmaxTextureDimension3DmaxTextureArrayLayersmaxBindGroupsmaxBindGroupsPlusVertexBuffersmaxBindingsPerBindGroupmaxDynamicUniformBuffersPerPipelineLayoutmaxDynami
R8UnormR8SnormR8UintR8SintR16UintR16SintR16UnormR16SnormR16FloatRg8UnormRg8SnormRg8UintRg8SintR32UintR32SintR32FloatRg16UintRg16SintRg16UnormRg16SnormRg16FloatRgba8UnormRgba8UnormSrgbRgba8SnormRgba8Ui
standingsittingzombieglidingdrivingsleepingridingShearedSaddledskyblockHeldBossBoxBloxdBlockPersonLeaderboardParticleEmitterTier 1Tier 2Tier 3Tier 4Tier 5PlayerPigCowSheepHorseCamelIron Goofy GolemGol
flag testalpha * baseColor.abaseColor.abloxdSpGlintTier(v.vEnchantHsvAndTick.xyz)enchantmentColour(v.vEnchantHsvAndTick, v.vEnchantLocalPos, baseColor.rgb)bloxdSpEnchantSpeedbloxdSpLocalvec4f(v.vOverl
```

## Opcode histogram (aggregated)

| opcode | count |
|---|---:|
| `local.get` | 544,257 |
| `i32.const` | 228,612 |
| `local.tee` | 99,995 |
| `local.set` | 94,957 |
| `i32.load` | 93,832 |
| `i32.add` | 87,533 |
| `end` | 79,664 |
| `br_if` | 64,194 |
| `i32.store` | 47,139 |
| `block` | 37,474 |
| `i64.store` | 33,042 |
| `i64.const` | 32,296 |
| `if` | 30,482 |
| `call` | 30,335 |
| `i64.load` | 24,551 |
| `i32.sub` | 24,249 |
| `br` | 23,320 |
| `i32.eqz` | 19,178 |
| `select` | 16,787 |
| `i32.and` | 16,363 |
| `i32.shl` | 16,240 |
| `i32.ne` | 15,740 |
| `i32.load8_u` | 15,342 |
| `i32.eq` | 13,824 |
| `i32.store8` | 13,488 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 2,967/2,967 (degraded: 0)
