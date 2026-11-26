# WASM module: `bloxd_wasm_webgl1_bg`

> environment **preprod.bloxd.io** · build `cwj32u.ae3e40c2` · analyzed 2026-11-27T00:54:30+09:00
> source: https://preprod.bloxd.io/static/media/bloxd_wasm_webgl1_bg.cc790abbf9ec8ce9da93.wasm
> 4,879,736 bytes (4.7 MB) · sha256 `0cfbcf815fae6493…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- size 4,878,547 → 4,879,736 bytes (+1,189)
- defined functions 2,888 → 2,890
- code bytes 4,025,168 → 4,026,524
- data bytes 806,887 → 806,705
- name-section module id `daa8b99dd38cdc5b.10673` → `3a3757d6839d645e.10684`
- export identifiers rotated by the obfuscator: 1/160 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,890 / 282 |
| Exports / imports | 160 / 283 |
| Code bytes (function bodies) | 4,026,524 (3.8 MB) |
| Total local variables | 30,898 |
| Instructions (scanable bodies) | 1,888,565 |
| Data segments / bytes | 3,771 / 806,705 |
| Element segments / entries | 1 / 734 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `3a3757d6839d645e.10684` |
| Sections | 11 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,516 | 178 |
| 2 | import | 3,402 | 283 |
| 3 | function | 2,942 | 2890 |
| 4 | table | 7 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,281 | 160 |
| 9 | element | 1,475 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 4,031,832 | 2890 |
| 11 | data | 837,184 | 3771 |
| 0 | custom:name | 30 | — |

## Types

178 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32) -> ()` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

283 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `g7sW.KUR7` | memory | `[128..14648]` |
| 0 | `g7sW.bRQc` | func | `(i32) -> (f64)` |
| 1 | `g7sW.n7rP` | func | `() -> (i32)` |
| 2 | `g7sW.rgTD` | func | `(i32 i32 i32) -> (i32)` |
| 3 | `g7sW.KTzY` | func | `(i32) -> ()` |
| 4 | `g7sW.XNoR` | func | `(i32 i32) -> (i32)` |
| 5 | `g7sW.fRTb` | func | `(i32) -> (i32)` |
| 6 | `g7sW.xp4A` | func | `(i32 i32 i32) -> (i32)` |
| 7 | `g7sW.Onto` | func | `(i32 i32 i32 i32) -> (i32)` |
| 8 | `g7sW.R2XO` | func | `(i32) -> (i32)` |
| 9 | `g7sW.GLLp` | func | `(i32 i32) -> ()` |
| 10 | `g7sW.q3m6` | func | `(i32 i32) -> ()` |
| 11 | `g7sW.c1Xp` | func | `(i32 i32 i32 i32) -> (i32)` |
| 12 | `g7sW.Ykjq` | func | `(i32 i32) -> (i32)` |
| 13 | `g7sW.qoJM` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 14 | `g7sW.Gi3j` | func | `(i32) -> (i32)` |
| 15 | `g7sW.zGj8` | func | `(i32 i32) -> (i32)` |
| 16 | `g7sW.rX6r` | func | `(i32 i32) -> (i32)` |
| 17 | `g7sW.sK5u` | func | `(i32 i32) -> ()` |
| 18 | `g7sW.nEqa` | func | `(i32) -> (i32)` |
| 19 | `g7sW.Clnd` | func | `(i32) -> (i32)` |
| 20 | `g7sW.wZ5G` | func | `(i32) -> (i32)` |
| 21 | `g7sW.GmdZ` | func | `(i32) -> ()` |
| 22 | `g7sW.f3BH` | func | `(i32 i32) -> ()` |
| 23 | `g7sW.rS3q` | func | `(i32 i32) -> ()` |
| 24 | `g7sW.YZSY` | func | `(i32) -> (i32)` |
| 25 | `g7sW.bt90` | func | `(i32 i32) -> ()` |
| 26 | `g7sW.OnCM` | func | `(i32 i32) -> (i32)` |
| 27 | `g7sW.Kvov` | func | `(i32 i32 i32 i32) -> ()` |
| 28 | `g7sW.HIeA` | func | `(i32 i32) -> (i32)` |
| 29 | `g7sW.yfIc` | func | `(i32 i32 i32) -> (i32)` |
| 30 | `g7sW.RpJv` | func | `(i32) -> (i32)` |
| 31 | `g7sW.QSYA` | func | `() -> (f64)` |
| 32 | `g7sW.pFGv` | func | `(i32 i32) -> ()` |
| 33 | `g7sW.ELqw` | func | `(i32) -> (i32)` |
| 34 | `g7sW.IOZr` | func | `(i32) -> (i32)` |
| 35 | `g7sW.Mmkq` | func | `(i32 i32 i32) -> (i32)` |
| 36 | `g7sW.BX27` | func | `(i32) -> (i32)` |
| 37 | `g7sW.AiNG` | func | `(i32) -> (i32)` |
| 38 | `g7sW.neE3` | func | `(i32) -> (i32)` |
| 39 | `g7sW.Kieu` | func | `(i32 i32) -> (i32)` |
| 40 | `g7sW.gSxA` | func | `(i32 i32 i32 i32) -> ()` |
| 41 | `g7sW.QDEy` | func | `(i32) -> (i32)` |
| 42 | `g7sW.A68U` | func | `(i32 i32 i32 i32) -> ()` |
| 43 | `g7sW.oN3O` | func | `(i32) -> (i32)` |
| 44 | `g7sW.ZI53` | func | `(i32 i32 i32 i32) -> ()` |
| 45 | `g7sW.nXT6` | func | `(i32 i32 i32) -> (i32)` |
| 46 | `g7sW.RcdL` | func | `(i32 f64 f64 f64 f64) -> ()` |
| 47 | `g7sW.BV6Y` | func | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64) -> ()` |
| 48 | `g7sW.HsOY` | func | `(i32 i32 i32) -> ()` |
| 49 | `g7sW.Qlxh` | func | `(i32 i32 i32) -> ()` |
| 50 | `g7sW.ppBk` | func | `(i32 i32 i32) -> ()` |
| 51 | `g7sW.ehGA` | func | `(i32 i32) -> ()` |
| 52 | `g7sW.NBda` | func | `(i32 i32) -> ()` |
| 53 | `g7sW.s65z` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 54 | `g7sW.AlhN` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 55 | `g7sW.YtHF` | func | `(i32 f32 f32) -> ()` |
| 56 | `g7sW.maok` | func | `(i32 f32 f32) -> ()` |
| 57 | `g7sW.IANo` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 58 | `g7sW.LN4U` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 59 | `g7sW.V0Ne` | func | `(i32 i32 i32 i32) -> ()` |
| 60 | `g7sW.abZ7` | func | `(i32 i32 i32 i32) -> ()` |
| 61 | `g7sW.FchW` | func | `(i32 i32 i32) -> ()` |
| 62 | `g7sW.Vjek` | func | `(i32 i32 i32) -> ()` |
| 63 | `g7sW.pdV4` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 64 | `g7sW.hhxp` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 65 | `g7sW.h9iv` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 66 | `g7sW.JpAU` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 67 | `g7sW.Ucqs` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 68 | `g7sW.vbWP` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 69 | `g7sW.UbFp` | func | `(i32) -> (i32)` |
| 70 | `g7sW.kNi0` | func | `(i32) -> ()` |
| 71 | `g7sW.W9t4` | func | `(i32) -> (i32)` |
| 72 | `g7sW.xRqF` | func | `(i32 i32) -> (i32)` |
| 73 | `g7sW.WtIg` | func | `(i32 i32 i32) -> (i32)` |
| 74 | `g7sW.PU9Q` | func | `(i32 i32 i32) -> ()` |
| 75 | `g7sW.GcpX` | func | `(i32 i32 i32 i32) -> (i32)` |
| 76 | `g7sW.kd7N` | func | `() -> (f64)` |
| 77 | `g7sW.unmv` | func | `() -> (f64)` |
| 78 | `g7sW.Aulc` | func | `(i32 i32) -> ()` |
| 79 | `g7sW.dVHi` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 80 | `g7sW.EqHR` | func | `(i32 i32 i32) -> ()` |
| 81 | `g7sW.P9cA` | func | `(i32 i32 i32) -> ()` |
| 82 | `g7sW.fQLi` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 83 | `g7sW.YiJC` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 84 | `g7sW.PHpT` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 85 | `g7sW.NLto` | func | `(i32 i32) -> ()` |
| 86 | `g7sW.V5G6` | func | `(i32 i32) -> ()` |
| 87 | `g7sW.hBOp` | func | `(i32) -> (i32)` |
| 88 | `g7sW.sNA6` | func | `(i32 i32) -> ()` |
| 89 | `g7sW.hrJj` | func | `(i32 i32) -> ()` |
| 90 | `g7sW.v0uu` | func | `(i32 i32 i32) -> ()` |
| 91 | `g7sW.lh1t` | func | `(i32 i32 i32) -> ()` |
| 92 | `g7sW.LQLb` | func | `(i32) -> (i32)` |
| 93 | `g7sW.Vis8` | func | `(i32) -> (i32)` |
| 94 | `g7sW.kVXv` | func | `(i32 i32) -> (i32)` |
| 95 | `g7sW.iCaX` | func | `(i32 i32) -> (i32)` |
| 96 | `g7sW.Yf2j` | func | `(i32 i32) -> ()` |
| 97 | `g7sW.K3Bc` | func | `(i32 i32) -> ()` |
| 98 | `g7sW.E71T` | func | `(i32 i32 i32) -> ()` |
| 99 | `g7sW.amNv` | func | `(i32 i32 i32) -> ()` |
| 100 | `g7sW.cRQd` | func | `(i32 i32 i32 i32) -> ()` |
| 101 | `g7sW.ifxz` | func | `(i32 i32 i32 i32) -> ()` |
| 102 | `g7sW.IyLu` | func | `(i32 i32 f32) -> ()` |
| 103 | `g7sW.ct84` | func | `(i32 i32 f32) -> ()` |
| 104 | `g7sW.m81z` | func | `(i32 i32 i32) -> ()` |
| 105 | `g7sW.KUPo` | func | `(i32 i32 i32) -> ()` |
| 106 | `g7sW.C8pZ` | func | `(i32 i32 i32) -> ()` |
| 107 | `g7sW.Oott` | func | `(i32 i32 f32 f32) -> ()` |
| 108 | `g7sW.ISmB` | func | `(i32 i32 f32 f32) -> ()` |
| 109 | `g7sW.ovvD` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 110 | `g7sW.A02O` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 111 | `g7sW.Wlao` | func | `(i32 i32) -> ()` |
| 112 | `g7sW.TA7W` | func | `(i32 i32) -> ()` |
| 113 | `g7sW.b2uW` | func | `(i32 i32) -> ()` |
| 114 | `g7sW.lnDX` | func | `(i32 i32) -> ()` |
| 115 | `g7sW.vnTN` | func | `(i32) -> (i32)` |
| 116 | `g7sW.etMN` | func | `(i32) -> (i32)` |
| 117 | `g7sW.jagr` | func | `(i32) -> (i32)` |
| 118 | `g7sW.qUGf` | func | `(i32) -> (i32)` |
| 119 | `g7sW.dqQ2` | func | `(i32 i32) -> ()` |
| 120 | `g7sW.flPt` | func | `(i32 i32) -> ()` |
| 121 | `g7sW.rAZ1` | func | `(i32 i32) -> ()` |
| 122 | `g7sW.l1ev` | func | `(i32 i32) -> ()` |
| 123 | `g7sW.uCKu` | func | `(i32 i32) -> ()` |
| 124 | `g7sW.u5O4` | func | `(i32 i32) -> ()` |
| 125 | `g7sW.V2i2` | func | `(i32 i32) -> (i32)` |
| 126 | `g7sW.qbYM` | func | `(i32 i32) -> (i32)` |
| 127 | `g7sW.DqOQ` | func | `(i32 i32 i32 i32) -> ()` |
| 128 | `g7sW.OBtL` | func | `(i32 i32 i32 i32) -> ()` |
| 129 | `g7sW.hKJ2` | func | `(i32 i32) -> ()` |
| 130 | `g7sW.UVJl` | func | `(i32 i32) -> ()` |
| 131 | `g7sW.i8IV` | func | `(i32) -> (i32)` |
| 132 | `g7sW.xlDF` | func | `(i32 i32) -> ()` |
| 133 | `g7sW.eTod` | func | `(i32 i32) -> ()` |
| 134 | `g7sW.PM36` | func | `(i32 i32 i32) -> ()` |
| 135 | `g7sW.um1L` | func | `(i32 i32 i32) -> ()` |
| 136 | `g7sW.xW4Y` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 137 | `g7sW.KbGi` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 138 | `g7sW.QkEy` | func | `(i32 i32) -> ()` |
| 139 | `g7sW.JbHM` | func | `(i32 i32 i32) -> ()` |
| 140 | `g7sW.LJiy` | func | `(i32 i32 i32) -> ()` |
| 141 | `g7sW.LY0O` | func | `(i32 i32 i32 i32) -> (i32)` |
| 142 | `g7sW.uuXO` | func | `(i32 i32 i32 i32) -> (i32)` |
| 143 | `g7sW.xhC9` | func | `(i32 i32 i32) -> ()` |
| 144 | `g7sW.VUG8` | func | `(i32 i32 i32) -> ()` |
| 145 | `g7sW.GE3p` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 146 | `g7sW.oPOF` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 147 | `g7sW.n1sB` | func | `(i32 i32 i32) -> (i32)` |
| 148 | `g7sW.T6Z5` | func | `(i32 i32 i32) -> (i32)` |
| 149 | `g7sW.N48y` | func | `(i32 i32 i32) -> (i32)` |
| 150 | `g7sW.HPrZ` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 151 | `g7sW.qicG` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 152 | `g7sW.MPKY` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 153 | `g7sW.UosQ` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 154 | `g7sW.iXm6` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 155 | `g7sW.m08x` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 156 | `g7sW.SLXf` | func | `(i32) -> (i32)` |
| 157 | `g7sW.T4pu` | func | `(i32) -> (i32)` |
| 158 | `g7sW.SwFf` | func | `(i32) -> (i32)` |
| 159 | `g7sW.TdcD` | func | `(i32) -> (i32)` |
| 160 | `g7sW.EttF` | func | `() -> (i32)` |
| 161 | `g7sW.r0eB` | func | `() -> (i32)` |
| 162 | `g7sW.UDFS` | func | `() -> (i32)` |
| 163 | `g7sW.uIb7` | func | `() -> (i32)` |
| 164 | `g7sW.I2fI` | func | `(i32 i32) -> (i32)` |
| 165 | `g7sW.R6j7` | func | `(i32) -> ()` |
| 166 | `g7sW.vqEE` | func | `(i32 i32) -> (i32)` |
| 167 | `g7sW.o4aD` | func | `(i32) -> (i32)` |
| 168 | `g7sW.Uxwu` | func | `(i32) -> (i32)` |
| 169 | `g7sW.ZjvH` | func | `(i32) -> (i32)` |
| 170 | `g7sW.Zun0` | func | `(i32) -> ()` |
| 171 | `g7sW.QH0s` | func | `(i32 i32 i32) -> (i32)` |
| 172 | `g7sW.vyZe` | func | `(i32) -> (i32)` |
| 173 | `g7sW.WhYm` | func | `(i32) -> (i32)` |
| 174 | `g7sW.iqdk` | func | `(i32 i32) -> (i32)` |
| 175 | `g7sW.a7C2` | func | `(i32 i32 i32) -> (i32)` |
| 176 | `g7sW.qlRp` | func | `(i32 i32 i32) -> (i32)` |
| 177 | `g7sW.HHUL` | func | `(i32) -> (i32)` |
| 178 | `g7sW.n6x7` | func | `(i32) -> (i32)` |
| 179 | `g7sW.yr8m` | func | `(i32) -> (i32)` |
| 180 | `g7sW.cUHQ` | func | `(i32 i32 i32 i32) -> ()` |
| 181 | `g7sW.snrx` | func | `(i32 i32 i32 i32) -> ()` |
| 182 | `g7sW.nd6Q` | func | `(i32 i32) -> ()` |
| 183 | `g7sW.y8kP` | func | `(i32 i32 i32) -> ()` |
| 184 | `g7sW.EC3T` | func | `(i32 i32) -> ()` |
| 185 | `g7sW.xO0M` | func | `(i32 i32 i32) -> ()` |
| 186 | `g7sW.tz1g` | func | `(i32 i32) -> ()` |
| 187 | `g7sW.vrmG` | func | `(i32 i32) -> ()` |
| 188 | `g7sW.R80D` | func | `(i32) -> (i32)` |
| 189 | `g7sW.y5aY` | func | `(i32 i32) -> (i32)` |
| 190 | `g7sW.uzQb` | func | `(i32) -> ()` |
| 191 | `g7sW.zCEW` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 192 | `g7sW.YwwP` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 193 | `g7sW.BSIP` | func | `(i32 i32) -> ()` |
| 194 | `g7sW.bS3O` | func | `(i32 i32) -> ()` |
| 195 | `g7sW.lc31` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 196 | `g7sW.mcvJ` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 197 | `g7sW.fDZq` | func | `(i32 f32) -> ()` |
| 198 | `g7sW.HxV8` | func | `(i32 f32) -> ()` |
| 199 | `g7sW.yHpI` | func | `(i32 i32) -> ()` |
| 200 | `g7sW.fS6l` | func | `(i32 i32) -> ()` |
| 201 | `g7sW.ZNB5` | func | `(i32) -> (i32)` |
| 202 | `g7sW.q3KD` | func | `(i32) -> (i32)` |
| 203 | `g7sW.v4yw` | func | `(i32) -> (i32)` |
| 204 | `g7sW.kZmW` | func | `(i32) -> (i32)` |
| 205 | `g7sW.VmSg` | func | `(i32 i32 i32) -> ()` |
| 206 | `g7sW.L51v` | func | `(i32 i32 i32) -> ()` |
| 207 | `g7sW.gmFi` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 208 | `g7sW.vBfx` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 209 | `g7sW.VtLa` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 210 | `g7sW.d2CP` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 211 | `g7sW.mM8g` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 212 | `g7sW.GCWg` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 213 | `g7sW.Q8vT` | func | `(i32 i32) -> ()` |
| 214 | `g7sW.llBT` | func | `(i32 i32) -> ()` |
| 215 | `g7sW.c9Om` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 216 | `g7sW.UOoY` | func | `(i32 i32 i32 f32) -> ()` |
| 217 | `g7sW.D2Hb` | func | `(i32 i32 i32 f32) -> ()` |
| 218 | `g7sW.acbB` | func | `(i32) -> (i32)` |
| 219 | `g7sW.KUtC` | func | `(i32) -> (i32)` |
| 220 | `g7sW.XWKc` | func | `(i32 i32) -> ()` |
| 221 | `g7sW.hQve` | func | `(i32 i32) -> ()` |
| 222 | `g7sW.RnAg` | func | `(i32 i32 i32) -> (i32)` |
| 223 | `g7sW.cc9J` | func | `(i32) -> (i32)` |
| 224 | `g7sW.kqGb` | func | `(i32) -> (i32)` |
| 225 | `g7sW.A4JR` | func | `(i32 i32) -> ()` |
| 226 | `g7sW.wjHR` | func | `(i32 i32 i32) -> (i32)` |
| 227 | `g7sW.YZdz` | func | `(i32 i32) -> ()` |
| 228 | `g7sW.iXXD` | func | `(i32 i32) -> ()` |
| 229 | `g7sW.wbZ3` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 230 | `g7sW.ulXR` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 231 | `g7sW.ThLO` | func | `(i32 i32 i32) -> ()` |
| 232 | `g7sW.pSZ7` | func | `(i32 i32 i32) -> ()` |
| 233 | `g7sW.nitx` | func | `(i32 i32) -> ()` |
| 234 | `g7sW.byAN` | func | `(i32 i32) -> ()` |
| 235 | `g7sW.mMNh` | func | `(i32 i32) -> ()` |
| 236 | `g7sW.JbVM` | func | `(i32 i32) -> ()` |
| 237 | `g7sW.kk0Q` | func | `(i32 i32) -> ()` |
| 238 | `g7sW.NZKz` | func | `(i32 i32) -> ()` |
| 239 | `g7sW.jeXE` | func | `(i32 f32 f32) -> ()` |
| 240 | `g7sW.dyLR` | func | `(i32 f32 f32) -> ()` |
| 241 | `g7sW.w9rO` | func | `(i32 i32 i32 i32) -> ()` |
| 242 | `g7sW.zPT5` | func | `(i32 i32 i32 i32) -> ()` |
| 243 | `g7sW.VBeI` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 244 | `g7sW.UWDv` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 245 | `g7sW.nVrX` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 246 | `g7sW.Lpbv` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 247 | `g7sW.nHWl` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 248 | `g7sW.m551` | func | `(i32 i32 i32 i32) -> ()` |
| 249 | `g7sW.mBdJ` | func | `(i32 i32 i32 i32) -> ()` |
| 250 | `g7sW.vfaF` | func | `(i32) -> ()` |
| 251 | `g7sW.tsgp` | func | `(i32 i32) -> ()` |
| 252 | `g7sW.bJVZ` | func | `(i32 i32) -> ()` |
| 253 | `g7sW.dc2N` | func | `(i32 i32) -> ()` |
| 254 | `g7sW.JLxb` | func | `(i32 i32) -> ()` |
| 255 | `g7sW.q8Vr` | func | `(i32 i32) -> ()` |
| 256 | `g7sW.cigN` | func | `(i32 i32) -> ()` |
| 257 | `g7sW.qbEa` | func | `(i32 i32) -> ()` |
| 258 | `g7sW.WMgt` | func | `(i32 i32) -> ()` |
| 259 | `g7sW.g9YP` | func | `(i32) -> (i32)` |
| 260 | `g7sW.i3oq` | func | `(i32) -> (i32)` |
| 261 | `g7sW.wkSb` | func | `(i32) -> (i32)` |
| 262 | `g7sW.cQou` | func | `(i32) -> (i32)` |
| 263 | `g7sW.HxFJ` | func | `(i32) -> ()` |
| 264 | `g7sW.P2xz` | func | `(i32 i32 i32 i32) -> ()` |
| 265 | `g7sW.nuxa` | func | `(i32) -> ()` |
| 266 | `g7sW.udiG` | func | `(i32) -> (i32)` |
| 267 | `g7sW.hz2V` | func | `(i32) -> (i32)` |
| 268 | `g7sW.EL4R` | func | `(i32) -> (i32)` |
| 269 | `g7sW.ro49` | func | `(i32) -> (i32)` |
| 270 | `g7sW.JceW` | func | `(i32 i32) -> ()` |
| 271 | `g7sW.nvnf` | func | `(i32) -> ()` |
| 272 | `g7sW.IfIx` | func | `(i32 i32) -> ()` |
| 273 | `g7sW.SI8I` | func | `(i32) -> (i32)` |
| 274 | `g7sW.wtpl` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 275 | `g7sW.w9q8` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 276 | `g7sW.PCXw` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 277 | `g7sW.inRG` | func | `(i32 i32) -> (i32)` |
| 278 | `g7sW.zG3U` | func | `(i32 i32) -> (i32)` |
| 279 | `g7sW.gwMW` | func | `(i32 i32) -> (i32)` |
| 280 | `g7sW.PV8m` | func | `(i32 i32) -> (i32)` |
| 281 | `g7sW.ph0u` | func | `(i32 i32) -> (i32)` |

## Exports

160 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `ScwV` | func | 2745 | `(i32) -> (i32)` |
| `MLCF` | func | 2984 | `(i32) -> (i32 i32)` |
| `BVHE` | func | 3020 | `(i32 i32 i32 i32) -> ()` |
| `ZLmd` | func | 2450 | `(i32) -> (i32)` |
| `KbE1` | func | 1816 | `(i32 i32 i32 i32) -> (i32)` |
| `FC0R` | func | 2464 | `(i32) -> (i32)` |
| `vThw` | func | 2778 | `(i32) -> ()` |
| `PFSh` | func | 3133 | `() -> (f64)` |
| `l13U` | func | 2974 | `(i32 i32) -> (i32 i32)` |
| `xTy6` | func | 1205 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `ei7O` | func | 2978 | `(i32 i32) -> (i32 i32)` |
| `V2C4` | func | 2562 | `() -> (i32)` |
| `lwEL` | func | 2455 | `(i32) -> (i32)` |
| `HdZY` | func | 2403 | `(i32) -> (i32)` |
| `KbDF` | func | 1989 | `(i32 f64) -> (i32)` |
| `NwiT` | func | 1564 | `(i32 i32) -> (i32)` |
| `o3gg` | func | 2967 | `(i32 i32 i32) -> (i32 i32)` |
| `dLHp` | func | 2162 | `(i32 i32) -> (i32)` |
| `SMlG` | func | 1929 | `(i32 i32 i32 i32) -> ()` |
| `I0t1` | func | 684 | `(f64) -> (f64)` |
| `jhJO` | func | 2432 | `(i32) -> (i32)` |
| `YBeC` | func | 2943 | `(i32 i32 i32 i32) -> (i32)` |
| `lus2` | func | 2998 | `() -> (i32 i32)` |
| `QoGO` | global | 2 | `` |
| `hQqA` | func | 2968 | `(i32 i32 i32) -> (i32 i32)` |
| `s5m0` | func | 599 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `UssT` | func | 2453 | `(i32) -> (i32)` |
| `dkMR` | func | 1375 | `(i32 f64 f64) -> (i32)` |
| `dnY5` | func | 2467 | `(i32) -> (i32)` |
| `DJR0` | func | 2800 | `(i32) -> (i32)` |
| `HG7C` | func | 3161 | `() -> (i32)` |
| `zDKu` | func | 1305 | `(i32) -> ()` |
| `Jofy` | func | 2483 | `(i32) -> (i32)` |
| `eYyz` | func | 1836 | `(i32 i32 f64 f64 f64) -> ()` |
| `za0U` | func | 841 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `AR8c` | func | 691 | `(i32 i32) -> (i32)` |
| `lnUE` | func | 1270 | `(i32) -> (i32)` |
| `SDZ0` | func | 1465 | `(i32 i32 i32 i32) -> (i32)` |
| `CaVt` | func | 1912 | `(i32) -> (i32)` |
| `WvQd` | func | 1466 | `(i32) -> (i32)` |
| `bhsj` | func | 2485 | `(i32) -> (i32)` |
| `o2TM` | func | 895 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `Jelg` | func | 666 | `(i32 i32) -> (i32)` |
| `xRKb` | func | 1869 | `(i32) -> ()` |
| `d5MQ` | func | 2561 | `(i32 i32) -> ()` |
| `iJjF` | func | 750 | `(i32 i32 i32) -> (i32)` |
| `asfo` | func | 1199 | `(i32 i32 i32 i32) -> (i32)` |
| `rB9G` | func | 550 | `(i32 i32 i32) -> (i32)` |
| `a0gD` | func | 1461 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `q0kK` | func | 876 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `MZtf` | func | 2528 | `() -> (i32)` |
| `E96c` | func | 1279 | `(i32 i32) -> (i32)` |
| `HRhz` | func | 2447 | `(i32) -> (i32)` |
| `Xvmj` | func | 1252 | `(i32 i32 i32) -> ()` |
| `hZ3x` | func | 2348 | `(i32 i32) -> (i32)` |
| `PEn8` | func | 2466 | `(i32 i32) -> ()` |
| `Z9Aw` | func | 3137 | `(i32) -> (i32)` |
| `cBJk` | func | 1423 | `() -> (i32)` |
| `lJDy` | func | 2977 | `(i32 i32) -> (i32 i32)` |
| `EFCT` | func | 3058 | `() -> (i32)` |
| `oM9l` | func | 2240 | `(i32 f64) -> (i32)` |
| `uzgc` | func | 2009 | `(i32 f64 f64 f64) -> (i32)` |
| `EvTX` | func | 2738 | `(i32) -> (i32)` |
| `r3nY` | func | 1737 | `(i32 i32) -> (i32)` |
| `fPLb` | func | 2320 | `(i32 i32) -> (i32)` |
| `kd7q` | func | 2270 | `(i32 i32) -> ()` |
| `JDT7` | func | 1324 | `(i32 i32 i32) -> (i32)` |
| `OdjM` | func | 1861 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `UEH9` | func | 2759 | `(i32) -> (i32)` |
| `NPqE` | func | 1374 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `oMUF` | func | 1719 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `Bm8u` | func | 1228 | `(i32 i32) -> (i32)` |
| `Oalf` | func | 1419 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `XyTl` | func | 2319 | `(i32 i32) -> (i32)` |
| `bjNc` | func | 1854 | `(i32 i32) -> (i32)` |
| `jXmA` | func | 906 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `GTWp` | func | 2476 | `(i32 i32) -> (i32)` |
| `GuUc` | func | 2448 | `(i32) -> (i32)` |
| `ANDF` | func | 1396 | `(i32 i32) -> (i32)` |
| `ozLv` | func | 2050 | `(i32 i32) -> (i32)` |
| `gjdD` | func | 1444 | `(i32 i32 i32 i32) -> ()` |
| `SX8t` | func | 1577 | `(i32 i32) -> ()` |
| `KcIm` | func | 2517 | `(i32 i32) -> ()` |
| `yoR6` | func | 1456 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `CYDO` | func | 728 | `(i32) -> (i32)` |
| `plHs` | func | 2973 | `(i32 i32) -> (i32 i32)` |
| `vtbI` | func | 3138 | `(i32) -> ()` |
| `GGD1` | func | 1473 | `(i32 i32) -> (i32)` |
| `jMQv` | func | 2402 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `mXol` | func | 2975 | `(i32 i32) -> (i32 i32)` |
| `WFHf` | func | 2131 | `(i32 i32) -> (i32)` |
| `HboD` | func | 2386 | `(i32) -> (i32)` |
| `RGcd` | func | 1498 | `(i32 i32) -> (i32)` |
| `RAsd` | func | 2449 | `(i32) -> (i32)` |
| `rvkO` | func | 1704 | `(i32) -> (i32)` |
| `LN2I` | func | 3091 | `(i32) -> ()` |
| `HBMG` | func | 2976 | `(i32 i32) -> (i32 i32)` |
| `RrJR` | func | 877 | `(i32 i32) -> (i32)` |
| `LR4h` | func | 1576 | `(i32 i32) -> ()` |
| `a0cL` | func | 2985 | `(i32) -> (i32 i32)` |
| `NCUB` | func | 1683 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `Sk2f` | func | 1308 | `(i32 i32) -> (i32)` |
| `FVaI` | func | 1796 | `() -> (i32)` |
| `jnNV` | func | 1726 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `Kj1T` | func | 1618 | `(i32 i32 i32 i32) -> (i32)` |
| `ku1s` | func | 1096 | `(i32 i32) -> (i32)` |
| `xZ8w` | func | 2465 | `(i32) -> (i32)` |
| `iYUc` | func | 2918 | `() -> ()` |
| `zKCx` | func | 1513 | `(i32 i32 i32) -> (i32)` |
| `g38V` | func | 1581 | `(i32 f64 f64 f64) -> (i32)` |
| `Zu18` | func | 651 | `(i32 i32) -> (i32)` |
| `jwg0` | func | 1097 | `(i32 i32) -> ()` |
| `Lv00` | func | 2475 | `(i32 i32) -> (i32)` |
| `z9QE` | func | 3162 | `() -> (i32)` |
| `xQ9U` | func | 2484 | `(i32) -> (i32)` |
| `Kckg` | func | 1157 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `bHzP` | func | 2445 | `(i32) -> (f64)` |
| `eiaJ` | func | 1198 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `memory` | memory | 0 | `` |
| `gYbn` | func | 2474 | `(i32) -> (i32)` |
| `pAGr` | func | 3092 | `() -> ()` |
| `XLDb` | func | 1927 | `(i32) -> (i32)` |
| `lEaH` | func | 731 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `ExQE` | func | 1486 | `(i32 i32) -> (i32)` |
| `no9o` | func | 2982 | `(i32) -> (i32 i32)` |
| `iOY7` | func | 1534 | `(i32 i32 i32 i32) -> (i32)` |
| `HbGF` | func | 1497 | `(i32 i32) -> (i32)` |
| `y8rx` | func | 2361 | `(i32 i32 i32 i32) -> (i32)` |
| `LFbs` | func | 723 | `(i32 i32 i32 i32) -> (i32)` |
| `ZOXp` | func | 662 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `OS2P` | func | 2431 | `(i32 i32) -> ()` |
| `XLhM` | func | 1501 | `(i32 f64) -> (f64)` |
| `eKFP` | func | 1844 | `(i32 i32) -> ()` |
| `KSdN` | func | 1247 | `(i32 i32 i32) -> (i32)` |
| `cff8` | func | 2997 | `() -> (i32 i32)` |
| `HUrI` | func | 3029 | `(i32 i32 i32) -> ()` |
| `ns8d` | func | 2452 | `(i32) -> ()` |
| `SciB` | func | 1962 | `(i32 i32) -> ()` |
| `Y7at` | func | 2937 | `(i32 i32) -> (i32)` |
| `ALXj` | func | 2239 | `(i32 i32) -> ()` |
| `AtX8` | func | 1426 | `(i32) -> (i32)` |
| `tSMe` | func | 3030 | `(i32 i32) -> ()` |
| `wAaj` | func | 2446 | `(i32) -> (i32)` |
| `atbO` | func | 2983 | `(i32) -> (i32 i32)` |
| `RCCV` | func | 2462 | `(i32 i32) -> ()` |
| `BYMK` | func | 2184 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `JD0r` | func | 1870 | `(i32) -> ()` |
| `sUgS` | global | 1 | `` |
| `aiaW` | func | 2986 | `(i32) -> (i32 i32)` |
| `IeP9` | func | 3085 | `(i32 i32 i32) -> ()` |
| `mS1Y` | func | 1801 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `D7na` | func | 2768 | `(i32) -> (i32)` |
| `bQkS` | func | 2454 | `(i32) -> (i32)` |
| `fZF3` | func | 2949 | `(i32 i32) -> ()` |
| `nDXK` | func | 2025 | `(i32 i32) -> ()` |
| `fHD3` | func | 2318 | `(i32 i32) -> (i32)` |
| `UYvT` | func | 2317 | `(i32 i32) -> (i32)` |
| `YRFr` | func | 2996 | `() -> (i32 i32)` |
| `noy6` | func | 2451 | `(i32) -> (i32)` |
| `qSbp` | func | 2972 | `(i32 i32) -> (i32 i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 735 · max 735
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2019960, `i32` = i32.const 2020516

## Functions

- 2,890 bodies · 4,026,524 code bytes · avg 1.4 KB
- instruction scan: 2,890 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 157 |
| <= 64 bytes | 105 |
| <= 128 bytes | 251 |
| <= 256 bytes | 368 |
| <= 512 bytes | 672 |
| <= 1024 bytes | 581 |
| <= 2048 bytes | 423 |
| <= 4096 bytes | 177 |
| <= 8192 bytes | 90 |
| <= 16384 bytes | 32 |
| > 16384 bytes | 34 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32) -> ()` | 218 | 200,813 | 91,028 | local.get×26756, i32.const×10177, i32.load×5791, local.set×4887, local.tee×4767 |
| 1 | `(i32 i32 i32 i32 i32) -> ()` | 144 | 112,624 | 54,591 | local.get×15198, i32.const×6563, i32.add×3205, local.set×3091, i32.load×2948 |
| 2 | `(i32 i32 i32 i32 i32 i32) -> ()` | 130 | 46,897 | 21,584 | local.get×6259, i32.const×2868, local.set×1247, i32.add×1154, i32.load×1032 |
| 3 | `(i32 i32) -> ()` | 105 | 36,598 | 16,578 | local.get×4596, i32.const×1664, local.set×977, local.tee×845, i32.load×782 |
| 4 | `(i32 i32) -> ()` | 58 | 29,787 | 14,312 | local.get×4209, i32.const×1738, i32.load×1042, local.set×931, i32.add×820 |
| 5 | `(i32 i32) -> ()` | 90 | 26,046 | 12,563 | local.get×3702, i32.const×1379, local.set×779, i32.load×721, local.tee×698 |
| 6 | `(i32 i32 i32 i32 i32) -> ()` | 135 | 32,562 | 16,141 | local.get×4566, i32.const×2205, local.set×1141, i32.add×1062, local.tee×800 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 58 | 21,491 | 10,529 | local.get×2903, i32.const×1493, local.set×728, i32.add×591, local.tee×504 |
| 8 | `(i32 i32 i32 i32) -> ()` | 105 | 26,392 | 12,764 | local.get×3784, i32.const×1615, local.set×985, i32.add×682, i32.load×663 |
| 9 | `(i32 i32 i32) -> (i32)` | 74 | 22,549 | 10,769 | local.get×2881, i32.const×1289, i32.load×749, local.set×499, i32.add×477 |
| 10 | `(i32 i32) -> ()` | 93 | 18,058 | 8,685 | local.get×2524, i32.const×965, local.tee×535, local.set×515, i32.load×504 |
| 11 | `(i32 i32 i32 i32) -> ()` | 53 | 24,505 | 11,634 | local.get×3005, i32.const×1276, local.tee×731, end×592, i32.load×586 |
| 12 | `(i32 i32 i32) -> (i32)` | 77 | 18,923 | 8,934 | local.get×2485, i32.const×1224, i32.load×559, i32.add×543, local.set×525 |
| 13 | `(i32 i32 i32 i32 i32 i32) -> ()` | 125 | 19,810 | 8,875 | local.get×2493, i32.const×1111, local.set×430, local.tee×385, i32.load×382 |
| 14 | `(i32 i32 f64) -> (i32)` | 48 | 17,102 | 8,098 | local.get×2218, i32.const×774, local.set×526, local.tee×508, i32.add×478 |
| 16 | `(i32 i32) -> ()` | 96 | 31,835 | 14,861 | local.get×4482, i32.const×1910, i32.add×763, local.set×692, i32.load×669 |
| 22 | `(i32 i32) -> ()` | 82 | 29,024 | 13,043 | local.get×4618, i32.const×1456, i32.store×702, i32.add×689, local.tee×645 |
| 24 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 64 | 24,312 | 11,211 | local.get×2683, i32.const×1714, local.set×822, end×665, block×466 |
| 27 | `(i32 i32 i32 i32 i32) -> ()` | 68 | 22,817 | 10,630 | local.get×3348, i32.const×1245, local.tee×735, i32.add×431, local.set×341 |
| 34 | `(i32 i32 i32 i32 i32) -> ()` | 65 | 18,015 | 8,704 | local.get×2378, i32.const×1095, local.set×628, local.tee×459, i32.add×442 |
| 70 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 112 | 27,605 | 13,066 | local.get×3810, i32.const×1687, i32.load×857, local.set×788, i32.add×672 |
| 193 | `(i32 i32) -> ()` | 10 | 27,551 | 13,273 | local.get×4670, i32.load×1257, i32.const×1060, end×827, i32.add×762 |
| 215 | `(i32) -> ()` | 19 | 23,258 | 10,909 | local.get×2733, i32.load×1495, i32.const×1187, local.tee×1011, end×855 |
| 722 | `(i32 i32) -> ()` | 139 | 42,973 | 20,266 | local.get×5275, i32.const×2347, local.tee×1198, i32.add×1066, local.set×1006 |
| 723 | `(i32 i32 i32 i32) -> ()` | 54 | 21,809 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 1572 | `(i32 i32) -> (i32)` | 182 | 54,916 | 19,834 | local.get×6599, i32.const×2595, i64.store×1935, i64.const×1087, i64.load×1068 |
| 1979 | `(i32 i32) -> ()` | 111 | 39,746 | 17,590 | local.get×5165, i32.const×1655, local.set×898, local.tee×741, end×677 |
| 2571 | `(i32 i32) -> ()` | 398 | 142,193 | 64,164 | local.get×18413, i32.const×8006, local.set×3828, i32.load×3150, end×2805 |
| 2841 | `(i32 i32 i32 i32) -> ()` | 137 | 31,374 | 14,285 | local.get×4258, i32.const×1517, local.tee×742, local.set×690, br_if×632 |
| 2860 | `(i32 i32) -> ()` | 143 | 33,660 | 15,072 | local.get×4234, i32.const×1988, local.set×803, local.tee×732, i32.add×689 |

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
| `local.get` | 538,697 |
| `i32.const` | 225,243 |
| `local.tee` | 100,033 |
| `i32.load` | 94,027 |
| `local.set` | 93,946 |
| `i32.add` | 86,859 |
| `end` | 78,955 |
| `br_if` | 64,379 |
| `i32.store` | 46,438 |
| `block` | 37,177 |
| `i64.const` | 32,473 |
| `i64.store` | 31,711 |
| `if` | 30,127 |
| `call` | 29,107 |
| `i32.sub` | 24,563 |
| `i64.load` | 23,462 |
| `br` | 23,148 |
| `i32.eqz` | 19,507 |
| `select` | 17,081 |
| `i32.shl` | 16,369 |
| `i32.and` | 16,357 |
| `i32.ne` | 15,841 |
| `i32.load8_u` | 14,923 |
| `i32.eq` | 13,953 |
| `i32.store8` | 12,623 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 2,890/2,890 (degraded: 0)
