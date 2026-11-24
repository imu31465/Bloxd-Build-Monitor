# WASM module: `bloxd_wasm_webgl1_bg`

> environment **bloxd.io** · build `mpd96o.85ad4551` · analyzed 2026-11-24T14:21:10+09:00
> source: https://bloxd.io/static/media/bloxd_wasm_webgl1_bg.710c66c8334f11aed9b6.wasm
> 4,839,018 bytes (4.6 MB) · sha256 `700b62082439f7ae…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- size 4,836,347 → 4,839,018 bytes (+2,671)
- defined functions 2,859 → 2,860
- code bytes 3,987,961 → 3,990,279
- data bytes 802,052 → 802,402
- name-section module id `fdc04fd07aac45e9.10574` → `b94224d713ad066f.10575`
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
| name-section module id | `b94224d713ad066f.10575` |
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
| 0 | `RmOg.GNqE` | memory | `[128..14648]` |
| 0 | `RmOg.IF4S` | func | `(i32) -> (f64)` |
| 1 | `RmOg.zdmb` | func | `() -> (i32)` |
| 2 | `RmOg.eiRM` | func | `(i32 i32 i32) -> (i32)` |
| 3 | `RmOg.C1cF` | func | `(i32) -> ()` |
| 4 | `RmOg.tmDK` | func | `(i32 i32) -> (i32)` |
| 5 | `RmOg.RZUN` | func | `(i32) -> (i32)` |
| 6 | `RmOg.FJPt` | func | `(i32 i32 i32) -> (i32)` |
| 7 | `RmOg.jRwi` | func | `(i32 i32 i32 i32) -> (i32)` |
| 8 | `RmOg.Cg0r` | func | `(i32) -> (i32)` |
| 9 | `RmOg.vpSQ` | func | `(i32 i32) -> ()` |
| 10 | `RmOg.zguO` | func | `(i32 i32) -> ()` |
| 11 | `RmOg.BVdt` | func | `(i32 i32 i32 i32) -> (i32)` |
| 12 | `RmOg.VVF5` | func | `(i32 i32) -> (i32)` |
| 13 | `RmOg.UxmK` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 14 | `RmOg.AlzP` | func | `(i32) -> (i32)` |
| 15 | `RmOg.irDl` | func | `(i32 i32) -> (i32)` |
| 16 | `RmOg.A3uc` | func | `(i32 i32) -> (i32)` |
| 17 | `RmOg.w7I6` | func | `(i32 i32) -> ()` |
| 18 | `RmOg.S5pD` | func | `(i32) -> (i32)` |
| 19 | `RmOg.rJvV` | func | `(i32) -> (i32)` |
| 20 | `RmOg.GTN2` | func | `(i32) -> (i32)` |
| 21 | `RmOg.Ylg2` | func | `(i32) -> ()` |
| 22 | `RmOg.Sekr` | func | `(i32 i32) -> ()` |
| 23 | `RmOg.uKbU` | func | `(i32 i32) -> ()` |
| 24 | `RmOg.S48J` | func | `(i32) -> (i32)` |
| 25 | `RmOg.VSgj` | func | `(i32 i32) -> ()` |
| 26 | `RmOg.axWu` | func | `(i32 i32) -> (i32)` |
| 27 | `RmOg.ljr2` | func | `(i32 i32 i32 i32) -> ()` |
| 28 | `RmOg.zyOZ` | func | `(i32 i32) -> (i32)` |
| 29 | `RmOg.Gpjd` | func | `(i32 i32 i32) -> (i32)` |
| 30 | `RmOg.RcCJ` | func | `(i32) -> (i32)` |
| 31 | `RmOg.geJs` | func | `(i32 i32) -> ()` |
| 32 | `RmOg.HCl0` | func | `(i32) -> (i32)` |
| 33 | `RmOg.zKc6` | func | `(i32) -> (i32)` |
| 34 | `RmOg.nVMZ` | func | `(i32 i32 i32) -> (i32)` |
| 35 | `RmOg.O0aQ` | func | `(i32) -> (i32)` |
| 36 | `RmOg.uWjK` | func | `(i32) -> (i32)` |
| 37 | `RmOg.pJPp` | func | `(i32) -> (i32)` |
| 38 | `RmOg.vjNZ` | func | `(i32 i32) -> (i32)` |
| 39 | `RmOg.gPwO` | func | `(i32 i32 i32 i32) -> ()` |
| 40 | `RmOg.BfJf` | func | `(i32) -> (i32)` |
| 41 | `RmOg.KblD` | func | `(i32 i32 i32 i32) -> ()` |
| 42 | `RmOg.k6Zi` | func | `() -> (f64)` |
| 43 | `RmOg.qGt0` | func | `(i32) -> (i32)` |
| 44 | `RmOg.HPsQ` | func | `(i32 i32 i32 i32) -> ()` |
| 45 | `RmOg.MTtP` | func | `(i32 i32 i32) -> (i32)` |
| 46 | `RmOg.Tb2Z` | func | `(i32 f64 f64 f64 f64) -> ()` |
| 47 | `RmOg.kPb4` | func | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64) -> ()` |
| 48 | `RmOg.FQ9J` | func | `(i32 i32 i32) -> ()` |
| 49 | `RmOg.PRJD` | func | `(i32 i32 i32) -> ()` |
| 50 | `RmOg.GVm4` | func | `(i32 i32 i32) -> ()` |
| 51 | `RmOg.y4ND` | func | `(i32 i32) -> ()` |
| 52 | `RmOg.cMJx` | func | `(i32 i32) -> ()` |
| 53 | `RmOg.Vlqj` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 54 | `RmOg.LxkN` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 55 | `RmOg.LpSz` | func | `(i32 f32 f32) -> ()` |
| 56 | `RmOg.MvRs` | func | `(i32 f32 f32) -> ()` |
| 57 | `RmOg.JGno` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 58 | `RmOg.PkMz` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 59 | `RmOg.rfIj` | func | `(i32 i32 i32 i32) -> ()` |
| 60 | `RmOg.SFOY` | func | `(i32 i32 i32 i32) -> ()` |
| 61 | `RmOg.w7NO` | func | `(i32 i32 i32) -> ()` |
| 62 | `RmOg.wojH` | func | `(i32 i32 i32) -> ()` |
| 63 | `RmOg.c3Bq` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 64 | `RmOg.g2v6` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 65 | `RmOg.mDAH` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 66 | `RmOg.qLc5` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 67 | `RmOg.dqcK` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 68 | `RmOg.ggj1` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 69 | `RmOg.JZCW` | func | `(i32) -> (i32)` |
| 70 | `RmOg.Edgf` | func | `(i32) -> ()` |
| 71 | `RmOg.LKbO` | func | `(i32) -> (i32)` |
| 72 | `RmOg.vn3a` | func | `(i32 i32) -> (i32)` |
| 73 | `RmOg.bUie` | func | `(i32 i32 i32) -> (i32)` |
| 74 | `RmOg.IMs6` | func | `(i32 i32 i32) -> ()` |
| 75 | `RmOg.MT2t` | func | `(i32 i32 i32 i32) -> (i32)` |
| 76 | `RmOg.dEJy` | func | `() -> (f64)` |
| 77 | `RmOg.Zbet` | func | `() -> (f64)` |
| 78 | `RmOg.VN5O` | func | `(i32 i32) -> ()` |
| 79 | `RmOg.TTxx` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 80 | `RmOg.zfdH` | func | `(i32 i32 i32) -> ()` |
| 81 | `RmOg.eXkh` | func | `(i32 i32 i32) -> ()` |
| 82 | `RmOg.Mz39` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 83 | `RmOg.SR3k` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 84 | `RmOg.wU3C` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 85 | `RmOg.UU52` | func | `(i32 i32) -> ()` |
| 86 | `RmOg.Qq2t` | func | `(i32 i32) -> ()` |
| 87 | `RmOg.y0YZ` | func | `(i32) -> (i32)` |
| 88 | `RmOg.jQ3P` | func | `(i32 i32) -> ()` |
| 89 | `RmOg.wfQQ` | func | `(i32 i32) -> ()` |
| 90 | `RmOg.MRf2` | func | `(i32 i32 i32) -> ()` |
| 91 | `RmOg.BFcX` | func | `(i32 i32 i32) -> ()` |
| 92 | `RmOg.HZar` | func | `(i32) -> (i32)` |
| 93 | `RmOg.iMeh` | func | `(i32) -> (i32)` |
| 94 | `RmOg.wZRg` | func | `(i32 i32) -> (i32)` |
| 95 | `RmOg.pHF7` | func | `(i32 i32) -> (i32)` |
| 96 | `RmOg.kIb4` | func | `(i32 i32) -> ()` |
| 97 | `RmOg.qVWg` | func | `(i32 i32) -> ()` |
| 98 | `RmOg.JoqC` | func | `(i32 i32 i32) -> ()` |
| 99 | `RmOg.OOto` | func | `(i32 i32 i32) -> ()` |
| 100 | `RmOg.AyUY` | func | `(i32 i32 i32 i32) -> ()` |
| 101 | `RmOg.UzT1` | func | `(i32 i32 i32 i32) -> ()` |
| 102 | `RmOg.QvTs` | func | `(i32 i32 f32) -> ()` |
| 103 | `RmOg.YR6d` | func | `(i32 i32 f32) -> ()` |
| 104 | `RmOg.Qg6b` | func | `(i32 i32 i32) -> ()` |
| 105 | `RmOg.RF3L` | func | `(i32 i32 i32) -> ()` |
| 106 | `RmOg.GPwO` | func | `(i32 i32 i32) -> ()` |
| 107 | `RmOg.a969` | func | `(i32 i32 f32 f32) -> ()` |
| 108 | `RmOg.ow9V` | func | `(i32 i32 f32 f32) -> ()` |
| 109 | `RmOg.Cow8` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 110 | `RmOg.E0Qv` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 111 | `RmOg.KQyr` | func | `(i32 i32) -> ()` |
| 112 | `RmOg.CutW` | func | `(i32 i32) -> ()` |
| 113 | `RmOg.PMoQ` | func | `(i32 i32) -> ()` |
| 114 | `RmOg.WNWF` | func | `(i32 i32) -> ()` |
| 115 | `RmOg.J6Ly` | func | `(i32) -> (i32)` |
| 116 | `RmOg.pJAA` | func | `(i32) -> (i32)` |
| 117 | `RmOg.DPce` | func | `(i32) -> (i32)` |
| 118 | `RmOg.lbZM` | func | `(i32) -> (i32)` |
| 119 | `RmOg.merP` | func | `(i32 i32) -> ()` |
| 120 | `RmOg.fXhA` | func | `(i32 i32) -> ()` |
| 121 | `RmOg.XpP6` | func | `(i32 i32) -> ()` |
| 122 | `RmOg.dGSq` | func | `(i32 i32) -> ()` |
| 123 | `RmOg.UVwJ` | func | `(i32 i32) -> ()` |
| 124 | `RmOg.cwhm` | func | `(i32 i32) -> ()` |
| 125 | `RmOg.JKjr` | func | `(i32 i32) -> (i32)` |
| 126 | `RmOg.apyq` | func | `(i32 i32) -> (i32)` |
| 127 | `RmOg.unuI` | func | `(i32 i32 i32 i32) -> ()` |
| 128 | `RmOg.iya9` | func | `(i32 i32 i32 i32) -> ()` |
| 129 | `RmOg.bAEL` | func | `(i32 i32) -> ()` |
| 130 | `RmOg.PPvw` | func | `(i32 i32) -> ()` |
| 131 | `RmOg.ozku` | func | `(i32) -> (i32)` |
| 132 | `RmOg.ys9u` | func | `(i32 i32) -> ()` |
| 133 | `RmOg.luzT` | func | `(i32 i32) -> ()` |
| 134 | `RmOg.ztOu` | func | `(i32 i32 i32) -> ()` |
| 135 | `RmOg.FPJY` | func | `(i32 i32 i32) -> ()` |
| 136 | `RmOg.UIBw` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 137 | `RmOg.Skve` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 138 | `RmOg.xyd9` | func | `(i32 i32) -> ()` |
| 139 | `RmOg.idXs` | func | `(i32 i32 i32) -> ()` |
| 140 | `RmOg.cdrv` | func | `(i32 i32 i32) -> ()` |
| 141 | `RmOg.x9sl` | func | `(i32 i32 i32 i32) -> (i32)` |
| 142 | `RmOg.sAEH` | func | `(i32 i32 i32 i32) -> (i32)` |
| 143 | `RmOg.Z9gC` | func | `(i32 i32 i32) -> ()` |
| 144 | `RmOg.xEPd` | func | `(i32 i32 i32) -> ()` |
| 145 | `RmOg.au9p` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 146 | `RmOg.xvSx` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 147 | `RmOg.CNrB` | func | `(i32 i32 i32) -> (i32)` |
| 148 | `RmOg.lYB3` | func | `(i32 i32 i32) -> (i32)` |
| 149 | `RmOg.dWmd` | func | `(i32 i32 i32) -> (i32)` |
| 150 | `RmOg.xsd3` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 151 | `RmOg.Xfrp` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 152 | `RmOg.zVyH` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 153 | `RmOg.KjLz` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 154 | `RmOg.f4Mb` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 155 | `RmOg.Q4Tv` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 156 | `RmOg.jPFi` | func | `(i32) -> (i32)` |
| 157 | `RmOg.HUy7` | func | `(i32) -> (i32)` |
| 158 | `RmOg.ayG0` | func | `(i32) -> (i32)` |
| 159 | `RmOg.NrXX` | func | `(i32) -> (i32)` |
| 160 | `RmOg.gWVf` | func | `() -> (i32)` |
| 161 | `RmOg.ZBmC` | func | `() -> (i32)` |
| 162 | `RmOg.kBRH` | func | `() -> (i32)` |
| 163 | `RmOg.GfzY` | func | `() -> (i32)` |
| 164 | `RmOg.bFFn` | func | `(i32 i32) -> (i32)` |
| 165 | `RmOg.DvdD` | func | `(i32) -> ()` |
| 166 | `RmOg.mUMa` | func | `(i32 i32) -> (i32)` |
| 167 | `RmOg.Z583` | func | `(i32) -> (i32)` |
| 168 | `RmOg.G4Eu` | func | `(i32) -> (i32)` |
| 169 | `RmOg.FLU3` | func | `(i32) -> (i32)` |
| 170 | `RmOg.oEpO` | func | `(i32) -> ()` |
| 171 | `RmOg.Z7IC` | func | `(i32 i32 i32) -> (i32)` |
| 172 | `RmOg.IsHC` | func | `(i32) -> (i32)` |
| 173 | `RmOg.gw33` | func | `(i32) -> (i32)` |
| 174 | `RmOg.UbWu` | func | `(i32 i32) -> (i32)` |
| 175 | `RmOg.E1XW` | func | `(i32 i32 i32) -> (i32)` |
| 176 | `RmOg.fVUo` | func | `(i32 i32 i32) -> (i32)` |
| 177 | `RmOg.N1Cm` | func | `(i32) -> (i32)` |
| 178 | `RmOg.mlPH` | func | `(i32) -> (i32)` |
| 179 | `RmOg.K4tb` | func | `(i32) -> (i32)` |
| 180 | `RmOg.LlLK` | func | `(i32 i32 i32 i32) -> ()` |
| 181 | `RmOg.aHKp` | func | `(i32 i32 i32 i32) -> ()` |
| 182 | `RmOg.viD2` | func | `(i32 i32) -> ()` |
| 183 | `RmOg.eq3T` | func | `(i32 i32 i32) -> ()` |
| 184 | `RmOg.JJBg` | func | `(i32 i32) -> ()` |
| 185 | `RmOg.qm9P` | func | `(i32 i32 i32) -> ()` |
| 186 | `RmOg.uT0V` | func | `(i32 i32) -> ()` |
| 187 | `RmOg.i5Vk` | func | `(i32 i32) -> ()` |
| 188 | `RmOg.KVhb` | func | `(i32) -> (i32)` |
| 189 | `RmOg.zews` | func | `(i32 i32) -> (i32)` |
| 190 | `RmOg.LQbf` | func | `(i32) -> ()` |
| 191 | `RmOg.d8sN` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 192 | `RmOg.PAVP` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 193 | `RmOg.uRNG` | func | `(i32 i32) -> ()` |
| 194 | `RmOg.WWd4` | func | `(i32 i32) -> ()` |
| 195 | `RmOg.dYz9` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 196 | `RmOg.KDT9` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 197 | `RmOg.Q4nu` | func | `(i32 f32) -> ()` |
| 198 | `RmOg.ahww` | func | `(i32 f32) -> ()` |
| 199 | `RmOg.Di7l` | func | `(i32 i32) -> ()` |
| 200 | `RmOg.IAHt` | func | `(i32 i32) -> ()` |
| 201 | `RmOg.pxkF` | func | `(i32) -> (i32)` |
| 202 | `RmOg.Xo1K` | func | `(i32) -> (i32)` |
| 203 | `RmOg.Gs8r` | func | `(i32) -> (i32)` |
| 204 | `RmOg.HU7B` | func | `(i32) -> (i32)` |
| 205 | `RmOg.JQ7T` | func | `(i32 i32 i32) -> ()` |
| 206 | `RmOg.GG8r` | func | `(i32 i32 i32) -> ()` |
| 207 | `RmOg.hwMs` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 208 | `RmOg.JGhD` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 209 | `RmOg.Kq2A` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 210 | `RmOg.uPSg` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 211 | `RmOg.EQFp` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 212 | `RmOg.KbLF` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 213 | `RmOg.HcUm` | func | `(i32 i32) -> ()` |
| 214 | `RmOg.J8P1` | func | `(i32 i32) -> ()` |
| 215 | `RmOg.m82B` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 216 | `RmOg.qY7F` | func | `(i32 i32 i32 f32) -> ()` |
| 217 | `RmOg.nMSL` | func | `(i32 i32 i32 f32) -> ()` |
| 218 | `RmOg.x713` | func | `(i32) -> (i32)` |
| 219 | `RmOg.Ebk3` | func | `(i32) -> (i32)` |
| 220 | `RmOg.tG55` | func | `(i32 i32) -> ()` |
| 221 | `RmOg.yK7X` | func | `(i32 i32) -> ()` |
| 222 | `RmOg.aX1a` | func | `(i32 i32 i32) -> (i32)` |
| 223 | `RmOg.gncu` | func | `(i32) -> (i32)` |
| 224 | `RmOg.oz5d` | func | `(i32) -> (i32)` |
| 225 | `RmOg.kD8K` | func | `(i32 i32) -> ()` |
| 226 | `RmOg.qT98` | func | `(i32 i32 i32) -> (i32)` |
| 227 | `RmOg.DBOa` | func | `(i32 i32) -> ()` |
| 228 | `RmOg.lhSH` | func | `(i32 i32) -> ()` |
| 229 | `RmOg.f4qz` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 230 | `RmOg.qpUD` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 231 | `RmOg.OLnj` | func | `(i32 i32 i32) -> ()` |
| 232 | `RmOg.eSEs` | func | `(i32 i32 i32) -> ()` |
| 233 | `RmOg.LP8e` | func | `(i32 i32) -> ()` |
| 234 | `RmOg.ijaN` | func | `(i32 i32) -> ()` |
| 235 | `RmOg.PPpR` | func | `(i32 i32) -> ()` |
| 236 | `RmOg.tdCA` | func | `(i32 i32) -> ()` |
| 237 | `RmOg.IddD` | func | `(i32 i32) -> ()` |
| 238 | `RmOg.WOAv` | func | `(i32 i32) -> ()` |
| 239 | `RmOg.tDc7` | func | `(i32 f32 f32) -> ()` |
| 240 | `RmOg.CoN7` | func | `(i32 f32 f32) -> ()` |
| 241 | `RmOg.JGTw` | func | `(i32 i32 i32 i32) -> ()` |
| 242 | `RmOg.VtZc` | func | `(i32 i32 i32 i32) -> ()` |
| 243 | `RmOg.Pf0Q` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 244 | `RmOg.WHOf` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 245 | `RmOg.bk7x` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 246 | `RmOg.j8fi` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 247 | `RmOg.oCfR` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 248 | `RmOg.xvD8` | func | `(i32 i32 i32 i32) -> ()` |
| 249 | `RmOg.MXU0` | func | `(i32 i32 i32 i32) -> ()` |
| 250 | `RmOg.kseu` | func | `(i32) -> ()` |
| 251 | `RmOg.mzSV` | func | `(i32 i32) -> ()` |
| 252 | `RmOg.mCC4` | func | `(i32 i32) -> ()` |
| 253 | `RmOg.mnBK` | func | `(i32 i32) -> ()` |
| 254 | `RmOg.RGpN` | func | `(i32 i32) -> ()` |
| 255 | `RmOg.qaq8` | func | `(i32 i32) -> ()` |
| 256 | `RmOg.vR0j` | func | `(i32 i32) -> ()` |
| 257 | `RmOg.r1Vz` | func | `(i32 i32) -> ()` |
| 258 | `RmOg.XxQS` | func | `(i32 i32) -> ()` |
| 259 | `RmOg.bDb6` | func | `(i32) -> (i32)` |
| 260 | `RmOg.NgjT` | func | `(i32) -> (i32)` |
| 261 | `RmOg.WbL8` | func | `(i32) -> (i32)` |
| 262 | `RmOg.gQ5r` | func | `(i32) -> (i32)` |
| 263 | `RmOg.URMC` | func | `(i32) -> ()` |
| 264 | `RmOg.O4hM` | func | `(i32 i32 i32 i32) -> ()` |
| 265 | `RmOg.Hx5C` | func | `(i32) -> ()` |
| 266 | `RmOg.zlhu` | func | `(i32) -> (i32)` |
| 267 | `RmOg.SaHX` | func | `(i32) -> (i32)` |
| 268 | `RmOg.nJ8f` | func | `(i32) -> (i32)` |
| 269 | `RmOg.k3Ou` | func | `(i32) -> (i32)` |
| 270 | `RmOg.odME` | func | `(i32 i32) -> ()` |
| 271 | `RmOg.UeDf` | func | `(i32) -> ()` |
| 272 | `RmOg.d6Er` | func | `(i32 i32) -> ()` |
| 273 | `RmOg.pYyP` | func | `(i32) -> (i32)` |
| 274 | `RmOg.pj7N` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 275 | `RmOg.atdj` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 276 | `RmOg.ZfeS` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 277 | `RmOg.iHfE` | func | `(i32 i32) -> (i32)` |
| 278 | `RmOg.gDZU` | func | `(i32 i32) -> (i32)` |
| 279 | `RmOg.ZTRo` | func | `(i32 i32) -> (i32)` |
| 280 | `RmOg.LRKQ` | func | `(i32 i32) -> (i32)` |
| 281 | `RmOg.DvU1` | func | `(i32 i32) -> (i32)` |

## Exports

156 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `ayvJ` | func | 1267 | `(i32 i32) -> (i32)` |
| `Dsba` | func | 2943 | `(i32 i32) -> (i32 i32)` |
| `aG8V` | func | 1942 | `(i32 i32) -> ()` |
| `PCjg` | func | 2422 | `(i32) -> (i32)` |
| `f8mQ` | func | 1193 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `Mf9r` | func | 1842 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `XAIt` | func | 1818 | `(i32 i32 f64 f64 f64) -> ()` |
| `NuY8` | func | 2447 | `(i32 i32) -> (i32)` |
| `Mkrr` | func | 2953 | `(i32) -> (i32 i32)` |
| `U6k5` | func | 2946 | `(i32 i32) -> (i32 i32)` |
| `aOi4` | func | 2955 | `(i32) -> (i32 i32)` |
| `IJoQ` | func | 2160 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `t6E8` | func | 1701 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `aYoQ` | func | 2363 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `pEr3` | func | 687 | `(i32 i32) -> (i32)` |
| `kR1D` | func | 1360 | `(i32 f64 f64) -> (i32)` |
| `HDAU` | func | 2434 | `(i32 i32) -> ()` |
| `byPe` | func | 2003 | `(i32 i32) -> ()` |
| `XF4f` | func | 2739 | `(i32) -> (i32)` |
| `tfdJ` | func | 2438 | `(i32 i32) -> ()` |
| `W0Et` | func | 1558 | `(i32 i32) -> ()` |
| `kPOy` | func | 1085 | `(i32 i32) -> (i32)` |
| `HGrm` | func | 1825 | `(i32 i32) -> ()` |
| `psIJ` | func | 598 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `aMmi` | func | 3109 | `(i32) -> ()` |
| `U6Ia` | func | 2957 | `(i32) -> (i32 i32)` |
| `O1pF` | func | 1851 | `(i32) -> ()` |
| `BIEO` | func | 3029 | `() -> (i32)` |
| `OQFc` | func | 1783 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `L5Jd` | func | 1892 | `(i32) -> (i32)` |
| `mLSz` | global | 2 | `` |
| `Bdrw` | func | 1086 | `(i32 i32) -> ()` |
| `jSi7` | func | 1907 | `(i32) -> (i32)` |
| `Y3hC` | func | 2944 | `(i32 i32) -> (i32 i32)` |
| `VF2P` | func | 2404 | `(i32) -> (i32)` |
| `FqLs` | func | 2426 | `(i32) -> (i32)` |
| `hd5B` | func | 2291 | `(i32 i32) -> (i32)` |
| `Ja2D` | func | 1559 | `(i32 i32) -> ()` |
| `LCQH` | func | 2455 | `(i32) -> (i32)` |
| `MaJa` | func | 1427 | `(i32 i32 i32 i32) -> ()` |
| `a1ts` | func | 1402 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `nqu7` | func | 1359 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `EhfE` | func | 1968 | `(i32 f64) -> (i32)` |
| `oIPn` | func | 1601 | `(i32 i32 i32 i32) -> (i32)` |
| `EOuM` | func | 1798 | `(i32 i32 i32 i32) -> (i32)` |
| `AYk3` | func | 1497 | `(i32 i32 i32) -> (i32)` |
| `jfqK` | func | 3063 | `() -> ()` |
| `INUu` | func | 2439 | `(i32) -> (i32)` |
| `cos9` | func | 3001 | `(i32 i32) -> ()` |
| `cOLY` | func | 1441 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `mT3d` | func | 2750 | `(i32) -> ()` |
| `A0V0` | func | 1986 | `(i32 f64 f64 f64) -> (i32)` |
| `CDkW` | func | 1835 | `(i32 i32) -> (i32)` |
| `G9Be` | func | 741 | `(i32 i32 i32) -> (i32)` |
| `fS7G` | func | 1547 | `(i32 i32) -> (i32)` |
| `PVLs` | func | 2948 | `(i32 i32) -> (i32 i32)` |
| `HVzi` | func | 3000 | `(i32 i32 i32) -> ()` |
| `cxPQ` | func | 1850 | `(i32) -> ()` |
| `bYPe` | func | 2417 | `(i32) -> (f64)` |
| `hiiW` | func | 2377 | `(i32) -> (i32)` |
| `G2Zu` | func | 1234 | `(i32 i32 i32) -> (i32)` |
| `HAEz` | func | 792 | `(i32 i32) -> (i32)` |
| `F9Xq` | func | 2419 | `(i32) -> (i32)` |
| `v7xx` | func | 1909 | `(i32 i32 i32 i32) -> ()` |
| `xujb` | func | 3062 | `(i32) -> ()` |
| `tMr8` | func | 649 | `(i32 i32) -> (i32)` |
| `sjEF` | func | 3108 | `(i32) -> (i32)` |
| `aqYV` | func | 2418 | `(i32) -> (i32)` |
| `EEdk` | func | 3132 | `() -> (i32)` |
| `aghV` | func | 1449 | `(i32 i32 i32 i32) -> (i32)` |
| `Qkqq` | func | 887 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `pOGC` | func | 2945 | `(i32 i32) -> (i32 i32)` |
| `NuQO` | func | 1563 | `(i32 f64 f64 f64) -> (i32)` |
| `iHy2` | func | 719 | `(i32) -> (i32)` |
| `QMg7` | func | 717 | `(i32 i32 i32 i32) -> (i32)` |
| `a4Ws` | func | 869 | `(i32 i32) -> (i32)` |
| `Mtmh` | func | 2424 | `(i32) -> ()` |
| `YG5G` | func | 2537 | `() -> (i32)` |
| `RnBB` | func | 1187 | `(i32 i32 i32 i32) -> (i32)` |
| `qYSe` | func | 2730 | `(i32) -> (i32)` |
| `RIgr` | func | 1450 | `(i32) -> (i32)` |
| `sfF9` | func | 2968 | `() -> (i32 i32)` |
| `JDgo` | func | 1686 | `(i32) -> (i32)` |
| `lEpO` | func | 1665 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `xge1` | func | 1186 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `qeeS` | func | 2213 | `(i32 i32) -> ()` |
| `faP6` | func | 1310 | `(i32 i32 i32) -> (i32)` |
| `Ny0m` | func | 2954 | `(i32) -> (i32 i32)` |
| `re4D` | global | 1 | `` |
| `veFM` | func | 2890 | `() -> ()` |
| `TCHP` | func | 1294 | `(i32) -> ()` |
| `NO7J` | func | 1719 | `(i32 i32) -> (i32)` |
| `TsqH` | func | 2214 | `(i32 f64) -> (i32)` |
| `N2Kp` | func | 2293 | `(i32 i32) -> (i32)` |
| `qev7` | func | 2991 | `(i32 i32 i32 i32) -> ()` |
| `MxrL` | func | 2939 | `(i32 i32 i32) -> (i32 i32)` |
| `gPnv` | func | 1481 | `(i32 i32) -> (i32)` |
| `TEdx` | func | 2420 | `(i32) -> (i32)` |
| `LbFl` | func | 1482 | `(i32 i32) -> (i32)` |
| `Shbh` | func | 3131 | `() -> (i32)` |
| `SFkj` | func | 897 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `D0z8` | func | 868 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `Bng7` | func | 1146 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `I52k` | func | 1470 | `(i32 i32) -> (i32)` |
| `yfbu` | func | 2421 | `(i32) -> (i32)` |
| `cwDT` | func | 2108 | `(i32 i32) -> (i32)` |
| `gYRs` | func | 1531 | `(i32) -> (i32)` |
| `GcY9` | func | 661 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `UORl` | func | 2294 | `(i32 i32) -> (i32)` |
| `DmX8` | func | 2139 | `(i32 i32) -> (i32)` |
| `EhJb` | func | 2360 | `(i32) -> (i32)` |
| `BA1D` | func | 2969 | `() -> (i32 i32)` |
| `krT5` | func | 2427 | `(i32) -> (i32)` |
| `Fg6t` | func | 2448 | `(i32 i32) -> (i32)` |
| `IGGm` | func | 2772 | `(i32) -> (i32)` |
| `Fw6L` | func | 1517 | `(i32 i32 i32 i32) -> (i32)` |
| `vSli` | func | 2423 | `(i32) -> (i32)` |
| `Z3OV` | func | 1406 | `() -> (i32)` |
| `agrV` | func | 2323 | `(i32 i32) -> (i32)` |
| `COQj` | func | 2437 | `(i32) -> (i32)` |
| `Sx8r` | func | 2244 | `(i32 i32) -> ()` |
| `xq0K` | func | 3056 | `(i32 i32 i32) -> ()` |
| `AWsv` | func | 2504 | `() -> (i32)` |
| `ygjH` | func | 548 | `(i32 i32 i32) -> (i32)` |
| `O4mX` | func | 3104 | `() -> (f64)` |
| `Rnwq` | func | 724 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `PwSt` | func | 2920 | `(i32 i32) -> ()` |
| `xdGm` | func | 1380 | `(i32 i32) -> (i32)` |
| `BhYf` | func | 1456 | `(i32 i32) -> (i32)` |
| `WuDc` | func | 2425 | `(i32) -> (i32)` |
| `rMeR` | func | 2492 | `(i32 i32) -> ()` |
| `eMrR` | func | 2914 | `(i32 i32 i32 i32) -> (i32)` |
| `X73C` | func | 2956 | `(i32) -> (i32 i32)` |
| `PAmj` | func | 2336 | `(i32 i32 i32 i32) -> (i32)` |
| `VYHX` | func | 2710 | `(i32) -> (i32)` |
| `E75s` | func | 1708 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `U7Nl` | func | 2446 | `(i32) -> (i32)` |
| `ah6F` | func | 2436 | `(i32) -> (i32)` |
| `fiuQ` | func | 1240 | `(i32 i32 i32) -> ()` |
| `ecyt` | func | 2938 | `(i32 i32 i32) -> (i32 i32)` |
| `Y10e` | func | 2026 | `(i32 i32) -> (i32)` |
| `cbJs` | func | 1216 | `(i32 i32) -> (i32)` |
| `NAnO` | func | 2403 | `(i32 i32) -> ()` |
| `mJaw` | func | 2949 | `(i32 i32) -> (i32 i32)` |
| `sSoT` | func | 1778 | `() -> (i32)` |
| `nmZs` | func | 1485 | `(i32 f64) -> (f64)` |
| `memory` | memory | 0 | `` |
| `YYPI` | func | 2456 | `(i32) -> (i32)` |
| `cD7d` | func | 2717 | `(i32) -> (i32)` |
| `ekXV` | func | 2457 | `(i32) -> (i32)` |
| `bExy` | func | 1446 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `LDsn` | func | 2536 | `(i32 i32) -> ()` |
| `vros` | func | 2947 | `(i32 i32) -> (i32 i32)` |
| `vqiV` | func | 2909 | `(i32 i32) -> (i32)` |
| `Huya` | func | 1259 | `(i32) -> (i32)` |
| `BWKP` | func | 2292 | `(i32 i32) -> (i32)` |

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
