# WASM module: `bloxd_wasm_webgl1_bg`

> environment **staging.bloxd.io** · build `bqoxjr.2558012f` · analyzed 2026-11-21T12:37:19+09:00
> source: https://staging.bloxd.io/static/media/bloxd_wasm_webgl1_bg.0a1ff5ac6d57c0e5bbc5.wasm
> 4,770,278 bytes (4.5 MB) · sha256 `d6f63b1aa81b972a…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,822 / 281 |
| Exports / imports | 154 / 281 |
| Code bytes (function bodies) | 3,937,811 (3.8 MB) |
| Total local variables | 29,992 |
| Instructions (scanable bodies) | 1,848,801 |
| Data segments / bytes | 3,471 / 788,708 |
| Element segments / entries | 1 / 728 |
| Memories / tables / globals | 1 / 1 / 3 |
| name-section module id | `c9aac24a9ae7bc4a.10478` |
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
| 10 | code | 3,942,990 | 2822 |
| 11 | data | 816,774 | 3471 |
| 0 | custom:name | 30 | — |

## Types

172 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32) -> ()` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

281 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `nGt4.xoFy` | func | `(i32) -> (f64)` |
| 1 | `nGt4.N910` | func | `() -> (i32)` |
| 2 | `nGt4.VVGd` | func | `(i32 i32 i32) -> (i32)` |
| 3 | `nGt4.xH8x` | func | `(i32) -> ()` |
| 4 | `nGt4.Q7pR` | func | `(i32 i32) -> (i32)` |
| 5 | `nGt4.rTUX` | func | `(i32) -> (i32)` |
| 6 | `nGt4.oHsO` | func | `(i32 i32 i32) -> (i32)` |
| 7 | `nGt4.NCe0` | func | `(i32 i32 i32 i32) -> (i32)` |
| 8 | `nGt4.TpGy` | func | `(i32) -> (i32)` |
| 9 | `nGt4.QZbf` | func | `(i32 i32) -> ()` |
| 10 | `nGt4.jVSD` | func | `(i32 i32) -> ()` |
| 11 | `nGt4.sFP6` | func | `(i32 i32 i32 i32) -> (i32)` |
| 12 | `nGt4.C02p` | func | `(i32 i32) -> (i32)` |
| 13 | `nGt4.nnC5` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 14 | `nGt4.Y0cy` | func | `(i32) -> (i32)` |
| 15 | `nGt4.pDTZ` | func | `(i32 i32) -> (i32)` |
| 16 | `nGt4.GIaj` | func | `(i32 i32) -> (i32)` |
| 17 | `nGt4.GdRM` | func | `(i32 i32) -> ()` |
| 18 | `nGt4.rqXb` | func | `(i32) -> (i32)` |
| 19 | `nGt4.GvBS` | func | `(i32) -> (i32)` |
| 20 | `nGt4.GuHp` | func | `(i32) -> (i32)` |
| 21 | `nGt4.yH5H` | func | `(i32) -> ()` |
| 22 | `nGt4.wiRg` | func | `(i32 i32) -> ()` |
| 23 | `nGt4.MsBO` | func | `(i32 i32) -> ()` |
| 24 | `nGt4.H0KE` | func | `(i32) -> (i32)` |
| 25 | `nGt4.SQ9J` | func | `(i32 i32) -> ()` |
| 26 | `nGt4.YxpF` | func | `(i32 i32) -> (i32)` |
| 27 | `nGt4.ob0n` | func | `(i32 i32 i32 i32) -> ()` |
| 28 | `nGt4.yY1d` | func | `(i32 i32) -> (i32)` |
| 29 | `nGt4.B9y0` | func | `(i32 i32 i32) -> (i32)` |
| 30 | `nGt4.fGH0` | func | `(i32) -> (i32)` |
| 31 | `nGt4.DjbB` | func | `(i32 i32) -> ()` |
| 32 | `nGt4.TaYg` | func | `(i32) -> (i32)` |
| 33 | `nGt4.n8eU` | func | `(i32) -> (i32)` |
| 34 | `nGt4.aDzg` | func | `(i32 i32 i32) -> (i32)` |
| 35 | `nGt4.wocH` | func | `(i32) -> (i32)` |
| 36 | `nGt4.u9k3` | func | `(i32) -> (i32)` |
| 37 | `nGt4.mHc5` | func | `(i32) -> (i32)` |
| 38 | `nGt4.qQff` | func | `(i32 i32) -> (i32)` |
| 39 | `nGt4.EKOP` | func | `(i32 i32 i32 i32) -> ()` |
| 40 | `nGt4.HNJw` | func | `(i32) -> (i32)` |
| 41 | `nGt4.vDeX` | func | `(i32 i32 i32 i32) -> ()` |
| 42 | `nGt4.BJr6` | func | `() -> (f64)` |
| 43 | `nGt4.OOhf` | func | `(i32) -> (i32)` |
| 44 | `nGt4.o7qY` | func | `(i32 i32 i32 i32) -> ()` |
| 45 | `nGt4.GfLS` | func | `(i32 i32 i32) -> (i32)` |
| 46 | `nGt4.KubN` | func | `(i32 f64 f64 f64 f64) -> ()` |
| 47 | `nGt4.GE7M` | func | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64) -> ()` |
| 48 | `nGt4.j304` | func | `(i32 i32 i32) -> ()` |
| 49 | `nGt4.ivUM` | func | `(i32 i32 i32) -> ()` |
| 50 | `nGt4.jQUH` | func | `(i32 i32 i32) -> ()` |
| 51 | `nGt4.wQ9d` | func | `(i32 i32) -> ()` |
| 52 | `nGt4.B6FJ` | func | `(i32 i32) -> ()` |
| 53 | `nGt4.V9bN` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 54 | `nGt4.Qfuh` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 55 | `nGt4.my4G` | func | `(i32 f32 f32) -> ()` |
| 56 | `nGt4.eIIc` | func | `(i32 f32 f32) -> ()` |
| 57 | `nGt4.AH6k` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 58 | `nGt4.CjQg` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 59 | `nGt4.C5f5` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 60 | `nGt4.ChA6` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 61 | `nGt4.HeVr` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 62 | `nGt4.X6YJ` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 63 | `nGt4.YatO` | func | `(i32 i32 i32 i32) -> ()` |
| 64 | `nGt4.XVH1` | func | `(i32 i32 i32 i32) -> ()` |
| 65 | `nGt4.K1cj` | func | `(i32 i32 i32) -> ()` |
| 66 | `nGt4.tm5B` | func | `(i32 i32 i32) -> ()` |
| 67 | `nGt4.gZCE` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 68 | `nGt4.dUgK` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 69 | `nGt4.yBXm` | func | `(i32) -> (i32)` |
| 70 | `nGt4.Qgyt` | func | `(i32) -> ()` |
| 71 | `nGt4.BB00` | func | `(i32) -> (i32)` |
| 72 | `nGt4.hHLw` | func | `(i32 i32) -> (i32)` |
| 73 | `nGt4.Tln3` | func | `(i32 i32 i32) -> (i32)` |
| 74 | `nGt4.m38z` | func | `(i32 i32 i32) -> ()` |
| 75 | `nGt4.jrmk` | func | `(i32 i32 i32 i32) -> (i32)` |
| 76 | `nGt4.ZC0Y` | func | `() -> (f64)` |
| 77 | `nGt4.KCfo` | func | `() -> (f64)` |
| 78 | `nGt4.yfa0` | func | `(i32 i32) -> ()` |
| 79 | `nGt4.FF7y` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 80 | `nGt4.IDPh` | func | `(i32 i32 i32) -> ()` |
| 81 | `nGt4.oyPU` | func | `(i32 i32 i32) -> ()` |
| 82 | `nGt4.b4jD` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 83 | `nGt4.ua17` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 84 | `nGt4.cF7K` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 85 | `nGt4.Gi1t` | func | `(i32 i32) -> ()` |
| 86 | `nGt4.nwdT` | func | `(i32 i32) -> ()` |
| 87 | `nGt4.xM4h` | func | `(i32) -> (i32)` |
| 88 | `nGt4.FYlI` | func | `(i32 i32) -> ()` |
| 89 | `nGt4.bCm4` | func | `(i32 i32) -> ()` |
| 90 | `nGt4.as3r` | func | `(i32 i32 i32) -> ()` |
| 91 | `nGt4.OYhI` | func | `(i32 i32 i32) -> ()` |
| 92 | `nGt4.Bw4a` | func | `(i32) -> (i32)` |
| 93 | `nGt4.j4Xx` | func | `(i32) -> (i32)` |
| 94 | `nGt4.fXY6` | func | `(i32 i32) -> (i32)` |
| 95 | `nGt4.FbQM` | func | `(i32 i32) -> (i32)` |
| 96 | `nGt4.usm7` | func | `(i32 i32) -> ()` |
| 97 | `nGt4.f8uU` | func | `(i32 i32) -> ()` |
| 98 | `nGt4.RoyC` | func | `(i32 i32 i32) -> ()` |
| 99 | `nGt4.hOL6` | func | `(i32 i32 i32) -> ()` |
| 100 | `nGt4.Ixl1` | func | `(i32 i32 i32 i32) -> ()` |
| 101 | `nGt4.HwYX` | func | `(i32 i32 i32 i32) -> ()` |
| 102 | `nGt4.hiOk` | func | `(i32 i32 f32) -> ()` |
| 103 | `nGt4.TgF0` | func | `(i32 i32 f32) -> ()` |
| 104 | `nGt4.Slia` | func | `(i32 i32 i32) -> ()` |
| 105 | `nGt4.XCVg` | func | `(i32 i32 i32) -> ()` |
| 106 | `nGt4.ppfC` | func | `(i32 i32 i32) -> ()` |
| 107 | `nGt4.tjfQ` | func | `(i32 i32 f32 f32) -> ()` |
| 108 | `nGt4.UpK4` | func | `(i32 i32 f32 f32) -> ()` |
| 109 | `nGt4.BkWG` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 110 | `nGt4.CCqH` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 111 | `nGt4.a5qM` | func | `(i32 i32) -> ()` |
| 112 | `nGt4.hqTU` | func | `(i32 i32) -> ()` |
| 113 | `nGt4.JMwh` | func | `(i32 i32) -> ()` |
| 114 | `nGt4.CzOV` | func | `(i32 i32) -> ()` |
| 115 | `nGt4.d16p` | func | `(i32) -> (i32)` |
| 116 | `nGt4.wFXc` | func | `(i32) -> (i32)` |
| 117 | `nGt4.gUmn` | func | `(i32) -> (i32)` |
| 118 | `nGt4.aET5` | func | `(i32) -> (i32)` |
| 119 | `nGt4.X7ks` | func | `(i32 i32) -> ()` |
| 120 | `nGt4.DIQs` | func | `(i32 i32) -> ()` |
| 121 | `nGt4.V865` | func | `(i32 i32) -> ()` |
| 122 | `nGt4.qrnt` | func | `(i32 i32) -> ()` |
| 123 | `nGt4.WcYN` | func | `(i32 i32) -> ()` |
| 124 | `nGt4.X1bv` | func | `(i32 i32) -> ()` |
| 125 | `nGt4.YbpJ` | func | `(i32 i32) -> (i32)` |
| 126 | `nGt4.RQmJ` | func | `(i32 i32) -> (i32)` |
| 127 | `nGt4.ToZn` | func | `(i32 i32 i32 i32) -> ()` |
| 128 | `nGt4.kQAR` | func | `(i32 i32 i32 i32) -> ()` |
| 129 | `nGt4.dO8A` | func | `(i32 i32) -> ()` |
| 130 | `nGt4.wM5v` | func | `(i32 i32) -> ()` |
| 131 | `nGt4.xb2Y` | func | `(i32) -> (i32)` |
| 132 | `nGt4.zLkj` | func | `(i32 i32) -> ()` |
| 133 | `nGt4.Ru3V` | func | `(i32 i32) -> ()` |
| 134 | `nGt4.VsdK` | func | `(i32 i32 i32) -> ()` |
| 135 | `nGt4.XLYF` | func | `(i32 i32 i32) -> ()` |
| 136 | `nGt4.YsC1` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 137 | `nGt4.GvjZ` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 138 | `nGt4.pRxR` | func | `(i32 i32) -> ()` |
| 139 | `nGt4.vBHp` | func | `(i32 i32 i32) -> ()` |
| 140 | `nGt4.pBnr` | func | `(i32 i32 i32) -> ()` |
| 141 | `nGt4.mtWN` | func | `(i32 i32 i32 i32) -> (i32)` |
| 142 | `nGt4.PFyi` | func | `(i32 i32 i32 i32) -> (i32)` |
| 143 | `nGt4.nLpW` | func | `(i32 i32 i32) -> ()` |
| 144 | `nGt4.QJEU` | func | `(i32 i32 i32) -> ()` |
| 145 | `nGt4.m663` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 146 | `nGt4.Q7em` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 147 | `nGt4.p8OQ` | func | `(i32 i32 i32) -> (i32)` |
| 148 | `nGt4.lCIW` | func | `(i32 i32 i32) -> (i32)` |
| 149 | `nGt4.U6GE` | func | `(i32 i32 i32) -> (i32)` |
| 150 | `nGt4.oSze` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 151 | `nGt4.SxGT` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 152 | `nGt4.nCuP` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 153 | `nGt4.uVAB` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 154 | `nGt4.X5wR` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 155 | `nGt4.o4UP` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 156 | `nGt4.hGIE` | func | `(i32) -> (i32)` |
| 157 | `nGt4.Jcfy` | func | `(i32) -> (i32)` |
| 158 | `nGt4.wMk7` | func | `(i32) -> (i32)` |
| 159 | `nGt4.IV9p` | func | `(i32) -> (i32)` |
| 160 | `nGt4.tHpe` | func | `() -> (i32)` |
| 161 | `nGt4.g6Ue` | func | `() -> (i32)` |
| 162 | `nGt4.IUJM` | func | `() -> (i32)` |
| 163 | `nGt4.URJS` | func | `() -> (i32)` |
| 164 | `nGt4.kqEB` | func | `(i32 i32) -> (i32)` |
| 165 | `nGt4.w5Lr` | func | `(i32) -> ()` |
| 166 | `nGt4.U0mi` | func | `(i32 i32) -> (i32)` |
| 167 | `nGt4.hhaZ` | func | `(i32) -> (i32)` |
| 168 | `nGt4.CHYe` | func | `(i32) -> (i32)` |
| 169 | `nGt4.pL4H` | func | `(i32) -> (i32)` |
| 170 | `nGt4.hhlJ` | func | `(i32) -> ()` |
| 171 | `nGt4.Ktyf` | func | `(i32 i32 i32) -> (i32)` |
| 172 | `nGt4.q5sE` | func | `(i32) -> (i32)` |
| 173 | `nGt4.xgxI` | func | `(i32) -> (i32)` |
| 174 | `nGt4.SBsv` | func | `(i32 i32) -> (i32)` |
| 175 | `nGt4.IHqf` | func | `(i32 i32 i32) -> (i32)` |
| 176 | `nGt4.WVjg` | func | `(i32 i32 i32) -> (i32)` |
| 177 | `nGt4.MSti` | func | `(i32) -> (i32)` |
| 178 | `nGt4.N3FP` | func | `(i32) -> (i32)` |
| 179 | `nGt4.u0YX` | func | `(i32) -> (i32)` |
| 180 | `nGt4.ka0u` | func | `(i32 i32 i32 i32) -> ()` |
| 181 | `nGt4.vhCJ` | func | `(i32 i32 i32 i32) -> ()` |
| 182 | `nGt4.qNXe` | func | `(i32 i32) -> ()` |
| 183 | `nGt4.xBWJ` | func | `(i32 i32 i32) -> ()` |
| 184 | `nGt4.vTE4` | func | `(i32 i32) -> ()` |
| 185 | `nGt4.gdSZ` | func | `(i32 i32 i32) -> ()` |
| 186 | `nGt4.bmKJ` | func | `(i32 i32) -> ()` |
| 187 | `nGt4.lipV` | func | `(i32 i32) -> ()` |
| 188 | `nGt4.UYse` | func | `(i32) -> (i32)` |
| 189 | `nGt4.n8Nt` | func | `(i32 i32) -> (i32)` |
| 190 | `nGt4.YXPP` | func | `(i32) -> ()` |
| 191 | `nGt4.fSzF` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 192 | `nGt4.gqWC` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 193 | `nGt4.LTZR` | func | `(i32 i32) -> ()` |
| 194 | `nGt4.kiR0` | func | `(i32 i32) -> ()` |
| 195 | `nGt4.KEMq` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 196 | `nGt4.PsVo` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 197 | `nGt4.orj3` | func | `(i32 f32) -> ()` |
| 198 | `nGt4.D8Bz` | func | `(i32 f32) -> ()` |
| 199 | `nGt4.RlZt` | func | `(i32 i32) -> ()` |
| 200 | `nGt4.ygTa` | func | `(i32 i32) -> ()` |
| 201 | `nGt4.J1kv` | func | `(i32) -> (i32)` |
| 202 | `nGt4.It1y` | func | `(i32) -> (i32)` |
| 203 | `nGt4.sYxp` | func | `(i32) -> (i32)` |
| 204 | `nGt4.mr3b` | func | `(i32) -> (i32)` |
| 205 | `nGt4.OL8k` | func | `(i32 i32 i32) -> ()` |
| 206 | `nGt4.yLep` | func | `(i32 i32 i32) -> ()` |
| 207 | `nGt4.mjsl` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 208 | `nGt4.iVAP` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 209 | `nGt4.Kt8T` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 210 | `nGt4.ZflC` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 211 | `nGt4.ErZq` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 212 | `nGt4.xlUT` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 213 | `nGt4.BjYI` | func | `(i32 i32) -> ()` |
| 214 | `nGt4.H0mP` | func | `(i32 i32) -> ()` |
| 215 | `nGt4.mwPs` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 216 | `nGt4.TiAw` | func | `(i32 i32 i32 f32) -> ()` |
| 217 | `nGt4.sgjJ` | func | `(i32 i32 i32 f32) -> ()` |
| 218 | `nGt4.p6Rq` | func | `(i32) -> (i32)` |
| 219 | `nGt4.bnSm` | func | `(i32) -> (i32)` |
| 220 | `nGt4.m8Rt` | func | `(i32 i32) -> ()` |
| 221 | `nGt4.rK8v` | func | `(i32 i32) -> ()` |
| 222 | `nGt4.T84H` | func | `(i32 i32 i32) -> (i32)` |
| 223 | `nGt4.DlSN` | func | `(i32) -> (i32)` |
| 224 | `nGt4.E20o` | func | `(i32) -> (i32)` |
| 225 | `nGt4.kRa4` | func | `(i32 i32) -> ()` |
| 226 | `nGt4.jXvl` | func | `(i32 i32 i32) -> (i32)` |
| 227 | `nGt4.eYSp` | func | `(i32 i32) -> ()` |
| 228 | `nGt4.e3tb` | func | `(i32 i32) -> ()` |
| 229 | `nGt4.pfF4` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 230 | `nGt4.NdvY` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 231 | `nGt4.DWSZ` | func | `(i32 i32 i32) -> ()` |
| 232 | `nGt4.qQMF` | func | `(i32 i32 i32) -> ()` |
| 233 | `nGt4.zb9I` | func | `(i32 i32) -> ()` |
| 234 | `nGt4.vFHl` | func | `(i32 i32) -> ()` |
| 235 | `nGt4.Cfa4` | func | `(i32 i32) -> ()` |
| 236 | `nGt4.LEon` | func | `(i32 i32) -> ()` |
| 237 | `nGt4.Ofbn` | func | `(i32 i32) -> ()` |
| 238 | `nGt4.cgOa` | func | `(i32 i32) -> ()` |
| 239 | `nGt4.EHbD` | func | `(i32 f32 f32) -> ()` |
| 240 | `nGt4.XRON` | func | `(i32 f32 f32) -> ()` |
| 241 | `nGt4.pChW` | func | `(i32 i32 i32 i32) -> ()` |
| 242 | `nGt4.HdIw` | func | `(i32 i32 i32 i32) -> ()` |
| 243 | `nGt4.CfZx` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 244 | `nGt4.CeWq` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 245 | `nGt4.izyT` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 246 | `nGt4.DI48` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 247 | `nGt4.D84K` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 248 | `nGt4.pamE` | func | `(i32 i32 i32 i32) -> ()` |
| 249 | `nGt4.ZGKd` | func | `(i32 i32 i32 i32) -> ()` |
| 250 | `nGt4.eZDM` | func | `(i32) -> ()` |
| 251 | `nGt4.eWJo` | func | `(i32 i32) -> ()` |
| 252 | `nGt4.xSLk` | func | `(i32 i32) -> ()` |
| 253 | `nGt4.RiAC` | func | `(i32 i32) -> ()` |
| 254 | `nGt4.vJ5L` | func | `(i32 i32) -> ()` |
| 255 | `nGt4.RoNx` | func | `(i32 i32) -> ()` |
| 256 | `nGt4.aoGp` | func | `(i32 i32) -> ()` |
| 257 | `nGt4.cnaZ` | func | `(i32 i32) -> ()` |
| 258 | `nGt4.v0tk` | func | `(i32 i32) -> ()` |
| 259 | `nGt4.spoB` | func | `(i32) -> (i32)` |
| 260 | `nGt4.zAhb` | func | `(i32) -> (i32)` |
| 261 | `nGt4.Zllh` | func | `(i32) -> (i32)` |
| 262 | `nGt4.lwkj` | func | `(i32) -> (i32)` |
| 263 | `nGt4.VsmG` | func | `(i32 i32 i32 i32) -> ()` |
| 264 | `nGt4.CjS4` | func | `(i32) -> ()` |
| 265 | `nGt4.N7e6` | func | `(i32) -> (i32)` |
| 266 | `nGt4.FlRB` | func | `(i32) -> (i32)` |
| 267 | `nGt4.LtzH` | func | `(i32) -> (i32)` |
| 268 | `nGt4.t8bx` | func | `(i32) -> (i32)` |
| 269 | `nGt4.URsU` | func | `(i32 i32) -> ()` |
| 270 | `nGt4.mOo9` | func | `(i32) -> ()` |
| 271 | `nGt4.u4JI` | func | `(i32 i32) -> ()` |
| 272 | `nGt4.SD5O` | func | `(i32) -> (i32)` |
| 273 | `nGt4.coXd` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 274 | `nGt4.tFgC` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 275 | `nGt4.xMzb` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 276 | `nGt4.Qcpm` | func | `(i32 i32) -> (i32)` |
| 277 | `nGt4.nddC` | func | `(i32 i32) -> (i32)` |
| 278 | `nGt4.YXsu` | func | `(i32 i32) -> (i32)` |
| 279 | `nGt4.TH1E` | func | `(i32 i32) -> (i32)` |
| 280 | `nGt4.KQcv` | func | `(i32 i32) -> (i32)` |

## Exports

154 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `XP6o` | func | 2259 | `(i32 i32) -> (i32)` |
| `MKl0` | func | 1433 | `(i32 i32 i32 i32) -> (i32)` |
| `iA3S` | func | 1414 | `(i32 i32 i32 i32) -> ()` |
| `DUta` | func | 2184 | `(i32 i32) -> ()` |
| `stHh` | func | 1388 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `jTty` | func | 877 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `v16d` | func | 1579 | `(i32 i32 i32 i32) -> (i32)` |
| `nfp4` | func | 2909 | `(i32 i32) -> (i32 i32)` |
| `d3B3` | func | 2397 | `(i32) -> (i32)` |
| `brR9` | func | 2348 | `(i32) -> (i32)` |
| `kfkI` | global | 2 | `` |
| `rrHD` | func | 1705 | `(i32) -> (i32)` |
| `pP24` | func | 1815 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `laG1` | func | 2883 | `(i32 i32) -> ()` |
| `zqRb` | func | 2396 | `(i32) -> (i32)` |
| `MyO4` | func | 1466 | `(i32 f64) -> (f64)` |
| `GGAe` | func | 2872 | `(i32 i32) -> (i32)` |
| `obz9` | func | 2393 | `(i32) -> (i32)` |
| `a7OU` | func | 2712 | `(i32) -> ()` |
| `RRRS` | func | 2962 | `(i32 i32 i32) -> ()` |
| `UIQR` | func | 2920 | `(i32) -> (i32 i32)` |
| `NTJJ` | func | 1824 | `(i32) -> ()` |
| `skbC` | func | 2464 | `(i32 i32) -> ()` |
| `vBml` | func | 2370 | `(i32 i32 i32 i32 i32 i32 f64 i32) -> (i32)` |
| `ZbsC` | func | 1879 | `(i32) -> (i32)` |
| `Zw6u` | func | 2408 | `(i32) -> (i32)` |
| `Qh7I` | func | 2901 | `(i32 i32 i32) -> (i32 i32)` |
| `W3lC` | func | 3092 | `() -> (i32)` |
| `cASq` | func | 1823 | `(i32) -> ()` |
| `cI5V` | func | 1177 | `(i32 i32 i32 i32) -> (i32)` |
| `Ra2P` | func | 1500 | `(i32 i32 i32 i32) -> (i32)` |
| `j5DO` | func | 1183 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `YP7j` | func | 1881 | `(i32 i32 i32 i32) -> ()` |
| `uh7R` | func | 966 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `bG3C` | func | 2426 | `(i32) -> (i32)` |
| `vNmt` | func | 2908 | `(i32 i32) -> (i32 i32)` |
| `JZlS` | func | 1346 | `(i32 f64 f64) -> (i32)` |
| `XBAp` | func | 2410 | `(i32) -> (i32)` |
| `pzrg` | func | 2505 | `(i32 i32) -> ()` |
| `oh4I` | func | 2394 | `(i32) -> ()` |
| `RQ1d` | func | 1787 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `sMrp` | func | 2407 | `(i32) -> (i32)` |
| `TLY4` | func | 1225 | `(i32 i32 i32) -> (i32)` |
| `JUKW` | func | 2303 | `(i32 f64) -> (i32)` |
| `W2NA` | func | 2373 | `(i32 i32) -> ()` |
| `owBC` | func | 1077 | `(i32 i32) -> ()` |
| `YhdD` | func | 2921 | `(i32) -> (i32 i32)` |
| `fGpv` | func | 3070 | `(i32) -> ()` |
| `ZpOv` | func | 2261 | `(i32 i32) -> (i32)` |
| `oJNf` | func | 2404 | `(i32 i32) -> ()` |
| `hHAU` | func | 2409 | `(i32 i32) -> ()` |
| `vcIP` | func | 679 | `(i32 i32) -> (i32)` |
| `JItV` | func | 1462 | `(i32 i32) -> (i32)` |
| `t5ET` | func | 2082 | `(i32 i32) -> (i32)` |
| `Sm0D` | func | 2390 | `(i32) -> (i32)` |
| `fEeS` | func | 1299 | `(i32 i32 i32) -> (i32)` |
| `VQw8` | func | 1439 | `(i32 i32) -> (i32)` |
| `tZwN` | func | 1480 | `(i32 i32 i32) -> (i32)` |
| `tAo1` | func | 1541 | `(i32 i32) -> ()` |
| `Wkmx` | func | 1800 | `(i32 i32) -> ()` |
| `QoRP` | func | 2114 | `(i32 i32) -> (i32)` |
| `Fiw5` | func | 2389 | `(i32) -> (i32)` |
| `hfcE` | func | 544 | `(i32 i32 i32) -> (i32)` |
| `Pe2F` | func | 2931 | `() -> (i32 i32)` |
| `EOV8` | func | 1204 | `(i32 i32) -> (i32)` |
| `RdZV` | func | 2306 | `(i32 i32 i32 i32) -> (i32)` |
| `Wq0b` | func | 2331 | `(i32) -> (i32)` |
| `a9nD` | func | 860 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `AXn3` | func | 1774 | `(i32 i32 i32 i32) -> (i32)` |
| `vyFK` | func | 2680 | `(i32) -> (i32)` |
| `KisD` | func | 1078 | `(i32 i32) -> (i32)` |
| `dIjn` | func | 1756 | `() -> (i32)` |
| `PMnk` | func | 2392 | `(i32) -> (i32)` |
| `tl0T` | func | 3024 | `(i32) -> ()` |
| `Iklk` | func | 1809 | `(i32 i32) -> (i32)` |
| `X9Zy` | func | 2417 | `(i32) -> (i32)` |
| `QGLN` | func | 2701 | `(i32) -> (i32)` |
| `Wowi` | func | 1941 | `(i32 f64) -> (i32)` |
| `sSWZ` | func | 2506 | `() -> (i32)` |
| `wuWz` | func | 2906 | `(i32 i32) -> (i32 i32)` |
| `DZCu` | func | 2734 | `(i32) -> (i32)` |
| `UWHX` | func | 655 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `ESKb` | func | 1451 | `(i32 i32) -> (i32)` |
| `j7OL` | func | 2395 | `(i32) -> (i32)` |
| `ynjn` | func | 1258 | `(i32 i32) -> (i32)` |
| `JWvE` | func | 2911 | `(i32 i32) -> (i32 i32)` |
| `J3qQ` | func | 3065 | `() -> (f64)` |
| `V1Zt` | func | 730 | `(i32 i32 i32) -> (i32)` |
| `KACb` | func | 1345 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `GWKA` | func | 2919 | `(i32) -> (i32 i32)` |
| `kCb5` | func | 1076 | `(i32 i32) -> (i32)` |
| `CUsY` | func | 1176 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `dU7X` | func | 2907 | `(i32 i32) -> (i32 i32)` |
| `PL2D` | global | 1 | `` |
| `K87L` | func | 1364 | `(i32 i32) -> (i32)` |
| `NVaL` | func | 2081 | `(i32 i32) -> (i32)` |
| `FcE5` | func | 643 | `(i32 i32) -> (i32)` |
| `W8Ns` | func | 2673 | `(i32) -> (i32)` |
| `lCl2` | func | 2852 | `() -> ()` |
| `F6tD` | func | 1916 | `(i32 i32) -> ()` |
| `Ikur` | func | 2963 | `(i32 i32) -> ()` |
| `Lkyd` | func | 2262 | `(i32 i32) -> (i32)` |
| `ee04` | func | 1139 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `ZwpE` | func | 2419 | `(i32 i32) -> (i32)` |
| `muSX` | func | 2428 | `(i32) -> (i32)` |
| `d6xs` | func | 1686 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `vFxb` | func | 2213 | `(i32 i32) -> ()` |
| `wVo5` | func | 2435 | `() -> (i32)` |
| `vcdE` | func | 1643 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `Tfet` | func | 2293 | `(i32 i32) -> (i32)` |
| `UMMZ` | func | 1545 | `(i32 f64 f64 f64) -> (i32)` |
| `Msd2` | func | 2852 | `() -> ()` |
| `B2lx` | func | 1529 | `(i32 i32) -> (i32)` |
| `Zwv3` | func | 1665 | `(i32) -> (i32)` |
| `aoi8` | func | 2932 | `() -> (i32 i32)` |
| `hHIs` | func | 1249 | `(i32) -> (i32)` |
| `U3LF` | func | 1392 | `(i32 i32 i32) -> ()` |
| `JtQQ` | func | 1431 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `F9Pe` | func | 1795 | `(i32 i32 f64 f64 f64) -> ()` |
| `DhB8` | func | 2918 | `(i32) -> (i32 i32)` |
| `IQdU` | func | 2877 | `(i32 i32 i32 i32) -> (i32)` |
| `FgDN` | func | 2260 | `(i32 i32) -> (i32)` |
| `Xsmn` | func | 2388 | `(i32) -> (i32)` |
| `A5wJ` | func | 1697 | `(i32 i32) -> (i32)` |
| `fPjw` | func | 2902 | `(i32 i32 i32) -> (i32 i32)` |
| `k0sp` | func | 1680 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `JGpC` | func | 1463 | `(i32 i32) -> (i32)` |
| `jbcA` | func | 707 | `(i32 i32 i32 i32) -> (i32)` |
| `skqM` | func | 2910 | `(i32 i32) -> (i32 i32)` |
| `PrdX` | func | 2374 | `(i32) -> (i32)` |
| `j2fR` | func | 780 | `(i32 i32) -> (i32)` |
| `aQwU` | func | 1957 | `(i32 f64 f64 f64) -> (i32)` |
| `wgfN` | func | 710 | `(i32) -> (i32)` |
| `llwG` | func | 2912 | `(i32 i32) -> (i32 i32)` |
| `uauW` | func | 1469 | `(i32) -> (i32)` |
| `xwqZ` | func | 1540 | `(i32 i32) -> ()` |
| `ZyI6` | func | 714 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `aJxd` | func | 3069 | `(i32) -> (i32)` |
| `UzoH` | func | 1427 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `PxEL` | func | 2387 | `(i32) -> (f64)` |
| `nxap` | func | 2953 | `(i32 i32 i32 i32) -> ()` |
| `oKJn` | func | 887 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `X9u1` | func | 1287 | `(i32) -> ()` |
| `NX35` | func | 3018 | `(i32 i32 i32) -> ()` |
| `tWLK` | func | 3093 | `() -> (i32)` |
| `ChsY` | func | 2692 | `(i32) -> (i32)` |
| `SI8V` | func | 1393 | `() -> (i32)` |
| `Qjkc` | func | 2135 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `q3DN` | func | 2427 | `(i32) -> (i32)` |
| `a9sE` | func | 2391 | `(i32) -> (i32)` |
| `memory` | memory | 0 | `` |
| `Hrcu` | func | 2418 | `(i32 i32) -> (i32)` |
| `pkRO` | func | 2991 | `() -> (i32)` |
| `bVCQ` | func | 2061 | `(i32 i32) -> ()` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- memory 0: min 31 pages · max 14,648 · shared=False
- table 0: funcref · min 729 · max 729
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 1998896, `i32` = i32.const 1999436

## Functions

- 2,822 bodies · 3,937,811 code bytes · avg 1.4 KB
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
| 3 | `(i32 i32) -> ()` | 123 | 48,620 | 22,511 | local.get×6329, i32.const×2250, local.set×1325, local.tee×1179, i32.load×1035 |
| 4 | `(i32 i32) -> ()` | 59 | 29,621 | 14,267 | local.get×4192, i32.const×1730, i32.load×1042, local.set×931, i32.add×815 |
| 5 | `(i32 i32) -> ()` | 90 | 26,104 | 12,597 | local.get×3709, i32.const×1386, local.set×779, i32.load×721, local.tee×701 |
| 6 | `(i32 i32 i32 i32 i32) -> ()` | 134 | 32,140 | 15,936 | local.get×4504, i32.const×2183, local.set×1128, i32.add×1053, local.tee×790 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 58 | 21,484 | 10,525 | local.get×2903, i32.const×1490, local.set×728, i32.add×591, local.tee×504 |
| 8 | `(i32 i32) -> ()` | 93 | 19,080 | 9,200 | local.get×2643, i32.const×1025, local.tee×571, local.set×554, i32.load×531 |
| 9 | `(i32 i32 i32 i32) -> ()` | 105 | 26,545 | 12,837 | local.get×3810, i32.const×1624, local.set×997, i32.add×682, i32.load×663 |
| 10 | `(i32 i32 i32) -> (i32)` | 74 | 22,573 | 10,782 | local.get×2885, i32.const×1290, i32.load×750, local.set×499, i32.add×477 |
| 11 | `(i32 i32 i32 i32 i32 i32) -> ()` | 130 | 20,628 | 9,288 | local.get×2540, i32.const×1209, local.set×548, local.tee×388, end×388 |
| 12 | `(i32 i32 i32 i32) -> ()` | 53 | 24,505 | 11,634 | local.get×3005, i32.const×1276, local.tee×731, end×592, i32.load×586 |
| 13 | `(i32 i32 i32) -> (i32)` | 77 | 18,923 | 8,934 | local.get×2485, i32.const×1224, i32.load×559, i32.add×543, local.set×525 |
| 16 | `(i32 i32 i32) -> ()` | 58 | 17,252 | 7,872 | local.get×2201, i32.const×1034, i32.load×488, i32.add×396, local.tee×350 |
| 18 | `(i32 i32) -> ()` | 95 | 28,847 | 13,556 | local.get×4112, i32.const×1781, i32.add×687, i32.load×632, local.set×632 |
| 22 | `(i32 i32) -> ()` | 82 | 29,008 | 13,035 | local.get×4617, i32.const×1454, i32.store×702, i32.add×688, local.tee×644 |
| 23 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 64 | 24,279 | 11,198 | local.get×2682, i32.const×1711, local.set×821, end×663, block×465 |
| 27 | `(i32 i32 i32 i32 i32) -> ()` | 68 | 21,782 | 10,071 | local.get×3118, i32.const×1237, local.tee×621, i32.add×432, i32.load×331 |
| 32 | `(i32 i32 i32 i32 i32) -> ()` | 65 | 18,015 | 8,704 | local.get×2378, i32.const×1095, local.set×628, local.tee×459, i32.add×442 |
| 61 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 99 | 32,153 | 15,014 | local.get×4317, i32.const×1963, i32.load×986, local.set×902, i32.add×812 |
| 188 | `(i32 i32) -> ()` | 10 | 26,844 | 12,930 | local.get×4543, i32.load×1219, i32.const×1046, end×803, i32.add×744 |
| 217 | `(i32) -> ()` | 19 | 23,160 | 10,851 | local.get×2722, i32.load×1494, i32.const×1177, local.tee×1008, end×853 |
| 704 | `(i32 i32 i32 i32) -> ()` | 54 | 21,809 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 990 | `(i32 i32) -> ()` | 138 | 42,558 | 20,102 | local.get×5237, i32.const×2322, local.tee×1192, i32.add×1062, local.set×1007 |
| 1528 | `(i32 i32) -> (i32)` | 179 | 54,386 | 19,724 | local.get×6550, i32.const×2610, i64.store×1877, i64.const×1058, i64.load×1038 |
| 1923 | `(i32 i32) -> ()` | 110 | 38,690 | 17,216 | local.get×5028, i32.const×1620, local.set×859, local.tee×753, end×661 |
| 2507 | `(i32 i32) -> ()` | 397 | 139,324 | 62,996 | local.get×18108, i32.const×7882, local.set×3752, i32.load×3121, end×2777 |
| 2774 | `(i32 i32 i32 i32) -> ()` | 137 | 30,194 | 13,753 | local.get×4098, i32.const×1461, local.tee×695, local.set×679, i32.load×613 |
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
| `local.get` | 527,111 |
| `i32.const` | 220,977 |
| `local.tee` | 97,845 |
| `i32.load` | 92,374 |
| `local.set` | 92,142 |
| `i32.add` | 85,312 |
| `end` | 77,434 |
| `br_if` | 62,975 |
| `i32.store` | 45,647 |
| `block` | 36,503 |
| `i64.const` | 31,638 |
| `i64.store` | 30,849 |
| `if` | 29,525 |
| `call` | 28,415 |
| `i32.sub` | 24,079 |
| `i64.load` | 22,851 |
| `br` | 22,752 |
| `i32.eqz` | 19,044 |
| `select` | 16,474 |
| `i32.shl` | 16,172 |
| `i32.and` | 15,936 |
| `i32.ne` | 15,578 |
| `i32.load8_u` | 14,510 |
| `i32.eq` | 13,666 |
| `i32.store8` | 12,285 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 12, structural errors: 0
- bodies fully decoded: 2,822/2,822 (degraded: 0)
