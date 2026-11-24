# WASM module: `bloxd_wasm_webgl_bg`

> environment **staging.bloxd.io** · build `tz47m9.2cb7e113` · analyzed 2026-11-24T17:23:02+09:00
> source: https://staging.bloxd.io/static/media/bloxd_wasm_webgl_bg.03882d56a3e2bba2db35.wasm
> 5,503,528 bytes (5.2 MB) · sha256 `758269d3a7396a32…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- name-section module id `b7e4c507456c1db2.10887` → `a1cc39032427b731.10887` (numeric version suffix unchanged — same module version, re-randomized prefix)
- export identifiers rotated by the obfuscator: 1/156 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,905 / 299 |
| Exports / imports | 156 / 300 |
| Code bytes (function bodies) | 4,031,927 (3.8 MB) |
| Total local variables | 30,698 |
| Instructions (scanable bodies) | 1,890,790 |
| Data segments / bytes | 4,028 / 1,422,824 |
| Element segments / entries | 1 / 752 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `a1cc39032427b731.10887` |
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
| 10 | code | 4,037,252 | 2905 |
| 11 | data | 1,455,353 | 4028 |
| 0 | custom:name | 30 | — |

## Types

176 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32) -> ()` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

300 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `cCVk.ZgK2` | memory | `[128..14648]` |
| 0 | `cCVk.Pz3j` | func | `(i32) -> (f64)` |
| 1 | `cCVk.TKZg` | func | `() -> (i32)` |
| 2 | `cCVk.xRhs` | func | `(i32 i32 i32) -> (i32)` |
| 3 | `cCVk.LufV` | func | `(i32) -> ()` |
| 4 | `cCVk.MshN` | func | `(i32 i32) -> (i32)` |
| 5 | `cCVk.xKr9` | func | `(i32) -> (i32)` |
| 6 | `cCVk.tTf4` | func | `(i32 i32 i32) -> (i32)` |
| 7 | `cCVk.gnt2` | func | `(i32 i32 i32 i32) -> (i32)` |
| 8 | `cCVk.OA5B` | func | `(i32) -> (i32)` |
| 9 | `cCVk.K4U2` | func | `(i32 i32) -> ()` |
| 10 | `cCVk.yjAW` | func | `(i32 i32) -> ()` |
| 11 | `cCVk.T4dd` | func | `(i32 i32 i32 i32) -> (i32)` |
| 12 | `cCVk.GxhM` | func | `(i32 i32) -> (i32)` |
| 13 | `cCVk.jGg3` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 14 | `cCVk.AnFA` | func | `(i32) -> (i32)` |
| 15 | `cCVk.zjMV` | func | `(i32 i32) -> (i32)` |
| 16 | `cCVk.wRhW` | func | `(i32 i32) -> (i32)` |
| 17 | `cCVk.Sd3h` | func | `(i32 i32) -> ()` |
| 18 | `cCVk.iLnK` | func | `(i32) -> (i32)` |
| 19 | `cCVk.JPlP` | func | `(i32) -> (i32)` |
| 20 | `cCVk.rkPY` | func | `(i32) -> (i32)` |
| 21 | `cCVk.iqnH` | func | `(i32) -> ()` |
| 22 | `cCVk.fFJI` | func | `(i32 i32) -> ()` |
| 23 | `cCVk.h3OY` | func | `(i32 i32) -> ()` |
| 24 | `cCVk.TqMo` | func | `(i32 f64 f64 f64 f64) -> ()` |
| 25 | `cCVk.NcpZ` | func | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64) -> ()` |
| 26 | `cCVk.NEOI` | func | `(i32) -> (i32)` |
| 27 | `cCVk.VL5y` | func | `(i32 i32) -> ()` |
| 28 | `cCVk.VZCq` | func | `(i32 i32) -> (i32)` |
| 29 | `cCVk.LY7z` | func | `(i32 i32 i32 i32) -> ()` |
| 30 | `cCVk.YKxV` | func | `(i32 i32) -> (i32)` |
| 31 | `cCVk.IDOA` | func | `(i32 i32 i32) -> (i32)` |
| 32 | `cCVk.ov28` | func | `(i32) -> (i32)` |
| 33 | `cCVk.ZbEL` | func | `(i32 i32) -> ()` |
| 34 | `cCVk.PpHk` | func | `(i32 i32 i32) -> (i32)` |
| 35 | `cCVk.uuPa` | func | `(i32) -> (i32)` |
| 36 | `cCVk.fLVB` | func | `(i32) -> (i32)` |
| 37 | `cCVk.QDbZ` | func | `(i32) -> (i32)` |
| 38 | `cCVk.dWEp` | func | `(i32 i32) -> (i32)` |
| 39 | `cCVk.Zkbm` | func | `(i32 i32 i32 i32) -> ()` |
| 40 | `cCVk.P8jh` | func | `(i32) -> (i32)` |
| 41 | `cCVk.FAps` | func | `(i32 i32 i32 i32) -> ()` |
| 42 | `cCVk.rafP` | func | `() -> (f64)` |
| 43 | `cCVk.tRmn` | func | `(i32) -> (i32)` |
| 44 | `cCVk.Naox` | func | `(i32 i32 i32 i32) -> ()` |
| 45 | `cCVk.LoaY` | func | `(i32 i32 i32) -> (i32)` |
| 46 | `cCVk.hPe3` | func | `(i32 i32 i32) -> ()` |
| 47 | `cCVk.jlY8` | func | `(i32 i32 i32) -> ()` |
| 48 | `cCVk.ydHJ` | func | `(i32 i32 i32) -> ()` |
| 49 | `cCVk.oxOm` | func | `(i32 i32 i32 i32) -> ()` |
| 50 | `cCVk.yp8F` | func | `(i32 i32 i32 i32) -> ()` |
| 51 | `cCVk.kJRU` | func | `(i32 i32) -> ()` |
| 52 | `cCVk.gI98` | func | `(i32 i32) -> ()` |
| 53 | `cCVk.EEdE` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 54 | `cCVk.FoQV` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 55 | `cCVk.IW7N` | func | `(i32 f32 f32) -> ()` |
| 56 | `cCVk.sUeK` | func | `(i32 f32 f32) -> ()` |
| 57 | `cCVk.y1SW` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 58 | `cCVk.BNdZ` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 59 | `cCVk.hYZg` | func | `(i32 i32 i32 i32) -> ()` |
| 60 | `cCVk.BENM` | func | `(i32 i32 i32 i32) -> ()` |
| 61 | `cCVk.HNYv` | func | `(i32 i32 i32) -> ()` |
| 62 | `cCVk.IRl1` | func | `(i32 i32 i32) -> ()` |
| 63 | `cCVk.p1fI` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 64 | `cCVk.sbZJ` | func | `(i32 i32 i32) -> ()` |
| 65 | `cCVk.a5lG` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 66 | `cCVk.NoXk` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 67 | `cCVk.DmcW` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 68 | `cCVk.o1v8` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 69 | `cCVk.QNzt` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 70 | `cCVk.MrW1` | func | `(i32) -> (i32)` |
| 71 | `cCVk.Y7pS` | func | `(i32) -> ()` |
| 72 | `cCVk.kt2Y` | func | `(i32) -> (i32)` |
| 73 | `cCVk.oC31` | func | `(i32 i32) -> (i32)` |
| 74 | `cCVk.QUCr` | func | `(i32 i32 i32) -> (i32)` |
| 75 | `cCVk.Dlzl` | func | `(i32 i32 i32) -> ()` |
| 76 | `cCVk.nxuj` | func | `(i32 i32 i32 i32) -> (i32)` |
| 77 | `cCVk.gQLR` | func | `() -> (f64)` |
| 78 | `cCVk.BoiU` | func | `() -> (f64)` |
| 79 | `cCVk.pUvi` | func | `(i32 i32) -> ()` |
| 80 | `cCVk.YFAx` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 81 | `cCVk.m5xt` | func | `(i32 i32 i32) -> (i32)` |
| 82 | `cCVk.ZJ7k` | func | `(i32 i32 i32) -> ()` |
| 83 | `cCVk.CJTB` | func | `(i32 i32 i32) -> ()` |
| 84 | `cCVk.pzsd` | func | `(i32 i32) -> ()` |
| 85 | `cCVk.nhlX` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 86 | `cCVk.EzhU` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 87 | `cCVk.B2jp` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 88 | `cCVk.jYAs` | func | `(i32 i32) -> ()` |
| 89 | `cCVk.D2ls` | func | `(i32 i32) -> ()` |
| 90 | `cCVk.j3aq` | func | `(i32) -> (i32)` |
| 91 | `cCVk.lN4c` | func | `(i32 i32 i32) -> ()` |
| 92 | `cCVk.qNyG` | func | `(i32 i32 i32) -> ()` |
| 93 | `cCVk.SKKG` | func | `(i32) -> (i32)` |
| 94 | `cCVk.vEYd` | func | `(i32) -> (i32)` |
| 95 | `cCVk.PIFE` | func | `(i32 i32) -> ()` |
| 96 | `cCVk.G7h1` | func | `(i32 i32) -> ()` |
| 97 | `cCVk.Kd6S` | func | `(i32 i32) -> ()` |
| 98 | `cCVk.HJeP` | func | `(i32 i32) -> ()` |
| 99 | `cCVk.XyAd` | func | `(i32 i32 i32) -> ()` |
| 100 | `cCVk.CgUr` | func | `(i32 i32 i32) -> ()` |
| 101 | `cCVk.wS4H` | func | `(i32 i32 f32) -> ()` |
| 102 | `cCVk.Tgxl` | func | `(i32 i32 f32) -> ()` |
| 103 | `cCVk.Lohu` | func | `(i32 i32 i32) -> ()` |
| 104 | `cCVk.POyt` | func | `(i32 i32 f32 f32) -> ()` |
| 105 | `cCVk.vKCS` | func | `(i32 i32 f32 f32) -> ()` |
| 106 | `cCVk.MFg1` | func | `(i32 i32) -> ()` |
| 107 | `cCVk.ZwHZ` | func | `(i32 i32) -> ()` |
| 108 | `cCVk.ZIyG` | func | `(i32 i32) -> ()` |
| 109 | `cCVk.FTJX` | func | `(i32 i32) -> ()` |
| 110 | `cCVk.yyX9` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 111 | `cCVk.Wl35` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 112 | `cCVk.WyD6` | func | `(i32 i32 i32) -> ()` |
| 113 | `cCVk.fEVS` | func | `(i32 i32 i32) -> ()` |
| 114 | `cCVk.ew8w` | func | `(i32 i32 i32 i32) -> ()` |
| 115 | `cCVk.QahE` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 116 | `cCVk.Nrqk` | func | `(i32 i32) -> ()` |
| 117 | `cCVk.MgJc` | func | `(i32 i32) -> ()` |
| 118 | `cCVk.aK9r` | func | `(i32 i32) -> (i32)` |
| 119 | `cCVk.DRRh` | func | `(i32 i32) -> (i32)` |
| 120 | `cCVk.ej7u` | func | `(i32 i32) -> ()` |
| 121 | `cCVk.RLxf` | func | `(i32 i32) -> ()` |
| 122 | `cCVk.tDGq` | func | `(i32) -> (i32)` |
| 123 | `cCVk.M3lv` | func | `(i32 i32) -> ()` |
| 124 | `cCVk.MIcS` | func | `(i32 i32) -> ()` |
| 125 | `cCVk.xf7Q` | func | `(i32 i32 i32 i32) -> ()` |
| 126 | `cCVk.BXIh` | func | `(i32 i32 i32) -> ()` |
| 127 | `cCVk.c9Oa` | func | `(i32 i32 i32) -> ()` |
| 128 | `cCVk.EzYv` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 129 | `cCVk.HU4Y` | func | `(i32 i32) -> ()` |
| 130 | `cCVk.lBaJ` | func | `(i32 i32 i32) -> ()` |
| 131 | `cCVk.vGnE` | func | `(i32 i32 i32) -> ()` |
| 132 | `cCVk.wdp5` | func | `(i32 i32 i32) -> ()` |
| 133 | `cCVk.ZKUK` | func | `(i32 i32 i32) -> ()` |
| 134 | `cCVk.oblY` | func | `(i32) -> ()` |
| 135 | `cCVk.JhTy` | func | `(i32 i32 i32) -> (i32)` |
| 136 | `cCVk.x04B` | func | `(i32 i32 i32) -> ()` |
| 137 | `cCVk.xZJZ` | func | `(i32 i32 i32) -> (i32)` |
| 138 | `cCVk.lavt` | func | `(i32 i32) -> ()` |
| 139 | `cCVk.X2iF` | func | `(i32) -> (i32)` |
| 140 | `cCVk.vBcV` | func | `(i32 i32) -> ()` |
| 141 | `cCVk.dQYA` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 142 | `cCVk.G897` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 143 | `cCVk.pJr1` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 144 | `cCVk.f9kn` | func | `(i32 i32 i32) -> (i32)` |
| 145 | `cCVk.MA7Q` | func | `(i32 i32 i32) -> (i32)` |
| 146 | `cCVk.mdew` | func | `(i32 i32) -> ()` |
| 147 | `cCVk.Gdpd` | func | `(i32 i32) -> ()` |
| 148 | `cCVk.czIh` | func | `(i32 i32) -> ()` |
| 149 | `cCVk.XaJU` | func | `(i32 i32) -> ()` |
| 150 | `cCVk.BdNJ` | func | `(i32) -> (i32)` |
| 151 | `cCVk.CKX3` | func | `(i32) -> (i32)` |
| 152 | `cCVk.mkTj` | func | `(i32) -> (i32)` |
| 153 | `cCVk.Lv7x` | func | `(i32) -> (i32)` |
| 154 | `cCVk.DyVT` | func | `(i32) -> (i32)` |
| 155 | `cCVk.hIkD` | func | `(i32) -> (i32)` |
| 156 | `cCVk.UQ7F` | func | `() -> (i32)` |
| 157 | `cCVk.K9aJ` | func | `() -> (i32)` |
| 158 | `cCVk.kmMH` | func | `() -> (i32)` |
| 159 | `cCVk.aJXe` | func | `() -> (i32)` |
| 160 | `cCVk.LZHz` | func | `(i32 i32) -> (i32)` |
| 161 | `cCVk.cvss` | func | `(i32) -> ()` |
| 162 | `cCVk.hgmr` | func | `(i32 i32) -> (i32)` |
| 163 | `cCVk.Od0F` | func | `(i32) -> (i32)` |
| 164 | `cCVk.V1wb` | func | `(i32) -> (i32)` |
| 165 | `cCVk.JWuk` | func | `(i32) -> (i32)` |
| 166 | `cCVk.hjoR` | func | `(i32) -> ()` |
| 167 | `cCVk.BLa3` | func | `(i32 i32 i32) -> (i32)` |
| 168 | `cCVk.IkAd` | func | `(i32) -> (i32)` |
| 169 | `cCVk.xKAj` | func | `(i32) -> (i32)` |
| 170 | `cCVk.Cq2p` | func | `(i32 i32) -> (i32)` |
| 171 | `cCVk.Dgwi` | func | `(i32) -> ()` |
| 172 | `cCVk.CACk` | func | `() -> (i32)` |
| 173 | `cCVk.pUKk` | func | `(i32 i32) -> (i32)` |
| 174 | `cCVk.yNad` | func | `(i32 i32) -> ()` |
| 175 | `cCVk.UOwi` | func | `(i32 i32) -> ()` |
| 176 | `cCVk.Zwu4` | func | `(i32) -> (i32)` |
| 177 | `cCVk.G8IP` | func | `(i32 i32) -> (i32)` |
| 178 | `cCVk.Fm7n` | func | `(i32) -> ()` |
| 179 | `cCVk.w1i8` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 180 | `cCVk.FBzN` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 181 | `cCVk.gNrc` | func | `(i32 i32) -> ()` |
| 182 | `cCVk.ita2` | func | `(i32 i32) -> ()` |
| 183 | `cCVk.x37P` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 184 | `cCVk.KjJF` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 185 | `cCVk.xyc9` | func | `(i32 f32) -> ()` |
| 186 | `cCVk.k8Lc` | func | `(i32 f32) -> ()` |
| 187 | `cCVk.r2YR` | func | `(i32 i32) -> ()` |
| 188 | `cCVk.znUm` | func | `(i32 i32) -> ()` |
| 189 | `cCVk.FIsf` | func | `(i32) -> (i32)` |
| 190 | `cCVk.SDke` | func | `(i32) -> (i32)` |
| 191 | `cCVk.ANLG` | func | `(i32) -> (i32)` |
| 192 | `cCVk.ymtp` | func | `(i32) -> (i32)` |
| 193 | `cCVk.nMqj` | func | `(i32 i32 i32) -> ()` |
| 194 | `cCVk.BfON` | func | `(i32 i32 i32) -> ()` |
| 195 | `cCVk.YiIg` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 196 | `cCVk.ArE2` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 197 | `cCVk.kmjJ` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 198 | `cCVk.ErdP` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 199 | `cCVk.zRjk` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 200 | `cCVk.nJiA` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 201 | `cCVk.NhK3` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 202 | `cCVk.tQyy` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 203 | `cCVk.hMy5` | func | `(i32) -> (i32)` |
| 204 | `cCVk.Z0cW` | func | `(i32) -> (i32)` |
| 205 | `cCVk.uyQO` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 206 | `cCVk.uQIW` | func | `(i32 i32 i32 i32) -> ()` |
| 207 | `cCVk.it3w` | func | `(i32 i32 i32 i32) -> ()` |
| 208 | `cCVk.fZIa` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 209 | `cCVk.mY4r` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 210 | `cCVk.MajY` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 211 | `cCVk.mWGe` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 212 | `cCVk.pwPa` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 213 | `cCVk.Lnqd` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 214 | `cCVk.D3f6` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 215 | `cCVk.Z3Bu` | func | `(i32 i32 i32) -> ()` |
| 216 | `cCVk.vioe` | func | `(i32 i32 i32) -> ()` |
| 217 | `cCVk.MJcr` | func | `(i32 i32) -> ()` |
| 218 | `cCVk.vMkk` | func | `(i32 i32) -> ()` |
| 219 | `cCVk.T4v3` | func | `(i32 i32) -> ()` |
| 220 | `cCVk.U0yt` | func | `(i32 i32) -> ()` |
| 221 | `cCVk.Go3X` | func | `(i32 i32) -> ()` |
| 222 | `cCVk.LxVj` | func | `(i32 i32) -> ()` |
| 223 | `cCVk.ZR8l` | func | `(i32 f32 f32) -> ()` |
| 224 | `cCVk.EYFE` | func | `(i32 f32 f32) -> ()` |
| 225 | `cCVk.Raiw` | func | `(i32 i32) -> ()` |
| 226 | `cCVk.GXEo` | func | `(i32 i32) -> ()` |
| 227 | `cCVk.kQtX` | func | `(i32 i32 i32 f32) -> ()` |
| 228 | `cCVk.rQnn` | func | `(i32 i32 i32 f32) -> ()` |
| 229 | `cCVk.vkgA` | func | `(i32 i32 i32) -> ()` |
| 230 | `cCVk.pFqY` | func | `(i32) -> (i32)` |
| 231 | `cCVk.HAYF` | func | `(i32) -> (i32)` |
| 232 | `cCVk.wQPZ` | func | `(i32 i32) -> ()` |
| 233 | `cCVk.fXWX` | func | `(i32 i32) -> ()` |
| 234 | `cCVk.Nhqh` | func | `(i32 i32 i32 i32) -> (i32)` |
| 235 | `cCVk.AfBb` | func | `(i32 i32 i32 i32) -> ()` |
| 236 | `cCVk.Vqbw` | func | `(i32 i32 i32 i32) -> (i32)` |
| 237 | `cCVk.Xtlx` | func | `(i32 i32 i32 i32) -> (i32)` |
| 238 | `cCVk.xubU` | func | `(i32 i32 i32 i32) -> (i32)` |
| 239 | `cCVk.Q2gN` | func | `(i32 i32 i32) -> ()` |
| 240 | `cCVk.VOs7` | func | `(i32 i32 i32) -> ()` |
| 241 | `cCVk.sMBy` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 242 | `cCVk.GDsT` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 243 | `cCVk.cNMd` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 244 | `cCVk.OUaO` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 245 | `cCVk.hZdG` | func | `(i32) -> (i32)` |
| 246 | `cCVk.tCi4` | func | `(i32) -> (i32)` |
| 247 | `cCVk.aBRu` | func | `(i32 i32 i32 i32) -> ()` |
| 248 | `cCVk.c8Mn` | func | `(i32 i32) -> ()` |
| 249 | `cCVk.KXg0` | func | `(i32 i32) -> ()` |
| 250 | `cCVk.RmqM` | func | `(i32 i32) -> (i32)` |
| 251 | `cCVk.Nr8h` | func | `(i32 i32) -> (i32)` |
| 252 | `cCVk.Xing` | func | `(i32 i32 i32 i32) -> ()` |
| 253 | `cCVk.Zmhd` | func | `(i32 i32 i32 i32) -> ()` |
| 254 | `cCVk.DAVm` | func | `(i32 i32) -> ()` |
| 255 | `cCVk.WHkZ` | func | `(i32 i32) -> ()` |
| 256 | `cCVk.Kvvu` | func | `(i32) -> (i32)` |
| 257 | `cCVk.Wn2B` | func | `(i32 i32 i32 i32) -> ()` |
| 258 | `cCVk.npCx` | func | `(i32 i32 i32 f32) -> ()` |
| 259 | `cCVk.veJc` | func | `(i32) -> ()` |
| 260 | `cCVk.w6Jy` | func | `(i32 i32) -> ()` |
| 261 | `cCVk.nrYP` | func | `(i32 i32) -> ()` |
| 262 | `cCVk.kWUp` | func | `(i32 i32) -> ()` |
| 263 | `cCVk.uifK` | func | `(i32 i32) -> ()` |
| 264 | `cCVk.cmjh` | func | `(i32 i32) -> ()` |
| 265 | `cCVk.CJBN` | func | `(i32 i32) -> ()` |
| 266 | `cCVk.xbGJ` | func | `(i32 i32) -> ()` |
| 267 | `cCVk.bMAS` | func | `(i32 i32) -> ()` |
| 268 | `cCVk.ulmx` | func | `(i32) -> (i32)` |
| 269 | `cCVk.kRC3` | func | `(i32) -> (i32)` |
| 270 | `cCVk.FNem` | func | `(i32) -> (i32)` |
| 271 | `cCVk.gNgt` | func | `(i32) -> (i32)` |
| 272 | `cCVk.PnAD` | func | `(i32 i32 i32 i32) -> ()` |
| 273 | `cCVk.uvEf` | func | `(i32) -> ()` |
| 274 | `cCVk.IS6V` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 275 | `cCVk.KMgn` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 276 | `cCVk.mLUw` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 277 | `cCVk.qUlu` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 278 | `cCVk.onOB` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 279 | `cCVk.D6Mx` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 280 | `cCVk.sD3Y` | func | `(i32) -> (i32)` |
| 281 | `cCVk.kYqW` | func | `(i32) -> (i32)` |
| 282 | `cCVk.yZVm` | func | `(i32) -> (i32)` |
| 283 | `cCVk.Uhoh` | func | `(i32) -> (i32)` |
| 284 | `cCVk.jNHi` | func | `(i32 i32) -> ()` |
| 285 | `cCVk.yjCc` | func | `(i32) -> ()` |
| 286 | `cCVk.N4lH` | func | `(i32 i32) -> ()` |
| 287 | `cCVk.qbAn` | func | `(i32) -> (i32)` |
| 288 | `cCVk.qR7p` | func | `(i32 i32) -> (i32)` |
| 289 | `cCVk.ttUV` | func | `(i32 i32) -> (i32)` |
| 290 | `cCVk.pon5` | func | `(i32 i32) -> (i32)` |
| 291 | `cCVk.teV6` | func | `(f64) -> (i32)` |
| 292 | `cCVk.fHPz` | func | `(i32 i32) -> (i32)` |
| 293 | `cCVk.FfQq` | func | `(i32 i32) -> (i32)` |
| 294 | `cCVk.MgP6` | func | `(i32 i32) -> (i32)` |
| 295 | `cCVk.sLM6` | func | `(i32 i32) -> (i32)` |
| 296 | `cCVk.kVmT` | func | `(i32 i32) -> (i32)` |
| 297 | `cCVk.a21y` | func | `(i32 i32) -> (i32)` |
| 298 | `cCVk.mQl0` | func | `(i32 i32) -> (i32)` |

## Exports

156 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `vNfZ` | func | 1572 | `(i32 i32) -> (i32)` |
| `HanS` | func | 888 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `sASA` | func | 1477 | `(i32 i32 i32 i32) -> (i32)` |
| `mEKv` | func | 3192 | `() -> (i32)` |
| `u3VZ` | func | 1385 | `(i32 f64 f64) -> (i32)` |
| `aUjm` | func | 1943 | `(i32) -> (i32)` |
| `QvdP` | func | 1851 | `(i32 i32 f64 f64 f64) -> ()` |
| `vsA6` | func | 1694 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `R1Cn` | func | 3000 | `(i32 i32) -> (i32 i32)` |
| `ZCiJ` | func | 1432 | `() -> (i32)` |
| `gQvx` | func | 1508 | `(i32 i32) -> (i32)` |
| `JqPQ` | func | 2466 | `(i32) -> (i32)` |
| `YTvI` | func | 2444 | `(i32 i32) -> ()` |
| `yiXl` | func | 2998 | `(i32 i32) -> (i32 i32)` |
| `g6In` | func | 1478 | `(i32) -> (i32)` |
| `i7Lr` | func | 2787 | `(i32) -> (i32)` |
| `x1ET` | func | 1384 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `wdLy` | func | 2143 | `(i32 i32) -> (i32)` |
| `YsGh` | func | 3052 | `(i32 i32 i32 i32) -> ()` |
| `imO3` | func | 1810 | `() -> (i32)` |
| `GetW` | func | 1587 | `(i32 f64 f64 f64) -> (i32)` |
| `qnHc` | func | 2020 | `(i32 f64 f64 f64) -> (i32)` |
| `VkQO` | func | 618 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `er1P` | func | 1582 | `(i32 i32) -> ()` |
| `OlKw` | func | 2583 | `(i32 i32) -> ()` |
| `txOJ` | func | 1875 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `OaXl` | func | 3001 | `(i32 i32) -> (i32 i32)` |
| `s2uE` | func | 2400 | `(i32) -> (i32)` |
| `OsfT` | func | 2462 | `(i32) -> (i32)` |
| `Jt1J` | func | 3164 | `() -> (f64)` |
| `p5Kh` | func | 2458 | `(i32) -> (f64)` |
| `wNvS` | func | 669 | `(i32 i32) -> (i32)` |
| `jNkl` | func | 1816 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `j3jk` | func | 1257 | `(i32 i32 i32) -> (i32)` |
| `mc6v` | func | 2942 | `() -> ()` |
| `i3Eu` | func | 1583 | `(i32 i32) -> ()` |
| `tb4L` | func | 1484 | `(i32 i32) -> (i32)` |
| `XxV6` | func | 2445 | `(i32) -> (i32)` |
| `FguS` | func | 3169 | `(i32) -> ()` |
| `NXQt` | func | 3062 | `(i32 i32) -> ()` |
| `atk3` | func | 3013 | `(i32) -> (i32 i32)` |
| `qLVL` | func | 2762 | `(i32) -> (i32)` |
| `Jl2y` | func | 3012 | `(i32) -> (i32 i32)` |
| `dGAU` | func | 1926 | `(i32) -> (i32)` |
| `YdRO` | func | 2537 | `(i32 i32) -> ()` |
| `vDNa` | func | 810 | `(i32 i32) -> (i32)` |
| `pAQR` | func | 1469 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `rwtj` | func | 1945 | `(i32 i32 i32 i32) -> ()` |
| `n7rI` | func | 706 | `(i32 i32) -> (i32)` |
| `memory` | memory | 0 | `` |
| `BTOJ` | func | 759 | `(i32 i32 i32) -> (i32)` |
| `w819` | func | 3003 | `(i32 i32) -> (i32 i32)` |
| `TaKT` | func | 2549 | `() -> (i32)` |
| `qVFp` | func | 2497 | `(i32) -> (i32)` |
| `S2gs` | func | 3193 | `() -> (i32)` |
| `RYVi` | func | 1627 | `(i32 i32 i32 i32) -> (i32)` |
| `xBol` | func | 2476 | `(i32 i32) -> ()` |
| `CnHx` | func | 2039 | `(i32 i32) -> ()` |
| `d9WJ` | func | 1509 | `(i32 i32) -> (i32)` |
| `saep` | func | 2488 | `(i32) -> (i32)` |
| `RXpN` | func | 2468 | `(i32) -> (i32)` |
| `THtS` | func | 3027 | `() -> (i32 i32)` |
| `AV2B` | func | 2999 | `(i32 i32) -> (i32 i32)` |
| `EISW` | func | 2467 | `(i32) -> (i32)` |
| `Oo0s` | func | 2961 | `(i32 i32) -> (i32)` |
| `WuTV` | func | 1544 | `(i32 i32 i32 i32) -> (i32)` |
| `n6ha` | func | 568 | `(i32 i32 i32) -> (i32)` |
| `dYum` | func | 3117 | `(i32 i32 i32) -> ()` |
| `f1Cm` | func | 2403 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `a1Fg` | func | 1511 | `(i32 f64) -> (f64)` |
| `O1p8` | func | 3014 | `(i32) -> (i32 i32)` |
| `cw67` | func | 3061 | `(i32 i32 i32) -> ()` |
| `FdaH` | func | 2993 | `(i32 i32 i32) -> (i32 i32)` |
| `HNvZ` | func | 2974 | `(i32 i32) -> ()` |
| `oDfw` | func | 3028 | `() -> (i32 i32)` |
| `kn8v` | func | 1884 | `(i32) -> ()` |
| `cHoK` | func | 2175 | `(i32 i32) -> (i32)` |
| `eG8I` | func | 918 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `tavy` | func | 2195 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `iLiy` | func | 1109 | `(i32 i32) -> (i32)` |
| `lqAv` | func | 889 | `(i32 i32) -> (i32)` |
| `t2rw` | func | 1497 | `(i32 i32) -> (i32)` |
| `LxOg` | func | 1978 | `(i32 i32) -> ()` |
| `JgqL` | func | 3002 | `(i32 i32) -> (i32 i32)` |
| `utAN` | func | 1868 | `(i32 i32) -> (i32)` |
| `ySxH` | func | 2464 | `(i32) -> (i32)` |
| `GJBY` | func | 1283 | `(i32) -> (i32)` |
| `lhbS` | func | 3090 | `() -> (i32)` |
| `L7Jl` | func | 2489 | `(i32 i32) -> (i32)` |
| `L01r` | func | 2967 | `(i32 i32 i32 i32) -> (i32)` |
| `wIzm` | func | 1404 | `(i32 i32) -> (i32)` |
| `xJAq` | func | 2499 | `(i32) -> (i32)` |
| `zhij` | func | 2329 | `(i32 i32) -> (i32)` |
| `Cssz` | func | 1110 | `(i32 i32) -> ()` |
| `FB7W` | global | 2 | `` |
| `bdkq` | func | 1264 | `(i32 i32 i32) -> ()` |
| `MWjk` | func | 1733 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `LOda` | func | 1170 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `hDtS` | func | 2992 | `(i32 i32 i32) -> (i32 i32)` |
| `OyMh` | func | 2331 | `(i32 i32) -> (i32)` |
| `Y1Ls` | func | 2373 | `(i32 i32 i32 i32) -> (i32)` |
| `TYfU` | func | 2479 | `(i32) -> (i32)` |
| `CPbU` | func | 2004 | `(i32 f64) -> (i32)` |
| `ieB9` | func | 2798 | `(i32) -> ()` |
| `wloh` | func | 2280 | `(i32 i32) -> ()` |
| `z31X` | func | 2490 | `(i32 i32) -> (i32)` |
| `yfud` | func | 2461 | `(i32) -> (i32)` |
| `UYDS` | func | 1316 | `(i32) -> ()` |
| `qJmK` | func | 3015 | `(i32) -> (i32 i32)` |
| `Z4lo` | func | 3016 | `(i32) -> (i32 i32)` |
| `D8fM` | func | 2061 | `(i32 i32) -> (i32)` |
| `wHqp` | func | 2478 | `(i32) -> (i32)` |
| `hy7Q` | func | 1831 | `(i32 i32 i32 i32) -> (i32)` |
| `tGYo` | func | 2460 | `(i32) -> (i32)` |
| `sBeQ` | func | 2463 | `(i32) -> (i32)` |
| `oPHG` | func | 1209 | `(i32 i32 i32 i32) -> (i32)` |
| `JWvy` | func | 2776 | `(i32) -> (i32)` |
| `CahB` | func | 1557 | `(i32) -> (i32)` |
| `ZbsT` | func | 3123 | `(i32) -> ()` |
| `AQ9s` | func | 2481 | `(i32) -> (i32)` |
| `gQw5` | func | 1524 | `(i32 i32 i32) -> (i32)` |
| `bFS3` | func | 3168 | `(i32) -> (i32)` |
| `OhUf` | func | 737 | `(i32) -> (i32)` |
| `Dhlw` | func | 1428 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `Zvqx` | func | 3004 | `(i32 i32) -> (i32 i32)` |
| `Qj0m` | func | 2361 | `(i32 i32) -> (i32)` |
| `A89L` | func | 2250 | `(i32 f64) -> (i32)` |
| `nuIp` | func | 679 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `Eiz0` | func | 2417 | `(i32) -> (i32)` |
| `PujG` | func | 907 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `yY45` | func | 2465 | `(i32) -> ()` |
| `Lhar` | func | 743 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `KEoX` | global | 1 | `` |
| `bsgc` | func | 3124 | `() -> ()` |
| `lfp7` | func | 1717 | `(i32) -> (i32)` |
| `A7qV` | func | 1454 | `(i32 i32 i32 i32) -> ()` |
| `EnHi` | func | 2480 | `(i32 i32) -> ()` |
| `v3gI` | func | 1331 | `(i32 i32 i32) -> (i32)` |
| `Azo3` | func | 1858 | `(i32 i32) -> ()` |
| `azDU` | func | 1883 | `(i32) -> ()` |
| `IrTc` | func | 1237 | `(i32 i32) -> (i32)` |
| `XDkl` | func | 1215 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `mTR4` | func | 2330 | `(i32 i32) -> (i32)` |
| `GPjF` | func | 2332 | `(i32 i32) -> (i32)` |
| `vpzw` | func | 735 | `(i32 i32 i32 i32) -> (i32)` |
| `iCdP` | func | 1208 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `rXjp` | func | 1751 | `(i32 i32) -> (i32)` |
| `KMhT` | func | 2249 | `(i32 i32) -> ()` |
| `D095` | func | 2755 | `(i32) -> (i32)` |
| `Xbmp` | func | 1290 | `(i32 i32) -> (i32)` |
| `UcO5` | func | 2498 | `(i32) -> (i32)` |
| `GhaP` | func | 2584 | `() -> (i32)` |
| `mjN8` | func | 2820 | `(i32) -> (i32)` |
| `TE13` | func | 2459 | `(i32) -> (i32)` |
| `KwuE` | func | 1474 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `vzfj` | func | 1739 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 753 · max 753
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2637800, `i32` = i32.const 2638372

## Functions

- 2,905 bodies · 4,031,927 code bytes · avg 1.4 KB
- instruction scan: 2,905 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 156 |
| <= 64 bytes | 113 |
| <= 128 bytes | 257 |
| <= 256 bytes | 376 |
| <= 512 bytes | 672 |
| <= 1024 bytes | 572 |
| <= 2048 bytes | 421 |
| <= 4096 bytes | 182 |
| <= 8192 bytes | 91 |
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
| 196 | `(i32 i32) -> ()` | 10 | 26,597 | 12,807 | local.get×4506, i32.load×1211, i32.const×1022, end×797, i32.add×734 |
| 226 | `(i32) -> ()` | 19 | 23,160 | 10,851 | local.get×2722, i32.load×1494, i32.const×1177, local.tee×1008, end×853 |
| 716 | `(i32 i32 i32 i32) -> ()` | 54 | 21,810 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
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
| `local.get` | 538,852 |
| `i32.const` | 225,816 |
| `local.tee` | 100,234 |
| `i32.load` | 94,541 |
| `local.set` | 93,862 |
| `i32.add` | 87,237 |
| `end` | 79,183 |
| `br_if` | 64,265 |
| `i32.store` | 46,770 |
| `block` | 37,219 |
| `i64.const` | 32,611 |
| `i64.store` | 31,730 |
| `if` | 30,268 |
| `call` | 29,448 |
| `i32.sub` | 24,631 |
| `i64.load` | 23,613 |
| `br` | 23,108 |
| `i32.eqz` | 19,523 |
| `select` | 16,883 |
| `i32.shl` | 16,447 |
| `i32.and` | 16,295 |
| `i32.ne` | 15,857 |
| `i32.load8_u` | 14,951 |
| `i32.eq` | 13,866 |
| `i32.store8` | 12,612 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 2,905/2,905 (degraded: 0)
