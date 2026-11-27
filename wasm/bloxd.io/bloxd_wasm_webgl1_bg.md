# WASM module: `bloxd_wasm_webgl1_bg`

> environment **bloxd.io** · build `1yqdn.8419f1e1` · analyzed 2026-11-28T02:07:45+09:00
> source: https://bloxd.io/static/media/bloxd_wasm_webgl1_bg.a0deaef430ce97836033.wasm
> 4,934,167 bytes (4.7 MB) · sha256 `ac00e7c2f7830464…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- size 4,879,367 → 4,934,167 bytes (+54,800)
- defined functions 2,890 → 2,930
- imported functions 282 → 284
- code bytes 4,026,528 → 4,076,337
- data bytes 806,316 → 811,034
- name-section module id `721518df0ee096b2.10684` → `505b0c86d9736415.10828`
- export signatures: +1 × `(i32 i32) -> ()`; +1 × `(i32) -> (i32 i32)`; +3 × `(i32) -> ()`; +1 × `(i32 i32 i32 i32) -> ()`; +1 × `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()`
- import signatures: +1 × `(i32) -> ()`; +1 × `(f64) -> (i32)`
- export identifiers rotated by the obfuscator: 1/167 names kept (identifier names are randomly assigned per build; compare signatures instead)
- new embedded strings: `atlas arrays giventerrain cullterrain blend modeterrain text`; `heldAtBackstopWindowsclosure invoked recursively or after be`
- removed embedded strings: `WebGL1 writes no array texture: grids are 2DtexSubImage thre`; `heldAtBackstopWindowsclosure invoked recursively or after be`

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,930 / 284 |
| Exports / imports | 167 / 285 |
| Code bytes (function bodies) | 4,076,337 (3.9 MB) |
| Total local variables | 31,448 |
| Instructions (scanable bodies) | 1,912,836 |
| Data segments / bytes | 3,779 / 811,034 |
| Element segments / entries | 1 / 739 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `505b0c86d9736415.10828` |
| Sections | 11 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,528 | 180 |
| 2 | import | 3,426 | 285 |
| 3 | function | 2,984 | 2930 |
| 4 | table | 7 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,337 | 167 |
| 9 | element | 1,485 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 4,081,725 | 2930 |
| 11 | data | 841,578 | 3779 |
| 0 | custom:name | 30 | — |

## Types

180 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32) -> ()` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

285 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `Arqj.sAtK` | memory | `[128..14648]` |
| 0 | `Arqj.kVXa` | func | `(i32) -> (f64)` |
| 1 | `Arqj.M2G5` | func | `() -> (i32)` |
| 2 | `Arqj.yrFZ` | func | `(i32 i32 i32) -> (i32)` |
| 3 | `Arqj.ZoWl` | func | `(i32) -> ()` |
| 4 | `Arqj.I1DF` | func | `(i32 i32) -> (i32)` |
| 5 | `Arqj.Qdyb` | func | `(i32) -> (i32)` |
| 6 | `Arqj.qStJ` | func | `(i32 i32 i32) -> (i32)` |
| 7 | `Arqj.ilBw` | func | `(i32 i32 i32 i32) -> (i32)` |
| 8 | `Arqj.sKX6` | func | `(i32) -> (i32)` |
| 9 | `Arqj.l37Q` | func | `(i32 i32) -> ()` |
| 10 | `Arqj.zKM2` | func | `(i32 i32) -> ()` |
| 11 | `Arqj.X1ug` | func | `(i32 i32 i32 i32) -> (i32)` |
| 12 | `Arqj.sMOo` | func | `(i32 i32) -> (i32)` |
| 13 | `Arqj.ek2Z` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 14 | `Arqj.cRZw` | func | `(i32) -> (i32)` |
| 15 | `Arqj.mi9r` | func | `(i32 i32) -> (i32)` |
| 16 | `Arqj.fryT` | func | `(i32 i32) -> (i32)` |
| 17 | `Arqj.mRmE` | func | `(i32 i32) -> ()` |
| 18 | `Arqj.KlZK` | func | `(i32) -> (i32)` |
| 19 | `Arqj.B8VN` | func | `(i32) -> (i32)` |
| 20 | `Arqj.As8x` | func | `(i32) -> (i32)` |
| 21 | `Arqj.ZJM7` | func | `(i32) -> ()` |
| 22 | `Arqj.xsyF` | func | `(i32 i32) -> ()` |
| 23 | `Arqj.hZpP` | func | `(i32 i32) -> ()` |
| 24 | `Arqj.mxQX` | func | `(i32) -> (i32)` |
| 25 | `Arqj.BoS4` | func | `(i32 i32) -> ()` |
| 26 | `Arqj.RDiY` | func | `(i32 i32) -> (i32)` |
| 27 | `Arqj.xo2s` | func | `(i32 i32 i32 i32) -> ()` |
| 28 | `Arqj.Z7mj` | func | `(i32 i32) -> (i32)` |
| 29 | `Arqj.KqFd` | func | `(i32 i32 i32) -> (i32)` |
| 30 | `Arqj.RrNj` | func | `(i32) -> (i32)` |
| 31 | `Arqj.CLhQ` | func | `() -> (f64)` |
| 32 | `Arqj.l6N7` | func | `(i32 i32) -> ()` |
| 33 | `Arqj.eyEb` | func | `(i32) -> (i32)` |
| 34 | `Arqj.yGUO` | func | `(i32) -> (i32)` |
| 35 | `Arqj.azlm` | func | `(i32) -> ()` |
| 36 | `Arqj.e0HI` | func | `(i32 i32 i32) -> (i32)` |
| 37 | `Arqj.pbu0` | func | `(i32) -> (i32)` |
| 38 | `Arqj.jK7S` | func | `(i32) -> (i32)` |
| 39 | `Arqj.BHXx` | func | `(i32) -> (i32)` |
| 40 | `Arqj.mpT0` | func | `(i32 i32) -> (i32)` |
| 41 | `Arqj.RebO` | func | `(i32 i32 i32 i32) -> ()` |
| 42 | `Arqj.ko68` | func | `(i32) -> (i32)` |
| 43 | `Arqj.huS6` | func | `(i32 i32 i32 i32) -> ()` |
| 44 | `Arqj.OwT0` | func | `(i32) -> (i32)` |
| 45 | `Arqj.i4id` | func | `(i32 i32 i32 i32) -> ()` |
| 46 | `Arqj.GWvZ` | func | `(i32 i32 i32) -> (i32)` |
| 47 | `Arqj.SuGD` | func | `(i32 f64 f64 f64 f64) -> ()` |
| 48 | `Arqj.y5cv` | func | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64) -> ()` |
| 49 | `Arqj.wQ8R` | func | `(i32 i32 i32) -> ()` |
| 50 | `Arqj.wosg` | func | `(i32 i32 i32) -> ()` |
| 51 | `Arqj.oRZ0` | func | `(i32 i32 i32) -> ()` |
| 52 | `Arqj.JpBd` | func | `(i32 i32) -> ()` |
| 53 | `Arqj.DBsX` | func | `(i32 i32) -> ()` |
| 54 | `Arqj.s156` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 55 | `Arqj.R0hI` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 56 | `Arqj.FqDN` | func | `(i32 f32 f32) -> ()` |
| 57 | `Arqj.MMYx` | func | `(i32 f32 f32) -> ()` |
| 58 | `Arqj.s0bi` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 59 | `Arqj.Wt9N` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 60 | `Arqj.TDa7` | func | `(i32 i32 i32 i32) -> ()` |
| 61 | `Arqj.FpTt` | func | `(i32 i32 i32 i32) -> ()` |
| 62 | `Arqj.SybV` | func | `(i32 i32 i32) -> ()` |
| 63 | `Arqj.DlDu` | func | `(i32 i32 i32) -> ()` |
| 64 | `Arqj.bVIx` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 65 | `Arqj.lDr1` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 66 | `Arqj.fVrz` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 67 | `Arqj.lZmY` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 68 | `Arqj.leDw` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 69 | `Arqj.Nw5x` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 70 | `Arqj.zlX2` | func | `(i32) -> (i32)` |
| 71 | `Arqj.jG2S` | func | `(i32) -> ()` |
| 72 | `Arqj.xIcq` | func | `(i32) -> (i32)` |
| 73 | `Arqj.sR4E` | func | `(i32 i32) -> (i32)` |
| 74 | `Arqj.h5Cp` | func | `(i32 i32 i32) -> (i32)` |
| 75 | `Arqj.i2RZ` | func | `(i32 i32 i32) -> ()` |
| 76 | `Arqj.GZ7l` | func | `(i32 i32 i32 i32) -> (i32)` |
| 77 | `Arqj.hIuL` | func | `() -> (f64)` |
| 78 | `Arqj.Is4p` | func | `() -> (f64)` |
| 79 | `Arqj.wjcG` | func | `(i32 i32) -> ()` |
| 80 | `Arqj.pd3v` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 81 | `Arqj.qIYc` | func | `(i32 i32 i32) -> ()` |
| 82 | `Arqj.dOcI` | func | `(i32 i32 i32) -> ()` |
| 83 | `Arqj.iIjK` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 84 | `Arqj.h3ni` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 85 | `Arqj.SlgG` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 86 | `Arqj.z71d` | func | `(i32 i32) -> ()` |
| 87 | `Arqj.rDym` | func | `(i32 i32) -> ()` |
| 88 | `Arqj.bUHk` | func | `(i32) -> (i32)` |
| 89 | `Arqj.HQYM` | func | `(i32 i32) -> ()` |
| 90 | `Arqj.nDUg` | func | `(i32 i32) -> ()` |
| 91 | `Arqj.nyFn` | func | `(i32 i32 i32) -> ()` |
| 92 | `Arqj.EpiA` | func | `(i32 i32 i32) -> ()` |
| 93 | `Arqj.Bom4` | func | `(i32) -> (i32)` |
| 94 | `Arqj.DWwC` | func | `(i32) -> (i32)` |
| 95 | `Arqj.kg0n` | func | `(i32 i32) -> (i32)` |
| 96 | `Arqj.pb05` | func | `(i32 i32) -> (i32)` |
| 97 | `Arqj.Heys` | func | `(i32 i32) -> ()` |
| 98 | `Arqj.t9za` | func | `(i32 i32) -> ()` |
| 99 | `Arqj.wwLy` | func | `(i32 i32 i32) -> ()` |
| 100 | `Arqj.ryh3` | func | `(i32 i32 i32) -> ()` |
| 101 | `Arqj.VxDQ` | func | `(i32 i32 i32 i32) -> ()` |
| 102 | `Arqj.siP9` | func | `(i32 i32 i32 i32) -> ()` |
| 103 | `Arqj.vh5J` | func | `(i32 i32 f32) -> ()` |
| 104 | `Arqj.QZRB` | func | `(i32 i32 f32) -> ()` |
| 105 | `Arqj.sfV3` | func | `(i32 i32 i32) -> ()` |
| 106 | `Arqj.OvdX` | func | `(i32 i32 i32) -> ()` |
| 107 | `Arqj.oVHS` | func | `(i32 i32 i32) -> ()` |
| 108 | `Arqj.n20M` | func | `(i32 i32 f32 f32) -> ()` |
| 109 | `Arqj.iK9V` | func | `(i32 i32 f32 f32) -> ()` |
| 110 | `Arqj.HYcD` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 111 | `Arqj.a6SC` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 112 | `Arqj.lhZq` | func | `(i32 i32) -> ()` |
| 113 | `Arqj.oueQ` | func | `(i32 i32) -> ()` |
| 114 | `Arqj.RxQ6` | func | `(i32 i32) -> ()` |
| 115 | `Arqj.GC23` | func | `(i32 i32) -> ()` |
| 116 | `Arqj.DbNb` | func | `(i32) -> (i32)` |
| 117 | `Arqj.RdHY` | func | `(i32) -> (i32)` |
| 118 | `Arqj.krjP` | func | `(i32) -> (i32)` |
| 119 | `Arqj.YUkI` | func | `(i32) -> (i32)` |
| 120 | `Arqj.VJfa` | func | `(i32 i32) -> ()` |
| 121 | `Arqj.FMW2` | func | `(i32 i32) -> ()` |
| 122 | `Arqj.OgWL` | func | `(i32 i32) -> ()` |
| 123 | `Arqj.L9LS` | func | `(i32 i32) -> ()` |
| 124 | `Arqj.ede4` | func | `(i32 i32) -> ()` |
| 125 | `Arqj.SwqK` | func | `(i32 i32) -> ()` |
| 126 | `Arqj.lqp8` | func | `(i32 i32) -> (i32)` |
| 127 | `Arqj.A4nc` | func | `(i32 i32) -> (i32)` |
| 128 | `Arqj.JV4p` | func | `(i32 i32 i32 i32) -> ()` |
| 129 | `Arqj.q2U9` | func | `(i32 i32 i32 i32) -> ()` |
| 130 | `Arqj.BiEL` | func | `(i32 i32) -> ()` |
| 131 | `Arqj.jRUa` | func | `(i32 i32) -> ()` |
| 132 | `Arqj.RbM5` | func | `(i32) -> (i32)` |
| 133 | `Arqj.yn3R` | func | `(i32 i32) -> ()` |
| 134 | `Arqj.RuM2` | func | `(i32 i32) -> ()` |
| 135 | `Arqj.xamc` | func | `(i32 i32 i32) -> ()` |
| 136 | `Arqj.neiW` | func | `(i32 i32 i32) -> ()` |
| 137 | `Arqj.Ms2x` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 138 | `Arqj.QkBT` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 139 | `Arqj.x4De` | func | `(i32 i32) -> ()` |
| 140 | `Arqj.CuhW` | func | `(i32 i32 i32) -> ()` |
| 141 | `Arqj.bb6A` | func | `(i32 i32 i32) -> ()` |
| 142 | `Arqj.cCkl` | func | `(i32 i32 i32 i32) -> (i32)` |
| 143 | `Arqj.SiBw` | func | `(i32 i32 i32 i32) -> (i32)` |
| 144 | `Arqj.VPDs` | func | `(i32 i32 i32) -> ()` |
| 145 | `Arqj.Lv5u` | func | `(i32 i32 i32) -> ()` |
| 146 | `Arqj.s691` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 147 | `Arqj.UDAo` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 148 | `Arqj.iV6Q` | func | `(i32 i32 i32) -> (i32)` |
| 149 | `Arqj.y0Ag` | func | `(i32 i32 i32) -> (i32)` |
| 150 | `Arqj.rNju` | func | `(i32 i32 i32) -> (i32)` |
| 151 | `Arqj.OuOM` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 152 | `Arqj.O5iu` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 153 | `Arqj.ZaWs` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 154 | `Arqj.eiiN` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 155 | `Arqj.e3yW` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 156 | `Arqj.tGXo` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 157 | `Arqj.FIIc` | func | `(i32) -> (i32)` |
| 158 | `Arqj.yNZI` | func | `(i32) -> (i32)` |
| 159 | `Arqj.HKZ3` | func | `(i32) -> (i32)` |
| 160 | `Arqj.iHA5` | func | `(i32) -> (i32)` |
| 161 | `Arqj.ttmd` | func | `() -> (i32)` |
| 162 | `Arqj.TEba` | func | `() -> (i32)` |
| 163 | `Arqj.xd4x` | func | `() -> (i32)` |
| 164 | `Arqj.IKFj` | func | `() -> (i32)` |
| 165 | `Arqj.GgNQ` | func | `(i32 i32) -> (i32)` |
| 166 | `Arqj.bKuW` | func | `(i32) -> ()` |
| 167 | `Arqj.xXCs` | func | `(i32 i32) -> (i32)` |
| 168 | `Arqj.Y9qD` | func | `(i32) -> (i32)` |
| 169 | `Arqj.ieT4` | func | `(i32) -> (i32)` |
| 170 | `Arqj.hBps` | func | `(i32) -> (i32)` |
| 171 | `Arqj.wZni` | func | `(i32) -> ()` |
| 172 | `Arqj.XoXX` | func | `(i32 i32 i32) -> (i32)` |
| 173 | `Arqj.efND` | func | `(i32) -> (i32)` |
| 174 | `Arqj.bAzc` | func | `(i32) -> (i32)` |
| 175 | `Arqj.cVND` | func | `(i32 i32) -> (i32)` |
| 176 | `Arqj.REgz` | func | `(i32 i32 i32) -> (i32)` |
| 177 | `Arqj.yDm5` | func | `(i32 i32 i32) -> (i32)` |
| 178 | `Arqj.gu5J` | func | `(i32) -> (i32)` |
| 179 | `Arqj.NbkX` | func | `(i32) -> (i32)` |
| 180 | `Arqj.dxcn` | func | `(i32) -> (i32)` |
| 181 | `Arqj.Ik5L` | func | `(i32 i32 i32 i32) -> ()` |
| 182 | `Arqj.nRBj` | func | `(i32 i32 i32 i32) -> ()` |
| 183 | `Arqj.MSpX` | func | `(i32 i32) -> ()` |
| 184 | `Arqj.PtPN` | func | `(i32 i32 i32) -> ()` |
| 185 | `Arqj.DoAa` | func | `(i32 i32) -> ()` |
| 186 | `Arqj.sBwZ` | func | `(i32 i32 i32) -> ()` |
| 187 | `Arqj.j9wv` | func | `(i32 i32) -> ()` |
| 188 | `Arqj.gtbF` | func | `(i32 i32) -> ()` |
| 189 | `Arqj.bj68` | func | `(i32) -> (i32)` |
| 190 | `Arqj.wFhC` | func | `(i32 i32) -> (i32)` |
| 191 | `Arqj.pAt2` | func | `(i32) -> ()` |
| 192 | `Arqj.E09p` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 193 | `Arqj.gcL8` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 194 | `Arqj.gHuS` | func | `(i32 i32) -> ()` |
| 195 | `Arqj.I2S3` | func | `(i32 i32) -> ()` |
| 196 | `Arqj.ZW5p` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 197 | `Arqj.kAs2` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 198 | `Arqj.libx` | func | `(i32 f32) -> ()` |
| 199 | `Arqj.DIrj` | func | `(i32 f32) -> ()` |
| 200 | `Arqj.DzRM` | func | `(i32 i32) -> ()` |
| 201 | `Arqj.XE9F` | func | `(i32 i32) -> ()` |
| 202 | `Arqj.bSqV` | func | `(i32) -> (i32)` |
| 203 | `Arqj.G8ae` | func | `(i32) -> (i32)` |
| 204 | `Arqj.DaIh` | func | `(i32) -> (i32)` |
| 205 | `Arqj.bZR9` | func | `(i32) -> (i32)` |
| 206 | `Arqj.ue31` | func | `(i32 i32 i32) -> ()` |
| 207 | `Arqj.ywzZ` | func | `(i32 i32 i32) -> ()` |
| 208 | `Arqj.gQgy` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 209 | `Arqj.JARG` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 210 | `Arqj.JZuU` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 211 | `Arqj.GSG1` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 212 | `Arqj.iY0H` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 213 | `Arqj.Zlln` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 214 | `Arqj.Jmwf` | func | `(i32 i32) -> ()` |
| 215 | `Arqj.VwDj` | func | `(i32 i32) -> ()` |
| 216 | `Arqj.qkBA` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 217 | `Arqj.C4Ya` | func | `(i32 i32 i32 f32) -> ()` |
| 218 | `Arqj.W8t7` | func | `(i32 i32 i32 f32) -> ()` |
| 219 | `Arqj.kHrM` | func | `(i32) -> (i32)` |
| 220 | `Arqj.QWTW` | func | `(i32) -> (i32)` |
| 221 | `Arqj.kOe8` | func | `(i32 i32) -> ()` |
| 222 | `Arqj.Oz6q` | func | `(i32 i32) -> ()` |
| 223 | `Arqj.lOhg` | func | `(i32 i32 i32) -> (i32)` |
| 224 | `Arqj.Fjo2` | func | `(i32) -> (i32)` |
| 225 | `Arqj.GROB` | func | `(i32) -> (i32)` |
| 226 | `Arqj.IVHe` | func | `(i32 i32) -> ()` |
| 227 | `Arqj.H4ny` | func | `(i32 i32 i32) -> (i32)` |
| 228 | `Arqj.AzbH` | func | `(i32 i32) -> ()` |
| 229 | `Arqj.Rlaq` | func | `(i32 i32) -> ()` |
| 230 | `Arqj.wRrz` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 231 | `Arqj.FdcV` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 232 | `Arqj.AL9A` | func | `(i32 i32 i32) -> ()` |
| 233 | `Arqj.LBM0` | func | `(i32 i32 i32) -> ()` |
| 234 | `Arqj.jW6i` | func | `(i32 i32) -> ()` |
| 235 | `Arqj.kmCa` | func | `(i32 i32) -> ()` |
| 236 | `Arqj.O7Td` | func | `(i32 i32) -> ()` |
| 237 | `Arqj.wyov` | func | `(i32 i32) -> ()` |
| 238 | `Arqj.rgqL` | func | `(i32 i32) -> ()` |
| 239 | `Arqj.FY4M` | func | `(i32 i32) -> ()` |
| 240 | `Arqj.KQYM` | func | `(i32 f32 f32) -> ()` |
| 241 | `Arqj.SZbU` | func | `(i32 f32 f32) -> ()` |
| 242 | `Arqj.DQQ9` | func | `(i32 i32 i32 i32) -> ()` |
| 243 | `Arqj.KWwf` | func | `(i32 i32 i32 i32) -> ()` |
| 244 | `Arqj.U0F9` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 245 | `Arqj.j5Te` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 246 | `Arqj.m8wX` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 247 | `Arqj.DIew` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 248 | `Arqj.WF6B` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 249 | `Arqj.Aei8` | func | `(i32 i32 i32 i32) -> ()` |
| 250 | `Arqj.lC3P` | func | `(i32 i32 i32 i32) -> ()` |
| 251 | `Arqj.YykX` | func | `(i32) -> ()` |
| 252 | `Arqj.hBpZ` | func | `(i32 i32) -> ()` |
| 253 | `Arqj.vUBt` | func | `(i32 i32) -> ()` |
| 254 | `Arqj.eKjH` | func | `(i32 i32) -> ()` |
| 255 | `Arqj.KVGH` | func | `(i32 i32) -> ()` |
| 256 | `Arqj.icwK` | func | `(i32 i32) -> ()` |
| 257 | `Arqj.Zchh` | func | `(i32 i32) -> ()` |
| 258 | `Arqj.k14H` | func | `(i32 i32) -> ()` |
| 259 | `Arqj.AQwY` | func | `(i32 i32) -> ()` |
| 260 | `Arqj.rvdr` | func | `(i32) -> (i32)` |
| 261 | `Arqj.QUMV` | func | `(i32) -> (i32)` |
| 262 | `Arqj.HuMC` | func | `(i32) -> (i32)` |
| 263 | `Arqj.xLTW` | func | `(i32) -> (i32)` |
| 264 | `Arqj.Tda1` | func | `(i32) -> ()` |
| 265 | `Arqj.sJw4` | func | `(i32 i32 i32 i32) -> ()` |
| 266 | `Arqj.EloX` | func | `(i32) -> ()` |
| 267 | `Arqj.fRcy` | func | `(i32) -> (i32)` |
| 268 | `Arqj.r43f` | func | `(i32) -> (i32)` |
| 269 | `Arqj.gkjM` | func | `(i32) -> (i32)` |
| 270 | `Arqj.jeID` | func | `(i32) -> (i32)` |
| 271 | `Arqj.HeO9` | func | `(i32 i32) -> ()` |
| 272 | `Arqj.V3U9` | func | `(i32) -> ()` |
| 273 | `Arqj.KonZ` | func | `(i32 i32) -> ()` |
| 274 | `Arqj.JTUl` | func | `(i32) -> (i32)` |
| 275 | `Arqj.tjC5` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 276 | `Arqj.HJBV` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 277 | `Arqj.mNqg` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 278 | `Arqj.S7uK` | func | `(i32 i32) -> (i32)` |
| 279 | `Arqj.G4iM` | func | `(i32 i32) -> (i32)` |
| 280 | `Arqj.dpqY` | func | `(i32 i32) -> (i32)` |
| 281 | `Arqj.j3IB` | func | `(f64) -> (i32)` |
| 282 | `Arqj.zEjQ` | func | `(i32 i32) -> (i32)` |
| 283 | `Arqj.j9OI` | func | `(i32 i32) -> (i32)` |

## Exports

167 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `rrco` | func | 3072 | `(i32 i32) -> ()` |
| `WbRa` | func | 2484 | `(i32) -> (i32)` |
| `n4j5` | func | 2598 | `() -> (i32)` |
| `ERhH` | func | 1274 | `(i32 i32 i32) -> ()` |
| `bKtv` | func | 886 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `Zwlh` | func | 3026 | `(i32) -> (i32 i32)` |
| `oYHv` | func | 2518 | `(i32) -> (i32)` |
| `mFLQ` | func | 1872 | `(i32 i32) -> ()` |
| `dwXM` | func | 2508 | `(i32 i32) -> (i32)` |
| `uHzs` | func | 3042 | `() -> (i32 i32)` |
| `qkOP` | func | 2437 | `(i32) -> (i32)` |
| `QtVe` | func | 1397 | `(i32 f64 f64) -> (i32)` |
| `yhpO` | global | 2 | `` |
| `g28v` | func | 3180 | `(i32) -> (i32)` |
| `kWBX` | func | 2597 | `(i32 i32) -> ()` |
| `NvEg` | func | 2785 | `(i32) -> (i32)` |
| `qdmn` | func | 3017 | `(i32 i32) -> (i32 i32)` |
| `lEv4` | func | 2517 | `(i32) -> (i32)` |
| `Iodv` | func | 919 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `p3zA` | func | 735 | `(i32) -> (i32)` |
| `qVkw` | func | 3203 | `() -> (i32)` |
| `KFLZ` | func | 3176 | `() -> (f64)` |
| `KbpK` | func | 1492 | `(i32) -> (i32)` |
| `hkYP` | func | 2488 | `(i32) -> (i32)` |
| `sZXa` | func | 1448 | `() -> (i32)` |
| `qzq4` | func | 2980 | `(i32 i32) -> (i32)` |
| `Ypfd` | func | 2486 | `(i32) -> (i32)` |
| `llE3` | func | 1522 | `(i32 i32) -> (i32)` |
| `cMwW` | func | 1293 | `(i32) -> (i32)` |
| `v8FX` | func | 1672 | `(i32) -> ()` |
| `AXWd` | func | 1526 | `(i32 f64) -> (f64)` |
| `MYYM` | func | 2563 | `() -> (i32)` |
| `LbeP` | func | 1523 | `(i32 i32) -> (i32)` |
| `SNAt` | func | 693 | `(f64) -> (f64)` |
| `exGY` | func | 1601 | `(i32 i32) -> ()` |
| `TatB` | func | 2819 | `(i32) -> ()` |
| `rNXz` | func | 1942 | `(i32) -> (i32)` |
| `oLAn` | func | 1890 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `mCKr` | func | 732 | `(i32 i32 i32 i32) -> (i32)` |
| `VBq2` | func | 1537 | `(i32 i32 i32) -> (i32)` |
| `WAlg` | func | 3019 | `(i32 i32) -> (i32 i32)` |
| `dwj1` | func | 3040 | `() -> (i32 i32)` |
| `JLL0` | func | 2466 | `(i32) -> (i32)` |
| `dLL1` | func | 3016 | `(i32 i32) -> (i32 i32)` |
| `qyWv` | func | 2039 | `(i32 f64 f64 f64) -> (i32)` |
| `EK15` | func | 1843 | `(i32 i32 i32 i32) -> (i32)` |
| `bZfD` | func | 561 | `(i32 i32 i32) -> (i32)` |
| `Uxzx` | func | 3011 | `(i32 i32 i32) -> (i32 i32)` |
| `kX4s` | func | 1605 | `(i32 f64 f64 f64) -> (i32)` |
| `Rt19` | func | 3133 | `(i32) -> ()` |
| `c5Iy` | func | 2483 | `(i32) -> (i32)` |
| `JQwB` | func | 3028 | `(i32) -> (i32 i32)` |
| `F9KJ` | func | 3029 | `(i32) -> (i32 i32)` |
| `OWkv` | global | 1 | `` |
| `MKf2` | func | 1396 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `VDf1` | func | 1225 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `yjbb` | func | 3181 | `(i32) -> ()` |
| `jxnN` | func | 2778 | `(i32) -> (i32)` |
| `w7Iq` | func | 1959 | `(i32 i32 i32 i32) -> ()` |
| `Yxzt` | func | 2351 | `(i32 i32) -> (i32)` |
| `eC9w` | func | 2499 | `(i32 i32) -> ()` |
| `gyTP` | func | 2303 | `(i32 i32) -> ()` |
| `FEjs` | func | 700 | `(i32 i32) -> (i32)` |
| `COxF` | func | 2498 | `(i32) -> (i32)` |
| `yFWp` | func | 2217 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `L6lX` | func | 2516 | `(i32) -> (i32)` |
| `QyJR` | func | 2420 | `(i32) -> (i32)` |
| `eIbz` | func | 1303 | `(i32 i32) -> (i32)` |
| `D7fH` | func | 1642 | `(i32 i32 i32 i32) -> (i32)` |
| `yBMq` | func | 2395 | `(i32 i32 i32 i32) -> (i32)` |
| `kroU` | func | 1730 | `(i32) -> (i32)` |
| `H3Cx` | func | 1558 | `(i32 i32 i32 i32) -> (i32)` |
| `itwK` | func | 2961 | `() -> ()` |
| `f4J6` | func | 1511 | `(i32 i32) -> (i32)` |
| `K4uG` | func | 2272 | `(i32 i32) -> ()` |
| `yUTR` | func | 2465 | `(i32 i32) -> ()` |
| `rYzs` | func | 1174 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `a8tH` | func | 1486 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `Jz4Q` | func | 2019 | `(i32 f64) -> (i32)` |
| `D1T2` | func | 3025 | `(i32) -> (i32 i32)` |
| `pX0M` | func | 2507 | `(i32) -> (i32)` |
| `CHWC` | func | 2055 | `(i32 i32) -> ()` |
| `W5Cv` | func | 2482 | `(i32) -> (i32)` |
| `sccD` | func | 1469 | `(i32 i32 i32 i32) -> ()` |
| `dN6d` | func | 3071 | `(i32 i32 i32) -> ()` |
| `FkLu` | func | 1815 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `eLYn` | func | 3020 | `(i32 i32) -> (i32 i32)` |
| `BCSp` | func | 2495 | `(i32 i32) -> ()` |
| `igPS` | func | 757 | `(i32 i32 i32) -> (i32)` |
| `ntNc` | func | 676 | `(i32 i32) -> (i32)` |
| `x82m` | func | 2986 | `(i32 i32 i32 i32) -> (i32)` |
| `pf6S` | func | 3010 | `(i32 i32 i32) -> (i32 i32)` |
| `ZHe4` | func | 3021 | `(i32 i32) -> (i32 i32)` |
| `c0VJ` | func | 1764 | `(i32 i32) -> (i32)` |
| `cu0x` | func | 1709 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `NmUq` | func | 1250 | `(i32 i32) -> (i32)` |
| `S1OR` | func | 1864 | `(i32 i32 f64 f64 f64) -> ()` |
| `T4G5` | func | 3204 | `() -> (i32)` |
| `qDk1` | func | 2436 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `JHzm` | func | 2678 | `(i32 i32) -> ()` |
| `a2EN` | func | 2799 | `(i32) -> (i32)` |
| `i5hR` | func | 3140 | `(i32) -> ()` |
| `memory` | memory | 0 | `` |
| `vXPm` | func | 1116 | `(i32 i32) -> ()` |
| `ykUf` | func | 907 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `FEWE` | func | 1746 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `uuaY` | func | 1269 | `(i32 i32 i32) -> (i32)` |
| `hLmw` | func | 1328 | `(i32) -> ()` |
| `CnOu` | func | 2382 | `(i32 i32) -> (i32)` |
| `XjQA` | func | 2487 | `(i32) -> (i32)` |
| `jmL3` | func | 2478 | `(i32) -> (f64)` |
| `BPsg` | func | 738 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `qJf4` | func | 2497 | `(i32) -> (i32)` |
| `gnth` | func | 1753 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `LJXz` | func | 2500 | `(i32) -> (i32)` |
| `OK6Q` | func | 661 | `(i32 i32) -> (i32)` |
| `kalT` | func | 2162 | `(i32 i32) -> (i32)` |
| `l0T3` | func | 1218 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `QD6U` | func | 2485 | `(i32) -> ()` |
| `KMxI` | func | 1590 | `(i32 i32) -> (i32)` |
| `Raw1` | func | 1347 | `(i32 i32 i32) -> (i32)` |
| `EIte` | func | 2550 | `(i32 i32) -> ()` |
| `Jfnz` | func | 2580 | `(i32) -> ()` |
| `rdSd` | func | 850 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `Xpmk` | func | 1883 | `(i32 i32) -> (i32)` |
| `msUN` | func | 2480 | `(i32) -> (i32)` |
| `LXEC` | func | 2353 | `(i32 i32) -> (i32)` |
| `lcOf` | func | 2562 | `(i32) -> ()` |
| `mupO` | func | 1957 | `(i32) -> (i32)` |
| `vMZS` | func | 2665 | `(i32 i32) -> ()` |
| `mfHG` | func | 1491 | `(i32 i32 i32 i32) -> (i32)` |
| `tNxn` | func | 2352 | `(i32 i32) -> (i32)` |
| `Cn1F` | func | 2354 | `(i32 i32) -> (i32)` |
| `fBKZ` | func | 2080 | `(i32 i32) -> (i32)` |
| `EQ5m` | func | 672 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `RMt8` | func | 1398 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `Kz7V` | func | 1443 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `SK8Z` | func | 3018 | `(i32 i32) -> (i32 i32)` |
| `MWAQ` | func | 1331 | `(i32 i32) -> (i32)` |
| `HdF2` | func | 610 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `ahjU` | func | 2809 | `(i32) -> (i32)` |
| `Md5q` | func | 3027 | `(i32) -> (i32 i32)` |
| `VjIt` | func | 3127 | `(i32 i32 i32) -> ()` |
| `OA0V` | func | 3015 | `(i32 i32) -> (i32 i32)` |
| `SfWr` | func | 2194 | `(i32 i32) -> (i32)` |
| `L7kE` | func | 3134 | `() -> ()` |
| `a1yC` | func | 3041 | `() -> (i32 i32)` |
| `liqi` | func | 1828 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `n27U` | func | 3063 | `(i32 i32 i32 i32) -> ()` |
| `E6op` | func | 3100 | `() -> (i32)` |
| `yWSp` | func | 1419 | `(i32 i32) -> (i32)` |
| `PdCT` | func | 1219 | `(i32 i32 i32 i32) -> (i32)` |
| `HWZH` | func | 1898 | `(i32) -> ()` |
| `xBgy` | func | 3030 | `(i32) -> (i32 i32)` |
| `ZnRu` | func | 1451 | `(i32) -> (i32)` |
| `zLea` | func | 2479 | `(i32) -> (i32)` |
| `z6QR` | func | 2273 | `(i32 f64) -> (i32)` |
| `z2wL` | func | 1823 | `() -> (i32)` |
| `ItGy` | func | 2841 | `(i32) -> (i32)` |
| `edkh` | func | 2481 | `(i32) -> (i32)` |
| `n6E6` | func | 2509 | `(i32 i32) -> (i32)` |
| `U7mi` | func | 1993 | `(i32 i32) -> ()` |
| `pkGu` | func | 2992 | `(i32 i32) -> ()` |
| `i3s6` | func | 1115 | `(i32 i32) -> (i32)` |
| `tN2U` | func | 887 | `(i32 i32) -> (i32)` |
| `d7kW` | func | 2330 | `(i32 i32 i32 i32) -> ()` |
| `GISK` | func | 1499 | `(i32 i32) -> (i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 740 · max 740
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2024384, `i32` = i32.const 2024964

## Functions

- 2,930 bodies · 4,076,337 code bytes · avg 1.4 KB
- instruction scan: 2,930 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 156 |
| <= 64 bytes | 103 |
| <= 128 bytes | 255 |
| <= 256 bytes | 374 |
| <= 512 bytes | 683 |
| <= 1024 bytes | 590 |
| <= 2048 bytes | 426 |
| <= 4096 bytes | 184 |
| <= 8192 bytes | 93 |
| <= 16384 bytes | 32 |
| > 16384 bytes | 34 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32) -> ()` | 218 | 195,073 | 88,356 | local.get×25977, i32.const×9822, i32.load×5552, local.set×4795, local.tee×4567 |
| 1 | `(i32 i32 i32 i32 i32) -> ()` | 147 | 107,789 | 52,285 | local.get×14621, i32.const×6216, i32.add×3024, local.set×2957, i32.load×2872 |
| 2 | `(i32 i32 i32 i32 i32 i32) -> ()` | 130 | 46,699 | 21,474 | local.get×6240, i32.const×2842, local.set×1235, i32.add×1137, i32.load×1019 |
| 3 | `(i32 i32) -> ()` | 105 | 36,606 | 16,581 | local.get×4597, i32.const×1665, local.set×977, local.tee×845, i32.load×782 |
| 4 | `(i32 i32) -> ()` | 58 | 29,787 | 14,312 | local.get×4209, i32.const×1738, i32.load×1042, local.set×931, i32.add×820 |
| 5 | `(i32 i32) -> ()` | 90 | 26,046 | 12,563 | local.get×3702, i32.const×1379, local.set×779, i32.load×721, local.tee×698 |
| 6 | `(i32 i32 i32 i32 i32) -> ()` | 135 | 32,562 | 16,141 | local.get×4566, i32.const×2205, local.set×1141, i32.add×1062, local.tee×800 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 58 | 21,491 | 10,529 | local.get×2903, i32.const×1493, local.set×728, i32.add×591, local.tee×504 |
| 8 | `(i32 i32 i32 i32) -> ()` | 105 | 26,490 | 12,813 | local.get×3796, i32.const×1624, local.set×985, i32.add×684, i32.load×669 |
| 9 | `(i32 i32 i32) -> (i32)` | 74 | 22,653 | 10,819 | local.get×2894, i32.const×1298, i32.load×755, local.set×500, i32.add×479 |
| 10 | `(i32 i32) -> ()` | 93 | 18,058 | 8,685 | local.get×2524, i32.const×965, local.tee×535, local.set×515, i32.load×504 |
| 11 | `(i32 i32 i32 i32) -> ()` | 53 | 24,505 | 11,634 | local.get×3005, i32.const×1276, local.tee×731, end×592, i32.load×586 |
| 12 | `(i32 i32 i32) -> (i32)` | 77 | 18,923 | 8,934 | local.get×2485, i32.const×1224, i32.load×559, i32.add×543, local.set×525 |
| 13 | `(i32 i32 i32 i32 i32 i32) -> ()` | 125 | 19,810 | 8,875 | local.get×2493, i32.const×1111, local.set×430, local.tee×385, i32.load×382 |
| 16 | `(i32 i32) -> ()` | 96 | 31,835 | 14,861 | local.get×4482, i32.const×1910, i32.add×763, local.set×692, i32.load×669 |
| 18 | `(i32 i32 i32 i32 i32 i32) -> ()` | 153 | 17,217 | 8,058 | local.get×2506, i32.const×894, local.set×541, i32.load×399, i32.add×366 |
| 23 | `(i32 i32) -> ()` | 82 | 29,024 | 13,043 | local.get×4618, i32.const×1456, i32.store×702, i32.add×689, local.tee×645 |
| 24 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 64 | 24,312 | 11,211 | local.get×2683, i32.const×1714, local.set×822, end×665, block×466 |
| 28 | `(i32 i32 i32 i32 i32) -> ()` | 68 | 22,817 | 10,630 | local.get×3348, i32.const×1245, local.tee×735, i32.add×431, local.set×341 |
| 34 | `(i32 i32 i32 i32 i32) -> ()` | 65 | 18,015 | 8,704 | local.get×2378, i32.const×1095, local.set×628, local.tee×459, i32.add×442 |
| 71 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 112 | 27,605 | 13,066 | local.get×3810, i32.const×1687, i32.load×857, local.set×788, i32.add×672 |
| 200 | `(i32 i32) -> ()` | 10 | 30,134 | 14,535 | local.get×5127, i32.load×1394, i32.const×1130, end×911, i32.add×829 |
| 220 | `(i32) -> ()` | 19 | 23,308 | 10,931 | local.get×2739, i32.load×1499, i32.const×1189, local.tee×1013, end×857 |
| 735 | `(i32 i32) -> ()` | 139 | 42,975 | 20,266 | local.get×5275, i32.const×2347, local.tee×1198, i32.add×1066, local.set×1006 |
| 736 | `(i32 i32 i32 i32) -> ()` | 54 | 21,809 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 1599 | `(i32 i32) -> (i32)` | 182 | 55,130 | 19,838 | local.get×6600, i32.const×2596, i64.store×1935, i64.const×1087, i64.load×1068 |
| 2010 | `(i32 i32) -> ()` | 111 | 39,746 | 17,590 | local.get×5165, i32.const×1655, local.set×898, local.tee×741, end×677 |
| 2612 | `(i32 i32) -> ()` | 398 | 142,193 | 64,164 | local.get×18413, i32.const×8006, local.set×3828, i32.load×3150, end×2805 |
| 2882 | `(i32 i32 i32 i32) -> ()` | 137 | 31,374 | 14,285 | local.get×4258, i32.const×1517, local.tee×742, local.set×690, br_if×632 |
| 2901 | `(i32 i32) -> ()` | 143 | 33,660 | 15,072 | local.get×4234, i32.const×1988, local.set×803, local.tee×732, i32.add×689 |

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
| `local.get` | 545,914 |
| `i32.const` | 227,790 |
| `local.tee` | 101,473 |
| `i32.load` | 95,347 |
| `local.set` | 95,239 |
| `i32.add` | 88,016 |
| `end` | 80,077 |
| `br_if` | 65,184 |
| `i32.store` | 47,003 |
| `block` | 37,619 |
| `i64.const` | 32,893 |
| `i64.store` | 32,114 |
| `if` | 30,606 |
| `call` | 29,554 |
| `i32.sub` | 24,904 |
| `i64.load` | 23,787 |
| `br` | 23,446 |
| `i32.eqz` | 19,773 |
| `select` | 17,421 |
| `i32.shl` | 16,613 |
| `i32.and` | 16,505 |
| `i32.ne` | 16,083 |
| `i32.load8_u` | 15,107 |
| `i32.eq` | 14,068 |
| `i32.store8` | 12,722 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 2,930/2,930 (degraded: 0)
