# WASM module: `bloxd_wasm_webgl1_bg`

> environment **staging.bloxd.io** · build `tz47m9.2cb7e113` · analyzed 2026-11-24T17:23:02+09:00
> source: https://staging.bloxd.io/static/media/bloxd_wasm_webgl1_bg.98b619904f0cca0908ce.wasm
> 4,839,018 bytes (4.6 MB) · sha256 `e473a9c2912b1b2e…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- name-section module id `b94224d713ad066f.10575` → `b84ea7e7cb552117.10575` (numeric version suffix unchanged — same module version, re-randomized prefix)
- export identifiers rotated by the obfuscator: 1/156 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,860 / 282 |
| Exports / imports | 156 / 283 |
| Code bytes (function bodies) | 3,990,279 (3.8 MB) |
| Total local variables | 30,423 |
| Instructions (scanable bodies) | 1,872,428 |
| Data segments / bytes | 3,771 / 802,402 |
| Element segments / entries | 1 / 732 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `b84ea7e7cb552117.10575` |
| Sections | 11 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,478 | 173 |
| 2 | import | 3,402 | 283 |
| 3 | function | 2,907 | 2860 |
| 4 | table | 7 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,249 | 156 |
| 9 | element | 1,471 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 3,995,528 | 2860 |
| 11 | data | 832,879 | 3771 |
| 0 | custom:name | 30 | — |

## Types

173 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32) -> ()` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

283 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `tAC8.tpAs` | memory | `[128..14648]` |
| 0 | `tAC8.wlWA` | func | `(i32) -> (f64)` |
| 1 | `tAC8.x1kU` | func | `() -> (i32)` |
| 2 | `tAC8.Eefv` | func | `(i32 i32 i32) -> (i32)` |
| 3 | `tAC8.TOZ4` | func | `(i32) -> ()` |
| 4 | `tAC8.mb3K` | func | `(i32 i32) -> (i32)` |
| 5 | `tAC8.RMoO` | func | `(i32) -> (i32)` |
| 6 | `tAC8.Sf6P` | func | `(i32 i32 i32) -> (i32)` |
| 7 | `tAC8.aExn` | func | `(i32 i32 i32 i32) -> (i32)` |
| 8 | `tAC8.CwlU` | func | `(i32) -> (i32)` |
| 9 | `tAC8.azc5` | func | `(i32 i32) -> ()` |
| 10 | `tAC8.fP37` | func | `(i32 i32) -> ()` |
| 11 | `tAC8.Uhuz` | func | `(i32 i32 i32 i32) -> (i32)` |
| 12 | `tAC8.k5Go` | func | `(i32 i32) -> (i32)` |
| 13 | `tAC8.E00n` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 14 | `tAC8.Qyxn` | func | `(i32) -> (i32)` |
| 15 | `tAC8.i1AH` | func | `(i32 i32) -> (i32)` |
| 16 | `tAC8.cB4d` | func | `(i32 i32) -> (i32)` |
| 17 | `tAC8.YExx` | func | `(i32 i32) -> ()` |
| 18 | `tAC8.ZNvt` | func | `(i32) -> (i32)` |
| 19 | `tAC8.Tp56` | func | `(i32) -> (i32)` |
| 20 | `tAC8.mzgZ` | func | `(i32) -> (i32)` |
| 21 | `tAC8.ieqw` | func | `(i32) -> ()` |
| 22 | `tAC8.ewlz` | func | `(i32 i32) -> ()` |
| 23 | `tAC8.guUP` | func | `(i32 i32) -> ()` |
| 24 | `tAC8.EP57` | func | `(i32) -> (i32)` |
| 25 | `tAC8.yWAs` | func | `(i32 i32) -> ()` |
| 26 | `tAC8.g0Sc` | func | `(i32 i32) -> (i32)` |
| 27 | `tAC8.Gpt7` | func | `(i32 i32 i32 i32) -> ()` |
| 28 | `tAC8.TzR7` | func | `(i32 i32) -> (i32)` |
| 29 | `tAC8.cs2r` | func | `(i32 i32 i32) -> (i32)` |
| 30 | `tAC8.FEEz` | func | `(i32) -> (i32)` |
| 31 | `tAC8.ejh2` | func | `(i32 i32) -> ()` |
| 32 | `tAC8.cpQk` | func | `(i32) -> (i32)` |
| 33 | `tAC8.Oiu6` | func | `(i32) -> (i32)` |
| 34 | `tAC8.eqwW` | func | `(i32 i32 i32) -> (i32)` |
| 35 | `tAC8.tNtG` | func | `(i32) -> (i32)` |
| 36 | `tAC8.e4QD` | func | `(i32) -> (i32)` |
| 37 | `tAC8.iWZF` | func | `(i32) -> (i32)` |
| 38 | `tAC8.k81J` | func | `(i32 i32) -> (i32)` |
| 39 | `tAC8.oPhw` | func | `(i32 i32 i32 i32) -> ()` |
| 40 | `tAC8.UvVB` | func | `(i32) -> (i32)` |
| 41 | `tAC8.M4Jw` | func | `(i32 i32 i32 i32) -> ()` |
| 42 | `tAC8.FfjZ` | func | `() -> (f64)` |
| 43 | `tAC8.lJpr` | func | `(i32) -> (i32)` |
| 44 | `tAC8.EqTn` | func | `(i32 i32 i32 i32) -> ()` |
| 45 | `tAC8.x4hU` | func | `(i32 i32 i32) -> (i32)` |
| 46 | `tAC8.CfvH` | func | `(i32 f64 f64 f64 f64) -> ()` |
| 47 | `tAC8.nruU` | func | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64) -> ()` |
| 48 | `tAC8.LXD8` | func | `(i32 i32 i32) -> ()` |
| 49 | `tAC8.a062` | func | `(i32 i32 i32) -> ()` |
| 50 | `tAC8.BSMk` | func | `(i32 i32 i32) -> ()` |
| 51 | `tAC8.ayzS` | func | `(i32 i32) -> ()` |
| 52 | `tAC8.SbDl` | func | `(i32 i32) -> ()` |
| 53 | `tAC8.lK8J` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 54 | `tAC8.GRlf` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 55 | `tAC8.f3CT` | func | `(i32 f32 f32) -> ()` |
| 56 | `tAC8.Wpo7` | func | `(i32 f32 f32) -> ()` |
| 57 | `tAC8.HtsX` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 58 | `tAC8.hg4Y` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 59 | `tAC8.P5ZU` | func | `(i32 i32 i32 i32) -> ()` |
| 60 | `tAC8.PQsW` | func | `(i32 i32 i32 i32) -> ()` |
| 61 | `tAC8.DzRi` | func | `(i32 i32 i32) -> ()` |
| 62 | `tAC8.IbT7` | func | `(i32 i32 i32) -> ()` |
| 63 | `tAC8.mOjw` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 64 | `tAC8.mOVm` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 65 | `tAC8.Ix62` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 66 | `tAC8.Ffu6` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 67 | `tAC8.FZhJ` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 68 | `tAC8.zB2Z` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 69 | `tAC8.WORk` | func | `(i32) -> (i32)` |
| 70 | `tAC8.JVwu` | func | `(i32) -> ()` |
| 71 | `tAC8.aCrI` | func | `(i32) -> (i32)` |
| 72 | `tAC8.S2CA` | func | `(i32 i32) -> (i32)` |
| 73 | `tAC8.TAbD` | func | `(i32 i32 i32) -> (i32)` |
| 74 | `tAC8.gK46` | func | `(i32 i32 i32) -> ()` |
| 75 | `tAC8.pKMi` | func | `(i32 i32 i32 i32) -> (i32)` |
| 76 | `tAC8.Wvco` | func | `() -> (f64)` |
| 77 | `tAC8.eoSQ` | func | `() -> (f64)` |
| 78 | `tAC8.Q0Q0` | func | `(i32 i32) -> ()` |
| 79 | `tAC8.Ynfz` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 80 | `tAC8.MhJc` | func | `(i32 i32 i32) -> ()` |
| 81 | `tAC8.r3S2` | func | `(i32 i32 i32) -> ()` |
| 82 | `tAC8.qo75` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 83 | `tAC8.rHnM` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 84 | `tAC8.xpC5` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 85 | `tAC8.UeFf` | func | `(i32 i32) -> ()` |
| 86 | `tAC8.jNcu` | func | `(i32 i32) -> ()` |
| 87 | `tAC8.YNa9` | func | `(i32) -> (i32)` |
| 88 | `tAC8.NqdK` | func | `(i32 i32) -> ()` |
| 89 | `tAC8.Q96d` | func | `(i32 i32) -> ()` |
| 90 | `tAC8.DJ9h` | func | `(i32 i32 i32) -> ()` |
| 91 | `tAC8.lqFR` | func | `(i32 i32 i32) -> ()` |
| 92 | `tAC8.h8MY` | func | `(i32) -> (i32)` |
| 93 | `tAC8.Wxse` | func | `(i32) -> (i32)` |
| 94 | `tAC8.BFjj` | func | `(i32 i32) -> (i32)` |
| 95 | `tAC8.INn5` | func | `(i32 i32) -> (i32)` |
| 96 | `tAC8.QA7P` | func | `(i32 i32) -> ()` |
| 97 | `tAC8.F2rH` | func | `(i32 i32) -> ()` |
| 98 | `tAC8.yQmb` | func | `(i32 i32 i32) -> ()` |
| 99 | `tAC8.CAWs` | func | `(i32 i32 i32) -> ()` |
| 100 | `tAC8.qKFA` | func | `(i32 i32 i32 i32) -> ()` |
| 101 | `tAC8.cshA` | func | `(i32 i32 i32 i32) -> ()` |
| 102 | `tAC8.rJZI` | func | `(i32 i32 f32) -> ()` |
| 103 | `tAC8.kZnd` | func | `(i32 i32 f32) -> ()` |
| 104 | `tAC8.aOro` | func | `(i32 i32 i32) -> ()` |
| 105 | `tAC8.kN68` | func | `(i32 i32 i32) -> ()` |
| 106 | `tAC8.Qb82` | func | `(i32 i32 i32) -> ()` |
| 107 | `tAC8.yxo4` | func | `(i32 i32 f32 f32) -> ()` |
| 108 | `tAC8.nfOQ` | func | `(i32 i32 f32 f32) -> ()` |
| 109 | `tAC8.L7JF` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 110 | `tAC8.ixXD` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 111 | `tAC8.hvUe` | func | `(i32 i32) -> ()` |
| 112 | `tAC8.CVAg` | func | `(i32 i32) -> ()` |
| 113 | `tAC8.e1Ug` | func | `(i32 i32) -> ()` |
| 114 | `tAC8.zyZt` | func | `(i32 i32) -> ()` |
| 115 | `tAC8.ytvd` | func | `(i32) -> (i32)` |
| 116 | `tAC8.fz5r` | func | `(i32) -> (i32)` |
| 117 | `tAC8.verJ` | func | `(i32) -> (i32)` |
| 118 | `tAC8.eGl3` | func | `(i32) -> (i32)` |
| 119 | `tAC8.tLSr` | func | `(i32 i32) -> ()` |
| 120 | `tAC8.UJUc` | func | `(i32 i32) -> ()` |
| 121 | `tAC8.WbDR` | func | `(i32 i32) -> ()` |
| 122 | `tAC8.gSdv` | func | `(i32 i32) -> ()` |
| 123 | `tAC8.jPPc` | func | `(i32 i32) -> ()` |
| 124 | `tAC8.srbp` | func | `(i32 i32) -> ()` |
| 125 | `tAC8.rMZm` | func | `(i32 i32) -> (i32)` |
| 126 | `tAC8.Wtym` | func | `(i32 i32) -> (i32)` |
| 127 | `tAC8.o8MY` | func | `(i32 i32 i32 i32) -> ()` |
| 128 | `tAC8.cmSX` | func | `(i32 i32 i32 i32) -> ()` |
| 129 | `tAC8.sBtC` | func | `(i32 i32) -> ()` |
| 130 | `tAC8.FPuI` | func | `(i32 i32) -> ()` |
| 131 | `tAC8.WCnu` | func | `(i32) -> (i32)` |
| 132 | `tAC8.RM4s` | func | `(i32 i32) -> ()` |
| 133 | `tAC8.JZGx` | func | `(i32 i32) -> ()` |
| 134 | `tAC8.KF5r` | func | `(i32 i32 i32) -> ()` |
| 135 | `tAC8.a1fJ` | func | `(i32 i32 i32) -> ()` |
| 136 | `tAC8.RF3s` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 137 | `tAC8.bvho` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 138 | `tAC8.mS20` | func | `(i32 i32) -> ()` |
| 139 | `tAC8.Naoj` | func | `(i32 i32 i32) -> ()` |
| 140 | `tAC8.LtGF` | func | `(i32 i32 i32) -> ()` |
| 141 | `tAC8.B1lH` | func | `(i32 i32 i32 i32) -> (i32)` |
| 142 | `tAC8.wqw3` | func | `(i32 i32 i32 i32) -> (i32)` |
| 143 | `tAC8.nmbJ` | func | `(i32 i32 i32) -> ()` |
| 144 | `tAC8.VZMA` | func | `(i32 i32 i32) -> ()` |
| 145 | `tAC8.Ed3f` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 146 | `tAC8.Vn7i` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 147 | `tAC8.ogHs` | func | `(i32 i32 i32) -> (i32)` |
| 148 | `tAC8.IGA4` | func | `(i32 i32 i32) -> (i32)` |
| 149 | `tAC8.sG57` | func | `(i32 i32 i32) -> (i32)` |
| 150 | `tAC8.un2r` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 151 | `tAC8.QdXG` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 152 | `tAC8.Lylu` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 153 | `tAC8.cPo4` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 154 | `tAC8.BmND` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 155 | `tAC8.T9iQ` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 156 | `tAC8.Nxsb` | func | `(i32) -> (i32)` |
| 157 | `tAC8.dsYM` | func | `(i32) -> (i32)` |
| 158 | `tAC8.OO3q` | func | `(i32) -> (i32)` |
| 159 | `tAC8.MYzJ` | func | `(i32) -> (i32)` |
| 160 | `tAC8.mrX6` | func | `() -> (i32)` |
| 161 | `tAC8.NMDd` | func | `() -> (i32)` |
| 162 | `tAC8.kdr9` | func | `() -> (i32)` |
| 163 | `tAC8.iXM3` | func | `() -> (i32)` |
| 164 | `tAC8.nfr9` | func | `(i32 i32) -> (i32)` |
| 165 | `tAC8.Ba55` | func | `(i32) -> ()` |
| 166 | `tAC8.Ln64` | func | `(i32 i32) -> (i32)` |
| 167 | `tAC8.AANh` | func | `(i32) -> (i32)` |
| 168 | `tAC8.s9Aj` | func | `(i32) -> (i32)` |
| 169 | `tAC8.jaNc` | func | `(i32) -> (i32)` |
| 170 | `tAC8.Eszu` | func | `(i32) -> ()` |
| 171 | `tAC8.bcLA` | func | `(i32 i32 i32) -> (i32)` |
| 172 | `tAC8.jCGF` | func | `(i32) -> (i32)` |
| 173 | `tAC8.M7we` | func | `(i32) -> (i32)` |
| 174 | `tAC8.SQpT` | func | `(i32 i32) -> (i32)` |
| 175 | `tAC8.FESP` | func | `(i32 i32 i32) -> (i32)` |
| 176 | `tAC8.pzEw` | func | `(i32 i32 i32) -> (i32)` |
| 177 | `tAC8.JLpY` | func | `(i32) -> (i32)` |
| 178 | `tAC8.XxQK` | func | `(i32) -> (i32)` |
| 179 | `tAC8.Jni0` | func | `(i32) -> (i32)` |
| 180 | `tAC8.lJct` | func | `(i32 i32 i32 i32) -> ()` |
| 181 | `tAC8.xejO` | func | `(i32 i32 i32 i32) -> ()` |
| 182 | `tAC8.yAvW` | func | `(i32 i32) -> ()` |
| 183 | `tAC8.mD7f` | func | `(i32 i32 i32) -> ()` |
| 184 | `tAC8.wuqP` | func | `(i32 i32) -> ()` |
| 185 | `tAC8.Xmr6` | func | `(i32 i32 i32) -> ()` |
| 186 | `tAC8.CIiS` | func | `(i32 i32) -> ()` |
| 187 | `tAC8.MhAb` | func | `(i32 i32) -> ()` |
| 188 | `tAC8.hUEk` | func | `(i32) -> (i32)` |
| 189 | `tAC8.tD19` | func | `(i32 i32) -> (i32)` |
| 190 | `tAC8.Vh2B` | func | `(i32) -> ()` |
| 191 | `tAC8.viUV` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 192 | `tAC8.akdH` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 193 | `tAC8.SrtW` | func | `(i32 i32) -> ()` |
| 194 | `tAC8.ZVZ9` | func | `(i32 i32) -> ()` |
| 195 | `tAC8.jO6R` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 196 | `tAC8.fKpF` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 197 | `tAC8.bvUc` | func | `(i32 f32) -> ()` |
| 198 | `tAC8.Nu3k` | func | `(i32 f32) -> ()` |
| 199 | `tAC8.Mi2V` | func | `(i32 i32) -> ()` |
| 200 | `tAC8.TTkC` | func | `(i32 i32) -> ()` |
| 201 | `tAC8.SLWP` | func | `(i32) -> (i32)` |
| 202 | `tAC8.npsp` | func | `(i32) -> (i32)` |
| 203 | `tAC8.AkMu` | func | `(i32) -> (i32)` |
| 204 | `tAC8.ynKI` | func | `(i32) -> (i32)` |
| 205 | `tAC8.VLTm` | func | `(i32 i32 i32) -> ()` |
| 206 | `tAC8.YhGF` | func | `(i32 i32 i32) -> ()` |
| 207 | `tAC8.ae0h` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 208 | `tAC8.ZtJF` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 209 | `tAC8.E1xx` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 210 | `tAC8.ZoBG` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 211 | `tAC8.EZtc` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 212 | `tAC8.saJk` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 213 | `tAC8.dmEw` | func | `(i32 i32) -> ()` |
| 214 | `tAC8.NC7I` | func | `(i32 i32) -> ()` |
| 215 | `tAC8.xwVV` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 216 | `tAC8.Q1n5` | func | `(i32 i32 i32 f32) -> ()` |
| 217 | `tAC8.ihoo` | func | `(i32 i32 i32 f32) -> ()` |
| 218 | `tAC8.ZXTV` | func | `(i32) -> (i32)` |
| 219 | `tAC8.ewFq` | func | `(i32) -> (i32)` |
| 220 | `tAC8.Otfl` | func | `(i32 i32) -> ()` |
| 221 | `tAC8.mE0R` | func | `(i32 i32) -> ()` |
| 222 | `tAC8.d3TK` | func | `(i32 i32 i32) -> (i32)` |
| 223 | `tAC8.vBgv` | func | `(i32) -> (i32)` |
| 224 | `tAC8.PuvF` | func | `(i32) -> (i32)` |
| 225 | `tAC8.Ts97` | func | `(i32 i32) -> ()` |
| 226 | `tAC8.TjfE` | func | `(i32 i32 i32) -> (i32)` |
| 227 | `tAC8.zmIX` | func | `(i32 i32) -> ()` |
| 228 | `tAC8.cu6z` | func | `(i32 i32) -> ()` |
| 229 | `tAC8.LB3j` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 230 | `tAC8.LDFp` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 231 | `tAC8.lPiz` | func | `(i32 i32 i32) -> ()` |
| 232 | `tAC8.PnBk` | func | `(i32 i32 i32) -> ()` |
| 233 | `tAC8.I7lC` | func | `(i32 i32) -> ()` |
| 234 | `tAC8.pyVi` | func | `(i32 i32) -> ()` |
| 235 | `tAC8.iOo5` | func | `(i32 i32) -> ()` |
| 236 | `tAC8.NAgl` | func | `(i32 i32) -> ()` |
| 237 | `tAC8.t40z` | func | `(i32 i32) -> ()` |
| 238 | `tAC8.ib3X` | func | `(i32 i32) -> ()` |
| 239 | `tAC8.T9rX` | func | `(i32 f32 f32) -> ()` |
| 240 | `tAC8.sBJs` | func | `(i32 f32 f32) -> ()` |
| 241 | `tAC8.jB2K` | func | `(i32 i32 i32 i32) -> ()` |
| 242 | `tAC8.TOau` | func | `(i32 i32 i32 i32) -> ()` |
| 243 | `tAC8.m7qB` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 244 | `tAC8.gpXV` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 245 | `tAC8.Fchn` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 246 | `tAC8.srGt` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 247 | `tAC8.WPSo` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 248 | `tAC8.bVSK` | func | `(i32 i32 i32 i32) -> ()` |
| 249 | `tAC8.p9ae` | func | `(i32 i32 i32 i32) -> ()` |
| 250 | `tAC8.LtkW` | func | `(i32) -> ()` |
| 251 | `tAC8.Porz` | func | `(i32 i32) -> ()` |
| 252 | `tAC8.eyai` | func | `(i32 i32) -> ()` |
| 253 | `tAC8.qU1g` | func | `(i32 i32) -> ()` |
| 254 | `tAC8.aSgm` | func | `(i32 i32) -> ()` |
| 255 | `tAC8.YwCI` | func | `(i32 i32) -> ()` |
| 256 | `tAC8.i9Mr` | func | `(i32 i32) -> ()` |
| 257 | `tAC8.Ng3r` | func | `(i32 i32) -> ()` |
| 258 | `tAC8.sXrH` | func | `(i32 i32) -> ()` |
| 259 | `tAC8.p3YJ` | func | `(i32) -> (i32)` |
| 260 | `tAC8.dZrJ` | func | `(i32) -> (i32)` |
| 261 | `tAC8.bQSx` | func | `(i32) -> (i32)` |
| 262 | `tAC8.Ylnk` | func | `(i32) -> (i32)` |
| 263 | `tAC8.BgNQ` | func | `(i32) -> ()` |
| 264 | `tAC8.D2WQ` | func | `(i32 i32 i32 i32) -> ()` |
| 265 | `tAC8.DLk7` | func | `(i32) -> ()` |
| 266 | `tAC8.upUM` | func | `(i32) -> (i32)` |
| 267 | `tAC8.xAEM` | func | `(i32) -> (i32)` |
| 268 | `tAC8.NTgm` | func | `(i32) -> (i32)` |
| 269 | `tAC8.J1dU` | func | `(i32) -> (i32)` |
| 270 | `tAC8.Q8yK` | func | `(i32 i32) -> ()` |
| 271 | `tAC8.jpo6` | func | `(i32) -> ()` |
| 272 | `tAC8.VWSE` | func | `(i32 i32) -> ()` |
| 273 | `tAC8.fNq5` | func | `(i32) -> (i32)` |
| 274 | `tAC8.iJUc` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 275 | `tAC8.HGCw` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 276 | `tAC8.bXLB` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 277 | `tAC8.Czvb` | func | `(i32 i32) -> (i32)` |
| 278 | `tAC8.gwJY` | func | `(i32 i32) -> (i32)` |
| 279 | `tAC8.XAFd` | func | `(i32 i32) -> (i32)` |
| 280 | `tAC8.Znhn` | func | `(i32 i32) -> (i32)` |
| 281 | `tAC8.xkOX` | func | `(i32 i32) -> (i32)` |

## Exports

156 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `XzkN` | func | 2953 | `(i32) -> (i32 i32)` |
| `fg64` | func | 887 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `vz4o` | func | 1798 | `(i32 i32 i32 i32) -> (i32)` |
| `bTSQ` | func | 2944 | `(i32 i32) -> (i32 i32)` |
| `S2O0` | func | 1665 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `ir1J` | func | 3132 | `() -> (i32)` |
| `fxNQ` | func | 649 | `(i32 i32) -> (i32)` |
| `QFpp` | func | 1359 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `c44U` | func | 2939 | `(i32 i32 i32) -> (i32 i32)` |
| `niXP` | func | 1360 | `(i32 f64 f64) -> (i32)` |
| `wzKu` | func | 2377 | `(i32) -> (i32)` |
| `GUzf` | func | 724 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `y7xz` | func | 661 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `YIHy` | func | 1193 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `fUBG` | func | 2947 | `(i32 i32) -> (i32 i32)` |
| `SUdj` | func | 1909 | `(i32 i32 i32 i32) -> ()` |
| `bW79` | func | 1085 | `(i32 i32) -> (i32)` |
| `LaNI` | func | 1558 | `(i32 i32) -> ()` |
| `m7Es` | func | 3029 | `() -> (i32)` |
| `MXb8` | func | 1942 | `(i32 i32) -> ()` |
| `B4gi` | func | 1259 | `(i32) -> (i32)` |
| `I0IC` | func | 2455 | `(i32) -> (i32)` |
| `nKTG` | func | 2448 | `(i32 i32) -> (i32)` |
| `u5uT` | func | 1481 | `(i32 i32) -> (i32)` |
| `QbOm` | func | 3131 | `() -> (i32)` |
| `FbRv` | func | 1449 | `(i32 i32 i32 i32) -> (i32)` |
| `ZKah` | func | 1240 | `(i32 i32 i32) -> ()` |
| `P0UP` | func | 1267 | `(i32 i32) -> (i32)` |
| `CQxj` | func | 897 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `PUhF` | func | 3108 | `(i32) -> (i32)` |
| `Ie4t` | func | 2909 | `(i32 i32) -> (i32)` |
| `lyfX` | func | 2434 | `(i32 i32) -> ()` |
| `mvYp` | func | 2717 | `(i32) -> (i32)` |
| `D2Mg` | func | 2418 | `(i32) -> (i32)` |
| `npUR` | func | 3056 | `(i32 i32 i32) -> ()` |
| `brT0` | func | 1517 | `(i32 i32 i32 i32) -> (i32)` |
| `Qtq1` | func | 1892 | `(i32) -> (i32)` |
| `s9Zi` | func | 1842 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `BQ2V` | func | 1294 | `(i32) -> ()` |
| `bxCt` | func | 1380 | `(i32 i32) -> (i32)` |
| `UcKr` | func | 2404 | `(i32) -> (i32)` |
| `ALq9` | func | 2954 | `(i32) -> (i32 i32)` |
| `JOtX` | func | 3001 | `(i32 i32) -> ()` |
| `Y70Y` | func | 2890 | `() -> ()` |
| `E3gP` | func | 1086 | `(i32 i32) -> ()` |
| `UQV4` | func | 2920 | `(i32 i32) -> ()` |
| `ilPD` | func | 869 | `(i32 i32) -> (i32)` |
| `eN1A` | func | 1482 | `(i32 i32) -> (i32)` |
| `JbE1` | func | 2504 | `() -> (i32)` |
| `w6Jc` | func | 2213 | `(i32 i32) -> ()` |
| `Qrtc` | func | 2436 | `(i32) -> (i32)` |
| `Tgnx` | func | 2420 | `(i32) -> (i32)` |
| `tjjG` | func | 1851 | `(i32) -> ()` |
| `S38N` | func | 1470 | `(i32 i32) -> (i32)` |
| `F8wm` | func | 1778 | `() -> (i32)` |
| `M4D4` | func | 1986 | `(i32 f64 f64 f64) -> (i32)` |
| `K2rA` | func | 548 | `(i32 i32 i32) -> (i32)` |
| `VWv2` | func | 2956 | `(i32) -> (i32 i32)` |
| `W2VN` | func | 2991 | `(i32 i32 i32 i32) -> ()` |
| `JgXZ` | func | 1187 | `(i32 i32 i32 i32) -> (i32)` |
| `KtsA` | func | 1835 | `(i32 i32) -> (i32)` |
| `wihD` | func | 1402 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `YA6U` | func | 2293 | `(i32 i32) -> (i32)` |
| `pLsP` | func | 2537 | `() -> (i32)` |
| `tq0B` | func | 1441 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `vBwo` | func | 1818 | `(i32 i32 f64 f64 f64) -> ()` |
| `O8C7` | func | 3063 | `() -> ()` |
| `Tizq` | func | 2426 | `(i32) -> (i32)` |
| `MJZm` | func | 3104 | `() -> (f64)` |
| `ZxMJ` | func | 3109 | `(i32) -> ()` |
| `a4GE` | func | 2750 | `(i32) -> ()` |
| `yuMB` | func | 1601 | `(i32 i32 i32 i32) -> (i32)` |
| `nECg` | func | 2536 | `(i32 i32) -> ()` |
| `gRpS` | func | 2969 | `() -> (i32 i32)` |
| `EVhe` | func | 1456 | `(i32 i32) -> (i32)` |
| `o1e4` | func | 719 | `(i32) -> (i32)` |
| `BorX` | func | 2294 | `(i32 i32) -> (i32)` |
| `mjdt` | func | 2945 | `(i32 i32) -> (i32 i32)` |
| `puW2` | func | 2437 | `(i32) -> (i32)` |
| `ydiS` | func | 1547 | `(i32 i32) -> (i32)` |
| `abc8` | func | 2949 | `(i32 i32) -> (i32 i32)` |
| `YHmA` | func | 1450 | `(i32) -> (i32)` |
| `tBnV` | func | 1708 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `kHao` | func | 1783 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `zlkU` | func | 2423 | `(i32) -> (i32)` |
| `AmW7` | func | 1146 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `kLNZ` | func | 2457 | `(i32) -> (i32)` |
| `YrZe` | func | 2360 | `(i32) -> (i32)` |
| `cKA6` | func | 2363 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `iem8` | func | 2914 | `(i32 i32 i32 i32) -> (i32)` |
| `Gk7H` | global | 2 | `` |
| `ZVqC` | func | 1701 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `uuw9` | func | 2419 | `(i32) -> (i32)` |
| `OgFI` | func | 2323 | `(i32 i32) -> (i32)` |
| `Zc7s` | func | 2425 | `(i32) -> (i32)` |
| `b20k` | func | 717 | `(i32 i32 i32 i32) -> (i32)` |
| `fQPt` | func | 2739 | `(i32) -> (i32)` |
| `MmBs` | func | 2456 | `(i32) -> (i32)` |
| `Jb7u` | func | 868 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `JMTc` | func | 2492 | `(i32 i32) -> ()` |
| `wnMI` | func | 1310 | `(i32 i32 i32) -> (i32)` |
| `kPXb` | func | 2160 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `c9Kx` | func | 2291 | `(i32 i32) -> (i32)` |
| `hvVV` | func | 2957 | `(i32) -> (i32 i32)` |
| `EHTc` | func | 2772 | `(i32) -> (i32)` |
| `u4kz` | func | 1850 | `(i32) -> ()` |
| `tRYd` | func | 3062 | `(i32) -> ()` |
| `Ft4n` | func | 2003 | `(i32 i32) -> ()` |
| `Akpm` | func | 2424 | `(i32) -> ()` |
| `gyTg` | func | 1968 | `(i32 f64) -> (i32)` |
| `a4PC` | func | 2730 | `(i32) -> (i32)` |
| `ZTXp` | func | 741 | `(i32 i32 i32) -> (i32)` |
| `sqFD` | func | 1406 | `() -> (i32)` |
| `FUWd` | func | 2417 | `(i32) -> (f64)` |
| `Z0Bx` | func | 687 | `(i32 i32) -> (i32)` |
| `O1Rr` | func | 792 | `(i32 i32) -> (i32)` |
| `QUy2` | func | 2938 | `(i32 i32 i32) -> (i32 i32)` |
| `lklZ` | func | 2108 | `(i32 i32) -> (i32)` |
| `nhKd` | func | 2447 | `(i32 i32) -> (i32)` |
| `xLoj` | func | 1485 | `(i32 f64) -> (f64)` |
| `xW6l` | func | 2403 | `(i32 i32) -> ()` |
| `S2XO` | func | 3000 | `(i32 i32 i32) -> ()` |
| `s7gl` | func | 2139 | `(i32 i32) -> (i32)` |
| `QnyP` | func | 2438 | `(i32 i32) -> ()` |
| `fLb6` | func | 1427 | `(i32 i32 i32 i32) -> ()` |
| `memory` | memory | 0 | `` |
| `oVM2` | func | 2439 | `(i32) -> (i32)` |
| `fcg8` | func | 2292 | `(i32 i32) -> (i32)` |
| `pXds` | func | 2422 | `(i32) -> (i32)` |
| `C5Mz` | func | 1686 | `(i32) -> (i32)` |
| `GECk` | func | 1216 | `(i32 i32) -> (i32)` |
| `wYHv` | func | 2955 | `(i32) -> (i32 i32)` |
| `XowK` | func | 2948 | `(i32 i32) -> (i32 i32)` |
| `dpCj` | func | 1559 | `(i32 i32) -> ()` |
| `Y6dw` | func | 2336 | `(i32 i32 i32 i32) -> (i32)` |
| `avxm` | func | 1825 | `(i32 i32) -> ()` |
| `hZZ6` | func | 1907 | `(i32) -> (i32)` |
| `WCL9` | func | 2214 | `(i32 f64) -> (i32)` |
| `lFOx` | func | 1234 | `(i32 i32 i32) -> (i32)` |
| `PevS` | func | 1186 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `f9FM` | func | 2968 | `() -> (i32 i32)` |
| `Q8Z6` | global | 1 | `` |
| `uqB8` | func | 2427 | `(i32) -> (i32)` |
| `VDK5` | func | 2446 | `(i32) -> (i32)` |
| `F7oo` | func | 2244 | `(i32 i32) -> ()` |
| `fPCA` | func | 2421 | `(i32) -> (i32)` |
| `DZQ7` | func | 1563 | `(i32 f64 f64 f64) -> (i32)` |
| `RAEI` | func | 598 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `Hb1c` | func | 2943 | `(i32 i32) -> (i32 i32)` |
| `rov8` | func | 2946 | `(i32 i32) -> (i32 i32)` |
| `e6IP` | func | 2710 | `(i32) -> (i32)` |
| `r18V` | func | 1497 | `(i32 i32 i32) -> (i32)` |
| `OwQC` | func | 1446 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `n7Z2` | func | 2026 | `(i32 i32) -> (i32)` |
| `tUZQ` | func | 1719 | `(i32 i32) -> (i32)` |
| `qn98` | func | 1531 | `(i32) -> (i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 733 · max 733
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2015608, `i32` = i32.const 2016164

## Functions

- 2,860 bodies · 3,990,279 code bytes · avg 1.4 KB
- instruction scan: 2,860 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 156 |
| <= 64 bytes | 104 |
| <= 128 bytes | 251 |
| <= 256 bytes | 365 |
| <= 512 bytes | 664 |
| <= 1024 bytes | 571 |
| <= 2048 bytes | 414 |
| <= 4096 bytes | 181 |
| <= 8192 bytes | 89 |
| <= 16384 bytes | 32 |
| > 16384 bytes | 33 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32) -> ()` | 213 | 194,475 | 88,290 | local.get×25879, i32.const×9902, i32.load×5634, local.set×4730, local.tee×4634 |
| 1 | `(i32 i32 i32 i32 i32) -> ()` | 144 | 112,484 | 54,537 | local.get×15175, i32.const×6560, i32.add×3203, local.set×3090, i32.load×2945 |
| 2 | `(i32 i32 i32 i32 i32 i32) -> ()` | 130 | 46,897 | 21,584 | local.get×6259, i32.const×2868, local.set×1247, i32.add×1154, i32.load×1032 |
| 3 | `(i32 i32) -> ()` | 125 | 48,853 | 22,528 | local.get×6337, i32.const×2249, local.set×1324, local.tee×1179, i32.load×1037 |
| 4 | `(i32 i32) -> ()` | 59 | 29,650 | 14,267 | local.get×4192, i32.const×1730, i32.load×1042, local.set×931, i32.add×815 |
| 5 | `(i32 i32) -> ()` | 90 | 26,044 | 12,563 | local.get×3702, i32.const×1379, local.set×779, i32.load×721, local.tee×698 |
| 6 | `(i32 i32 i32 i32 i32) -> ()` | 135 | 32,562 | 16,141 | local.get×4566, i32.const×2205, local.set×1141, i32.add×1062, local.tee×800 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 58 | 21,485 | 10,526 | local.get×2903, i32.const×1490, local.set×728, i32.add×591, local.tee×504 |
| 8 | `(i32 i32) -> ()` | 93 | 19,080 | 9,200 | local.get×2643, i32.const×1025, local.tee×571, local.set×554, i32.load×531 |
| 9 | `(i32 i32 i32 i32) -> ()` | 105 | 26,545 | 12,837 | local.get×3810, i32.const×1624, local.set×997, i32.add×682, i32.load×663 |
| 10 | `(i32 i32 i32) -> (i32)` | 74 | 22,547 | 10,768 | local.get×2881, i32.const×1288, i32.load×749, local.set×499, i32.add×477 |
| 11 | `(i32 i32 i32 i32) -> ()` | 53 | 24,505 | 11,634 | local.get×3005, i32.const×1276, local.tee×731, end×592, i32.load×586 |
| 12 | `(i32 i32 i32) -> (i32)` | 77 | 18,923 | 8,934 | local.get×2485, i32.const×1224, i32.load×559, i32.add×543, local.set×525 |
| 13 | `(i32 i32 i32 i32 i32 i32) -> ()` | 126 | 19,829 | 8,878 | local.get×2493, i32.const×1113, local.set×430, local.tee×385, i32.load×382 |
| 14 | `(i32 i32 f64) -> (i32)` | 48 | 17,102 | 8,098 | local.get×2218, i32.const×774, local.set×526, local.tee×508, i32.add×478 |
| 16 | `(i32 i32) -> ()` | 96 | 31,835 | 14,861 | local.get×4482, i32.const×1910, i32.add×763, local.set×692, i32.load×669 |
| 22 | `(i32 i32) -> ()` | 82 | 29,024 | 13,043 | local.get×4618, i32.const×1456, i32.store×702, i32.add×689, local.tee×645 |
| 23 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 64 | 24,283 | 11,198 | local.get×2682, i32.const×1711, local.set×821, end×663, block×465 |
| 27 | `(i32 i32 i32 i32 i32) -> ()` | 68 | 22,713 | 10,576 | local.get×3337, i32.const×1240, local.tee×731, i32.add×436, local.set×333 |
| 32 | `(i32 i32 i32 i32 i32) -> ()` | 65 | 18,015 | 8,704 | local.get×2378, i32.const×1095, local.set×628, local.tee×459, i32.add×442 |
| 61 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 99 | 32,153 | 15,014 | local.get×4317, i32.const×1963, i32.load×986, local.set×902, i32.add×812 |
| 191 | `(i32 i32) -> ()` | 10 | 26,597 | 12,807 | local.get×4506, i32.load×1211, i32.const×1022, end×797, i32.add×734 |
| 222 | `(i32) -> ()` | 19 | 23,160 | 10,851 | local.get×2722, i32.load×1494, i32.const×1177, local.tee×1008, end×853 |
| 712 | `(i32 i32 i32 i32) -> ()` | 54 | 21,810 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 998 | `(i32 i32) -> ()` | 138 | 42,517 | 20,065 | local.get×5230, i32.const×2314, local.tee×1187, i32.add×1060, local.set×1007 |
| 1553 | `(i32 i32) -> (i32)` | 180 | 54,455 | 19,757 | local.get×6549, i32.const×2619, i64.store×1893, i64.const×1069, i64.load×1044 |
| 1953 | `(i32 i32) -> ()` | 110 | 38,693 | 17,216 | local.get×5028, i32.const×1620, local.set×859, local.tee×753, end×661 |
| 2543 | `(i32 i32) -> ()` | 397 | 142,149 | 64,171 | local.get×18429, i32.const×8004, local.set×3839, i32.load×3164, end×2815 |
| 2812 | `(i32 i32 i32 i32) -> ()` | 137 | 30,438 | 13,878 | local.get×4157, i32.const×1460, local.tee×728, local.set×674, i32.load×609 |
| 2831 | `(i32 i32) -> ()` | 136 | 33,882 | 15,183 | local.get×4267, i32.const×2015, local.set×798, local.tee×742, i32.add×699 |

## Embedded strings (data segments)

60 printable strings ≥6 chars; largest:

```
beaver_lumberjackchefdwarf_blue_hairdwarf_braided_hairdwarf_childdwarf_forked_bearddwarf_ginger_bearddwarf_grey_bearddwarf_hair_bunsdwarf_purple_bearddwarf_red_hairdwarf_short_beardfarmerfarmer_gillfi
DEEJJJJJJHHHHEEDDDDDDHHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDEEDEEEEEEDEDEDHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
ZombieGrunt1ZombieGrunt2ZombieGrunt3ZombieHurt1ZombieHurt2ZombieHurt3ZombieHurt4bassbassattackbdbearRoar1bearRoar2bearRoar3bearRoar4bearRoar5beepbigDrumSwish1bigDrumSwish2bigDrumSwish3bowbucketEmpty1b
                                                                                                skin_1_0skin_1_1skin_1_2skin_1_3skin_1_4hat_0_0hat_0_1hat_0_2hat_0_3hat_0_4hat_0_5hat_0_6hat_13_0hat_13_
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
| `local.get` | 533,718 |
| `i32.const` | 223,724 |
| `local.tee` | 99,242 |
| `i32.load` | 93,296 |
| `local.set` | 93,283 |
| `i32.add` | 86,382 |
| `end` | 78,405 |
| `br_if` | 63,735 |
| `i32.store` | 46,116 |
| `block` | 36,923 |
| `i64.const` | 32,190 |
| `i64.store` | 31,302 |
| `if` | 29,890 |
| `call` | 28,841 |
| `i32.sub` | 24,383 |
| `i64.load` | 23,196 |
| `br` | 23,001 |
| `i32.eqz` | 19,311 |
| `select` | 16,829 |
| `i32.shl` | 16,322 |
| `i32.and` | 16,242 |
| `i32.ne` | 15,736 |
| `i32.load8_u` | 14,753 |
| `i32.eq` | 13,803 |
| `i32.store8` | 12,527 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 2,860/2,860 (degraded: 0)
