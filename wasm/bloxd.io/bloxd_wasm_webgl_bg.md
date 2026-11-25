# WASM module: `bloxd_wasm_webgl_bg`

> environment **bloxd.io** · build `wp3j0a.a13381cf` · analyzed 2026-11-25T16:44:13+09:00
> source: https://bloxd.io/static/media/bloxd_wasm_webgl_bg.9dc0d4326130c1ac06a7.wasm
> 5,516,433 bytes (5.3 MB) · sha256 `cdb0cf8160692e68…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- size 5,516,404 → 5,516,433 bytes (+29)
- code bytes 4,042,860 → 4,042,889
- name-section module id `1fa12801a0f89d08.10916` → `dbabd7e7025258c7.10916` (numeric version suffix unchanged — same module version, re-randomized prefix)
- export identifiers rotated by the obfuscator: 1/157 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,915 / 299 |
| Exports / imports | 157 / 300 |
| Code bytes (function bodies) | 4,042,889 (3.9 MB) |
| Total local variables | 30,796 |
| Instructions (scanable bodies) | 1,896,311 |
| Data segments / bytes | 4,032 / 1,424,687 |
| Element segments / entries | 1 / 753 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `dbabd7e7025258c7.10916` |
| Sections | 11 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,506 | 177 |
| 2 | import | 3,606 | 300 |
| 3 | function | 2,966 | 2915 |
| 4 | table | 7 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,257 | 157 |
| 9 | element | 1,513 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 4,048,232 | 2915 |
| 11 | data | 1,457,249 | 4032 |
| 0 | custom:name | 30 | — |

## Types

177 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32) -> ()` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

300 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `E6sa.f1VC` | memory | `[128..14648]` |
| 0 | `E6sa.L09S` | func | `(i32) -> (f64)` |
| 1 | `E6sa.rbHF` | func | `() -> (i32)` |
| 2 | `E6sa.Aw1i` | func | `(i32 i32 i32) -> (i32)` |
| 3 | `E6sa.L401` | func | `(i32) -> ()` |
| 4 | `E6sa.MqqA` | func | `(i32 i32) -> (i32)` |
| 5 | `E6sa.kmbq` | func | `(i32) -> (i32)` |
| 6 | `E6sa.qqLR` | func | `(i32 i32 i32) -> (i32)` |
| 7 | `E6sa.izR9` | func | `(i32 i32 i32 i32) -> (i32)` |
| 8 | `E6sa.S0hi` | func | `(i32) -> (i32)` |
| 9 | `E6sa.bV79` | func | `(i32 i32) -> ()` |
| 10 | `E6sa.EwZa` | func | `(i32 i32) -> ()` |
| 11 | `E6sa.uEZe` | func | `(i32 i32 i32 i32) -> (i32)` |
| 12 | `E6sa.Fyos` | func | `(i32 i32) -> (i32)` |
| 13 | `E6sa.pa98` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 14 | `E6sa.dvyp` | func | `(i32) -> (i32)` |
| 15 | `E6sa.MunX` | func | `(i32 i32) -> (i32)` |
| 16 | `E6sa.vmlO` | func | `(i32 i32) -> (i32)` |
| 17 | `E6sa.S7ur` | func | `(i32 i32) -> ()` |
| 18 | `E6sa.ZJLG` | func | `(i32) -> (i32)` |
| 19 | `E6sa.aSGq` | func | `(i32) -> (i32)` |
| 20 | `E6sa.SRcU` | func | `(i32) -> (i32)` |
| 21 | `E6sa.ZwQj` | func | `(i32) -> ()` |
| 22 | `E6sa.q2XU` | func | `(i32 i32) -> ()` |
| 23 | `E6sa.p6E8` | func | `(i32 i32) -> ()` |
| 24 | `E6sa.kweA` | func | `(i32 f64 f64 f64 f64) -> ()` |
| 25 | `E6sa.iGaz` | func | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64) -> ()` |
| 26 | `E6sa.fWzX` | func | `(i32) -> (i32)` |
| 27 | `E6sa.Rgdr` | func | `(i32 i32) -> ()` |
| 28 | `E6sa.H5Up` | func | `(i32 i32) -> (i32)` |
| 29 | `E6sa.tRRP` | func | `(i32 i32 i32 i32) -> ()` |
| 30 | `E6sa.Gj7m` | func | `(i32 i32) -> (i32)` |
| 31 | `E6sa.ff9q` | func | `(i32 i32 i32) -> (i32)` |
| 32 | `E6sa.d6Zu` | func | `(i32) -> (i32)` |
| 33 | `E6sa.H8jC` | func | `(i32 i32) -> ()` |
| 34 | `E6sa.gmun` | func | `(i32 i32 i32) -> (i32)` |
| 35 | `E6sa.Z4RV` | func | `(i32) -> (i32)` |
| 36 | `E6sa.IBks` | func | `(i32) -> (i32)` |
| 37 | `E6sa.MDvH` | func | `(i32) -> (i32)` |
| 38 | `E6sa.TSHI` | func | `(i32 i32) -> (i32)` |
| 39 | `E6sa.ECNl` | func | `(i32 i32 i32 i32) -> ()` |
| 40 | `E6sa.NhbM` | func | `(i32) -> (i32)` |
| 41 | `E6sa.ZjdH` | func | `(i32 i32 i32 i32) -> ()` |
| 42 | `E6sa.XjJV` | func | `() -> (f64)` |
| 43 | `E6sa.Kmz6` | func | `(i32) -> (i32)` |
| 44 | `E6sa.YLTb` | func | `(i32 i32 i32 i32) -> ()` |
| 45 | `E6sa.TS0w` | func | `(i32 i32 i32) -> (i32)` |
| 46 | `E6sa.TT9L` | func | `(i32 i32 i32) -> ()` |
| 47 | `E6sa.rBeI` | func | `(i32 i32 i32) -> ()` |
| 48 | `E6sa.tIM7` | func | `(i32 i32 i32) -> ()` |
| 49 | `E6sa.Ao39` | func | `(i32 i32 i32 i32) -> ()` |
| 50 | `E6sa.FnR6` | func | `(i32 i32 i32 i32) -> ()` |
| 51 | `E6sa.ZoyF` | func | `(i32 i32) -> ()` |
| 52 | `E6sa.iCjU` | func | `(i32 i32) -> ()` |
| 53 | `E6sa.sBUj` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 54 | `E6sa.i9PO` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 55 | `E6sa.jpzj` | func | `(i32 f32 f32) -> ()` |
| 56 | `E6sa.l2Oe` | func | `(i32 f32 f32) -> ()` |
| 57 | `E6sa.wDy5` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 58 | `E6sa.okNy` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 59 | `E6sa.GTLM` | func | `(i32 i32 i32 i32) -> ()` |
| 60 | `E6sa.f8TR` | func | `(i32 i32 i32 i32) -> ()` |
| 61 | `E6sa.OzpG` | func | `(i32 i32 i32) -> ()` |
| 62 | `E6sa.GG3X` | func | `(i32 i32 i32) -> ()` |
| 63 | `E6sa.uVTg` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 64 | `E6sa.bxcI` | func | `(i32 i32 i32) -> ()` |
| 65 | `E6sa.zsIP` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 66 | `E6sa.hVRS` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 67 | `E6sa.GzIj` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 68 | `E6sa.Mup1` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 69 | `E6sa.qj5R` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 70 | `E6sa.a7JT` | func | `(i32) -> (i32)` |
| 71 | `E6sa.cBEa` | func | `(i32) -> ()` |
| 72 | `E6sa.TW1r` | func | `(i32) -> (i32)` |
| 73 | `E6sa.fy62` | func | `(i32 i32) -> (i32)` |
| 74 | `E6sa.ZxyM` | func | `(i32 i32 i32) -> (i32)` |
| 75 | `E6sa.qNuJ` | func | `(i32 i32 i32) -> ()` |
| 76 | `E6sa.SPwt` | func | `(i32 i32 i32 i32) -> (i32)` |
| 77 | `E6sa.Ilg2` | func | `() -> (f64)` |
| 78 | `E6sa.Rha6` | func | `() -> (f64)` |
| 79 | `E6sa.u5po` | func | `(i32 i32) -> ()` |
| 80 | `E6sa.WKQV` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 81 | `E6sa.KMvz` | func | `(i32 i32 i32) -> (i32)` |
| 82 | `E6sa.vdcp` | func | `(i32 i32 i32) -> ()` |
| 83 | `E6sa.zZFJ` | func | `(i32 i32 i32) -> ()` |
| 84 | `E6sa.scIV` | func | `(i32 i32) -> ()` |
| 85 | `E6sa.p330` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 86 | `E6sa.SH6l` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 87 | `E6sa.v4V7` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 88 | `E6sa.mVAI` | func | `(i32 i32) -> ()` |
| 89 | `E6sa.bwAV` | func | `(i32 i32) -> ()` |
| 90 | `E6sa.b8nT` | func | `(i32) -> (i32)` |
| 91 | `E6sa.Hi44` | func | `(i32 i32 i32) -> ()` |
| 92 | `E6sa.cnZh` | func | `(i32 i32 i32) -> ()` |
| 93 | `E6sa.Ih0v` | func | `(i32) -> (i32)` |
| 94 | `E6sa.DOwn` | func | `(i32) -> (i32)` |
| 95 | `E6sa.Gql7` | func | `(i32 i32) -> ()` |
| 96 | `E6sa.jmpn` | func | `(i32 i32) -> ()` |
| 97 | `E6sa.oYW8` | func | `(i32 i32) -> ()` |
| 98 | `E6sa.kcBf` | func | `(i32 i32) -> ()` |
| 99 | `E6sa.Qftx` | func | `(i32 i32 i32) -> ()` |
| 100 | `E6sa.Rz1P` | func | `(i32 i32 i32) -> ()` |
| 101 | `E6sa.ZVl1` | func | `(i32 i32 f32) -> ()` |
| 102 | `E6sa.eUnn` | func | `(i32 i32 f32) -> ()` |
| 103 | `E6sa.X4gt` | func | `(i32 i32 i32) -> ()` |
| 104 | `E6sa.O0T7` | func | `(i32 i32 f32 f32) -> ()` |
| 105 | `E6sa.sAlm` | func | `(i32 i32 f32 f32) -> ()` |
| 106 | `E6sa.UtIC` | func | `(i32 i32) -> ()` |
| 107 | `E6sa.G6BZ` | func | `(i32 i32) -> ()` |
| 108 | `E6sa.GDaU` | func | `(i32 i32) -> ()` |
| 109 | `E6sa.bnyH` | func | `(i32 i32) -> ()` |
| 110 | `E6sa.QvmG` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 111 | `E6sa.xo5d` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 112 | `E6sa.szvK` | func | `(i32 i32 i32) -> ()` |
| 113 | `E6sa.rGMj` | func | `(i32 i32 i32) -> ()` |
| 114 | `E6sa.Nu4P` | func | `(i32 i32 i32 i32) -> ()` |
| 115 | `E6sa.u0Hu` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 116 | `E6sa.u2vK` | func | `(i32 i32) -> ()` |
| 117 | `E6sa.Orma` | func | `(i32 i32) -> ()` |
| 118 | `E6sa.J6Nw` | func | `(i32 i32) -> (i32)` |
| 119 | `E6sa.hY2I` | func | `(i32 i32) -> (i32)` |
| 120 | `E6sa.b5Ff` | func | `(i32 i32) -> ()` |
| 121 | `E6sa.c4jY` | func | `(i32 i32) -> ()` |
| 122 | `E6sa.M08t` | func | `(i32) -> (i32)` |
| 123 | `E6sa.iEbv` | func | `(i32 i32) -> ()` |
| 124 | `E6sa.JG0G` | func | `(i32 i32) -> ()` |
| 125 | `E6sa.Z0bT` | func | `(i32 i32 i32 i32) -> ()` |
| 126 | `E6sa.MpEB` | func | `(i32 i32 i32) -> ()` |
| 127 | `E6sa.xwbs` | func | `(i32 i32 i32) -> ()` |
| 128 | `E6sa.gEXT` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 129 | `E6sa.dFPc` | func | `(i32 i32) -> ()` |
| 130 | `E6sa.B9NI` | func | `(i32 i32 i32) -> ()` |
| 131 | `E6sa.suGe` | func | `(i32 i32 i32) -> ()` |
| 132 | `E6sa.v4aY` | func | `(i32 i32 i32) -> ()` |
| 133 | `E6sa.rDt3` | func | `(i32 i32 i32) -> ()` |
| 134 | `E6sa.u5WW` | func | `(i32) -> ()` |
| 135 | `E6sa.qSuc` | func | `(i32 i32 i32) -> (i32)` |
| 136 | `E6sa.zpoL` | func | `(i32 i32 i32) -> ()` |
| 137 | `E6sa.uMRe` | func | `(i32 i32 i32) -> (i32)` |
| 138 | `E6sa.yHic` | func | `(i32 i32) -> ()` |
| 139 | `E6sa.vUxb` | func | `(i32) -> (i32)` |
| 140 | `E6sa.dPCr` | func | `(i32 i32) -> ()` |
| 141 | `E6sa.Fmr9` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 142 | `E6sa.nZx5` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 143 | `E6sa.VKJo` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 144 | `E6sa.ZcmR` | func | `(i32 i32 i32) -> (i32)` |
| 145 | `E6sa.HzX3` | func | `(i32 i32 i32) -> (i32)` |
| 146 | `E6sa.fofu` | func | `(i32 i32) -> ()` |
| 147 | `E6sa.kjSX` | func | `(i32 i32) -> ()` |
| 148 | `E6sa.UwiD` | func | `(i32 i32) -> ()` |
| 149 | `E6sa.I8TL` | func | `(i32 i32) -> ()` |
| 150 | `E6sa.K6SH` | func | `(i32) -> (i32)` |
| 151 | `E6sa.txHy` | func | `(i32) -> (i32)` |
| 152 | `E6sa.VidI` | func | `(i32) -> (i32)` |
| 153 | `E6sa.EbGu` | func | `(i32) -> (i32)` |
| 154 | `E6sa.WMhZ` | func | `(i32) -> (i32)` |
| 155 | `E6sa.QyKM` | func | `(i32) -> (i32)` |
| 156 | `E6sa.ivBF` | func | `() -> (i32)` |
| 157 | `E6sa.ZBrN` | func | `() -> (i32)` |
| 158 | `E6sa.pY6m` | func | `() -> (i32)` |
| 159 | `E6sa.vZgx` | func | `() -> (i32)` |
| 160 | `E6sa.QSGt` | func | `(i32 i32) -> (i32)` |
| 161 | `E6sa.Z21C` | func | `(i32) -> ()` |
| 162 | `E6sa.B38v` | func | `(i32 i32) -> (i32)` |
| 163 | `E6sa.wccr` | func | `(i32) -> (i32)` |
| 164 | `E6sa.GoAC` | func | `(i32) -> (i32)` |
| 165 | `E6sa.RbpZ` | func | `(i32) -> (i32)` |
| 166 | `E6sa.y0WR` | func | `(i32) -> ()` |
| 167 | `E6sa.eRhI` | func | `(i32 i32 i32) -> (i32)` |
| 168 | `E6sa.Qbt3` | func | `(i32) -> (i32)` |
| 169 | `E6sa.zOux` | func | `(i32) -> (i32)` |
| 170 | `E6sa.KfGA` | func | `(i32 i32) -> (i32)` |
| 171 | `E6sa.Iy2D` | func | `(i32) -> ()` |
| 172 | `E6sa.Jmy2` | func | `() -> (i32)` |
| 173 | `E6sa.zbad` | func | `(i32 i32) -> (i32)` |
| 174 | `E6sa.XijQ` | func | `(i32 i32) -> ()` |
| 175 | `E6sa.nCKk` | func | `(i32 i32) -> ()` |
| 176 | `E6sa.RlHN` | func | `(i32) -> (i32)` |
| 177 | `E6sa.TmQt` | func | `(i32 i32) -> (i32)` |
| 178 | `E6sa.fAmE` | func | `(i32) -> ()` |
| 179 | `E6sa.Cy8F` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 180 | `E6sa.QefN` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 181 | `E6sa.tV0n` | func | `(i32 i32) -> ()` |
| 182 | `E6sa.dx7I` | func | `(i32 i32) -> ()` |
| 183 | `E6sa.Vasn` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 184 | `E6sa.RJ2J` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 185 | `E6sa.haVg` | func | `(i32 f32) -> ()` |
| 186 | `E6sa.r8Jt` | func | `(i32 f32) -> ()` |
| 187 | `E6sa.aTrX` | func | `(i32 i32) -> ()` |
| 188 | `E6sa.cWIq` | func | `(i32 i32) -> ()` |
| 189 | `E6sa.uIc0` | func | `(i32) -> (i32)` |
| 190 | `E6sa.KbI2` | func | `(i32) -> (i32)` |
| 191 | `E6sa.T4xl` | func | `(i32) -> (i32)` |
| 192 | `E6sa.WXzT` | func | `(i32) -> (i32)` |
| 193 | `E6sa.VPfQ` | func | `(i32 i32 i32) -> ()` |
| 194 | `E6sa.CoZW` | func | `(i32 i32 i32) -> ()` |
| 195 | `E6sa.HHfv` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 196 | `E6sa.yFyn` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 197 | `E6sa.OTIM` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 198 | `E6sa.ReEn` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 199 | `E6sa.uimz` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 200 | `E6sa.yvBp` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 201 | `E6sa.est4` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 202 | `E6sa.loYw` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 203 | `E6sa.Ccm5` | func | `(i32) -> (i32)` |
| 204 | `E6sa.bm9m` | func | `(i32) -> (i32)` |
| 205 | `E6sa.ZhSK` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 206 | `E6sa.vUIe` | func | `(i32 i32 i32 i32) -> ()` |
| 207 | `E6sa.eHSR` | func | `(i32 i32 i32 i32) -> ()` |
| 208 | `E6sa.tOlc` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 209 | `E6sa.cQCt` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 210 | `E6sa.Rs82` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 211 | `E6sa.FHlZ` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 212 | `E6sa.SbbN` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 213 | `E6sa.XkyW` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 214 | `E6sa.sTqj` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 215 | `E6sa.HcAt` | func | `(i32 i32 i32) -> ()` |
| 216 | `E6sa.pxHe` | func | `(i32 i32 i32) -> ()` |
| 217 | `E6sa.FxXo` | func | `(i32 i32) -> ()` |
| 218 | `E6sa.FpbB` | func | `(i32 i32) -> ()` |
| 219 | `E6sa.EVOe` | func | `(i32 i32) -> ()` |
| 220 | `E6sa.zObt` | func | `(i32 i32) -> ()` |
| 221 | `E6sa.VLTN` | func | `(i32 i32) -> ()` |
| 222 | `E6sa.mgA7` | func | `(i32 i32) -> ()` |
| 223 | `E6sa.VVrn` | func | `(i32 f32 f32) -> ()` |
| 224 | `E6sa.HTGb` | func | `(i32 f32 f32) -> ()` |
| 225 | `E6sa.yiln` | func | `(i32 i32) -> ()` |
| 226 | `E6sa.syDc` | func | `(i32 i32) -> ()` |
| 227 | `E6sa.JTbw` | func | `(i32 i32 i32 f32) -> ()` |
| 228 | `E6sa.UWtQ` | func | `(i32 i32 i32 f32) -> ()` |
| 229 | `E6sa.yVYV` | func | `(i32 i32 i32) -> ()` |
| 230 | `E6sa.WTZx` | func | `(i32) -> (i32)` |
| 231 | `E6sa.r8yd` | func | `(i32) -> (i32)` |
| 232 | `E6sa.ge5f` | func | `(i32 i32) -> ()` |
| 233 | `E6sa.quxS` | func | `(i32 i32) -> ()` |
| 234 | `E6sa.sAmF` | func | `(i32 i32 i32 i32) -> (i32)` |
| 235 | `E6sa.oQPt` | func | `(i32 i32 i32 i32) -> ()` |
| 236 | `E6sa.wCHo` | func | `(i32 i32 i32 i32) -> (i32)` |
| 237 | `E6sa.BSe9` | func | `(i32 i32 i32 i32) -> (i32)` |
| 238 | `E6sa.H853` | func | `(i32 i32 i32 i32) -> (i32)` |
| 239 | `E6sa.JkWR` | func | `(i32 i32 i32) -> ()` |
| 240 | `E6sa.afeZ` | func | `(i32 i32 i32) -> ()` |
| 241 | `E6sa.Zj3W` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 242 | `E6sa.N8oL` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 243 | `E6sa.Lvga` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 244 | `E6sa.Nqox` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 245 | `E6sa.zOcS` | func | `(i32) -> (i32)` |
| 246 | `E6sa.i4Z9` | func | `(i32) -> (i32)` |
| 247 | `E6sa.iqLp` | func | `(i32 i32 i32 i32) -> ()` |
| 248 | `E6sa.NA4E` | func | `(i32 i32) -> ()` |
| 249 | `E6sa.yedg` | func | `(i32 i32) -> ()` |
| 250 | `E6sa.waaS` | func | `(i32 i32) -> (i32)` |
| 251 | `E6sa.iuJY` | func | `(i32 i32) -> (i32)` |
| 252 | `E6sa.KppF` | func | `(i32 i32 i32 i32) -> ()` |
| 253 | `E6sa.czLx` | func | `(i32 i32 i32 i32) -> ()` |
| 254 | `E6sa.phVj` | func | `(i32 i32) -> ()` |
| 255 | `E6sa.NeGl` | func | `(i32 i32) -> ()` |
| 256 | `E6sa.cpKd` | func | `(i32) -> (i32)` |
| 257 | `E6sa.HsfD` | func | `(i32 i32 i32 i32) -> ()` |
| 258 | `E6sa.QJAY` | func | `(i32 i32 i32 f32) -> ()` |
| 259 | `E6sa.CmhX` | func | `(i32) -> ()` |
| 260 | `E6sa.Dck5` | func | `(i32 i32) -> ()` |
| 261 | `E6sa.GQDw` | func | `(i32 i32) -> ()` |
| 262 | `E6sa.wBCB` | func | `(i32 i32) -> ()` |
| 263 | `E6sa.oxI3` | func | `(i32 i32) -> ()` |
| 264 | `E6sa.qTy6` | func | `(i32 i32) -> ()` |
| 265 | `E6sa.p1sF` | func | `(i32 i32) -> ()` |
| 266 | `E6sa.ow7p` | func | `(i32 i32) -> ()` |
| 267 | `E6sa.s2FB` | func | `(i32 i32) -> ()` |
| 268 | `E6sa.JDlq` | func | `(i32) -> (i32)` |
| 269 | `E6sa.FptC` | func | `(i32) -> (i32)` |
| 270 | `E6sa.jE3E` | func | `(i32) -> (i32)` |
| 271 | `E6sa.PvQU` | func | `(i32) -> (i32)` |
| 272 | `E6sa.sZGd` | func | `(i32 i32 i32 i32) -> ()` |
| 273 | `E6sa.SSfe` | func | `(i32) -> ()` |
| 274 | `E6sa.rbeX` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 275 | `E6sa.pudb` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 276 | `E6sa.yWfu` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 277 | `E6sa.EWnT` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 278 | `E6sa.MEfx` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 279 | `E6sa.jy6D` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 280 | `E6sa.hbMq` | func | `(i32) -> (i32)` |
| 281 | `E6sa.LX2J` | func | `(i32) -> (i32)` |
| 282 | `E6sa.e8PD` | func | `(i32) -> (i32)` |
| 283 | `E6sa.gBqu` | func | `(i32) -> (i32)` |
| 284 | `E6sa.OP6I` | func | `(i32 i32) -> ()` |
| 285 | `E6sa.QqHs` | func | `(i32) -> ()` |
| 286 | `E6sa.IqUC` | func | `(i32 i32) -> ()` |
| 287 | `E6sa.Bok7` | func | `(i32) -> (i32)` |
| 288 | `E6sa.ASTZ` | func | `(i32 i32) -> (i32)` |
| 289 | `E6sa.qurE` | func | `(i32 i32) -> (i32)` |
| 290 | `E6sa.f6Nc` | func | `(i32 i32) -> (i32)` |
| 291 | `E6sa.WrCA` | func | `(f64) -> (i32)` |
| 292 | `E6sa.kXoT` | func | `(i32 i32) -> (i32)` |
| 293 | `E6sa.p2vy` | func | `(i32 i32) -> (i32)` |
| 294 | `E6sa.eAgA` | func | `(i32 i32) -> (i32)` |
| 295 | `E6sa.Fiu8` | func | `(i32 i32) -> (i32)` |
| 296 | `E6sa.vQPB` | func | `(i32 i32) -> (i32)` |
| 297 | `E6sa.cgeG` | func | `(i32 i32) -> (i32)` |
| 298 | `E6sa.ERUa` | func | `(i32 i32) -> (i32)` |

## Exports

157 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `nheu` | func | 2475 | `(i32) -> ()` |
| `ozXz` | func | 890 | `(i32 i32) -> (i32)` |
| `eXMz` | func | 2469 | `(i32) -> (i32)` |
| `SG2A` | func | 3000 | `(i32 i32 i32) -> (i32 i32)` |
| `kune` | func | 705 | `(i32 i32) -> (i32)` |
| `WPqm` | func | 2336 | `(i32 i32) -> (i32)` |
| `VN9y` | func | 3024 | `(i32) -> (i32 i32)` |
| `M9RK` | func | 3071 | `(i32 i32) -> ()` |
| `LdNG` | func | 1892 | `(i32) -> ()` |
| `oJN0` | func | 2201 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `SN6u` | func | 3037 | `() -> (i32 i32)` |
| `w3a1` | func | 1529 | `(i32 i32 i32) -> (i32)` |
| `BLWt` | func | 1289 | `(i32) -> (i32)` |
| `oqFv` | func | 1438 | `() -> (i32)` |
| `dM75` | func | 1460 | `(i32 i32 i32 i32) -> ()` |
| `dUWJ` | func | 2498 | `(i32) -> (i32)` |
| `k6Vw` | global | 1 | `` |
| `njoY` | func | 2029 | `(i32 f64 f64 f64) -> (i32)` |
| `Yizt` | func | 1589 | `(i32 i32) -> ()` |
| `Uzdi` | func | 1243 | `(i32 i32) -> (i32)` |
| `Xy5q` | func | 1321 | `(i32) -> ()` |
| `WCqs` | func | 2829 | `(i32) -> (i32)` |
| `ZzaU` | func | 758 | `(i32 i32 i32) -> (i32)` |
| `X9Bg` | func | 2507 | `(i32) -> (i32)` |
| `aX00` | func | 1513 | `(i32 i32) -> (i32)` |
| `vlRI` | func | 2486 | `(i32 i32) -> ()` |
| `SVwO` | func | 2796 | `(i32) -> (i32)` |
| `EJP4` | func | 743 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `docQ` | func | 889 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `DSv6` | func | 2476 | `(i32) -> (i32)` |
| `SvMn` | func | 2286 | `(i32 i32) -> ()` |
| `Hul0` | func | 1858 | `(i32 i32 f64 f64 f64) -> ()` |
| `HDyk` | func | 922 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `YnZn` | func | 2477 | `(i32) -> (i32)` |
| `ZkOE` | func | 2764 | `(i32) -> (i32)` |
| `AoAM` | func | 1478 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `ZZQo` | func | 3008 | `(i32 i32) -> (i32 i32)` |
| `pHPb` | func | 3133 | `() -> ()` |
| `vnnf` | func | 2508 | `(i32) -> (i32)` |
| `GcnJ` | func | 2425 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `Fn4T` | func | 3011 | `(i32 i32) -> (i32 i32)` |
| `VVYy` | func | 2509 | `(i32) -> (i32)` |
| `lMr0` | func | 3035 | `() -> (i32 i32)` |
| `CaGw` | func | 618 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `HOJH` | func | 2490 | `(i32 i32) -> ()` |
| `Y85i` | func | 2771 | `(i32) -> (i32)` |
| `cbKI` | func | 2471 | `(i32) -> (i32)` |
| `frb0` | func | 1578 | `(i32 i32) -> (i32)` |
| `tD6w` | func | 2472 | `(i32) -> (i32)` |
| `dZbP` | func | 1987 | `(i32 i32) -> ()` |
| `oQFL` | func | 3001 | `(i32 i32 i32) -> (i32 i32)` |
| `NblF` | func | 2488 | `(i32) -> (i32)` |
| `dV5L` | func | 1866 | `(i32 i32) -> ()` |
| `zmT3` | func | 2975 | `(i32 i32 i32 i32) -> (i32)` |
| `w0YM` | func | 2381 | `(i32 i32 i32 i32) -> (i32)` |
| `jMQA` | func | 1757 | `(i32 i32) -> (i32)` |
| `vJyl` | func | 1700 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `FNcq` | func | 3203 | `() -> (i32)` |
| `amfv` | func | 2982 | `(i32 i32) -> ()` |
| `XB1J` | func | 1215 | `(i32 i32 i32 i32) -> (i32)` |
| `y4TN` | func | 2478 | `(i32) -> (i32)` |
| `x1q2` | func | 2468 | `(i32) -> (f64)` |
| `Vxa4` | func | 1631 | `(i32 i32 i32 i32) -> (i32)` |
| `ZMJ6` | func | 1876 | `(i32 i32) -> (i32)` |
| `sOpj` | func | 3021 | `(i32) -> (i32 i32)` |
| `rKVR` | func | 3023 | `(i32) -> (i32 i32)` |
| `sVQy` | func | 1739 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `vmd7` | func | 1891 | `(i32) -> ()` |
| `X4J6` | func | 1514 | `(i32 i32) -> (i32)` |
| `LL9j` | func | 1516 | `(i32 f64) -> (f64)` |
| `NF1H` | func | 1951 | `(i32) -> (i32)` |
| `wurI` | func | 1270 | `(i32 i32 i32) -> ()` |
| `LgHY` | func | 2409 | `(i32) -> (i32)` |
| `memory` | memory | 0 | `` |
| `aw3m` | func | 1489 | `(i32 i32) -> (i32)` |
| `uN9V` | func | 3173 | `() -> (f64)` |
| `LoFt` | func | 1745 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `vuBq` | func | 1593 | `(i32 f64 f64 f64) -> (i32)` |
| `p7w0` | func | 3178 | `(i32) -> ()` |
| `IYR8` | func | 2592 | `() -> (i32)` |
| `DJy2` | func | 2335 | `(i32 i32) -> (i32)` |
| `N9R5` | func | 2491 | `(i32) -> (i32)` |
| `UalL` | func | 1934 | `(i32) -> (i32)` |
| `pg7T` | func | 2807 | `(i32) -> ()` |
| `PIAg` | func | 2426 | `(i32) -> (i32)` |
| `W8x1` | func | 3202 | `() -> (i32)` |
| `yXTg` | func | 810 | `(i32 i32) -> (i32)` |
| `EAcm` | func | 2255 | `(i32 i32) -> ()` |
| `qiCd` | func | 911 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `uY2Z` | func | 2337 | `(i32 i32) -> (i32)` |
| `yFop` | func | 1822 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `W44T` | func | 2473 | `(i32) -> (i32)` |
| `r49E` | func | 3061 | `(i32 i32 i32 i32) -> ()` |
| `qiEY` | func | 2546 | `(i32 i32) -> ()` |
| `BVMz` | func | 2500 | `(i32 i32) -> (i32)` |
| `hQST` | func | 2256 | `(i32 f64) -> (i32)` |
| `NmLG` | func | 1214 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `jqVs` | func | 2970 | `(i32 i32) -> (i32)` |
| `kjQO` | func | 1115 | `(i32 i32) -> ()` |
| `tcRI` | func | 1473 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `yUz1` | func | 2181 | `(i32 i32) -> (i32)` |
| `ntAN` | func | 1482 | `(i32 i32 i32 i32) -> (i32)` |
| `JLeX` | func | 2013 | `(i32 f64) -> (i32)` |
| `X5ko` | func | 3012 | `(i32 i32) -> (i32 i32)` |
| `SP0B` | func | 3022 | `(i32) -> (i32 i32)` |
| `DPUt` | func | 3010 | `(i32 i32) -> (i32 i32)` |
| `FXQO` | func | 1883 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `cIm7` | func | 3132 | `(i32) -> ()` |
| `MQuE` | func | 1816 | `() -> (i32)` |
| `JB0z` | func | 2069 | `(i32 i32) -> (i32)` |
| `EdmQ` | func | 1221 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `JJqE` | func | 3177 | `(i32) -> (i32)` |
| `xw4r` | func | 1389 | `(i32 f64 f64) -> (i32)` |
| `OJhI` | func | 2591 | `(i32 i32) -> ()` |
| `vEVG` | func | 1550 | `(i32 i32 i32 i32) -> (i32)` |
| `hf1g` | global | 2 | `` |
| `hSVp` | func | 735 | `(i32 i32 i32 i32) -> (i32)` |
| `JNft` | func | 1483 | `(i32) -> (i32)` |
| `RCCg` | func | 1388 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `FQkF` | func | 3020 | `(i32) -> (i32 i32)` |
| `zPeb` | func | 1953 | `(i32 i32 i32 i32) -> ()` |
| `kPCy` | func | 2474 | `(i32) -> (i32)` |
| `PfyR` | func | 1723 | `(i32) -> (i32)` |
| `nryR` | func | 1336 | `(i32 i32 i32) -> (i32)` |
| `Es1U` | func | 3009 | `(i32 i32) -> (i32 i32)` |
| `J6eP` | func | 1588 | `(i32 i32) -> ()` |
| `ZTbm` | func | 1434 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `u2eb` | func | 3070 | `(i32 i32 i32) -> ()` |
| `FEI6` | func | 3006 | `(i32 i32) -> (i32 i32)` |
| `iQem` | func | 2470 | `(i32) -> (i32)` |
| `h7MV` | func | 568 | `(i32 i32 i32) -> (i32)` |
| `VvnT` | func | 1441 | `(i32) -> (i32)` |
| `azO1` | func | 2149 | `(i32 i32) -> (i32)` |
| `XFRQ` | func | 1296 | `(i32 i32) -> (i32)` |
| `gPb7` | func | 737 | `(i32) -> (i32)` |
| `qdBI` | func | 2489 | `(i32) -> (i32)` |
| `Mu7T` | func | 1264 | `(i32 i32 i32) -> (i32)` |
| `D82r` | func | 678 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `RxDQ` | func | 2785 | `(i32) -> (i32)` |
| `T8J9` | func | 1502 | `(i32 i32) -> (i32)` |
| `zfaE` | func | 2369 | `(i32 i32) -> (i32)` |
| `A4YC` | func | 1837 | `(i32 i32 i32 i32) -> (i32)` |
| `C9nd` | func | 2455 | `(i32) -> (i32)` |
| `Jysx` | func | 668 | `(i32 i32) -> (i32)` |
| `rOTa` | func | 3126 | `(i32 i32 i32) -> ()` |
| `uQNs` | func | 3007 | `(i32 i32) -> (i32 i32)` |
| `pK8K` | func | 2951 | `() -> ()` |
| `DCSG` | func | 1174 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `VzGJ` | func | 2558 | `() -> (i32)` |
| `Vekf` | func | 1409 | `(i32 i32) -> (i32)` |
| `F0BS` | func | 2338 | `(i32 i32) -> (i32)` |
| `R1w9` | func | 3099 | `() -> (i32)` |
| `tZyt` | func | 3036 | `() -> (i32 i32)` |
| `btpk` | func | 2499 | `(i32 i32) -> (i32)` |
| `DCQg` | func | 2046 | `(i32 i32) -> ()` |
| `Lt7M` | func | 1114 | `(i32 i32) -> (i32)` |
| `OXrK` | func | 2454 | `(i32 i32) -> ()` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 754 · max 754
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2639760, `i32` = i32.const 2640340

## Functions

- 2,915 bodies · 4,042,889 code bytes · avg 1.4 KB
- instruction scan: 2,915 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 157 |
| <= 64 bytes | 114 |
| <= 128 bytes | 257 |
| <= 256 bytes | 377 |
| <= 512 bytes | 673 |
| <= 1024 bytes | 573 |
| <= 2048 bytes | 428 |
| <= 4096 bytes | 180 |
| <= 8192 bytes | 91 |
| <= 16384 bytes | 31 |
| > 16384 bytes | 34 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32) -> ()` | 217 | 194,730 | 88,375 | local.get×25902, i32.const×9917, i32.load×5640, local.set×4735, local.tee×4639 |
| 1 | `(i32 i32 i32 i32 i32) -> ()` | 147 | 112,325 | 54,451 | local.get×15156, i32.const×6534, i32.add×3194, local.set×3087, i32.load×2951 |
| 2 | `(i32 i32 i32 i32 i32 i32) -> ()` | 130 | 46,544 | 21,400 | local.get×6231, i32.const×2827, local.set×1224, i32.add×1128, i32.load×1019 |
| 3 | `(i32 i32) -> ()` | 125 | 48,670 | 22,528 | local.get×6337, i32.const×2249, local.set×1324, local.tee×1179, i32.load×1037 |
| 4 | `(i32 i32) -> ()` | 59 | 29,627 | 14,267 | local.get×4192, i32.const×1730, i32.load×1042, local.set×931, i32.add×815 |
| 5 | `(i32 i32) -> ()` | 90 | 26,038 | 12,563 | local.get×3702, i32.const×1379, local.set×779, i32.load×721, local.tee×698 |
| 6 | `(i32 i32 i32 i32 i32) -> ()` | 135 | 32,562 | 16,141 | local.get×4566, i32.const×2205, local.set×1141, i32.add×1062, local.tee×800 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 58 | 21,485 | 10,526 | local.get×2903, i32.const×1490, local.set×728, i32.add×591, local.tee×504 |
| 8 | `(i32 i32) -> ()` | 93 | 19,080 | 9,200 | local.get×2643, i32.const×1025, local.tee×571, local.set×554, i32.load×531 |
| 9 | `(i32 i32 i32 i32) -> ()` | 105 | 26,545 | 12,837 | local.get×3810, i32.const×1624, local.set×997, i32.add×682, i32.load×663 |
| 10 | `(i32 i32 i32 i32) -> ()` | 53 | 24,505 | 11,634 | local.get×3005, i32.const×1276, local.tee×731, end×592, i32.load×586 |
| 11 | `(i32 i32 i32) -> (i32)` | 76 | 22,943 | 10,770 | local.get×2875, i32.const×1237, i32.load×806, local.set×500, end×464 |
| 12 | `(i32 i32 i32) -> (i32)` | 77 | 18,924 | 8,934 | local.get×2485, i32.const×1224, i32.load×559, i32.add×543, local.set×525 |
| 13 | `(i32 i32 i32 i32 i32 i32) -> ()` | 125 | 19,810 | 8,875 | local.get×2493, i32.const×1111, local.set×430, local.tee×385, i32.load×382 |
| 16 | `(i32 i32) -> ()` | 96 | 31,834 | 14,861 | local.get×4482, i32.const×1910, i32.add×763, local.set×692, i32.load×669 |
| 17 | `(i32) -> ()` | 78 | 20,163 | 9,380 | local.get×2603, i32.const×1119, i32.add×574, local.tee×510, local.set×502 |
| 23 | `(i32 i32) -> ()` | 82 | 29,023 | 13,043 | local.get×4618, i32.const×1456, i32.store×702, i32.add×689, local.tee×645 |
| 25 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 64 | 24,289 | 11,198 | local.get×2682, i32.const×1711, local.set×821, end×663, block×465 |
| 27 | `(i32 i32 i32 i32 i32) -> ()` | 68 | 22,728 | 10,576 | local.get×3337, i32.const×1240, local.tee×731, i32.add×436, local.set×333 |
| 33 | `(i32 i32 i32 i32 i32) -> ()` | 65 | 18,015 | 8,704 | local.get×2378, i32.const×1095, local.set×628, local.tee×459, i32.add×442 |
| 64 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 99 | 32,154 | 15,014 | local.get×4317, i32.const×1963, i32.load×986, local.set×902, i32.add×812 |
| 196 | `(i32 i32) -> ()` | 10 | 26,597 | 12,807 | local.get×4506, i32.load×1211, i32.const×1022, end×797, i32.add×734 |
| 225 | `(i32) -> ()` | 19 | 23,156 | 10,851 | local.get×2722, i32.load×1494, i32.const×1177, local.tee×1008, end×853 |
| 721 | `(i32 i32) -> ()` | 139 | 42,852 | 20,210 | local.get×5266, i32.const×2331, local.tee×1194, i32.add×1062, local.set×1004 |
| 722 | `(i32 i32 i32 i32) -> ()` | 54 | 21,809 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 1577 | `(i32 i32) -> (i32)` | 180 | 54,752 | 19,856 | local.get×6592, i32.const×2623, i64.store×1913, i64.const×1078, i64.load×1056 |
| 1976 | `(i32 i32) -> ()` | 110 | 40,258 | 17,890 | local.get×5235, i32.const×1685, local.set×903, local.tee×774, end×686 |
| 2587 | `(i32 i32) -> ()` | 397 | 142,048 | 64,173 | local.get×18436, i32.const×8000, local.set×3840, i32.load×3163, end×2815 |
| 2865 | `(i32 i32 i32 i32) -> ()` | 137 | 31,358 | 14,274 | local.get×4256, i32.const×1515, local.tee×741, local.set×690, br_if×629 |
| 2883 | `(i32 i32) -> ()` | 136 | 33,872 | 15,183 | local.get×4267, i32.const×2015, local.set×798, local.tee×742, i32.add×699 |

## Embedded strings (data segments)

60 printable strings ≥6 chars; largest:

```
beaver_lumberjackchefdwarf_blue_hairdwarf_braided_hairdwarf_childdwarf_forked_bearddwarf_ginger_bearddwarf_grey_bearddwarf_hair_bunsdwarf_purple_bearddwarf_red_hairdwarf_short_beardfarmerfarmer_gillfi
DEEJJJJJJHHHHEEDDDDDDHHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDEEDEEEEEEDEDEDHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
ZombieGrunt1ZombieGrunt2ZombieGrunt3ZombieHurt1ZombieHurt2ZombieHurt3ZombieHurt4bassbassattackbdbearRoar1bearRoar2bearRoar3bearRoar4bearRoar5beepbigDrumSwish1bigDrumSwish2bigDrumSwish3bowbucketEmpty1b
atlasSamplerfs_atlas1CANVAS_ALPHA_ONELIGHTINGfs_atlas1_restfs_atlasnfs_atlasn_restfs_nonefs_none_restfs_singlefs_single_restvs_packedSINGLE_ANIMATEDSINGLE_TEXTUREvs_packed_animvs_unpackedvs_unpacked_l
                                                                                                skin_1_0skin_1_1skin_1_2skin_1_3skin_1_4hat_0_0hat_0_1hat_0_2hat_0_3hat_0_4hat_0_5hat_0_6hat_13_0hat_13_
456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;
alliumaspen_saplingattached_banana_stemattached_banana_stem_wrapperattached_melon_stemattached_melon_stem_wrapperautumn_fernazure_bluetbanana_stembeetroot_plant_stage0beetroot_plant_stage1beetroot_pla
````````````````````````````````^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZYYYYYYYY
ue:keydownkeyupmousedownmouseuptouchstarttouchendMouse1Mouse2Mouse3Alt+Left ClickF2F4F5F8F9Digit0Digit1Digit2Digit3Digit4Digit5Digit6Digit7Digit8Digit9KeyQKeyWKeyEKeyRKeyTKeyYKeyUKeyIKeyOKeyPKeyAKeySK
targetcolourmaxUpSpeedforceinclinationazimuthturbidityluminancemieCoefficientmieDirectionalGsunPositionvertexTintxCameraOffsetyCameraOffsetzCameraOffsetditheringinfiniteDistanceuseSunPositionrgba(tran
schema23canChangeblockReachezBridgingezBridgingGrowMsezToweringezToweringGrowMscrouchingSpeedwalkingSpeedrunningSpeedjumpAmountairJumpCountjumpHoldThrustbunnyhopMaxMultiplierskyBoxminChunkAddDistshowP
Aspen LeavesAspen LogAspen SaplingAspen Wood PlanksBarkless Aspen LogBarkless Cedar LogBarkless Jungle LogBarkless Maple LogBarkless Pine LogBarkless Plum LogBlack PlanksBlue PlanksBookshelfBowl of Cr
Acacia LeavesAcacia LogAcacia SaplingAcacia Wood PlanksAlchemy TableBarkless Acacia LogBarkless Birch LogBarkless Dark Oak LogBarkless Elm LogBarkless Oak LogBarkless Spruce LogBirch LeavesBirch LogBi
a draw with a base vertex: WebGL2 has none, so it is skippedan indexed draw without an index buffer is skippeda draw's pipeline has no GL program: it is skippeda draw's program failed to link: it is s
standingsittingzombieglidingdrivingsleepingridingShearedSaddledskyblockHeldBossBoxBloxdBlockPersonLeaderboardParticleEmitterTier 1Tier 2Tier 3Tier 4Tier 5PlayerPigCowSheepHorseCamelIron Goofy GolemGol
R8UnormR32FloatRgba8UnormBgra8UnormDepth24PlusDepth24PlusStencil8Rgba16UintRgba32UintRgba32FloatRg32FloatUV2VERTEXCOLORVERTEXALPHAOPACITYRGBEMISSIVELITE_REFLECTION_LUMINANCEREFLECTIONMAP_OPPOSITEZROUG
EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEJJJJJJJJEEEEEEEEEEEEEJJJJJJJJEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEJJJJEEEEEEEEEEEEEEJJJJJJ
,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123
called `Result::unwrap()` on an `Err` valueANGLE_instanced_arraysEXT_blend_minmaxEXT_color_buffer_floatEXT_color_buffer_half_floatEXT_float_blendEXT_frag_depthEXT_shader_texture_lodEXT_sRGBEXT_texture
Player_Atlasbee_set_3_attachable_bluebee_set_3_attachable_greenbee_set_3_attachable_redmedieval_set_1_attachable_bluemedieval_set_1_attachable_greenmedieval_set_1_attachable_purplemedieval_set_1_attac
```

## Opcode histogram (aggregated)

| opcode | count |
|---|---:|
| `local.get` | 540,419 |
| `i32.const` | 226,362 |
| `local.tee` | 100,494 |
| `i32.load` | 94,774 |
| `local.set` | 94,131 |
| `i32.add` | 87,372 |
| `end` | 79,404 |
| `br_if` | 64,502 |
| `i32.store` | 46,859 |
| `block` | 37,322 |
| `i64.const` | 32,728 |
| `i64.store` | 31,836 |
| `if` | 30,357 |
| `call` | 29,521 |
| `i32.sub` | 24,726 |
| `i64.load` | 23,707 |
| `br` | 23,172 |
| `i32.eqz` | 19,605 |
| `select` | 16,941 |
| `i32.shl` | 16,489 |
| `i32.and` | 16,374 |
| `i32.ne` | 15,888 |
| `i32.load8_u` | 15,024 |
| `i32.eq` | 13,903 |
| `i32.store8` | 12,645 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 2,915/2,915 (degraded: 0)
