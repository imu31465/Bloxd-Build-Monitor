# WASM module: `bloxd_wasm_webgpu_bg`

> environment **bloxd.io** · build `fl4vv.bd3c59ce` · analyzed 2026-11-28T08:15:42+09:00
> source: https://bloxd.io/static/media/bloxd_wasm_webgpu_bg.da82f54da6a0be56ef94.wasm
> 5,238,928 bytes (5.0 MB) · sha256 `4397e4e2e7e494ae…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- name-section module id `742b813df0f120dd.12491` → `b183dba018677cd4.12491` (numeric version suffix unchanged — same module version, re-randomized prefix)
- export identifiers rotated by the obfuscator: 1/170 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 3,025 / 394 |
| Exports / imports | 170 / 395 |
| Code bytes (function bodies) | 4,142,840 (4.0 MB) |
| Total local variables | 31,921 |
| Instructions (scanable bodies) | 1,938,528 |
| Data segments / bytes | 3,552 / 1,049,293 |
| Element segments / entries | 1 / 844 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `b183dba018677cd4.12491` |
| Sections | 11 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,542 | 180 |
| 2 | import | 4,746 | 395 |
| 3 | function | 3,079 | 3025 |
| 4 | table | 7 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,361 | 170 |
| 9 | element | 1,695 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 4,148,372 | 3025 |
| 11 | data | 1,078,029 | 3552 |
| 0 | custom:name | 30 | — |

## Types

180 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

395 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `ALIl.hA8T` | memory | `[128..14648]` |
| 0 | `ALIl.HSyz` | func | `(i32) -> (i32)` |
| 1 | `ALIl.Y7f9` | func | `(i32) -> (f64)` |
| 2 | `ALIl.ggRl` | func | `() -> (i32)` |
| 3 | `ALIl.zIfZ` | func | `(i32 i32 i32) -> (i32)` |
| 4 | `ALIl.UNB3` | func | `(i32) -> ()` |
| 5 | `ALIl.TRgC` | func | `(i32 i32) -> (i32)` |
| 6 | `ALIl.xIJw` | func | `(i32) -> (i32)` |
| 7 | `ALIl.GBFv` | func | `(i32 i32 i32) -> (i32)` |
| 8 | `ALIl.fPRW` | func | `(i32 i32 i32 i32) -> (i32)` |
| 9 | `ALIl.ls4V` | func | `(i32) -> (i32)` |
| 10 | `ALIl.xumf` | func | `(i32 i32) -> ()` |
| 11 | `ALIl.lPr3` | func | `(i32 i32) -> ()` |
| 12 | `ALIl.NjIY` | func | `(i32 i32 i32 i32) -> (i32)` |
| 13 | `ALIl.jBzZ` | func | `(i32 i32) -> (i32)` |
| 14 | `ALIl.UtBH` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 15 | `ALIl.VOA2` | func | `(i32) -> (i32)` |
| 16 | `ALIl.uxYi` | func | `(i32 i32) -> (i32)` |
| 17 | `ALIl.LdkL` | func | `(i32 i32) -> (i32)` |
| 18 | `ALIl.IaoB` | func | `(i32 i32) -> ()` |
| 19 | `ALIl.S8m8` | func | `(i32) -> (i32)` |
| 20 | `ALIl.aBCo` | func | `(i32) -> (i32)` |
| 21 | `ALIl.hKep` | func | `(i32 i32 i32) -> ()` |
| 22 | `ALIl.Hh1z` | func | `(i32 i32 i32) -> (i32)` |
| 23 | `ALIl.UKAz` | func | `(i32) -> (i32)` |
| 24 | `ALIl.jzNP` | func | `(i32) -> (i32)` |
| 25 | `ALIl.nt4v` | func | `(i32 i32) -> ()` |
| 26 | `ALIl.ESpi` | func | `(i32 i32) -> (i32)` |
| 27 | `ALIl.n8jc` | func | `(i32 i32 i32 i32) -> ()` |
| 28 | `ALIl.JRav` | func | `(i32) -> (i32)` |
| 29 | `ALIl.oFtS` | func | `(i32) -> (i32)` |
| 30 | `ALIl.GEWB` | func | `(i32) -> (i32)` |
| 31 | `ALIl.EUOU` | func | `(i32) -> (i32)` |
| 32 | `ALIl.N0Nq` | func | `(i32) -> (i32)` |
| 33 | `ALIl.W4fz` | func | `(i32 i32 i32) -> ()` |
| 34 | `ALIl.FyS6` | func | `(i32 i32) -> (i32)` |
| 35 | `ALIl.K35q` | func | `(i32) -> (i32)` |
| 36 | `ALIl.GzNt` | func | `(i32) -> ()` |
| 37 | `ALIl.w31h` | func | `(i32) -> (i32)` |
| 38 | `ALIl.ZSE7` | func | `(i32) -> (i32)` |
| 39 | `ALIl.aS8j` | func | `(i32) -> ()` |
| 40 | `ALIl.j7LR` | func | `(i32 i32) -> (i32)` |
| 41 | `ALIl.mzYk` | func | `(i32) -> ()` |
| 42 | `ALIl.wRaJ` | func | `(i32 i32) -> ()` |
| 43 | `ALIl.mWfG` | func | `(i32 i32 i32) -> (i32)` |
| 44 | `ALIl.SsiL` | func | `(i32) -> ()` |
| 45 | `ALIl.zABt` | func | `(i32) -> ()` |
| 46 | `ALIl.gmb4` | func | `() -> (i32)` |
| 47 | `ALIl.hRq8` | func | `(i32 i32) -> (i32)` |
| 48 | `ALIl.Ql9m` | func | `(i32 i32) -> (i32)` |
| 49 | `ALIl.cpit` | func | `(i32) -> (i32)` |
| 50 | `ALIl.Gq0D` | func | `(i32) -> (i32)` |
| 51 | `ALIl.gFZY` | func | `(i32) -> (i32)` |
| 52 | `ALIl.xUPY` | func | `(i32 i32) -> ()` |
| 53 | `ALIl.ESq3` | func | `(i32) -> (i32)` |
| 54 | `ALIl.xx6l` | func | `(i32) -> ()` |
| 55 | `ALIl.fCSv` | func | `(i32 i32) -> (i32)` |
| 56 | `ALIl.orws` | func | `(i32 i32 i32) -> (i32)` |
| 57 | `ALIl.hRnp` | func | `(i32) -> (i32)` |
| 58 | `ALIl.KBkw` | func | `(i32 i32 i32) -> ()` |
| 59 | `ALIl.Wj1e` | func | `(i32 i32) -> ()` |
| 60 | `ALIl.wppO` | func | `(i32) -> (i32)` |
| 61 | `ALIl.NYvl` | func | `(i32 i32 f64 i32 i32 f64 f64) -> ()` |
| 62 | `ALIl.FygE` | func | `(i32 i32 f64 i32 f64 f64) -> ()` |
| 63 | `ALIl.vkjZ` | func | `(i32) -> ()` |
| 64 | `ALIl.mBOw` | func | `(i32 i32 i32) -> ()` |
| 65 | `ALIl.dBLM` | func | `(i32 i32) -> ()` |
| 66 | `ALIl.JWP1` | func | `(i32 i32 i32 i32 i32 f64 i32) -> ()` |
| 67 | `ALIl.IjeJ` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 68 | `ALIl.ikaL` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 69 | `ALIl.VO9f` | func | `(i32 i32 f64) -> ()` |
| 70 | `ALIl.XWWo` | func | `(i32) -> (i32)` |
| 71 | `ALIl.b7Et` | func | `(i32 i32) -> ()` |
| 72 | `ALIl.deCw` | func | `(i32 i32 i32) -> ()` |
| 73 | `ALIl.Z1Tb` | func | `(i32 i32 i32 i32) -> ()` |
| 74 | `ALIl.LgKk` | func | `(i32) -> ()` |
| 75 | `ALIl.Vt6C` | func | `(i32 i32 i32) -> ()` |
| 76 | `ALIl.Eh9S` | func | `(i32 i32) -> ()` |
| 77 | `ALIl.UFU2` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 78 | `ALIl.cGJq` | func | `(i32 f32 f32 f32 f32 f32 f32) -> ()` |
| 79 | `ALIl.Ea5w` | func | `(i32 i32 i32) -> ()` |
| 80 | `ALIl.H40p` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 81 | `ALIl.Fxd2` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 82 | `ALIl.ukKA` | func | `(i32 i32 i32 i32 i32 f64 i32) -> ()` |
| 83 | `ALIl.Di4H` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 84 | `ALIl.hjeq` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 85 | `ALIl.Pt8x` | func | `(i32 i32 i32) -> ()` |
| 86 | `ALIl.dPOW` | func | `(i32 i32) -> (i32)` |
| 87 | `ALIl.h6zP` | func | `(i32) -> (i32)` |
| 88 | `ALIl.FWDk` | func | `(i32) -> (i32)` |
| 89 | `ALIl.QscP` | func | `(i32) -> (i32)` |
| 90 | `ALIl.xpjM` | func | `(i32 i32) -> (i32)` |
| 91 | `ALIl.kQSc` | func | `(i32) -> ()` |
| 92 | `ALIl.dXNh` | func | `(i32) -> (i32)` |
| 93 | `ALIl.pBX0` | func | `(i32 i32) -> (i32)` |
| 94 | `ALIl.l5M6` | func | `(i32 i32 i32) -> (i32)` |
| 95 | `ALIl.vgQp` | func | `(i32 i32 i32) -> ()` |
| 96 | `ALIl.DLOx` | func | `(i32 i32 i32 i32) -> (i32)` |
| 97 | `ALIl.BR37` | func | `() -> (f64)` |
| 98 | `ALIl.Y3nl` | func | `() -> (f64)` |
| 99 | `ALIl.IeXn` | func | `(i32 i32) -> ()` |
| 100 | `ALIl.Blzj` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 101 | `ALIl.zVl0` | func | `(i32) -> (i32)` |
| 102 | `ALIl.zBua` | func | `(i32) -> (i32)` |
| 103 | `ALIl.YDPr` | func | `(i32) -> (i32)` |
| 104 | `ALIl.tQZN` | func | `() -> (i32)` |
| 105 | `ALIl.W1QY` | func | `() -> (i32)` |
| 106 | `ALIl.zTsv` | func | `() -> (i32)` |
| 107 | `ALIl.m1uS` | func | `() -> (i32)` |
| 108 | `ALIl.XjGe` | func | `(i32 i32) -> (i32)` |
| 109 | `ALIl.LUqk` | func | `(i32) -> ()` |
| 110 | `ALIl.otyK` | func | `(i32 i32) -> (i32)` |
| 111 | `ALIl.ytTd` | func | `(i32) -> (i32)` |
| 112 | `ALIl.Gp84` | func | `() -> (f64)` |
| 113 | `ALIl.dPhe` | func | `(i32) -> (i32)` |
| 114 | `ALIl.t0tp` | func | `(i32 i32) -> ()` |
| 115 | `ALIl.td9N` | func | `(i32 i32) -> ()` |
| 116 | `ALIl.rUxn` | func | `(i32 i32) -> ()` |
| 117 | `ALIl.KQGT` | func | `(i32 f32) -> ()` |
| 118 | `ALIl.pwAo` | func | `(i32 f32) -> ()` |
| 119 | `ALIl.iSv0` | func | `(i32 i32) -> ()` |
| 120 | `ALIl.tOEn` | func | `(i32 i32) -> ()` |
| 121 | `ALIl.p61V` | func | `(i32 i32) -> ()` |
| 122 | `ALIl.Hmwp` | func | `(i32 i32) -> ()` |
| 123 | `ALIl.BvKP` | func | `(i32 i32 i32) -> ()` |
| 124 | `ALIl.FMIi` | func | `(i32 i32) -> (i32)` |
| 125 | `ALIl.SbCp` | func | `(i32 i32) -> ()` |
| 126 | `ALIl.B4S6` | func | `(i32 i32) -> ()` |
| 127 | `ALIl.xodi` | func | `(i32 i32) -> ()` |
| 128 | `ALIl.iyRa` | func | `(i32 i32) -> ()` |
| 129 | `ALIl.WEPV` | func | `(i32 f64) -> ()` |
| 130 | `ALIl.d5qW` | func | `(i32 f64) -> ()` |
| 131 | `ALIl.fLDR` | func | `(i32 i32) -> ()` |
| 132 | `ALIl.jK4t` | func | `(i32 i32 i32) -> ()` |
| 133 | `ALIl.DPeb` | func | `(i32 i32) -> ()` |
| 134 | `ALIl.w08O` | func | `(i32 i32) -> (i32)` |
| 135 | `ALIl.I0ld` | func | `(i32 i32 i32) -> ()` |
| 136 | `ALIl.JQ1K` | func | `(i32 i32 i32) -> ()` |
| 137 | `ALIl.iM0m` | func | `(i32 i32) -> (i32)` |
| 138 | `ALIl.WAZl` | func | `(i32 i32) -> (i32)` |
| 139 | `ALIl.uFOH` | func | `(i32 i32 i32) -> ()` |
| 140 | `ALIl.uv0I` | func | `(i32 i32 i32) -> ()` |
| 141 | `ALIl.dfFw` | func | `(i32 i32) -> (i32)` |
| 142 | `ALIl.cdEd` | func | `(i32 i32) -> ()` |
| 143 | `ALIl.YAOy` | func | `(i32 i32) -> ()` |
| 144 | `ALIl.IiyW` | func | `(i32 i32) -> ()` |
| 145 | `ALIl.N2nS` | func | `(i32 i32) -> ()` |
| 146 | `ALIl.k8vW` | func | `(i32 i32) -> ()` |
| 147 | `ALIl.XYIm` | func | `(i32 i32) -> ()` |
| 148 | `ALIl.Yr6O` | func | `(i32 i32) -> ()` |
| 149 | `ALIl.H8uk` | func | `(i32 f64) -> ()` |
| 150 | `ALIl.ZKFP` | func | `(i32 i32) -> ()` |
| 151 | `ALIl.GA0F` | func | `(i32 i32) -> ()` |
| 152 | `ALIl.bWf1` | func | `(i32 i32) -> ()` |
| 153 | `ALIl.BclP` | func | `(i32 i32) -> ()` |
| 154 | `ALIl.K6On` | func | `(i32 i32) -> ()` |
| 155 | `ALIl.KVSQ` | func | `(i32 i32) -> ()` |
| 156 | `ALIl.JZFi` | func | `(i32 i32) -> ()` |
| 157 | `ALIl.MqyK` | func | `(i32 i32) -> ()` |
| 158 | `ALIl.h5Rm` | func | `(i32 i32) -> ()` |
| 159 | `ALIl.NB9K` | func | `(i32 i32 i32) -> ()` |
| 160 | `ALIl.JyTY` | func | `(i32 i32 i32) -> ()` |
| 161 | `ALIl.ReLu` | func | `(i32 i32) -> (i32)` |
| 162 | `ALIl.mDpR` | func | `(i32 i32) -> (i32)` |
| 163 | `ALIl.YQbw` | func | `(i32 i32) -> ()` |
| 164 | `ALIl.JXsf` | func | `(i32 i32) -> ()` |
| 165 | `ALIl.WZPg` | func | `(i32 f64) -> ()` |
| 166 | `ALIl.d8Df` | func | `(i32 i32) -> ()` |
| 167 | `ALIl.vC4s` | func | `(i32 i32) -> ()` |
| 168 | `ALIl.qjQG` | func | `(i32 i32) -> ()` |
| 169 | `ALIl.aJKz` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 170 | `ALIl.WE8v` | func | `(i32 f64) -> ()` |
| 171 | `ALIl.iU4s` | func | `(i32 f64) -> ()` |
| 172 | `ALIl.aQS2` | func | `(i32 f64) -> ()` |
| 173 | `ALIl.q8vk` | func | `(i32 f64) -> ()` |
| 174 | `ALIl.imEv` | func | `(i32 i32) -> ()` |
| 175 | `ALIl.yAk5` | func | `(i32 i32) -> ()` |
| 176 | `ALIl.C3Rt` | func | `(i32 i32) -> ()` |
| 177 | `ALIl.RKXh` | func | `(i32 i32) -> ()` |
| 178 | `ALIl.Bmkp` | func | `(i32 i32) -> ()` |
| 179 | `ALIl.l70P` | func | `(i32 i32 i32) -> ()` |
| 180 | `ALIl.Z0c8` | func | `(i32 i32) -> ()` |
| 181 | `ALIl.pRs9` | func | `(i32 f32) -> ()` |
| 182 | `ALIl.MM01` | func | `(i32 i32) -> ()` |
| 183 | `ALIl.TPYH` | func | `(i32 i32) -> ()` |
| 184 | `ALIl.onsX` | func | `(i32 i32) -> ()` |
| 185 | `ALIl.KAoi` | func | `(i32 i32) -> ()` |
| 186 | `ALIl.wp0s` | func | `(i32 i32) -> ()` |
| 187 | `ALIl.zpiZ` | func | `(i32 i32) -> ()` |
| 188 | `ALIl.SLJJ` | func | `(i32 i32) -> ()` |
| 189 | `ALIl.jMFn` | func | `(i32 i32) -> ()` |
| 190 | `ALIl.HVPY` | func | `(i32 i32) -> ()` |
| 191 | `ALIl.pevF` | func | `(i32 i32) -> ()` |
| 192 | `ALIl.BGwf` | func | `(i32 i32) -> ()` |
| 193 | `ALIl.GaiM` | func | `(i32 i32) -> ()` |
| 194 | `ALIl.kWaQ` | func | `(i32 i32) -> (i32)` |
| 195 | `ALIl.IBhN` | func | `(i32 i32 i32 i32) -> ()` |
| 196 | `ALIl.Vi3H` | func | `(i32 i32) -> ()` |
| 197 | `ALIl.cDUP` | func | `(i32 i32 i32) -> ()` |
| 198 | `ALIl.PTK7` | func | `(i32 i32) -> (i32)` |
| 199 | `ALIl.jO4N` | func | `(i32) -> (i32)` |
| 200 | `ALIl.ykG4` | func | `(i32 i32) -> ()` |
| 201 | `ALIl.kOgb` | func | `(i32 i32) -> ()` |
| 202 | `ALIl.A6hi` | func | `(i32 i32) -> ()` |
| 203 | `ALIl.xjdv` | func | `(i32 i32) -> ()` |
| 204 | `ALIl.SYZf` | func | `(i32 i32) -> ()` |
| 205 | `ALIl.rF0V` | func | `(i32 i32) -> ()` |
| 206 | `ALIl.G5zH` | func | `(i32 i32) -> ()` |
| 207 | `ALIl.O06U` | func | `(i32 i32) -> ()` |
| 208 | `ALIl.KBaW` | func | `(i32) -> (i32)` |
| 209 | `ALIl.TDAN` | func | `(i32 i32 i32) -> ()` |
| 210 | `ALIl.xd3r` | func | `(i32 i32) -> ()` |
| 211 | `ALIl.Awya` | func | `(i32 i32 i32 i32) -> ()` |
| 212 | `ALIl.ApUS` | func | `(i32 i32) -> ()` |
| 213 | `ALIl.wNdi` | func | `(i32) -> ()` |
| 214 | `ALIl.jCO0` | func | `(i32 i32) -> ()` |
| 215 | `ALIl.ufDC` | func | `(i32) -> (i32)` |
| 216 | `ALIl.rdBz` | func | `(i32 i32 i32) -> ()` |
| 217 | `ALIl.EIeV` | func | `(i32 i32) -> ()` |
| 218 | `ALIl.mpdA` | func | `(i32 i32) -> ()` |
| 219 | `ALIl.V7T3` | func | `(i32 i32) -> ()` |
| 220 | `ALIl.m1gc` | func | `(i32 i32) -> ()` |
| 221 | `ALIl.kQW3` | func | `(i32 i32) -> (i32)` |
| 222 | `ALIl.zNq8` | func | `(i32 i32) -> ()` |
| 223 | `ALIl.GBtJ` | func | `(i32 i32) -> ()` |
| 224 | `ALIl.bOUM` | func | `(i32 i32) -> ()` |
| 225 | `ALIl.s7OJ` | func | `(i32 i32) -> ()` |
| 226 | `ALIl.exGl` | func | `(i32 i32) -> ()` |
| 227 | `ALIl.G6XE` | func | `(i32 i32) -> ()` |
| 228 | `ALIl.pO7I` | func | `(i32 i32) -> ()` |
| 229 | `ALIl.jbA9` | func | `(i32 i32 f64 f64) -> (i32)` |
| 230 | `ALIl.hS37` | func | `(i32) -> (i32)` |
| 231 | `ALIl.KtY2` | func | `(i32) -> ()` |
| 232 | `ALIl.Wdlm` | func | `(i32 f64) -> ()` |
| 233 | `ALIl.w5c6` | func | `(i32 i32) -> ()` |
| 234 | `ALIl.gXDm` | func | `(i32 i32) -> ()` |
| 235 | `ALIl.PEv9` | func | `(i32 i32 i32) -> ()` |
| 236 | `ALIl.iH2v` | func | `(i32 i32) -> (i32)` |
| 237 | `ALIl.prDB` | func | `(i32 i32) -> ()` |
| 238 | `ALIl.ywAW` | func | `(i32 i32) -> ()` |
| 239 | `ALIl.fuII` | func | `(i32 i32) -> ()` |
| 240 | `ALIl.wPoG` | func | `(i32 i32 i32) -> ()` |
| 241 | `ALIl.JAcO` | func | `(i32 i32) -> ()` |
| 242 | `ALIl.DUey` | func | `(i32 i32) -> ()` |
| 243 | `ALIl.ncaL` | func | `(i32 i32) -> ()` |
| 244 | `ALIl.xN1j` | func | `(i32 i32 i32) -> ()` |
| 245 | `ALIl.WrG3` | func | `(i32 i32) -> ()` |
| 246 | `ALIl.MaWU` | func | `(i32 i32) -> ()` |
| 247 | `ALIl.rEYi` | func | `(i32 i32 i32) -> ()` |
| 248 | `ALIl.OVS7` | func | `(i32 i32) -> (i32)` |
| 249 | `ALIl.GONi` | func | `(i32 i32) -> ()` |
| 250 | `ALIl.kREf` | func | `(i32 i32 i32) -> ()` |
| 251 | `ALIl.s9O5` | func | `(i32 i32) -> ()` |
| 252 | `ALIl.NMS2` | func | `(i32 f64) -> ()` |
| 253 | `ALIl.VOzL` | func | `(i32 i32) -> ()` |
| 254 | `ALIl.XIzd` | func | `(i32 f64) -> ()` |
| 255 | `ALIl.SiDU` | func | `(i32 i32 i32) -> ()` |
| 256 | `ALIl.z1Qm` | func | `(i32 i32) -> ()` |
| 257 | `ALIl.GUdd` | func | `(i32 i32 i32) -> ()` |
| 258 | `ALIl.VWwy` | func | `(i32 i32) -> ()` |
| 259 | `ALIl.Vcpm` | func | `(i32 i32) -> ()` |
| 260 | `ALIl.VooB` | func | `(i32 i32) -> ()` |
| 261 | `ALIl.q18A` | func | `(i32 i32 i32) -> ()` |
| 262 | `ALIl.pT9Z` | func | `(i32 i32) -> ()` |
| 263 | `ALIl.qCcq` | func | `(i32 i32) -> ()` |
| 264 | `ALIl.MHyq` | func | `(i32 i32) -> ()` |
| 265 | `ALIl.YzA6` | func | `(i32 i32) -> ()` |
| 266 | `ALIl.f5EE` | func | `(i32 f32) -> ()` |
| 267 | `ALIl.yQtV` | func | `(i32 f32) -> ()` |
| 268 | `ALIl.D4Jc` | func | `(i32 i32) -> ()` |
| 269 | `ALIl.jJca` | func | `(i32 i32) -> ()` |
| 270 | `ALIl.TBOI` | func | `(i32 i32) -> ()` |
| 271 | `ALIl.Jocf` | func | `(i32 i32) -> ()` |
| 272 | `ALIl.JdmP` | func | `(i32 i32) -> ()` |
| 273 | `ALIl.kBOJ` | func | `(i32 i32) -> ()` |
| 274 | `ALIl.I45K` | func | `(i32 i32) -> ()` |
| 275 | `ALIl.afDA` | func | `(i32 i32) -> ()` |
| 276 | `ALIl.jXY8` | func | `(i32 i32) -> ()` |
| 277 | `ALIl.ZgOT` | func | `(i32 i32) -> ()` |
| 278 | `ALIl.zqf4` | func | `(i32 i32) -> ()` |
| 279 | `ALIl.a3wy` | func | `(i32 i32) -> ()` |
| 280 | `ALIl.XLey` | func | `(i32 i32) -> ()` |
| 281 | `ALIl.ApnO` | func | `(i32 i32) -> ()` |
| 282 | `ALIl.gNpr` | func | `(i32 i32) -> ()` |
| 283 | `ALIl.Qjkl` | func | `(i32 i32) -> ()` |
| 284 | `ALIl.tFVl` | func | `(i32 i32) -> ()` |
| 285 | `ALIl.iva7` | func | `(i32 i32) -> ()` |
| 286 | `ALIl.wgzX` | func | `(i32 i32 i32) -> ()` |
| 287 | `ALIl.Qz8j` | func | `(i32 i32 i32) -> ()` |
| 288 | `ALIl.HAwa` | func | `(i32 i32) -> ()` |
| 289 | `ALIl.tPlc` | func | `(i32 i32) -> ()` |
| 290 | `ALIl.bZgj` | func | `(i32 i32) -> ()` |
| 291 | `ALIl.CPX8` | func | `(i32 i32) -> ()` |
| 292 | `ALIl.ldjw` | func | `(i32 i32) -> ()` |
| 293 | `ALIl.gb9s` | func | `(i32 i32) -> ()` |
| 294 | `ALIl.Eyag` | func | `(i32 i32) -> ()` |
| 295 | `ALIl.M86O` | func | `(i32 i32) -> ()` |
| 296 | `ALIl.JGkj` | func | `(i32 i32) -> ()` |
| 297 | `ALIl.k6g5` | func | `(i32 i32) -> ()` |
| 298 | `ALIl.hYM9` | func | `(i32 i32) -> ()` |
| 299 | `ALIl.TuxI` | func | `(i32 i32) -> (i32)` |
| 300 | `ALIl.Z7aW` | func | `(i32 i32) -> ()` |
| 301 | `ALIl.Oo75` | func | `(i32 i32 i32) -> ()` |
| 302 | `ALIl.s7gA` | func | `(i32 i32) -> ()` |
| 303 | `ALIl.tZw0` | func | `(i32 i32) -> ()` |
| 304 | `ALIl.aeud` | func | `(i32 i32) -> ()` |
| 305 | `ALIl.W0QW` | func | `(i32 i32 i32) -> ()` |
| 306 | `ALIl.pwMI` | func | `(i32 i32) -> (i32)` |
| 307 | `ALIl.GZem` | func | `(i32 i32 i32) -> ()` |
| 308 | `ALIl.bbxa` | func | `(i32 i32 i32) -> ()` |
| 309 | `ALIl.zx9H` | func | `(i32 i32) -> ()` |
| 310 | `ALIl.feWQ` | func | `(i32 i32) -> ()` |
| 311 | `ALIl.E4ep` | func | `(i32 i32) -> ()` |
| 312 | `ALIl.I6RC` | func | `(i32 i32) -> ()` |
| 313 | `ALIl.Kkqq` | func | `(i32 i32) -> (i32)` |
| 314 | `ALIl.ltec` | func | `(i32) -> (i32)` |
| 315 | `ALIl.MJq6` | func | `(i32) -> (i32)` |
| 316 | `ALIl.e2e5` | func | `(i32) -> (i32)` |
| 317 | `ALIl.pwq5` | func | `(i32) -> (i32)` |
| 318 | `ALIl.bbip` | func | `(i32) -> (i32)` |
| 319 | `ALIl.L9S8` | func | `(i32) -> (i32)` |
| 320 | `ALIl.Na4b` | func | `(i32) -> (i32)` |
| 321 | `ALIl.ePXS` | func | `(i32) -> (i32)` |
| 322 | `ALIl.Z7yT` | func | `(i32) -> (i32)` |
| 323 | `ALIl.NpUs` | func | `(i32) -> (i32)` |
| 324 | `ALIl.v7w1` | func | `(i32) -> (i32)` |
| 325 | `ALIl.F7VJ` | func | `(i32) -> (i32)` |
| 326 | `ALIl.lTyd` | func | `(i32) -> (i32)` |
| 327 | `ALIl.rKwb` | func | `(i32) -> (i32)` |
| 328 | `ALIl.rfaa` | func | `(i32) -> (f64)` |
| 329 | `ALIl.DtIt` | func | `(i32) -> (f64)` |
| 330 | `ALIl.bF67` | func | `(i32) -> (i32)` |
| 331 | `ALIl.kWxg` | func | `(i32) -> (f64)` |
| 332 | `ALIl.wnq4` | func | `(i32) -> (i32)` |
| 333 | `ALIl.UThR` | func | `(i32) -> (i32)` |
| 334 | `ALIl.qG2Z` | func | `(i32) -> (i32)` |
| 335 | `ALIl.Gkj7` | func | `(i32) -> (i32)` |
| 336 | `ALIl.MwYE` | func | `(i32) -> (i32)` |
| 337 | `ALIl.MC00` | func | `(i32) -> (i32)` |
| 338 | `ALIl.Izbv` | func | `(i32) -> (i32)` |
| 339 | `ALIl.x4Cp` | func | `(i32) -> (i32)` |
| 340 | `ALIl.GUtm` | func | `(i32) -> (i32)` |
| 341 | `ALIl.Osn3` | func | `(i32) -> (i32)` |
| 342 | `ALIl.gB19` | func | `(i32) -> (i32)` |
| 343 | `ALIl.Vp31` | func | `(i32) -> (i32)` |
| 344 | `ALIl.DJNT` | func | `(i32) -> (i32)` |
| 345 | `ALIl.LqBF` | func | `(i32 i32 i32) -> (i32)` |
| 346 | `ALIl.do2L` | func | `() -> (i32)` |
| 347 | `ALIl.tl62` | func | `(i32 i32) -> ()` |
| 348 | `ALIl.vRJf` | func | `(i32 i32 i32) -> ()` |
| 349 | `ALIl.XPYP` | func | `(i32 i32 i32) -> ()` |
| 350 | `ALIl.f7RA` | func | `(i32 i32) -> (i32)` |
| 351 | `ALIl.q5vU` | func | `(i32) -> (i32)` |
| 352 | `ALIl.PSs2` | func | `(i32 i32 i32) -> (i32)` |
| 353 | `ALIl.TYiM` | func | `(i32) -> ()` |
| 354 | `ALIl.Z5BW` | func | `(i32) -> (i32)` |
| 355 | `ALIl.tJTy` | func | `(i32 i32) -> ()` |
| 356 | `ALIl.LM6M` | func | `(i32) -> (i32)` |
| 357 | `ALIl.c10V` | func | `(i32) -> (i32)` |
| 358 | `ALIl.qZgL` | func | `(i32) -> (i32)` |
| 359 | `ALIl.mHMl` | func | `(i32) -> (i32)` |
| 360 | `ALIl.pgIH` | func | `(i32) -> (i32)` |
| 361 | `ALIl.BIM5` | func | `(i32 i32) -> ()` |
| 362 | `ALIl.XeVI` | func | `(i32 i32) -> ()` |
| 363 | `ALIl.rRVX` | func | `(i32 i32) -> ()` |
| 364 | `ALIl.kmWf` | func | `(i32 i32) -> ()` |
| 365 | `ALIl.ZIGT` | func | `(i32 i32) -> ()` |
| 366 | `ALIl.gRE1` | func | `(i32 i32) -> ()` |
| 367 | `ALIl.k3l5` | func | `(i32 i32) -> ()` |
| 368 | `ALIl.wIvA` | func | `(i32 i32 i32) -> ()` |
| 369 | `ALIl.bwEE` | func | `(i32 i32) -> ()` |
| 370 | `ALIl.nnpu` | func | `(i32 i32) -> (i32)` |
| 371 | `ALIl.b9Sj` | func | `(i32) -> (i32)` |
| 372 | `ALIl.AR8M` | func | `(i32) -> (i32)` |
| 373 | `ALIl.Udbr` | func | `(i32 i32) -> ()` |
| 374 | `ALIl.wPbh` | func | `(i32) -> (i32)` |
| 375 | `ALIl.P1Db` | func | `(i32 f64 f64) -> (i32)` |
| 376 | `ALIl.M3FO` | func | `(i32 i32 i32) -> (i32)` |
| 377 | `ALIl.SOxt` | func | `(i32 i32) -> ()` |
| 378 | `ALIl.X8LG` | func | `(i32) -> (i32)` |
| 379 | `ALIl.Ks0U` | func | `(i32) -> (i32)` |
| 380 | `ALIl.D7eT` | func | `(i32) -> (i32)` |
| 381 | `ALIl.h1LX` | func | `(i32) -> (i32)` |
| 382 | `ALIl.gIKx` | func | `(i32) -> (i32)` |
| 383 | `ALIl.hqSa` | func | `(i32) -> (i32)` |
| 384 | `ALIl.JSNT` | func | `(i32 i32) -> ()` |
| 385 | `ALIl.zxj2` | func | `(i32 i32) -> (i32)` |
| 386 | `ALIl.vhNH` | func | `(i32 i32) -> (i32)` |
| 387 | `ALIl.Qoy1` | func | `(i32 i32) -> (i32)` |
| 388 | `ALIl.moWk` | func | `(i32 i32) -> (i32)` |
| 389 | `ALIl.i7S3` | func | `(i32 i32) -> (i32)` |
| 390 | `ALIl.H47F` | func | `(i32 i32) -> (i32)` |
| 391 | `ALIl.SVTU` | func | `(f64) -> (i32)` |
| 392 | `ALIl.Yfkt` | func | `(i32 i32) -> (i32)` |
| 393 | `ALIl.Da2x` | func | `(i32 i32) -> (i32)` |

## Exports

170 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `buQo` | func | 2218 | `(i32 i32) -> (i32)` |
| `jRIC` | func | 1856 | `(i32) -> (i32)` |
| `JlIk` | func | 1507 | `(i32 f64 f64) -> (i32)` |
| `c9sf` | func | 2654 | `(i32) -> (i32)` |
| `zUjt` | func | 2097 | `(i32) -> (i32)` |
| `e4CW` | func | 1962 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `lmA5` | func | 1288 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `ZYVu` | func | 2638 | `(i32) -> (i32)` |
| `PwXe` | func | 1336 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `XXpE` | func | 2001 | `(i32 i32 f64 f64 f64) -> ()` |
| `msoI` | func | 1716 | `(i32 i32) -> (i32)` |
| `qMK1` | func | 1379 | `(i32 i32 i32) -> (i32)` |
| `M9kd` | func | 988 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `ko13` | func | 951 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `ziYA` | func | 2662 | `(i32 i32) -> (i32)` |
| `WW7h` | func | 1360 | `(i32 i32) -> (i32)` |
| `gnGP` | func | 2630 | `(i32) -> (i32)` |
| `eNfJ` | func | 1623 | `(i32 i32) -> (i32)` |
| `uN5H` | func | 3263 | `(i32 i32 i32) -> (i32)` |
| `xYzc` | func | 3200 | `(i32 i32) -> (i32 i32)` |
| `RbMG` | func | 3140 | `() -> ()` |
| `hnHx` | func | 2966 | `(i32) -> (i32)` |
| `uj0b` | func | 2669 | `(i32) -> (i32)` |
| `HQy7` | func | 3213 | `(i32) -> (i32 i32)` |
| `U4nQ` | func | 3292 | `() -> (i32)` |
| `L6J2` | func | 2636 | `(i32) -> (i32)` |
| `GNWi` | func | 2331 | `(i32 i32) -> (i32)` |
| `X8p1` | func | 2432 | `(i32 i32) -> ()` |
| `Aa2S` | func | 2942 | `(i32) -> (i32)` |
| `R9Jv` | func | 1945 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `nEGH` | func | 2647 | `(i32 i32) -> ()` |
| `eRo9` | func | 3191 | `(i32 i32 i32) -> (i32 i32)` |
| `NjfQ` | func | 2670 | `(i32) -> (i32)` |
| `p5ms` | func | 2160 | `(i32 f64) -> (i32)` |
| `sMLp` | func | 1508 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `IsHz` | func | 1010 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `hYYq` | func | 2487 | `(i32 i32) -> (i32)` |
| `VQ70` | func | 3167 | `(i32 i32 i32 i32) -> (i32)` |
| `jvIy` | func | 2614 | `(i32 i32) -> ()` |
| `EnI2` | func | 848 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `tMrx` | func | 2025 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `YXkE` | func | 2950 | `(i32) -> (i32)` |
| `xuUa` | func | 2977 | `(i32) -> (i32)` |
| `OlLw` | func | 2405 | `(i32 f64) -> (i32)` |
| `t3iE` | global | 1 | `` |
| `mY1A` | func | 3265 | `(i32 i32 i32) -> ()` |
| `GkWU` | func | 2522 | `(i32 i32) -> (i32)` |
| `fRl5` | func | 3191 | `(i32 i32 i32) -> (i32 i32)` |
| `I8ks` | global | 2 | `` |
| `AAxR` | func | 3204 | `(i32 i32) -> (i32 i32)` |
| `qnZa` | func | 2615 | `(i32) -> (i32)` |
| `hDT5` | func | 3191 | `(i32 i32 i32) -> (i32 i32)` |
| `PmZa` | func | 1833 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `o2V5` | func | 2755 | `() -> (i32)` |
| `P7mH` | func | 1455 | `(i32 i32 i32) -> (i32)` |
| `uRiz` | func | 2700 | `(i32 i32) -> ()` |
| `GWvK` | func | 2632 | `(i32) -> (i32)` |
| `kikh` | func | 1329 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `V7d0` | func | 3215 | `(i32) -> (i32 i32)` |
| `XANU` | func | 2660 | `(i32) -> (i32)` |
| `x1n9` | func | 1874 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `nChi` | func | 3012 | `(i32) -> (i32)` |
| `Arsa` | func | 1405 | `(i32) -> (i32)` |
| `juiF` | func | 2822 | `(i32 i32) -> ()` |
| `BqLP` | func | 3331 | `(i32) -> ()` |
| `ECXq` | func | 989 | `(i32 i32) -> (i32)` |
| `qNp3` | func | 2651 | `(i32) -> (i32)` |
| `Ob4q` | func | 2720 | `() -> (i32)` |
| `GVKK` | func | 1685 | `(i32 i32 i32 i32) -> (i32)` |
| `b2G0` | func | 3216 | `(i32) -> (i32 i32)` |
| `oAM2` | func | 1413 | `(i32 i32) -> (i32)` |
| `RBC3` | func | 2353 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `KDpr` | func | 1731 | `(i32 f64 f64 f64) -> (i32)` |
| `rsnE` | func | 3191 | `(i32 i32 i32) -> (i32 i32)` |
| `ty9R` | func | 2637 | `(i32) -> (i32)` |
| `mCb0` | func | 1532 | `(i32 i32) -> (i32)` |
| `adTj` | func | 3230 | `() -> (i32 i32)` |
| `Umfg` | func | 1880 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `cXF6` | func | 3202 | `(i32 i32) -> (i32 i32)` |
| `Jm7e` | func | 3201 | `(i32 i32) -> (i32 i32)` |
| `TtZE` | func | 1636 | `(i32 i32) -> (i32)` |
| `rUSl` | func | 768 | `(i32 i32) -> (i32)` |
| `UA0t` | func | 713 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `px1A` | func | 1769 | `(i32 i32 i32 i32) -> (i32)` |
| `FYvG` | func | 862 | `(i32 i32 i32) -> (i32)` |
| `j6uN` | func | 2634 | `(i32) -> (i32)` |
| `XAgt` | func | 1652 | `(i32 i32) -> (i32)` |
| `frer` | func | 3199 | `(i32 i32) -> (i32 i32)` |
| `rvlR` | func | 3203 | `(i32 i32) -> (i32 i32)` |
| `N3yS` | func | 3190 | `(i32 i32 i32) -> (i32 i32)` |
| `FGfg` | func | 3214 | `(i32) -> (i32 i32)` |
| `XTcO` | func | 3382 | `(i32) -> ()` |
| `ft5b` | func | 3160 | `(i32 i32) -> (i32)` |
| `I2VT` | func | 1566 | `() -> (i32)` |
| `RjFp` | func | 1506 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `memory` | memory | 0 | `` |
| `QzlA` | func | 2465 | `(i32 i32 i32 i32) -> ()` |
| `Vl6Z` | func | 3377 | `() -> (f64)` |
| `EzQ3` | func | 3322 | `(i32 i32 i32) -> ()` |
| `c2EX` | func | 2565 | `(i32) -> (i32)` |
| `DLWA` | func | 2633 | `(i32) -> (i32)` |
| `gmZ7` | func | 3381 | `(i32) -> (i32)` |
| `W9hM` | func | 3212 | `(i32) -> (i32 i32)` |
| `Sq7e` | func | 2635 | `(i32) -> ()` |
| `xdLv` | func | 2033 | `(i32) -> ()` |
| `p8uD` | func | 1615 | `(i32) -> (i32)` |
| `NLMN` | func | 3211 | `(i32) -> (i32 i32)` |
| `nWlz` | func | 2836 | `(i32 i32) -> ()` |
| `Lga1` | func | 1330 | `(i32 i32 i32 i32) -> (i32)` |
| `lHOY` | func | 2754 | `(i32 i32) -> ()` |
| `aSIo` | func | 3416 | `(i32) -> ()` |
| `z9Uc` | func | 1608 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `KWep` | func | 2631 | `(i32) -> (i32)` |
| `PpKi` | func | 1727 | `(i32 i32) -> ()` |
| `BylI` | func | 2583 | `(i32) -> (i32)` |
| `eVyi` | func | 1559 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `Oimj` | func | 1978 | `(i32 i32 i32 i32) -> (i32)` |
| `sB4w` | func | 3405 | `() -> (i32)` |
| `kZON` | func | 1569 | `(i32) -> (i32)` |
| `Aixf` | func | 2538 | `(i32 i32 i32 i32) -> (i32)` |
| `Up10` | func | 2485 | `(i32 i32) -> (i32)` |
| `uk7h` | func | 1384 | `(i32 i32 i32) -> ()` |
| `GShv` | func | 2099 | `(i32 i32 i32 i32) -> ()` |
| `Vvhf` | func | 2533 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64 i32 i32) -> (i32)` |
| `Mnup` | func | 1653 | `(i32 i32) -> (i32)` |
| `Pywg` | func | 2018 | `(i32 i32) -> (i32)` |
| `iwUJ` | func | 1655 | `(i32 f64) -> (f64)` |
| `Yt9M` | func | 3254 | `(i32 i32 i32 i32) -> ()` |
| `Bl73` | func | 671 | `(i32 i32 i32) -> (i32)` |
| `qBdX` | func | 2292 | `(i32 i32) -> (i32)` |
| `PT6M` | func | 2652 | `(i32) -> (i32)` |
| `wAHH` | func | 1955 | `() -> (i32)` |
| `Oh2T` | func | 1438 | `(i32) -> ()` |
| `btZQ` | func | 809 | `(i32 i32) -> (i32)` |
| `lAMr` | func | 845 | `(i32) -> (i32)` |
| `IgVT` | func | 2629 | `(i32) -> (i32)` |
| `k3xo` | func | 3333 | `() -> ()` |
| `v9tj` | func | 3228 | `() -> (i32 i32)` |
| `QEpT` | func | 1229 | `(i32 i32) -> (i32)` |
| `unpH` | func | 1665 | `(i32 i32 i32) -> (i32)` |
| `pytD` | func | 2404 | `(i32 i32) -> ()` |
| `Rm9j` | func | 3406 | `() -> (i32)` |
| `qVAS` | func | 2486 | `(i32 i32) -> (i32)` |
| `LMU3` | func | 1795 | `(i32) -> ()` |
| `Dy9l` | func | 1614 | `(i32 i32 i32 i32) -> (i32)` |
| `xgRV` | func | 2079 | `(i32) -> (i32)` |
| `s0yu` | func | 2661 | `(i32 i32) -> (i32)` |
| `gXeM` | func | 2671 | `(i32) -> (i32)` |
| `prlu` | func | 785 | `(i32 i32) -> (i32)` |
| `AUIy` | func | 2133 | `(i32 i32) -> ()` |
| `KsKV` | func | 1893 | `(i32 i32) -> (i32)` |
| `iSYj` | func | 2194 | `(i32 i32) -> ()` |
| `xTJ0` | func | 3198 | `(i32 i32) -> (i32 i32)` |
| `u2kw` | func | 2988 | `(i32) -> ()` |
| `GhD8` | func | 3229 | `() -> (i32 i32)` |
| `DEdi` | func | 2488 | `(i32 i32) -> (i32)` |
| `uCPA` | func | 2628 | `(i32) -> (f64)` |
| `OOP0` | func | 1022 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `Fm4j` | func | 2007 | `(i32 i32) -> ()` |
| `WkPQ` | func | 2735 | `(i32) -> ()` |
| `xria` | func | 2719 | `(i32) -> ()` |
| `yMkN` | func | 2653 | `(i32 i32) -> ()` |
| `z4lb` | func | 779 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `T4AR` | func | 3401 | `(f64) -> (f64)` |
| `GbdE` | func | 1589 | `(i32 i32 i32 i32) -> ()` |
| `NRjT` | func | 2177 | `(i32 f64 f64 f64) -> (i32)` |
| `GjEx` | func | 3173 | `(i32 i32) -> ()` |
| `tm1C` | func | 842 | `(i32 i32 i32 i32) -> (i32)` |
| `dXZ9` | func | 1230 | `(i32 i32) -> ()` |
| `Z1cL` | func | 1442 | `(i32 i32) -> (i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 845 · max 845
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2257920, `i32` = i32.const 2258484

## Functions

- 3,025 bodies · 4,142,840 code bytes · avg 1.3 KB
- instruction scan: 3,025 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 170 |
| <= 64 bytes | 113 |
| <= 128 bytes | 277 |
| <= 256 bytes | 399 |
| <= 512 bytes | 687 |
| <= 1024 bytes | 606 |
| <= 2048 bytes | 429 |
| <= 4096 bytes | 184 |
| <= 8192 bytes | 97 |
| <= 16384 bytes | 27 |
| > 16384 bytes | 36 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32 i32) -> ()` | 150 | 117,778 | 56,609 | local.get×16100, i32.const×6734, i32.add×3268, local.set×3248, i32.load×3016 |
| 1 | `(i32 i32 i32 i32) -> ()` | 218 | 195,037 | 88,336 | local.get×25973, i32.const×9814, i32.load×5552, local.set×4795, local.tee×4566 |
| 2 | `(i32 i32 i32 i32 i32 i32) -> ()` | 132 | 56,258 | 25,605 | local.get×7564, i32.const×3391, local.set×1401, i32.add×1293, i32.load×1168 |
| 3 | `(i32 i32) -> ()` | 105 | 36,615 | 16,581 | local.get×4597, i32.const×1665, local.set×977, local.tee×845, i32.load×782 |
| 4 | `(i32 i32) -> ()` | 58 | 29,792 | 14,312 | local.get×4209, i32.const×1738, i32.load×1042, local.set×931, i32.add×820 |
| 5 | `(i32 i32 i32) -> ()` | 66 | 30,661 | 13,617 | local.get×3991, i32.const×1839, i32.load×847, i32.add×623, local.tee×591 |
| 6 | `(i32 i32) -> ()` | 90 | 26,046 | 12,563 | local.get×3702, i32.const×1379, local.set×779, i32.load×721, local.tee×698 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 135 | 32,562 | 16,141 | local.get×4566, i32.const×2205, local.set×1141, i32.add×1062, local.tee×800 |
| 8 | `(i32 i32 i32 i32 i32 i32) -> ()` | 170 | 23,746 | 11,210 | local.get×3269, i32.const×1369, local.set×657, br_if×494, i32.load×485 |
| 9 | `(i32 i32 i32 i32 i32) -> ()` | 58 | 21,491 | 10,529 | local.get×2903, i32.const×1493, local.set×728, i32.add×591, local.tee×504 |
| 10 | `(i32 i32 i32 i32) -> ()` | 105 | 26,393 | 12,764 | local.get×3784, i32.const×1615, local.set×985, i32.add×682, i32.load×663 |
| 12 | `(i32 i32 i32 i32) -> ()` | 53 | 24,505 | 11,634 | local.get×3005, i32.const×1276, local.tee×731, end×592, i32.load×586 |
| 14 | `(i32 i32 i32 i32 i32 i32) -> ()` | 125 | 19,810 | 8,875 | local.get×2493, i32.const×1111, local.set×430, local.tee×385, i32.load×382 |
| 18 | `(i32 i32) -> ()` | 96 | 31,835 | 14,861 | local.get×4482, i32.const×1910, i32.add×763, local.set×692, i32.load×669 |
| 19 | `(i32 i32 i64 i32 i32 i64 i32 i32) -> ()` | 106 | 20,589 | 7,881 | local.get×2959, i32.const×902, i64.store×835, i32.store×633, i64.const×483 |
| 22 | `(i32 i32) -> ()` | 82 | 29,024 | 13,043 | local.get×4618, i32.const×1456, i32.store×702, i32.add×689, local.tee×645 |
| 23 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 64 | 24,318 | 11,211 | local.get×2683, i32.const×1714, local.set×822, end×665, block×466 |
| 26 | `(i32 i32 i32 i32 i32) -> ()` | 68 | 22,818 | 10,630 | local.get×3348, i32.const×1245, local.tee×735, i32.add×431, local.set×341 |
| 43 | `(i32 i32 i32 i32 i32) -> ()` | 82 | 27,582 | 12,950 | local.get×3686, i32.const×1878, i32.add×765, local.set×717, end×580 |
| 66 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 112 | 27,605 | 13,066 | local.get×3810, i32.const×1687, i32.load×857, local.set×788, i32.add×672 |
| 200 | `(i32 i32) -> ()` | 10 | 30,134 | 14,535 | local.get×5127, i32.load×1394, i32.const×1130, end×911, i32.add×829 |
| 220 | `(i32) -> ()` | 19 | 23,308 | 10,931 | local.get×2739, i32.load×1499, i32.const×1189, local.tee×1013, end×857 |
| 730 | `(i32 i32) -> ()` | 139 | 42,975 | 20,266 | local.get×5275, i32.const×2347, local.tee×1198, i32.add×1066, local.set×1006 |
| 731 | `(i32 i32 i32 i32) -> ()` | 54 | 21,809 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 1046 | `(i32 i32) -> (i32)` | 40 | 20,198 | 7,815 | local.get×2521, i32.const×859, i64.store×586, i32.load×393, local.set×358 |
| 1624 | `(i32 i32) -> (i32)` | 182 | 55,135 | 19,838 | local.get×6600, i32.const×2596, i64.store×1935, i64.const×1087, i64.load×1068 |
| 2030 | `(i32 i32) -> ()` | 111 | 39,749 | 17,590 | local.get×5165, i32.const×1655, local.set×898, local.tee×741, end×677 |
| 2682 | `(i32 i32) -> ()` | 398 | 142,193 | 64,164 | local.get×18413, i32.const×8006, local.set×3828, i32.load×3150, end×2805 |
| 2973 | `(i32 i32 i32 i32) -> ()` | 137 | 31,379 | 14,285 | local.get×4258, i32.const×1517, local.tee×742, local.set×690, br_if×632 |
| 2992 | `(i32 i32) -> ()` | 143 | 33,660 | 15,072 | local.get×4234, i32.const×1988, local.set×803, local.tee×732, i32.add×689 |

## Embedded strings (data segments)

60 printable strings ≥6 chars; largest:

```
beaver_lumberjackchefdwarf_blue_hairdwarf_braided_hairdwarf_childdwarf_forked_bearddwarf_ginger_bearddwarf_grey_bearddwarf_hair_bunsdwarf_purple_bearddwarf_red_hairdwarf_short_beardfarmerfarmer_gillfi
DEEJJJJJJHHHHEEDDDDDDHHEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDDEEDEEEEEEDEDEDHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
ZombieGrunt1ZombieGrunt2ZombieGrunt3ZombieHurt1ZombieHurt2ZombieHurt3ZombieHurt4bassbassattackbdbearRoar1bearRoar2bearRoar3bearRoar4bearRoar5beepbigDrumSwish1bigDrumSwish2bigDrumSwish3bowbucketEmpty1b
                                                                                                 skin_1_0skin_1_1skin_1_2skin_1_3skin_1_4hat_0_0hat_0_1hat_0_2hat_0_3hat_0_4hat_0_5hat_0_6hat_13_0hat_13
456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;<=>?=>?<@ABCDEFGHIJKIJKH456789:;
vs_mesh_00000020801vs_mesh_00000021801vs_mesh_00000040000vs_mesh_00000040011vs_mesh_00000040030vs_mesh_00000040042vs_mesh_00000040142vs_mesh_000000403c2vs_mesh_00000040801vs_mesh_00000041801vs_mesh_00
alliumaspen_saplingattached_banana_stemattached_banana_stem_wrapperattached_melon_stemattached_melon_stem_wrapperautumn_fernazure_bluetbanana_stembeetroot_plant_stage0beetroot_plant_stage1beetroot_pla
````````````````````````````````^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZYYYYYYYY
0x | SHADER_FLOAT32_ATOMICTEXTURE_FORMAT_16BIT_NORMTEXTURE_COMPRESSION_ASTC_HDRTEXTURE_ADAPTER_SPECIFIC_FORMAT_FEATURESPIPELINE_STATISTICS_QUERYTIMESTAMP_QUERY_INSIDE_ENCODERSTIMESTAMP_QUERY_INSIDE_PA
ue:keydownkeyupmousedownmouseuptouchstarttouchendMouse1Mouse2Mouse3Alt+Left ClickF2F4F5F8F9Digit0Digit1Digit2Digit3Digit4Digit5Digit6Digit7Digit8Digit9KeyQKeyWKeyEKeyRKeyTKeyYKeyUKeyIKeyOKeyPKeyAKeySK
fs_mesh_0040d000053_l7fs_mesh_0040d040073_l3fs_mesh_0040d040073_l7fs_mesh_0040d0b0053_l1fs_mesh_0040d0b0073_l1fs_mesh_0042d040072_l3fs_mesh_0044b0b0073fs_mesh_0044d000053_l3fs_mesh_0044d000053_l7fs_me
targetcolourmaxUpSpeedforceinclinationazimuthturbidityluminancemieCoefficientmieDirectionalGsunPositionvertexTintxCameraOffsetyCameraOffsetzCameraOffsetditheringinfiniteDistanceuseSunPositionrgba(tran
r8unormr8snormr8uintr8sintr16unormr16snormr16uintr16sintr16floatrg8unormrg8snormrg8uintrg8sintr32uintr32sintr32floatrg16unormrg16snormrg16uintrg16sintrg16floatrgba8unormrgba8unorm-srgbrgba8snormrgba8u
schema023canChangeblockReachezBridgingezBridgingGrowMsezToweringezToweringGrowMscrouchingSpeedwalkingSpeedrunningSpeedjumpAmountairJumpCountjumpHoldThrustbunnyhopMaxMultiplierskyBoxminChunkAddDistshow
Aspen LeavesAspen LogAspen SaplingAspen Wood PlanksBarkless Aspen LogBarkless Cedar LogBarkless Jungle LogBarkless Maple LogBarkless Pine LogBarkless Plum LogBlack PlanksBlue PlanksBookshelfBowl of Cr
Acacia LeavesAcacia LogAcacia SaplingAcacia Wood PlanksAlchemy TableBarkless Acacia LogBarkless Birch LogBarkless Dark Oak LogBarkless Elm LogBarkless Oak LogBarkless Spruce LogBirch LeavesBirch LogBi
maxTextureDimension1DmaxTextureDimension2DmaxTextureDimension3DmaxTextureArrayLayersmaxBindGroupsmaxBindGroupsPlusVertexBuffersmaxBindingsPerBindGroupmaxDynamicUniformBuffersPerPipelineLayoutmaxDynami
flag testalpha * baseColor.abaseColor.adiffuseBase.remissiveColormix(diffuseBase.r, 0.0, texels.stripGlow)mix(emissiveColor, vec3f(1.0), texels.stripGlow)bloxdSpGlintTier(v.vEnchantHsvAndTick.xyz)ench
R8UnormR8SnormR8UintR8SintR16UintR16SintR16UnormR16SnormR16FloatRg8UnormRg8SnormRg8UintRg8SintR32UintR32SintR32FloatRg16UintRg16SintRg16UnormRg16SnormRg16FloatRgba8UnormRgba8UnormSrgbRgba8SnormRgba8Ui
standingsittingzombieglidingdrivingsleepingridingShearedSaddledskyblockHeldBossBoxBloxdBlockPersonLeaderboardParticleEmitterTier 1Tier 2Tier 3Tier 4Tier 5PlayerPigCowSheepHorseCamelIron Goofy GolemGol
```

## Opcode histogram (aggregated)

| opcode | count |
|---|---:|
| `local.get` | 554,136 |
| `i32.const` | 232,929 |
| `local.tee` | 101,816 |
| `local.set` | 96,628 |
| `i32.load` | 95,577 |
| `i32.add` | 89,145 |
| `end` | 81,079 |
| `br_if` | 65,304 |
| `i32.store` | 47,910 |
| `block` | 38,038 |
| `i64.store` | 33,701 |
| `i64.const` | 32,914 |
| `if` | 31,075 |
| `call` | 30,902 |
| `i64.load` | 24,933 |
| `i32.sub` | 24,708 |
| `br` | 23,650 |
| `i32.eqz` | 19,516 |
| `select` | 17,179 |
| `i32.and` | 16,537 |
| `i32.shl` | 16,500 |
| `i32.ne` | 16,149 |
| `i32.load8_u` | 15,732 |
| `i32.eq` | 14,050 |
| `i32.store8` | 13,661 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 3,025/3,025 (degraded: 0)
