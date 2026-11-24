# WASM module: `bloxd_wasm_webgl1_bg`

> environment **bloxd.io** · build `7zvlu.7df130a9` · analyzed 2026-11-25T05:21:35+09:00
> source: https://bloxd.io/static/media/bloxd_wasm_webgl1_bg.4e93b2cfbc4fdd517311.wasm
> 4,851,495 bytes (4.6 MB) · sha256 `4855e300e3e615d0…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- name-section module id `ed549cb5c3a63f60.10601` → `774964dca57a8fcd.10601` (numeric version suffix unchanged — same module version, re-randomized prefix)
- export identifiers rotated by the obfuscator: 1/157 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,869 / 282 |
| Exports / imports | 157 / 283 |
| Code bytes (function bodies) | 4,001,682 (3.8 MB) |
| Total local variables | 30,513 |
| Instructions (scanable bodies) | 1,877,604 |
| Data segments / bytes | 3,772 / 803,426 |
| Element segments / entries | 1 / 732 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `774964dca57a8fcd.10601` |
| Sections | 11 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,486 | 174 |
| 2 | import | 3,402 | 283 |
| 3 | function | 2,917 | 2869 |
| 4 | table | 7 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,257 | 157 |
| 9 | element | 1,471 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 4,006,947 | 2869 |
| 11 | data | 833,911 | 3772 |
| 0 | custom:name | 30 | — |

## Types

174 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32) -> ()` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

283 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `vCnV.Wxxe` | memory | `[128..14648]` |
| 0 | `vCnV.E2dm` | func | `(i32) -> (f64)` |
| 1 | `vCnV.g8NK` | func | `() -> (i32)` |
| 2 | `vCnV.XIoj` | func | `(i32 i32 i32) -> (i32)` |
| 3 | `vCnV.Zgno` | func | `(i32) -> ()` |
| 4 | `vCnV.Kp4X` | func | `(i32 i32) -> (i32)` |
| 5 | `vCnV.cih2` | func | `(i32) -> (i32)` |
| 6 | `vCnV.M0QG` | func | `(i32 i32 i32) -> (i32)` |
| 7 | `vCnV.IV5H` | func | `(i32 i32 i32 i32) -> (i32)` |
| 8 | `vCnV.YHGA` | func | `(i32) -> (i32)` |
| 9 | `vCnV.b9oI` | func | `(i32 i32) -> ()` |
| 10 | `vCnV.Kpxu` | func | `(i32 i32) -> ()` |
| 11 | `vCnV.mfup` | func | `(i32 i32 i32 i32) -> (i32)` |
| 12 | `vCnV.XLyE` | func | `(i32 i32) -> (i32)` |
| 13 | `vCnV.UHyY` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 14 | `vCnV.vIB9` | func | `(i32) -> (i32)` |
| 15 | `vCnV.OnfV` | func | `(i32 i32) -> (i32)` |
| 16 | `vCnV.f2Fx` | func | `(i32 i32) -> (i32)` |
| 17 | `vCnV.vCrb` | func | `(i32 i32) -> ()` |
| 18 | `vCnV.RZrS` | func | `(i32) -> (i32)` |
| 19 | `vCnV.pQ6Z` | func | `(i32) -> (i32)` |
| 20 | `vCnV.Fhnw` | func | `(i32) -> (i32)` |
| 21 | `vCnV.oGPP` | func | `(i32) -> ()` |
| 22 | `vCnV.Syh9` | func | `(i32 i32) -> ()` |
| 23 | `vCnV.l9B7` | func | `(i32 i32) -> ()` |
| 24 | `vCnV.IINa` | func | `(i32) -> (i32)` |
| 25 | `vCnV.YsB6` | func | `(i32 i32) -> ()` |
| 26 | `vCnV.uIXT` | func | `(i32 i32) -> (i32)` |
| 27 | `vCnV.XgbE` | func | `(i32 i32 i32 i32) -> ()` |
| 28 | `vCnV.MB8j` | func | `(i32 i32) -> (i32)` |
| 29 | `vCnV.dqPQ` | func | `(i32 i32 i32) -> (i32)` |
| 30 | `vCnV.bzMe` | func | `(i32) -> (i32)` |
| 31 | `vCnV.zTqi` | func | `(i32 i32) -> ()` |
| 32 | `vCnV.G9Ow` | func | `(i32) -> (i32)` |
| 33 | `vCnV.lcbW` | func | `(i32) -> (i32)` |
| 34 | `vCnV.L2Ul` | func | `(i32 i32 i32) -> (i32)` |
| 35 | `vCnV.LppP` | func | `(i32) -> (i32)` |
| 36 | `vCnV.Acyn` | func | `(i32) -> (i32)` |
| 37 | `vCnV.umrB` | func | `(i32) -> (i32)` |
| 38 | `vCnV.wNm7` | func | `(i32 i32) -> (i32)` |
| 39 | `vCnV.v4u6` | func | `(i32 i32 i32 i32) -> ()` |
| 40 | `vCnV.MBFA` | func | `(i32) -> (i32)` |
| 41 | `vCnV.aRhQ` | func | `(i32 i32 i32 i32) -> ()` |
| 42 | `vCnV.yqre` | func | `() -> (f64)` |
| 43 | `vCnV.Rdzs` | func | `(i32) -> (i32)` |
| 44 | `vCnV.FjuQ` | func | `(i32 i32 i32 i32) -> ()` |
| 45 | `vCnV.Mlpu` | func | `(i32 i32 i32) -> (i32)` |
| 46 | `vCnV.LisT` | func | `(i32 f64 f64 f64 f64) -> ()` |
| 47 | `vCnV.G99b` | func | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64) -> ()` |
| 48 | `vCnV.v0cJ` | func | `(i32 i32 i32) -> ()` |
| 49 | `vCnV.GpdK` | func | `(i32 i32 i32) -> ()` |
| 50 | `vCnV.UdZG` | func | `(i32 i32 i32) -> ()` |
| 51 | `vCnV.fIGF` | func | `(i32 i32) -> ()` |
| 52 | `vCnV.PLiy` | func | `(i32 i32) -> ()` |
| 53 | `vCnV.XLZS` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 54 | `vCnV.pc3D` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 55 | `vCnV.MTRP` | func | `(i32 f32 f32) -> ()` |
| 56 | `vCnV.NFOO` | func | `(i32 f32 f32) -> ()` |
| 57 | `vCnV.N1MQ` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 58 | `vCnV.n5Kt` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 59 | `vCnV.xSez` | func | `(i32 i32 i32 i32) -> ()` |
| 60 | `vCnV.oLod` | func | `(i32 i32 i32 i32) -> ()` |
| 61 | `vCnV.hvju` | func | `(i32 i32 i32) -> ()` |
| 62 | `vCnV.RSmh` | func | `(i32 i32 i32) -> ()` |
| 63 | `vCnV.CpDz` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 64 | `vCnV.pnJN` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 65 | `vCnV.kLvV` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 66 | `vCnV.BRe6` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 67 | `vCnV.Sl97` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 68 | `vCnV.AHq1` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 69 | `vCnV.wUVT` | func | `(i32) -> (i32)` |
| 70 | `vCnV.j7Dz` | func | `(i32) -> ()` |
| 71 | `vCnV.I65j` | func | `(i32) -> (i32)` |
| 72 | `vCnV.BOoW` | func | `(i32 i32) -> (i32)` |
| 73 | `vCnV.Rc9M` | func | `(i32 i32 i32) -> (i32)` |
| 74 | `vCnV.p6GS` | func | `(i32 i32 i32) -> ()` |
| 75 | `vCnV.JL2B` | func | `(i32 i32 i32 i32) -> (i32)` |
| 76 | `vCnV.hSgG` | func | `() -> (f64)` |
| 77 | `vCnV.PcoJ` | func | `() -> (f64)` |
| 78 | `vCnV.vvIS` | func | `(i32 i32) -> ()` |
| 79 | `vCnV.Hxz0` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 80 | `vCnV.rt9I` | func | `(i32 i32 i32) -> ()` |
| 81 | `vCnV.NXqb` | func | `(i32 i32 i32) -> ()` |
| 82 | `vCnV.xClx` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 83 | `vCnV.esOu` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 84 | `vCnV.gB7D` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 85 | `vCnV.ohC5` | func | `(i32 i32) -> ()` |
| 86 | `vCnV.VJZi` | func | `(i32 i32) -> ()` |
| 87 | `vCnV.jGM1` | func | `(i32) -> (i32)` |
| 88 | `vCnV.SDBX` | func | `(i32 i32) -> ()` |
| 89 | `vCnV.gjLk` | func | `(i32 i32) -> ()` |
| 90 | `vCnV.E9xV` | func | `(i32 i32 i32) -> ()` |
| 91 | `vCnV.Gf2e` | func | `(i32 i32 i32) -> ()` |
| 92 | `vCnV.Pk60` | func | `(i32) -> (i32)` |
| 93 | `vCnV.p5No` | func | `(i32) -> (i32)` |
| 94 | `vCnV.Ckng` | func | `(i32 i32) -> (i32)` |
| 95 | `vCnV.LR4D` | func | `(i32 i32) -> (i32)` |
| 96 | `vCnV.c6iW` | func | `(i32 i32) -> ()` |
| 97 | `vCnV.CL2i` | func | `(i32 i32) -> ()` |
| 98 | `vCnV.VATq` | func | `(i32 i32 i32) -> ()` |
| 99 | `vCnV.Q9b2` | func | `(i32 i32 i32) -> ()` |
| 100 | `vCnV.pKZC` | func | `(i32 i32 i32 i32) -> ()` |
| 101 | `vCnV.Z83g` | func | `(i32 i32 i32 i32) -> ()` |
| 102 | `vCnV.dHul` | func | `(i32 i32 f32) -> ()` |
| 103 | `vCnV.ACfB` | func | `(i32 i32 f32) -> ()` |
| 104 | `vCnV.LnUV` | func | `(i32 i32 i32) -> ()` |
| 105 | `vCnV.VoL4` | func | `(i32 i32 i32) -> ()` |
| 106 | `vCnV.fHi6` | func | `(i32 i32 i32) -> ()` |
| 107 | `vCnV.OIFT` | func | `(i32 i32 f32 f32) -> ()` |
| 108 | `vCnV.l4cm` | func | `(i32 i32 f32 f32) -> ()` |
| 109 | `vCnV.nRsu` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 110 | `vCnV.tHp6` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 111 | `vCnV.jPGM` | func | `(i32 i32) -> ()` |
| 112 | `vCnV.Q0Fa` | func | `(i32 i32) -> ()` |
| 113 | `vCnV.SWQf` | func | `(i32 i32) -> ()` |
| 114 | `vCnV.JsAW` | func | `(i32 i32) -> ()` |
| 115 | `vCnV.Zfix` | func | `(i32) -> (i32)` |
| 116 | `vCnV.TMsb` | func | `(i32) -> (i32)` |
| 117 | `vCnV.yWCX` | func | `(i32) -> (i32)` |
| 118 | `vCnV.yfkV` | func | `(i32) -> (i32)` |
| 119 | `vCnV.BXua` | func | `(i32 i32) -> ()` |
| 120 | `vCnV.FJle` | func | `(i32 i32) -> ()` |
| 121 | `vCnV.raf3` | func | `(i32 i32) -> ()` |
| 122 | `vCnV.LN7Q` | func | `(i32 i32) -> ()` |
| 123 | `vCnV.CQ31` | func | `(i32 i32) -> ()` |
| 124 | `vCnV.Srx1` | func | `(i32 i32) -> ()` |
| 125 | `vCnV.zj6L` | func | `(i32 i32) -> (i32)` |
| 126 | `vCnV.Ba0e` | func | `(i32 i32) -> (i32)` |
| 127 | `vCnV.YcaZ` | func | `(i32 i32 i32 i32) -> ()` |
| 128 | `vCnV.hchG` | func | `(i32 i32 i32 i32) -> ()` |
| 129 | `vCnV.zwmX` | func | `(i32 i32) -> ()` |
| 130 | `vCnV.XTXh` | func | `(i32 i32) -> ()` |
| 131 | `vCnV.G83J` | func | `(i32) -> (i32)` |
| 132 | `vCnV.MhBe` | func | `(i32 i32) -> ()` |
| 133 | `vCnV.kX38` | func | `(i32 i32) -> ()` |
| 134 | `vCnV.T9iZ` | func | `(i32 i32 i32) -> ()` |
| 135 | `vCnV.uooc` | func | `(i32 i32 i32) -> ()` |
| 136 | `vCnV.OCtD` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 137 | `vCnV.Dm6R` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 138 | `vCnV.E9aq` | func | `(i32 i32) -> ()` |
| 139 | `vCnV.ZW9y` | func | `(i32 i32 i32) -> ()` |
| 140 | `vCnV.RigT` | func | `(i32 i32 i32) -> ()` |
| 141 | `vCnV.dDQi` | func | `(i32 i32 i32 i32) -> (i32)` |
| 142 | `vCnV.LBgA` | func | `(i32 i32 i32 i32) -> (i32)` |
| 143 | `vCnV.fJZ2` | func | `(i32 i32 i32) -> ()` |
| 144 | `vCnV.GVLH` | func | `(i32 i32 i32) -> ()` |
| 145 | `vCnV.EzsE` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 146 | `vCnV.SFDB` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 147 | `vCnV.sPw8` | func | `(i32 i32 i32) -> (i32)` |
| 148 | `vCnV.Ao2M` | func | `(i32 i32 i32) -> (i32)` |
| 149 | `vCnV.jpJv` | func | `(i32 i32 i32) -> (i32)` |
| 150 | `vCnV.O6Ic` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 151 | `vCnV.TxrO` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 152 | `vCnV.UyHT` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 153 | `vCnV.OGJQ` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 154 | `vCnV.Qo9z` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 155 | `vCnV.xMZ5` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 156 | `vCnV.RtBc` | func | `(i32) -> (i32)` |
| 157 | `vCnV.CAoO` | func | `(i32) -> (i32)` |
| 158 | `vCnV.BAEJ` | func | `(i32) -> (i32)` |
| 159 | `vCnV.bvB7` | func | `(i32) -> (i32)` |
| 160 | `vCnV.pngZ` | func | `() -> (i32)` |
| 161 | `vCnV.xZMg` | func | `() -> (i32)` |
| 162 | `vCnV.tZi0` | func | `() -> (i32)` |
| 163 | `vCnV.mwha` | func | `() -> (i32)` |
| 164 | `vCnV.mdOk` | func | `(i32 i32) -> (i32)` |
| 165 | `vCnV.xEJQ` | func | `(i32) -> ()` |
| 166 | `vCnV.fV9U` | func | `(i32 i32) -> (i32)` |
| 167 | `vCnV.YECG` | func | `(i32) -> (i32)` |
| 168 | `vCnV.OKn6` | func | `(i32) -> (i32)` |
| 169 | `vCnV.Br11` | func | `(i32) -> (i32)` |
| 170 | `vCnV.ocmR` | func | `(i32) -> ()` |
| 171 | `vCnV.GCHs` | func | `(i32 i32 i32) -> (i32)` |
| 172 | `vCnV.y1Jr` | func | `(i32) -> (i32)` |
| 173 | `vCnV.sEvu` | func | `(i32) -> (i32)` |
| 174 | `vCnV.uMGM` | func | `(i32 i32) -> (i32)` |
| 175 | `vCnV.uBAp` | func | `(i32 i32 i32) -> (i32)` |
| 176 | `vCnV.VD7G` | func | `(i32 i32 i32) -> (i32)` |
| 177 | `vCnV.Q55X` | func | `(i32) -> (i32)` |
| 178 | `vCnV.cW8d` | func | `(i32) -> (i32)` |
| 179 | `vCnV.kfcC` | func | `(i32) -> (i32)` |
| 180 | `vCnV.IpTW` | func | `(i32 i32 i32 i32) -> ()` |
| 181 | `vCnV.yZd9` | func | `(i32 i32 i32 i32) -> ()` |
| 182 | `vCnV.esjd` | func | `(i32 i32) -> ()` |
| 183 | `vCnV.m0bk` | func | `(i32 i32 i32) -> ()` |
| 184 | `vCnV.dnbZ` | func | `(i32 i32) -> ()` |
| 185 | `vCnV.jiIl` | func | `(i32 i32 i32) -> ()` |
| 186 | `vCnV.qTzJ` | func | `(i32 i32) -> ()` |
| 187 | `vCnV.qfHk` | func | `(i32 i32) -> ()` |
| 188 | `vCnV.T7Zl` | func | `(i32) -> (i32)` |
| 189 | `vCnV.SK9p` | func | `(i32 i32) -> (i32)` |
| 190 | `vCnV.D0wz` | func | `(i32) -> ()` |
| 191 | `vCnV.Gc2L` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 192 | `vCnV.ZLPj` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 193 | `vCnV.jCF9` | func | `(i32 i32) -> ()` |
| 194 | `vCnV.CBCJ` | func | `(i32 i32) -> ()` |
| 195 | `vCnV.p1hG` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 196 | `vCnV.gg2Z` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 197 | `vCnV.W1ro` | func | `(i32 f32) -> ()` |
| 198 | `vCnV.IG4D` | func | `(i32 f32) -> ()` |
| 199 | `vCnV.uwp6` | func | `(i32 i32) -> ()` |
| 200 | `vCnV.iewk` | func | `(i32 i32) -> ()` |
| 201 | `vCnV.pp5l` | func | `(i32) -> (i32)` |
| 202 | `vCnV.jRBi` | func | `(i32) -> (i32)` |
| 203 | `vCnV.BGnB` | func | `(i32) -> (i32)` |
| 204 | `vCnV.PSVQ` | func | `(i32) -> (i32)` |
| 205 | `vCnV.H06e` | func | `(i32 i32 i32) -> ()` |
| 206 | `vCnV.nRHF` | func | `(i32 i32 i32) -> ()` |
| 207 | `vCnV.nsIa` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 208 | `vCnV.mNTT` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 209 | `vCnV.d5g4` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 210 | `vCnV.lW5d` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 211 | `vCnV.Mcve` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 212 | `vCnV.MDU7` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 213 | `vCnV.C8uX` | func | `(i32 i32) -> ()` |
| 214 | `vCnV.wreY` | func | `(i32 i32) -> ()` |
| 215 | `vCnV.q5aJ` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 216 | `vCnV.MAmq` | func | `(i32 i32 i32 f32) -> ()` |
| 217 | `vCnV.vzdn` | func | `(i32 i32 i32 f32) -> ()` |
| 218 | `vCnV.a3oO` | func | `(i32) -> (i32)` |
| 219 | `vCnV.SEGl` | func | `(i32) -> (i32)` |
| 220 | `vCnV.DdCV` | func | `(i32 i32) -> ()` |
| 221 | `vCnV.WcUD` | func | `(i32 i32) -> ()` |
| 222 | `vCnV.l9se` | func | `(i32 i32 i32) -> (i32)` |
| 223 | `vCnV.n4tb` | func | `(i32) -> (i32)` |
| 224 | `vCnV.tR2H` | func | `(i32) -> (i32)` |
| 225 | `vCnV.fX3I` | func | `(i32 i32) -> ()` |
| 226 | `vCnV.b5iw` | func | `(i32 i32 i32) -> (i32)` |
| 227 | `vCnV.rZko` | func | `(i32 i32) -> ()` |
| 228 | `vCnV.Vlxa` | func | `(i32 i32) -> ()` |
| 229 | `vCnV.lFSo` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 230 | `vCnV.wvcT` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 231 | `vCnV.RayC` | func | `(i32 i32 i32) -> ()` |
| 232 | `vCnV.K19u` | func | `(i32 i32 i32) -> ()` |
| 233 | `vCnV.zqjQ` | func | `(i32 i32) -> ()` |
| 234 | `vCnV.m2rF` | func | `(i32 i32) -> ()` |
| 235 | `vCnV.y32b` | func | `(i32 i32) -> ()` |
| 236 | `vCnV.MRoq` | func | `(i32 i32) -> ()` |
| 237 | `vCnV.EZa2` | func | `(i32 i32) -> ()` |
| 238 | `vCnV.Z21X` | func | `(i32 i32) -> ()` |
| 239 | `vCnV.JXln` | func | `(i32 f32 f32) -> ()` |
| 240 | `vCnV.TQqD` | func | `(i32 f32 f32) -> ()` |
| 241 | `vCnV.cdnU` | func | `(i32 i32 i32 i32) -> ()` |
| 242 | `vCnV.FpyZ` | func | `(i32 i32 i32 i32) -> ()` |
| 243 | `vCnV.NhCg` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 244 | `vCnV.yaxC` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 245 | `vCnV.R4gE` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 246 | `vCnV.B3gl` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 247 | `vCnV.ojLV` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 248 | `vCnV.z1BO` | func | `(i32 i32 i32 i32) -> ()` |
| 249 | `vCnV.wNJW` | func | `(i32 i32 i32 i32) -> ()` |
| 250 | `vCnV.gGMS` | func | `(i32) -> ()` |
| 251 | `vCnV.A9zO` | func | `(i32 i32) -> ()` |
| 252 | `vCnV.MBtQ` | func | `(i32 i32) -> ()` |
| 253 | `vCnV.pvfn` | func | `(i32 i32) -> ()` |
| 254 | `vCnV.r58e` | func | `(i32 i32) -> ()` |
| 255 | `vCnV.PudX` | func | `(i32 i32) -> ()` |
| 256 | `vCnV.VeNw` | func | `(i32 i32) -> ()` |
| 257 | `vCnV.NdsH` | func | `(i32 i32) -> ()` |
| 258 | `vCnV.xqiR` | func | `(i32 i32) -> ()` |
| 259 | `vCnV.CJ8V` | func | `(i32) -> (i32)` |
| 260 | `vCnV.u7lV` | func | `(i32) -> (i32)` |
| 261 | `vCnV.MZXS` | func | `(i32) -> (i32)` |
| 262 | `vCnV.sK3D` | func | `(i32) -> (i32)` |
| 263 | `vCnV.yFnS` | func | `(i32) -> ()` |
| 264 | `vCnV.VIMI` | func | `(i32 i32 i32 i32) -> ()` |
| 265 | `vCnV.aCiy` | func | `(i32) -> ()` |
| 266 | `vCnV.tIpW` | func | `(i32) -> (i32)` |
| 267 | `vCnV.mCeL` | func | `(i32) -> (i32)` |
| 268 | `vCnV.oGmX` | func | `(i32) -> (i32)` |
| 269 | `vCnV.YqWk` | func | `(i32) -> (i32)` |
| 270 | `vCnV.rCfz` | func | `(i32 i32) -> ()` |
| 271 | `vCnV.SPU9` | func | `(i32) -> ()` |
| 272 | `vCnV.Wclq` | func | `(i32 i32) -> ()` |
| 273 | `vCnV.EgDP` | func | `(i32) -> (i32)` |
| 274 | `vCnV.eRUm` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 275 | `vCnV.GWn9` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 276 | `vCnV.tF1N` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 277 | `vCnV.yKmD` | func | `(i32 i32) -> (i32)` |
| 278 | `vCnV.ckwj` | func | `(i32 i32) -> (i32)` |
| 279 | `vCnV.BJ9q` | func | `(i32 i32) -> (i32)` |
| 280 | `vCnV.iJSb` | func | `(i32 i32) -> (i32)` |
| 281 | `vCnV.zZO5` | func | `(i32 i32) -> (i32)` |

## Exports

157 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `kkr0` | func | 2429 | `(i32) -> (i32)` |
| `BnYQ` | func | 1949 | `(i32 i32) -> ()` |
| `FQ5c` | func | 2446 | `(i32) -> (i32)` |
| `qvgU` | func | 1412 | `() -> (i32)` |
| `jYRK` | func | 2145 | `(i32 i32) -> (i32)` |
| `fR0m` | func | 3065 | `(i32 i32 i32) -> ()` |
| `xMzf` | func | 1692 | `(i32) -> (i32)` |
| `TTm2` | func | 686 | `(i32 i32) -> (i32)` |
| `eH9z` | func | 1487 | `(i32 i32) -> (i32)` |
| `tHrj` | func | 725 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `WLdh` | func | 2954 | `(i32 i32) -> (i32 i32)` |
| `Rp7o` | func | 2166 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `pUUx` | func | 2384 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `kx5y` | func | 2976 | `() -> (i32 i32)` |
| `yalZ` | func | 1857 | `(i32) -> ()` |
| `j08h` | func | 2435 | `(i32) -> (i32)` |
| `r2cd` | func | 2500 | `(i32 i32) -> ()` |
| `GTJE` | func | 3140 | `() -> (i32)` |
| `IKTD` | func | 2434 | `(i32) -> (i32)` |
| `jNGh` | func | 2412 | `(i32 i32) -> ()` |
| `iuCg` | func | 1490 | `(i32 f64) -> (f64)` |
| `m6g6` | func | 1993 | `(i32 f64 f64 f64) -> (i32)` |
| `RJvK` | func | 648 | `(i32 i32) -> (i32)` |
| `td0E` | func | 899 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `WdSt` | func | 1091 | `(i32 i32) -> ()` |
| `mATc` | func | 2511 | `() -> (i32)` |
| `AiSR` | func | 1364 | `(i32 f64 f64) -> (i32)` |
| `MhnC` | func | 3117 | `(i32) -> (i32)` |
| `x4ig` | func | 1783 | `() -> (i32)` |
| `memory` | memory | 0 | `` |
| `XVSS` | func | 1314 | `(i32 i32 i32) -> (i32)` |
| `oBRX` | func | 2963 | `(i32) -> (i32 i32)` |
| `CiQr` | func | 2432 | `(i32) -> (i32)` |
| `PYxu` | func | 660 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `tHUl` | func | 2953 | `(i32 i32) -> (i32 i32)` |
| `pLWM` | func | 2464 | `(i32) -> (i32)` |
| `N7Pz` | func | 3141 | `() -> (i32)` |
| `K7FB` | func | 741 | `(i32 i32 i32) -> (i32)` |
| `JAyD` | func | 1569 | `(i32 f64 f64 f64) -> (i32)` |
| `tk9a` | func | 2978 | `() -> (i32 i32)` |
| `HIKK` | func | 2456 | `(i32 i32) -> (i32)` |
| `T2hZ` | func | 2747 | `(i32) -> (i32)` |
| `qR7E` | func | 3010 | `(i32 i32) -> ()` |
| `ykMf` | func | 2302 | `(i32 i32) -> (i32)` |
| `que6` | func | 1553 | `(i32 i32) -> (i32)` |
| `kU4Z` | func | 889 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `WGMl` | func | 2918 | `(i32 i32) -> (i32)` |
| `pWKw` | func | 2947 | `(i32 i32 i32) -> (i32 i32)` |
| `cKyZ` | func | 1462 | `(i32 i32) -> (i32)` |
| `zI4Q` | func | 3113 | `() -> (f64)` |
| `YyGI` | func | 1915 | `(i32 i32 i32 i32) -> ()` |
| `zJkS` | func | 2781 | `(i32) -> (i32)` |
| `uLj7` | func | 2724 | `(i32) -> (i32)` |
| `Lwga` | func | 2251 | `(i32 i32) -> ()` |
| `UX1r` | func | 2009 | `(i32 i32) -> ()` |
| `WO07` | func | 2929 | `(i32 i32) -> ()` |
| `mGY3` | func | 2962 | `(i32) -> (i32 i32)` |
| `heaq` | func | 2426 | `(i32) -> (f64)` |
| `V3N6` | func | 1454 | `(i32 i32 i32 i32) -> (i32)` |
| `Lq3c` | func | 2430 | `(i32) -> (i32)` |
| `dBOb` | func | 1450 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `TDJ4` | func | 2447 | `(i32 i32) -> ()` |
| `q83j` | func | 2301 | `(i32 i32) -> (i32)` |
| `jMYP` | func | 2433 | `(i32) -> ()` |
| `oERi` | func | 1264 | `(i32) -> (i32)` |
| `LkND` | func | 1803 | `(i32 i32 i32 i32) -> (i32)` |
| `Fchj` | func | 1433 | `(i32 i32 i32 i32) -> ()` |
| `JGiC` | func | 2300 | `(i32 i32) -> (i32)` |
| `DYpV` | func | 869 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `mjpp` | func | 2221 | `(i32 f64) -> (i32)` |
| `VLPU` | func | 1298 | `(i32) -> ()` |
| `twCP` | func | 2436 | `(i32) -> (i32)` |
| `rWjn` | func | 719 | `(i32) -> (i32)` |
| `qow4` | func | 1192 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `gNwP` | func | 793 | `(i32 i32) -> (i32)` |
| `y2Tg` | func | 2455 | `(i32) -> (i32)` |
| `hV4p` | func | 2443 | `(i32 i32) -> ()` |
| `OwQo` | func | 3071 | `(i32) -> ()` |
| `BS5r` | func | 3000 | `(i32 i32 i32 i32) -> ()` |
| `OMTQ` | func | 2758 | `(i32) -> ()` |
| `tZrP` | func | 1090 | `(i32 i32) -> (i32)` |
| `xfFI` | func | 3038 | `() -> (i32)` |
| `fKxL` | func | 1502 | `(i32 i32 i32) -> (i32)` |
| `WpUq` | func | 2466 | `(i32) -> (i32)` |
| `dB5t` | func | 2033 | `(i32 i32) -> (i32)` |
| `NIEr` | func | 717 | `(i32 i32 i32 i32) -> (i32)` |
| `tOMt` | func | 2427 | `(i32) -> (i32)` |
| `ngOi` | func | 2966 | `(i32) -> (i32 i32)` |
| `KaYN` | func | 2457 | `(i32 i32) -> (i32)` |
| `ft6Y` | func | 1788 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `PfUi` | func | 2330 | `(i32 i32) -> (i32)` |
| `nLeK` | func | 1725 | `(i32 i32) -> (i32)` |
| `YWOe` | func | 1445 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `pyiy` | func | 1913 | `(i32) -> (i32)` |
| `N4lK` | func | 2956 | `(i32 i32) -> (i32 i32)` |
| `XWB5` | func | 2448 | `(i32) -> (i32)` |
| `V3s9` | func | 1193 | `(i32 i32 i32 i32) -> (i32)` |
| `kDR0` | func | 1523 | `(i32 i32 i32 i32) -> (i32)` |
| `wGUS` | func | 1671 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `qPTE` | func | 2428 | `(i32) -> (i32)` |
| `uJyk` | func | 1455 | `(i32) -> (i32)` |
| `wDH1` | func | 1856 | `(i32) -> ()` |
| `kdLk` | func | 2543 | `(i32 i32) -> ()` |
| `qQRC` | global | 1 | `` |
| `Jd9H` | func | 870 | `(i32 i32) -> (i32)` |
| `XzYh` | func | 1415 | `(i32) -> (i32)` |
| `BUSr` | func | 2738 | `(i32) -> (i32)` |
| `OM5L` | func | 2955 | `(i32 i32) -> (i32 i32)` |
| `lKaq` | func | 598 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `FXTK` | func | 1975 | `(i32 f64) -> (i32)` |
| `yohL` | func | 1222 | `(i32 i32) -> (i32)` |
| `YpSG` | func | 2958 | `(i32 i32) -> (i32 i32)` |
| `GvFu` | func | 2465 | `(i32) -> (i32)` |
| `g3ew` | func | 1823 | `(i32 i32 f64 f64 f64) -> ()` |
| `Tb5v` | func | 1363 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `FNy2` | func | 3118 | `(i32) -> ()` |
| `qrFC` | func | 1898 | `(i32) -> (i32)` |
| `E8t0` | func | 3072 | `() -> ()` |
| `sYSE` | func | 547 | `(i32 i32 i32) -> (i32)` |
| `hrVi` | func | 1714 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `Lalm` | func | 1841 | `(i32 i32) -> (i32)` |
| `Zyny` | func | 1606 | `(i32 i32 i32 i32) -> (i32)` |
| `hd4O` | func | 2964 | `(i32) -> (i32 i32)` |
| `esRP` | func | 2445 | `(i32) -> (i32)` |
| `Ajlp` | func | 1272 | `(i32 i32) -> (i32)` |
| `THCf` | func | 2220 | `(i32 i32) -> ()` |
| `oG32` | func | 2965 | `(i32) -> (i32 i32)` |
| `j1Qx` | func | 2343 | `(i32 i32 i32 i32) -> (i32)` |
| `rdEy` | global | 2 | `` |
| `YpBm` | func | 1707 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `S1TZ` | func | 1385 | `(i32 i32) -> (i32)` |
| `V241` | func | 2114 | `(i32 i32) -> (i32)` |
| `VNOl` | func | 1486 | `(i32 i32) -> (i32)` |
| `LcWP` | func | 1565 | `(i32 i32) -> ()` |
| `qDJF` | func | 1199 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `kSM7` | func | 1475 | `(i32 i32) -> (i32)` |
| `xir9` | func | 2385 | `(i32) -> (i32)` |
| `kJ8j` | func | 2948 | `(i32 i32 i32) -> (i32 i32)` |
| `kqEU` | func | 2977 | `() -> (i32 i32)` |
| `qhAo` | func | 2952 | `(i32 i32) -> (i32 i32)` |
| `yMjF` | func | 2923 | `(i32 i32 i32 i32) -> (i32)` |
| `rEqE` | func | 2957 | `(i32 i32) -> (i32 i32)` |
| `jhVi` | func | 1240 | `(i32 i32 i32) -> (i32)` |
| `RJNd` | func | 1151 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `Rk1B` | func | 1848 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `Q3tq` | func | 1564 | `(i32 i32) -> ()` |
| `l7nt` | func | 1408 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `p6ir` | func | 2431 | `(i32) -> (i32)` |
| `SiIF` | func | 1831 | `(i32 i32) -> ()` |
| `roNd` | func | 2717 | `(i32) -> (i32)` |
| `ypQF` | func | 2544 | `() -> (i32)` |
| `JVNT` | func | 2899 | `() -> ()` |
| `Zy29` | func | 2299 | `(i32 i32) -> (i32)` |
| `tRic` | func | 2368 | `(i32) -> (i32)` |
| `UuiM` | func | 3009 | `(i32 i32 i32) -> ()` |
| `P5vN` | func | 2413 | `(i32) -> (i32)` |
| `CRR2` | func | 1245 | `(i32 i32 i32) -> ()` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 733 · max 733
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2016656, `i32` = i32.const 2017220

## Functions

- 2,869 bodies · 4,001,682 code bytes · avg 1.4 KB
- instruction scan: 2,869 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 156 |
| <= 64 bytes | 104 |
| <= 128 bytes | 253 |
| <= 256 bytes | 365 |
| <= 512 bytes | 666 |
| <= 1024 bytes | 572 |
| <= 2048 bytes | 420 |
| <= 4096 bytes | 179 |
| <= 8192 bytes | 89 |
| <= 16384 bytes | 32 |
| > 16384 bytes | 33 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32) -> ()` | 217 | 194,712 | 88,375 | local.get×25902, i32.const×9917, i32.load×5640, local.set×4735, local.tee×4639 |
| 1 | `(i32 i32 i32 i32 i32) -> ()` | 144 | 112,484 | 54,537 | local.get×15175, i32.const×6560, i32.add×3203, local.set×3090, i32.load×2945 |
| 2 | `(i32 i32 i32 i32 i32 i32) -> ()` | 130 | 46,897 | 21,584 | local.get×6259, i32.const×2868, local.set×1247, i32.add×1154, i32.load×1032 |
| 3 | `(i32 i32) -> ()` | 125 | 48,853 | 22,528 | local.get×6337, i32.const×2249, local.set×1324, local.tee×1179, i32.load×1037 |
| 4 | `(i32 i32) -> ()` | 59 | 29,650 | 14,267 | local.get×4192, i32.const×1730, i32.load×1042, local.set×931, i32.add×815 |
| 5 | `(i32 i32) -> ()` | 90 | 26,044 | 12,563 | local.get×3702, i32.const×1379, local.set×779, i32.load×721, local.tee×698 |
| 6 | `(i32 i32 i32 i32 i32) -> ()` | 135 | 32,562 | 16,141 | local.get×4566, i32.const×2205, local.set×1141, i32.add×1062, local.tee×800 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 58 | 21,485 | 10,526 | local.get×2903, i32.const×1490, local.set×728, i32.add×591, local.tee×504 |
| 8 | `(i32 i32) -> ()` | 93 | 19,080 | 9,200 | local.get×2643, i32.const×1025, local.tee×571, local.set×554, i32.load×531 |
| 9 | `(i32 i32 i32 i32) -> ()` | 105 | 26,546 | 12,837 | local.get×3810, i32.const×1624, local.set×997, i32.add×682, i32.load×663 |
| 10 | `(i32 i32 i32) -> (i32)` | 74 | 22,547 | 10,768 | local.get×2881, i32.const×1288, i32.load×749, local.set×499, i32.add×477 |
| 11 | `(i32 i32 i32 i32) -> ()` | 53 | 24,505 | 11,634 | local.get×3005, i32.const×1276, local.tee×731, end×592, i32.load×586 |
| 12 | `(i32 i32 i32) -> (i32)` | 77 | 18,923 | 8,934 | local.get×2485, i32.const×1224, i32.load×559, i32.add×543, local.set×525 |
| 13 | `(i32 i32 i32 i32 i32 i32) -> ()` | 125 | 19,810 | 8,875 | local.get×2493, i32.const×1111, local.set×430, local.tee×385, i32.load×382 |
| 14 | `(i32 i32 f64) -> (i32)` | 48 | 17,102 | 8,098 | local.get×2218, i32.const×774, local.set×526, local.tee×508, i32.add×478 |
| 16 | `(i32 i32) -> ()` | 96 | 31,835 | 14,861 | local.get×4482, i32.const×1910, i32.add×763, local.set×692, i32.load×669 |
| 22 | `(i32 i32) -> ()` | 82 | 29,024 | 13,043 | local.get×4618, i32.const×1456, i32.store×702, i32.add×689, local.tee×645 |
| 23 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 64 | 24,283 | 11,198 | local.get×2682, i32.const×1711, local.set×821, end×663, block×465 |
| 27 | `(i32 i32 i32 i32 i32) -> ()` | 68 | 22,727 | 10,576 | local.get×3337, i32.const×1240, local.tee×731, i32.add×436, local.set×333 |
| 32 | `(i32 i32 i32 i32 i32) -> ()` | 65 | 18,015 | 8,704 | local.get×2378, i32.const×1095, local.set×628, local.tee×459, i32.add×442 |
| 62 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 99 | 32,153 | 15,014 | local.get×4317, i32.const×1963, i32.load×986, local.set×902, i32.add×812 |
| 191 | `(i32 i32) -> ()` | 10 | 26,597 | 12,807 | local.get×4506, i32.load×1211, i32.const×1022, end×797, i32.add×734 |
| 221 | `(i32) -> ()` | 19 | 23,156 | 10,851 | local.get×2722, i32.load×1494, i32.const×1177, local.tee×1008, end×853 |
| 716 | `(i32 i32 i32 i32) -> ()` | 54 | 21,810 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 761 | `(i32 i32) -> ()` | 138 | 42,799 | 20,185 | local.get×5260, i32.const×2330, local.tee×1194, i32.add×1063, local.set×1003 |
| 1559 | `(i32 i32) -> (i32)` | 180 | 54,760 | 19,855 | local.get×6591, i32.const×2625, i64.store×1913, i64.const×1077, i64.load×1056 |
| 1960 | `(i32 i32) -> ()` | 110 | 40,258 | 17,890 | local.get×5235, i32.const×1685, local.set×903, local.tee×774, end×686 |
| 2552 | `(i32 i32) -> ()` | 397 | 142,149 | 64,173 | local.get×18436, i32.const×8000, local.set×3840, i32.load×3163, end×2815 |
| 2821 | `(i32 i32 i32 i32) -> ()` | 137 | 31,353 | 14,274 | local.get×4256, i32.const×1515, local.tee×741, local.set×690, br_if×629 |
| 2840 | `(i32 i32) -> ()` | 136 | 33,882 | 15,183 | local.get×4267, i32.const×2015, local.set×798, local.tee×742, i32.add×699 |

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
| `local.get` | 535,195 |
| `i32.const` | 224,262 |
| `local.tee` | 99,499 |
| `i32.load` | 93,526 |
| `local.set` | 93,510 |
| `i32.add` | 86,525 |
| `end` | 78,593 |
| `br_if` | 63,980 |
| `i32.store` | 46,206 |
| `block` | 37,004 |
| `i64.const` | 32,278 |
| `i64.store` | 31,395 |
| `if` | 29,971 |
| `call` | 28,910 |
| `i32.sub` | 24,477 |
| `i64.load` | 23,280 |
| `br` | 23,056 |
| `i32.eqz` | 19,395 |
| `select` | 16,874 |
| `i32.shl` | 16,361 |
| `i32.and` | 16,321 |
| `i32.ne` | 15,778 |
| `i32.load8_u` | 14,835 |
| `i32.eq` | 13,841 |
| `i32.store8` | 12,548 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 2,869/2,869 (degraded: 0)
