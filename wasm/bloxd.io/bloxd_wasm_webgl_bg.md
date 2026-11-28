# WASM module: `bloxd_wasm_webgl_bg`

> environment **bloxd.io** · build `welxxc.ffac0572` · analyzed 2026-11-28T21:24:40+09:00
> source: https://bloxd.io/static/media/bloxd_wasm_webgl_bg.0e856eb28b05cf52b31a.wasm
> 5,662,882 bytes (5.4 MB) · sha256 `c49c3dd2ef01f7ca…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- size 5,663,636 → 5,662,882 bytes (-754)
- data bytes 1,491,342 → 1,490,580
- name-section module id `cab157dc3bdbf34a.11124` → `8e7a1a938b941e97.11124` (numeric version suffix unchanged — same module version, re-randomized prefix)
- export identifiers rotated by the obfuscator: 1/167 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,979 / 300 |
| Exports / imports | 167 / 301 |
| Code bytes (function bodies) | 4,121,034 (3.9 MB) |
| Total local variables | 31,782 |
| Instructions (scanable bodies) | 1,932,562 |
| Data segments / bytes | 4,290 / 1,490,580 |
| Element segments / entries | 1 / 758 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `8e7a1a938b941e97.11124` |
| Sections | 11 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,543 | 182 |
| 2 | import | 3,618 | 301 |
| 3 | function | 3,035 | 2979 |
| 4 | table | 7 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,337 | 167 |
| 9 | element | 1,523 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 4,126,505 | 2979 |
| 11 | data | 1,525,217 | 4290 |
| 0 | custom:name | 30 | — |

## Types

182 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32) -> ()` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

301 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `KXA4.S7pm` | memory | `[128..14648]` |
| 0 | `KXA4.ldA7` | func | `(i32) -> (f64)` |
| 1 | `KXA4.BCtr` | func | `() -> (i32)` |
| 2 | `KXA4.PUfK` | func | `(i32 i32 i32) -> (i32)` |
| 3 | `KXA4.SHYc` | func | `(i32) -> ()` |
| 4 | `KXA4.a0NH` | func | `(i32 i32) -> (i32)` |
| 5 | `KXA4.hlCn` | func | `(i32) -> (i32)` |
| 6 | `KXA4.AEz3` | func | `(i32 i32 i32) -> (i32)` |
| 7 | `KXA4.s2qY` | func | `(i32 i32 i32 i32) -> (i32)` |
| 8 | `KXA4.e2YV` | func | `(i32) -> (i32)` |
| 9 | `KXA4.UMjb` | func | `(i32 i32) -> ()` |
| 10 | `KXA4.ur6t` | func | `(i32 i32) -> ()` |
| 11 | `KXA4.wFmw` | func | `(i32 i32 i32 i32) -> (i32)` |
| 12 | `KXA4.hTFT` | func | `(i32 i32) -> (i32)` |
| 13 | `KXA4.VeMO` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 14 | `KXA4.MX2t` | func | `(i32) -> (i32)` |
| 15 | `KXA4.Yj2M` | func | `(i32 i32) -> (i32)` |
| 16 | `KXA4.hUtJ` | func | `(i32 i32) -> (i32)` |
| 17 | `KXA4.DN7M` | func | `(i32 i32) -> ()` |
| 18 | `KXA4.x2JO` | func | `(i32) -> (i32)` |
| 19 | `KXA4.K53U` | func | `(i32) -> (i32)` |
| 20 | `KXA4.HPyg` | func | `(i32) -> (i32)` |
| 21 | `KXA4.Jrdq` | func | `(i32) -> ()` |
| 22 | `KXA4.HPAv` | func | `(i32 i32) -> ()` |
| 23 | `KXA4.o57k` | func | `(i32 i32) -> ()` |
| 24 | `KXA4.ZTji` | func | `(i32 f64 f64 f64 f64) -> ()` |
| 25 | `KXA4.f4Oz` | func | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64) -> ()` |
| 26 | `KXA4.hbOI` | func | `(i32) -> (i32)` |
| 27 | `KXA4.juU4` | func | `(i32 i32) -> ()` |
| 28 | `KXA4.iaGB` | func | `(i32 i32) -> (i32)` |
| 29 | `KXA4.iEsY` | func | `(i32 i32 i32 i32) -> ()` |
| 30 | `KXA4.MCYS` | func | `(i32 i32) -> (i32)` |
| 31 | `KXA4.qjon` | func | `(i32 i32 i32) -> (i32)` |
| 32 | `KXA4.Z90u` | func | `(i32) -> (i32)` |
| 33 | `KXA4.rOgr` | func | `() -> (f64)` |
| 34 | `KXA4.dRBj` | func | `(i32 i32) -> ()` |
| 35 | `KXA4.wmpS` | func | `(i32) -> ()` |
| 36 | `KXA4.vQRH` | func | `(i32 i32 i32) -> (i32)` |
| 37 | `KXA4.J5bl` | func | `(i32) -> (i32)` |
| 38 | `KXA4.FkAD` | func | `(i32) -> (i32)` |
| 39 | `KXA4.dMIm` | func | `(i32) -> (i32)` |
| 40 | `KXA4.OlP9` | func | `(i32 i32) -> (i32)` |
| 41 | `KXA4.wyHU` | func | `(i32 i32 i32 i32) -> ()` |
| 42 | `KXA4.HRz0` | func | `(i32) -> (i32)` |
| 43 | `KXA4.XoHB` | func | `(i32 i32 i32 i32) -> ()` |
| 44 | `KXA4.LWL4` | func | `(i32) -> (i32)` |
| 45 | `KXA4.VvfO` | func | `(i32 i32 i32 i32) -> ()` |
| 46 | `KXA4.L3Zw` | func | `(i32 i32 i32) -> (i32)` |
| 47 | `KXA4.Hvhe` | func | `(i32 i32 i32) -> ()` |
| 48 | `KXA4.xWfT` | func | `(i32 i32 i32) -> ()` |
| 49 | `KXA4.fRvK` | func | `(i32 i32 i32) -> ()` |
| 50 | `KXA4.xo88` | func | `(i32 i32 i32 i32) -> ()` |
| 51 | `KXA4.Ejn9` | func | `(i32 i32 i32 i32) -> ()` |
| 52 | `KXA4.TTpm` | func | `(i32 i32) -> ()` |
| 53 | `KXA4.J0Pp` | func | `(i32 i32) -> ()` |
| 54 | `KXA4.RdJl` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 55 | `KXA4.djA0` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 56 | `KXA4.radp` | func | `(i32 f32 f32) -> ()` |
| 57 | `KXA4.L285` | func | `(i32 f32 f32) -> ()` |
| 58 | `KXA4.PJTw` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 59 | `KXA4.PtRp` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 60 | `KXA4.uv4F` | func | `(i32 i32 i32 i32) -> ()` |
| 61 | `KXA4.RsRL` | func | `(i32 i32 i32 i32) -> ()` |
| 62 | `KXA4.gnU1` | func | `(i32 i32 i32) -> ()` |
| 63 | `KXA4.qIDi` | func | `(i32 i32 i32) -> ()` |
| 64 | `KXA4.WUF2` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 65 | `KXA4.oHkv` | func | `(i32 i32 i32) -> ()` |
| 66 | `KXA4.gjJU` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 67 | `KXA4.YjsG` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 68 | `KXA4.h9Yc` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 69 | `KXA4.sMLg` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 70 | `KXA4.yk9m` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 71 | `KXA4.SR19` | func | `(i32) -> (i32)` |
| 72 | `KXA4.g3nr` | func | `(i32) -> ()` |
| 73 | `KXA4.wGhV` | func | `(i32) -> (i32)` |
| 74 | `KXA4.PnVq` | func | `(i32 i32) -> (i32)` |
| 75 | `KXA4.CNDb` | func | `(i32 i32 i32) -> (i32)` |
| 76 | `KXA4.PvbI` | func | `(i32 i32 i32) -> ()` |
| 77 | `KXA4.EB9R` | func | `(i32 i32 i32 i32) -> (i32)` |
| 78 | `KXA4.JMdW` | func | `() -> (f64)` |
| 79 | `KXA4.oDAL` | func | `() -> (f64)` |
| 80 | `KXA4.dWRV` | func | `(i32 i32) -> ()` |
| 81 | `KXA4.Bwhz` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 82 | `KXA4.vdBB` | func | `(i32 i32 i32) -> (i32)` |
| 83 | `KXA4.jaZK` | func | `(i32 i32 i32) -> ()` |
| 84 | `KXA4.saSm` | func | `(i32 i32 i32) -> ()` |
| 85 | `KXA4.Tqe2` | func | `(i32 i32) -> ()` |
| 86 | `KXA4.Uwbq` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 87 | `KXA4.E9KC` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 88 | `KXA4.gLGg` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 89 | `KXA4.Ptix` | func | `(i32 i32) -> ()` |
| 90 | `KXA4.nkLu` | func | `(i32 i32) -> ()` |
| 91 | `KXA4.bwTC` | func | `(i32) -> (i32)` |
| 92 | `KXA4.Og6Z` | func | `(i32 i32 i32) -> ()` |
| 93 | `KXA4.UfOX` | func | `(i32 i32 i32) -> ()` |
| 94 | `KXA4.Njd7` | func | `(i32) -> (i32)` |
| 95 | `KXA4.DJZo` | func | `(i32) -> (i32)` |
| 96 | `KXA4.PTbT` | func | `(i32 i32) -> ()` |
| 97 | `KXA4.Gymp` | func | `(i32 i32) -> ()` |
| 98 | `KXA4.YrTD` | func | `(i32 i32) -> ()` |
| 99 | `KXA4.MkOA` | func | `(i32 i32) -> ()` |
| 100 | `KXA4.dPXY` | func | `(i32 i32 i32) -> ()` |
| 101 | `KXA4.e8qW` | func | `(i32 i32 i32) -> ()` |
| 102 | `KXA4.M3xt` | func | `(i32 i32 f32) -> ()` |
| 103 | `KXA4.mP0E` | func | `(i32 i32 f32) -> ()` |
| 104 | `KXA4.u8j0` | func | `(i32 i32 i32) -> ()` |
| 105 | `KXA4.dNNF` | func | `(i32 i32 f32 f32) -> ()` |
| 106 | `KXA4.c210` | func | `(i32 i32 f32 f32) -> ()` |
| 107 | `KXA4.kRuF` | func | `(i32 i32) -> ()` |
| 108 | `KXA4.jd2p` | func | `(i32 i32) -> ()` |
| 109 | `KXA4.mXlD` | func | `(i32 i32) -> ()` |
| 110 | `KXA4.dZ5h` | func | `(i32 i32) -> ()` |
| 111 | `KXA4.N0OR` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 112 | `KXA4.xaCS` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 113 | `KXA4.WrfD` | func | `(i32 i32 i32) -> ()` |
| 114 | `KXA4.On1O` | func | `(i32 i32 i32) -> ()` |
| 115 | `KXA4.WfKn` | func | `(i32 i32 i32 i32) -> ()` |
| 116 | `KXA4.qOBp` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 117 | `KXA4.x2V7` | func | `(i32 i32) -> ()` |
| 118 | `KXA4.jbvL` | func | `(i32 i32) -> ()` |
| 119 | `KXA4.ilue` | func | `(i32 i32) -> (i32)` |
| 120 | `KXA4.leii` | func | `(i32 i32) -> (i32)` |
| 121 | `KXA4.OpQx` | func | `(i32 i32) -> ()` |
| 122 | `KXA4.jpkG` | func | `(i32 i32) -> ()` |
| 123 | `KXA4.EEt2` | func | `(i32) -> (i32)` |
| 124 | `KXA4.Mdpc` | func | `(i32 i32) -> ()` |
| 125 | `KXA4.aBs4` | func | `(i32 i32) -> ()` |
| 126 | `KXA4.bQvA` | func | `(i32 i32 i32 i32) -> ()` |
| 127 | `KXA4.PwGS` | func | `(i32 i32 i32) -> ()` |
| 128 | `KXA4.Pg5U` | func | `(i32 i32 i32) -> ()` |
| 129 | `KXA4.rHZk` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 130 | `KXA4.NCwu` | func | `(i32 i32) -> ()` |
| 131 | `KXA4.LiZm` | func | `(i32 i32 i32 i32) -> (i32)` |
| 132 | `KXA4.NKPJ` | func | `(i32 i32 i32 i32) -> (i32)` |
| 133 | `KXA4.y3Yd` | func | `(i32 i32 i32) -> ()` |
| 134 | `KXA4.AIYR` | func | `(i32 i32 i32) -> ()` |
| 135 | `KXA4.YStW` | func | `(i32) -> ()` |
| 136 | `KXA4.EkZC` | func | `(i32 i32 i32) -> (i32)` |
| 137 | `KXA4.KOLG` | func | `(i32 i32 i32) -> ()` |
| 138 | `KXA4.Cmle` | func | `(i32 i32 i32) -> (i32)` |
| 139 | `KXA4.bkH4` | func | `(i32 i32 i32) -> (i32)` |
| 140 | `KXA4.RkdF` | func | `(i32 i32 i32) -> (i32)` |
| 141 | `KXA4.Ox89` | func | `(i32 i32) -> ()` |
| 142 | `KXA4.KV68` | func | `(i32) -> (i32)` |
| 143 | `KXA4.FuFg` | func | `(i32 i32) -> ()` |
| 144 | `KXA4.lNp3` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 145 | `KXA4.Zs0H` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 146 | `KXA4.DQFA` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 147 | `KXA4.LJRk` | func | `(i32 i32) -> ()` |
| 148 | `KXA4.r6Ke` | func | `(i32 i32) -> ()` |
| 149 | `KXA4.jg6O` | func | `(i32 i32) -> ()` |
| 150 | `KXA4.SA1g` | func | `(i32 i32) -> ()` |
| 151 | `KXA4.P3JP` | func | `(i32) -> (i32)` |
| 152 | `KXA4.wgQV` | func | `(i32) -> (i32)` |
| 153 | `KXA4.Qot8` | func | `(i32) -> (i32)` |
| 154 | `KXA4.gkkV` | func | `(i32) -> (i32)` |
| 155 | `KXA4.Nv5a` | func | `(i32) -> (i32)` |
| 156 | `KXA4.cOZH` | func | `(i32) -> (i32)` |
| 157 | `KXA4.MLVo` | func | `() -> (i32)` |
| 158 | `KXA4.gWKM` | func | `() -> (i32)` |
| 159 | `KXA4.Hopp` | func | `() -> (i32)` |
| 160 | `KXA4.f0iA` | func | `() -> (i32)` |
| 161 | `KXA4.XPal` | func | `(i32 i32) -> (i32)` |
| 162 | `KXA4.RJCI` | func | `(i32) -> ()` |
| 163 | `KXA4.cT2N` | func | `(i32 i32) -> (i32)` |
| 164 | `KXA4.dxGQ` | func | `(i32) -> (i32)` |
| 165 | `KXA4.tUvE` | func | `(i32) -> (i32)` |
| 166 | `KXA4.pQDs` | func | `(i32) -> (i32)` |
| 167 | `KXA4.jOi5` | func | `(i32) -> ()` |
| 168 | `KXA4.TT5o` | func | `(i32 i32 i32) -> (i32)` |
| 169 | `KXA4.HKt6` | func | `(i32) -> (i32)` |
| 170 | `KXA4.Uw0P` | func | `(i32) -> (i32)` |
| 171 | `KXA4.FuEt` | func | `(i32 i32) -> (i32)` |
| 172 | `KXA4.UJdU` | func | `(i32) -> ()` |
| 173 | `KXA4.pdHq` | func | `() -> (i32)` |
| 174 | `KXA4.TlTY` | func | `(i32 i32) -> (i32)` |
| 175 | `KXA4.Ib3s` | func | `(i32 i32) -> ()` |
| 176 | `KXA4.VU12` | func | `(i32 i32) -> ()` |
| 177 | `KXA4.sDba` | func | `(i32) -> (i32)` |
| 178 | `KXA4.UIlC` | func | `(i32 i32) -> (i32)` |
| 179 | `KXA4.TGOO` | func | `(i32) -> ()` |
| 180 | `KXA4.T0cd` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 181 | `KXA4.RyMo` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 182 | `KXA4.nMgU` | func | `(i32 i32) -> ()` |
| 183 | `KXA4.fz8A` | func | `(i32 i32) -> ()` |
| 184 | `KXA4.Ujma` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 185 | `KXA4.SRI5` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 186 | `KXA4.IRkM` | func | `(i32 f32) -> ()` |
| 187 | `KXA4.ukbD` | func | `(i32 f32) -> ()` |
| 188 | `KXA4.xCVz` | func | `(i32 i32) -> ()` |
| 189 | `KXA4.g0pt` | func | `(i32 i32) -> ()` |
| 190 | `KXA4.sivV` | func | `(i32) -> (i32)` |
| 191 | `KXA4.tz3X` | func | `(i32) -> (i32)` |
| 192 | `KXA4.kb9Y` | func | `(i32) -> (i32)` |
| 193 | `KXA4.NHt8` | func | `(i32) -> (i32)` |
| 194 | `KXA4.dnRs` | func | `(i32 i32 i32) -> ()` |
| 195 | `KXA4.SRiN` | func | `(i32 i32 i32) -> ()` |
| 196 | `KXA4.s3tz` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 197 | `KXA4.JJDQ` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 198 | `KXA4.B9b7` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 199 | `KXA4.Khrc` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 200 | `KXA4.GqWR` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 201 | `KXA4.uFqU` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 202 | `KXA4.yD2L` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 203 | `KXA4.ELlJ` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 204 | `KXA4.PHzS` | func | `(i32) -> (i32)` |
| 205 | `KXA4.JqG9` | func | `(i32) -> (i32)` |
| 206 | `KXA4.pj1G` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 207 | `KXA4.q2p3` | func | `(i32 i32 i32 i32) -> ()` |
| 208 | `KXA4.VtFr` | func | `(i32 i32 i32 i32) -> ()` |
| 209 | `KXA4.Zjpj` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 210 | `KXA4.zSlz` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 211 | `KXA4.bdWM` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 212 | `KXA4.h7mk` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 213 | `KXA4.XED3` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 214 | `KXA4.Csqm` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 215 | `KXA4.utO4` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 216 | `KXA4.OEig` | func | `(i32 i32 i32) -> ()` |
| 217 | `KXA4.ByKj` | func | `(i32 i32 i32) -> ()` |
| 218 | `KXA4.KGzL` | func | `(i32 i32) -> ()` |
| 219 | `KXA4.a0S7` | func | `(i32 i32) -> ()` |
| 220 | `KXA4.ZOHH` | func | `(i32 i32) -> ()` |
| 221 | `KXA4.x39f` | func | `(i32 i32) -> ()` |
| 222 | `KXA4.SUAQ` | func | `(i32 i32) -> ()` |
| 223 | `KXA4.LLTP` | func | `(i32 i32) -> ()` |
| 224 | `KXA4.mnbQ` | func | `(i32 f32 f32) -> ()` |
| 225 | `KXA4.Lo97` | func | `(i32 f32 f32) -> ()` |
| 226 | `KXA4.nw99` | func | `(i32 i32) -> ()` |
| 227 | `KXA4.oWML` | func | `(i32 i32) -> ()` |
| 228 | `KXA4.jarc` | func | `(i32 i32 i32 f32) -> ()` |
| 229 | `KXA4.uLU2` | func | `(i32 i32 i32 f32) -> ()` |
| 230 | `KXA4.VszW` | func | `(i32 i32 i32) -> ()` |
| 231 | `KXA4.uq0k` | func | `(i32) -> (i32)` |
| 232 | `KXA4.TNMQ` | func | `(i32) -> (i32)` |
| 233 | `KXA4.ZtJO` | func | `(i32 i32) -> ()` |
| 234 | `KXA4.YPYZ` | func | `(i32 i32) -> ()` |
| 235 | `KXA4.chpg` | func | `(i32 i32 i32 i32) -> (i32)` |
| 236 | `KXA4.HQ3B` | func | `(i32 i32 i32 i32) -> ()` |
| 237 | `KXA4.dTvK` | func | `(i32 i32 i32 i32) -> (i32)` |
| 238 | `KXA4.Eo1H` | func | `(i32 i32 i32) -> ()` |
| 239 | `KXA4.A6pN` | func | `(i32 i32 i32) -> ()` |
| 240 | `KXA4.MGa7` | func | `(i32 i32 i32) -> ()` |
| 241 | `KXA4.nTeN` | func | `(i32 i32 i32) -> ()` |
| 242 | `KXA4.j3dD` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 243 | `KXA4.slR1` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 244 | `KXA4.x49Z` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 245 | `KXA4.PWO3` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 246 | `KXA4.wIui` | func | `(i32) -> (i32)` |
| 247 | `KXA4.FFCX` | func | `(i32) -> (i32)` |
| 248 | `KXA4.UfJr` | func | `(i32 i32 i32 i32) -> ()` |
| 249 | `KXA4.LNIF` | func | `(i32 i32) -> ()` |
| 250 | `KXA4.ajAe` | func | `(i32 i32) -> ()` |
| 251 | `KXA4.L1W3` | func | `(i32 i32) -> (i32)` |
| 252 | `KXA4.z2eI` | func | `(i32 i32) -> (i32)` |
| 253 | `KXA4.opI6` | func | `(i32 i32 i32 i32) -> ()` |
| 254 | `KXA4.BSUZ` | func | `(i32 i32 i32 i32) -> ()` |
| 255 | `KXA4.CQMc` | func | `(i32 i32) -> ()` |
| 256 | `KXA4.NDIh` | func | `(i32 i32) -> ()` |
| 257 | `KXA4.tMZQ` | func | `(i32) -> (i32)` |
| 258 | `KXA4.nG1E` | func | `(i32 i32 i32 i32) -> ()` |
| 259 | `KXA4.WH1z` | func | `(i32 i32 i32 f32) -> ()` |
| 260 | `KXA4.JIbb` | func | `(i32) -> ()` |
| 261 | `KXA4.x9fG` | func | `(i32 i32) -> ()` |
| 262 | `KXA4.StvW` | func | `(i32 i32) -> ()` |
| 263 | `KXA4.DMNF` | func | `(i32 i32) -> ()` |
| 264 | `KXA4.vfRx` | func | `(i32 i32) -> ()` |
| 265 | `KXA4.SdBq` | func | `(i32 i32) -> ()` |
| 266 | `KXA4.SCLb` | func | `(i32 i32) -> ()` |
| 267 | `KXA4.eYCi` | func | `(i32 i32) -> ()` |
| 268 | `KXA4.Guzi` | func | `(i32 i32) -> ()` |
| 269 | `KXA4.abjY` | func | `(i32) -> (i32)` |
| 270 | `KXA4.PQd1` | func | `(i32) -> (i32)` |
| 271 | `KXA4.S3q2` | func | `(i32) -> (i32)` |
| 272 | `KXA4.Ez61` | func | `(i32) -> (i32)` |
| 273 | `KXA4.RUx9` | func | `(i32 i32 i32 i32) -> ()` |
| 274 | `KXA4.bBJZ` | func | `(i32) -> ()` |
| 275 | `KXA4.rdQW` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 276 | `KXA4.KQ5m` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 277 | `KXA4.Mojd` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 278 | `KXA4.OczQ` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 279 | `KXA4.qvQR` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 280 | `KXA4.Lsq5` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 281 | `KXA4.oyry` | func | `(i32) -> (i32)` |
| 282 | `KXA4.dk8P` | func | `(i32) -> (i32)` |
| 283 | `KXA4.H6W8` | func | `(i32) -> (i32)` |
| 284 | `KXA4.PVki` | func | `(i32) -> (i32)` |
| 285 | `KXA4.qR2I` | func | `(i32 i32) -> ()` |
| 286 | `KXA4.cG4V` | func | `(i32) -> ()` |
| 287 | `KXA4.boud` | func | `(i32 i32) -> ()` |
| 288 | `KXA4.aJea` | func | `(i32) -> (i32)` |
| 289 | `KXA4.bGe4` | func | `(i32 i32) -> (i32)` |
| 290 | `KXA4.ayLF` | func | `(i32 i32) -> (i32)` |
| 291 | `KXA4.P48r` | func | `(i32 i32) -> (i32)` |
| 292 | `KXA4.Kw38` | func | `(f64) -> (i32)` |
| 293 | `KXA4.lZxq` | func | `(i32 i32) -> (i32)` |
| 294 | `KXA4.G7X7` | func | `(i32 i32) -> (i32)` |
| 295 | `KXA4.SnaG` | func | `(i32 i32) -> (i32)` |
| 296 | `KXA4.zOqg` | func | `(i32 i32) -> (i32)` |
| 297 | `KXA4.X7tC` | func | `(i32 i32) -> (i32)` |
| 298 | `KXA4.mbJM` | func | `(i32 i32) -> (i32)` |
| 299 | `KXA4.S6k1` | func | `(i32 i32) -> (i32)` |

## Exports

167 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `X2Qk` | func | 1556 | `(i32 f64) -> (f64)` |
| `CYlt` | func | 1542 | `(i32 i32) -> (i32)` |
| `v9Kz` | func | 3087 | `(i32) -> (i32 i32)` |
| `eCjg` | func | 2391 | `(i32 i32) -> (i32)` |
| `iaEa` | func | 2462 | `(i32) -> (i32)` |
| `u4SE` | func | 2197 | `(i32 i32) -> (i32)` |
| `C2ae` | func | 777 | `(i32 i32 i32) -> (i32)` |
| `AfRY` | func | 3243 | `(i32) -> (i32)` |
| `AZ1c` | func | 1524 | `(i32) -> (i32)` |
| `enb7` | func | 3197 | `(i32) -> ()` |
| `bzGB` | func | 2337 | `(i32 i32) -> ()` |
| `VSNh` | func | 1589 | `(i32 i32 i32 i32) -> (i32)` |
| `eFLy` | func | 2527 | `(i32) -> (i32)` |
| `nopy` | func | 694 | `(i32 i32) -> (i32)` |
| `vVKl` | func | 3136 | `(i32 i32) -> ()` |
| `ccOs` | func | 3016 | `() -> ()` |
| `s0Ty` | func | 760 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `RX7P` | func | 1787 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `tuhA` | func | 3135 | `(i32 i32 i32) -> ()` |
| `w9Qq` | func | 1553 | `(i32 i32) -> (i32)` |
| `rz0e` | func | 3102 | `() -> (i32 i32)` |
| `MH53` | func | 3127 | `(i32 i32 i32 i32) -> ()` |
| `AymX` | func | 3091 | `(i32) -> (i32 i32)` |
| `YkVP` | func | 3075 | `(i32 i32) -> (i32 i32)` |
| `ZlQF` | func | 582 | `(i32 i32 i32) -> (i32)` |
| `xnKd` | func | 2478 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `joGM` | func | 679 | `(i32 i32) -> (i32)` |
| `BIsC` | func | 2560 | `(i32) -> (i32)` |
| `gheg` | func | 1851 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `qlxe` | func | 3103 | `() -> (i32 i32)` |
| `AL2F` | func | 2551 | `(i32) -> (i32)` |
| `AOk2` | func | 2390 | `(i32 i32) -> (i32)` |
| `VWQG` | func | 1617 | `(i32 i32) -> (i32)` |
| `memory` | memory | 0 | `` |
| `DMLZ` | func | 2542 | `(i32) -> (i32)` |
| `HWYn` | func | 942 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `pbuR` | func | 1933 | `(i32) -> ()` |
| `MB97` | func | 3078 | `(i32 i32) -> (i32 i32)` |
| `mHXV` | func | 2509 | `(i32) -> (i32)` |
| `EW4K` | global | 2 | `` |
| `Wh6F` | func | 1354 | `(i32) -> ()` |
| `ifu4` | func | 2306 | `(i32 i32) -> ()` |
| `HqTu` | func | 1995 | `(i32) -> (i32)` |
| `N4nG` | func | 1321 | `(i32) -> (i32)` |
| `qo83` | func | 1741 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `qbed` | func | 2529 | `(i32) -> (i32)` |
| `pEJK` | func | 1864 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `UhvL` | func | 752 | `(i32 i32 i32 i32) -> (i32)` |
| `AeMM` | func | 1480 | `(i32) -> (i32)` |
| `MJMb` | func | 2531 | `(i32) -> (i32)` |
| `j8oZ` | func | 1523 | `(i32 i32 i32 i32) -> (i32)` |
| `Xd3V` | func | 3244 | `(i32) -> ()` |
| `CspI` | func | 1426 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `vmkg` | func | 3164 | `() -> (i32)` |
| `qLzO` | func | 1472 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `xE9q` | func | 1330 | `(i32 i32) -> (i32)` |
| `GPSw` | func | 2541 | `(i32) -> (i32)` |
| `S2aG` | func | 712 | `(f64) -> (f64)` |
| `APmn` | func | 1425 | `(i32 f64 f64) -> (i32)` |
| `bIWv` | func | 1859 | `() -> (i32)` |
| `mBeG` | func | 1273 | `(i32 i32) -> (i32)` |
| `AcbA` | func | 870 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `p2NU` | func | 3086 | `(i32) -> (i32 i32)` |
| `TJQe` | func | 2647 | `() -> (i32)` |
| `NCKs` | func | 2075 | `(i32 f64 f64 f64) -> (i32)` |
| `APZ1` | func | 1424 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `gjE0` | func | 3066 | `(i32 i32 i32) -> (i32 i32)` |
| `YKae` | func | 2526 | `(i32) -> (i32)` |
| `alE7` | func | 2389 | `(i32 i32) -> (i32)` |
| `pVIb` | func | 1137 | `(i32 i32) -> (i32)` |
| `PGnV` | func | 2848 | `(i32) -> (i32)` |
| `gWs9` | func | 909 | `(i32 i32) -> (i32)` |
| `rqPA` | func | 2870 | `(i32) -> ()` |
| `N05o` | func | 2364 | `(i32 i32 i32 i32) -> ()` |
| `BBps` | func | 1242 | `(i32 i32 i32 i32) -> (i32)` |
| `ULO0` | func | 2251 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `xGEl` | func | 1446 | `(i32 i32) -> (i32)` |
| `xYgY` | func | 1477 | `() -> (i32)` |
| `s2QD` | func | 3204 | `(i32) -> ()` |
| `nJDz` | func | 1799 | `(i32 i32) -> (i32)` |
| `LFak` | func | 756 | `(i32) -> (i32)` |
| `hyaB` | func | 2627 | `(i32) -> ()` |
| `wJwU` | func | 2562 | `(i32) -> (i32)` |
| `JV2F` | func | 3090 | `(i32) -> (i32 i32)` |
| `FW2O` | func | 2479 | `(i32) -> (i32)` |
| `Ui1Z` | func | 3035 | `(i32 i32) -> (i32)` |
| `g5vo` | func | 2539 | `(i32 i32) -> ()` |
| `Q9cA` | func | 1302 | `(i32 i32 i32) -> ()` |
| `QT3Q` | func | 930 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `ZwBd` | func | 1997 | `(i32 i32 i32 i32) -> ()` |
| `dMWq` | func | 1138 | `(i32 i32) -> ()` |
| `fqqO` | func | 1977 | `(i32) -> (i32)` |
| `YrSa` | func | 2552 | `(i32 i32) -> (i32)` |
| `GNM1` | func | 1918 | `(i32 i32) -> (i32)` |
| `SOY2` | func | 2646 | `(i32 i32) -> ()` |
| `sCeh` | func | 1241 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `N0nm` | func | 3191 | `(i32 i32 i32) -> ()` |
| `jYaV` | func | 1371 | `(i32 i32 i32) -> (i32)` |
| `gOkd` | func | 2521 | `(i32) -> (f64)` |
| `CmoL` | func | 2091 | `(i32 i32) -> ()` |
| `v9j7` | func | 2597 | `(i32 i32) -> ()` |
| `GH1j` | func | 1530 | `(i32 i32) -> (i32)` |
| `ZNuK` | func | 1764 | `(i32) -> (i32)` |
| `n7al` | func | 2525 | `(i32) -> (i32)` |
| `igb3` | global | 1 | `` |
| `PGvd` | func | 2553 | `(i32 i32) -> (i32)` |
| `AHRi` | func | 2611 | `() -> (i32)` |
| `xWX4` | func | 1500 | `(i32 i32 i32 i32) -> ()` |
| `Xrn2` | func | 3073 | `(i32 i32) -> (i32 i32)` |
| `TZv9` | func | 2827 | `(i32) -> (i32)` |
| `r7vf` | func | 3088 | `(i32) -> (i32 i32)` |
| `zoLu` | func | 2423 | `(i32 i32) -> (i32)` |
| `Kw0x` | func | 3239 | `() -> (f64)` |
| `BAmC` | func | 2715 | `(i32 i32) -> ()` |
| `zwzd` | func | 720 | `(i32 i32) -> (i32)` |
| `tU1M` | func | 628 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `XJz8` | func | 1879 | `(i32 i32 i32 i32) -> (i32)` |
| `pxIl` | func | 2561 | `(i32) -> (i32)` |
| `I1Mi` | func | 2434 | `(i32 i32 i32 i32) -> (i32)` |
| `SyfJ` | func | 1518 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `ZcxQ` | func | 2523 | `(i32) -> (i32)` |
| `toPj` | func | 2860 | `(i32) -> (i32)` |
| `GwT8` | func | 2544 | `(i32) -> (i32)` |
| `VkY4` | func | 1701 | `(i32) -> ()` |
| `ty4B` | func | 1197 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `ZyuB` | func | 1554 | `(i32 i32) -> (i32)` |
| `oqcW` | func | 2610 | `(i32) -> ()` |
| `NUzt` | func | 2307 | `(i32 f64) -> (i32)` |
| `JEJS` | func | 3074 | `(i32 i32) -> (i32 i32)` |
| `l6Cd` | func | 3041 | `(i32 i32 i32 i32) -> (i32)` |
| `JRtS` | func | 3198 | `() -> ()` |
| `HStZ` | func | 2530 | `(i32) -> (i32)` |
| `tJVp` | func | 2031 | `(i32 i32) -> ()` |
| `P9ZD` | func | 2388 | `(i32 i32) -> (i32)` |
| `uFTX` | func | 3067 | `(i32 i32 i32) -> (i32 i32)` |
| `vTEA` | func | 3267 | `() -> (i32)` |
| `EKi6` | func | 908 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `moNC` | func | 1781 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `NHKU` | func | 1295 | `(i32 i32 i32) -> (i32)` |
| `m809` | func | 1925 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `YXvT` | func | 1632 | `(i32 f64 f64 f64) -> (i32)` |
| `B3c7` | func | 1357 | `(i32 i32) -> (i32)` |
| `DZG6` | func | 2522 | `(i32) -> (i32)` |
| `zqjT` | func | 2116 | `(i32 i32) -> (i32)` |
| `ASDd` | func | 2892 | `(i32) -> (i32)` |
| `tUNX` | func | 1248 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `Fwj8` | func | 2834 | `(i32) -> (i32)` |
| `DWVf` | func | 3089 | `(i32) -> (i32 i32)` |
| `WvlX` | func | 1568 | `(i32 i32 i32) -> (i32)` |
| `w7Nk` | func | 1907 | `(i32 i32) -> ()` |
| `GP0g` | func | 3104 | `() -> (i32 i32)` |
| `CcfP` | func | 2528 | `(i32) -> ()` |
| `Tixe` | func | 1628 | `(i32 i32) -> ()` |
| `IY1g` | func | 1669 | `(i32 i32 i32 i32) -> (i32)` |
| `zPij` | func | 3072 | `(i32 i32) -> (i32 i32)` |
| `BFnT` | func | 689 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `KClg` | func | 2727 | `(i32 i32) -> ()` |
| `tVfI` | func | 2508 | `(i32 i32) -> ()` |
| `fGEu` | func | 3268 | `() -> (i32)` |
| `wlaM` | func | 2543 | `(i32 i32) -> ()` |
| `kV9l` | func | 3076 | `(i32 i32) -> (i32 i32)` |
| `iBXF` | func | 2524 | `(i32) -> (i32)` |
| `JbMG` | func | 2057 | `(i32 f64) -> (i32)` |
| `nXSs` | func | 2229 | `(i32 i32) -> (i32)` |
| `dthX` | func | 1899 | `(i32 i32 f64 f64 f64) -> ()` |
| `GnnZ` | func | 3077 | `(i32 i32) -> (i32 i32)` |
| `N48S` | func | 3048 | `(i32 i32) -> ()` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 759 · max 759
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2708632, `i32` = i32.const 2709228

## Functions

- 2,979 bodies · 4,121,034 code bytes · avg 1.4 KB
- instruction scan: 2,979 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 156 |
| <= 64 bytes | 113 |
| <= 128 bytes | 261 |
| <= 256 bytes | 387 |
| <= 512 bytes | 686 |
| <= 1024 bytes | 597 |
| <= 2048 bytes | 434 |
| <= 4096 bytes | 184 |
| <= 8192 bytes | 94 |
| <= 16384 bytes | 32 |
| > 16384 bytes | 35 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32) -> ()` | 218 | 195,091 | 88,356 | local.get×25977, i32.const×9822, i32.load×5552, local.set×4795, local.tee×4567 |
| 1 | `(i32 i32 i32 i32 i32) -> ()` | 149 | 107,711 | 52,244 | local.get×14617, i32.const×6206, i32.add×3028, local.set×2958, i32.load×2876 |
| 2 | `(i32 i32 i32 i32 i32 i32) -> ()` | 130 | 46,466 | 21,356 | local.get×6228, i32.const×2821, local.set×1224, i32.add×1130, i32.load×1006 |
| 3 | `(i32 i32) -> ()` | 105 | 36,615 | 16,581 | local.get×4597, i32.const×1665, local.set×977, local.tee×845, i32.load×782 |
| 4 | `(i32 i32) -> ()` | 58 | 29,792 | 14,312 | local.get×4209, i32.const×1738, i32.load×1042, local.set×931, i32.add×820 |
| 5 | `(i32 i32) -> ()` | 90 | 26,046 | 12,563 | local.get×3702, i32.const×1379, local.set×779, i32.load×721, local.tee×698 |
| 6 | `(i32 i32 i32 i32 i32) -> ()` | 135 | 32,562 | 16,141 | local.get×4566, i32.const×2205, local.set×1141, i32.add×1062, local.tee×800 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 58 | 21,491 | 10,529 | local.get×2903, i32.const×1493, local.set×728, i32.add×591, local.tee×504 |
| 8 | `(i32 i32 i32 i32) -> ()` | 105 | 26,490 | 12,813 | local.get×3796, i32.const×1624, local.set×985, i32.add×684, i32.load×669 |
| 9 | `(i32 i32) -> ()` | 93 | 18,058 | 8,685 | local.get×2524, i32.const×965, local.tee×535, local.set×515, i32.load×504 |
| 10 | `(i32 i32 i32 i32) -> ()` | 53 | 24,505 | 11,634 | local.get×3005, i32.const×1276, local.tee×731, end×592, i32.load×586 |
| 11 | `(i32 i32 i32) -> (i32)` | 76 | 23,045 | 10,821 | local.get×2888, i32.const×1247, i32.load×812, local.set×501, end×465 |
| 12 | `(i32 i32 i32) -> (i32)` | 77 | 18,924 | 8,934 | local.get×2485, i32.const×1224, i32.load×559, i32.add×543, local.set×525 |
| 13 | `(i32 i32 i32 i32 i32 i32) -> ()` | 125 | 19,810 | 8,875 | local.get×2493, i32.const×1111, local.set×430, local.tee×385, i32.load×382 |
| 16 | `(i32 i32) -> ()` | 96 | 31,835 | 14,861 | local.get×4482, i32.const×1910, i32.add×763, local.set×692, i32.load×669 |
| 18 | `(i32) -> ()` | 78 | 20,103 | 9,357 | local.get×2592, i32.const×1114, i32.add×570, local.tee×513, local.set×503 |
| 24 | `(i32 i32) -> ()` | 82 | 29,024 | 13,043 | local.get×4618, i32.const×1456, i32.store×702, i32.add×689, local.tee×645 |
| 25 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 64 | 24,318 | 11,211 | local.get×2683, i32.const×1714, local.set×822, end×665, block×466 |
| 28 | `(i32 i32 i32 i32 i32) -> ()` | 68 | 22,818 | 10,630 | local.get×3348, i32.const×1245, local.tee×735, i32.add×431, local.set×341 |
| 35 | `(i32 i32 i32 i32 i32) -> ()` | 65 | 18,015 | 8,704 | local.get×2378, i32.const×1095, local.set×628, local.tee×459, i32.add×442 |
| 71 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 112 | 27,605 | 13,066 | local.get×3810, i32.const×1687, i32.load×857, local.set×788, i32.add×672 |
| 204 | `(i32 i32) -> ()` | 10 | 30,134 | 14,535 | local.get×5127, i32.load×1394, i32.const×1130, end×911, i32.add×829 |
| 223 | `(i32) -> ()` | 19 | 23,308 | 10,931 | local.get×2739, i32.load×1499, i32.const×1189, local.tee×1013, end×857 |
| 739 | `(i32 i32) -> ()` | 139 | 42,975 | 20,266 | local.get×5275, i32.const×2347, local.tee×1198, i32.add×1066, local.set×1006 |
| 740 | `(i32 i32 i32 i32) -> ()` | 54 | 21,809 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 1618 | `(i32 i32) -> (i32)` | 182 | 55,130 | 19,838 | local.get×6600, i32.const×2596, i64.store×1935, i64.const×1087, i64.load×1068 |
| 2027 | `(i32 i32) -> ()` | 111 | 39,749 | 17,590 | local.get×5165, i32.const×1655, local.set×898, local.tee×741, end×677 |
| 2651 | `(i32 i32) -> ()` | 398 | 142,193 | 64,164 | local.get×18413, i32.const×8006, local.set×3828, i32.load×3150, end×2805 |
| 2930 | `(i32 i32 i32 i32) -> ()` | 137 | 31,379 | 14,285 | local.get×4258, i32.const×1517, local.tee×742, local.set×690, br_if×632 |
| 2948 | `(i32 i32) -> ()` | 143 | 33,660 | 15,072 | local.get×4234, i32.const×1988, local.set×803, local.tee×732, i32.add×689 |

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
terrain-atlasn-anim-lit-packed-texterrain-atlasn-anim-lit-packed-rest-instterrain-atlasn-anim-lit-packed-instterrain-atlasn-anim-lit-packed-cells-rest-texterrain-atlasn-anim-lit-packed-cells-texterrai
a draw with a base vertex: WebGL2 has none, so it is skippedan indexed draw without an index buffer is skippeda draw's pipeline has no GL program: it is skippeda draw's program failed to link: it is s
standingsittingzombieglidingdrivingsleepingridingShearedSaddledskyblockHeldBossBoxBloxdBlockPersonLeaderboardParticleEmitterTier 1Tier 2Tier 3Tier 4Tier 5PlayerPigCowSheepHorseCamelIron Goofy GolemGol
R8UnormR32FloatRgba8UnormBgra8UnormDepth24PlusDepth24PlusStencil8Rgba16UintRgba32UintRgba32FloatRg32FloatUV2VERTEXCOLORVERTEXALPHAOPACITYRGBEMISSIVELITE_REFLECTION_LUMINANCEREFLECTIONMAP_OPPOSITEZROUG
EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEJJJJJJJJEEEEEEEEEEEEEJJJJJJJJEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEJJJJEEEEEEEEEEEEEEJJJJJJ
,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123
called `Result::unwrap()` on an `Err` valueANGLE_instanced_arraysEXT_blend_minmaxEXT_color_buffer_floatEXT_color_buffer_half_floatEXT_float_blendEXT_frag_depthEXT_shader_texture_lodEXT_sRGBEXT_texture
```

## Opcode histogram (aggregated)

| opcode | count |
|---|---:|
| `local.get` | 551,420 |
| `i32.const` | 230,026 |
| `local.tee` | 102,511 |
| `i32.load` | 96,687 |
| `local.set` | 95,940 |
| `i32.add` | 88,975 |
| `end` | 80,930 |
| `br_if` | 65,770 |
| `i32.store` | 47,713 |
| `block` | 37,962 |
| `i64.const` | 33,323 |
| `i64.store` | 32,548 |
| `if` | 30,995 |
| `call` | 30,188 |
| `i32.sub` | 25,173 |
| `i64.load` | 24,235 |
| `br` | 23,555 |
| `i32.eqz` | 20,043 |
| `select` | 17,496 |
| `i32.shl` | 16,748 |
| `i32.and` | 16,570 |
| `i32.ne` | 16,182 |
| `i32.load8_u` | 15,293 |
| `i32.eq` | 14,142 |
| `i32.store8` | 12,809 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 2,979/2,979 (degraded: 0)
