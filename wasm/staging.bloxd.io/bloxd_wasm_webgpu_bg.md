# WASM module: `bloxd_wasm_webgpu_bg`

> environment **staging.bloxd.io** · build `4udp6d.2845de07` · analyzed 2026-11-28T07:18:32+09:00
> source: https://staging.bloxd.io/static/media/bloxd_wasm_webgpu_bg.8880c7bec46f329470bf.wasm
> 5,238,928 bytes (5.0 MB) · sha256 `f945f7dfcd84e1c2…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- name-section module id `6491d4607a069046.12491` → `742b813df0f120dd.12491` (numeric version suffix unchanged — same module version, re-randomized prefix)
- export identifiers rotated by the obfuscator: 1/170 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 3,025 / 394 |
| Exports / imports | 170 / 395 |
| Code bytes (function bodies) | 4,142,840 (4.0 MB) |
| Total local variables | 31,921 |
| Instructions (scanable bodies) | 1,938,528 |
| Data segments / bytes | 3,552 / 1,049,293 |
| Element segments / entries | 1 / 844 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `742b813df0f120dd.12491` |
| Sections | 11 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,542 | 180 |
| 2 | import | 4,746 | 395 |
| 3 | function | 3,079 | 3025 |
| 4 | table | 7 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,361 | 170 |
| 9 | element | 1,695 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 4,148,372 | 3025 |
| 11 | data | 1,078,029 | 3552 |
| 0 | custom:name | 30 | — |

## Types

180 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

395 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `oilJ.fjeY` | memory | `[128..14648]` |
| 0 | `oilJ.R6FL` | func | `(i32) -> (i32)` |
| 1 | `oilJ.K4so` | func | `(i32) -> (f64)` |
| 2 | `oilJ.uZSx` | func | `() -> (i32)` |
| 3 | `oilJ.qlcC` | func | `(i32 i32 i32) -> (i32)` |
| 4 | `oilJ.v6j2` | func | `(i32) -> ()` |
| 5 | `oilJ.spNT` | func | `(i32 i32) -> (i32)` |
| 6 | `oilJ.oFQl` | func | `(i32) -> (i32)` |
| 7 | `oilJ.EbrC` | func | `(i32 i32 i32) -> (i32)` |
| 8 | `oilJ.LxYk` | func | `(i32 i32 i32 i32) -> (i32)` |
| 9 | `oilJ.OlbL` | func | `(i32) -> (i32)` |
| 10 | `oilJ.dFpj` | func | `(i32 i32) -> ()` |
| 11 | `oilJ.yHtW` | func | `(i32 i32) -> ()` |
| 12 | `oilJ.BmOU` | func | `(i32 i32 i32 i32) -> (i32)` |
| 13 | `oilJ.PPQR` | func | `(i32 i32) -> (i32)` |
| 14 | `oilJ.OCEi` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 15 | `oilJ.lzJ0` | func | `(i32) -> (i32)` |
| 16 | `oilJ.WMVJ` | func | `(i32 i32) -> (i32)` |
| 17 | `oilJ.p6m4` | func | `(i32 i32) -> (i32)` |
| 18 | `oilJ.wVlc` | func | `(i32 i32) -> ()` |
| 19 | `oilJ.aAG2` | func | `(i32) -> (i32)` |
| 20 | `oilJ.dCiz` | func | `(i32) -> (i32)` |
| 21 | `oilJ.H8VS` | func | `(i32 i32 i32) -> ()` |
| 22 | `oilJ.xcuq` | func | `(i32 i32 i32) -> (i32)` |
| 23 | `oilJ.A09S` | func | `(i32) -> (i32)` |
| 24 | `oilJ.LM56` | func | `(i32) -> (i32)` |
| 25 | `oilJ.pfIb` | func | `(i32 i32) -> ()` |
| 26 | `oilJ.JU2v` | func | `(i32 i32) -> (i32)` |
| 27 | `oilJ.s1e8` | func | `(i32 i32 i32 i32) -> ()` |
| 28 | `oilJ.Jy4b` | func | `(i32) -> (i32)` |
| 29 | `oilJ.PAtS` | func | `(i32) -> (i32)` |
| 30 | `oilJ.IQS7` | func | `(i32) -> (i32)` |
| 31 | `oilJ.CMmu` | func | `(i32) -> (i32)` |
| 32 | `oilJ.LeFq` | func | `(i32) -> (i32)` |
| 33 | `oilJ.YROT` | func | `(i32 i32 i32) -> ()` |
| 34 | `oilJ.g8QI` | func | `(i32 i32) -> (i32)` |
| 35 | `oilJ.Bbig` | func | `(i32) -> (i32)` |
| 36 | `oilJ.d4wP` | func | `(i32) -> ()` |
| 37 | `oilJ.IZ3T` | func | `(i32) -> (i32)` |
| 38 | `oilJ.cN0H` | func | `(i32) -> (i32)` |
| 39 | `oilJ.i1cK` | func | `(i32) -> ()` |
| 40 | `oilJ.yRQs` | func | `(i32 i32) -> (i32)` |
| 41 | `oilJ.OzF8` | func | `(i32) -> ()` |
| 42 | `oilJ.HqWm` | func | `(i32 i32) -> ()` |
| 43 | `oilJ.JUds` | func | `(i32 i32 i32) -> (i32)` |
| 44 | `oilJ.B1G8` | func | `(i32) -> ()` |
| 45 | `oilJ.B2zZ` | func | `(i32) -> ()` |
| 46 | `oilJ.a2uI` | func | `() -> (i32)` |
| 47 | `oilJ.sUlz` | func | `(i32 i32) -> (i32)` |
| 48 | `oilJ.kQ1N` | func | `(i32 i32) -> (i32)` |
| 49 | `oilJ.OORL` | func | `(i32) -> (i32)` |
| 50 | `oilJ.JfqK` | func | `(i32) -> (i32)` |
| 51 | `oilJ.ajEN` | func | `(i32) -> (i32)` |
| 52 | `oilJ.EodM` | func | `(i32 i32) -> ()` |
| 53 | `oilJ.Z0wN` | func | `(i32) -> (i32)` |
| 54 | `oilJ.eUP7` | func | `(i32) -> ()` |
| 55 | `oilJ.xkSo` | func | `(i32 i32) -> (i32)` |
| 56 | `oilJ.WyFx` | func | `(i32 i32 i32) -> (i32)` |
| 57 | `oilJ.Ok3x` | func | `(i32) -> (i32)` |
| 58 | `oilJ.a2Yp` | func | `(i32 i32 i32) -> ()` |
| 59 | `oilJ.NlGp` | func | `(i32 i32) -> ()` |
| 60 | `oilJ.RIkV` | func | `(i32) -> (i32)` |
| 61 | `oilJ.OlFk` | func | `(i32 i32 f64 i32 i32 f64 f64) -> ()` |
| 62 | `oilJ.z3hJ` | func | `(i32 i32 f64 i32 f64 f64) -> ()` |
| 63 | `oilJ.WiSe` | func | `(i32) -> ()` |
| 64 | `oilJ.OmrR` | func | `(i32 i32 i32) -> ()` |
| 65 | `oilJ.ci7t` | func | `(i32 i32) -> ()` |
| 66 | `oilJ.sntA` | func | `(i32 i32 i32 i32 i32 f64 i32) -> ()` |
| 67 | `oilJ.Un5V` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 68 | `oilJ.p6qo` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 69 | `oilJ.Vniy` | func | `(i32 i32 f64) -> ()` |
| 70 | `oilJ.CWIM` | func | `(i32) -> (i32)` |
| 71 | `oilJ.EDfE` | func | `(i32 i32) -> ()` |
| 72 | `oilJ.borw` | func | `(i32 i32 i32) -> ()` |
| 73 | `oilJ.InCL` | func | `(i32 i32 i32 i32) -> ()` |
| 74 | `oilJ.XyKn` | func | `(i32) -> ()` |
| 75 | `oilJ.QViL` | func | `(i32 i32 i32) -> ()` |
| 76 | `oilJ.faXV` | func | `(i32 i32) -> ()` |
| 77 | `oilJ.gzim` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 78 | `oilJ.a74j` | func | `(i32 f32 f32 f32 f32 f32 f32) -> ()` |
| 79 | `oilJ.mBK6` | func | `(i32 i32 i32) -> ()` |
| 80 | `oilJ.yqDo` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 81 | `oilJ.H4aa` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 82 | `oilJ.d6jq` | func | `(i32 i32 i32 i32 i32 f64 i32) -> ()` |
| 83 | `oilJ.NdRX` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 84 | `oilJ.ON4r` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 85 | `oilJ.KdM1` | func | `(i32 i32 i32) -> ()` |
| 86 | `oilJ.YPJj` | func | `(i32 i32) -> (i32)` |
| 87 | `oilJ.va0w` | func | `(i32) -> (i32)` |
| 88 | `oilJ.XPlW` | func | `(i32) -> (i32)` |
| 89 | `oilJ.QeHV` | func | `(i32) -> (i32)` |
| 90 | `oilJ.Or2n` | func | `(i32 i32) -> (i32)` |
| 91 | `oilJ.wTcp` | func | `(i32) -> ()` |
| 92 | `oilJ.wy3E` | func | `(i32) -> (i32)` |
| 93 | `oilJ.KHzh` | func | `(i32 i32) -> (i32)` |
| 94 | `oilJ.F90k` | func | `(i32 i32 i32) -> (i32)` |
| 95 | `oilJ.DJPn` | func | `(i32 i32 i32) -> ()` |
| 96 | `oilJ.f3o8` | func | `(i32 i32 i32 i32) -> (i32)` |
| 97 | `oilJ.VnsX` | func | `() -> (f64)` |
| 98 | `oilJ.VjXv` | func | `() -> (f64)` |
| 99 | `oilJ.YrPS` | func | `(i32 i32) -> ()` |
| 100 | `oilJ.FdMy` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 101 | `oilJ.Kwdb` | func | `(i32) -> (i32)` |
| 102 | `oilJ.Iqua` | func | `(i32) -> (i32)` |
| 103 | `oilJ.Hqxa` | func | `(i32) -> (i32)` |
| 104 | `oilJ.eyet` | func | `() -> (i32)` |
| 105 | `oilJ.uPRD` | func | `() -> (i32)` |
| 106 | `oilJ.Ewe7` | func | `() -> (i32)` |
| 107 | `oilJ.eJaw` | func | `() -> (i32)` |
| 108 | `oilJ.u1kE` | func | `(i32 i32) -> (i32)` |
| 109 | `oilJ.Mk4N` | func | `(i32) -> ()` |
| 110 | `oilJ.Tevo` | func | `(i32 i32) -> (i32)` |
| 111 | `oilJ.baEq` | func | `(i32) -> (i32)` |
| 112 | `oilJ.IEtc` | func | `() -> (f64)` |
| 113 | `oilJ.rfi5` | func | `(i32) -> (i32)` |
| 114 | `oilJ.Qnlz` | func | `(i32 i32) -> ()` |
| 115 | `oilJ.s6j9` | func | `(i32 i32) -> ()` |
| 116 | `oilJ.vHJ5` | func | `(i32 i32) -> ()` |
| 117 | `oilJ.rXqB` | func | `(i32 f32) -> ()` |
| 118 | `oilJ.VuT3` | func | `(i32 f32) -> ()` |
| 119 | `oilJ.yQOr` | func | `(i32 i32) -> ()` |
| 120 | `oilJ.x8Uj` | func | `(i32 i32) -> ()` |
| 121 | `oilJ.wEOv` | func | `(i32 i32) -> ()` |
| 122 | `oilJ.BHeE` | func | `(i32 i32) -> ()` |
| 123 | `oilJ.GoPX` | func | `(i32 i32 i32) -> ()` |
| 124 | `oilJ.R32i` | func | `(i32 i32) -> (i32)` |
| 125 | `oilJ.Xq5j` | func | `(i32 i32) -> ()` |
| 126 | `oilJ.MTV7` | func | `(i32 i32) -> ()` |
| 127 | `oilJ.pqrq` | func | `(i32 i32) -> ()` |
| 128 | `oilJ.uztO` | func | `(i32 i32) -> ()` |
| 129 | `oilJ.XkUl` | func | `(i32 f64) -> ()` |
| 130 | `oilJ.CcGs` | func | `(i32 f64) -> ()` |
| 131 | `oilJ.VhIx` | func | `(i32 i32) -> ()` |
| 132 | `oilJ.Dway` | func | `(i32 i32 i32) -> ()` |
| 133 | `oilJ.XqlG` | func | `(i32 i32) -> ()` |
| 134 | `oilJ.RWUn` | func | `(i32 i32) -> (i32)` |
| 135 | `oilJ.UsUH` | func | `(i32 i32 i32) -> ()` |
| 136 | `oilJ.Kxuu` | func | `(i32 i32 i32) -> ()` |
| 137 | `oilJ.ujDL` | func | `(i32 i32) -> (i32)` |
| 138 | `oilJ.R0tR` | func | `(i32 i32) -> (i32)` |
| 139 | `oilJ.zvjT` | func | `(i32 i32 i32) -> ()` |
| 140 | `oilJ.L0gj` | func | `(i32 i32 i32) -> ()` |
| 141 | `oilJ.MlEI` | func | `(i32 i32) -> (i32)` |
| 142 | `oilJ.evvX` | func | `(i32 i32) -> ()` |
| 143 | `oilJ.ie3y` | func | `(i32 i32) -> ()` |
| 144 | `oilJ.jkkN` | func | `(i32 i32) -> ()` |
| 145 | `oilJ.kqid` | func | `(i32 i32) -> ()` |
| 146 | `oilJ.czUN` | func | `(i32 i32) -> ()` |
| 147 | `oilJ.bIok` | func | `(i32 i32) -> ()` |
| 148 | `oilJ.bPGG` | func | `(i32 i32) -> ()` |
| 149 | `oilJ.W9Uw` | func | `(i32 f64) -> ()` |
| 150 | `oilJ.ruKN` | func | `(i32 i32) -> ()` |
| 151 | `oilJ.yAyT` | func | `(i32 i32) -> ()` |
| 152 | `oilJ.cbiT` | func | `(i32 i32) -> ()` |
| 153 | `oilJ.drjh` | func | `(i32 i32) -> ()` |
| 154 | `oilJ.uG73` | func | `(i32 i32) -> ()` |
| 155 | `oilJ.Le3C` | func | `(i32 i32) -> ()` |
| 156 | `oilJ.w4gC` | func | `(i32 i32) -> ()` |
| 157 | `oilJ.SPAz` | func | `(i32 i32) -> ()` |
| 158 | `oilJ.Rbiy` | func | `(i32 i32) -> ()` |
| 159 | `oilJ.yKHb` | func | `(i32 i32 i32) -> ()` |
| 160 | `oilJ.Ccfk` | func | `(i32 i32 i32) -> ()` |
| 161 | `oilJ.ZTvE` | func | `(i32 i32) -> (i32)` |
| 162 | `oilJ.DZN9` | func | `(i32 i32) -> (i32)` |
| 163 | `oilJ.UjZg` | func | `(i32 i32) -> ()` |
| 164 | `oilJ.chd5` | func | `(i32 i32) -> ()` |
| 165 | `oilJ.nGWy` | func | `(i32 f64) -> ()` |
| 166 | `oilJ.QpVX` | func | `(i32 i32) -> ()` |
| 167 | `oilJ.JLAU` | func | `(i32 i32) -> ()` |
| 168 | `oilJ.O7ky` | func | `(i32 i32) -> ()` |
| 169 | `oilJ.OI9x` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 170 | `oilJ.ipGd` | func | `(i32 f64) -> ()` |
| 171 | `oilJ.pssV` | func | `(i32 f64) -> ()` |
| 172 | `oilJ.dNRo` | func | `(i32 f64) -> ()` |
| 173 | `oilJ.Dqu1` | func | `(i32 f64) -> ()` |
| 174 | `oilJ.yJkC` | func | `(i32 i32) -> ()` |
| 175 | `oilJ.YvaB` | func | `(i32 i32) -> ()` |
| 176 | `oilJ.yOpZ` | func | `(i32 i32) -> ()` |
| 177 | `oilJ.eiTV` | func | `(i32 i32) -> ()` |
| 178 | `oilJ.utUk` | func | `(i32 i32) -> ()` |
| 179 | `oilJ.hATQ` | func | `(i32 i32 i32) -> ()` |
| 180 | `oilJ.XcRQ` | func | `(i32 i32) -> ()` |
| 181 | `oilJ.Twew` | func | `(i32 f32) -> ()` |
| 182 | `oilJ.fjsW` | func | `(i32 i32) -> ()` |
| 183 | `oilJ.MNLm` | func | `(i32 i32) -> ()` |
| 184 | `oilJ.APK5` | func | `(i32 i32) -> ()` |
| 185 | `oilJ.gqt0` | func | `(i32 i32) -> ()` |
| 186 | `oilJ.O5OH` | func | `(i32 i32) -> ()` |
| 187 | `oilJ.kIp7` | func | `(i32 i32) -> ()` |
| 188 | `oilJ.Nx9A` | func | `(i32 i32) -> ()` |
| 189 | `oilJ.bWUv` | func | `(i32 i32) -> ()` |
| 190 | `oilJ.JqER` | func | `(i32 i32) -> ()` |
| 191 | `oilJ.OV8s` | func | `(i32 i32) -> ()` |
| 192 | `oilJ.Kgh4` | func | `(i32 i32) -> ()` |
| 193 | `oilJ.nFI2` | func | `(i32 i32) -> ()` |
| 194 | `oilJ.Iwz7` | func | `(i32 i32) -> (i32)` |
| 195 | `oilJ.FFBJ` | func | `(i32 i32 i32 i32) -> ()` |
| 196 | `oilJ.vsOo` | func | `(i32 i32) -> ()` |
| 197 | `oilJ.SYRZ` | func | `(i32 i32 i32) -> ()` |
| 198 | `oilJ.g74X` | func | `(i32 i32) -> (i32)` |
| 199 | `oilJ.DSpd` | func | `(i32) -> (i32)` |
| 200 | `oilJ.YfgC` | func | `(i32 i32) -> ()` |
| 201 | `oilJ.fSl9` | func | `(i32 i32) -> ()` |
| 202 | `oilJ.PCVJ` | func | `(i32 i32) -> ()` |
| 203 | `oilJ.oiKo` | func | `(i32 i32) -> ()` |
| 204 | `oilJ.DQ9T` | func | `(i32 i32) -> ()` |
| 205 | `oilJ.nzlM` | func | `(i32 i32) -> ()` |
| 206 | `oilJ.XBmp` | func | `(i32 i32) -> ()` |
| 207 | `oilJ.lsfb` | func | `(i32 i32) -> ()` |
| 208 | `oilJ.a9Gf` | func | `(i32) -> (i32)` |
| 209 | `oilJ.mXeZ` | func | `(i32 i32 i32) -> ()` |
| 210 | `oilJ.DW0f` | func | `(i32 i32) -> ()` |
| 211 | `oilJ.mNsv` | func | `(i32 i32 i32 i32) -> ()` |
| 212 | `oilJ.vlg7` | func | `(i32 i32) -> ()` |
| 213 | `oilJ.XTrY` | func | `(i32) -> ()` |
| 214 | `oilJ.uY6q` | func | `(i32 i32) -> ()` |
| 215 | `oilJ.Idq0` | func | `(i32) -> (i32)` |
| 216 | `oilJ.Rpv8` | func | `(i32 i32 i32) -> ()` |
| 217 | `oilJ.JKJC` | func | `(i32 i32) -> ()` |
| 218 | `oilJ.bTSR` | func | `(i32 i32) -> ()` |
| 219 | `oilJ.c6oV` | func | `(i32 i32) -> ()` |
| 220 | `oilJ.U9P9` | func | `(i32 i32) -> ()` |
| 221 | `oilJ.WtiC` | func | `(i32 i32) -> (i32)` |
| 222 | `oilJ.Qdo3` | func | `(i32 i32) -> ()` |
| 223 | `oilJ.HKU3` | func | `(i32 i32) -> ()` |
| 224 | `oilJ.DgjX` | func | `(i32 i32) -> ()` |
| 225 | `oilJ.amd2` | func | `(i32 i32) -> ()` |
| 226 | `oilJ.EiQY` | func | `(i32 i32) -> ()` |
| 227 | `oilJ.khcN` | func | `(i32 i32) -> ()` |
| 228 | `oilJ.klZu` | func | `(i32 i32) -> ()` |
| 229 | `oilJ.VNLf` | func | `(i32 i32 f64 f64) -> (i32)` |
| 230 | `oilJ.a9gR` | func | `(i32) -> (i32)` |
| 231 | `oilJ.CHze` | func | `(i32) -> ()` |
| 232 | `oilJ.ZCQC` | func | `(i32 f64) -> ()` |
| 233 | `oilJ.K3gD` | func | `(i32 i32) -> ()` |
| 234 | `oilJ.QUW5` | func | `(i32 i32) -> ()` |
| 235 | `oilJ.hF8q` | func | `(i32 i32 i32) -> ()` |
| 236 | `oilJ.EtqG` | func | `(i32 i32) -> (i32)` |
| 237 | `oilJ.M1G2` | func | `(i32 i32) -> ()` |
| 238 | `oilJ.Dm9T` | func | `(i32 i32) -> ()` |
| 239 | `oilJ.VKjB` | func | `(i32 i32) -> ()` |
| 240 | `oilJ.ri9z` | func | `(i32 i32 i32) -> ()` |
| 241 | `oilJ.ZWGE` | func | `(i32 i32) -> ()` |
| 242 | `oilJ.mK9x` | func | `(i32 i32) -> ()` |
| 243 | `oilJ.l6c1` | func | `(i32 i32) -> ()` |
| 244 | `oilJ.aRT7` | func | `(i32 i32 i32) -> ()` |
| 245 | `oilJ.brL8` | func | `(i32 i32) -> ()` |
| 246 | `oilJ.UThJ` | func | `(i32 i32) -> ()` |
| 247 | `oilJ.cSI7` | func | `(i32 i32 i32) -> ()` |
| 248 | `oilJ.FPbS` | func | `(i32 i32) -> (i32)` |
| 249 | `oilJ.gWEY` | func | `(i32 i32) -> ()` |
| 250 | `oilJ.ml4k` | func | `(i32 i32 i32) -> ()` |
| 251 | `oilJ.dcHJ` | func | `(i32 i32) -> ()` |
| 252 | `oilJ.Sm0h` | func | `(i32 f64) -> ()` |
| 253 | `oilJ.rwnt` | func | `(i32 i32) -> ()` |
| 254 | `oilJ.Odx0` | func | `(i32 f64) -> ()` |
| 255 | `oilJ.T9OC` | func | `(i32 i32 i32) -> ()` |
| 256 | `oilJ.ecF7` | func | `(i32 i32) -> ()` |
| 257 | `oilJ.RaUI` | func | `(i32 i32 i32) -> ()` |
| 258 | `oilJ.ogVf` | func | `(i32 i32) -> ()` |
| 259 | `oilJ.M1On` | func | `(i32 i32) -> ()` |
| 260 | `oilJ.XkVs` | func | `(i32 i32) -> ()` |
| 261 | `oilJ.nZqw` | func | `(i32 i32 i32) -> ()` |
| 262 | `oilJ.iMsY` | func | `(i32 i32) -> ()` |
| 263 | `oilJ.fdpT` | func | `(i32 i32) -> ()` |
| 264 | `oilJ.lRAT` | func | `(i32 i32) -> ()` |
| 265 | `oilJ.OXKC` | func | `(i32 i32) -> ()` |
| 266 | `oilJ.OWA5` | func | `(i32 f32) -> ()` |
| 267 | `oilJ.nX9T` | func | `(i32 f32) -> ()` |
| 268 | `oilJ.FLKo` | func | `(i32 i32) -> ()` |
| 269 | `oilJ.pUUL` | func | `(i32 i32) -> ()` |
| 270 | `oilJ.iYlB` | func | `(i32 i32) -> ()` |
| 271 | `oilJ.OIkL` | func | `(i32 i32) -> ()` |
| 272 | `oilJ.UrTL` | func | `(i32 i32) -> ()` |
| 273 | `oilJ.X1oT` | func | `(i32 i32) -> ()` |
| 274 | `oilJ.VqYK` | func | `(i32 i32) -> ()` |
| 275 | `oilJ.zxMA` | func | `(i32 i32) -> ()` |
| 276 | `oilJ.Yvka` | func | `(i32 i32) -> ()` |
| 277 | `oilJ.oPvl` | func | `(i32 i32) -> ()` |
| 278 | `oilJ.FT2p` | func | `(i32 i32) -> ()` |
| 279 | `oilJ.Z7lv` | func | `(i32 i32) -> ()` |
| 280 | `oilJ.u5eJ` | func | `(i32 i32) -> ()` |
| 281 | `oilJ.u1KN` | func | `(i32 i32) -> ()` |
| 282 | `oilJ.XDvP` | func | `(i32 i32) -> ()` |
| 283 | `oilJ.R0aL` | func | `(i32 i32) -> ()` |
| 284 | `oilJ.gqxc` | func | `(i32 i32) -> ()` |
| 285 | `oilJ.Umcg` | func | `(i32 i32) -> ()` |
| 286 | `oilJ.Gn4B` | func | `(i32 i32 i32) -> ()` |
| 287 | `oilJ.OHse` | func | `(i32 i32 i32) -> ()` |
| 288 | `oilJ.TkAO` | func | `(i32 i32) -> ()` |
| 289 | `oilJ.xduq` | func | `(i32 i32) -> ()` |
| 290 | `oilJ.C3Fq` | func | `(i32 i32) -> ()` |
| 291 | `oilJ.tnsz` | func | `(i32 i32) -> ()` |
| 292 | `oilJ.V8DA` | func | `(i32 i32) -> ()` |
| 293 | `oilJ.qyCq` | func | `(i32 i32) -> ()` |
| 294 | `oilJ.FVMp` | func | `(i32 i32) -> ()` |
| 295 | `oilJ.YkYt` | func | `(i32 i32) -> ()` |
| 296 | `oilJ.UoIV` | func | `(i32 i32) -> ()` |
| 297 | `oilJ.MBAv` | func | `(i32 i32) -> ()` |
| 298 | `oilJ.sKUq` | func | `(i32 i32) -> ()` |
| 299 | `oilJ.q0PV` | func | `(i32 i32) -> (i32)` |
| 300 | `oilJ.oNqz` | func | `(i32 i32) -> ()` |
| 301 | `oilJ.anNS` | func | `(i32 i32 i32) -> ()` |
| 302 | `oilJ.iGYz` | func | `(i32 i32) -> ()` |
| 303 | `oilJ.CE1w` | func | `(i32 i32) -> ()` |
| 304 | `oilJ.KYey` | func | `(i32 i32) -> ()` |
| 305 | `oilJ.Xlco` | func | `(i32 i32 i32) -> ()` |
| 306 | `oilJ.vLpd` | func | `(i32 i32) -> (i32)` |
| 307 | `oilJ.RJ4R` | func | `(i32 i32 i32) -> ()` |
| 308 | `oilJ.GZLX` | func | `(i32 i32 i32) -> ()` |
| 309 | `oilJ.mMg2` | func | `(i32 i32) -> ()` |
| 310 | `oilJ.bbUF` | func | `(i32 i32) -> ()` |
| 311 | `oilJ.zlw3` | func | `(i32 i32) -> ()` |
| 312 | `oilJ.jywb` | func | `(i32 i32) -> ()` |
| 313 | `oilJ.nXAA` | func | `(i32 i32) -> (i32)` |
| 314 | `oilJ.Kbbf` | func | `(i32) -> (i32)` |
| 315 | `oilJ.GUOP` | func | `(i32) -> (i32)` |
| 316 | `oilJ.CPyu` | func | `(i32) -> (i32)` |
| 317 | `oilJ.ym4O` | func | `(i32) -> (i32)` |
| 318 | `oilJ.QVWp` | func | `(i32) -> (i32)` |
| 319 | `oilJ.VUVY` | func | `(i32) -> (i32)` |
| 320 | `oilJ.YlsV` | func | `(i32) -> (i32)` |
| 321 | `oilJ.wWCK` | func | `(i32) -> (i32)` |
| 322 | `oilJ.BI43` | func | `(i32) -> (i32)` |
| 323 | `oilJ.e4IV` | func | `(i32) -> (i32)` |
| 324 | `oilJ.IOrp` | func | `(i32) -> (i32)` |
| 325 | `oilJ.Plyd` | func | `(i32) -> (i32)` |
| 326 | `oilJ.ZHTy` | func | `(i32) -> (i32)` |
| 327 | `oilJ.Celd` | func | `(i32) -> (i32)` |
| 328 | `oilJ.q77M` | func | `(i32) -> (f64)` |
| 329 | `oilJ.l1l4` | func | `(i32) -> (f64)` |
| 330 | `oilJ.NgFq` | func | `(i32) -> (i32)` |
| 331 | `oilJ.jA9a` | func | `(i32) -> (f64)` |
| 332 | `oilJ.WZkB` | func | `(i32) -> (i32)` |
| 333 | `oilJ.DXeV` | func | `(i32) -> (i32)` |
| 334 | `oilJ.wL5D` | func | `(i32) -> (i32)` |
| 335 | `oilJ.ojWF` | func | `(i32) -> (i32)` |
| 336 | `oilJ.Qc0a` | func | `(i32) -> (i32)` |
| 337 | `oilJ.IvZU` | func | `(i32) -> (i32)` |
| 338 | `oilJ.rmGj` | func | `(i32) -> (i32)` |
| 339 | `oilJ.u33V` | func | `(i32) -> (i32)` |
| 340 | `oilJ.Jtlj` | func | `(i32) -> (i32)` |
| 341 | `oilJ.PPvr` | func | `(i32) -> (i32)` |
| 342 | `oilJ.JFef` | func | `(i32) -> (i32)` |
| 343 | `oilJ.ofoo` | func | `(i32) -> (i32)` |
| 344 | `oilJ.IdVU` | func | `(i32) -> (i32)` |
| 345 | `oilJ.Z629` | func | `(i32 i32 i32) -> (i32)` |
| 346 | `oilJ.L2kB` | func | `() -> (i32)` |
| 347 | `oilJ.O2Lr` | func | `(i32 i32) -> ()` |
| 348 | `oilJ.hNCg` | func | `(i32 i32 i32) -> ()` |
| 349 | `oilJ.ycMH` | func | `(i32 i32 i32) -> ()` |
| 350 | `oilJ.Plmg` | func | `(i32 i32) -> (i32)` |
| 351 | `oilJ.ZuDz` | func | `(i32) -> (i32)` |
| 352 | `oilJ.CA0P` | func | `(i32 i32 i32) -> (i32)` |
| 353 | `oilJ.hAxl` | func | `(i32) -> ()` |
| 354 | `oilJ.rghz` | func | `(i32) -> (i32)` |
| 355 | `oilJ.ld0j` | func | `(i32 i32) -> ()` |
| 356 | `oilJ.TKIp` | func | `(i32) -> (i32)` |
| 357 | `oilJ.EDUm` | func | `(i32) -> (i32)` |
| 358 | `oilJ.OfYt` | func | `(i32) -> (i32)` |
| 359 | `oilJ.sj5Z` | func | `(i32) -> (i32)` |
| 360 | `oilJ.ZNlP` | func | `(i32) -> (i32)` |
| 361 | `oilJ.u85L` | func | `(i32 i32) -> ()` |
| 362 | `oilJ.bIB2` | func | `(i32 i32) -> ()` |
| 363 | `oilJ.CqEi` | func | `(i32 i32) -> ()` |
| 364 | `oilJ.rYNo` | func | `(i32 i32) -> ()` |
| 365 | `oilJ.tFAb` | func | `(i32 i32) -> ()` |
| 366 | `oilJ.ervH` | func | `(i32 i32) -> ()` |
| 367 | `oilJ.RB3V` | func | `(i32 i32) -> ()` |
| 368 | `oilJ.YubF` | func | `(i32 i32 i32) -> ()` |
| 369 | `oilJ.grv8` | func | `(i32 i32) -> ()` |
| 370 | `oilJ.LVoL` | func | `(i32 i32) -> (i32)` |
| 371 | `oilJ.T7zG` | func | `(i32) -> (i32)` |
| 372 | `oilJ.sRGO` | func | `(i32) -> (i32)` |
| 373 | `oilJ.pxrg` | func | `(i32 i32) -> ()` |
| 374 | `oilJ.J2Zx` | func | `(i32) -> (i32)` |
| 375 | `oilJ.AVP1` | func | `(i32 f64 f64) -> (i32)` |
| 376 | `oilJ.YZV5` | func | `(i32 i32 i32) -> (i32)` |
| 377 | `oilJ.ruwz` | func | `(i32 i32) -> ()` |
| 378 | `oilJ.YWeU` | func | `(i32) -> (i32)` |
| 379 | `oilJ.ZOCN` | func | `(i32) -> (i32)` |
| 380 | `oilJ.Y5hq` | func | `(i32) -> (i32)` |
| 381 | `oilJ.dunl` | func | `(i32) -> (i32)` |
| 382 | `oilJ.DEQM` | func | `(i32) -> (i32)` |
| 383 | `oilJ.XFEx` | func | `(i32) -> (i32)` |
| 384 | `oilJ.NA30` | func | `(i32 i32) -> ()` |
| 385 | `oilJ.gekP` | func | `(i32 i32) -> (i32)` |
| 386 | `oilJ.R8lA` | func | `(i32 i32) -> (i32)` |
| 387 | `oilJ.isLX` | func | `(i32 i32) -> (i32)` |
| 388 | `oilJ.A2fV` | func | `(i32 i32) -> (i32)` |
| 389 | `oilJ.hno1` | func | `(i32 i32) -> (i32)` |
| 390 | `oilJ.rtTY` | func | `(i32 i32) -> (i32)` |
| 391 | `oilJ.pzvw` | func | `(f64) -> (i32)` |
| 392 | `oilJ.ndZw` | func | `(i32 i32) -> (i32)` |
| 393 | `oilJ.H23v` | func | `(i32 i32) -> (i32)` |

## Exports

170 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `OH9t` | func | 2638 | `(i32) -> (i32)` |
| `Ghh0` | func | 1229 | `(i32 i32) -> (i32)` |
| `W8UV` | func | 1532 | `(i32 i32) -> (i32)` |
| `VbU8` | func | 2637 | `(i32) -> (i32)` |
| `Qkca` | func | 2405 | `(i32 f64) -> (i32)` |
| `P9VQ` | func | 1653 | `(i32 i32) -> (i32)` |
| `OUhv` | func | 3216 | `(i32) -> (i32 i32)` |
| `MNm6` | func | 3012 | `(i32) -> (i32)` |
| `Pc5Q` | func | 2033 | `(i32) -> ()` |
| `gt4U` | func | 713 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `nzfS` | func | 3333 | `() -> ()` |
| `ANui` | func | 2099 | `(i32 i32 i32 i32) -> ()` |
| `Tad2` | func | 1438 | `(i32) -> ()` |
| `Lbgd` | func | 3211 | `(i32) -> (i32 i32)` |
| `QJIq` | func | 3229 | `() -> (i32 i32)` |
| `db0Z` | func | 3381 | `(i32) -> (i32)` |
| `gyGx` | func | 809 | `(i32 i32) -> (i32)` |
| `rpta` | func | 1615 | `(i32) -> (i32)` |
| `iKbp` | func | 1330 | `(i32 i32 i32 i32) -> (i32)` |
| `UiEs` | func | 2001 | `(i32 i32 f64 f64 f64) -> ()` |
| `J4lj` | func | 2670 | `(i32) -> (i32)` |
| `Ylxh` | func | 3322 | `(i32 i32 i32) -> ()` |
| `dRjw` | func | 1955 | `() -> (i32)` |
| `znhf` | func | 2720 | `() -> (i32)` |
| `GWej` | func | 1856 | `(i32) -> (i32)` |
| `x0nk` | func | 2160 | `(i32 f64) -> (i32)` |
| `zwDQ` | func | 1405 | `(i32) -> (i32)` |
| `am92` | func | 862 | `(i32 i32 i32) -> (i32)` |
| `fkFg` | func | 2950 | `(i32) -> (i32)` |
| `ubDf` | func | 2735 | `(i32) -> ()` |
| `GrR4` | func | 3199 | `(i32 i32) -> (i32 i32)` |
| `HEfU` | func | 2218 | `(i32 i32) -> (i32)` |
| `XCga` | func | 1769 | `(i32 i32 i32 i32) -> (i32)` |
| `lkot` | func | 1589 | `(i32 i32 i32 i32) -> ()` |
| `xsHJ` | func | 2353 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `NCC3` | func | 1507 | `(i32 f64 f64) -> (i32)` |
| `k2ov` | func | 2630 | `(i32) -> (i32)` |
| `zaDh` | func | 2522 | `(i32 i32) -> (i32)` |
| `AMst` | func | 2583 | `(i32) -> (i32)` |
| `tjTy` | func | 2486 | `(i32 i32) -> (i32)` |
| `jQik` | func | 671 | `(i32 i32 i32) -> (i32)` |
| `LeGF` | func | 1329 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `mnVJ` | func | 2404 | `(i32 i32) -> ()` |
| `fIjt` | func | 2485 | `(i32 i32) -> (i32)` |
| `Y26v` | func | 2651 | `(i32) -> (i32)` |
| `VNDT` | func | 2977 | `(i32) -> (i32)` |
| `ArVk` | func | 1731 | `(i32 f64 f64 f64) -> (i32)` |
| `qEIc` | func | 1945 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `XBhK` | func | 1566 | `() -> (i32)` |
| `NjB5` | func | 3160 | `(i32 i32) -> (i32)` |
| `gSK0` | func | 1508 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `M7cx` | func | 2487 | `(i32 i32) -> (i32)` |
| `gBSD` | func | 2331 | `(i32 i32) -> (i32)` |
| `LrPC` | func | 3215 | `(i32) -> (i32 i32)` |
| `SKZE` | func | 2565 | `(i32) -> (i32)` |
| `zCLH` | func | 3191 | `(i32 i32 i32) -> (i32 i32)` |
| `w3Ey` | func | 1623 | `(i32 i32) -> (i32)` |
| `Gsax` | func | 2836 | `(i32 i32) -> ()` |
| `kl2x` | func | 3167 | `(i32 i32 i32 i32) -> (i32)` |
| `mvCU` | func | 3377 | `() -> (f64)` |
| `HrsX` | func | 951 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `O2oW` | func | 3228 | `() -> (i32 i32)` |
| `h6Gf` | func | 2653 | `(i32 i32) -> ()` |
| `fW0X` | func | 1962 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `ijyk` | func | 2097 | `(i32) -> (i32)` |
| `rJd2` | func | 2755 | `() -> (i32)` |
| `nqYh` | func | 3406 | `() -> (i32)` |
| `qtQt` | func | 1230 | `(i32 i32) -> ()` |
| `G0jp` | func | 2654 | `(i32) -> (i32)` |
| `oB5y` | func | 1379 | `(i32 i32 i32) -> (i32)` |
| `ku2S` | func | 2632 | `(i32) -> (i32)` |
| `FSli` | func | 2669 | `(i32) -> (i32)` |
| `ro7o` | func | 1506 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `cZWl` | func | 3204 | `(i32 i32) -> (i32 i32)` |
| `YNGm` | func | 1727 | `(i32 i32) -> ()` |
| `U69t` | func | 3214 | `(i32) -> (i32 i32)` |
| `he25` | func | 3265 | `(i32 i32 i32) -> ()` |
| `lt2f` | func | 2671 | `(i32) -> (i32)` |
| `LT9A` | func | 2661 | `(i32 i32) -> (i32)` |
| `d55W` | global | 2 | `` |
| `nEU0` | func | 1442 | `(i32 i32) -> (i32)` |
| `tW7F` | global | 1 | `` |
| `xwoH` | func | 1880 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `KKIR` | func | 3190 | `(i32 i32 i32) -> (i32 i32)` |
| `gPwt` | func | 3140 | `() -> ()` |
| `pnPm` | func | 842 | `(i32 i32 i32 i32) -> (i32)` |
| `jd85` | func | 2018 | `(i32 i32) -> (i32)` |
| `Y6aR` | func | 1978 | `(i32 i32 i32 i32) -> (i32)` |
| `hvQT` | func | 3191 | `(i32 i32 i32) -> (i32 i32)` |
| `zk77` | func | 1336 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `Tny8` | func | 2079 | `(i32) -> (i32)` |
| `w538` | func | 2754 | `(i32 i32) -> ()` |
| `tEtH` | func | 2614 | `(i32 i32) -> ()` |
| `WfoB` | func | 2177 | `(i32 f64 f64 f64) -> (i32)` |
| `b5FY` | func | 1022 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `L94o` | func | 768 | `(i32 i32) -> (i32)` |
| `HWsW` | func | 988 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `kMrx` | func | 1652 | `(i32 i32) -> (i32)` |
| `HqMl` | func | 779 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `ZLh8` | func | 2660 | `(i32) -> (i32)` |
| `M7fr` | func | 1833 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `ErAp` | func | 848 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `IxNc` | func | 1288 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `t9GL` | func | 3198 | `(i32 i32) -> (i32 i32)` |
| `N7k6` | func | 3173 | `(i32 i32) -> ()` |
| `MHoP` | func | 1608 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `ZCUC` | func | 2133 | `(i32 i32) -> ()` |
| `Mecr` | func | 3416 | `(i32) -> ()` |
| `u2vl` | func | 1636 | `(i32 i32) -> (i32)` |
| `BlSD` | func | 3201 | `(i32 i32) -> (i32 i32)` |
| `IbFl` | func | 2538 | `(i32 i32 i32 i32) -> (i32)` |
| `wSPU` | func | 2025 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `bm0m` | func | 2636 | `(i32) -> (i32)` |
| `mqTg` | func | 1559 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `UO2G` | func | 3202 | `(i32 i32) -> (i32 i32)` |
| `TFSL` | func | 1874 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `ukAR` | func | 3212 | `(i32) -> (i32 i32)` |
| `tD7N` | func | 1685 | `(i32 i32 i32 i32) -> (i32)` |
| `ISX2` | func | 2662 | `(i32 i32) -> (i32)` |
| `X7yR` | func | 989 | `(i32 i32) -> (i32)` |
| `Yz6w` | func | 2465 | `(i32 i32 i32 i32) -> ()` |
| `WHuu` | func | 3263 | `(i32 i32 i32) -> (i32)` |
| `qRMT` | func | 2634 | `(i32) -> (i32)` |
| `naUF` | func | 2942 | `(i32) -> (i32)` |
| `dmwR` | func | 3191 | `(i32 i32 i32) -> (i32 i32)` |
| `Ypkn` | func | 3405 | `() -> (i32)` |
| `s404` | func | 3230 | `() -> (i32 i32)` |
| `n9sx` | func | 2631 | `(i32) -> (i32)` |
| `umr4` | func | 2647 | `(i32 i32) -> ()` |
| `iYPp` | func | 2488 | `(i32 i32) -> (i32)` |
| `RHAk` | func | 1614 | `(i32 i32 i32 i32) -> (i32)` |
| `geAP` | func | 3401 | `(f64) -> (f64)` |
| `JxeN` | func | 1010 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `p65E` | func | 2007 | `(i32 i32) -> ()` |
| `PyWV` | func | 3203 | `(i32 i32) -> (i32 i32)` |
| `FtKE` | func | 3200 | `(i32 i32) -> (i32 i32)` |
| `jZXI` | func | 2432 | `(i32 i32) -> ()` |
| `biGj` | func | 2628 | `(i32) -> (f64)` |
| `FrMu` | func | 2719 | `(i32) -> ()` |
| `memory` | memory | 0 | `` |
| `eF4c` | func | 2194 | `(i32 i32) -> ()` |
| `vb2O` | func | 3292 | `() -> (i32)` |
| `M8SM` | func | 1716 | `(i32 i32) -> (i32)` |
| `gGyl` | func | 2629 | `(i32) -> (i32)` |
| `P8xv` | func | 2635 | `(i32) -> ()` |
| `aLir` | func | 1655 | `(i32 f64) -> (f64)` |
| `X1Rx` | func | 2615 | `(i32) -> (i32)` |
| `DZIM` | func | 1893 | `(i32 i32) -> (i32)` |
| `ifVL` | func | 2700 | `(i32 i32) -> ()` |
| `SFOA` | func | 1665 | `(i32 i32 i32) -> (i32)` |
| `fdrf` | func | 3254 | `(i32 i32 i32 i32) -> ()` |
| `Nu1a` | func | 2966 | `(i32) -> (i32)` |
| `mD2t` | func | 2633 | `(i32) -> (i32)` |
| `yOiU` | func | 2533 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64 i32 i32) -> (i32)` |
| `fhDn` | func | 2988 | `(i32) -> ()` |
| `QpU4` | func | 3382 | `(i32) -> ()` |
| `x6uG` | func | 2292 | `(i32 i32) -> (i32)` |
| `Ev3M` | func | 1569 | `(i32) -> (i32)` |
| `WRNX` | func | 1413 | `(i32 i32) -> (i32)` |
| `IPCI` | func | 3191 | `(i32 i32 i32) -> (i32 i32)` |
| `urzO` | func | 1360 | `(i32 i32) -> (i32)` |
| `xYXz` | func | 785 | `(i32 i32) -> (i32)` |
| `jD6O` | func | 3331 | `(i32) -> ()` |
| `LtI9` | func | 2652 | `(i32) -> (i32)` |
| `tpqt` | func | 845 | `(i32) -> (i32)` |
| `AEs4` | func | 1795 | `(i32) -> ()` |
| `P8Dg` | func | 3213 | `(i32) -> (i32 i32)` |
| `zCJo` | func | 1384 | `(i32 i32 i32) -> ()` |
| `Mgmm` | func | 1455 | `(i32 i32 i32) -> (i32)` |
| `rJYd` | func | 2822 | `(i32 i32) -> ()` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 845 · max 845
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2257920, `i32` = i32.const 2258484

## Functions

- 3,025 bodies · 4,142,840 code bytes · avg 1.3 KB
- instruction scan: 3,025 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 170 |
| <= 64 bytes | 113 |
| <= 128 bytes | 277 |
| <= 256 bytes | 399 |
| <= 512 bytes | 687 |
| <= 1024 bytes | 606 |
| <= 2048 bytes | 429 |
| <= 4096 bytes | 184 |
| <= 8192 bytes | 97 |
| <= 16384 bytes | 27 |
| > 16384 bytes | 36 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32 i32) -> ()` | 150 | 117,778 | 56,609 | local.get×16100, i32.const×6734, i32.add×3268, local.set×3248, i32.load×3016 |
| 1 | `(i32 i32 i32 i32) -> ()` | 218 | 195,037 | 88,336 | local.get×25973, i32.const×9814, i32.load×5552, local.set×4795, local.tee×4566 |
| 2 | `(i32 i32 i32 i32 i32 i32) -> ()` | 132 | 56,258 | 25,605 | local.get×7564, i32.const×3391, local.set×1401, i32.add×1293, i32.load×1168 |
| 3 | `(i32 i32) -> ()` | 105 | 36,615 | 16,581 | local.get×4597, i32.const×1665, local.set×977, local.tee×845, i32.load×782 |
| 4 | `(i32 i32) -> ()` | 58 | 29,792 | 14,312 | local.get×4209, i32.const×1738, i32.load×1042, local.set×931, i32.add×820 |
| 5 | `(i32 i32 i32) -> ()` | 66 | 30,661 | 13,617 | local.get×3991, i32.const×1839, i32.load×847, i32.add×623, local.tee×591 |
| 6 | `(i32 i32) -> ()` | 90 | 26,046 | 12,563 | local.get×3702, i32.const×1379, local.set×779, i32.load×721, local.tee×698 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 135 | 32,562 | 16,141 | local.get×4566, i32.const×2205, local.set×1141, i32.add×1062, local.tee×800 |
| 8 | `(i32 i32 i32 i32 i32 i32) -> ()` | 170 | 23,746 | 11,210 | local.get×3269, i32.const×1369, local.set×657, br_if×494, i32.load×485 |
| 9 | `(i32 i32 i32 i32 i32) -> ()` | 58 | 21,491 | 10,529 | local.get×2903, i32.const×1493, local.set×728, i32.add×591, local.tee×504 |
| 10 | `(i32 i32 i32 i32) -> ()` | 105 | 26,393 | 12,764 | local.get×3784, i32.const×1615, local.set×985, i32.add×682, i32.load×663 |
| 12 | `(i32 i32 i32 i32) -> ()` | 53 | 24,505 | 11,634 | local.get×3005, i32.const×1276, local.tee×731, end×592, i32.load×586 |
| 14 | `(i32 i32 i32 i32 i32 i32) -> ()` | 125 | 19,810 | 8,875 | local.get×2493, i32.const×1111, local.set×430, local.tee×385, i32.load×382 |
| 18 | `(i32 i32) -> ()` | 96 | 31,835 | 14,861 | local.get×4482, i32.const×1910, i32.add×763, local.set×692, i32.load×669 |
| 19 | `(i32 i32 i64 i32 i32 i64 i32 i32) -> ()` | 106 | 20,589 | 7,881 | local.get×2959, i32.const×902, i64.store×835, i32.store×633, i64.const×483 |
| 22 | `(i32 i32) -> ()` | 82 | 29,024 | 13,043 | local.get×4618, i32.const×1456, i32.store×702, i32.add×689, local.tee×645 |
| 23 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 64 | 24,318 | 11,211 | local.get×2683, i32.const×1714, local.set×822, end×665, block×466 |
| 26 | `(i32 i32 i32 i32 i32) -> ()` | 68 | 22,818 | 10,630 | local.get×3348, i32.const×1245, local.tee×735, i32.add×431, local.set×341 |
| 43 | `(i32 i32 i32 i32 i32) -> ()` | 82 | 27,582 | 12,950 | local.get×3686, i32.const×1878, i32.add×765, local.set×717, end×580 |
| 66 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 112 | 27,605 | 13,066 | local.get×3810, i32.const×1687, i32.load×857, local.set×788, i32.add×672 |
| 200 | `(i32 i32) -> ()` | 10 | 30,134 | 14,535 | local.get×5127, i32.load×1394, i32.const×1130, end×911, i32.add×829 |
| 220 | `(i32) -> ()` | 19 | 23,308 | 10,931 | local.get×2739, i32.load×1499, i32.const×1189, local.tee×1013, end×857 |
| 730 | `(i32 i32) -> ()` | 139 | 42,975 | 20,266 | local.get×5275, i32.const×2347, local.tee×1198, i32.add×1066, local.set×1006 |
| 731 | `(i32 i32 i32 i32) -> ()` | 54 | 21,809 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 1046 | `(i32 i32) -> (i32)` | 40 | 20,198 | 7,815 | local.get×2521, i32.const×859, i64.store×586, i32.load×393, local.set×358 |
| 1624 | `(i32 i32) -> (i32)` | 182 | 55,135 | 19,838 | local.get×6600, i32.const×2596, i64.store×1935, i64.const×1087, i64.load×1068 |
| 2030 | `(i32 i32) -> ()` | 111 | 39,749 | 17,590 | local.get×5165, i32.const×1655, local.set×898, local.tee×741, end×677 |
| 2682 | `(i32 i32) -> ()` | 398 | 142,193 | 64,164 | local.get×18413, i32.const×8006, local.set×3828, i32.load×3150, end×2805 |
| 2973 | `(i32 i32 i32 i32) -> ()` | 137 | 31,379 | 14,285 | local.get×4258, i32.const×1517, local.tee×742, local.set×690, br_if×632 |
| 2992 | `(i32 i32) -> ()` | 143 | 33,660 | 15,072 | local.get×4234, i32.const×1988, local.set×803, local.tee×732, i32.add×689 |

## Embedded strings (data segments)

60 printable strings ≥6 chars; largest:

```
beaver_lumberjackchefdwarf_blue_hairdwarf_braided_hairdwarf_childdwarf_forked_bearddwarf_ginger_bearddwarf_grey_bearddwarf_hair_bunsdwarf_purple_bearddwarf_red_hairdwarf_short_beardfarmerfarmer_gillfi
DEEJJJJJJHHHHEEDDDDDDHHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDEEDEEEEEEDEDEDHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
ZombieGrunt1ZombieGrunt2ZombieGrunt3ZombieHurt1ZombieHurt2ZombieHurt3ZombieHurt4bassbassattackbdbearRoar1bearRoar2bearRoar3bearRoar4bearRoar5beepbigDrumSwish1bigDrumSwish2bigDrumSwish3bowbucketEmpty1b
                                                                                                 skin_1_0skin_1_1skin_1_2skin_1_3skin_1_4hat_0_0hat_0_1hat_0_2hat_0_3hat_0_4hat_0_5hat_0_6hat_13_0hat_13
456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;
vs_mesh_00000020801vs_mesh_00000021801vs_mesh_00000040000vs_mesh_00000040011vs_mesh_00000040030vs_mesh_00000040042vs_mesh_00000040142vs_mesh_000000403c2vs_mesh_00000040801vs_mesh_00000041801vs_mesh_00
alliumaspen_saplingattached_banana_stemattached_banana_stem_wrapperattached_melon_stemattached_melon_stem_wrapperautumn_fernazure_bluetbanana_stembeetroot_plant_stage0beetroot_plant_stage1beetroot_pla
````````````````````````````````^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZYYYYYYYY
0x | SHADER_FLOAT32_ATOMICTEXTURE_FORMAT_16BIT_NORMTEXTURE_COMPRESSION_ASTC_HDRTEXTURE_ADAPTER_SPECIFIC_FORMAT_FEATURESPIPELINE_STATISTICS_QUERYTIMESTAMP_QUERY_INSIDE_ENCODERSTIMESTAMP_QUERY_INSIDE_PA
ue:keydownkeyupmousedownmouseuptouchstarttouchendMouse1Mouse2Mouse3Alt+Left ClickF2F4F5F8F9Digit0Digit1Digit2Digit3Digit4Digit5Digit6Digit7Digit8Digit9KeyQKeyWKeyEKeyRKeyTKeyYKeyUKeyIKeyOKeyPKeyAKeySK
fs_mesh_0040d000053_l7fs_mesh_0040d040073_l3fs_mesh_0040d040073_l7fs_mesh_0040d0b0053_l1fs_mesh_0040d0b0073_l1fs_mesh_0042d040072_l3fs_mesh_0044b0b0073fs_mesh_0044d000053_l3fs_mesh_0044d000053_l7fs_me
targetcolourmaxUpSpeedforceinclinationazimuthturbidityluminancemieCoefficientmieDirectionalGsunPositionvertexTintxCameraOffsetyCameraOffsetzCameraOffsetditheringinfiniteDistanceuseSunPositionrgba(tran
r8unormr8snormr8uintr8sintr16unormr16snormr16uintr16sintr16floatrg8unormrg8snormrg8uintrg8sintr32uintr32sintr32floatrg16unormrg16snormrg16uintrg16sintrg16floatrgba8unormrgba8unorm-srgbrgba8snormrgba8u
schema023canChangeblockReachezBridgingezBridgingGrowMsezToweringezToweringGrowMscrouchingSpeedwalkingSpeedrunningSpeedjumpAmountairJumpCountjumpHoldThrustbunnyhopMaxMultiplierskyBoxminChunkAddDistshow
Aspen LeavesAspen LogAspen SaplingAspen Wood PlanksBarkless Aspen LogBarkless Cedar LogBarkless Jungle LogBarkless Maple LogBarkless Pine LogBarkless Plum LogBlack PlanksBlue PlanksBookshelfBowl of Cr
Acacia LeavesAcacia LogAcacia SaplingAcacia Wood PlanksAlchemy TableBarkless Acacia LogBarkless Birch LogBarkless Dark Oak LogBarkless Elm LogBarkless Oak LogBarkless Spruce LogBirch LeavesBirch LogBi
maxTextureDimension1DmaxTextureDimension2DmaxTextureDimension3DmaxTextureArrayLayersmaxBindGroupsmaxBindGroupsPlusVertexBuffersmaxBindingsPerBindGroupmaxDynamicUniformBuffersPerPipelineLayoutmaxDynami
flag testalpha * baseColor.abaseColor.adiffuseBase.remissiveColormix(diffuseBase.r, 0.0, texels.stripGlow)mix(emissiveColor, vec3f(1.0), texels.stripGlow)bloxdSpGlintTier(v.vEnchantHsvAndTick.xyz)ench
R8UnormR8SnormR8UintR8SintR16UintR16SintR16UnormR16SnormR16FloatRg8UnormRg8SnormRg8UintRg8SintR32UintR32SintR32FloatRg16UintRg16SintRg16UnormRg16SnormRg16FloatRgba8UnormRgba8UnormSrgbRgba8SnormRgba8Ui
standingsittingzombieglidingdrivingsleepingridingShearedSaddledskyblockHeldBossBoxBloxdBlockPersonLeaderboardParticleEmitterTier 1Tier 2Tier 3Tier 4Tier 5PlayerPigCowSheepHorseCamelIron Goofy GolemGol
```

## Opcode histogram (aggregated)

| opcode | count |
|---|---:|
| `local.get` | 554,136 |
| `i32.const` | 232,929 |
| `local.tee` | 101,816 |
| `local.set` | 96,628 |
| `i32.load` | 95,577 |
| `i32.add` | 89,145 |
| `end` | 81,079 |
| `br_if` | 65,304 |
| `i32.store` | 47,910 |
| `block` | 38,038 |
| `i64.store` | 33,701 |
| `i64.const` | 32,914 |
| `if` | 31,075 |
| `call` | 30,902 |
| `i64.load` | 24,933 |
| `i32.sub` | 24,708 |
| `br` | 23,650 |
| `i32.eqz` | 19,516 |
| `select` | 17,179 |
| `i32.and` | 16,537 |
| `i32.shl` | 16,500 |
| `i32.ne` | 16,149 |
| `i32.load8_u` | 15,732 |
| `i32.eq` | 14,050 |
| `i32.store8` | 13,661 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 3,025/3,025 (degraded: 0)
