# WASM module: `bloxd_wasm_webgl_bg`

> environment **bloxd.io** · build `igzsf.a0b73a5f` · analyzed 2026-11-25T08:36:21+09:00
> source: https://bloxd.io/static/media/bloxd_wasm_webgl_bg.8858c720a640d1fbc7fa.wasm
> 5,516,365 bytes (5.3 MB) · sha256 `8bc9810de446335f…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- name-section module id `a0965882b48955f0.10916` → `80c0b7b653b61d4f.10916` (numeric version suffix unchanged — same module version, re-randomized prefix)
- export identifiers rotated by the obfuscator: 1/157 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,915 / 299 |
| Exports / imports | 157 / 300 |
| Code bytes (function bodies) | 4,042,860 (3.9 MB) |
| Total local variables | 30,793 |
| Instructions (scanable bodies) | 1,896,294 |
| Data segments / bytes | 4,032 / 1,424,648 |
| Element segments / entries | 1 / 753 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `80c0b7b653b61d4f.10916` |
| Sections | 11 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,506 | 177 |
| 2 | import | 3,606 | 300 |
| 3 | function | 2,966 | 2915 |
| 4 | table | 7 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,257 | 157 |
| 9 | element | 1,513 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 4,048,203 | 2915 |
| 11 | data | 1,457,210 | 4032 |
| 0 | custom:name | 30 | — |

## Types

177 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32) -> ()` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

300 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `wfrq.xUXx` | memory | `[128..14648]` |
| 0 | `wfrq.E3bN` | func | `(i32) -> (f64)` |
| 1 | `wfrq.aJl3` | func | `() -> (i32)` |
| 2 | `wfrq.HUkv` | func | `(i32 i32 i32) -> (i32)` |
| 3 | `wfrq.rkcr` | func | `(i32) -> ()` |
| 4 | `wfrq.iO5Q` | func | `(i32 i32) -> (i32)` |
| 5 | `wfrq.u8Hh` | func | `(i32) -> (i32)` |
| 6 | `wfrq.vgVg` | func | `(i32 i32 i32) -> (i32)` |
| 7 | `wfrq.X9Rb` | func | `(i32 i32 i32 i32) -> (i32)` |
| 8 | `wfrq.a9WJ` | func | `(i32) -> (i32)` |
| 9 | `wfrq.r8hH` | func | `(i32 i32) -> ()` |
| 10 | `wfrq.O6v3` | func | `(i32 i32) -> ()` |
| 11 | `wfrq.AvXE` | func | `(i32 i32 i32 i32) -> (i32)` |
| 12 | `wfrq.CpqJ` | func | `(i32 i32) -> (i32)` |
| 13 | `wfrq.EVcb` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 14 | `wfrq.SMi5` | func | `(i32) -> (i32)` |
| 15 | `wfrq.zdLD` | func | `(i32 i32) -> (i32)` |
| 16 | `wfrq.FQ5R` | func | `(i32 i32) -> (i32)` |
| 17 | `wfrq.Vuq7` | func | `(i32 i32) -> ()` |
| 18 | `wfrq.Aghr` | func | `(i32) -> (i32)` |
| 19 | `wfrq.E4KA` | func | `(i32) -> (i32)` |
| 20 | `wfrq.o0Fn` | func | `(i32) -> (i32)` |
| 21 | `wfrq.AmA5` | func | `(i32) -> ()` |
| 22 | `wfrq.ajf0` | func | `(i32 i32) -> ()` |
| 23 | `wfrq.s8rC` | func | `(i32 i32) -> ()` |
| 24 | `wfrq.iewp` | func | `(i32 f64 f64 f64 f64) -> ()` |
| 25 | `wfrq.hU6M` | func | `(i32 i32 f64 f64 f64 f64 f64 f64 f64 f64) -> ()` |
| 26 | `wfrq.upMo` | func | `(i32) -> (i32)` |
| 27 | `wfrq.b4AQ` | func | `(i32 i32) -> ()` |
| 28 | `wfrq.pgPs` | func | `(i32 i32) -> (i32)` |
| 29 | `wfrq.nG5U` | func | `(i32 i32 i32 i32) -> ()` |
| 30 | `wfrq.u2CE` | func | `(i32 i32) -> (i32)` |
| 31 | `wfrq.upzV` | func | `(i32 i32 i32) -> (i32)` |
| 32 | `wfrq.by3h` | func | `(i32) -> (i32)` |
| 33 | `wfrq.ViiK` | func | `(i32 i32) -> ()` |
| 34 | `wfrq.op3C` | func | `(i32 i32 i32) -> (i32)` |
| 35 | `wfrq.W82x` | func | `(i32) -> (i32)` |
| 36 | `wfrq.tuop` | func | `(i32) -> (i32)` |
| 37 | `wfrq.wjh9` | func | `(i32) -> (i32)` |
| 38 | `wfrq.ZMSv` | func | `(i32 i32) -> (i32)` |
| 39 | `wfrq.cxUh` | func | `(i32 i32 i32 i32) -> ()` |
| 40 | `wfrq.UzQe` | func | `(i32) -> (i32)` |
| 41 | `wfrq.vZrN` | func | `(i32 i32 i32 i32) -> ()` |
| 42 | `wfrq.H9NP` | func | `() -> (f64)` |
| 43 | `wfrq.phUe` | func | `(i32) -> (i32)` |
| 44 | `wfrq.cGk9` | func | `(i32 i32 i32 i32) -> ()` |
| 45 | `wfrq.BcTb` | func | `(i32 i32 i32) -> (i32)` |
| 46 | `wfrq.xuqY` | func | `(i32 i32 i32) -> ()` |
| 47 | `wfrq.gDSs` | func | `(i32 i32 i32) -> ()` |
| 48 | `wfrq.gcUa` | func | `(i32 i32 i32) -> ()` |
| 49 | `wfrq.VO9y` | func | `(i32 i32 i32 i32) -> ()` |
| 50 | `wfrq.JCOK` | func | `(i32 i32 i32 i32) -> ()` |
| 51 | `wfrq.ClV4` | func | `(i32 i32) -> ()` |
| 52 | `wfrq.sTvr` | func | `(i32 i32) -> ()` |
| 53 | `wfrq.Gpwz` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 54 | `wfrq.j1Vp` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 55 | `wfrq.Ynzk` | func | `(i32 f32 f32) -> ()` |
| 56 | `wfrq.OYTJ` | func | `(i32 f32 f32) -> ()` |
| 57 | `wfrq.AxDl` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 58 | `wfrq.BXFH` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 59 | `wfrq.oOMf` | func | `(i32 i32 i32 i32) -> ()` |
| 60 | `wfrq.A43f` | func | `(i32 i32 i32 i32) -> ()` |
| 61 | `wfrq.l8tN` | func | `(i32 i32 i32) -> ()` |
| 62 | `wfrq.P6Vv` | func | `(i32 i32 i32) -> ()` |
| 63 | `wfrq.m9KZ` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 64 | `wfrq.g8oB` | func | `(i32 i32 i32) -> ()` |
| 65 | `wfrq.vsGp` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 66 | `wfrq.JMmH` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 67 | `wfrq.khkq` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 68 | `wfrq.qUms` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 69 | `wfrq.y1rx` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 70 | `wfrq.lTko` | func | `(i32) -> (i32)` |
| 71 | `wfrq.Cdwt` | func | `(i32) -> ()` |
| 72 | `wfrq.L5nf` | func | `(i32) -> (i32)` |
| 73 | `wfrq.r1D9` | func | `(i32 i32) -> (i32)` |
| 74 | `wfrq.z9Oq` | func | `(i32 i32 i32) -> (i32)` |
| 75 | `wfrq.jzeT` | func | `(i32 i32 i32) -> ()` |
| 76 | `wfrq.PiCt` | func | `(i32 i32 i32 i32) -> (i32)` |
| 77 | `wfrq.GUVT` | func | `() -> (f64)` |
| 78 | `wfrq.agyx` | func | `() -> (f64)` |
| 79 | `wfrq.gUAq` | func | `(i32 i32) -> ()` |
| 80 | `wfrq.YYsJ` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 81 | `wfrq.bep4` | func | `(i32 i32 i32) -> (i32)` |
| 82 | `wfrq.o9Dr` | func | `(i32 i32 i32) -> ()` |
| 83 | `wfrq.BdG1` | func | `(i32 i32 i32) -> ()` |
| 84 | `wfrq.NQ4r` | func | `(i32 i32) -> ()` |
| 85 | `wfrq.zpkM` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 86 | `wfrq.wMx8` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 87 | `wfrq.Zqir` | func | `(i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 88 | `wfrq.g2Wv` | func | `(i32 i32) -> ()` |
| 89 | `wfrq.zqNf` | func | `(i32 i32) -> ()` |
| 90 | `wfrq.UPDS` | func | `(i32) -> (i32)` |
| 91 | `wfrq.Kyux` | func | `(i32 i32 i32) -> ()` |
| 92 | `wfrq.Ydfc` | func | `(i32 i32 i32) -> ()` |
| 93 | `wfrq.bMCI` | func | `(i32) -> (i32)` |
| 94 | `wfrq.WdF8` | func | `(i32) -> (i32)` |
| 95 | `wfrq.kO7g` | func | `(i32 i32) -> ()` |
| 96 | `wfrq.CGRG` | func | `(i32 i32) -> ()` |
| 97 | `wfrq.khOQ` | func | `(i32 i32) -> ()` |
| 98 | `wfrq.KzZ6` | func | `(i32 i32) -> ()` |
| 99 | `wfrq.aREd` | func | `(i32 i32 i32) -> ()` |
| 100 | `wfrq.hv08` | func | `(i32 i32 i32) -> ()` |
| 101 | `wfrq.jx5W` | func | `(i32 i32 f32) -> ()` |
| 102 | `wfrq.iEJW` | func | `(i32 i32 f32) -> ()` |
| 103 | `wfrq.nUL0` | func | `(i32 i32 i32) -> ()` |
| 104 | `wfrq.Iogn` | func | `(i32 i32 f32 f32) -> ()` |
| 105 | `wfrq.x44X` | func | `(i32 i32 f32 f32) -> ()` |
| 106 | `wfrq.caPG` | func | `(i32 i32) -> ()` |
| 107 | `wfrq.nTv0` | func | `(i32 i32) -> ()` |
| 108 | `wfrq.EGZ7` | func | `(i32 i32) -> ()` |
| 109 | `wfrq.EjN1` | func | `(i32 i32) -> ()` |
| 110 | `wfrq.NkRq` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 111 | `wfrq.gG8U` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 112 | `wfrq.GyGf` | func | `(i32 i32 i32) -> ()` |
| 113 | `wfrq.MSpl` | func | `(i32 i32 i32) -> ()` |
| 114 | `wfrq.QrnQ` | func | `(i32 i32 i32 i32) -> ()` |
| 115 | `wfrq.qU3L` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 116 | `wfrq.evPz` | func | `(i32 i32) -> ()` |
| 117 | `wfrq.HF4S` | func | `(i32 i32) -> ()` |
| 118 | `wfrq.U3sN` | func | `(i32 i32) -> (i32)` |
| 119 | `wfrq.xIjA` | func | `(i32 i32) -> (i32)` |
| 120 | `wfrq.nAsw` | func | `(i32 i32) -> ()` |
| 121 | `wfrq.TFAp` | func | `(i32 i32) -> ()` |
| 122 | `wfrq.Cp98` | func | `(i32) -> (i32)` |
| 123 | `wfrq.d5xi` | func | `(i32 i32) -> ()` |
| 124 | `wfrq.V8Gb` | func | `(i32 i32) -> ()` |
| 125 | `wfrq.ITjW` | func | `(i32 i32 i32 i32) -> ()` |
| 126 | `wfrq.PgDw` | func | `(i32 i32 i32) -> ()` |
| 127 | `wfrq.WBge` | func | `(i32 i32 i32) -> ()` |
| 128 | `wfrq.dldO` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 129 | `wfrq.B34f` | func | `(i32 i32) -> ()` |
| 130 | `wfrq.vSLH` | func | `(i32 i32 i32) -> ()` |
| 131 | `wfrq.h4FT` | func | `(i32 i32 i32) -> ()` |
| 132 | `wfrq.iG8X` | func | `(i32 i32 i32) -> ()` |
| 133 | `wfrq.o9KW` | func | `(i32 i32 i32) -> ()` |
| 134 | `wfrq.o1i1` | func | `(i32) -> ()` |
| 135 | `wfrq.ldTU` | func | `(i32 i32 i32) -> (i32)` |
| 136 | `wfrq.MHW2` | func | `(i32 i32 i32) -> ()` |
| 137 | `wfrq.ks6t` | func | `(i32 i32 i32) -> (i32)` |
| 138 | `wfrq.IbNO` | func | `(i32 i32) -> ()` |
| 139 | `wfrq.vGFD` | func | `(i32) -> (i32)` |
| 140 | `wfrq.uJPH` | func | `(i32 i32) -> ()` |
| 141 | `wfrq.icTy` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 142 | `wfrq.kLVr` | func | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 143 | `wfrq.UMBB` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 144 | `wfrq.wqNQ` | func | `(i32 i32 i32) -> (i32)` |
| 145 | `wfrq.T7ke` | func | `(i32 i32 i32) -> (i32)` |
| 146 | `wfrq.h4r8` | func | `(i32 i32) -> ()` |
| 147 | `wfrq.EGMA` | func | `(i32 i32) -> ()` |
| 148 | `wfrq.kdrx` | func | `(i32 i32) -> ()` |
| 149 | `wfrq.VApf` | func | `(i32 i32) -> ()` |
| 150 | `wfrq.bWy6` | func | `(i32) -> (i32)` |
| 151 | `wfrq.Vgs9` | func | `(i32) -> (i32)` |
| 152 | `wfrq.DwgT` | func | `(i32) -> (i32)` |
| 153 | `wfrq.q1DI` | func | `(i32) -> (i32)` |
| 154 | `wfrq.QzLV` | func | `(i32) -> (i32)` |
| 155 | `wfrq.s11J` | func | `(i32) -> (i32)` |
| 156 | `wfrq.mBve` | func | `() -> (i32)` |
| 157 | `wfrq.cjNv` | func | `() -> (i32)` |
| 158 | `wfrq.hK90` | func | `() -> (i32)` |
| 159 | `wfrq.EXAb` | func | `() -> (i32)` |
| 160 | `wfrq.y56o` | func | `(i32 i32) -> (i32)` |
| 161 | `wfrq.rNJw` | func | `(i32) -> ()` |
| 162 | `wfrq.cjFZ` | func | `(i32 i32) -> (i32)` |
| 163 | `wfrq.a1ni` | func | `(i32) -> (i32)` |
| 164 | `wfrq.UicX` | func | `(i32) -> (i32)` |
| 165 | `wfrq.vlJH` | func | `(i32) -> (i32)` |
| 166 | `wfrq.muMn` | func | `(i32) -> ()` |
| 167 | `wfrq.Ej59` | func | `(i32 i32 i32) -> (i32)` |
| 168 | `wfrq.SIJb` | func | `(i32) -> (i32)` |
| 169 | `wfrq.T1Mx` | func | `(i32) -> (i32)` |
| 170 | `wfrq.qVzh` | func | `(i32 i32) -> (i32)` |
| 171 | `wfrq.oxiA` | func | `(i32) -> ()` |
| 172 | `wfrq.AAjA` | func | `() -> (i32)` |
| 173 | `wfrq.S6vv` | func | `(i32 i32) -> (i32)` |
| 174 | `wfrq.MQhh` | func | `(i32 i32) -> ()` |
| 175 | `wfrq.pa1v` | func | `(i32 i32) -> ()` |
| 176 | `wfrq.ms3u` | func | `(i32) -> (i32)` |
| 177 | `wfrq.LD7V` | func | `(i32 i32) -> (i32)` |
| 178 | `wfrq.WvyC` | func | `(i32) -> ()` |
| 179 | `wfrq.D9LR` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 180 | `wfrq.jWzU` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 181 | `wfrq.Mk2P` | func | `(i32 i32) -> ()` |
| 182 | `wfrq.BHhQ` | func | `(i32 i32) -> ()` |
| 183 | `wfrq.M3ra` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 184 | `wfrq.eq3j` | func | `(i32 f32 f32 f32 f32) -> ()` |
| 185 | `wfrq.Gjy0` | func | `(i32 f32) -> ()` |
| 186 | `wfrq.Hdgb` | func | `(i32 f32) -> ()` |
| 187 | `wfrq.Nlru` | func | `(i32 i32) -> ()` |
| 188 | `wfrq.BNNx` | func | `(i32 i32) -> ()` |
| 189 | `wfrq.YkPx` | func | `(i32) -> (i32)` |
| 190 | `wfrq.usni` | func | `(i32) -> (i32)` |
| 191 | `wfrq.hfQz` | func | `(i32) -> (i32)` |
| 192 | `wfrq.MbiY` | func | `(i32) -> (i32)` |
| 193 | `wfrq.OsD1` | func | `(i32 i32 i32) -> ()` |
| 194 | `wfrq.GZki` | func | `(i32 i32 i32) -> ()` |
| 195 | `wfrq.zGkT` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 196 | `wfrq.z8dc` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 197 | `wfrq.nBAK` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 198 | `wfrq.ykZT` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 199 | `wfrq.GAzj` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 200 | `wfrq.Z1si` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 201 | `wfrq.lo3E` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 202 | `wfrq.QtAz` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 203 | `wfrq.lHtf` | func | `(i32) -> (i32)` |
| 204 | `wfrq.QNF2` | func | `(i32) -> (i32)` |
| 205 | `wfrq.F6oS` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 206 | `wfrq.pfYP` | func | `(i32 i32 i32 i32) -> ()` |
| 207 | `wfrq.ZY4J` | func | `(i32 i32 i32 i32) -> ()` |
| 208 | `wfrq.yVQ7` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 209 | `wfrq.V3Sn` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 210 | `wfrq.XheK` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 211 | `wfrq.z1l9` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 212 | `wfrq.KrPr` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 213 | `wfrq.L03u` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 214 | `wfrq.XjIg` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 215 | `wfrq.WzeN` | func | `(i32 i32 i32) -> ()` |
| 216 | `wfrq.n2Y3` | func | `(i32 i32 i32) -> ()` |
| 217 | `wfrq.Vkm9` | func | `(i32 i32) -> ()` |
| 218 | `wfrq.Z4mw` | func | `(i32 i32) -> ()` |
| 219 | `wfrq.bR5y` | func | `(i32 i32) -> ()` |
| 220 | `wfrq.qYGH` | func | `(i32 i32) -> ()` |
| 221 | `wfrq.xW4p` | func | `(i32 i32) -> ()` |
| 222 | `wfrq.t6dt` | func | `(i32 i32) -> ()` |
| 223 | `wfrq.PAfg` | func | `(i32 f32 f32) -> ()` |
| 224 | `wfrq.Yb2V` | func | `(i32 f32 f32) -> ()` |
| 225 | `wfrq.jOoJ` | func | `(i32 i32) -> ()` |
| 226 | `wfrq.QQq5` | func | `(i32 i32) -> ()` |
| 227 | `wfrq.otVh` | func | `(i32 i32 i32 f32) -> ()` |
| 228 | `wfrq.PNM4` | func | `(i32 i32 i32 f32) -> ()` |
| 229 | `wfrq.piBp` | func | `(i32 i32 i32) -> ()` |
| 230 | `wfrq.uITR` | func | `(i32) -> (i32)` |
| 231 | `wfrq.t7sh` | func | `(i32) -> (i32)` |
| 232 | `wfrq.vFFd` | func | `(i32 i32) -> ()` |
| 233 | `wfrq.hGHQ` | func | `(i32 i32) -> ()` |
| 234 | `wfrq.rl7r` | func | `(i32 i32 i32 i32) -> (i32)` |
| 235 | `wfrq.plL6` | func | `(i32 i32 i32 i32) -> ()` |
| 236 | `wfrq.sAGK` | func | `(i32 i32 i32 i32) -> (i32)` |
| 237 | `wfrq.cBdr` | func | `(i32 i32 i32 i32) -> (i32)` |
| 238 | `wfrq.jVD7` | func | `(i32 i32 i32 i32) -> (i32)` |
| 239 | `wfrq.FXXf` | func | `(i32 i32 i32) -> ()` |
| 240 | `wfrq.HW6i` | func | `(i32 i32 i32) -> ()` |
| 241 | `wfrq.jxCR` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 242 | `wfrq.sbKu` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 243 | `wfrq.aN22` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 244 | `wfrq.xm2B` | func | `(i32 i32 f32 f32 f32 f32) -> ()` |
| 245 | `wfrq.qc00` | func | `(i32) -> (i32)` |
| 246 | `wfrq.RKfn` | func | `(i32) -> (i32)` |
| 247 | `wfrq.cvn4` | func | `(i32 i32 i32 i32) -> ()` |
| 248 | `wfrq.b9yr` | func | `(i32 i32) -> ()` |
| 249 | `wfrq.hDJ2` | func | `(i32 i32) -> ()` |
| 250 | `wfrq.Isn1` | func | `(i32 i32) -> (i32)` |
| 251 | `wfrq.quV4` | func | `(i32 i32) -> (i32)` |
| 252 | `wfrq.HXkk` | func | `(i32 i32 i32 i32) -> ()` |
| 253 | `wfrq.o6Eb` | func | `(i32 i32 i32 i32) -> ()` |
| 254 | `wfrq.zhhG` | func | `(i32 i32) -> ()` |
| 255 | `wfrq.ZIIc` | func | `(i32 i32) -> ()` |
| 256 | `wfrq.uh2f` | func | `(i32) -> (i32)` |
| 257 | `wfrq.hYje` | func | `(i32 i32 i32 i32) -> ()` |
| 258 | `wfrq.MkFq` | func | `(i32 i32 i32 f32) -> ()` |
| 259 | `wfrq.RagN` | func | `(i32) -> ()` |
| 260 | `wfrq.D4fQ` | func | `(i32 i32) -> ()` |
| 261 | `wfrq.SBn0` | func | `(i32 i32) -> ()` |
| 262 | `wfrq.QmHR` | func | `(i32 i32) -> ()` |
| 263 | `wfrq.YgjK` | func | `(i32 i32) -> ()` |
| 264 | `wfrq.ODmh` | func | `(i32 i32) -> ()` |
| 265 | `wfrq.uO5E` | func | `(i32 i32) -> ()` |
| 266 | `wfrq.ZSKv` | func | `(i32 i32) -> ()` |
| 267 | `wfrq.WvVB` | func | `(i32 i32) -> ()` |
| 268 | `wfrq.NcL1` | func | `(i32) -> (i32)` |
| 269 | `wfrq.oSjL` | func | `(i32) -> (i32)` |
| 270 | `wfrq.TCWb` | func | `(i32) -> (i32)` |
| 271 | `wfrq.hNF5` | func | `(i32) -> (i32)` |
| 272 | `wfrq.wGdJ` | func | `(i32 i32 i32 i32) -> ()` |
| 273 | `wfrq.xqhD` | func | `(i32) -> ()` |
| 274 | `wfrq.R8x4` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 275 | `wfrq.tRy6` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 276 | `wfrq.d5TZ` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 277 | `wfrq.cKRS` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 278 | `wfrq.c5rk` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 279 | `wfrq.VTHr` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> ()` |
| 280 | `wfrq.Oj3F` | func | `(i32) -> (i32)` |
| 281 | `wfrq.euSb` | func | `(i32) -> (i32)` |
| 282 | `wfrq.fmTi` | func | `(i32) -> (i32)` |
| 283 | `wfrq.ed5J` | func | `(i32) -> (i32)` |
| 284 | `wfrq.RJ8r` | func | `(i32 i32) -> ()` |
| 285 | `wfrq.m2XQ` | func | `(i32) -> ()` |
| 286 | `wfrq.skrp` | func | `(i32 i32) -> ()` |
| 287 | `wfrq.br8q` | func | `(i32) -> (i32)` |
| 288 | `wfrq.dR8W` | func | `(i32 i32) -> (i32)` |
| 289 | `wfrq.GqoH` | func | `(i32 i32) -> (i32)` |
| 290 | `wfrq.zpoQ` | func | `(i32 i32) -> (i32)` |
| 291 | `wfrq.wKNK` | func | `(f64) -> (i32)` |
| 292 | `wfrq.Uy8C` | func | `(i32 i32) -> (i32)` |
| 293 | `wfrq.qNkb` | func | `(i32 i32) -> (i32)` |
| 294 | `wfrq.aB1D` | func | `(i32 i32) -> (i32)` |
| 295 | `wfrq.utsj` | func | `(i32 i32) -> (i32)` |
| 296 | `wfrq.SzNI` | func | `(i32 i32) -> (i32)` |
| 297 | `wfrq.TJdH` | func | `(i32 i32) -> (i32)` |
| 298 | `wfrq.KopT` | func | `(i32 i32) -> (i32)` |

## Exports

157 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `NSvd` | func | 1987 | `(i32 i32) -> ()` |
| `cId7` | func | 2335 | `(i32 i32) -> (i32)` |
| `Cyoa` | func | 3178 | `(i32) -> ()` |
| `DNei` | func | 1892 | `(i32) -> ()` |
| `wCyg` | func | 1516 | `(i32 f64) -> (f64)` |
| `DqUB` | func | 1816 | `() -> (i32)` |
| `dbwh` | func | 2807 | `(i32) -> ()` |
| `oboa` | func | 3001 | `(i32 i32 i32) -> (i32 i32)` |
| `mHuZ` | func | 3099 | `() -> (i32)` |
| `kRuP` | func | 2507 | `(i32) -> (i32)` |
| `C0qm` | func | 2476 | `(i32) -> (i32)` |
| `qxRP` | func | 2471 | `(i32) -> (i32)` |
| `icX9` | func | 3070 | `(i32 i32 i32) -> ()` |
| `jMBs` | func | 1270 | `(i32 i32 i32) -> ()` |
| `f81z` | func | 1631 | `(i32 i32 i32 i32) -> (i32)` |
| `lT6C` | func | 2477 | `(i32) -> (i32)` |
| `exkX` | func | 2255 | `(i32 i32) -> ()` |
| `ABIT` | func | 618 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `fHG9` | func | 2475 | `(i32) -> ()` |
| `u9vU` | func | 889 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `Fg8x` | func | 1174 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `DqyK` | func | 1529 | `(i32 i32 i32) -> (i32)` |
| `e3lr` | func | 2337 | `(i32 i32) -> (i32)` |
| `nqCV` | func | 2149 | `(i32 i32) -> (i32)` |
| `beNk` | func | 3000 | `(i32 i32 i32) -> (i32 i32)` |
| `YzL9` | func | 1857 | `(i32 i32 f64 f64 f64) -> ()` |
| `nAxJ` | func | 1441 | `(i32) -> (i32)` |
| `ZySx` | func | 1296 | `(i32 i32) -> (i32)` |
| `ZSWu` | func | 2013 | `(i32 f64) -> (i32)` |
| `fgbR` | func | 3020 | `(i32) -> (i32 i32)` |
| `Qkv5` | func | 705 | `(i32 i32) -> (i32)` |
| `u0zf` | func | 3132 | `(i32) -> ()` |
| `ufco` | func | 2046 | `(i32 i32) -> ()` |
| `e0RO` | func | 2455 | `(i32) -> (i32)` |
| `R8d2` | func | 2508 | `(i32) -> (i32)` |
| `RQ2B` | func | 3133 | `() -> ()` |
| `XjtH` | func | 3071 | `(i32 i32) -> ()` |
| `e7fG` | func | 1882 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `rLRw` | func | 2474 | `(i32) -> (i32)` |
| `S80l` | func | 3021 | `(i32) -> (i32 i32)` |
| `dBBQ` | func | 1478 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `C1JX` | func | 1550 | `(i32 i32 i32 i32) -> (i32)` |
| `uCtZ` | func | 1434 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `xA6g` | func | 2256 | `(i32 f64) -> (i32)` |
| `T59c` | func | 3035 | `() -> (i32 i32)` |
| `kXMY` | func | 3177 | `(i32) -> (i32)` |
| `tnZy` | func | 922 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `oEZU` | func | 1482 | `(i32 i32 i32 i32) -> (i32)` |
| `HZr0` | func | 1875 | `(i32 i32) -> (i32)` |
| `hsnK` | func | 2592 | `() -> (i32)` |
| `L7Kp` | func | 2785 | `(i32) -> (i32)` |
| `memory` | memory | 0 | `` |
| `Kj2b` | func | 1502 | `(i32 i32) -> (i32)` |
| `gVS1` | func | 2181 | `(i32 i32) -> (i32)` |
| `thcv` | func | 1460 | `(i32 i32 i32 i32) -> ()` |
| `So1n` | func | 2591 | `(i32 i32) -> ()` |
| `Hp7R` | func | 2970 | `(i32 i32) -> (i32)` |
| `m6Ib` | func | 2454 | `(i32 i32) -> ()` |
| `NIjD` | func | 3126 | `(i32 i32 i32) -> ()` |
| `pg66` | func | 1264 | `(i32 i32 i32) -> (i32)` |
| `y9mG` | func | 3036 | `() -> (i32 i32)` |
| `Z76B` | func | 1891 | `(i32) -> ()` |
| `yUHk` | func | 1757 | `(i32 i32) -> (i32)` |
| `Mfoo` | func | 3006 | `(i32 i32) -> (i32 i32)` |
| `nKUG` | func | 758 | `(i32 i32 i32) -> (i32)` |
| `MjlA` | func | 1289 | `(i32) -> (i32)` |
| `oMOV` | func | 2975 | `(i32 i32 i32 i32) -> (i32)` |
| `NfyE` | func | 668 | `(i32 i32) -> (i32)` |
| `Ht8h` | func | 2473 | `(i32) -> (i32)` |
| `FJrn` | func | 1865 | `(i32 i32) -> ()` |
| `JDfQ` | func | 890 | `(i32 i32) -> (i32)` |
| `JSaH` | func | 911 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `sJX5` | func | 2470 | `(i32) -> (i32)` |
| `kkEV` | func | 810 | `(i32 i32) -> (i32)` |
| `PMJy` | func | 1739 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `fErp` | func | 2472 | `(i32) -> (i32)` |
| `KYuc` | func | 1221 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `vdLc` | func | 2491 | `(i32) -> (i32)` |
| `IIx9` | func | 737 | `(i32) -> (i32)` |
| `RF0b` | func | 1593 | `(i32 f64 f64 f64) -> (i32)` |
| `bLrp` | func | 2829 | `(i32) -> (i32)` |
| `d2zW` | func | 2509 | `(i32) -> (i32)` |
| `ktRM` | func | 2469 | `(i32) -> (i32)` |
| `gyZs` | func | 3007 | `(i32 i32) -> (i32 i32)` |
| `ce4G` | func | 3010 | `(i32 i32) -> (i32 i32)` |
| `rErD` | func | 3009 | `(i32 i32) -> (i32 i32)` |
| `fMVj` | func | 1513 | `(i32 i32) -> (i32)` |
| `uUrH` | func | 2558 | `() -> (i32)` |
| `coEs` | func | 2336 | `(i32 i32) -> (i32)` |
| `XWUl` | func | 1514 | `(i32 i32) -> (i32)` |
| `xeMr` | func | 2029 | `(i32 f64 f64 f64) -> (i32)` |
| `HMpT` | func | 743 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `mUbT` | func | 1321 | `(i32) -> ()` |
| `fbgg` | func | 678 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `mxKP` | func | 2468 | `(i32) -> (f64)` |
| `y7R1` | func | 1473 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `VX7B` | func | 1114 | `(i32 i32) -> (i32)` |
| `w5cD` | func | 1483 | `(i32) -> (i32)` |
| `Ypyu` | func | 2380 | `(i32 i32 i32 i32) -> (i32)` |
| `SPrp` | func | 1388 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `jgmR` | func | 2069 | `(i32 i32) -> (i32)` |
| `mcMu` | func | 1953 | `(i32 i32 i32 i32) -> ()` |
| `mCq3` | func | 3011 | `(i32 i32) -> (i32 i32)` |
| `JrBf` | func | 1409 | `(i32 i32) -> (i32)` |
| `reay` | func | 1215 | `(i32 i32 i32 i32) -> (i32)` |
| `BqIg` | func | 1389 | `(i32 f64 f64) -> (i32)` |
| `OdH3` | func | 2426 | `(i32) -> (i32)` |
| `SvwD` | func | 2489 | `(i32) -> (i32)` |
| `gtHm` | func | 2409 | `(i32) -> (i32)` |
| `SI7K` | func | 2951 | `() -> ()` |
| `PZHN` | func | 2490 | `(i32 i32) -> ()` |
| `qqtI` | func | 568 | `(i32 i32 i32) -> (i32)` |
| `eIIN` | func | 2498 | `(i32) -> (i32)` |
| `OOfh` | func | 1578 | `(i32 i32) -> (i32)` |
| `vKv2` | func | 2546 | `(i32 i32) -> ()` |
| `T5Fb` | func | 1934 | `(i32) -> (i32)` |
| `vbMp` | func | 1745 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `CX44` | func | 3012 | `(i32 i32) -> (i32 i32)` |
| `XqTl` | func | 3023 | `(i32) -> (i32 i32)` |
| `gERx` | global | 2 | `` |
| `sv9r` | func | 2488 | `(i32) -> (i32)` |
| `HebD` | func | 2500 | `(i32 i32) -> (i32)` |
| `zTcu` | func | 2982 | `(i32 i32) -> ()` |
| `x83I` | func | 3202 | `() -> (i32)` |
| `v4Az` | func | 3008 | `(i32 i32) -> (i32 i32)` |
| `htt5` | func | 1336 | `(i32 i32 i32) -> (i32)` |
| `YOm4` | func | 1489 | `(i32 i32) -> (i32)` |
| `NArk` | func | 3037 | `() -> (i32 i32)` |
| `QcHW` | func | 2486 | `(i32 i32) -> ()` |
| `Ag66` | func | 1837 | `(i32 i32 i32 i32) -> (i32)` |
| `nM2p` | func | 1822 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `xQoE` | global | 1 | `` |
| `GD9R` | func | 1589 | `(i32 i32) -> ()` |
| `px93` | func | 3024 | `(i32) -> (i32 i32)` |
| `Bh0k` | func | 1438 | `() -> (i32)` |
| `zMtB` | func | 2478 | `(i32) -> (i32)` |
| `lUuz` | func | 1214 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `Bw8M` | func | 2796 | `(i32) -> (i32)` |
| `FnIk` | func | 2771 | `(i32) -> (i32)` |
| `zfuu` | func | 2338 | `(i32 i32) -> (i32)` |
| `T7Ba` | func | 1588 | `(i32 i32) -> ()` |
| `d3ow` | func | 3173 | `() -> (f64)` |
| `Ondl` | func | 1700 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `oZfX` | func | 2368 | `(i32 i32) -> (i32)` |
| `reR8` | func | 2499 | `(i32 i32) -> (i32)` |
| `LGgK` | func | 2764 | `(i32) -> (i32)` |
| `JSaC` | func | 3061 | `(i32 i32 i32 i32) -> ()` |
| `hv35` | func | 1951 | `(i32) -> (i32)` |
| `Wonr` | func | 2286 | `(i32 i32) -> ()` |
| `sqez` | func | 735 | `(i32 i32 i32 i32) -> (i32)` |
| `WHjC` | func | 1723 | `(i32) -> (i32)` |
| `AIlu` | func | 1243 | `(i32 i32) -> (i32)` |
| `RTqO` | func | 3203 | `() -> (i32)` |
| `NoFQ` | func | 1115 | `(i32 i32) -> ()` |
| `xVCI` | func | 2425 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `Ythk` | func | 2201 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `uEBH` | func | 3022 | `(i32) -> (i32 i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 754 · max 754
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2639720, `i32` = i32.const 2640292

## Functions

- 2,915 bodies · 4,042,860 code bytes · avg 1.4 KB
- instruction scan: 2,915 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 157 |
| <= 64 bytes | 114 |
| <= 128 bytes | 257 |
| <= 256 bytes | 377 |
| <= 512 bytes | 673 |
| <= 1024 bytes | 573 |
| <= 2048 bytes | 428 |
| <= 4096 bytes | 180 |
| <= 8192 bytes | 91 |
| <= 16384 bytes | 31 |
| > 16384 bytes | 34 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32) -> ()` | 217 | 194,730 | 88,375 | local.get×25902, i32.const×9917, i32.load×5640, local.set×4735, local.tee×4639 |
| 1 | `(i32 i32 i32 i32 i32) -> ()` | 147 | 112,325 | 54,451 | local.get×15156, i32.const×6534, i32.add×3194, local.set×3087, i32.load×2951 |
| 2 | `(i32 i32 i32 i32 i32 i32) -> ()` | 130 | 46,544 | 21,400 | local.get×6231, i32.const×2827, local.set×1224, i32.add×1128, i32.load×1019 |
| 3 | `(i32 i32) -> ()` | 125 | 48,670 | 22,528 | local.get×6337, i32.const×2249, local.set×1324, local.tee×1179, i32.load×1037 |
| 4 | `(i32 i32) -> ()` | 59 | 29,627 | 14,267 | local.get×4192, i32.const×1730, i32.load×1042, local.set×931, i32.add×815 |
| 5 | `(i32 i32) -> ()` | 90 | 26,038 | 12,563 | local.get×3702, i32.const×1379, local.set×779, i32.load×721, local.tee×698 |
| 6 | `(i32 i32 i32 i32 i32) -> ()` | 135 | 32,562 | 16,141 | local.get×4566, i32.const×2205, local.set×1141, i32.add×1062, local.tee×800 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 58 | 21,485 | 10,526 | local.get×2903, i32.const×1490, local.set×728, i32.add×591, local.tee×504 |
| 8 | `(i32 i32) -> ()` | 93 | 19,080 | 9,200 | local.get×2643, i32.const×1025, local.tee×571, local.set×554, i32.load×531 |
| 9 | `(i32 i32 i32 i32) -> ()` | 105 | 26,545 | 12,837 | local.get×3810, i32.const×1624, local.set×997, i32.add×682, i32.load×663 |
| 10 | `(i32 i32 i32 i32) -> ()` | 53 | 24,505 | 11,634 | local.get×3005, i32.const×1276, local.tee×731, end×592, i32.load×586 |
| 11 | `(i32 i32 i32) -> (i32)` | 76 | 22,943 | 10,770 | local.get×2875, i32.const×1237, i32.load×806, local.set×500, end×464 |
| 12 | `(i32 i32 i32) -> (i32)` | 77 | 18,924 | 8,934 | local.get×2485, i32.const×1224, i32.load×559, i32.add×543, local.set×525 |
| 13 | `(i32 i32 i32 i32 i32 i32) -> ()` | 125 | 19,810 | 8,875 | local.get×2493, i32.const×1111, local.set×430, local.tee×385, i32.load×382 |
| 16 | `(i32 i32) -> ()` | 96 | 31,834 | 14,861 | local.get×4482, i32.const×1910, i32.add×763, local.set×692, i32.load×669 |
| 17 | `(i32) -> ()` | 78 | 20,163 | 9,380 | local.get×2603, i32.const×1119, i32.add×574, local.tee×510, local.set×502 |
| 23 | `(i32 i32) -> ()` | 82 | 29,023 | 13,043 | local.get×4618, i32.const×1456, i32.store×702, i32.add×689, local.tee×645 |
| 25 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 64 | 24,289 | 11,198 | local.get×2682, i32.const×1711, local.set×821, end×663, block×465 |
| 27 | `(i32 i32 i32 i32 i32) -> ()` | 68 | 22,728 | 10,576 | local.get×3337, i32.const×1240, local.tee×731, i32.add×436, local.set×333 |
| 33 | `(i32 i32 i32 i32 i32) -> ()` | 65 | 18,015 | 8,704 | local.get×2378, i32.const×1095, local.set×628, local.tee×459, i32.add×442 |
| 64 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 99 | 32,154 | 15,014 | local.get×4317, i32.const×1963, i32.load×986, local.set×902, i32.add×812 |
| 196 | `(i32 i32) -> ()` | 10 | 26,597 | 12,807 | local.get×4506, i32.load×1211, i32.const×1022, end×797, i32.add×734 |
| 225 | `(i32) -> ()` | 19 | 23,156 | 10,851 | local.get×2722, i32.load×1494, i32.const×1177, local.tee×1008, end×853 |
| 721 | `(i32 i32) -> ()` | 139 | 42,852 | 20,210 | local.get×5266, i32.const×2331, local.tee×1194, i32.add×1062, local.set×1004 |
| 722 | `(i32 i32 i32 i32) -> ()` | 54 | 21,809 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 1576 | `(i32 i32) -> (i32)` | 180 | 54,752 | 19,856 | local.get×6592, i32.const×2623, i64.store×1913, i64.const×1078, i64.load×1056 |
| 1976 | `(i32 i32) -> ()` | 110 | 40,258 | 17,890 | local.get×5235, i32.const×1685, local.set×903, local.tee×774, end×686 |
| 2587 | `(i32 i32) -> ()` | 397 | 142,048 | 64,173 | local.get×18436, i32.const×8000, local.set×3840, i32.load×3163, end×2815 |
| 2865 | `(i32 i32 i32 i32) -> ()` | 137 | 31,358 | 14,274 | local.get×4256, i32.const×1515, local.tee×741, local.set×690, br_if×629 |
| 2883 | `(i32 i32) -> ()` | 136 | 33,872 | 15,183 | local.get×4267, i32.const×2015, local.set×798, local.tee×742, i32.add×699 |

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
| `local.get` | 540,412 |
| `i32.const` | 226,361 |
| `local.tee` | 100,491 |
| `i32.load` | 94,774 |
| `local.set` | 94,131 |
| `i32.add` | 87,372 |
| `end` | 79,405 |
| `br_if` | 64,502 |
| `i32.store` | 46,859 |
| `block` | 37,322 |
| `i64.const` | 32,726 |
| `i64.store` | 31,836 |
| `if` | 30,358 |
| `call` | 29,521 |
| `i32.sub` | 24,726 |
| `i64.load` | 23,705 |
| `br` | 23,172 |
| `i32.eqz` | 19,607 |
| `select` | 16,938 |
| `i32.shl` | 16,489 |
| `i32.and` | 16,371 |
| `i32.ne` | 15,888 |
| `i32.load8_u` | 15,024 |
| `i32.eq` | 13,904 |
| `i32.store8` | 12,645 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 2,915/2,915 (degraded: 0)
