# WASM module: `bloxd_wasm_webgl_bg`

> environment **preprod.bloxd.io** · build `bbb6l5.0244a119` · analyzed 2026-11-21T12:37:15+09:00
> source: https://preprod.bloxd.io/static/media/bloxd_wasm_webgl_bg.27a0dc9e59c84764d00e.wasm
> 5,368,803 bytes (5.1 MB) · sha256 `a5cefc5390d0e4cf…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,859 / 299 |
| Exports / imports | 154 / 299 |
| Code bytes (function bodies) | 3,973,490 (3.8 MB) |
| Total local variables | 30,167 |
| Instructions (scanable bodies) | 1,864,264 |
| Data segments / bytes | 3,791 / 1,348,615 |
| Element segments / entries | 1 / 749 |
| Memories / tables / globals | 1 / 1 / 3 |
| name-section module id | `cdaf671bdfeeb0f5.10796` |
| Sections | 12 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,485 | 175 |
| 2 | import | 3,590 | 299 |
| 3 | function | 2,908 | 2859 |
| 4 | table | 7 | 1 |
| 5 | memory | 5 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,233 | 154 |
| 9 | element | 1,505 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 3,978,733 | 2859 |
| 11 | data | 1,379,238 | 3791 |
| 0 | custom:name | 30 | — |

## Types

175 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32) -> ()` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

299 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `jCJ1.SerB` | func | `(i32) -> (f64)` |
| 1 | `jCJ1.E8G6` | func | `() -> (i32)` |
| 2 | `jCJ1.xx7r` | func | `(i32 i32 i32) -> (i32)` |
| 3 | `jCJ1.CV5V` | func | `(i32) -> ()` |
| 4 | `jCJ1.hXhM` | func | `(i32 i32) -> (i32)` |
| 5 | `jCJ1.v06A` | func | `(i32) -> (i32)` |
| 6 | `jCJ1.GnQ1` | func | `(i32 i32 i32) -> (i32)` |
| 7 | `jCJ1.Q6l1` | func | `(i32 i32 i32 i32) -> (i32)` |
| 8 | `jCJ1.NMaA` | func | `(i32) -> (i32)` |
| 9 | `jCJ1.m9xz` | func | `(i32 i32) -> ()` |
| 10 | `jCJ1.fNHU` | func | `(i32 i32) -> ()` |
| 11 | `jCJ1.QZff` | func | `(i32 i32 i32 i32) -> (i32)` |
| 12 | `jCJ1.pOEn` | func | `(i32 i32) -> (i32)` |
| 13 | `jCJ1.MPT7` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 14 | `jCJ1.nypB` | func | `(i32) -> (i32)` |
| 15 | `jCJ1.m7LE` | func | `(i32 i32) -> (i32)` |
| 16 | `jCJ1.yFKj` | func | `(i32 i32) -> (i32)` |
| 17 | `jCJ1.fJRr` | func | `(i32 i32) -> ()` |
| 18 | `jCJ1.wGlP` | func | `(i32) -> (i32)` |
| 19 | `jCJ1.qA2n` | func | `(i32) -> (i32)` |
| 20 | `jCJ1.AQsD` | func | `(i32) -> (i32)` |
| 21 | `jCJ1.ypD7` | func | `(i32) -> ()` |
| 22 | `jCJ1.bBJ5` | func | `(i32 i32) -> ()` |
| 23 | `jCJ1.QMeH` | func | `(i32 i32) -> ()` |
| 24 | `jCJ1.JhGm` | func | `(i32 f64 f64 f64 f64) -> ()` |
| 25 | `jCJ1.yvOg` | func | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64) -> ()` |
| 26 | `jCJ1.qZb6` | func | `(i32) -> (i32)` |
| 27 | `jCJ1.K6D0` | func | `(i32 i32) -> ()` |
| 28 | `jCJ1.Jtk3` | func | `(i32 i32) -> (i32)` |
| 29 | `jCJ1.ivmg` | func | `(i32 i32 i32 i32) -> ()` |
| 30 | `jCJ1.ZfqR` | func | `(i32 i32) -> (i32)` |
| 31 | `jCJ1.afOo` | func | `(i32 i32 i32) -> (i32)` |
| 32 | `jCJ1.u9z4` | func | `(i32) -> (i32)` |
| 33 | `jCJ1.MZiG` | func | `(i32 i32) -> ()` |
| 34 | `jCJ1.kpMm` | func | `(i32) -> (i32)` |
| 35 | `jCJ1.fxTG` | func | `(i32) -> (i32)` |
| 36 | `jCJ1.xoEx` | func | `(i32 i32 i32) -> (i32)` |
| 37 | `jCJ1.K4gg` | func | `(i32) -> (i32)` |
| 38 | `jCJ1.TAlG` | func | `(i32) -> (i32)` |
| 39 | `jCJ1.zwk6` | func | `(i32) -> (i32)` |
| 40 | `jCJ1.O7oD` | func | `(i32 i32) -> (i32)` |
| 41 | `jCJ1.f0ry` | func | `(i32 i32 i32 i32) -> ()` |
| 42 | `jCJ1.lPrq` | func | `(i32) -> (i32)` |
| 43 | `jCJ1.Db9R` | func | `(i32 i32 i32 i32) -> ()` |
| 44 | `jCJ1.vlYm` | func | `() -> (f64)` |
| 45 | `jCJ1.PeQO` | func | `(i32) -> (i32)` |
| 46 | `jCJ1.KPQS` | func | `(i32 i32 i32 i32) -> ()` |
| 47 | `jCJ1.skcZ` | func | `(i32 i32 i32) -> (i32)` |
| 48 | `jCJ1.mr0V` | func | `(i32 i32 i32) -> ()` |
| 49 | `jCJ1.CqDV` | func | `(i32 i32 i32) -> ()` |
| 50 | `jCJ1.RQnc` | func | `(i32 i32 i32) -> ()` |
| 51 | `jCJ1.f0bU` | func | `(i32 i32 i32 i32) -> ()` |
| 52 | `jCJ1.IOum` | func | `(i32 i32 i32 i32) -> ()` |
| 53 | `jCJ1.h9jq` | func | `(i32 i32) -> ()` |
| 54 | `jCJ1.Px9m` | func | `(i32 i32) -> ()` |
| 55 | `jCJ1.EP4t` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 56 | `jCJ1.PHzB` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 57 | `jCJ1.AyTF` | func | `(i32 f32 f32) -> ()` |
| 58 | `jCJ1.Gxl8` | func | `(i32 f32 f32) -> ()` |
| 59 | `jCJ1.BWpV` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 60 | `jCJ1.ZjXk` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 61 | `jCJ1.ZYP3` | func | `(i32 i32 i32 i32) -> ()` |
| 62 | `jCJ1.IYP4` | func | `(i32 i32 i32 i32) -> ()` |
| 63 | `jCJ1.T9ba` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 64 | `jCJ1.xiRY` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 65 | `jCJ1.gKUz` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 66 | `jCJ1.EXi2` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 67 | `jCJ1.q7kY` | func | `(i32 i32 i32) -> ()` |
| 68 | `jCJ1.Y25S` | func | `(i32 i32 i32) -> ()` |
| 69 | `jCJ1.J8Fz` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 70 | `jCJ1.Fz9P` | func | `(i32 i32 i32) -> ()` |
| 71 | `jCJ1.yiVp` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 72 | `jCJ1.vere` | func | `(i32) -> (i32)` |
| 73 | `jCJ1.ljaO` | func | `(i32) -> ()` |
| 74 | `jCJ1.QCQH` | func | `(i32) -> (i32)` |
| 75 | `jCJ1.Dgzd` | func | `(i32 i32) -> (i32)` |
| 76 | `jCJ1.kiJe` | func | `(i32 i32 i32) -> (i32)` |
| 77 | `jCJ1.dKss` | func | `(i32 i32 i32) -> ()` |
| 78 | `jCJ1.keLV` | func | `(i32 i32 i32 i32) -> (i32)` |
| 79 | `jCJ1.TL83` | func | `() -> (f64)` |
| 80 | `jCJ1.YN52` | func | `() -> (f64)` |
| 81 | `jCJ1.ojKe` | func | `(i32 i32) -> ()` |
| 82 | `jCJ1.fNMr` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 83 | `jCJ1.SuVI` | func | `(i32 i32 i32) -> (i32)` |
| 84 | `jCJ1.x4h4` | func | `(i32 i32 i32) -> ()` |
| 85 | `jCJ1.IVOX` | func | `(i32 i32 i32) -> ()` |
| 86 | `jCJ1.VNZh` | func | `(i32 i32) -> ()` |
| 87 | `jCJ1.hCCe` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 88 | `jCJ1.KQGT` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 89 | `jCJ1.BAN6` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 90 | `jCJ1.dgDb` | func | `(i32 i32) -> ()` |
| 91 | `jCJ1.zBIq` | func | `(i32 i32) -> ()` |
| 92 | `jCJ1.IW2F` | func | `(i32) -> (i32)` |
| 93 | `jCJ1.MpR5` | func | `(i32 i32 i32) -> ()` |
| 94 | `jCJ1.otcE` | func | `(i32 i32 i32) -> ()` |
| 95 | `jCJ1.hGYk` | func | `(i32) -> (i32)` |
| 96 | `jCJ1.qEhy` | func | `(i32) -> (i32)` |
| 97 | `jCJ1.s431` | func | `(i32 i32) -> ()` |
| 98 | `jCJ1.Oh4w` | func | `(i32 i32) -> ()` |
| 99 | `jCJ1.XfVK` | func | `(i32 i32) -> ()` |
| 100 | `jCJ1.IA56` | func | `(i32 i32) -> ()` |
| 101 | `jCJ1.B8i6` | func | `(i32 i32 i32) -> ()` |
| 102 | `jCJ1.ik0s` | func | `(i32 i32 i32) -> ()` |
| 103 | `jCJ1.OwT7` | func | `(i32 i32 f32) -> ()` |
| 104 | `jCJ1.ohWH` | func | `(i32 i32 f32) -> ()` |
| 105 | `jCJ1.ovWO` | func | `(i32 i32 i32) -> ()` |
| 106 | `jCJ1.e0id` | func | `(i32 i32 f32 f32) -> ()` |
| 107 | `jCJ1.dNyV` | func | `(i32 i32 f32 f32) -> ()` |
| 108 | `jCJ1.RfoT` | func | `(i32 i32) -> ()` |
| 109 | `jCJ1.cTNk` | func | `(i32 i32) -> ()` |
| 110 | `jCJ1.oYJ2` | func | `(i32 i32) -> ()` |
| 111 | `jCJ1.wol1` | func | `(i32 i32) -> ()` |
| 112 | `jCJ1.J9Y7` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 113 | `jCJ1.jDxv` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 114 | `jCJ1.DloE` | func | `(i32 i32 i32) -> (i32)` |
| 115 | `jCJ1.qFm6` | func | `(i32 i32 i32) -> ()` |
| 116 | `jCJ1.Oqis` | func | `(i32 i32 i32) -> ()` |
| 117 | `jCJ1.BAjC` | func | `(i32 i32 i32 i32) -> ()` |
| 118 | `jCJ1.NSnS` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 119 | `jCJ1.DEnm` | func | `(i32 i32) -> ()` |
| 120 | `jCJ1.vjZu` | func | `(i32 i32) -> ()` |
| 121 | `jCJ1.JcdM` | func | `(i32 i32) -> (i32)` |
| 122 | `jCJ1.vFJp` | func | `(i32 i32) -> (i32)` |
| 123 | `jCJ1.AX98` | func | `(i32 i32) -> ()` |
| 124 | `jCJ1.oMVi` | func | `(i32 i32) -> ()` |
| 125 | `jCJ1.N6qU` | func | `(i32) -> (i32)` |
| 126 | `jCJ1.UAXD` | func | `(i32 i32) -> ()` |
| 127 | `jCJ1.TiOI` | func | `(i32 i32) -> ()` |
| 128 | `jCJ1.sXyl` | func | `(i32 i32 i32 i32) -> ()` |
| 129 | `jCJ1.oyNr` | func | `(i32 i32 i32) -> ()` |
| 130 | `jCJ1.eLCm` | func | `(i32 i32 i32) -> ()` |
| 131 | `jCJ1.Z0xP` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 132 | `jCJ1.CZ09` | func | `(i32 i32) -> ()` |
| 133 | `jCJ1.c5Ys` | func | `(i32 i32 i32) -> ()` |
| 134 | `jCJ1.D0pA` | func | `(i32 i32 i32) -> ()` |
| 135 | `jCJ1.RWI3` | func | `(i32 i32 i32) -> ()` |
| 136 | `jCJ1.a0bY` | func | `(i32 i32 i32) -> ()` |
| 137 | `jCJ1.unw3` | func | `(i32) -> ()` |
| 138 | `jCJ1.AdxU` | func | `(i32 i32 i32) -> ()` |
| 139 | `jCJ1.Z760` | func | `(i32 i32 i32) -> (i32)` |
| 140 | `jCJ1.Z2Yj` | func | `(i32 i32) -> ()` |
| 141 | `jCJ1.ZinP` | func | `(i32) -> (i32)` |
| 142 | `jCJ1.IYCw` | func | `(i32 i32) -> ()` |
| 143 | `jCJ1.bduK` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 144 | `jCJ1.XJQ1` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 145 | `jCJ1.P3rZ` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 146 | `jCJ1.C22y` | func | `(i32 i32 i32) -> (i32)` |
| 147 | `jCJ1.E5Yx` | func | `(i32 i32 i32) -> (i32)` |
| 148 | `jCJ1.xCFR` | func | `(i32 i32) -> ()` |
| 149 | `jCJ1.tKLt` | func | `(i32 i32) -> ()` |
| 150 | `jCJ1.cKEL` | func | `(i32 i32) -> ()` |
| 151 | `jCJ1.urqa` | func | `(i32 i32) -> ()` |
| 152 | `jCJ1.Zq83` | func | `(i32) -> (i32)` |
| 153 | `jCJ1.HcPQ` | func | `(i32) -> (i32)` |
| 154 | `jCJ1.Lj6A` | func | `(i32) -> (i32)` |
| 155 | `jCJ1.XurB` | func | `(i32) -> (i32)` |
| 156 | `jCJ1.Byl3` | func | `() -> (i32)` |
| 157 | `jCJ1.kaFR` | func | `() -> (i32)` |
| 158 | `jCJ1.NZWz` | func | `() -> (i32)` |
| 159 | `jCJ1.QaZy` | func | `() -> (i32)` |
| 160 | `jCJ1.kbPm` | func | `(i32 i32) -> (i32)` |
| 161 | `jCJ1.oX8K` | func | `(i32) -> ()` |
| 162 | `jCJ1.Rm91` | func | `(i32 i32) -> (i32)` |
| 163 | `jCJ1.f9vK` | func | `(i32) -> (i32)` |
| 164 | `jCJ1.l2BY` | func | `(i32) -> (i32)` |
| 165 | `jCJ1.aJYS` | func | `(i32) -> (i32)` |
| 166 | `jCJ1.y5wW` | func | `(i32) -> ()` |
| 167 | `jCJ1.GW1K` | func | `(i32 i32 i32) -> (i32)` |
| 168 | `jCJ1.AgfK` | func | `(i32) -> (i32)` |
| 169 | `jCJ1.plCQ` | func | `(i32) -> (i32)` |
| 170 | `jCJ1.eunU` | func | `(i32 i32) -> (i32)` |
| 171 | `jCJ1.FrG2` | func | `(i32) -> ()` |
| 172 | `jCJ1.znNb` | func | `() -> (i32)` |
| 173 | `jCJ1.AFxm` | func | `(i32 i32) -> (i32)` |
| 174 | `jCJ1.KYeK` | func | `(i32 i32) -> ()` |
| 175 | `jCJ1.MUuN` | func | `(i32 i32) -> ()` |
| 176 | `jCJ1.Gqh3` | func | `(i32) -> (i32)` |
| 177 | `jCJ1.JPgY` | func | `(i32 i32) -> (i32)` |
| 178 | `jCJ1.rzAo` | func | `(i32) -> ()` |
| 179 | `jCJ1.I8mY` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 180 | `jCJ1.RU9j` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 181 | `jCJ1.n9ye` | func | `(i32 i32) -> ()` |
| 182 | `jCJ1.xqi8` | func | `(i32 i32) -> ()` |
| 183 | `jCJ1.lgUQ` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 184 | `jCJ1.mbhF` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 185 | `jCJ1.HEVD` | func | `(i32 f32) -> ()` |
| 186 | `jCJ1.VCbC` | func | `(i32 f32) -> ()` |
| 187 | `jCJ1.isZt` | func | `(i32 i32) -> ()` |
| 188 | `jCJ1.SRK7` | func | `(i32 i32) -> ()` |
| 189 | `jCJ1.EMss` | func | `(i32) -> (i32)` |
| 190 | `jCJ1.zzvn` | func | `(i32) -> (i32)` |
| 191 | `jCJ1.TdYS` | func | `(i32) -> (i32)` |
| 192 | `jCJ1.MUyx` | func | `(i32) -> (i32)` |
| 193 | `jCJ1.w2kw` | func | `(i32 i32 i32) -> ()` |
| 194 | `jCJ1.lFLu` | func | `(i32 i32 i32) -> ()` |
| 195 | `jCJ1.jU67` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 196 | `jCJ1.npgW` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 197 | `jCJ1.nRhW` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 198 | `jCJ1.n9qj` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 199 | `jCJ1.WWGK` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 200 | `jCJ1.VKHc` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 201 | `jCJ1.LHoM` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 202 | `jCJ1.bmqO` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 203 | `jCJ1.Yp54` | func | `(i32) -> (i32)` |
| 204 | `jCJ1.qBTc` | func | `(i32) -> (i32)` |
| 205 | `jCJ1.uFlc` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 206 | `jCJ1.dlMQ` | func | `(i32 i32 i32 i32) -> ()` |
| 207 | `jCJ1.zYSb` | func | `(i32 i32 i32 i32) -> ()` |
| 208 | `jCJ1.VsIv` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 209 | `jCJ1.Cljh` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 210 | `jCJ1.yvZL` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 211 | `jCJ1.p2TG` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 212 | `jCJ1.tfKa` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 213 | `jCJ1.RLus` | func | `(i32 i32 i32) -> ()` |
| 214 | `jCJ1.WMx3` | func | `(i32 i32 i32) -> ()` |
| 215 | `jCJ1.jNOG` | func | `(i32 i32) -> ()` |
| 216 | `jCJ1.PEaF` | func | `(i32 i32) -> ()` |
| 217 | `jCJ1.iigh` | func | `(i32 i32) -> ()` |
| 218 | `jCJ1.mE8T` | func | `(i32 i32) -> ()` |
| 219 | `jCJ1.N5Qc` | func | `(i32 i32) -> ()` |
| 220 | `jCJ1.HpIL` | func | `(i32 i32) -> ()` |
| 221 | `jCJ1.ESCh` | func | `(i32 f32 f32) -> ()` |
| 222 | `jCJ1.knPS` | func | `(i32 f32 f32) -> ()` |
| 223 | `jCJ1.ogMM` | func | `(i32 i32) -> ()` |
| 224 | `jCJ1.eU6l` | func | `(i32 i32) -> ()` |
| 225 | `jCJ1.nsWt` | func | `(i32 i32 i32 f32) -> ()` |
| 226 | `jCJ1.dgYj` | func | `(i32 i32 i32 f32) -> ()` |
| 227 | `jCJ1.mbMh` | func | `(i32 i32 i32) -> ()` |
| 228 | `jCJ1.TCHX` | func | `(i32) -> (i32)` |
| 229 | `jCJ1.pw0Q` | func | `(i32) -> (i32)` |
| 230 | `jCJ1.MCj4` | func | `(i32 i32) -> ()` |
| 231 | `jCJ1.jHDz` | func | `(i32 i32) -> ()` |
| 232 | `jCJ1.RccG` | func | `(i32 i32 i32 i32) -> (i32)` |
| 233 | `jCJ1.OTQ4` | func | `(i32 i32 i32 i32) -> ()` |
| 234 | `jCJ1.ibH0` | func | `(i32 i32 i32 i32) -> (i32)` |
| 235 | `jCJ1.nYyF` | func | `(i32 i32 i32 i32) -> (i32)` |
| 236 | `jCJ1.OazY` | func | `(i32 i32 i32 i32) -> (i32)` |
| 237 | `jCJ1.mluK` | func | `(i32 i32 i32) -> ()` |
| 238 | `jCJ1.IyVv` | func | `(i32 i32 i32) -> ()` |
| 239 | `jCJ1.jyF1` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 240 | `jCJ1.lozC` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 241 | `jCJ1.EDh5` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 242 | `jCJ1.wjdw` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 243 | `jCJ1.r9oy` | func | `(i32) -> (i32)` |
| 244 | `jCJ1.A5jF` | func | `(i32) -> (i32)` |
| 245 | `jCJ1.OP9Z` | func | `(i32 i32 i32 i32) -> ()` |
| 246 | `jCJ1.o5Ju` | func | `(i32 i32) -> ()` |
| 247 | `jCJ1.FPkW` | func | `(i32 i32) -> ()` |
| 248 | `jCJ1.WNkD` | func | `(i32 i32) -> (i32)` |
| 249 | `jCJ1.eI8A` | func | `(i32 i32) -> (i32)` |
| 250 | `jCJ1.FhYX` | func | `(i32 i32 i32 i32) -> ()` |
| 251 | `jCJ1.Zlr2` | func | `(i32 i32 i32 i32) -> ()` |
| 252 | `jCJ1.yPqw` | func | `(i32 i32) -> ()` |
| 253 | `jCJ1.ZQfj` | func | `(i32 i32) -> ()` |
| 254 | `jCJ1.gIm1` | func | `(i32) -> (i32)` |
| 255 | `jCJ1.RHUe` | func | `(i32 i32 i32 i32) -> ()` |
| 256 | `jCJ1.czLQ` | func | `(i32 i32 i32 f32) -> ()` |
| 257 | `jCJ1.RCAT` | func | `(i32 i32) -> ()` |
| 258 | `jCJ1.IxDe` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 259 | `jCJ1.UBeR` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 260 | `jCJ1.FMVW` | func | `(i32 i32) -> ()` |
| 261 | `jCJ1.RUmJ` | func | `(i32 i32) -> ()` |
| 262 | `jCJ1.HOG9` | func | `(i32 i32) -> ()` |
| 263 | `jCJ1.AbEB` | func | `(i32 i32) -> ()` |
| 264 | `jCJ1.xVuJ` | func | `(i32 i32) -> ()` |
| 265 | `jCJ1.W437` | func | `(i32 i32) -> ()` |
| 266 | `jCJ1.iybg` | func | `(i32 i32) -> ()` |
| 267 | `jCJ1.YG8G` | func | `(i32) -> (i32)` |
| 268 | `jCJ1.wQLv` | func | `(i32) -> (i32)` |
| 269 | `jCJ1.ivAN` | func | `(i32) -> (i32)` |
| 270 | `jCJ1.CaVr` | func | `(i32) -> (i32)` |
| 271 | `jCJ1.Nivn` | func | `(i32 i32 i32 i32) -> ()` |
| 272 | `jCJ1.XrFO` | func | `(i32) -> ()` |
| 273 | `jCJ1.HHhp` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 274 | `jCJ1.TrUa` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 275 | `jCJ1.pems` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 276 | `jCJ1.uQPl` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 277 | `jCJ1.hDyE` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 278 | `jCJ1.xzw2` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 279 | `jCJ1.eA1j` | func | `(i32) -> (i32)` |
| 280 | `jCJ1.NWuy` | func | `(i32) -> (i32)` |
| 281 | `jCJ1.PYm0` | func | `(i32) -> (i32)` |
| 282 | `jCJ1.uuwd` | func | `(i32) -> (i32)` |
| 283 | `jCJ1.WGbD` | func | `(i32 i32) -> ()` |
| 284 | `jCJ1.HXEo` | func | `(i32) -> ()` |
| 285 | `jCJ1.xHBe` | func | `(i32 i32) -> ()` |
| 286 | `jCJ1.lGTA` | func | `(i32) -> (i32)` |
| 287 | `jCJ1.rScC` | func | `(i32 i32) -> (i32)` |
| 288 | `jCJ1.hXuG` | func | `(i32 i32) -> (i32)` |
| 289 | `jCJ1.FqeO` | func | `(i32 i32) -> (i32)` |
| 290 | `jCJ1.Wu0z` | func | `(f64) -> (i32)` |
| 291 | `jCJ1.w04Y` | func | `(i32 i32) -> (i32)` |
| 292 | `jCJ1.rxgg` | func | `(i32 i32) -> (i32)` |
| 293 | `jCJ1.GHTN` | func | `(i32 i32) -> (i32)` |
| 294 | `jCJ1.jzEX` | func | `(i32 i32) -> (i32)` |
| 295 | `jCJ1.Le3a` | func | `(i32 i32) -> (i32)` |
| 296 | `jCJ1.oSVP` | func | `(i32 i32) -> (i32)` |
| 297 | `jCJ1.nrMD` | func | `(i32 i32) -> (i32)` |
| 298 | `jCJ1.oPtM` | func | `(i32 i32) -> (i32)` |

## Exports

154 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `Nq5p` | func | 1317 | `(i32 i32 i32) -> (i32)` |
| `yTYD` | func | 1847 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `kD0Y` | func | 1525 | `(i32 i32 i32 i32) -> (i32)` |
| `BxgS` | func | 1104 | `(i32 i32) -> (i32)` |
| `pseD` | func | 1718 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `UPaq` | func | 2778 | `(i32) -> (i32)` |
| `WHAS` | func | 2433 | `(i32) -> (i32)` |
| `a7ml` | func | 2432 | `(i32) -> (i32)` |
| `iPL4` | func | 1730 | `(i32 i32) -> (i32)` |
| `ykqo` | func | 2466 | `(i32) -> (i32)` |
| `PmIC` | func | 2957 | `(i32 i32) -> (i32 i32)` |
| `Htr0` | func | 2429 | `(i32) -> (i32)` |
| `pJiz` | func | 2930 | `(i32 i32) -> ()` |
| `WAo7` | func | 2407 | `(i32 i32 i32 i32 i32 i32 f64 i32) -> (i32)` |
| `G2YD` | func | 2455 | `(i32) -> (i32)` |
| `A4nW` | func | 2444 | `(i32) -> (i32)` |
| `wK7k` | func | 1417 | `(i32 i32 i32) -> ()` |
| `aSrb` | func | 1570 | `(i32 f64 f64 f64) -> (i32)` |
| `tHIz` | func | 2949 | `(i32 i32 i32) -> (i32 i32)` |
| `kPwm` | func | 2411 | `(i32) -> (i32)` |
| `lnhJ` | func | 1566 | `(i32 i32) -> ()` |
| `W4be` | func | 2456 | `(i32 i32) -> (i32)` |
| `Tp1Y` | func | 2985 | `() -> (i32 i32)` |
| `b0gN` | func | 3017 | `(i32 i32 i32) -> ()` |
| `OIx5` | func | 1841 | `(i32 i32) -> (i32)` |
| `UJnU` | func | 726 | `(i32 i32 i32 i32) -> (i32)` |
| `nkNR` | func | 3073 | `(i32 i32 i32) -> ()` |
| `B358` | func | 2147 | `(i32 i32) -> (i32)` |
| `sY38` | func | 1452 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `FvTK` | func | 2897 | `() -> ()` |
| `B5Tw` | func | 1246 | `(i32 i32 i32) -> (i32)` |
| `MoRo` | func | 2960 | `(i32 i32) -> (i32 i32)` |
| `sU5L` | func | 2984 | `() -> (i32 i32)` |
| `pDUN` | func | 2427 | `(i32) -> (i32)` |
| `slrd` | func | 2464 | `(i32) -> (i32)` |
| `z7fp` | func | 1856 | `(i32) -> ()` |
| `r7NO` | global | 1 | `` |
| `RlMm` | func | 2917 | `(i32 i32) -> (i32)` |
| `erIf` | func | 2246 | `(i32 i32) -> ()` |
| `vEkx` | func | 907 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `id2T` | func | 2472 | `() -> (i32)` |
| `Q4us` | func | 2296 | `(i32 i32) -> (i32)` |
| `Lbav` | func | 2426 | `(i32) -> (i32)` |
| `KgBc` | func | 1915 | `(i32 i32 i32 i32) -> ()` |
| `LHsO` | func | 2716 | `(i32) -> (i32)` |
| `UY0D` | func | 1413 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `xMtG` | func | 897 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `xREe` | func | 3008 | `(i32 i32 i32 i32) -> ()` |
| `Phkk` | func | 2424 | `(i32) -> (f64)` |
| `YB7f` | func | 1489 | `(i32 i32) -> (i32)` |
| `glu6` | func | 1492 | `(i32 f64) -> (f64)` |
| `lWGm` | func | 1913 | `(i32) -> (i32)` |
| `zCqU` | func | 3119 | `() -> (f64)` |
| `DaUv` | func | 1496 | `(i32) -> (i32)` |
| `memory` | memory | 0 | `` |
| `uU3M` | func | 735 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `xQNX` | func | 2425 | `(i32) -> (i32)` |
| `MjKW` | func | 3124 | `(i32) -> ()` |
| `tbop` | func | 1855 | `(i32) -> ()` |
| `TgRn` | func | 2447 | `(i32) -> (i32)` |
| `Wh0d` | func | 1467 | `(i32 i32) -> (i32)` |
| `rL5K` | func | 2430 | `(i32) -> (i32)` |
| `sa3n` | func | 1788 | `() -> (i32)` |
| `s4x1` | func | 2465 | `(i32) -> (i32)` |
| `Y9Eh` | func | 1206 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `CWZe` | func | 1102 | `(i32 i32) -> (i32)` |
| `bK3J` | func | 1307 | `(i32) -> ()` |
| `k1hg` | func | 2457 | `(i32 i32) -> (i32)` |
| `wBOE` | func | 1740 | `(i32) -> (i32)` |
| `XRef` | func | 2216 | `(i32 i32) -> ()` |
| `QUYU` | func | 1490 | `(i32 i32) -> (i32)` |
| `YLUZ` | func | 663 | `(i32 i32) -> (i32)` |
| `NmN7` | func | 2954 | `(i32 i32) -> (i32 i32)` |
| `LSMz` | func | 2973 | `(i32) -> (i32 i32)` |
| `DIgh` | func | 2384 | `(i32) -> (i32)` |
| `bm2s` | func | 1418 | `() -> (i32)` |
| `sGo9` | func | 1165 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `QG4l` | global | 2 | `` |
| `FWll` | func | 3147 | `() -> (i32)` |
| `JjpE` | func | 674 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `nfhR` | func | 2959 | `(i32 i32) -> (i32 i32)` |
| `CzsZ` | func | 1460 | `(i32 i32 i32 i32) -> (i32)` |
| `l6zy` | func | 2338 | `(i32 f64) -> (i32)` |
| `hu7H` | func | 567 | `(i32 i32 i32) -> (i32)` |
| `UzxZ` | func | 3018 | `(i32 i32) -> ()` |
| `P4J2` | func | 2114 | `(i32 i32) -> (i32)` |
| `TcYn` | func | 2955 | `(i32 i32) -> (i32 i32)` |
| `fKag` | func | 987 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `eAl2` | func | 2923 | `(i32 i32 i32 i32) -> (i32)` |
| `U0Jb` | func | 1819 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `Za8w` | func | 2756 | `(i32) -> ()` |
| `xMsB` | func | 881 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `GScz` | func | 2548 | `(i32 i32) -> ()` |
| `VT8V` | func | 2341 | `(i32 i32 i32 i32) -> (i32)` |
| `asha` | func | 2722 | `(i32) -> (i32)` |
| `aKiO` | func | 2115 | `(i32 i32) -> (i32)` |
| `bmgg` | func | 1270 | `(i32) -> (i32)` |
| `et96` | func | 2294 | `(i32 i32) -> (i32)` |
| `jqd5` | func | 2367 | `(i32) -> (i32)` |
| `CMjo` | func | 1199 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `maqC` | func | 2410 | `(i32 i32) -> ()` |
| `av4n` | func | 2445 | `(i32) -> (i32)` |
| `zvOT` | func | 1806 | `(i32 i32 i32 i32) -> (i32)` |
| `RprA` | func | 1832 | `(i32 i32) -> ()` |
| `u2c6` | func | 3046 | `() -> (i32)` |
| `yJFo` | func | 2167 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `T7uy` | func | 801 | `(i32 i32) -> (i32)` |
| `V9Iz` | func | 1387 | `(i32 i32) -> (i32)` |
| `R04E` | func | 2295 | `(i32 i32) -> (i32)` |
| `xxYh` | func | 1697 | `(i32) -> (i32)` |
| `Mojw` | func | 1367 | `(i32 f64 f64) -> (i32)` |
| `ntEb` | func | 1366 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `ob5M` | func | 3079 | `(i32) -> ()` |
| `V1YK` | func | 2446 | `(i32 i32) -> ()` |
| `X9GY` | func | 1456 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `lrXJ` | func | 3123 | `(i32) -> (i32)` |
| `HtsE` | func | 1990 | `(i32 f64 f64 f64) -> (i32)` |
| `V6tc` | func | 749 | `(i32 i32 i32) -> (i32)` |
| `DPyX` | func | 729 | `(i32) -> (i32)` |
| `zNqT` | func | 699 | `(i32 i32) -> (i32)` |
| `Nu8G` | func | 2505 | `(i32 i32) -> ()` |
| `gsQO` | func | 2431 | `(i32) -> ()` |
| `ctVK` | func | 1565 | `(i32 i32) -> ()` |
| `zAha` | func | 2549 | `() -> (i32)` |
| `Lx5C` | func | 2958 | `(i32 i32) -> (i32 i32)` |
| `AwWM` | func | 1948 | `(i32 i32) -> ()` |
| `zSXr` | func | 2971 | `(i32) -> (i32 i32)` |
| `fnmn` | func | 1225 | `(i32 i32) -> (i32)` |
| `ckX0` | func | 1200 | `(i32 i32 i32 i32) -> (i32)` |
| `hS2c` | func | 1975 | `(i32 f64) -> (i32)` |
| `yktC` | func | 2094 | `(i32 i32) -> ()` |
| `MvAc` | func | 1604 | `(i32 i32 i32 i32) -> (i32)` |
| `Ilqe` | func | 1555 | `(i32 i32) -> (i32)` |
| `bvRq` | func | 1103 | `(i32 i32) -> ()` |
| `a19l` | func | 2972 | `(i32) -> (i32 i32)` |
| `hrnv` | func | 3146 | `() -> (i32)` |
| `tMt3` | func | 2442 | `(i32 i32) -> ()` |
| `sBic` | func | 1827 | `(i32 i32 f64 f64 f64) -> ()` |
| `pq9I` | func | 2434 | `(i32) -> (i32)` |
| `nz2P` | func | 2948 | `(i32 i32 i32) -> (i32 i32)` |
| `DTVY` | func | 1672 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `Oq3g` | func | 1439 | `(i32 i32 i32 i32) -> ()` |
| `ppCd` | func | 2328 | `(i32 i32) -> (i32)` |
| `wFYj` | func | 2428 | `(i32) -> (i32)` |
| `tUry` | func | 1279 | `(i32 i32) -> (i32)` |
| `hR8p` | func | 2956 | `(i32 i32) -> (i32 i32)` |
| `X3Q9` | func | 2897 | `() -> ()` |
| `FnWR` | func | 2734 | `(i32) -> (i32)` |
| `hxuE` | func | 1712 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `Qxeb` | func | 2970 | `(i32) -> (i32 i32)` |
| `GExa` | func | 1507 | `(i32 i32 i32) -> (i32)` |
| `A2Pf` | func | 2293 | `(i32 i32) -> (i32)` |
| `zsFb` | func | 2745 | `(i32) -> (i32)` |
| `YJ1I` | func | 1478 | `(i32 i32) -> (i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- memory 0: min 40 pages · max 14,648 · shared=False
- table 0: funcref · min 750 · max 750
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2560896, `i32` = i32.const 2561460

## Functions

- 2,859 bodies · 3,973,490 code bytes · avg 1.4 KB
- instruction scan: 2,859 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 155 |
| <= 64 bytes | 114 |
| <= 128 bytes | 247 |
| <= 256 bytes | 375 |
| <= 512 bytes | 657 |
| <= 1024 bytes | 563 |
| <= 2048 bytes | 412 |
| <= 4096 bytes | 182 |
| <= 8192 bytes | 89 |
| <= 16384 bytes | 31 |
| > 16384 bytes | 34 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32) -> ()` | 212 | 192,991 | 87,565 | local.get×25662, i32.const×9842, i32.load×5578, local.set×4652, local.tee×4610 |
| 1 | `(i32 i32 i32 i32 i32) -> ()` | 147 | 112,425 | 54,493 | local.get×15165, i32.const×6512, i32.add×3173, local.set×3077, i32.load×2945 |
| 2 | `(i32 i32 i32 i32 i32 i32) -> ()` | 131 | 45,767 | 21,024 | local.get×6153, i32.const×2763, local.set×1198, i32.add×1098, i32.load×997 |
| 3 | `(i32 i32) -> ()` | 123 | 48,628 | 22,511 | local.get×6329, i32.const×2250, local.set×1325, local.tee×1179, i32.load×1035 |
| 4 | `(i32 i32) -> ()` | 59 | 29,628 | 14,267 | local.get×4192, i32.const×1730, i32.load×1042, local.set×931, i32.add×815 |
| 5 | `(i32 i32) -> ()` | 90 | 26,104 | 12,597 | local.get×3709, i32.const×1386, local.set×779, i32.load×721, local.tee×701 |
| 6 | `(i32 i32 i32 i32 i32) -> ()` | 134 | 32,140 | 15,936 | local.get×4504, i32.const×2183, local.set×1128, i32.add×1053, local.tee×790 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 58 | 21,484 | 10,525 | local.get×2903, i32.const×1490, local.set×728, i32.add×591, local.tee×504 |
| 8 | `(i32 i32) -> ()` | 93 | 19,080 | 9,200 | local.get×2643, i32.const×1025, local.tee×571, local.set×554, i32.load×531 |
| 9 | `(i32 i32 i32 i32) -> ()` | 105 | 26,546 | 12,837 | local.get×3810, i32.const×1624, local.set×997, i32.add×682, i32.load×663 |
| 10 | `(i32 i32 i32 i32 i32 i32) -> ()` | 130 | 20,622 | 9,288 | local.get×2540, i32.const×1209, local.set×548, local.tee×388, end×388 |
| 11 | `(i32 i32 i32 i32) -> ()` | 53 | 24,505 | 11,634 | local.get×3005, i32.const×1276, local.tee×731, end×592, i32.load×586 |
| 12 | `(i32 i32 i32) -> (i32)` | 74 | 22,862 | 10,729 | local.get×2867, i32.const×1226, i32.load×803, local.set×500, end×462 |
| 13 | `(i32 i32 i32) -> (i32)` | 77 | 18,924 | 8,934 | local.get×2485, i32.const×1224, i32.load×559, i32.add×543, local.set×525 |
| 17 | `(i32) -> ()` | 78 | 19,740 | 9,222 | local.get×2551, i32.const×1095, i32.add×574, local.set×506, local.tee×504 |
| 18 | `(i32 i32) -> ()` | 95 | 28,847 | 13,556 | local.get×4112, i32.const×1781, i32.add×687, i32.load×632, local.set×632 |
| 22 | `(i32 i32) -> ()` | 82 | 29,008 | 13,035 | local.get×4617, i32.const×1454, i32.store×702, i32.add×688, local.tee×644 |
| 23 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 64 | 24,285 | 11,198 | local.get×2682, i32.const×1711, local.set×821, end×663, block×465 |
| 27 | `(i32 i32 i32 i32 i32) -> ()` | 68 | 21,800 | 10,079 | local.get×3118, i32.const×1240, local.tee×623, i32.add×436, i32.load×331 |
| 33 | `(i32 i32 i32 i32 i32) -> ()` | 65 | 18,015 | 8,704 | local.get×2378, i32.const×1095, local.set×628, local.tee×459, i32.add×442 |
| 63 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 99 | 32,154 | 15,014 | local.get×4317, i32.const×1963, i32.load×986, local.set×902, i32.add×812 |
| 191 | `(i32 i32) -> ()` | 10 | 26,844 | 12,930 | local.get×4543, i32.load×1219, i32.const×1046, end×803, i32.add×744 |
| 223 | `(i32) -> ()` | 19 | 23,160 | 10,851 | local.get×2722, i32.load×1494, i32.const×1177, local.tee×1008, end×853 |
| 708 | `(i32 i32 i32 i32) -> ()` | 54 | 21,809 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 993 | `(i32 i32) -> ()` | 138 | 42,558 | 20,102 | local.get×5237, i32.const×2322, local.tee×1192, i32.add×1062, local.set×1007 |
| 1542 | `(i32 i32) -> (i32)` | 179 | 53,994 | 19,612 | local.get×6504, i32.const×2604, i64.store×1855, i64.const×1046, i64.load×1028 |
| 1936 | `(i32 i32) -> ()` | 110 | 38,694 | 17,216 | local.get×5028, i32.const×1620, local.set×859, local.tee×753, end×661 |
| 2535 | `(i32 i32) -> ()` | 397 | 139,328 | 62,996 | local.get×18108, i32.const×7882, local.set×3752, i32.load×3121, end×2777 |
| 2811 | `(i32 i32 i32 i32) -> ()` | 137 | 30,179 | 13,747 | local.get×4098, i32.const×1458, local.tee×695, local.set×679, i32.load×613 |
| 2829 | `(i32 i32) -> ()` | 135 | 32,980 | 14,764 | local.get×4135, i32.const×1957, local.set×762, local.tee×727, i32.add×680 |

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
targetcolourmaxUpSpeedforceinclinationazimuthturbidityluminancemieCoefficientmieDirectionalGsunPositionvertexTintxCameraOffsetyCameraOffsetzCameraOffsetditheringinfiniteDistanceuseSunPositionrgba(tran
schema23canChangeblockReachezBridgingezBridgingGrowMsezToweringezToweringGrowMscrouchingSpeedwalkingSpeedrunningSpeedjumpAmountairJumpCountjumpHoldThrustbunnyhopMaxMultiplierskyBoxminChunkAddDistshowP
Aspen LeavesAspen LogAspen SaplingAspen Wood PlanksBarkless Aspen LogBarkless Cedar LogBarkless Jungle LogBarkless Maple LogBarkless Pine LogBarkless Plum LogBlack PlanksBlue PlanksBookshelfBowl of Cr
Acacia LeavesAcacia LogAcacia SaplingAcacia Wood PlanksAlchemy TableBarkless Acacia LogBarkless Birch LogBarkless Dark Oak LogBarkless Elm LogBarkless Oak LogBarkless Spruce LogBirch LeavesBirch LogBi
a draw with a base vertex: WebGL2 has none, so it is skippedan indexed draw without an index buffer is skippeda draw's pipeline has no GL program: it is skippeda draw's program failed to link: it is s
standingsittingzombieglidingdrivingsleepingridingShearedSaddledskyblockHeldBossBoxBloxdBlockPersonLeaderboardParticleEmitterTier 1Tier 2Tier 3Tier 4Tier 5PlayerPigCowSheepHorseCamelIron Goofy GolemGol
EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEJJJJJJJJEEEEEEEEEEEEEJJJJJJJJEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEJJJJEEEEEEEEEEEEEEJJJJJJ
,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123,-./0123
called `Result::unwrap()` on an `Err` valueANGLE_instanced_arraysEXT_blend_minmaxEXT_color_buffer_floatEXT_color_buffer_half_floatEXT_float_blendEXT_frag_depthEXT_shader_texture_lodEXT_sRGBEXT_texture
UV2VERTEXCOLORVERTEXALPHAOPACITYRGBEMISSIVELITE_REFLECTION_LUMINANCEREFLECTIONMAP_OPPOSITEZROUGHNESSREFLECTIONOVERALPHAALPHATESTALPHATEST_AFTERALLALPHACOMPUTATIONSALPHABLENDALPHAFROMDIFFUSEPREMULTIPLY
Player_Atlasbee_set_3_attachable_bluebee_set_3_attachable_greenbee_set_3_attachable_redmedieval_set_1_attachable_bluemedieval_set_1_attachable_greenmedieval_set_1_attachable_purplemedieval_set_1_attac
staged overlay bytesmassfluidDragfluidDragHorizontalfluidDragVerticalgravityMultipliercanRunjumpMultiplierupwardImpulseOnUsecanAutoStepcanAutoStepByBlockriderOffseteffectstandingFrictionmaxPushDistanc
```

## Opcode histogram (aggregated)

| opcode | count |
|---|---:|
| `local.get` | 531,431 |
| `i32.const` | 222,741 |
| `local.tee` | 98,731 |
| `i32.load` | 93,448 |
| `local.set` | 92,543 |
| `i32.add` | 85,987 |
| `end` | 78,029 |
| `br_if` | 63,383 |
| `i32.store` | 46,345 |
| `block` | 36,742 |
| `i64.const` | 32,075 |
| `i64.store` | 31,268 |
| `if` | 29,817 |
| `call` | 28,977 |
| `i32.sub` | 24,248 |
| `i64.load` | 23,225 |
| `br` | 22,838 |
| `i32.eqz` | 19,195 |
| `select` | 16,493 |
| `i32.shl` | 16,222 |
| `i32.and` | 15,988 |
| `i32.ne` | 15,676 |
| `i32.load8_u` | 14,632 |
| `i32.eq` | 13,690 |
| `i32.store8` | 12,349 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 12, structural errors: 0
- bodies fully decoded: 2,859/2,859 (degraded: 0)
