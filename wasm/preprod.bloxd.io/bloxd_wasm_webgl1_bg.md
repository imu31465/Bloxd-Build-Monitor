# WASM module: `bloxd_wasm_webgl1_bg`

> environment **preprod.bloxd.io** · build `bbb6l5.0244a119` · analyzed 2026-11-21T12:37:15+09:00
> source: https://preprod.bloxd.io/static/media/bloxd_wasm_webgl1_bg.08ef41c0dde7a04d377d.wasm
> 4,769,492 bytes (4.5 MB) · sha256 `3cb76bb92c5501eb…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,822 / 281 |
| Exports / imports | 154 / 281 |
| Code bytes (function bodies) | 3,937,025 (3.8 MB) |
| Total local variables | 29,991 |
| Instructions (scanable bodies) | 1,848,559 |
| Data segments / bytes | 3,471 / 788,708 |
| Element segments / entries | 1 / 728 |
| Memories / tables / globals | 1 / 1 / 3 |
| name-section module id | `1cd0b3dfff0a59b7.10478` |
| Sections | 12 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,465 | 172 |
| 2 | import | 3,374 | 281 |
| 3 | function | 2,868 | 2822 |
| 4 | table | 7 | 1 |
| 5 | memory | 5 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,233 | 154 |
| 9 | element | 1,463 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 3,942,204 | 2822 |
| 11 | data | 816,774 | 3471 |
| 0 | custom:name | 30 | — |

## Types

172 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32) -> ()` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

281 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `o1Ak.LxTm` | func | `(i32) -> (f64)` |
| 1 | `o1Ak.MKSU` | func | `() -> (i32)` |
| 2 | `o1Ak.S495` | func | `(i32 i32 i32) -> (i32)` |
| 3 | `o1Ak.i8yX` | func | `(i32) -> ()` |
| 4 | `o1Ak.Uu5F` | func | `(i32 i32) -> (i32)` |
| 5 | `o1Ak.dDNA` | func | `(i32) -> (i32)` |
| 6 | `o1Ak.VlpG` | func | `(i32 i32 i32) -> (i32)` |
| 7 | `o1Ak.af2U` | func | `(i32 i32 i32 i32) -> (i32)` |
| 8 | `o1Ak.ya40` | func | `(i32) -> (i32)` |
| 9 | `o1Ak.czaV` | func | `(i32 i32) -> ()` |
| 10 | `o1Ak.a38T` | func | `(i32 i32) -> ()` |
| 11 | `o1Ak.GgQS` | func | `(i32 i32 i32 i32) -> (i32)` |
| 12 | `o1Ak.Mm0q` | func | `(i32 i32) -> (i32)` |
| 13 | `o1Ak.DHvm` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 14 | `o1Ak.ub72` | func | `(i32) -> (i32)` |
| 15 | `o1Ak.GeMG` | func | `(i32 i32) -> (i32)` |
| 16 | `o1Ak.X9LT` | func | `(i32 i32) -> (i32)` |
| 17 | `o1Ak.WzuO` | func | `(i32 i32) -> ()` |
| 18 | `o1Ak.ktaW` | func | `(i32) -> (i32)` |
| 19 | `o1Ak.WIZw` | func | `(i32) -> (i32)` |
| 20 | `o1Ak.i9rT` | func | `(i32) -> (i32)` |
| 21 | `o1Ak.gSYh` | func | `(i32) -> ()` |
| 22 | `o1Ak.jAJp` | func | `(i32 i32) -> ()` |
| 23 | `o1Ak.KE0H` | func | `(i32 i32) -> ()` |
| 24 | `o1Ak.gNvH` | func | `(i32) -> (i32)` |
| 25 | `o1Ak.vRxD` | func | `(i32 i32) -> ()` |
| 26 | `o1Ak.zutf` | func | `(i32 i32) -> (i32)` |
| 27 | `o1Ak.fD2E` | func | `(i32 i32 i32 i32) -> ()` |
| 28 | `o1Ak.P3o1` | func | `(i32 i32) -> (i32)` |
| 29 | `o1Ak.mSz0` | func | `(i32 i32 i32) -> (i32)` |
| 30 | `o1Ak.RJPG` | func | `(i32) -> (i32)` |
| 31 | `o1Ak.tAaK` | func | `(i32 i32) -> ()` |
| 32 | `o1Ak.cQ1d` | func | `(i32) -> (i32)` |
| 33 | `o1Ak.JlA9` | func | `(i32) -> (i32)` |
| 34 | `o1Ak.lO3N` | func | `(i32 i32 i32) -> (i32)` |
| 35 | `o1Ak.FDox` | func | `(i32) -> (i32)` |
| 36 | `o1Ak.vmRM` | func | `(i32) -> (i32)` |
| 37 | `o1Ak.iyO1` | func | `(i32) -> (i32)` |
| 38 | `o1Ak.pcZA` | func | `(i32 i32) -> (i32)` |
| 39 | `o1Ak.WR8C` | func | `(i32 i32 i32 i32) -> ()` |
| 40 | `o1Ak.OUmq` | func | `(i32) -> (i32)` |
| 41 | `o1Ak.ibZ1` | func | `(i32 i32 i32 i32) -> ()` |
| 42 | `o1Ak.Ktev` | func | `() -> (f64)` |
| 43 | `o1Ak.A5r7` | func | `(i32) -> (i32)` |
| 44 | `o1Ak.F21o` | func | `(i32 i32 i32 i32) -> ()` |
| 45 | `o1Ak.Jk5k` | func | `(i32 i32 i32) -> (i32)` |
| 46 | `o1Ak.jADq` | func | `(i32 f64 f64 f64 f64) -> ()` |
| 47 | `o1Ak.SatX` | func | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64) -> ()` |
| 48 | `o1Ak.IGpE` | func | `(i32 i32 i32) -> ()` |
| 49 | `o1Ak.tMY1` | func | `(i32 i32 i32) -> ()` |
| 50 | `o1Ak.sbQJ` | func | `(i32 i32 i32) -> ()` |
| 51 | `o1Ak.cSvD` | func | `(i32 i32) -> ()` |
| 52 | `o1Ak.zvwd` | func | `(i32 i32) -> ()` |
| 53 | `o1Ak.eKdn` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 54 | `o1Ak.osjY` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 55 | `o1Ak.ufTe` | func | `(i32 f32 f32) -> ()` |
| 56 | `o1Ak.gpxY` | func | `(i32 f32 f32) -> ()` |
| 57 | `o1Ak.l5ul` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 58 | `o1Ak.BJiu` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 59 | `o1Ak.blTk` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 60 | `o1Ak.qt9f` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 61 | `o1Ak.yRNd` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 62 | `o1Ak.D21X` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 63 | `o1Ak.TVyD` | func | `(i32 i32 i32 i32) -> ()` |
| 64 | `o1Ak.btMH` | func | `(i32 i32 i32 i32) -> ()` |
| 65 | `o1Ak.T9T2` | func | `(i32 i32 i32) -> ()` |
| 66 | `o1Ak.IiWR` | func | `(i32 i32 i32) -> ()` |
| 67 | `o1Ak.Bo33` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 68 | `o1Ak.RyQ3` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 69 | `o1Ak.BkpG` | func | `(i32) -> (i32)` |
| 70 | `o1Ak.xvaJ` | func | `(i32) -> ()` |
| 71 | `o1Ak.VpzC` | func | `(i32) -> (i32)` |
| 72 | `o1Ak.OtEl` | func | `(i32 i32) -> (i32)` |
| 73 | `o1Ak.mXbQ` | func | `(i32 i32 i32) -> (i32)` |
| 74 | `o1Ak.MtWG` | func | `(i32 i32 i32) -> ()` |
| 75 | `o1Ak.n5pY` | func | `(i32 i32 i32 i32) -> (i32)` |
| 76 | `o1Ak.ZPpT` | func | `() -> (f64)` |
| 77 | `o1Ak.XSG6` | func | `() -> (f64)` |
| 78 | `o1Ak.UKKt` | func | `(i32 i32) -> ()` |
| 79 | `o1Ak.rL5Z` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 80 | `o1Ak.lGhS` | func | `(i32 i32 i32) -> ()` |
| 81 | `o1Ak.F64t` | func | `(i32 i32 i32) -> ()` |
| 82 | `o1Ak.kuHa` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 83 | `o1Ak.T1AG` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 84 | `o1Ak.hxEj` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 85 | `o1Ak.ELev` | func | `(i32 i32) -> ()` |
| 86 | `o1Ak.lBl2` | func | `(i32 i32) -> ()` |
| 87 | `o1Ak.j2uG` | func | `(i32) -> (i32)` |
| 88 | `o1Ak.kKTB` | func | `(i32 i32) -> ()` |
| 89 | `o1Ak.u8d0` | func | `(i32 i32) -> ()` |
| 90 | `o1Ak.Q6TX` | func | `(i32 i32 i32) -> ()` |
| 91 | `o1Ak.LkNz` | func | `(i32 i32 i32) -> ()` |
| 92 | `o1Ak.UwHP` | func | `(i32) -> (i32)` |
| 93 | `o1Ak.G2iL` | func | `(i32) -> (i32)` |
| 94 | `o1Ak.YrMm` | func | `(i32 i32) -> (i32)` |
| 95 | `o1Ak.WA3b` | func | `(i32 i32) -> (i32)` |
| 96 | `o1Ak.yXtC` | func | `(i32 i32) -> ()` |
| 97 | `o1Ak.nbLc` | func | `(i32 i32) -> ()` |
| 98 | `o1Ak.d8eo` | func | `(i32 i32 i32) -> ()` |
| 99 | `o1Ak.U9Ej` | func | `(i32 i32 i32) -> ()` |
| 100 | `o1Ak.Lt7K` | func | `(i32 i32 i32 i32) -> ()` |
| 101 | `o1Ak.R05s` | func | `(i32 i32 i32 i32) -> ()` |
| 102 | `o1Ak.m07W` | func | `(i32 i32 f32) -> ()` |
| 103 | `o1Ak.HdMY` | func | `(i32 i32 f32) -> ()` |
| 104 | `o1Ak.F8Sy` | func | `(i32 i32 i32) -> ()` |
| 105 | `o1Ak.y2ax` | func | `(i32 i32 i32) -> ()` |
| 106 | `o1Ak.Szfl` | func | `(i32 i32 i32) -> ()` |
| 107 | `o1Ak.bUlY` | func | `(i32 i32 f32 f32) -> ()` |
| 108 | `o1Ak.FSuB` | func | `(i32 i32 f32 f32) -> ()` |
| 109 | `o1Ak.LDpe` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 110 | `o1Ak.beA7` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 111 | `o1Ak.piWj` | func | `(i32 i32) -> ()` |
| 112 | `o1Ak.cmHT` | func | `(i32 i32) -> ()` |
| 113 | `o1Ak.bw2r` | func | `(i32 i32) -> ()` |
| 114 | `o1Ak.vn2n` | func | `(i32 i32) -> ()` |
| 115 | `o1Ak.zsK6` | func | `(i32) -> (i32)` |
| 116 | `o1Ak.isDt` | func | `(i32) -> (i32)` |
| 117 | `o1Ak.rgHx` | func | `(i32) -> (i32)` |
| 118 | `o1Ak.xLlc` | func | `(i32) -> (i32)` |
| 119 | `o1Ak.bNy7` | func | `(i32 i32) -> ()` |
| 120 | `o1Ak.BMHe` | func | `(i32 i32) -> ()` |
| 121 | `o1Ak.SWq3` | func | `(i32 i32) -> ()` |
| 122 | `o1Ak.IHeg` | func | `(i32 i32) -> ()` |
| 123 | `o1Ak.m3py` | func | `(i32 i32) -> ()` |
| 124 | `o1Ak.G1xN` | func | `(i32 i32) -> ()` |
| 125 | `o1Ak.P835` | func | `(i32 i32) -> (i32)` |
| 126 | `o1Ak.Mii3` | func | `(i32 i32) -> (i32)` |
| 127 | `o1Ak.udgx` | func | `(i32 i32 i32 i32) -> ()` |
| 128 | `o1Ak.nBOO` | func | `(i32 i32 i32 i32) -> ()` |
| 129 | `o1Ak.e3AZ` | func | `(i32 i32) -> ()` |
| 130 | `o1Ak.keeV` | func | `(i32 i32) -> ()` |
| 131 | `o1Ak.HJrT` | func | `(i32) -> (i32)` |
| 132 | `o1Ak.lh49` | func | `(i32 i32) -> ()` |
| 133 | `o1Ak.jeDD` | func | `(i32 i32) -> ()` |
| 134 | `o1Ak.hoPR` | func | `(i32 i32 i32) -> ()` |
| 135 | `o1Ak.FMR4` | func | `(i32 i32 i32) -> ()` |
| 136 | `o1Ak.s40B` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 137 | `o1Ak.LsOX` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 138 | `o1Ak.HFCN` | func | `(i32 i32) -> ()` |
| 139 | `o1Ak.SGqr` | func | `(i32 i32 i32) -> ()` |
| 140 | `o1Ak.J0jm` | func | `(i32 i32 i32) -> ()` |
| 141 | `o1Ak.WDKU` | func | `(i32 i32 i32 i32) -> (i32)` |
| 142 | `o1Ak.mbgJ` | func | `(i32 i32 i32 i32) -> (i32)` |
| 143 | `o1Ak.Qxqs` | func | `(i32 i32 i32) -> ()` |
| 144 | `o1Ak.Mxah` | func | `(i32 i32 i32) -> ()` |
| 145 | `o1Ak.zRBk` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 146 | `o1Ak.ersW` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 147 | `o1Ak.gtAu` | func | `(i32 i32 i32) -> (i32)` |
| 148 | `o1Ak.SnI5` | func | `(i32 i32 i32) -> (i32)` |
| 149 | `o1Ak.YWvX` | func | `(i32 i32 i32) -> (i32)` |
| 150 | `o1Ak.mGuY` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 151 | `o1Ak.HHl8` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 152 | `o1Ak.im2o` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 153 | `o1Ak.ybY5` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 154 | `o1Ak.Om4X` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 155 | `o1Ak.jxUN` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 156 | `o1Ak.S0PX` | func | `(i32) -> (i32)` |
| 157 | `o1Ak.XL5s` | func | `(i32) -> (i32)` |
| 158 | `o1Ak.R93u` | func | `(i32) -> (i32)` |
| 159 | `o1Ak.PrdC` | func | `(i32) -> (i32)` |
| 160 | `o1Ak.sg4Z` | func | `() -> (i32)` |
| 161 | `o1Ak.qT15` | func | `() -> (i32)` |
| 162 | `o1Ak.cajy` | func | `() -> (i32)` |
| 163 | `o1Ak.GGdZ` | func | `() -> (i32)` |
| 164 | `o1Ak.FgLM` | func | `(i32 i32) -> (i32)` |
| 165 | `o1Ak.UUqi` | func | `(i32) -> ()` |
| 166 | `o1Ak.ygv9` | func | `(i32 i32) -> (i32)` |
| 167 | `o1Ak.xVQE` | func | `(i32) -> (i32)` |
| 168 | `o1Ak.AkQR` | func | `(i32) -> (i32)` |
| 169 | `o1Ak.tHQq` | func | `(i32) -> (i32)` |
| 170 | `o1Ak.LSMN` | func | `(i32) -> ()` |
| 171 | `o1Ak.WhjG` | func | `(i32 i32 i32) -> (i32)` |
| 172 | `o1Ak.Aoz8` | func | `(i32) -> (i32)` |
| 173 | `o1Ak.t70W` | func | `(i32) -> (i32)` |
| 174 | `o1Ak.c68b` | func | `(i32 i32) -> (i32)` |
| 175 | `o1Ak.Pxlk` | func | `(i32 i32 i32) -> (i32)` |
| 176 | `o1Ak.SCxS` | func | `(i32 i32 i32) -> (i32)` |
| 177 | `o1Ak.lqci` | func | `(i32) -> (i32)` |
| 178 | `o1Ak.yyyi` | func | `(i32) -> (i32)` |
| 179 | `o1Ak.zePA` | func | `(i32) -> (i32)` |
| 180 | `o1Ak.hKso` | func | `(i32 i32 i32 i32) -> ()` |
| 181 | `o1Ak.wjVD` | func | `(i32 i32 i32 i32) -> ()` |
| 182 | `o1Ak.dN1h` | func | `(i32 i32) -> ()` |
| 183 | `o1Ak.doYc` | func | `(i32 i32 i32) -> ()` |
| 184 | `o1Ak.EYTW` | func | `(i32 i32) -> ()` |
| 185 | `o1Ak.X03P` | func | `(i32 i32 i32) -> ()` |
| 186 | `o1Ak.cf55` | func | `(i32 i32) -> ()` |
| 187 | `o1Ak.PNLj` | func | `(i32 i32) -> ()` |
| 188 | `o1Ak.jxwD` | func | `(i32) -> (i32)` |
| 189 | `o1Ak.HlWV` | func | `(i32 i32) -> (i32)` |
| 190 | `o1Ak.XZoC` | func | `(i32) -> ()` |
| 191 | `o1Ak.cMAd` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 192 | `o1Ak.WhIX` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 193 | `o1Ak.SUzh` | func | `(i32 i32) -> ()` |
| 194 | `o1Ak.cPOF` | func | `(i32 i32) -> ()` |
| 195 | `o1Ak.HqdV` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 196 | `o1Ak.F2Kz` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 197 | `o1Ak.YV4E` | func | `(i32 f32) -> ()` |
| 198 | `o1Ak.Ka4J` | func | `(i32 f32) -> ()` |
| 199 | `o1Ak.pLNx` | func | `(i32 i32) -> ()` |
| 200 | `o1Ak.oqly` | func | `(i32 i32) -> ()` |
| 201 | `o1Ak.eqiT` | func | `(i32) -> (i32)` |
| 202 | `o1Ak.kMSu` | func | `(i32) -> (i32)` |
| 203 | `o1Ak.hSt3` | func | `(i32) -> (i32)` |
| 204 | `o1Ak.jmix` | func | `(i32) -> (i32)` |
| 205 | `o1Ak.wltc` | func | `(i32 i32 i32) -> ()` |
| 206 | `o1Ak.wMFy` | func | `(i32 i32 i32) -> ()` |
| 207 | `o1Ak.YGgY` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 208 | `o1Ak.oUzz` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 209 | `o1Ak.Uz8R` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 210 | `o1Ak.CwKT` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 211 | `o1Ak.e4Gf` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 212 | `o1Ak.SBHS` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 213 | `o1Ak.KQrR` | func | `(i32 i32) -> ()` |
| 214 | `o1Ak.myyp` | func | `(i32 i32) -> ()` |
| 215 | `o1Ak.gzsp` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 216 | `o1Ak.bhtm` | func | `(i32 i32 i32 f32) -> ()` |
| 217 | `o1Ak.lvxC` | func | `(i32 i32 i32 f32) -> ()` |
| 218 | `o1Ak.MzAp` | func | `(i32) -> (i32)` |
| 219 | `o1Ak.EQNN` | func | `(i32) -> (i32)` |
| 220 | `o1Ak.V1Yc` | func | `(i32 i32) -> ()` |
| 221 | `o1Ak.iRHP` | func | `(i32 i32) -> ()` |
| 222 | `o1Ak.LNyG` | func | `(i32 i32 i32) -> (i32)` |
| 223 | `o1Ak.MPYm` | func | `(i32) -> (i32)` |
| 224 | `o1Ak.UZJ9` | func | `(i32) -> (i32)` |
| 225 | `o1Ak.S1Yi` | func | `(i32 i32) -> ()` |
| 226 | `o1Ak.lnT5` | func | `(i32 i32 i32) -> (i32)` |
| 227 | `o1Ak.ixrl` | func | `(i32 i32) -> ()` |
| 228 | `o1Ak.HTVM` | func | `(i32 i32) -> ()` |
| 229 | `o1Ak.G8ME` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 230 | `o1Ak.LcMU` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 231 | `o1Ak.gAs4` | func | `(i32 i32 i32) -> ()` |
| 232 | `o1Ak.pNv6` | func | `(i32 i32 i32) -> ()` |
| 233 | `o1Ak.JdEC` | func | `(i32 i32) -> ()` |
| 234 | `o1Ak.SW06` | func | `(i32 i32) -> ()` |
| 235 | `o1Ak.fs51` | func | `(i32 i32) -> ()` |
| 236 | `o1Ak.LxD7` | func | `(i32 i32) -> ()` |
| 237 | `o1Ak.hkcK` | func | `(i32 i32) -> ()` |
| 238 | `o1Ak.k1dQ` | func | `(i32 i32) -> ()` |
| 239 | `o1Ak.cFFz` | func | `(i32 f32 f32) -> ()` |
| 240 | `o1Ak.mt84` | func | `(i32 f32 f32) -> ()` |
| 241 | `o1Ak.Sir8` | func | `(i32 i32 i32 i32) -> ()` |
| 242 | `o1Ak.UvnR` | func | `(i32 i32 i32 i32) -> ()` |
| 243 | `o1Ak.Po5n` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 244 | `o1Ak.QGrF` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 245 | `o1Ak.RXh6` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 246 | `o1Ak.Etix` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 247 | `o1Ak.yHSp` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 248 | `o1Ak.xy0T` | func | `(i32 i32 i32 i32) -> ()` |
| 249 | `o1Ak.Suqq` | func | `(i32 i32 i32 i32) -> ()` |
| 250 | `o1Ak.wXsK` | func | `(i32) -> ()` |
| 251 | `o1Ak.l8o2` | func | `(i32 i32) -> ()` |
| 252 | `o1Ak.mB6P` | func | `(i32 i32) -> ()` |
| 253 | `o1Ak.YYeK` | func | `(i32 i32) -> ()` |
| 254 | `o1Ak.l1Ep` | func | `(i32 i32) -> ()` |
| 255 | `o1Ak.O4Fz` | func | `(i32 i32) -> ()` |
| 256 | `o1Ak.jUZq` | func | `(i32 i32) -> ()` |
| 257 | `o1Ak.qs03` | func | `(i32 i32) -> ()` |
| 258 | `o1Ak.vb5s` | func | `(i32 i32) -> ()` |
| 259 | `o1Ak.A992` | func | `(i32) -> (i32)` |
| 260 | `o1Ak.LpKI` | func | `(i32) -> (i32)` |
| 261 | `o1Ak.Z28e` | func | `(i32) -> (i32)` |
| 262 | `o1Ak.W1XI` | func | `(i32) -> (i32)` |
| 263 | `o1Ak.mvkY` | func | `(i32 i32 i32 i32) -> ()` |
| 264 | `o1Ak.oWHl` | func | `(i32) -> ()` |
| 265 | `o1Ak.SnbW` | func | `(i32) -> (i32)` |
| 266 | `o1Ak.XvXr` | func | `(i32) -> (i32)` |
| 267 | `o1Ak.kKqW` | func | `(i32) -> (i32)` |
| 268 | `o1Ak.rEFN` | func | `(i32) -> (i32)` |
| 269 | `o1Ak.s1JR` | func | `(i32 i32) -> ()` |
| 270 | `o1Ak.v7o0` | func | `(i32) -> ()` |
| 271 | `o1Ak.EAw9` | func | `(i32 i32) -> ()` |
| 272 | `o1Ak.eYg3` | func | `(i32) -> (i32)` |
| 273 | `o1Ak.dYXc` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 274 | `o1Ak.QJDR` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 275 | `o1Ak.Y2oN` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 276 | `o1Ak.rFW0` | func | `(i32 i32) -> (i32)` |
| 277 | `o1Ak.nP6B` | func | `(i32 i32) -> (i32)` |
| 278 | `o1Ak.tNWg` | func | `(i32 i32) -> (i32)` |
| 279 | `o1Ak.zO4w` | func | `(i32 i32) -> (i32)` |
| 280 | `o1Ak.TfA5` | func | `(i32 i32) -> (i32)` |

## Exports

154 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `lRQl` | global | 2 | `` |
| `CcO8` | func | 1204 | `(i32 i32) -> (i32)` |
| `RZc4` | func | 2213 | `(i32 i32) -> ()` |
| `Xyvs` | func | 730 | `(i32 i32 i32) -> (i32)` |
| `fpca` | func | 1345 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `D3Es` | func | 710 | `(i32) -> (i32)` |
| `xBYp` | func | 1176 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `Br5J` | func | 2407 | `(i32) -> (i32)` |
| `jnVy` | func | 2902 | `(i32 i32 i32) -> (i32 i32)` |
| `U9SM` | func | 3092 | `() -> (i32)` |
| `JBj6` | func | 1139 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `wrQv` | func | 2852 | `() -> ()` |
| `XCgN` | func | 1697 | `(i32 i32) -> (i32)` |
| `BHmj` | func | 2673 | `(i32) -> (i32)` |
| `Jttn` | func | 2387 | `(i32) -> (f64)` |
| `dFIP` | func | 1787 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `TrrZ` | func | 2373 | `(i32 i32) -> ()` |
| `lVGF` | func | 2306 | `(i32 i32 i32 i32) -> (i32)` |
| `JEHu` | func | 2911 | `(i32 i32) -> (i32 i32)` |
| `Okbt` | func | 2262 | `(i32 i32) -> (i32)` |
| `c5AF` | func | 2963 | `(i32 i32) -> ()` |
| `fjga` | func | 2397 | `(i32) -> (i32)` |
| `LVQM` | func | 1392 | `(i32 i32 i32) -> ()` |
| `bahr` | func | 643 | `(i32 i32) -> (i32)` |
| `un6U` | func | 2901 | `(i32 i32 i32) -> (i32 i32)` |
| `VYtq` | func | 2931 | `() -> (i32 i32)` |
| `iLv2` | func | 2921 | `(i32) -> (i32 i32)` |
| `tIei` | func | 2390 | `(i32) -> (i32)` |
| `WSig` | func | 2388 | `(i32) -> (i32)` |
| `tOQH` | func | 2734 | `(i32) -> (i32)` |
| `GkP2` | func | 1393 | `() -> (i32)` |
| `sZCw` | func | 544 | `(i32 i32 i32) -> (i32)` |
| `WdOd` | func | 1440 | `(i32 i32) -> (i32)` |
| `jhma` | func | 3070 | `(i32) -> ()` |
| `rsx4` | func | 1800 | `(i32 i32) -> ()` |
| `Bc0n` | func | 2962 | `(i32 i32 i32) -> ()` |
| `r2Xl` | func | 1434 | `(i32 i32 i32 i32) -> (i32)` |
| `MZiA` | func | 1462 | `(i32 i32) -> (i32)` |
| `pFf3` | func | 2435 | `() -> (i32)` |
| `FuAk` | func | 2135 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `XLhV` | func | 2910 | `(i32 i32) -> (i32 i32)` |
| `GDPJ` | func | 2303 | `(i32 f64) -> (i32)` |
| `Uqkp` | func | 2464 | `(i32 i32) -> ()` |
| `mkzC` | func | 1941 | `(i32 f64) -> (i32)` |
| `XCpG` | func | 655 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `hFXz` | func | 1225 | `(i32 i32 i32) -> (i32)` |
| `UIsq` | func | 887 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `VJOo` | func | 1879 | `(i32) -> (i32)` |
| `czvh` | func | 1388 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `xWzr` | func | 2918 | `(i32) -> (i32 i32)` |
| `Zz7S` | func | 714 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `qAnP` | func | 2404 | `(i32 i32) -> ()` |
| `C0Wc` | func | 2395 | `(i32) -> (i32)` |
| `MGrj` | func | 1258 | `(i32 i32) -> (i32)` |
| `VKHS` | func | 2389 | `(i32) -> (i32)` |
| `FFjc` | func | 1643 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `OWxw` | func | 1815 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `xGEG` | func | 2410 | `(i32) -> (i32)` |
| `memory` | memory | 0 | `` |
| `FNTy` | func | 1414 | `(i32 i32 i32 i32) -> ()` |
| `hZTj` | func | 2394 | `(i32) -> ()` |
| `vn17` | func | 2408 | `(i32) -> (i32)` |
| `utUE` | func | 2426 | `(i32) -> (i32)` |
| `euOe` | func | 1957 | `(i32 f64 f64 f64) -> (i32)` |
| `ruuu` | func | 2872 | `(i32 i32) -> (i32)` |
| `yARg` | func | 2417 | `(i32) -> (i32)` |
| `bhJC` | func | 2409 | `(i32 i32) -> ()` |
| `pIRz` | func | 2293 | `(i32 i32) -> (i32)` |
| `N1Ll` | func | 965 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `y1Cg` | func | 2919 | `(i32) -> (i32 i32)` |
| `xOG8` | func | 2391 | `(i32) -> (i32)` |
| `dIvB` | func | 3024 | `(i32) -> ()` |
| `VF5N` | func | 2419 | `(i32 i32) -> (i32)` |
| `SwdE` | func | 1774 | `(i32 i32 i32 i32) -> (i32)` |
| `ho0h` | func | 1881 | `(i32 i32 i32 i32) -> ()` |
| `a2i2` | func | 1680 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `oHzN` | func | 2920 | `(i32) -> (i32 i32)` |
| `fFVV` | func | 2374 | `(i32) -> (i32)` |
| `vdwI` | func | 2991 | `() -> (i32)` |
| `Uhjm` | func | 1466 | `(i32 f64) -> (f64)` |
| `u6im` | func | 1540 | `(i32 i32) -> ()` |
| `OhvV` | func | 2348 | `(i32) -> (i32)` |
| `Eqk9` | func | 1916 | `(i32 i32) -> ()` |
| `EsDx` | global | 1 | `` |
| `kuFT` | func | 2906 | `(i32 i32) -> (i32 i32)` |
| `TtpR` | func | 2261 | `(i32 i32) -> (i32)` |
| `hB9V` | func | 2852 | `() -> ()` |
| `dk6v` | func | 2680 | `(i32) -> (i32)` |
| `jh1s` | func | 1249 | `(i32) -> (i32)` |
| `CJDV` | func | 2701 | `(i32) -> (i32)` |
| `GJtk` | func | 1183 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `gGXy` | func | 2712 | `(i32) -> ()` |
| `xDW0` | func | 1529 | `(i32 i32) -> (i32)` |
| `arsj` | func | 2418 | `(i32 i32) -> (i32)` |
| `lZxM` | func | 2883 | `(i32 i32) -> ()` |
| `dUE9` | func | 1795 | `(i32 i32 f64 f64 f64) -> ()` |
| `G6F0` | func | 2427 | `(i32) -> (i32)` |
| `FSKI` | func | 1469 | `(i32) -> (i32)` |
| `RchM` | func | 2331 | `(i32) -> (i32)` |
| `mnC0` | func | 1541 | `(i32 i32) -> ()` |
| `uLDR` | func | 2907 | `(i32 i32) -> (i32 i32)` |
| `P3lG` | func | 3069 | `(i32) -> (i32)` |
| `sniL` | func | 2082 | `(i32 i32) -> (i32)` |
| `zHGa` | func | 707 | `(i32 i32 i32 i32) -> (i32)` |
| `ATwr` | func | 1426 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `cBeS` | func | 877 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `kwoP` | func | 1346 | `(i32 f64 f64) -> (i32)` |
| `E249` | func | 2260 | `(i32 i32) -> (i32)` |
| `oGMd` | func | 1686 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `pANt` | func | 2953 | `(i32 i32 i32 i32) -> ()` |
| `p1I7` | func | 1364 | `(i32 i32) -> (i32)` |
| `RDKE` | func | 2393 | `(i32) -> (i32)` |
| `c1DO` | func | 2877 | `(i32 i32 i32 i32) -> (i32)` |
| `matJ` | func | 1463 | `(i32 i32) -> (i32)` |
| `Mo4M` | func | 2396 | `(i32) -> (i32)` |
| `QYFh` | func | 2370 | `(i32 i32 i32 i32 i32 i32 f64 i32) -> (i32)` |
| `hoAt` | func | 1665 | `(i32) -> (i32)` |
| `T9TW` | func | 2081 | `(i32 i32) -> (i32)` |
| `EKmt` | func | 2114 | `(i32 i32) -> (i32)` |
| `lXO4` | func | 1177 | `(i32 i32 i32 i32) -> (i32)` |
| `MKpj` | func | 2184 | `(i32 i32) -> ()` |
| `cRtf` | func | 2932 | `() -> (i32 i32)` |
| `K6rh` | func | 1451 | `(i32 i32) -> (i32)` |
| `IwRp` | func | 1287 | `(i32) -> ()` |
| `k6lr` | func | 1076 | `(i32 i32) -> (i32)` |
| `zx2S` | func | 1756 | `() -> (i32)` |
| `ntaH` | func | 2909 | `(i32 i32) -> (i32 i32)` |
| `AI0h` | func | 2259 | `(i32 i32) -> (i32)` |
| `oCHx` | func | 2428 | `(i32) -> (i32)` |
| `oL1H` | func | 2908 | `(i32 i32) -> (i32 i32)` |
| `yDPW` | func | 1579 | `(i32 i32 i32 i32) -> (i32)` |
| `BJap` | func | 2506 | `() -> (i32)` |
| `gCWv` | func | 1499 | `(i32 i32 i32 i32) -> (i32)` |
| `dnRw` | func | 1823 | `(i32) -> ()` |
| `onx1` | func | 1430 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `HS6Y` | func | 1480 | `(i32 i32 i32) -> (i32)` |
| `Yjwx` | func | 2692 | `(i32) -> (i32)` |
| `tkCe` | func | 1824 | `(i32) -> ()` |
| `jo52` | func | 1705 | `(i32) -> (i32)` |
| `uszH` | func | 860 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `wsFB` | func | 1545 | `(i32 f64 f64 f64) -> (i32)` |
| `iH45` | func | 3093 | `() -> (i32)` |
| `hnfl` | func | 1809 | `(i32 i32) -> (i32)` |
| `Z9GH` | func | 679 | `(i32 i32) -> (i32)` |
| `oWyu` | func | 3065 | `() -> (f64)` |
| `A8bW` | func | 2061 | `(i32 i32) -> ()` |
| `aZBD` | func | 3018 | `(i32 i32 i32) -> ()` |
| `Tmhp` | func | 2912 | `(i32 i32) -> (i32 i32)` |
| `yJuw` | func | 1299 | `(i32 i32 i32) -> (i32)` |
| `uTpg` | func | 2505 | `(i32 i32) -> ()` |
| `bwI9` | func | 2392 | `(i32) -> (i32)` |
| `CHN8` | func | 780 | `(i32 i32) -> (i32)` |
| `VKhQ` | func | 1078 | `(i32 i32) -> (i32)` |
| `TZbx` | func | 1077 | `(i32 i32) -> ()` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- memory 0: min 31 pages · max 14,648 · shared=False
- table 0: funcref · min 729 · max 729
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 1998896, `i32` = i32.const 1999436

## Functions

- 2,822 bodies · 3,937,025 code bytes · avg 1.4 KB
- instruction scan: 2,822 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 155 |
| <= 64 bytes | 106 |
| <= 128 bytes | 244 |
| <= 256 bytes | 364 |
| <= 512 bytes | 652 |
| <= 1024 bytes | 560 |
| <= 2048 bytes | 408 |
| <= 4096 bytes | 182 |
| <= 8192 bytes | 88 |
| <= 16384 bytes | 30 |
| > 16384 bytes | 33 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32) -> ()` | 212 | 192,973 | 87,565 | local.get×25662, i32.const×9842, i32.load×5578, local.set×4652, local.tee×4610 |
| 1 | `(i32 i32 i32 i32 i32) -> ()` | 144 | 112,608 | 54,587 | local.get×15185, i32.const×6539, i32.add×3183, local.set×3072, i32.load×2940 |
| 2 | `(i32 i32 i32 i32 i32 i32) -> ()` | 131 | 46,363 | 21,331 | local.get×6208, i32.const×2820, local.set×1235, i32.add×1130, i32.load×1016 |
| 3 | `(i32 i32) -> ()` | 123 | 48,619 | 22,511 | local.get×6329, i32.const×2250, local.set×1325, local.tee×1179, i32.load×1035 |
| 4 | `(i32 i32) -> ()` | 59 | 29,623 | 14,267 | local.get×4192, i32.const×1730, i32.load×1042, local.set×931, i32.add×815 |
| 5 | `(i32 i32) -> ()` | 90 | 26,104 | 12,597 | local.get×3709, i32.const×1386, local.set×779, i32.load×721, local.tee×701 |
| 6 | `(i32 i32 i32 i32 i32) -> ()` | 134 | 32,140 | 15,936 | local.get×4504, i32.const×2183, local.set×1128, i32.add×1053, local.tee×790 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 58 | 21,484 | 10,525 | local.get×2903, i32.const×1490, local.set×728, i32.add×591, local.tee×504 |
| 8 | `(i32 i32) -> ()` | 93 | 19,080 | 9,200 | local.get×2643, i32.const×1025, local.tee×571, local.set×554, i32.load×531 |
| 9 | `(i32 i32 i32 i32) -> ()` | 105 | 26,545 | 12,837 | local.get×3810, i32.const×1624, local.set×997, i32.add×682, i32.load×663 |
| 10 | `(i32 i32 i32) -> (i32)` | 74 | 22,573 | 10,782 | local.get×2885, i32.const×1290, i32.load×750, local.set×499, i32.add×477 |
| 11 | `(i32 i32 i32 i32 i32 i32) -> ()` | 130 | 20,622 | 9,288 | local.get×2540, i32.const×1209, local.set×548, local.tee×388, end×388 |
| 12 | `(i32 i32 i32 i32) -> ()` | 53 | 24,505 | 11,634 | local.get×3005, i32.const×1276, local.tee×731, end×592, i32.load×586 |
| 13 | `(i32 i32 i32) -> (i32)` | 77 | 18,923 | 8,934 | local.get×2485, i32.const×1224, i32.load×559, i32.add×543, local.set×525 |
| 16 | `(i32 i32 i32) -> ()` | 58 | 17,252 | 7,872 | local.get×2201, i32.const×1034, i32.load×488, i32.add×396, local.tee×350 |
| 18 | `(i32 i32) -> ()` | 95 | 28,847 | 13,556 | local.get×4112, i32.const×1781, i32.add×687, i32.load×632, local.set×632 |
| 22 | `(i32 i32) -> ()` | 82 | 29,008 | 13,035 | local.get×4617, i32.const×1454, i32.store×702, i32.add×688, local.tee×644 |
| 23 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 64 | 24,279 | 11,198 | local.get×2682, i32.const×1711, local.set×821, end×663, block×465 |
| 27 | `(i32 i32 i32 i32 i32) -> ()` | 68 | 21,799 | 10,079 | local.get×3118, i32.const×1240, local.tee×623, i32.add×436, i32.load×331 |
| 32 | `(i32 i32 i32 i32 i32) -> ()` | 65 | 18,015 | 8,704 | local.get×2378, i32.const×1095, local.set×628, local.tee×459, i32.add×442 |
| 61 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 99 | 32,153 | 15,014 | local.get×4317, i32.const×1963, i32.load×986, local.set×902, i32.add×812 |
| 188 | `(i32 i32) -> ()` | 10 | 26,844 | 12,930 | local.get×4543, i32.load×1219, i32.const×1046, end×803, i32.add×744 |
| 217 | `(i32) -> ()` | 19 | 23,160 | 10,851 | local.get×2722, i32.load×1494, i32.const×1177, local.tee×1008, end×853 |
| 703 | `(i32 i32 i32 i32) -> ()` | 54 | 21,809 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 990 | `(i32 i32) -> ()` | 138 | 42,558 | 20,102 | local.get×5237, i32.const×2322, local.tee×1192, i32.add×1062, local.set×1007 |
| 1528 | `(i32 i32) -> (i32)` | 179 | 53,994 | 19,612 | local.get×6504, i32.const×2604, i64.store×1855, i64.const×1046, i64.load×1028 |
| 1923 | `(i32 i32) -> ()` | 110 | 38,691 | 17,216 | local.get×5028, i32.const×1620, local.set×859, local.tee×753, end×661 |
| 2507 | `(i32 i32) -> ()` | 397 | 139,328 | 62,996 | local.get×18108, i32.const×7882, local.set×3752, i32.load×3121, end×2777 |
| 2774 | `(i32 i32 i32 i32) -> ()` | 137 | 30,174 | 13,747 | local.get×4098, i32.const×1458, local.tee×695, local.set×679, i32.load×613 |
| 2793 | `(i32 i32) -> ()` | 135 | 32,980 | 14,764 | local.get×4135, i32.const×1957, local.set×762, local.tee×727, i32.add×680 |

## Embedded strings (data segments)

60 printable strings ≥6 chars; largest:

```
beaver_lumberjackchefdwarf_blue_hairdwarf_braided_hairdwarf_childdwarf_forked_bearddwarf_ginger_bearddwarf_grey_bearddwarf_hair_bunsdwarf_purple_bearddwarf_red_hairdwarf_short_beardfarmerfarmer_gillfi
DEEJJJJJJHHHHEEDDDDDDHHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDEEDEEEEEEDEDEDHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
ZombieGrunt1ZombieGrunt2ZombieGrunt3ZombieHurt1ZombieHurt2ZombieHurt3ZombieHurt4bassbassattackbdbearRoar1bearRoar2bearRoar3bearRoar4bearRoar5beepbigDrumSwish1bigDrumSwish2bigDrumSwish3bowbucketEmpty1b
                                                                                                skin_1_0skin_1_1skin_1_2skin_1_3skin_1_4hat_0_0hat_0_1hat_0_2hat_0_3hat_0_4hat_0_5hat_0_6hat_13_0hat_13_
456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;
alliumaspen_saplingattached_banana_stemattached_banana_stem_wrapperattached_melon_stemattached_melon_stem_wrapperautumn_fernazure_bluetbanana_stembeetroot_plant_stage0beetroot_plant_stage1beetroot_pla
````````````````````````````````^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZYYYYYYYY
targetcolourmaxUpSpeedforceinclinationazimuthturbidityluminancemieCoefficientmieDirectionalGsunPositionvertexTintxCameraOffsetyCameraOffsetzCameraOffsetditheringinfiniteDistanceuseSunPositionrgba(tran
schema23canChangeblockReachezBridgingezBridgingGrowMsezToweringezToweringGrowMscrouchingSpeedwalkingSpeedrunningSpeedjumpAmountairJumpCountjumpHoldThrustbunnyhopMaxMultiplierskyBoxminChunkAddDistshowP
one-time initialization may not be performed recursivelyAspen LeavesAspen LogAspen SaplingAspen Wood PlanksBarkless Aspen LogBarkless Cedar LogBarkless Jungle LogBarkless Maple LogBarkless Pine LogBar
Acacia LeavesAcacia LogAcacia SaplingAcacia Wood PlanksAlchemy TableBarkless Acacia LogBarkless Birch LogBarkless Dark Oak LogBarkless Elm LogBarkless Oak LogBarkless Spruce LogBirch LeavesBirch LogBi
a draw with a base vertex: WebGL2 has none, so it is skippedan indexed draw without an index buffer is skippeda draw's pipeline has no GL program: it is skippeda draw's program failed to link: it is s
standingsittingzombieglidingdrivingsleepingridingShearedSaddledskyblockHeldBossBoxBloxdBlockPersonLeaderboardParticleEmitterTier 1Tier 2Tier 3Tier 4Tier 5PlayerPigCowSheepHorseCamelIron Goofy GolemGol
EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEJJJJJJJJEEEEEEEEEEEEEJJJJJJJJEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEJJJJEEEEEEEEEEEEEEJJJJJJ
,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123
VERTEXCOLORVERTEXALPHAOPACITYRGBLITE_REFLECTION_LUMINANCEREFLECTIONMAP_OPPOSITEZREFLECTIONOVERALPHAALPHATESTALPHATEST_AFTERALLALPHACOMPUTATIONSALPHABLENDALPHAFROMDIFFUSEPREMULTIPLYALPHAEMISSIVEASILLUM
called `Result::unwrap()` on an `Err` valueEXT_color_buffer_floatEXT_color_buffer_half_floatEXT_disjoint_timer_queryEXT_disjoint_timer_query_webgl2EXT_float_blendEXT_frag_depthEXT_sRGBEXT_texture_comp
Player_Atlasbee_set_3_attachable_bluebee_set_3_attachable_greenbee_set_3_attachable_redmedieval_set_1_attachable_bluemedieval_set_1_attachable_greenmedieval_set_1_attachable_purplemedieval_set_1_attac
staged overlay bytesmassfluidDragfluidDragHorizontalfluidDragVerticalgravityMultipliercanRunjumpMultiplierupwardImpulseOnUsecanAutoStepcanAutoStepByBlockriderOffseteffectstandingFrictionmaxPushDistanc
terrain-atlas1-anim-packed-instvs_packed_anim_instterrain-atlas1-anim-lit-packed-instterrain-atlas1-anim-test-packed-instterrain-atlas1-anim-test-lit-packed-instfs_atlasnterrain-atlasn-packed-instterr
```

## Opcode histogram (aggregated)

| opcode | count |
|---|---:|
| `local.get` | 527,023 |
| `i32.const` | 220,955 |
| `local.tee` | 97,844 |
| `i32.load` | 92,370 |
| `local.set` | 92,135 |
| `i32.add` | 85,300 |
| `end` | 77,432 |
| `br_if` | 62,969 |
| `i32.store` | 45,642 |
| `block` | 36,498 |
| `i64.const` | 31,614 |
| `i64.store` | 30,815 |
| `if` | 29,528 |
| `call` | 28,417 |
| `i32.sub` | 24,078 |
| `i64.load` | 22,841 |
| `br` | 22,754 |
| `i32.eqz` | 19,046 |
| `select` | 16,471 |
| `i32.shl` | 16,168 |
| `i32.and` | 15,936 |
| `i32.ne` | 15,577 |
| `i32.load8_u` | 14,509 |
| `i32.eq` | 13,666 |
| `i32.store8` | 12,282 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 12, structural errors: 0
- bodies fully decoded: 2,822/2,822 (degraded: 0)
