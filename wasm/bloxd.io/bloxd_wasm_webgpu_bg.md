# WASM module: `bloxd_wasm_webgpu_bg`

> environment **bloxd.io** · build `mpd96o.85ad4551` · analyzed 2026-11-24T14:21:10+09:00
> source: https://bloxd.io/static/media/bloxd_wasm_webgpu_bg.7f2818e94993cd12ca68.wasm
> 5,121,192 bytes (4.9 MB) · sha256 `de2f06fb711bba52…` · parser: `scripts/wasm_inspect.py` (clean-room W3C binary format)

## Changes since the previous archived build

- size 5,121,311 → 5,121,192 bytes (-119)
- defined functions 2,938 → 2,939
- code bytes 4,038,839 → 4,038,717
- name-section module id `d7baa99dc60ddd5c.12254` → `129385525e514b2e.12255`
- export identifiers rotated by the obfuscator: 1/159 names kept (identifier names are randomly assigned per build; compare signatures instead)

## Overview

| Metric | Value |
|---|---|
| Functions defined / imported | 2,939 / 393 |
| Exports / imports | 159 / 394 |
| Code bytes (function bodies) | 4,038,717 (3.9 MB) |
| Total local variables | 30,717 |
| Instructions (scanable bodies) | 1,889,737 |
| Data segments / bytes | 3,545 / 1,036,149 |
| Element segments / entries | 1 / 837 |
| Memories / tables / globals | 0 / 1 / 3 |
| name-section module id | `129385525e514b2e.12255` |
| Sections | 11 |

## Sections

| id | Section | Bytes | Items |
|---|---|---:|---:|
| 1 | type | 1,510 | 176 |
| 2 | import | 4,734 | 394 |
| 3 | function | 2,989 | 2939 |
| 4 | table | 7 | 1 |
| 6 | global | 25 | 3 |
| 7 | export | 1,273 | 159 |
| 9 | element | 1,681 | 1 |
| 12 | datacount | 2 | — |
| 10 | code | 4,044,075 | 2939 |
| 11 | data | 1,064,826 | 3545 |
| 0 | custom:name | 30 | — |

## Types

176 function types; top shapes: `(i32 i32) -> ()` ×1, `(i32 i32 i32) -> ()` ×1, `(i32) -> ()` ×1, `(i32 i32) -> (i32)` ×1, `(i32 i32 i32) -> (i32)` ×1, `(i32 i32 i32 i32) -> ()` ×1, `(i32) -> (i32)` ×1, `(i32 i32 i32 i32 i32) -> ()` ×1

## Imports

394 imported items (JS callbacks and shared state):

| # | module.name | kind | type |
|---:|---|---|---|
| 0 | `Hwvo.vrlR` | memory | `[128..14648]` |
| 0 | `Hwvo.cQwM` | func | `(i32) -> (i32)` |
| 1 | `Hwvo.fQx2` | func | `(i32) -> (f64)` |
| 2 | `Hwvo.a2Ni` | func | `() -> (i32)` |
| 3 | `Hwvo.VAgR` | func | `(i32 i32 i32) -> (i32)` |
| 4 | `Hwvo.MEE8` | func | `(i32) -> ()` |
| 5 | `Hwvo.Ets2` | func | `(i32 i32) -> (i32)` |
| 6 | `Hwvo.xBOr` | func | `(i32) -> (i32)` |
| 7 | `Hwvo.HxSF` | func | `(i32 i32 i32) -> (i32)` |
| 8 | `Hwvo.NOnV` | func | `(i32 i32 i32 i32) -> (i32)` |
| 9 | `Hwvo.o9Zu` | func | `(i32) -> (i32)` |
| 10 | `Hwvo.ohrU` | func | `(i32 i32) -> ()` |
| 11 | `Hwvo.hrC2` | func | `(i32 i32) -> ()` |
| 12 | `Hwvo.F2xF` | func | `(i32 i32 i32 i32) -> (i32)` |
| 13 | `Hwvo.eWpD` | func | `(i32 i32) -> (i32)` |
| 14 | `Hwvo.sC3k` | func | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| 15 | `Hwvo.tZZH` | func | `(i32) -> (i32)` |
| 16 | `Hwvo.NfDF` | func | `(i32 i32) -> (i32)` |
| 17 | `Hwvo.Uke4` | func | `(i32 i32) -> (i32)` |
| 18 | `Hwvo.pH7v` | func | `(i32 i32) -> ()` |
| 19 | `Hwvo.Od99` | func | `(i32) -> (i32)` |
| 20 | `Hwvo.kQPR` | func | `(i32) -> (i32)` |
| 21 | `Hwvo.TOIN` | func | `(i32 i32 i32) -> ()` |
| 22 | `Hwvo.FBA5` | func | `(i32 i32 i32) -> (i32)` |
| 23 | `Hwvo.gZR0` | func | `(i32) -> (i32)` |
| 24 | `Hwvo.d0HC` | func | `(i32) -> (i32)` |
| 25 | `Hwvo.SPPL` | func | `(i32 i32) -> ()` |
| 26 | `Hwvo.cLG0` | func | `(i32 i32) -> (i32)` |
| 27 | `Hwvo.XS8p` | func | `(i32 i32 i32 i32) -> ()` |
| 28 | `Hwvo.qarx` | func | `(i32) -> (i32)` |
| 29 | `Hwvo.EBdl` | func | `(i32) -> (i32)` |
| 30 | `Hwvo.KdW2` | func | `(i32) -> (i32)` |
| 31 | `Hwvo.Zkid` | func | `(i32) -> (i32)` |
| 32 | `Hwvo.No8r` | func | `(i32) -> (i32)` |
| 33 | `Hwvo.xLpo` | func | `(i32 i32 i32) -> ()` |
| 34 | `Hwvo.VDay` | func | `(i32 i32) -> (i32)` |
| 35 | `Hwvo.YzrI` | func | `(i32) -> (i32)` |
| 36 | `Hwvo.XnBP` | func | `(i32) -> ()` |
| 37 | `Hwvo.oWtG` | func | `(i32) -> (i32)` |
| 38 | `Hwvo.dIso` | func | `(i32) -> (i32)` |
| 39 | `Hwvo.ldVK` | func | `(i32) -> ()` |
| 40 | `Hwvo.wdVm` | func | `(i32 i32) -> (i32)` |
| 41 | `Hwvo.UKvX` | func | `(i32 i32 i32) -> (i32)` |
| 42 | `Hwvo.OAV8` | func | `(i32) -> ()` |
| 43 | `Hwvo.PZ9D` | func | `(i32 i32) -> ()` |
| 44 | `Hwvo.qFKg` | func | `() -> (i32)` |
| 45 | `Hwvo.ToJe` | func | `(i32 i32) -> (i32)` |
| 46 | `Hwvo.eJUM` | func | `(i32 i32) -> (i32)` |
| 47 | `Hwvo.Zpse` | func | `(i32) -> (i32)` |
| 48 | `Hwvo.kPQl` | func | `(i32) -> (i32)` |
| 49 | `Hwvo.Xq5Z` | func | `(i32) -> (i32)` |
| 50 | `Hwvo.juQP` | func | `(i32 i32) -> ()` |
| 51 | `Hwvo.sM28` | func | `(i32) -> (i32)` |
| 52 | `Hwvo.yiSu` | func | `(i32) -> ()` |
| 53 | `Hwvo.LWSp` | func | `(i32 i32) -> (i32)` |
| 54 | `Hwvo.NFkm` | func | `(i32 i32 i32) -> (i32)` |
| 55 | `Hwvo.dEnw` | func | `(i32) -> (i32)` |
| 56 | `Hwvo.no2q` | func | `(i32 i32 i32) -> ()` |
| 57 | `Hwvo.QnsG` | func | `(i32 i32) -> ()` |
| 58 | `Hwvo.yJVH` | func | `(i32) -> (i32)` |
| 59 | `Hwvo.HOaq` | func | `(i32 i32 f64 i32 i32 f64 f64) -> ()` |
| 60 | `Hwvo.N2dF` | func | `(i32) -> ()` |
| 61 | `Hwvo.mRQm` | func | `(i32 i32 f64 i32 f64 f64) -> ()` |
| 62 | `Hwvo.uYUV` | func | `(i32) -> ()` |
| 63 | `Hwvo.I32A` | func | `(i32 i32 i32) -> ()` |
| 64 | `Hwvo.it76` | func | `(i32 i32) -> ()` |
| 65 | `Hwvo.ukRj` | func | `(i32 i32 i32 i32 i32 f64 i32) -> ()` |
| 66 | `Hwvo.ugN2` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 67 | `Hwvo.Qr4u` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 68 | `Hwvo.mqAt` | func | `(i32 i32 f64) -> ()` |
| 69 | `Hwvo.qxBK` | func | `(i32) -> (i32)` |
| 70 | `Hwvo.V3hp` | func | `(i32 i32) -> ()` |
| 71 | `Hwvo.j9HN` | func | `(i32 i32 i32) -> ()` |
| 72 | `Hwvo.ahYN` | func | `(i32 i32 i32 i32) -> ()` |
| 73 | `Hwvo.eohM` | func | `(i32 i32 i32) -> ()` |
| 74 | `Hwvo.yghO` | func | `(i32) -> ()` |
| 75 | `Hwvo.I5fj` | func | `(i32 i32) -> ()` |
| 76 | `Hwvo.Nk7u` | func | `(i32 i32 i32 i32 i32) -> ()` |
| 77 | `Hwvo.nfoB` | func | `(i32 f32 f32 f32 f32 f32 f32) -> ()` |
| 78 | `Hwvo.aMnE` | func | `(i32 i32 i32) -> ()` |
| 79 | `Hwvo.RccL` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 80 | `Hwvo.QaSV` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 81 | `Hwvo.IQUM` | func | `(i32 i32 i32 i32 i32 f64 i32) -> ()` |
| 82 | `Hwvo.jnPo` | func | `(i32 i32 i32 f64 f64) -> ()` |
| 83 | `Hwvo.ATfv` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 84 | `Hwvo.CLfv` | func | `(i32 i32 i32) -> ()` |
| 85 | `Hwvo.vgU0` | func | `(i32 i32) -> (i32)` |
| 86 | `Hwvo.sktI` | func | `(i32) -> (i32)` |
| 87 | `Hwvo.Srit` | func | `(i32) -> (i32)` |
| 88 | `Hwvo.n16e` | func | `(i32) -> (i32)` |
| 89 | `Hwvo.pOf8` | func | `(i32 i32) -> (i32)` |
| 90 | `Hwvo.L6df` | func | `(i32) -> ()` |
| 91 | `Hwvo.mJTV` | func | `(i32) -> (i32)` |
| 92 | `Hwvo.eLkb` | func | `(i32 i32) -> (i32)` |
| 93 | `Hwvo.TMXP` | func | `(i32 i32 i32) -> (i32)` |
| 94 | `Hwvo.G0LB` | func | `(i32 i32 i32) -> ()` |
| 95 | `Hwvo.tTtA` | func | `(i32 i32 i32 i32) -> (i32)` |
| 96 | `Hwvo.SqAb` | func | `() -> (f64)` |
| 97 | `Hwvo.OFA7` | func | `() -> (f64)` |
| 98 | `Hwvo.eOuy` | func | `(i32 i32) -> ()` |
| 99 | `Hwvo.x2Id` | func | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| 100 | `Hwvo.yFw4` | func | `(i32) -> (i32)` |
| 101 | `Hwvo.qOsC` | func | `(i32) -> (i32)` |
| 102 | `Hwvo.FRy6` | func | `(i32) -> (i32)` |
| 103 | `Hwvo.PTCA` | func | `() -> (i32)` |
| 104 | `Hwvo.uau5` | func | `() -> (i32)` |
| 105 | `Hwvo.nlLG` | func | `() -> (i32)` |
| 106 | `Hwvo.D8nB` | func | `() -> (i32)` |
| 107 | `Hwvo.iR8a` | func | `(i32 i32) -> (i32)` |
| 108 | `Hwvo.c8sD` | func | `(i32) -> ()` |
| 109 | `Hwvo.aFpQ` | func | `(i32 i32) -> (i32)` |
| 110 | `Hwvo.Iqns` | func | `(i32) -> (i32)` |
| 111 | `Hwvo.FttZ` | func | `() -> (f64)` |
| 112 | `Hwvo.L4TK` | func | `(i32) -> (i32)` |
| 113 | `Hwvo.GxDS` | func | `(i32 i32) -> ()` |
| 114 | `Hwvo.igHt` | func | `(i32 i32) -> ()` |
| 115 | `Hwvo.XymE` | func | `(i32 i32) -> ()` |
| 116 | `Hwvo.ym6F` | func | `(i32 f32) -> ()` |
| 117 | `Hwvo.s0qv` | func | `(i32 f32) -> ()` |
| 118 | `Hwvo.ex1y` | func | `(i32 i32) -> ()` |
| 119 | `Hwvo.aa15` | func | `(i32 i32) -> ()` |
| 120 | `Hwvo.XJfk` | func | `(i32 i32) -> ()` |
| 121 | `Hwvo.JkoT` | func | `(i32 i32) -> ()` |
| 122 | `Hwvo.Z9nF` | func | `(i32 i32 i32) -> ()` |
| 123 | `Hwvo.HAPq` | func | `(i32 i32) -> (i32)` |
| 124 | `Hwvo.Z2wa` | func | `(i32 i32) -> ()` |
| 125 | `Hwvo.CdSs` | func | `(i32 i32) -> ()` |
| 126 | `Hwvo.erHx` | func | `(i32 i32) -> ()` |
| 127 | `Hwvo.REWO` | func | `(i32 i32) -> ()` |
| 128 | `Hwvo.nvQt` | func | `(i32 f64) -> ()` |
| 129 | `Hwvo.iMNP` | func | `(i32 f64) -> ()` |
| 130 | `Hwvo.kMec` | func | `(i32 i32) -> ()` |
| 131 | `Hwvo.FUwG` | func | `(i32 i32 i32) -> ()` |
| 132 | `Hwvo.tNvj` | func | `(i32 i32) -> ()` |
| 133 | `Hwvo.I8xX` | func | `(i32 i32) -> (i32)` |
| 134 | `Hwvo.cXgb` | func | `(i32 i32 i32) -> ()` |
| 135 | `Hwvo.WorV` | func | `(i32 i32 i32) -> ()` |
| 136 | `Hwvo.qSj2` | func | `(i32 i32) -> (i32)` |
| 137 | `Hwvo.h1FO` | func | `(i32 i32) -> (i32)` |
| 138 | `Hwvo.J7cy` | func | `(i32 i32 i32) -> ()` |
| 139 | `Hwvo.M2mr` | func | `(i32 i32 i32) -> ()` |
| 140 | `Hwvo.buwU` | func | `(i32 i32) -> (i32)` |
| 141 | `Hwvo.PYBA` | func | `(i32 i32) -> ()` |
| 142 | `Hwvo.zFIt` | func | `(i32 i32) -> ()` |
| 143 | `Hwvo.B5wD` | func | `(i32 i32) -> ()` |
| 144 | `Hwvo.a1v8` | func | `(i32 i32) -> ()` |
| 145 | `Hwvo.FaNQ` | func | `(i32 i32) -> ()` |
| 146 | `Hwvo.rVUb` | func | `(i32 i32) -> ()` |
| 147 | `Hwvo.YOWq` | func | `(i32 i32) -> ()` |
| 148 | `Hwvo.h2Z6` | func | `(i32 f64) -> ()` |
| 149 | `Hwvo.qNJ1` | func | `(i32 i32) -> ()` |
| 150 | `Hwvo.qwkt` | func | `(i32 i32) -> ()` |
| 151 | `Hwvo.G9Rf` | func | `(i32 i32) -> ()` |
| 152 | `Hwvo.cSmB` | func | `(i32 i32) -> ()` |
| 153 | `Hwvo.B3ds` | func | `(i32 i32) -> ()` |
| 154 | `Hwvo.ZIne` | func | `(i32 i32) -> ()` |
| 155 | `Hwvo.J9dK` | func | `(i32 i32) -> ()` |
| 156 | `Hwvo.pdG8` | func | `(i32 i32) -> ()` |
| 157 | `Hwvo.R7YT` | func | `(i32 i32) -> ()` |
| 158 | `Hwvo.Skeo` | func | `(i32 i32 i32) -> ()` |
| 159 | `Hwvo.InMT` | func | `(i32 i32 i32) -> ()` |
| 160 | `Hwvo.FFdC` | func | `(i32 i32) -> (i32)` |
| 161 | `Hwvo.LLlZ` | func | `(i32 i32) -> (i32)` |
| 162 | `Hwvo.lINn` | func | `(i32 i32) -> ()` |
| 163 | `Hwvo.Nh4t` | func | `(i32 i32) -> ()` |
| 164 | `Hwvo.hjkk` | func | `(i32 f64) -> ()` |
| 165 | `Hwvo.jMaw` | func | `(i32 i32) -> ()` |
| 166 | `Hwvo.ejf9` | func | `(i32 i32) -> ()` |
| 167 | `Hwvo.vMeH` | func | `(i32 i32) -> ()` |
| 168 | `Hwvo.gAjn` | func | `(i32 i32 i32 i32 i32 i32) -> ()` |
| 169 | `Hwvo.cJ3u` | func | `(i32 f64) -> ()` |
| 170 | `Hwvo.Kmgl` | func | `(i32 f64) -> ()` |
| 171 | `Hwvo.Yju4` | func | `(i32 f64) -> ()` |
| 172 | `Hwvo.au3z` | func | `(i32 f64) -> ()` |
| 173 | `Hwvo.HqjS` | func | `(i32 i32) -> ()` |
| 174 | `Hwvo.ytYE` | func | `(i32 i32) -> ()` |
| 175 | `Hwvo.bkxP` | func | `(i32 i32) -> ()` |
| 176 | `Hwvo.gxe5` | func | `(i32 i32) -> ()` |
| 177 | `Hwvo.ROIl` | func | `(i32 i32) -> ()` |
| 178 | `Hwvo.rvNH` | func | `(i32 i32 i32) -> ()` |
| 179 | `Hwvo.RNYN` | func | `(i32 i32) -> ()` |
| 180 | `Hwvo.tARd` | func | `(i32 f32) -> ()` |
| 181 | `Hwvo.r3zj` | func | `(i32 i32) -> ()` |
| 182 | `Hwvo.j5Sv` | func | `(i32 i32) -> ()` |
| 183 | `Hwvo.mXFd` | func | `(i32 i32) -> ()` |
| 184 | `Hwvo.wgkE` | func | `(i32 i32) -> ()` |
| 185 | `Hwvo.ETQX` | func | `(i32 i32) -> ()` |
| 186 | `Hwvo.IgDE` | func | `(i32 i32) -> ()` |
| 187 | `Hwvo.u8sM` | func | `(i32 i32) -> ()` |
| 188 | `Hwvo.xBse` | func | `(i32 i32) -> ()` |
| 189 | `Hwvo.tgXc` | func | `(i32 i32) -> ()` |
| 190 | `Hwvo.gyzH` | func | `(i32 i32) -> ()` |
| 191 | `Hwvo.In32` | func | `(i32 i32) -> ()` |
| 192 | `Hwvo.lsnL` | func | `(i32 i32) -> ()` |
| 193 | `Hwvo.mizV` | func | `(i32 i32) -> (i32)` |
| 194 | `Hwvo.ijXP` | func | `(i32 i32 i32 i32) -> ()` |
| 195 | `Hwvo.vQLU` | func | `(i32 i32) -> ()` |
| 196 | `Hwvo.m4L0` | func | `(i32 i32 i32) -> ()` |
| 197 | `Hwvo.f1IT` | func | `(i32 i32) -> (i32)` |
| 198 | `Hwvo.j0dz` | func | `(i32) -> (i32)` |
| 199 | `Hwvo.ajbr` | func | `(i32 i32) -> ()` |
| 200 | `Hwvo.jjl6` | func | `(i32 i32) -> ()` |
| 201 | `Hwvo.Av9E` | func | `(i32 i32) -> ()` |
| 202 | `Hwvo.BB6E` | func | `(i32 i32) -> ()` |
| 203 | `Hwvo.LBYY` | func | `(i32 i32) -> ()` |
| 204 | `Hwvo.XJoZ` | func | `(i32 i32) -> ()` |
| 205 | `Hwvo.Xs7P` | func | `(i32 i32) -> ()` |
| 206 | `Hwvo.QkEx` | func | `(i32 i32) -> ()` |
| 207 | `Hwvo.lEEI` | func | `(i32) -> (i32)` |
| 208 | `Hwvo.eTsj` | func | `(i32 i32 i32) -> ()` |
| 209 | `Hwvo.dsm3` | func | `(i32 i32) -> ()` |
| 210 | `Hwvo.vXVI` | func | `(i32 i32 i32 i32) -> ()` |
| 211 | `Hwvo.jVPf` | func | `(i32 i32) -> ()` |
| 212 | `Hwvo.cecR` | func | `(i32) -> ()` |
| 213 | `Hwvo.A6bK` | func | `(i32 i32) -> ()` |
| 214 | `Hwvo.nOJK` | func | `(i32) -> (i32)` |
| 215 | `Hwvo.HdX4` | func | `(i32 i32 i32) -> ()` |
| 216 | `Hwvo.Dybt` | func | `(i32 i32) -> ()` |
| 217 | `Hwvo.JB0A` | func | `(i32 i32) -> ()` |
| 218 | `Hwvo.fSSS` | func | `(i32 i32) -> ()` |
| 219 | `Hwvo.U09S` | func | `(i32 i32) -> ()` |
| 220 | `Hwvo.sySh` | func | `(i32 i32) -> (i32)` |
| 221 | `Hwvo.WEtV` | func | `(i32 i32) -> ()` |
| 222 | `Hwvo.ZRZe` | func | `(i32 i32) -> ()` |
| 223 | `Hwvo.umtS` | func | `(i32 i32) -> ()` |
| 224 | `Hwvo.xJSS` | func | `(i32 i32) -> ()` |
| 225 | `Hwvo.e8YY` | func | `(i32 i32) -> ()` |
| 226 | `Hwvo.FfFY` | func | `(i32 i32) -> ()` |
| 227 | `Hwvo.Ya7w` | func | `(i32 i32) -> ()` |
| 228 | `Hwvo.mRdK` | func | `(i32 i32 f64 f64) -> (i32)` |
| 229 | `Hwvo.qnF8` | func | `(i32) -> (i32)` |
| 230 | `Hwvo.ztSQ` | func | `(i32) -> ()` |
| 231 | `Hwvo.FvlG` | func | `(i32 f64) -> ()` |
| 232 | `Hwvo.BPMQ` | func | `(i32 i32) -> ()` |
| 233 | `Hwvo.n8n9` | func | `(i32 i32) -> ()` |
| 234 | `Hwvo.r9mm` | func | `(i32 i32 i32) -> ()` |
| 235 | `Hwvo.ZJX8` | func | `(i32 i32) -> (i32)` |
| 236 | `Hwvo.AZ05` | func | `(i32 i32) -> ()` |
| 237 | `Hwvo.bCy5` | func | `(i32 i32) -> ()` |
| 238 | `Hwvo.PYP5` | func | `(i32 i32) -> ()` |
| 239 | `Hwvo.XnaO` | func | `(i32 i32 i32) -> ()` |
| 240 | `Hwvo.yiCB` | func | `(i32 i32) -> ()` |
| 241 | `Hwvo.Ds5P` | func | `(i32 i32) -> ()` |
| 242 | `Hwvo.mjVx` | func | `(i32 i32) -> ()` |
| 243 | `Hwvo.vIvy` | func | `(i32 i32 i32) -> ()` |
| 244 | `Hwvo.v6LW` | func | `(i32 i32) -> ()` |
| 245 | `Hwvo.izjo` | func | `(i32 i32) -> ()` |
| 246 | `Hwvo.JanV` | func | `(i32 i32 i32) -> ()` |
| 247 | `Hwvo.kg7o` | func | `(i32 i32) -> (i32)` |
| 248 | `Hwvo.TJsj` | func | `(i32 i32) -> ()` |
| 249 | `Hwvo.UNXD` | func | `(i32 i32 i32) -> ()` |
| 250 | `Hwvo.Ffbl` | func | `(i32 i32) -> ()` |
| 251 | `Hwvo.qaiY` | func | `(i32 f64) -> ()` |
| 252 | `Hwvo.VxPm` | func | `(i32 i32) -> ()` |
| 253 | `Hwvo.qXM4` | func | `(i32 f64) -> ()` |
| 254 | `Hwvo.POI3` | func | `(i32 i32 i32) -> ()` |
| 255 | `Hwvo.ySCa` | func | `(i32 i32) -> ()` |
| 256 | `Hwvo.hsKZ` | func | `(i32 i32 i32) -> ()` |
| 257 | `Hwvo.ZtNT` | func | `(i32 i32) -> ()` |
| 258 | `Hwvo.Zp2E` | func | `(i32 i32) -> ()` |
| 259 | `Hwvo.MAPy` | func | `(i32 i32) -> ()` |
| 260 | `Hwvo.BwGW` | func | `(i32 i32 i32) -> ()` |
| 261 | `Hwvo.KEDY` | func | `(i32 i32) -> ()` |
| 262 | `Hwvo.HdKl` | func | `(i32 i32) -> ()` |
| 263 | `Hwvo.r4Cy` | func | `(i32 i32) -> ()` |
| 264 | `Hwvo.raRT` | func | `(i32 i32) -> ()` |
| 265 | `Hwvo.ja8O` | func | `(i32 f32) -> ()` |
| 266 | `Hwvo.c0Ny` | func | `(i32 f32) -> ()` |
| 267 | `Hwvo.wFSd` | func | `(i32 i32) -> ()` |
| 268 | `Hwvo.IOvo` | func | `(i32 i32) -> ()` |
| 269 | `Hwvo.Woue` | func | `(i32 i32) -> ()` |
| 270 | `Hwvo.JrGy` | func | `(i32 i32) -> ()` |
| 271 | `Hwvo.ShOG` | func | `(i32 i32) -> ()` |
| 272 | `Hwvo.MwYv` | func | `(i32 i32) -> ()` |
| 273 | `Hwvo.gkfr` | func | `(i32 i32) -> ()` |
| 274 | `Hwvo.ZamY` | func | `(i32 i32) -> ()` |
| 275 | `Hwvo.TnEH` | func | `(i32 i32) -> ()` |
| 276 | `Hwvo.jORo` | func | `(i32 i32) -> ()` |
| 277 | `Hwvo.IfqI` | func | `(i32 i32) -> ()` |
| 278 | `Hwvo.TxyA` | func | `(i32 i32) -> ()` |
| 279 | `Hwvo.y7N3` | func | `(i32 i32) -> ()` |
| 280 | `Hwvo.Eyaw` | func | `(i32 i32) -> ()` |
| 281 | `Hwvo.d5zT` | func | `(i32 i32) -> ()` |
| 282 | `Hwvo.bZBy` | func | `(i32 i32) -> ()` |
| 283 | `Hwvo.fdDe` | func | `(i32 i32) -> ()` |
| 284 | `Hwvo.kXfB` | func | `(i32 i32) -> ()` |
| 285 | `Hwvo.yRHY` | func | `(i32 i32 i32) -> ()` |
| 286 | `Hwvo.JJSx` | func | `(i32 i32 i32) -> ()` |
| 287 | `Hwvo.ZsEo` | func | `(i32 i32) -> ()` |
| 288 | `Hwvo.Eq6M` | func | `(i32 i32) -> ()` |
| 289 | `Hwvo.KLSN` | func | `(i32 i32) -> ()` |
| 290 | `Hwvo.ta1X` | func | `(i32 i32) -> ()` |
| 291 | `Hwvo.AJGV` | func | `(i32 i32) -> ()` |
| 292 | `Hwvo.cg3U` | func | `(i32 i32) -> ()` |
| 293 | `Hwvo.Edlg` | func | `(i32 i32) -> ()` |
| 294 | `Hwvo.Q7jQ` | func | `(i32 i32) -> ()` |
| 295 | `Hwvo.jlXu` | func | `(i32 i32) -> ()` |
| 296 | `Hwvo.R7M0` | func | `(i32 i32) -> ()` |
| 297 | `Hwvo.NuQK` | func | `(i32 i32) -> ()` |
| 298 | `Hwvo.D6Ia` | func | `(i32 i32) -> (i32)` |
| 299 | `Hwvo.UBQe` | func | `(i32 i32) -> ()` |
| 300 | `Hwvo.tv4q` | func | `(i32 i32 i32) -> ()` |
| 301 | `Hwvo.js8B` | func | `(i32 i32) -> ()` |
| 302 | `Hwvo.H6rW` | func | `(i32 i32) -> ()` |
| 303 | `Hwvo.K0Ro` | func | `(i32 i32) -> ()` |
| 304 | `Hwvo.E3ry` | func | `(i32 i32 i32) -> ()` |
| 305 | `Hwvo.HntL` | func | `(i32 i32) -> (i32)` |
| 306 | `Hwvo.oHMC` | func | `(i32 i32 i32) -> ()` |
| 307 | `Hwvo.ccHf` | func | `(i32 i32 i32) -> ()` |
| 308 | `Hwvo.fsOz` | func | `(i32 i32) -> ()` |
| 309 | `Hwvo.OzB4` | func | `(i32 i32) -> ()` |
| 310 | `Hwvo.Kkbf` | func | `(i32 i32) -> ()` |
| 311 | `Hwvo.kuZ5` | func | `(i32 i32) -> ()` |
| 312 | `Hwvo.wzQb` | func | `(i32 i32) -> (i32)` |
| 313 | `Hwvo.ty2m` | func | `(i32) -> (i32)` |
| 314 | `Hwvo.KJOc` | func | `(i32) -> (i32)` |
| 315 | `Hwvo.feHs` | func | `(i32) -> (i32)` |
| 316 | `Hwvo.iVlB` | func | `(i32) -> (i32)` |
| 317 | `Hwvo.g38B` | func | `(i32) -> (i32)` |
| 318 | `Hwvo.ajHa` | func | `(i32) -> (i32)` |
| 319 | `Hwvo.H2W6` | func | `(i32) -> (i32)` |
| 320 | `Hwvo.q9Gi` | func | `(i32) -> (i32)` |
| 321 | `Hwvo.kHVF` | func | `(i32) -> (i32)` |
| 322 | `Hwvo.vnc5` | func | `(i32) -> (i32)` |
| 323 | `Hwvo.aZor` | func | `(i32) -> (i32)` |
| 324 | `Hwvo.yP1z` | func | `(i32) -> (i32)` |
| 325 | `Hwvo.Kmpw` | func | `(i32) -> (i32)` |
| 326 | `Hwvo.nc5j` | func | `(i32) -> (i32)` |
| 327 | `Hwvo.uady` | func | `(i32) -> (f64)` |
| 328 | `Hwvo.cnLp` | func | `(i32) -> (f64)` |
| 329 | `Hwvo.DN4v` | func | `(i32) -> (i32)` |
| 330 | `Hwvo.lLTM` | func | `(i32) -> (f64)` |
| 331 | `Hwvo.WGxm` | func | `(i32) -> (i32)` |
| 332 | `Hwvo.zQ8d` | func | `(i32) -> (i32)` |
| 333 | `Hwvo.iJh6` | func | `(i32) -> (i32)` |
| 334 | `Hwvo.l2uN` | func | `(i32) -> (i32)` |
| 335 | `Hwvo.o2Lv` | func | `(i32) -> (i32)` |
| 336 | `Hwvo.fMVS` | func | `(i32) -> (i32)` |
| 337 | `Hwvo.HGOJ` | func | `(i32) -> (i32)` |
| 338 | `Hwvo.IxdP` | func | `(i32) -> (i32)` |
| 339 | `Hwvo.bp0m` | func | `(i32) -> (i32)` |
| 340 | `Hwvo.SnH6` | func | `(i32) -> (i32)` |
| 341 | `Hwvo.q7WX` | func | `(i32) -> (i32)` |
| 342 | `Hwvo.xgC7` | func | `(i32) -> (i32)` |
| 343 | `Hwvo.b0yM` | func | `(i32) -> (i32)` |
| 344 | `Hwvo.wzPX` | func | `(i32 i32 i32) -> (i32)` |
| 345 | `Hwvo.wl1E` | func | `() -> (i32)` |
| 346 | `Hwvo.KgCy` | func | `(i32 i32) -> ()` |
| 347 | `Hwvo.Tsl9` | func | `(i32 i32 i32) -> ()` |
| 348 | `Hwvo.i7w7` | func | `(i32 i32 i32) -> ()` |
| 349 | `Hwvo.WzjI` | func | `(i32 i32) -> (i32)` |
| 350 | `Hwvo.iv7h` | func | `(i32) -> (i32)` |
| 351 | `Hwvo.K2jl` | func | `(i32 i32 i32) -> (i32)` |
| 352 | `Hwvo.PtnJ` | func | `(i32) -> ()` |
| 353 | `Hwvo.uSka` | func | `(i32) -> (i32)` |
| 354 | `Hwvo.UAK2` | func | `(i32 i32) -> ()` |
| 355 | `Hwvo.yqFK` | func | `(i32) -> (i32)` |
| 356 | `Hwvo.uo0B` | func | `(i32) -> (i32)` |
| 357 | `Hwvo.jLGH` | func | `(i32) -> (i32)` |
| 358 | `Hwvo.BqRW` | func | `(i32) -> (i32)` |
| 359 | `Hwvo.H2dO` | func | `(i32) -> (i32)` |
| 360 | `Hwvo.m58q` | func | `(i32 i32) -> ()` |
| 361 | `Hwvo.X15A` | func | `(i32 i32) -> ()` |
| 362 | `Hwvo.StVQ` | func | `(i32 i32) -> ()` |
| 363 | `Hwvo.mgXI` | func | `(i32 i32) -> ()` |
| 364 | `Hwvo.JHlh` | func | `(i32 i32) -> ()` |
| 365 | `Hwvo.OU84` | func | `(i32 i32) -> ()` |
| 366 | `Hwvo.N9O7` | func | `(i32 i32) -> ()` |
| 367 | `Hwvo.IODW` | func | `(i32 i32 i32) -> ()` |
| 368 | `Hwvo.ZnUT` | func | `(i32 i32) -> ()` |
| 369 | `Hwvo.FbSn` | func | `(i32 i32) -> (i32)` |
| 370 | `Hwvo.D2p9` | func | `(i32) -> (i32)` |
| 371 | `Hwvo.ICgp` | func | `(i32) -> (i32)` |
| 372 | `Hwvo.Jcd1` | func | `(i32 i32) -> ()` |
| 373 | `Hwvo.gqiD` | func | `(i32) -> (i32)` |
| 374 | `Hwvo.tgQd` | func | `(i32 f64 f64) -> (i32)` |
| 375 | `Hwvo.POIr` | func | `(i32 i32 i32) -> (i32)` |
| 376 | `Hwvo.PYNC` | func | `(i32 i32) -> ()` |
| 377 | `Hwvo.ueLL` | func | `(i32) -> (i32)` |
| 378 | `Hwvo.ofGl` | func | `(i32) -> (i32)` |
| 379 | `Hwvo.d3hZ` | func | `(i32) -> (i32)` |
| 380 | `Hwvo.djn5` | func | `(i32) -> (i32)` |
| 381 | `Hwvo.OC7K` | func | `(i32) -> (i32)` |
| 382 | `Hwvo.BcEl` | func | `(i32) -> (i32)` |
| 383 | `Hwvo.eFCF` | func | `(i32 i32) -> ()` |
| 384 | `Hwvo.I7Lt` | func | `(i32 i32) -> (i32)` |
| 385 | `Hwvo.p26J` | func | `(i32 i32) -> (i32)` |
| 386 | `Hwvo.Qlj7` | func | `(i32 i32) -> (i32)` |
| 387 | `Hwvo.qMWd` | func | `(i32 i32) -> (i32)` |
| 388 | `Hwvo.iaG5` | func | `(i32 i32) -> (i32)` |
| 389 | `Hwvo.IC4U` | func | `(i32 i32) -> (i32)` |
| 390 | `Hwvo.ncF4` | func | `(f64) -> (i32)` |
| 391 | `Hwvo.BxXR` | func | `(i32 i32) -> (i32)` |
| 392 | `Hwvo.oVvv` | func | `(i32 i32) -> (i32)` |

## Exports

159 exported items — the API surface consumed by the JS glue:

| name | kind | index | type |
|---|---|---:|---|
| `fodl` | func | 3053 | `() -> ()` |
| `IX7r` | func | 1781 | `(i32 i32 i32 i32 i32 f32 i32) -> (i32)` |
| `yl9r` | func | 3125 | `(i32) -> (i32 i32)` |
| `CneC` | func | 1673 | `(i32 i32) -> ()` |
| `Ckwk` | func | 2553 | `(i32) -> (i32)` |
| `T0St` | func | 1922 | `(i32 i32 i32 i32) -> (i32)` |
| `Wjh7` | func | 659 | `(i32 i32 i32) -> (i32)` |
| `Gtzy` | func | 3113 | `(i32 i32) -> (i32 i32)` |
| `UmZJ` | func | 3114 | `(i32 i32) -> (i32 i32)` |
| `xuDP` | func | 2462 | `(i32 i32 i32 i32) -> (i32)` |
| `mmrI` | func | 2263 | `(i32 i32) -> (i32)` |
| `G6FK` | func | 1586 | `(i32 i32) -> (i32)` |
| `pEkS` | global | 2 | `` |
| `rFwb` | func | 2854 | `(i32) -> (i32)` |
| `YmBb` | func | 2576 | `(i32 i32) -> ()` |
| `Jc2v` | func | 1633 | `(i32 i32 i32 i32) -> (i32)` |
| `mvOH` | func | 1899 | `() -> (i32)` |
| `YneL` | func | 3080 | `(i32 i32 i32 i32) -> (i32)` |
| `RYHF` | func | 3235 | `(i32 i32 i32) -> ()` |
| `WKmZ` | func | 3177 | `(i32 i32 i32) -> ()` |
| `JJLy` | func | 2095 | `(i32 f64) -> (i32)` |
| `aQYt` | func | 1462 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `PJy8` | func | 1323 | `(i32 i32) -> (i32)` |
| `R6mn` | func | 2903 | `(i32) -> ()` |
| `DUIl` | func | 3127 | `(i32) -> (i32 i32)` |
| `HATT` | func | 2593 | `(i32) -> (i32)` |
| `zqtr` | func | 1398 | `(i32) -> ()` |
| `l50f` | func | 2334 | `(i32 i32) -> ()` |
| `I1qe` | func | 1366 | `(i32) -> (i32)` |
| `bJi6` | func | 2862 | `(i32) -> (i32)` |
| `lUBd` | func | 2149 | `(i32 i32) -> (i32)` |
| `Rfgh` | func | 2036 | `(i32) -> (i32)` |
| `oE1K` | func | 1906 | `(i32 f64 i32 i32 i32 i32 i32) -> (i32)` |
| `h0ca` | func | 3166 | `(i32 i32 i32 i32) -> ()` |
| `u8L0` | func | 2415 | `(i32 i32) -> (i32)` |
| `lTWX` | func | 1944 | `(i32 i32 f64 f64 f64) -> ()` |
| `oXOF` | func | 1960 | `(i32 i32) -> (i32)` |
| `OgUl` | func | 1372 | `(i32 i32) -> (i32)` |
| `vjJH` | func | 2038 | `(i32 i32 i32 i32) -> ()` |
| `Eyhj` | func | 1600 | `(i32 i32) -> (i32)` |
| `b4K0` | func | 1599 | `(i32 i32) -> (i32)` |
| `No0a` | func | 846 | `(i32 i32 i32) -> (i32)` |
| `YAgs` | func | 1572 | `(i32 i32) -> (i32)` |
| `ipFt` | func | 2469 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 f64 i32 i32) -> (i32)` |
| `So3r` | func | 2577 | `(i32) -> (i32)` |
| `JRlx` | func | 3290 | `() -> (f64)` |
| `P4F1` | func | 1561 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `jO4G` | func | 1345 | `(i32 i32 i32) -> ()` |
| `dlVv` | func | 3104 | `(i32 i32 i32) -> (i32 i32)` |
| `EGGE` | func | 1975 | `(i32) -> ()` |
| `DHwL` | func | 1197 | `(i32 i32) -> ()` |
| `b5r6` | func | 3244 | `(i32) -> ()` |
| `nRDl` | func | 2675 | `() -> (i32)` |
| `FDnM` | func | 3112 | `(i32 i32) -> (i32 i32)` |
| `F5mu` | func | 3126 | `(i32) -> (i32 i32)` |
| `hpVX` | func | 3140 | `() -> (i32 i32)` |
| `l48G` | func | 827 | `(i32 i32 i32 i32) -> (i32)` |
| `Uidb` | func | 1556 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `RH9H` | func | 2416 | `(i32 i32) -> (i32)` |
| `XjoD` | func | 2594 | `(i32) -> (i32)` |
| `vzyo` | func | 2560 | `(i32) -> (i32)` |
| `HycH` | func | 1646 | `(i32) -> (i32)` |
| `OX39` | func | 2507 | `(i32) -> (i32)` |
| `Fgby` | func | 1674 | `(i32 i32) -> ()` |
| `Kxip` | func | 1253 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `kVJ8` | func | 3116 | `(i32 i32) -> (i32 i32)` |
| `U7pr` | global | 1 | `` |
| `Q1eO` | func | 2575 | `(i32) -> (i32)` |
| `IhXT` | func | 1613 | `(i32 i32 i32) -> (i32)` |
| `zFQ3` | func | 2926 | `(i32) -> (i32)` |
| `tFOh` | func | 2555 | `(i32) -> (i32)` |
| `QPIM` | func | 2128 | `(i32 i32) -> ()` |
| `nKRV` | func | 3246 | `() -> ()` |
| `f5HT` | func | 2414 | `(i32 i32) -> (i32)` |
| `OEfp` | func | 3319 | `() -> (i32)` |
| `FTwK` | func | 2583 | `(i32) -> (i32)` |
| `EyIA` | func | 1518 | `() -> (i32)` |
| `VChJ` | func | 2674 | `(i32 i32) -> ()` |
| `UEd9` | func | 771 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `cgZ0` | func | 3104 | `(i32 i32 i32) -> (i32 i32)` |
| `K1aA` | func | 896 | `(i32 i32) -> (i32)` |
| `GBEN` | func | 2592 | `(i32) -> (i32)` |
| `okGk` | func | 1602 | `(i32 f64) -> (f64)` |
| `aPmE` | func | 3318 | `() -> (i32)` |
| `ld1j` | func | 2536 | `(i32) -> (i32)` |
| `Vaxk` | func | 3117 | `(i32 i32) -> (i32 i32)` |
| `bTMD` | func | 834 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` |
| `gKVI` | func | 1292 | `(i32 i32 f64 f64 f64) -> (i32)` |
| `MrQW` | func | 2585 | `(i32 i32) -> (i32)` |
| `DAh7` | func | 830 | `(i32) -> (i32)` |
| `o0Rp` | func | 1717 | `(i32 i32 i32 i32) -> (i32)` |
| `Ks5q` | func | 2561 | `(i32) -> (i32)` |
| `n3qJ` | func | 1463 | `(i32 f64 f64) -> (i32)` |
| `uvPx` | func | 760 | `(i32 i32) -> (i32)` |
| `bdUm` | func | 3205 | `() -> (i32)` |
| `jZZD` | func | 2535 | `(i32 i32) -> ()` |
| `dLGy` | func | 2570 | `(i32 i32) -> ()` |
| `retb` | func | 798 | `(i32 i32) -> (i32)` |
| `zRuq` | func | 1678 | `(i32 f64 f64 f64) -> (i32)` |
| `ixfZ` | func | 2879 | `(i32) -> (i32)` |
| `MJQG` | func | 3104 | `(i32 i32 i32) -> (i32 i32)` |
| `memory` | memory | 0 | `` |
| `Y23z` | func | 1949 | `(i32 i32) -> ()` |
| `NQfZ` | func | 3115 | `(i32 i32) -> (i32 i32)` |
| `A1R7` | func | 968 | `(i32 i32 i32 i32 i32) -> (i32)` |
| `OmIy` | func | 3104 | `(i32 i32 i32) -> (i32 i32)` |
| `U4xk` | func | 1565 | `(i32 i32 i32 i32) -> (i32)` |
| `oUZJ` | func | 1663 | `(i32 i32) -> (i32)` |
| `dGBj` | func | 3128 | `(i32) -> (i32 i32)` |
| `vpct` | func | 3073 | `(i32 i32) -> (i32)` |
| `PQ7j` | func | 2559 | `(i32) -> (i32)` |
| `YoZW` | func | 1513 | `(i32 f64 f64 f64 f64 f64 f64 f64) -> (f64)` |
| `T96A` | func | 704 | `(i32 i32 i32 i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `xXHD` | func | 2361 | `(i32 i32) -> ()` |
| `FQFi` | func | 986 | `(i32 i32 f64 f64 f64 i32) -> (i32)` |
| `fYz7` | func | 2574 | `(i32) -> (i32)` |
| `fBy8` | func | 2642 | `() -> (i32)` |
| `WpfF` | func | 1540 | `(i32 i32 i32 i32) -> ()` |
| `bB6G` | func | 2554 | `(i32) -> (i32)` |
| `Trp6` | func | 2019 | `(i32) -> (i32)` |
| `xfoC` | func | 997 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `sCX4` | func | 2070 | `(i32 i32) -> ()` |
| `A3Hl` | func | 2556 | `(i32) -> (i32)` |
| `pjtb` | func | 1828 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `IJfC` | func | 3295 | `(i32) -> ()` |
| `E98D` | func | 1293 | `(i32 i32 i32 i32) -> (i32)` |
| `fvnL` | func | 1803 | `(i32) -> (i32)` |
| `OSrx` | func | 3141 | `() -> (i32 i32)` |
| `Usck` | func | 1967 | `(i32 f64 f64 f64 f32 f32 f32) -> (i32)` |
| `AzYB` | func | 2413 | `(i32 i32) -> (i32)` |
| `yacW` | func | 3086 | `(i32 i32) -> ()` |
| `s2Hu` | func | 3124 | `(i32) -> (i32 i32)` |
| `gc0X` | func | 3294 | `(i32) -> (i32)` |
| `yySI` | func | 1341 | `(i32 i32 i32) -> (i32)` |
| `lfm2` | func | 1300 | `(i32 i32 i32 i32 i32 i32 f64) -> (i32)` |
| `jtbE` | func | 969 | `(i32 i32) -> (i32)` |
| `JI5K` | func | 1566 | `(i32) -> (i32)` |
| `YxdS` | func | 2552 | `(i32) -> (i32)` |
| `BPRc` | func | 1974 | `(i32) -> ()` |
| `LtfS` | func | 1412 | `(i32 i32 i32) -> (i32)` |
| `yydV` | func | 3175 | `(i32 i32 i32) -> (i32)` |
| `xE5H` | func | 2625 | `(i32 i32) -> ()` |
| `S4f7` | func | 2551 | `(i32) -> (f64)` |
| `YL43` | func | 3111 | `(i32 i32) -> (i32 i32)` |
| `cBuq` | func | 1822 | `(i32 i32 i32 i32 i32 i32) -> (i32)` |
| `qJY9` | func | 2490 | `(i32) -> (i32)` |
| `XGI1` | func | 2335 | `(i32 f64) -> (i32)` |
| `qzR2` | func | 2224 | `(i32 i32) -> (i32)` |
| `DoFV` | func | 1841 | `(i32 i32) -> (i32)` |
| `HY9L` | func | 2557 | `(i32) -> (i32)` |
| `Vx31` | func | 2283 | `(i32 i32 i32 i32 i32 i32 i32 i32) -> (i32)` |
| `cSC2` | func | 2584 | `(i32 i32) -> (i32)` |
| `cOtp` | func | 2448 | `(i32 i32) -> (i32)` |
| `KJvQ` | func | 2558 | `(i32) -> ()` |
| `jVcP` | func | 1196 | `(i32 i32) -> (i32)` |
| `B6Fr` | func | 2111 | `(i32 f64 f64 f64) -> (i32)` |
| `MacD` | func | 1487 | `(i32 i32) -> (i32)` |
| `zGU1` | func | 3103 | `(i32 i32 i32) -> (i32 i32)` |
| `Rvsp` | func | 2890 | `(i32) -> (i32)` |

> Note: export identifiers in Bloxd wasm builds are randomly re-assigned each build; use signatures and counts for comparisons.

## Memory, tables, globals

- table 0: funcref · min 838 · max 838
- globals: 3 (1 mutable); sample: `i32` = i32.const 1048576, `i32` = i32.const 2244632, `i32` = i32.const 2245196

## Functions

- 2,939 bodies · 4,038,717 code bytes · avg 1.3 KB
- instruction scan: 2,939 bodies fully decoded, 0 degraded (unknown/extension opcodes)

| Body size | Functions |
|---|---:|
| <= 32 bytes | 171 |
| <= 64 bytes | 114 |
| <= 128 bytes | 275 |
| <= 256 bytes | 384 |
| <= 512 bytes | 666 |
| <= 1024 bytes | 583 |
| <= 2048 bytes | 411 |
| <= 4096 bytes | 181 |
| <= 8192 bytes | 92 |
| <= 16384 bytes | 27 |
| > 16384 bytes | 35 |

Largest functions:

| # | type | locals | body bytes | instructions | dominant opcodes |
|---:|---|---:|---:|---:|---|
| 0 | `(i32 i32 i32 i32 i32) -> ()` | 149 | 122,454 | 58,848 | local.get×16652, i32.const×7053, i32.add×3403, local.set×3378, i32.load×3112 |
| 1 | `(i32 i32 i32 i32) -> ()` | 213 | 194,439 | 88,270 | local.get×25875, i32.const×9894, i32.load×5634, local.set×4730, local.tee×4633 |
| 2 | `(i32 i32 i32 i32 i32 i32) -> ()` | 132 | 56,181 | 25,576 | local.get×7556, i32.const×3392, local.set×1404, i32.add×1302, i32.load×1164 |
| 3 | `(i32 i32) -> ()` | 125 | 48,862 | 22,528 | local.get×6337, i32.const×2249, local.set×1324, local.tee×1179, i32.load×1037 |
| 4 | `(i32 i32 i32) -> ()` | 66 | 31,468 | 14,007 | local.get×4107, i32.const×1881, i32.load×884, i32.add×645, local.set×620 |
| 5 | `(i32 i32) -> ()` | 59 | 29,655 | 14,267 | local.get×4192, i32.const×1730, i32.load×1042, local.set×931, i32.add×815 |
| 6 | `(i32 i32) -> ()` | 90 | 26,044 | 12,563 | local.get×3702, i32.const×1379, local.set×779, i32.load×721, local.tee×698 |
| 7 | `(i32 i32 i32 i32 i32) -> ()` | 135 | 32,562 | 16,141 | local.get×4566, i32.const×2205, local.set×1141, i32.add×1062, local.tee×800 |
| 8 | `(i32 i32 i32 i32 i32) -> ()` | 58 | 21,485 | 10,526 | local.get×2903, i32.const×1490, local.set×728, i32.add×591, local.tee×504 |
| 10 | `(i32 i32 i32 i32) -> ()` | 105 | 26,545 | 12,837 | local.get×3810, i32.const×1624, local.set×997, i32.add×682, i32.load×663 |
| 11 | `(i32 i32 i32 i32 i32 i32) -> ()` | 177 | 20,026 | 9,398 | local.get×2934, i32.const×1038, local.set×621, i32.add×458, i32.load×421 |
| 12 | `(i32 i32 i32 i32) -> ()` | 53 | 24,505 | 11,634 | local.get×3005, i32.const×1276, local.tee×731, end×592, i32.load×586 |
| 14 | `(i32 i32 i32 i32 i32 i32) -> ()` | 126 | 19,829 | 8,878 | local.get×2493, i32.const×1113, local.set×430, local.tee×385, i32.load×382 |
| 17 | `(i32 i32) -> ()` | 96 | 31,835 | 14,861 | local.get×4482, i32.const×1910, i32.add×763, local.set×692, i32.load×669 |
| 19 | `(i32 i32 i64 i32 i32 i64 i32 i32) -> ()` | 93 | 21,125 | 8,077 | local.get×3017, i32.const×946, i64.store×844, i32.store×655, i64.const×513 |
| 21 | `(i32 i32) -> ()` | 82 | 29,024 | 13,043 | local.get×4618, i32.const×1456, i32.store×702, i32.add×689, local.tee×645 |
| 22 | `(i32 i32 i32 i32 i32 i32 i32) -> ()` | 64 | 24,289 | 11,198 | local.get×2682, i32.const×1711, local.set×821, end×663, block×465 |
| 25 | `(i32 i32 i32 i32 i32) -> ()` | 68 | 22,714 | 10,576 | local.get×3337, i32.const×1240, local.tee×731, i32.add×436, local.set×333 |
| 42 | `(i32 i32 i32 i32 i32) -> ()` | 83 | 27,357 | 12,852 | local.get×3663, i32.const×1861, i32.add×764, local.set×695, end×575 |
| 60 | `(i32 i32 i32 i32 i32 i32 i32) -> (i32)` | 99 | 32,154 | 15,014 | local.get×4317, i32.const×1963, i32.load×986, local.set×902, i32.add×812 |
| 192 | `(i32 i32) -> ()` | 10 | 26,597 | 12,807 | local.get×4506, i32.load×1211, i32.const×1022, end×797, i32.add×734 |
| 220 | `(i32) -> ()` | 19 | 23,160 | 10,851 | local.get×2722, i32.load×1494, i32.const×1177, local.tee×1008, end×853 |
| 704 | `(i32 i32 i32 i32) -> ()` | 54 | 21,810 | 10,215 | local.get×2971, i32.const×1257, i32.load×778, i32.add×634, br_if×536 |
| 993 | `(i32 i32) -> ()` | 138 | 42,517 | 20,065 | local.get×5230, i32.const×2314, local.tee×1187, i32.add×1060, local.set×1007 |
| 1007 | `(i32 i32) -> (i32)` | 41 | 19,765 | 7,699 | local.get×2488, i32.const×836, i64.store×586, i32.load×386, local.set×356 |
| 1567 | `(i32 i32) -> (i32)` | 180 | 54,461 | 19,757 | local.get×6549, i32.const×2619, i64.store×1893, i64.const×1069, i64.load×1044 |
| 1960 | `(i32 i32) -> ()` | 110 | 38,696 | 17,216 | local.get×5028, i32.const×1620, local.set×859, local.tee×753, end×661 |
| 2597 | `(i32 i32) -> ()` | 397 | 142,149 | 64,171 | local.get×18429, i32.const×8004, local.set×3839, i32.load×3164, end×2815 |
| 2887 | `(i32 i32 i32 i32) -> ()` | 137 | 30,443 | 13,878 | local.get×4157, i32.const×1460, local.tee×728, local.set×674, i32.load×609 |
| 2906 | `(i32 i32) -> ()` | 136 | 33,882 | 15,183 | local.get×4267, i32.const×2015, local.set×798, local.tee×742, i32.add×699 |

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
fs_mesh_0040d000053_l7fs_mesh_0040d040073_l3fs_mesh_0040d040073_l7fs_mesh_0040d0b0053_l1fs_mesh_0040d0b0073_l1fs_mesh_0042d040072_l3fs_mesh_0044b0b0073fs_mesh_0044d000053_l3fs_mesh_0044d000053_l7fs_me
ue:keydownkeyupmousedownmouseuptouchstarttouchendotherMouse1Mouse2Mouse3Alt+Left ClickF2F4F5F8F9Digit0Digit1Digit2Digit3Digit4Digit5Digit6Digit7Digit8Digit9KeyQKeyWKeyEKeyRKeyTKeyYKeyUKeyIKeyOKeyPKeyA
targetcolourmaxUpSpeedforceinclinationazimuthturbidityluminancemieCoefficientmieDirectionalGsunPositionvertexTintxCameraOffsetyCameraOffsetzCameraOffsetditheringinfiniteDistanceuseSunPositionrgba(tran
r8unormr8snormr8uintr8sintr16unormr16snormr16uintr16sintr16floatrg8unormrg8snormrg8uintrg8sintr32uintr32sintr32floatrg16unormrg16snormrg16uintrg16sintrg16floatrgba8unormrgba8unorm-srgbrgba8snormrgba8u
schema023canChangeblockReachezBridgingezBridgingGrowMsezToweringezToweringGrowMscrouchingSpeedwalkingSpeedrunningSpeedjumpAmountairJumpCountjumpHoldThrustbunnyhopMaxMultiplierskyBoxminChunkAddDistshow
Aspen LeavesAspen LogAspen SaplingAspen Wood PlanksBarkless Aspen LogBarkless Cedar LogBarkless Jungle LogBarkless Maple LogBarkless Pine LogBarkless Plum LogBlack PlanksBlue PlanksBookshelfBowl of Cr
Acacia LeavesAcacia LogAcacia SaplingAcacia Wood PlanksAlchemy TableBarkless Acacia LogBarkless Birch LogBarkless Dark Oak LogBarkless Elm LogBarkless Oak LogBarkless Spruce LogBirch LeavesBirch LogBi
maxTextureDimension1DmaxTextureDimension2DmaxTextureDimension3DmaxTextureArrayLayersmaxBindGroupsmaxBindGroupsPlusVertexBuffersmaxBindingsPerBindGroupmaxDynamicUniformBuffersPerPipelineLayoutmaxDynami
R8UnormR8SnormR8UintR8SintR16UintR16SintR16UnormR16SnormR16FloatRg8UnormRg8SnormRg8UintRg8SintR32UintR32SintR32FloatRg16UintRg16SintRg16UnormRg16SnormRg16FloatRgba8UnormRgba8UnormSrgbRgba8SnormRgba8Ui
standingsittingzombieglidingdrivingsleepingridingShearedSaddledskyblockHeldBossBoxBloxdBlockPersonLeaderboardParticleEmitterTier 1Tier 2Tier 3Tier 4Tier 5PlayerPigCowSheepHorseCamelIron Goofy GolemGol
flag testalpha * baseColor.abaseColor.abloxdSpGlintTier(v.vEnchantHsvAndTick.xyz)enchantmentColour(v.vEnchantHsvAndTick, v.vEnchantLocalPos, baseColor.rgb)bloxdSpEnchantSpeedbloxdSpLocalvec4f(v.vOverl
```

## Opcode histogram (aggregated)

| opcode | count |
|---|---:|
| `local.get` | 540,006 |
| `i32.const` | 227,243 |
| `local.tee` | 99,336 |
| `local.set` | 94,270 |
| `i32.load` | 93,188 |
| `i32.add` | 87,005 |
| `end` | 79,143 |
| `br_if` | 63,611 |
| `i32.store` | 46,880 |
| `block` | 37,232 |
| `i64.store` | 32,718 |
| `i64.const` | 32,047 |
| `if` | 30,271 |
| `call` | 30,099 |
| `i64.load` | 24,280 |
| `i32.sub` | 24,056 |
| `br` | 23,173 |
| `i32.eqz` | 18,985 |
| `select` | 16,691 |
| `i32.and` | 16,273 |
| `i32.shl` | 16,191 |
| `i32.ne` | 15,646 |
| `i32.load8_u` | 15,193 |
| `i32.eq` | 13,699 |
| `i32.store8` | 13,395 |

## Custom sections

- `name` · 25 bytes

## Analysis quality

- sections consumed: 11, structural errors: 0
- bodies fully decoded: 2,939/2,939 (degraded: 0)
