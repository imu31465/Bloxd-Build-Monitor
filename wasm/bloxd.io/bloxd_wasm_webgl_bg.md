# WASM module: `bloxd_wasm_webgl_bg`

> environment **bloxd.io** · build `fqwnlq.985c8f39` · analyzed 2026-11-24T11:40:10+09:00
> source: https://bloxd.io/static/media/bloxd_wasm_webgl_bg.6807706ec6f4ae7d2ec8.wasm
> 5,500,736 bytes (5.2 MB) · sha256 `f94a6bd176e034f7…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- size 5,500,808 → 5,500,736 bytes (-72)
- defined functions 2,904 → 2,905
- code bytes 4,029,569 → 4,029,494
- name-section module id `5acdf3c4f5b93980.10886` → `288981f4c124fa2f.10887`
- export identifiers rotated by the obfuscator: 1/156 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,905 / 299 |
| Exports / imports | 156 / 300 |
| Code bytes (function bodies) | 4,029,494 (3.8 MB) |
| Total local variables | 30,685 |
| Instructions (scanable bodies) | 1,889,691 |
| Data segments / bytes | 4,028 / 1,422,466 |
| Element segments / entries | 1 / 752 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `288981f4c124fa2f.10887` |
| Sections | 11 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,498 | 176 |
| 2 | import | 3,606 | 300 |
| 3 | function | 2,955 | 2905 |
| 4 | table | 7 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,249 | 156 |
| 9 | element | 1,511 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 4,034,818 | 2905 |
| 11 | data | 1,454,995 | 4028 |
| 0 | custom:name | 30 | — |

## Types

176 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32) -> ()` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

300 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `FamN.kD8y` | memory | `[128..14648]` |
| 0 | `FamN.UBbO` | func | `(i32) -> (f64)` |
| 1 | `FamN.GPvi` | func | `() -> (i32)` |
| 2 | `FamN.QjdZ` | func | `(i32 i32 i32) -> (i32)` |
| 3 | `FamN.QGj0` | func | `(i32) -> ()` |
| 4 | `FamN.IvZQ` | func | `(i32 i32) -> (i32)` |
| 5 | `FamN.ICNx` | func | `(i32) -> (i32)` |
| 6 | `FamN.HVPU` | func | `(i32 i32 i32) -> (i32)` |
| 7 | `FamN.O8Jp` | func | `(i32 i32 i32 i32) -> (i32)` |
| 8 | `FamN.yLPx` | func | `(i32) -> (i32)` |
| 9 | `FamN.ylK2` | func | `(i32 i32) -> ()` |
| 10 | `FamN.Vdep` | func | `(i32 i32) -> ()` |
| 11 | `FamN.KUmx` | func | `(i32 i32 i32 i32) -> (i32)` |
| 12 | `FamN.kfwm` | func | `(i32 i32) -> (i32)` |
| 13 | `FamN.R9uK` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 14 | `FamN.bcY4` | func | `(i32) -> (i32)` |
| 15 | `FamN.WTin` | func | `(i32 i32) -> (i32)` |
| 16 | `FamN.JAd5` | func | `(i32 i32) -> (i32)` |
| 17 | `FamN.axzY` | func | `(i32 i32) -> ()` |
| 18 | `FamN.vJRx` | func | `(i32) -> (i32)` |
| 19 | `FamN.JtLB` | func | `(i32) -> (i32)` |
| 20 | `FamN.NlYR` | func | `(i32) -> (i32)` |
| 21 | `FamN.bnZm` | func | `(i32) -> ()` |
| 22 | `FamN.erte` | func | `(i32 i32) -> ()` |
| 23 | `FamN.dCTt` | func | `(i32 i32) -> ()` |
| 24 | `FamN.pmmz` | func | `(i32 f64 f64 f64 f64) -> ()` |
| 25 | `FamN.mygV` | func | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64) -> ()` |
| 26 | `FamN.fRl1` | func | `(i32) -> (i32)` |
| 27 | `FamN.pgHC` | func | `(i32 i32) -> ()` |
| 28 | `FamN.WHfK` | func | `(i32 i32) -> (i32)` |
| 29 | `FamN.w7Kq` | func | `(i32 i32 i32 i32) -> ()` |
| 30 | `FamN.CQ8j` | func | `(i32 i32) -> (i32)` |
| 31 | `FamN.mJ5k` | func | `(i32 i32 i32) -> (i32)` |
| 32 | `FamN.DbSr` | func | `(i32) -> (i32)` |
| 33 | `FamN.ts3G` | func | `(i32 i32) -> ()` |
| 34 | `FamN.K9Z7` | func | `(i32 i32 i32) -> (i32)` |
| 35 | `FamN.rzX3` | func | `(i32) -> (i32)` |
| 36 | `FamN.iBnQ` | func | `(i32) -> (i32)` |
| 37 | `FamN.meCD` | func | `(i32) -> (i32)` |
| 38 | `FamN.jat7` | func | `(i32 i32) -> (i32)` |
| 39 | `FamN.MDbU` | func | `(i32 i32 i32 i32) -> ()` |
| 40 | `FamN.W62U` | func | `(i32) -> (i32)` |
| 41 | `FamN.xeKn` | func | `(i32 i32 i32 i32) -> ()` |
| 42 | `FamN.A9Ng` | func | `() -> (f64)` |
| 43 | `FamN.S7xb` | func | `(i32) -> (i32)` |
| 44 | `FamN.RS1R` | func | `(i32 i32 i32 i32) -> ()` |
| 45 | `FamN.F0bU` | func | `(i32 i32 i32) -> (i32)` |
| 46 | `FamN.MnRp` | func | `(i32 i32 i32) -> ()` |
| 47 | `FamN.ghPC` | func | `(i32 i32 i32) -> ()` |
| 48 | `FamN.FxDL` | func | `(i32 i32 i32) -> ()` |
| 49 | `FamN.uuo5` | func | `(i32 i32 i32 i32) -> ()` |
| 50 | `FamN.Kh0M` | func | `(i32 i32 i32 i32) -> ()` |
| 51 | `FamN.zF1R` | func | `(i32 i32) -> ()` |
| 52 | `FamN.rlp8` | func | `(i32 i32) -> ()` |
| 53 | `FamN.H646` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 54 | `FamN.YBaY` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 55 | `FamN.KDrD` | func | `(i32 f32 f32) -> ()` |
| 56 | `FamN.ebkN` | func | `(i32 f32 f32) -> ()` |
| 57 | `FamN.rm9z` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 58 | `FamN.dBSw` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 59 | `FamN.lHGt` | func | `(i32 i32 i32 i32) -> ()` |
| 60 | `FamN.mlo7` | func | `(i32 i32 i32 i32) -> ()` |
| 61 | `FamN.CZFL` | func | `(i32 i32 i32) -> ()` |
| 62 | `FamN.k48v` | func | `(i32 i32 i32) -> ()` |
| 63 | `FamN.fDzm` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 64 | `FamN.dqIp` | func | `(i32 i32 i32) -> ()` |
| 65 | `FamN.FZCp` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 66 | `FamN.WmYq` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 67 | `FamN.t00H` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 68 | `FamN.apxh` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 69 | `FamN.tI36` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 70 | `FamN.Yjaz` | func | `(i32) -> (i32)` |
| 71 | `FamN.GdOj` | func | `(i32) -> ()` |
| 72 | `FamN.QwqM` | func | `(i32) -> (i32)` |
| 73 | `FamN.Kmdr` | func | `(i32 i32) -> (i32)` |
| 74 | `FamN.MdH5` | func | `(i32 i32 i32) -> (i32)` |
| 75 | `FamN.Aty2` | func | `(i32 i32 i32) -> ()` |
| 76 | `FamN.JVJ5` | func | `(i32 i32 i32 i32) -> (i32)` |
| 77 | `FamN.lxFi` | func | `() -> (f64)` |
| 78 | `FamN.on18` | func | `() -> (f64)` |
| 79 | `FamN.BMLF` | func | `(i32 i32) -> ()` |
| 80 | `FamN.Li4Z` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 81 | `FamN.Abv6` | func | `(i32 i32 i32) -> (i32)` |
| 82 | `FamN.PYmV` | func | `(i32 i32 i32) -> ()` |
| 83 | `FamN.fN8A` | func | `(i32 i32 i32) -> ()` |
| 84 | `FamN.ZN44` | func | `(i32 i32) -> ()` |
| 85 | `FamN.xf0u` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 86 | `FamN.d2In` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 87 | `FamN.IpRd` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 88 | `FamN.NGkQ` | func | `(i32 i32) -> ()` |
| 89 | `FamN.sdHN` | func | `(i32 i32) -> ()` |
| 90 | `FamN.Jbzt` | func | `(i32) -> (i32)` |
| 91 | `FamN.gJ5G` | func | `(i32 i32 i32) -> ()` |
| 92 | `FamN.MUmL` | func | `(i32 i32 i32) -> ()` |
| 93 | `FamN.SvAn` | func | `(i32) -> (i32)` |
| 94 | `FamN.fZJv` | func | `(i32) -> (i32)` |
| 95 | `FamN.wZTB` | func | `(i32 i32) -> ()` |
| 96 | `FamN.iUCG` | func | `(i32 i32) -> ()` |
| 97 | `FamN.PF7f` | func | `(i32 i32) -> ()` |
| 98 | `FamN.eL8x` | func | `(i32 i32) -> ()` |
| 99 | `FamN.ljVW` | func | `(i32 i32 i32) -> ()` |
| 100 | `FamN.k3WR` | func | `(i32 i32 i32) -> ()` |
| 101 | `FamN.cNSZ` | func | `(i32 i32 f32) -> ()` |
| 102 | `FamN.t3bo` | func | `(i32 i32 f32) -> ()` |
| 103 | `FamN.CJwd` | func | `(i32 i32 i32) -> ()` |
| 104 | `FamN.gmYh` | func | `(i32 i32 f32 f32) -> ()` |
| 105 | `FamN.fB7l` | func | `(i32 i32 f32 f32) -> ()` |
| 106 | `FamN.FDGI` | func | `(i32 i32) -> ()` |
| 107 | `FamN.iuBV` | func | `(i32 i32) -> ()` |
| 108 | `FamN.j75y` | func | `(i32 i32) -> ()` |
| 109 | `FamN.vYhc` | func | `(i32 i32) -> ()` |
| 110 | `FamN.b9A4` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 111 | `FamN.YjWJ` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 112 | `FamN.jlOf` | func | `(i32 i32 i32) -> ()` |
| 113 | `FamN.tedP` | func | `(i32 i32 i32) -> ()` |
| 114 | `FamN.tyd2` | func | `(i32 i32 i32 i32) -> ()` |
| 115 | `FamN.TWJn` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 116 | `FamN.H9gR` | func | `(i32 i32) -> ()` |
| 117 | `FamN.xzV4` | func | `(i32 i32) -> ()` |
| 118 | `FamN.FrNx` | func | `(i32 i32) -> (i32)` |
| 119 | `FamN.szrm` | func | `(i32 i32) -> (i32)` |
| 120 | `FamN.tKxO` | func | `(i32 i32) -> ()` |
| 121 | `FamN.ATqf` | func | `(i32 i32) -> ()` |
| 122 | `FamN.ezYI` | func | `(i32) -> (i32)` |
| 123 | `FamN.xqM2` | func | `(i32 i32) -> ()` |
| 124 | `FamN.fRxm` | func | `(i32 i32) -> ()` |
| 125 | `FamN.JkDF` | func | `(i32 i32 i32 i32) -> ()` |
| 126 | `FamN.rlFk` | func | `(i32 i32 i32) -> ()` |
| 127 | `FamN.Igqy` | func | `(i32 i32 i32) -> ()` |
| 128 | `FamN.wWNT` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 129 | `FamN.KUPx` | func | `(i32 i32) -> ()` |
| 130 | `FamN.PEHc` | func | `(i32 i32 i32) -> ()` |
| 131 | `FamN.QnX7` | func | `(i32 i32 i32) -> ()` |
| 132 | `FamN.GoM1` | func | `(i32 i32 i32) -> ()` |
| 133 | `FamN.UJM7` | func | `(i32 i32 i32) -> ()` |
| 134 | `FamN.UeKB` | func | `(i32) -> ()` |
| 135 | `FamN.y6Ag` | func | `(i32 i32 i32) -> (i32)` |
| 136 | `FamN.VU9S` | func | `(i32 i32 i32) -> ()` |
| 137 | `FamN.knq1` | func | `(i32 i32 i32) -> (i32)` |
| 138 | `FamN.j1PD` | func | `(i32 i32) -> ()` |
| 139 | `FamN.dX10` | func | `(i32) -> (i32)` |
| 140 | `FamN.Ebxn` | func | `(i32 i32) -> ()` |
| 141 | `FamN.PwTd` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 142 | `FamN.hbDA` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 143 | `FamN.pczp` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 144 | `FamN.cJ8e` | func | `(i32 i32 i32) -> (i32)` |
| 145 | `FamN.CNDP` | func | `(i32 i32 i32) -> (i32)` |
| 146 | `FamN.GRC7` | func | `(i32 i32) -> ()` |
| 147 | `FamN.Umum` | func | `(i32 i32) -> ()` |
| 148 | `FamN.siVB` | func | `(i32 i32) -> ()` |
| 149 | `FamN.M0Ez` | func | `(i32 i32) -> ()` |
| 150 | `FamN.FJ7u` | func | `(i32) -> (i32)` |
| 151 | `FamN.IqQb` | func | `(i32) -> (i32)` |
| 152 | `FamN.GxEL` | func | `(i32) -> (i32)` |
| 153 | `FamN.GYIu` | func | `(i32) -> (i32)` |
| 154 | `FamN.q0ZT` | func | `(i32) -> (i32)` |
| 155 | `FamN.ASII` | func | `(i32) -> (i32)` |
| 156 | `FamN.lr4k` | func | `() -> (i32)` |
| 157 | `FamN.pm1w` | func | `() -> (i32)` |
| 158 | `FamN.HatF` | func | `() -> (i32)` |
| 159 | `FamN.LpBO` | func | `() -> (i32)` |
| 160 | `FamN.cOOw` | func | `(i32 i32) -> (i32)` |
| 161 | `FamN.zv49` | func | `(i32) -> ()` |
| 162 | `FamN.GD4I` | func | `(i32 i32) -> (i32)` |
| 163 | `FamN.Xtmd` | func | `(i32) -> (i32)` |
| 164 | `FamN.BVDH` | func | `(i32) -> (i32)` |
| 165 | `FamN.lptX` | func | `(i32) -> (i32)` |
| 166 | `FamN.F9s7` | func | `(i32) -> ()` |
| 167 | `FamN.Om9t` | func | `(i32 i32 i32) -> (i32)` |
| 168 | `FamN.eYio` | func | `(i32) -> (i32)` |
| 169 | `FamN.Ddyb` | func | `(i32) -> (i32)` |
| 170 | `FamN.Jfrf` | func | `(i32 i32) -> (i32)` |
| 171 | `FamN.hbW9` | func | `(i32) -> ()` |
| 172 | `FamN.UTB4` | func | `() -> (i32)` |
| 173 | `FamN.VwyS` | func | `(i32 i32) -> (i32)` |
| 174 | `FamN.LXwf` | func | `(i32 i32) -> ()` |
| 175 | `FamN.shZT` | func | `(i32 i32) -> ()` |
| 176 | `FamN.jI1X` | func | `(i32) -> (i32)` |
| 177 | `FamN.jllS` | func | `(i32 i32) -> (i32)` |
| 178 | `FamN.U5Yc` | func | `(i32) -> ()` |
| 179 | `FamN.oACG` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 180 | `FamN.Djct` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 181 | `FamN.ZVCR` | func | `(i32 i32) -> ()` |
| 182 | `FamN.J19O` | func | `(i32 i32) -> ()` |
| 183 | `FamN.hFdZ` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 184 | `FamN.s6bQ` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 185 | `FamN.JJM6` | func | `(i32 f32) -> ()` |
| 186 | `FamN.qPzT` | func | `(i32 f32) -> ()` |
| 187 | `FamN.DDqd` | func | `(i32 i32) -> ()` |
| 188 | `FamN.cmbV` | func | `(i32 i32) -> ()` |
| 189 | `FamN.wsBJ` | func | `(i32) -> (i32)` |
| 190 | `FamN.xR9j` | func | `(i32) -> (i32)` |
| 191 | `FamN.G818` | func | `(i32) -> (i32)` |
| 192 | `FamN.Q8UW` | func | `(i32) -> (i32)` |
| 193 | `FamN.g1Js` | func | `(i32 i32 i32) -> ()` |
| 194 | `FamN.YrdS` | func | `(i32 i32 i32) -> ()` |
| 195 | `FamN.TKS0` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 196 | `FamN.GHSY` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 197 | `FamN.KMa5` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 198 | `FamN.yBAT` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 199 | `FamN.cJIG` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 200 | `FamN.yaL0` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 201 | `FamN.FG8y` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 202 | `FamN.rXwg` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 203 | `FamN.YEUp` | func | `(i32) -> (i32)` |
| 204 | `FamN.zhYv` | func | `(i32) -> (i32)` |
| 205 | `FamN.NhPH` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 206 | `FamN.RT67` | func | `(i32 i32 i32 i32) -> ()` |
| 207 | `FamN.zyk9` | func | `(i32 i32 i32 i32) -> ()` |
| 208 | `FamN.nBE1` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 209 | `FamN.STB5` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 210 | `FamN.vr2Z` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 211 | `FamN.CEci` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 212 | `FamN.vbWf` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 213 | `FamN.Ppze` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 214 | `FamN.opDS` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 215 | `FamN.tuqT` | func | `(i32 i32 i32) -> ()` |
| 216 | `FamN.YSrG` | func | `(i32 i32 i32) -> ()` |
| 217 | `FamN.c4uu` | func | `(i32 i32) -> ()` |
| 218 | `FamN.WJB3` | func | `(i32 i32) -> ()` |
| 219 | `FamN.Q7JO` | func | `(i32 i32) -> ()` |
| 220 | `FamN.vtt0` | func | `(i32 i32) -> ()` |
| 221 | `FamN.odt0` | func | `(i32 i32) -> ()` |
| 222 | `FamN.jdqH` | func | `(i32 i32) -> ()` |
| 223 | `FamN.MQMY` | func | `(i32 f32 f32) -> ()` |
| 224 | `FamN.YkXt` | func | `(i32 f32 f32) -> ()` |
| 225 | `FamN.vTvX` | func | `(i32 i32) -> ()` |
| 226 | `FamN.rBti` | func | `(i32 i32) -> ()` |
| 227 | `FamN.FCJd` | func | `(i32 i32 i32 f32) -> ()` |
| 228 | `FamN.Gdad` | func | `(i32 i32 i32 f32) -> ()` |
| 229 | `FamN.L3PS` | func | `(i32 i32 i32) -> ()` |
| 230 | `FamN.SOYP` | func | `(i32) -> (i32)` |
| 231 | `FamN.SI5u` | func | `(i32) -> (i32)` |
| 232 | `FamN.v3C3` | func | `(i32 i32) -> ()` |
| 233 | `FamN.aCLY` | func | `(i32 i32) -> ()` |
| 234 | `FamN.u5cb` | func | `(i32 i32 i32 i32) -> (i32)` |
| 235 | `FamN.TumP` | func | `(i32 i32 i32 i32) -> ()` |
| 236 | `FamN.cd2O` | func | `(i32 i32 i32 i32) -> (i32)` |
| 237 | `FamN.cdzm` | func | `(i32 i32 i32 i32) -> (i32)` |
| 238 | `FamN.RthZ` | func | `(i32 i32 i32 i32) -> (i32)` |
| 239 | `FamN.vwMn` | func | `(i32 i32 i32) -> ()` |
| 240 | `FamN.IuNK` | func | `(i32 i32 i32) -> ()` |
| 241 | `FamN.zfQf` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 242 | `FamN.RvyJ` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 243 | `FamN.OAs0` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 244 | `FamN.ExzZ` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 245 | `FamN.E1gE` | func | `(i32) -> (i32)` |
| 246 | `FamN.ASUp` | func | `(i32) -> (i32)` |
| 247 | `FamN.DfTp` | func | `(i32 i32 i32 i32) -> ()` |
| 248 | `FamN.cwBV` | func | `(i32 i32) -> ()` |
| 249 | `FamN.jYQN` | func | `(i32 i32) -> ()` |
| 250 | `FamN.Jckx` | func | `(i32 i32) -> (i32)` |
| 251 | `FamN.AnBg` | func | `(i32 i32) -> (i32)` |
| 252 | `FamN.CJs5` | func | `(i32 i32 i32 i32) -> ()` |
| 253 | `FamN.jyFK` | func | `(i32 i32 i32 i32) -> ()` |
| 254 | `FamN.gIAA` | func | `(i32 i32) -> ()` |
| 255 | `FamN.ItHj` | func | `(i32 i32) -> ()` |
| 256 | `FamN.gbLQ` | func | `(i32) -> (i32)` |
| 257 | `FamN.iEFc` | func | `(i32 i32 i32 i32) -> ()` |
| 258 | `FamN.yBLK` | func | `(i32 i32 i32 f32) -> ()` |
| 259 | `FamN.zVtQ` | func | `(i32) -> ()` |
| 260 | `FamN.iDRo` | func | `(i32 i32) -> ()` |
| 261 | `FamN.jvBM` | func | `(i32 i32) -> ()` |
| 262 | `FamN.nutA` | func | `(i32 i32) -> ()` |
| 263 | `FamN.SjQd` | func | `(i32 i32) -> ()` |
| 264 | `FamN.ZLrQ` | func | `(i32 i32) -> ()` |
| 265 | `FamN.pfIk` | func | `(i32 i32) -> ()` |
| 266 | `FamN.VINy` | func | `(i32 i32) -> ()` |
| 267 | `FamN.PdXW` | func | `(i32 i32) -> ()` |
| 268 | `FamN.Gt6w` | func | `(i32) -> (i32)` |
| 269 | `FamN.r1gj` | func | `(i32) -> (i32)` |
| 270 | `FamN.quMH` | func | `(i32) -> (i32)` |
| 271 | `FamN.b6Vs` | func | `(i32) -> (i32)` |
| 272 | `FamN.prDq` | func | `(i32 i32 i32 i32) -> ()` |
| 273 | `FamN.aQ5s` | func | `(i32) -> ()` |
| 274 | `FamN.jlmw` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 275 | `FamN.ZfT4` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 276 | `FamN.wJIM` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 277 | `FamN.i4hz` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 278 | `FamN.hhWT` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 279 | `FamN.mZ2r` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 280 | `FamN.Gl8j` | func | `(i32) -> (i32)` |
| 281 | `FamN.XVsv` | func | `(i32) -> (i32)` |
| 282 | `FamN.fGMI` | func | `(i32) -> (i32)` |
| 283 | `FamN.btQX` | func | `(i32) -> (i32)` |
| 284 | `FamN.g4Tc` | func | `(i32 i32) -> ()` |
| 285 | `FamN.OQ2f` | func | `(i32) -> ()` |
| 286 | `FamN.jEfg` | func | `(i32 i32) -> ()` |
| 287 | `FamN.zl9b` | func | `(i32) -> (i32)` |
| 288 | `FamN.eBg2` | func | `(i32 i32) -> (i32)` |
| 289 | `FamN.kTYM` | func | `(i32 i32) -> (i32)` |
| 290 | `FamN.UXCe` | func | `(i32 i32) -> (i32)` |
| 291 | `FamN.gXSp` | func | `(f64) -> (i32)` |
| 292 | `FamN.sIsI` | func | `(i32 i32) -> (i32)` |
| 293 | `FamN.qQxO` | func | `(i32 i32) -> (i32)` |
| 294 | `FamN.qRn3` | func | `(i32 i32) -> (i32)` |
| 295 | `FamN.hmL1` | func | `(i32 i32) -> (i32)` |
| 296 | `FamN.Nwzw` | func | `(i32 i32) -> (i32)` |
| 297 | `FamN.W93m` | func | `(i32 i32) -> (i32)` |
| 298 | `FamN.T7rg` | func | `(i32 i32) -> (i32)` |

## Exports

156 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `dRxg` | func | 3000 | `(i32 i32) -> (i32 i32)` |
| `GuI0` | func | 1384 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `LCnC` | func | 2967 | `(i32 i32 i32 i32) -> (i32)` |
| `vikK` | func | 2787 | `(i32) -> (i32)` |
| `B8mh` | func | 1851 | `(i32 i32 f64 f64 f64) -> ()` |
| `snMB` | func | 1926 | `(i32) -> (i32)` |
| `lRZQ` | func | 2467 | `(i32) -> (i32)` |
| `crL5` | func | 2175 | `(i32 i32) -> (i32)` |
| `V838` | func | 3117 | `(i32 i32 i32) -> ()` |
| `wP64` | func | 3164 | `() -> (f64)` |
| `JmdG` | func | 2481 | `(i32) -> (i32)` |
| `nGSI` | func | 810 | `(i32 i32) -> (i32)` |
| `oAyO` | func | 1109 | `(i32 i32) -> (i32)` |
| `zuMc` | func | 2403 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `nP8X` | func | 743 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `Batg` | func | 1508 | `(i32 i32) -> (i32)` |
| `ma6s` | func | 3016 | `(i32) -> (i32 i32)` |
| `VX20` | func | 1858 | `(i32 i32) -> ()` |
| `ELe8` | func | 1237 | `(i32 i32) -> (i32)` |
| `F3bs` | func | 3012 | `(i32) -> (i32 i32)` |
| `vEcI` | func | 2497 | `(i32) -> (i32)` |
| `tq7w` | func | 1883 | `(i32) -> ()` |
| `g2N1` | func | 2459 | `(i32) -> (i32)` |
| `PU7O` | func | 1170 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `FirR` | func | 2330 | `(i32 i32) -> (i32)` |
| `njgv` | func | 1484 | `(i32 i32) -> (i32)` |
| `qPcn` | func | 2498 | `(i32) -> (i32)` |
| `bc7i` | func | 1978 | `(i32 i32) -> ()` |
| `Tj38` | func | 3002 | `(i32 i32) -> (i32 i32)` |
| `itPf` | func | 1875 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `GuNt` | func | 2458 | `(i32) -> (f64)` |
| `VIwq` | func | 3123 | `(i32) -> ()` |
| `TtDj` | func | 3013 | `(i32) -> (i32 i32)` |
| `G3tK` | func | 2974 | `(i32 i32) -> ()` |
| `mjrG` | func | 1283 | `(i32) -> (i32)` |
| `Je9k` | func | 2537 | `(i32 i32) -> ()` |
| `SHoZ` | func | 1290 | `(i32 i32) -> (i32)` |
| `OZ9o` | func | 3062 | `(i32 i32) -> ()` |
| `a7Yu` | func | 2942 | `() -> ()` |
| `SBlD` | func | 1831 | `(i32 i32 i32 i32) -> (i32)` |
| `I7Kf` | func | 1478 | `(i32) -> (i32)` |
| `K0I6` | func | 568 | `(i32 i32 i32) -> (i32)` |
| `Xphx` | func | 3052 | `(i32 i32 i32 i32) -> ()` |
| `orTb` | func | 1739 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `V8gR` | func | 2549 | `() -> (i32)` |
| `mELz` | func | 1477 | `(i32 i32 i32 i32) -> (i32)` |
| `AG7k` | func | 3027 | `() -> (i32 i32)` |
| `Gm8H` | func | 3124 | `() -> ()` |
| `Ouut` | func | 1582 | `(i32 i32) -> ()` |
| `SZzA` | func | 2020 | `(i32 f64 f64 f64) -> (i32)` |
| `UMQb` | func | 2776 | `(i32) -> (i32)` |
| `qBvt` | func | 1209 | `(i32 i32 i32 i32) -> (i32)` |
| `NDeW` | func | 2468 | `(i32) -> (i32)` |
| `fQdA` | func | 2466 | `(i32) -> (i32)` |
| `Uf93` | func | 1432 | `() -> (i32)` |
| `Jw5E` | func | 2444 | `(i32 i32) -> ()` |
| `foqH` | func | 669 | `(i32 i32) -> (i32)` |
| `iCzA` | func | 3169 | `(i32) -> ()` |
| `ziYC` | func | 1694 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `X2jy` | func | 759 | `(i32 i32 i32) -> (i32)` |
| `fzAP` | func | 2460 | `(i32) -> (i32)` |
| `lZn2` | func | 2489 | `(i32 i32) -> (i32)` |
| `iruq` | func | 2479 | `(i32) -> (i32)` |
| `memory` | memory | 0 | `` |
| `cCZt` | func | 2461 | `(i32) -> (i32)` |
| `jAJj` | func | 3001 | `(i32 i32) -> (i32 i32)` |
| `H9Tt` | func | 2417 | `(i32) -> (i32)` |
| `M56b` | global | 2 | `` |
| `gbFC` | func | 2329 | `(i32 i32) -> (i32)` |
| `bciw` | func | 1454 | `(i32 i32 i32 i32) -> ()` |
| `cTw7` | func | 3168 | `(i32) -> (i32)` |
| `z81s` | func | 2465 | `(i32) -> ()` |
| `SQtx` | func | 1717 | `(i32) -> (i32)` |
| `KBx9` | func | 2250 | `(i32 f64) -> (i32)` |
| `XCcZ` | func | 2490 | `(i32 i32) -> (i32)` |
| `yrCd` | func | 2464 | `(i32) -> (i32)` |
| `fjUs` | func | 2249 | `(i32 i32) -> ()` |
| `cxNL` | func | 2361 | `(i32 i32) -> (i32)` |
| `SRBs` | func | 3193 | `() -> (i32)` |
| `nvC1` | func | 735 | `(i32 i32 i32 i32) -> (i32)` |
| `dhke` | func | 2584 | `() -> (i32)` |
| `xm5h` | func | 907 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `iQ7k` | func | 1404 | `(i32 i32) -> (i32)` |
| `okNK` | func | 1733 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `chXK` | func | 1215 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `nooV` | func | 2463 | `(i32) -> (i32)` |
| `lOKP` | func | 889 | `(i32 i32) -> (i32)` |
| `pI9P` | func | 2445 | `(i32) -> (i32)` |
| `iSvI` | func | 737 | `(i32) -> (i32)` |
| `JJh1` | func | 2998 | `(i32 i32) -> (i32 i32)` |
| `z1qh` | func | 2478 | `(i32) -> (i32)` |
| `DIzm` | func | 2476 | `(i32 i32) -> ()` |
| `FWXs` | func | 618 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `bWaA` | func | 1385 | `(i32 f64 f64) -> (i32)` |
| `VN9K` | func | 1587 | `(i32 f64 f64 f64) -> (i32)` |
| `SoOd` | func | 1497 | `(i32 i32) -> (i32)` |
| `d2pL` | func | 2488 | `(i32) -> (i32)` |
| `Z2bF` | func | 1509 | `(i32 i32) -> (i32)` |
| `yFte` | func | 1557 | `(i32) -> (i32)` |
| `ZY5s` | func | 1943 | `(i32) -> (i32)` |
| `Ac3N` | func | 1524 | `(i32 i32 i32) -> (i32)` |
| `ne6W` | func | 888 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `psjV` | func | 2999 | `(i32 i32) -> (i32 i32)` |
| `vr4i` | func | 2762 | `(i32) -> (i32)` |
| `TlB2` | func | 3014 | `(i32) -> (i32 i32)` |
| `ZMsM` | func | 2400 | `(i32) -> (i32)` |
| `Tcus` | func | 2992 | `(i32 i32 i32) -> (i32 i32)` |
| `TOpi` | func | 1110 | `(i32 i32) -> ()` |
| `nYfp` | func | 1428 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `bVKz` | func | 2061 | `(i32 i32) -> (i32)` |
| `ZgfL` | func | 1583 | `(i32 i32) -> ()` |
| `cC28` | func | 1751 | `(i32 i32) -> (i32)` |
| `dUWB` | func | 2820 | `(i32) -> (i32)` |
| `HFCa` | func | 1572 | `(i32 i32) -> (i32)` |
| `O7W5` | func | 2798 | `(i32) -> ()` |
| `cnh6` | func | 3061 | `(i32 i32 i32) -> ()` |
| `lYS7` | func | 2499 | `(i32) -> (i32)` |
| `PYTN` | func | 3192 | `() -> (i32)` |
| `hhuO` | func | 2755 | `(i32) -> (i32)` |
| `lrGG` | func | 2195 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `rKxA` | func | 2373 | `(i32 i32 i32 i32) -> (i32)` |
| `PEqv` | func | 1627 | `(i32 i32 i32 i32) -> (i32)` |
| `xBxa` | func | 3090 | `() -> (i32)` |
| `z3Jt` | func | 1208 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `IjsN` | func | 2993 | `(i32 i32 i32) -> (i32 i32)` |
| `YMuP` | func | 706 | `(i32 i32) -> (i32)` |
| `NHHA` | func | 3003 | `(i32 i32) -> (i32 i32)` |
| `E8ST` | func | 1474 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `UW5j` | func | 2039 | `(i32 i32) -> ()` |
| `M132` | func | 2332 | `(i32 i32) -> (i32)` |
| `lptV` | func | 1331 | `(i32 i32 i32) -> (i32)` |
| `tm9h` | global | 1 | `` |
| `RD3Q` | func | 1868 | `(i32 i32) -> (i32)` |
| `lzbu` | func | 2143 | `(i32 i32) -> (i32)` |
| `ba03` | func | 918 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `D8OT` | func | 1816 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `sSL5` | func | 1884 | `(i32) -> ()` |
| `jWgx` | func | 2462 | `(i32) -> (i32)` |
| `vyAP` | func | 1810 | `() -> (i32)` |
| `daz8` | func | 2004 | `(i32 f64) -> (i32)` |
| `CLiK` | func | 2583 | `(i32 i32) -> ()` |
| `Fxog` | func | 1511 | `(i32 f64) -> (f64)` |
| `zL6z` | func | 1945 | `(i32 i32 i32 i32) -> ()` |
| `lrL5` | func | 1316 | `(i32) -> ()` |
| `oujw` | func | 2331 | `(i32 i32) -> (i32)` |
| `PC9M` | func | 1264 | `(i32 i32 i32) -> ()` |
| `oKSH` | func | 1257 | `(i32 i32 i32) -> (i32)` |
| `OTcc` | func | 679 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `drTV` | func | 2961 | `(i32 i32) -> (i32)` |
| `vEUC` | func | 2280 | `(i32 i32) -> ()` |
| `rSCs` | func | 1469 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `sjga` | func | 3015 | `(i32) -> (i32 i32)` |
| `jyci` | func | 1544 | `(i32 i32 i32 i32) -> (i32)` |
| `N8yq` | func | 3004 | `(i32 i32) -> (i32 i32)` |
| `PPML` | func | 2480 | `(i32 i32) -> ()` |
| `fi5d` | func | 3028 | `() -> (i32 i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 753 · max 753
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2637440, `i32` = i32.const 2638020

## Functions

- 2,905 bodies · 4,029,494 code bytes · avg 1.4 KB
- instruction scan: 2,905 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 156 |
| <= 64 bytes | 113 |
| <= 128 bytes | 258 |
| <= 256 bytes | 375 |
| <= 512 bytes | 672 |
| <= 1024 bytes | 572 |
| <= 2048 bytes | 421 |
| <= 4096 bytes | 183 |
| <= 8192 bytes | 90 |
| <= 16384 bytes | 31 |
| > 16384 bytes | 34 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32) -> ()` | 213 | 194,493 | 88,290 | local.get×25879, i32.const×9902, i32.load×5634, local.set×4730, local.tee×4634 |
| 1 | `(i32 i32 i32 i32 i32) -> ()` | 147 | 112,325 | 54,451 | local.get×15156, i32.const×6534, i32.add×3194, local.set×3087, i32.load×2951 |
| 2 | `(i32 i32 i32 i32 i32 i32) -> ()` | 130 | 46,544 | 21,400 | local.get×6231, i32.const×2827, local.set×1224, i32.add×1128, i32.load×1019 |
| 3 | `(i32 i32) -> ()` | 125 | 48,862 | 22,528 | local.get×6337, i32.const×2249, local.set×1324, local.tee×1179, i32.load×1037 |
| 4 | `(i32 i32) -> ()` | 59 | 29,655 | 14,267 | local.get×4192, i32.const×1730, i32.load×1042, local.set×931, i32.add×815 |
| 5 | `(i32 i32) -> ()` | 90 | 26,044 | 12,563 | local.get×3702, i32.const×1379, local.set×779, i32.load×721, local.tee×698 |
| 6 | `(i32 i32 i32 i32 i32) -> ()` | 135 | 32,562 | 16,141 | local.get×4566, i32.const×2205, local.set×1141, i32.add×1062, local.tee×800 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 58 | 21,485 | 10,526 | local.get×2903, i32.const×1490, local.set×728, i32.add×591, local.tee×504 |
| 8 | `(i32 i32) -> ()` | 93 | 19,080 | 9,200 | local.get×2643, i32.const×1025, local.tee×571, local.set×554, i32.load×531 |
| 9 | `(i32 i32 i32 i32) -> ()` | 105 | 26,546 | 12,837 | local.get×3810, i32.const×1624, local.set×997, i32.add×682, i32.load×663 |
| 10 | `(i32 i32 i32 i32) -> ()` | 53 | 24,505 | 11,634 | local.get×3005, i32.const×1276, local.tee×731, end×592, i32.load×586 |
| 11 | `(i32 i32 i32) -> (i32)` | 76 | 22,943 | 10,770 | local.get×2875, i32.const×1237, i32.load×806, local.set×500, end×464 |
| 12 | `(i32 i32 i32) -> (i32)` | 77 | 18,924 | 8,934 | local.get×2485, i32.const×1224, i32.load×559, i32.add×543, local.set×525 |
| 13 | `(i32 i32 i32 i32 i32 i32) -> ()` | 126 | 19,829 | 8,878 | local.get×2493, i32.const×1113, local.set×430, local.tee×385, i32.load×382 |
| 16 | `(i32 i32) -> ()` | 96 | 31,835 | 14,861 | local.get×4482, i32.const×1910, i32.add×763, local.set×692, i32.load×669 |
| 17 | `(i32) -> ()` | 78 | 20,163 | 9,380 | local.get×2603, i32.const×1119, i32.add×574, local.tee×510, local.set×502 |
| 23 | `(i32 i32) -> ()` | 82 | 29,024 | 13,043 | local.get×4618, i32.const×1456, i32.store×702, i32.add×689, local.tee×645 |
| 24 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 64 | 24,289 | 11,198 | local.get×2682, i32.const×1711, local.set×821, end×663, block×465 |
| 27 | `(i32 i32 i32 i32 i32) -> ()` | 68 | 22,714 | 10,576 | local.get×3337, i32.const×1240, local.tee×731, i32.add×436, local.set×333 |
| 33 | `(i32 i32 i32 i32 i32) -> ()` | 65 | 18,015 | 8,704 | local.get×2378, i32.const×1095, local.set×628, local.tee×459, i32.add×442 |
| 63 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 99 | 32,154 | 15,014 | local.get×4317, i32.const×1963, i32.load×986, local.set×902, i32.add×812 |
| 195 | `(i32 i32) -> ()` | 10 | 26,597 | 12,807 | local.get×4506, i32.load×1211, i32.const×1022, end×797, i32.add×734 |
| 226 | `(i32) -> ()` | 19 | 23,160 | 10,851 | local.get×2722, i32.load×1494, i32.const×1177, local.tee×1008, end×853 |
| 717 | `(i32 i32 i32 i32) -> ()` | 54 | 21,810 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 1005 | `(i32 i32) -> ()` | 138 | 42,517 | 20,065 | local.get×5230, i32.const×2314, local.tee×1187, i32.add×1060, local.set×1007 |
| 1569 | `(i32 i32) -> (i32)` | 180 | 54,455 | 19,757 | local.get×6549, i32.const×2619, i64.store×1893, i64.const×1069, i64.load×1044 |
| 1970 | `(i32 i32) -> ()` | 110 | 38,696 | 17,216 | local.get×5028, i32.const×1620, local.set×859, local.tee×753, end×661 |
| 2578 | `(i32 i32) -> ()` | 397 | 142,149 | 64,171 | local.get×18429, i32.const×8004, local.set×3839, i32.load×3164, end×2815 |
| 2856 | `(i32 i32 i32 i32) -> ()` | 137 | 30,443 | 13,878 | local.get×4157, i32.const×1460, local.tee×728, local.set×674, i32.load×609 |
| 2874 | `(i32 i32) -> ()` | 136 | 33,882 | 15,183 | local.get×4267, i32.const×2015, local.set×798, local.tee×742, i32.add×699 |

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
| `local.get` | 538,560 |
| `i32.const` | 225,685 |
| `local.tee` | 100,179 |
| `i32.load` | 94,458 |
| `local.set` | 93,808 |
| `i32.add` | 87,186 |
| `end` | 79,125 |
| `br_if` | 64,224 |
| `i32.store` | 46,741 |
| `block` | 37,204 |
| `i64.const` | 32,597 |
| `i64.store` | 31,712 |
| `if` | 30,231 |
| `call` | 29,411 |
| `i32.sub` | 24,620 |
| `i64.load` | 23,609 |
| `br` | 23,098 |
| `i32.eqz` | 19,510 |
| `select` | 16,875 |
| `i32.shl` | 16,440 |
| `i32.and` | 16,290 |
| `i32.ne` | 15,841 |
| `i32.load8_u` | 14,941 |
| `i32.eq` | 13,846 |
| `i32.store8` | 12,611 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 2,905/2,905 (degraded: 0)
