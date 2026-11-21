# WASM module: `bloxd_wasm_webgl_bg`

> environment **bloxd.io** · build `bqoxjr.2558012f` · analyzed 2026-11-21T12:37:12+09:00
> source: https://bloxd.io/static/media/bloxd_wasm_webgl_bg.2c49ab306999061a81b8.wasm
> 5,369,983 bytes (5.1 MB) · sha256 `08bd13fedb12bff9…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,860 / 299 |
| Exports / imports | 154 / 299 |
| Code bytes (function bodies) | 3,974,644 (3.8 MB) |
| Total local variables | 30,176 |
| Instructions (scanable bodies) | 1,864,677 |
| Data segments / bytes | 3,791 / 1,348,638 |
| Element segments / entries | 1 / 749 |
| Memories / tables / globals | 1 / 1 / 3 |
| name-section module id | `d5a3fa870604c824.10797` |
| Sections | 12 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,485 | 175 |
| 2 | import | 3,590 | 299 |
| 3 | function | 2,909 | 2860 |
| 4 | table | 7 | 1 |
| 5 | memory | 5 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,233 | 154 |
| 9 | element | 1,505 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 3,979,889 | 2860 |
| 11 | data | 1,379,261 | 3791 |
| 0 | custom:name | 30 | — |

## Types

175 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32) -> ()` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

299 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `cQso.dAY1` | func | `(i32) -> (f64)` |
| 1 | `cQso.J5xi` | func | `() -> (i32)` |
| 2 | `cQso.Kha1` | func | `(i32 i32 i32) -> (i32)` |
| 3 | `cQso.fvVH` | func | `(i32) -> ()` |
| 4 | `cQso.f0EB` | func | `(i32 i32) -> (i32)` |
| 5 | `cQso.nPQL` | func | `(i32) -> (i32)` |
| 6 | `cQso.cOQu` | func | `(i32 i32 i32) -> (i32)` |
| 7 | `cQso.F2Dh` | func | `(i32 i32 i32 i32) -> (i32)` |
| 8 | `cQso.CG8m` | func | `(i32) -> (i32)` |
| 9 | `cQso.M35X` | func | `(i32 i32) -> ()` |
| 10 | `cQso.Ugie` | func | `(i32 i32) -> ()` |
| 11 | `cQso.XGFW` | func | `(i32 i32 i32 i32) -> (i32)` |
| 12 | `cQso.Y1Zy` | func | `(i32 i32) -> (i32)` |
| 13 | `cQso.dbCX` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 14 | `cQso.hSb9` | func | `(i32) -> (i32)` |
| 15 | `cQso.ZsWd` | func | `(i32 i32) -> (i32)` |
| 16 | `cQso.r5R8` | func | `(i32 i32) -> (i32)` |
| 17 | `cQso.tpLR` | func | `(i32 i32) -> ()` |
| 18 | `cQso.OhXr` | func | `(i32) -> (i32)` |
| 19 | `cQso.UFKu` | func | `(i32) -> (i32)` |
| 20 | `cQso.hgHZ` | func | `(i32) -> (i32)` |
| 21 | `cQso.wsRd` | func | `(i32) -> ()` |
| 22 | `cQso.xzSi` | func | `(i32 i32) -> ()` |
| 23 | `cQso.dLgC` | func | `(i32 i32) -> ()` |
| 24 | `cQso.juu7` | func | `(i32 f64 f64 f64 f64) -> ()` |
| 25 | `cQso.efWR` | func | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64) -> ()` |
| 26 | `cQso.W447` | func | `(i32) -> (i32)` |
| 27 | `cQso.iRak` | func | `(i32 i32) -> ()` |
| 28 | `cQso.TW5i` | func | `(i32 i32) -> (i32)` |
| 29 | `cQso.qwtz` | func | `(i32 i32 i32 i32) -> ()` |
| 30 | `cQso.Hc9L` | func | `(i32 i32) -> (i32)` |
| 31 | `cQso.KqhO` | func | `(i32 i32 i32) -> (i32)` |
| 32 | `cQso.zshx` | func | `(i32) -> (i32)` |
| 33 | `cQso.JmNY` | func | `(i32 i32) -> ()` |
| 34 | `cQso.utmS` | func | `(i32) -> (i32)` |
| 35 | `cQso.WEOZ` | func | `(i32) -> (i32)` |
| 36 | `cQso.T5Ew` | func | `(i32 i32 i32) -> (i32)` |
| 37 | `cQso.gGrn` | func | `(i32) -> (i32)` |
| 38 | `cQso.Isz4` | func | `(i32) -> (i32)` |
| 39 | `cQso.aJ1A` | func | `(i32) -> (i32)` |
| 40 | `cQso.MrHI` | func | `(i32 i32) -> (i32)` |
| 41 | `cQso.pzY9` | func | `(i32 i32 i32 i32) -> ()` |
| 42 | `cQso.Fdeh` | func | `(i32) -> (i32)` |
| 43 | `cQso.NiwJ` | func | `(i32 i32 i32 i32) -> ()` |
| 44 | `cQso.ZVvU` | func | `() -> (f64)` |
| 45 | `cQso.oywM` | func | `(i32) -> (i32)` |
| 46 | `cQso.KyXx` | func | `(i32 i32 i32 i32) -> ()` |
| 47 | `cQso.AxYr` | func | `(i32 i32 i32) -> (i32)` |
| 48 | `cQso.WlQm` | func | `(i32 i32 i32) -> ()` |
| 49 | `cQso.R25D` | func | `(i32 i32 i32) -> ()` |
| 50 | `cQso.LT7J` | func | `(i32 i32 i32) -> ()` |
| 51 | `cQso.mXgZ` | func | `(i32 i32 i32 i32) -> ()` |
| 52 | `cQso.AwBE` | func | `(i32 i32 i32 i32) -> ()` |
| 53 | `cQso.HDn9` | func | `(i32 i32) -> ()` |
| 54 | `cQso.niVe` | func | `(i32 i32) -> ()` |
| 55 | `cQso.fNkw` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 56 | `cQso.ryjs` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 57 | `cQso.X1ol` | func | `(i32 f32 f32) -> ()` |
| 58 | `cQso.tHKx` | func | `(i32 f32 f32) -> ()` |
| 59 | `cQso.rFc6` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 60 | `cQso.t6DT` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 61 | `cQso.OKA2` | func | `(i32 i32 i32 i32) -> ()` |
| 62 | `cQso.Vjo3` | func | `(i32 i32 i32 i32) -> ()` |
| 63 | `cQso.XAMO` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 64 | `cQso.Ntnb` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 65 | `cQso.paM0` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 66 | `cQso.fwGr` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 67 | `cQso.AGDn` | func | `(i32 i32 i32) -> ()` |
| 68 | `cQso.S8UQ` | func | `(i32 i32 i32) -> ()` |
| 69 | `cQso.Ebfj` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 70 | `cQso.hIQK` | func | `(i32 i32 i32) -> ()` |
| 71 | `cQso.eJJq` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 72 | `cQso.LKuO` | func | `(i32) -> (i32)` |
| 73 | `cQso.ti6h` | func | `(i32) -> ()` |
| 74 | `cQso.ZGYa` | func | `(i32) -> (i32)` |
| 75 | `cQso.OaRT` | func | `(i32 i32) -> (i32)` |
| 76 | `cQso.UZNH` | func | `(i32 i32 i32) -> (i32)` |
| 77 | `cQso.A0Ke` | func | `(i32 i32 i32) -> ()` |
| 78 | `cQso.WmFw` | func | `(i32 i32 i32 i32) -> (i32)` |
| 79 | `cQso.wdiM` | func | `() -> (f64)` |
| 80 | `cQso.gBGN` | func | `() -> (f64)` |
| 81 | `cQso.xmZw` | func | `(i32 i32) -> ()` |
| 82 | `cQso.htE2` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 83 | `cQso.eCvf` | func | `(i32 i32 i32) -> (i32)` |
| 84 | `cQso.HZB8` | func | `(i32 i32 i32) -> ()` |
| 85 | `cQso.vBax` | func | `(i32 i32 i32) -> ()` |
| 86 | `cQso.o1CQ` | func | `(i32 i32) -> ()` |
| 87 | `cQso.DDQ5` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 88 | `cQso.POWF` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 89 | `cQso.v8as` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 90 | `cQso.kwtt` | func | `(i32 i32) -> ()` |
| 91 | `cQso.sH7x` | func | `(i32 i32) -> ()` |
| 92 | `cQso.oqaV` | func | `(i32) -> (i32)` |
| 93 | `cQso.xp9b` | func | `(i32 i32 i32) -> ()` |
| 94 | `cQso.WglT` | func | `(i32 i32 i32) -> ()` |
| 95 | `cQso.bsOi` | func | `(i32) -> (i32)` |
| 96 | `cQso.iz7t` | func | `(i32) -> (i32)` |
| 97 | `cQso.lVc8` | func | `(i32 i32) -> ()` |
| 98 | `cQso.qg7l` | func | `(i32 i32) -> ()` |
| 99 | `cQso.pJqM` | func | `(i32 i32) -> ()` |
| 100 | `cQso.PCE4` | func | `(i32 i32) -> ()` |
| 101 | `cQso.wbKq` | func | `(i32 i32 i32) -> ()` |
| 102 | `cQso.z9j5` | func | `(i32 i32 i32) -> ()` |
| 103 | `cQso.PXA7` | func | `(i32 i32 f32) -> ()` |
| 104 | `cQso.PcTw` | func | `(i32 i32 f32) -> ()` |
| 105 | `cQso.MzlP` | func | `(i32 i32 i32) -> ()` |
| 106 | `cQso.syLw` | func | `(i32 i32 f32 f32) -> ()` |
| 107 | `cQso.xQP9` | func | `(i32 i32 f32 f32) -> ()` |
| 108 | `cQso.fpBl` | func | `(i32 i32) -> ()` |
| 109 | `cQso.zKkw` | func | `(i32 i32) -> ()` |
| 110 | `cQso.ujT8` | func | `(i32 i32) -> ()` |
| 111 | `cQso.SLUH` | func | `(i32 i32) -> ()` |
| 112 | `cQso.hIqE` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 113 | `cQso.YcqM` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 114 | `cQso.QTcI` | func | `(i32 i32 i32) -> (i32)` |
| 115 | `cQso.h5aL` | func | `(i32 i32 i32) -> ()` |
| 116 | `cQso.hNJz` | func | `(i32 i32 i32) -> ()` |
| 117 | `cQso.MrQW` | func | `(i32 i32 i32 i32) -> ()` |
| 118 | `cQso.H7kd` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 119 | `cQso.t3HJ` | func | `(i32 i32) -> ()` |
| 120 | `cQso.v632` | func | `(i32 i32) -> ()` |
| 121 | `cQso.tczl` | func | `(i32 i32) -> (i32)` |
| 122 | `cQso.ve7B` | func | `(i32 i32) -> (i32)` |
| 123 | `cQso.fwTr` | func | `(i32 i32) -> ()` |
| 124 | `cQso.DHXv` | func | `(i32 i32) -> ()` |
| 125 | `cQso.i0dP` | func | `(i32) -> (i32)` |
| 126 | `cQso.H7MM` | func | `(i32 i32) -> ()` |
| 127 | `cQso.P3iq` | func | `(i32 i32) -> ()` |
| 128 | `cQso.jYOT` | func | `(i32 i32 i32 i32) -> ()` |
| 129 | `cQso.EEf5` | func | `(i32 i32 i32) -> ()` |
| 130 | `cQso.u9bw` | func | `(i32 i32 i32) -> ()` |
| 131 | `cQso.OiiI` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 132 | `cQso.XVYM` | func | `(i32 i32) -> ()` |
| 133 | `cQso.wbo5` | func | `(i32 i32 i32) -> ()` |
| 134 | `cQso.LVA7` | func | `(i32 i32 i32) -> ()` |
| 135 | `cQso.D1cF` | func | `(i32 i32 i32) -> ()` |
| 136 | `cQso.yrP5` | func | `(i32 i32 i32) -> ()` |
| 137 | `cQso.A95w` | func | `(i32) -> ()` |
| 138 | `cQso.Loj3` | func | `(i32 i32 i32) -> ()` |
| 139 | `cQso.rq0s` | func | `(i32 i32 i32) -> (i32)` |
| 140 | `cQso.dN8f` | func | `(i32 i32) -> ()` |
| 141 | `cQso.ne8z` | func | `(i32) -> (i32)` |
| 142 | `cQso.sGRs` | func | `(i32 i32) -> ()` |
| 143 | `cQso.lETV` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 144 | `cQso.kpFR` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 145 | `cQso.kBxy` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 146 | `cQso.v9mJ` | func | `(i32 i32 i32) -> (i32)` |
| 147 | `cQso.Nwn6` | func | `(i32 i32 i32) -> (i32)` |
| 148 | `cQso.GWve` | func | `(i32 i32) -> ()` |
| 149 | `cQso.lEk7` | func | `(i32 i32) -> ()` |
| 150 | `cQso.Dzvv` | func | `(i32 i32) -> ()` |
| 151 | `cQso.pKre` | func | `(i32 i32) -> ()` |
| 152 | `cQso.BOiL` | func | `(i32) -> (i32)` |
| 153 | `cQso.M6BP` | func | `(i32) -> (i32)` |
| 154 | `cQso.B1lU` | func | `(i32) -> (i32)` |
| 155 | `cQso.Mckf` | func | `(i32) -> (i32)` |
| 156 | `cQso.LG9S` | func | `() -> (i32)` |
| 157 | `cQso.Fqw7` | func | `() -> (i32)` |
| 158 | `cQso.u7hQ` | func | `() -> (i32)` |
| 159 | `cQso.KaSj` | func | `() -> (i32)` |
| 160 | `cQso.fkPg` | func | `(i32 i32) -> (i32)` |
| 161 | `cQso.hb2l` | func | `(i32) -> ()` |
| 162 | `cQso.Fnv8` | func | `(i32 i32) -> (i32)` |
| 163 | `cQso.Hjod` | func | `(i32) -> (i32)` |
| 164 | `cQso.Hz23` | func | `(i32) -> (i32)` |
| 165 | `cQso.mWJO` | func | `(i32) -> (i32)` |
| 166 | `cQso.k6z2` | func | `(i32) -> ()` |
| 167 | `cQso.gPj0` | func | `(i32 i32 i32) -> (i32)` |
| 168 | `cQso.akx5` | func | `(i32) -> (i32)` |
| 169 | `cQso.Drom` | func | `(i32) -> (i32)` |
| 170 | `cQso.lNr8` | func | `(i32 i32) -> (i32)` |
| 171 | `cQso.xYGz` | func | `(i32) -> ()` |
| 172 | `cQso.nWF5` | func | `() -> (i32)` |
| 173 | `cQso.FM80` | func | `(i32 i32) -> (i32)` |
| 174 | `cQso.QvoY` | func | `(i32 i32) -> ()` |
| 175 | `cQso.Yb4e` | func | `(i32 i32) -> ()` |
| 176 | `cQso.JYlT` | func | `(i32) -> (i32)` |
| 177 | `cQso.a1Ta` | func | `(i32 i32) -> (i32)` |
| 178 | `cQso.IVEn` | func | `(i32) -> ()` |
| 179 | `cQso.Thw1` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 180 | `cQso.Kctn` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 181 | `cQso.JSaL` | func | `(i32 i32) -> ()` |
| 182 | `cQso.oKIl` | func | `(i32 i32) -> ()` |
| 183 | `cQso.yPc8` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 184 | `cQso.nqDW` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 185 | `cQso.AVzT` | func | `(i32 f32) -> ()` |
| 186 | `cQso.nUTc` | func | `(i32 f32) -> ()` |
| 187 | `cQso.tucy` | func | `(i32 i32) -> ()` |
| 188 | `cQso.yns2` | func | `(i32 i32) -> ()` |
| 189 | `cQso.xlbP` | func | `(i32) -> (i32)` |
| 190 | `cQso.Ie75` | func | `(i32) -> (i32)` |
| 191 | `cQso.s5sD` | func | `(i32) -> (i32)` |
| 192 | `cQso.kPP7` | func | `(i32) -> (i32)` |
| 193 | `cQso.Jh19` | func | `(i32 i32 i32) -> ()` |
| 194 | `cQso.kApu` | func | `(i32 i32 i32) -> ()` |
| 195 | `cQso.xJQO` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 196 | `cQso.B5cu` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 197 | `cQso.PvR9` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 198 | `cQso.eOtN` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 199 | `cQso.y9gg` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 200 | `cQso.TiVb` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 201 | `cQso.s43r` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 202 | `cQso.fIs8` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 203 | `cQso.pgUF` | func | `(i32) -> (i32)` |
| 204 | `cQso.TTPM` | func | `(i32) -> (i32)` |
| 205 | `cQso.Vihh` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 206 | `cQso.Ti2d` | func | `(i32 i32 i32 i32) -> ()` |
| 207 | `cQso.lwPK` | func | `(i32 i32 i32 i32) -> ()` |
| 208 | `cQso.y24c` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 209 | `cQso.MA4e` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 210 | `cQso.WPZ3` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 211 | `cQso.wnc0` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 212 | `cQso.IOLf` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 213 | `cQso.db0L` | func | `(i32 i32 i32) -> ()` |
| 214 | `cQso.XGAf` | func | `(i32 i32 i32) -> ()` |
| 215 | `cQso.ecNz` | func | `(i32 i32) -> ()` |
| 216 | `cQso.xXEI` | func | `(i32 i32) -> ()` |
| 217 | `cQso.JMrZ` | func | `(i32 i32) -> ()` |
| 218 | `cQso.VovE` | func | `(i32 i32) -> ()` |
| 219 | `cQso.qhd0` | func | `(i32 i32) -> ()` |
| 220 | `cQso.Lpuu` | func | `(i32 i32) -> ()` |
| 221 | `cQso.JjS6` | func | `(i32 f32 f32) -> ()` |
| 222 | `cQso.j74e` | func | `(i32 f32 f32) -> ()` |
| 223 | `cQso.HLod` | func | `(i32 i32) -> ()` |
| 224 | `cQso.jWAA` | func | `(i32 i32) -> ()` |
| 225 | `cQso.qbXh` | func | `(i32 i32 i32 f32) -> ()` |
| 226 | `cQso.lqX8` | func | `(i32 i32 i32 f32) -> ()` |
| 227 | `cQso.C4gL` | func | `(i32 i32 i32) -> ()` |
| 228 | `cQso.LFEF` | func | `(i32) -> (i32)` |
| 229 | `cQso.TrIL` | func | `(i32) -> (i32)` |
| 230 | `cQso.tsW7` | func | `(i32 i32) -> ()` |
| 231 | `cQso.YD5X` | func | `(i32 i32) -> ()` |
| 232 | `cQso.dCQ8` | func | `(i32 i32 i32 i32) -> (i32)` |
| 233 | `cQso.q02v` | func | `(i32 i32 i32 i32) -> ()` |
| 234 | `cQso.C2XK` | func | `(i32 i32 i32 i32) -> (i32)` |
| 235 | `cQso.o6qD` | func | `(i32 i32 i32 i32) -> (i32)` |
| 236 | `cQso.GiVf` | func | `(i32 i32 i32 i32) -> (i32)` |
| 237 | `cQso.SClx` | func | `(i32 i32 i32) -> ()` |
| 238 | `cQso.g7xB` | func | `(i32 i32 i32) -> ()` |
| 239 | `cQso.ziO5` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 240 | `cQso.HSZs` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 241 | `cQso.iucc` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 242 | `cQso.Fro5` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 243 | `cQso.so8d` | func | `(i32) -> (i32)` |
| 244 | `cQso.gxDO` | func | `(i32) -> (i32)` |
| 245 | `cQso.VQpP` | func | `(i32 i32 i32 i32) -> ()` |
| 246 | `cQso.VpA1` | func | `(i32 i32) -> ()` |
| 247 | `cQso.KYci` | func | `(i32 i32) -> ()` |
| 248 | `cQso.vdlM` | func | `(i32 i32) -> (i32)` |
| 249 | `cQso.yq8W` | func | `(i32 i32) -> (i32)` |
| 250 | `cQso.eH3F` | func | `(i32 i32 i32 i32) -> ()` |
| 251 | `cQso.C2WO` | func | `(i32 i32 i32 i32) -> ()` |
| 252 | `cQso.XNHn` | func | `(i32 i32) -> ()` |
| 253 | `cQso.GRvG` | func | `(i32 i32) -> ()` |
| 254 | `cQso.ejuy` | func | `(i32) -> (i32)` |
| 255 | `cQso.c4bn` | func | `(i32 i32 i32 i32) -> ()` |
| 256 | `cQso.F5Nf` | func | `(i32 i32 i32 f32) -> ()` |
| 257 | `cQso.je3s` | func | `(i32 i32) -> ()` |
| 258 | `cQso.zIYY` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 259 | `cQso.zFLz` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 260 | `cQso.a1PG` | func | `(i32 i32) -> ()` |
| 261 | `cQso.sp4r` | func | `(i32 i32) -> ()` |
| 262 | `cQso.uMFp` | func | `(i32 i32) -> ()` |
| 263 | `cQso.Zmti` | func | `(i32 i32) -> ()` |
| 264 | `cQso.Um0F` | func | `(i32 i32) -> ()` |
| 265 | `cQso.GI1e` | func | `(i32 i32) -> ()` |
| 266 | `cQso.EBZw` | func | `(i32 i32) -> ()` |
| 267 | `cQso.Bzg7` | func | `(i32) -> (i32)` |
| 268 | `cQso.Lt31` | func | `(i32) -> (i32)` |
| 269 | `cQso.D377` | func | `(i32) -> (i32)` |
| 270 | `cQso.EeU0` | func | `(i32) -> (i32)` |
| 271 | `cQso.uyS7` | func | `(i32 i32 i32 i32) -> ()` |
| 272 | `cQso.RgdZ` | func | `(i32) -> ()` |
| 273 | `cQso.uZWq` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 274 | `cQso.XtGm` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 275 | `cQso.wVhq` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 276 | `cQso.Zbqd` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 277 | `cQso.aq63` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 278 | `cQso.vQ6W` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 279 | `cQso.Ysu5` | func | `(i32) -> (i32)` |
| 280 | `cQso.AOAa` | func | `(i32) -> (i32)` |
| 281 | `cQso.ug6J` | func | `(i32) -> (i32)` |
| 282 | `cQso.Rd5T` | func | `(i32) -> (i32)` |
| 283 | `cQso.wE52` | func | `(i32 i32) -> ()` |
| 284 | `cQso.BaXZ` | func | `(i32) -> ()` |
| 285 | `cQso.XUwy` | func | `(i32 i32) -> ()` |
| 286 | `cQso.cjKe` | func | `(i32) -> (i32)` |
| 287 | `cQso.ezxJ` | func | `(i32 i32) -> (i32)` |
| 288 | `cQso.QIeG` | func | `(i32 i32) -> (i32)` |
| 289 | `cQso.aLQ7` | func | `(i32 i32) -> (i32)` |
| 290 | `cQso.uwnO` | func | `(f64) -> (i32)` |
| 291 | `cQso.fzVJ` | func | `(i32 i32) -> (i32)` |
| 292 | `cQso.IcXk` | func | `(i32 i32) -> (i32)` |
| 293 | `cQso.nIa8` | func | `(i32 i32) -> (i32)` |
| 294 | `cQso.k1D6` | func | `(i32 i32) -> (i32)` |
| 295 | `cQso.TTGM` | func | `(i32 i32) -> (i32)` |
| 296 | `cQso.vV4J` | func | `(i32 i32) -> (i32)` |
| 297 | `cQso.u7FU` | func | `(i32 i32) -> (i32)` |
| 298 | `cQso.HKyB` | func | `(i32 i32) -> (i32)` |

## Exports

154 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `u5YC` | func | 2466 | `(i32) -> (i32)` |
| `hwQl` | func | 3147 | `() -> (i32)` |
| `oG5e` | func | 2456 | `(i32) -> (i32)` |
| `YJ5s` | func | 2094 | `(i32 i32) -> ()` |
| `unaB` | func | 2506 | `(i32 i32) -> ()` |
| `wxsI` | func | 907 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `yk0L` | func | 3074 | `(i32 i32 i32) -> ()` |
| `NcZp` | func | 2246 | `(i32 i32) -> ()` |
| `hq2J` | func | 1200 | `(i32 i32 i32 i32) -> (i32)` |
| `N4iD` | func | 1912 | `(i32) -> (i32)` |
| `lzwe` | func | 2167 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `odSt` | func | 3148 | `() -> (i32)` |
| `Kd8Y` | func | 2974 | `(i32) -> (i32 i32)` |
| `KSWj` | func | 1729 | `(i32 i32) -> (i32)` |
| `HG3H` | func | 2746 | `(i32) -> (i32)` |
| `K8XL` | func | 749 | `(i32 i32 i32) -> (i32)` |
| `ndRD` | func | 1317 | `(i32 i32 i32) -> (i32)` |
| `z3WD` | func | 1506 | `(i32 i32 i32) -> (i32)` |
| `fd0B` | func | 1103 | `(i32 i32) -> ()` |
| `TXyP` | func | 2329 | `(i32 i32) -> (i32)` |
| `jeeY` | func | 1855 | `(i32) -> ()` |
| `IbR7` | func | 3125 | `(i32) -> ()` |
| `uKt7` | func | 2986 | `() -> (i32 i32)` |
| `Qjlf` | func | 2972 | `(i32) -> (i32 i32)` |
| `C2qG` | func | 1488 | `(i32 i32) -> (i32)` |
| `K7yp` | func | 1206 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `ooBu` | func | 2427 | `(i32) -> (i32)` |
| `GXSt` | func | 2428 | `(i32) -> (i32)` |
| `NhMg` | func | 1739 | `(i32) -> (i32)` |
| `Dp6a` | func | 2924 | `(i32 i32 i32 i32) -> (i32)` |
| `qEje` | func | 2296 | `(i32 i32) -> (i32)` |
| `jyum` | func | 1367 | `(i32 f64 f64) -> (i32)` |
| `L3Rb` | func | 1417 | `(i32 i32 i32) -> ()` |
| `tkl7` | func | 2458 | `(i32 i32) -> (i32)` |
| `e6It` | func | 2432 | `(i32) -> ()` |
| `XqUv` | func | 1489 | `(i32 i32) -> (i32)` |
| `YFoU` | func | 3018 | `(i32 i32 i32) -> ()` |
| `A5NH` | func | 2431 | `(i32) -> (i32)` |
| `nW2S` | func | 1491 | `(i32 f64) -> (f64)` |
| `CiYa` | func | 2339 | `(i32 f64) -> (i32)` |
| `bWyZ` | func | 3047 | `() -> (i32)` |
| `u9Kk` | func | 1466 | `(i32 i32) -> (i32)` |
| `N7cy` | func | 2961 | `(i32 i32) -> (i32 i32)` |
| `eLqn` | func | 2297 | `(i32 i32) -> (i32)` |
| `MaXJ` | func | 2429 | `(i32) -> (i32)` |
| `lFBX` | func | 2723 | `(i32) -> (i32)` |
| `yWxO` | func | 2898 | `() -> ()` |
| `GujR` | func | 2949 | `(i32 i32 i32) -> (i32 i32)` |
| `nFyH` | func | 1840 | `(i32 i32) -> (i32)` |
| `FG7k` | func | 1366 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `SW7U` | func | 1554 | `(i32 i32) -> (i32)` |
| `AUFE` | func | 1279 | `(i32 i32) -> (i32)` |
| `ofwQ` | func | 1225 | `(i32 i32) -> (i32)` |
| `XkK8` | func | 2342 | `(i32 i32 i32 i32) -> (i32)` |
| `X0Nj` | func | 2931 | `(i32 i32) -> ()` |
| `fEia` | func | 2443 | `(i32 i32) -> ()` |
| `BBJA` | func | 1787 | `() -> (i32)` |
| `gaQ3` | func | 1565 | `(i32 i32) -> ()` |
| `p0Ia` | func | 1603 | `(i32 i32 i32 i32) -> (i32)` |
| `jZlo` | func | 1717 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `CZaB` | func | 1711 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `LnXS` | func | 1846 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `MZRj` | func | 1947 | `(i32 i32) -> ()` |
| `IHgP` | func | 2445 | `(i32) -> (i32)` |
| `OLFl` | func | 2465 | `(i32) -> (i32)` |
| `ztSq` | func | 2425 | `(i32) -> (f64)` |
| `KuEC` | func | 1457 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `VSSW` | func | 663 | `(i32 i32) -> (i32)` |
| `V5NN` | func | 3124 | `(i32) -> (i32)` |
| `pIrE` | func | 3120 | `() -> (f64)` |
| `VpAl` | func | 897 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `mtKD` | func | 2918 | `(i32 i32) -> (i32)` |
| `lZE5` | func | 2898 | `() -> ()` |
| `nIVG` | func | 729 | `(i32) -> (i32)` |
| `heHo` | func | 2408 | `(i32 i32 i32 i32 i32 i32 f64 i32) -> (i32)` |
| `SzX9` | func | 735 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `j8xJ` | func | 2115 | `(i32 i32) -> (i32)` |
| `jLzo` | func | 1525 | `(i32 i32 i32 i32) -> (i32)` |
| `wTLt` | func | 2956 | `(i32 i32) -> (i32 i32)` |
| `CLJ8` | func | 1165 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `MbjB` | func | 2971 | `(i32) -> (i32 i32)` |
| `gnZ8` | func | 1495 | `(i32) -> (i32)` |
| `B6gO` | func | 1439 | `(i32 i32 i32 i32) -> ()` |
| `ZRII` | func | 1671 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `PZM4` | func | 2412 | `(i32) -> (i32)` |
| `EMcn` | func | 3019 | `(i32 i32) -> ()` |
| `uKYh` | func | 2216 | `(i32 i32) -> ()` |
| `VIO9` | func | 3009 | `(i32 i32 i32 i32) -> ()` |
| `ePb4` | func | 2950 | `(i32 i32 i32) -> (i32 i32)` |
| `RexB` | func | 2433 | `(i32) -> (i32)` |
| `zzrM` | func | 1990 | `(i32 f64 f64 f64) -> (i32)` |
| `sK5D` | func | 3080 | `(i32) -> ()` |
| `jeof` | func | 2467 | `(i32) -> (i32)` |
| `Moqb` | func | 1270 | `(i32) -> (i32)` |
| `xvUf` | func | 2457 | `(i32 i32) -> (i32)` |
| `sPJC` | func | 2385 | `(i32) -> (i32)` |
| `hq2M` | func | 1564 | `(i32 i32) -> ()` |
| `LGK4` | func | 2959 | `(i32 i32) -> (i32 i32)` |
| `vsHV` | func | 1569 | `(i32 f64 f64 f64) -> (i32)` |
| `l15b` | func | 2757 | `(i32) -> ()` |
| `MAmX` | func | 2114 | `(i32 i32) -> (i32)` |
| `xooS` | func | 2426 | `(i32) -> (i32)` |
| `ML8H` | func | 881 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `GwYh` | func | 2960 | `(i32 i32) -> (i32 i32)` |
| `rBUt` | func | 1914 | `(i32 i32 i32 i32) -> ()` |
| `t2kL` | func | 1818 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `TXLF` | func | 2447 | `(i32 i32) -> ()` |
| `jQvF` | func | 1199 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `RBRx` | func | 1696 | `(i32) -> (i32)` |
| `qWJe` | func | 2434 | `(i32) -> (i32)` |
| `U0C9` | func | 1307 | `(i32) -> ()` |
| `Ak9M` | func | 2779 | `(i32) -> (i32)` |
| `QxGe` | func | 1831 | `(i32 i32) -> ()` |
| `a74D` | func | 699 | `(i32 i32) -> (i32)` |
| `HdTO` | func | 2411 | `(i32 i32) -> ()` |
| `dViI` | func | 1477 | `(i32 i32) -> (i32)` |
| `rvje` | func | 1387 | `(i32 i32) -> (i32)` |
| `KEtK` | func | 2973 | `(i32) -> (i32 i32)` |
| `J8bD` | func | 2985 | `() -> (i32 i32)` |
| `AjMc` | func | 1102 | `(i32 i32) -> (i32)` |
| `ILBi` | func | 1453 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `f51f` | func | 2294 | `(i32 i32) -> (i32)` |
| `vaGe` | func | 1459 | `(i32 i32 i32 i32) -> (i32)` |
| `BmkB` | func | 674 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `rsZR` | func | 2549 | `(i32 i32) -> ()` |
| `QbKT` | func | 2473 | `() -> (i32)` |
| `PiXP` | func | 2295 | `(i32 i32) -> (i32)` |
| `wgxM` | func | 2550 | `() -> (i32)` |
| `adzk` | global | 1 | `` |
| `XNMg` | func | 1104 | `(i32 i32) -> (i32)` |
| `gxx7` | func | 726 | `(i32 i32 i32 i32) -> (i32)` |
| `JIRT` | func | 801 | `(i32 i32) -> (i32)` |
| `zYKm` | func | 2446 | `(i32) -> (i32)` |
| `jBEY` | func | 2430 | `(i32) -> (i32)` |
| `zbP7` | func | 2957 | `(i32 i32) -> (i32 i32)` |
| `kFlg` | func | 1854 | `(i32) -> ()` |
| `DJsZ` | func | 2958 | `(i32 i32) -> (i32 i32)` |
| `kAPy` | func | 2368 | `(i32) -> (i32)` |
| `kZhh` | func | 2448 | `(i32) -> (i32)` |
| `NFOK` | func | 2717 | `(i32) -> (i32)` |
| `fy3V` | func | 2735 | `(i32) -> (i32)` |
| `jk8x` | func | 1413 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `aKK9` | global | 2 | `` |
| `WdtQ` | func | 1826 | `(i32 i32 f64 f64 f64) -> ()` |
| `llgb` | func | 567 | `(i32 i32 i32) -> (i32)` |
| `Shis` | func | 1805 | `(i32 i32 i32 i32) -> (i32)` |
| `qp0W` | func | 1975 | `(i32 f64) -> (i32)` |
| `YATp` | func | 2435 | `(i32) -> (i32)` |
| `memory` | memory | 0 | `` |
| `B2Ak` | func | 1246 | `(i32 i32 i32) -> (i32)` |
| `uPZh` | func | 2147 | `(i32 i32) -> (i32)` |
| `WuGj` | func | 988 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `lBjS` | func | 2955 | `(i32 i32) -> (i32 i32)` |
| `t7nP` | func | 1418 | `() -> (i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- memory 0: min 40 pages · max 14,648 · shared=False
- table 0: funcref · min 750 · max 750
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2560920, `i32` = i32.const 2561476

## Functions

- 2,860 bodies · 3,974,644 code bytes · avg 1.4 KB
- instruction scan: 2,860 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 155 |
| <= 64 bytes | 114 |
| <= 128 bytes | 247 |
| <= 256 bytes | 375 |
| <= 512 bytes | 659 |
| <= 1024 bytes | 562 |
| <= 2048 bytes | 412 |
| <= 4096 bytes | 182 |
| <= 8192 bytes | 89 |
| <= 16384 bytes | 31 |
| > 16384 bytes | 34 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32) -> ()` | 212 | 192,991 | 87,565 | local.get×25662, i32.const×9842, i32.load×5578, local.set×4652, local.tee×4610 |
| 1 | `(i32 i32 i32 i32 i32) -> ()` | 147 | 112,425 | 54,493 | local.get×15165, i32.const×6512, i32.add×3173, local.set×3077, i32.load×2945 |
| 2 | `(i32 i32 i32 i32 i32 i32) -> ()` | 131 | 45,767 | 21,024 | local.get×6153, i32.const×2763, local.set×1198, i32.add×1098, i32.load×997 |
| 3 | `(i32 i32) -> ()` | 123 | 48,629 | 22,511 | local.get×6329, i32.const×2250, local.set×1325, local.tee×1179, i32.load×1035 |
| 4 | `(i32 i32) -> ()` | 59 | 29,626 | 14,267 | local.get×4192, i32.const×1730, i32.load×1042, local.set×931, i32.add×815 |
| 5 | `(i32 i32) -> ()` | 90 | 26,104 | 12,597 | local.get×3709, i32.const×1386, local.set×779, i32.load×721, local.tee×701 |
| 6 | `(i32 i32 i32 i32 i32) -> ()` | 134 | 32,140 | 15,936 | local.get×4504, i32.const×2183, local.set×1128, i32.add×1053, local.tee×790 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 58 | 21,484 | 10,525 | local.get×2903, i32.const×1490, local.set×728, i32.add×591, local.tee×504 |
| 8 | `(i32 i32) -> ()` | 93 | 19,080 | 9,200 | local.get×2643, i32.const×1025, local.tee×571, local.set×554, i32.load×531 |
| 9 | `(i32 i32 i32 i32) -> ()` | 105 | 26,546 | 12,837 | local.get×3810, i32.const×1624, local.set×997, i32.add×682, i32.load×663 |
| 10 | `(i32 i32 i32 i32 i32 i32) -> ()` | 130 | 20,628 | 9,288 | local.get×2540, i32.const×1209, local.set×548, local.tee×388, end×388 |
| 11 | `(i32 i32 i32 i32) -> ()` | 53 | 24,505 | 11,634 | local.get×3005, i32.const×1276, local.tee×731, end×592, i32.load×586 |
| 12 | `(i32 i32 i32) -> (i32)` | 74 | 22,862 | 10,729 | local.get×2867, i32.const×1226, i32.load×803, local.set×500, end×462 |
| 13 | `(i32 i32 i32) -> (i32)` | 77 | 18,924 | 8,934 | local.get×2485, i32.const×1224, i32.load×559, i32.add×543, local.set×525 |
| 17 | `(i32) -> ()` | 78 | 19,740 | 9,222 | local.get×2551, i32.const×1095, i32.add×574, local.set×506, local.tee×504 |
| 18 | `(i32 i32) -> ()` | 95 | 28,847 | 13,556 | local.get×4112, i32.const×1781, i32.add×687, i32.load×632, local.set×632 |
| 23 | `(i32 i32) -> ()` | 82 | 29,008 | 13,035 | local.get×4617, i32.const×1454, i32.store×702, i32.add×688, local.tee×644 |
| 24 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 64 | 24,285 | 11,198 | local.get×2682, i32.const×1711, local.set×821, end×663, block×465 |
| 27 | `(i32 i32 i32 i32 i32) -> ()` | 68 | 21,783 | 10,071 | local.get×3118, i32.const×1237, local.tee×621, i32.add×432, i32.load×331 |
| 33 | `(i32 i32 i32 i32 i32) -> ()` | 65 | 18,015 | 8,704 | local.get×2378, i32.const×1095, local.set×628, local.tee×459, i32.add×442 |
| 63 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 99 | 32,154 | 15,014 | local.get×4317, i32.const×1963, i32.load×986, local.set×902, i32.add×812 |
| 191 | `(i32 i32) -> ()` | 10 | 26,844 | 12,930 | local.get×4543, i32.load×1219, i32.const×1046, end×803, i32.add×744 |
| 223 | `(i32) -> ()` | 19 | 23,160 | 10,851 | local.get×2722, i32.load×1494, i32.const×1177, local.tee×1008, end×853 |
| 709 | `(i32 i32 i32 i32) -> ()` | 54 | 21,809 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 993 | `(i32 i32) -> ()` | 138 | 42,558 | 20,102 | local.get×5237, i32.const×2322, local.tee×1192, i32.add×1062, local.set×1007 |
| 1541 | `(i32 i32) -> (i32)` | 179 | 54,386 | 19,724 | local.get×6550, i32.const×2610, i64.store×1877, i64.const×1058, i64.load×1038 |
| 1936 | `(i32 i32) -> ()` | 110 | 38,693 | 17,216 | local.get×5028, i32.const×1620, local.set×859, local.tee×753, end×661 |
| 2536 | `(i32 i32) -> ()` | 397 | 139,324 | 62,996 | local.get×18108, i32.const×7882, local.set×3752, i32.load×3121, end×2777 |
| 2812 | `(i32 i32 i32 i32) -> ()` | 137 | 30,199 | 13,753 | local.get×4098, i32.const×1461, local.tee×695, local.set×679, i32.load×613 |
| 2830 | `(i32 i32) -> ()` | 135 | 32,980 | 14,764 | local.get×4135, i32.const×1957, local.set×762, local.tee×727, i32.add×680 |

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
targetcolourmaxUpSpeedforceinclinationazimuthturbidityluminancemieCoefficientmieDirectionalGsunPositionvertexTintxCameraOffsetyCameraOffsetzCameraOffsetditheringinfiniteDistanceuseSunPositionrgba(tran
schema23canChangeblockReachezBridgingezBridgingGrowMsezToweringezToweringGrowMscrouchingSpeedwalkingSpeedrunningSpeedjumpAmountairJumpCountjumpHoldThrustbunnyhopMaxMultiplierskyBoxminChunkAddDistshowP
Aspen LeavesAspen LogAspen SaplingAspen Wood PlanksBarkless Aspen LogBarkless Cedar LogBarkless Jungle LogBarkless Maple LogBarkless Pine LogBarkless Plum LogBlack PlanksBlue PlanksBookshelfBowl of Cr
Acacia LeavesAcacia LogAcacia SaplingAcacia Wood PlanksAlchemy TableBarkless Acacia LogBarkless Birch LogBarkless Dark Oak LogBarkless Elm LogBarkless Oak LogBarkless Spruce LogBirch LeavesBirch LogBi
a draw with a base vertex: WebGL2 has none, so it is skippedan indexed draw without an index buffer is skippeda draw's pipeline has no GL program: it is skippeda draw's program failed to link: it is s
standingsittingzombieglidingdrivingsleepingridingShearedSaddledskyblockHeldBossBoxBloxdBlockPersonLeaderboardParticleEmitterTier 1Tier 2Tier 3Tier 4Tier 5PlayerPigCowSheepHorseCamelIron Goofy GolemGol
EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEJJJJJJJJEEEEEEEEEEEEEJJJJJJJJEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEJJJJEEEEEEEEEEEEEEJJJJJJ
,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123
called `Result::unwrap()` on an `Err` valueANGLE_instanced_arraysEXT_blend_minmaxEXT_color_buffer_floatEXT_color_buffer_half_floatEXT_float_blendEXT_frag_depthEXT_shader_texture_lodEXT_sRGBEXT_texture
UV2VERTEXCOLORVERTEXALPHAOPACITYRGBEMISSIVELITE_REFLECTION_LUMINANCEREFLECTIONMAP_OPPOSITEZROUGHNESSREFLECTIONOVERALPHAALPHATESTALPHATEST_AFTERALLALPHACOMPUTATIONSALPHABLENDALPHAFROMDIFFUSEPREMULTIPLY
Player_Atlasbee_set_3_attachable_bluebee_set_3_attachable_greenbee_set_3_attachable_redmedieval_set_1_attachable_bluemedieval_set_1_attachable_greenmedieval_set_1_attachable_purplemedieval_set_1_attac
staged overlay bytesmassfluidDragfluidDragHorizontalfluidDragVerticalgravityMultipliercanRunjumpMultiplierupwardImpulseOnUsecanAutoStepcanAutoStepByBlockriderOffseteffectstandingFrictionmaxPushDistanc
```

## Opcode histogram (aggregated)

| opcode | count |
|---|---:|
| `local.get` | 531,560 |
| `i32.const` | 222,799 |
| `local.tee` | 98,735 |
| `i32.load` | 93,458 |
| `local.set` | 92,561 |
| `i32.add` | 86,000 |
| `end` | 78,039 |
| `br_if` | 63,394 |
| `i32.store` | 46,353 |
| `block` | 36,750 |
| `i64.const` | 32,099 |
| `i64.store` | 31,302 |
| `if` | 29,818 |
| `call` | 28,988 |
| `i32.sub` | 24,249 |
| `i64.load` | 23,235 |
| `br` | 22,838 |
| `i32.eqz` | 19,198 |
| `select` | 16,497 |
| `i32.shl` | 16,226 |
| `i32.and` | 15,992 |
| `i32.ne` | 15,681 |
| `i32.load8_u` | 14,634 |
| `i32.eq` | 13,691 |
| `i32.store8` | 12,353 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 12, structural errors: 0
- bodies fully decoded: 2,860/2,860 (degraded: 0)
