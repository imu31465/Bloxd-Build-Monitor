# WASM module: `bloxd_wasm_webgl_bg`

> environment **staging.bloxd.io** · build `gw4e3a.937868ec` · analyzed 2026-11-27T02:11:43+09:00
> source: https://staging.bloxd.io/static/media/bloxd_wasm_webgl_bg.f85111fea908c338c433.wasm
> 5,545,853 bytes (5.3 MB) · sha256 `ccc8a64ee7a94456…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- size 5,546,226 → 5,545,853 bytes (-373)
- code bytes 4,069,190 → 4,069,193
- data bytes 1,428,051 → 1,427,659
- name-section module id `41bdb492a06f21f6.10998` → `6481e5400b592186.10998` (numeric version suffix unchanged — same module version, re-randomized prefix)
- export identifiers rotated by the obfuscator: 1/160 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,937 / 299 |
| Exports / imports | 160 / 300 |
| Code bytes (function bodies) | 4,069,193 (3.9 MB) |
| Total local variables | 31,211 |
| Instructions (scanable bodies) | 1,907,277 |
| Data segments / bytes | 4,034 / 1,427,659 |
| Element segments / entries | 1 / 754 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `6481e5400b592186.10998` |
| Sections | 11 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,536 | 181 |
| 2 | import | 3,606 | 300 |
| 3 | function | 2,992 | 2937 |
| 4 | table | 7 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,281 | 160 |
| 9 | element | 1,515 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 4,074,579 | 2937 |
| 11 | data | 1,460,240 | 4034 |
| 0 | custom:name | 30 | — |

## Types

181 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32) -> ()` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

300 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `NHXo.Hat9` | memory | `[128..14648]` |
| 0 | `NHXo.eY86` | func | `(i32) -> (f64)` |
| 1 | `NHXo.pSN9` | func | `() -> (i32)` |
| 2 | `NHXo.xZcj` | func | `(i32 i32 i32) -> (i32)` |
| 3 | `NHXo.oMPP` | func | `(i32) -> ()` |
| 4 | `NHXo.Tfa5` | func | `(i32 i32) -> (i32)` |
| 5 | `NHXo.W6rr` | func | `(i32) -> (i32)` |
| 6 | `NHXo.brYr` | func | `(i32 i32 i32) -> (i32)` |
| 7 | `NHXo.PZ6M` | func | `(i32 i32 i32 i32) -> (i32)` |
| 8 | `NHXo.AP2d` | func | `(i32) -> (i32)` |
| 9 | `NHXo.PnwO` | func | `(i32 i32) -> ()` |
| 10 | `NHXo.pgkr` | func | `(i32 i32) -> ()` |
| 11 | `NHXo.Hy2X` | func | `(i32 i32 i32 i32) -> (i32)` |
| 12 | `NHXo.STWi` | func | `(i32 i32) -> (i32)` |
| 13 | `NHXo.HZNF` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 14 | `NHXo.XcgL` | func | `(i32) -> (i32)` |
| 15 | `NHXo.HwnP` | func | `(i32 i32) -> (i32)` |
| 16 | `NHXo.Gopk` | func | `(i32 i32) -> (i32)` |
| 17 | `NHXo.d2CN` | func | `(i32 i32) -> ()` |
| 18 | `NHXo.XoBM` | func | `(i32) -> (i32)` |
| 19 | `NHXo.CaSC` | func | `(i32) -> (i32)` |
| 20 | `NHXo.AYET` | func | `(i32) -> (i32)` |
| 21 | `NHXo.tAkE` | func | `(i32) -> ()` |
| 22 | `NHXo.lQNe` | func | `(i32 i32) -> ()` |
| 23 | `NHXo.yaDQ` | func | `(i32 i32) -> ()` |
| 24 | `NHXo.sEbc` | func | `(i32 f64 f64 f64 f64) -> ()` |
| 25 | `NHXo.O8S9` | func | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64) -> ()` |
| 26 | `NHXo.MGpa` | func | `(i32) -> (i32)` |
| 27 | `NHXo.fz03` | func | `(i32 i32) -> ()` |
| 28 | `NHXo.olxt` | func | `(i32 i32) -> (i32)` |
| 29 | `NHXo.p0Hj` | func | `(i32 i32 i32 i32) -> ()` |
| 30 | `NHXo.i53q` | func | `(i32 i32) -> (i32)` |
| 31 | `NHXo.m4wg` | func | `(i32 i32 i32) -> (i32)` |
| 32 | `NHXo.ROMe` | func | `(i32) -> (i32)` |
| 33 | `NHXo.c5uA` | func | `() -> (f64)` |
| 34 | `NHXo.t6El` | func | `(i32 i32) -> ()` |
| 35 | `NHXo.ClGH` | func | `(i32 i32 i32) -> (i32)` |
| 36 | `NHXo.yd9w` | func | `(i32) -> (i32)` |
| 37 | `NHXo.gO3O` | func | `(i32) -> (i32)` |
| 38 | `NHXo.fiQu` | func | `(i32) -> (i32)` |
| 39 | `NHXo.ULQ8` | func | `(i32 i32) -> (i32)` |
| 40 | `NHXo.Svr2` | func | `(i32 i32 i32 i32) -> ()` |
| 41 | `NHXo.qTEz` | func | `(i32) -> (i32)` |
| 42 | `NHXo.njhI` | func | `(i32 i32 i32 i32) -> ()` |
| 43 | `NHXo.F70s` | func | `(i32) -> (i32)` |
| 44 | `NHXo.Ev43` | func | `(i32 i32 i32 i32) -> ()` |
| 45 | `NHXo.vOaW` | func | `(i32 i32 i32) -> (i32)` |
| 46 | `NHXo.YkAW` | func | `(i32 i32 i32) -> ()` |
| 47 | `NHXo.slU7` | func | `(i32 i32 i32) -> ()` |
| 48 | `NHXo.xppf` | func | `(i32 i32 i32) -> ()` |
| 49 | `NHXo.VjcI` | func | `(i32 i32 i32 i32) -> ()` |
| 50 | `NHXo.jG5F` | func | `(i32 i32 i32 i32) -> ()` |
| 51 | `NHXo.EFGZ` | func | `(i32 i32) -> ()` |
| 52 | `NHXo.cr6R` | func | `(i32 i32) -> ()` |
| 53 | `NHXo.devQ` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 54 | `NHXo.XWFF` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 55 | `NHXo.L4EM` | func | `(i32 f32 f32) -> ()` |
| 56 | `NHXo.DcRz` | func | `(i32 f32 f32) -> ()` |
| 57 | `NHXo.G3up` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 58 | `NHXo.TwQp` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 59 | `NHXo.cdEG` | func | `(i32 i32 i32 i32) -> ()` |
| 60 | `NHXo.fVJ8` | func | `(i32 i32 i32 i32) -> ()` |
| 61 | `NHXo.ELEo` | func | `(i32 i32 i32) -> ()` |
| 62 | `NHXo.IFuV` | func | `(i32 i32 i32) -> ()` |
| 63 | `NHXo.iFrA` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 64 | `NHXo.dBpD` | func | `(i32 i32 i32) -> ()` |
| 65 | `NHXo.Xx5j` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 66 | `NHXo.S79a` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 67 | `NHXo.jUeC` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 68 | `NHXo.zqbM` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 69 | `NHXo.G0eS` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 70 | `NHXo.eEuw` | func | `(i32) -> (i32)` |
| 71 | `NHXo.iQJr` | func | `(i32) -> ()` |
| 72 | `NHXo.v8te` | func | `(i32) -> (i32)` |
| 73 | `NHXo.SwYT` | func | `(i32 i32) -> (i32)` |
| 74 | `NHXo.odwa` | func | `(i32 i32 i32) -> (i32)` |
| 75 | `NHXo.uwVd` | func | `(i32 i32 i32) -> ()` |
| 76 | `NHXo.ERow` | func | `(i32 i32 i32 i32) -> (i32)` |
| 77 | `NHXo.yLn2` | func | `() -> (f64)` |
| 78 | `NHXo.y8N1` | func | `() -> (f64)` |
| 79 | `NHXo.tDVz` | func | `(i32 i32) -> ()` |
| 80 | `NHXo.cgx9` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 81 | `NHXo.Qknr` | func | `(i32 i32 i32) -> (i32)` |
| 82 | `NHXo.F2Ox` | func | `(i32 i32 i32) -> ()` |
| 83 | `NHXo.RsU2` | func | `(i32 i32 i32) -> ()` |
| 84 | `NHXo.s5iL` | func | `(i32 i32) -> ()` |
| 85 | `NHXo.SxlX` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 86 | `NHXo.d8Py` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 87 | `NHXo.u18I` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 88 | `NHXo.pQ9T` | func | `(i32 i32) -> ()` |
| 89 | `NHXo.rwNc` | func | `(i32 i32) -> ()` |
| 90 | `NHXo.mdDA` | func | `(i32) -> (i32)` |
| 91 | `NHXo.qIIE` | func | `(i32 i32 i32) -> ()` |
| 92 | `NHXo.kCVD` | func | `(i32 i32 i32) -> ()` |
| 93 | `NHXo.dezV` | func | `(i32) -> (i32)` |
| 94 | `NHXo.ARUM` | func | `(i32) -> (i32)` |
| 95 | `NHXo.p0v8` | func | `(i32 i32) -> ()` |
| 96 | `NHXo.xgLb` | func | `(i32 i32) -> ()` |
| 97 | `NHXo.Qv1w` | func | `(i32 i32) -> ()` |
| 98 | `NHXo.ay2N` | func | `(i32 i32) -> ()` |
| 99 | `NHXo.oGDE` | func | `(i32 i32 i32) -> ()` |
| 100 | `NHXo.FI4D` | func | `(i32 i32 i32) -> ()` |
| 101 | `NHXo.VeDP` | func | `(i32 i32 f32) -> ()` |
| 102 | `NHXo.BFDL` | func | `(i32 i32 f32) -> ()` |
| 103 | `NHXo.hQyi` | func | `(i32 i32 i32) -> ()` |
| 104 | `NHXo.lj5b` | func | `(i32 i32 f32 f32) -> ()` |
| 105 | `NHXo.gXqQ` | func | `(i32 i32 f32 f32) -> ()` |
| 106 | `NHXo.VveG` | func | `(i32 i32) -> ()` |
| 107 | `NHXo.yiyO` | func | `(i32 i32) -> ()` |
| 108 | `NHXo.tQkg` | func | `(i32 i32) -> ()` |
| 109 | `NHXo.o4jJ` | func | `(i32 i32) -> ()` |
| 110 | `NHXo.efl6` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 111 | `NHXo.upRM` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 112 | `NHXo.lUrb` | func | `(i32 i32 i32) -> ()` |
| 113 | `NHXo.bXie` | func | `(i32 i32 i32) -> ()` |
| 114 | `NHXo.Eset` | func | `(i32 i32 i32 i32) -> ()` |
| 115 | `NHXo.IANW` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 116 | `NHXo.g6x0` | func | `(i32 i32) -> ()` |
| 117 | `NHXo.iFfq` | func | `(i32 i32) -> ()` |
| 118 | `NHXo.kIAd` | func | `(i32 i32) -> (i32)` |
| 119 | `NHXo.boSJ` | func | `(i32 i32) -> (i32)` |
| 120 | `NHXo.XD1Y` | func | `(i32 i32) -> ()` |
| 121 | `NHXo.w5Bb` | func | `(i32 i32) -> ()` |
| 122 | `NHXo.E7OG` | func | `(i32) -> (i32)` |
| 123 | `NHXo.epQT` | func | `(i32 i32) -> ()` |
| 124 | `NHXo.klio` | func | `(i32 i32) -> ()` |
| 125 | `NHXo.T7Xm` | func | `(i32 i32 i32 i32) -> ()` |
| 126 | `NHXo.Lfte` | func | `(i32 i32 i32) -> ()` |
| 127 | `NHXo.jOf0` | func | `(i32 i32 i32) -> ()` |
| 128 | `NHXo.EDa5` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 129 | `NHXo.YECH` | func | `(i32 i32) -> ()` |
| 130 | `NHXo.VjmG` | func | `(i32 i32 i32 i32) -> (i32)` |
| 131 | `NHXo.GPxb` | func | `(i32 i32 i32 i32) -> (i32)` |
| 132 | `NHXo.e3t3` | func | `(i32 i32 i32) -> ()` |
| 133 | `NHXo.tFGV` | func | `(i32 i32 i32) -> ()` |
| 134 | `NHXo.yp94` | func | `(i32) -> ()` |
| 135 | `NHXo.ArwC` | func | `(i32 i32 i32) -> (i32)` |
| 136 | `NHXo.nb3m` | func | `(i32 i32 i32) -> ()` |
| 137 | `NHXo.rVvw` | func | `(i32 i32 i32) -> (i32)` |
| 138 | `NHXo.VH0f` | func | `(i32 i32 i32) -> (i32)` |
| 139 | `NHXo.BCEU` | func | `(i32 i32 i32) -> (i32)` |
| 140 | `NHXo.YfeA` | func | `(i32 i32) -> ()` |
| 141 | `NHXo.drR8` | func | `(i32) -> (i32)` |
| 142 | `NHXo.NZtd` | func | `(i32 i32) -> ()` |
| 143 | `NHXo.ie5u` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 144 | `NHXo.vOA0` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 145 | `NHXo.LG5s` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 146 | `NHXo.YlU2` | func | `(i32 i32) -> ()` |
| 147 | `NHXo.uMJk` | func | `(i32 i32) -> ()` |
| 148 | `NHXo.rts6` | func | `(i32 i32) -> ()` |
| 149 | `NHXo.cjX3` | func | `(i32 i32) -> ()` |
| 150 | `NHXo.nmTv` | func | `(i32) -> (i32)` |
| 151 | `NHXo.k6GI` | func | `(i32) -> (i32)` |
| 152 | `NHXo.fzOt` | func | `(i32) -> (i32)` |
| 153 | `NHXo.S1Qr` | func | `(i32) -> (i32)` |
| 154 | `NHXo.TCGc` | func | `(i32) -> (i32)` |
| 155 | `NHXo.Mxyy` | func | `(i32) -> (i32)` |
| 156 | `NHXo.xeUp` | func | `() -> (i32)` |
| 157 | `NHXo.oB2S` | func | `() -> (i32)` |
| 158 | `NHXo.yoEi` | func | `() -> (i32)` |
| 159 | `NHXo.kVvO` | func | `() -> (i32)` |
| 160 | `NHXo.R2ft` | func | `(i32 i32) -> (i32)` |
| 161 | `NHXo.E7S0` | func | `(i32) -> ()` |
| 162 | `NHXo.DPRh` | func | `(i32 i32) -> (i32)` |
| 163 | `NHXo.SdwS` | func | `(i32) -> (i32)` |
| 164 | `NHXo.SRpD` | func | `(i32) -> (i32)` |
| 165 | `NHXo.eNEO` | func | `(i32) -> (i32)` |
| 166 | `NHXo.gDv8` | func | `(i32) -> ()` |
| 167 | `NHXo.HsDa` | func | `(i32 i32 i32) -> (i32)` |
| 168 | `NHXo.sMJW` | func | `(i32) -> (i32)` |
| 169 | `NHXo.Sh3t` | func | `(i32) -> (i32)` |
| 170 | `NHXo.Plqg` | func | `(i32 i32) -> (i32)` |
| 171 | `NHXo.ICm9` | func | `(i32) -> ()` |
| 172 | `NHXo.nMCt` | func | `() -> (i32)` |
| 173 | `NHXo.zJy9` | func | `(i32 i32) -> (i32)` |
| 174 | `NHXo.E86z` | func | `(i32 i32) -> ()` |
| 175 | `NHXo.FKDt` | func | `(i32 i32) -> ()` |
| 176 | `NHXo.xilL` | func | `(i32) -> (i32)` |
| 177 | `NHXo.xos4` | func | `(i32 i32) -> (i32)` |
| 178 | `NHXo.OI9K` | func | `(i32) -> ()` |
| 179 | `NHXo.ZiaU` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 180 | `NHXo.NWfm` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 181 | `NHXo.S3an` | func | `(i32 i32) -> ()` |
| 182 | `NHXo.DWiG` | func | `(i32 i32) -> ()` |
| 183 | `NHXo.w3j6` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 184 | `NHXo.EUPm` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 185 | `NHXo.yFXF` | func | `(i32 f32) -> ()` |
| 186 | `NHXo.GKy6` | func | `(i32 f32) -> ()` |
| 187 | `NHXo.OFwB` | func | `(i32 i32) -> ()` |
| 188 | `NHXo.gomE` | func | `(i32 i32) -> ()` |
| 189 | `NHXo.UvP6` | func | `(i32) -> (i32)` |
| 190 | `NHXo.FN0v` | func | `(i32) -> (i32)` |
| 191 | `NHXo.VhEi` | func | `(i32) -> (i32)` |
| 192 | `NHXo.ciEs` | func | `(i32) -> (i32)` |
| 193 | `NHXo.fZos` | func | `(i32 i32 i32) -> ()` |
| 194 | `NHXo.tfID` | func | `(i32 i32 i32) -> ()` |
| 195 | `NHXo.VvF1` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 196 | `NHXo.tg41` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 197 | `NHXo.hU5k` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 198 | `NHXo.bs2c` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 199 | `NHXo.MP8c` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 200 | `NHXo.t9iY` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 201 | `NHXo.Gh3V` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 202 | `NHXo.XTKQ` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 203 | `NHXo.LCAy` | func | `(i32) -> (i32)` |
| 204 | `NHXo.AJXG` | func | `(i32) -> (i32)` |
| 205 | `NHXo.qwNf` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 206 | `NHXo.NofG` | func | `(i32 i32 i32 i32) -> ()` |
| 207 | `NHXo.tmqO` | func | `(i32 i32 i32 i32) -> ()` |
| 208 | `NHXo.PW1k` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 209 | `NHXo.yKrJ` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 210 | `NHXo.h84q` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 211 | `NHXo.kuoj` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 212 | `NHXo.TTQB` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 213 | `NHXo.hVhI` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 214 | `NHXo.Bhse` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 215 | `NHXo.FTYH` | func | `(i32 i32 i32) -> ()` |
| 216 | `NHXo.CX9V` | func | `(i32 i32 i32) -> ()` |
| 217 | `NHXo.DbVh` | func | `(i32 i32) -> ()` |
| 218 | `NHXo.Mefs` | func | `(i32 i32) -> ()` |
| 219 | `NHXo.MXAh` | func | `(i32 i32) -> ()` |
| 220 | `NHXo.wlqJ` | func | `(i32 i32) -> ()` |
| 221 | `NHXo.dNP8` | func | `(i32 i32) -> ()` |
| 222 | `NHXo.Dmh3` | func | `(i32 i32) -> ()` |
| 223 | `NHXo.gmxw` | func | `(i32 f32 f32) -> ()` |
| 224 | `NHXo.teKU` | func | `(i32 f32 f32) -> ()` |
| 225 | `NHXo.H4UT` | func | `(i32 i32) -> ()` |
| 226 | `NHXo.PNXh` | func | `(i32 i32) -> ()` |
| 227 | `NHXo.MAuM` | func | `(i32 i32 i32 f32) -> ()` |
| 228 | `NHXo.SIeV` | func | `(i32 i32 i32 f32) -> ()` |
| 229 | `NHXo.lehA` | func | `(i32 i32 i32) -> ()` |
| 230 | `NHXo.uZzI` | func | `(i32) -> (i32)` |
| 231 | `NHXo.OsFq` | func | `(i32) -> (i32)` |
| 232 | `NHXo.InMk` | func | `(i32 i32) -> ()` |
| 233 | `NHXo.X904` | func | `(i32 i32) -> ()` |
| 234 | `NHXo.MD7d` | func | `(i32 i32 i32 i32) -> (i32)` |
| 235 | `NHXo.ROSE` | func | `(i32 i32 i32 i32) -> ()` |
| 236 | `NHXo.KjrN` | func | `(i32 i32 i32 i32) -> (i32)` |
| 237 | `NHXo.x2vq` | func | `(i32 i32 i32) -> ()` |
| 238 | `NHXo.uSr1` | func | `(i32 i32 i32) -> ()` |
| 239 | `NHXo.i0LR` | func | `(i32 i32 i32) -> ()` |
| 240 | `NHXo.ogWZ` | func | `(i32 i32 i32) -> ()` |
| 241 | `NHXo.udm1` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 242 | `NHXo.tWko` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 243 | `NHXo.L4An` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 244 | `NHXo.vGcJ` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 245 | `NHXo.DMFS` | func | `(i32) -> (i32)` |
| 246 | `NHXo.MiCV` | func | `(i32) -> (i32)` |
| 247 | `NHXo.w4UA` | func | `(i32 i32 i32 i32) -> ()` |
| 248 | `NHXo.JqAK` | func | `(i32 i32) -> ()` |
| 249 | `NHXo.dRjJ` | func | `(i32 i32) -> ()` |
| 250 | `NHXo.d6v8` | func | `(i32 i32) -> (i32)` |
| 251 | `NHXo.mMf6` | func | `(i32 i32) -> (i32)` |
| 252 | `NHXo.ijVc` | func | `(i32 i32 i32 i32) -> ()` |
| 253 | `NHXo.ZLyx` | func | `(i32 i32 i32 i32) -> ()` |
| 254 | `NHXo.Q55h` | func | `(i32 i32) -> ()` |
| 255 | `NHXo.BDJ5` | func | `(i32 i32) -> ()` |
| 256 | `NHXo.pH33` | func | `(i32) -> (i32)` |
| 257 | `NHXo.WSH8` | func | `(i32 i32 i32 i32) -> ()` |
| 258 | `NHXo.bbIl` | func | `(i32 i32 i32 f32) -> ()` |
| 259 | `NHXo.GWBY` | func | `(i32) -> ()` |
| 260 | `NHXo.GhQf` | func | `(i32 i32) -> ()` |
| 261 | `NHXo.TfEB` | func | `(i32 i32) -> ()` |
| 262 | `NHXo.CsxY` | func | `(i32 i32) -> ()` |
| 263 | `NHXo.VEWA` | func | `(i32 i32) -> ()` |
| 264 | `NHXo.GzbB` | func | `(i32 i32) -> ()` |
| 265 | `NHXo.IQQ0` | func | `(i32 i32) -> ()` |
| 266 | `NHXo.bmeo` | func | `(i32 i32) -> ()` |
| 267 | `NHXo.rYBj` | func | `(i32 i32) -> ()` |
| 268 | `NHXo.H1Ml` | func | `(i32) -> (i32)` |
| 269 | `NHXo.uR34` | func | `(i32) -> (i32)` |
| 270 | `NHXo.rVsg` | func | `(i32) -> (i32)` |
| 271 | `NHXo.tZxE` | func | `(i32) -> (i32)` |
| 272 | `NHXo.hfr4` | func | `(i32 i32 i32 i32) -> ()` |
| 273 | `NHXo.vJCy` | func | `(i32) -> ()` |
| 274 | `NHXo.ugga` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 275 | `NHXo.VDhO` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 276 | `NHXo.jB7Q` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 277 | `NHXo.IghB` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 278 | `NHXo.BQUw` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 279 | `NHXo.gD7h` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 280 | `NHXo.RQsP` | func | `(i32) -> (i32)` |
| 281 | `NHXo.QuMn` | func | `(i32) -> (i32)` |
| 282 | `NHXo.Rro4` | func | `(i32) -> (i32)` |
| 283 | `NHXo.D6bU` | func | `(i32) -> (i32)` |
| 284 | `NHXo.Ln1Q` | func | `(i32 i32) -> ()` |
| 285 | `NHXo.gdPH` | func | `(i32) -> ()` |
| 286 | `NHXo.iIbM` | func | `(i32 i32) -> ()` |
| 287 | `NHXo.KInZ` | func | `(i32) -> (i32)` |
| 288 | `NHXo.EOM2` | func | `(i32 i32) -> (i32)` |
| 289 | `NHXo.RL5b` | func | `(i32 i32) -> (i32)` |
| 290 | `NHXo.jYE9` | func | `(i32 i32) -> (i32)` |
| 291 | `NHXo.gDct` | func | `(f64) -> (i32)` |
| 292 | `NHXo.aqft` | func | `(i32 i32) -> (i32)` |
| 293 | `NHXo.mhL3` | func | `(i32 i32) -> (i32)` |
| 294 | `NHXo.eiyp` | func | `(i32 i32) -> (i32)` |
| 295 | `NHXo.lWGb` | func | `(i32 i32) -> (i32)` |
| 296 | `NHXo.ogxD` | func | `(i32 i32) -> (i32)` |
| 297 | `NHXo.McOy` | func | `(i32 i32) -> (i32)` |
| 298 | `NHXo.irIU` | func | `(i32 i32) -> (i32)` |

## Exports

160 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `CEEw` | func | 2399 | `(i32 i32 i32 i32) -> (i32)` |
| `IcCt` | func | 3031 | `(i32 i32) -> (i32 i32)` |
| `lvV3` | func | 2610 | `() -> (i32)` |
| `XzR3` | func | 2493 | `(i32) -> (i32)` |
| `KZ0Q` | func | 1514 | `(i32 i32) -> (i32)` |
| `uoNy` | func | 1277 | `(i32 i32 i32) -> ()` |
| `fkZy` | func | 1472 | `(i32 i32 i32 i32) -> ()` |
| `Wy0P` | func | 1757 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `ao2Y` | func | 1769 | `(i32 i32) -> (i32)` |
| `qcFV` | func | 2356 | `(i32 i32) -> (i32)` |
| `Bedz` | func | 2609 | `(i32 i32) -> ()` |
| `hKCs` | func | 1831 | `() -> (i32)` |
| `o7kj` | func | 3022 | `(i32 i32 i32) -> (i32 i32)` |
| `IYDl` | func | 3224 | `() -> (i32)` |
| `fmN0` | func | 3033 | `(i32 i32) -> (i32 i32)` |
| `ZD9Q` | func | 2496 | `(i32) -> (i32)` |
| `Bict` | func | 3046 | `(i32) -> (i32 i32)` |
| `rXqZ` | func | 680 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `hMuz` | func | 1485 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `o2nu` | func | 3093 | `(i32 i32) -> ()` |
| `i861` | func | 619 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `odI9` | func | 1121 | `(i32 i32) -> ()` |
| `tZXQ` | func | 2443 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `eYqR` | func | 897 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `uUNT` | func | 2818 | `(i32) -> (i32)` |
| `PFIE` | func | 1494 | `(i32 i32 i32 i32) -> (i32)` |
| `GLHW` | func | 1589 | `(i32 i32) -> (i32)` |
| `hmWK` | func | 1346 | `(i32 i32 i32) -> (i32)` |
| `uaZp` | func | 3023 | `(i32 i32 i32) -> (i32 i32)` |
| `a9km` | func | 3032 | `(i32 i32) -> (i32 i32)` |
| `tqMD` | func | 917 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `EAvO` | func | 1947 | `(i32) -> (i32)` |
| `fOqB` | func | 2490 | `(i32) -> (i32)` |
| `SuoK` | func | 1735 | `(i32) -> (i32)` |
| `cmrm` | func | 3034 | `(i32 i32) -> (i32 i32)` |
| `bJJy` | func | 1271 | `(i32 i32 i32) -> (i32)` |
| `eIki` | func | 1966 | `(i32 i32 i32 i32) -> ()` |
| `kjOv` | func | 2509 | `(i32 i32) -> ()` |
| `lKYy` | func | 1220 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `D0kz` | func | 3043 | `(i32) -> (i32 i32)` |
| `memory` | memory | 0 | `` |
| `j3QC` | func | 2060 | `(i32 i32) -> ()` |
| `W5Eh` | func | 767 | `(i32 i32 i32) -> (i32)` |
| `XhsU` | func | 1964 | `(i32) -> (i32)` |
| `AfRi` | func | 2196 | `(i32 i32) -> (i32)` |
| `z0ME` | func | 1889 | `(i32 i32) -> (i32)` |
| `X7qv` | func | 3200 | `(i32) -> ()` |
| `kPbq` | func | 3225 | `() -> (i32)` |
| `f3qV` | func | 685 | `(i32 i32) -> (i32)` |
| `jngP` | func | 3044 | `(i32) -> (i32 i32)` |
| `FZvH` | func | 2164 | `(i32 i32) -> (i32)` |
| `vJfL` | func | 2026 | `(i32 f64) -> (i32)` |
| `h6TY` | func | 1541 | `(i32 i32 i32) -> (i32)` |
| `Ttm8` | func | 1249 | `(i32 i32) -> (i32)` |
| `xH3K` | func | 2510 | `(i32) -> (i32)` |
| `HSgB` | func | 1751 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `uWN3` | func | 2272 | `(i32 i32) -> ()` |
| `RYlI` | func | 3148 | `(i32 i32 i32) -> ()` |
| `G56S` | func | 1643 | `(i32 i32 i32 i32) -> (i32)` |
| `UNYB` | func | 1601 | `(i32 i32) -> ()` |
| `Vhnq` | func | 2473 | `(i32 i32) -> ()` |
| `eCz2` | func | 2387 | `(i32 i32) -> (i32)` |
| `Bnyf` | func | 750 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `nD4b` | func | 3083 | `(i32 i32 i32 i32) -> ()` |
| `BVMz` | func | 711 | `(i32 i32) -> (i32)` |
| `DWUl` | func | 2497 | `(i32) -> (i32)` |
| `GaCE` | func | 2518 | `(i32 i32) -> (i32)` |
| `WSO5` | global | 2 | `` |
| `SpMf` | func | 1303 | `(i32 i32) -> (i32)` |
| `wLKS` | func | 1836 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `opkY` | func | 2563 | `(i32 i32) -> ()` |
| `dOq2` | func | 2491 | `(i32) -> (i32)` |
| `Gy3E` | func | 2488 | `(i32) -> (i32)` |
| `yUBO` | func | 2427 | `(i32) -> (i32)` |
| `ajHX` | func | 2273 | `(i32 f64) -> (i32)` |
| `sxnu` | func | 3199 | `(i32) -> (i32)` |
| `UbsO` | func | 2084 | `(i32 i32) -> (i32)` |
| `y55x` | func | 2494 | `(i32) -> ()` |
| `HRo1` | func | 2850 | `(i32) -> (i32)` |
| `qnc7` | func | 2527 | `(i32) -> (i32)` |
| `Ja6l` | func | 2444 | `(i32) -> (i32)` |
| `HW8o` | func | 2517 | `(i32) -> (i32)` |
| `BZVY` | func | 930 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `peSs` | func | 2355 | `(i32 i32) -> (i32)` |
| `RQbg` | func | 2044 | `(i32 f64 f64 f64) -> (i32)` |
| `Ivl2` | func | 3004 | `(i32 i32) -> ()` |
| `qfMf` | func | 2828 | `(i32) -> ()` |
| `RrWD` | func | 3092 | `(i32 i32 i32) -> ()` |
| `fZdJ` | func | 3058 | `() -> (i32 i32)` |
| `ZW6H` | func | 2528 | `(i32) -> (i32)` |
| `gHwW` | func | 1180 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `OWKL` | func | 1879 | `(i32 i32) -> ()` |
| `vfk9` | func | 860 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `VCGk` | func | 1445 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `cJPv` | func | 2492 | `(i32) -> (i32)` |
| `b0t8` | func | 1490 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `qdjZ` | func | 2505 | `(i32 i32) -> ()` |
| `edAB` | func | 570 | `(i32 i32 i32) -> (i32)` |
| `ktDs` | func | 1871 | `(i32 i32 f64 f64 f64) -> ()` |
| `PWTH` | func | 3155 | `() -> ()` |
| `mBKb` | func | 2489 | `(i32) -> (i32)` |
| `CoTK` | func | 2303 | `(i32 i32) -> ()` |
| `vmjE` | func | 2526 | `(i32) -> (i32)` |
| `xGNZ` | func | 2575 | `() -> (i32)` |
| `sLBg` | func | 742 | `(i32 i32 i32 i32) -> (i32)` |
| `SHQo` | func | 1562 | `(i32 i32 i32 i32) -> (i32)` |
| `rw3M` | func | 3045 | `(i32) -> (i32 i32)` |
| `oyve` | func | 1449 | `() -> (i32)` |
| `KLEI` | func | 2519 | `(i32 i32) -> (i32)` |
| `EY8R` | func | 2354 | `(i32 i32) -> (i32)` |
| `FuTN` | func | 1400 | `(i32 f64 f64) -> (i32)` |
| `UGwS` | func | 703 | `(f64) -> (f64)` |
| `sub4` | func | 1712 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `wkF0` | func | 2793 | `(i32) -> (i32)` |
| `PDbE` | func | 1526 | `(i32 i32) -> (i32)` |
| `Qx16` | func | 1221 | `(i32 i32 i32 i32) -> (i32)` |
| `Z0lR` | func | 1227 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `p5Ir` | func | 1120 | `(i32 i32) -> (i32)` |
| `H2Jv` | func | 1399 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `pYIU` | func | 2353 | `(i32 i32) -> (i32)` |
| `dSwV` | func | 3121 | `() -> (i32)` |
| `wpDx` | func | 1605 | `(i32 f64 f64 f64) -> (i32)` |
| `M7qP` | func | 2997 | `(i32 i32 i32 i32) -> (i32)` |
| `hLMK` | func | 1904 | `(i32) -> ()` |
| `UWLq` | func | 2474 | `(i32) -> (i32)` |
| `i8dd` | func | 2508 | `(i32) -> (i32)` |
| `LAlq` | func | 1420 | `(i32 i32) -> (i32)` |
| `SCNd` | func | 3042 | `(i32) -> (i32 i32)` |
| `uXfj` | func | 898 | `(i32 i32) -> (i32)` |
| `jx4a` | func | 3057 | `() -> (i32 i32)` |
| `Ot5g` | func | 747 | `(i32) -> (i32)` |
| `RSEI` | func | 2495 | `(i32) -> (i32)` |
| `KGPA` | func | 1331 | `(i32 i32) -> (i32)` |
| `txUl` | func | 671 | `(i32 i32) -> (i32)` |
| `rsWM` | func | 2487 | `(i32) -> (f64)` |
| `h4nZ` | func | 3059 | `() -> (i32 i32)` |
| `nVAW` | func | 3029 | `(i32 i32) -> (i32 i32)` |
| `zemt` | func | 1528 | `(i32 f64) -> (f64)` |
| `uZW5` | func | 2786 | `(i32) -> (i32)` |
| `qCd2` | func | 1999 | `(i32 i32) -> ()` |
| `CpJu` | func | 1525 | `(i32 i32) -> (i32)` |
| `YaKm` | func | 3195 | `() -> (f64)` |
| `OywN` | func | 1600 | `(i32 i32) -> ()` |
| `KcOn` | func | 3028 | `(i32 i32) -> (i32 i32)` |
| `sUyq` | func | 3030 | `(i32 i32) -> (i32 i32)` |
| `pq9e` | func | 1896 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `nicl` | func | 2807 | `(i32) -> (i32)` |
| `ApPY` | func | 1501 | `(i32 i32) -> (i32)` |
| `tNXf` | func | 2507 | `(i32) -> (i32)` |
| `Fgle` | func | 2972 | `() -> ()` |
| `mfnM` | func | 1905 | `(i32) -> ()` |
| `AGlz` | func | 2218 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `ygKV` | func | 1851 | `(i32 i32 i32 i32) -> (i32)` |
| `wAMH` | func | 2991 | `(i32 i32) -> (i32)` |
| `gIoh` | func | 1495 | `(i32) -> (i32)` |
| `Nlxt` | func | 1328 | `(i32) -> ()` |
| `AHHx` | global | 1 | `` |
| `ctvt` | func | 3154 | `(i32) -> ()` |
| `g9Sk` | func | 1295 | `(i32) -> (i32)` |
| `VUQe` | func | 1452 | `(i32) -> (i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 755 · max 755
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2642832, `i32` = i32.const 2643420

## Functions

- 2,937 bodies · 4,069,193 code bytes · avg 1.4 KB
- instruction scan: 2,937 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 157 |
| <= 64 bytes | 115 |
| <= 128 bytes | 257 |
| <= 256 bytes | 381 |
| <= 512 bytes | 678 |
| <= 1024 bytes | 582 |
| <= 2048 bytes | 431 |
| <= 4096 bytes | 178 |
| <= 8192 bytes | 92 |
| <= 16384 bytes | 32 |
| > 16384 bytes | 34 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32) -> ()` | 218 | 200,831 | 91,028 | local.get×26756, i32.const×10177, i32.load×5791, local.set×4887, local.tee×4767 |
| 1 | `(i32 i32 i32 i32 i32) -> ()` | 148 | 112,505 | 54,503 | local.get×15178, i32.const×6537, i32.add×3196, local.set×3087, i32.load×2954 |
| 2 | `(i32 i32 i32 i32 i32 i32) -> ()` | 130 | 46,544 | 21,400 | local.get×6231, i32.const×2827, local.set×1224, i32.add×1128, i32.load×1019 |
| 3 | `(i32 i32) -> ()` | 105 | 36,607 | 16,578 | local.get×4596, i32.const×1664, local.set×977, local.tee×845, i32.load×782 |
| 4 | `(i32 i32) -> ()` | 58 | 29,792 | 14,312 | local.get×4209, i32.const×1738, i32.load×1042, local.set×931, i32.add×820 |
| 5 | `(i32 i32) -> ()` | 90 | 26,046 | 12,563 | local.get×3702, i32.const×1379, local.set×779, i32.load×721, local.tee×698 |
| 6 | `(i32 i32 i32 i32 i32) -> ()` | 135 | 32,562 | 16,141 | local.get×4566, i32.const×2205, local.set×1141, i32.add×1062, local.tee×800 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 58 | 21,491 | 10,529 | local.get×2903, i32.const×1493, local.set×728, i32.add×591, local.tee×504 |
| 8 | `(i32 i32 i32 i32) -> ()` | 105 | 26,393 | 12,764 | local.get×3784, i32.const×1615, local.set×985, i32.add×682, i32.load×663 |
| 9 | `(i32 i32) -> ()` | 93 | 18,058 | 8,685 | local.get×2524, i32.const×965, local.tee×535, local.set×515, i32.load×504 |
| 10 | `(i32 i32 i32 i32) -> ()` | 53 | 24,505 | 11,634 | local.get×3005, i32.const×1276, local.tee×731, end×592, i32.load×586 |
| 11 | `(i32 i32 i32) -> (i32)` | 76 | 22,945 | 10,771 | local.get×2875, i32.const×1238, i32.load×806, local.set×500, end×464 |
| 12 | `(i32 i32 i32) -> (i32)` | 77 | 18,924 | 8,934 | local.get×2485, i32.const×1224, i32.load×559, i32.add×543, local.set×525 |
| 13 | `(i32 i32 i32 i32 i32 i32) -> ()` | 125 | 19,810 | 8,875 | local.get×2493, i32.const×1111, local.set×430, local.tee×385, i32.load×382 |
| 16 | `(i32 i32) -> ()` | 96 | 31,835 | 14,861 | local.get×4482, i32.const×1910, i32.add×763, local.set×692, i32.load×669 |
| 17 | `(i32) -> ()` | 78 | 20,163 | 9,380 | local.get×2603, i32.const×1119, i32.add×574, local.tee×510, local.set×502 |
| 23 | `(i32 i32) -> ()` | 82 | 29,024 | 13,043 | local.get×4618, i32.const×1456, i32.store×702, i32.add×689, local.tee×645 |
| 25 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 64 | 24,318 | 11,211 | local.get×2683, i32.const×1714, local.set×822, end×665, block×466 |
| 27 | `(i32 i32 i32 i32 i32) -> ()` | 68 | 22,818 | 10,630 | local.get×3348, i32.const×1245, local.tee×735, i32.add×431, local.set×341 |
| 35 | `(i32 i32 i32 i32 i32) -> ()` | 65 | 18,015 | 8,704 | local.get×2378, i32.const×1095, local.set×628, local.tee×459, i32.add×442 |
| 70 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 112 | 27,605 | 13,066 | local.get×3810, i32.const×1687, i32.load×857, local.set×788, i32.add×672 |
| 198 | `(i32 i32) -> ()` | 10 | 27,551 | 13,273 | local.get×4670, i32.load×1257, i32.const×1060, end×827, i32.add×762 |
| 220 | `(i32) -> ()` | 19 | 23,258 | 10,909 | local.get×2733, i32.load×1495, i32.const×1187, local.tee×1011, end×855 |
| 728 | `(i32 i32) -> ()` | 139 | 42,973 | 20,266 | local.get×5275, i32.const×2347, local.tee×1198, i32.add×1066, local.set×1006 |
| 729 | `(i32 i32 i32 i32) -> ()` | 54 | 21,809 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 1590 | `(i32 i32) -> (i32)` | 182 | 54,919 | 19,834 | local.get×6599, i32.const×2595, i64.store×1935, i64.const×1087, i64.load×1068 |
| 1993 | `(i32 i32) -> ()` | 111 | 39,749 | 17,590 | local.get×5165, i32.const×1655, local.set×898, local.tee×741, end×677 |
| 2608 | `(i32 i32) -> ()` | 398 | 142,193 | 64,164 | local.get×18413, i32.const×8006, local.set×3828, i32.load×3150, end×2805 |
| 2887 | `(i32 i32 i32 i32) -> ()` | 137 | 31,379 | 14,285 | local.get×4258, i32.const×1517, local.tee×742, local.set×690, br_if×632 |
| 2905 | `(i32 i32) -> ()` | 143 | 33,660 | 15,072 | local.get×4234, i32.const×1988, local.set×803, local.tee×732, i32.add×689 |

## Embedded strings (data segments)

60 printable strings ≥6 chars; largest:

```
beaver_lumberjackchefdwarf_blue_hairdwarf_braided_hairdwarf_childdwarf_forked_bearddwarf_ginger_bearddwarf_grey_bearddwarf_hair_bunsdwarf_purple_bearddwarf_red_hairdwarf_short_beardfarmerfarmer_gillfi
DEEJJJJJJHHHHEEDDDDDDHHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDEEDEEEEEEDEDEDHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
ZombieGrunt1ZombieGrunt2ZombieGrunt3ZombieHurt1ZombieHurt2ZombieHurt3ZombieHurt4bassbassattackbdbearRoar1bearRoar2bearRoar3bearRoar4bearRoar5beepbigDrumSwish1bigDrumSwish2bigDrumSwish3bowbucketEmpty1b
atlasSamplerfs_atlas1CANVAS_ALPHA_ONELIGHTINGfs_atlas1_restfs_atlasnfs_atlasn_restfs_nonefs_none_restfs_singlefs_single_restvs_packedSINGLE_ANIMATEDSINGLE_TEXTUREvs_packed_animvs_unpackedvs_unpacked_l
                                                                                                 skin_1_0skin_1_1skin_1_2skin_1_3skin_1_4hat_0_0hat_0_1hat_0_2hat_0_3hat_0_4hat_0_5hat_0_6hat_13_0hat_13
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
| `local.get` | 543,941 |
| `i32.const` | 227,329 |
| `local.tee` | 101,029 |
| `i32.load` | 95,278 |
| `local.set` | 94,586 |
| `i32.add` | 87,699 |
| `end` | 79,766 |
| `br_if` | 64,920 |
| `i32.store` | 47,092 |
| `block` | 37,506 |
| `i64.const` | 32,891 |
| `i64.store` | 32,151 |
| `if` | 30,501 |
| `call` | 29,717 |
| `i32.sub` | 24,822 |
| `i64.load` | 23,905 |
| `br` | 23,267 |
| `i32.eqz` | 19,725 |
| `select` | 17,155 |
| `i32.shl` | 16,495 |
| `i32.and` | 16,417 |
| `i32.ne` | 15,961 |
| `i32.load8_u` | 15,109 |
| `i32.eq` | 14,012 |
| `i32.store8` | 12,704 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 2,937/2,937 (degraded: 0)
