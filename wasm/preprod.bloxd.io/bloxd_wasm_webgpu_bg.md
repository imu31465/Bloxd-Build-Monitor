# WASM module: `bloxd_wasm_webgpu_bg`

> environment **preprod.bloxd.io** · build `bbb6l5.0244a119` · analyzed 2026-11-21T12:37:15+09:00
> source: https://preprod.bloxd.io/static/media/bloxd_wasm_webgpu_bg.c06f463a9498d81676ed.wasm
> 5,005,524 bytes (4.8 MB) · sha256 `72b5e9034b38cfcf…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,878 / 390 |
| Exports / imports | 157 / 390 |
| Code bytes (function bodies) | 3,972,729 (3.8 MB) |
| Total local variables | 30,199 |
| Instructions (scanable bodies) | 1,860,413 |
| Data segments / bytes | 3,386 / 988,050 |
| Element segments / entries | 1 / 820 |
| Memories / tables / globals | 1 / 1 / 3 |
| name-section module id | `9fa0b7ff56f989f9.12057` |
| Sections | 12 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,472 | 172 |
| 2 | import | 4,682 | 390 |
| 3 | function | 2,924 | 2878 |
| 4 | table | 7 | 1 |
| 5 | memory | 5 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,257 | 157 |
| 9 | element | 1,647 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 3,977,983 | 2878 |
| 11 | data | 1,015,448 | 3386 |
| 0 | custom:name | 30 | — |

## Types

172 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32) -> ()` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

390 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `tDeM.ymuc` | func | `(i32) -> (i32)` |
| 1 | `tDeM.Q8c5` | func | `(i32) -> (f64)` |
| 2 | `tDeM.WMI0` | func | `() -> (i32)` |
| 3 | `tDeM.QiaJ` | func | `(i32 i32 i32) -> (i32)` |
| 4 | `tDeM.S1rK` | func | `(i32) -> ()` |
| 5 | `tDeM.d0l2` | func | `(i32 i32) -> (i32)` |
| 6 | `tDeM.JJB6` | func | `(i32) -> (i32)` |
| 7 | `tDeM.LZmL` | func | `(i32 i32 i32) -> (i32)` |
| 8 | `tDeM.rSsM` | func | `(i32 i32 i32 i32) -> (i32)` |
| 9 | `tDeM.K6GR` | func | `(i32) -> (i32)` |
| 10 | `tDeM.fpRY` | func | `(i32 i32) -> ()` |
| 11 | `tDeM.dSLK` | func | `(i32 i32) -> ()` |
| 12 | `tDeM.SiLC` | func | `(i32 i32 i32 i32) -> (i32)` |
| 13 | `tDeM.qddH` | func | `(i32 i32) -> (i32)` |
| 14 | `tDeM.Fcu9` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 15 | `tDeM.vwaf` | func | `(i32) -> (i32)` |
| 16 | `tDeM.Z29u` | func | `(i32 i32) -> (i32)` |
| 17 | `tDeM.Qy7o` | func | `(i32 i32) -> (i32)` |
| 18 | `tDeM.OqwC` | func | `(i32 i32) -> ()` |
| 19 | `tDeM.h2GL` | func | `(i32) -> (i32)` |
| 20 | `tDeM.rKSM` | func | `(i32) -> (i32)` |
| 21 | `tDeM.CkxK` | func | `(i32 i32 i32) -> ()` |
| 22 | `tDeM.yAWE` | func | `(i32) -> ()` |
| 23 | `tDeM.iPp6` | func | `(i32 i32 i32) -> (i32)` |
| 24 | `tDeM.GCQ5` | func | `(i32) -> (i32)` |
| 25 | `tDeM.itRK` | func | `(i32 i32) -> ()` |
| 26 | `tDeM.dNeJ` | func | `(i32 i32) -> (i32)` |
| 27 | `tDeM.fyvJ` | func | `(i32 i32 i32 i32) -> ()` |
| 28 | `tDeM.Jdey` | func | `(i32) -> (i32)` |
| 29 | `tDeM.UnVp` | func | `(i32) -> (i32)` |
| 30 | `tDeM.uUqT` | func | `(i32) -> (i32)` |
| 31 | `tDeM.fR5b` | func | `(i32 i32 i32) -> (i32)` |
| 32 | `tDeM.lOEH` | func | `(i32) -> (i32)` |
| 33 | `tDeM.Py7d` | func | `(i32) -> (i32)` |
| 34 | `tDeM.THU9` | func | `(i32) -> (i32)` |
| 35 | `tDeM.oOOO` | func | `(i32) -> (i32)` |
| 36 | `tDeM.xUBl` | func | `(i32) -> (i32)` |
| 37 | `tDeM.oKEK` | func | `(i32) -> (i32)` |
| 38 | `tDeM.T7Dq` | func | `(i32) -> ()` |
| 39 | `tDeM.nKgA` | func | `(i32 i32) -> (i32)` |
| 40 | `tDeM.Ydw4` | func | `(i32) -> (i32)` |
| 41 | `tDeM.jTNA` | func | `(i32 i32) -> ()` |
| 42 | `tDeM.yvp5` | func | `() -> (i32)` |
| 43 | `tDeM.bRiA` | func | `(i32 i32) -> (i32)` |
| 44 | `tDeM.APe5` | func | `(i32 i32) -> (i32)` |
| 45 | `tDeM.Xr2S` | func | `(i32) -> (i32)` |
| 46 | `tDeM.ojrl` | func | `(i32) -> (i32)` |
| 47 | `tDeM.xKYB` | func | `(i32) -> (i32)` |
| 48 | `tDeM.NT4v` | func | `(i32 i32) -> ()` |
| 49 | `tDeM.B1eZ` | func | `(i32) -> (i32)` |
| 50 | `tDeM.FsTR` | func | `(i32) -> ()` |
| 51 | `tDeM.tG75` | func | `(i32 i32) -> (i32)` |
| 52 | `tDeM.K3XW` | func | `(i32 i32 i32) -> (i32)` |
| 53 | `tDeM.S0MJ` | func | `(i32 i32 i32) -> ()` |
| 54 | `tDeM.qV2R` | func | `(i32 i32) -> ()` |
| 55 | `tDeM.XU2S` | func | `(i32) -> (i32)` |
| 56 | `tDeM.tECN` | func | `(i32 i32 f64 i32 i32 f64 f64) -> ()` |
| 57 | `tDeM.rcl7` | func | `(i32) -> ()` |
| 58 | `tDeM.Gada` | func | `(i32 i32 f64 i32 f64 f64) -> ()` |
| 59 | `tDeM.a9jA` | func | `(i32) -> ()` |
| 60 | `tDeM.CnNs` | func | `(i32 i32 i32) -> ()` |
| 61 | `tDeM.vkpQ` | func | `(i32 i32) -> ()` |
| 62 | `tDeM.zpvA` | func | `(i32 i32 i32 i32 i32 f64 i32) -> ()` |
| 63 | `tDeM.Ujdr` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 64 | `tDeM.RV0s` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 65 | `tDeM.U1yR` | func | `(i32 i32 f64) -> ()` |
| 66 | `tDeM.rv1j` | func | `(i32) -> (i32)` |
| 67 | `tDeM.NwjW` | func | `(i32 i32) -> ()` |
| 68 | `tDeM.ovsp` | func | `(i32 i32 i32) -> ()` |
| 69 | `tDeM.raaB` | func | `(i32 i32 i32 i32) -> ()` |
| 70 | `tDeM.tscs` | func | `(i32 i32 i32) -> ()` |
| 71 | `tDeM.sEmA` | func | `(i32) -> ()` |
| 72 | `tDeM.K3a2` | func | `(i32 i32) -> ()` |
| 73 | `tDeM.V5Ou` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 74 | `tDeM.yd55` | func | `(i32 f32 f32 f32 f32 f32 f32) -> ()` |
| 75 | `tDeM.PI1a` | func | `(i32 i32 i32) -> ()` |
| 76 | `tDeM.itpS` | func | `(i32 i32 i32 i32 i32 f64 i32) -> ()` |
| 77 | `tDeM.Jp55` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 78 | `tDeM.WDKP` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 79 | `tDeM.FsvF` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 80 | `tDeM.JwZe` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 81 | `tDeM.aKX0` | func | `(i32 i32 i32) -> ()` |
| 82 | `tDeM.NLSv` | func | `(i32 i32) -> (i32)` |
| 83 | `tDeM.iVqq` | func | `(i32) -> (i32)` |
| 84 | `tDeM.QyWU` | func | `(i32 i32) -> (i32)` |
| 85 | `tDeM.QybK` | func | `(i32) -> (i32)` |
| 86 | `tDeM.OXYc` | func | `(i32) -> (i32)` |
| 87 | `tDeM.QeyM` | func | `(i32) -> (i32)` |
| 88 | `tDeM.H9ci` | func | `(i32 i32) -> (i32)` |
| 89 | `tDeM.uqTt` | func | `(i32) -> ()` |
| 90 | `tDeM.zutm` | func | `(i32) -> (i32)` |
| 91 | `tDeM.B24E` | func | `(i32 i32) -> (i32)` |
| 92 | `tDeM.kDz2` | func | `(i32 i32 i32) -> (i32)` |
| 93 | `tDeM.xttc` | func | `(i32 i32 i32) -> ()` |
| 94 | `tDeM.Npc6` | func | `(i32 i32 i32 i32) -> (i32)` |
| 95 | `tDeM.hzZh` | func | `() -> (f64)` |
| 96 | `tDeM.s8WE` | func | `() -> (f64)` |
| 97 | `tDeM.u2im` | func | `(i32 i32) -> ()` |
| 98 | `tDeM.foLz` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 99 | `tDeM.puZY` | func | `(i32) -> (i32)` |
| 100 | `tDeM.kt2C` | func | `(i32) -> (i32)` |
| 101 | `tDeM.dvEL` | func | `() -> (i32)` |
| 102 | `tDeM.wnL0` | func | `() -> (i32)` |
| 103 | `tDeM.P1VZ` | func | `() -> (i32)` |
| 104 | `tDeM.LwoV` | func | `() -> (i32)` |
| 105 | `tDeM.suZH` | func | `(i32 i32) -> (i32)` |
| 106 | `tDeM.WQbY` | func | `(i32) -> ()` |
| 107 | `tDeM.t1Z3` | func | `(i32) -> (i32)` |
| 108 | `tDeM.gGeN` | func | `(i32) -> ()` |
| 109 | `tDeM.xbgT` | func | `(i32 i32) -> ()` |
| 110 | `tDeM.CdB8` | func | `(i32 i32) -> ()` |
| 111 | `tDeM.yITW` | func | `(i32 i32) -> ()` |
| 112 | `tDeM.DVAn` | func | `(i32 f32) -> ()` |
| 113 | `tDeM.kLLb` | func | `(i32 f32) -> ()` |
| 114 | `tDeM.RN4F` | func | `(i32 i32) -> ()` |
| 115 | `tDeM.cNJL` | func | `(i32 i32) -> ()` |
| 116 | `tDeM.UMNb` | func | `(i32 i32) -> ()` |
| 117 | `tDeM.xcQ8` | func | `(i32 i32) -> ()` |
| 118 | `tDeM.OfMa` | func | `(i32 i32 i32) -> ()` |
| 119 | `tDeM.iRkB` | func | `(i32 i32) -> (i32)` |
| 120 | `tDeM.F4KO` | func | `(i32 i32) -> ()` |
| 121 | `tDeM.s7rv` | func | `(i32 i32) -> ()` |
| 122 | `tDeM.VoyI` | func | `(i32 i32) -> ()` |
| 123 | `tDeM.Kk2z` | func | `(i32 i32) -> ()` |
| 124 | `tDeM.BhXF` | func | `(i32 i32) -> ()` |
| 125 | `tDeM.kFZL` | func | `(i32 i32) -> ()` |
| 126 | `tDeM.idV8` | func | `(i32 i32) -> ()` |
| 127 | `tDeM.fRf1` | func | `(i32 i32) -> ()` |
| 128 | `tDeM.oBdr` | func | `(i32 i32) -> ()` |
| 129 | `tDeM.lKMh` | func | `(i32) -> (i32)` |
| 130 | `tDeM.z7UB` | func | `(i32 i32 i32) -> ()` |
| 131 | `tDeM.HQpP` | func | `(i32 i32) -> ()` |
| 132 | `tDeM.FvEq` | func | `(i32 i32) -> ()` |
| 133 | `tDeM.CIFA` | func | `(i32 i32) -> ()` |
| 134 | `tDeM.I5vd` | func | `(i32 i32) -> ()` |
| 135 | `tDeM.XL6u` | func | `(i32 f64) -> ()` |
| 136 | `tDeM.heSi` | func | `(i32 f64) -> ()` |
| 137 | `tDeM.Ok4t` | func | `(i32 i32) -> ()` |
| 138 | `tDeM.AyNk` | func | `(i32 i32 i32) -> ()` |
| 139 | `tDeM.dfxb` | func | `(i32 i32) -> ()` |
| 140 | `tDeM.nD50` | func | `(i32 i32) -> (i32)` |
| 141 | `tDeM.Pe32` | func | `(i32 i32 i32) -> ()` |
| 142 | `tDeM.H3tO` | func | `(i32 i32 i32) -> ()` |
| 143 | `tDeM.D9EF` | func | `(i32 i32) -> (i32)` |
| 144 | `tDeM.K47b` | func | `(i32 i32) -> (i32)` |
| 145 | `tDeM.FU7L` | func | `(i32 i32 i32) -> ()` |
| 146 | `tDeM.YHIh` | func | `(i32 i32 i32) -> ()` |
| 147 | `tDeM.zWQ3` | func | `(i32 i32) -> (i32)` |
| 148 | `tDeM.kQrd` | func | `(i32 i32) -> ()` |
| 149 | `tDeM.ZSac` | func | `(i32 i32) -> ()` |
| 150 | `tDeM.jAm7` | func | `(i32 i32) -> ()` |
| 151 | `tDeM.MJjU` | func | `(i32 i32) -> ()` |
| 152 | `tDeM.XZL0` | func | `(i32 i32) -> ()` |
| 153 | `tDeM.k9rG` | func | `(i32 i32) -> ()` |
| 154 | `tDeM.jiKd` | func | `(i32 i32) -> ()` |
| 155 | `tDeM.OGCa` | func | `(i32 f64) -> ()` |
| 156 | `tDeM.PdgM` | func | `(i32 i32) -> ()` |
| 157 | `tDeM.GyHx` | func | `(i32 i32) -> ()` |
| 158 | `tDeM.leMk` | func | `(i32 i32) -> ()` |
| 159 | `tDeM.nlcJ` | func | `(i32 i32) -> ()` |
| 160 | `tDeM.s6z1` | func | `(i32 i32) -> ()` |
| 161 | `tDeM.Umhy` | func | `(i32 i32) -> ()` |
| 162 | `tDeM.Gkyu` | func | `(i32 i32) -> ()` |
| 163 | `tDeM.AQfP` | func | `(i32 i32) -> ()` |
| 164 | `tDeM.fmxt` | func | `(i32 i32) -> ()` |
| 165 | `tDeM.jaCZ` | func | `(i32 i32 i32) -> ()` |
| 166 | `tDeM.n33s` | func | `(i32 i32 i32) -> ()` |
| 167 | `tDeM.ny3V` | func | `(i32 i32) -> (i32)` |
| 168 | `tDeM.BLbG` | func | `(i32 i32) -> ()` |
| 169 | `tDeM.P68R` | func | `(i32 i32) -> ()` |
| 170 | `tDeM.Rmsq` | func | `(i32 f64) -> ()` |
| 171 | `tDeM.nIEn` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 172 | `tDeM.K5ZA` | func | `(i32 f64) -> ()` |
| 173 | `tDeM.mHzn` | func | `(i32 f64) -> ()` |
| 174 | `tDeM.Tbai` | func | `(i32 f64) -> ()` |
| 175 | `tDeM.AGIi` | func | `(i32 f64) -> ()` |
| 176 | `tDeM.G7TU` | func | `(i32 i32) -> ()` |
| 177 | `tDeM.iBzT` | func | `(i32 i32) -> ()` |
| 178 | `tDeM.qdJS` | func | `(i32 i32) -> ()` |
| 179 | `tDeM.D5nS` | func | `(i32 i32) -> ()` |
| 180 | `tDeM.dJEU` | func | `(i32 i32) -> ()` |
| 181 | `tDeM.sErb` | func | `(i32 i32 i32) -> ()` |
| 182 | `tDeM.FfhO` | func | `(i32 i32) -> ()` |
| 183 | `tDeM.SsCs` | func | `(i32 f32) -> ()` |
| 184 | `tDeM.dfMu` | func | `(i32 i32) -> ()` |
| 185 | `tDeM.SeBa` | func | `(i32 i32) -> ()` |
| 186 | `tDeM.UUBI` | func | `(i32 i32) -> ()` |
| 187 | `tDeM.eCa6` | func | `(i32 i32) -> ()` |
| 188 | `tDeM.Lej0` | func | `(i32 i32) -> ()` |
| 189 | `tDeM.vAgl` | func | `(i32 i32) -> ()` |
| 190 | `tDeM.PKIL` | func | `(i32 i32) -> ()` |
| 191 | `tDeM.LmWS` | func | `(i32 i32) -> ()` |
| 192 | `tDeM.haDt` | func | `(i32 i32) -> ()` |
| 193 | `tDeM.oGqv` | func | `(i32 i32) -> ()` |
| 194 | `tDeM.lsdm` | func | `(i32 i32) -> ()` |
| 195 | `tDeM.Bj1d` | func | `(i32 i32) -> ()` |
| 196 | `tDeM.tDbD` | func | `(i32 i32) -> (i32)` |
| 197 | `tDeM.qhXW` | func | `(i32 i32 i32 i32) -> ()` |
| 198 | `tDeM.megn` | func | `(i32 i32) -> ()` |
| 199 | `tDeM.ZBCN` | func | `(i32 i32 i32) -> ()` |
| 200 | `tDeM.XKGm` | func | `(i32 i32) -> (i32)` |
| 201 | `tDeM.aVTf` | func | `(i32) -> (i32)` |
| 202 | `tDeM.Ubr0` | func | `(i32) -> (i32)` |
| 203 | `tDeM.mOS0` | func | `(i32 i32) -> (i32)` |
| 204 | `tDeM.rpBs` | func | `(i32 i32) -> ()` |
| 205 | `tDeM.VNo8` | func | `(i32 i32) -> ()` |
| 206 | `tDeM.irCH` | func | `(i32 i32) -> ()` |
| 207 | `tDeM.Tlhf` | func | `(i32 i32) -> ()` |
| 208 | `tDeM.ZRmg` | func | `(i32 i32) -> ()` |
| 209 | `tDeM.BJt5` | func | `(i32 i32) -> ()` |
| 210 | `tDeM.Pq3B` | func | `(i32 i32) -> ()` |
| 211 | `tDeM.aAH7` | func | `(i32 i32) -> ()` |
| 212 | `tDeM.EuZz` | func | `(i32 i32 i32) -> ()` |
| 213 | `tDeM.MD82` | func | `(i32 i32) -> ()` |
| 214 | `tDeM.lr64` | func | `(i32 i32 i32 i32) -> ()` |
| 215 | `tDeM.rvDc` | func | `(i32 i32) -> ()` |
| 216 | `tDeM.k1Qc` | func | `(i32) -> ()` |
| 217 | `tDeM.xihm` | func | `(i32 i32) -> ()` |
| 218 | `tDeM.vcf7` | func | `(i32) -> (i32)` |
| 219 | `tDeM.GBN2` | func | `(i32 i32 i32) -> ()` |
| 220 | `tDeM.hM5Q` | func | `(i32 i32) -> ()` |
| 221 | `tDeM.yGxy` | func | `(i32 i32) -> ()` |
| 222 | `tDeM.lRr2` | func | `(i32 i32) -> ()` |
| 223 | `tDeM.GaXq` | func | `(i32 i32) -> ()` |
| 224 | `tDeM.R5y7` | func | `(i32 i32) -> (i32)` |
| 225 | `tDeM.dBA2` | func | `(i32 i32) -> ()` |
| 226 | `tDeM.UmkZ` | func | `(i32 i32) -> ()` |
| 227 | `tDeM.X4Co` | func | `(i32 i32) -> ()` |
| 228 | `tDeM.KrOO` | func | `(i32 i32) -> ()` |
| 229 | `tDeM.qfN4` | func | `(i32 i32) -> ()` |
| 230 | `tDeM.cnyy` | func | `(i32 i32) -> ()` |
| 231 | `tDeM.h9AB` | func | `(i32 i32) -> ()` |
| 232 | `tDeM.pQjF` | func | `(i32 i32 f64 f64) -> (i32)` |
| 233 | `tDeM.mT18` | func | `(i32) -> (i32)` |
| 234 | `tDeM.yS7O` | func | `(i32) -> ()` |
| 235 | `tDeM.WBe7` | func | `(i32 f64) -> ()` |
| 236 | `tDeM.XGfJ` | func | `(i32 i32) -> ()` |
| 237 | `tDeM.EaHL` | func | `(i32 i32) -> ()` |
| 238 | `tDeM.UQdU` | func | `(i32 i32 i32) -> ()` |
| 239 | `tDeM.Ak9e` | func | `(i32 i32) -> (i32)` |
| 240 | `tDeM.mkNy` | func | `(i32 i32) -> ()` |
| 241 | `tDeM.XVrp` | func | `(i32 i32) -> ()` |
| 242 | `tDeM.IEtx` | func | `(i32 i32 i32) -> ()` |
| 243 | `tDeM.dIQf` | func | `(i32 i32) -> (i32)` |
| 244 | `tDeM.mtPG` | func | `(i32 i32) -> ()` |
| 245 | `tDeM.UK8E` | func | `(i32 i32 i32) -> ()` |
| 246 | `tDeM.lRWl` | func | `(i32 i32) -> ()` |
| 247 | `tDeM.zV9c` | func | `(i32 f64) -> ()` |
| 248 | `tDeM.PD3o` | func | `(i32 i32) -> ()` |
| 249 | `tDeM.Me9b` | func | `(i32 f64) -> ()` |
| 250 | `tDeM.pFGp` | func | `(i32 i32 i32) -> ()` |
| 251 | `tDeM.GxPd` | func | `(i32 i32) -> ()` |
| 252 | `tDeM.uNbX` | func | `(i32 i32 i32) -> ()` |
| 253 | `tDeM.b5DX` | func | `(i32 i32) -> ()` |
| 254 | `tDeM.wjlg` | func | `(i32 i32) -> ()` |
| 255 | `tDeM.Smhl` | func | `(i32 i32) -> ()` |
| 256 | `tDeM.w2jB` | func | `(i32 i32 i32) -> ()` |
| 257 | `tDeM.ECxC` | func | `(i32 i32) -> ()` |
| 258 | `tDeM.Eb3b` | func | `(i32 i32) -> ()` |
| 259 | `tDeM.lIsb` | func | `(i32 i32) -> ()` |
| 260 | `tDeM.TuzK` | func | `(i32 i32) -> ()` |
| 261 | `tDeM.ypXn` | func | `(i32 f32) -> ()` |
| 262 | `tDeM.yXBu` | func | `(i32 f32) -> ()` |
| 263 | `tDeM.RxsS` | func | `(i32 i32) -> ()` |
| 264 | `tDeM.VHBk` | func | `(i32 i32) -> ()` |
| 265 | `tDeM.TRdG` | func | `(i32 i32) -> ()` |
| 266 | `tDeM.ZuS0` | func | `(i32 i32) -> ()` |
| 267 | `tDeM.OYzW` | func | `(i32 i32) -> ()` |
| 268 | `tDeM.QtRt` | func | `(i32 i32) -> ()` |
| 269 | `tDeM.nKbB` | func | `(i32 i32) -> ()` |
| 270 | `tDeM.E7Nd` | func | `(i32 i32) -> ()` |
| 271 | `tDeM.fLs7` | func | `(i32 i32) -> ()` |
| 272 | `tDeM.yMyO` | func | `(i32 i32) -> ()` |
| 273 | `tDeM.WvMv` | func | `(i32 i32) -> ()` |
| 274 | `tDeM.NZj5` | func | `(i32 i32) -> ()` |
| 275 | `tDeM.EzyT` | func | `(i32 i32) -> ()` |
| 276 | `tDeM.wu3I` | func | `(i32 i32) -> ()` |
| 277 | `tDeM.kzyJ` | func | `(i32 i32) -> ()` |
| 278 | `tDeM.gzAa` | func | `(i32 i32) -> ()` |
| 279 | `tDeM.P4f3` | func | `(i32 i32) -> ()` |
| 280 | `tDeM.oP84` | func | `(i32 i32) -> ()` |
| 281 | `tDeM.hyJY` | func | `(i32 i32 i32) -> ()` |
| 282 | `tDeM.j8ZP` | func | `(i32 i32 i32) -> ()` |
| 283 | `tDeM.yHay` | func | `(i32 i32) -> ()` |
| 284 | `tDeM.vKo5` | func | `(i32 i32) -> ()` |
| 285 | `tDeM.cxDP` | func | `(i32 i32) -> ()` |
| 286 | `tDeM.jKQj` | func | `(i32 i32) -> ()` |
| 287 | `tDeM.KIgn` | func | `(i32 i32) -> ()` |
| 288 | `tDeM.SFUY` | func | `(i32 i32) -> ()` |
| 289 | `tDeM.uXTi` | func | `(i32 i32) -> ()` |
| 290 | `tDeM.cilC` | func | `(i32 i32) -> ()` |
| 291 | `tDeM.P2g9` | func | `(i32 i32) -> ()` |
| 292 | `tDeM.JuQ4` | func | `(i32 i32) -> ()` |
| 293 | `tDeM.AQlq` | func | `(i32 i32) -> ()` |
| 294 | `tDeM.ACKJ` | func | `(i32 i32) -> (i32)` |
| 295 | `tDeM.MjIH` | func | `(i32 i32) -> ()` |
| 296 | `tDeM.KWW9` | func | `(i32 i32 i32) -> ()` |
| 297 | `tDeM.THLi` | func | `(i32 i32) -> ()` |
| 298 | `tDeM.TQnD` | func | `(i32 i32) -> ()` |
| 299 | `tDeM.Zeo5` | func | `(i32 i32) -> ()` |
| 300 | `tDeM.CFZm` | func | `(i32 i32 i32) -> ()` |
| 301 | `tDeM.nkyT` | func | `(i32 i32) -> (i32)` |
| 302 | `tDeM.OI5Z` | func | `(i32 i32 i32) -> ()` |
| 303 | `tDeM.o2FA` | func | `(i32 i32 i32) -> ()` |
| 304 | `tDeM.crF5` | func | `(i32 i32) -> ()` |
| 305 | `tDeM.wytR` | func | `(i32 i32) -> ()` |
| 306 | `tDeM.YfTj` | func | `(i32 i32) -> ()` |
| 307 | `tDeM.gOtX` | func | `(i32 i32) -> ()` |
| 308 | `tDeM.BM4P` | func | `(i32 i32) -> (i32)` |
| 309 | `tDeM.Kj4m` | func | `(i32) -> (i32)` |
| 310 | `tDeM.NIb1` | func | `(i32) -> (i32)` |
| 311 | `tDeM.aJB4` | func | `(i32) -> (i32)` |
| 312 | `tDeM.Yu9G` | func | `(i32) -> (i32)` |
| 313 | `tDeM.MHXe` | func | `(i32) -> (i32)` |
| 314 | `tDeM.Thry` | func | `(i32) -> (i32)` |
| 315 | `tDeM.lszV` | func | `(i32) -> (i32)` |
| 316 | `tDeM.aC16` | func | `(i32) -> (i32)` |
| 317 | `tDeM.L0oZ` | func | `(i32) -> (i32)` |
| 318 | `tDeM.CdC2` | func | `(i32) -> (i32)` |
| 319 | `tDeM.Zove` | func | `(i32) -> (i32)` |
| 320 | `tDeM.NYmq` | func | `(i32) -> (i32)` |
| 321 | `tDeM.D1j1` | func | `(i32) -> (i32)` |
| 322 | `tDeM.y7s0` | func | `(i32) -> (i32)` |
| 323 | `tDeM.KID1` | func | `(i32) -> (f64)` |
| 324 | `tDeM.osLw` | func | `(i32) -> (f64)` |
| 325 | `tDeM.TbQb` | func | `(i32) -> (i32)` |
| 326 | `tDeM.QTuc` | func | `(i32) -> (f64)` |
| 327 | `tDeM.EplM` | func | `(i32) -> (i32)` |
| 328 | `tDeM.Zawn` | func | `(i32) -> (i32)` |
| 329 | `tDeM.aLhk` | func | `(i32) -> (i32)` |
| 330 | `tDeM.O9QN` | func | `(i32) -> (i32)` |
| 331 | `tDeM.zB93` | func | `(i32) -> (i32)` |
| 332 | `tDeM.wcXd` | func | `(i32) -> (i32)` |
| 333 | `tDeM.JjEJ` | func | `(i32) -> (i32)` |
| 334 | `tDeM.FHIj` | func | `(i32) -> (i32)` |
| 335 | `tDeM.YwR5` | func | `(i32) -> (i32)` |
| 336 | `tDeM.FjTR` | func | `(i32) -> (i32)` |
| 337 | `tDeM.GUax` | func | `(i32) -> (i32)` |
| 338 | `tDeM.POzt` | func | `(i32) -> (i32)` |
| 339 | `tDeM.cOkV` | func | `(i32) -> (i32)` |
| 340 | `tDeM.mOcz` | func | `(i32 i32 i32) -> (i32)` |
| 341 | `tDeM.uq9D` | func | `() -> (i32)` |
| 342 | `tDeM.bU1l` | func | `(i32 i32) -> ()` |
| 343 | `tDeM.rbiX` | func | `(i32 i32 i32) -> ()` |
| 344 | `tDeM.BYuV` | func | `(i32 i32 i32) -> ()` |
| 345 | `tDeM.TEmS` | func | `(i32 i32) -> (i32)` |
| 346 | `tDeM.ewPG` | func | `(i32) -> (i32)` |
| 347 | `tDeM.MnOc` | func | `(i32 i32 i32) -> (i32)` |
| 348 | `tDeM.cRkR` | func | `(i32) -> ()` |
| 349 | `tDeM.QJ8Q` | func | `(i32) -> (i32)` |
| 350 | `tDeM.CNOg` | func | `(i32 i32) -> ()` |
| 351 | `tDeM.xnR1` | func | `(i32) -> (i32)` |
| 352 | `tDeM.j4H8` | func | `(i32) -> (i32)` |
| 353 | `tDeM.kEAg` | func | `(i32) -> (i32)` |
| 354 | `tDeM.FusH` | func | `(i32) -> (i32)` |
| 355 | `tDeM.cyvd` | func | `(i32) -> (i32)` |
| 356 | `tDeM.TnsW` | func | `(i32 i32) -> ()` |
| 357 | `tDeM.K6tr` | func | `(i32 i32) -> ()` |
| 358 | `tDeM.jdWJ` | func | `(i32 i32) -> ()` |
| 359 | `tDeM.X7m2` | func | `(i32 i32) -> ()` |
| 360 | `tDeM.Kz4r` | func | `(i32 i32) -> ()` |
| 361 | `tDeM.Y5Gm` | func | `(i32 i32) -> ()` |
| 362 | `tDeM.snTz` | func | `(i32 i32) -> ()` |
| 363 | `tDeM.R5do` | func | `(i32 i32 i32) -> ()` |
| 364 | `tDeM.JaFK` | func | `(i32 i32) -> ()` |
| 365 | `tDeM.P5TL` | func | `(i32 i32) -> (i32)` |
| 366 | `tDeM.aSZ1` | func | `(i32) -> (i32)` |
| 367 | `tDeM.T9xW` | func | `(i32) -> (i32)` |
| 368 | `tDeM.iwfR` | func | `(i32 i32) -> ()` |
| 369 | `tDeM.hqYX` | func | `(i32) -> (i32)` |
| 370 | `tDeM.Ejmt` | func | `(i32 f64 f64) -> (i32)` |
| 371 | `tDeM.UFU0` | func | `(i32 i32 i32) -> (i32)` |
| 372 | `tDeM.p2Bv` | func | `(i32 i32) -> ()` |
| 373 | `tDeM.epdi` | func | `(i32 i32) -> (i32)` |
| 374 | `tDeM.v7VL` | func | `(i32) -> (i32)` |
| 375 | `tDeM.EaFi` | func | `(i32) -> (i32)` |
| 376 | `tDeM.ePcf` | func | `(i32) -> (i32)` |
| 377 | `tDeM.v9a2` | func | `(i32) -> (i32)` |
| 378 | `tDeM.v4J9` | func | `(i32) -> (i32)` |
| 379 | `tDeM.hR0a` | func | `(i32) -> (i32)` |
| 380 | `tDeM.BpUA` | func | `(i32 i32) -> ()` |
| 381 | `tDeM.eezx` | func | `(i32 i32) -> (i32)` |
| 382 | `tDeM.SN0E` | func | `(i32 i32) -> (i32)` |
| 383 | `tDeM.iSpY` | func | `(i32 i32) -> (i32)` |
| 384 | `tDeM.MXcc` | func | `(i32 i32) -> (i32)` |
| 385 | `tDeM.h3qN` | func | `(i32 i32) -> (i32)` |
| 386 | `tDeM.DxdQ` | func | `(i32 i32) -> (i32)` |
| 387 | `tDeM.NbJs` | func | `(f64) -> (i32)` |
| 388 | `tDeM.VgKF` | func | `(i32 i32) -> (i32)` |
| 389 | `tDeM.AaTx` | func | `(i32 i32) -> (i32)` |

## Exports

157 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `IwPw` | func | 2995 | `() -> ()` |
| `CVIf` | func | 2535 | `(i32) -> (i32)` |
| `sLfL` | func | 3175 | `(i32 i32 i32) -> ()` |
| `zYlU` | func | 3072 | `(i32) -> (i32 i32)` |
| `v0sH` | func | 2551 | `(i32) -> (i32)` |
| `c7Ny` | func | 2533 | `(i32) -> (i32)` |
| `gBrL` | func | 2803 | `(i32) -> (i32)` |
| `ib9t` | func | 3182 | `(i32) -> ()` |
| `hLZq` | func | 2543 | `(i32 i32) -> (i32)` |
| `Nd4U` | func | 1811 | `(i32 i32) -> (i32)` |
| `X7JE` | func | 1891 | `(i32 i32 i32 i32) -> (i32)` |
| `kXc7` | func | 2550 | `(i32) -> (i32)` |
| `EQ9W` | func | 1281 | `(i32 i32 i32 i32) -> (i32)` |
| `qKfS` | func | 3030 | `(i32 i32) -> ()` |
| `smwX` | func | 2527 | `(i32 i32) -> ()` |
| `YtBN` | func | 2631 | `() -> (i32)` |
| `zmyY` | func | 821 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `VWvL` | func | 2169 | `(i32 i32) -> ()` |
| `xhIh` | func | 3057 | `(i32 i32) -> (i32 i32)` |
| `CF8e` | func | 3055 | `(i32 i32) -> (i32 i32)` |
| `rKzz` | func | 1775 | `(i32) -> (i32)` |
| `b3tJ` | func | 3069 | `(i32) -> (i32 i32)` |
| `uYUs` | func | 2517 | `(i32) -> (i32)` |
| `NPhP` | func | 974 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `vWvH` | func | 2190 | `(i32 i32) -> (i32)` |
| `cmyE` | func | 3255 | `() -> (i32)` |
| `gAmt` | func | 2036 | `(i32 i32) -> ()` |
| `BSiL` | func | 1607 | `(i32 i32 i32 i32) -> (i32)` |
| `dfal` | func | 2811 | `(i32) -> (i32)` |
| `scz7` | func | 2510 | `(i32) -> (i32)` |
| `q4Mr` | func | 1185 | `(i32 i32) -> (i32)` |
| `g3GC` | func | 2541 | `(i32) -> (i32)` |
| `lpST` | func | 1397 | `(i32 i32 i32) -> (i32)` |
| `D35L` | func | 2420 | `(i32 f64) -> (i32)` |
| `WjNx` | func | 1545 | `(i32 i32 i32 i32) -> (i32)` |
| `ifX0` | func | 2323 | `(i32 i32) -> ()` |
| `Aabh` | func | 2000 | `(i32) -> (i32)` |
| `BmPb` | func | 2423 | `(i32 i32 i32 i32) -> (i32)` |
| `r4rm` | func | 2512 | `(i32) -> (i32)` |
| `BVLT` | func | 2558 | `() -> (i32)` |
| `OgEP` | func | 1187 | `(i32 i32) -> (i32)` |
| `GUbF` | func | 2409 | `(i32 i32) -> (i32)` |
| `zHwp` | func | 959 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `adWK` | func | 1539 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `WbhK` | func | 2509 | `(i32) -> (f64)` |
| `qYBB` | global | 1 | `` |
| `J1nq` | func | 2552 | `(i32) -> (i32)` |
| `ciNc` | func | 1818 | `(i32) -> (i32)` |
| `u597` | func | 1647 | `(i32 i32) -> ()` |
| `CmU8` | func | 2298 | `(i32 i32) -> ()` |
| `jXZM` | func | 3231 | `(i32) -> ()` |
| `Qj5f` | func | 3085 | `() -> (i32 i32)` |
| `LFyd` | func | 2516 | `(i32) -> ()` |
| `PhBH` | func | 3047 | `(i32 i32 i32) -> (i32 i32)` |
| `EYyy` | func | 1445 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `Yt2o` | func | 1280 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `rxlQ` | func | 2873 | `(i32) -> (i32)` |
| `XFJu` | func | 2519 | `(i32) -> (i32)` |
| `Mf1G` | func | 2495 | `(i32) -> (i32)` |
| `thM5` | func | 2374 | `(i32 i32) -> (i32)` |
| `FNW4` | func | 3059 | `(i32 i32) -> (i32 i32)` |
| `jWRD` | func | 3109 | `(i32 i32 i32 i32) -> ()` |
| `IHl1` | func | 2059 | `(i32 f64) -> (i32)` |
| `whBF` | func | 1186 | `(i32 i32) -> ()` |
| `sx4b` | func | 1573 | `(i32 i32) -> (i32)` |
| `VCfS` | func | 1350 | `(i32) -> (i32)` |
| `Flll` | func | 2828 | `(i32) -> (i32)` |
| `XK7t` | func | 1688 | `(i32 i32 i32 i32) -> (i32)` |
| `YdTZ` | func | 3047 | `(i32 i32 i32) -> (i32 i32)` |
| `Sxi7` | func | 1551 | `(i32 i32) -> (i32)` |
| `PJYE` | func | 2532 | `(i32) -> (i32)` |
| `wDMF` | func | 3118 | `(i32 i32 i32) -> ()` |
| `E6g2` | func | 1588 | `(i32 i32 i32) -> (i32)` |
| `ipiv` | func | 2511 | `(i32) -> (i32)` |
| `memory` | memory | 0 | `` |
| `verJ` | func | 3254 | `() -> (i32)` |
| `Xjht` | func | 3056 | `(i32 i32) -> (i32 i32)` |
| `GO95` | func | 2838 | `(i32) -> (i32)` |
| `IU5q` | func | 1868 | `() -> (i32)` |
| `dtmZ` | func | 2189 | `(i32 i32) -> (i32)` |
| `PosU` | func | 1652 | `(i32 f64 f64 f64) -> (i32)` |
| `aNwU` | func | 1637 | `(i32 i32) -> (i32)` |
| `mGeL` | func | 1326 | `(i32 i32 i32) -> (i32)` |
| `sMMy` | func | 763 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `R2Xd` | func | 2376 | `(i32 i32) -> (i32)` |
| `ynS1` | func | 3226 | `() -> (f64)` |
| `Wxfq` | func | 2373 | `(i32 i32) -> (i32)` |
| `yTDj` | func | 3023 | `(i32 i32 i32 i32) -> (i32)` |
| `xDVh` | func | 2514 | `(i32) -> (i32)` |
| `ZRP7` | func | 2467 | `(i32) -> (i32)` |
| `ICga` | func | 3070 | `(i32) -> (i32 i32)` |
| `Lkzb` | func | 985 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `k1Gw` | func | 1498 | `(i32 i32 i32) -> ()` |
| `cU47` | func | 1446 | `(i32 f64 f64) -> (i32)` |
| `tnK7` | func | 1388 | `(i32) -> ()` |
| `cpCm` | global | 2 | `` |
| `xZSA` | func | 3046 | `(i32 i32 i32) -> (i32 i32)` |
| `gApG` | func | 2002 | `(i32 i32 i32 i32) -> ()` |
| `dVpQ` | func | 2450 | `(i32) -> (i32)` |
| `SRC8` | func | 788 | `(i32 i32) -> (i32)` |
| `uLRU` | func | 1499 | `() -> (i32)` |
| `zkSA` | func | 3016 | `(i32 i32) -> (i32)` |
| `jpSa` | func | 1755 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `efHS` | func | 2534 | `(i32 i32) -> ()` |
| `RIRj` | func | 1493 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `M7HC` | func | 3047 | `(i32 i32 i32) -> (i32 i32)` |
| `X2di` | func | 1535 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `DezQ` | func | 1562 | `(i32 i32) -> (i32)` |
| `fzBi` | func | 1798 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `jIPd` | func | 3060 | `(i32 i32) -> (i32 i32)` |
| `Aasu` | func | 2542 | `(i32 i32) -> (i32)` |
| `ECiP` | func | 1942 | `(i32) -> ()` |
| `gkOB` | func | 1067 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `CI1E` | func | 2229 | `(i32 i32) -> (i32)` |
| `hoYB` | func | 1307 | `(i32 i32) -> (i32)` |
| `BQjg` | func | 3054 | `(i32 i32) -> (i32 i32)` |
| `eggz` | func | 1521 | `(i32 i32 i32 i32) -> ()` |
| `ET1z` | func | 1935 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `H0kn` | func | 2494 | `(i32 i32) -> ()` |
| `hNSO` | func | 2513 | `(i32) -> (i32)` |
| `ReeT` | func | 2850 | `(i32) -> ()` |
| `NmdH` | func | 2995 | `() -> ()` |
| `XDJy` | func | 1572 | `(i32 i32) -> (i32)` |
| `pzTh` | func | 1577 | `(i32) -> (i32)` |
| `cg1h` | func | 3146 | `() -> (i32)` |
| `nm92` | func | 2250 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `zGrc` | func | 2584 | `(i32 i32) -> ()` |
| `W6ak` | func | 1648 | `(i32 i32) -> ()` |
| `h99s` | func | 1928 | `(i32 i32) -> (i32)` |
| `EPgP` | func | 814 | `(i32 i32 i32 i32) -> (i32)` |
| `yKT3` | func | 1943 | `(i32) -> ()` |
| `JVYt` | func | 2515 | `(i32) -> (i32)` |
| `GqYd` | func | 2630 | `(i32 i32) -> ()` |
| `cYMU` | func | 1575 | `(i32 f64) -> (f64)` |
| `LvqD` | func | 1287 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `dHvQ` | func | 1357 | `(i32 i32) -> (i32)` |
| `PwQz` | func | 817 | `(i32) -> (i32)` |
| `YOs4` | func | 884 | `(i32 i32) -> (i32)` |
| `huTS` | func | 835 | `(i32 i32 i32) -> (i32)` |
| `u7tj` | func | 2074 | `(i32 f64 f64 f64) -> (i32)` |
| `jStI` | func | 3230 | `(i32) -> (i32)` |
| `Wlqx` | func | 3058 | `(i32 i32) -> (i32 i32)` |
| `aLGI` | func | 1903 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `csKn` | func | 3084 | `() -> (i32 i32)` |
| `nhpT` | func | 1465 | `(i32 i32) -> (i32)` |
| `maRt` | func | 1914 | `(i32 i32 f64 f64 f64) -> ()` |
| `H3ms` | func | 3047 | `(i32 i32 i32) -> (i32 i32)` |
| `JJwK` | func | 1918 | `(i32 i32) -> ()` |
| `gpUF` | func | 654 | `(i32 i32 i32) -> (i32)` |
| `dGZ9` | func | 2518 | `(i32) -> (i32)` |
| `XrOf` | func | 2491 | `(i32 i32 i32 i32 i32 i32 f64 i32) -> (i32)` |
| `J2f7` | func | 2375 | `(i32 i32) -> (i32)` |
| `JRC3` | func | 751 | `(i32 i32) -> (i32)` |
| `uoEK` | func | 1792 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `wDC8` | func | 3071 | `(i32) -> (i32 i32)` |
| `Btlv` | func | 3116 | `(i32 i32 i32) -> (i32)` |
| `yI9D` | func | 1243 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- memory 0: min 34 pages · max 14,648 · shared=False
- table 0: funcref · min 821 · max 821
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2194816, `i32` = i32.const 2195284

## Functions

- 2,878 bodies · 3,972,729 code bytes · avg 1.3 KB
- instruction scan: 2,878 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 164 |
| <= 64 bytes | 116 |
| <= 128 bytes | 262 |
| <= 256 bytes | 378 |
| <= 512 bytes | 651 |
| <= 1024 bytes | 568 |
| <= 2048 bytes | 406 |
| <= 4096 bytes | 181 |
| <= 8192 bytes | 91 |
| <= 16384 bytes | 26 |
| > 16384 bytes | 35 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32 i32) -> ()` | 149 | 123,210 | 59,158 | local.get×16779, i32.const×7042, local.set×3395, i32.add×3382, i32.load×3155 |
| 1 | `(i32 i32 i32 i32) -> ()` | 212 | 192,937 | 87,545 | local.get×25658, i32.const×9834, i32.load×5578, local.set×4652, local.tee×4609 |
| 2 | `(i32 i32 i32 i32 i32 i32) -> ()` | 131 | 55,245 | 25,152 | local.get×7463, i32.const×3315, local.set×1377, i32.add×1265, i32.load×1139 |
| 3 | `(i32 i32) -> ()` | 123 | 48,628 | 22,511 | local.get×6329, i32.const×2250, local.set×1325, local.tee×1179, i32.load×1035 |
| 4 | `(i32 i32 i32) -> ()` | 61 | 31,664 | 14,227 | local.get×4105, i32.const×1929, i32.load×868, i32.add×678, local.set×620 |
| 5 | `(i32 i32) -> ()` | 59 | 29,628 | 14,267 | local.get×4192, i32.const×1730, i32.load×1042, local.set×931, i32.add×815 |
| 6 | `(i32 i32) -> ()` | 90 | 26,104 | 12,597 | local.get×3709, i32.const×1386, local.set×779, i32.load×721, local.tee×701 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 134 | 32,140 | 15,936 | local.get×4504, i32.const×2183, local.set×1128, i32.add×1053, local.tee×790 |
| 8 | `(i32 i32 i32 i32 i32) -> ()` | 58 | 21,484 | 10,525 | local.get×2903, i32.const×1490, local.set×728, i32.add×591, local.tee×504 |
| 9 | `(i32 i32) -> ()` | 93 | 19,080 | 9,200 | local.get×2643, i32.const×1025, local.tee×571, local.set×554, i32.load×531 |
| 10 | `(i32 i32 i32 i32) -> ()` | 105 | 26,545 | 12,837 | local.get×3810, i32.const×1624, local.set×997, i32.add×682, i32.load×663 |
| 11 | `(i32 i32 i32 i32 i32 i32) -> ()` | 130 | 20,622 | 9,288 | local.get×2540, i32.const×1209, local.set×548, local.tee×388, end×388 |
| 12 | `(i32 i32 i32 i32) -> ()` | 53 | 24,505 | 11,634 | local.get×3005, i32.const×1276, local.tee×731, end×592, i32.load×586 |
| 13 | `(i32 i32 i32) -> (i32)` | 77 | 18,924 | 8,934 | local.get×2485, i32.const×1224, i32.load×559, i32.add×543, local.set×525 |
| 18 | `(i32 i32) -> ()` | 95 | 28,847 | 13,556 | local.get×4112, i32.const×1781, i32.add×687, i32.load×632, local.set×632 |
| 19 | `(i32 i32 i64 i32 i32 i64 i32 i32) -> ()` | 98 | 20,878 | 7,965 | local.get×2956, i32.const×931, i64.store×841, i32.store×643, i64.const×516 |
| 21 | `(i32 i32) -> ()` | 82 | 29,008 | 13,035 | local.get×4617, i32.const×1454, i32.store×702, i32.add×688, local.tee×644 |
| 22 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 64 | 24,285 | 11,198 | local.get×2682, i32.const×1711, local.set×821, end×663, block×465 |
| 25 | `(i32 i32 i32 i32 i32) -> ()` | 68 | 21,800 | 10,079 | local.get×3118, i32.const×1240, local.tee×623, i32.add×436, i32.load×331 |
| 40 | `(i32 i32 i32 i32 i32) -> ()` | 80 | 25,623 | 11,957 | local.get×3434, i32.const×1743, i32.add×697, local.set×634, end×538 |
| 57 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 99 | 32,154 | 15,014 | local.get×4317, i32.const×1963, i32.load×986, local.set×902, i32.add×812 |
| 192 | `(i32 i32) -> ()` | 10 | 26,844 | 12,930 | local.get×4543, i32.load×1219, i32.const×1046, end×803, i32.add×744 |
| 217 | `(i32) -> ()` | 19 | 23,160 | 10,851 | local.get×2722, i32.load×1494, i32.const×1177, local.tee×1008, end×853 |
| 699 | `(i32 i32 i32 i32) -> ()` | 54 | 21,809 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 981 | `(i32 i32) -> ()` | 138 | 42,558 | 20,102 | local.get×5237, i32.const×2322, local.tee×1192, i32.add×1062, local.set×1007 |
| 1538 | `(i32 i32) -> (i32)` | 179 | 54,000 | 19,612 | local.get×6504, i32.const×2604, i64.store×1855, i64.const×1046, i64.load×1028 |
| 1925 | `(i32 i32) -> ()` | 110 | 38,694 | 17,216 | local.get×5028, i32.const×1620, local.set×859, local.tee×753, end×661 |
| 2544 | `(i32 i32) -> ()` | 397 | 139,328 | 62,996 | local.get×18108, i32.const×7882, local.set×3752, i32.load×3121, end×2777 |
| 2827 | `(i32 i32 i32 i32) -> ()` | 137 | 30,179 | 13,747 | local.get×4098, i32.const×1458, local.tee×695, local.set×679, i32.load×613 |
| 2845 | `(i32 i32) -> ()` | 135 | 32,980 | 14,764 | local.get×4135, i32.const×1957, local.set×762, local.tee×727, i32.add×680 |

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
targetcolourmaxUpSpeedforceinclinationazimuthturbidityluminancemieCoefficientmieDirectionalGsunPositionvertexTintxCameraOffsetyCameraOffsetzCameraOffsetditheringinfiniteDistanceuseSunPositionrgba(tran
r8unormr8snormr8uintr8sintr16unormr16snormr16uintr16sintr16floatrg8unormrg8snormrg8uintrg8sintr32uintr32sintr32floatrg16unormrg16snormrg16uintrg16sintrg16floatrgba8unormrgba8unorm-srgbrgba8snormrgba8u
fs_mesh_0040d000053_l7fs_mesh_0040d040073_l3fs_mesh_0040d040073_l7fs_mesh_0040d090053_l1fs_mesh_0040d0b0073_l1fs_mesh_0042d040072_l3fs_mesh_0044b0b0073fs_mesh_0044d000053_l3fs_mesh_0044d000053_l7fs_me
schema023canChangeblockReachezBridgingezBridgingGrowMsezToweringezToweringGrowMscrouchingSpeedwalkingSpeedrunningSpeedjumpAmountairJumpCountjumpHoldThrustbunnyhopMaxMultiplierskyBoxminChunkAddDistshow
Aspen LeavesAspen LogAspen SaplingAspen Wood PlanksBarkless Aspen LogBarkless Cedar LogBarkless Jungle LogBarkless Maple LogBarkless Pine LogBarkless Plum LogBlack PlanksBlue PlanksBookshelfBowl of Cr
Acacia LeavesAcacia LogAcacia SaplingAcacia Wood PlanksAlchemy TableBarkless Acacia LogBarkless Birch LogBarkless Dark Oak LogBarkless Elm LogBarkless Oak LogBarkless Spruce LogBirch LeavesBirch LogBi
maxTextureDimension1DmaxTextureDimension2DmaxTextureDimension3DmaxTextureArrayLayersmaxBindGroupsmaxBindGroupsPlusVertexBuffersmaxBindingsPerBindGroupmaxDynamicUniformBuffersPerPipelineLayoutmaxDynami
R8UnormR8SnormR8UintR8SintR16UintR16SintR16UnormR16SnormR16FloatRg8UnormRg8SnormRg8UintRg8SintR32UintR32SintR32FloatRg16UintRg16SintRg16UnormRg16SnormRg16FloatRgba8UnormRgba8UnormSrgbRgba8SnormRgba8Ui
standingsittingzombieglidingdrivingsleepingridingShearedSaddledskyblockHeldBossBoxBloxdBlockPersonLeaderboardParticleEmitterTier 1Tier 2Tier 3Tier 4Tier 5PlayerPigCowSheepHorseCamelIron Goofy GolemGol
flag testalpha * baseColor.abaseColor.abloxdSpGlintTier(v.vEnchantRgbAndRotY.rgb)enchantmentColour(v.vEnchantRgbAndRotY, v.vPositionAndAnimTick, baseColor.rgb)bloxdSpEnchantSpeedbloxdSpLocalvec4f(v.vO
EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEJJJJJJJJEEEEEEEEEEEEEJJJJJJJJEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEJJJJEEEEEEEEEEEEEEJJJJJJ
```

## Opcode histogram (aggregated)

| opcode | count |
|---|---:|
| `local.get` | 531,780 |
| `i32.const` | 223,562 |
| `local.tee` | 97,743 |
| `local.set` | 92,865 |
| `i32.load` | 91,940 |
| `i32.add` | 85,649 |
| `end` | 77,890 |
| `br_if` | 62,744 |
| `i32.store` | 46,185 |
| `block` | 36,661 |
| `i64.store` | 32,191 |
| `i64.const` | 31,415 |
| `if` | 29,791 |
| `call` | 29,452 |
| `i64.load` | 23,925 |
| `i32.sub` | 23,702 |
| `br` | 22,857 |
| `i32.eqz` | 18,604 |
| `select` | 16,334 |
| `i32.shl` | 16,057 |
| `i32.and` | 15,972 |
| `i32.ne` | 15,435 |
| `i32.load8_u` | 14,782 |
| `i32.eq` | 13,524 |
| `i32.store8` | 12,884 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 12, structural errors: 0
- bodies fully decoded: 2,878/2,878 (degraded: 0)
