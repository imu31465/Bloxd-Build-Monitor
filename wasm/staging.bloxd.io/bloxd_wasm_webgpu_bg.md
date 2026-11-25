# WASM module: `bloxd_wasm_webgpu_bg`

> environment **staging.bloxd.io** · build `dz8ef.98c5e741` · analyzed 2026-11-25T13:06:26+09:00
> source: https://staging.bloxd.io/static/media/bloxd_wasm_webgpu_bg.34666fb11574b23e6faa.wasm
> 5,137,010 bytes (4.9 MB) · sha256 `c94f0ae845af7c64…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- size 5,136,982 → 5,137,010 bytes (+28)
- data bytes 1,040,142 → 1,040,170
- name-section module id `09ad1eaa8ce165c2.12285` → `050642c9951f3c7e.12285` (numeric version suffix unchanged — same module version, re-randomized prefix)
- export identifiers rotated by the obfuscator: 1/160 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,950 / 393 |
| Exports / imports | 160 / 394 |
| Code bytes (function bodies) | 4,050,463 (3.9 MB) |
| Total local variables | 30,817 |
| Instructions (scanable bodies) | 1,895,604 |
| Data segments / bytes | 3,545 / 1,040,170 |
| Element segments / entries | 1 / 838 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `050642c9951f3c7e.12285` |
| Sections | 11 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,518 | 177 |
| 2 | import | 4,734 | 394 |
| 3 | function | 3,001 | 2950 |
| 4 | table | 7 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,281 | 160 |
| 9 | element | 1,683 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 4,055,842 | 2950 |
| 11 | data | 1,068,847 | 3545 |
| 0 | custom:name | 30 | — |

## Types

177 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

394 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `T7jl.QsMV` | memory | `[128..14648]` |
| 0 | `T7jl.Sgbb` | func | `(i32) -> (i32)` |
| 1 | `T7jl.HpnL` | func | `(i32) -> (f64)` |
| 2 | `T7jl.Amyz` | func | `() -> (i32)` |
| 3 | `T7jl.qR6q` | func | `(i32 i32 i32) -> (i32)` |
| 4 | `T7jl.ECE4` | func | `(i32) -> ()` |
| 5 | `T7jl.IVN4` | func | `(i32 i32) -> (i32)` |
| 6 | `T7jl.RwP5` | func | `(i32) -> (i32)` |
| 7 | `T7jl.a7XH` | func | `(i32 i32 i32) -> (i32)` |
| 8 | `T7jl.a8rq` | func | `(i32 i32 i32 i32) -> (i32)` |
| 9 | `T7jl.XZRz` | func | `(i32) -> (i32)` |
| 10 | `T7jl.D00j` | func | `(i32 i32) -> ()` |
| 11 | `T7jl.gOXT` | func | `(i32 i32) -> ()` |
| 12 | `T7jl.GqUq` | func | `(i32 i32 i32 i32) -> (i32)` |
| 13 | `T7jl.EmU4` | func | `(i32 i32) -> (i32)` |
| 14 | `T7jl.ythu` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 15 | `T7jl.GdhB` | func | `(i32) -> (i32)` |
| 16 | `T7jl.l5Ft` | func | `(i32 i32) -> (i32)` |
| 17 | `T7jl.OJ8L` | func | `(i32 i32) -> (i32)` |
| 18 | `T7jl.KmmT` | func | `(i32 i32) -> ()` |
| 19 | `T7jl.pQTT` | func | `(i32) -> (i32)` |
| 20 | `T7jl.jymV` | func | `(i32) -> (i32)` |
| 21 | `T7jl.JZlI` | func | `(i32 i32 i32) -> ()` |
| 22 | `T7jl.X3q2` | func | `(i32 i32 i32) -> (i32)` |
| 23 | `T7jl.LeME` | func | `(i32) -> (i32)` |
| 24 | `T7jl.iKVV` | func | `(i32) -> (i32)` |
| 25 | `T7jl.PYmI` | func | `(i32 i32) -> ()` |
| 26 | `T7jl.kzFC` | func | `(i32 i32) -> (i32)` |
| 27 | `T7jl.ZRoS` | func | `(i32 i32 i32 i32) -> ()` |
| 28 | `T7jl.lpzg` | func | `(i32) -> (i32)` |
| 29 | `T7jl.Szcl` | func | `(i32) -> (i32)` |
| 30 | `T7jl.PZZH` | func | `(i32) -> (i32)` |
| 31 | `T7jl.m177` | func | `(i32) -> (i32)` |
| 32 | `T7jl.klE9` | func | `(i32) -> (i32)` |
| 33 | `T7jl.ZRds` | func | `(i32 i32 i32) -> ()` |
| 34 | `T7jl.t00h` | func | `(i32 i32) -> (i32)` |
| 35 | `T7jl.a4Cj` | func | `(i32) -> (i32)` |
| 36 | `T7jl.XOOe` | func | `(i32) -> ()` |
| 37 | `T7jl.run9` | func | `(i32) -> (i32)` |
| 38 | `T7jl.PrOX` | func | `(i32) -> (i32)` |
| 39 | `T7jl.vft5` | func | `(i32) -> ()` |
| 40 | `T7jl.S46e` | func | `(i32 i32) -> (i32)` |
| 41 | `T7jl.eTEz` | func | `(i32 i32 i32) -> (i32)` |
| 42 | `T7jl.cLzN` | func | `(i32) -> ()` |
| 43 | `T7jl.CTUJ` | func | `(i32 i32) -> ()` |
| 44 | `T7jl.C81D` | func | `() -> (i32)` |
| 45 | `T7jl.HMBS` | func | `(i32 i32) -> (i32)` |
| 46 | `T7jl.XBgi` | func | `(i32 i32) -> (i32)` |
| 47 | `T7jl.qO0H` | func | `(i32) -> (i32)` |
| 48 | `T7jl.AzUO` | func | `(i32) -> (i32)` |
| 49 | `T7jl.rxpu` | func | `(i32) -> (i32)` |
| 50 | `T7jl.UyU2` | func | `(i32 i32) -> ()` |
| 51 | `T7jl.qXG8` | func | `(i32) -> (i32)` |
| 52 | `T7jl.HMsQ` | func | `(i32) -> ()` |
| 53 | `T7jl.HENu` | func | `(i32 i32) -> (i32)` |
| 54 | `T7jl.yRi4` | func | `(i32 i32 i32) -> (i32)` |
| 55 | `T7jl.TJz8` | func | `(i32) -> (i32)` |
| 56 | `T7jl.SXTC` | func | `(i32 i32 i32) -> ()` |
| 57 | `T7jl.SGE2` | func | `(i32 i32) -> ()` |
| 58 | `T7jl.hiyv` | func | `(i32) -> (i32)` |
| 59 | `T7jl.f98O` | func | `(i32 i32 f64 i32 i32 f64 f64) -> ()` |
| 60 | `T7jl.yccC` | func | `(i32) -> ()` |
| 61 | `T7jl.EIkY` | func | `(i32 i32 f64 i32 f64 f64) -> ()` |
| 62 | `T7jl.iGSJ` | func | `(i32) -> ()` |
| 63 | `T7jl.G7UQ` | func | `(i32 i32 i32) -> ()` |
| 64 | `T7jl.ruE4` | func | `(i32 i32) -> ()` |
| 65 | `T7jl.gffZ` | func | `(i32 i32 i32 i32 i32 f64 i32) -> ()` |
| 66 | `T7jl.K9mI` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 67 | `T7jl.dOFW` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 68 | `T7jl.uiOm` | func | `(i32 i32 f64) -> ()` |
| 69 | `T7jl.Mq3r` | func | `(i32) -> (i32)` |
| 70 | `T7jl.wzU9` | func | `(i32 i32) -> ()` |
| 71 | `T7jl.RYiO` | func | `(i32 i32 i32) -> ()` |
| 72 | `T7jl.ZXY8` | func | `(i32 i32 i32 i32) -> ()` |
| 73 | `T7jl.vr6n` | func | `(i32 i32 i32) -> ()` |
| 74 | `T7jl.N58l` | func | `(i32) -> ()` |
| 75 | `T7jl.TiKU` | func | `(i32 i32) -> ()` |
| 76 | `T7jl.ehkT` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 77 | `T7jl.mTfz` | func | `(i32 f32 f32 f32 f32 f32 f32) -> ()` |
| 78 | `T7jl.gFkX` | func | `(i32 i32 i32) -> ()` |
| 79 | `T7jl.TPmb` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 80 | `T7jl.RjVf` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 81 | `T7jl.zpS2` | func | `(i32 i32 i32 i32 i32 f64 i32) -> ()` |
| 82 | `T7jl.hibJ` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 83 | `T7jl.qXbW` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 84 | `T7jl.xD6r` | func | `(i32 i32 i32) -> ()` |
| 85 | `T7jl.xESf` | func | `(i32 i32) -> (i32)` |
| 86 | `T7jl.NhHe` | func | `(i32) -> (i32)` |
| 87 | `T7jl.QhiB` | func | `(i32) -> (i32)` |
| 88 | `T7jl.bded` | func | `(i32) -> (i32)` |
| 89 | `T7jl.BE9W` | func | `(i32 i32) -> (i32)` |
| 90 | `T7jl.GyTR` | func | `(i32) -> ()` |
| 91 | `T7jl.fAQY` | func | `(i32) -> (i32)` |
| 92 | `T7jl.QhOM` | func | `(i32 i32) -> (i32)` |
| 93 | `T7jl.c1SB` | func | `(i32 i32 i32) -> (i32)` |
| 94 | `T7jl.jl0t` | func | `(i32 i32 i32) -> ()` |
| 95 | `T7jl.J7JG` | func | `(i32 i32 i32 i32) -> (i32)` |
| 96 | `T7jl.gleL` | func | `() -> (f64)` |
| 97 | `T7jl.fogR` | func | `() -> (f64)` |
| 98 | `T7jl.EDH2` | func | `(i32 i32) -> ()` |
| 99 | `T7jl.KSSb` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 100 | `T7jl.DBI7` | func | `(i32) -> (i32)` |
| 101 | `T7jl.o5T6` | func | `(i32) -> (i32)` |
| 102 | `T7jl.wrGf` | func | `(i32) -> (i32)` |
| 103 | `T7jl.yDGs` | func | `() -> (i32)` |
| 104 | `T7jl.ED6p` | func | `() -> (i32)` |
| 105 | `T7jl.LtsK` | func | `() -> (i32)` |
| 106 | `T7jl.y3HE` | func | `() -> (i32)` |
| 107 | `T7jl.dJqb` | func | `(i32 i32) -> (i32)` |
| 108 | `T7jl.L08R` | func | `(i32) -> ()` |
| 109 | `T7jl.pybM` | func | `(i32 i32) -> (i32)` |
| 110 | `T7jl.MCQN` | func | `(i32) -> (i32)` |
| 111 | `T7jl.FgXT` | func | `() -> (f64)` |
| 112 | `T7jl.jF75` | func | `(i32) -> (i32)` |
| 113 | `T7jl.ViJZ` | func | `(i32 i32) -> ()` |
| 114 | `T7jl.gxbT` | func | `(i32 i32) -> ()` |
| 115 | `T7jl.L9NJ` | func | `(i32 i32) -> ()` |
| 116 | `T7jl.DWoH` | func | `(i32 f32) -> ()` |
| 117 | `T7jl.UZkE` | func | `(i32 f32) -> ()` |
| 118 | `T7jl.KMg5` | func | `(i32 i32) -> ()` |
| 119 | `T7jl.jII2` | func | `(i32 i32) -> ()` |
| 120 | `T7jl.x7nF` | func | `(i32 i32) -> ()` |
| 121 | `T7jl.pGS2` | func | `(i32 i32) -> ()` |
| 122 | `T7jl.CDV3` | func | `(i32 i32 i32) -> ()` |
| 123 | `T7jl.T9AA` | func | `(i32 i32) -> (i32)` |
| 124 | `T7jl.Etyo` | func | `(i32 i32) -> ()` |
| 125 | `T7jl.WyLZ` | func | `(i32 i32) -> ()` |
| 126 | `T7jl.Ql5s` | func | `(i32 i32) -> ()` |
| 127 | `T7jl.XqHL` | func | `(i32 i32) -> ()` |
| 128 | `T7jl.VgPz` | func | `(i32 f64) -> ()` |
| 129 | `T7jl.rvea` | func | `(i32 f64) -> ()` |
| 130 | `T7jl.bJYF` | func | `(i32 i32) -> ()` |
| 131 | `T7jl.GWYZ` | func | `(i32 i32 i32) -> ()` |
| 132 | `T7jl.e3XE` | func | `(i32 i32) -> ()` |
| 133 | `T7jl.yNYX` | func | `(i32 i32) -> (i32)` |
| 134 | `T7jl.gcHP` | func | `(i32 i32 i32) -> ()` |
| 135 | `T7jl.B1wX` | func | `(i32 i32 i32) -> ()` |
| 136 | `T7jl.WVH7` | func | `(i32 i32) -> (i32)` |
| 137 | `T7jl.jqa5` | func | `(i32 i32) -> (i32)` |
| 138 | `T7jl.xz4G` | func | `(i32 i32 i32) -> ()` |
| 139 | `T7jl.Y1ds` | func | `(i32 i32 i32) -> ()` |
| 140 | `T7jl.TFpZ` | func | `(i32 i32) -> (i32)` |
| 141 | `T7jl.RRhv` | func | `(i32 i32) -> ()` |
| 142 | `T7jl.vVVA` | func | `(i32 i32) -> ()` |
| 143 | `T7jl.YDh3` | func | `(i32 i32) -> ()` |
| 144 | `T7jl.QfVE` | func | `(i32 i32) -> ()` |
| 145 | `T7jl.P80V` | func | `(i32 i32) -> ()` |
| 146 | `T7jl.jkh4` | func | `(i32 i32) -> ()` |
| 147 | `T7jl.VEh5` | func | `(i32 i32) -> ()` |
| 148 | `T7jl.qAgr` | func | `(i32 f64) -> ()` |
| 149 | `T7jl.Iaks` | func | `(i32 i32) -> ()` |
| 150 | `T7jl.AO64` | func | `(i32 i32) -> ()` |
| 151 | `T7jl.fx31` | func | `(i32 i32) -> ()` |
| 152 | `T7jl.Ksb8` | func | `(i32 i32) -> ()` |
| 153 | `T7jl.FvNt` | func | `(i32 i32) -> ()` |
| 154 | `T7jl.Jqu0` | func | `(i32 i32) -> ()` |
| 155 | `T7jl.Zrsr` | func | `(i32 i32) -> ()` |
| 156 | `T7jl.UCJS` | func | `(i32 i32) -> ()` |
| 157 | `T7jl.Badj` | func | `(i32 i32) -> ()` |
| 158 | `T7jl.gg8B` | func | `(i32 i32 i32) -> ()` |
| 159 | `T7jl.LvkF` | func | `(i32 i32 i32) -> ()` |
| 160 | `T7jl.sFOU` | func | `(i32 i32) -> (i32)` |
| 161 | `T7jl.hEOT` | func | `(i32 i32) -> (i32)` |
| 162 | `T7jl.PnqW` | func | `(i32 i32) -> ()` |
| 163 | `T7jl.BXz4` | func | `(i32 i32) -> ()` |
| 164 | `T7jl.hssl` | func | `(i32 f64) -> ()` |
| 165 | `T7jl.TvgK` | func | `(i32 i32) -> ()` |
| 166 | `T7jl.t6Ak` | func | `(i32 i32) -> ()` |
| 167 | `T7jl.F9e2` | func | `(i32 i32) -> ()` |
| 168 | `T7jl.omVp` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 169 | `T7jl.jJFI` | func | `(i32 f64) -> ()` |
| 170 | `T7jl.o4qj` | func | `(i32 f64) -> ()` |
| 171 | `T7jl.hWs7` | func | `(i32 f64) -> ()` |
| 172 | `T7jl.l6VG` | func | `(i32 f64) -> ()` |
| 173 | `T7jl.qkSg` | func | `(i32 i32) -> ()` |
| 174 | `T7jl.aT2A` | func | `(i32 i32) -> ()` |
| 175 | `T7jl.lUq6` | func | `(i32 i32) -> ()` |
| 176 | `T7jl.GzRr` | func | `(i32 i32) -> ()` |
| 177 | `T7jl.BxqA` | func | `(i32 i32) -> ()` |
| 178 | `T7jl.DMME` | func | `(i32 i32 i32) -> ()` |
| 179 | `T7jl.A0aQ` | func | `(i32 i32) -> ()` |
| 180 | `T7jl.byQV` | func | `(i32 f32) -> ()` |
| 181 | `T7jl.uN0H` | func | `(i32 i32) -> ()` |
| 182 | `T7jl.lDZC` | func | `(i32 i32) -> ()` |
| 183 | `T7jl.J4yC` | func | `(i32 i32) -> ()` |
| 184 | `T7jl.Sjwp` | func | `(i32 i32) -> ()` |
| 185 | `T7jl.HbVg` | func | `(i32 i32) -> ()` |
| 186 | `T7jl.RML2` | func | `(i32 i32) -> ()` |
| 187 | `T7jl.pVtp` | func | `(i32 i32) -> ()` |
| 188 | `T7jl.GS6C` | func | `(i32 i32) -> ()` |
| 189 | `T7jl.CBKk` | func | `(i32 i32) -> ()` |
| 190 | `T7jl.b0hR` | func | `(i32 i32) -> ()` |
| 191 | `T7jl.umGO` | func | `(i32 i32) -> ()` |
| 192 | `T7jl.wnWw` | func | `(i32 i32) -> ()` |
| 193 | `T7jl.IhNi` | func | `(i32 i32) -> (i32)` |
| 194 | `T7jl.nyff` | func | `(i32 i32 i32 i32) -> ()` |
| 195 | `T7jl.XcWG` | func | `(i32 i32) -> ()` |
| 196 | `T7jl.qQPZ` | func | `(i32 i32 i32) -> ()` |
| 197 | `T7jl.Hql5` | func | `(i32 i32) -> (i32)` |
| 198 | `T7jl.KC52` | func | `(i32) -> (i32)` |
| 199 | `T7jl.i1NO` | func | `(i32 i32) -> ()` |
| 200 | `T7jl.FB2F` | func | `(i32 i32) -> ()` |
| 201 | `T7jl.Mnpb` | func | `(i32 i32) -> ()` |
| 202 | `T7jl.sUn9` | func | `(i32 i32) -> ()` |
| 203 | `T7jl.irPE` | func | `(i32 i32) -> ()` |
| 204 | `T7jl.lLWT` | func | `(i32 i32) -> ()` |
| 205 | `T7jl.G7yc` | func | `(i32 i32) -> ()` |
| 206 | `T7jl.IcP4` | func | `(i32 i32) -> ()` |
| 207 | `T7jl.rZFC` | func | `(i32) -> (i32)` |
| 208 | `T7jl.A9E3` | func | `(i32 i32 i32) -> ()` |
| 209 | `T7jl.mbz1` | func | `(i32 i32) -> ()` |
| 210 | `T7jl.agnv` | func | `(i32 i32 i32 i32) -> ()` |
| 211 | `T7jl.EFhe` | func | `(i32 i32) -> ()` |
| 212 | `T7jl.vESB` | func | `(i32) -> ()` |
| 213 | `T7jl.Ikiy` | func | `(i32 i32) -> ()` |
| 214 | `T7jl.rqQp` | func | `(i32) -> (i32)` |
| 215 | `T7jl.Fm2Y` | func | `(i32 i32 i32) -> ()` |
| 216 | `T7jl.gXHk` | func | `(i32 i32) -> ()` |
| 217 | `T7jl.JrFO` | func | `(i32 i32) -> ()` |
| 218 | `T7jl.lsYj` | func | `(i32 i32) -> ()` |
| 219 | `T7jl.ST12` | func | `(i32 i32) -> ()` |
| 220 | `T7jl.MHHm` | func | `(i32 i32) -> (i32)` |
| 221 | `T7jl.ewJF` | func | `(i32 i32) -> ()` |
| 222 | `T7jl.Acv2` | func | `(i32 i32) -> ()` |
| 223 | `T7jl.rtNS` | func | `(i32 i32) -> ()` |
| 224 | `T7jl.OvKv` | func | `(i32 i32) -> ()` |
| 225 | `T7jl.Clc3` | func | `(i32 i32) -> ()` |
| 226 | `T7jl.ifVq` | func | `(i32 i32) -> ()` |
| 227 | `T7jl.erHj` | func | `(i32 i32) -> ()` |
| 228 | `T7jl.Gkod` | func | `(i32 i32 f64 f64) -> (i32)` |
| 229 | `T7jl.l17K` | func | `(i32) -> (i32)` |
| 230 | `T7jl.RaHj` | func | `(i32) -> ()` |
| 231 | `T7jl.co8w` | func | `(i32 f64) -> ()` |
| 232 | `T7jl.AWNa` | func | `(i32 i32) -> ()` |
| 233 | `T7jl.mMdj` | func | `(i32 i32) -> ()` |
| 234 | `T7jl.f1iK` | func | `(i32 i32 i32) -> ()` |
| 235 | `T7jl.gUiG` | func | `(i32 i32) -> (i32)` |
| 236 | `T7jl.gCac` | func | `(i32 i32) -> ()` |
| 237 | `T7jl.jl4u` | func | `(i32 i32) -> ()` |
| 238 | `T7jl.AvoF` | func | `(i32 i32) -> ()` |
| 239 | `T7jl.vBI2` | func | `(i32 i32 i32) -> ()` |
| 240 | `T7jl.Ng2D` | func | `(i32 i32) -> ()` |
| 241 | `T7jl.WrK2` | func | `(i32 i32) -> ()` |
| 242 | `T7jl.psam` | func | `(i32 i32) -> ()` |
| 243 | `T7jl.zkLz` | func | `(i32 i32 i32) -> ()` |
| 244 | `T7jl.GYd6` | func | `(i32 i32) -> ()` |
| 245 | `T7jl.hdCc` | func | `(i32 i32) -> ()` |
| 246 | `T7jl.vGde` | func | `(i32 i32 i32) -> ()` |
| 247 | `T7jl.Aysx` | func | `(i32 i32) -> (i32)` |
| 248 | `T7jl.nhn9` | func | `(i32 i32) -> ()` |
| 249 | `T7jl.PGK1` | func | `(i32 i32 i32) -> ()` |
| 250 | `T7jl.imYK` | func | `(i32 i32) -> ()` |
| 251 | `T7jl.omLQ` | func | `(i32 f64) -> ()` |
| 252 | `T7jl.xjo8` | func | `(i32 i32) -> ()` |
| 253 | `T7jl.SQGz` | func | `(i32 f64) -> ()` |
| 254 | `T7jl.aXB0` | func | `(i32 i32 i32) -> ()` |
| 255 | `T7jl.wZRS` | func | `(i32 i32) -> ()` |
| 256 | `T7jl.Do5H` | func | `(i32 i32 i32) -> ()` |
| 257 | `T7jl.tIrN` | func | `(i32 i32) -> ()` |
| 258 | `T7jl.EOgf` | func | `(i32 i32) -> ()` |
| 259 | `T7jl.arL7` | func | `(i32 i32) -> ()` |
| 260 | `T7jl.Dtu1` | func | `(i32 i32 i32) -> ()` |
| 261 | `T7jl.n2Sa` | func | `(i32 i32) -> ()` |
| 262 | `T7jl.coAa` | func | `(i32 i32) -> ()` |
| 263 | `T7jl.kan5` | func | `(i32 i32) -> ()` |
| 264 | `T7jl.hFm1` | func | `(i32 i32) -> ()` |
| 265 | `T7jl.o7WC` | func | `(i32 f32) -> ()` |
| 266 | `T7jl.pNou` | func | `(i32 f32) -> ()` |
| 267 | `T7jl.ZmeE` | func | `(i32 i32) -> ()` |
| 268 | `T7jl.FBXi` | func | `(i32 i32) -> ()` |
| 269 | `T7jl.lgfa` | func | `(i32 i32) -> ()` |
| 270 | `T7jl.JHwW` | func | `(i32 i32) -> ()` |
| 271 | `T7jl.W1Gv` | func | `(i32 i32) -> ()` |
| 272 | `T7jl.ZD2w` | func | `(i32 i32) -> ()` |
| 273 | `T7jl.oIAT` | func | `(i32 i32) -> ()` |
| 274 | `T7jl.dZyz` | func | `(i32 i32) -> ()` |
| 275 | `T7jl.Dfik` | func | `(i32 i32) -> ()` |
| 276 | `T7jl.dYkQ` | func | `(i32 i32) -> ()` |
| 277 | `T7jl.H45e` | func | `(i32 i32) -> ()` |
| 278 | `T7jl.wlVN` | func | `(i32 i32) -> ()` |
| 279 | `T7jl.PBg6` | func | `(i32 i32) -> ()` |
| 280 | `T7jl.xl8z` | func | `(i32 i32) -> ()` |
| 281 | `T7jl.iPoA` | func | `(i32 i32) -> ()` |
| 282 | `T7jl.UDUO` | func | `(i32 i32) -> ()` |
| 283 | `T7jl.Cj9e` | func | `(i32 i32) -> ()` |
| 284 | `T7jl.RUBz` | func | `(i32 i32) -> ()` |
| 285 | `T7jl.PZN9` | func | `(i32 i32 i32) -> ()` |
| 286 | `T7jl.AS4j` | func | `(i32 i32 i32) -> ()` |
| 287 | `T7jl.DJ8S` | func | `(i32 i32) -> ()` |
| 288 | `T7jl.H7mP` | func | `(i32 i32) -> ()` |
| 289 | `T7jl.P4qS` | func | `(i32 i32) -> ()` |
| 290 | `T7jl.eK1b` | func | `(i32 i32) -> ()` |
| 291 | `T7jl.BScn` | func | `(i32 i32) -> ()` |
| 292 | `T7jl.oNme` | func | `(i32 i32) -> ()` |
| 293 | `T7jl.aICc` | func | `(i32 i32) -> ()` |
| 294 | `T7jl.Vzcf` | func | `(i32 i32) -> ()` |
| 295 | `T7jl.tRmU` | func | `(i32 i32) -> ()` |
| 296 | `T7jl.TNHT` | func | `(i32 i32) -> ()` |
| 297 | `T7jl.K07i` | func | `(i32 i32) -> ()` |
| 298 | `T7jl.hA3a` | func | `(i32 i32) -> (i32)` |
| 299 | `T7jl.g1O7` | func | `(i32 i32) -> ()` |
| 300 | `T7jl.fReG` | func | `(i32 i32 i32) -> ()` |
| 301 | `T7jl.CQOA` | func | `(i32 i32) -> ()` |
| 302 | `T7jl.Dgc3` | func | `(i32 i32) -> ()` |
| 303 | `T7jl.jwhE` | func | `(i32 i32) -> ()` |
| 304 | `T7jl.pVCx` | func | `(i32 i32 i32) -> ()` |
| 305 | `T7jl.UBbY` | func | `(i32 i32) -> (i32)` |
| 306 | `T7jl.sy63` | func | `(i32 i32 i32) -> ()` |
| 307 | `T7jl.gNcC` | func | `(i32 i32 i32) -> ()` |
| 308 | `T7jl.U3xQ` | func | `(i32 i32) -> ()` |
| 309 | `T7jl.HGFN` | func | `(i32 i32) -> ()` |
| 310 | `T7jl.MTFd` | func | `(i32 i32) -> ()` |
| 311 | `T7jl.hnzR` | func | `(i32 i32) -> ()` |
| 312 | `T7jl.PIfV` | func | `(i32 i32) -> (i32)` |
| 313 | `T7jl.KVSL` | func | `(i32) -> (i32)` |
| 314 | `T7jl.IXpo` | func | `(i32) -> (i32)` |
| 315 | `T7jl.hNlb` | func | `(i32) -> (i32)` |
| 316 | `T7jl.UQFk` | func | `(i32) -> (i32)` |
| 317 | `T7jl.Vqcu` | func | `(i32) -> (i32)` |
| 318 | `T7jl.uOwN` | func | `(i32) -> (i32)` |
| 319 | `T7jl.oukc` | func | `(i32) -> (i32)` |
| 320 | `T7jl.CGBk` | func | `(i32) -> (i32)` |
| 321 | `T7jl.xcQ8` | func | `(i32) -> (i32)` |
| 322 | `T7jl.ahZM` | func | `(i32) -> (i32)` |
| 323 | `T7jl.TjDU` | func | `(i32) -> (i32)` |
| 324 | `T7jl.yQxd` | func | `(i32) -> (i32)` |
| 325 | `T7jl.X2qc` | func | `(i32) -> (i32)` |
| 326 | `T7jl.RDGt` | func | `(i32) -> (i32)` |
| 327 | `T7jl.An3e` | func | `(i32) -> (f64)` |
| 328 | `T7jl.cbtP` | func | `(i32) -> (f64)` |
| 329 | `T7jl.fM4j` | func | `(i32) -> (i32)` |
| 330 | `T7jl.eGwJ` | func | `(i32) -> (f64)` |
| 331 | `T7jl.oU5I` | func | `(i32) -> (i32)` |
| 332 | `T7jl.s0K2` | func | `(i32) -> (i32)` |
| 333 | `T7jl.BRxK` | func | `(i32) -> (i32)` |
| 334 | `T7jl.e5x9` | func | `(i32) -> (i32)` |
| 335 | `T7jl.N9hP` | func | `(i32) -> (i32)` |
| 336 | `T7jl.ZTsW` | func | `(i32) -> (i32)` |
| 337 | `T7jl.P19Z` | func | `(i32) -> (i32)` |
| 338 | `T7jl.ndzs` | func | `(i32) -> (i32)` |
| 339 | `T7jl.gLqj` | func | `(i32) -> (i32)` |
| 340 | `T7jl.mlBu` | func | `(i32) -> (i32)` |
| 341 | `T7jl.BZ4h` | func | `(i32) -> (i32)` |
| 342 | `T7jl.xGAP` | func | `(i32) -> (i32)` |
| 343 | `T7jl.xqCC` | func | `(i32) -> (i32)` |
| 344 | `T7jl.Y0pT` | func | `(i32 i32 i32) -> (i32)` |
| 345 | `T7jl.oQYz` | func | `() -> (i32)` |
| 346 | `T7jl.djq9` | func | `(i32 i32) -> ()` |
| 347 | `T7jl.xjvq` | func | `(i32 i32 i32) -> ()` |
| 348 | `T7jl.ahAq` | func | `(i32 i32 i32) -> ()` |
| 349 | `T7jl.MaPf` | func | `(i32 i32) -> (i32)` |
| 350 | `T7jl.VBjP` | func | `(i32) -> (i32)` |
| 351 | `T7jl.hQqb` | func | `(i32 i32 i32) -> (i32)` |
| 352 | `T7jl.Rdbp` | func | `(i32) -> ()` |
| 353 | `T7jl.LasK` | func | `(i32) -> (i32)` |
| 354 | `T7jl.mQDg` | func | `(i32 i32) -> ()` |
| 355 | `T7jl.FFpq` | func | `(i32) -> (i32)` |
| 356 | `T7jl.wzf0` | func | `(i32) -> (i32)` |
| 357 | `T7jl.dVws` | func | `(i32) -> (i32)` |
| 358 | `T7jl.eGdA` | func | `(i32) -> (i32)` |
| 359 | `T7jl.QBgG` | func | `(i32) -> (i32)` |
| 360 | `T7jl.HP88` | func | `(i32 i32) -> ()` |
| 361 | `T7jl.z8Ir` | func | `(i32 i32) -> ()` |
| 362 | `T7jl.i6Th` | func | `(i32 i32) -> ()` |
| 363 | `T7jl.QWbU` | func | `(i32 i32) -> ()` |
| 364 | `T7jl.vVbI` | func | `(i32 i32) -> ()` |
| 365 | `T7jl.ULrj` | func | `(i32 i32) -> ()` |
| 366 | `T7jl.lDaj` | func | `(i32 i32) -> ()` |
| 367 | `T7jl.sjjv` | func | `(i32 i32 i32) -> ()` |
| 368 | `T7jl.Pyqz` | func | `(i32 i32) -> ()` |
| 369 | `T7jl.XaEg` | func | `(i32 i32) -> (i32)` |
| 370 | `T7jl.dpIl` | func | `(i32) -> (i32)` |
| 371 | `T7jl.WQOS` | func | `(i32) -> (i32)` |
| 372 | `T7jl.Sga0` | func | `(i32 i32) -> ()` |
| 373 | `T7jl.nu6l` | func | `(i32) -> (i32)` |
| 374 | `T7jl.oAf4` | func | `(i32 f64 f64) -> (i32)` |
| 375 | `T7jl.c2TT` | func | `(i32 i32 i32) -> (i32)` |
| 376 | `T7jl.MAHu` | func | `(i32 i32) -> ()` |
| 377 | `T7jl.XpiX` | func | `(i32) -> (i32)` |
| 378 | `T7jl.O9iE` | func | `(i32) -> (i32)` |
| 379 | `T7jl.odqm` | func | `(i32) -> (i32)` |
| 380 | `T7jl.bx9L` | func | `(i32) -> (i32)` |
| 381 | `T7jl.ea27` | func | `(i32) -> (i32)` |
| 382 | `T7jl.fmXf` | func | `(i32) -> (i32)` |
| 383 | `T7jl.bM0p` | func | `(i32 i32) -> ()` |
| 384 | `T7jl.LWP1` | func | `(i32 i32) -> (i32)` |
| 385 | `T7jl.laua` | func | `(i32 i32) -> (i32)` |
| 386 | `T7jl.oq82` | func | `(i32 i32) -> (i32)` |
| 387 | `T7jl.syHO` | func | `(i32 i32) -> (i32)` |
| 388 | `T7jl.bBo9` | func | `(i32 i32) -> (i32)` |
| 389 | `T7jl.GzAr` | func | `(i32 i32) -> (i32)` |
| 390 | `T7jl.gXzh` | func | `(f64) -> (i32)` |
| 391 | `T7jl.uG5k` | func | `(i32 i32) -> (i32)` |
| 392 | `T7jl.zFfm` | func | `(i32 i32) -> (i32)` |

## Exports

160 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `O8vp` | func | 3064 | `() -> ()` |
| `Vubv` | global | 2 | `` |
| `vLd9` | func | 2231 | `(i32 i32) -> (i32)` |
| `K8f4` | func | 2570 | `(i32) -> (i32)` |
| `fOUW` | func | 1680 | `(i32 i32) -> ()` |
| `g0ck` | func | 1571 | `(i32) -> (i32)` |
| `rpXf` | func | 2466 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64 i32 i32) -> (i32)` |
| `i5pm` | func | 3114 | `(i32 i32 i32) -> (i32 i32)` |
| `i5w4` | func | 834 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `p4x9` | func | 2865 | `(i32) -> (i32)` |
| `memory` | memory | 0 | `` |
| `XrXF` | func | 2592 | `(i32) -> (i32)` |
| `akcu` | func | 1957 | `(i32 i32) -> ()` |
| `ILSF` | func | 3136 | `(i32) -> (i32 i32)` |
| `smom` | func | 660 | `(i32 i32 i32) -> (i32)` |
| `rBXw` | func | 2290 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `HwNA` | func | 3216 | `() -> (i32)` |
| `bdXi` | func | 1983 | `(i32) -> ()` |
| `Fba3` | func | 2593 | `(i32 i32) -> (i32)` |
| `CMcX` | func | 1565 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `psqO` | func | 2343 | `(i32 f64) -> (i32)` |
| `XXzz` | func | 770 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `GhaV` | func | 2583 | `(i32) -> (i32)` |
| `KMX6` | func | 3306 | `(i32) -> ()` |
| `c31c` | func | 2602 | `(i32) -> (i32)` |
| `XvWP` | func | 3150 | `() -> (i32 i32)` |
| `EkJ3` | func | 3123 | `(i32 i32) -> (i32 i32)` |
| `yNQH` | func | 830 | `(i32) -> (i32)` |
| `Qs0P` | func | 986 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `AmQ7` | func | 1605 | `(i32 i32) -> (i32)` |
| `XF5A` | func | 2046 | `(i32 i32 i32 i32) -> ()` |
| `laj7` | func | 3084 | `(i32 i32) -> (i32)` |
| `WSAZ` | func | 1371 | `(i32) -> (i32)` |
| `oYj8` | func | 2569 | `(i32) -> (i32)` |
| `ZUsV` | func | 3255 | `(i32) -> ()` |
| `M9yN` | func | 3246 | `(i32 i32 i32) -> ()` |
| `YTxl` | func | 3113 | `(i32 i32 i32) -> (i32 i32)` |
| `HDNC` | func | 1492 | `(i32 i32) -> (i32)` |
| `V3Ia` | func | 3124 | `(i32 i32) -> (i32 i32)` |
| `c52l` | func | 2545 | `(i32) -> (i32)` |
| `Q8Sw` | func | 1640 | `(i32 i32 i32 i32) -> (i32)` |
| `tUpX` | func | 2566 | `(i32) -> (i32)` |
| `Ip4k` | func | 3188 | `(i32 i32 i32) -> ()` |
| `eulY` | func | 3114 | `(i32 i32 i32) -> (i32 i32)` |
| `WCl4` | func | 1467 | `(i32 f64 f64) -> (i32)` |
| `U7ph` | func | 798 | `(i32 i32) -> (i32)` |
| `Mbcd` | func | 2560 | `(i32) -> (f64)` |
| `dRAG` | func | 1906 | `() -> (i32)` |
| `Ar8h` | func | 1327 | `(i32 i32) -> (i32)` |
| `YOoZ` | global | 1 | `` |
| `vHq0` | func | 2873 | `(i32) -> (i32)` |
| `cjgZ` | func | 2562 | `(i32) -> (i32)` |
| `BlAC` | func | 1810 | `(i32) -> (i32)` |
| `AwaI` | func | 3090 | `(i32 i32 i32 i32) -> (i32)` |
| `YcrB` | func | 968 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `eMRg` | func | 704 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `iIi1` | func | 1578 | `(i32 i32) -> (i32)` |
| `SfMq` | func | 2565 | `(i32) -> (i32)` |
| `ChqI` | func | 1527 | `(i32) -> (i32)` |
| `qPG9` | func | 1524 | `() -> (i32)` |
| `JyOc` | func | 3121 | `(i32 i32) -> (i32 i32)` |
| `WsjZ` | func | 3305 | `(i32) -> (i32)` |
| `eCnG` | func | 1975 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `cfs5` | func | 1619 | `(i32 i32 i32) -> (i32)` |
| `UQNH` | func | 1257 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `v94p` | func | 2369 | `(i32 i32) -> ()` |
| `MCG8` | func | 3301 | `() -> (f64)` |
| `oxSc` | func | 2135 | `(i32 i32) -> ()` |
| `s2UG` | func | 2157 | `(i32 i32) -> (i32)` |
| `LCo9` | func | 1546 | `(i32 i32 i32 i32) -> ()` |
| `XURq` | func | 2568 | `(i32) -> (i32)` |
| `c62U` | func | 2471 | `(i32 i32 i32 i32) -> (i32)` |
| `aqSc` | func | 3177 | `(i32 i32 i32 i32) -> ()` |
| `RBbk` | func | 3329 | `() -> (i32)` |
| `wrHb` | func | 2685 | `() -> (i32)` |
| `nHYD` | func | 3330 | `() -> (i32)` |
| `OmTh` | func | 1466 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `C2ct` | func | 3126 | `(i32 i32) -> (i32 i32)` |
| `yBqE` | func | 1847 | `(i32 i32) -> (i32)` |
| `naMG` | func | 2422 | `(i32 i32) -> (i32)` |
| `SQK6` | func | 2684 | `(i32 i32) -> ()` |
| `DK7j` | func | 3125 | `(i32 i32) -> (i32 i32)` |
| `tvfd` | func | 897 | `(i32 i32) -> (i32)` |
| `N5qU` | func | 846 | `(i32 i32 i32) -> (i32)` |
| `Hdc6` | func | 1788 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `HebX` | func | 1606 | `(i32 i32) -> (i32)` |
| `BnDx` | func | 1608 | `(i32 f64) -> (f64)` |
| `UMEx` | func | 2567 | `(i32) -> ()` |
| `AMOj` | func | 2544 | `(i32 i32) -> ()` |
| `Yu2D` | func | 2603 | `(i32) -> (i32)` |
| `uodr` | func | 1345 | `(i32 i32 i32) -> (i32)` |
| `OG4t` | func | 2423 | `(i32 i32) -> (i32)` |
| `tt0y` | func | 2498 | `(i32) -> (i32)` |
| `e1Jw` | func | 2586 | `(i32) -> (i32)` |
| `yMMs` | func | 2270 | `(i32 i32) -> (i32)` |
| `ALp9` | func | 827 | `(i32 i32 i32 i32) -> (i32)` |
| `TL2c` | func | 1681 | `(i32 i32) -> ()` |
| `cH9H` | func | 1723 | `(i32 i32 i32 i32) -> (i32)` |
| `WHr8` | func | 1201 | `(i32 i32) -> ()` |
| `BFod` | func | 3151 | `() -> (i32 i32)` |
| `RfvB` | func | 2342 | `(i32 i32) -> ()` |
| `qGMj` | func | 2561 | `(i32) -> (i32)` |
| `V9sy` | func | 1968 | `(i32 i32) -> (i32)` |
| `y0G4` | func | 2890 | `(i32) -> (i32)` |
| `hzDz` | func | 2456 | `(i32 i32) -> (i32)` |
| `wjxg` | func | 2936 | `(i32) -> (i32)` |
| `t5H4` | func | 3096 | `(i32 i32) -> ()` |
| `IYZd` | func | 2913 | `(i32) -> ()` |
| `CKTz` | func | 2601 | `(i32) -> (i32)` |
| `ttCe` | func | 1377 | `(i32 i32) -> (i32)` |
| `MCJQ` | func | 1982 | `(i32) -> ()` |
| `ExNV` | func | 1951 | `(i32 i32 f64 f64 f64) -> ()` |
| `ZtCa` | func | 2515 | `(i32) -> (i32)` |
| `qANf` | func | 2584 | `(i32) -> (i32)` |
| `N9Bl` | func | 2564 | `(i32) -> (i32)` |
| `l9zt` | func | 969 | `(i32 i32) -> (i32)` |
| `NSao` | func | 3122 | `(i32 i32) -> (i32 i32)` |
| `IwWf` | func | 1297 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `m4Wd` | func | 2424 | `(i32 i32) -> (i32)` |
| `ElYA` | func | 3134 | `(i32) -> (i32 i32)` |
| `fEic` | func | 2079 | `(i32 i32) -> ()` |
| `LRU7` | func | 2027 | `(i32) -> (i32)` |
| `nenK` | func | 1592 | `(i32 i32) -> (i32)` |
| `iqw5` | func | 1305 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `T11Q` | func | 1519 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `AVsT` | func | 2579 | `(i32 i32) -> ()` |
| `ilSa` | func | 759 | `(i32 i32) -> (i32)` |
| `V0p8` | func | 997 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `iVad` | func | 1349 | `(i32 i32 i32) -> ()` |
| `IKQw` | func | 1929 | `(i32 i32 i32 i32) -> (i32)` |
| `HrXU` | func | 1828 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `pdEh` | func | 3135 | `(i32) -> (i32 i32)` |
| `CH0v` | func | 3127 | `(i32 i32) -> (i32 i32)` |
| `nXlh` | func | 2563 | `(i32) -> (i32)` |
| `nXrG` | func | 2594 | `(i32 i32) -> (i32)` |
| `u4Gb` | func | 2651 | `() -> (i32)` |
| `HrM6` | func | 2421 | `(i32 i32) -> (i32)` |
| `KirI` | func | 2119 | `(i32 f64 f64 f64) -> (i32)` |
| `cPGr` | func | 2634 | `(i32 i32) -> ()` |
| `OJQ2` | func | 1560 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `R8Wm` | func | 2104 | `(i32 f64) -> (i32)` |
| `Arpb` | func | 1913 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `khCR` | func | 3257 | `() -> ()` |
| `Tbu3` | func | 3186 | `(i32 i32 i32) -> (i32)` |
| `r5F7` | func | 1298 | `(i32 i32 i32 i32) -> (i32)` |
| `lAMs` | func | 3137 | `(i32) -> (i32 i32)` |
| `YQ4H` | func | 1685 | `(i32 f64 f64 f64) -> (i32)` |
| `HrhI` | func | 1834 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `QNrI` | func | 1570 | `(i32 i32 i32 i32) -> (i32)` |
| `IxeX` | func | 3114 | `(i32 i32 i32) -> (i32 i32)` |
| `ZxJm` | func | 3152 | `() -> (i32 i32)` |
| `K6fu` | func | 1200 | `(i32 i32) -> (i32)` |
| `SVus` | func | 2044 | `(i32) -> (i32)` |
| `E1qH` | func | 1670 | `(i32 i32) -> (i32)` |
| `Y7wc` | func | 3114 | `(i32 i32 i32) -> (i32 i32)` |
| `yUHR` | func | 2901 | `(i32) -> (i32)` |
| `pPXK` | func | 1403 | `(i32) -> ()` |
| `pJEu` | func | 1417 | `(i32 i32 i32) -> (i32)` |
| `JDkO` | func | 2585 | `(i32 i32) -> ()` |
| `LIDV` | func | 3138 | `(i32) -> (i32 i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 839 · max 839
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2248680, `i32` = i32.const 2249252

## Functions

- 2,950 bodies · 4,050,463 code bytes · avg 1.3 KB
- instruction scan: 2,950 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 171 |
| <= 64 bytes | 114 |
| <= 128 bytes | 276 |
| <= 256 bytes | 386 |
| <= 512 bytes | 668 |
| <= 1024 bytes | 587 |
| <= 2048 bytes | 415 |
| <= 4096 bytes | 179 |
| <= 8192 bytes | 92 |
| <= 16384 bytes | 27 |
| > 16384 bytes | 35 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32 i32) -> ()` | 149 | 122,454 | 58,848 | local.get×16652, i32.const×7053, i32.add×3403, local.set×3378, i32.load×3112 |
| 1 | `(i32 i32 i32 i32) -> ()` | 217 | 194,676 | 88,355 | local.get×25898, i32.const×9909, i32.load×5640, local.set×4735, local.tee×4638 |
| 2 | `(i32 i32 i32 i32 i32 i32) -> ()` | 132 | 56,181 | 25,576 | local.get×7556, i32.const×3392, local.set×1404, i32.add×1302, i32.load×1164 |
| 3 | `(i32 i32) -> ()` | 125 | 48,670 | 22,528 | local.get×6337, i32.const×2249, local.set×1324, local.tee×1179, i32.load×1037 |
| 4 | `(i32 i32 i32) -> ()` | 66 | 31,468 | 14,007 | local.get×4107, i32.const×1881, i32.load×884, i32.add×645, local.set×620 |
| 5 | `(i32 i32) -> ()` | 59 | 29,627 | 14,267 | local.get×4192, i32.const×1730, i32.load×1042, local.set×931, i32.add×815 |
| 6 | `(i32 i32) -> ()` | 90 | 26,038 | 12,563 | local.get×3702, i32.const×1379, local.set×779, i32.load×721, local.tee×698 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 135 | 32,562 | 16,141 | local.get×4566, i32.const×2205, local.set×1141, i32.add×1062, local.tee×800 |
| 8 | `(i32 i32 i32 i32 i32) -> ()` | 58 | 21,485 | 10,526 | local.get×2903, i32.const×1490, local.set×728, i32.add×591, local.tee×504 |
| 10 | `(i32 i32 i32 i32) -> ()` | 105 | 26,545 | 12,837 | local.get×3810, i32.const×1624, local.set×997, i32.add×682, i32.load×663 |
| 11 | `(i32 i32 i32 i32 i32 i32) -> ()` | 177 | 20,026 | 9,398 | local.get×2934, i32.const×1038, local.set×621, i32.add×458, i32.load×421 |
| 12 | `(i32 i32 i32 i32) -> ()` | 53 | 24,505 | 11,634 | local.get×3005, i32.const×1276, local.tee×731, end×592, i32.load×586 |
| 14 | `(i32 i32 i32 i32 i32 i32) -> ()` | 125 | 19,810 | 8,875 | local.get×2493, i32.const×1111, local.set×430, local.tee×385, i32.load×382 |
| 17 | `(i32 i32) -> ()` | 96 | 31,834 | 14,861 | local.get×4482, i32.const×1910, i32.add×763, local.set×692, i32.load×669 |
| 19 | `(i32 i32 i64 i32 i32 i64 i32 i32) -> ()` | 94 | 21,138 | 8,084 | local.get×3019, i32.const×947, i64.store×844, i32.store×655, i64.const×513 |
| 21 | `(i32 i32) -> ()` | 82 | 29,023 | 13,043 | local.get×4618, i32.const×1456, i32.store×702, i32.add×689, local.tee×645 |
| 23 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 64 | 24,289 | 11,198 | local.get×2682, i32.const×1711, local.set×821, end×663, block×465 |
| 25 | `(i32 i32 i32 i32 i32) -> ()` | 68 | 22,728 | 10,576 | local.get×3337, i32.const×1240, local.tee×731, i32.add×436, local.set×333 |
| 43 | `(i32 i32 i32 i32 i32) -> ()` | 83 | 27,436 | 12,890 | local.get×3670, i32.const×1868, i32.add×766, local.set×697, end×577 |
| 61 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 99 | 32,154 | 15,014 | local.get×4317, i32.const×1963, i32.load×986, local.set×902, i32.add×812 |
| 192 | `(i32 i32) -> ()` | 10 | 26,597 | 12,807 | local.get×4506, i32.load×1211, i32.const×1022, end×797, i32.add×734 |
| 220 | `(i32) -> ()` | 19 | 23,156 | 10,851 | local.get×2722, i32.load×1494, i32.const×1177, local.tee×1008, end×853 |
| 706 | `(i32 i32) -> ()` | 139 | 42,852 | 20,210 | local.get×5266, i32.const×2331, local.tee×1194, i32.add×1062, local.set×1004 |
| 707 | `(i32 i32 i32 i32) -> ()` | 54 | 21,809 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 1012 | `(i32 i32) -> (i32)` | 40 | 19,895 | 7,747 | local.get×2497, i32.const×848, i64.store×583, i32.load×391, local.set×357 |
| 1575 | `(i32 i32) -> (i32)` | 180 | 54,758 | 19,856 | local.get×6592, i32.const×2623, i64.store×1913, i64.const×1078, i64.load×1056 |
| 1968 | `(i32 i32) -> ()` | 110 | 40,258 | 17,890 | local.get×5235, i32.const×1685, local.set×903, local.tee×774, end×686 |
| 2608 | `(i32 i32) -> ()` | 397 | 142,048 | 64,173 | local.get×18436, i32.const×8000, local.set×3840, i32.load×3163, end×2815 |
| 2898 | `(i32 i32 i32 i32) -> ()` | 137 | 31,358 | 14,274 | local.get×4256, i32.const×1515, local.tee×741, local.set×690, br_if×629 |
| 2917 | `(i32 i32) -> ()` | 136 | 33,872 | 15,183 | local.get×4267, i32.const×2015, local.set×798, local.tee×742, i32.add×699 |

## Embedded strings (data segments)

60 printable strings ≥6 chars; largest:

```
beaver_lumberjackchefdwarf_blue_hairdwarf_braided_hairdwarf_childdwarf_forked_bearddwarf_ginger_bearddwarf_grey_bearddwarf_hair_bunsdwarf_purple_bearddwarf_red_hairdwarf_short_beardfarmerfarmer_gillfi
DEEJJJJJJHHHHEEDDDDDDHHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDEEDEEEEEEDEDEDHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
ZombieGrunt1ZombieGrunt2ZombieGrunt3ZombieHurt1ZombieHurt2ZombieHurt3ZombieHurt4bassbassattackbdbearRoar1bearRoar2bearRoar3bearRoar4bearRoar5beepbigDrumSwish1bigDrumSwish2bigDrumSwish3bowbucketEmpty1b
                                                                                                skin_1_0skin_1_1skin_1_2skin_1_3skin_1_4hat_0_0hat_0_1hat_0_2hat_0_3hat_0_4hat_0_5hat_0_6hat_13_0hat_13_
456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;
vs_mesh_00000020801vs_mesh_00000021801vs_mesh_00000040000vs_mesh_00000040011vs_mesh_00000040030vs_mesh_00000040042vs_mesh_00000040142vs_mesh_000000403c2vs_mesh_00000040801vs_mesh_00000041801vs_mesh_00
alliumaspen_saplingattached_banana_stemattached_banana_stem_wrapperattached_melon_stemattached_melon_stem_wrapperautumn_fernazure_bluetbanana_stembeetroot_plant_stage0beetroot_plant_stage1beetroot_pla
````````````````````````````````^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZYYYYYYYY
0x | SHADER_FLOAT32_ATOMICTEXTURE_FORMAT_16BIT_NORMTEXTURE_COMPRESSION_ASTC_HDRTEXTURE_ADAPTER_SPECIFIC_FORMAT_FEATURESPIPELINE_STATISTICS_QUERYTIMESTAMP_QUERY_INSIDE_ENCODERSTIMESTAMP_QUERY_INSIDE_PA
fs_mesh_0040d000053_l7fs_mesh_0040d040073_l3fs_mesh_0040d040073_l7fs_mesh_0040d0b0053_l1fs_mesh_0040d0b0073_l1fs_mesh_0042d040072_l3fs_mesh_0044b0b0073fs_mesh_0044d000053_l3fs_mesh_0044d000053_l7fs_me
ue:keydownkeyupmousedownmouseuptouchstarttouchendotherMouse1Mouse2Mouse3Alt+Left ClickF2F4F5F8F9Digit0Digit1Digit2Digit3Digit4Digit5Digit6Digit7Digit8Digit9KeyQKeyWKeyEKeyRKeyTKeyYKeyUKeyIKeyOKeyPKeyA
targetcolourmaxUpSpeedforceinclinationazimuthturbidityluminancemieCoefficientmieDirectionalGsunPositionvertexTintxCameraOffsetyCameraOffsetzCameraOffsetditheringinfiniteDistanceuseSunPositionrgba(tran
r8unormr8snormr8uintr8sintr16unormr16snormr16uintr16sintr16floatrg8unormrg8snormrg8uintrg8sintr32uintr32sintr32floatrg16unormrg16snormrg16uintrg16sintrg16floatrgba8unormrgba8unorm-srgbrgba8snormrgba8u
schema023canChangeblockReachezBridgingezBridgingGrowMsezToweringezToweringGrowMscrouchingSpeedwalkingSpeedrunningSpeedjumpAmountairJumpCountjumpHoldThrustbunnyhopMaxMultiplierskyBoxminChunkAddDistshow
Aspen LeavesAspen LogAspen SaplingAspen Wood PlanksBarkless Aspen LogBarkless Cedar LogBarkless Jungle LogBarkless Maple LogBarkless Pine LogBarkless Plum LogBlack PlanksBlue PlanksBookshelfBowl of Cr
Acacia LeavesAcacia LogAcacia SaplingAcacia Wood PlanksAlchemy TableBarkless Acacia LogBarkless Birch LogBarkless Dark Oak LogBarkless Elm LogBarkless Oak LogBarkless Spruce LogBirch LeavesBirch LogBi
maxTextureDimension1DmaxTextureDimension2DmaxTextureDimension3DmaxTextureArrayLayersmaxBindGroupsmaxBindGroupsPlusVertexBuffersmaxBindingsPerBindGroupmaxDynamicUniformBuffersPerPipelineLayoutmaxDynami
R8UnormR8SnormR8UintR8SintR16UintR16SintR16UnormR16SnormR16FloatRg8UnormRg8SnormRg8UintRg8SintR32UintR32SintR32FloatRg16UintRg16SintRg16UnormRg16SnormRg16FloatRgba8UnormRgba8UnormSrgbRgba8SnormRgba8Ui
standingsittingzombieglidingdrivingsleepingridingShearedSaddledskyblockHeldBossBoxBloxdBlockPersonLeaderboardParticleEmitterTier 1Tier 2Tier 3Tier 4Tier 5PlayerPigCowSheepHorseCamelIron Goofy GolemGol
flag testalpha * baseColor.abaseColor.abloxdSpGlintTier(v.vEnchantHsvAndTick.xyz)enchantmentColour(v.vEnchantHsvAndTick, v.vEnchantLocalPos, baseColor.rgb)bloxdSpEnchantSpeedbloxdSpLocalvec4f(v.vOverl
```

## Opcode histogram (aggregated)

| opcode | count |
|---|---:|
| `local.get` | 541,653 |
| `i32.const` | 227,845 |
| `local.tee` | 99,619 |
| `local.set` | 94,549 |
| `i32.load` | 93,438 |
| `i32.add` | 87,158 |
| `end` | 79,379 |
| `br_if` | 63,871 |
| `i32.store` | 46,985 |
| `block` | 37,345 |
| `i64.store` | 32,822 |
| `i64.const` | 32,171 |
| `if` | 30,362 |
| `call` | 30,171 |
| `i64.load` | 24,365 |
| `i32.sub` | 24,159 |
| `br` | 23,246 |
| `i32.eqz` | 19,074 |
| `select` | 16,757 |
| `i32.and` | 16,352 |
| `i32.shl` | 16,236 |
| `i32.ne` | 15,678 |
| `i32.load8_u` | 15,275 |
| `i32.eq` | 13,739 |
| `i32.store8` | 13,434 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 2,950/2,950 (degraded: 0)
