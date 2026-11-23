# WASM module: `bloxd_wasm_webgl_bg`

> environment **staging.bloxd.io** · build `31kiid.1299b0d6` · analyzed 2026-11-24T07:07:09+09:00
> source: https://staging.bloxd.io/static/media/bloxd_wasm_webgl_bg.e77b9dabd302333de511.wasm
> 5,500,808 bytes (5.2 MB) · sha256 `3d1d580992195f63…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- name-section module id `e06f5bd3c7670973.10886` → `5acdf3c4f5b93980.10886` (numeric version suffix unchanged — same module version, re-randomized prefix)
- export identifiers rotated by the obfuscator: 1/156 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,904 / 299 |
| Exports / imports | 156 / 300 |
| Code bytes (function bodies) | 4,029,569 (3.8 MB) |
| Total local variables | 30,681 |
| Instructions (scanable bodies) | 1,889,707 |
| Data segments / bytes | 4,028 / 1,422,466 |
| Element segments / entries | 1 / 752 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `5acdf3c4f5b93980.10886` |
| Sections | 11 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,498 | 176 |
| 2 | import | 3,606 | 300 |
| 3 | function | 2,954 | 2904 |
| 4 | table | 7 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,249 | 156 |
| 9 | element | 1,511 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 4,034,891 | 2904 |
| 11 | data | 1,454,995 | 4028 |
| 0 | custom:name | 30 | — |

## Types

176 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32) -> ()` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

300 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `M4Wt.fjs8` | memory | `[128..14648]` |
| 0 | `M4Wt.JAX5` | func | `(i32) -> (f64)` |
| 1 | `M4Wt.ZlHk` | func | `() -> (i32)` |
| 2 | `M4Wt.xtep` | func | `(i32 i32 i32) -> (i32)` |
| 3 | `M4Wt.iG07` | func | `(i32) -> ()` |
| 4 | `M4Wt.DrbW` | func | `(i32 i32) -> (i32)` |
| 5 | `M4Wt.grb0` | func | `(i32) -> (i32)` |
| 6 | `M4Wt.UjqF` | func | `(i32 i32 i32) -> (i32)` |
| 7 | `M4Wt.FcFo` | func | `(i32 i32 i32 i32) -> (i32)` |
| 8 | `M4Wt.DTCo` | func | `(i32) -> (i32)` |
| 9 | `M4Wt.k3ih` | func | `(i32 i32) -> ()` |
| 10 | `M4Wt.GABT` | func | `(i32 i32) -> ()` |
| 11 | `M4Wt.y267` | func | `(i32 i32 i32 i32) -> (i32)` |
| 12 | `M4Wt.ZyXA` | func | `(i32 i32) -> (i32)` |
| 13 | `M4Wt.QHMV` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 14 | `M4Wt.zMRe` | func | `(i32) -> (i32)` |
| 15 | `M4Wt.auGn` | func | `(i32 i32) -> (i32)` |
| 16 | `M4Wt.Z08I` | func | `(i32 i32) -> (i32)` |
| 17 | `M4Wt.kuzg` | func | `(i32 i32) -> ()` |
| 18 | `M4Wt.kWHS` | func | `(i32) -> (i32)` |
| 19 | `M4Wt.a2h7` | func | `(i32) -> (i32)` |
| 20 | `M4Wt.YoWh` | func | `(i32) -> (i32)` |
| 21 | `M4Wt.SFag` | func | `(i32) -> ()` |
| 22 | `M4Wt.Ekf8` | func | `(i32 i32) -> ()` |
| 23 | `M4Wt.Awop` | func | `(i32 i32) -> ()` |
| 24 | `M4Wt.ZxxZ` | func | `(i32 f64 f64 f64 f64) -> ()` |
| 25 | `M4Wt.h7ao` | func | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64) -> ()` |
| 26 | `M4Wt.aLff` | func | `(i32) -> (i32)` |
| 27 | `M4Wt.Aa8r` | func | `(i32 i32) -> ()` |
| 28 | `M4Wt.PSHE` | func | `(i32 i32) -> (i32)` |
| 29 | `M4Wt.hquc` | func | `(i32 i32 i32 i32) -> ()` |
| 30 | `M4Wt.Lp9g` | func | `(i32 i32) -> (i32)` |
| 31 | `M4Wt.ZHLe` | func | `(i32 i32 i32) -> (i32)` |
| 32 | `M4Wt.DT58` | func | `(i32) -> (i32)` |
| 33 | `M4Wt.cvtP` | func | `(i32 i32) -> ()` |
| 34 | `M4Wt.QGkj` | func | `(i32 i32 i32) -> (i32)` |
| 35 | `M4Wt.dv7m` | func | `(i32) -> (i32)` |
| 36 | `M4Wt.lFjY` | func | `(i32) -> (i32)` |
| 37 | `M4Wt.Gcxm` | func | `(i32) -> (i32)` |
| 38 | `M4Wt.GdVb` | func | `(i32 i32) -> (i32)` |
| 39 | `M4Wt.LQI2` | func | `(i32 i32 i32 i32) -> ()` |
| 40 | `M4Wt.cD0p` | func | `(i32) -> (i32)` |
| 41 | `M4Wt.a9Sa` | func | `(i32 i32 i32 i32) -> ()` |
| 42 | `M4Wt.Ovwz` | func | `() -> (f64)` |
| 43 | `M4Wt.GrAp` | func | `(i32) -> (i32)` |
| 44 | `M4Wt.zCNc` | func | `(i32 i32 i32 i32) -> ()` |
| 45 | `M4Wt.xxsh` | func | `(i32 i32 i32) -> (i32)` |
| 46 | `M4Wt.ma47` | func | `(i32 i32 i32) -> ()` |
| 47 | `M4Wt.bN59` | func | `(i32 i32 i32) -> ()` |
| 48 | `M4Wt.hX3p` | func | `(i32 i32 i32) -> ()` |
| 49 | `M4Wt.CEKX` | func | `(i32 i32 i32 i32) -> ()` |
| 50 | `M4Wt.unPi` | func | `(i32 i32 i32 i32) -> ()` |
| 51 | `M4Wt.Mjwm` | func | `(i32 i32) -> ()` |
| 52 | `M4Wt.NYKr` | func | `(i32 i32) -> ()` |
| 53 | `M4Wt.NZra` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 54 | `M4Wt.tsiY` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 55 | `M4Wt.q2xe` | func | `(i32 f32 f32) -> ()` |
| 56 | `M4Wt.PPmo` | func | `(i32 f32 f32) -> ()` |
| 57 | `M4Wt.JUbZ` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 58 | `M4Wt.woEQ` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 59 | `M4Wt.fZ5x` | func | `(i32 i32 i32 i32) -> ()` |
| 60 | `M4Wt.sVjg` | func | `(i32 i32 i32 i32) -> ()` |
| 61 | `M4Wt.pos0` | func | `(i32 i32 i32) -> ()` |
| 62 | `M4Wt.r6gs` | func | `(i32 i32 i32) -> ()` |
| 63 | `M4Wt.r16S` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 64 | `M4Wt.tKxS` | func | `(i32 i32 i32) -> ()` |
| 65 | `M4Wt.OYkA` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 66 | `M4Wt.PhBB` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 67 | `M4Wt.Dtzq` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 68 | `M4Wt.MO0p` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 69 | `M4Wt.rS42` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 70 | `M4Wt.OTWV` | func | `(i32) -> (i32)` |
| 71 | `M4Wt.QsG2` | func | `(i32) -> ()` |
| 72 | `M4Wt.P1BZ` | func | `(i32) -> (i32)` |
| 73 | `M4Wt.Amn4` | func | `(i32 i32) -> (i32)` |
| 74 | `M4Wt.FmJu` | func | `(i32 i32 i32) -> (i32)` |
| 75 | `M4Wt.LJho` | func | `(i32 i32 i32) -> ()` |
| 76 | `M4Wt.lm7T` | func | `(i32 i32 i32 i32) -> (i32)` |
| 77 | `M4Wt.a516` | func | `() -> (f64)` |
| 78 | `M4Wt.g21b` | func | `() -> (f64)` |
| 79 | `M4Wt.yKjX` | func | `(i32 i32) -> ()` |
| 80 | `M4Wt.PBUi` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 81 | `M4Wt.Dkzu` | func | `(i32 i32 i32) -> (i32)` |
| 82 | `M4Wt.vHsQ` | func | `(i32 i32 i32) -> ()` |
| 83 | `M4Wt.Kbyj` | func | `(i32 i32 i32) -> ()` |
| 84 | `M4Wt.NrXY` | func | `(i32 i32) -> ()` |
| 85 | `M4Wt.JLRS` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 86 | `M4Wt.Uca9` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 87 | `M4Wt.Cy0O` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 88 | `M4Wt.uAfx` | func | `(i32 i32) -> ()` |
| 89 | `M4Wt.h4vK` | func | `(i32 i32) -> ()` |
| 90 | `M4Wt.z9w2` | func | `(i32) -> (i32)` |
| 91 | `M4Wt.eSZu` | func | `(i32 i32 i32) -> ()` |
| 92 | `M4Wt.HSxM` | func | `(i32 i32 i32) -> ()` |
| 93 | `M4Wt.z6fD` | func | `(i32) -> (i32)` |
| 94 | `M4Wt.prnc` | func | `(i32) -> (i32)` |
| 95 | `M4Wt.m0Uq` | func | `(i32 i32) -> ()` |
| 96 | `M4Wt.wnB9` | func | `(i32 i32) -> ()` |
| 97 | `M4Wt.TaKe` | func | `(i32 i32) -> ()` |
| 98 | `M4Wt.oeyB` | func | `(i32 i32) -> ()` |
| 99 | `M4Wt.qSLn` | func | `(i32 i32 i32) -> ()` |
| 100 | `M4Wt.uBCV` | func | `(i32 i32 i32) -> ()` |
| 101 | `M4Wt.dazx` | func | `(i32 i32 f32) -> ()` |
| 102 | `M4Wt.S9Dd` | func | `(i32 i32 f32) -> ()` |
| 103 | `M4Wt.R8qA` | func | `(i32 i32 i32) -> ()` |
| 104 | `M4Wt.QDXx` | func | `(i32 i32 f32 f32) -> ()` |
| 105 | `M4Wt.U2fl` | func | `(i32 i32 f32 f32) -> ()` |
| 106 | `M4Wt.u1Vd` | func | `(i32 i32) -> ()` |
| 107 | `M4Wt.Rrhz` | func | `(i32 i32) -> ()` |
| 108 | `M4Wt.tBys` | func | `(i32 i32) -> ()` |
| 109 | `M4Wt.wCtY` | func | `(i32 i32) -> ()` |
| 110 | `M4Wt.FA1D` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 111 | `M4Wt.NMGI` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 112 | `M4Wt.TsJ8` | func | `(i32 i32 i32) -> ()` |
| 113 | `M4Wt.lZBU` | func | `(i32 i32 i32) -> ()` |
| 114 | `M4Wt.h5DU` | func | `(i32 i32 i32 i32) -> ()` |
| 115 | `M4Wt.upuj` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 116 | `M4Wt.Fogg` | func | `(i32 i32) -> ()` |
| 117 | `M4Wt.m5hY` | func | `(i32 i32) -> ()` |
| 118 | `M4Wt.N4MZ` | func | `(i32 i32) -> (i32)` |
| 119 | `M4Wt.YBSl` | func | `(i32 i32) -> (i32)` |
| 120 | `M4Wt.CD6f` | func | `(i32 i32) -> ()` |
| 121 | `M4Wt.rxC9` | func | `(i32 i32) -> ()` |
| 122 | `M4Wt.Kz2c` | func | `(i32) -> (i32)` |
| 123 | `M4Wt.LCJN` | func | `(i32 i32) -> ()` |
| 124 | `M4Wt.g6yc` | func | `(i32 i32) -> ()` |
| 125 | `M4Wt.u7iO` | func | `(i32 i32 i32 i32) -> ()` |
| 126 | `M4Wt.wbxB` | func | `(i32 i32 i32) -> ()` |
| 127 | `M4Wt.ordW` | func | `(i32 i32 i32) -> ()` |
| 128 | `M4Wt.EBkR` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 129 | `M4Wt.Dae1` | func | `(i32 i32) -> ()` |
| 130 | `M4Wt.dfnb` | func | `(i32 i32 i32) -> ()` |
| 131 | `M4Wt.hXeI` | func | `(i32 i32 i32) -> ()` |
| 132 | `M4Wt.sBUH` | func | `(i32 i32 i32) -> ()` |
| 133 | `M4Wt.ly0l` | func | `(i32 i32 i32) -> ()` |
| 134 | `M4Wt.nzvV` | func | `(i32) -> ()` |
| 135 | `M4Wt.DtvS` | func | `(i32 i32 i32) -> (i32)` |
| 136 | `M4Wt.qQwJ` | func | `(i32 i32 i32) -> ()` |
| 137 | `M4Wt.Ekg0` | func | `(i32 i32 i32) -> (i32)` |
| 138 | `M4Wt.o3Uw` | func | `(i32 i32) -> ()` |
| 139 | `M4Wt.T8ls` | func | `(i32) -> (i32)` |
| 140 | `M4Wt.R0RY` | func | `(i32 i32) -> ()` |
| 141 | `M4Wt.FZv6` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 142 | `M4Wt.YcnI` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 143 | `M4Wt.R1w7` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 144 | `M4Wt.gzJW` | func | `(i32 i32 i32) -> (i32)` |
| 145 | `M4Wt.DM7G` | func | `(i32 i32 i32) -> (i32)` |
| 146 | `M4Wt.bABi` | func | `(i32 i32) -> ()` |
| 147 | `M4Wt.Uckl` | func | `(i32 i32) -> ()` |
| 148 | `M4Wt.UBwS` | func | `(i32 i32) -> ()` |
| 149 | `M4Wt.SD89` | func | `(i32 i32) -> ()` |
| 150 | `M4Wt.JPUK` | func | `(i32) -> (i32)` |
| 151 | `M4Wt.L5I1` | func | `(i32) -> (i32)` |
| 152 | `M4Wt.CRne` | func | `(i32) -> (i32)` |
| 153 | `M4Wt.i6bm` | func | `(i32) -> (i32)` |
| 154 | `M4Wt.k4eO` | func | `(i32) -> (i32)` |
| 155 | `M4Wt.NWCp` | func | `(i32) -> (i32)` |
| 156 | `M4Wt.varB` | func | `() -> (i32)` |
| 157 | `M4Wt.WxvJ` | func | `() -> (i32)` |
| 158 | `M4Wt.qyrG` | func | `() -> (i32)` |
| 159 | `M4Wt.GMre` | func | `() -> (i32)` |
| 160 | `M4Wt.mEsi` | func | `(i32 i32) -> (i32)` |
| 161 | `M4Wt.zugq` | func | `(i32) -> ()` |
| 162 | `M4Wt.QMrs` | func | `(i32 i32) -> (i32)` |
| 163 | `M4Wt.UBvM` | func | `(i32) -> (i32)` |
| 164 | `M4Wt.uwtd` | func | `(i32) -> (i32)` |
| 165 | `M4Wt.rUoK` | func | `(i32) -> (i32)` |
| 166 | `M4Wt.vvqO` | func | `(i32) -> ()` |
| 167 | `M4Wt.LIAi` | func | `(i32 i32 i32) -> (i32)` |
| 168 | `M4Wt.e7qz` | func | `(i32) -> (i32)` |
| 169 | `M4Wt.k3T5` | func | `(i32) -> (i32)` |
| 170 | `M4Wt.JwBB` | func | `(i32 i32) -> (i32)` |
| 171 | `M4Wt.dqQK` | func | `(i32) -> ()` |
| 172 | `M4Wt.e7Jd` | func | `() -> (i32)` |
| 173 | `M4Wt.Yfgq` | func | `(i32 i32) -> (i32)` |
| 174 | `M4Wt.wvHx` | func | `(i32 i32) -> ()` |
| 175 | `M4Wt.qAtT` | func | `(i32 i32) -> ()` |
| 176 | `M4Wt.R7L2` | func | `(i32) -> (i32)` |
| 177 | `M4Wt.oY0B` | func | `(i32 i32) -> (i32)` |
| 178 | `M4Wt.VwUr` | func | `(i32) -> ()` |
| 179 | `M4Wt.AFKx` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 180 | `M4Wt.oXni` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 181 | `M4Wt.a4DJ` | func | `(i32 i32) -> ()` |
| 182 | `M4Wt.knQA` | func | `(i32 i32) -> ()` |
| 183 | `M4Wt.RqgV` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 184 | `M4Wt.RhLP` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 185 | `M4Wt.gCM1` | func | `(i32 f32) -> ()` |
| 186 | `M4Wt.gk6f` | func | `(i32 f32) -> ()` |
| 187 | `M4Wt.Nkrk` | func | `(i32 i32) -> ()` |
| 188 | `M4Wt.dCSg` | func | `(i32 i32) -> ()` |
| 189 | `M4Wt.sLos` | func | `(i32) -> (i32)` |
| 190 | `M4Wt.nXAh` | func | `(i32) -> (i32)` |
| 191 | `M4Wt.MCPD` | func | `(i32) -> (i32)` |
| 192 | `M4Wt.MUJ9` | func | `(i32) -> (i32)` |
| 193 | `M4Wt.jChk` | func | `(i32 i32 i32) -> ()` |
| 194 | `M4Wt.XA3C` | func | `(i32 i32 i32) -> ()` |
| 195 | `M4Wt.MKN9` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 196 | `M4Wt.NQM1` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 197 | `M4Wt.Z9Fr` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 198 | `M4Wt.blQd` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 199 | `M4Wt.G6WM` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 200 | `M4Wt.yNHg` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 201 | `M4Wt.rvW1` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 202 | `M4Wt.JP4B` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 203 | `M4Wt.o4MH` | func | `(i32) -> (i32)` |
| 204 | `M4Wt.Dmyj` | func | `(i32) -> (i32)` |
| 205 | `M4Wt.PKCN` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 206 | `M4Wt.gBpa` | func | `(i32 i32 i32 i32) -> ()` |
| 207 | `M4Wt.gsZg` | func | `(i32 i32 i32 i32) -> ()` |
| 208 | `M4Wt.Ckcq` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 209 | `M4Wt.WOdg` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 210 | `M4Wt.SxOl` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 211 | `M4Wt.CL64` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 212 | `M4Wt.cEtL` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 213 | `M4Wt.XP3K` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 214 | `M4Wt.c73F` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 215 | `M4Wt.mVnW` | func | `(i32 i32 i32) -> ()` |
| 216 | `M4Wt.BJLc` | func | `(i32 i32 i32) -> ()` |
| 217 | `M4Wt.SJIj` | func | `(i32 i32) -> ()` |
| 218 | `M4Wt.N5e3` | func | `(i32 i32) -> ()` |
| 219 | `M4Wt.FPib` | func | `(i32 i32) -> ()` |
| 220 | `M4Wt.gMRk` | func | `(i32 i32) -> ()` |
| 221 | `M4Wt.jGDp` | func | `(i32 i32) -> ()` |
| 222 | `M4Wt.xE9C` | func | `(i32 i32) -> ()` |
| 223 | `M4Wt.B7Qi` | func | `(i32 f32 f32) -> ()` |
| 224 | `M4Wt.g1GP` | func | `(i32 f32 f32) -> ()` |
| 225 | `M4Wt.Bj1g` | func | `(i32 i32) -> ()` |
| 226 | `M4Wt.ERLW` | func | `(i32 i32) -> ()` |
| 227 | `M4Wt.fu2z` | func | `(i32 i32 i32 f32) -> ()` |
| 228 | `M4Wt.kUY6` | func | `(i32 i32 i32 f32) -> ()` |
| 229 | `M4Wt.vu8h` | func | `(i32 i32 i32) -> ()` |
| 230 | `M4Wt.hApI` | func | `(i32) -> (i32)` |
| 231 | `M4Wt.JCMw` | func | `(i32) -> (i32)` |
| 232 | `M4Wt.ZcgY` | func | `(i32 i32) -> ()` |
| 233 | `M4Wt.MzP0` | func | `(i32 i32) -> ()` |
| 234 | `M4Wt.oa2a` | func | `(i32 i32 i32 i32) -> (i32)` |
| 235 | `M4Wt.tpUD` | func | `(i32 i32 i32 i32) -> ()` |
| 236 | `M4Wt.MLXM` | func | `(i32 i32 i32 i32) -> (i32)` |
| 237 | `M4Wt.yRgo` | func | `(i32 i32 i32 i32) -> (i32)` |
| 238 | `M4Wt.pIRg` | func | `(i32 i32 i32 i32) -> (i32)` |
| 239 | `M4Wt.sQ9F` | func | `(i32 i32 i32) -> ()` |
| 240 | `M4Wt.N6eC` | func | `(i32 i32 i32) -> ()` |
| 241 | `M4Wt.PWOF` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 242 | `M4Wt.csYG` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 243 | `M4Wt.hnxz` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 244 | `M4Wt.MhMg` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 245 | `M4Wt.dOI1` | func | `(i32) -> (i32)` |
| 246 | `M4Wt.dUJD` | func | `(i32) -> (i32)` |
| 247 | `M4Wt.dWHx` | func | `(i32 i32 i32 i32) -> ()` |
| 248 | `M4Wt.ND0x` | func | `(i32 i32) -> ()` |
| 249 | `M4Wt.qtEh` | func | `(i32 i32) -> ()` |
| 250 | `M4Wt.yAe8` | func | `(i32 i32) -> (i32)` |
| 251 | `M4Wt.mNrf` | func | `(i32 i32) -> (i32)` |
| 252 | `M4Wt.ZlrS` | func | `(i32 i32 i32 i32) -> ()` |
| 253 | `M4Wt.m6HZ` | func | `(i32 i32 i32 i32) -> ()` |
| 254 | `M4Wt.hoQ0` | func | `(i32 i32) -> ()` |
| 255 | `M4Wt.Yj6Q` | func | `(i32 i32) -> ()` |
| 256 | `M4Wt.fcqL` | func | `(i32) -> (i32)` |
| 257 | `M4Wt.tct0` | func | `(i32 i32 i32 i32) -> ()` |
| 258 | `M4Wt.eFtW` | func | `(i32 i32 i32 f32) -> ()` |
| 259 | `M4Wt.Gryh` | func | `(i32) -> ()` |
| 260 | `M4Wt.HNCC` | func | `(i32 i32) -> ()` |
| 261 | `M4Wt.wteh` | func | `(i32 i32) -> ()` |
| 262 | `M4Wt.gHAX` | func | `(i32 i32) -> ()` |
| 263 | `M4Wt.U8jY` | func | `(i32 i32) -> ()` |
| 264 | `M4Wt.cPPw` | func | `(i32 i32) -> ()` |
| 265 | `M4Wt.ZkHD` | func | `(i32 i32) -> ()` |
| 266 | `M4Wt.EDiI` | func | `(i32 i32) -> ()` |
| 267 | `M4Wt.wNOc` | func | `(i32 i32) -> ()` |
| 268 | `M4Wt.CiWh` | func | `(i32) -> (i32)` |
| 269 | `M4Wt.M8kC` | func | `(i32) -> (i32)` |
| 270 | `M4Wt.TYYo` | func | `(i32) -> (i32)` |
| 271 | `M4Wt.x6sQ` | func | `(i32) -> (i32)` |
| 272 | `M4Wt.mq9I` | func | `(i32 i32 i32 i32) -> ()` |
| 273 | `M4Wt.yCb3` | func | `(i32) -> ()` |
| 274 | `M4Wt.lLZv` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 275 | `M4Wt.NyP2` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 276 | `M4Wt.CxD9` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 277 | `M4Wt.u4im` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 278 | `M4Wt.uSmY` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 279 | `M4Wt.XvXL` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 280 | `M4Wt.AOGr` | func | `(i32) -> (i32)` |
| 281 | `M4Wt.K39s` | func | `(i32) -> (i32)` |
| 282 | `M4Wt.RKEK` | func | `(i32) -> (i32)` |
| 283 | `M4Wt.khOG` | func | `(i32) -> (i32)` |
| 284 | `M4Wt.YtyP` | func | `(i32 i32) -> ()` |
| 285 | `M4Wt.UHnJ` | func | `(i32) -> ()` |
| 286 | `M4Wt.nSWQ` | func | `(i32 i32) -> ()` |
| 287 | `M4Wt.lViY` | func | `(i32) -> (i32)` |
| 288 | `M4Wt.vKzW` | func | `(i32 i32) -> (i32)` |
| 289 | `M4Wt.tx7S` | func | `(i32 i32) -> (i32)` |
| 290 | `M4Wt.UPZr` | func | `(i32 i32) -> (i32)` |
| 291 | `M4Wt.u9hA` | func | `(f64) -> (i32)` |
| 292 | `M4Wt.ky9x` | func | `(i32 i32) -> (i32)` |
| 293 | `M4Wt.G3Eq` | func | `(i32 i32) -> (i32)` |
| 294 | `M4Wt.tE2l` | func | `(i32 i32) -> (i32)` |
| 295 | `M4Wt.jzg6` | func | `(i32 i32) -> (i32)` |
| 296 | `M4Wt.CQro` | func | `(i32 i32) -> (i32)` |
| 297 | `M4Wt.gC7t` | func | `(i32 i32) -> (i32)` |
| 298 | `M4Wt.Vaij` | func | `(i32 i32) -> (i32)` |

## Exports

156 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `XT2R` | func | 3012 | `(i32) -> (i32 i32)` |
| `M6o9` | func | 2480 | `(i32) -> (i32)` |
| `Wg2M` | func | 889 | `(i32 i32) -> (i32)` |
| `PHbg` | func | 1432 | `() -> (i32)` |
| `eJnI` | func | 2402 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `jAL7` | func | 2997 | `(i32 i32) -> (i32 i32)` |
| `LSme` | func | 737 | `(i32) -> (i32)` |
| `Z4Lu` | func | 1257 | `(i32 i32 i32) -> (i32)` |
| `lOmJ` | func | 2488 | `(i32 i32) -> (i32)` |
| `ofia` | func | 1926 | `(i32) -> (i32)` |
| `CbNs` | global | 2 | `` |
| `blOT` | func | 735 | `(i32 i32 i32 i32) -> (i32)` |
| `EPc9` | func | 2004 | `(i32 f64) -> (i32)` |
| `qd7z` | func | 2775 | `(i32) -> (i32)` |
| `nDVz` | func | 1831 | `(i32 i32 i32 i32) -> (i32)` |
| `V4Wc` | func | 2175 | `(i32 i32) -> (i32)` |
| `QZP1` | func | 3168 | `(i32) -> ()` |
| `qaGq` | func | 2583 | `() -> (i32)` |
| `HVi0` | func | 2819 | `(i32) -> (i32)` |
| `VrgV` | func | 1557 | `(i32) -> (i32)` |
| `buQc` | func | 3014 | `(i32) -> (i32 i32)` |
| `CxfO` | func | 2941 | `() -> ()` |
| `M412` | func | 2444 | `(i32) -> (i32)` |
| `fhYq` | func | 743 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `kPoh` | func | 3163 | `() -> (f64)` |
| `U1QS` | func | 1469 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `qP2P` | global | 1 | `` |
| `taad` | func | 2143 | `(i32 i32) -> (i32)` |
| `sXOV` | func | 3191 | `() -> (i32)` |
| `Qp3H` | func | 3013 | `(i32) -> (i32 i32)` |
| `Bdhv` | func | 2020 | `(i32 f64 f64 f64) -> (i32)` |
| `pwjn` | func | 3015 | `(i32) -> (i32 i32)` |
| `gRhh` | func | 1587 | `(i32 f64 f64 f64) -> (i32)` |
| `FYfB` | func | 888 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `PzHW` | func | 2360 | `(i32 i32) -> (i32)` |
| `YLbQ` | func | 1477 | `(i32 i32 i32 i32) -> (i32)` |
| `rNUV` | func | 1428 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `akOu` | func | 2466 | `(i32) -> (i32)` |
| `aLMo` | func | 2498 | `(i32) -> (i32)` |
| `IVF6` | func | 1511 | `(i32 f64) -> (f64)` |
| `LeL7` | func | 1454 | `(i32 i32 i32 i32) -> ()` |
| `Fohw` | func | 2328 | `(i32 i32) -> (i32)` |
| `fBpn` | func | 1484 | `(i32 i32) -> (i32)` |
| `rSy6` | func | 2465 | `(i32) -> (i32)` |
| `pTZm` | func | 1290 | `(i32 i32) -> (i32)` |
| `eX99` | func | 1945 | `(i32 i32 i32 i32) -> ()` |
| `eVWT` | func | 3123 | `() -> ()` |
| `ZXEZ` | func | 2992 | `(i32 i32 i32) -> (i32 i32)` |
| `Kv0X` | func | 2477 | `(i32) -> (i32)` |
| `HRZc` | func | 2496 | `(i32) -> (i32)` |
| `z7zX` | func | 1883 | `(i32) -> ()` |
| `Jm8V` | func | 2460 | `(i32) -> (i32)` |
| `ecU4` | func | 2478 | `(i32) -> (i32)` |
| `LOKM` | func | 2497 | `(i32) -> (i32)` |
| `jPGY` | func | 2548 | `() -> (i32)` |
| `b5BI` | func | 2582 | `(i32 i32) -> ()` |
| `OmQN` | func | 1478 | `(i32) -> (i32)` |
| `XAc5` | func | 1497 | `(i32 i32) -> (i32)` |
| `nyHV` | func | 2797 | `(i32) -> ()` |
| `uZm3` | func | 2479 | `(i32 i32) -> ()` |
| `KOhv` | func | 2536 | `(i32 i32) -> ()` |
| `kyrZ` | func | 1237 | `(i32 i32) -> (i32)` |
| `WBNm` | func | 1209 | `(i32 i32 i32 i32) -> (i32)` |
| `l9cG` | func | 3116 | `(i32 i32 i32) -> ()` |
| `u3U2` | func | 1404 | `(i32 i32) -> (i32)` |
| `YUgN` | func | 1508 | `(i32 i32) -> (i32)` |
| `BVu6` | func | 2461 | `(i32) -> (i32)` |
| `FCzn` | func | 1283 | `(i32) -> (i32)` |
| `FDrV` | func | 2329 | `(i32 i32) -> (i32)` |
| `olt0` | func | 1694 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `kdvH` | func | 1474 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `azKc` | func | 1110 | `(i32 i32) -> ()` |
| `wOKT` | func | 2973 | `(i32 i32) -> ()` |
| `qVY4` | func | 1717 | `(i32) -> (i32)` |
| `s9yw` | func | 3011 | `(i32) -> (i32 i32)` |
| `jLoB` | func | 2463 | `(i32) -> (i32)` |
| `OJDm` | func | 2462 | `(i32) -> (i32)` |
| `ms5E` | func | 759 | `(i32 i32 i32) -> (i32)` |
| `ro29` | func | 2457 | `(i32) -> (f64)` |
| `cFIU` | func | 2458 | `(i32) -> (i32)` |
| `Syua` | func | 2475 | `(i32 i32) -> ()` |
| `LmXy` | func | 3001 | `(i32 i32) -> (i32 i32)` |
| `QwIz` | func | 1851 | `(i32 i32 f64 f64 f64) -> ()` |
| `w9MT` | func | 2330 | `(i32 i32) -> (i32)` |
| `nr2L` | func | 3026 | `() -> (i32 i32)` |
| `gSkT` | func | 3192 | `() -> (i32)` |
| `C8DI` | func | 2999 | `(i32 i32) -> (i32 i32)` |
| `SMQg` | func | 3051 | `(i32 i32 i32 i32) -> ()` |
| `ZBpx` | func | 1208 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `ibGW` | func | 3000 | `(i32 i32) -> (i32 i32)` |
| `p6Sz` | func | 2248 | `(i32 i32) -> ()` |
| `hDHy` | func | 3060 | `(i32 i32 i32) -> ()` |
| `J05p` | func | 1524 | `(i32 i32 i32) -> (i32)` |
| `n7GJ` | func | 2416 | `(i32) -> (i32)` |
| `O6Y4` | func | 2467 | `(i32) -> (i32)` |
| `KAwq` | func | 2960 | `(i32 i32) -> (i32)` |
| `MtCF` | func | 1170 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `gp38` | func | 1385 | `(i32 f64 f64) -> (i32)` |
| `MBJt` | func | 1583 | `(i32 i32) -> ()` |
| `nQgE` | func | 1875 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `Ffxh` | func | 3089 | `() -> (i32)` |
| `Mz6Y` | func | 810 | `(i32 i32) -> (i32)` |
| `Aae8` | func | 2991 | `(i32 i32 i32) -> (i32 i32)` |
| `Rk5W` | func | 2061 | `(i32 i32) -> (i32)` |
| `sZHc` | func | 3002 | `(i32 i32) -> (i32 i32)` |
| `ObZY` | func | 3122 | `(i32) -> ()` |
| `LAAH` | func | 2249 | `(i32 f64) -> (i32)` |
| `K5K3` | func | 2487 | `(i32) -> (i32)` |
| `AyOF` | func | 1316 | `(i32) -> ()` |
| `Cmhz` | func | 679 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `M09o` | func | 2459 | `(i32) -> (i32)` |
| `HlbN` | func | 2331 | `(i32 i32) -> (i32)` |
| `SdiP` | func | 1264 | `(i32 i32 i32) -> ()` |
| `O1mi` | func | 1215 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `MndK` | func | 1572 | `(i32 i32) -> (i32)` |
| `Rn4M` | func | 2279 | `(i32 i32) -> ()` |
| `memory` | memory | 0 | `` |
| `ykzU` | func | 618 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `vh6K` | func | 1858 | `(i32 i32) -> ()` |
| `s5Yu` | func | 907 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `sF2b` | func | 2786 | `(i32) -> (i32)` |
| `CLgS` | func | 2761 | `(i32) -> (i32)` |
| `yInf` | func | 1868 | `(i32 i32) -> (i32)` |
| `oZgZ` | func | 1816 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `wJnC` | func | 1943 | `(i32) -> (i32)` |
| `pE5F` | func | 2489 | `(i32 i32) -> (i32)` |
| `aQ8W` | func | 1582 | `(i32 i32) -> ()` |
| `cRu3` | func | 1109 | `(i32 i32) -> (i32)` |
| `X2UP` | func | 2464 | `(i32) -> ()` |
| `kgdp` | func | 2443 | `(i32 i32) -> ()` |
| `Tttl` | func | 2998 | `(i32 i32) -> (i32 i32)` |
| `u0Zd` | func | 1331 | `(i32 i32 i32) -> (i32)` |
| `HncU` | func | 1810 | `() -> (i32)` |
| `WFuw` | func | 2754 | `(i32) -> (i32)` |
| `S5FA` | func | 1751 | `(i32 i32) -> (i32)` |
| `X4zS` | func | 918 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `T1m8` | func | 1884 | `(i32) -> ()` |
| `Nd6l` | func | 2372 | `(i32 i32 i32 i32) -> (i32)` |
| `yqF1` | func | 3167 | `(i32) -> (i32)` |
| `ar3D` | func | 3061 | `(i32 i32) -> ()` |
| `rnWz` | func | 2195 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `gQkw` | func | 1739 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `HaMB` | func | 1384 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `Yyz1` | func | 706 | `(i32 i32) -> (i32)` |
| `SNEC` | func | 1544 | `(i32 i32 i32 i32) -> (i32)` |
| `VvhH` | func | 3027 | `() -> (i32 i32)` |
| `LC64` | func | 1627 | `(i32 i32 i32 i32) -> (i32)` |
| `aj2z` | func | 568 | `(i32 i32 i32) -> (i32)` |
| `PwqO` | func | 1978 | `(i32 i32) -> ()` |
| `PkWe` | func | 2966 | `(i32 i32 i32 i32) -> (i32)` |
| `FKRs` | func | 1509 | `(i32 i32) -> (i32)` |
| `Vohx` | func | 669 | `(i32 i32) -> (i32)` |
| `msZk` | func | 2039 | `(i32 i32) -> ()` |
| `OaSR` | func | 1733 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `HbZx` | func | 3003 | `(i32 i32) -> (i32 i32)` |
| `wPYZ` | func | 2399 | `(i32) -> (i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 753 · max 753
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2637440, `i32` = i32.const 2638020

## Functions

- 2,904 bodies · 4,029,569 code bytes · avg 1.4 KB
- instruction scan: 2,904 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 156 |
| <= 64 bytes | 113 |
| <= 128 bytes | 258 |
| <= 256 bytes | 375 |
| <= 512 bytes | 671 |
| <= 1024 bytes | 572 |
| <= 2048 bytes | 421 |
| <= 4096 bytes | 183 |
| <= 8192 bytes | 90 |
| <= 16384 bytes | 31 |
| > 16384 bytes | 34 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32) -> ()` | 213 | 194,901 | 88,446 | local.get×25924, i32.const×9923, i32.load×5634, local.set×4736, local.tee×4648 |
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
| 1969 | `(i32 i32) -> ()` | 110 | 38,696 | 17,216 | local.get×5028, i32.const×1620, local.set×859, local.tee×753, end×661 |
| 2577 | `(i32 i32) -> ()` | 397 | 142,149 | 64,171 | local.get×18429, i32.const×8004, local.set×3839, i32.load×3164, end×2815 |
| 2855 | `(i32 i32 i32 i32) -> ()` | 137 | 30,443 | 13,878 | local.get×4157, i32.const×1460, local.tee×728, local.set×674, i32.load×609 |
| 2873 | `(i32 i32) -> ()` | 136 | 33,882 | 15,183 | local.get×4267, i32.const×2015, local.set×798, local.tee×742, i32.add×699 |

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
| `local.get` | 538,563 |
| `i32.const` | 225,687 |
| `local.tee` | 100,185 |
| `i32.load` | 94,458 |
| `local.set` | 93,813 |
| `i32.add` | 87,191 |
| `end` | 79,124 |
| `br_if` | 64,227 |
| `i32.store` | 46,741 |
| `block` | 37,203 |
| `i64.const` | 32,597 |
| `i64.store` | 31,712 |
| `if` | 30,232 |
| `call` | 29,411 |
| `i32.sub` | 24,619 |
| `i64.load` | 23,609 |
| `br` | 23,098 |
| `i32.eqz` | 19,510 |
| `select` | 16,876 |
| `i32.shl` | 16,440 |
| `i32.and` | 16,283 |
| `i32.ne` | 15,842 |
| `i32.load8_u` | 14,938 |
| `i32.eq` | 13,845 |
| `i32.store8` | 12,612 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 2,904/2,904 (degraded: 0)
