# WASM module: `bloxd_wasm_webgl1_bg`

> environment **preprod.bloxd.io** · build `gw4e3a.937868ec` · analyzed 2026-11-27T02:05:20+09:00
> source: https://preprod.bloxd.io/static/media/bloxd_wasm_webgl1_bg.9439c3bfba4968035055.wasm
> 4,879,367 bytes (4.7 MB) · sha256 `ef3b6328394821ae…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- size 4,879,736 → 4,879,367 bytes (-369)
- code bytes 4,026,524 → 4,026,528
- data bytes 806,705 → 806,316
- name-section module id `3a3757d6839d645e.10684` → `90a82f6c28d83e02.10684` (numeric version suffix unchanged — same module version, re-randomized prefix)
- export identifiers rotated by the obfuscator: 1/160 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,890 / 282 |
| Exports / imports | 160 / 283 |
| Code bytes (function bodies) | 4,026,528 (3.8 MB) |
| Total local variables | 30,898 |
| Instructions (scanable bodies) | 1,888,565 |
| Data segments / bytes | 3,773 / 806,316 |
| Element segments / entries | 1 / 734 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `90a82f6c28d83e02.10684` |
| Sections | 11 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,516 | 178 |
| 2 | import | 3,402 | 283 |
| 3 | function | 2,942 | 2890 |
| 4 | table | 7 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,281 | 160 |
| 9 | element | 1,475 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 4,031,836 | 2890 |
| 11 | data | 836,811 | 3773 |
| 0 | custom:name | 30 | — |

## Types

178 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32) -> ()` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

283 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `gReb.Y2bq` | memory | `[128..14648]` |
| 0 | `gReb.EogD` | func | `(i32) -> (f64)` |
| 1 | `gReb.WcKn` | func | `() -> (i32)` |
| 2 | `gReb.Gry1` | func | `(i32 i32 i32) -> (i32)` |
| 3 | `gReb.brvq` | func | `(i32) -> ()` |
| 4 | `gReb.Q3Xk` | func | `(i32 i32) -> (i32)` |
| 5 | `gReb.dgpy` | func | `(i32) -> (i32)` |
| 6 | `gReb.f0aD` | func | `(i32 i32 i32) -> (i32)` |
| 7 | `gReb.oitp` | func | `(i32 i32 i32 i32) -> (i32)` |
| 8 | `gReb.fYj6` | func | `(i32) -> (i32)` |
| 9 | `gReb.O0qW` | func | `(i32 i32) -> ()` |
| 10 | `gReb.MNgV` | func | `(i32 i32) -> ()` |
| 11 | `gReb.ppCt` | func | `(i32 i32 i32 i32) -> (i32)` |
| 12 | `gReb.n2Ar` | func | `(i32 i32) -> (i32)` |
| 13 | `gReb.KybN` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 14 | `gReb.l1q5` | func | `(i32) -> (i32)` |
| 15 | `gReb.NSlh` | func | `(i32 i32) -> (i32)` |
| 16 | `gReb.VA6X` | func | `(i32 i32) -> (i32)` |
| 17 | `gReb.EZbY` | func | `(i32 i32) -> ()` |
| 18 | `gReb.VyLL` | func | `(i32) -> (i32)` |
| 19 | `gReb.qlTu` | func | `(i32) -> (i32)` |
| 20 | `gReb.Uait` | func | `(i32) -> (i32)` |
| 21 | `gReb.szb1` | func | `(i32) -> ()` |
| 22 | `gReb.fQeW` | func | `(i32 i32) -> ()` |
| 23 | `gReb.VwPr` | func | `(i32 i32) -> ()` |
| 24 | `gReb.Etzm` | func | `(i32) -> (i32)` |
| 25 | `gReb.v2P2` | func | `(i32 i32) -> ()` |
| 26 | `gReb.FAyU` | func | `(i32 i32) -> (i32)` |
| 27 | `gReb.CjKj` | func | `(i32 i32 i32 i32) -> ()` |
| 28 | `gReb.vEPz` | func | `(i32 i32) -> (i32)` |
| 29 | `gReb.jeui` | func | `(i32 i32 i32) -> (i32)` |
| 30 | `gReb.VGHF` | func | `(i32) -> (i32)` |
| 31 | `gReb.Mwud` | func | `() -> (f64)` |
| 32 | `gReb.frPM` | func | `(i32 i32) -> ()` |
| 33 | `gReb.uhb6` | func | `(i32) -> (i32)` |
| 34 | `gReb.OjQJ` | func | `(i32) -> (i32)` |
| 35 | `gReb.SA9w` | func | `(i32 i32 i32) -> (i32)` |
| 36 | `gReb.PV2b` | func | `(i32) -> (i32)` |
| 37 | `gReb.jb8e` | func | `(i32) -> (i32)` |
| 38 | `gReb.X1ZV` | func | `(i32) -> (i32)` |
| 39 | `gReb.sIkh` | func | `(i32 i32) -> (i32)` |
| 40 | `gReb.EHEr` | func | `(i32 i32 i32 i32) -> ()` |
| 41 | `gReb.k14h` | func | `(i32) -> (i32)` |
| 42 | `gReb.DqSx` | func | `(i32 i32 i32 i32) -> ()` |
| 43 | `gReb.Gf0L` | func | `(i32) -> (i32)` |
| 44 | `gReb.b4OF` | func | `(i32 i32 i32 i32) -> ()` |
| 45 | `gReb.XvOh` | func | `(i32 i32 i32) -> (i32)` |
| 46 | `gReb.fVAG` | func | `(i32 f64 f64 f64 f64) -> ()` |
| 47 | `gReb.O6V4` | func | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64) -> ()` |
| 48 | `gReb.Vxx3` | func | `(i32 i32 i32) -> ()` |
| 49 | `gReb.UP82` | func | `(i32 i32 i32) -> ()` |
| 50 | `gReb.totF` | func | `(i32 i32 i32) -> ()` |
| 51 | `gReb.ubhC` | func | `(i32 i32) -> ()` |
| 52 | `gReb.d5mq` | func | `(i32 i32) -> ()` |
| 53 | `gReb.dpd1` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 54 | `gReb.sZau` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 55 | `gReb.Ot4x` | func | `(i32 f32 f32) -> ()` |
| 56 | `gReb.Q9P0` | func | `(i32 f32 f32) -> ()` |
| 57 | `gReb.A2uN` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 58 | `gReb.t3ot` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 59 | `gReb.lxOM` | func | `(i32 i32 i32 i32) -> ()` |
| 60 | `gReb.LDfT` | func | `(i32 i32 i32 i32) -> ()` |
| 61 | `gReb.hWdW` | func | `(i32 i32 i32) -> ()` |
| 62 | `gReb.pbxo` | func | `(i32 i32 i32) -> ()` |
| 63 | `gReb.ezVP` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 64 | `gReb.nlsS` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 65 | `gReb.IDfK` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 66 | `gReb.cbiZ` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 67 | `gReb.UWDi` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 68 | `gReb.hoAE` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 69 | `gReb.RQ3Q` | func | `(i32) -> (i32)` |
| 70 | `gReb.Ioai` | func | `(i32) -> ()` |
| 71 | `gReb.Ssgw` | func | `(i32) -> (i32)` |
| 72 | `gReb.WmxP` | func | `(i32 i32) -> (i32)` |
| 73 | `gReb.LHnx` | func | `(i32 i32 i32) -> (i32)` |
| 74 | `gReb.zvAo` | func | `(i32 i32 i32) -> ()` |
| 75 | `gReb.LmnG` | func | `(i32 i32 i32 i32) -> (i32)` |
| 76 | `gReb.B6Ji` | func | `() -> (f64)` |
| 77 | `gReb.XWlh` | func | `() -> (f64)` |
| 78 | `gReb.Qau4` | func | `(i32 i32) -> ()` |
| 79 | `gReb.ZJjA` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 80 | `gReb.d0y3` | func | `(i32 i32 i32) -> ()` |
| 81 | `gReb.IMcG` | func | `(i32 i32 i32) -> ()` |
| 82 | `gReb.waw6` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 83 | `gReb.Tf3V` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 84 | `gReb.GPdd` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 85 | `gReb.mv6r` | func | `(i32 i32) -> ()` |
| 86 | `gReb.zlVE` | func | `(i32 i32) -> ()` |
| 87 | `gReb.jB0d` | func | `(i32) -> (i32)` |
| 88 | `gReb.uJID` | func | `(i32 i32) -> ()` |
| 89 | `gReb.GmHd` | func | `(i32 i32) -> ()` |
| 90 | `gReb.unYe` | func | `(i32 i32 i32) -> ()` |
| 91 | `gReb.qix9` | func | `(i32 i32 i32) -> ()` |
| 92 | `gReb.qrsV` | func | `(i32) -> (i32)` |
| 93 | `gReb.Pcfk` | func | `(i32) -> (i32)` |
| 94 | `gReb.K1mp` | func | `(i32 i32) -> (i32)` |
| 95 | `gReb.TUbo` | func | `(i32 i32) -> (i32)` |
| 96 | `gReb.nhpt` | func | `(i32 i32) -> ()` |
| 97 | `gReb.IFAz` | func | `(i32 i32) -> ()` |
| 98 | `gReb.tsXV` | func | `(i32 i32 i32) -> ()` |
| 99 | `gReb.PIp0` | func | `(i32 i32 i32) -> ()` |
| 100 | `gReb.xofn` | func | `(i32 i32 i32 i32) -> ()` |
| 101 | `gReb.ubyK` | func | `(i32 i32 i32 i32) -> ()` |
| 102 | `gReb.mpzi` | func | `(i32 i32 f32) -> ()` |
| 103 | `gReb.qmKP` | func | `(i32 i32 f32) -> ()` |
| 104 | `gReb.HvL4` | func | `(i32 i32 i32) -> ()` |
| 105 | `gReb.RE1A` | func | `(i32 i32 i32) -> ()` |
| 106 | `gReb.XZOO` | func | `(i32 i32 i32) -> ()` |
| 107 | `gReb.vJCo` | func | `(i32 i32 f32 f32) -> ()` |
| 108 | `gReb.sIWy` | func | `(i32 i32 f32 f32) -> ()` |
| 109 | `gReb.Z4gG` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 110 | `gReb.O7cW` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 111 | `gReb.QUCS` | func | `(i32 i32) -> ()` |
| 112 | `gReb.eW9n` | func | `(i32 i32) -> ()` |
| 113 | `gReb.Jwbz` | func | `(i32 i32) -> ()` |
| 114 | `gReb.R9Vw` | func | `(i32 i32) -> ()` |
| 115 | `gReb.m9vU` | func | `(i32) -> (i32)` |
| 116 | `gReb.RMN7` | func | `(i32) -> (i32)` |
| 117 | `gReb.oC9Q` | func | `(i32) -> (i32)` |
| 118 | `gReb.peSa` | func | `(i32) -> (i32)` |
| 119 | `gReb.ueBV` | func | `(i32 i32) -> ()` |
| 120 | `gReb.QQOm` | func | `(i32 i32) -> ()` |
| 121 | `gReb.et1l` | func | `(i32 i32) -> ()` |
| 122 | `gReb.UScR` | func | `(i32 i32) -> ()` |
| 123 | `gReb.mFrY` | func | `(i32 i32) -> ()` |
| 124 | `gReb.ojdA` | func | `(i32 i32) -> ()` |
| 125 | `gReb.VXNc` | func | `(i32 i32) -> (i32)` |
| 126 | `gReb.hcTH` | func | `(i32 i32) -> (i32)` |
| 127 | `gReb.AhpA` | func | `(i32 i32 i32 i32) -> ()` |
| 128 | `gReb.VEyj` | func | `(i32 i32 i32 i32) -> ()` |
| 129 | `gReb.bIvN` | func | `(i32 i32) -> ()` |
| 130 | `gReb.JciK` | func | `(i32 i32) -> ()` |
| 131 | `gReb.Crz5` | func | `(i32) -> (i32)` |
| 132 | `gReb.zcpP` | func | `(i32 i32) -> ()` |
| 133 | `gReb.oOse` | func | `(i32 i32) -> ()` |
| 134 | `gReb.D8xe` | func | `(i32 i32 i32) -> ()` |
| 135 | `gReb.obao` | func | `(i32 i32 i32) -> ()` |
| 136 | `gReb.ss1X` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 137 | `gReb.dkGp` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 138 | `gReb.CZ6W` | func | `(i32 i32) -> ()` |
| 139 | `gReb.KShL` | func | `(i32 i32 i32) -> ()` |
| 140 | `gReb.J43P` | func | `(i32 i32 i32) -> ()` |
| 141 | `gReb.K0Es` | func | `(i32 i32 i32 i32) -> (i32)` |
| 142 | `gReb.Rbif` | func | `(i32 i32 i32 i32) -> (i32)` |
| 143 | `gReb.wUIp` | func | `(i32 i32 i32) -> ()` |
| 144 | `gReb.daas` | func | `(i32 i32 i32) -> ()` |
| 145 | `gReb.zgJ3` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 146 | `gReb.zbpE` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 147 | `gReb.Ax2D` | func | `(i32 i32 i32) -> (i32)` |
| 148 | `gReb.DYVd` | func | `(i32 i32 i32) -> (i32)` |
| 149 | `gReb.dRMN` | func | `(i32 i32 i32) -> (i32)` |
| 150 | `gReb.HqyK` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 151 | `gReb.YUNc` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 152 | `gReb.KHEY` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 153 | `gReb.yIuB` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 154 | `gReb.EIA0` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 155 | `gReb.LLTk` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 156 | `gReb.g1Co` | func | `(i32) -> (i32)` |
| 157 | `gReb.CMgJ` | func | `(i32) -> (i32)` |
| 158 | `gReb.q7d4` | func | `(i32) -> (i32)` |
| 159 | `gReb.ocrT` | func | `(i32) -> (i32)` |
| 160 | `gReb.FFId` | func | `() -> (i32)` |
| 161 | `gReb.zJ8v` | func | `() -> (i32)` |
| 162 | `gReb.Iqc5` | func | `() -> (i32)` |
| 163 | `gReb.g64g` | func | `() -> (i32)` |
| 164 | `gReb.a6lq` | func | `(i32 i32) -> (i32)` |
| 165 | `gReb.TOja` | func | `(i32) -> ()` |
| 166 | `gReb.fn9o` | func | `(i32 i32) -> (i32)` |
| 167 | `gReb.kFb3` | func | `(i32) -> (i32)` |
| 168 | `gReb.YP4V` | func | `(i32) -> (i32)` |
| 169 | `gReb.nRzg` | func | `(i32) -> (i32)` |
| 170 | `gReb.IXDY` | func | `(i32) -> ()` |
| 171 | `gReb.W4du` | func | `(i32 i32 i32) -> (i32)` |
| 172 | `gReb.WiQg` | func | `(i32) -> (i32)` |
| 173 | `gReb.HPXa` | func | `(i32) -> (i32)` |
| 174 | `gReb.Liwf` | func | `(i32 i32) -> (i32)` |
| 175 | `gReb.iE7t` | func | `(i32 i32 i32) -> (i32)` |
| 176 | `gReb.ab8N` | func | `(i32 i32 i32) -> (i32)` |
| 177 | `gReb.dp87` | func | `(i32) -> (i32)` |
| 178 | `gReb.Xu1H` | func | `(i32) -> (i32)` |
| 179 | `gReb.Iy86` | func | `(i32) -> (i32)` |
| 180 | `gReb.rJyM` | func | `(i32 i32 i32 i32) -> ()` |
| 181 | `gReb.lzDL` | func | `(i32 i32 i32 i32) -> ()` |
| 182 | `gReb.DMuN` | func | `(i32 i32) -> ()` |
| 183 | `gReb.goTS` | func | `(i32 i32 i32) -> ()` |
| 184 | `gReb.i3V5` | func | `(i32 i32) -> ()` |
| 185 | `gReb.HaFu` | func | `(i32 i32 i32) -> ()` |
| 186 | `gReb.qUqc` | func | `(i32 i32) -> ()` |
| 187 | `gReb.ZW2B` | func | `(i32 i32) -> ()` |
| 188 | `gReb.wFt5` | func | `(i32) -> (i32)` |
| 189 | `gReb.Vwts` | func | `(i32 i32) -> (i32)` |
| 190 | `gReb.a53e` | func | `(i32) -> ()` |
| 191 | `gReb.Jyp6` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 192 | `gReb.zVFn` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 193 | `gReb.mfcr` | func | `(i32 i32) -> ()` |
| 194 | `gReb.AJO6` | func | `(i32 i32) -> ()` |
| 195 | `gReb.rldA` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 196 | `gReb.nt7x` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 197 | `gReb.b8wG` | func | `(i32 f32) -> ()` |
| 198 | `gReb.ps2U` | func | `(i32 f32) -> ()` |
| 199 | `gReb.jnEv` | func | `(i32 i32) -> ()` |
| 200 | `gReb.Nb2F` | func | `(i32 i32) -> ()` |
| 201 | `gReb.CeUU` | func | `(i32) -> (i32)` |
| 202 | `gReb.v24P` | func | `(i32) -> (i32)` |
| 203 | `gReb.Pkl3` | func | `(i32) -> (i32)` |
| 204 | `gReb.BgmP` | func | `(i32) -> (i32)` |
| 205 | `gReb.nmvN` | func | `(i32 i32 i32) -> ()` |
| 206 | `gReb.swbg` | func | `(i32 i32 i32) -> ()` |
| 207 | `gReb.LcUU` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 208 | `gReb.jwMQ` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 209 | `gReb.hkiy` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 210 | `gReb.xt4m` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 211 | `gReb.I8Cb` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 212 | `gReb.jIGV` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 213 | `gReb.eDm6` | func | `(i32 i32) -> ()` |
| 214 | `gReb.kzRP` | func | `(i32 i32) -> ()` |
| 215 | `gReb.j0TY` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 216 | `gReb.mUc4` | func | `(i32 i32 i32 f32) -> ()` |
| 217 | `gReb.zaX9` | func | `(i32 i32 i32 f32) -> ()` |
| 218 | `gReb.FZo1` | func | `(i32) -> (i32)` |
| 219 | `gReb.Hjnn` | func | `(i32) -> (i32)` |
| 220 | `gReb.g9Su` | func | `(i32 i32) -> ()` |
| 221 | `gReb.w5V9` | func | `(i32 i32) -> ()` |
| 222 | `gReb.cHrE` | func | `(i32 i32 i32) -> (i32)` |
| 223 | `gReb.TIBu` | func | `(i32) -> (i32)` |
| 224 | `gReb.bIpm` | func | `(i32) -> (i32)` |
| 225 | `gReb.PJUu` | func | `(i32 i32) -> ()` |
| 226 | `gReb.U1Xi` | func | `(i32 i32 i32) -> (i32)` |
| 227 | `gReb.YBpQ` | func | `(i32 i32) -> ()` |
| 228 | `gReb.BaH2` | func | `(i32 i32) -> ()` |
| 229 | `gReb.eT0O` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 230 | `gReb.nlcd` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 231 | `gReb.qVVq` | func | `(i32 i32 i32) -> ()` |
| 232 | `gReb.QXSo` | func | `(i32 i32 i32) -> ()` |
| 233 | `gReb.JjtK` | func | `(i32 i32) -> ()` |
| 234 | `gReb.aka8` | func | `(i32 i32) -> ()` |
| 235 | `gReb.QOZR` | func | `(i32 i32) -> ()` |
| 236 | `gReb.TAXY` | func | `(i32 i32) -> ()` |
| 237 | `gReb.QyCp` | func | `(i32 i32) -> ()` |
| 238 | `gReb.PJGs` | func | `(i32 i32) -> ()` |
| 239 | `gReb.TUV8` | func | `(i32 f32 f32) -> ()` |
| 240 | `gReb.rzau` | func | `(i32 f32 f32) -> ()` |
| 241 | `gReb.SpwM` | func | `(i32 i32 i32 i32) -> ()` |
| 242 | `gReb.gmbk` | func | `(i32 i32 i32 i32) -> ()` |
| 243 | `gReb.ioOC` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 244 | `gReb.IKxg` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 245 | `gReb.OMmn` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 246 | `gReb.ezo8` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 247 | `gReb.SzjX` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 248 | `gReb.MX8w` | func | `(i32 i32 i32 i32) -> ()` |
| 249 | `gReb.Ttdp` | func | `(i32 i32 i32 i32) -> ()` |
| 250 | `gReb.iDNK` | func | `(i32) -> ()` |
| 251 | `gReb.Zw8h` | func | `(i32 i32) -> ()` |
| 252 | `gReb.MyF8` | func | `(i32 i32) -> ()` |
| 253 | `gReb.HgUV` | func | `(i32 i32) -> ()` |
| 254 | `gReb.asgn` | func | `(i32 i32) -> ()` |
| 255 | `gReb.U02B` | func | `(i32 i32) -> ()` |
| 256 | `gReb.RnPR` | func | `(i32 i32) -> ()` |
| 257 | `gReb.FYje` | func | `(i32 i32) -> ()` |
| 258 | `gReb.CIWp` | func | `(i32 i32) -> ()` |
| 259 | `gReb.VAc5` | func | `(i32) -> (i32)` |
| 260 | `gReb.S2e5` | func | `(i32) -> (i32)` |
| 261 | `gReb.FAee` | func | `(i32) -> (i32)` |
| 262 | `gReb.S1cr` | func | `(i32) -> (i32)` |
| 263 | `gReb.sqwY` | func | `(i32) -> ()` |
| 264 | `gReb.wlYZ` | func | `(i32 i32 i32 i32) -> ()` |
| 265 | `gReb.suzC` | func | `(i32) -> ()` |
| 266 | `gReb.EANq` | func | `(i32) -> (i32)` |
| 267 | `gReb.PkwO` | func | `(i32) -> (i32)` |
| 268 | `gReb.Bcba` | func | `(i32) -> (i32)` |
| 269 | `gReb.K1Bz` | func | `(i32) -> (i32)` |
| 270 | `gReb.Tnha` | func | `(i32 i32) -> ()` |
| 271 | `gReb.qFVn` | func | `(i32) -> ()` |
| 272 | `gReb.EkzA` | func | `(i32 i32) -> ()` |
| 273 | `gReb.RPJ8` | func | `(i32) -> (i32)` |
| 274 | `gReb.RFyF` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 275 | `gReb.WlSi` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 276 | `gReb.F5Hb` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 277 | `gReb.mow0` | func | `(i32 i32) -> (i32)` |
| 278 | `gReb.S7xH` | func | `(i32 i32) -> (i32)` |
| 279 | `gReb.yiQy` | func | `(i32 i32) -> (i32)` |
| 280 | `gReb.v8lu` | func | `(i32 i32) -> (i32)` |
| 281 | `gReb.ZoI2` | func | `(i32 i32) -> (i32)` |

## Exports

160 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `mV3d` | func | 2476 | `(i32 i32) -> (i32)` |
| `cGC6` | func | 1564 | `(i32 i32) -> (i32)` |
| `YfVp` | func | 2318 | `(i32 i32) -> (i32)` |
| `ghxP` | func | 3137 | `(i32) -> (i32)` |
| `LOKf` | func | 2455 | `(i32) -> (i32)` |
| `tEJy` | func | 723 | `(i32 i32 i32 i32) -> (i32)` |
| `dWlM` | func | 3161 | `() -> (i32)` |
| `BVfd` | func | 1796 | `() -> (i32)` |
| `EeP9` | func | 2451 | `(i32) -> (i32)` |
| `quRh` | func | 2239 | `(i32 i32) -> ()` |
| `Gtw4` | func | 2465 | `(i32) -> (i32)` |
| `OAel` | func | 2768 | `(i32) -> (i32)` |
| `N2sE` | func | 731 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `vuqv` | func | 1157 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `DQFV` | func | 2462 | `(i32 i32) -> ()` |
| `Naj6` | func | 1423 | `() -> (i32)` |
| `NwTO` | func | 651 | `(i32 i32) -> (i32)` |
| `CUZE` | func | 1247 | `(i32 i32 i32) -> (i32)` |
| `bsrk` | global | 2 | `` |
| `PEBP` | func | 2270 | `(i32 i32) -> ()` |
| `W2uk` | func | 1199 | `(i32 i32 i32 i32) -> (i32)` |
| `sQm5` | func | 1308 | `(i32 i32) -> (i32)` |
| `u9OG` | func | 2474 | `(i32) -> (i32)` |
| `Lkbb` | func | 2050 | `(i32 i32) -> (i32)` |
| `Ch6Z` | func | 2978 | `(i32 i32) -> (i32 i32)` |
| `n9WD` | func | 2446 | `(i32) -> (i32)` |
| `YDM9` | func | 2967 | `(i32 i32 i32) -> (i32 i32)` |
| `e29L` | func | 1444 | `(i32 i32 i32 i32) -> ()` |
| `Cwmr` | func | 1419 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `Qlws` | func | 1473 | `(i32 i32) -> (i32)` |
| `o2cH` | func | 1737 | `(i32 i32) -> (i32)` |
| `AV1X` | func | 2974 | `(i32 i32) -> (i32 i32)` |
| `V0ba` | func | 1305 | `(i32) -> ()` |
| `qCxX` | func | 1097 | `(i32 i32) -> ()` |
| `jF7g` | func | 1461 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `EXUj` | func | 2448 | `(i32) -> (i32)` |
| `DzVP` | func | 1228 | `(i32 i32) -> (i32)` |
| `QDsA` | func | 1513 | `(i32 i32 i32) -> (i32)` |
| `iTya` | func | 1198 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `Aff1` | func | 1279 | `(i32 i32) -> (i32)` |
| `sQXN` | func | 2984 | `(i32) -> (i32 i32)` |
| `RhTX` | func | 684 | `(f64) -> (f64)` |
| `OFbF` | func | 1465 | `(i32 i32 i32 i32) -> (i32)` |
| `P2mM` | func | 2985 | `(i32) -> (i32 i32)` |
| `NJ8k` | func | 666 | `(i32 i32) -> (i32)` |
| `zrm1` | func | 2982 | `(i32) -> (i32 i32)` |
| `icjz` | func | 1374 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `xANO` | func | 2937 | `(i32 i32) -> (i32)` |
| `HWS1` | func | 1270 | `(i32) -> (i32)` |
| `hWeP` | func | 599 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `EdxT` | func | 2745 | `(i32) -> (i32)` |
| `U59Z` | func | 2403 | `(i32) -> (i32)` |
| `Az85` | func | 662 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `QTTd` | func | 728 | `(i32) -> (i32)` |
| `ilCp` | func | 2528 | `() -> (i32)` |
| `MW7Y` | func | 1912 | `(i32) -> (i32)` |
| `kCBy` | func | 1497 | `(i32 i32) -> (i32)` |
| `kgy4` | func | 2386 | `(i32) -> (i32)` |
| `gIW2` | func | 2976 | `(i32 i32) -> (i32 i32)` |
| `OL5V` | func | 2943 | `(i32 i32 i32 i32) -> (i32)` |
| `dsuA` | func | 1486 | `(i32 i32) -> (i32)` |
| `NGSJ` | func | 2483 | `(i32) -> (i32)` |
| `krzl` | func | 550 | `(i32 i32 i32) -> (i32)` |
| `OPI1` | func | 2561 | `(i32 i32) -> ()` |
| `APWW` | func | 3091 | `(i32) -> ()` |
| `TrPK` | func | 2977 | `(i32 i32) -> (i32 i32)` |
| `AnTF` | func | 1726 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `E5F7` | func | 2918 | `() -> ()` |
| `ENvK` | func | 2517 | `(i32 i32) -> ()` |
| `RtFg` | func | 1683 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `xtJt` | func | 1096 | `(i32 i32) -> (i32)` |
| `izsO` | func | 1801 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `st0Q` | func | 2445 | `(i32) -> (f64)` |
| `uIlp` | func | 2997 | `() -> (i32 i32)` |
| `vdHx` | func | 2475 | `(i32 i32) -> (i32)` |
| `MJ59` | func | 2738 | `(i32) -> (i32)` |
| `HpOe` | func | 3020 | `(i32 i32 i32 i32) -> ()` |
| `q85q` | func | 2361 | `(i32 i32 i32 i32) -> (i32)` |
| `LKlU` | func | 2184 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `I2Oz` | func | 877 | `(i32 i32) -> (i32)` |
| `QTgY` | func | 1836 | `(i32 i32 f64 f64 f64) -> ()` |
| `afou` | func | 1205 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `iCLI` | func | 1501 | `(i32 f64) -> (f64)` |
| `belY` | func | 3133 | `() -> (f64)` |
| `ZTES` | func | 906 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `MmQs` | func | 2800 | `(i32) -> (i32)` |
| `VTEZ` | func | 1426 | `(i32) -> (i32)` |
| `ywex` | func | 2949 | `(i32 i32) -> ()` |
| `IJr5` | func | 2996 | `() -> (i32 i32)` |
| `oWgn` | func | 2562 | `() -> (i32)` |
| `aF0O` | func | 2484 | `(i32) -> (i32)` |
| `NoM2` | global | 1 | `` |
| `VLSt` | func | 2450 | `(i32) -> (i32)` |
| `W5ST` | func | 1927 | `(i32) -> (i32)` |
| `kgdU` | func | 2998 | `() -> (i32 i32)` |
| `ON0K` | func | 3138 | `(i32) -> ()` |
| `B0Qr` | func | 2348 | `(i32 i32) -> (i32)` |
| `buoS` | func | 2452 | `(i32) -> ()` |
| `EYrI` | func | 1498 | `(i32 i32) -> (i32)` |
| `sEvl` | func | 2447 | `(i32) -> (i32)` |
| `Uoco` | func | 1324 | `(i32 i32 i32) -> (i32)` |
| `ukj5` | func | 2975 | `(i32 i32) -> (i32 i32)` |
| `ri1k` | func | 2453 | `(i32) -> (i32)` |
| `NOyR` | func | 2972 | `(i32 i32) -> (i32 i32)` |
| `wVt7` | func | 1576 | `(i32 i32) -> ()` |
| `AUon` | func | 2317 | `(i32 i32) -> (i32)` |
| `JqlF` | func | 2432 | `(i32) -> (i32)` |
| `D3kv` | func | 1962 | `(i32 i32) -> ()` |
| `QIZ0` | func | 1456 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `e0tQ` | func | 2454 | `(i32) -> (i32)` |
| `uGSd` | func | 750 | `(i32 i32 i32) -> (i32)` |
| `OX8O` | func | 2759 | `(i32) -> (i32)` |
| `ISfA` | func | 1581 | `(i32 f64 f64 f64) -> (i32)` |
| `WeGc` | func | 2009 | `(i32 f64 f64 f64) -> (i32)` |
| `YOsh` | func | 1396 | `(i32 i32) -> (i32)` |
| `C6tI` | func | 1929 | `(i32 i32 i32 i32) -> ()` |
| `dsQB` | func | 2240 | `(i32 f64) -> (i32)` |
| `VFl1` | func | 2431 | `(i32 i32) -> ()` |
| `IX8W` | func | 2402 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `rpaK` | func | 2131 | `(i32 i32) -> (i32)` |
| `AexA` | func | 2778 | `(i32) -> ()` |
| `EcNS` | func | 1844 | `(i32 i32) -> ()` |
| `r0PH` | func | 1989 | `(i32 f64) -> (i32)` |
| `g9ZZ` | func | 3085 | `(i32 i32 i32) -> ()` |
| `pMHc` | func | 2449 | `(i32) -> (i32)` |
| `LC1Z` | func | 2319 | `(i32 i32) -> (i32)` |
| `iDek` | func | 1870 | `(i32) -> ()` |
| `OgX4` | func | 3029 | `(i32 i32 i32) -> ()` |
| `kfWO` | func | 2986 | `(i32) -> (i32 i32)` |
| `dw9R` | func | 3058 | `() -> (i32)` |
| `A21i` | func | 1816 | `(i32 i32 i32 i32) -> (i32)` |
| `VpOu` | func | 1577 | `(i32 i32) -> ()` |
| `F8O5` | func | 2025 | `(i32 i32) -> ()` |
| `Q7V1` | func | 1854 | `(i32 i32) -> (i32)` |
| `IBj7` | func | 1618 | `(i32 i32 i32 i32) -> (i32)` |
| `z10H` | func | 895 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `WD8H` | func | 1719 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `WbPM` | func | 1466 | `(i32) -> (i32)` |
| `mQ3k` | func | 2466 | `(i32 i32) -> ()` |
| `b2yq` | func | 1252 | `(i32 i32 i32) -> ()` |
| `memory` | memory | 0 | `` |
| `OQ7T` | func | 2464 | `(i32) -> (i32)` |
| `OwtH` | func | 3030 | `(i32 i32) -> ()` |
| `UbMS` | func | 841 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `ORxl` | func | 876 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `taFX` | func | 1375 | `(i32 f64 f64) -> (i32)` |
| `FLVc` | func | 2973 | `(i32 i32) -> (i32 i32)` |
| `lgVX` | func | 1861 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `Nzwz` | func | 2162 | `(i32 i32) -> (i32)` |
| `VDkM` | func | 2485 | `(i32) -> (i32)` |
| `nCzq` | func | 1704 | `(i32) -> (i32)` |
| `H3o9` | func | 2320 | `(i32 i32) -> (i32)` |
| `a2UO` | func | 3092 | `() -> ()` |
| `UH3H` | func | 2467 | `(i32) -> (i32)` |
| `Dyzk` | func | 1869 | `(i32) -> ()` |
| `AzXk` | func | 691 | `(i32 i32) -> (i32)` |
| `Jb5p` | func | 3162 | `() -> (i32)` |
| `J9DB` | func | 2968 | `(i32 i32 i32) -> (i32 i32)` |
| `SRH1` | func | 1534 | `(i32 i32 i32 i32) -> (i32)` |
| `xc2W` | func | 2983 | `(i32) -> (i32 i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 735 · max 735
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2019592, `i32` = i32.const 2020148

## Functions

- 2,890 bodies · 4,026,528 code bytes · avg 1.4 KB
- instruction scan: 2,890 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 157 |
| <= 64 bytes | 105 |
| <= 128 bytes | 251 |
| <= 256 bytes | 368 |
| <= 512 bytes | 672 |
| <= 1024 bytes | 581 |
| <= 2048 bytes | 423 |
| <= 4096 bytes | 177 |
| <= 8192 bytes | 90 |
| <= 16384 bytes | 32 |
| > 16384 bytes | 34 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32) -> ()` | 218 | 200,813 | 91,028 | local.get×26756, i32.const×10177, i32.load×5791, local.set×4887, local.tee×4767 |
| 1 | `(i32 i32 i32 i32 i32) -> ()` | 144 | 112,624 | 54,591 | local.get×15198, i32.const×6563, i32.add×3205, local.set×3091, i32.load×2948 |
| 2 | `(i32 i32 i32 i32 i32 i32) -> ()` | 130 | 46,897 | 21,584 | local.get×6259, i32.const×2868, local.set×1247, i32.add×1154, i32.load×1032 |
| 3 | `(i32 i32) -> ()` | 105 | 36,598 | 16,578 | local.get×4596, i32.const×1664, local.set×977, local.tee×845, i32.load×782 |
| 4 | `(i32 i32) -> ()` | 58 | 29,787 | 14,312 | local.get×4209, i32.const×1738, i32.load×1042, local.set×931, i32.add×820 |
| 5 | `(i32 i32) -> ()` | 90 | 26,046 | 12,563 | local.get×3702, i32.const×1379, local.set×779, i32.load×721, local.tee×698 |
| 6 | `(i32 i32 i32 i32 i32) -> ()` | 135 | 32,562 | 16,141 | local.get×4566, i32.const×2205, local.set×1141, i32.add×1062, local.tee×800 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 58 | 21,491 | 10,529 | local.get×2903, i32.const×1493, local.set×728, i32.add×591, local.tee×504 |
| 8 | `(i32 i32 i32 i32) -> ()` | 105 | 26,393 | 12,764 | local.get×3784, i32.const×1615, local.set×985, i32.add×682, i32.load×663 |
| 9 | `(i32 i32 i32) -> (i32)` | 74 | 22,549 | 10,769 | local.get×2881, i32.const×1289, i32.load×749, local.set×499, i32.add×477 |
| 10 | `(i32 i32) -> ()` | 93 | 18,058 | 8,685 | local.get×2524, i32.const×965, local.tee×535, local.set×515, i32.load×504 |
| 11 | `(i32 i32 i32 i32) -> ()` | 53 | 24,505 | 11,634 | local.get×3005, i32.const×1276, local.tee×731, end×592, i32.load×586 |
| 12 | `(i32 i32 i32) -> (i32)` | 77 | 18,923 | 8,934 | local.get×2485, i32.const×1224, i32.load×559, i32.add×543, local.set×525 |
| 13 | `(i32 i32 i32 i32 i32 i32) -> ()` | 125 | 19,810 | 8,875 | local.get×2493, i32.const×1111, local.set×430, local.tee×385, i32.load×382 |
| 14 | `(i32 i32 f64) -> (i32)` | 48 | 17,102 | 8,098 | local.get×2218, i32.const×774, local.set×526, local.tee×508, i32.add×478 |
| 16 | `(i32 i32) -> ()` | 96 | 31,835 | 14,861 | local.get×4482, i32.const×1910, i32.add×763, local.set×692, i32.load×669 |
| 22 | `(i32 i32) -> ()` | 82 | 29,024 | 13,043 | local.get×4618, i32.const×1456, i32.store×702, i32.add×689, local.tee×645 |
| 24 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 64 | 24,312 | 11,211 | local.get×2683, i32.const×1714, local.set×822, end×665, block×466 |
| 27 | `(i32 i32 i32 i32 i32) -> ()` | 68 | 22,817 | 10,630 | local.get×3348, i32.const×1245, local.tee×735, i32.add×431, local.set×341 |
| 34 | `(i32 i32 i32 i32 i32) -> ()` | 65 | 18,015 | 8,704 | local.get×2378, i32.const×1095, local.set×628, local.tee×459, i32.add×442 |
| 70 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 112 | 27,605 | 13,066 | local.get×3810, i32.const×1687, i32.load×857, local.set×788, i32.add×672 |
| 193 | `(i32 i32) -> ()` | 10 | 27,551 | 13,273 | local.get×4670, i32.load×1257, i32.const×1060, end×827, i32.add×762 |
| 215 | `(i32) -> ()` | 19 | 23,258 | 10,909 | local.get×2733, i32.load×1495, i32.const×1187, local.tee×1011, end×855 |
| 722 | `(i32 i32) -> ()` | 139 | 42,973 | 20,266 | local.get×5275, i32.const×2347, local.tee×1198, i32.add×1066, local.set×1006 |
| 723 | `(i32 i32 i32 i32) -> ()` | 54 | 21,809 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 1572 | `(i32 i32) -> (i32)` | 182 | 54,919 | 19,834 | local.get×6599, i32.const×2595, i64.store×1935, i64.const×1087, i64.load×1068 |
| 1979 | `(i32 i32) -> ()` | 111 | 39,746 | 17,590 | local.get×5165, i32.const×1655, local.set×898, local.tee×741, end×677 |
| 2571 | `(i32 i32) -> ()` | 398 | 142,193 | 64,164 | local.get×18413, i32.const×8006, local.set×3828, i32.load×3150, end×2805 |
| 2841 | `(i32 i32 i32 i32) -> ()` | 137 | 31,374 | 14,285 | local.get×4258, i32.const×1517, local.tee×742, local.set×690, br_if×632 |
| 2860 | `(i32 i32) -> ()` | 143 | 33,660 | 15,072 | local.get×4234, i32.const×1988, local.set×803, local.tee×732, i32.add×689 |

## Embedded strings (data segments)

60 printable strings ≥6 chars; largest:

```
beaver_lumberjackchefdwarf_blue_hairdwarf_braided_hairdwarf_childdwarf_forked_bearddwarf_ginger_bearddwarf_grey_bearddwarf_hair_bunsdwarf_purple_bearddwarf_red_hairdwarf_short_beardfarmerfarmer_gillfi
DEEJJJJJJHHHHEEDDDDDDHHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDEEDEEEEEEDEDEDHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
ZombieGrunt1ZombieGrunt2ZombieGrunt3ZombieHurt1ZombieHurt2ZombieHurt3ZombieHurt4bassbassattackbdbearRoar1bearRoar2bearRoar3bearRoar4bearRoar5beepbigDrumSwish1bigDrumSwish2bigDrumSwish3bowbucketEmpty1b
                                                                                                 skin_1_0skin_1_1skin_1_2skin_1_3skin_1_4hat_0_0hat_0_1hat_0_2hat_0_3hat_0_4hat_0_5hat_0_6hat_13_0hat_13
456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;
alliumaspen_saplingattached_banana_stemattached_banana_stem_wrapperattached_melon_stemattached_melon_stem_wrapperautumn_fernazure_bluetbanana_stembeetroot_plant_stage0beetroot_plant_stage1beetroot_pla
````````````````````````````````^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZYYYYYYYY
ue:keydownkeyupmousedownmouseuptouchstarttouchendMouse1Mouse2Mouse3Alt+Left ClickF2F4F5F8F9Digit0Digit1Digit2Digit3Digit4Digit5Digit6Digit7Digit8Digit9KeyQKeyWKeyEKeyRKeyTKeyYKeyUKeyIKeyOKeyPKeyAKeySK
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
```

## Opcode histogram (aggregated)

| opcode | count |
|---|---:|
| `local.get` | 538,697 |
| `i32.const` | 225,243 |
| `local.tee` | 100,033 |
| `i32.load` | 94,027 |
| `local.set` | 93,946 |
| `i32.add` | 86,859 |
| `end` | 78,955 |
| `br_if` | 64,379 |
| `i32.store` | 46,438 |
| `block` | 37,177 |
| `i64.const` | 32,473 |
| `i64.store` | 31,711 |
| `if` | 30,127 |
| `call` | 29,107 |
| `i32.sub` | 24,563 |
| `i64.load` | 23,462 |
| `br` | 23,148 |
| `i32.eqz` | 19,507 |
| `select` | 17,081 |
| `i32.shl` | 16,369 |
| `i32.and` | 16,357 |
| `i32.ne` | 15,841 |
| `i32.load8_u` | 14,923 |
| `i32.eq` | 13,953 |
| `i32.store8` | 12,623 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 2,890/2,890 (degraded: 0)
